// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Teen starter-prompt cards (Helpers 75–78).

import { type ReactElement } from "react";

import { codexAppGaLogoUrl } from "../../assets/codex-app-ga-logo-url";
import { Button } from "../../ui/button";
import { cx } from "../../ui/cx";
import { CompleteOnboardingStep } from "./complete-onboarding-step";
import { ONBOARDING_STEPS, type TeenInterest } from "./constants";
import {
  pickTeenPromptsForInterests,
  type TeenPromptCard,
} from "./teen-prompt-catalog";

function TeenPromptCardView({
  prompt,
  onUsePrompt,
}: {
  prompt: TeenPromptCard;
  onUsePrompt: () => void;
}): ReactElement {
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-token-border bg-token-main-surface-primary">
      <div
        className={cx(
          "flex h-[125px] items-center justify-center overflow-hidden rounded-t-2xl",
          prompt.thumbnail.className,
        )}
        aria-hidden="true"
      >
        <div className="flex size-20 items-center justify-center rounded-2xl bg-white/70 text-[42px] shadow-lg">
          {prompt.thumbnail.emoji}
        </div>
      </div>
      <div className="flex flex-1 flex-col px-4 py-3">
        <h3 className="text-sm leading-5 font-medium tracking-[-0.24px] text-token-foreground">
          {prompt.title}
        </h3>
        <p className="mt-0.5 min-h-10 text-sm leading-5 tracking-[-0.3px] text-token-description-foreground">
          {prompt.description}
        </p>
        <Button
          className="mt-4 h-9 w-full justify-center rounded-full px-4 py-0 text-sm leading-5 font-medium"
          color="secondary"
          size="default"
          onClick={onUsePrompt}
        >
          Use prompt
        </Button>
      </div>
    </article>
  );
}

export type TeenPromptsPanelProps = {
  selectedInterests: readonly TeenInterest[];
  onContinue: (prefillPrompt?: string) => void;
};

/** Bundle Helper75 — ranked prompt grid + write-own escape hatch. */
export function TeenPromptsPanel({
  selectedInterests,
  onContinue,
}: TeenPromptsPanelProps): ReactElement {
  const prompts = pickTeenPromptsForInterests(selectedInterests);
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary px-6 py-12 text-token-foreground">
      <main className="flex w-full max-w-[768px] flex-col items-center">
        <img
          src={codexAppGaLogoUrl}
          className="size-12 shrink-0"
          draggable={false}
          alt=""
          aria-hidden="true"
        />
        <h1 className="mt-4 text-center text-[28px] leading-[34px] font-normal tracking-[0.38px] text-token-foreground">
          See what ChatGPT can do
        </h1>
        <p className="mt-2 max-w-[688px] text-center text-base leading-6 text-token-description-foreground">
          Here are some ideas for your first project. Choose an idea, or start
          with one of your own.
        </p>
        <div className="mt-6 grid w-full grid-cols-1 gap-4 min-[760px]:grid-cols-3">
          {prompts.map((prompt) => (
            <TeenPromptCardView
              key={prompt.id}
              prompt={prompt}
              onUsePrompt={() => onContinue(prompt.prompt)}
            />
          ))}
        </div>
        <button
          className="mt-8 h-10 cursor-interaction px-4 text-sm leading-5 font-normal text-token-description-foreground hover:text-token-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border"
          type="button"
          onClick={() => onContinue()}
        >
          Write my own prompt
        </button>
      </main>
    </div>
  );
}

/** Bundle Helper78 — teen prompts step with completion payload. */
export function TeenPromptsStep({
  selectedInterests = [],
  onContinue,
}: {
  isAdvancePending?: boolean;
  selectedInterests?: readonly TeenInterest[];
  onContinue: (result?: unknown) => void;
}): ReactElement {
  return (
    <CompleteOnboardingStep
      name="teen_prompts"
      onComplete={({ result }) => onContinue(result)}
    >
      {({ completeStep }) => (
        <TeenPromptsPanel
          selectedInterests={selectedInterests}
          onContinue={(prefillPrompt) =>
            completeStep({
              result: {
                step: ONBOARDING_STEPS.TeenPrompts,
                completion: {
                  state: {
                    roles: ["student"],
                    personalizedSuggestionsEnabled: false,
                    workMode: "coding",
                  },
                  options: {
                    focusComposer: true,
                    prefillPrompt,
                  },
                },
              },
              skipped: prefillPrompt == null,
            })
          }
        />
      )}
    </CompleteOnboardingStep>
  );
}
