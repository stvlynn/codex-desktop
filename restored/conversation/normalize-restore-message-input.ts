// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `nnn`) / export `x9`.

export type NormalizeRestoreMessageInputPeers = {
  inn: (...args: unknown[]) => unknown;
  v_: (...args: unknown[]) => unknown;
};
let peers: NormalizeRestoreMessageInputPeers | null = null;

/** Wire normalizeRestoreMessageInput peers once companions land. */
export function setNormalizeRestoreMessageInputPeers(
  next: NormalizeRestoreMessageInputPeers,
): void {
  peers = next;
}

/**
 * Bundle export `x9` / internal `nnn`.
 */
export function normalizeRestoreMessageInput(
  e: unknown,
  t: unknown,
  {
    acceptMissingImageInputs = false,
    commentAttachments = e.restoreMessage.context.commentAttachments,
    shouldStripImageDisplayPlaceholderLines = false,
  }: Record<string, unknown> = {},
) {
  if (peers == null) {
    throw new Error("normalizeRestoreMessageInput peers are not configured");
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
