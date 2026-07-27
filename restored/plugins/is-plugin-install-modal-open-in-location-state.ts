// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `E4i`) / export `Wz`.

export type IsPluginInstallModalOpenInLocationStatePeers = {
  M4i: (...args: unknown[]) => unknown;
};

let peers: IsPluginInstallModalOpenInLocationStatePeers | null = null;

/** Wire isPluginInstallModalOpenInLocationState peers once companions land. */
export function setIsPluginInstallModalOpenInLocationStatePeers(next: IsPluginInstallModalOpenInLocationStatePeers): void {
  peers = next;
}

/**
 * Bundle export `Wz` / internal `E4i`.
 */
export function isPluginInstallModalOpenInLocationState(e: unknown) {
  if (peers == null) {
    throw new Error(
      "isPluginInstallModalOpenInLocationState peers are not configured",
    );
  }

  let t = peers.M4i.safeParse(e);
  return t.success && t.data.openInstallModal === !0;
}
