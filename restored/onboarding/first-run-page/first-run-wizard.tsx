// Restored from ref/webview/assets/first-run-CmpS1-m3.js
// Multi-step first-run NUX wizard shell (ascii backdrop + copy + nav).

import { useState, type ReactElement, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
} from "../../vendor/framer-motion";

import { DEVELOPERS_OPENAI_COM_CODEX_IDE_URL } from "../../docs/codex-doc-urls";
import { AppIconPd } from "../../icons/app-icon-pd";
import { AppIcont0 } from "../../icons/app-icon-t0";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { Button } from "../../ui/button";
import {
  STEP_CLOUD,
  STEP_COUNT,
  STEP_INTRO,
  STEP_LEGAL,
  STEP_TODO,
  type FirstRunStep,
  type SlideVariant,
} from "./constants";
import { LegalListItem, PoweredByAccountItem } from "./legal-footer";
import { AsciiEngineView, useAsciiEngine } from "./runtime-bridges";
import { SlidePreview } from "./slide-preview";
import { useIsWideViewport } from "./use-is-wide-viewport";

export type FirstRunWizardProps = {
  initialStep: FirstRunStep;
  onAccept: () => void | Promise<void>;
  hasCloudAccess: boolean;
  isUsingCopilotAuth: boolean;
};

const fadeVariants = {
  initial: { opacity: 0 },
  active: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut", delay: 0.01 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: 0 },
  },
};

function stepToVariant(step: FirstRunStep): SlideVariant | null {
  if (step === STEP_LEGAL) return null;
  if (step === STEP_INTRO) return "intro";
  if (step === STEP_CLOUD) return "cloud";
  return "todo";
}

function advanceStep(step: FirstRunStep): FirstRunStep {
  return Math.min(STEP_COUNT - 1, step + 1) as FirstRunStep;
}

function retreatStep(step: FirstRunStep): FirstRunStep {
  return Math.max(STEP_INTRO, step - 1) as FirstRunStep;
}

function preventDefault(event: { preventDefault: () => void }): void {
  event.preventDefault();
}

