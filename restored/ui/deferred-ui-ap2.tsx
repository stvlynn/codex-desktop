// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dH`) / export `AP`.

export type BindBindDeferredUiAP2Peers = {
  Hf: (...args: unknown[]) => unknown;
  IOa: (...args: unknown[]) => unknown;
  Ia: (...args: unknown[]) => unknown;
  MV: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  lockdown_mode_enabled: (...args: unknown[]) => unknown;
  model_picker_persists_ultra_effort: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiAP2Peers | null = null;

/** Wire bindBindDeferredUiAP2 peers once companions land. */
export function setBindBindDeferredUiAP2Peers(
  next: BindBindDeferredUiAP2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `AP` / internal `dH`.
 */
export function bindBindDeferredUiAP2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiAP2 peers are not configured");
  }

  return peers.Ia(peers.Q, ({ scope: e }) => ({
    queryFn: async () => {
      let t = peers.IOa.parse(await e.get(peers.MV).userSettings());
      return {
        lockdownModeEnabled: t.settings?.lockdown_mode_enabled === !0,
        ultraEffortEnabled:
          t.settings?.model_picker_persists_ultra_effort === !0,
      };
    },
    queryKey: [`chatgpt-user-settings`],
    refetchOnWindowFocus: `always`,
    staleTime: peers.Hf.ONE_MINUTE,
  }));
}
