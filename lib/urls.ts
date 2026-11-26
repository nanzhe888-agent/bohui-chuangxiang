const BLOCKED_HOSTS = [
  "localhost",
  "chinapath.org",
  "chinapathstudy.com",
  "trycloudflare.com",
];

function blockedHost(hostname: string) {
  const host = hostname.toLowerCase().replace(/\.$/, "");
  if (host === "127.0.0.1" || host === "0.0.0.0" || host === "::1") return true;
  return BLOCKED_HOSTS.some(
    (blocked) => host === blocked || host.endsWith(`.${blocked}`),
  );
}

/** Public https URL, or null when missing, invalid, or not for this site. */
export function publicHttpsUrl(raw: string | undefined | null): URL | null {
  if (!raw?.trim()) return null;
  try {
    const url = new URL(raw.trim());
    if (url.protocol !== "https:") return null;
    if (blockedHost(url.hostname)) return null;
    if (url.username || url.password) return null;
    return url;
  } catch {
    return null;
  }
}
