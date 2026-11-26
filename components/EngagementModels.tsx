import { engagementModels } from "@/lib/content";

export function EngagementModels() {
  return (
    <section className="band reveal" aria-labelledby="engage-title" id="engagement">
      <div className="wrap">
        <h2 id="engage-title" className="section-title">
          合作模式与周期
          <span>Engagement</span>
        </h2>
        <p className="lede" style={{ marginInline: "auto", textAlign: "center" }}>
          不在页面上标价格。周期和适用情形写在这里，书面范围以协议为准。
        </p>
        <ol className="icon-grid cols-3">
          {engagementModels.map((item) => (
            <li key={item.id}>
              <span className="disc">模式 {item.id}</span>
              <h3>{item.title}</h3>
              <p>{item.duration}</p>
              <p>{item.fit}</p>
              <p>{item.delivers}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
