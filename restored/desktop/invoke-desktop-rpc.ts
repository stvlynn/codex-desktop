// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rp`) / export `Zut`.

export type InvokeDesktopRpcPeers = {
  PZe: (...args: unknown[]) => unknown;
};

let peers: InvokeDesktopRpcPeers | null = null;

/** Wire invokeDesktopRpc peers once companions land. */
export function setInvokeDesktopRpcPeers(next: InvokeDesktopRpcPeers): void {
  peers = next;
}

/**
 * Bundle export `Zut` / internal `rp`.
 */
async function invokeDesktopRpc(...e) {
  if (peers == null) {
    throw new Error("invokeDesktopRpc peers are not configured");
  }

  let [t, n] = e,
    {
      params: r,
      select: i,
      signal: a,
      source: o
    } = n ?? {};
  return peers.PZe(t, r, i, a, o);
}
