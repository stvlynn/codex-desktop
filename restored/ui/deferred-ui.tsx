// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yV`) / export `UI`.

export type BindDeferredUIPeers = {
  Cln: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Kx: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Oln: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  _V: (...args: unknown[]) => unknown;
  a_a: (...args: unknown[]) => unknown;
  d_a: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  f_a: (...args: unknown[]) => unknown;
  kln: (...args: unknown[]) => unknown;
  l_a: (...args: unknown[]) => unknown;
  o_a: (...args: unknown[]) => unknown;
  qx: (...args: unknown[]) => unknown;
  s_a: (...args: unknown[]) => unknown;
  u_a: (...args: unknown[]) => unknown;
  vV: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUIPeers | null = null;

/** Wire bindDeferredUI peers once companions land. */
export function setBindDeferredUIPeers(next: BindDeferredUIPeers): void {
  peers = next;
}

/**
 * Bundle export `UI` / internal `yV`.
 */
export function bindDeferredUI() {
  if (peers == null) {
    throw new Error("bindDeferredUI peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.ed(),
      peers.qx(),
      peers.kln(),
      (l_a = [
        peers.Kx.FREE,
        peers.Kx.GO,
        peers.Kx.PLUS,
        peers.Kx.PRO,
        peers.Kx.PROLITE,
        peers.Kx.SELF_SERVE_BUSINESS,
        peers.Kx.ENTERPRISE_CBP,
        peers.Kx.FINSERV,
        peers.Kx.EDUCATION_CBP,
        peers.Kx.EDU_PLUS,
        peers.Kx.EDU_PRO,
        peers.Kx.QUORUM,
        peers.Kx.DEPRECATED_ENTERPRISE,
        peers.Kx.HC,
        peers.Kx.DEPRECATED_ENTERPRISE_2,
        peers.Kx.DEPRECATED_EDU,
        peers.Kx.DEPRECATED_EDU_2,
      ]),
      (u_a = peers.Ta(
        peers.Q,
        {
          accountId: null,
          accountLoading: !0,
          authLoading: !0,
          authMethod: null,
          authenticatedAccountId: null,
          plan: null,
          supportedSurface: !1,
        },
        {
          isEqual: peers.o_a,
        },
      )),
      (d_a = peers.Ma(peers.Q, ({ get: e }) => peers.a_a(peers.e(peers.u_a)), {
        isEqual: peers.s_a,
      })),
      (_V = peers.Ma(
        peers.Q,
        ({ get: e }) => peers.Cln(peers.e(peers.Oln)) ?? peers.e(peers.d_a),
        {
          isEqual: peers.s_a,
        },
      )),
      (f_a = peers.Ma(peers.Q, ({ get: e }) => peers.e(peers._V).status)),
      (vV = peers.Ma(
        peers.Q,
        ({ get: e }) => peers.e(peers._V).status === `allowed`,
      )));
  });
}
