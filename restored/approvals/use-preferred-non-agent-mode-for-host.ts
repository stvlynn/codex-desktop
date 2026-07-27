// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `S4r`) / export `jq`.

export type UsePreferredNonAgentModeForHostPeers = {
  useAtom: (
    atom: unknown,
  ) => [Record<string, unknown>, (next: unknown) => void];
  preferencesAtom: unknown;
  resolvePreferredMode: (
    hostId: unknown,
    preferences: Record<string, unknown>,
  ) => unknown;
};

let peers: UsePreferredNonAgentModeForHostPeers | null = null;

/** Wire usePreferredNonAgentModeForHost peers once companions land. */
export function setUsePreferredNonAgentModeForHostPeers(
  next: UsePreferredNonAgentModeForHostPeers,
): void {
  peers = next;
}

/**
 * Bundle export `jq` / internal `S4r`.
 * Read/write preferred non-full-access mode for a host.
 */
export function usePreferredNonAgentModeForHost(args: { hostId: string }): {
  preferredNonFullAccessMode: unknown;
  setPreferredNonFullAccessMode: (mode: unknown) => void;
} {
  if (peers == null) {
    throw new Error("UsePreferredNonAgentModeForHost peers are not configured");
  }
  const { hostId } = args;
  const [preferences, setPreferences] = peers.useAtom(peers.preferencesAtom);
  const preferredNonFullAccessMode = peers.resolvePreferredMode(
    hostId,
    preferences,
  );
  const setPreferredNonFullAccessMode = (mode: unknown) => {
    setPreferences({ ...preferences, [hostId]: mode });
  };
  return { preferredNonFullAccessMode, setPreferredNonFullAccessMode };
}
