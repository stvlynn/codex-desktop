// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `a_` / export `vst`; companions `Bvt` / `Kvt` / `Vvt` / text join.

type ReviewSide = "left" | "right" | string;

type ReviewCommentLike = {
  position: {
    path: string;
    side: ReviewSide;
    line: number;
    start_line?: number;
    start_side?: ReviewSide;
  };
  content: Array<{ content_type?: string; text?: string }>;
};

function reviewCommentPlainText(comment: ReviewCommentLike): string {
  return comment.content
    .map((part) => (part.content_type === "text" ? (part.text ?? "") : ""))
    .join("");
}

function reviewSideLineToken(side: ReviewSide, line: number): string {
  return `${side === "left" ? "L" : "R"}${line}`;
}

function reviewCommentLineSpan(comment: ReviewCommentLike): string {
  const endLine = comment.position.line;
  const endSide = comment.position.side;
  const startLine = comment.position.start_line ?? endLine;
  const startSide = comment.position.start_side ?? endSide;
  if (startSide !== endSide) {
    return `${reviewSideLineToken(startSide, startLine)}-${reviewSideLineToken(endSide, endLine)}`;
  }
  const low = Math.min(startLine, endLine);
  const high = Math.max(startLine, endLine);
  return low === high ? String(high) : `${low}-${high}`;
}

/** Virtualization key: path|side|span|plainText. */
export function reviewCommentVirtualizationKey(comment: ReviewCommentLike): string {
  const { path, side } = comment.position;
  return `${path}|${side}|${reviewCommentLineSpan(comment)}|${reviewCommentPlainText(comment)}`;
}
