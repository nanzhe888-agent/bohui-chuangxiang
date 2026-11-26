import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ScrollMotion } from "@/components/ScrollMotion";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { company } from "@/lib/site";
import { publicHttpsUrl } from "@/lib/urls";
import "./globals.css";

const sans = localFont({
  src: [
    { path: "../fonts/noto-sans-sc-300.woff2", weight: "300", style: "normal" },
    { path: "../fonts/noto-sans-sc-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/noto-sans-sc-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/noto-sans-sc-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "sans-serif"],
});

const latin = localFont({
  src: [
    { path: "../fonts/plus-jakarta-sans-300.woff2", weight: "300", style: "normal" },
    { path: "../fonts/plus-jakarta-sans-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/plus-jakarta-sans-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-latin",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Segoe UI", "Helvetica Neue", "sans-serif"],
});

const description =
  "北京博汇创想传媒有限公司面向高校学院，提供品牌传播、内容情报与招生增长服务，并由内部客户服务平台支撑交付。";

const siteUrl = publicHttpsUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const metadata: Metadata = {
  metadataBase: siteUrl ?? undefined,
  title: {
    default: `${company.brand} · 让高校的价值，被看见，被理解`,
    template: `%s · ${company.brand}`,
  },
  description,
  applicationName: company.brand,
  authors: [{ name: company.legal }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: company.brand,
    title: company.brand,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f1925",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.brand,
  legalName: company.legal,
  description,
  knowsLanguage: "zh-Hans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans" className={`${sans.variable} ${latin.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollMotion />
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
