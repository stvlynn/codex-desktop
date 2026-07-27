// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Awa` / export `AF`.

import { THREAD_URL_PLACEHOLDER } from "./thread-url-placeholder";

export function rewriteThreadUrlPlaceholder(template: string, threadId: string): string {
  return template.replaceAll(
    THREAD_URL_PLACEHOLDER,
    `codex://threads/${threadId}`,
  );
}
