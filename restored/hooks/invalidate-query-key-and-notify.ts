// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `U8n`) / export `c3`.

export type InvalidateQueryKeyAndNotifyPeers = {
  vp: (...args: unknown[]) => unknown;
};

let peers: InvalidateQueryKeyAndNotifyPeers | null = null;

/** Wire invalidateQueryKeyAndNotify peers once companions land. */
export function setInvalidateQueryKeyAndNotifyPeers(
  next: InvalidateQueryKeyAndNotifyPeers,
): void {
  peers = next;
}

/**
 * Bundle export `c3` / internal `U8n`.
 */
async function invalidateQueryKeyAndNotify(e, t) {
  if (peers == null) {
    throw new Error("invalidateQueryKeyAndNotify peers are not configured");
  }

  (await e.invalidateQueries({
    queryKey: t,
  }),
    peers.vp(t));
}
