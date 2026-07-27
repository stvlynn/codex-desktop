// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `rCo` / export `Yk` — helper via extractFn(rCo); BL→writeClipboardContents.

import {
  writeClipboardContents,
  type ClipboardContents,
} from "./write-clipboard-contents.ts";

/** Write clipboard contents when value is truthy (fire-and-forget). */
export function writeClipboardIfPresent(contents: ClipboardContents | null | undefined): void {
  if (contents) void writeClipboardContents(contents);
}
