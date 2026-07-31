// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-101: sparkline-paint boundary hooks.

export type SparklinePaintBoundaryHooks = {
  /** Column/stacked sparkline paint (legacy ZCe). */
  paintColumnSparkline: (...args: any[]) => any;
  /** Line sparkline paint (legacy XCe). */
  paintLineSparkline: (...args: any[]) => any;
  /** Resolve sparkline color token (legacy Binding1235). */
  resolveColor: (...args: any[]) => any;
  /** Clamp number into range (legacy Binding1234). */
  clamp: (...args: any[]) => any;
  /** Default series color (legacy Binding1230). */
  defaultSeriesColor: any;
  /** Default axis color (legacy Binding1231). */
  defaultAxisColor: any;
  /** Plot inset px (legacy Binding1232). */
  plotInset: any;
};

export const spkH: SparklinePaintBoundaryHooks =
  {} as SparklinePaintBoundaryHooks;

export function wireSparklinePaintBoundaryHooks(
  next: SparklinePaintBoundaryHooks,
): void {
  Object.assign(spkH, next);
}
