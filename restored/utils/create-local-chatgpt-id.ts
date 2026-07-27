// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `p_a` / export `LI` — `local-chatgpt:` + random id (`uy`).

import { LOCAL_CHATGPT_ID_PREFIX } from "../chatgpt/local-chatgpt-id-prefix";

function randomIdSegment(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function createLocalChatgptId(): string {
  return `${LOCAL_CHATGPT_ID_PREFIX}${randomIdSegment()}`;
}
