/**
 * Cloudflare Pages Function stub.
 * Not deployed by this repository task.
 * Accepts a diagnosis brief and acknowledges it. It does not send mail
 * and does not write to any China Path or workbench inbox.
 */
export async function onRequestPost({ request }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }
  const schoolName = String(body.schoolName || "").trim();
  const contact = String(body.contact || "").trim();
  if (!schoolName || !contact) {
    return json({ ok: false, error: "missing_fields" }, 400);
  }
  return json({ ok: true }, 200);
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}
