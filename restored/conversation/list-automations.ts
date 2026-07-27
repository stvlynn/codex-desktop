// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `cwu`) / export `s`.

export type ListAutomationsPeers = {
  Ho: (...args: unknown[]) => unknown;
  Ia: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  _p: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  owu: (...args: unknown[]) => unknown;
  swu: (...args: unknown[]) => unknown;
};

let peers: ListAutomationsPeers | null = null;

/** Wire listAutomations peers once companions land. */
export function setListAutomationsPeers(next: ListAutomationsPeers): void {
  peers = next;
}

/**
 * Bundle export `s` / internal `cwu`.
 */
export function listAutomations() {
  if (peers == null) {
    throw new Error("listAutomations peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers._p(),
      peers.ed(),
      (owu = [`hotkey-window-hotkey-state`]),
      (swu = peers.Ia(peers.Q, () => ({
        queryKey: peers.owu,
        queryFn: async () => {
          let e = peers.gp.hotkeyWindowHotkeys;
          return peers.e == null
            ? {
                supported: !1,
                configuredHotkey: null,
                isGateEnabled: !1,
                isDevMode: !1,
                isDevOverrideEnabled: !1,
                isActive: !1,
              }
            : peers.e.getState();
        },
      }))));
  });
}
