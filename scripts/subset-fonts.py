#!/usr/bin/env python3
"""Rebuild self-hosted font subsets from the site source.

Source files are downloaded into /tmp/bohui-font-src and are not committed.
The committed files live in fonts/ and already contain the glyphs used on the site.
"""

from __future__ import annotations

import pathlib
import urllib.request

from fontTools.ttLib import TTFont

ROOT = pathlib.Path(__file__).resolve().parents[1]
OUT = ROOT / "fonts"
SRC = pathlib.Path("/tmp/bohui-font-src")

SOURCES = {
    "noto-sans-sc-400.woff2": "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-sc@5.2.8/chinese-simplified-400-normal.woff2",
    "noto-sans-sc-500.woff2": "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-sc@5.2.8/chinese-simplified-500-normal.woff2",
    "noto-sans-sc-300.woff2": "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-sc@5.2.8/chinese-simplified-300-normal.woff2",
    "noto-sans-sc-700.woff2": "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-sc@5.2.8/chinese-simplified-700-normal.woff2",
}

PLEX = {
    "plus-jakarta-sans-300.woff2": "https://cdn.jsdelivr.net/fontsource/fonts/plus-jakarta-sans@5.2.6/latin-300-normal.woff2",
    "plus-jakarta-sans-500.woff2": "https://cdn.jsdelivr.net/fontsource/fonts/plus-jakarta-sans@5.2.6/latin-500-normal.woff2",
    "plus-jakarta-sans-700.woff2": "https://cdn.jsdelivr.net/fontsource/fonts/plus-jakarta-sans@5.2.6/latin-700-normal.woff2",
}


def chars_from_source() -> str:
    blob = []
    for path in ROOT.rglob("*"):
        if "node_modules" in path.parts or ".next" in path.parts or "fonts" in path.parts:
            continue
        if path.suffix.lower() not in {".tsx", ".ts", ".css", ".md", ".svg", ".py"}:
            continue
        blob.append(path.read_text(encoding="utf-8"))
    extra = "“”‘’—…·×／～《》【】＋－％①②③④⑤⑥⑦⑧⑨⑩"
    return "".join(sorted(set("".join(blob) + extra)))


def download(url: str, dest: pathlib.Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.exists() and dest.stat().st_size > 0:
        return
    urllib.request.urlretrieve(url, dest)


def subset(src: pathlib.Path, dest: pathlib.Path, text: str) -> None:
    from fontTools.subset import Subsetter, Options

    font = TTFont(src)
    options = Options()
    options.flavor = "woff2"
    options.layout_features = ["*"]
    options.desubroutinize = True
    subsetter = Subsetter(options=options)
    subsetter.populate(text=text)
    subsetter.subset(font)
    dest.parent.mkdir(parents=True, exist_ok=True)
    font.save(dest)
    font.close()


def main() -> None:
    SRC.mkdir(parents=True, exist_ok=True)
    text = chars_from_source()
    (SRC / "chars.txt").write_text(text, encoding="utf-8")
    for name, url in SOURCES.items():
        src = SRC / name
        download(url, src)
        subset(src, OUT / name, text)
        print(name, (OUT / name).stat().st_size)
    for name, url in PLEX.items():
        dest = OUT / name
        download(url, dest)
        print(name, dest.stat().st_size)


if __name__ == "__main__":
    main()
