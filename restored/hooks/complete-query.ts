// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `lU`) / export `nM`.

export type BindCompleteQueryPeers = {
  BJa: (...args: unknown[]) => unknown;
  SP: (...args: unknown[]) => unknown;
  ani: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  cU: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ini: (...args: unknown[]) => unknown;
  lni: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sU: (...args: unknown[]) => unknown;
  zJa: (...args: unknown[]) => unknown;
};

let peers: BindCompleteQueryPeers | null = null;

/** Wire bindCompleteQuery peers once companions land. */
export function setBindCompleteQueryPeers(next: BindCompleteQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `nM` / internal `lU`.
 */
export function bindCompleteQuery() {
  if (peers == null) {
    throw new Error("bindCompleteQuery peers are not configured");
  }

  return peers.e(() => {
    ((zJa = peers.c()),
      (BJa = peers.r(peers.o(), 1)),
      peers.ani(),
      peers.lni(),
      (sU = () => {
        let e = (0, peers.BJa.useContext)(peers.ini);
        if (!peers.e)
          throw Error(
            `useComposerController must be used within a ComposerControllerScope`,
          );
        return peers.e;
      }),
      (cU = (e, t) => {
        let n = (0, peers.zJa.c)(6),
          r;
        n[0] === peers.e.view
          ? (r = n[1])
          : ((r = (t) => peers.SP(peers.e.view, t)),
            (n[0] = peers.e.view),
            (n[1] = peers.r));
        let i, a;
        return (
          n[2] !== peers.e || n[3] !== t
            ? ((i = () => t(peers.e)),
              (a = () => t(peers.e)),
              (n[2] = peers.e),
              (n[3] = t),
              (n[4] = i),
              (n[5] = a))
            : ((i = n[4]), (a = n[5])),
          (0, peers.BJa.useSyncExternalStore)(peers.r, i, a)
        );
      }));
  });
}
