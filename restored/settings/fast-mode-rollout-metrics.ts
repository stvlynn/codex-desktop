// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `v5s`) / export `mm`.

export type BindFastModeRolloutMetricsPeers = {
  _5s: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindFastModeRolloutMetricsPeers | null = null;

/** Wire bindFastModeRolloutMetrics peers once companions land. */
export function setBindFastModeRolloutMetricsPeers(
  next: BindFastModeRolloutMetricsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `mm` / internal `v5s`.
 */
export function bindFastModeRolloutMetrics() {
  if (peers == null) {
    throw new Error("bindFastModeRolloutMetrics peers are not configured");
  }

  return peers.e(() => {
    _5s = `/workspace-settings/web`;
  });
}
