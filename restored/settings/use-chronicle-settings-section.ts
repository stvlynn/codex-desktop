// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `hxu`) / export `L`.

export type UseChronicleSettingsSectionPeers = {
  RemoteControlAlreadyOnlineError: new (...args: unknown[]) => Error;
  isTokenInvalidError: (error: unknown) => boolean;
  toastAtom: unknown;
  intlAtom: unknown;
};

let peers: UseChronicleSettingsSectionPeers | null = null;

/** Wire chronicle settings error-toast peers once companions land. */
export function setUseChronicleSettingsSectionPeers(
  next: UseChronicleSettingsSectionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `L` / internal `hxu`.
 * Handle chronicle/remote-control enable errors; returns true when handled.
 */
export function useChronicleSettingsSection(
  store: {
    get: (atom: unknown) => {
      danger: (message: unknown, options?: { id: string }) => void;
      formatMessage: (descriptor: {
        id: string;
        defaultMessage: string;
        description: string;
      }) => unknown;
    };
  },
  error: unknown,
): boolean {
  if (peers == null) {
    throw new Error("UseChronicleSettingsSection peers are not configured");
  }
  if (error instanceof peers.RemoteControlAlreadyOnlineError) {
    store.get(peers.toastAtom).danger(
      store.get(peers.intlAtom).formatMessage({
        id: "settings.remoteConnections.remoteControlServerAlreadyOnline",
        defaultMessage:
          "Could not enable remote control. Please ensure only one instance of ChatGPT is running.",
        description:
          "Error toast shown when remote control cannot be enabled because another Codex instance is already running a remote control server on this device.",
      }),
      { id: "remote-control-server-already-online" },
    );
    return true;
  }
  if (peers.isTokenInvalidError(error)) {
    store.get(peers.toastAtom).danger(
      store.get(peers.intlAtom).formatMessage({
        id: "settings.remoteConnections.remoteControlTokenInvalid",
        defaultMessage:
          "Could not enable remote control. Please sign in again and try once more.",
        description:
          "Error toast shown when remote control cannot be enabled because the auth token is invalid.",
      }),
      { id: "remote-control-token-invalid" },
    );
    return true;
  }
  return false;
}
