// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Plugin install / enable mutations (exports dz / fz).

export type PluginInstallMutationPeers = {
  /** App-scope node. Bundle `Io(Q)`. */
  useAppScopeNode: () => unknown;
  /** Query client / router helpers used by mutation bodies. */
  useRouter: () => unknown;
  useQueryInvalidator: () => unknown;
  useIntlLike: () => unknown;
  /** Install mutation implementation. Bundle body of `E3i`. */
  useInstallPluginMutationImpl: (args: {
    hostId: string;
    scope: unknown;
    router: unknown;
    invalidator: unknown;
    intl: unknown;
  }) => unknown;
  /** Enable/disable mutation implementation. Bundle body of `w3i`. */
  useSetPluginEnabledMutationImpl: (args: {
    hostId: string;
    scope: unknown;
    router: unknown;
    invalidator: unknown;
    intl: unknown;
  }) => unknown;
};

let peers: PluginInstallMutationPeers | null = null;

export function setPluginInstallMutationPeers(
  next: PluginInstallMutationPeers,
): void {
  peers = next;
}

export type PluginMutationHostArgs = {
  hostId?: string;
};

/** Bundle `E3i` / export `dz`. */
export function useInstallPluginMutation(
  args?: PluginMutationHostArgs,
): unknown {
  if (peers == null) {
    throw new Error("useInstallPluginMutation peers are not configured");
  }
  const hostId = args?.hostId ?? "local";
  return peers.useInstallPluginMutationImpl({
    hostId,
    scope: peers.useAppScopeNode(),
    router: peers.useRouter(),
    invalidator: peers.useQueryInvalidator(),
    intl: peers.useIntlLike(),
  });
}

/** Bundle `w3i` / export `fz`. */
export function useSetPluginEnabledMutation(
  args?: PluginMutationHostArgs,
): unknown {
  if (peers == null) {
    throw new Error("useSetPluginEnabledMutation peers are not configured");
  }
  const hostId = args?.hostId ?? "local";
  return peers.useSetPluginEnabledMutationImpl({
    hostId,
    scope: peers.useAppScopeNode(),
    router: peers.useRouter(),
    invalidator: peers.useQueryInvalidator(),
    intl: peers.useIntlLike(),
  });
}
