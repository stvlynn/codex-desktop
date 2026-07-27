// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Kv`) / export `Drt`.

export type DndAxisLockModifiersPeers = {
  $Bt: (...args: unknown[]) => unknown;
  Gv: (...args: unknown[]) => unknown;
  QBt: (...args: unknown[]) => unknown;
  UBt: (...args: unknown[]) => unknown;
  Uv: (...args: unknown[]) => unknown;
  Wv: (...args: unknown[]) => unknown;
  XBt: (...args: unknown[]) => unknown;
  YBt: (...args: unknown[]) => unknown;
  ZBt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: DndAxisLockModifiersPeers | null = null;

/** Wire dndAxisLockModifiers peers once companions land. */
export function setDndAxisLockModifiersPeers(next: DndAxisLockModifiersPeers): void {
  peers = next;
}

/**
 * Bundle export `Drt` / internal `Kv`.
 */
export function dndAxisLockModifiers() {
  if (peers == null) {
    throw new Error("dndAxisLockModifiers peers are not configured");
  }

  return peers.e(() => {
    Uv = peers.r(peers.o()), YBt = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0, Wv = peers.YBt ? peers.Uv.useLayoutEffect : peers.Uv.useEffect, XBt = {}, ZBt = peers.UBt(1), QBt = peers.UBt(-1), Gv = Object.freeze({
      Translate: {
        toString(e) {
          if (!peers.e) return;
          let {
            x: t,
            y: n
          } = peers.e;
          return `translate3d(` + (t ? Math.round(t) : 0) + `px, ` + (n ? Math.round(n) : 0) + `px, 0)`;
        }
      },
      Scale: {
        toString(e) {
          if (!peers.e) return;
          let {
            scaleX: t,
            scaleY: n
          } = peers.e;
          return `scaleX(` + t + `) scaleY(` + n + `)`;
        }
      },
      Transform: {
        toString(e) {
          if (peers.e) return [peers.Gv.Translate.toString(peers.e), peers.Gv.Scale.toString(peers.e)].join(` `);
        }
      },
      Transition: {
        toString(e) {
          let {
            property: t,
            duration: n,
            easing: r
          } = peers.e;
          return t + ` ` + n + `ms ` + peers.r;
        }
      }
    }), $Bt = `a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]`;
  });
}
