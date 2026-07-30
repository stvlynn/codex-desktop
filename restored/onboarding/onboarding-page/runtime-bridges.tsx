// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Bridges for IMPORT_MAP targets that are init-only, wrong-shaped, or peer-gated.

export {
  OnboardingContextProvider,
  buildDefaultOnboardingAdvanceContext,
  useOnboardingContext,
  type OnboardingContextValue,
} from "./onboarding-flow-context";

export {
  useFinalOnboardingStep,
  useOnboardingPreferenceSetter,
  useOnboardingPreferenceValue,
} from "./onboarding-preference-hooks";

export {
  OnboardingScopeProvider,
  ensureOnboardingNtInit,
  ensureOnboardingPageBridgesInit,
  getOnboardingScopeAndSignals,
  useOnboardingScope,
  type OnboardingInterestsSignal,
  type OnboardingProviderIdsSignal,
  type OnboardingScopeProviderProps,
  type OnboardingSignals,
  type OnboardingStepSignal,
} from "./onboarding-scope";

export {
  OnboardingLoadingProbe,
  SafeContinuePanel,
  SafeOnboardingFullscreenFrame,
  WhamTaskClusterBridge,
  type SafeContinuePanelProps,
  type SafeOnboardingFullscreenFrameProps,
} from "./safe-onboarding-chrome";

export {
  useWindowsSandboxSetupBridge,
  type WindowsSandboxSetupState,
  type WindowsSandboxPhase,
} from "./windows-sandbox-setup-bridge";

export { toggleListItem, useToggleState } from "./toggle-list-item";
