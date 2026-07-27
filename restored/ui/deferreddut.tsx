// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `mm`) / export `dut`.

export type BindDeferreddutPeers = {
  y2e: (...args: unknown[]) => unknown;
};
let peers: BindDeferreddutPeers | null = null;

/** Wire bindDeferreddut peers once companions land. */
export function setBindDeferreddutPeers(next: BindDeferreddutPeers): void {
  peers = next;
}

/**
 * Bundle export `dut` / internal `mm`.
 */
export const bindDeferreddut = (e: unknown, t: unknown) => {
  if (peers == null) {
    throw new Error("bindDeferreddut peers are not configured");
  }
  return {
    ...peers.y2e(e),
    options: [e, t],
  };
};
