// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `NK`) / export `Ik`.

export type BindDeferredUiIkPeers = {
  Dwo: (...args: unknown[]) => unknown;
  Ewo: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Owo: (...args: unknown[]) => unknown;
  Swo: (...args: unknown[]) => unknown;
  Two: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  kwo: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  wwo: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiIkPeers | null = null;

/** Wire bindDeferredUiIk peers once companions land. */
export function setBindDeferredUiIkPeers(next: BindDeferredUiIkPeers): void {
  peers = next;
}

/**
 * Bundle export `Ik` / internal `NK`.
 */
export function bindDeferredUiIk() {
  if (peers == null) {
    throw new Error("bindDeferredUiIk peers are not configured");
  }

  return peers.e(() => {
    ((wwo = peers.c()),
      peers.sd(),
      peers.Swo(),
      (Two = peers.J()),
      (Ewo = 12),
      (Dwo = 120),
      (Owo = 0),
      (kwo = 100));
  });
}
