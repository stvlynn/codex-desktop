// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `I$l` / export `Li` — extractFn(I$l); companion R$l; Jf→hostMessageBus.

import { hostMessageBus } from "./host-message-bus";

/** ChatGPT gift-credits purchase URL (bundle `R$l`). */
export const GIFT_CREDITS_PURCHASE_URL = "https://chatgpt.com/gifts/credits";

/** Open the ChatGPT gift-credits purchase flow in the system browser. */
export function openGiftCreditsInBrowser(): void {
  hostMessageBus.dispatchMessage("open-in-browser", {
    url: GIFT_CREDITS_PURCHASE_URL,
  });
}
