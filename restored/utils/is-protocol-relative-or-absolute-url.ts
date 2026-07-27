// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Zma` / export `JI`.

import { isHttpOrHttpsUrl } from "./is-http-or-https-url";

export function isProtocolRelativeOrAbsoluteUrl(value: string): boolean {
  return value.startsWith("//") ? true : isHttpOrHttpsUrl(value);
}
