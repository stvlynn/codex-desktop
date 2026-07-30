// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Teen welcome surface (Helpers 79–84) with decorative preview cards.

import { type ReactElement, type ReactNode } from "react";

import { AnimatedIcon } from "../../ui/animated-icon";
import { Button } from "../../ui/button";
import { cx } from "../../ui/cx";
import { CompleteOnboardingStep } from "./complete-onboarding-step";
import { ONBOARDING_STEPS } from "./constants";

const LEARN_MORE_HREF = "https://openai.com/codex/";

function PreviewCard({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}): ReactElement {
  return (
    <div
      className={cx(
        "absolute overflow-hidden rounded-2xl border border-token-border/50 shadow-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Bundle Helper81 — stacked fake UI cards behind the welcome CTA. */
function TeenWelcomePreview(): ReactElement {
  return (
    <div className="relative mt-8 h-[177px] w-[320px]" aria-hidden="true">
      <PreviewCard className="top-[13px] left-0 h-[121px] w-[170px] -rotate-[12deg] bg-[#F9ECF3]">
        <div className="absolute inset-x-5 top-5 h-10 rounded bg-[#FFF8FC]" />
        <div className="absolute right-4 bottom-4 left-4 h-8 rounded bg-[#F3DDE9]" />
      </PreviewCard>
      <PreviewCard className="top-[14px] right-0 h-[120px] w-[170px] rotate-[12deg] bg-[#F8F8DE]">
        <div className="absolute inset-x-4 top-4 h-12 rounded bg-[#FFFFF0]" />
        <div className="absolute right-6 bottom-5 left-6 h-7 rounded bg-[#E9E9B6]" />
      </PreviewCard>
      <PreviewCard className="top-[54px] left-1/2 h-[108px] w-[162px] -translate-x-1/2 bg-[#CFE0FF]">
        <div className="absolute inset-x-3 top-3 h-[72px] rounded bg-[linear-gradient(180deg,#FBFDFF_0%,#D9E8FF_100%)]" />
        <div className="absolute right-4 bottom-3 left-4 h-4 rounded-full bg-white/75" />
      </PreviewCard>
      <div className="absolute bottom-0 left-1/2 flex h-6 -translate-x-1/2 items-center rounded-full bg-token-main-surface-primary px-3 text-xs leading-3 font-medium text-token-foreground shadow-xl">
        Build a studying app
      </div>
    </div>
  );
}

export type TeenWelcomePanelProps = {
  onContinue: (result?: unknown) => void;
};

/** Bundle Helper79 — welcome copy + CTA. */
export function TeenWelcomePanel({
  onContinue,
}: TeenWelcomePanelProps): ReactElement {
  return (
    <div className="flex h-full w-full items-center justify-center bg-token-main-surface-primary px-8 py-12">
      <main className="flex w-full flex-col items-center">
        <AnimatedIcon
          className="text-token-foreground"
          animation="hello"
          animated={false}
          size={64}
        />
        <h1 className="heading-xl mt-4 text-center font-semibold text-token-foreground">
          Welcome to ChatGPT
        </h1>
        <p className="mt-2 max-w-sm text-center text-lg leading-6 text-token-description-foreground">
          Turn your ideas into web apps, games, and tools just for you—even with
          no coding experience.
        </p>
        <TeenWelcomePreview />
        <Button
          className="mt-8 h-12 w-80 justify-center rounded-full border-transparent px-4 py-0 text-base leading-5 font-semibold"
          color="primary"
          size="default"
          onClick={onContinue}
        >
          Get started
        </Button>
        <a
          className="mt-3 flex h-10 cursor-interaction items-center gap-2 text-base leading-5 font-semibold text-token-foreground hover:underline"
          href={LEARN_MORE_HREF}
          target="_blank"
          rel="noreferrer"
        >
          Learn more about what ChatGPT can do
        </a>
      </main>
    </div>
  );
}

/** Bundle Helper83 — teen welcome step with completion wrapper. */
export function TeenWelcomeStep({
  onContinue,
}: {
  isAdvancePending?: boolean;
  onContinue: (result?: unknown) => void;
}): ReactElement {
  return (
    <CompleteOnboardingStep
      name="teen_welcome"
      onComplete={({ result }) => onContinue(result)}
    >
      {({ completeStep }) => (
        <TeenWelcomePanel
          onContinue={() =>
            completeStep({
              result: { step: ONBOARDING_STEPS.TeenWelcome },
            })
          }
        />
      )}
    </CompleteOnboardingStep>
  );
}
