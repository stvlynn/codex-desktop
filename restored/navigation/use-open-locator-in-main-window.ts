// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Obu`) / export `G`.

export type UseOpenLocatorInMainWindowPeers = {
  Abu: (...args: unknown[]) => unknown;
  Cbu: (...args: unknown[]) => unknown;
  Dbu: (...args: unknown[]) => unknown;
  Jf: (...args: unknown[]) => unknown;
};

let peers: UseOpenLocatorInMainWindowPeers | null = null;

/** Wire useOpenLocatorInMainWindow peers once companions land. */
export function setUseOpenLocatorInMainWindowPeers(next: UseOpenLocatorInMainWindowPeers): void {
  peers = next;
}

/**
 * Bundle export `G` / internal `Obu`.
 */
export function useOpenLocatorInMainWindow(e: unknown) {
  if (peers == null) {
    throw new Error("useOpenLocatorInMainWindow peers are not configured");
  }

  let t = (0, peers.Abu.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = () => {
          e != null &&
            (peers.Dbu({
              locator: e,
              surface: `main-thread`,
            }),
            peers.Jf.dispatchMessage(`open-in-main-window`, {
              path: peers.Cbu(e),
            }));
        }),
        (t[0] = e),
        (t[1] = n)),
    e == null ? void 0 : n
  );
}
