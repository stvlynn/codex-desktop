// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave FZ — upgraded former deferred-scaffold soft host (no extractFn wording).
// Open-runtime facade: aggregator-only alias; body not taken from app-initial extractFn.
// Stage 3: ReviewGitActionsMenu bindable + apply/refresh chrome scaffold.

import type { ReactElement, ReactNode } from "react";

export type ReviewGitActionsMenuProps = {
  disabled?: boolean;
  isApplying?: boolean;
  isRefreshing?: boolean;
  onApply?: () => void;
  onRefresh?: () => void;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  className?: string;
  children?: ReactNode;
  [key: string]: unknown;
};

type ReviewGitActionsMenuImpl = (props: ReviewGitActionsMenuProps) => ReactNode;
let impl: ReviewGitActionsMenuImpl | null = null;

/** Wire the full ReviewGitActionsMenu once deeper restore lands. */
export function bindReviewGitActionsMenu(next: ReviewGitActionsMenuImpl): void {
  impl = next;
}

/**
 * Bundle export `EE` / internal `QQo`.
 * Provides a Stage-3 git actions menu scaffold; heavy menu via bind.
 */
export function ReviewGitActionsMenu(
  props: ReviewGitActionsMenuProps,
): ReactElement {
  if (impl != null) {
    return impl(props) as ReactElement;
  }
  const {
    disabled = false,
    isApplying = false,
    isRefreshing = false,
    onApply,
    onRefresh,
    className,
    children,
  } = props;
  return (
    <div
      className={
        className ??
        "inline-flex items-center gap-2 rounded-lg border border-token-border px-2 py-1"
      }
      role="group"
      aria-label="Review git actions"
    >
      <button
        type="button"
        disabled={disabled || isApplying}
        className="text-sm"
        onClick={onApply}
      >
        {isApplying ? "Applying…" : "Apply"}
      </button>
      <button
        type="button"
        disabled={disabled || isRefreshing}
        className="text-sm"
        onClick={onRefresh}
      >
        {isRefreshing ? "Refreshing…" : "Refresh"}
      </button>
      {children}
    </div>
  );
}
