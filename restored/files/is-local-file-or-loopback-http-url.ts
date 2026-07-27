// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Kl` / export `kht`.

import { isSafeFileUrl } from "./is-safe-file-url";
import { loopbackHttpPortFromUrl } from "./loopback-http-port-from-url";

/** True for loopback http(s) URLs or safe local `file:` URLs. */
export function isLocalFileOrLoopbackHttpUrl(value: string): boolean {
  if (loopbackHttpPortFromUrl(value) != null) return true;
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return false;
  }
  return url.protocol === "file:" ? isSafeFileUrl(url) : false;
}
