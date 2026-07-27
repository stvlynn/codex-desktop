// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Browser vs desktop composer mode availability (`w2r`; export alias `Uq` is the init thunk).

import type { ComposerMode } from "./resolve-composer-mode";

export type ComposerModeAvailability = {
  fallbackMode: ComposerMode;
  isAvailabilityLoading: boolean;
  isCloudAvailable: boolean;
  isLocalAvailable: boolean;
  isWorktreeAvailable: boolean;
};

export type GetComposerModeAvailabilityProps = {
  canCreateBrowserDefaultHostThreads: boolean;
  hasBrowserLocalExecutionHost: boolean;
  hasComposerModeGitRepo: boolean;
  hasFollowUp: boolean;
  isBrowser: boolean;
  isComposerModeGitMetadataLoading: boolean;
  isResponseInProgress: boolean;
  isStatsigLoading: boolean;
  isWorktreeExecutionTargetLoading: boolean;
  isWorktreePickerEnabled: boolean;
};

/**
 * Derives which composer modes are selectable and which mode to fall back to.
 */
export function getComposerModeAvailability({
  canCreateBrowserDefaultHostThreads,
  hasBrowserLocalExecutionHost,
  hasComposerModeGitRepo,
  hasFollowUp,
  isBrowser,
  isComposerModeGitMetadataLoading,
  isResponseInProgress,
  isStatsigLoading,
  isWorktreeExecutionTargetLoading,
  isWorktreePickerEnabled,
}: GetComposerModeAvailabilityProps): ComposerModeAvailability {
  if (isBrowser) {
    const fallbackIsLocal = canCreateBrowserDefaultHostThreads && !hasFollowUp;
    return {
      fallbackMode: fallbackIsLocal ? "local" : "cloud",
      isAvailabilityLoading: false,
      isCloudAvailable: !fallbackIsLocal,
      isLocalAvailable:
        hasBrowserLocalExecutionHost || canCreateBrowserDefaultHostThreads,
      isWorktreeAvailable: false,
    };
  }

  return {
    fallbackMode: "local",
    isAvailabilityLoading:
      isComposerModeGitMetadataLoading ||
      isStatsigLoading ||
      isWorktreeExecutionTargetLoading,
    isCloudAvailable: hasComposerModeGitRepo,
    isLocalAvailable: true,
    isWorktreeAvailable:
      hasComposerModeGitRepo &&
      !hasFollowUp &&
      !isResponseInProgress &&
      isWorktreePickerEnabled,
  };
}
