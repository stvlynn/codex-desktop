// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `j1o`) / export `eE`.

export type BindMcpServerElicitationPeers = {
  $u: (...args: unknown[]) => unknown;
  A1o: (...args: unknown[]) => unknown;
  E1o: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  TY: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  iO: (...args: unknown[]) => unknown;
};

let peers: BindMcpServerElicitationPeers | null = null;

/** Wire bindMcpServerElicitation peers once companions land. */
export function setBindMcpServerElicitationPeers(next: BindMcpServerElicitationPeers): void {
  peers = next;
}

/**
 * Bundle export `eE` / internal `j1o`.
 */
export function bindMcpServerElicitation() {
  if (peers == null) {
    throw new Error("bindMcpServerElicitation peers are not configured");
  }

  return peers.e(() => {
    A1o = peers.c(), peers.$u(), peers.E1o(), peers.iO(), peers.Pp(), TY = peers.J();
  });
}
