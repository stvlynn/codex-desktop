// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jk`) / export `T1`.

export type DeferredT1Peers = {
  Ak: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: DeferredT1Peers | null = null;

/** Wire deferredT1 peers once companions land. */
export function setDeferredT1Peers(next: DeferredT1Peers): void {
  peers = next;
}

/**
 * Bundle export `T1` / internal `jk`.
 */
export function deferredT1() {
  if (peers == null) {
    throw new Error("deferredT1 peers are not configured");
  }

  return peers.e(() => {
    Ak = (...e) => t => {
      if (t == null) {
        peers.e.forEach(e => {
          if (typeof peers.e == `function`) peers.e(null);else if (peers.e) {
            let t = peers.e;
            t.current = null;
          }
        });
        return;
      }
      let n = [];
      if (peers.e.forEach(e => {
        if (typeof peers.e == `function`) {
          let r = peers.e(t);
          typeof r == `function` ? n.push(r) : n.push(() => peers.e(null));
        } else if (peers.e) {
          let r = peers.e;
          r.current = t, n.push(() => {
            r.current = null;
          });
        }
      }), n.length !== 0) return () => {
        n.forEach(e => peers.e());
      };
    };
  });
}
