// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Secondary renderer-window partition keys (`oge` / `sge` / `age` / `lge`).

/** Prefix for codex secondary-window partition ids (`oge`). */
export const RENDERER_WINDOW_PARTITION_PREFIX = "codex-renderer-window:";

/** Known secondary window ids (`sge`). */
export const RendererWindowId = {
  BROWSER_COMMENT_POPUP: "browserCommentPopup",
} as const;

export type RendererWindowId =
  (typeof RendererWindowId)[keyof typeof RendererWindowId];

/** Default secondary-window width hint (`lge`). */
export const RENDERER_WINDOW_DEFAULT_WIDTH = 1200;

export type BrowserCommentPopupWindowKeyProps = {
  windowId: typeof RendererWindowId.BROWSER_COMMENT_POPUP;
  conversationId: string;
  browserTabId: string;
  sessionId: string;
};

/**
 * Bundle `age` (co-located with `cge`).
 * Build a unique partition / key for the browser comment popup window.
 */
export function buildRendererWindowKey(
  props: BrowserCommentPopupWindowKeyProps,
): string {
  switch (props.windowId) {
    case RendererWindowId.BROWSER_COMMENT_POPUP:
      return `${RENDERER_WINDOW_PARTITION_PREFIX}${props.windowId}:${encodeURIComponent(`${props.conversationId}\0${props.browserTabId}`)}:${encodeURIComponent(props.sessionId)}`;
  }
}
