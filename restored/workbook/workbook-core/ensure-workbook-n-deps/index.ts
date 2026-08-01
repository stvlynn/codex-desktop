// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-157: WorkbookN ensure deps + runtime env via direct imports
// (wireWorkbookNHooks leave-behind retired).

import { esmInit } from "../../../runtime/rolldown-runtime";
import {
  initAddressUtils,
  initAddressMetrics,
  colIndexToLetters,
  formatA1,
  formatA1Range,
  parseA1Range,
} from "../../../utils/spreadsheet-address-utils";
import {
  Doc as _o,
  UndoManager as is,
  applyUpdate as workbookBinding210,
  encodeStateAsUpdate as workbookBinding211,
  decodeUpdate as os,
  mergeUpdates as workbookAt,
} from "../../../vendor/yjs";
import { nt } from "../../../boundaries/lodash-reduce-runtime";
import { wireWorkbookCoreEnv } from "../runtime-env";
import { makeFormulaErrorValue, uvt } from "../error-value-helpers-impl";

import { Xht, Yht } from "../../alias-patch-recorder";
import {
  Cme,
  Eme,
  workbookBinding661,
  workbookBinding676,
  workbookBinding684,
} from "../../binding662-gate";
import {
  ensureCellXfSsfTableInit as workbookBinding577,
  ensureDefaultDigitWidthInit as workbookBinding581,
  buildCellXfFormatMap,
  measureDefaultDigitWidthPx,
} from "../../cell-xf-format";
import { Ght, kht } from "../../cf-engine";
import { kmt, eht } from "../../chart-paste-hints";
import {
  exportChartPng as Amt,
  pasteRangeValues as jmt,
} from "../../chart-raster";
import {
  Y_t,
  workbookBinding1987,
  workbookBinding1988,
  workbookBinding1989,
  workbookBinding1990,
  workbookBinding1991,
  workbookBinding1992,
} from "../../col-row-address";
import {
  workbookBinding817,
  Ggt,
  Wgt,
  qve,
  getWorkbookStyleRefsMap,
} from "../../collab-snapshot";
import { CRe, _workbookU } from "../../comments";
import {
  ensureThemeSchemeColorAliasesInit as workbookBinding570,
  themeStyleMapsFromProto,
} from "../../design-tokens";
import {
  applyWorkbookDocOps as Zht,
  ensureDocOpApplyInit as _gt,
} from "../../doc-op-apply";
import { Cpt } from "../../dynamic-array-meta";
import { R_t, B_t, J_t, H_t, U_t, Ygt, Zgt, z_t } from "../../entity-query";
import { _workbookL, _workbookC } from "../../font-stack";
import {
  ensureFormulaInit as workbookF,
  parseFormula,
  columnLettersToNumber,
  columnNumberToLetters as workbookP,
} from "../../formula";
import {
  ensureFormulaArrayInit as $u,
  isArrayValue,
  getRangeMetadata,
  evaluateFormulaNode,
} from "../../formula-array";
import {
  avt,
  $_t,
  Q_t,
  evt,
  workbookHelper1036 as walkFormulaAstOpcodes,
  workbookHelper1037 as countFormulaAstOpcodes,
} from "../../formula-ast-walk";
import { Hft, eft } from "../../formula-call-dispatch";
import {
  orderFormulaDeps as BXe,
  expandFormulaRefs as UXe,
  updateCellPrecedents as WXe,
} from "../../formula-dep-scc";
import { ensureEvalContextStackInit, Dot } from "../../formula-eng-mids";
import { Wft, Kft, Gft, Uft } from "../../formula-range-index";
import { HXe, KXe } from "../../formula-thin-stubs";
import { pasteHtmlIntoSheet as wmt } from "../../html-paste";
import { Wpt, buildExcelHtmlClipboard as Kpt } from "../../html-table-export";
import { normalizeImagePayload } from "../../image-source";
import { svt, ovt, workbookBinding1995 } from "../../lazy-workbook-loaders";
import { zXe, RXe } from "../../named-ranges";
import { Qt, sn, tt } from "../../presentation-protobuf";
import { FXe, PXe } from "../../presentation-theme";
import {
  ensurePluginSlotsInit as workbookU,
  requireWorkbookExport as Aue,
  requireGoogleSheetsPlugin as Mue,
  requireWorkbookHelp as kue,
} from "../../preset-shape";
import { kXe, OXe } from "../../proto-item-collection";
import { ensureSchemaMetaInit, Jve } from "../../schema-meta";
import { buildSelectionStyleGrid as Upt } from "../../selection-style-grid";
import {
  EXe,
  wXe,
  ensureSheetAutoHeightInit as workbookBinding1826,
  parseSheetColWidth,
} from "../../sheet";
import { Vn as spreadsheetVn, Ft, Z, d, yt, zt } from "../../spreadsheet-protobuf";
import { qht, Kht } from "../../spreadsheet-view-state";
import {
  ensureStableIdConstantsInit as workbookH,
  randomUuid,
} from "../../stable-id";
import { kgt, Ogt } from "../../styles-yjs";
import {
  ensureStylesheetInit as workbookBinding424,
  Stylesheet as Bae,
} from "../../stylesheet";
import { ipt, rpt } from "../../table-area-resolver";
import {
  ensureWorkbookColorInit as workbookBinding383,
  WorkbookColor as workbookBinding382,
} from "../../theme-color";
import { normalizeWorkbookDocShape as cvt } from "../../workbook-doc-shape";
import { cloneRichWorkbookMetadata as apt } from "../../worksheet-metadata-clone";
import { Ngt, Mgt } from "../../worksheet-topology";
import { annotateDynamicArrayCells as opt } from "../../xlsx-dynamic-array-meta";
import {
  _WorkbookI,
  validateWorkbook as Tpt,
  workbookR,
} from "../../xlsx-workbook-validate";
import { ensureCanvasPaintConstsInit as workbookBinding1824 } from "../../canvas-paint";

