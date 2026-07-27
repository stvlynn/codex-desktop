// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `mx` / export `k9`.

import { activeTurnsFromConversation } from "./active-turns-from-conversation";

type TurnLike = { status?: string };

/** Whether the thread is actively resuming / mid-turn. */
export function isThreadNeedsResumeActive(conversation: {
  resumeState?: string | null;
  threadRuntimeStatus?: { type?: string } | null;
  turnHistory?: { kind?: string; history?: unknown };
  turns: unknown;
}): boolean {
  const { resumeState, threadRuntimeStatus } = conversation;
  const turns = activeTurnsFromConversation(conversation) as TurnLike[];
  if (resumeState === "needs_resume") {
    return threadRuntimeStatus?.type === "active";
  }
  if (turns.length === 0) return resumeState === "resuming";
  return turns.at(-1)?.status === "inProgress";
}
