// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-41: shared mutation-op bag types (thread/chart/CF).

export type LooseBag = Record<string, any>;

export type ThreadTargetInput = LooseBag & {
  spreadsheetCell?: { sheetName?: string; address?: string };
  spreadsheetRange?: {
    sheetName?: string;
    startAddress?: string;
    endAddress?: string;
  };
};

export type ThreadAddProps = {
  threadId: string;
  target: ThreadTargetInput;
  body: string | { plainText?: string };
  author?: unknown;
  createdAt?: unknown;
};

export type ThreadSelectorProps = {
  threadId: string;
  target: ThreadTargetInput;
  rootBody?: unknown;
  rootAuthorId?: unknown;
  rootCreatedAt?: unknown;
};

export type ChartMutationProps = {
  sheet: string;
  chart: LooseBag;
  fallbackType?: string;
  as?: string;
};

export type ConditionalFormatAddProps = {
  sheet: string;
  target: LooseBag;
  rule: LooseBag;
};
