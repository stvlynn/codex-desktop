// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `_mo` / export `fj`.

import { reviewCommentVirtualizationKey } from "./review-comment-virtualization-key";

/** Pair a review comment key with a revision stamp. */
export function reviewCommentRevisionAnchor(
  revision: unknown,
  comment: Parameters<typeof reviewCommentVirtualizationKey>[0],
): { commentKey: string; revision: unknown } {
  return {
    commentKey: reviewCommentVirtualizationKey(comment),
    revision,
  };
}
