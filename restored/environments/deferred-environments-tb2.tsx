// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `iz`) / export `TB`.

export type BindBindDeferredEnvironmentsTB2Peers = {
  BQi: (...args: unknown[]) => unknown;
  EQi: (...args: unknown[]) => unknown;
  Fl: (...args: unknown[]) => unknown;
  IZi: (...args: unknown[]) => unknown;
  LQi: (...args: unknown[]) => unknown;
  MZi: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  RZi: (...args: unknown[]) => unknown;
  bE: (...args: unknown[]) => unknown;
  codexHome: (...args: unknown[]) => unknown;
  origins: (...args: unknown[]) => unknown;
  sp: (...args: unknown[]) => unknown;
  tj: (...args: unknown[]) => unknown;
  wE: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredEnvironmentsTB2Peers | null = null;

/** Wire bindBindDeferredEnvironmentsTB2 peers once companions land. */
export function setBindBindDeferredEnvironmentsTB2Peers(next: BindBindDeferredEnvironmentsTB2Peers): void {
  peers = next;
}

/**
 * Bundle export `TB` / internal `iz`.
 */
export function bindBindDeferredEnvironmentsTB2() {
  if (peers == null) {
    throw new Error("bindBindDeferredEnvironmentsTB2 peers are not configured");
  }

  return peers.Ma(peers.Q, ({ get: e }) => {
    let t = e(peers.wE).data,
      n = e(peers.BQi).data?.origins ?? peers.LQi,
      r = peers.EQi(e);
    return peers.MZi(
      [
        ...peers.IZi(
          peers.sp(e, peers.Fl.LOCAL_PROJECTS),
          t,
          n,
          e(peers.bE, void 0).data?.codexHome,
        ),
        ...peers.RZi(r, e(peers.tj)),
      ],
      peers.sp(e, peers.Fl.PROJECT_ORDER),
    );
  });
}
