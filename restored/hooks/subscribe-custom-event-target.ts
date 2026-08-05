// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `SP`) / export `UW`.

export type SubscribeCustomEventTargetPeers = {
  CustomEvent: (...args: unknown[]) => unknown;
  cni: (...args: unknown[]) => unknown;
  sni: (...args: unknown[]) => unknown;
};

let peers: SubscribeCustomEventTargetPeers | null = null;

/** Wire subscribeCustomEventTarget peers once companions land. */
export function setSubscribeCustomEventTargetPeers(
  next: SubscribeCustomEventTargetPeers,
): void {
  peers = next;
}

/**
 * Bundle export `UW` / internal `SP`.
 */
export function subscribeCustomEventTarget(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("subscribeCustomEventTarget peers are not configured");
  }

  let { eventTarget: n } = peers.sni.getState(e.state),
    r = (e) => {
      t(e instanceof peers.CustomEvent && e.detail === !0);
    };
  return (
    n.addEventListener(peers.cni, r),
    () => {
      n.removeEventListener(peers.cni, r);
    }
  );
}
