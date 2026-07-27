// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `d5s`) / export `_m`.

export type ParseWorkspaceConfigOverlayPeers = {
  h5s: (...args: unknown[]) => unknown;
  m5s: (...args: unknown[]) => unknown;
};

let peers: ParseWorkspaceConfigOverlayPeers | null = null;

/** Wire parseWorkspaceConfigOverlay peers once companions land. */
export function setParseWorkspaceConfigOverlayPeers(next: ParseWorkspaceConfigOverlayPeers): void {
  peers = next;
}

/**
 * Bundle export `_m` / internal `d5s`.
 */
export function parseWorkspaceConfigOverlay(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("parseWorkspaceConfigOverlay peers are not configured");
  }

  let n = peers.m5s.safeParse(t),
    r = peers.h5s.safeParse({
      configPath: e.get(`configPath`),
      workspaceRoot: e.get(`workspaceRoot`),
    });
  return !n.success || !r.success
    ? null
    : {
        ...n.data,
        ...r.data,
      };
}