/** Full-screen first-run wizard. */
export function FirstRunWizard({
  initialStep,
  onAccept,
  hasCloudAccess,
  isUsingCopilotAuth,
}: FirstRunWizardProps): ReactElement {
  const [step, setStep] = useState<FirstRunStep>(initialStep);
  const isWideViewport = useIsWideViewport(560);
  const { columns, rows, lines } = useAsciiEngine({
    initialColumns: 130,
    initialRows: 100,
    initialMode: "composite",
    preferredVideoKeyword: "blossom",
  });
  const [pendingAcceptAfterExit, setPendingAcceptAfterExit] = useState(false);

  const goBack = (): void => {
    setStep(retreatStep);
  };

  const goNext = (): void => {
    if (step === STEP_LEGAL) {
      setPendingAcceptAfterExit(true);
      return;
    }
    if (step < STEP_COUNT - 1) {
      setStep(advanceStep);
    } else {
      void onAccept();
    }
  };

  const title: ReactNode =
    step === STEP_INTRO ? (
      <MemoizedFormattedMessage
        id="codex.legal.step.intro.title"
        defaultMessage="Codex in your IDE"
        description="Heading for step 1 intro"
      />
    ) : step === STEP_CLOUD ? (
      <MemoizedFormattedMessage
        id="codex.legal.step.cloud.title"
        defaultMessage="Hand off to Codex in the cloud"
        description="Heading for step 2 cloud"
      />
    ) : step === STEP_TODO ? (
      <MemoizedFormattedMessage
        id="codex.legal.step.todo.title"
        defaultMessage="Turn TODOs into Codex tasks"
        description="Heading for step 3 todo"
      />
    ) : null;

  const subtitle: ReactNode =
    step === STEP_INTRO ? (
      <MemoizedFormattedMessage
        id="codex.legal.step.intro.subtitle"
        defaultMessage="Codex navigates, edits, runs commands, and executes tests directly in your repo. Powered by your ChatGPT account."
        description="Subtitle for step 1 intro"
      />
    ) : step === STEP_CLOUD ? (
      <MemoizedFormattedMessage
        id="codex.legal.step.cloud.subtitle"
        defaultMessage="Send tasks to Codex to run in the background so you can stay focused and move faster."
        description="Subtitle for step 2 cloud"
      />
    ) : step === STEP_TODO ? (
      <MemoizedFormattedMessage
        id="codex.legal.step.todo.subtitle"
        defaultMessage="Write a TODO comment and convert it into a Codex task with a single click."
        description="Subtitle for step 3 todo"
      />
    ) : null;

  const variant = stepToVariant(step);

  const copyBody =
    step === STEP_LEGAL ? (
      <ul className="mt-3 space-y-4 overflow-y-auto">
        <LegalListItem
          Icon={AppIconPd}
          title={
            <MemoizedFormattedMessage
              id="codex.legal.autonomy.title"
              defaultMessage="Decide how much autonomy you want to grant"
              description="Title for autonomy decision info"
            />
          }
        >
          <MemoizedFormattedMessage
            id="codex.legal.autonomy.details"
            defaultMessage="For more details, see the {link}"
            description="Details directing users to Codex documentation"
            values={{
              link: (
                <a
                  href={DEVELOPERS_OPENAI_COM_CODEX_IDE_URL}
                  className="!text-token-description-foreground underline hover:no-underline"
                  onClick={preventDefault}
                >
                  <MemoizedFormattedMessage
                    id="codex.legal.autonomy.details.link"
                    defaultMessage="Codex docs"
                    description="Link text to Codex docs"
                  />
                </a>
              ),
            }}
          />
        </LegalListItem>
        <LegalListItem
          Icon={AppIcont0}
          title={
            <MemoizedFormattedMessage
              id="codex.legal.mistakes.title"
              defaultMessage="Codex can make mistakes"
              description="Warning title about Codex fallibility"
            />
          }
        >
          <MemoizedFormattedMessage
            id="codex.legal.mistakes.review"
            defaultMessage="Review the code it writes and commands it runs"
            description="Instruction to review generated code and executed commands"
          />
        </LegalListItem>
        <PoweredByAccountItem isUsingCopilotAuth={isUsingCopilotAuth} />
      </ul>
    ) : (
      <div className="mx-auto w-full max-w-sm text-center text-base text-token-description-foreground">
        {subtitle}
      </div>
    );

  const maskStyle = {
    WebkitMaskImage:
      "radial-gradient(ellipse at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 50%)",
    maskImage:
      "radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 78%)",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
    opacity: 0.15,
  } as const;

  const springTransition = {
    type: "spring",
    duration: 0.6,
    bounce: 0,
  } as const;

  const backButton = hasCloudAccess ? (
    <Button
      type="button"
      size="large"
      color="outline"
      onClick={goBack}
      disabled={step === STEP_INTRO}
    >
      <MemoizedFormattedMessage
        id="codex.legal.backButton"
        defaultMessage="Back"
        description="Button text to go to previous step"
      />
    </Button>
  ) : null;

  const continueLabel = hasCloudAccess ? (
    <MemoizedFormattedMessage
      id="codex.legal.continueButton"
      defaultMessage="Next"
      description="Button text to proceed to next step or finish"
    />
  ) : (
    <MemoizedFormattedMessage
      id="codex.legal.continue.apikey"
      defaultMessage="Continue"
      description="Button text when using API key auth to accept legal disclaimers"
    />
  );

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-token-side-bar-background px-4 electron:!bg-transparent">
      <div
        className="pointer-events-none absolute inset-0 -ml-6"
        style={maskStyle}
      >
        <AsciiEngineView
          lines={lines}
          columns={columns}
          rows={rows}
          scale={0.95}
          autoCover
        />
      </div>
      <MotionConfig transition={springTransition}>
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="relative h-full w-full">
            <AnimatePresence initial={false} mode="wait">
              {variant ? (
                <motion.div
                  key={`slide-${step}`}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [@media(max-height:500px)]:hidden"
                  variants={fadeVariants}
                  initial="initial"
                  animate="active"
                  exit="exit"
                >
                  <SlidePreview
                    variant={variant}
                    isWideViewport={isWideViewport}
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 z-20 w-full max-w-lg -translate-x-1/2 px-6">
          <div className="mb-2 flex items-center justify-center">
            <h1 className="mx-auto w-full max-w-sm text-center text-base leading-tight font-medium text-token-foreground">
              <AnimatePresence initial={false} mode="wait">
                {title ? (
                  <motion.span
                    key={`title-${step}`}
                    variants={fadeVariants}
                    initial="initial"
                    animate="active"
                    exit="exit"
                  >
                    {title}
                  </motion.span>
                ) : null}
              </AnimatePresence>
            </h1>
          </div>
          <div className="flex justify-center px-2">
            <AnimatePresence
              initial={false}
              mode="wait"
              onExitComplete={() => {
                if (pendingAcceptAfterExit) {
                  setPendingAcceptAfterExit(false);
                  void onAccept();
                }
              }}
            >
              {!(step === STEP_LEGAL && pendingAcceptAfterExit) ? (
                <motion.div
                  key={`copy-${step}`}
                  variants={fadeVariants}
                  initial="initial"
                  animate="active"
                  exit="exit"
                >
                  {copyBody}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          <div className="mt-10 mb-0 px-2">
            <div className="mx-auto flex w-full max-w-[400px] items-center justify-between gap-2">
              {backButton}
              <Button type="button" size="large" onClick={goNext}>
                {continueLabel}
              </Button>
            </div>
          </div>
        </div>
      </MotionConfig>
    </div>
  );
}
