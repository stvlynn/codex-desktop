// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: worksheets logger deps via direct imports
// (wireWorksheetsBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;

export type WorksheetsBoundaryHooks = {
  ensureKme: () => void;
  sheetLog: {
    warn: (...args: any[]) => void;
    debug?: (...args: any[]) => void;
    info?: (...args: any[]) => void;
    error?: (...args: any[]) => void;
  };
};

export const shH: WorksheetsBoundaryHooks = {
  ensureKme: () => {
    (__req("../granola-log") as any).ensureGranolaLogInit();
  },
  get sheetLog() {
    return (__req("../granola-log") as any)[__wb(686)];
  },
};

/** @deprecated Wave-161: wire leave-behind retired — shH uses direct imports. */
export function wireWorksheetsBoundaryHooks(
  _next?: Partial<WorksheetsBoundaryHooks>,
): void {}
