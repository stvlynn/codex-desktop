// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `TGr`) / export `qX`.

export type GmDerivedLabelPeers = {
  NGr: (...args: unknown[]) => unknown;
  _M: (...args: unknown[]) => unknown;
  gM: (...args: unknown[]) => unknown;
};

let peers: GmDerivedLabelPeers | null = null;

/** Wire GmDerivedLabel peers once companions land. */
export function setGmDerivedLabelPeers(next: GmDerivedLabelPeers): void {
  peers = next;
}

/**
 * Bundle export `qX` / internal `TGr`.
 */
export function GmDerivedLabel(e: unknown) {
  if (peers == null) {
    throw new Error("GmDerivedLabel peers are not configured");
  }

  let t = (0, peers.NGr.c)(5),
    n = peers.gM(),
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = (e) => n.addRegistryCallback(e)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] !== n || t[3] !== e
      ? ((i = () => n.getForHostId(e)), (t[2] = n), (t[3] = e), (t[4] = i))
      : (i = t[4]),
    (0, peers._M.useSyncExternalStore)(r, i)
  );
}
