// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `SP`) / export `UW`.

export type SubscribeCustomEventTargetPeers = {
  getState: (state: unknown) => { eventTarget: EventTarget };
  eventName: string;
};

let peers: SubscribeCustomEventTargetPeers | null = null;

/** Wire subscribeCustomEventTarget peers once companions land. */
export function setSubscribeCustomEventTargetPeers(
  next: SubscribeCustomEventTargetPeers,
): void {
  peers = next;
}

/**
 * Bundle export `UW` / internal `SP`.
 * Subscribe to a custom event on the store event target.
 */
export function subscribeCustomEventTarget(
  store: { state: unknown },
  onDetailTrue: (isTrue: boolean) => void,
): () => void {
  if (peers == null) {
    throw new Error("SubscribeCustomEventTarget peers are not configured");
  }
  const { eventTarget } = peers.getState(store.state);
  const listener = (event: Event) => {
    onDetailTrue(event instanceof CustomEvent && event.detail === true);
  };
  eventTarget.addEventListener(peers.eventName, listener);
  return () => {
    eventTarget.removeEventListener(peers.eventName, listener);
  };
}
