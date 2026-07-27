// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `c0n` / export `d6`.

import {
  googleDocsUrlKind,
  type GoogleDocsUrlKind,
} from "./google-docs-url-kind";

/** Parse an http(s) URL and classify Google Docs kinds; else null. */
export function classifyHttpUrlAsGoogleDoc(raw: string): GoogleDocsUrlKind | null {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }
  return url.protocol !== "https:" && url.protocol !== "http:"
    ? null
    : googleDocsUrlKind(url);
}
