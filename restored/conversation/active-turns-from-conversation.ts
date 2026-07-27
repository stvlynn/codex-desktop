// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `cg` companion for export `k9` (canonical merge deferred to raw turns).

import { turnsFromConversation } from "./turns-from-conversation";

/** Active turns list used by resume-state helpers. */
export function activeTurnsFromConversation(conversation: {
  turnHistory?: { kind?: string; history?: unknown };
  turns: unknown;
}): unknown[] {
  const turns = turnsFromConversation(conversation);
  return Array.isArray(turns) ? turns : [];
}
