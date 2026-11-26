"use client";

import { useState } from "react";

const tabs = [
  { id: "ai", label: "AI 可见度对比" },
  { id: "cloud", label: "痛点词云" },
  { id: "report", label: "阶段汇报目录" },
] as const;

export function DeliverySamples() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("ai");

  return (
    <section className="band reveal" aria-labelledby="samples-title" id="samples">
      <div className="wrap">
        <h2 id="samples-title" className="section-title">
          可视化交付样张预览
          <span>Samples</span>
        </h2>
        <p className="lede" style={{ marginInline: "auto", textAlign: "center" }}>
          脱敏示意 · 样张预览。下列界面是为了说明交付长什么样，不是某一所学校的真实结果。
        </p>
        <div className="tablist" role="tablist" aria-label="样张预览">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={tab === item.id}
              className={tab === item.id ? "tab is-on" : "tab"}
              onClick={() => setTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="sample-stage" role="tabpanel">
          {tab === "ai" ? <AiCard /> : null}
          {tab === "cloud" ? <CloudCard /> : null}
          {tab === "report" ? <ReportCard /> : null}
        </div>
      </div>
    </section>
  );
}

function AiCard() {
  return (
    <article className="mock">
      <header className="mock-bar">
        <span>脱敏示意 · 样张预览</span>
        <span>AnswerBit 赋能 · 独立运营姊妹品牌</span>
      </header>
      <p className="mock-kicker">虚构组合：华东某高校 MBA 项目</p>
      <div className="mock-split">
        <div>
          <h3>校准前</h3>
          <p>模型回答把学制说成两年，并把学费写成一个并未出现在简章里的数字。</p>
          <p className="mock-chip">学制、学费均属示意中的错误，不是真实收费或学制。</p>
        </div>
        <div>
          <h3>校准后</h3>
          <p>回答改回学院最新简章与官网公开信息：学制、学费以官方公布为准，并标出尚未核实的句子。</p>
          <p className="mock-chip">样张只演示改法，不代表任何项目的实时回答。</p>
        </div>
      </div>
    </article>
  );
}

function CloudCard() {
  return (
    <article className="mock">
      <header className="mock-bar">
        <span>脱敏示意 · 样张预览</span>
        <span>不是实时抓取，也不是具名客户看板</span>
      </header>
      <p className="mock-kicker">招生季高频痛点词云与舆情看板</p>
      <ul className="cloud">
        <li>在职时间冲突</li>
        <li>非全含金量</li>
        <li>奖学金政策</li>
        <li>上课城市</li>
        <li>提前面试</li>
        <li>同学背景</li>
      </ul>
      <p>这些词用来说明看板如何把学生常问的问题归到一类。它们不是某一次监测的统计结果。</p>
    </article>
  );
}

function ReportCard() {
  return (
    <article className="mock">
      <header className="mock-bar">
        <span>脱敏示意 · 样张预览</span>
        <span>阶段 / 季度汇报目录</span>
      </header>
      <p className="mock-kicker">供学院向校内领导传阅的目录结构</p>
      <ol className="toc">
        <li>本期范围、授权与采样时间</li>
        <li>公开讨论中的问题与主题</li>
        <li>选题日历与待审内容</li>
        <li>AI 可见度复测对照与待核实事项</li>
        <li>对照观察中的信息缺口</li>
        <li>下一步任务</li>
      </ol>
      <p>正式稿在工作台通过就绪门禁后，以 16:9 PDF 和令牌只读链接交付。此目录不是某一份已发出的报告。</p>
    </article>
  );
}
