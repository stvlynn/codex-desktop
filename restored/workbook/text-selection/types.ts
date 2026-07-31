// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-31: TextSelection span + host options types.

export type TextSelectionSpan = {
  paragraphIndex: number;
  startOffset: number;
  endOffset: number;
};

export type TextSelectionTextRange = {
  startCp: number;
  length: number;
};

export type TextSelectionOptions = {
  recordOp?: (op: unknown) => void;
  getAnchorId?: () => string | undefined;
  getDefaultTextStyle?: () => any;
  setDefaultTextStyle?: (style: any) => void;
  resolveTextStyle?: (styleId: string) => any;
  listPresetProfile?: string;
  onLayoutInvalidated?: () => void;
  [key: string]: unknown;
};

/** Minimal paragraphs collection surface used by TextSelection. */
export type TextSelectionParagraphs = {
  items: any[];
  getItem(index: number): any;
};
