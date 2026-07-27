// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `qJs` / export `jg`.

/** True when a thread handoff is actionable for the conversation. */
export function hasPendingThreadHandoff(args: {
  conversationId: string | null | undefined;
  handoffBranch: string | null | undefined;
  handoffDirection: string | null | undefined;
  operation: unknown;
  threadHandoff: unknown;
}): boolean {
  const {
    conversationId,
    handoffBranch,
    handoffDirection,
    operation,
    threadHandoff,
  } = args;
  return (
    conversationId != null &&
    threadHandoff != null &&
    (handoffDirection === "to-local" ||
      handoffBranch != null ||
      operation != null)
  );
}
