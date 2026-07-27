// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `Sti`) / export `gG`.

export type AtomStoreGetSet = {
  get: (atom: unknown) => unknown;
  set: (atom: unknown, value: unknown) => void;
};

export type SetCreateJourneyDraftPeers = {
  journeyDraftAtom: unknown;
  createJourneyDraftAtom: unknown;
  persistJourneyDraft: (
    store: AtomStoreGetSet,
    key: unknown,
    value: unknown,
  ) => void;
  persistKey: unknown;
};

let peers: SetCreateJourneyDraftPeers | null = null;

/** Wire create-journey draft peers once companions land. */
export function setSetCreateJourneyDraftPeers(
  next: SetCreateJourneyDraftPeers,
): void {
  peers = next;
}

/**
 * Bundle export `gG` / internal `Sti`.
 * Promote journey draft to create type with mention path.
 */
export function setCreateJourneyDraft(
  store: AtomStoreGetSet,
  mentionPath: unknown,
): void {
  if (peers == null) {
    throw new Error("SetCreateJourneyDraft peers are not configured");
  }
  const current = store.get(peers.journeyDraftAtom) as Record<
    string,
    unknown
  > | null;
  if (current == null) return;
  store.set(peers.createJourneyDraftAtom, {
    ...current,
    type: "create",
    mentionPath,
  });
  peers.persistJourneyDraft(store, peers.persistKey, { ...current });
}
