import type { Metadata } from "next";
import Link from "next/link";
import { DeliverySamples } from "@/components/DeliverySamples";
import { PageHero } from "@/components/PageHero";
import { Scene } from "@/components/Scene";
import { scenes } from "@/lib/content";

export const metadata: Metadata = {
  title: "服务场景",
  description:
    "四个方法场景：授权后的小红书监测、招生节点的选题与内容日历、AI 可见度的基线与复测、可传阅的阶段报告。这些不是客户成绩单。",
};

export default function ScenesPage() {
  return (
    <>
      <PageHero
        eyebrow="SCENES"
        folio="03"
        title="用方法场景说明工作方式。以下不是客户成绩单。"
        lede="在获得书面授权前，我们不展示具名院校。下面四个场景说明典型问题、动作、交付和边界。"
      />
      <section className="band band-tight">
        <div className="wrap scene-stack">
          {scenes.map((item, index) => (
            <article
              key={item.id}
              id={item.id}
              className={index % 2 === 1 ? "scene-case is-flip" : "scene-case"}
            >
              <Scene className="scene-hero" src={item.photo} alt={item.alt} />
              <div className="scene-copy">
                <p className="eyebrow">方法场景 {item.index}</p>
                <h2>{item.title}</h2>
                <h3>问题</h3>
                <p>{item.problem}</p>
                <h3>动作</h3>
                <p>{item.action}</p>
                <h3>交付</h3>
                <ul>
                  {item.deliverables.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <h3>边界</h3>
                <p>{item.boundary}</p>
                <h3>较常适用于</h3>
                <p>{item.fits}</p>
              </div>
            </article>
          ))}
          <p className="lede">
            如需把上述方法应用到具体学院项目，请到「开始合作」填写诊断需求单。对公合作邮箱见页脚。
          </p>
          <p className="page-links">
            <Link className="btn btn-pill" href="/start">
              开始合作沟通
            </Link>
            <Link className="text-link" href="/services">
              回到服务说明
            </Link>
          </p>
        </div>
      </section>
      <DeliverySamples />
    </>
  );
}
