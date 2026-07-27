// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Jm` / export `Ult`.

import { DISMISS_TOOLTIPS_EVENT_NAME } from "./dismiss-tooltips-event-name";

export function dismissTooltips(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(DISMISS_TOOLTIPS_EVENT_NAME));
}
