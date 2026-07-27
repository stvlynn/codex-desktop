// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `cac`) / export `Vp`.

export type SetVacRouteForWorkspacePathPeers = {
  toWorkspaceKey: (path: unknown) => unknown;
  toVacRoute: (route: unknown) => unknown;
  toVacPath: (path: unknown) => unknown;
  vacRouteFamilyAtom: unknown;
  vacPathAtom: unknown;
};

let peers: SetVacRouteForWorkspacePathPeers | null = null;

/** Wire VAC route/path peers once companions land. */
export function setSetVacRouteForWorkspacePathPeers(
  next: SetVacRouteForWorkspacePathPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Vp` / internal `cac`.
 * Set VAC route for a workspace path and update the active VAC path.
 */
export function setVacRouteForWorkspacePath(
  store: {
    get: (atom: unknown, key: unknown) => unknown;
    set: (atom: unknown, keyOrValue: unknown, value?: unknown) => void;
  },
  workspacePath: unknown,
  route: unknown,
): void {
  if (peers == null) {
    throw new Error("SetVacRouteForWorkspacePath peers are not configured");
  }
  const key = peers.toWorkspaceKey(workspacePath);
  store.get(peers.vacRouteFamilyAtom, key);
  store.set(peers.vacRouteFamilyAtom, key, { route: peers.toVacRoute(route) });
  store.set(peers.vacPathAtom, peers.toVacPath(workspacePath));
}
