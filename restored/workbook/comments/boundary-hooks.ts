// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-150: comments boundary hooks (_C / Binding662 leave-behind).

export type CommentsBoundaryHooks = {
  ensureBinding662: () => void;
};

export const commentsH: CommentsBoundaryHooks = {} as CommentsBoundaryHooks;

export function wireCommentsBoundaryHooks(next: CommentsBoundaryHooks): void {
  Object.assign(commentsH, next);
}

export function ensureBinding662(): void {
  const fn = commentsH.ensureBinding662;
  if (typeof fn !== "function") {
    throw new Error("comments boundary hooks not wired (ensureBinding662)");
  }
  fn();
}
