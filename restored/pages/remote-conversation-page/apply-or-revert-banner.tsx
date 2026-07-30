// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Presentational apply/revert banner (staging helper UI) — apply mutation stays peer-gated.

import type { ComponentType, ReactElement } from "react";

import { AppIconSR } from "../../icons/app-icon-sr";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { Callout } from "../../ui/callout";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { ApplyResultsDialog } from "./apply-results-dialog";
import { DifferentEnvironmentWarning } from "./different-environment-warning";

export type ApplyOrRevertBannerProps = {
  hasAppliedCodeLocally: boolean;
  canApply: boolean;
  isApplying: boolean;
  isNonWorkspaceEnvironment: boolean;
  taskEnvironmentLabel?: string | null;
  onApply: () => void;
  onRevert: () => void;
  results: {
    open: boolean;
    result: {
      appliedPaths?: string[];
      skippedPaths?: string[];
      conflictedPaths?: string[];
      errorCode?: string | null;
      status?: string;
    } | null;
  };
  setResultsOpen: (open: boolean) => void;
  /** Optional warning icon; defaults to AppIconSR when not non-workspace. */
  WarningIcon?: ComponentType<{ className?: string }>;
};

function EnvironmentWarningIcon({
  taskEnvironmentLabel,
  WarningIcon,
  className,
}: {
  taskEnvironmentLabel?: string | null;
  WarningIcon: ComponentType<{ className?: string }>;
  className?: string;
}): ReactElement {
  if (!taskEnvironmentLabel) {
    return <WarningIcon className={className} />;
  }
  return (
    <OptionalTooltip
      tooltipContent={
        <div className="max-w-[200px]">
          <MemoizedFormattedMessage
            id="codex.applyOrRevertBanner.applyMessageDifferentEnvironment.tooltip"
            defaultMessage="Changes made in {environment} so may not apply cleanly."
            description="Banner warning the user that the Codex code changes they are viewing were made in a different environment and may not apply cleanly."
            values={{
              environment: (
                <code className="whitespace-nowrap">
                  {taskEnvironmentLabel}
                </code>
              ),
            }}
          />
        </div>
      }
    >
      <WarningIcon className={className} />
    </OptionalTooltip>
  );
}

/** Apply / revert callout shown above the remote composer footer. */
export function ApplyOrRevertBanner(
  props: ApplyOrRevertBannerProps,
): ReactElement {
  const {
    hasAppliedCodeLocally,
    canApply,
    isApplying,
    isNonWorkspaceEnvironment,
    taskEnvironmentLabel,
    onApply,
    onRevert,
    results,
    setResultsOpen,
    WarningIcon = AppIconSR,
  } = props;

  const Icon = isNonWorkspaceEnvironment
    ? (iconProps: { className?: string }) => (
        <EnvironmentWarningIcon
          taskEnvironmentLabel={taskEnvironmentLabel}
          WarningIcon={WarningIcon}
          className={iconProps.className}
        />
      )
    : AppIconSR;

  const resultsDialog = (
    <ApplyResultsDialog
      open={results.open}
      result={results.result}
      onOpenChange={setResultsOpen}
    />
  );

  if (hasAppliedCodeLocally) {
    return (
      <>
        <Callout
          Icon={Icon}
          content={
            <div className="flex flex-col gap-0.5">
              <div className="truncate text-base">
                <MemoizedFormattedMessage
                  id="codex.applyOrRevertBanner.revertMessage"
                  defaultMessage="Revert applied changes?"
                  description="Banner message for reverting applied changes from Codex Cloud"
                />
              </div>
              {isNonWorkspaceEnvironment && taskEnvironmentLabel ? (
                <DifferentEnvironmentWarning
                  taskEnvironmentName={taskEnvironmentLabel}
                />
              ) : null}
            </div>
          }
          primaryCtaText={
            <MemoizedFormattedMessage
              id="codex.applyOrRevertBanner.revert"
              defaultMessage="Revert"
              description="Label to revert applied code changes from Codex"
            />
          }
          onPrimaryCtaClick={onRevert}
          isPrimaryCtaDisabled={isApplying || !canApply}
          secondaryCtaText={
            <MemoizedFormattedMessage
              id="codex.applyOrRevertBanner.reapply"
              defaultMessage="Reapply"
              description="Label to reapply code changes to Codex"
            />
          }
          onSecondaryCtaClick={onApply}
          isSecondaryCtaDisabled={isApplying || !canApply}
        />
        {resultsDialog}
      </>
    );
  }

  return (
    <>
      <Callout
        Icon={Icon}
        content={
          <div className="flex flex-col gap-0.5">
            <div className="text-base">
              <MemoizedFormattedMessage
                id="codex.applyOrRevertBanner.applyMessage"
                defaultMessage="Apply changes and continue locally?"
                description="Banner message for applying changes to Codex locally"
              />
            </div>
            {isNonWorkspaceEnvironment && taskEnvironmentLabel ? (
              <DifferentEnvironmentWarning
                taskEnvironmentName={taskEnvironmentLabel}
              />
            ) : null}
          </div>
        }
        primaryCtaText={
          <MemoizedFormattedMessage
            id="codex.applyOrRevertBanner.apply"
            defaultMessage="Apply"
            description="Label to apply code changes from Codex"
          />
        }
        onPrimaryCtaClick={onApply}
        isPrimaryCtaDisabled={isApplying || !canApply}
      />
      {resultsDialog}
    </>
  );
}
