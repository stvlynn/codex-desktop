// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `UPo`/`GPo` — export `LO`.

const BROWSER_COMMENT_POPUP_SHAKE_CLASS = "browser-comment-popup-shake";

/** Retrigger the browser-comment popup shake animation on the next frame. */
export function flashBrowserCommentPopupShake(args: {
  animationFrameRef: { current: number | null };
  animationWindow: {
    cancelAnimationFrame: (id: number) => void;
    requestAnimationFrame: (cb: FrameRequestCallback) => number;
  };
  editorWrapper: HTMLElement | null | undefined;
}): void {
  const { animationFrameRef, animationWindow, editorWrapper } = args;
  if (editorWrapper == null) return;
  editorWrapper.classList.remove(BROWSER_COMMENT_POPUP_SHAKE_CLASS);
  if (animationFrameRef.current != null) {
    animationWindow.cancelAnimationFrame(animationFrameRef.current);
  }
  animationFrameRef.current = animationWindow.requestAnimationFrame(() => {
    animationFrameRef.current = null;
    editorWrapper.classList.add(BROWSER_COMMENT_POPUP_SHAKE_CLASS);
  });
}
