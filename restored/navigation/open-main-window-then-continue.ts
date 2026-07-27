// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bis`) / export `SC`.

export type OpenMainWindowThenContinuePeers = {
  Jf: (...args: unknown[]) => unknown;
  Wk: (...args: unknown[]) => unknown;
  _is: (...args: unknown[]) => unknown;
  xis: (...args: unknown[]) => unknown;
};

let peers: OpenMainWindowThenContinuePeers | null = null;

/** Wire openMainWindowThenContinue peers once companions land. */
export function setOpenMainWindowThenContinuePeers(next: OpenMainWindowThenContinuePeers): void {
  peers = next;
}

/**
 * Bundle export `SC` / internal `bis`.
 */
export function openMainWindowThenContinue(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("openMainWindowThenContinue peers are not configured");
  }

  if (e.get(peers.xis)) {
    t();
    return;
  }
  (peers.Jf.dispatchMessage(`open-current-main-window`, {
    stealFocus: !0,
  }),
    peers.Wk(e, peers._is, {
      onContinue: () => {
        (e.set(peers.xis, !0), t());
      },
    }));
}
