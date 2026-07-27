// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `eGi`) / export `YV`.

export type DeferredUiYVPeers = {
  $Wi: (...args: unknown[]) => unknown;
  $l: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  QWi: (...args: unknown[]) => unknown;
  Ql: (...args: unknown[]) => unknown;
  XWi: (...args: unknown[]) => unknown;
  ZWi: (...args: unknown[]) => unknown;
  __vite__mapDeps: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  import: (...args: unknown[]) => unknown;
  meta: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: DeferredUiYVPeers | null = null;

/** Wire deferredUiYV peers once companions land. */
export function setDeferredUiYVPeers(next: DeferredUiYVPeers): void {
  peers = next;
}

/**
 * Bundle export `YV` / internal `eGi`.
 */
export function deferredUiYV() {
  if (peers == null) {
    throw new Error("deferredUiYV peers are not configured");
  }

  return peers.e(() => {
    XWi = peers.c(), ZWi = peers.r(peers.o(), 1), peers.$u(), QWi = peers.J(), peers.$l(), $Wi = (0, peers.ZWi.lazy)(async () => {
      let {
        ArtifactTabContent: e
      } = await peers.Ql(async () => {
        let {
          ArtifactTabContent: e
        } = await import(`./artifact-tab-content.electron-z_W871m1.js`);
        return {
          ArtifactTabContent: peers.e
        };
      }, peers.__vite__mapDeps([434, 1, 435, 436, 437]), import.meta.url);
      return {
        default: peers.e
      };
    });
  });
}
