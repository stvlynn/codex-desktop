// Restored from ref/webview/assets/composer-action-bar-run-location-dropdown-DN6XZTGU.js
// Composer action-bar dropdown for local vs cloud run location.
// Stage 3: IB init dropped; d_→AppIcond; FB→AppIconFB; wft→cx; intl/dropdown mapped.

import type { ReactElement } from "react";
import { OptionalTooltip } from "../ui/optional-tooltip";
import { Button } from "../ui/button";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { useIntl } from "../i18n/use-intl";
import { DropdownMenu, ensureDropdownMenuInit } from "../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../ui/dropdown-menu-popover";
import { AppIconFB } from "../icons/app-icon-fb";
import { AppIcond } from "../icons/app-icon-d";
import { AppIconZlt } from "../icons/app-icon-zlt";
import { cx } from "../ui/cx";
import { ensureComposerEsm_IB_Init } from "../composer/composer-esm-inits";
ensureDropdownMenuInit();
ensureDropdownMenuPopoverInit();
ensureComposerEsm_IB_Init();
export type ComposerRunLocation = "local" | "cloud";
export type ComposerActionBarRunLocationDropdownProps = {
  cloudDisabled?: boolean;
  cloudUsesLocalExecutor?: boolean;
  isLocalExecutorStarting?: boolean;
  runLocation: ComposerRunLocation;
  onRunLocationChange: (next: ComposerRunLocation) => void;
};

/**
 * Bundle export `ComposerActionBarRunLocationDropdown`.
 */
export function ComposerActionBarRunLocationDropdown({
  cloudDisabled,
  cloudUsesLocalExecutor,
  isLocalExecutorStarting,
  runLocation,
  onRunLocationChange,
}: ComposerActionBarRunLocationDropdownProps): ReactElement {
  const intl = useIntl();
  const triggerLabel = isLocalExecutorStarting
    ? intl.formatMessage({
        id: "composer.runLocation.triggerLabel.localExecutorStarting",
        defaultMessage:
          "Choose where to run this task. Local execution is starting…",
        description:
          "Accessible label for the run location menu while local execution starts",
      })
    : intl.formatMessage({
        id: "composer.runLocation.triggerLabel",
        defaultMessage: "Choose where to run this chat",
        description: "Accessible label and tooltip for the run location menu",
      });
  const triggerTooltip = isLocalExecutorStarting
    ? intl.formatMessage({
        id: "composer.runLocation.triggerTooltip.localExecutorStarting",
        defaultMessage: "Local execution is starting…",
        description:
          "Tooltip on the composer run-location button shown while Desktop starts local execution for a Cloud Work task",
      })
    : triggerLabel;
  const triggerIcon =
    runLocation === "cloud" ? (
      <AppIcond
        className={cx(
          "icon-xs",
          isLocalExecutorStarting && "motion-safe:animate-pulse",
        )}
      />
    ) : (
      <AppIconFB className="icon-xs" />
    );
  const triggerButton = (
    <Button
      aria-busy={isLocalExecutorStarting}
      aria-label={triggerLabel}
      data-composer-navigation-target="run-location"
      color="ghost"
      size="composerSm"
      uniform
    >
      {triggerIcon}
    </Button>
  );
  const cloudTooltip = cloudDisabled
    ? intl.formatMessage({
        id: "composer.runLocation.cloud.tooltip.projectOnlyMemory",
        defaultMessage:
          "Cloud is unavailable for projects with project-only memory",
        description:
          "Tooltip explaining why cloud Work cannot be selected for a project with project-only memory",
      })
    : undefined;
  return (
    <DropdownMenuPopover
      align="end"
      side="top"
      contentWidth="sm"
      triggerButton={
        <OptionalTooltip tooltipContent={triggerTooltip}>
          {triggerButton}
        </OptionalTooltip>
      }
    >
      <DropdownMenu.Title>
        <MemoizedFormattedMessage
          id="composer.runLocation.title.question"
          defaultMessage="Where should this chat run?"
          description="Header above the run location options in the composer action bar"
        />
      </DropdownMenu.Title>
      <DropdownMenu.Item
        LeftIcon={AppIconFB}
        RightIcon={runLocation === "local" ? AppIconZlt : undefined}
        onClick={() => {
          return onRunLocationChange("local");
        }}
        allowWrap
        SubText={
          <span className="text-token-description-foreground">
            <MemoizedFormattedMessage
              id="composer.runLocation.local.description"
              defaultMessage="Read and edit local files with permission"
              description="Description explaining file access when a task runs on the user's computer"
            />
          </span>
        }
      >
        <MemoizedFormattedMessage
          id="composer.runLocation.local.optionLabel"
          defaultMessage="On your computer"
          description="Option to run a task on the user's computer"
        />
      </DropdownMenu.Item>
      <DropdownMenu.Item
        LeftIcon={AppIcond}
        RightIcon={runLocation === "cloud" ? AppIconZlt : undefined}
        disabled={cloudDisabled}
        focusableWhenDisabled={cloudDisabled}
        onClick={() => {
          return onRunLocationChange("cloud");
        }}
        allowWrap
        SubText={
          <span className="text-token-description-foreground">
            {cloudUsesLocalExecutor ? (
              <MemoizedFormattedMessage
                id="composer.runLocation.cloud.description.localExecutor"
                defaultMessage="Can read and edit local files"
                description="Description for the Cloud run location when local execution is enabled. Explains that ChatGPT runs in the cloud while retaining access to files on the user's computer."
              />
            ) : (
              <MemoizedFormattedMessage
                id="composer.runLocation.cloud.description"
                defaultMessage="Can't access local files unless attached"
                description="Description explaining file access limitations when a task runs in the cloud"
              />
            )}
          </span>
        }
        tooltipText={cloudTooltip}
      >
        <MemoizedFormattedMessage
          id="composer.runLocation.cloud"
          defaultMessage="In the cloud"
          description="Option to run a task in the cloud"
        />
      </DropdownMenu.Item>
    </DropdownMenuPopover>
  );
}

/** Bundle export init — Rolldown ESM init retained as no-op. */
export function ensureComposerActionBarRunLocationDropdownInit(): void {}
