// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-99: text-frame-embeds boundary hooks.

export type TextFrameEmbedsBoundaryHooks = {
  bh640: (...args: any[]) => any;
  bh642: (...args: any[]) => any;
  bh644: (...args: any[]) => any;
  /** Is embeddable inline element (legacy OTe). */
  isEmbedElement: (...args: any[]) => any;
  /** Measure embed element (legacy NTe). */
  measureEmbedElement: (...args: any[]) => any;
  /** Absolute-positioned child (legacy PTe). */
  isAbsoluteChild: (...args: any[]) => any;
  /** Absolute child frame (legacy MTe). */
  absoluteChildFrame: (...args: any[]) => any;
  /** Normalize text content (legacy workbookN). */
  normalizeTextContent: (...args: any[]) => any;
};

export const tfeH: TextFrameEmbedsBoundaryHooks =
  {} as TextFrameEmbedsBoundaryHooks;

export function wireTextFrameEmbedsBoundaryHooks(
  next: TextFrameEmbedsBoundaryHooks,
): void {
  Object.assign(tfeH, next);
}
