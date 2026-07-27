// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `uni`) / export `VW`.

import type { ReactElement, ReactNode } from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "./button";
import { cx } from "./cx";

export type AnnouncementModalProps = {
  actionLayout?: "inline" | "stacked" | "split" | string;
  body?: ReactNode;
  closeButtonClassName?: string;
  closeButtonTone?: "light" | "dark";
  contentClassName?: string;
  contentStackClassName?: string;
  disclaimerFooter?: ReactNode;
  dismissLabel?: ReactNode;
  footer?: ReactNode;
  initialFocus?: "primary" | "secondary" | unknown;
  media?: ReactNode;
  mediaClassName?: string;
  onDismiss?: () => void;
  onContentAnimationEnd?: () => void;
  onPrimaryAction?: () => void;
  onPrimaryActionIntent?: () => void;
  onSecondaryAction?: () => void;
  onSecondaryActionIntent?: () => void;
  overlayClassName?: string;
  primaryActionLabel?: ReactNode;
  shouldIgnoreClickOutside?: boolean;
  surfaceClassName?: string;
  title?: ReactNode;
  titleClassName?: string;
};

/**
 * Bundle export `VW` / internal `uni`.
 * Shared announcement / upgrade modal chrome.
 */
export function AnnouncementModal(props: AnnouncementModalProps): ReactElement {
  const {
    actionLayout = "inline",
    body,
    closeButtonClassName,
    closeButtonTone = "light",
    contentClassName,
    contentStackClassName,
    disclaimerFooter,
    dismissLabel,
    footer,
    initialFocus,
    media,
    mediaClassName,
    onDismiss,
    onContentAnimationEnd,
    onPrimaryAction,
    onPrimaryActionIntent,
    onSecondaryAction,
    onSecondaryActionIntent,
    overlayClassName,
    primaryActionLabel,
    shouldIgnoreClickOutside = false,
    surfaceClassName = "!bg-token-dropdown-background",
    title,
    titleClassName,
  } = props;

  const secondaryButton =
    dismissLabel == null ? null : (
      <Button
        autoFocus={initialFocus === "secondary"}
        type="button"
        size="large"
        color={actionLayout === "inline" ? "secondary" : "ghostActive"}
        onClick={onSecondaryAction ?? onDismiss}
        onFocus={onSecondaryActionIntent}
        onPointerEnter={onSecondaryActionIntent}
        className={cx("justify-center", actionLayout !== "inline" && "w-full")}
      >
        {dismissLabel}
      </Button>
    );

  const primaryButton =
    primaryActionLabel == null && onPrimaryAction == null ? null : (
      <Button
        autoFocus={initialFocus === "primary"}
        size="large"
        color="primary"
        className={cx("justify-center", actionLayout !== "inline" && "w-full")}
        onClick={onPrimaryAction}
        onFocus={onPrimaryActionIntent}
        onPointerEnter={onPrimaryActionIntent}
      >
        {primaryActionLabel}
      </Button>
    );

  const actionsClassName = cx(
    "items-center justify-center",
    actionLayout === "stacked" && "flex w-full flex-col gap-2",
    actionLayout === "split" && "grid w-full grid-cols-2 gap-3",
    actionLayout === "inline" && "flex flex-wrap gap-3",
  );

  const actions =
    actionLayout === "stacked" ? (
      <>
        {primaryButton}
        {secondaryButton}
      </>
    ) : (
      <>
        {secondaryButton}
        {primaryButton}
      </>
    );

  const closeToneClass =
    closeButtonTone === "dark" ? "text-black" : "text-white";

  return (
    <div
      className={cx(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
        overlayClassName,
      )}
      role="presentation"
      onClick={() => {
        if (!shouldIgnoreClickOutside) onDismiss?.();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        className={cx(
          "pointer-events-auto relative flex max-h-[calc(100dvh-32px)] w-[min(480px,92vw)] flex-col overflow-hidden !rounded-[16px] !ring-0 !backdrop-blur-none shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)]",
          surfaceClassName,
          contentClassName,
        )}
        onClick={(event) => event.stopPropagation()}
        onAnimationEnd={onContentAnimationEnd}
      >
        <div
          className={cx(
            "pointer-events-auto relative flex max-h-[calc(100dvh-32px)] flex-col overflow-y-auto pb-10",
            contentStackClassName ?? "gap-10",
          )}
        >
          {media != null || onDismiss != null ? (
            <div
              className={cx("relative w-full", mediaClassName ?? "h-[214px]")}
            >
              {media}
              {onDismiss != null ? (
                <button
                  type="button"
                  onClick={onDismiss}
                  aria-label="Close"
                  className={cx(
                    "absolute top-[14px] right-[14px] cursor-interaction appearance-none rounded border-0 bg-transparent p-0.5 hover:opacity-80 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none",
                    closeToneClass,
                    closeButtonClassName,
                  )}
                >
                  <span className="sr-only">
                    <FormattedMessage
                      id="codexUpgradeModal.close"
                      defaultMessage="Close"
                      description="Aria label for closing the Codex upgrade modal"
                    />
                  </span>
                  ×
                </button>
              ) : null}
            </div>
          ) : null}
          <div className="flex flex-col items-center gap-2 px-8">
            {title != null ? (
              <h2
                className={cx("heading-dialog font-semibold", titleClassName)}
              >
                {title}
              </h2>
            ) : null}
            {body}
          </div>
          {footer != null ||
          primaryButton != null ||
          secondaryButton != null ? (
            <div className={cx("px-8", actionsClassName)}>
              {footer ?? actions}
            </div>
          ) : null}
          {disclaimerFooter}
        </div>
      </div>
    </div>
  );
}

/** Bundle export `HW` (`fni`) — Rolldown ESM init retained as no-op. */
export function ensureAnnouncementModalInit(): void {}
