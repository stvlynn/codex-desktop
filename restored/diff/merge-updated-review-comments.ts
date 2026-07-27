// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ymo` / export `pj`.

export type ReviewComment = {
  content: Array<{ content_type?: string; text?: string }>;
  position: {
    path: string;
    side: string;
    line: number;
    start_line?: number | null;
    start_side?: string | null;
  };
  replyToReviewThreadId?: string | null;
};

function commentKey(comment: ReviewComment): string {
  const sideSpan =
    comment.position.start_line == null
      ? String(comment.position.line)
      : `${comment.position.start_line}-${comment.position.line}`;
  return `${comment.position.path}|${comment.position.side}|${sideSpan}|${comment.replyToReviewThreadId ?? ""}`;
}

function commentText(comment: ReviewComment): string {
  return comment.content
    .flatMap((part) => (part.content_type === "text" ? [part.text ?? ""] : []))
    .join("\n")
    .trim();
}

function isThreadFillUpdate(
  current: ReviewComment,
  next: ReviewComment,
): boolean {
  return (
    current.replyToReviewThreadId != null &&
    current.replyToReviewThreadId === next.replyToReviewThreadId &&
    commentText(current).length === 0 &&
    commentText(next).length > 0 &&
    current.position.path === next.position.path &&
    current.position.side === next.position.side &&
    current.position.line === next.position.line
  );
}

/** Merge updated review comments, preserving thread-fill updates and new comments. */
export function mergeUpdatedReviewComments<T extends ReviewComment>(
  currentComments: readonly T[],
  nextComments: readonly T[],
): T[] {
  const seen = new Set(currentComments.map(commentKey));
  const updated = nextComments.filter((next) =>
    currentComments.some((current) => isThreadFillUpdate(current, next)),
  );
  const added = nextComments.filter(
    (next) => commentText(next).length > 0 && !seen.has(commentKey(next)),
  );
  const merged = [...updated, ...added];
  const byKey = new Map(
    merged.map((comment) => [commentKey(comment), comment]),
  );
  return [...byKey.values()];
}
