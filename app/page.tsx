import Image from "next/image";
import Link from "next/link";
import { DeliverySamples } from "@/components/DeliverySamples";
import { EngagementModels } from "@/components/EngagementModels";
import { RiskBar } from "@/components/RiskBar";
import { Scene } from "@/components/Scene";
import { audiences, fiveQuestions, homeDeliverables, scenes, shifts } from "@/lib/content";
import { company } from "@/lib/site";

const path = ["问题识别", "授权与监测", "内容与覆盖", "报告交付"];

export default function HomePage() {
  return (
    <>
      <section className="cine" aria-labelledby="hero-title">
        <Image
          className="cine-photo"
          src="/photos/campus.jpg"
          alt="蓝天下的校园建筑"
          fill
          priority
          sizes="100vw"
        />
        <div className="cine-shade" aria-hidden="true" />
        <div className="cine-copy">
          <p className="eyebrow">{company.brand}</p>
          <h1 id="hero-title">
            让高校的价值，
            <br />
            被看见。被理解。
          </h1>
          <p className="cine-zh">先被准确理解，再被认真选择。</p>
          <p className="cine-en" lang="en">
            Seen clearly. Understood correctly.
          </p>
          <div className="cine-actions">
            <Link className="btn" href="/services">
              查看服务方法
            </Link>
            <Link className="btn" href="/start">
              开始合作沟通
            </Link>
          </div>
        </div>
      </section>

      <section className="band reveal" aria-labelledby="shift-title">
        <div className="wrap intro-split">
          <div>
            <h2 id="shift-title">学院正在面对的变化</h2>
            <p className="en-label">The path</p>
          </div>
          <div>
            <p>招生决策，已经变成多入口的验证过程。</p>
            <div className="rule" />
            {shifts.map((item) => (
              <p key={item.index} className="lede">
                <strong>{item.title}。</strong>
                {item.body}
              </p>
            ))}
            <p className="lede">
              学生选择一个项目，很少只看一次官网。他们会在小红书里寻找体验，在搜索和 AI 里核对条件，再决定是否咨询。学院要管理的，不是单次曝光，而是这条需要被看清、被解释、被接住的路径。
            </p>
          </div>
        </div>
      </section>

      <section className="band band-dark reveal" aria-labelledby="audience-title">
        <div className="wrap">
          <h2 id="audience-title" className="section-title">
            为谁服务
            <span>Audiences</span>
          </h2>
          <p className="lede" style={{ marginInline: "auto", textAlign: "center" }}>
            聚焦高校院系与招生项目。每一类下面是招生季里常见的问题，以及对应可以交出去的工作。
          </p>
          <ol className="rings">
            {audiences.map((item) => (
              <li key={item.title}>
                <span className="ring">{item.title}</span>
                <p>{item.pains.join("；")}</p>
                <p>{item.delivers.join("；")}</p>
              </li>
            ))}
          </ol>
          <p className="meta" style={{ textAlign: "center" }}>
            具体服务范围以学院项目、招生对象、校方审批和书面协议为准。
          </p>
        </div>
      </section>

      <section className="band reveal" aria-labelledby="questions-title">
        <div className="wrap intro-split">
          <div>
            <h2 id="questions-title">我们先帮学院回答五个问题</h2>
            <p className="en-label">Questions</p>
          </div>
          <ol className="way-list">
            {fiveQuestions.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band band-dark reveal" aria-labelledby="scenes-title">
        <div className="wrap">
          <h2 id="scenes-title" className="section-title">
            服务场景
            <span>Scenes</span>
          </h2>
          <p className="lede" style={{ marginInline: "auto", textAlign: "center" }}>
            四个方法场景，对应监测、选题、可见度复测和阶段报告。
          </p>
        </div>
        <div className="snap">
          {scenes.map((item) => (
            <article key={item.id}>
              <Link href={`/scenes#${item.id}`}>
                <Scene src={item.photo} alt={item.alt} priority />
                <div className="snap-copy">
                  <span>{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.problem}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="band reveal" aria-labelledby="work-title">
        <div className="wrap">
          <h2 id="work-title" className="section-title">
            我们实际交付的工作
            <span>Work</span>
          </h2>
          <ul className="chip-list" style={{ justifyContent: "center" }}>
            {homeDeliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="lede" style={{ marginInline: "auto", textAlign: "center" }}>
            每项服务的范围、交付和不包含事项，见「服务」页。
          </p>
          <ol className="pathline">
            {path.map((item) => (
              <li key={item}>
                <strong>{item}</strong>
              </li>
            ))}
          </ol>
          <p className="page-links" style={{ justifyContent: "center" }}>
            <Link className="btn" href="/services">
              查看服务方法
            </Link>
            <Link className="text-link" href="/about">
              阅读公司介绍
            </Link>
          </p>
        </div>
      </section>

      <DeliverySamples />
      <RiskBar />
      <EngagementModels />

      <section className="proof reveal" aria-labelledby="about-title">
        <div className="wrap proof-inner">
          <div>
            <p className="eyebrow">About</p>
            <h2 id="about-title">关于博汇创想</h2>
            <p>
              {company.legal}
              面向高校院系提供传播与增长服务。AnswerBit 与 ChinaPath 均为独立运营平台：前者用于 AI 可见度动作与复测，后者用于来华国际招生相关服务。内部客户服务工作台用于项目协作、审核与报告交付，不替代学院招生系统。ChinaPath 不承诺录取。
            </p>
            <p className="page-links">
              <Link className="btn btn-gold" href="/about">
                阅读公司介绍
              </Link>
            </p>
          </div>
          <Scene src="/photos/library.jpg" alt="图书馆书架" />
        </div>
      </section>
    </>
  );
}
