// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-93/104: compose-jsx-lower boundary hooks.

export type ComposeJsxLowerBoundaryHooks = {
  boxGrid: (...args: any[]) => any;
  boxCol: (...args: any[]) => any;
  boxRow: (...args: any[]) => any;
  bh700: (...args: any[]) => any;
  bh701: (...args: any[]) => any;
  lowerSemanticTag: (...args: any[]) => any;
  isSemanticTag: (...args: any[]) => any;
  ensureUke: () => void;
  ensureBinding1544: () => void;
  ensureBinding1531: () => void;
  /** Prop allowlist check (legacy assertAllowedProps). */
  assertAllowedProps: (...args: any[]) => any;
  /** Allowed props table (Binding1545). */
  panelPropAllowlist: any;
  /** Flatten children (QOe). */
  flattenChildren: (...args: any[]) => any;
  /** Inline/text child predicate (legacy jOe). */
  isInlineOrTextChild: (...args: any[]) => any;
  /** Already-lowered kind bag (legacy cke). */
  isLoweredKindBag: (...args: any[]) => any;
  /** Resolve tag kind (tke). */
  resolveTagKind: (...args: any[]) => any;
  /** Style bag from props (rke). */
  styleFromProps: (...args: any[]) => any;
  /** Has visual chrome (ike). */
  hasVisualChrome: (...args: any[]) => any;
  /** Create text/box element (legacy createBoxElement). */
  createBoxElement: (...args: any[]) => any;
  /** Element name (legacy elementName). */
  elementName: (...args: any[]) => any;
  /** Size token (legacy sizeToken). */
  sizeToken: (...args: any[]) => any;
  /** Attach children ($Oe). */
  attachChildren: (...args: any[]) => any;
  /** Shape element factory (Binding1511). */
  createShapeElement: (...args: any[]) => any;
};

export const cjlH: ComposeJsxLowerBoundaryHooks =
  {} as ComposeJsxLowerBoundaryHooks;

export function wireComposeJsxLowerBoundaryHooks(
  next: ComposeJsxLowerBoundaryHooks,
): void {
  Object.assign(cjlH, next);
}
