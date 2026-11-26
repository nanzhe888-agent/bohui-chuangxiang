const fields = [
  ["授权", "示意中不绑定账号"],
  ["来源", "授权 · 导出 · 人工登记"],
  ["扫描", "按日"],
  ["覆盖", "记录范围，不在此填写比例"],
  ["内容", "按招生问题归档"],
  ["走势", "与来源和时间一并保存"],
  ["就绪门", "未通过则不可导出对外版本"],
] as const;

const side = ["监测", "选题日历", "工单", "GEO 动作", "竞品", "报告", "只读交付"];

export function PlatformVignette() {
  return (
    <figure className="vignette">
      <div className="screen" aria-hidden="true">
        <div className="screen-top">
          <span>博汇创想 · 客户服务平台</span>
          <span lang="en">SCHEMATIC</span>
        </div>
        <div className="screen-body">
          <ul className="screen-side">
            {side.map((item, i) => (
              <li key={item} data-active={i === 0 ? "true" : "false"}>
                {item}
              </li>
            ))}
          </ul>
          <div className="screen-main">
            {fields.map(([label, value]) => (
              <div className="field" key={label}>
                <b>{label}</b>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <figcaption>
        产品界面示意。此图说明信息如何被组织，其中没有覆盖比例、粉丝、花费、线索或录取数字。
      </figcaption>
    </figure>
  );
}
