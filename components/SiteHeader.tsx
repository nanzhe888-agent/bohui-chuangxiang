"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { company, nav } from "@/lib/site";

const links = [{ href: "/", label: "首页", en: "HOME", index: "01" }, ...nav];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const main = document.getElementById("main");
    const footer = document.querySelector(".site-footer");
    if (!open) {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    firstLinkRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [open]);

  return (
    <header className={solid || open ? "site-header is-solid" : "site-header"}>
      <a className="skip" href="#main">
        跳到正文
      </a>
      <div className="header-inner">
        <Link href="/" className="wordmark" aria-current={pathname === "/" ? "page" : undefined}>
          <span className="logo-mark" aria-hidden="true" />
          {company.brand}
        </Link>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-lines" aria-hidden="true" />
          {open ? "关闭" : "菜单"}
        </button>
        <nav id={panelId} className={open ? "nav-panel is-open" : "nav-panel"} aria-label="主导航">
          {links.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              ref={index === 0 ? firstLinkRef : undefined}
              className="nav-link"
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
