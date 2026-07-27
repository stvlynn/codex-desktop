// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Derive whether projectless onboarding can be treated as completed.

export type ResolveProjectlessOnboardingCompletedProps = {
  projectlessOnboardingCompleted: boolean | null | undefined;
  workspaceRootsCount: number;
  workspaceRootsIsLoading: boolean;
};

/**
 * `null` while unknown/loading; `true` when the preference is set or workspace
 * roots already exist (implicit completion).
 */
export function resolveProjectlessOnboardingCompleted({
  projectlessOnboardingCompleted,
  workspaceRootsCount,
  workspaceRootsIsLoading,
}: ResolveProjectlessOnboardingCompletedProps): boolean | null {
  if (projectlessOnboardingCompleted == null) {
    return null;
  }
  if (projectlessOnboardingCompleted) {
    return true;
  }
  if (workspaceRootsIsLoading) {
    return null;
  }
  return workspaceRootsCount > 0;
}
