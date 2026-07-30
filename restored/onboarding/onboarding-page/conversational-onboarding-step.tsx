// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Conversational onboarding host (Helpers 66/67). Heavy app-initial peers gated.

import { useState, type ReactElement } from "react";

import { codingRoleCategory } from "../../account/coding-role-category";
import { Button } from "../../ui/button";
import { CompleteOnboardingStep } from "./complete-onboarding-step";
import {
  ConversationalContinueFooter,
  ConversationalOnboardingProgressBar,
  type ConversationalPhase,
} from "./conversational-continue-footer";
import {
  ONBOARDING_STEPS,
  type OnboardingRole,
} from "./constants";
import { RoleSelectionPanel } from "./role-selection-step";

export type ConversationalOnboardingStepProps = {
  isAdvancePending?: boolean;
  /** When true, role selection completes the step immediately (Helper66 isRoleOnly). */
  isRoleOnly?: boolean;
  onContinue: (result?: unknown) => void;
};

/**
 * Bundle Helper66/67 — conversational host without app-initial conversation peers.
 * Role phase reuses RoleSelectionPanel; task phase is a lightweight Get Started /
 * Skip shell that still emits the ConversationalOnboarding result contract.
 */
export function ConversationalOnboardingStep({
  isAdvancePending = false,
  isRoleOnly = false,
  onContinue,
}: ConversationalOnboardingStepProps): ReactElement {
  const [phase, setPhase] = useState<ConversationalPhase>("role");
  const [roles, setRoles] = useState<OnboardingRole[]>([]);
  const [personalizedSuggestionsEnabled, setPersonalizedSuggestionsEnabled] =
    useState(true);

  return (
    <CompleteOnboardingStep
      name="conversational_onboarding"
      onComplete={({ result }) => onContinue(result)}
    >
      {({ completeStep }) => {
        const finish = (payload: {
          isSkipped: boolean;
          nextRoles: readonly OnboardingRole[];
          nextPersonalized: boolean;
        }) => {
          completeStep({
            result: {
              step: ONBOARDING_STEPS.ConversationalOnboarding,
              completedConversationalOnboardingTaskId: null,
              completedConversationalOnboardingTaskSnapshot: null,
              roles: [...payload.nextRoles],
              personalizedSuggestionsEnabled: payload.nextPersonalized,
              skipRemainingOnboarding: payload.isSkipped && !isRoleOnly,
              workMode: codingRoleCategory([...payload.nextRoles]),
            },
            skipped: payload.isSkipped,
          });
        };

        if (phase === "role") {
          return (
            <div className="relative flex h-full min-h-0 w-full flex-col bg-token-main-surface-primary tracking-normal text-token-text-primary select-text">
              <RoleSelectionPanel
                roles={roles}
                personalizedSuggestionsEnabled={personalizedSuggestionsEnabled}
                allowSkip
                isAdvancePending={isAdvancePending}
                onToggleRole={(role) =>
                  setRoles((prev) =>
                    prev.includes(role)
                      ? prev.filter((entry) => entry !== role)
                      : [...prev, role],
                  )
                }
                onPersonalizedSuggestionsChange={
                  setPersonalizedSuggestionsEnabled
                }
                onContinue={() => {
                  if (isRoleOnly) {
                    finish({
                      isSkipped: false,
                      nextRoles: roles,
                      nextPersonalized: personalizedSuggestionsEnabled,
                    });
                    return;
                  }
                  setPhase("task");
                }}
                onSkip={() =>
                  finish({
                    isSkipped: true,
                    nextRoles: ["something_else"],
                    nextPersonalized: false,
                  })
                }
              />
              <ConversationalOnboardingProgressBar
                phase="role"
                isPhaseComplete={roles.length > 0}
              />
            </div>
          );
        }

        return (
          <div className="relative flex h-full min-h-0 w-full flex-col bg-token-main-surface-primary tracking-normal text-token-text-primary select-text">
            <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
              <h1 className="text-[28px] leading-[34px] font-normal text-token-foreground">
                Meet Codex
              </h1>
              <p className="max-w-md text-base leading-6 text-token-description-foreground">
                A short guided conversation to get you started. Guided task
                peers are still wiring up — you can continue or skip.
              </p>
              <Button
                className="mt-2 h-[46px] w-[320px] justify-center !text-lg !leading-6"
                color="ghostTertiary"
                size="large"
                onClick={() =>
                  finish({
                    isSkipped: true,
                    nextRoles: roles,
                    nextPersonalized: personalizedSuggestionsEnabled,
                  })
                }
              >
                Skip
              </Button>
            </div>
            <ConversationalContinueFooter
              phase="task"
              isAdvancePending={isAdvancePending}
              isPhaseComplete
              personalizedSuggestionsEnabled={personalizedSuggestionsEnabled}
              onPersonalizedSuggestionsChange={
                setPersonalizedSuggestionsEnabled
              }
              onContinueRole={() => undefined}
              onGetStarted={() =>
                finish({
                  isSkipped: false,
                  nextRoles: roles,
                  nextPersonalized: personalizedSuggestionsEnabled,
                })
              }
              onSkip={() =>
                finish({
                  isSkipped: true,
                  nextRoles: roles,
                  nextPersonalized: personalizedSuggestionsEnabled,
                })
              }
            />
          </div>
        );
      }}
    </CompleteOnboardingStep>
  );
}
