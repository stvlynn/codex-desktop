// Restored from ref/webview/assets/PopcornPageNumberNavigation-BVCUNh2j.js
// Page prev/next control with numeric indicator for Popcorn document surfaces.

import type { CSSProperties, ReactElement } from "react";
import { esmInit } from "../runtime/rolldown-runtime";
import {
  ensureRemoteTextEditSessionInit,
  RemoteTextEditSessionI,
  RemoteTextEditSessionL,
} from "./remote-text-edit-session";

const ICON_SIZE_STYLE: CSSProperties = {
  height: "18px",
  width: "18px",
};

const NAV_BUTTON_CLASS_NAME =
  "text-token-text-secondary inline-flex h-8 w-8 cursor-interaction items-center justify-center rounded-md border border-transparent focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border enabled:hover:bg-token-list-hover-background enabled:hover:text-token-text-primary disabled:cursor-not-allowed disabled:opacity-40";

export type PopcornPageNumberNavigationProps = {
  currentIndex: number;
  totalCount: number;
  itemLabel: string;
  onChangeIndex: (nextIndex: number) => void;
  disabled?: boolean;
  testId?: string;
};

/**
 * Prev/next buttons plus `current/total` indicator for paged Popcorn artifacts.
 */
export function PopcornPageNumberNavigation({
  currentIndex,
  totalCount,
  itemLabel,
  onChangeIndex,
  disabled = false,
  testId = "popcorn-page-number-navigation",
}: PopcornPageNumberNavigationProps): ReactElement {
  const displayPageNumber = totalCount > 0 ? currentIndex + 1 : 0;
  const canGoPrevious = !disabled && totalCount > 0 && currentIndex > 0;
  const canGoNext =
    !disabled && totalCount > 0 && currentIndex < totalCount - 1;

  return (
    <div
      className="flex items-center gap-0.5 text-sm tabular-nums"
      data-testid={testId}
    >
      <button
        type="button"
        aria-label={`Go to previous ${itemLabel}`}
        data-testid={`${testId}-previous`}
        className={NAV_BUTTON_CLASS_NAME}
        disabled={!canGoPrevious}
        onClick={() => onChangeIndex(currentIndex - 1)}
      >
        <RemoteTextEditSessionI style={ICON_SIZE_STYLE} />
      </button>
      <span
        className="min-w-12 px-1 text-center text-token-text-primary"
        data-testid={`${testId}-indicator`}
      >
        {displayPageNumber}
        {"/"}
        {Math.max(0, totalCount)}
      </span>
      <button
        type="button"
        aria-label={`Go to next ${itemLabel}`}
        data-testid={`${testId}-next`}
        className={NAV_BUTTON_CLASS_NAME}
        disabled={!canGoNext}
        onClick={() => onChangeIndex(currentIndex + 1)}
      >
        <RemoteTextEditSessionL style={ICON_SIZE_STYLE} />
      </button>
    </div>
  );
}

/** Rolldown ESM init — warms remote-text-edit-session icon peers. */
export const ensurePopcornPageNumberNavigationInit = esmInit(() => {
  ensureRemoteTextEditSessionInit();
});
