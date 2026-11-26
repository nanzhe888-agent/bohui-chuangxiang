import type { Metadata } from "next";
import { BriefForm } from "@/components/BriefForm";
import { EngagementModels } from "@/components/EngagementModels";
import { PageHero } from "@/components/PageHero";
import { WeChatButton } from "@/components/WeChatModal";
import { Scene } from "@/components/Scene";
import { bohuiPrep, schoolPrep, startModes } from "@/lib/content";

export const metadata: Metadata = {
  title: "开始合作",
  description:
    "从一个学院、一个项目、一个可定义的问题开始。诊断表可以复制，也可以提交到本站的预约接口。",
};

export default function StartPage() {
  return (
    <>
      <PageHero
        eyebrow="START"
        folio="07"
        title="从一个学院、一个项目、一个可定义的问题开始。"
        lede="我们建议先确定服务范围、审批人和交付物，再讨论周期与费用。不必从全案起步。"
      />

      <section className="band band-tight" aria-labelledby="modes-title">
        <div className="wrap">
          <p className="eyebrow">THREE WAYS</p>
          <h2 id="modes-title">三种开始方式</h2>
          <p className="lede">具体组合以书面范围为准。这不是套餐承诺。</p>
          <ol className="icon-grid cols-3">
            {startModes.map((item, index) => (
              <li key={item.title}>
                <span className="disc">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band" aria-labelledby="prep-title">
        <div className="wrap profile-mast">
          <Scene
            className="profile-photo"
            src="/photos/desk.jpg"
            alt="整理项目资料的桌面"
          />
          <div>
            <p className="eyebrow">BEFORE WE START</p>
            <h2 id="prep-title">学院启动前准备</h2>
            <ul className="plain-list">
              {schoolPrep.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3>博汇启动阶段负责</h3>
            <ul className="plain-list">
              {bohuiPrep.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <EngagementModels />
      <section className="band band-ice" aria-labelledby="brief-title">
        <div className="wrap">
          <p className="eyebrow">FORM</p>
          <h2 id="brief-title">准备这次诊断</h2>
          <div className="callout">
            <p>
              填写后可以复制《学院初步诊断需求单》，也可以提交预约。提交会请求本站相对路径 /api/inquiry。若该接口尚未接入，页面会说明请求没有送达，复制仍然可用。请勿填写学生个人敏感信息或未公开的招生数据。
            </p>
            <p className="page-links">
              <WeChatButton />
            </p>
          </div>
          <BriefForm />
        </div>
      </section>
    </>
  );
}
