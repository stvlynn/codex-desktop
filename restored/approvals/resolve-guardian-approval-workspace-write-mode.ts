// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `a4r`) / export `Pq`.

export type ResolveGuardianApprovalWorkspaceWriteModePeers = {
  listModesFromConfig: (
    requirements: unknown,
    resolvedConfig: unknown,
  ) => string[];
  isGuardianDefaultEnabled: (resolvedConfig: unknown) => boolean | null;
  resolveNonFullAccessMode: (
    resolvedConfig: unknown,
    defaultMode: string,
  ) => string;
  isGuardianAutoEligible: (value: unknown) => boolean;
  readGuardianAutoSource: (resolvedConfig: unknown) => unknown;
  pickConfigNonFullAccessMode: (modes: string[]) => string | null;
};

let peers: ResolveGuardianApprovalWorkspaceWriteModePeers | null = null;

/** Wire resolveGuardianApprovalWorkspaceWriteMode peers once companions land. */
export function setResolveGuardianApprovalWorkspaceWriteModePeers(
  next: ResolveGuardianApprovalWorkspaceWriteModePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Pq` / internal `a4r`.
 * Resolve available agent modes and guardian-approval workspace-write options.
 */
export function resolveGuardianApprovalWorkspaceWriteMode(args: {
  isConfigDataPending: boolean;
  requirements: unknown;
  resolvedConfig: unknown;
  isGuardianApprovalEnabledByStatsig: boolean;
  hasAuthoritativeGuardianApprovalDefault?: boolean;
  defaultWorkspaceWriteMode?: string;
}): {
  availableAgentModes: string[];
  canShowCustom: boolean;
  canUnlock: boolean;
  customEquivalentMode: string;
  isGuardianModeAvailable: boolean;
  isConfigDataPending: boolean;
  configNonFullAccessMode: string | null;
  showGuardianOption: boolean;
} {
  if (peers == null) {
    throw new Error(
      "ResolveGuardianApprovalWorkspaceWriteMode peers are not configured",
    );
  }
  const {
    isConfigDataPending,
    requirements,
    resolvedConfig,
    isGuardianApprovalEnabledByStatsig,
    hasAuthoritativeGuardianApprovalDefault = false,
    defaultWorkspaceWriteMode = "auto",
  } = args;
  const rawModes = isConfigDataPending
    ? ["read-only", "auto", "granular", "full-access", "custom"]
    : peers.listModesFromConfig(requirements, resolvedConfig);
  const guardianDefaultEnabled =
    peers.isGuardianDefaultEnabled(resolvedConfig ?? undefined) ?? true;
  const showGuardianOption =
    isGuardianApprovalEnabledByStatsig ||
    hasAuthoritativeGuardianApprovalDefault;
  const withoutGuardian = rawModes.filter((m) => m !== "guardian-approvals");
  const guardianOnly =
    rawModes.includes("guardian-approvals") && withoutGuardian.length === 0;
  const availableAgentModes =
    (showGuardianOption && guardianDefaultEnabled) || guardianOnly
      ? rawModes
      : withoutGuardian;
  const isGuardianModeAvailable =
    availableAgentModes.includes("guardian-approvals");
  const withoutCustom = availableAgentModes.filter((m) => m !== "custom");
  const resolvedMode = peers.resolveNonFullAccessMode(
    resolvedConfig ?? undefined,
    defaultWorkspaceWriteMode,
  );
  const configHint = resolvedMode === "full-access" ? null : resolvedMode;
  const guardianAuto =
    isGuardianModeAvailable &&
    resolvedMode === "auto" &&
    peers.isGuardianAutoEligible(
      peers.readGuardianAutoSource(resolvedConfig ?? undefined),
    );
  let configNonFullAccessMode =
    peers.pickConfigNonFullAccessMode(withoutCustom);
  if (guardianAuto) configNonFullAccessMode = "guardian-approvals";
  else if (configHint != null && withoutCustom.includes(configHint)) {
    configNonFullAccessMode = configHint;
  }
  return {
    availableAgentModes,
    canShowCustom: availableAgentModes.includes("custom"),
    canUnlock: availableAgentModes.includes("full-access"),
    customEquivalentMode: guardianAuto ? "guardian-approvals" : resolvedMode,
    isGuardianModeAvailable,
    isConfigDataPending,
    configNonFullAccessMode,
    showGuardianOption,
  };
}
