// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `uw` / export `Z5`.

import { httpOrHttpsUrl } from "./http-or-https-url";

/** Accept a trimmed non-whitespace token that is not an http(s) URL. */
export function normalizeNonUrlToken(raw: string): string | null {
  const trimmed = raw.trim();
  return trimmed.length === 0 ||
    /\s/u.test(trimmed) ||
    httpOrHttpsUrl(trimmed) != null
    ? null
    : trimmed;
}
