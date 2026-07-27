// Restored from ref/webview/assets/home-composer-mode-toggle-BlA7qei7.js
// Home composer Chat/Work mode toggle with sliding pill indicator.
// Stage 3: app-initial aliases → semantic modules; ESM inits dropped.
// Note: polished merged Hft/hft — hft→motion.span, Hft init dropped.

import { useState, type FocusEventHandler, type ReactNode } from "react";
import { motion } from "../vendor/framer-motion";
import { usePrefersReducedMotion } from "../motion/use-prefers-reduced-motion";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { useIntl } from "../i18n/use-intl";
import { cx } from "../ui/cx";
import { EASE_OUT_EXPO } from "../ui/ease-out-expo";
import { OptionalTooltip } from "../ui/optional-tooltip";

export type HomeComposerMode = "chat" | "work";

export type HomeComposerModeToggleProps = {
  className?: string;
  autoFocusSelected?: boolean;
  value: HomeComposerMode;
  onValueChange: (value: HomeComposerMode) => void;
  onSelectedAutoFocus?: FocusEventHandler<HTMLButtonElement>;
  onTransitionComplete?: () => void;
  disabled?: boolean;
};

const OPTION_BUTTON_CLASS =
  "cursor-interaction relative z-10 inline-flex h-full min-w-0 items-center justify-center whitespace-nowrap rounded-full px-7.5 text-sm font-medium extension:px-2.5 disabled:cursor-not-allowed disabled:opacity-40";

const PILL_TRANSITION = {
  duration: 0.3,
  ease: EASE_OUT_EXPO,
} as const;

/**
 * Bundle export `HomeComposerModeToggle` — Chat/Work segmented control.
 */
export function HomeComposerModeToggle({
  className,
  autoFocusSelected = false,
  value,
  onValueChange,
  onSelectedAutoFocus,
  onTransitionComplete,
  disabled = false,
}: HomeComposerModeToggleProps): ReactNode {
  const intl = useIntl();
  const prefersReducedMotion = usePrefersReducedMotion();
  const pillX = value === "chat" ? "0%" : "100%";
  const [initialPill] = useState(() =>
    !autoFocusSelected || prefersReducedMotion
      ? { x: pillX }
      : { x: value === "chat" ? "100%" : "0%" },
  );

  const rootClassName = cx(
    "relative isolate inline-grid h-8 shrink-0 grid-cols-2 gap-0 rounded-full p-0.5 select-none extension:h-7",
    className,
  );
  const ariaLabel = intl.formatMessage({
    id: "composer.home.modeToggle.ariaLabel",
    defaultMessage: "Composer mode",
    description:
      "Accessible label for the toggle that switches the Home composer between Work and Chat modes",
  });

  const track = (
    <span
      className="pointer-events-none absolute inset-x-0.5 top-1/2 z-0 h-8 -translate-y-1/2 rounded-full bg-token-side-bar-background dark:brightness-75 electron:dark:bg-token-button-foreground electron:dark:brightness-100"
      aria-hidden="true"
    />
  );

  const pill = (
    <motion.span
      animate={{ x: pillX }}
      className="pointer-events-none relative z-10 col-start-1 row-start-1 -my-[3px] rounded-full bg-token-input-background/90 shadow-md ring-[0.5px] ring-token-border backdrop-blur-lg electron:dark:bg-token-dropdown-background"
      initial={initialPill}
      transition={prefersReducedMotion ? { duration: 0 } : PILL_TRANSITION}
      aria-hidden="true"
      onAnimationComplete={onTransitionComplete}
    />
  );

  const chatTooltip = (
    <MemoizedFormattedMessage
      id="composer.home.modeToggle.chat.tooltip"
      defaultMessage="Ask questions and explore ideas"
      description="Concise tooltip for the Chat option in the Home composer mode toggle. It explains that Chat is for asking questions and exploring ideas."
    />
  );
  const chatButton = (
    <button
      autoFocus={autoFocusSelected && value === "chat"}
      className={cx(
        OPTION_BUTTON_CLASS,
        "col-start-1 row-start-1",
        value === "chat"
          ? "text-token-text-primary"
          : "text-token-text-tertiary hover:text-token-text-primary",
      )}
      type="button"
      aria-pressed={value === "chat"}
      disabled={disabled}
      onFocus={
        autoFocusSelected && value === "chat" ? onSelectedAutoFocus : undefined
      }
      onClick={() => {
        if (value !== "chat") onValueChange("chat");
      }}
    >
      <MemoizedFormattedMessage
        id="composer.home.modeToggle.chat"
        defaultMessage="Chat"
        description="Label for Chat mode in the Home composer mode toggle"
      />
    </button>
  );

  const workTooltip = (
    <MemoizedFormattedMessage
      id="composer.home.modeToggle.work.tooltip"
      defaultMessage="Get tasks done with your files and apps"
      description="Concise tooltip for the Work option in the Home composer mode toggle. It explains that Work can complete tasks using the user's files and apps."
    />
  );
  const workButton = (
    <button
      autoFocus={autoFocusSelected && value === "work"}
      className={cx(
        OPTION_BUTTON_CLASS,
        "col-start-2 row-start-1",
        value === "work"
          ? "text-token-text-primary"
          : "text-token-text-tertiary hover:text-token-text-primary",
      )}
      type="button"
      aria-pressed={value === "work"}
      disabled={disabled}
      onFocus={
        autoFocusSelected && value === "work" ? onSelectedAutoFocus : undefined
      }
      onClick={() => {
        if (value !== "work") onValueChange("work");
      }}
    >
      <MemoizedFormattedMessage
        id="composer.home.modeToggle.work"
        defaultMessage="Work"
        description="Label for Work mode in the Home composer mode toggle"
      />
    </button>
  );

  return (
    <div className={rootClassName} role="group" aria-label={ariaLabel}>
      {track}
      {pill}
      <OptionalTooltip disabled={disabled} tooltipContent={chatTooltip}>
        {chatButton}
      </OptionalTooltip>
      <OptionalTooltip disabled={disabled} tooltipContent={workTooltip}>
        {workButton}
      </OptionalTooltip>
    </div>
  );
}
