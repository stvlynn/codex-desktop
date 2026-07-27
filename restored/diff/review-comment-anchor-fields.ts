// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `bmo` / export `mj`.

/** Flatten review-comment position fields for UI/anchors. */
export function reviewCommentAnchorFields(comment: {
  position: {
    line: number;
    path: string;
    side: string;
    start_line?: number | null;
    start_side?: string | null;
  };
}): {
  line: number;
  path: string;
  side: string;
  startLine: number | undefined;
  startSide: string | undefined;
} {
  return {
    line: comment.position.line,
    path: comment.position.path,
    side: comment.position.side,
    startLine: comment.position.start_line ?? undefined,
    startSide: comment.position.start_side ?? undefined,
  };
}
