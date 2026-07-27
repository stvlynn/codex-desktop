// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `W_e` companion for export `kht`.

import { isLoopbackHostname } from "./is-loopback-hostname";

/** Port for http(s) loopback URLs; null when not applicable. */
export function loopbackHttpPortFromUrl(value: string): number | null {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }
  if (
    (url.protocol !== "http:" && url.protocol !== "https:") ||
    !isLoopbackHostname(url.hostname)
  ) {
    return null;
  }
  return Number(url.port || (url.protocol === "https:" ? 443 : 80));
}
