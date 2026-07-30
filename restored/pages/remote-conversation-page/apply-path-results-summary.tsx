// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Apply/skip/conflict path summary inside the apply-diff dropdown.

import type { ComponentType, ReactElement } from "react";

import { CloseIcon } from "../../icons/close-icon";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { cx } from "../../ui/cx";
import { shortPathLabel } from "./path-display";

export type ApplyPathResultsSummaryProps = {
  appliedPaths?: string[];
  skippedPaths?: string[];
  conflictedPaths?: string[];
};

type PathRowProps = {
  filePath: string;
  Icon: ComponentType<{ className?: string }>;
};

function ApplyPathRow({ filePath, Icon }: PathRowProps): ReactElement {
  const label = shortPathLabel(filePath);
  return (
    <div
      className="flex items-center gap-2 truncate text-base text-token-foreground"
      title={filePath}
    >
      <Icon className="icon-2xs shrink-0" />
      <span className="truncate">{label}</span>
    </div>
  );
}

type PathGroupProps = {
  label?: ReactElement | null;
  paths: string[];
  className?: string;
  Icon: ComponentType<{ className?: string }>;
};

function ApplyPathGroup({
  label,
  paths,
  className,
  Icon,
}: PathGroupProps): ReactElement | null {
  if (paths.length === 0) return null;
  return (
    <div className={cx("flex flex-col gap-1.5 text-sm", className)}>
      {label ? (
        <div className="whitespace-nowrap text-token-description-foreground">
          {label}
        </div>
      ) : null}
      {paths.map((filePath) => (
        <ApplyPathRow key={filePath} filePath={filePath} Icon={Icon} />
      ))}
    </div>
  );
}

/** Summarize apply / skip / conflict paths after a local apply. */
export function ApplyPathResultsSummary({
  appliedPaths = [],
  skippedPaths = [],
  conflictedPaths = [],
}: ApplyPathResultsSummaryProps): ReactElement {
  if (
    appliedPaths.length + skippedPaths.length + conflictedPaths.length ===
    0
  ) {
    return (
      <div className="p-2 text-sm text-token-description-foreground">
        <MemoizedFormattedMessage
          id="codex.applyDropdown.results.empty"
          defaultMessage="No files were copied"
          description="Fallback text when no files were applied from an apply operation"
        />
      </div>
    );
  }

  return (
    <div className="vertical-scroll-fade-mask flex max-h-64 flex-col gap-3 overflow-y-auto rounded-lg p-2">
      <ApplyPathGroup
        paths={appliedPaths}
        className="text-token-description-foreground"
        Icon={AppIconZlt}
      />
      <ApplyPathGroup
        label={
          <MemoizedFormattedMessage
            id="codex.applyDropdown.results.skipped"
            defaultMessage="{count, plural, one {1 file skipped:} other {{count} files skipped:}}"
            description="Heading for skipped files after apply"
            values={{ count: skippedPaths.length }}
          />
        }
        paths={skippedPaths}
        className="text-token-description-foreground"
        Icon={CloseIcon}
      />
      <ApplyPathGroup
        label={
          <MemoizedFormattedMessage
            id="codex.applyDropdown.results.conflicted"
            defaultMessage="{count, plural, one {1 file conflicted:} other {{count} files conflicted:}}"
            description="Heading for conflicted files after apply"
            values={{ count: conflictedPaths.length }}
          />
        }
        paths={conflictedPaths}
        className="text-token-editor-warning-foreground"
        Icon={CloseIcon}
      />
    </div>
  );
}
