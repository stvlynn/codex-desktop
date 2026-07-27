// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `z2e`) / export `fut`.

export type BindDeferredfutPeers = {
  C2e: (...args: unknown[]) => unknown;
  F2e: (...args: unknown[]) => unknown;
  I2e: (...args: unknown[]) => unknown;
  L2e: (...args: unknown[]) => unknown;
  M2e: (...args: unknown[]) => unknown;
  N2e: (...args: unknown[]) => unknown;
  P2e: (...args: unknown[]) => unknown;
  R2e: (...args: unknown[]) => unknown;
  S2e: (...args: unknown[]) => unknown;
  T2e: (...args: unknown[]) => unknown;
  _2e: (...args: unknown[]) => unknown;
  b2e: (...args: unknown[]) => unknown;
  dm: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fm: (...args: unknown[]) => unknown;
  j2e: (...args: unknown[]) => unknown;
  ju: (...args: unknown[]) => unknown;
  mm: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  pm: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  v2e: (...args: unknown[]) => unknown;
  x2e: (...args: unknown[]) => unknown;
  y2e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredfutPeers | null = null;

/** Wire bindDeferredfut peers once companions land. */
export function setBindDeferredfutPeers(next: BindDeferredfutPeers): void {
  peers = next;
}

/**
 * Bundle export `fut` / internal `z2e`.
 */
export function bindDeferredfut() {
  if (peers == null) {
    throw new Error("bindDeferredfut peers are not configured");
  }

  return peers.e(() => {
    peers.T2e(), dm = peers.r(peers.o(), 1), j2e = peers.r(peers.o(), 1), M2e = peers.r(peers.ju(), 1), N2e = typeof document < `u` ? peers.j2e.useLayoutEffect : function () {}, P2e = e => {
      function t(e) {
        return {}.hasOwnProperty.call(peers.e, `current`);
      }
      return {
        name: `arrow`,
        options: peers.e,
        fn(n) {
          let {
            element: r,
            padding: i
          } = typeof peers.e == `function` ? peers.e(peers.n) : peers.e;
          return peers.r && peers.t(peers.r) ? peers.r.current == null ? {} : peers.S2e({
            element: peers.r.current,
            padding: i
          }).fn(peers.n) : peers.r ? peers.S2e({
            element: peers.r,
            padding: i
          }).fn(peers.n) : {};
        }
      };
    }, fm = (e, t) => ({
      ...peers._2e(peers.e),
      options: [peers.e, peers.t]
    }), pm = (e, t) => ({
      ...peers.v2e(peers.e),
      options: [peers.e, peers.t]
    }), F2e = (e, t) => ({
      ...peers.C2e(peers.e),
      options: [peers.e, peers.t]
    }), mm = (e, t) => ({
      ...peers.y2e(peers.e),
      options: [peers.e, peers.t]
    }), I2e = (e, t) => ({
      ...peers.b2e(peers.e),
      options: [peers.e, peers.t]
    }), L2e = (e, t) => ({
      ...peers.x2e(peers.e),
      options: [peers.e, peers.t]
    }), R2e = (e, t) => ({
      ...peers.P2e(peers.e),
      options: [peers.e, peers.t]
    });
  });
}
