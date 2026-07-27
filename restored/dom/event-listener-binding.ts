// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `vc` — pure helper.

/** Bundle an event-listener binding record. */
export function eventListenerBinding<TInstance, TListener, TTarget>(
  instance: TInstance,
  listener: TListener,
  currentTarget: TTarget,
): {
  instance: TInstance;
  listener: TListener;
  currentTarget: TTarget;
} {
  return { instance, listener, currentTarget };
}
