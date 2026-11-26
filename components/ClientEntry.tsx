import { publicHttpsUrl } from "@/lib/urls";

export function ClientEntry() {
  const entry = publicHttpsUrl(process.env.NEXT_PUBLIC_CLIENT_ENTRY);
  const configuredButBlocked = Boolean(
    process.env.NEXT_PUBLIC_CLIENT_ENTRY?.trim() && !entry,
  );

  return (
    <aside className="entry-box" aria-labelledby="entry-title">
      <p className="eyebrow" lang="en">
        CLIENT ENTRY
      </p>
      <h2 id="entry-title">客户入口</h2>
      {entry ? (
        <>
          <p className="lede">
            此地址在部署时配置，指向博汇创想客户服务平台的正式入口。它不是本营销网站的一部分。
          </p>
          <p>
            <a
              className="btn"
              href={entry.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              前往客户入口
              <span aria-hidden="true">↗</span>
            </a>
          </p>
          <p className="meta">{entry.host}</p>
        </>
      ) : (
        <>
          <p className="lede">
            正式客户入口尚未公布。地址确认后，将配置在此处。本站不链向内部工作台的临时地址，也不提供登录。
          </p>
          <p className="meta">当前状态：地址待公布</p>
          {configuredButBlocked ? (
            <p className="meta">已填写的配置不是可公布的 https 地址，因此未在本页显示。</p>
          ) : null}
        </>
      )}
    </aside>
  );
}
