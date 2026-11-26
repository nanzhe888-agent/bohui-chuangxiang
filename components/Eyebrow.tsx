import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode; chip?: boolean }) {
  return (
    <p className="eyebrow" lang="en">
      {children}
    </p>
  );
}
