// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Windows sandbox presentational panel (Helpers 86–89).

import { useState, type ReactElement, type ReactNode } from "react";

import { Button } from "../../ui/button";
import { cx } from "../../ui/cx";
import { type WindowsSandboxPhase } from "./windows-sandbox-setup-bridge";

const APP_DISPLAY_NAME = "Codex";

/** Bundle Helper87 — centered sandbox page frame. */
function WindowsSandboxLayout({
  children,
  shiftForWorkspaceRequirement = false,
}: {
  children?: ReactNode;
  shiftForWorkspaceRequirement?: boolean;
}): ReactElement {
  return (
    <main className="flex size-full overflow-y-auto bg-white px-6 [.electron-dark_&]:bg-token-bg-primary">
      <div
        className={cx(
          "relative my-auto flex w-full shrink-0 flex-col items-center gap-5 py-7",
          shiftForWorkspaceRequirement
            ? "-translate-y-[31px]"
            : "-translate-y-0.5",
        )}
      >
        {children}
      </div>
    </main>
  );
}

/** Bundle Helper89 — illustrative Windows UAC prompt. */
function WindowsUacPreview({
  disabled,
  showArrow,
  onElevatedSetup,
}: {
  disabled: boolean;
  showArrow: boolean;
  onElevatedSetup: () => void;
}): ReactElement {
  return (
    <div
      className="relative flex h-[226px] w-[312px] max-w-[calc(100vw-48px)] flex-col rounded-md border border-black/20 bg-white text-left text-[#202020] shadow-[0_5px_15px_rgba(0,0,0,0.14)]"
      role="group"
      aria-label="Example Windows permission prompt"
    >
      <div
        className="flex h-6 shrink-0 items-center bg-[#f2f2f2] px-3 text-[8px]"
        aria-hidden="true"
      >
        User Account Control
      </div>
      <div
        className="flex h-11 shrink-0 items-start bg-[#f2f2f2] px-4 text-[14px] leading-[18px] font-semibold"
        aria-hidden="true"
      >
        Do you want to allow this app to make changes to your device?
      </div>
      <div aria-hidden="true" className="h-24 shrink-0 px-4 pt-3.5">
        <div className="flex h-[22px] items-center gap-2.5">
          <div className="flex size-[22px] items-center justify-center rounded-md border border-black/10 bg-[#f5f5f5] text-[10px] font-semibold text-[#303030]">
            C
          </div>
          <span className="text-[14px] leading-[18px] font-semibold">
            {APP_DISPLAY_NAME}
          </span>
        </div>
        <div className="mt-1.5 text-[9px] leading-3.5 text-[#4d4d4d]">
          Verified publisher: OpenAI LLC
        </div>
        <div className="mt-1 text-[9px] leading-3.5 text-[#005fb8]">
          Show more details
        </div>
      </div>
      <div className="flex flex-1 items-center gap-1.5 rounded-b-md border-t border-black/10 bg-[#f2f2f2] px-4">
        <button
          type="button"
          className="relative flex h-[22px] flex-1 cursor-interaction items-center justify-center rounded-[3px] border border-[#d0d0d0] bg-white text-[9px] outline-none focus-visible:ring-2 focus-visible:ring-[#0091ff] disabled:cursor-default"
          disabled={disabled}
          onClick={onElevatedSetup}
        >
          Yes
          {showArrow ? (
            <span
              className="pointer-events-none absolute top-[25px] left-1/2 -translate-x-1/2 text-[18px] leading-none text-token-foreground"
              aria-hidden="true"
            >
              ▲
            </span>
          ) : null}
        </button>
        <button
          type="button"
          className="flex h-[22px] flex-1 cursor-interaction items-center justify-center rounded-[3px] bg-[#0067c0] text-[9px] text-white outline-none focus-visible:ring-2 focus-visible:ring-[#0091ff] disabled:cursor-default"
          disabled={disabled}
          onClick={onElevatedSetup}
        >
          No
        </button>
      </div>
    </div>
  );
}

/** Bundle Helper88 — limited-access confirmation (dialog peers → inline confirm). */
function LimitedAccessConfirm({
  disabled,
  onConfirm,
}: {
  disabled?: boolean;
  onConfirm: () => void;
}): ReactElement {
  const [open, setOpen] = useState(false);
  if (!open) {
    return (
      <Button
        className="justify-center px-3 py-1.5 focus-visible:ring-2 focus-visible:ring-token-focus-border"
        color="ghostTertiary"
        disabled={disabled}
        onClick={() => setOpen(true)}
      >
        Continue with limited access
      </Button>
    );
  }
  return (
    <div className="mt-2 flex w-[340px] max-w-[calc(100vw-48px)] flex-col gap-3 rounded-xl border border-token-border bg-token-dropdown-background p-4 text-left">
      <h2 className="text-sm font-medium text-token-foreground">
        Continue with limited access?
      </h2>
      <p className="text-xs leading-4 text-token-description-foreground">
        You’ll still be able to chat, but {APP_DISPLAY_NAME} won’t be able to
        create files, edit code, or take actions until setup is complete
      </p>
      <div className="flex justify-end gap-1.5">
        <Button
          className="!px-2.5 py-1"
          color="secondary"
          size="default"
          onClick={() => setOpen(false)}
        >
          Finish setup
        </Button>
        <Button
          className="!px-2.5 py-1"
          size="default"
          onClick={() => {
            setOpen(false);
            onConfirm();
          }}
        >
          Use limited access
        </Button>
      </div>
    </div>
  );
}

