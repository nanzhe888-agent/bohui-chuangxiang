import type { Metadata } from "next";
import Link from "next/link";
import { ClientEntry } from "@/components/ClientEntry";
import { PageHero } from "@/components/PageHero";
import { PlatformVignette } from "@/components/PlatformVignette";
import { Scene } from "@/components/Scene";
import { platformIsNot, platformReceives, platformSupports } from "@/lib/content";

export const metadata: Metadata = {
  title: "客户服务平台",
  description:
    "博汇创想内部客户服务工作台用于内容情报整理、工单协作、审核记录和报告交付。它不是舆情产品，也不替代学院招生系统。",
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="PLATFORM"
        folio="04"
        title="让学院看见项目如何被推进，而不是只在结束时收到一叠材料。"
        lede="博汇创想已有内部客户服务工作台，用于内容情报整理、工单协作、审核记录和报告交付。它是服务交付的基础设施，不是面向社会的舆情产品，也不是学院招生管理系统。"
      />

      <section className="band band-tight" aria-labelledby="supports-title">
        <div className="wrap profile-mast">
          <div>
            <p className="eyebrow">WHAT IT SUPPORTS</p>
            <h2 id="supports-title">工作台实际支撑</h2>
            <ul className="plain-list">
              {platformSupports.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3>学院侧通常会收到</h3>
            <ul className="plain-list">
              {platformReceives.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Scene
            className="profile-photo"
            src="/photos/desk.jpg"
            alt="整理交付文稿的桌面"
          />
        </div>
      </section>

      <section className="band band-ice" aria-labelledby="schematic-title">
        <div className="wrap vignette-layout">
          <div>
            <p className="eyebrow">SCHEMATIC</p>
            <h2 id="schematic-title">界面只说明结构。</h2>
            <p className="lede">
              右图是产品界面示意，用来表明字段如何排列。它不是某个学院的项目，也不含任何业绩。覆盖比例、粉丝、花费和结果，都不在这张图里。示意图不代表已向客户开放示意图之外的全部功能。
            </p>
          </div>
          <PlatformVignette />
        </div>
      </section>

      <section className="band" aria-labelledby="not-title">
        <div className="wrap">
          <p className="eyebrow">LIMITS</p>
          <h2 id="not-title">这不是什么</h2>
          <ol className="bound-grid">
            {platformIsNot.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
          <div className="callout">
            <p>
              仅处理协议范围内、已授权的资料与公开信息。学生个人信息、申请材料与录取结果如涉及，按最小必要和校方要求处理。小红书开放平台一期不超出 basic_info。
            </p>
          </div>
          <p className="page-links">
            <Link className="text-link" href="/services">
              返回服务说明
            </Link>
            <Link className="text-link" href="/method">
              阅读方法与边界
            </Link>
          </p>
        </div>
      </section>

      <section className="band tone-ink">
        <div className="wrap narrow">
          <ClientEntry />
        </div>
      </section>
    </>
  );
}
