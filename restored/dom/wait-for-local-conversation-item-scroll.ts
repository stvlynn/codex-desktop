// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `t1s` / export `$h` — extractFn(t1s); companion s1s=1000; e1s→scrollLocalConversationItemIntoView.

import { scrollLocalConversationItemIntoView } from "./scroll-local-conversation-item-into-view";

const SCROLL_WAIT_TIMEOUT_MS = 1000;

/** Scroll now, or rAF-poll until the item appears / timeout (bundle `t1s` / `$h`). */
export function waitForLocalConversationItemScroll(
  targetId: string,
  behavior?: ScrollBehavior,
): Promise<boolean> {
  if (scrollLocalConversationItemIntoView(targetId, behavior))
    return Promise.resolve(true);
  return new Promise((resolve) => {
    const startedAt = performance.now();
    let frame: number | null = null;
    const finish = (ok: boolean) => {
      if (frame != null) {
        window.cancelAnimationFrame(frame);
        frame = null;
      }
      resolve(ok);
    };
    const tick = () => {
      if (scrollLocalConversationItemIntoView(targetId, behavior)) {
        finish(true);
        return;
      }
      if (performance.now() - startedAt >= SCROLL_WAIT_TIMEOUT_MS) {
        finish(false);
        return;
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
  });
}
