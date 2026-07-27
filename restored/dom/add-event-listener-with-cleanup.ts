// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `PB` — pure helper.

/** Add an event listener and return a disposer. */
export function addEventListenerWithCleanup(
  target: EventTarget,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): () => void {
  target.addEventListener(type, listener, options);
  return () => target.removeEventListener(type, listener, options);
}
