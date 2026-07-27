// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `APc`) / export `setAppshotSelectedTaskPhase`.

export type AppshotSelectedTaskPhasePeers = {
  A2: (...args: unknown[]) => unknown;
  k2: (...args: unknown[]) => unknown;
};
let peers: AppshotSelectedTaskPhasePeers | null = null;

/** Wire setAppshotSelectedTaskPhase peers once companions land. */
export function setAppshotSelectedTaskPhasePeers(next: AppshotSelectedTaskPhasePeers): void {
  peers = next;
}

/**
 * Bundle export `setAppshotSelectedTaskPhase` / internal `APc`.
 */
export function setAppshotSelectedTaskPhase(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("setAppshotSelectedTaskPhase peers are not configured");
  }
  e.set(peers.A2, {
    ...peers.k2(e),
    phase: t === "csv_chart" ? "execution" : "permission",
    selectedTask: t,
    permissionStatus: t === "csv_chart" ? "not-requested" : "pending",
  });
}
