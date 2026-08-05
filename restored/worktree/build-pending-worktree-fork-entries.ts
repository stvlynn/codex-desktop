// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wSo`) / export `nA`.

export type BuildPendingWorktreeForkEntriesPeers = {
  Hnr: (...args: unknown[]) => unknown;
  R_: (...args: unknown[]) => unknown;
  _D: (...args: unknown[]) => unknown;
  aD: (...args: unknown[]) => unknown;
  gnr: (...args: unknown[]) => unknown;
  hSo: (...args: unknown[]) => unknown;
};

let peers: BuildPendingWorktreeForkEntriesPeers | null = null;

/** Wire buildPendingWorktreeForkEntries peers once companions land. */
export function setBuildPendingWorktreeForkEntriesPeers(
  next: BuildPendingWorktreeForkEntriesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `nA` / internal `wSo`.
 */
export function buildPendingWorktreeForkEntries(
  e: unknown,
  t: unknown,
  n: unknown,
) {
  if (peers == null) {
    throw new Error("buildPendingWorktreeForkEntries peers are not configured");
  }

  let r = new Map();
  for (let t of e.get(peers.gnr, n))
    r.set(t.conversationId, {
      conversationId: t.conversationId,
      forkedFromId: t.forkedFromId ?? null,
      title: t.title,
    });
  for (let t of e.get(peers.aD, n))
    r.set(t, {
      conversationId: t,
      forkedFromId: e.get(peers.Hnr, t),
      title: e.get(peers._D, t),
    });
  for (let t of peers.R_(e.get, `pending_worktrees`) ?? [])
    t.hostId !== n ||
      t.launchMode !== `fork-conversation` ||
      t.initialThreadTitle == null ||
      r.set(t.id, {
        conversationId: t.id,
        forkedFromId: t.sourceConversationId,
        title: t.initialThreadTitle,
      });
  return peers.hSo(
    r.get(t) ?? {
      conversationId: t,
      forkedFromId: e.get(peers.Hnr, t),
      title: e.get(peers._D, t),
    },
    r.values(),
  );
}
