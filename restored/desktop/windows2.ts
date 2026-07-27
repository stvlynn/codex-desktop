// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Gw`) / export `u5`.

export type BindWindows2Peers = {
  Ho: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ww: (...args: unknown[]) => unknown;
  XGn: (...args: unknown[]) => unknown;
  YGn: (...args: unknown[]) => unknown;
  ZGn: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  platform: (...args: unknown[]) => unknown;
};

let peers: BindWindows2Peers | null = null;

/** Wire bindWindows2 peers once companions land. */
export function setBindWindows2Peers(next: BindWindows2Peers): void {
  peers = next;
}

/**
 * Bundle export `u5` / internal `Gw`.
 */
export function bindWindows2() {
  if (peers == null) {
    throw new Error("bindWindows2 peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.ed(), peers.XGn(), Ww = peers.Ma(peers.Q, ({
      get: e
    }) => peers.ZGn(peers.e(peers.YGn).data?.platform));
  });
}
