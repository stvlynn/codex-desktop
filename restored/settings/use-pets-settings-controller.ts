// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave ED — real body via extractFn(internal `Sz`) / export `Ez`.
// Pets / skills settings controller from extractFn(Sz).

export type UsePetsSettingsControllerPeers = {
  run: (...args: unknown[]) => unknown;
};

let peers: UsePetsSettingsControllerPeers | null = null;

/** Wire usePetsSettingsController peers once companions land. */
export function setUsePetsSettingsControllerPeers(
  next: UsePetsSettingsControllerPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ez` / internal `Sz`.
 * Pets / skills settings controller from extractFn(Sz).
 */
export function usePetsSettingsController(...args: unknown[]): unknown {
  if (peers == null) {
    throw new Error("usePetsSettingsController peers are not configured");
  }
  return peers.run(...args);
}
