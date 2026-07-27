// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Set the review diff filter / view mode (bundle `Wri` / export `OW`).

import type { AppActionScope } from "../navigation/app-action-scope";

export type ReviewDiffFilter =
  | "last-turn"
  | "branch"
  | "unstaged"
  | "staged"
  | "commit";

export type ReviewDiffFilterAtoms = {
  /** Review mode gate (`gE`) — when `last-turn-only`, force last-turn. */
  reviewModeAtom?: unknown;
  /** Pinned commit/path override (`Vri`). */
  pinnedOverrideAtom?: unknown;
  /** Explicit in-memory filter (`Jri`). */
  explicitFilterAtom?: unknown;
  /** Persisted last-explicit filter (`qri` / Pm). */
  persistedFilterAtom?: unknown;
};

let reviewModeAtom: unknown = Symbol.for("codex.review.diff-mode");
let pinnedOverrideAtom: unknown = Symbol.for("codex.review.pinned-override");
let explicitFilterAtom: unknown = Symbol.for("codex.review.explicit-filter");
let persistedFilterAtom: unknown = Symbol.for("codex.review.persisted-filter");

export function bindReviewDiffFilterAtoms(bindings: ReviewDiffFilterAtoms): void {
  if (bindings.reviewModeAtom != null) reviewModeAtom = bindings.reviewModeAtom;
  if (bindings.pinnedOverrideAtom != null) {
    pinnedOverrideAtom = bindings.pinnedOverrideAtom;
  }
  if (bindings.explicitFilterAtom != null) {
    explicitFilterAtom = bindings.explicitFilterAtom;
  }
  if (bindings.persistedFilterAtom != null) {
    persistedFilterAtom = bindings.persistedFilterAtom;
  }
}

function applyFilter(scope: AppActionScope, filter: ReviewDiffFilter): void {
  if (scope.get(reviewModeAtom) === "last-turn-only") {
    scope.set(pinnedOverrideAtom, null);
    scope.set(explicitFilterAtom, "last-turn");
    return;
  }
  if (filter !== "last-turn") scope.set(pinnedOverrideAtom, null);
  scope.set(explicitFilterAtom, filter);
}

/**
 * Bundle `Wri` / export `OW`.
 */
export function setReviewDiffFilter(scope: AppActionScope, filter: ReviewDiffFilter): void {
  if (scope.get(reviewModeAtom) === "last-turn-only") {
    scope.set(pinnedOverrideAtom, null);
    applyFilter(scope, "last-turn");
    return;
  }
  if (filter !== "commit") {
    scope.set(persistedFilterAtom, filter);
  }
  if (filter === "last-turn") {
    scope.set(pinnedOverrideAtom, null);
    applyFilter(scope, "last-turn");
    return;
  }
  applyFilter(scope, filter);
}

/** EW / RP — ESM init that constructed filter atoms; tokens are bindable. */
export function ensureReviewDiffFilterInit(): void {}
