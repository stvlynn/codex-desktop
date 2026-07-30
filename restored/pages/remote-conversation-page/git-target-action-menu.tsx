// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Dropdown that picks a local git target and runs primary/secondary apply actions.

import { useState, type ReactElement, type ReactNode } from "react";

import { AppIconNk } from "../../icons/app-icon-nk";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { Button } from "../../ui/button";
import { cx } from "../../ui/cx";
import { DropdownMenu } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { ApplyPathResultsSummary } from "./apply-path-results-summary";
import { isPrimarySecondaryActions } from "./turn-helpers";

export type GitApplyTarget = {
  label: string;
  subtitle?: string | null;
  gitRoot?: string | null;
  workspaceRoot?: string | null;
};

export type GitApplyResults = {
  appliedPaths?: string[];
  skippedPaths?: string[];
  conflictedPaths?: string[];
};

export type GitTargetActionContext = {
  targets?: GitApplyTarget[];
  results?: GitApplyResults | null;
};

export type GitTargetPrimarySecondaryActions = {
  primary: {
    label: ReactNode;
    color?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick: (target: GitApplyTarget) => void;
  };
  secondary?: {
    label: ReactNode;
    color?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick: (target: GitApplyTarget) => void;
  };
};

export type GitTargetActionMenuProps = {
  trigger: ReactNode;
  title?: ReactNode;
  header?: ReactNode;
  actions?: GitTargetPrimarySecondaryActions | ReactNode;
  disabled?: boolean;
  align?: "start" | "end" | "center";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  footer?: ReactNode;
  titleClassName?: string;
  contentClassName?: string;
  contentWidth?: string;
  context?: GitTargetActionContext;
};

/** Git-root picker + apply/revert CTA panel. */
export function GitTargetActionMenu(
  props: GitTargetActionMenuProps,
): ReactElement | null {
  const {
    trigger,
    title,
    header,
    actions,
    disabled,
    align = "end",
    open,
    onOpenChange,
    footer,
    titleClassName,
    contentClassName,
    contentWidth = "panel",
    context,
  } = props;
  const hasResults = !!context?.results;
  const [selectedTarget, setSelectedTarget] = useState<GitApplyTarget | null>(
    context?.targets?.[0] ?? null,
  );
  if (!context?.targets?.length) return null;

  const activeTarget = context.targets.some(
    (target) => target.gitRoot === selectedTarget?.gitRoot,
  )
    ? selectedTarget
    : (context.targets[0] ?? null);

  const titleNode =
    header ??
    (title != null ? (
      <DropdownMenu.Title
        className={cx(
          "leading-relaxed font-medium whitespace-normal break-words text-token-foreground",
          titleClassName,
        )}
      >
        {title}
      </DropdownMenu.Title>
    ) : null);

  const targetItems =
    !context.results &&
    context.targets.map((target) => (
      <DropdownMenu.Item
        key={target.gitRoot ?? target.label}
        LeftIcon={AppIconNk}
        onClick={(event: {
          preventDefault(): void;
          stopPropagation(): void;
        }) => {
          event.preventDefault();
          event.stopPropagation();
          setSelectedTarget(target);
        }}
        RightIcon={
          target.gitRoot === activeTarget?.gitRoot ? AppIconZlt : undefined
        }
      >
        <div
          className="flex flex-col truncate"
          title={target.gitRoot ?? undefined}
        >
          <span className="flex gap-1 truncate">
            <span className="truncate font-medium">{target.label}</span>
          </span>
          {target.subtitle ? (
            <span className="truncate text-token-description-foreground">
              {target.subtitle}
            </span>
          ) : null}
        </div>
      </DropdownMenu.Item>
    ));

  const resultsSummary = hasResults ? (
    <ApplyPathResultsSummary
      appliedPaths={context?.results?.appliedPaths ?? []}
      skippedPaths={context?.results?.skippedPaths ?? []}
      conflictedPaths={context?.results?.conflictedPaths ?? []}
    />
  ) : null;

  const body = (
    <div className="flex flex-col gap-px">
      {targetItems}
      {resultsSummary}
    </div>
  );

  const actionSection = isPrimarySecondaryActions(actions) ? (
    <>
      <Button
        size="toolbar"
        color={actions.primary.color as never}
        className="justify-center"
        onClick={() => {
          if (activeTarget) actions.primary.onClick(activeTarget);
        }}
        disabled={actions.primary.disabled || !activeTarget}
        loading={actions.primary.loading}
      >
        {actions.primary.label}
      </Button>
      {actions.secondary ? (
        <Button
          size="toolbar"
          color={actions.secondary.color as never}
          className="justify-center"
          onClick={() => {
            if (activeTarget) actions.secondary?.onClick(activeTarget);
          }}
          disabled={actions.secondary.disabled || !activeTarget}
          loading={actions.secondary.loading}
        >
          {actions.secondary.label}
        </Button>
      ) : null}
    </>
  ) : (
    actions
  );

  return (
    <DropdownMenuPopover
      align={align}
      disabled={disabled}
      open={open}
      onOpenChange={onOpenChange}
      surface="panel"
      contentWidth={contentWidth}
      contentClassName={contentClassName}
      triggerButton={trigger}
    >
      {titleNode}
      {body}
      <DropdownMenu.Section className="mt-1 flex flex-col gap-1">
        {actionSection}
      </DropdownMenu.Section>
      {footer ? (
        <DropdownMenu.Section className="mt-2">{footer}</DropdownMenu.Section>
      ) : null}
    </DropdownMenuPopover>
  );
}
