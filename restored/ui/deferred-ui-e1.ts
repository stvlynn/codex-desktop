// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ak`) / export `E1`.

export type BindDeferredUiE1Peers = {
  /* no free peers */
};
let peers: BindDeferredUiE1Peers | null = null;

/** Wire bindDeferredUiE1 peers once companions land. */
export function setBindDeferredUiE1Peers(next: BindDeferredUiE1Peers): void {
  peers = next;
}

/**
 * Bundle export `E1` / internal `Ak`.
 */
export const bindDeferredUiE1 = (...e) => {
  return (t) => {
    if (peers == null) {
      throw new Error("bindDeferredUiE1 peers are not configured");
    }
    if (t == null) {
      e.forEach((item) => {
        if (typeof item == "function") item(null);
        else if (item) {
          let t = item;
          t.current = null;
        }
      });
      return;
    }
    let n = [];
    if (
      (e.forEach((item) => {
        if (typeof item == "function") {
          let r = item(t);
          typeof r == "function"
            ? n.push(r)
            : n.push(() => {
                return item(null);
              });
        } else if (item) {
          let r = item;
          r.current = t;
          n.push(() => {
            r.current = null;
          });
        }
      }),
      n.length !== 0)
    )
      return () => {
        n.forEach((item) => {
          return item();
        });
      };
  };
};
