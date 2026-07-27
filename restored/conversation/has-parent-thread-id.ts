// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Rot` — pure helper.

import { subAgentSourceFromThreadSource } from "./sub-agent-source-from-thread-source";

/** True when conversation or its source sub-agent has a parent thread id. */
export function hasParentThreadId(
  conversation:
    | {
        parentThreadId?: unknown;
        source?: unknown;
      }
    | null
    | undefined,
): boolean {
  return (
    conversation?.parentThreadId != null ||
    subAgentSourceFromThreadSource(conversation?.source)?.parentThreadId != null
  );
}
