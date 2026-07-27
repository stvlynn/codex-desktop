// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `Kf`) / export `ldt`.

export type UseWindowEventPeers = {
  useEffect: (effect: () => void | (() => void), deps: unknown[]) => void;
  useEffectEvent: <T extends (...args: never[]) => unknown>(fn: T) => T;
  getBus: () => {
    subscribe: (
      eventName: string,
      listener: (...args: unknown[]) => void,
    ) => () => void;
  };
};

let peers: UseWindowEventPeers | null = null;

/** Wire useWindowEvent peers once companions land. */
export function setUseWindowEventPeers(next: UseWindowEventPeers): void {
  peers = next;
}

/**
 * Bundle export `ldt` / internal `Kf`.
 * Subscribe to a named window event bus channel.
 */
export function useWindowEvent(
  eventName: string,
  listener: (...args: unknown[]) => void,
  extraDeps: unknown[] = [],
): void {
  if (peers == null) {
    throw new Error("UseWindowEvent peers are not configured");
  }
  const onEvent = peers.useEffectEvent(listener);
  const deps = extraDeps === undefined ? [] : extraDeps;
  peers.useEffect(() => {
    const bus = peers!.getBus();
    return bus.subscribe(eventName, onEvent);
  }, [eventName, onEvent, ...deps]);
}
