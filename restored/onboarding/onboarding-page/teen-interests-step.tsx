// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Teen interests picker (Helpers 72–74).

import { useState, type ReactElement } from "react";

import { codexAppGaLogoUrl } from "../../assets/codex-app-ga-logo-url";
import { Button } from "../../ui/button";
import { cx } from "../../ui/cx";
import { CompleteOnboardingStep } from "./complete-onboarding-step";
import { ONBOARDING_STEPS, type TeenInterest } from "./constants";
import { toggleListItem } from "./runtime-bridges";
import {
  TEEN_INTEREST_OPTIONS,
  type TeenInterestOption,
} from "./teen-interest-options";

function InterestChip({
  option,
  selected,
  onClick,
}: {
  option: TeenInterestOption;
  selected: boolean;
  onClick: () => void;
}): ReactElement {
  return (
    <button
      type="button"
      className={cx(
        "flex h-12 shrink-0 cursor-interaction items-center gap-2.5 rounded-[10px] border px-[13px] py-2.5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border",
        selected
          ? "border-token-foreground bg-token-foreground/5"
          : "border-token-border bg-token-main-surface-primary hover:bg-token-foreground/[0.03]",
      )}
      aria-pressed={selected}
      onClick={onClick}
    >
      <span
        className="text-xl leading-5 tracking-[-0.18px] text-token-description-foreground"
        aria-hidden="true"
      >
        {option.emoji}
      </span>
      <span className="text-base leading-6 tracking-[-0.32px] text-token-foreground">
        {option.label}
      </span>
    </button>
  );
}

export type TeenInterestsPanelProps = {
  selectedInterests: readonly TeenInterest[];
  onToggleInterest: (interest: TeenInterest) => void;
  onNext: () => void;
};

/** Bundle Helper72 — interest grid + Next. */
export function TeenInterestsPanel({
  selectedInterests,
  onToggleInterest,
  onNext,
}: TeenInterestsPanelProps): ReactElement {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary px-6 py-12 text-token-foreground">
      <main className="flex w-full max-w-[600px] flex-col items-center">
        <img
          src={codexAppGaLogoUrl}
          className="size-12 shrink-0"
          draggable={false}
          alt=""
          aria-hidden="true"
        />
        <h1 className="mt-4 text-center text-[28px] leading-[34px] font-normal tracking-[0.38px] text-token-foreground">
          What are you into right now?
        </h1>
        <p className="mt-2 text-center text-base leading-6 text-token-description-foreground">
          Pick your interests and we’ll suggest things to build
        </p>
        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-3 px-6">
          {TEEN_INTEREST_OPTIONS.map((option) => (
            <InterestChip
              key={option.id}
              option={option}
              selected={selectedInterests.includes(option.id)}
              onClick={() => onToggleInterest(option.id)}
            />
          ))}
        </div>
        <Button
          className="mt-8 h-10 w-80 justify-center rounded-full border-transparent px-4 py-0 text-sm leading-5 font-medium"
          color="primary"
          size="default"
          onClick={onNext}
        >
          Next
        </Button>
      </main>
    </div>
  );
}

/** Bundle Helper74 — stateful teen interests step. */
export function TeenInterestsStep({
  onContinue,
}: {
  isAdvancePending?: boolean;
  onContinue: (result?: unknown) => void;
}): ReactElement {
  const [selected, setSelected] = useState<TeenInterest[]>([]);
  return (
    <CompleteOnboardingStep
      name="teen_interests"
      onComplete={({ result }) => onContinue(result)}
    >
      {({ completeStep }) => (
        <TeenInterestsPanel
          selectedInterests={selected}
          onToggleInterest={(interest) =>
            setSelected((prev) => toggleListItem(prev, interest))
          }
          onNext={() =>
            completeStep({
              result: {
                step: ONBOARDING_STEPS.TeenInterests,
                interests: selected,
              },
            })
          }
        />
      )}
    </CompleteOnboardingStep>
  );
}
