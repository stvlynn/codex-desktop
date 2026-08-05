// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Tjr`) / export `XQ`.

export type BindBindBrowser2Peers = {
  Au: (...args: unknown[]) => unknown;
  Cjr: (...args: unknown[]) => unknown;
  Qf: (...args: unknown[]) => unknown;
  Sjr: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  Wh: (...args: unknown[]) => unknown;
  bjr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  il: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  ujr: (...args: unknown[]) => unknown;
  wjr: (...args: unknown[]) => unknown;
  xjr: (...args: unknown[]) => unknown;
};

let peers: BindBindBrowser2Peers | null = null;

/** Wire bindBindBrowser2 peers once companions land. */
export function setBindBindBrowser2Peers(next: BindBindBrowser2Peers): void {
  peers = next;
}

/**
 * Bundle export `XQ` / internal `Tjr`.
 */
export function bindBindBrowser2() {
  if (peers == null) {
    throw new Error("bindBindBrowser2 peers are not configured");
  }

  return peers.e(() => {
    (peers.Au(),
      peers.Sl(),
      peers.ujr(),
      peers.Wh(),
      peers.Qf(),
      (bjr = 100),
      (xjr = peers.sl({
        mfa_enabled_v2: peers.il(),
      })),
      (Sjr = class extends Error {}),
      (Cjr = class extends Error {}),
      (wjr = class extends Error {}));
  });
}
