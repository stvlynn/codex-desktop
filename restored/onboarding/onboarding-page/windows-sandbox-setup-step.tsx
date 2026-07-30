// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Windows sandbox setup step host (Helper85).

import { type ReactElement } from "react";

import { CompleteOnboardingStep } from "./complete-onboarding-step";
import { ONBOARDING_STEPS } from "./constants";
import { useWindowsSandboxSetupBridge } from "./windows-sandbox-setup-bridge";
import { WindowsSandboxSetupPanel } from "./windows-sandbox-setup-panel";

/** Bundle Helper85 — Windows sandbox step host. */
export function WindowsSandboxSetupStep({
  isAdvancePending = false,
  onContinue,
}: {
  isAdvancePending?: boolean;
  onContinue: (result?: unknown) => void;
}): ReactElement {
  const setup = useWindowsSandboxSetupBridge();

  return (
    <CompleteOnboardingStep
      name="windows_sandbox_setup"
      onComplete={({ result }) => onContinue(result)}
    >
      {({ completeStep }) => {
        const finishSetup = () =>
          completeStep({
            result: { step: ONBOARDING_STEPS.WindowsSandboxSetup },
          });
        return (
          <WindowsSandboxSetupPanel
            phase={setup.phase}
            isPending={setup.isPending || isAdvancePending}
            isRequirementsPending={setup.isRequirementsPending}
            isRequirementsError={
              setup.isRequirementsError || setup.hasHostError
            }
            hasError={setup.error != null}
            allowElevatedSetup={setup.allowElevatedSetup}
            allowUnelevatedFallback={setup.allowUnelevatedFallback}
            requiresElevatedSandboxByPolicy={
              setup.requiresElevatedSandboxByPolicy
            }
            showUnelevatedSetupAlternative={
              setup.showUnelevatedSetupAlternative
            }
            onElevatedSetup={() => {
              void setup.enableElevated().then((ok) => {
                if (ok) finishSetup();
              });
            }}
            onUnelevatedSetup={() => {
              void setup.enableUnelevated().then((ok) => {
                if (ok) finishSetup();
              });
            }}
            onRetryRequirements={() => {
              if (setup.hasHostError) setup.retryHostError();
              else setup.retryRequirements();
            }}
            onContinueWithLimitedAccess={() => {
              setup.setLimitedAccessMode();
              finishSetup();
            }}
          />
        );
      }}
    </CompleteOnboardingStep>
  );
}
