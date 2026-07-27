// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `A3i`) / export `pz`.

export type UseUpgradeMarketplacesMutationPeers = {
  useStore: (store: unknown) => unknown;
  useQueryClient: () => {
    invalidateQueries: (opts: { queryKey: unknown }) => unknown;
  };
  useTranslations: () => (key: string) => string;
  useMutation: (opts: Record<string, unknown>) => unknown;
  invoke: (
    method: string,
    args: { hostId: string; marketplaceName: string | null },
  ) => Promise<unknown>;
  rootStore: unknown;
  toastSuccess: (message: string) => void;
  toastError: (message: string) => void;
};

let peers: UseUpgradeMarketplacesMutationPeers | null = null;

/** Wire useUpgradeMarketplacesMutation peers once companions land. */
export function setUseUpgradeMarketplacesMutationPeers(
  next: UseUpgradeMarketplacesMutationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `pz` / internal `A3i`.
 * Mutation to upgrade plugin marketplaces on a host.
 */
export function useUpgradeMarketplacesMutation(options?: {
  hostId?: string;
}): unknown {
  if (peers == null) {
    throw new Error("UseUpgradeMarketplacesMutation peers are not configured");
  }
  const hostId = options?.hostId ?? "local";
  const store = peers.useStore(peers.rootStore);
  const queryClient = peers.useQueryClient();
  const t = peers.useTranslations();
  return peers.useMutation({
    mutationFn: async (vars: { marketplaceName?: string | null }) => {
      void store;
      return peers!.invoke("upgrade-marketplaces", {
        hostId,
        marketplaceName: vars.marketplaceName ?? null,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["plugins"] });
      peers!.toastSuccess(t("codex.plugins.upgradeMarketplaces.success"));
    },
    onError: () => {
      peers!.toastError(t("codex.plugins.upgradeMarketplaces.error"));
    },
  });
}
