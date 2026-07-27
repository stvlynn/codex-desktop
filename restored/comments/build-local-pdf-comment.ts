// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `tCe` / export `mmt` — pure helper.

import { CommentOrigin, withCommentOrigin } from "./comment-origin";

function pdfCommentPositionPath(args: { path: string; title: string }): string {
  return `pdf:${args.title.trim() || args.path.trim() || "Selected PDF region"}`;
}

/** Build a local PDF region comment with PDF origin metadata. */
export function buildLocalPdfComment(args: {
  body: string;
  line: number;
  pageCount: number;
  pageNumber: number;
  path: string;
  screenshot: unknown;
  title: string;
  metadata: unknown;
}) {
  const {
    body,
    line,
    pageCount,
    pageNumber,
    path,
    screenshot,
    title,
    metadata,
  } = args;
  return withCommentOrigin(
    {
      type: "comment",
      content: [{ content_type: "text", text: body }],
      position: {
        side: "right",
        path: pdfCommentPositionPath({ path, title }),
        line,
      },
      localPdfContext: { pageCount, pageNumber, path, title },
      localPdfCommentMetadata: metadata,
      localPdfScreenshot: screenshot,
    },
    CommentOrigin.PDF,
  );
}