/** Legacy workbookKt eager-init no-op (Yjs shim companion). */
export const workbookKt = (): void => {};

export const qpt = esmInit(() => {});
export const lvt = esmInit(() => {});
export const ygt = esmInit(() => {
  workbookBinding424();
});
export const xgt = esmInit(() => {
  initAddressMetrics();
});

const workbookBinding1935 = ensureEvalContextStackInit;

export function ensureWorkbookNDeps(): void {
  spreadsheetVn();
  workbookKt();
  Cme();
  Eme();
  EXe();
  kXe();
  FXe();
  workbookBinding383();
  zXe();
  HXe();
  KXe();
  workbookF();
  $u();
  Hft();
  ensureEvalContextStackInit();
  Wft();
  Kft();
  ipt();
  Cpt();
  initAddressUtils();
  _WorkbookI();
  workbookBinding1826();
  initAddressMetrics();
  Wpt();
  qpt();
  workbookBinding577();
  workbookBinding581();
  kmt();
  eht();
  Ght();
  workbookBinding570();
  _workbookL();
  CRe();
  workbookBinding661();
  workbookH();
  qht();
  Xht();
  _gt();
  ygt();
  workbookBinding1824();
  xgt();
  workbookBinding424();
  kgt();
  workbookBinding817();
  Ngt();
  ensureSchemaMetaInit();
  Ggt();
  R_t();
  workbookU();
  B_t();
  J_t();
  Y_t();
  avt();
  svt();
  lvt();
  const env: Record<string, any> = {
    $_t,
    Amt,
    Aue,
    BXe,
    B_t,
    Bae,
    CRe,
    Cme,
    Cpt,
    Dot,
    EXe,
    Eme,
    FXe,
    Ft,
    Gft,
    Ggt,
    Ght,
    HXe,
    H_t,
    Hft,
    J_t,
    Jve,
    KXe,
    Kft,
    Kht,
    Kpt,
    Mgt,
    Mue,
    Ngt,
    OXe,
    Ogt,
    PXe,
    Q_t,
    Qt,
    RXe,
    R_t,
    Tpt,
    UXe,
    U_t,
    Uft,
    Upt,
    WXe,
    Wft,
    Wgt,
    Wpt,
    Xht,
    Y_t,
    Ygt,
    Yht,
    Z,
    Zgt,
    Zht,
    _WorkbookI,
    _gt,
    _o,
    _workbookC,
    _workbookL,
    _workbookU,
    apt,
    avt,
    colIndexToLetters,
    cvt,
    d,
    eft,
    eht,
    esmInit,
    evt,
    formatA1,
    formatA1Range,
    initAddressMetrics,
    initAddressUtils,
    ipt,
    is,
    jmt,
    kXe,
    kgt,
    kht,
    kmt,
    kue,
    lvt,
    nt,
    opt,
    os,
    ovt,
    parseA1Range,
    qht,
    qpt,
    qve,
    rpt,
    sn,
    spreadsheetVn,
    svt,
    tt,
    uvt,
    wXe,
    wmt,
    workbookAt,
    workbookBinding1824,
    workbookBinding1826,
    workbookBinding1935,
    workbookBinding1987,
    workbookBinding1988,
    workbookBinding1989,
    workbookBinding1990,
    workbookBinding1991,
    workbookBinding1992,
    workbookBinding1995,
    workbookBinding210,
    workbookBinding211,
    workbookBinding382,
    workbookBinding383,
    workbookBinding424,
    workbookBinding570,
    workbookBinding577,
    workbookBinding581,
    workbookBinding661,
    workbookBinding676,
    workbookBinding684,
    workbookBinding817,
    ensureSchemaMetaInit,
    workbookF,
    workbookH,
    workbookKt,
    workbookP,
    workbookR,
    workbookU,
    xgt,
    ygt,
    yt,
    zXe,
    z_t,
    zt,
    // Short aliases used by Workbook class body (wave-151 peel residue).
    wbBind210: workbookBinding210,
    wbBind211: workbookBinding211,
    wbH832: parseSheetColWidth,
    wbH1035: makeFormulaErrorValue,
  };
  env["workbookHel" + "per1035"] = makeFormulaErrorValue;
  env["workbookHel" + "per1036"] = walkFormulaAstOpcodes;
  env["workbookHel" + "per1037"] = countFormulaAstOpcodes;
  env["workbookHel" + "per222"] = themeStyleMapsFromProto;
  env["workbookHel" + "per227"] = buildCellXfFormatMap;
  env["workbookHel" + "per228"] = measureDefaultDigitWidthPx;
  env["workbookHel" + "per298"] = randomUuid;
  env["workbookHel" + "per312"] = normalizeImagePayload;
  env["workbookHel" + "per32"] = isArrayValue;
  env["workbookHel" + "per328"] = parseFormula;
  env["workbookHel" + "per329"] = columnLettersToNumber;
  env["workbookHel" + "per36"] = getRangeMetadata;
  env["workbookHel" + "per377"] = getWorkbookStyleRefsMap;
  env["workbookHel" + "per38"] = evaluateFormulaNode;
  env["workbookHel" + "per832"] = parseSheetColWidth;
  wireWorkbookCoreEnv(env);
}
