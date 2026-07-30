// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Safe chrome stand-ins for peer-gated fullscreen / continue-panel exports.

import { type ReactElement, type ReactNode } from "react";

import { PageLoadingState } from "../../ui/page-loading-state";

/**
 * Bundle export `Vm` — loading probe with `debugName`.
 * exportSources DebugNameProbe peers throw; keep PageLoadingState-shaped shell.
 */
export function OnboardingLoadingProbe({
  debugName,
}: {
  debugName?: string;
}): ReactElement {
  return <PageLoadingState debugName={debugName ?? "OnboardingLoadingPage"} />;
}

/**
 * Bundle export `$J` — wham/task cluster surface used as JSX in agent-migration.
 * exportSources maps `$J` → ensureWhamTaskClusterInit.
 */
export function WhamTaskClusterBridge({
  children,
}: {
  children?: ReactNode;
}): ReactElement {
  return <div data-onboarding-wham-cluster="">{children}</div>;
}

/**
 * Safe fullscreen frame — mirrors `OnboardingFullscreenFrame` (`xn`) layout
 * without peer-gated brand / window-chrome companions.
 */
export type SafeOnboardingFullscreenFrameProps = {
  children?: ReactNode;
  fullBleed?: boolean;
  hideHeader?: boolean;
  showBrandIcon?: boolean;
};

export function SafeOnboardingFullscreenFrame({
  children,
  fullBleed = false,
  hideHeader = false,
  showBrandIcon = false,
}: SafeOnboardingFullscreenFrameProps): ReactElement {
  const showDragHeader = !hideHeader;
  const contentClassName = fullBleed
    ? "fixed inset-0"
    : showDragHeader
      ? "fixed inset-x-0 bottom-0 top-toolbar-sm flex items-center justify-center px-6 pb-8 pt-2"
      : "fixed inset-x-0 bottom-0 top-0 flex items-center justify-center px-6 pb-8 pt-8";

  return (
    <div
      className="fixed inset-0 overflow-hidden select-none"
      data-onboarding-fullscreen=""
      data-full-bleed={fullBleed ? "true" : undefined}
      data-show-brand={showBrandIcon ? "true" : undefined}
    >
      <div className="absolute inset-0 bg-token-bg-primary electron:bg-transparent" />
      {showDragHeader && !showBrandIcon ? (
        <div className="draggable fixed inset-x-0 top-0 z-10 h-toolbar-sm select-none" />
      ) : null}
      {showBrandIcon ? (
        <div className="draggable fixed inset-x-0 top-0 z-10 flex h-toolbar items-center justify-center bg-token-main-surface-primary select-none">
          <span
            className="pointer-events-none size-6 rounded-sm bg-token-foreground/20"
            aria-hidden="true"
          />
        </div>
      ) : null}
      <div className={contentClassName}>{children}</div>
    </div>
  );
}

/** Continue-panel shell when first-time panel peers are not wired. */
export type SafeContinuePanelProps = {
  title?: ReactNode;
  subtitle?: ReactNode;
  isPending?: boolean;
  hasError?: boolean;
  onContinue?: () => void;
  onSkip?: () => void;
  children?: ReactNode;
};

export function SafeContinuePanel({
  title,
  subtitle,
  isPending = false,
  hasError = false,
  onContinue,
  onSkip,
  children,
}: SafeContinuePanelProps): ReactElement {
  return (
    <div className="flex w-full max-w-lg flex-col gap-4 text-center">
      {title != null ? (
        <h1 className="text-2xl font-medium text-token-text-primary">
          {title}
        </h1>
      ) : null}
      {subtitle != null ? (
        <p className="text-sm text-token-text-secondary">{subtitle}</p>
      ) : null}
      {children}
      {hasError ? (
        <p className="text-sm text-token-text-error">Something went wrong.</p>
      ) : null}
      <div className="flex items-center justify-center gap-3">
        {onSkip != null ? (
          <button
            type="button"
            className="text-sm text-token-text-secondary"
            onClick={onSkip}
          >
            Skip
          </button>
        ) : null}
        {onContinue != null ? (
          <button
            type="button"
            className="rounded-md bg-token-text-primary px-4 py-2 text-sm text-token-bg-primary disabled:opacity-50"
            disabled={isPending}
            onClick={onContinue}
          >
            Continue
          </button>
        ) : null}
      </div>
    </div>
  );
}
