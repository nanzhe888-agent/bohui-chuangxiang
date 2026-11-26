import type { Metadata } from "next";
import Link from "next/link";
import { DeliverySamples } from "@/components/DeliverySamples";
import { PageHero } from "@/components/PageHero";
import { Scene } from "@/components/Scene";
import { serviceMix, services } from "@/lib/content";

const photos = [
  { src: "/photos/laptop.jpg", alt: "对着笔记本电脑核对内容" },
  { src: "/photos/meeting.jpg", alt: "会上整理选题" },
  { src: "/photos/library.jpg", alt: "图书馆书架" },
  { src: "/photos/auditorium.jpg", alt: "会场听众背影" },
  { src: "/photos/desk.jpg", alt: "整理文稿的桌面" },
  { src: "/photos/classroom.jpg", alt: "空教室" },
];

export const metadata: Metadata = {
  title: "服务",
  description:
    "博汇创想按项目配置的六项能力：小红书监测、选题日历、GEO/AI 可见度复测、竞品观察、阶段报告、工单协作。每一项写明交付和不包含事项。",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        folio="02"
        title="把学院已经具备的价值，整理成可发布、可监测、可复盘的工作。"
        lede="博汇创想的服务按项目配置，不要求一次采购全部模块。每一项都对应明确的输入、动作、交付物和边界。以下只描述已经开展的能力。"
      />
      <section className="band band-tight">
        <div className="wrap">
          <nav className="catalog-nav catalog-nav-row" aria-label="服务目录">
            <ol>
              {services.map((service) => (
                <li key={service.id}>
                  <a href={`#${service.id}`}>
                    <span>{service.index}</span>
                    {service.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="service-stack">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className={index % 2 === 1 ? "service-feature is-flip" : "service-feature"}
              >
                <Scene src={photos[index].src} alt={photos[index].alt} />
                <div>
                  <p className="idx">{service.index}</p>
                  <h2>{service.title}</h2>
                  <p className="summary">{service.subtitle}</p>
                  <p className="lede">{service.body}</p>
                  {service.note ? <p className="scene-flag">{service.note}</p> : null}
                  <div className="split-2">
                    <div>
                      <h3>交付物</h3>
                      <ul>
                        {service.deliverables.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3>不包含</h3>
                      <ul className="bound-list">
                        {service.excludes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mix-note">
            <h2>服务组合建议</h2>
            <p className="lede">这不是套餐承诺。具体组合以书面范围为准。</p>
            <ol className="icon-grid cols-3">
              {serviceMix.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <p className="page-links">
            <Link className="text-link" href="/scenes">
              看四个方法场景
            </Link>
            <Link className="text-link" href="/method">
              方法与边界
            </Link>
            <Link className="text-link" href="/platform">
              工作台如何交付
            </Link>
          </p>
        </div>
      </section>
      <DeliverySamples />
    </>
  );
}
