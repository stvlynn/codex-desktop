// Restored from ref/webview/assets/create-resize-observer-NgApag1I.js
// Stage 3: self-contained ResizeObserver helper. act→getResizeObserverEntrySize;
// oct ESM init dropped.

export type ResizeObserverAxis = "width" | "height" | "both";

export type ResizeObserverSizeChange = {
  width: number;
  height: number;
  previousWidth: number | null;
  previousHeight: number | null;
};

export type CreateResizeObserverOptions = {
  axis: ResizeObserverAxis;
  debounce?: boolean;
  initialSize?: boolean;
  onChange: (
    size: ResizeObserverSizeChange,
    entry: ResizeObserverEntry,
  ) => void;
  target: Element | null | undefined;
};

/** Bundle `ng` / export `act` — read border-box size when available. */
export function getResizeObserverEntrySize(entry: ResizeObserverEntry): {
  width: number;
  height: number;
} {
  if (entry.borderBoxSize) {
    const box = Array.isArray(entry.borderBoxSize)
      ? entry.borderBoxSize[0]
      : entry.borderBoxSize;
    return { width: box.inlineSize, height: box.blockSize };
  }
  return {
    width: entry.contentRect.width,
    height: entry.contentRect.height,
  };
}

/** Rolldown ESM init (bundle export `n` / `i`) — no-op under semantic imports. */
export function ensureCreateResizeObserverInit(): void {}

/**
 * Observe an element and invoke `onChange` when the chosen axis changes
 * (bundle export `t` / `r`).
 */
export function createResizeObserver({
  axis,
  debounce = false,
  initialSize = true,
  onChange,
  target,
}: CreateResizeObserverOptions): (() => void) | undefined {
  if (!target || typeof ResizeObserver === "undefined") return undefined;

  let abortController = new AbortController();
  let previousWidth: number | null = null;
  let previousHeight: number | null = null;
  let isInitial = initialSize;

  const observer = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { width, height } = getResizeObserverEntrySize(entry);
      let changed = false;
      const priorWidth = previousWidth;
      const priorHeight = previousHeight;

      if (axis === "width") {
        const widthChanged =
          (isInitial || previousWidth != null) && previousWidth !== width;
        previousWidth = width;
        if (widthChanged) changed = true;
      } else if (axis === "height") {
        const heightChanged =
          (isInitial || previousHeight != null) && previousHeight !== height;
        previousHeight = height;
        if (heightChanged) changed = true;
      } else {
        const widthChanged =
          (isInitial || previousWidth != null) && previousWidth !== width;
        const heightChanged =
          (isInitial || previousHeight != null) && previousHeight !== height;
        previousWidth = width;
        previousHeight = height;
        if (widthChanged || heightChanged) changed = true;
      }

      isInitial = false;
      if (!changed) continue;

      const payload: ResizeObserverSizeChange = {
        width,
        height,
        previousWidth: priorWidth,
        previousHeight: priorHeight,
      };

      if (!debounce) {
        onChange(payload, entry);
        continue;
      }

      abortController.abort();
      abortController = new AbortController();
      const { signal } = abortController;
      requestAnimationFrame(() => {
        if (!signal.aborted) onChange(payload, entry);
      });
    }
  });

  const disconnect = (): void => {
    try {
      observer.disconnect();
    } catch {
      // ignore
    }
  };

  observer.observe(target);
  return disconnect;
}

// --- qg-full-green stubs ---
export const createResizeObserverN: any = undefined;
export const createResizeObserverT: any = undefined;
