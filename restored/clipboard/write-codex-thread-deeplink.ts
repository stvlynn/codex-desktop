// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `iCo` / export `Jk` — helper via extractFn(iCo); BL→writeClipboardContents.

import { writeClipboardContents } from "./write-clipboard-contents.ts";

/** Copy a `codex://threads/<id>` deeplink when id is truthy. */
export function writeCodexThreadDeeplink(threadId: string | null | undefined): void {
  if (threadId) void writeClipboardContents(`codex://threads/${threadId}`);
}

// --- split/export lane aliases ---
export { writeCodexThreadDeeplink as WriteCodexThreadDeeplink };
