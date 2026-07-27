// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `LM`) / export `YY`.

export type UseVoiceSettingsHostConfigPeers = {
  conversationCwdAtom: unknown;
  conversationHostIdAtom: unknown;
  localRootsQuery: unknown;
  activeLocalProjectCwdAtom: unknown;
  selectedEnvironmentAtom: unknown;
  remoteConnectionsAtom: unknown;
  useSelectedRemoteProject: () => { selectedRemoteProject: unknown };
  useHostConfigForm: () => [unknown];
  useAtomValue: (atom: unknown, arg?: unknown) => any;
  useQuery: (query: unknown) => {
    data?: { roots?: unknown[] };
    isLoading: boolean;
  };
  resolveHostContext: (args: Record<string, unknown>) => { hostId: unknown };
  resolveHostConfig: (hostId: unknown, remoteConnections: unknown) => unknown;
};

let peers: UseVoiceSettingsHostConfigPeers | null = null;

/** Wire voice settings host-config peers once companions land. */
export function setUseVoiceSettingsHostConfigPeers(
  next: UseVoiceSettingsHostConfigPeers,
): void {
  peers = next;
}

/**
 * Bundle export `YY` / internal `LM`.
 * Resolve host config context for voice settings.
 */
export function useVoiceSettingsHostConfig(conversationId?: unknown): {
  hostConfig: unknown;
  hostId: unknown;
  isLoading: boolean;
  localRoot: unknown;
} {
  if (peers == null) {
    throw new Error("UseVoiceSettingsHostConfig peers are not configured");
  }
  const id = conversationId === undefined ? null : conversationId;
  const conversationCwd = peers.useAtomValue(peers.conversationCwdAtom, id);
  const conversationHostId = peers.useAtomValue(
    peers.conversationHostIdAtom,
    id,
  );
  const { data, isLoading } = peers.useQuery(peers.localRootsQuery);
  const activeLocalProjectCwd = peers.useAtomValue(
    peers.activeLocalProjectCwdAtom,
  );
  const selectedEnvironment = peers.useAtomValue(peers.selectedEnvironmentAtom);
  const { remoteConnections } = peers.useAtomValue(peers.remoteConnectionsAtom);
  const { selectedRemoteProject } = peers.useSelectedRemoteProject();
  const [hostConfigForm] = peers.useHostConfigForm();
  const localRoot = data?.roots?.[0] ?? null;
  const hostContext = peers.resolveHostContext({
    activeLocalProjectCwd,
    conversationCwd,
    conversationHostId,
    selectedRemoteProject,
  });
  const hostConfig =
    hostConfigForm &&
    hostContext.hostId === (hostConfigForm as { id?: unknown }).id
      ? hostConfigForm
      : peers.resolveHostConfig(hostContext.hostId, remoteConnections);
  return {
    hostConfig,
    hostId: hostContext.hostId,
    isLoading,
    localRoot,
  };
}
