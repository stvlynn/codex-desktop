// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `u3i`) / export `Sz`.

export type UsePluginNavigationTelemetryPeers = {
  trackNavigation: (input: {
    scope: unknown;
    navigationKey: unknown;
    plugin: unknown;
    referrer: unknown;
    source: unknown;
  }) => void;
};

let peers: UsePluginNavigationTelemetryPeers | null = null;

/** Wire usePluginNavigationTelemetry peers once companions land. */
export function setUsePluginNavigationTelemetryPeers(
  next: UsePluginNavigationTelemetryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Sz` / internal `u3i`.
 * Emit plugin navigation telemetry for scope/referrer/source.
 */
export function usePluginNavigationTelemetry(input: {
  scope: unknown;
  navigationKey: unknown;
  plugin?: unknown;
  referrer?: unknown;
  source?: unknown;
}): void {
  if (peers == null) {
    throw new Error("UsePluginNavigationTelemetry peers are not configured");
  }
  peers.trackNavigation(input);
}
