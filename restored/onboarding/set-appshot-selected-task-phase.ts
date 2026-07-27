// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `APc`) / export `Tf`.

export type TfPeers = {
  A2: (...args: unknown[]) => unknown;
  k2: (...args: unknown[]) => unknown;
};
let peers: TfPeers | null = null;

/** Wire Tf peers once companions land. */
export function setTfPeers(next: TfPeers): void {
  peers = next;
}

/**
 * Bundle export `Tf` / internal `APc`.
 */
export function Tf(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("Tf peers are not configured");
  }
  e.set(peers.A2, {
    ...peers.k2(e),
    phase: t === "csv_chart" ? "execution" : "permission",
    selectedTask: t,
    permissionStatus: t === "csv_chart" ? "not-requested" : "pending",
  });
}
