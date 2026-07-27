// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave FZ — upgraded former deferred-scaffold soft host (no extractFn wording).
// Open-runtime facade: aggregator-only alias; body not taken from app-initial extractFn.
// Stage 3: ReviewBranchPicker bindable + searchable branch chrome scaffold.

import type { ReactElement, ReactNode } from "react";

export type ReviewBranchPickerProps = {
  branches?: unknown[];
  selectedBranch?: unknown;
  disabled?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  isSearchError?: boolean;
  isSearchLoading?: boolean;
  onClose?: () => void;
  onRetry?: () => void;
  onRetrySearch?: () => void;
  onSearchQueryChange?: (query: string) => void;
  onSelectCustomBranch?: (branch: string) => void;
  onSelectBranch?: (branch: unknown) => void;
  renderBranchSubText?: (branch: unknown) => ReactNode;
  searchedBranches?: unknown[];
  searchQuery?: string;
  className?: string;
  [key: string]: unknown;
};

type ReviewBranchPickerImpl = (props: ReviewBranchPickerProps) => ReactNode;
let impl: ReviewBranchPickerImpl | null = null;

/** Wire the full ReviewBranchPicker once deeper restore lands. */
export function bindReviewBranchPicker(next: ReviewBranchPickerImpl): void {
  impl = next;
}

/**
 * Bundle export `NE` / internal `dQo`.
 * Provides a Stage-3 searchable branch picker scaffold; heavy UI via bind.
 */
export function ReviewBranchPicker(
  props: ReviewBranchPickerProps,
): ReactElement {
  if (impl != null) {
    return impl(props) as ReactElement;
  }
  const {
    branches = [],
    selectedBranch,
    disabled = false,
    isLoading = false,
    isSearchLoading = false,
    onClose,
    onSearchQueryChange,
    onSelectBranch,
    searchQuery = "",
    className,
  } = props;
  return (
    <div
      className={
        className ??
        "flex min-h-0 w-full flex-col gap-2 rounded-xl border border-token-border bg-token-dropdown-background p-3"
      }
      role="dialog"
      aria-label="Review branch picker"
    >
      <div className="flex items-center gap-2">
        <input
          className="min-w-0 flex-1 rounded-md border border-token-border bg-transparent px-2 py-1 text-sm"
          disabled={disabled}
          placeholder="Search branches"
          value={searchQuery}
          onChange={(event) => onSearchQueryChange?.(event.target.value)}
        />
        {onClose != null ? (
          <button type="button" className="text-sm" onClick={onClose}>
            Close
          </button>
        ) : null}
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto text-sm">
        {isLoading || isSearchLoading ? (
          <div className="px-1 py-2 text-token-text-secondary">Loading…</div>
        ) : (
          <ul className="flex flex-col gap-1">
            {branches.map((branch, index) => {
              const label =
                typeof branch === "string"
                  ? branch
                  : String((branch as { name?: unknown })?.name ?? branch);
              const selected =
                branch === selectedBranch ||
                (typeof selectedBranch === "string" &&
                  selectedBranch === label);
              return (
                <li key={`${label}-${index}`}>
                  <button
                    type="button"
                    disabled={disabled}
                    className={
                      selected
                        ? "w-full rounded-md bg-token-main-surface-secondary px-2 py-1 text-left"
                        : "w-full rounded-md px-2 py-1 text-left hover:bg-token-main-surface-secondary"
                    }
                    onClick={() => onSelectBranch?.(branch)}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
