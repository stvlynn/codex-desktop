// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Rot` / export `Gst`.

import { subAgentSourceFromThreadSource } from "./sub-agent-source-from-thread-source";

/** True when the conversation has an explicit or sub-agent parent thread. */
export function conversationHasParentThread(
  conversation:
    | {
        parentThreadId?: string | null;
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
