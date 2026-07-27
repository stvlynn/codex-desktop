// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `E4i`) / export `Wz`.

export type LocationStateParseResult = {
  success: boolean;
  data?: { openInstallModal?: boolean };
};

export type PluginInstallModalLocationStatePeers = {
  safeParse: (value: unknown) => LocationStateParseResult;
};

let peers: PluginInstallModalLocationStatePeers | null = null;

/** Wire zod/location-state schema once companions land. */
export function setPluginInstallModalLocationStatePeers(
  next: PluginInstallModalLocationStatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Wz` / internal `E4i`.
 * True when location state requests openInstallModal.
 */
export function isPluginInstallModalOpenInLocationState(
  value: unknown,
): boolean {
  if (peers == null) {
    throw new Error("PluginInstallModalLocationState peers are not configured");
  }
  const parsed = peers.safeParse(value);
  return parsed.success && parsed.data?.openInstallModal === true;
}
