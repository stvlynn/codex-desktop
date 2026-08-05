// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ox`) / export `_9`.

export type EnsureAvatarOverlaySessionInitPeers = {
  Lnn: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  fp: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  realtimeVoice: (...args: unknown[]) => unknown;
};

let peers: EnsureAvatarOverlaySessionInitPeers | null = null;

/** Wire ensureAvatarOverlaySessionInit peers once companions land. */
export function setEnsureAvatarOverlaySessionInitPeers(
  next: EnsureAvatarOverlaySessionInitPeers,
): void {
  peers = next;
}

/**
 * Bundle export `_9` / internal `Ox`.
 */
export function ensureAvatarOverlaySessionInit() {
  if (peers == null) {
    throw new Error("ensureAvatarOverlaySessionInit peers are not configured");
  }

  return peers.Ta(peers.Q, () => peers.Lnn, {
    onMount: (e) => {
      let t = peers.gp?.realtimeVoice;
      if (t == null) return;
      let n = !0,
        r = null;
      return (
        t
          .subscribe((t) => {
            n && e(t);
          })
          .then((e) => {
            if (!n)
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
            r = () => {
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
          .catch((e) => {
            peers.Wf.warning(`Failed to subscribe to realtime voice host`, {
              safe: {},
              sensitive: {
                error: e,
              },
            });
          }),
        () => {
          ((n = !1), r?.(), (r = null));
        }
      );
    },
  });
}
