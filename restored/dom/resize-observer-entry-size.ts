// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `ng` — pure helper.

/** Prefer border-box size from a ResizeObserver entry. */
export function resizeObserverEntrySize(entry: ResizeObserverEntry): {
  width: number;
  height: number;
} {
  if (entry.borderBoxSize) {
    const box = Array.isArray(entry.borderBoxSize)
      ? entry.borderBoxSize[0]
      : entry.borderBoxSize;
    return { width: box.inlineSize, height: box.blockSize };
  }
  return { width: entry.contentRect.width, height: entry.contentRect.height };
}
