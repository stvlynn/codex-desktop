// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `l_` / `eyt` companions for export `Ox`.

import {
  LOCAL_ATTACHMENT_ORIGIN,
  resolveLocalAttachmentOrigin,
  type LocalAttachmentLike,
} from "./is-artifact-annotation-attachment";

export type BrowserAttachmentLike = LocalAttachmentLike & {
  localBrowserContext?: unknown;
  localBrowserCommentMetadata?: unknown;
  localBrowserDesignChange?: unknown;
  localBrowserScreenshot?: unknown;
  localBrowserAttachedImages?: unknown[] | null;
};

/** Heuristic browser attachment (no origin). Bundle `eyt`. */
export function looksLikeBrowserAttachment(
  attachment: BrowserAttachmentLike,
): boolean {
  return (
    attachment.localBrowserContext != null ||
    attachment.localBrowserCommentMetadata != null ||
    attachment.localBrowserDesignChange != null ||
    attachment.localBrowserScreenshot != null ||
    (attachment.localBrowserAttachedImages?.length ?? 0) > 0
  );
}

/** True when the attachment is (or looks like) a browser annotation. */
export function isBrowserAttachment(
  attachment: BrowserAttachmentLike,
): boolean {
  const origin = resolveLocalAttachmentOrigin(attachment);
  return origin == null
    ? looksLikeBrowserAttachment(attachment)
    : origin === LOCAL_ATTACHMENT_ORIGIN.BROWSER;
}
