import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

export default function NotFound() {
  return (
    <section className="band tone-ink not-found">
      <div className="wrap">
        <Eyebrow>404</Eyebrow>
        <h1>这一页不在目录里。</h1>
        <p className="lede">地址可能写错了，或者这一页从未发布。</p>
        <p>
          <Link className="btn" href="/">
            回到首页
            <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
