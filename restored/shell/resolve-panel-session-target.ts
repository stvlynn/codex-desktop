// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — real body via extractFn(internal `Vzi`) / export `sU`.
// Target resolution peers bind via setResolvePanelSessionTargetPeers.

export type ResolvePanelSessionTargetPeers = {
  mergeTarget: (store: unknown, next: unknown, name: unknown) => unknown;
  resolveDefault: (store: unknown) => unknown;
  resolveNamed: (store: unknown, name: unknown, fallback: unknown) => unknown;
};

let peers: ResolvePanelSessionTargetPeers | null = null;

/** Wire panel session target resolvers once companions land. */
export function setResolvePanelSessionTargetPeers(
  next: ResolvePanelSessionTargetPeers,
): void {
  peers = next;
}

/**
 * Bundle export `sU` / internal `Vzi`.
 * Resolve which panel session target to focus/open.
 */
export function resolvePanelSessionTarget(
  store: unknown,
  name?: unknown,
  fallback?: unknown,
): unknown {
  if (peers == null) {
    throw new Error("Resolve panel session target peers are not configured");
  }
  const base = fallback ?? peers.resolveDefault(store);
  return peers.mergeTarget(
    store,
    name == null ? base : peers.resolveNamed(store, name, base),
    name,
  );
}
