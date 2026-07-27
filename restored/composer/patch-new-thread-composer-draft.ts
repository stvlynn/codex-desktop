// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `gN`) / export `mJ`.

export type ComposerDraftLike = {
  imageAttachments?: unknown;
  [key: string]: unknown;
};

export type PatchNewThreadComposerDraftPeers = {
  draftAtom: unknown;
  homeImageAttachmentsAtom: unknown;
  mergeDraft: (
    current: ComposerDraftLike,
    patch: Partial<ComposerDraftLike>,
  ) => ComposerDraftLike;
};

let peers: PatchNewThreadComposerDraftPeers | null = null;

/** Wire new-thread composer draft atoms once companions land. */
export function setPatchNewThreadComposerDraftPeers(
  next: PatchNewThreadComposerDraftPeers,
): void {
  peers = next;
}

/**
 * Bundle export `mJ` / internal `gN`.
 * Patch new-thread home composer draft; sync home image attachments when needed.
 */
export function patchNewThreadComposerDraft(
  store: {
    get: (atom: unknown) => ComposerDraftLike;
    set: (atom: unknown, value: unknown) => void;
    value?: { kind?: string; entrypoint?: string };
  },
  patch: Partial<ComposerDraftLike>,
): void {
  if (peers == null) {
    throw new Error("PatchNewThreadComposerDraft peers are not configured");
  }
  const current = store.get(peers.draftAtom);
  const next = peers.mergeDraft(current, patch);
  if (next !== current) {
    if (
      store.value?.kind === "new" &&
      store.value?.entrypoint === "home" &&
      next.imageAttachments !== current.imageAttachments
    ) {
      store.set(peers.homeImageAttachmentsAtom, next.imageAttachments);
    }
    store.set(peers.draftAtom, next);
  }
}
