// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `fCr`) / export `M1`.

export type UseContentRectSizePeers = {
  useState: <T>(init: T) => [T, (next: T | ((prev: T) => T)) => void];
  useCallback: <T extends (...args: never[]) => unknown>(
    fn: T,
    deps: unknown[],
  ) => T;
  ResizeObserver: new (
    callback: (
      entries: Array<{ contentRect: { width: number; height: number } }>,
    ) => void,
  ) => {
    observe: (target: Element) => void;
    disconnect: () => void;
  };
};

let peers: UseContentRectSizePeers | null = null;

/** Wire useContentRectSize peers once companions land. */
export function setUseContentRectSizePeers(
  next: UseContentRectSizePeers,
): void {
  peers = next;
}

/**
 * Bundle export `M1` / internal `fCr`.
 * Track element contentRect width/height via ResizeObserver.
 */
export type ContentRectSize = {
  width: number | null;
  height: number | null;
};

export function useContentRectSize(): {
  size: ContentRectSize;
  setRef: (node: Element | null) => void;
} {
  if (peers == null) {
    throw new Error("UseContentRectSize peers are not configured");
  }
  const [size, setSize] = peers.useState<ContentRectSize>({
    width: null,
    height: null,
  });
  const setRef = peers.useCallback((node: Element | null) => {
    if (node == null || peers == null) return;
    const observer = new peers.ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return { size, setRef };
}
