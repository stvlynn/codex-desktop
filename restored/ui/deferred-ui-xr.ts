// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `o8i`) / export `XR`.

export type BindDeferredUiXRPeers = {
  a8i: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  i8i: (...args: unknown[]) => unknown;
  n8i: (...args: unknown[]) => unknown;
  r8i: (...args: unknown[]) => unknown;
  t8i: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiXRPeers | null = null;

/** Wire bindDeferredUiXR peers once companions land. */
export function setBindDeferredUiXRPeers(next: BindDeferredUiXRPeers): void {
  peers = next;
}

/**
 * Bundle export `XR` / internal `o8i`.
 */
export function bindDeferredUiXR() {
  if (peers == null) {
    throw new Error("bindDeferredUiXR peers are not configured");
  }

  return peers.e(() => {
    ((t8i = [25, 50, 100, 150, 200]),
      (n8i = peers.t8i),
      (r8i = 10),
      (i8i = 400),
      (a8i = 0.01));
  });
}
