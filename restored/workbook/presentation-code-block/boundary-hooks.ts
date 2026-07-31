// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-105: presentation-code-block boundary hooks.

export type PresentationCodeBlockBoundaryHooks = {
  /** Parse code language/label (legacy lAe). */
  parseCodeMeta: (...args: any[]) => any;
  /** Resolve fit mode (legacy mAe). */
  resolveFit: (...args: any[]) => any;
  /** Compute code-block position (legacy bAe). */
  computePosition: (...args: any[]) => any;
  /** Theme tokens Binding1593–1607 (mermaid-slide-helpers). */
  theme: any;
  headerHeight: any;
  padX: any;
  padY: any;
  lineHeight: any;
  fontSize: any;
  typeface: any;
  radius: any;
  padToken: any;
  maxLines: any;
};

export const pcbH: PresentationCodeBlockBoundaryHooks =
  {} as PresentationCodeBlockBoundaryHooks;

export function wirePresentationCodeBlockBoundaryHooks(
  next: PresentationCodeBlockBoundaryHooks,
): void {
  Object.assign(pcbH, next);
}
