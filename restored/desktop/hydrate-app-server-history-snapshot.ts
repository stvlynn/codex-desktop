// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `snc`) / export `im`.

export type HydrateAppServerHistorySnapshotPeers = {
  getHistorySnapshots: () => unknown;
  conversationAtom: unknown;
  desktopStateAtom: unknown;
  hydrationStatusAtom: unknown;
  gateId: string;
  createController: (
    conversation: unknown,
    snapshots: unknown,
  ) => {
    hydrate: (
      conversationId: unknown,
      options: unknown,
      onClear: () => void,
      onError: (error: unknown) => void,
    ) => {
      applied: Promise<boolean>;
      dispose: () => void;
    };
  };
  markCachedHistoryApplied: (conversationId: unknown) => void;
};

let peers: HydrateAppServerHistorySnapshotPeers | null = null;

/** Wire hydrateAppServerHistorySnapshot peers once companions land. */
export function setHydrateAppServerHistorySnapshotPeers(
  next: HydrateAppServerHistorySnapshotPeers,
): void {
  peers = next;
}

/**
 * Bundle export `im` / internal `snc`.
 * Hydrate an app-server history snapshot when the gate is enabled.
 */
export function hydrateAppServerHistorySnapshot(
  store: {
    get: (atom: unknown, key?: unknown) => any;
    set: (atom: unknown, key: unknown, value: unknown) => void;
  },
  hostKey: unknown,
  conversationId: unknown,
  options: unknown,
): () => void {
  if (peers == null) {
    throw new Error("HydrateAppServerHistorySnapshot peers are not configured");
  }
  const snapshots = peers.getHistorySnapshots();
  const conversation = store.get(peers.conversationAtom, hostKey);
  if (
    conversation == null ||
    snapshots == null ||
    store.get(peers.desktopStateAtom)?.checkGate(peers.gateId) !== true
  ) {
    return () => {};
  }
  const controller = (conversation.historySnapshotHydrationController ??=
    peers.createController(conversation, snapshots));
  const handle = controller.hydrate(
    conversationId,
    options,
    () => store.set(peers!.hydrationStatusAtom, conversationId, null),
    (error) => store.set(peers!.hydrationStatusAtom, conversationId, error),
  );
  handle.applied.then((applied) => {
    if (applied) peers!.markCachedHistoryApplied(conversationId);
  });
  return () => {
    handle.dispose();
    store.set(peers!.hydrationStatusAtom, conversationId, null);
  };
}
