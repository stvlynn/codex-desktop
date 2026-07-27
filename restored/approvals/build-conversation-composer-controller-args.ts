// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `AN`) / export `Mq`.

export type BuildConversationComposerControllerArgsPeers = {
  useStore: (store: unknown) => unknown;
  useHostId: () => unknown;
  useAtomFamily: (atom: unknown, key: unknown) => unknown;
  useAtomValue: (atom: unknown) => unknown;
  rootStore: unknown;
  conversationCwdAtom: unknown;
  activeWorkspaceRootAtom: unknown;
  isWorkspaceRootLoadingAtom: unknown;
  buildExtra: (args: {
    conversationId: unknown;
    cwdOverride: unknown;
    hostId: unknown;
  }) => Record<string, unknown>;
  hostCwdAtom: unknown;
};

let peers: BuildConversationComposerControllerArgsPeers | null = null;

/** Wire buildConversationComposerControllerArgs peers once companions land. */
export function setBuildConversationComposerControllerArgsPeers(
  next: BuildConversationComposerControllerArgsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Mq` / internal `AN`.
 * Assemble composer controller args from conversation/host/cwd atoms.
 */
export function buildConversationComposerControllerArgs(args: {
  conversationId: unknown;
  cwdOverride?: string | null;
  hostId: unknown;
}): Record<string, unknown> {
  if (peers == null) {
    throw new Error(
      "BuildConversationComposerControllerArgs peers are not configured",
    );
  }
  const store = peers.useStore(peers.rootStore);
  const defaultHostId = peers.useHostId();
  const conversationCwd = peers.useAtomFamily(
    peers.conversationCwdAtom,
    args.conversationId,
  );
  const activeRoot = peers.useAtomValue(peers.activeWorkspaceRootAtom);
  const isLoading = peers.useAtomValue(peers.isWorkspaceRootLoadingAtom);
  const hasOverride = args.cwdOverride !== undefined;
  const cwd = hasOverride
    ? (args.cwdOverride ?? null)
    : (conversationCwd ?? activeRoot);
  const overrideMissing = hasOverride && cwd == null;
  const waitingForActive = !hasOverride && conversationCwd == null && isLoading;
  const extra = peers.buildExtra(args);
  const hostCwd = peers.useAtomFamily(peers.hostCwdAtom, {
    hostId: args.hostId,
    cwd,
  });
  return {
    store,
    hostId: args.hostId ?? defaultHostId,
    conversationId: args.conversationId,
    cwd,
    overrideMissing,
    waitingForActive,
    hostCwd,
    ...extra,
  };
}
