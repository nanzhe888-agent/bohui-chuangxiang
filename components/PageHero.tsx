import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  folio,
  title,
  lede,
}: {
  eyebrow: string;
  folio: string;
  title: ReactNode;
  lede: string;
  tone?: "ink" | "stone";
}) {
  return (
    <header className="page-hero">
      <div className="wrap page-hero-grid">
        <div>
          <p className="eyebrow" lang="en">
            {eyebrow}
          </p>
          <h1>{title}</h1>
          <p className="lede">{lede}</p>
        </div>
        <p className="folio" lang="en">
          {folio}
        </p>
      </div>
    </header>
  );
}
