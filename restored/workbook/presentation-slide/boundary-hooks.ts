// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-158: presentation-slide deps via direct imports
// (wirePresentationSlideBoundaryHooks leave-behind retired).

import {
  kDe,
  workbookBinding1370,
  workbookBinding1371,
  $U,
} from "../constraint-layout";
import {
  workbookBinding1296,
  workbookBinding1341,
  workbookBinding1343,
  workbookBinding1340,
  workbookBinding1294,
  workbookBinding1342,
} from "../slide-layout";
import {
  ensureGridLayoutInit as jDe,
  computeGridFrame as workbookHelper672,
  autoLayoutFrames as ADe,
} from "../grid-frame-layout";
import { workbookBinding1389, workbookBinding1388 } from "../speaker-notes";
import {
  Cke,
  workbookBinding1531,
  parseComposeInput as vke,
} from "../compose-jsx-lower";
import { workbookEt } from "../emu-units";
import { BIe } from "../shell-mid-ensures";
import { exportLayoutBlob as FDe } from "../compose-element-snapshot";
import { VIe, IIe } from "../presentation-plugin-add";
import { addFromCodePlugin } from "../presentation-code-block";

export type PresentationSlideBoundaryHooks = {
  ensureKDe: () => void;
  ensureBinding1370: () => void;
  ensureBinding1296: () => void;
  ensureJDe: () => void;
  ensureBinding1341: () => void;
  ensureBinding1389: () => void;
  ensureBinding1343: () => void;
  ensureCke: () => void;
  ensureBinding1531: () => void;
  ensureWorkbookEt: () => void;
  ensureBIe: () => void;
  Binding1340: any;
  Binding1388: any;
  Binding1294: any;
  Binding1342: any;
  Binding1371: any;
  layoutDirection: { horizontal: string; vertical: string };
  gridFrame: (...args: any[]) => any;
  autoLayoutFrames: (...args: any[]) => any;
  exportLayoutBlob: (...args: any[]) => any;
  normalizeAddConfig: (...args: any[]) => any;
  addFromMermaid: (...args: any[]) => any;
  addFromCodePlugin: (...args: any[]) => any;
  parseComposeInput: (...args: any[]) => any;
};

export const psH: PresentationSlideBoundaryHooks = {
  ensureKDe: () => {
    kDe();
  },
  ensureBinding1370: () => {
    workbookBinding1370();
  },
  ensureBinding1296: () => workbookBinding1296(),
  ensureJDe: () => {
    jDe();
  },
  ensureBinding1341: () => workbookBinding1341(),
  ensureBinding1389: () => {
    workbookBinding1389();
  },
  ensureBinding1343: () => workbookBinding1343(),
  ensureCke: () => {
    Cke();
  },
  ensureBinding1531: () => {
    workbookBinding1531();
  },
  ensureWorkbookEt: () => {
    workbookEt();
  },
  ensureBIe: () => {
    BIe();
  },
  get Binding1340() {
    return workbookBinding1340;
  },
  get Binding1388() {
    return workbookBinding1388;
  },
  get Binding1294() {
    return workbookBinding1294;
  },
  get Binding1342() {
    return workbookBinding1342;
  },
  get Binding1371() {
    return workbookBinding1371;
  },
  get layoutDirection() {
    return $U as any;
  },
  gridFrame: (...args: any[]) => workbookHelper672(...args),
  autoLayoutFrames: (...args: any[]) => ADe(...args),
  exportLayoutBlob: (...args: any[]) => FDe(...args),
  normalizeAddConfig: (...args: any[]) => VIe(...args),
  addFromMermaid: (...args: any[]) => IIe(...args),
  addFromCodePlugin: (...args: any[]) => addFromCodePlugin(...args),
  parseComposeInput: (...args: any[]) => vke(...args),
};

/** @deprecated Wave-158: wire leave-behind retired — psH uses direct imports. */
export function wirePresentationSlideBoundaryHooks(
  _next?: Partial<PresentationSlideBoundaryHooks>,
): void {}
