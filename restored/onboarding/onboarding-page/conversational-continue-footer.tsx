// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Conversational continue chrome (Helper45 + progress `is`).

import { useState, type ReactElement } from "react";

import { Button } from "../../ui/button";
import { cx } from "../../ui/cx";

export type ConversationalPhase = "role" | "task";

/** Bundle `is` — bottom progress ticks for conversational phases. */
export function ConversationalOnboardingProgressBar({
  phase,
  isPhaseComplete,
}: {
  phase: ConversationalPhase;
  isPhaseComplete: boolean;
}): ReactElement {
  let activeIndex = 0;
  if (phase === "task") activeIndex = isPhaseComplete ? 2 : 1;
  return (
    <div
      aria-hidden="true"
      data-active-index={activeIndex}
      data-testid="onboarding-progress-bar"
      className="absolute bottom-4 flex h-[3px] w-20 gap-1.5"
    >
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          className={cx(
            "h-full flex-1 rounded-full",
            index === activeIndex
              ? "bg-token-foreground"
              : "bg-token-foreground/10",
          )}
        />
      ))}
    </div>
  );
}

export type ConversationalContinueFooterProps = {
  phase: ConversationalPhase;
  isAdvancePending: boolean;
  isPhaseComplete: boolean;
  personalizedSuggestionsEnabled: boolean;
  onPersonalizedSuggestionsChange: (enabled: boolean) => void;
  onContinueRole: (personalizedSuggestionsEnabled: boolean) => void;
  onGetStarted: () => void;
  onSkip: () => void;
};

/**
 * Bundle Helper45 — continue / skip chrome without dialog / motion peers.
 * Skip confirmation is an inline confirm instead of appInitialK dialog.
 */
export function ConversationalContinueFooter({
  phase,
  isAdvancePending,
  isPhaseComplete,
  personalizedSuggestionsEnabled,
  onPersonalizedSuggestionsChange,
  onContinueRole,
  onGetStarted,
  onSkip,
}: ConversationalContinueFooterProps): ReactElement {
  const [skipConfirmOpen, setSkipConfirmOpen] = useState(false);

  const primary =
    phase === "role" ? (
      <Button
        className="h-[46px] w-[320px] justify-center rounded-[24px] !text-lg !leading-6"
        color="primary"
        size="large"
        disabled={!isPhaseComplete}
        loading={isAdvancePending}
        aria-busy={isAdvancePending}
        onClick={() => onContinueRole(personalizedSuggestionsEnabled)}
      >
        Continue
      </Button>
    ) : isPhaseComplete ? (
      <Button
        className="h-[46px] w-[320px] justify-center rounded-[24px] !text-lg !leading-6"
        color="primary"
        size="large"
        loading={isAdvancePending}
        aria-busy={isAdvancePending}
        onClick={onGetStarted}
      >
        Get Started
      </Button>
    ) : (
      <Button
        className="h-[46px] w-[320px] justify-center !text-lg !leading-6"
        color="ghostTertiary"
        size="large"
        onClick={() => setSkipConfirmOpen(true)}
      >
        Skip
      </Button>
    );

  return (
    <>
      <div className="relative flex shrink-0 flex-col items-center gap-3 px-10 pt-8 pb-12">
        <div className="flex flex-col items-center gap-3">
          {phase === "role" ? (
            <label className="flex items-center gap-2 text-sm text-token-foreground">
              <input
                type="checkbox"
                className="size-4"
                checked={personalizedSuggestionsEnabled}
                onChange={(event) =>
                  onPersonalizedSuggestionsChange(event.target.checked)
                }
              />
              Suggest personalized tasks
            </label>
          ) : null}
          {primary}
          <ConversationalOnboardingProgressBar
            phase={phase}
            isPhaseComplete={isPhaseComplete}
          />
        </div>
      </div>
      {phase === "task" && !isPhaseComplete && skipConfirmOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--color-token-bg-primary)_64%,transparent)] backdrop-blur-[18px]">
          <div className="w-[370px] rounded-xl bg-token-dropdown-background p-5 shadow-xl">
            <h2 className="text-lg font-medium text-token-foreground">
              Skip setup?
            </h2>
            <p className="mt-2 text-sm text-token-description-foreground">
              You’ll go straight to ChatGPT
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <Button color="primary" onClick={() => setSkipConfirmOpen(false)}>
                Keep setting up
              </Button>
              <Button
                color="outline"
                onClick={() => {
                  setSkipConfirmOpen(false);
                  onSkip();
                }}
              >
                Go to ChatGPT
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
