// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_sc`) / export `ip`.

export type MergeRemoteTaskDefinitionsPeers = {
  Ssc: (...args: unknown[]) => unknown;
  Tsc: (...args: unknown[]) => unknown;
  msc: (...args: unknown[]) => unknown;
  wsc: (...args: unknown[]) => unknown;
};

let peers: MergeRemoteTaskDefinitionsPeers | null = null;

/** Wire mergeRemoteTaskDefinitions peers once companions land. */
export function setMergeRemoteTaskDefinitionsPeers(
  next: MergeRemoteTaskDefinitionsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ip` / internal `_sc`.
 */
export function mergeRemoteTaskDefinitions(e: unknown) {
  if (peers == null) {
    throw new Error("mergeRemoteTaskDefinitions peers are not configured");
  }

  let t = peers.Tsc.safeParse(e);
  if (!t.success) return peers.msc;
  let n = {
    ...peers.msc,
  };
  for (let [e, r] of Object.entries(t.data.tasks)) {
    if (peers.Ssc.has(e)) continue;
    let t = peers.wsc.safeParse(r);
    t.success &&
      (n[e] = {
        ...t.data,
        origin: `remote`,
      });
  }
  return n;
}
