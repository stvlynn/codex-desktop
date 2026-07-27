// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Kar`) / export `d0`.

export type BindBindAppShellBottomPanelLauncherVisiblePeers = {
  Lar: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
};

let peers: BindBindAppShellBottomPanelLauncherVisiblePeers | null = null;

/** Wire bindBindAppShellBottomPanelLauncherVisible peers once companions land. */
export function setBindBindAppShellBottomPanelLauncherVisiblePeers(next: BindBindAppShellBottomPanelLauncherVisiblePeers): void {
  peers = next;
}

/**
 * Bundle export `d0` / internal `Kar`.
 */
export function bindBindAppShellBottomPanelLauncherVisible() {
  if (peers == null) {
    throw new Error("bindBindAppShellBottomPanelLauncherVisible peers are not configured");
  }

  return peers.Pm(peers.Lar, !0);
}
