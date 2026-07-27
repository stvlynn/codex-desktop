// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `crs`) / export `jC`.

export type InactiveIdleStatePeers = {
  Da: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  _p: (...args: unknown[]) => unknown;
  ars: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fp: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  ors: (...args: unknown[]) => unknown;
  pp: (...args: unknown[]) => unknown;
  srs: (...args: unknown[]) => unknown;
};

let peers: InactiveIdleStatePeers | null = null;

/** Wire inactiveIdleState peers once companions land. */
export function setInactiveIdleStatePeers(next: InactiveIdleStatePeers): void {
  peers = next;
}

/**
 * Bundle export `jC` / internal `crs`.
 */
export function inactiveIdleState() {
  if (peers == null) {
    throw new Error("inactiveIdleState peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers._p(),
      peers.ed(),
      peers.Gf(),
      peers.pp(),
      (ars = {
        entries: [],
        isLoaded: !1,
        records: [],
      }),
      (ors = {
        entries: [],
        isLoaded: !0,
        records: [],
      }),
      (srs = peers.Da(peers.Q, (e) => peers.ars, {
        onMount: (e, { key: t }) => {
          if (t == null) return;
          let n = peers.gp.realtimeVoiceHistory;
          if (n == null) {
            peers.e(peers.ors);
            return;
          }
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
              .catch((n) => {
                (r && peers.e(peers.ors),
                  peers.Wf.warning(
                    `Failed to subscribe to realtime transcript history`,
                    {
                      safe: {},
                      sensitive: {
                        error: n,
                        locator: t,
                      },
                    },
                  ));
              }),
            () => {
              ((r = !1), i?.(), (i = null));
            }
          );
        },
      })));
  });
}
