// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `EHt`) / export `Crt`.

export type UseDroppableResizeObserverPeers = {
  useContext: (context: unknown) => {
    active: unknown;
    dispatch: (action: unknown) => void;
    over: unknown;
    measureDroppableContainers: (ids: unknown[]) => void;
  };
  useRef: <T>(init: T) => { current: T };
  useEffect: (effect: () => void | (() => void), deps: unknown[]) => void;
  droppableContext: unknown;
  sensorContext: unknown;
  register: (args: Record<string, unknown>) => () => void;
};

let peers: UseDroppableResizeObserverPeers | null = null;

/** Wire useDroppableResizeObserver peers once companions land. */
export function setUseDroppableResizeObserverPeers(
  next: UseDroppableResizeObserverPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Crt` / internal `EHt`.
 * Register a droppable and observe size changes for DnD.
 */
export function useDroppableResizeObserver(args: {
  data?: unknown;
  disabled?: boolean;
  id: unknown;
  resizeObserverConfig?: unknown;
}): {
  setNodeRef: (node: Element | null) => void;
  active: unknown;
  over: unknown;
} {
  if (peers == null) {
    throw new Error("UseDroppableResizeObserver peers are not configured");
  }
  const disabled = args.disabled ?? false;
  const ctx = peers.useContext(peers.droppableContext);
  const nodeRef = peers.useRef<Element | null>(null);
  peers.useEffect(() => {
    return peers!.register({
      id: args.id,
      data: args.data,
      disabled,
      node: nodeRef.current,
      resizeObserverConfig: args.resizeObserverConfig,
      dispatch: ctx.dispatch,
      measureDroppableContainers: ctx.measureDroppableContainers,
    });
  }, [args.id, args.data, disabled, args.resizeObserverConfig, ctx]);
  return {
    setNodeRef: (node) => {
      nodeRef.current = node;
    },
    active: ctx.active,
    over: ctx.over,
  };
}
