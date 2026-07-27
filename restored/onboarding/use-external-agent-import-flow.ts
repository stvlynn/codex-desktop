// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `Gsu`) / export `gn`.

export type UseExternalAgentImportFlowPeers = {
  useStore: (atom: unknown) => unknown;
  storeAtom: unknown;
  useIntl: () => unknown;
  useQueryClient: () => {
    /* opaque */
  };
  useProviderConfig: (atom: unknown) => unknown;
  providerConfigAtom: unknown;
  normalizeProviders: (raw: unknown) => unknown;
  useSessionLimits: () => unknown;
  useImportController: (args: Record<string, unknown>) => {
    detectedItems: unknown[];
    getSelectedItems: (selection: unknown) => unknown[];
    hasImportableItems: boolean;
    importItems: (items: unknown[]) => Promise<{ projectRoots: unknown[] }>;
    importSelected: (
      selection: unknown,
    ) => Promise<{ projectRoots: unknown[] }>;
    isDetecting: boolean;
    isImporting: boolean;
  };
  providerIdsFromItems: (items: unknown[]) => string[];
  buildMigration: (args: {
    detectedItems: unknown[];
    intl: unknown;
    providerIds: string[];
  }) => unknown;
  selectItems: (args: {
    detectedItems: unknown[];
    providerIds: string[];
    selection: unknown;
  }) => unknown[];
  logImportStart: (args: { items: unknown[]; surface: string }) => void;
  invalidateAfterImport: (queryClient: unknown) => Promise<void>;
  completeImport: (args: Record<string, unknown>) => Promise<void>;
};

let peers: UseExternalAgentImportFlowPeers | null = null;

/** Wire useExternalAgentImportFlow peers once companions land. */
export function setUseExternalAgentImportFlowPeers(
  next: UseExternalAgentImportFlowPeers,
): void {
  peers = next;
}

/**
 * Bundle export `gn` / internal `Gsu`.
 * Orchestrate external-agent detect/import flow for first-time onboarding.
 */
export function useExternalAgentImportFlow(args: {
  enabled: boolean;
}): Record<string, unknown> {
  if (peers == null) {
    throw new Error("UseExternalAgentImportFlow peers are not configured");
  }
  const { enabled } = args;
  const store = peers.useStore(peers.storeAtom);
  const intl = peers.useIntl();
  const queryClient = peers.useQueryClient();
  const providerRaw = peers.useProviderConfig(peers.providerConfigAtom);
  const providers = peers.normalizeProviders(providerRaw);
  const sessionLimits = peers.useSessionLimits();
  const controller = peers.useImportController({
    enabled,
    providers,
    sessionLimits,
  });
  const providerIds = peers.providerIdsFromItems(controller.detectedItems);
  const migration = enabled
    ? peers.buildMigration({
        detectedItems: controller.detectedItems,
        intl,
        providerIds,
      })
    : null;
  const runImport = async (
    selection: unknown,
    overrideProviderIds?: string[],
  ) => {
    if (
      !enabled ||
      (overrideProviderIds == null && !controller.hasImportableItems)
    ) {
      return;
    }
    const activeMigration =
      overrideProviderIds == null
        ? migration
        : peers!.buildMigration({
            detectedItems: controller.detectedItems,
            intl,
            providerIds: overrideProviderIds,
          });
    const items =
      overrideProviderIds == null
        ? controller.getSelectedItems(selection)
        : peers!.selectItems({
            detectedItems: controller.detectedItems,
            providerIds: overrideProviderIds,
            selection,
          });
    peers!.logImportStart({ items, surface: "first_time_onboarding" });
    const { projectRoots } =
      overrideProviderIds == null
        ? await controller.importSelected(selection)
        : await controller.importItems(items);
    await peers!.invalidateAfterImport(queryClient);
    await peers!.completeImport({
      store,
      migration: activeMigration,
      projectRoots,
      selection,
    });
  };
  return {
    detectedItems: controller.detectedItems,
    hasImportableItems: enabled && controller.hasImportableItems,
    isDetecting: enabled && controller.isDetecting,
    isImporting: enabled && controller.isImporting,
    migration,
    providerIds,
    runImport,
  };
}
