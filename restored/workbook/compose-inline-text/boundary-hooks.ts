// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-100: compose-inline-text boundary hooks.

export type ComposeInlineTextBoundaryHooks = {
  /** Collapse whitespace in raw text (legacy GOe). */
  collapseText: (...args: any[]) => any;
  /** Merge run override onto base (legacy IOe). */
  mergeRunOverride: (...args: any[]) => any;
  /** Empty paragraph predicate (legacy KOe). */
  isEmptyParagraph: (...args: any[]) => any;
  /** Semantic tag → textStyle map (legacy ROe). */
  semanticTagStyle: (...args: any[]) => any;
  bh697: (...args: any[]) => any;
  bh698: (...args: any[]) => any;
  bh704: (...args: any[]) => any;
  bh710: (...args: any[]) => any;
  /** Fragment symbol (legacy Binding1530). */
  fragmentSymbol: any;
  /** Allowed semantic inline tags (legacy Binding1543). */
  semanticInlineTags: any;
};

export const citH: ComposeInlineTextBoundaryHooks =
  {} as ComposeInlineTextBoundaryHooks;

export function wireComposeInlineTextBoundaryHooks(
  next: ComposeInlineTextBoundaryHooks,
): void {
  Object.assign(citH, next);
}
