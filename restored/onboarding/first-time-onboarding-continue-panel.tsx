// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `Dcu`) / export `sn`.
// Customize/summary peers bind via setFirstTimeOnboardingContinuePanelParts.

import type { FormEvent, ReactElement, ReactNode } from "react";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "../ui/button";
import { DialogBody } from "../ui/dialog-body";
import { DialogFooter } from "../ui/dialog-footer";
import { DialogHeader } from "../ui/dialog-header";
import { DialogSection } from "../ui/dialog-section";

export type FirstTimeOnboardingSummary = {
  customizeItems?: Array<{
    id: string;
    group?: string;
    [key: string]: unknown;
  }>;
  chatChoiceKey?: string | null;
  toolsAndSetupCount?: number;
  projectsCount?: number;
  [key: string]: unknown;
};

export type FirstTimeOnboardingContinuePanelProps = {
  appBrand?: ReactNode;
  continueLabel?: ReactNode;
  hasError?: boolean;
  eventSource?: string;
  isComplete?: boolean;
  isPending?: boolean;
  logShownOnMount?: boolean;
  subtitle?: ReactNode;
  title?: ReactNode;
  variant?: "onboarding" | "dialog" | string;
  providerIds?: string[];
  detectedProviderIds?: string[];
  summary?: FirstTimeOnboardingSummary;
  onCustomize?: () => void;
  onContinue?: (selection: Record<string, boolean>) => void;
  onEvent?: (event: Record<string, unknown>) => void;
  onSkip?: () => void;
};

export type FirstTimeOnboardingContinuePanelParts = {
  render: (props: FirstTimeOnboardingContinuePanelProps) => ReactNode;
};

let parts: FirstTimeOnboardingContinuePanelParts | null = null;

/** Wire customize checklist / telemetry once companions land. */
export function setFirstTimeOnboardingContinuePanelParts(
  next: FirstTimeOnboardingContinuePanelParts,
): void {
  parts = next;
}

/**
 * Bundle export `sn` / internal `Dcu`.
 * First-time onboarding continue/skip panel with a real Stage-3 scaffold.
 */
export function FirstTimeOnboardingContinuePanel(
  props: FirstTimeOnboardingContinuePanelProps,
): ReactElement {
  if (parts != null) {
    return parts.render(props) as ReactElement;
  }

  const {
    appBrand,
    continueLabel,
    isComplete = false,
    isPending = false,
    subtitle,
    title,
    variant = "onboarding",
    summary,
    onCustomize,
    onContinue,
    onSkip,
  } = props;
  const isDialog = variant === "dialog";
  const busy = isPending || isComplete;
  const [selection] = useState<Record<string, boolean>>({});

  const resolvedTitle = title ?? (
    <FormattedMessage
      id="electron.onboarding.welcomeV2.firstTime.title"
      defaultMessage="Bring your work into Codex"
      description="Default title for first-time onboarding continue panel"
    />
  );
  const resolvedSubtitle =
    subtitle === undefined ? (
      <FormattedMessage
        id="electron.onboarding.welcomeV2.firstTime.subtitle"
        defaultMessage="Import tools, projects, and recent chats from other apps"
        description="Default subtitle for first-time onboarding continue panel"
      />
    ) : (
      subtitle
    );

  const handleContinue = (): void => {
    if (isPending) return;
    onContinue?.(selection);
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    if (!busy) handleContinue();
  };

  const actions = isDialog ? (
    <div className="mt-4">
      <DialogFooter>
        <Button color="ghost" type="button" disabled={busy} onClick={onSkip}>
          <FormattedMessage
            id="electron.onboarding.welcomeV2.skip"
            defaultMessage="Skip"
            description="Welcome v2 skip button label"
          />
        </Button>
        <Button
          type="submit"
          color="primary"
          loading={isPending}
          disabled={busy && !isPending}
        >
          {isPending ? (
            <FormattedMessage
              id="electron.onboarding.welcomeV2.externalAgentImport.importingButton"
              defaultMessage="Importing"
              description="Button label shown while external agent onboarding import is running"
            />
          ) : (
            (continueLabel ?? (
              <FormattedMessage
                id="electron.onboarding.welcomeV2.continue"
                defaultMessage="Continue"
                description="Welcome v2 continue button label"
              />
            ))
          )}
        </Button>
      </DialogFooter>
    </div>
  ) : (
    <div className="mt-8 flex w-full max-w-sm flex-col items-center gap-2">
      <Button
        className="w-full justify-center"
        size="large"
        type="button"
        loading={isPending}
        disabled={busy && !isPending}
        onClick={handleContinue}
      >
        {isPending ? (
          <FormattedMessage
            id="electron.onboarding.welcomeV2.externalAgentImport.importingButton"
            defaultMessage="Importing"
            description="Button label shown while external agent onboarding import is running"
          />
        ) : (
          (continueLabel ?? (
            <FormattedMessage
              id="electron.onboarding.welcomeV2.continue"
              defaultMessage="Continue"
              description="Welcome v2 continue button label"
            />
          ))
        )}
      </Button>
      <Button
        className="w-full justify-center"
        color="ghost"
        size="large"
        type="button"
        disabled={busy}
        onClick={onSkip}
      >
        <FormattedMessage
          id="electron.onboarding.welcomeV2.skip"
          defaultMessage="Skip"
          description="Welcome v2 skip button label"
        />
      </Button>
      {onCustomize != null ? (
        <Button
          className="w-full justify-center"
          color="ghost"
          size="large"
          type="button"
          disabled={busy}
          onClick={onCustomize}
        >
          Customize
        </Button>
      ) : null}
    </div>
  );

  const header = isDialog ? (
    <DialogSection>
      <DialogHeader title={resolvedTitle} subtitle={resolvedSubtitle} />
    </DialogSection>
  ) : (
    <div className="mb-6 flex flex-col items-center gap-2 text-center">
      {appBrand}
      <h1 className="heading-dialog font-semibold">{resolvedTitle}</h1>
      {resolvedSubtitle != null ? (
        <p className="text-sm text-token-description-foreground">
          {resolvedSubtitle}
        </p>
      ) : null}
    </div>
  );

  const summaryBlock =
    summary != null ? (
      <div
        className={
          isDialog
            ? "mt-4 flex w-full flex-col gap-2 text-sm"
            : "mt-8 flex w-full max-w-sm flex-col gap-2 text-sm"
        }
      >
        {(summary.toolsAndSetupCount ?? 0) > 0 ? (
          <div className="rounded-xl border border-token-border px-3 py-2">
            Tools & setup: {summary.toolsAndSetupCount}
          </div>
        ) : null}
        {(summary.projectsCount ?? 0) > 0 ? (
          <div className="rounded-xl border border-token-border px-3 py-2">
            Projects: {summary.projectsCount}
          </div>
        ) : null}
      </div>
    ) : null;

  const content = (
    <>
      {header}
      {summaryBlock}
      {actions}
    </>
  );

  if (isDialog) {
    return (
      <DialogBody as="form" className="gap-0" onSubmit={handleSubmit}>
        {content}
      </DialogBody>
    );
  }

  return (
    <div className="flex w-full max-w-lg flex-col items-center overflow-hidden rounded-2xl p-10">
      {content}
    </div>
  );
}
