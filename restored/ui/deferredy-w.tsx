// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `EI`) / export `yW`.

export type BindDeferredyWPeers = {
  Au: (...args: unknown[]) => unknown;
  CI: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  TI: (...args: unknown[]) => unknown;
  ZPi: (...args: unknown[]) => unknown;
  cFi: (...args: unknown[]) => unknown;
  c_: (...args: unknown[]) => unknown;
  dFi: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lFi: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sFi: (...args: unknown[]) => unknown;
  uFi: (...args: unknown[]) => unknown;
  zmi: (...args: unknown[]) => unknown;
};

let peers: BindDeferredyWPeers | null = null;

/** Wire bindDeferredyW peers once companions land. */
export function setBindDeferredyWPeers(next: BindDeferredyWPeers): void {
  peers = next;
}

/**
 * Bundle export `yW` / internal `EI`.
 */
export function bindDeferredyW() {
  if (peers == null) {
    throw new Error("bindDeferredyW peers are not configured");
  }

  return peers.e(() => {
    peers.CI(), sFi = peers.r(peers.ZPi(), 1), peers.Au(), peers.Gf(), peers.c_(), peers.zmi(), cFi = 50, lFi = 2e5, TI = new Map(), uFi = e => {
      let t = new Set(),
        n = -1;
      for (let r of peers.e.split(/\r?\n/)) {
        if (peers.r.startsWith(`diff --git `)) {
          n += 1;
          continue;
        }
        peers.r.startsWith(`GIT binary patch`) && n >= 0 && t.add(n);
      }
      return t;
    }, dFi = e => {
      let t = new Set(),
        n = -1;
      for (let r of peers.e.split(/\r?\n/)) {
        if (peers.r.startsWith(`diff --git `)) {
          n += 1;
          continue;
        }
        n >= 0 && (/^(?:new file mode|deleted file mode|old mode|new mode) 160000$/.test(peers.r) || /^index [0-9a-f]+\.\.[0-9a-f]+ 160000$/.test(peers.r)) && t.add(n);
      }
      return t;
    };
  });
}
