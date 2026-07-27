// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Wnn`) / export `m9`.

export type BindDeferredm9Peers = {
  Da: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Hnn: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Ox: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Unn: (...args: unknown[]) => unknown;
  Vnn: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  _p: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fp: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  kx: (...args: unknown[]) => unknown;
  pp: (...args: unknown[]) => unknown;
  realtimeVoiceMultiAgentActivity: (...args: unknown[]) => unknown;
};

let peers: BindDeferredm9Peers | null = null;

/** Wire bindDeferredm9 peers once companions land. */
export function setBindDeferredm9Peers(next: BindDeferredm9Peers): void {
  peers = next;
}

/**
 * Bundle export `m9` / internal `Wnn`.
 */
export function bindDeferredm9() {
  if (peers == null) {
    throw new Error("bindDeferredm9 peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers._p(),
      peers.ed(),
      peers.Gf(),
      peers.kx(),
      peers.pp(),
      (Vnn = {
        activities: [],
      }),
      (Hnn = peers.Da(peers.Q, (e) => peers.Vnn, {
        onMount: (e, { key: t }) => {
          let n = peers.gp?.realtimeVoiceMultiAgentActivity;
          if (n == null) return;
          let r = !0,
            i = null;
          return (
            n
              .subscribe(t, (t) => {
                r && peers.e(t);
              })
              .then((e) => {
                if (!r)
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
                i = () => {
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
              })
              .catch((e) => {
                peers.Wf.warning(
                  `Failed to subscribe to realtime voice multi-agent activity`,
                  {
                    safe: {},
                    sensitive: {
                      error: peers.e,
                      locator: t,
                    },
                  },
                );
              }),
            () => {
              ((r = !1), i?.(), (i = null));
            }
          );
        },
      })),
      (Unn = peers.Ma(peers.Q, ({ get: e }) => {
        let t = peers.e(peers.Ox);
        return t.phase === `inactive`
          ? peers.Vnn
          : peers.e(peers.Hnn, t.locator);
      })));
  });
}
