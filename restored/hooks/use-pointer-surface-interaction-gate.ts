// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `kbu`) / export `K`.

export type UsePointerSurfaceInteractionGatePeers = {
  useStore: (store: unknown) => unknown;
  useIsEligibleSurface: () => boolean;
  useRef: <T>(init: T) => { current: T };
  useEffect: (effect: () => void | (() => void), deps: unknown[]) => void;
  rootStore: unknown;
  attach: (args: Record<string, unknown>) => () => void;
};

let peers: UsePointerSurfaceInteractionGatePeers | null = null;

/** Wire usePointerSurfaceInteractionGate peers once companions land. */
export function setUsePointerSurfaceInteractionGatePeers(
  next: UsePointerSurfaceInteractionGatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `K` / internal `kbu`.
 * Gate pointer interactions for a surface/locator pair.
 */
export function usePointerSurfaceInteractionGate(args: {
  enabled?: boolean;
  isEligible?: boolean;
  locator?: { conversationId?: unknown; hostId?: unknown };
  surface?: unknown;
}): { enabled: boolean } {
  if (peers == null) {
    throw new Error(
      "UsePointerSurfaceInteractionGate peers are not configured",
    );
  }
  const store = peers.useStore(peers.rootStore);
  const defaultEligible = peers.useIsEligibleSurface();
  const enabled = args.enabled ?? true;
  const isEligible = args.isEligible ?? defaultEligible;
  const cleanupRef = peers.useRef<(() => void) | null>(null);
  peers.useEffect(() => {
    cleanupRef.current?.();
    cleanupRef.current = null;
    if (!enabled || !isEligible) return;
    cleanupRef.current = peers!.attach({
      store,
      locator: args.locator,
      surface: args.surface,
    });
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = null;
    };
  }, [enabled, isEligible, args.locator, args.surface, store]);
  return { enabled: enabled && isEligible };
}