export type WindowsSandboxSetupPanelProps = {
  phase: WindowsSandboxPhase;
  isPending: boolean;
  isRequirementsPending: boolean;
  isRequirementsError: boolean;
  hasError: boolean;
  allowElevatedSetup: boolean;
  allowUnelevatedFallback: boolean;
  requiresElevatedSandboxByPolicy: boolean;
  showUnelevatedSetupAlternative: boolean;
  onElevatedSetup: () => void;
  onUnelevatedSetup: () => void;
  onRetryRequirements: () => void;
  onContinueWithLimitedAccess: () => void;
};

/** Bundle Helper86 — presentational Windows sandbox surfaces. */
export function WindowsSandboxSetupPanel(
  props: WindowsSandboxSetupPanelProps,
): ReactElement {
  const {
    phase,
    isPending,
    isRequirementsPending,
    isRequirementsError,
    hasError,
    allowElevatedSetup,
    allowUnelevatedFallback,
    requiresElevatedSandboxByPolicy,
    showUnelevatedSetupAlternative,
    onElevatedSetup,
    onUnelevatedSetup,
    onRetryRequirements,
    onContinueWithLimitedAccess,
  } = props;

  if (isRequirementsPending) {
    return (
      <WindowsSandboxLayout>
        <div className="size-10 rounded-full border-2 border-token-foreground/20 border-t-token-foreground animate-spin" />
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-[28px] leading-[34px] font-normal text-token-foreground">
            Checking Windows setup
          </h1>
          <div className="size-5 rounded-full border-2 border-token-foreground/20 border-t-token-foreground animate-spin" />
        </div>
      </WindowsSandboxLayout>
    );
  }

  if (isRequirementsError) {
    return (
      <WindowsSandboxLayout>
        <div className="size-10 rounded-lg bg-token-foreground/10" />
        <div className="flex max-w-[520px] flex-col items-center gap-3 text-center">
          <h1 className="text-[28px] leading-[34px] font-normal text-token-foreground">
            Couldn’t check Windows setup
          </h1>
          <p className="text-base leading-6 text-token-description-foreground">
            Try again to continue Windows setup
          </p>
          <div className="mt-3 flex w-[340px] flex-col items-center gap-2">
            <Button
              className="h-12 w-full justify-center focus-visible:ring-2 focus-visible:ring-token-focus-border"
              size="large"
              onClick={onRetryRequirements}
            >
              Try again
            </Button>
            <LimitedAccessConfirm onConfirm={onContinueWithLimitedAccess} />
          </div>
        </div>
      </WindowsSandboxLayout>
    );
  }

  const elevatedBusy =
    isPending && (phase === "startingElevated" || phase === "waitingElevated");
  const showUnelevated =
    showUnelevatedSetupAlternative || phase === "retryUnelevated";

  return (
    <WindowsSandboxLayout
      shiftForWorkspaceRequirement={requiresElevatedSandboxByPolicy}
    >
      <div className="flex w-full flex-col items-center">
        <div className="size-10 rounded-lg bg-token-foreground/10" />
        <div className="mt-2.5 flex flex-col items-center gap-1.5 text-center">
          <h1 className="text-[24px] leading-[30px] font-normal text-token-foreground">
            Finish Windows setup
          </h1>
          <p className="text-base leading-6 text-token-description-foreground">
            {APP_DISPLAY_NAME} needs a one-time permission to work on your
            computer
          </p>
        </div>
        {requiresElevatedSandboxByPolicy ? (
          <div className="mt-5 flex h-8 items-center gap-1.5 rounded-xl bg-[#fff7d6] px-2.5 text-[13px] text-[#b56a00] [.electron-dark_&]:bg-[#4a390d] [.electron-dark_&]:text-[#f0b552]">
            Your workspace requires this setup
          </div>
        ) : null}
        <div className={requiresElevatedSandboxByPolicy ? "mt-6" : "mt-[22px]"}>
          <WindowsUacPreview
            disabled={isPending}
            showArrow={!elevatedBusy}
            onElevatedSetup={onElevatedSetup}
          />
        </div>
        <div className="mt-8 flex min-h-5 w-[312px] max-w-[calc(100vw-48px)] items-center justify-center text-center text-[15px] leading-5 text-token-description-foreground">
          {hasError ? (
            <span className="text-token-charts-red">
              Windows setup didn’t finish
            </span>
          ) : (
            "Click Yes in the next step to finish setup"
          )}
        </div>
        <div className="relative mt-2 w-[296px] max-w-[calc(100vw-48px)]">
          <Button
            className="h-10 w-full justify-center !bg-[#0d0d0d] !text-white focus-visible:ring-2 focus-visible:ring-token-focus-border [.electron-dark_&]:!bg-token-foreground [.electron-dark_&]:!text-token-dropdown-background"
            size="large"
            disabled={isPending}
            loading={elevatedBusy}
            onClick={onElevatedSetup}
          >
            {hasError ? "Try Windows setup again" : "Finish setup"}
          </Button>
          <div className="absolute top-12 left-1/2 -translate-x-1/2">
            {allowElevatedSetup && allowUnelevatedFallback && showUnelevated ? (
              <Button
                className="justify-center px-3 py-1.5 focus-visible:ring-2 focus-visible:ring-token-focus-border"
                color="ghostTertiary"
                disabled={isPending}
                onClick={onUnelevatedSetup}
              >
                Continue with limited access
              </Button>
            ) : null}
            {requiresElevatedSandboxByPolicy ? (
              <LimitedAccessConfirm
                disabled={isPending}
                onConfirm={onContinueWithLimitedAccess}
              />
            ) : null}
          </div>
        </div>
      </div>
    </WindowsSandboxLayout>
  );
}
