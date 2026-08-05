// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hxu`) / export `L`.

export type UseChronicleSettingsSectionPeers = {
  LE: (...args: unknown[]) => unknown;
  P6n: (...args: unknown[]) => unknown;
  pxu: (...args: unknown[]) => unknown;
  rh: (...args: unknown[]) => unknown;
};

let peers: UseChronicleSettingsSectionPeers | null = null;

/** Wire useChronicleSettingsSection peers once companions land. */
export function setUseChronicleSettingsSectionPeers(
  next: UseChronicleSettingsSectionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `L` / internal `hxu`.
 */
export function useChronicleSettingsSection(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("useChronicleSettingsSection peers are not configured");
  }

  return t instanceof peers.P6n
    ? (e.get(peers.rh).danger(
        e.get(peers.LE).formatMessage({
          id: `settings.remoteConnections.remoteControlServerAlreadyOnline`,
          defaultMessage: `Could not enable remote control. Please ensure only one instance of ChatGPT is running.`,
          description: `Error toast shown when remote control cannot be enabled because another Codex instance is already running a remote control server on this device.`,
        }),
        {
          id: `remote-control-server-already-online`,
        },
      ),
      !0)
    : peers.pxu(t)
      ? (e.get(peers.rh).danger(
          e.get(peers.LE).formatMessage({
            id: `settings.remoteConnections.remoteControlTokenInvalidated`,
            defaultMessage: `Your ChatGPT session on this device has expired. Sign in again and try again.`,
            description: `Error shown when enabling remote control fails because the device's Codex authentication token was invalidated`,
          }),
          {
            id: `remote-control-token-invalidated`,
          },
        ),
        !0)
      : !1;
}
