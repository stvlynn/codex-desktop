// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ha`) / export `Q_t`.

export type ApplyFunctionHelper2Peers = {
  Ai: (...args: unknown[]) => unknown;
  Ca: (...args: unknown[]) => unknown;
  Hn: (...args: unknown[]) => unknown;
  Ni: (...args: unknown[]) => unknown;
  Oi: (...args: unknown[]) => unknown;
  Qn: (...args: unknown[]) => unknown;
  Qr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ui: (...args: unknown[]) => unknown;
};

let peers: ApplyFunctionHelper2Peers | null = null;

/** Wire applyFunctionHelper2 peers once companions land. */
export function setApplyFunctionHelper2Peers(
  next: ApplyFunctionHelper2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `Q_t` / internal `Ha`.
 */
export function applyFunctionHelper2() {
  if (peers == null) {
    throw new Error("applyFunctionHelper2 peers are not configured");
  }

  return peers.e(() => {
    (peers.Qn(),
      peers.Hn(),
      peers.ui(),
      peers.Oi(),
      peers.Qr(),
      peers.Ca(),
      peers.Ai(),
      peers.Ni());
  });
}
