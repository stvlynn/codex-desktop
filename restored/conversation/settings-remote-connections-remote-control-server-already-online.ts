// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fxu`) / export `R`.

export type BindSettingsRemoteConnectionsRemoteControlServerAlreadyOnlinePeers = {
  K_: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  oxu: (...args: unknown[]) => unknown;
  uxu: (...args: unknown[]) => unknown;
};

let peers: BindSettingsRemoteConnectionsRemoteControlServerAlreadyOnlinePeers | null = null;

/** Wire bindSettingsRemoteConnectionsRemoteControlServerAlreadyOnline peers once companions land. */
export function setBindSettingsRemoteConnectionsRemoteControlServerAlreadyOnlinePeers(next: BindSettingsRemoteConnectionsRemoteControlServerAlreadyOnlinePeers): void {
  peers = next;
}

/**
 * Bundle export `R` / internal `fxu`.
 */
export function bindSettingsRemoteConnectionsRemoteControlServerAlreadyOnline() {
  if (peers == null) {
    throw new Error("bindSettingsRemoteConnectionsRemoteControlServerAlreadyOnline peers are not configured");
  }

  return peers.e(() => {
    peers.oxu(), peers.K_(), uxu = 0;
  });
}
