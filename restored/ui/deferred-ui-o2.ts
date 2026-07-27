// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `swu`) / export `o`.

export type DeferredUiO2Peers = {
  Ia: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  owu: (...args: unknown[]) => unknown;
};

let peers: DeferredUiO2Peers | null = null;

/** Wire deferredUiO2 peers once companions land. */
export function setDeferredUiO2Peers(next: DeferredUiO2Peers): void {
  peers = next;
}

/**
 * Bundle export `o` / internal `swu`.
 */
export function deferredUiO2() {
  if (peers == null) {
    throw new Error("deferredUiO2 peers are not configured");
  }

  return peers.Ia(peers.Q, () => ({
    queryKey: peers.owu,
    queryFn: async () => {
      let e = peers.gp.hotkeyWindowHotkeys;
      return e == null
        ? {
            supported: !1,
            configuredHotkey: null,
            isGateEnabled: !1,
            isDevMode: !1,
            isDevOverrideEnabled: !1,
            isActive: !1,
          }
        : e.getState();
    },
  }));
}
