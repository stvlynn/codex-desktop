// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Apply results dialog (staging helper + path list staging helpers).
// Uses a local non-throwing shell — public DialogWithTrigger is peer-gated.

import type { ReactElement } from "react";

import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { Button } from "../../ui/button";

export type ApplyPatchPathResult = {
  appliedPaths?: string[];
  skippedPaths?: string[];
  conflictedPaths?: string[];
  errorCode?: string | null;
  status?: string;
};

export type ApplyResultsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  result: ApplyPatchPathResult | null | undefined;
};

function PathListItem({ path }: { path: string }): ReactElement {
  return (
    <li key={path} className="truncate" title={path}>
      {path}
    </li>
  );
}

/** Dialog listing apply/skip/conflict paths after a patch attempt. */
export function ApplyResultsDialog({
  open,
  onOpenChange,
  result,
}: ApplyResultsDialogProps): ReactElement | null {
  if (!open) return null;

  const appliedPaths = result?.appliedPaths ?? [];
  const conflictedPaths = result?.conflictedPaths ?? [];
  const skippedPaths = result?.skippedPaths ?? [];
  const notGitRepo = result?.errorCode === "not-git-repo";
  const hasDetails =
    appliedPaths.length > 0 ||
    conflictedPaths.length > 0 ||
    skippedPaths.length > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
      data-apply-results-dialog=""
    >
      <div className="flex max-h-[80vh] w-full max-w-lg flex-col gap-3 rounded-lg border border-token-border bg-token-bg-primary p-4 shadow-lg">
        <div className="heading-md text-token-foreground">
          <MemoizedFormattedMessage
            id="codex.applyResultsDialog.title"
            defaultMessage="Apply results"
            description="Title for dialog showing apply patch results"
          />
        </div>
        {hasDetails ? (
          <div className="flex max-h-64 flex-col gap-3 overflow-y-auto pr-1">
            {appliedPaths.length > 0 ? (
              <div className="flex flex-col gap-1">
                <div className="font-medium">
                  <MemoizedFormattedMessage
                    id="codex.applyResultsDialog.applied"
                    defaultMessage="Applied cleanly ({count})"
                    description="Heading for applied paths"
                    values={{ count: appliedPaths.length }}
                  />
                </div>
                <ul>
                  {appliedPaths.map((path) => (
                    <PathListItem key={path} path={path} />
                  ))}
                </ul>
              </div>
            ) : null}
            {conflictedPaths.length > 0 ? (
              <div className="flex flex-col gap-1">
                <div className="font-medium text-token-charts-red">
                  <MemoizedFormattedMessage
                    id="codex.applyResultsDialog.conflicted"
                    defaultMessage="Conflicted ({count})"
                    description="Heading for conflicted paths"
                    values={{ count: conflictedPaths.length }}
                  />
                </div>
                <ul>
                  {conflictedPaths.map((path) => (
                    <PathListItem key={path} path={path} />
                  ))}
                </ul>
              </div>
            ) : null}
            {skippedPaths.length > 0 ? (
              <div className="flex flex-col gap-1">
                <div className="font-medium text-token-description-foreground">
                  <MemoizedFormattedMessage
                    id="codex.applyResultsDialog.skipped"
                    defaultMessage="Skipped ({count})"
                    description="Heading for skipped paths"
                    values={{ count: skippedPaths.length }}
                  />
                </div>
                <ul>
                  {skippedPaths.map((path) => (
                    <PathListItem key={path} path={path} />
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="text-token-description-foreground">
            <p>
              {notGitRepo ? (
                <MemoizedFormattedMessage
                  id="codex.applyResultsDialog.notGitRepo"
                  defaultMessage="This action only works when running in a Git repository."
                  description="Shown when apply/revert fails because the workspace is not in a Git repository"
                />
              ) : (
                <MemoizedFormattedMessage
                  id="codex.applyResultsDialog.noDetails"
                  defaultMessage="No file details available."
                  description="Shown when there are no file-level results to display"
                />
              )}
            </p>
          </div>
        )}
        <div className="flex justify-end">
          <Button color="outline" onClick={() => onOpenChange(false)}>
            <MemoizedFormattedMessage
              id="codex.applyResultsDialog.close"
              defaultMessage="Close"
              description="Close button for apply results dialog"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
