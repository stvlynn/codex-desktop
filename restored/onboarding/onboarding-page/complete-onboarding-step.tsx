// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Step completion wrapper (Helper24) — analytics name reserved for peers later.

import type { ReactElement, ReactNode } from "react";

export type CompleteOnboardingStepResult = {
  result?: unknown;
  skipped?: boolean;
};

export type CompleteOnboardingStepProps = {
  name: string;
  onComplete: (payload: CompleteOnboardingStepResult) => void;
  children: (args: {
    completeStep: (payload: CompleteOnboardingStepResult) => void;
  }) => ReactNode;
};

/**
 * Bundle Helper24 — render-prop that records step completion then continues.
 * Analytics peers (appInitialC7 / W7) stay optional until wired.
 */
export function CompleteOnboardingStep({
  name,
  onComplete,
  children,
}: CompleteOnboardingStepProps): ReactElement {
  void name;
  const completeStep = (payload: CompleteOnboardingStepResult) => {
    onComplete(payload);
  };
  return <>{children({ completeStep })}</>;
}
