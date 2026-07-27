// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Resolve the effective composer mode given availability + cloud access (`T2r`).

export type ComposerMode = "cloud" | "local" | "worktree";

export type CloudAccess =
  | "disabled"
  | "enabled"
  | "enabled_needs_setup"
  | "error"
  | "loading";

export type ResolveComposerModeProps = {
  composerMode: ComposerMode;
  cloudAccess: CloudAccess;
  fallbackMode: ComposerMode;
  isAvailabilityLoading: boolean;
  isCloudAvailable: boolean;
  isEverydayWorkMode: boolean;
  isLocalAvailable: boolean;
  isWorktreeAvailable: boolean;
};

/**
 * Picks the composer mode the UI should use after checking availability and
 * whether cloud access is fully enabled.
 */
export function resolveComposerMode({
  composerMode,
  cloudAccess,
  fallbackMode,
  isAvailabilityLoading,
  isCloudAvailable,
  isEverydayWorkMode,
  isLocalAvailable,
  isWorktreeAvailable,
}: ResolveComposerModeProps): ComposerMode {
  if (isEverydayWorkMode) {
    return "local";
  }
  if (composerMode === "cloud" && cloudAccess !== "enabled") {
    return fallbackMode;
  }
  if (isAvailabilityLoading) {
    return composerMode;
  }
  switch (composerMode) {
    case "cloud":
      return isCloudAvailable ? "cloud" : fallbackMode;
    case "local":
      return isLocalAvailable ? "local" : fallbackMode;
    case "worktree":
      return isWorktreeAvailable ? "worktree" : fallbackMode;
  }
}
