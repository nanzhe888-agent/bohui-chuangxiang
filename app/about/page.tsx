import type { Metadata } from "next";
import Link from "next/link";
import { Architecture } from "@/components/Architecture";
import { EngagementModels } from "@/components/EngagementModels";
import { RiskBar } from "@/components/RiskBar";
import { PageHero } from "@/components/PageHero";
import { Scene } from "@/components/Scene";
import { audiences, notList, services } from "@/lib/content";
import { company } from "@/lib/site";

const audiencePhotos = [
  { src: "/photos/auditorium.jpg", alt: "会场听众背影" },
  { src: "/photos/classroom.jpg", alt: "空教室" },
  { src: "/photos/laptop.jpg", alt: "内容工作中的笔记本电脑" },
  { src: "/photos/hall.jpg", alt: "校园教学楼" },
];

export const metadata: Metadata = {
  title: "关于博汇创想",
  description:
    "北京博汇创想传媒有限公司面向高校院系提供品牌传播、内容情报与招生增长服务。AnswerBit 与 ChinaPath 独立运营。",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT"
        folio="06"
        title="一家面向高校院系的传播与增长机构。"
        lede="博汇创想帮助学院把已经存在的项目价值，转化为学生能够找到、读懂、并决定是否继续询问的公开表达。"
      />

      <section className="band reveal" aria-labelledby="who-title">
        <div className="wrap intro-split">
          <div>
            <h2 id="who-title">公司介绍</h2>
            <p className="en-label">Introduction</p>
          </div>
          <div className="profile-card">
            <h3>我们是什么</h3>
            <p>
              {company.legal}服务高校商学院、国际学院、继续教育学院和 MBA 学院/教育中心。工作集中在三件事：{company.line}。
            </p>
            <h3>我们不是什么</h3>
            <ul className="plain-list">
              {notList.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="band band-ice" aria-labelledby="audience-title">
        <div className="wrap">
          <p className="eyebrow">WHO WE SPEAK WITH</p>
          <h2 id="audience-title">先与这些学院对话</h2>
          <p className="lede">四类学院在招生季里的常见问题，以及可以交出去的工作。</p>
          <ul className="audience-photos">
            {audiences.map((item, index) => (
              <li key={item.title}>
                <Scene src={audiencePhotos[index].src} alt={audiencePhotos[index].alt} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <p>{item.pains.join("；")}</p>
                  <p>{item.delivers.join("；")}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band" aria-labelledby="arch-title">
        <div className="wrap">
          <p className="eyebrow">ARCHITECTURE</p>
          <h2 id="arch-title">品牌架构</h2>
          <p className="lede">
            博汇创想面向学院提供传播与增长服务。AnswerBit 独立运营，用于 GEO/AI 可见度动作与复测。ChinaPath 独立运营，用于来华国际招生相关服务，不承诺录取。内部客户服务工作台支持工单、审核与报告交付。
          </p>
          <Architecture />
          <p className="meta">上图说明品牌与交付关系，不是产品界面，也不代表已签约客户。</p>
        </div>
      </section>

      <RiskBar />
      <EngagementModels />
      <section className="band band-ice" aria-labelledby="map-title">
        <div className="wrap">
          <p className="eyebrow">CAPABILITIES</p>
          <h2 id="map-title">五项能力</h2>
          <p className="lede">监测、选题日历、可见度复测、竞品观察、阶段报告。工单协作写在服务页。详见服务说明。</p>
          <ol className="cap-map">
            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link href={`/services#${service.id}`}>
                  <span>{service.index}</span>
                  <strong>{service.title}</strong>
                  <em>{service.subtitle}</em>
                </Link>
              </li>
            ))}
          </ol>
          <div className="callout">
            <p>
              对高校客户，专业首先表现为克制：不使用未经授权的校名，不把方法演示写成业绩，不把尚未交付的功能写成已经上线的产品。对公合作邮箱见页脚。
            </p>
          </div>
          <p className="page-links">
            <Link className="text-link" href="/services">
              阅读服务说明
            </Link>
            <Link className="text-link" href="/start">
              开始合作沟通
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
