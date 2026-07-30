// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Safe stand-in for Windows sandbox host hooks (AppInitialOb / AppInitialMb).

export type WindowsSandboxPhase =
  | "idle"
  | "checking"
  | "startingElevated"
  | "waitingElevated"
  | "retryUnelevated";

export type WindowsSandboxSetupState = {
  phase: WindowsSandboxPhase;
  error: string | null;
  isPending: boolean;
  isRequirementsPending: boolean;
  isRequirementsError: boolean;
  allowElevatedSetup: boolean;
  requiresElevatedSandboxByPolicy: boolean;
  showUnelevatedSetupAlternative: boolean;
  allowUnelevatedFallback: boolean;
  hasHostError: boolean;
  setLimitedAccessMode: () => void;
  enableElevated: () => Promise<boolean>;
  enableUnelevated: () => Promise<boolean>;
  retryRequirements: () => void;
  retryHostError: () => void;
};

/**
 * Safe stand-in for `AppInitialOb` / `AppInitialMb` until elevated-setup peers land.
 * Presents the elevated-setup surface and treats continue as success.
 */
export function useWindowsSandboxSetupBridge(): WindowsSandboxSetupState {
  return {
    phase: "idle",
    error: null,
    isPending: false,
    isRequirementsPending: false,
    isRequirementsError: false,
    allowElevatedSetup: true,
    requiresElevatedSandboxByPolicy: false,
    showUnelevatedSetupAlternative: false,
    allowUnelevatedFallback: true,
    hasHostError: false,
    setLimitedAccessMode: () => undefined,
    enableElevated: async () => true,
    enableUnelevated: async () => true,
    retryRequirements: () => undefined,
    retryHostError: () => undefined,
  };
}
