// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Pbu`) / export `H`.

export type DeferredUiHPeers = {
  Abu: (...args: unknown[]) => unknown;
  Ebu: (...args: unknown[]) => unknown;
  Fat: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Mbu: (...args: unknown[]) => unknown;
  Nbu: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  V9: (...args: unknown[]) => unknown;
  Yf: (...args: unknown[]) => unknown;
  _p: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fp: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  ih: (...args: unknown[]) => unknown;
  jbu: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  pp: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  realtimeVoicePresentation: (...args: unknown[]) => unknown;
  zm: (...args: unknown[]) => unknown;
};

let peers: DeferredUiHPeers | null = null;

/** Wire deferredUiH peers once companions land. */
export function setDeferredUiHPeers(next: DeferredUiHPeers): void {
  peers = next;
}

/**
 * Bundle export `H` / internal `Pbu`.
 */
export function deferredUiH() {
  if (peers == null) {
    throw new Error("deferredUiH peers are not configured");
  }

  return peers.e(() => {
    ((Abu = peers.c()),
      peers.Ho(),
      (V9 = peers.r(peers.o(), 1)),
      peers.zm(),
      peers.ih(),
      peers.Yf(),
      peers._p(),
      peers.ed(),
      peers.Ebu(),
      peers.Fat(),
      peers.pp(),
      (jbu = {
        active: null,
      }),
      (Mbu = peers.Ta(peers.Q, () => peers.jbu, {
        onMount: (e) => {
          let t = peers.gp?.realtimeVoicePresentation;
          if (t == null) return;
          let n = !0,
            r = null;
          return (
            t
              .subscribe((t) => {
                n && peers.e(t);
              })
              .then((e) => {
                if (!n)
                  try {
                    var t = peers.fp();
                    let n = t.u(peers.e);
                    t.u(n.unsubscribe());
                    return;
                  } catch (e) {
                    t.e = peers.e;
                  } finally {
                    t.d();
                  }
                r = () => {
                  try {
                    var t = peers.fp();
                    let n = t.u(peers.e);
                    t.u(n.unsubscribe());
                  } catch (e) {
                    t.e = peers.e;
                  } finally {
                    t.d();
                  }
                };
              }),
            () => {
              ((n = !1), peers.r?.(), (r = null));
            }
          );
        },
      })),
      (Nbu = peers.Ma(peers.Q, ({ get: e }) => peers.e(peers.Mbu).active)));
  });
}

// Semantic export aliases (split/export lane)
export { deferredUiH as DeferredUiH };
