// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Presentational apply-diff dropdown header (staging helper header block).

import type { ReactElement } from "react";

import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";

export type ApplyDiffSummary = {
  fileCount: number;
  linesAdded: number;
  linesRemoved: number;
};

export type ApplyDiffDropdownHeaderProps = {
  summary?: ApplyDiffSummary | null;
  /** When results already exist or changes were applied, hide the header. */
  visible?: boolean;
  ApplyGlyph?: (props: { className?: string }) => ReactElement;
  DiffStats?: (props: {
    linesAdded: number;
    linesRemoved: number;
  }) => ReactElement | null;
};

/** Header block above the git-target list in the apply dropdown. */
export function ApplyDiffDropdownHeader({
  summary = null,
  visible = true,
  ApplyGlyph,
  DiffStats,
}: ApplyDiffDropdownHeaderProps): ReactElement | null {
  if (!visible) return null;
  return (
    <div className="flex flex-col gap-3 pt-2 pb-1" data-apply-diff-header="">
      {ApplyGlyph ? (
        <ApplyGlyph className="icon-lg text-token-foreground" />
      ) : null}
      <div className="heading-lg text-token-foreground">
        <MemoizedFormattedMessage
          id="codex.applyDropdown.header.title"
          defaultMessage="Apply changes"
          description="Title for the apply dropdown header"
        />
      </div>
      {summary ? (
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="text-token-description-foreground">
            <MemoizedFormattedMessage
              id="codex.applyDropdown.header.changes"
              defaultMessage="Changes"
              description="Label for the apply dropdown change summary"
            />
          </span>
          <span className="font-medium text-token-foreground">
            <MemoizedFormattedMessage
              id="codex.applyDropdown.header.fileCount"
              defaultMessage="{count, plural, one {# file} other {# files}}"
              description="File count summary in apply dropdown header"
              values={{ count: summary.fileCount }}
            />
          </span>
          <span className="flex items-center gap-1">
            {DiffStats ? (
              <DiffStats
                linesAdded={summary.linesAdded}
                linesRemoved={summary.linesRemoved}
              />
            ) : (
              <span className="text-token-description-foreground">
                +{summary.linesAdded}/−{summary.linesRemoved}
              </span>
            )}
            <span className="text-token-description-foreground">
              <MemoizedFormattedMessage
                id="codex.applyDropdown.header.rows"
                defaultMessage="rows"
                description="Label for line change totals in apply dropdown header"
              />
            </span>
          </span>
        </div>
      ) : null}
      <div className="py-2" role="separator" data-apply-diff-separator="" />
      <div className="mb-1 text-sm text-token-description-foreground">
        <MemoizedFormattedMessage
          id="codex.applyDropdown.header.workspace"
          defaultMessage="Project"
          description="Label for the workspace list in apply dropdown header"
        />
      </div>
    </div>
  );
}

/** Sum file entries into an apply-diff summary (staging helper local block). */
export function summarizeDiffFileEntries(
  entries: Array<{ additions?: number; deletions?: number }>,
): ApplyDiffSummary {
  let linesAdded = 0;
  let linesRemoved = 0;
  for (const entry of entries) {
    linesAdded += entry.additions ?? 0;
    linesRemoved += entry.deletions ?? 0;
  }
  return {
    fileCount: entries.length,
    linesAdded,
    linesRemoved,
  };
}
