// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `srs`) / export `MC`.

export type BindDeferredUiMCPeers = {
  Da: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  ars: (...args: unknown[]) => unknown;
  fp: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  ors: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiMCPeers | null = null;

/** Wire bindDeferredUiMC peers once companions land. */
export function setBindDeferredUiMCPeers(next: BindDeferredUiMCPeers): void {
  peers = next;
}

/**
 * Bundle export `MC` / internal `srs`.
 */
export function bindDeferredUiMC() {
  if (peers == null) {
    throw new Error("bindDeferredUiMC peers are not configured");
  }

  return peers.Da(peers.Q, (e) => peers.ars, {
    onMount: (e, { key: t }) => {
      if (t == null) return;
      let n = peers.gp.realtimeVoiceHistory;
      if (n == null) {
        e(peers.ors);
        return;
      }
      let r = !0,
        i = null;
      return (
        n
          .subscribe(t, (t) => {
            r && e(t);
          })
          .then((e) => {
            if (!r)
              try {
                var t = peers.fp();
                let n = t.u(e);
                t.u(n.unsubscribe());
                return;
              } catch (e) {
                t.e = e;
              } finally {
                t.d();
              }
            i = () => {
              try {
                var t = peers.fp();
                let n = t.u(e);
                t.u(n.unsubscribe());
              } catch (e) {
                t.e = e;
              } finally {
                t.d();
              }
            };
          })
          .catch((n) => {
            (r && e(peers.ors),
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
  });
}
