"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";

export function WeChatModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-back" role="presentation" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <p className="en-label">WeChat</p>
        <h2 id={titleId}>预约 1v1 院系诊断</h2>
        <p>使用微信扫码，预约这次院系诊断。</p>
        <Image
          className="qr-card"
          src="/photos/wechat-qr.jpg"
          alt="预约 1v1 院系诊断微信二维码"
          width={888}
          height={1131}
        />
        <button className="btn" type="button" onClick={onClose}>
          关闭
        </button>
      </div>
    </div>
  );
}

export function WeChatButton({ className = "btn" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className={className} type="button" onClick={() => setOpen(true)}>
        预约 1v1 院系诊断
      </button>
      <WeChatModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
