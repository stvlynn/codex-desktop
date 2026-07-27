// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `F4s`) / export `wh`.

export type UseWorkspaceOnboardingExperimentPeers = {
  useExperimentArm: () => { workspaceOnboardingExperimentArm: unknown };
  useIsRemoteHost: () => boolean;
  useAutoLaunchApplied: () => [boolean, (next: boolean) => void];
  useWorkspaceRoots: () => { data?: { roots?: unknown[] }; isLoading: boolean };
  resolveAutoLaunchAction: (args: {
    arm: unknown;
    isRemoteHost: boolean;
    isLoadingRoots: boolean;
    hasPersistedRoots: boolean;
    autoLaunchApplied: boolean;
  }) => unknown;
};

let peers: UseWorkspaceOnboardingExperimentPeers | null = null;

/** Wire useWorkspaceOnboardingExperiment peers once companions land. */
export function setUseWorkspaceOnboardingExperimentPeers(
  next: UseWorkspaceOnboardingExperimentPeers,
): void {
  peers = next;
}

/**
 * Bundle export `wh` / internal `F4s`.
 * Expose workspace-onboarding experiment arm and auto-launch action.
 */
export function useWorkspaceOnboardingExperiment(): Record<string, unknown> {
  if (peers == null) {
    throw new Error(
      "UseWorkspaceOnboardingExperiment peers are not configured",
    );
  }
  const { workspaceOnboardingExperimentArm } = peers.useExperimentArm();
  const isRemoteHost = peers.useIsRemoteHost();
  const [autoLaunchApplied, setAutoLaunchApplied] =
    peers.useAutoLaunchApplied();
  const { data, isLoading } = peers.useWorkspaceRoots();
  const hasPersistedRoots = (data?.roots?.length ?? 0) > 0;
  const autoLaunchAction = peers.resolveAutoLaunchAction({
    arm: workspaceOnboardingExperimentArm,
    isRemoteHost,
    isLoadingRoots: isLoading,
    hasPersistedRoots,
    autoLaunchApplied,
  });
  return {
    workspaceOnboardingExperimentArm,
    isRemoteHost,
    workspaceOnboardingAutoLaunchApplied: autoLaunchApplied,
    setWorkspaceOnboardingAutoLaunchApplied: setAutoLaunchApplied,
    workspaceRootOptions: data,
    isLoadingWorkspaceRootOptions: isLoading,
    hasPersistedRoots,
    autoLaunchAction,
  };
}
