// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gN`) / export `mJ`.

export type PatchNewThreadComposerDraftPeers = {
  U0r: (...args: unknown[]) => unknown;
  V0r: (...args: unknown[]) => unknown;
  fx: (...args: unknown[]) => unknown;
  yN: (...args: unknown[]) => unknown;
};

let peers: PatchNewThreadComposerDraftPeers | null = null;

/** Wire patchNewThreadComposerDraft peers once companions land. */
export function setPatchNewThreadComposerDraftPeers(next: PatchNewThreadComposerDraftPeers): void {
  peers = next;
}

/**
 * Bundle export `mJ` / internal `gN`.
 */
export function patchNewThreadComposerDraft(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("patchNewThreadComposerDraft peers are not configured");
  }

  let n = e.get(peers.yN),
    r = peers.fx(n, t);
  r !== n && (e.value.kind === `new` && e.value.entrypoint === `home` && r.imageAttachments !== n.imageAttachments && e.set(peers.V0r, r.imageAttachments), e.set(peers.U0r, r));
}
