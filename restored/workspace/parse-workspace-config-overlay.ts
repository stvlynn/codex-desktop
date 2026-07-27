// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `d5s`) / export `_m`.

export type ParseWorkspaceConfigOverlayPeers = {
  overlaySchema: {
    safeParse: (value: unknown) => { success: boolean; data?: unknown };
  };
  pathSchema: {
    safeParse: (value: unknown) => { success: boolean; data?: unknown };
  };
};

let peers: ParseWorkspaceConfigOverlayPeers | null = null;

/** Wire workspace config overlay peers once companions land. */
export function setParseWorkspaceConfigOverlayPeers(
  next: ParseWorkspaceConfigOverlayPeers,
): void {
  peers = next;
}

/**
 * Bundle export `_m` / internal `d5s`.
 * Merge zod-validated overlay data with configPath/workspaceRoot.
 */
export function parseWorkspaceConfigOverlay(
  map: { get: (key: string) => unknown },
  overlay: unknown,
): Record<string, unknown> | null {
  if (peers == null) {
    throw new Error("ParseWorkspaceConfigOverlay peers are not configured");
  }
  const overlayResult = peers.overlaySchema.safeParse(overlay);
  const pathResult = peers.pathSchema.safeParse({
    configPath: map.get("configPath"),
    workspaceRoot: map.get("workspaceRoot"),
  });
  if (!overlayResult.success || !pathResult.success) return null;
  return {
    ...(overlayResult.data as Record<string, unknown>),
    ...(pathResult.data as Record<string, unknown>),
  };
}
