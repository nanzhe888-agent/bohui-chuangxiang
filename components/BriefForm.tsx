"use client";

import { useMemo, useState } from "react";
import { collegeTypes, cycles, focusProblems } from "@/lib/content";
import { company } from "@/lib/site";

type Status = "idle" | "copied" | "sent" | "offline" | "invalid" | "manual";

function line(label: string, value: string) {
  return `${label}：${value.trim() || "（未填写）"}`;
}

export function BriefForm() {
  const [schoolName, setSchoolName] = useState("");
  const [college, setCollege] = useState("");
  const [project, setProject] = useState("");
  const [problems, setProblems] = useState<string[]>([]);
  const [cycle, setCycle] = useState("");
  const [contactName, setContactName] = useState("");
  const [contact, setContact] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const text = useMemo(() => {
    return [
      "学院初步诊断需求单",
      company.legal,
      `对公合作邮箱：${company.businessEmail}`,
      "",
      line("院校名称", schoolName),
      line("所属学院类型", college),
      line("项目名称", project),
      line("当前关注的问题", problems.join("、")),
      line("期望工作周期", cycle),
      line("称呼", contactName),
      line("联系方式", contact),
      line("其他说明", note),
    ].join("\n");
  }, [schoolName, college, project, problems, cycle, contactName, contact, note]);

  function toggleProblem(item: string) {
    setStatus("idle");
    setProblems((current) =>
      current.includes(item) ? current.filter((value) => value !== item) : [...current, item],
    );
  }

  async function copyText() {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }

  async function onCopy() {
    const ok = await copyText();
    setStatus(ok ? "copied" : "manual");
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!schoolName.trim() || !contact.trim()) {
      setStatus("invalid");
      return;
    }
    const copied = await copyText();
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          schoolName: schoolName.trim(),
          collegeType: college,
          projectName: project.trim(),
          problems,
          cycle,
          contactName: contactName.trim(),
          contact: contact.trim(),
          note: note.trim(),
        }),
      });
      if (!response.ok) throw new Error("unavailable");
      const data = (await response.json()) as { ok?: boolean };
      if (!data.ok) throw new Error("unavailable");
      setStatus("sent");
    } catch {
      setStatus(copied ? "offline" : "manual");
    }
  }

  return (
    <form className="brief" onSubmit={onSubmit}>
      <div className="brief-fields">
        <label className="field-block">
          <span>院校名称</span>
          <input
            value={schoolName}
            autoComplete="organization"
            required
            onChange={(event) => {
              setStatus("idle");
              setSchoolName(event.target.value);
            }}
          />
        </label>
        <fieldset>
          <legend>所属学院类型</legend>
          <div className="choice-grid">
            {collegeTypes.map((item) => (
              <label key={item} className="choice">
                <input
                  type="radio"
                  name="college"
                  value={item}
                  checked={college === item}
                  onChange={() => {
                    setStatus("idle");
                    setCollege(item);
                  }}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <label className="field-block">
          <span>项目名称（选填）</span>
          <input
            value={project}
            autoComplete="off"
            onChange={(event) => {
              setStatus("idle");
              setProject(event.target.value);
            }}
          />
        </label>
        <fieldset>
          <legend>当前最关注的一到两个问题</legend>
          <div className="choice-grid">
            {focusProblems.map((item) => (
              <label key={item} className="choice">
                <input
                  type="checkbox"
                  checked={problems.includes(item)}
                  onChange={() => toggleProblem(item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>期望工作周期</legend>
          <div className="choice-grid">
            {cycles.map((item) => (
              <label key={item} className="choice">
                <input
                  type="radio"
                  name="cycle"
                  value={item}
                  checked={cycle === item}
                  onChange={() => {
                    setStatus("idle");
                    setCycle(item);
                  }}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <label className="field-block">
          <span>称呼</span>
          <input
            value={contactName}
            autoComplete="name"
            onChange={(event) => {
              setStatus("idle");
              setContactName(event.target.value);
            }}
          />
        </label>
        <label className="field-block">
          <span>联系方式</span>
          <input
            value={contact}
            autoComplete="email"
            required
            onChange={(event) => {
              setStatus("idle");
              setContact(event.target.value);
            }}
          />
        </label>
        <label className="field-block">
          <span>其他说明</span>
          <textarea
            rows={3}
            value={note}
            onChange={(event) => {
              setStatus("idle");
              setNote(event.target.value);
            }}
          />
        </label>
        <div className="page-links">
          <button className="btn" type="submit">
            提交预约
          </button>
          <button className="btn" type="button" onClick={() => void onCopy()}>
            复制诊断需求单
          </button>
        </div>
        <p className="meta" aria-live="polite">
          {status === "sent"
            ? "预约请求已提交。工作台收件尚未作为已开通能力对外说明；你同时可以复制需求单，自行转给同事。"
            : status === "offline"
              ? "预约接口尚未接入，这次请求没有送达服务器。需求单已复制到剪贴板，可以先发给院内同事。"
              : status === "copied"
                ? "《学院初步诊断需求单》已复制。这次没有提交。"
                : status === "invalid"
                  ? "请先填写院校名称和联系方式，再提交。"
                  : status === "manual"
                    ? "无法写入剪贴板。请选中右侧文本自行复制。若刚刚尝试提交，请求也没有送达。"
                    : "提交会把同一份 JSON 发到本站相对路径 /api/inquiry。复制不依赖该接口。请勿填写学生个人敏感信息或未公开的招生数据。"}
        </p>
      </div>
      <div className="brief-sheet">
        <p className="en-label">Brief</p>
        <pre tabIndex={0}>{text}</pre>
      </div>
    </form>
  );
}
