// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `Ggs`) / export `ex`.

export type UseAccountAuthMutationsPeers = {
  useScope: () => unknown;
  useAccountIdentity: () => {
    accountId: unknown;
    authMethod: unknown;
    userId: unknown;
  };
  useQueryClient: () => unknown;
  useMutation: (options: Record<string, unknown>) => unknown;
  authMutationKey: (
    authMethod: unknown,
    userId: unknown,
    accountId: unknown,
  ) => unknown[];
  shouldSkipTopUpSync: (status: unknown) => boolean;
  syncAuthResponse: (args: {
    scope: unknown;
    queryClient: unknown;
    response: unknown;
    accountId: unknown;
    authMethod: unknown;
    userId: unknown;
  }) => void;
  enableAuth: (
    input: unknown,
  ) => Promise<{ immediate_top_up_status?: unknown }>;
  disableAuth: (
    input: unknown,
  ) => Promise<{ immediate_top_up_status?: unknown }>;
};

let peers: UseAccountAuthMutationsPeers | null = null;

/** Wire useAccountAuthMutations peers once companions land. */
export function setUseAccountAuthMutationsPeers(
  next: UseAccountAuthMutationsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ex` / internal `Ggs`.
 * Account auth enable/disable mutations with cache sync.
 */
export function useAccountAuthMutations(): {
  enableAuth: unknown;
  disableAuth: unknown;
} {
  if (peers == null) {
    throw new Error("UseAccountAuthMutations peers are not configured");
  }
  const scope = peers.useScope();
  const { accountId, authMethod, userId } = peers.useAccountIdentity();
  const queryClient = peers.useQueryClient();
  const baseKey = peers.authMutationKey(authMethod, userId, accountId);
  const onSuccess = (response: { immediate_top_up_status?: unknown }) => {
    if (peers!.shouldSkipTopUpSync(response.immediate_top_up_status)) return;
    peers!.syncAuthResponse({
      scope,
      queryClient,
      response,
      accountId,
      authMethod,
      userId,
    });
  };
  const enableAuth = peers.useMutation({
    mutationKey: [...baseKey, "enable"],
    mutationFn: peers.enableAuth,
    onSuccess,
  });
  const disableAuth = peers.useMutation({
    mutationKey: [...baseKey, "disable"],
    mutationFn: peers.disableAuth,
    onSuccess,
  });
  return { enableAuth, disableAuth };
}
