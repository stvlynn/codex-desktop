// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Gv`) / export `Ert`.

export type BindDeferredDesktopErtPeers = {
  Gv: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredDesktopErtPeers | null = null;

/** Wire bindDeferredDesktopErt peers once companions land. */
export function setBindDeferredDesktopErtPeers(
  next: BindDeferredDesktopErtPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ert` / internal `Gv`.
 */
export function bindDeferredDesktopErt() {
  if (peers == null) {
    throw new Error("bindDeferredDesktopErt peers are not configured");
  }

  return Object.freeze({
    Translate: {
      toString(e) {
        if (!peers.e) return;
        let { x: t, y: n } = peers.e;
        return (
          `translate3d(` +
          (t ? Math.round(t) : 0) +
          `px, ` +
          (n ? Math.round(n) : 0) +
          `px, 0)`
        );
      },
    },
    Scale: {
      toString(e) {
        if (!peers.e) return;
        let { scaleX: t, scaleY: n } = peers.e;
        return `scaleX(` + t + `) scaleY(` + n + `)`;
      },
    },
    Transform: {
      toString(e) {
        if (peers.e)
          return [
            peers.Gv.Translate.toString(peers.e),
            peers.Gv.Scale.toString(peers.e),
          ].join(` `);
      },
    },
    Transition: {
      toString(e) {
        let { property: t, duration: n, easing: r } = peers.e;
        return t + ` ` + n + `ms ` + r;
      },
    },
  });
}
