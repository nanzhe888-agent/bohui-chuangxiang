import { riskControls } from "@/lib/content";

export function RiskBar() {
  return (
    <section className="band band-dark reveal" aria-labelledby="risk-title" id="risk">
      <div className="wrap">
        <h2 id="risk-title" className="section-title">
          高校内容风控与三审三校机制
          <span>Review</span>
        </h2>
        <ol className="icon-grid cols-3">
          {riskControls.map((item, index) => (
            <li key={item.title}>
              <span className="disc">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
