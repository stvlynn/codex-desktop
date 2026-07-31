// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Onboarding scope provider + scoped step/interests signals (rvt / ivt).

import {
  createContext,
  useContext,
  type ReactElement,
  type ReactNode,
} from "react";

import {
  appScopeAtom,
  createAppScope,
  createScopedSignal,
  type AppScopeBrand,
} from "../../runtime/app-scope-runtime";
import {
  ONBOARDING_STEPS,
  type OnboardingStep,
  type TeenInterest,
} from "./constants";

export type OnboardingScopeProviderProps = {
  scope: AppScopeBrand;
  children?: ReactNode;
};

const OnboardingScopeContext = createContext<AppScopeBrand | null>(null);

/**
 * Bundle export `N_t` — AppScope provider around the onboarding tree.
 * exportSources maps N_t → CollectionItemSlot (wrong for `{scope,children}`).
 */
export function OnboardingScopeProvider({
  scope,
  children,
}: OnboardingScopeProviderProps): ReactElement {
  return (
    <OnboardingScopeContext.Provider value={scope}>
      {children}
    </OnboardingScopeContext.Provider>
  );
}

export function useOnboardingScope(): AppScopeBrand {
  return useContext(OnboardingScopeContext) ?? appScopeAtom;
}

/** Bundle export `NT` — esmInit-only side effect. */
export function ensureOnboardingNtInit(): void {}

export type OnboardingStepSignal = {
  get: () => OnboardingStep;
  set: (value: OnboardingStep) => void;
  subscribe: (listener: () => void) => () => void;
};

export type OnboardingInterestsSignal = {
  get: () => TeenInterest[];
  set: (value: TeenInterest[]) => void;
  subscribe: (listener: () => void) => () => void;
};

export type OnboardingProviderIdsSignal = {
  get: () => string[];
  set: (value: string[]) => void;
  subscribe: (listener: () => void) => () => void;
};

export type OnboardingSignals = {
  step: OnboardingStepSignal;
  interests: OnboardingInterestsSignal;
  providerIds: OnboardingProviderIdsSignal;
  skipPostMigration: {
    get: () => boolean;
    set: (value: boolean) => void;
  };
};

let cachedScope: AppScopeBrand | null = null;
let cachedSignals: OnboardingSignals | null = null;

/** Create (once) the OnboardingScope + step signal from the bundle. */
export function getOnboardingScopeAndSignals(): {
  scope: AppScopeBrand;
  signals: OnboardingSignals;
} {
  if (cachedScope == null || cachedSignals == null) {
    cachedScope = createAppScope("OnboardingScope", { parent: appScopeAtom });
    cachedSignals = {
      step: createScopedSignal<OnboardingStep>(
        cachedScope,
        () => ONBOARDING_STEPS.Start,
      ),
      interests: createScopedSignal<TeenInterest[]>(cachedScope, () => []),
      providerIds: createScopedSignal<string[]>(cachedScope, () => []),
      skipPostMigration: createScopedSignal<boolean>(cachedScope, () => false),
    };
  }
  return { scope: cachedScope, signals: cachedSignals };
}

export function ensureOnboardingPageBridgesInit(): void {
  ensureOnboardingNtInit();
  getOnboardingScopeAndSignals();
}
