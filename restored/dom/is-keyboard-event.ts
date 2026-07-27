// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `GBt` / export `Ort`.

import { defaultViewFromTarget } from "./default-view-from-target";

/** True when `event` is a KeyboardEvent in its target's window realm. */
export function isKeyboardEvent(event: Event | null | undefined): boolean {
  if (!event) return false;
  const { KeyboardEvent: KeyboardEventCtor } = defaultViewFromTarget(
    event.target,
  );
  return Boolean(KeyboardEventCtor && event instanceof KeyboardEventCtor);
}
