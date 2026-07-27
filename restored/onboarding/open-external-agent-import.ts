// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EM — real body via extractFn(internal `clu`) / export `en`.

export type OpenExternalAgentImportPeers = {
  isImportableItemType: (itemType: unknown) => boolean;
  hasOpenReview: (store: unknown, key: unknown) => boolean;
  reviewKey: unknown;
  nextReviewKey: () => number;
  openReview: (
    store: unknown,
    key: unknown,
    payload: {
      request: unknown;
      reviewKey: number;
      onClose: () => void;
    },
  ) => void;
};

let peers: OpenExternalAgentImportPeers | null = null;

/** Wire openExternalAgentImport peers once companions land. */
export function setOpenExternalAgentImportPeers(
  next: OpenExternalAgentImportPeers,
): void {
  peers = next;
}

/**
 * Bundle export `en` / internal `clu`.
 * Open external-agent import review when eligible items exist.
 */
export function openExternalAgentImport(
  store: unknown,
  args: {
    hostId: unknown;
    items: Array<{ itemType: unknown }>;
    onImportSuccess: unknown;
    restoreFocus: () => void;
    sessionLimits: unknown;
    source: unknown;
  },
): boolean {
  if (peers == null) {
    throw new Error("OpenExternalAgentImport peers are not configured");
  }
  const items = args.items.filter((item) =>
    peers!.isImportableItemType(item.itemType),
  );
  if (items.length === 0 || peers.hasOpenReview(store, peers.reviewKey)) {
    return false;
  }
  const request = {
    hostId: args.hostId,
    items,
    onImportSuccess: args.onImportSuccess,
    restoreFocus: args.restoreFocus,
    sessionLimits: args.sessionLimits,
    source: args.source,
  };
  const reviewKey = peers.nextReviewKey();
  peers.openReview(store, peers.reviewKey, {
    request,
    reviewKey,
    onClose: () => {
      window.requestAnimationFrame(args.restoreFocus);
    },
  });
  return true;
}
