// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `JR`) / export `UB`.

export type BindUBBindableHelperPeers = {
  AXi: (...args: unknown[]) => unknown;
  CXi: (...args: unknown[]) => unknown;
  i: (...args: unknown[]) => unknown;
  jXi: (...args: unknown[]) => unknown;
  tQr: (...args: unknown[]) => unknown;
};

let peers: BindUBBindableHelperPeers | null = null;

/** Wire bindUBBindableHelper peers once companions land. */
export function setBindUBBindableHelperPeers(
  next: BindUBBindableHelperPeers,
): void {
  peers = next;
}

/**
 * Bundle export `UB` / internal `JR`.
 */
export function bindUBBindableHelper() {
  if (peers == null) {
    throw new Error("bindUBBindableHelper peers are not configured");
  }

  return peers.i((e, t) => {
    var n = peers.CXi(),
      r = peers.tQr(),
      i = peers.AXi(),
      a = peers.jXi();
    t.exports = peers.i(function (e, t) {
      if (e == null) return [];
      var i = t.length;
      return (
        peers.i > 1 && a(e, t[0], t[1])
          ? (t = [])
          : peers.i > 2 && a(t[0], t[1], t[2]) && (t = [t[0]]),
        r(e, n(t, 1), [])
      );
    });
  });
}
