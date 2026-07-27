// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `Sua`) / export `bL`.

export type ClipboardPasteEventLike = {
  defaultPrevented?: boolean;
  clipboardData?: DataTransfer | null;
  preventDefault: () => void;
};

export type HandleClipboardPasteIfAllowedPeers = {
  shouldHandlePaste: (
    target: unknown,
    clipboardData: DataTransfer | null | undefined,
  ) => boolean;
};

let peers: HandleClipboardPasteIfAllowedPeers | null = null;

/** Wire paste-allowance checker once companions land. */
export function setHandleClipboardPasteIfAllowedPeers(
  next: HandleClipboardPasteIfAllowedPeers,
): void {
  peers = next;
}

/**
 * Bundle export `bL` / internal `Sua`.
 * Prevent default paste when the target accepts custom clipboard handling.
 */
export function handleClipboardPasteIfAllowed(
  event: ClipboardPasteEventLike,
  target: unknown,
): void {
  if (peers == null) {
    throw new Error("HandleClipboardPasteIfAllowed peers are not configured");
  }
  if (event.defaultPrevented) return;
  if (peers.shouldHandlePaste(target, event.clipboardData)) {
    event.preventDefault();
  }
}
