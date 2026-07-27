// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `nnn`) / export `x9`.

export type DeferredConversationX9Peers = {
  inn: (...args: unknown[]) => unknown;
  v_: (...args: unknown[]) => unknown;
};
let peers: DeferredConversationX9Peers | null = null;

/** Wire deferredConversationX9 peers once companions land. */
export function setDeferredConversationX9Peers(
  next: DeferredConversationX9Peers,
): void {
  peers = next;
}

/**
 * Bundle export `x9` / internal `nnn`.
 */
export function deferredConversationX9(
  e: unknown,
  t: unknown,
  {
    acceptMissingImageInputs = false,
    commentAttachments = e.restoreMessage.context.commentAttachments,
    shouldStripImageDisplayPlaceholderLines = false,
  }: Record<string, unknown> = {},
) {
  if (peers == null) {
    throw new Error("deferredConversationX9 peers are not configured");
  }
  let a = peers.v_({
    input: t,
    commentAttachments,
    shouldStripImageDisplayPlaceholderLines,
    sentAtMs: null,
  });
  return peers.inn(e.compareKey, a.compareKey, {
    acceptMissingImageInputs,
  });
}
