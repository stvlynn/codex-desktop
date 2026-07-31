// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-32: DetachedText host / options types.

export type DetachedTextHost = {
  stub?: () => void;
  getImageById: (id: string) => unknown;
  createImageAsset: (...args: any[]) => any;
  getChartById: (id: string) => unknown;
  getTextStyleByName: (name: string) => any;
  createChartAsset: (...args: any[]) => any;
  attachChartAsset: (asset: unknown) => any;
  getListPresetProfile?: () => string;
  [key: string]: unknown;
};

export type DetachedTextOptions = {
  getDefaultTextStyle?: () => any;
  setDefaultTextStyle?: (style: any) => void;
  resolveTextStyle?: (styleId: string) => any;
  listPresetProfile?: string;
  onLayoutInvalidated?: () => void;
  onMutated?: () => void;
  autoFit?: unknown;
  record?: {
    recordOp?: (op: unknown) => void;
    getTargetRef?: () => unknown;
    getAnchorId?: () => string | undefined;
  };
  [key: string]: unknown;
};

export type DetachedTextStyleHost = {
  fullSelection(opts?: { recordOps?: boolean }): any;
  patchDefaultStyle(
    value: unknown,
    mutator: (style: any, value: unknown) => void,
  ): void;
  recordStyle(props: Record<string, unknown>): void;
  notifyChanged(): void;
  get defaultTextStyle(): any;
  set defaultTextStyle(value: any);
};

export type DetachedTextStyleApplyHost = {
  paragraphs: { items: any[] };
  listPresetProfile: string;
  styleName: string | undefined;
  setStyleName(name: string | undefined): void;
  className: string | undefined;
  setClassName(name: string | undefined): void;
  get defaultTextStyle(): any;
  set defaultTextStyle(value: any);
  resolveTextStyle?: (styleId: string) => any;
  fullSelection(opts?: { recordOps?: boolean }): any;
  patchDefaultStyle(
    value: unknown,
    mutator: (style: any, value: unknown) => void,
  ): void;
  recordStyle(props: Record<string, unknown>): void;
  notifyChanged(): void;
  notifyMutatedOnly(): void;
  clearRunStyles(paragraph: any): void;
  applyNamedStyle(
    styleId: string | undefined,
    opts?: { record?: boolean },
  ): void;
  applyStyleConfigPartial(
    partial: Record<string, unknown>,
    opts?: { record?: boolean },
  ): void;
  applyBoxOnlyFields(partial: Record<string, unknown>): void;
  styleRecordFromPartial(
    partial: Record<string, unknown>,
    styleName: string | undefined,
  ): Record<string, unknown>;
  mergeStyleProtos(primary: any, fallback: any): any;
};
