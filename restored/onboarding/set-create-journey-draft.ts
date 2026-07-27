// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Sti`) / export `setCreateJourneyDraft`.

export type CreateJourneyDraftPeers = {
  Ati: (...args: unknown[]) => unknown;
  Ub: (...args: unknown[]) => unknown;
  bP: (...args: unknown[]) => unknown;
  tQn: (...args: unknown[]) => unknown;
};
let peers: CreateJourneyDraftPeers | null = null;

/** Wire setCreateJourneyDraft peers once companions land. */
export function setCreateJourneyDraftPeers(next: CreateJourneyDraftPeers): void {
  peers = next;
}

/**
 * Bundle export `setCreateJourneyDraft` / internal `Sti`.
 */
export function setCreateJourneyDraft(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("setCreateJourneyDraft peers are not configured");
  }
  let n = e.get(peers.bP);
  n != null &&
    (e.set(peers.Ati, {
      ...n,
      type: "create",
      mentionPath: t,
    }),
    peers.Ub(e, peers.tQn, {
      ...n,
    }));
}
