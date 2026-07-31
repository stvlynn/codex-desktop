// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-35: text-element autofit metric types.

export type TextElementAutofitPaddingPx = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

export type TextElementLayoutMetrics = {
  outerWidthPx: number;
  outerHeightPx: number;
  textFrameWidthPx: number;
  textFrameHeightPx: number;
  contentWidthPx: number;
  contentHeightPx: number;
  maxLineWidthPx: number;
  textHeightPx: number;
  paddingPx: TextElementAutofitPaddingPx;
};

export type TextElementAutofitProps = {
  element: any;
  presentation: any;
  slide: any;
  wrap?: boolean;
  textScale?: number;
  resolvedStyle?: any;
};

export type AutoFitScaleProps = TextElementAutofitProps & {
  minScale?: number;
  maxIterations?: number;
};

export type AutoFitOuterSize = {
  width: number;
  height: number;
};
