// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `xV` / export `VI`.

import { LOCAL_CHATGPT_ID_PREFIX } from "./local-chatgpt-id-prefix";

export function isLocalChatgptId(id: string): boolean {
  return id.startsWith(LOCAL_CHATGPT_ID_PREFIX);
}
