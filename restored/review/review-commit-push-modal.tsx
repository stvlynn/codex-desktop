// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — Stage-3 scaffold via extractFn(internal `uKo`) / export `bD`.
// Commit/push form peers bind via setReviewCommitPushModalParts.

import type { ReactElement, ReactNode } from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "../ui/button";

export type ReviewCommitPushModalProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  branchName?: string | null;
  commitMessage?: string;
  onCommit?: () => void;
  onCommitAndPush?: () => void;
  children?: ReactNode;
  [key: string]: unknown;
};

export type ReviewCommitPushModalParts = {
  render: (props: ReviewCommitPushModalProps) => ReactNode;
};

let parts: ReviewCommitPushModalParts | null = null;

/** Wire full commit/push modal once companions land. */
export function setReviewCommitPushModalParts(
  next: ReviewCommitPushModalParts,
): void {
  parts = next;
}

/** @deprecated Prefer setReviewCommitPushModalParts */
export function bindReviewCommitPushModal(
  next: (props: ReviewCommitPushModalProps) => ReactNode,
): void {
  parts = { render: next };
}

/**
 * Bundle export `bD` / internal `uKo`.
 * Review commit / commit-and-push modal scaffold.
 */
export function ReviewCommitPushModal(
  props: ReviewCommitPushModalProps,
): ReactElement | null {
  if (parts != null) return parts.render(props) as ReactElement | null;
  const {
    open = true,
    onOpenChange,
    branchName,
    onCommit,
    onCommitAndPush,
  } = props;
  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={() => onOpenChange?.(false)}
    >
      <div
        className="w-[min(480px,92vw)] overflow-hidden rounded-2xl bg-token-dropdown-background shadow-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex h-9 items-center justify-between gap-3 px-3">
          <span className="truncate text-sm text-token-description-foreground">
            <FormattedMessage
              id="review.commitPush.title"
              defaultMessage="Commit or push"
              description="Title for the review commit/push modal"
            />
            {branchName ? ` · ${branchName}` : null}
          </span>
        </div>
        <div className="flex shrink-0 items-center justify-end gap-2 px-3 pb-3">
          <Button
            type="button"
            color="secondary"
            onClick={() => onOpenChange?.(false)}
          >
            <FormattedMessage
              id="review.commitPush.cancel"
              defaultMessage="Cancel"
              description="Cancel review commit/push modal"
            />
          </Button>
          {onCommit != null ? (
            <Button type="button" color="secondary" onClick={onCommit}>
              <FormattedMessage
                id="review.commitPush.commit"
                defaultMessage="Commit"
                description="Commit action in review commit/push modal"
              />
            </Button>
          ) : null}
          {onCommitAndPush != null ? (
            <Button type="button" color="primary" onClick={onCommitAndPush}>
              <FormattedMessage
                id="review.commitPush.commitAndPush"
                defaultMessage="Commit and push"
                description="Commit-and-push action in review modal"
              />
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
