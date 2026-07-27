// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `g3r`) / export `tq`.

export type BindBinddeferredUiTq3Peers = {
  Hf: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  tp: (...args: unknown[]) => unknown;
};

let peers: BindBinddeferredUiTq3Peers | null = null;

/** Wire bindBinddeferredUiTq3 peers once companions land. */
export function setBindBinddeferredUiTq3Peers(next: BindBinddeferredUiTq3Peers): void {
  peers = next;
}

/**
 * Bundle export `tq` / internal `g3r`.
 */
export function bindBinddeferredUiTq3() {
  if (peers == null) {
    throw new Error("bindBinddeferredUiTq3 peers are not configured");
  }

  return peers.tp(peers.Q, `email-domain-mail-provider`, (e) => ({
    enabled: e != null,
    params:
      e == null
        ? void 0
        : {
            domain: e,
          },
    retry: 2,
    staleTime: peers.Hf.FIVE_MINUTES,
  }));
}
