// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `jl` companion for export `mmt`.

export const CommentOrigin = {
  DIFF: "diff",
  BROWSER: "browser",
  PDF: "pdf",
  ARTIFACT_ANNOTATION: "artifact_annotation",
} as const;

export type CommentOrigin = (typeof CommentOrigin)[keyof typeof CommentOrigin];

export function withCommentOrigin<T extends Record<string, unknown>>(
  comment: T,
  origin: CommentOrigin,
): T & { origin: CommentOrigin } {
  return { ...comment, origin };
}
