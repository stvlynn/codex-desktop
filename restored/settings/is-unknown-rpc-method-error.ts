// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ten`) / export `j9`.

export type IsUnknownRpcMethodErrorPeers = {
  Een: (...args: unknown[]) => unknown;
  includes: (...args: unknown[]) => unknown;
  toLowerCase: (...args: unknown[]) => unknown;
};

let peers: IsUnknownRpcMethodErrorPeers | null = null;

/** Wire isUnknownRpcMethodError peers once companions land. */
export function setIsUnknownRpcMethodErrorPeers(next: IsUnknownRpcMethodErrorPeers): void {
  peers = next;
}

/**
 * Bundle export `j9` / internal `Ten`.
 */
export function isUnknownRpcMethodError(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("isUnknownRpcMethodError peers are not configured");
  }

  let n = peers.Een.safeParse(e);
  if (!n.success) return !1;
  if (n.data.code === -32601) return !0;
  let r = n.data.message?.toLowerCase();
  return (
    r?.includes(`method not found`) ||
    (r?.includes(`unknown method`) && r.includes(t.toLowerCase())) ||
    (r?.includes(`unknown variant`) && r.includes(t.toLowerCase())) ||
    !1
  );
}
