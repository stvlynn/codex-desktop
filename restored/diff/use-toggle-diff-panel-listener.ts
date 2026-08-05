// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `K4s`) / export `_h`.

export type UseToggleDiffPanelListenerPeers = {
  Kf: (...args: unknown[]) => unknown;
  q4s: (...args: unknown[]) => unknown;
};

let peers: UseToggleDiffPanelListenerPeers | null = null;

/** Wire useToggleDiffPanelListener peers once companions land. */
export function setUseToggleDiffPanelListenerPeers(
  next: UseToggleDiffPanelListenerPeers,
): void {
  peers = next;
}

/**
 * Bundle export `_h` / internal `K4s`.
 */
export function useToggleDiffPanelListener(e: unknown) {
  if (peers == null) {
    throw new Error("useToggleDiffPanelListener peers are not configured");
  }

  let t = (0, peers.q4s.c)(3),
    n,
    r;
  (t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : ((n = (t) => {
        e(t.open);
      }),
      (r = [e]),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r)),
    peers.Kf(`toggle-diff-panel`, n, r));
}
