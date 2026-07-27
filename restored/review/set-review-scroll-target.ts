// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Expand + pin a review file path for scroll-into-view
// (bundle `LVi` / export `VH`).

import type { AppActionScope } from "../navigation/app-action-scope";

export type ReviewScrollTargetAtoms = {
  /** Expanded-path map atom (`kVi`) — `set(map => map.set(path, true))`. */
  expandedPathsAtom?: unknown;
  /** Comment focus atom cleared on scroll (`FL`). */
  commentFocusAtom?: unknown;
  /** Active scroll-target path atom (`PL`). */
  scrollTargetAtom?: unknown;
};

let expandedPathsAtom: unknown = Symbol.for("codex.review.expanded-paths");
let commentFocusAtom: unknown = Symbol.for("codex.review.comment-focus");
let scrollTargetAtom: unknown = Symbol.for("codex.review.scroll-target");

export function bindReviewScrollTargetAtoms(bindings: ReviewScrollTargetAtoms): void {
  if (bindings.expandedPathsAtom != null) {
    expandedPathsAtom = bindings.expandedPathsAtom;
  }
  if (bindings.commentFocusAtom != null) {
    commentFocusAtom = bindings.commentFocusAtom;
  }
  if (bindings.scrollTargetAtom != null) {
    scrollTargetAtom = bindings.scrollTargetAtom;
  }
}

/**
 * Bundle `LVi` / export `VH` — expand path (when set) and pin scroll target.
 */
export function setReviewScrollTarget(scope: AppActionScope, path: string | null | undefined): void {
  if (path != null) {
    scope.set(expandedPathsAtom, (prev: unknown) => {
      const next = new Map(
        prev instanceof Map ? (prev as Map<string, boolean>) : [],
      );
      next.set(path, true);
      return next;
    });
  }
  scope.set(commentFocusAtom, undefined);
  scope.set(scrollTargetAtom, path);
}

export function ensureReviewScrollTargetInit(): void {}
