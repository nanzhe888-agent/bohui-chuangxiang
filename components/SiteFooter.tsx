import Link from "next/link";
import { WeChatButton } from "@/components/WeChatModal";
import { company, footerNav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-accent">
        <div className="wrap footer-accent-inner">
          <div>
            <p className="eyebrow">NEXT</p>
            <h2>从一个学院、一个项目、一个可定义的问题开始。</h2>
            <p>
              对公合作邮箱{" "}
              <a href={`mailto:${company.businessEmail}`}>{company.businessEmail}</a>
              。此地址为配置占位，上线前请确认邮箱已经开通。
            </p>
          </div>
          <WeChatButton className="btn btn-gold" />
        </div>
      </div>
      <div className="wrap footer-grid">
        <div>
          <p className="footer-brand">
            <span className="logo-mark" aria-hidden="true" />
            {company.brand}
          </p>
          <p className="footer-legal">{company.legal}</p>
          <p className="fine">{company.line}</p>
        </div>
        <nav aria-label="页脚导航">
          <p className="footer-label">页面</p>
          <ul className="footer-nav">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="footer-label">合作</p>
          <div className="fine">
            <p>
              邮箱 <a href={`mailto:${company.businessEmail}`}>{company.businessEmail}</a>
            </p>
            <p>AnswerBit、ChinaPath 独立运营。ChinaPath 不承诺录取。</p>
          </div>
        </div>
      </div>
      <div className="wrap compliance" id="compliance">
        <h2>内容与数据合规声明</h2>
        <p>
          本站照片用于说明校园、课堂与内容工作的场景，不表示这些院校是博汇创想的客户。页面中的服务对象是学院类型，样张预览中的「华东某高校」是虚构组合，用来展示交付件的样子，其中的学制、学费和词云都不是实测数据。监测只在书面授权之后、从合法来源进行；小红书开放平台当前合作范围限于基础账号信息。具名院校材料只在获得授权后另行发布。AnswerBit 与 ChinaPath 独立运营，ChinaPath 不替代院校审核，也不承诺录取。
        </p>
      </div>
      <div className="wrap footer-base">
        <p>© {company.legal}</p>
        <p>AnswerBit、ChinaPath 独立运营 · ChinaPath 不承诺录取</p>
      </div>
    </footer>
  );
}
