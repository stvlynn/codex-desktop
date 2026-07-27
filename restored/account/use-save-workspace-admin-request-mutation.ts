// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `Zgs`) / export `ox`.

export type UseSaveWorkspaceAdminRequestMutationPeers = {
  useQueryClient: () => unknown;
  useResolvedAccountId: (args: { enabled: boolean }) => { accountId: unknown };
  useMutation: (options: Record<string, unknown>) => unknown;
  mutationKeyPrefix: unknown[];
  createRequest: (args: {
    accountId: string;
    justification: unknown;
  }) => Promise<unknown>;
  patchRequest: (args: {
    accountId: string;
    requestId: unknown;
    justification: unknown;
  }) => Promise<unknown>;
};

let peers: UseSaveWorkspaceAdminRequestMutationPeers | null = null;

/** Wire useSaveWorkspaceAdminRequestMutation peers once companions land. */
export function setUseSaveWorkspaceAdminRequestMutationPeers(
  next: UseSaveWorkspaceAdminRequestMutationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ox` / internal `Zgs`.
 * Create or patch a workspace admin request mutation.
 */
export function useSaveWorkspaceAdminRequestMutation(): unknown {
  if (peers == null) {
    throw new Error(
      "UseSaveWorkspaceAdminRequestMutation peers are not configured",
    );
  }
  const queryClient = peers.useQueryClient();
  const { accountId } = peers.useResolvedAccountId({ enabled: true });
  return peers.useMutation({
    mutationKey: [...peers.mutationKeyPrefix, accountId, "save"],
    mutationFn: async (input: {
      justification: unknown;
      requestId?: unknown;
    }) => {
      if (accountId == null) {
        throw new Error("Cannot save workspace admin request without account");
      }
      const id = String(accountId);
      if (input.requestId == null) {
        return peers!.createRequest({
          accountId: id,
          justification: input.justification,
        });
      }
      return peers!.patchRequest({
        accountId: id,
        requestId: input.requestId,
        justification: input.justification,
      });
    },
    onSuccess: async () => {
      void queryClient;
    },
  });
}
