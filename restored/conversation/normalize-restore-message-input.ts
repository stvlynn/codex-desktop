// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EG — real body via extractFn(internal `nnn`) / export `x9`.

export type NormalizeRestoreMessageInputPeers = {
  normalizeInput: (args: {
    input: unknown;
    commentAttachments: unknown;
    shouldStripImageDisplayPlaceholderLines: boolean;
    sentAtMs: null;
  }) => unknown;
  applyToMessage: (
    message: unknown,
    normalized: unknown,
    opts: { acceptMissingImageInputs: boolean },
  ) => unknown;
};

let peers: NormalizeRestoreMessageInputPeers | null = null;

/** Wire restore-message normalize peers once companions land. */
export function setNormalizeRestoreMessageInputPeers(
  next: NormalizeRestoreMessageInputPeers,
): void {
  peers = next;
}

/**
 * Bundle export `x9` / internal `nnn`.
 * Normalize restore-message input and apply to the message draft.
 */
export function normalizeRestoreMessageInput(
  message: { restoreMessage: { context: { commentAttachments: unknown } } },
  input: unknown,
  opts: {
    acceptMissingImageInputs?: boolean;
    commentAttachments?: unknown;
    shouldStripImageDisplayPlaceholderLines?: boolean;
  } = {},
): unknown {
  if (peers == null) {
    throw new Error("NormalizeRestoreMessageInput peers are not configured");
  }
  const {
    acceptMissingImageInputs = false,
    commentAttachments = message.restoreMessage.context.commentAttachments,
    shouldStripImageDisplayPlaceholderLines = false,
  } = opts;
  const normalized = peers.normalizeInput({
    input,
    commentAttachments,
    shouldStripImageDisplayPlaceholderLines,
    sentAtMs: null,
  });
  return peers.applyToMessage(message, normalized, {
    acceptMissingImageInputs,
  });
}
