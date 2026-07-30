// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Per-step surfaces for the onboarding wizard (Helpers 83/74/78/85/66/70/27/25).

import { type ReactElement, type ReactNode } from "react";

import {
  ONBOARDING_STEPS,
  type OnboardingStep,
  type TeenInterest,
} from "./constants";
import { AgentMigrationItemStep } from "./agent-migration-item-step";
import { AgentMigrationSourceStep } from "./agent-migration-source-step";
import { ConversationalOnboardingStep } from "./conversational-onboarding-step";
import {
  OnboardingLoadingProbe,
  SafeContinuePanel,
} from "./runtime-bridges";
import { RoleSelectionStep } from "./role-selection-step";
import { TeenInterestsStep } from "./teen-interests-step";
import { TeenPromptsStep } from "./teen-prompts-step";
import { TeenWelcomeStep } from "./teen-welcome-step";
import { WindowsSandboxSetupStep } from "./windows-sandbox-setup-step";

export type StepContinueArgs = {
  isAdvancePending: boolean;
  onContinue: (result?: unknown) => void;
  selectedInterests?: readonly TeenInterest[];
  providerIds?: readonly string[];
};

function StepChrome({
  title,
  subtitle,
  children,
  isAdvancePending,
  onContinue,
  continueLabel = "Continue",
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  isAdvancePending: boolean;
  onContinue: (result?: unknown) => void;
  continueLabel?: string;
}): ReactElement {
  return (
    <SafeContinuePanel
      title={title}
      subtitle={subtitle}
      isPending={isAdvancePending}
      onContinue={() => onContinue()}
    >
      {children}
      <span className="sr-only">{continueLabel}</span>
    </SafeContinuePanel>
  );
}

/** Complete / first-time continue surface. */
export function CompleteStep(props: StepContinueArgs): ReactElement {
  return (
    <StepChrome
      title="You're ready"
      subtitle="Codex is set up for this workspace."
      continueLabel="Get started"
      isAdvancePending={props.isAdvancePending}
      onContinue={props.onContinue}
    />
  );
}

export {
  TeenWelcomeStep,
  TeenInterestsStep,
  TeenPromptsStep,
  RoleSelectionStep,
  WindowsSandboxSetupStep,
  ConversationalOnboardingStep,
  AgentMigrationSourceStep,
  AgentMigrationItemStep,
};

/** Bundle Helper90 — switch on current onboarding step. */
export function OnboardingStepRouter({
  currentStep,
  isAdvancePending,
  onContinue,
  selectedInterests = [],
  providerIds = [],
}: {
  currentStep: OnboardingStep;
  isAdvancePending: boolean;
  onContinue: (result?: unknown) => void;
  selectedInterests?: readonly TeenInterest[];
  providerIds?: readonly string[];
}): ReactElement {
  const props: StepContinueArgs = {
    isAdvancePending,
    onContinue,
    selectedInterests,
    providerIds,
  };
  switch (currentStep) {
    case ONBOARDING_STEPS.TeenWelcome:
      return <TeenWelcomeStep {...props} />;
    case ONBOARDING_STEPS.TeenInterests:
      return <TeenInterestsStep {...props} />;
    case ONBOARDING_STEPS.TeenPrompts:
      return (
        <TeenPromptsStep {...props} selectedInterests={selectedInterests} />
      );
    case ONBOARDING_STEPS.WindowsSandboxSetup:
      return <WindowsSandboxSetupStep {...props} />;
    case ONBOARDING_STEPS.ConversationalOnboarding:
      return <ConversationalOnboardingStep {...props} />;
    case ONBOARDING_STEPS.RoleSelection:
      return <RoleSelectionStep {...props} />;
    case ONBOARDING_STEPS.AgentMigrationSourceSelection:
      return <AgentMigrationSourceStep {...props} />;
    case ONBOARDING_STEPS.AgentMigrationItemSelection:
      return (
        <AgentMigrationItemStep {...props} providerIds={providerIds} />
      );
    case ONBOARDING_STEPS.Complete:
      return <CompleteStep {...props} />;
    case ONBOARDING_STEPS.Start:
    default:
      return <OnboardingLoadingProbe debugName="OnboardingLoadingPage" />;
  }
}
