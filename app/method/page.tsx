import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { RiskBar } from "@/components/RiskBar";
import { Scene } from "@/components/Scene";
import { boundaries, methodFaqs, methodSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "方法与边界",
  description:
    "博汇创想先把事实、授权和验收口径说清楚。八步工作方法，以及六条合作边界。",
};

export default function MethodPage() {
  return (
    <>
      <PageHero
        eyebrow="METHOD"
        folio="05"
        title="先把事实、授权和验收口径说清楚，再开始项目。"
        lede="高校传播出问题，往往不是发得不够多，而是口径不一、来源不清、无法复盘。博汇创想按可审核的方法工作，并把做不到的事情提前写明。"
      />

      <section className="band reveal" aria-labelledby="path-title">
        <div className="wrap">
          <h2 id="path-title" className="section-title">
            方法路径
            <span>Path</span>
          </h2>
          <ol className="pathline">
            {["问题识别", "授权与监测", "内容与覆盖", "报告交付"].map((item) => (
              <li key={item}>
                <strong>{item}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band band-dark reveal" aria-labelledby="steps-title">
        <div className="wrap profile-mast">
          <Scene
            className="profile-photo"
            src="/photos/meeting.jpg"
            alt="会上整理工作步骤"
          />
          <div>
            <p className="eyebrow">EIGHT STEPS</p>
            <h2 id="steps-title">工作方法</h2>
            <ol className="way-list">
              {methodSteps.map((item) => (
                <li key={item.index}>
                  <span>{item.index}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <RiskBar />
      <section className="band band-ice" aria-labelledby="bounds-title">
        <div className="wrap">
          <p className="eyebrow">BOUNDARIES</p>
          <h2 id="bounds-title">六条合作边界</h2>
          <ol className="bound-grid">
            {boundaries.map((item) => (
              <li key={item.index}>
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band" aria-labelledby="faq-title">
        <div className="wrap faq-layout">
          <div>
            <p className="eyebrow">QUESTIONS</p>
            <h2 id="faq-title">先写明做不到的事</h2>
            <div className="faq">
              {methodFaqs.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
            <p className="page-links">
              <Link className="text-link" href="/services">
                边界如何落在服务里
              </Link>
              <Link className="text-link" href="/start">
                开始合作沟通
              </Link>
            </p>
          </div>
          <Scene src="/photos/library.jpg" alt="图书馆书架" />
        </div>
      </section>
    </>
  );
}
