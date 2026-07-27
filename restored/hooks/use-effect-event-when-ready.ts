// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `TZ`) / export `Sx`.

export type UseEffectEventWhenReadyPeers = {
  useEffectEvent: <T extends (...args: never[]) => unknown>(fn: T) => T;
  useEffect: (effect: () => void | (() => void), deps: unknown[]) => void;
};

let peers: UseEffectEventWhenReadyPeers | null = null;

/** Wire effect-event-when-ready peers once companions land. */
export function setUseEffectEventWhenReadyPeers(
  next: UseEffectEventWhenReadyPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Sx` / internal `TZ`.
 * Poll an effect-event callback on an interval while delay is set.
 */
export function useEffectEventWhenReady(
  callback: () => void,
  delayMs: number | null | undefined,
): void {
  if (peers == null) {
    throw new Error("UseEffectEventWhenReady peers are not configured");
  }
  const stable = peers.useEffectEvent(callback);
  peers.useEffect(() => {
    if (delayMs == null) return;
    const id = window.setInterval(() => {
      stable();
    }, delayMs);
    return () => {
      window.clearInterval(id);
    };
  }, [delayMs]);
}
