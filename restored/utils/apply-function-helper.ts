// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Dt`) / export `Evt`.

export type BindApplyFunctionHelperPeers = {
  Et: (...args: unknown[]) => unknown;
  Ze: (...args: unknown[]) => unknown;
  at: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lt: (...args: unknown[]) => unknown;
  mt: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  wt: (...args: unknown[]) => unknown;
  yt: (...args: unknown[]) => unknown;
};

let peers: BindApplyFunctionHelperPeers | null = null;

/** Wire bindApplyFunctionHelper peers once companions land. */
export function setBindApplyFunctionHelperPeers(next: BindApplyFunctionHelperPeers): void {
  peers = next;
}

/**
 * Bundle export `Evt` / internal `Dt`.
 */
export function bindApplyFunctionHelper() {
  if (peers == null) {
    throw new Error("bindApplyFunctionHelper peers are not configured");
  }

  return peers.e(() => {
    Et = peers.r(peers.o(), 1), peers.Ze(), peers.at(), peers.lt(), peers.mt(), peers.yt(), peers.wt();
  });
}
