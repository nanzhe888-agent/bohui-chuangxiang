export const company = {
  brand: "博汇创想",
  legal: "北京博汇创想传媒有限公司",
  line: "品牌传播 × 内容情报 × 招生增长",
  descriptor: "高校品牌与招生增长服务",
  role: "高校宣传 × 营销增长服务商",
  /** 对公合作邮箱。配置占位，不表示邮箱已经完成开通核验。 */
  businessEmail: "bd@bohuichuangxiang.cn",
} as const;

export const nav = [
  { href: "/services", label: "服务", en: "SERVICES", index: "02" },
  { href: "/scenes", label: "服务场景", en: "SCENES", index: "03" },
  { href: "/platform", label: "客户服务平台", en: "PLATFORM", index: "04" },
  { href: "/method", label: "方法与边界", en: "METHOD", index: "05" },
  { href: "/about", label: "关于博汇创想", en: "ABOUT", index: "06" },
  { href: "/start", label: "开始合作", en: "NEXT", index: "07" },
] as const;

export const footerNav = [
  { href: "/", label: "首页" },
  ...nav.map(({ href, label }) => ({ href, label })),
] as const;
