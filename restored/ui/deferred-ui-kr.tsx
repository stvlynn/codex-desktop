// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `a5i`) / export `kR`.

export type BindBindDeferredUiKRPeers = {
  $: (...args: unknown[]) => unknown;
  $8i: (...args: unknown[]) => unknown;
  $l: (...args: unknown[]) => unknown;
  $m: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  E8i: (...args: unknown[]) => unknown;
  Gz: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Kz: (...args: unknown[]) => unknown;
  L8i: (...args: unknown[]) => unknown;
  P8i: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  Ql: (...args: unknown[]) => unknown;
  VL: (...args: unknown[]) => unknown;
  Wz: (...args: unknown[]) => unknown;
  __vite__mapDeps: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  e5i: (...args: unknown[]) => unknown;
  gP: (...args: unknown[]) => unknown;
  i5i: (...args: unknown[]) => unknown;
  import: (...args: unknown[]) => unknown;
  j8i: (...args: unknown[]) => unknown;
  meta: (...args: unknown[]) => unknown;
  n5i: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  r5i: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  t5i: (...args: unknown[]) => unknown;
  w8i: (...args: unknown[]) => unknown;
  z8i: (...args: unknown[]) => unknown;
};
let peers: BindBindDeferredUiKRPeers | null = null;

/** Wire bindBindDeferredUiKR peers once companions land. */
export function setBindBindDeferredUiKRPeers(
  next: BindBindDeferredUiKRPeers,
): void {
  peers = next;
}

/**
 * Bundle export `kR` / internal `a5i`.
 */
export function bindBindDeferredUiKR() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiKR peers are not configured");
  }
  return peers.e(() => {
    $8i = peers.c();
    peers.sd();
    peers.E8i();
    Gz = peers.r(peers.o(), 1);
    peers.$u();
    peers.j8i();
    peers.$m();
    peers.P8i();
    peers.L8i();
    peers.VL();
    peers.gP();
    peers.Pp();
    peers.z8i();
    peers.Wz();
    Kz = peers.J();
    peers.$l();
    e5i = peers.w8i(() => {
      return peers.Ql(
        () => {
          return import("../markdown/highlight-code");
        },
        peers.__vite__mapDeps([438, 1, 439]),
        import.meta.url,
      );
    });
    t5i = "\n";
    n5i = 120;
    r5i = peers.Gz.memo(function (e) {
      let { html } = peers.e,
        r;
      return (
        (r = (
          <span
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        )),
        peers.r
      );
    });
    i5i = function (e) {
      let { children, className, ref } = peers.e,
        a = peers.$("text-size-chat overflow-auto p-2", peers.r);
      let o;
      return (
        (o = (
          <div ref={ref} className={a} dir="ltr">
            {children}
          </div>
        )),
        peers.o
      );
    };
  });
}
