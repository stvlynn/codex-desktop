// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: WorkbookN ensure/shell + __workbookT Workbook class.
// Stage-3 wave-151.

import { esmInit } from "../../../runtime/rolldown-runtime";
import type { WorkbookOpsHost } from "../types";
import { ensureWorkbookNDeps } from "../ensure-workbook-n-deps";
import { ensureWorkbookCoreInit } from "../ensure-workbook-core-init";
import { getWorkbookOps } from "../ops";
import { getWorkbookCoreEnv } from "../runtime-env";
import {
  featureBagCheckboxType,
  featureBagXfControlsType,
  featureBagXfComplementType,
  featureBagXfComplementsType,
  XF_COMPLEMENTS_MAPPER_EXT_REF,
  CELL_CONTROL,
  XF_CONTROLS,
  MAPPED_FEATURE_PROPERTY_BAGS,
  EXCEL_EPOCH_UTC_MS as workbookCoreExcelEpochMs,
  MS_PER_DAY as workbookCoreMsPerDay,
  MS_PER_MINUTE,
  EXCEL_CANONICAL_DATE,
  DATE_FORMULA_NAMES,
  ISO_DATE_TIME_RE,
  TRACE_ERROR_TOKEN,
  CIRC_ERROR_TOKEN,
} from "../constants";

export let workbookBinding1996: any;
export let dvt: any;
export let fvt: any;
export let pvt: any;
export let mvt: any;
export let hvt: any;
export let gvt: any;
export let _vt: any;
export let workbookBinding1997: any;
export let workbookBinding1998: any;
export let vvt: any;
export let workbookBinding1999: any;
export let yvt: any;
export let bvt: any;
export let workbookBinding2000: any;
export let xvt: any;
export let __workbookT: any;

export const WorkbookN = esmInit(() => {
  ensureWorkbookNDeps();
  ensureWorkbookCoreInit();
  workbookBinding1996 = featureBagCheckboxType();
  dvt = featureBagXfControlsType();
  fvt = featureBagXfComplementType();
  pvt = featureBagXfComplementsType();
  mvt = XF_COMPLEMENTS_MAPPER_EXT_REF;
  hvt = CELL_CONTROL;
  gvt = XF_CONTROLS;
  _vt = MAPPED_FEATURE_PROPERTY_BAGS;
  workbookBinding1997 = workbookCoreExcelEpochMs;
  workbookBinding1998 = workbookCoreMsPerDay;
  vvt = MS_PER_MINUTE;
  workbookBinding1999 = EXCEL_CANONICAL_DATE;
  yvt = DATE_FORMULA_NAMES;
  bvt = ISO_DATE_TIME_RE;
  workbookBinding2000 = TRACE_ERROR_TOKEN;
  xvt = CIRC_ERROR_TOKEN;
  __workbookT = class Workbook {
    #e;
    #t = new (getWorkbookCoreEnv()._workbookC)();
    #n;
    #r;
    #i = 0;
    #a;
    #o;
    #s;
    #c;
    #l;
    #u;
    comments;
    awareness;
    #d;
    #f;
    #p;
    #m;
    #h;
    #g;
    #_;
    #v;
    #y;
    #b;
    #x;
    #S;
    #C;
    #w;
    #T;
    #E;
    #D;
    #O;
    #k;
    #A;
    #j;
    #M;
    #N;
    #P;
    #F;
    #I = false;
    #L = false;
    #R;
    #z;
    #B;
    #V;
    #H;
    #U = 0;
    #W = 0;
    #G = false;
    #K;
    #q = false;
    #J = false;
    #Y = new Set();
    #X = false;
    #Z = false;
    #Q = false;
    constructor(wbIn190: unknown) {
      getWorkbookOps().workbookConstruct(this.#opsHost(), wbIn190);
    }
    static create() {
      return getWorkbookOps().workbookStaticCreate(Workbook);
    }
    static load(wbIn8652: unknown, wbIn8653: unknown) {
      return getWorkbookOps().workbookStaticLoad(Workbook, wbIn8652, wbIn8653);
    }
    static async fromGoogleSheets(wbIn12223) {
      return getWorkbookCoreEnv().Mue().loadWorkbook(wbIn12223);
    }
    static async fromMarkdown(wbIn1703: unknown, wbIn1704: unknown) {
      return getWorkbookOps().workbookStaticFromMarkdown(wbIn1703, wbIn1704);
    }
    static async fromCSV(wbIn4819: unknown, wbIn4820: unknown) {
      return getWorkbookOps().workbookStaticFromCSV(
        Workbook,
        wbIn4819,
        wbIn4820,
      );
    }
    async fromCSV(wbIn3359: unknown, wbIn3360: unknown) {
      return getWorkbookOps().workbookOpFromCSV(
        this.#opsHost(),
        wbIn3359,
        wbIn3360,
      );
    }
    get pivotTables() {
      return this.#m;
    }
    get fontFamilies() {
      return this.#t.fontFamilies;
    }
    get sheets() {
      return this.#g;
    }
    get slicers() {
      return this.#h;
    }
    get worksheets() {
      return this.#g;
    }
    getStyleRegistry() {
      return this.#e;
    }
    getSpreadsheetRenderAssets() {
      return getWorkbookOps().workbookOpGetSpreadsheetRenderAssets(
        this.#opsHost(),
      );
    }
    __registerCollaborativeStyle(wbIn12095) {
      return this.#n.registerStyle(wbIn12095);
    }
    __getOrCreateStyleIdForStyleIndex(wbIn11221) {
      return this.#n.getOrCreateStyleIdForIndex(wbIn11221);
    }
    __resolveStyleIndexForStyleId(wbIn11774) {
      return this.#n.getStyleIndexForId(wbIn11774);
    }
    __subscribeToCollaborativeStyles(wbIn12096) {
      return this.#n.subscribe(wbIn12096);
    }
    #$(wbIn9185) {
      if (wbIn9185.length === 0)
        throw Error("Worksheet state requires a non-empty sheetId.");
      return this.#N.getMap(`sheet:${wbIn9185}`);
    }
    #ee(wbIn9209) {
      if (wbIn9209.length === 0)
        throw Error("Worksheet style refs require a non-empty sheetId.");
      return this.#N.getMap(getWorkbookCoreEnv().qve(wbIn9209));
    }
    hydrateCrdtFromProto() {
      return getWorkbookOps().workbookOpHydrateCrdtFromProto(this.#opsHost());
    }
    loadInitialCrdtStateV2(wbIn10638, wbIn10639 = {}) {
      this.#Ft("loadInitialCrdtStateV2");
      this.applyCrdtUpdateV2(wbIn10638, wbIn10639);
    }
    getCrdtDoc() {
      return this.#N;
    }
    isCollaborativeStateReady() {
      return this.#Q;
    }
    __flushPendingCollaborativePublishes() {
      this.#Nt();
    }
    getCollabOrigins() {
      return getWorkbookOps().workbookOpGetCollabOrigins(this.#opsHost());
    }
    queueWorkbookCollabPublish() {
      !this.#Q || this.#Z || ((this.#q = true), this.#Mt());
    }
    queueWorksheetCollabPublish(wbIn9786: unknown) {
      return getWorkbookOps().workbookOpQueueWorksheetCollabPublish(
        this.#opsHost(),
        wbIn9786,
      );
    }
    runLocalCollabTransaction(wbIn12528) {
      return this.#Rt(this.#B, wbIn12528);
    }
    batchCellInputWrites(wbIn5643: unknown) {
      return getWorkbookOps().workbookOpBatchCellInputWrites(
        this.#opsHost(),
        wbIn5643,
      );
    }
    undo() {
      this.#R.undo();
    }
    redo() {
      this.#R.redo();
    }
    canUndo() {
      return this.#R.canUndo();
    }
    canRedo() {
      return this.#R.canRedo();
    }
    getConditionalFormattingRenderCache(wbIn2311: unknown) {
      return getWorkbookOps().workbookOpGetConditionalFormattingRenderCache(
        this.#opsHost(),
        wbIn2311,
      );
    }
    invalidateConditionalFormattingCache(wbIn8441: unknown) {
      return getWorkbookOps().workbookOpInvalidateConditionalFormattingCache(
        this.#opsHost(),
        wbIn8441,
      );
    }
    #te() {
      this.#a = undefined;
      for (let wbBind22850 of this.#g) wbBind22850.__invalidateViewportLayout();
    }
    __getOrCreateCheckboxFeaturePropertyBagIndex() {
      return getWorkbookOps().workbookOp__getOrCreateCheckboxFeaturePropertyBagIndex(
        this.#opsHost(),
      );
    }
    __isCheckboxStyleIndex(wbIn10404) {
      let wbBind20871 = this.#e.describe(wbIn10404).featurePropertyBagIndex;
      return this.#re(wbBind20871);
    }
    __resolveCheckboxStyleIndex(wbIn8810: unknown) {
      return getWorkbookOps().workbookOp__resolveCheckboxStyleIndex(
        this.#opsHost(),
        wbIn8810,
      );
    }
    __removeCheckboxStyleIndex(wbIn8968: unknown) {
      return getWorkbookOps().workbookOp__removeCheckboxStyleIndex(
        this.#opsHost(),
        wbIn8968,
      );
    }
    createImageAsset(wbIn3723: unknown) {
      return getWorkbookOps().workbookOpCreateImageAsset(
        this.#opsHost(),
        wbIn3723,
      );
    }
    #ne() {
      return getWorkbookOps().workbookPrivNe(this.#opsHost());
    }
    get images() {
      return this.#u;
    }
    get notes() {
      return this.#_;
    }
    get names() {
      return this.#T;
    }
    get definedNames() {
      return this.#T;
    }
    get utils() {
      return getWorkbookOps().workbookGetUtils(this.#opsHost());
    }
    #re(wbIn11584) {
      return typeof wbIn11584 == "number"
        ? this.#o?.bags?.[wbIn11584]?.type === featureBagCheckboxType()
        : false;
    }
    __getWorksheetByName(wbIn13456) {
      return this.#zt(wbIn13456);
    }
    __getWorksheetBySheetId(wbIn12224) {
      return this.#g.getItemBySheetId(wbIn12224);
    }
    __getNamesFacadeForSheet(wbIn7172: unknown) {
      return getWorkbookOps().workbookOp__getNamesFacadeForSheet(
        this.#opsHost(),
        wbIn7172,
      );
    }
    get theme() {
      return this.#r.toProto();
    }
    setColorScheme(wbIn640: unknown) {
      return getWorkbookOps().workbookOpSetColorScheme(
        this.#opsHost(),
        wbIn640,
      );
    }
    recalculate() {
      return getWorkbookOps().workbookOpRecalculate(this.#opsHost());
    }
    trace(wbIn7435: unknown) {
      return getWorkbookOps().workbookOpTrace(this.#opsHost(), wbIn7435);
    }
    collectFormulaUsageStats() {
      return getWorkbookCoreEnv().evt(this.#ae());
    }
    __getDisplayFormulaForCell(
      wbIn3701: unknown,
      wbIn3702: unknown,
      wbIn3703: unknown,
    ) {
      return getWorkbookOps().workbookOp__getDisplayFormulaForCell(
        this.#opsHost(),
        wbIn3701,
        wbIn3702,
        wbIn3703,
      );
    }
    __getFormulaPresenceForCell(
      wbIn1423: unknown,
      wbIn1424: unknown,
      wbIn1425: unknown,
    ) {
      return getWorkbookOps().workbookOp__getFormulaPresenceForCell(
        this.#opsHost(),
        wbIn1423,
        wbIn1424,
        wbIn1425,
      );
    }
    toProto() {
      return getWorkbookOps().workbookOpToProto(this.#opsHost());
    }
    inspect(wbIn14584) {
      return getWorkbookCoreEnv().Ygt(this, wbIn14584);
    }
    findCells(wbIn14339) {
      return getWorkbookCoreEnv().Zgt(this, wbIn14339);
    }
    help(wbIn13092, wbIn13093) {
      return getWorkbookCoreEnv().kue().buildWorkbookHelp(wbIn13092, wbIn13093);
    }
    resolve(wbIn882: unknown) {
      return getWorkbookOps().workbookOpResolve(this.#opsHost(), wbIn882);
    }
    apply(wbIn7004: unknown, wbIn7005: unknown) {
      return getWorkbookOps().workbookOpApply(
        this.#opsHost(),
        wbIn7004,
        wbIn7005,
      );
    }
    configureGoogleSheets(wbIn11115: unknown) {
      return getWorkbookOps().workbookOpConfigureGoogleSheets(
        this.#opsHost(),
        wbIn11115,
      );
    }
    #ie() {
      return getWorkbookOps().workbookPrivIe(this.#opsHost());
    }
    applyCrdtUpdateV2(wbIn6237, wbIn6238 = {}) {
      this.#Q = true;
      this.#Z = true;
      try {
        getWorkbookCoreEnv().wbBind210(
          this.#N,
          wbIn6237 instanceof Uint8Array ? wbIn6237 : new Uint8Array(wbIn6237),
        );
      } finally {
        this.#Z = false;
      }
      (wbIn6238.recalculate ?? true) && this.recalculate();
    }
    onCrdtUpdateV2(wbIn6882: unknown) {
      return getWorkbookOps().workbookOpOnCrdtUpdateV2(
        this.#opsHost(),
        wbIn6882,
      );
    }
    record(wbIn1993: unknown) {
      return getWorkbookOps().workbookOpRecord(this.#opsHost(), wbIn1993);
    }
    getRecorder() {
      return this.#V;
    }
    __reloadPivotCollectionsFromCollab() {
      this.#m.reload();
    }
    __reloadSlicerCollectionsFromCollab() {
      this.#h.reload();
    }
    __refreshSparklineRenderContextsFromCollab() {
      this.#qt();
    }
    __invalidateCalcStateFromCollab() {
      this.#Ue();
    }
    get googleSheets() {
      return this.#K;
    }
    render(wbIn12860 = {}) {
      return getWorkbookCoreEnv().Aue().renderWorkbook(this, wbIn12860);
    }
    export(wbIn12861 = {}) {
      return getWorkbookCoreEnv().Aue().exportWorkbook(this, wbIn12861);
    }
    toHTML(wbIn416: unknown, wbIn417: unknown, wbIn418: unknown) {
      return getWorkbookOps().workbookOpToHTML(
        this.#opsHost(),
        wbIn416,
        wbIn417,
        wbIn418,
      );
    }
    fromHTML(
      wbIn8498: unknown,
      wbIn8499: unknown,
      wbIn8500: unknown,
      wbIn8501: unknown,
    ) {
      return getWorkbookOps().workbookOpFromHTML(
        this.#opsHost(),
        wbIn8498,
        wbIn8499,
        wbIn8500,
        wbIn8501,
      );
    }
    chartToImage(wbIn11443: unknown, wbIn11444: unknown) {
      return getWorkbookOps().workbookOpChartToImage(
        this.#opsHost(),
        wbIn11443,
        wbIn11444,
      );
    }
    fromImage(
      wbIn8397: unknown,
      wbIn8398: unknown,
      wbIn8399: unknown,
      wbIn8400: unknown,
    ) {
      return getWorkbookOps().workbookOpFromImage(
        this.#opsHost(),
        wbIn8397,
        wbIn8398,
        wbIn8399,
        wbIn8400,
      );
    }
    __handleCellFormulaChanged(
      wbIn944: unknown,
      wbIn945: unknown,
      wbIn946: unknown,
    ) {
      return getWorkbookOps().workbookOp__handleCellFormulaChanged(
        this.#opsHost(),
        wbIn944,
        wbIn945,
        wbIn946,
      );
    }
    __handleCellValueChanged(wbIn5202: unknown, wbIn5203: unknown) {
      return getWorkbookOps().workbookOp__handleCellValueChanged(
        this.#opsHost(),
        wbIn5202,
        wbIn5203,
      );
    }
    __getVolatileChain(wbIn4029: unknown, wbIn4030: unknown) {
      return getWorkbookOps().workbookOp__getVolatileChain(
        this.#opsHost(),
        wbIn4029,
        wbIn4030,
      );
    }
    #ae() {
      return getWorkbookOps().workbookPrivAe(this.#opsHost());
    }
    #oe(wbIn952: unknown) {
      return getWorkbookOps().workbookPrivOe(this.#opsHost(), wbIn952);
    }
    #se(wbIn10786: unknown, wbIn10787: unknown, wbIn10788: unknown) {
      return getWorkbookOps().workbookPrivSe(
        this.#opsHost(),
        wbIn10786,
        wbIn10787,
        wbIn10788,
      );
    }
    #ce(wbIn5550: unknown, wbIn5551: unknown, wbIn5552: unknown) {
      return getWorkbookOps().workbookPrivCe(
        this.#opsHost(),
        wbIn5550,
        wbIn5551,
        wbIn5552,
      );
    }
    #le(wbIn5141: unknown) {
      return getWorkbookOps().workbookPrivLe(this.#opsHost(), wbIn5141);
    }
    #ue(wbIn2838: unknown) {
      return getWorkbookOps().workbookPrivUe(this.#opsHost(), wbIn2838);
    }
    #de(wbIn11775) {
      if (!(wbIn11775 == null || wbIn11775 < 0))
        return this.#A[wbIn11775]?.trim() || undefined;
    }
    #fe(wbIn7633: unknown) {
      return getWorkbookOps().workbookPrivFe(this.#opsHost(), wbIn7633);
    }
    #pe() {
      this.#A = [];
      for (let wbBind22834 of this.#g)
        this.#A[wbBind22834.index] = wbBind22834.name ?? "";
    }
    #me(
      wbIn1936: unknown,
      wbIn1937: unknown,
      wbIn1938: unknown,
      wbIn1939: unknown,
      wbIn1940: unknown,
      wbIn1941: unknown,
    ) {
      return getWorkbookOps().workbookPrivMe(
        this.#opsHost(),
        wbIn1936,
        wbIn1937,
        wbIn1938,
        wbIn1939,
        wbIn1940,
        wbIn1941,
      );
    }
    #he(wbIn5104: unknown, wbIn5105: unknown, wbIn5106: unknown) {
      return getWorkbookOps().workbookPrivHe(
        this.#opsHost(),
        wbIn5104,
        wbIn5105,
        wbIn5106,
      );
    }
    #ge(wbIn3659: unknown, wbIn3660: unknown, wbIn3661: unknown) {
      return getWorkbookOps().workbookPrivGe(
        this.#opsHost(),
        wbIn3659,
        wbIn3660,
        wbIn3661,
      );
    }
    #_e(
      wbIn3947: unknown,
      wbIn3948: unknown,
      wbIn3949: unknown,
      wbIn3950: unknown,
    ) {
      return getWorkbookOps().workbookPriv_e(
        this.#opsHost(),
        wbIn3947,
        wbIn3948,
        wbIn3949,
        wbIn3950,
      );
    }
    #ve(wbIn8866: unknown) {
      return getWorkbookOps().workbookPrivVe(this.#opsHost(), wbIn8866);
    }
    #ye(wbIn3914: unknown, wbIn3915: unknown, wbIn3916: unknown) {
      return getWorkbookOps().workbookPrivYe(
        this.#opsHost(),
        wbIn3914,
        wbIn3915,
        wbIn3916,
      );
    }
    #be(wbIn7916: unknown, wbIn7917: unknown) {
      return getWorkbookOps().workbookPrivBe(
        this.#opsHost(),
        wbIn7916,
        wbIn7917,
      );
    }
    #xe(wbIn6668: unknown, wbIn6669: unknown) {
      return getWorkbookOps().workbookPrivXe(
        this.#opsHost(),
        wbIn6668,
        wbIn6669,
      );
    }
    #Se(wbIn3551: unknown, wbIn3552: unknown, wbIn3553: unknown) {
      return getWorkbookOps().workbookPrivSe(
        this.#opsHost(),
        wbIn3551,
        wbIn3552,
        wbIn3553,
      );
    }
    #Ce(wbIn5760: unknown) {
      return getWorkbookOps().workbookPrivCe(this.#opsHost(), wbIn5760);
    }
    #we(wbIn12275: unknown) {
      return getWorkbookOps().workbookPrivWe(this.#opsHost(), wbIn12275);
    }
    #Te(wbIn11585: unknown) {
      return getWorkbookOps().workbookPrivTe(this.#opsHost(), wbIn11585);
    }
    #Ee(wbIn5557: unknown) {
      return getWorkbookOps().workbookPrivEe(this.#opsHost(), wbIn5557);
    }
    #De() {
      let wbBind21885 = 0;
      for (let wbBind23082 of this.#g) wbBind21885 += 1;
      return wbBind21885;
    }
    #Oe(
      wbIn3924: unknown,
      wbIn3925: unknown,
      wbIn3926: unknown,
      wbIn3927: unknown,
    ) {
      return getWorkbookOps().workbookPrivOe(
        this.#opsHost(),
        wbIn3924,
        wbIn3925,
        wbIn3926,
        wbIn3927,
      );
    }
    #ke(wbIn4530: unknown, wbIn4531: unknown) {
      return getWorkbookOps().workbookPrivKe(
        this.#opsHost(),
        wbIn4530,
        wbIn4531,
      );
    }
    #Ae(wbIn6577: unknown, wbIn6578: unknown) {
      return getWorkbookOps().workbookPrivAe(
        this.#opsHost(),
        wbIn6577,
        wbIn6578,
      );
    }
    #je(wbIn2449: unknown, wbIn2450: unknown) {
      return getWorkbookOps().workbookPrivJe(
        this.#opsHost(),
        wbIn2449,
        wbIn2450,
      );
    }
    #Me(wbIn2168: unknown, wbIn2169: unknown, wbIn2170: unknown) {
      return getWorkbookOps().workbookPrivMe(
        this.#opsHost(),
        wbIn2168,
        wbIn2169,
        wbIn2170,
      );
    }
    #Ne(wbIn6579: unknown, wbIn6580: unknown, wbIn6581: unknown) {
      return getWorkbookOps().workbookPrivNe(
        this.#opsHost(),
        wbIn6579,
        wbIn6580,
        wbIn6581,
      );
    }
    #Pe(wbIn3355: unknown) {
      return getWorkbookOps().workbookPrivPe(this.#opsHost(), wbIn3355);
    }
    #Fe(wbIn8401: unknown) {
      return getWorkbookOps().workbookPrivFe(this.#opsHost(), wbIn8401);
    }
    #Ie(wbIn5364: unknown, wbIn5365: unknown) {
      return getWorkbookOps().workbookPrivIe(
        this.#opsHost(),
        wbIn5364,
        wbIn5365,
      );
    }
    #Le(wbIn3831: unknown) {
      return getWorkbookOps().workbookPrivLe(this.#opsHost(), wbIn3831);
    }
    #Re(
      wbIn4025: unknown,
      wbIn4026: unknown,
      wbIn4027: unknown,
      wbIn4028: unknown,
    ) {
      return getWorkbookOps().workbookPrivRe(
        this.#opsHost(),
        wbIn4025,
        wbIn4026,
        wbIn4027,
        wbIn4028,
      );
    }
    #ze(wbIn7219: unknown) {
      return getWorkbookOps().workbookPrivZe(this.#opsHost(), wbIn7219);
    }
    #Be(
      wbIn4629: unknown,
      wbIn4630: unknown,
      wbIn4631: unknown,
      wbIn4632: unknown,
      wbIn4633: unknown,
      wbIn4634: unknown,
    ) {
      return getWorkbookOps().workbookPrivBe(
        this.#opsHost(),
        wbIn4629,
        wbIn4630,
        wbIn4631,
        wbIn4632,
        wbIn4633,
        wbIn4634,
      );
    }
    #Ve(
      wbIn2287: unknown,
      wbIn2288: unknown,
      wbIn2289: unknown,
      wbIn2290: unknown,
    ) {
      return getWorkbookOps().workbookPrivVe(
        this.#opsHost(),
        wbIn2287,
        wbIn2288,
        wbIn2289,
        wbIn2290,
      );
    }
    #He(
      wbIn377: unknown,
      wbIn378: unknown,
      wbIn379: unknown,
      wbIn380: unknown,
      wbIn381: unknown,
    ) {
      return getWorkbookOps().workbookPrivHe(
        this.#opsHost(),
        wbIn377,
        wbIn378,
        wbIn379,
        wbIn380,
        wbIn381,
      );
    }
    #Ue() {
      return getWorkbookOps().workbookPrivUe(this.#opsHost());
    }
    #We(wbIn1492: unknown, wbIn1493: unknown, wbIn1494: unknown) {
      return getWorkbookOps().workbookPrivWe(
        this.#opsHost(),
        wbIn1492,
        wbIn1493,
        wbIn1494,
      );
    }
    #Ge(wbIn8585: unknown, wbIn8586: unknown) {
      return getWorkbookOps().workbookPrivGe(
        this.#opsHost(),
        wbIn8585,
        wbIn8586,
      );
    }
    #Ke(wbIn6501: unknown, wbIn6502: unknown) {
      return getWorkbookOps().workbookPrivKe(
        this.#opsHost(),
        wbIn6501,
        wbIn6502,
      );
    }
    #qe(wbIn8587: unknown) {
      return getWorkbookOps().workbookPrivQe(this.#opsHost(), wbIn8587);
    }
    #Je(wbIn5222: unknown) {
      return getWorkbookOps().workbookPrivJe(this.#opsHost(), wbIn5222);
    }
    #Ye(wbIn11820: unknown, wbIn11821: unknown) {
      return getWorkbookOps().workbookPrivYe(
        this.#opsHost(),
        wbIn11820,
        wbIn11821,
      );
    }
    #Xe(wbIn13027: unknown, wbIn13028: unknown, wbIn13029: unknown) {
      return getWorkbookOps().workbookPrivXe(
        this.#opsHost(),
        wbIn13027,
        wbIn13028,
        wbIn13029,
      );
    }
    #Ze(
      wbIn496: unknown,
      wbIn497: unknown,
      wbIn498: unknown,
      wbIn499: unknown,
    ) {
      return getWorkbookOps().workbookPrivZe(
        this.#opsHost(),
        wbIn496,
        wbIn497,
        wbIn498,
        wbIn499,
      );
    }
    #Qe(wbIn7690: unknown, wbIn7691: unknown) {
      return getWorkbookOps().workbookPrivQe(
        this.#opsHost(),
        wbIn7690,
        wbIn7691,
      );
    }
    #$e(wbIn13457, wbIn13458) {
      wbIn13458.dirty.add(wbIn13457);
      this.#et(wbIn13457, wbIn13458);
    }
    #et(wbIn5883: unknown, wbIn5884: unknown) {
      return getWorkbookOps().workbookPrivEt(
        this.#opsHost(),
        wbIn5883,
        wbIn5884,
      );
    }
    #tt(wbIn10175: unknown, wbIn10176: unknown, wbIn10177: unknown) {
      return getWorkbookOps().workbookPrivTt(
        this.#opsHost(),
        wbIn10175,
        wbIn10176,
        wbIn10177,
      );
    }
    #nt(wbIn8708: unknown, wbIn8709: unknown) {
      return getWorkbookOps().workbookPrivNt(
        this.#opsHost(),
        wbIn8708,
        wbIn8709,
      );
    }
    #rt(wbIn6239: unknown, wbIn6240: unknown) {
      return getWorkbookOps().workbookPrivRt(
        this.#opsHost(),
        wbIn6239,
        wbIn6240,
      );
    }
    #it(wbIn2378: unknown, wbIn2379: unknown) {
      return getWorkbookOps().workbookPrivIt(
        this.#opsHost(),
        wbIn2378,
        wbIn2379,
      );
    }
    #at(wbIn2260: unknown, wbIn2261: unknown) {
      return getWorkbookOps().workbookPrivAt(
        this.#opsHost(),
        wbIn2260,
        wbIn2261,
      );
    }
    #ot(wbIn4592: unknown, wbIn4593: unknown) {
      return getWorkbookOps().workbookPrivOt(
        this.#opsHost(),
        wbIn4592,
        wbIn4593,
      );
    }
    #st(
      wbIn973: unknown,
      wbIn974: unknown,
      wbIn975: unknown,
      wbIn976: unknown,
    ) {
      return getWorkbookOps().workbookPrivSt(
        this.#opsHost(),
        wbIn973,
        wbIn974,
        wbIn975,
        wbIn976,
      );
    }
    #ct(wbIn2730: unknown) {
      return getWorkbookOps().workbookPrivCt(this.#opsHost(), wbIn2730);
    }
    #lt(wbIn8049: unknown, wbIn8050: unknown) {
      return getWorkbookOps().workbookPrivLt(
        this.#opsHost(),
        wbIn8049,
        wbIn8050,
      );
    }
    #ut(wbIn8130: unknown, wbIn8131: unknown) {
      return getWorkbookOps().workbookPrivUt(
        this.#opsHost(),
        wbIn8130,
        wbIn8131,
      );
    }
    #dt(wbIn4379: unknown, wbIn4380: unknown) {
      return getWorkbookOps().workbookPrivDt(
        this.#opsHost(),
        wbIn4379,
        wbIn4380,
      );
    }
    #ft(
      wbIn3179: unknown,
      wbIn3180: unknown,
      wbIn3181: unknown,
      wbIn3182: unknown,
    ) {
      return getWorkbookOps().workbookPrivFt(
        this.#opsHost(),
        wbIn3179,
        wbIn3180,
        wbIn3181,
        wbIn3182,
      );
    }
    #pt(wbIn7271: unknown) {
      return getWorkbookOps().workbookPrivPt(this.#opsHost(), wbIn7271);
    }
    #mt(wbIn1164: unknown, wbIn1165: unknown, wbIn1166: unknown) {
      return getWorkbookOps().workbookPrivMt(
        this.#opsHost(),
        wbIn1164,
        wbIn1165,
        wbIn1166,
      );
    }
    #ht(
      wbIn2488: unknown,
      wbIn2489: unknown,
      wbIn2490: unknown,
      wbIn2491: unknown,
    ) {
      return getWorkbookOps().workbookPrivHt(
        this.#opsHost(),
        wbIn2488,
        wbIn2489,
        wbIn2490,
        wbIn2491,
      );
    }
    #gt(wbIn6315: unknown, wbIn6316: unknown) {
      return getWorkbookOps().workbookPrivGt(
        this.#opsHost(),
        wbIn6315,
        wbIn6316,
      );
    }
    #_t(wbIn6317: unknown, wbIn6318: unknown) {
      return getWorkbookOps().workbookPriv_t(
        this.#opsHost(),
        wbIn6317,
        wbIn6318,
      );
    }
    #vt(wbIn11943: unknown, wbIn11944: unknown, wbIn11945: unknown) {
      return getWorkbookOps().workbookPrivVt(
        this.#opsHost(),
        wbIn11943,
        wbIn11944,
        wbIn11945,
      );
    }
    #yt(wbIn11822) {
      return Math.round(wbIn11822 * 0x9184e72a000) / 0x9184e72a000;
    }
    #bt(event: unknown) {
      return getWorkbookOps().workbookPrivBt(this.#opsHost(), event);
    }
    #xt(wbIn12343) {
      let wbBind22394 = this.#j.clear(wbIn12343);
      wbBind22394 && this.#St(wbBind22394);
    }
    #St(wbIn4132: unknown) {
      return getWorkbookOps().workbookPrivSt(this.#opsHost(), wbIn4132);
    }
    #Ct(wbIn8320: unknown, wbIn8321: unknown, wbIn8322: unknown) {
      return getWorkbookOps().workbookPrivCt(
        this.#opsHost(),
        wbIn8320,
        wbIn8321,
        wbIn8322,
      );
    }
    #wt(wbIn2929: unknown, wbIn2930: unknown) {
      return getWorkbookOps().workbookPrivWt(
        this.#opsHost(),
        wbIn2929,
        wbIn2930,
      );
    }
    #Tt(
      wbIn4698: unknown,
      wbIn4699: unknown,
      wbIn4700: unknown,
      wbIn4701: unknown,
    ) {
      return getWorkbookOps().workbookPrivTt(
        this.#opsHost(),
        wbIn4698,
        wbIn4699,
        wbIn4700,
        wbIn4701,
      );
    }
    #Et(wbIn2291: unknown, wbIn2292: unknown) {
      return getWorkbookOps().workbookPrivEt(
        this.#opsHost(),
        wbIn2291,
        wbIn2292,
      );
    }
    #Dt(
      wbIn3592: unknown,
      wbIn3593: unknown,
      wbIn3594: unknown,
      wbIn3595: unknown,
    ) {
      return getWorkbookOps().workbookPrivDt(
        this.#opsHost(),
        wbIn3592,
        wbIn3593,
        wbIn3594,
        wbIn3595,
      );
    }
    #Ot() {
      return getWorkbookOps().workbookPrivOt(this.#opsHost());
    }
    #kt() {
      return getWorkbookOps().workbookPrivKt(this.#opsHost());
    }
    #At(wbIn12040: unknown) {
      return getWorkbookOps().workbookPrivAt(this.#opsHost(), wbIn12040);
    }
    #jt() {
      this.#Z || ((this.#J = true), this.#Mt());
    }
    #Mt() {
      return getWorkbookOps().workbookPrivMt(this.#opsHost());
    }
    #Nt() {
      return getWorkbookOps().workbookPrivNt(this.#opsHost());
    }
    #Pt() {
      return getWorkbookOps().workbookPrivPt(this.#opsHost());
    }
    #Ft(wbIn10737: unknown) {
      return getWorkbookOps().workbookPrivFt(this.#opsHost(), wbIn10737);
    }
    #It() {
      return (
        getWorkbookCoreEnv().os(getWorkbookCoreEnv().wbBind211(this.#N)).structs
          .length > 0
      );
    }
    #Lt(wbIn15483) {
      return getWorkbookCoreEnv().wbH832(wbIn15483);
    }
    #Rt(wbIn4993: unknown, wbIn4994: unknown) {
      return getWorkbookOps().workbookPrivRt(
        this.#opsHost(),
        wbIn4993,
        wbIn4994,
      );
    }
    #zt(wbIn10887: unknown) {
      return getWorkbookOps().workbookPrivZt(this.#opsHost(), wbIn10887);
    }
    #Bt(wbIn13905: unknown, wbIn13906: unknown, wbIn13907: unknown) {
      return getWorkbookOps().workbookPrivBt(
        this.#opsHost(),
        wbIn13905,
        wbIn13906,
        wbIn13907,
      );
    }
    #Vt(wbIn13199: unknown, wbIn13200: unknown, wbIn13201: unknown) {
      return getWorkbookOps().workbookPrivVt(
        this.#opsHost(),
        wbIn13199,
        wbIn13200,
        wbIn13201,
      );
    }
    #Ht(wbIn14770, wbIn14771) {
      this.#dt(wbIn14770, getWorkbookCoreEnv().wbH1035(wbIn14771));
    }
    #Ut(wbIn10504: unknown) {
      return getWorkbookOps().workbookPrivUt(this.#opsHost(), wbIn10504);
    }
    #Wt(wbIn10475: unknown) {
      return getWorkbookOps().workbookPrivWt(this.#opsHost(), wbIn10475);
    }
    #Gt() {
      return getWorkbookOps().workbookPrivGt(this.#opsHost());
    }
    #Kt() {
      return getWorkbookOps().workbookPrivKt(this.#opsHost());
    }
    #qt() {
      for (let wbBind22765 of this.#g)
        wbBind22765.__refreshSparklineRenderContext();
    }
    #Jt() {
      for (let wbBind22955 of this.#m.items) wbBind22955.rebuildCache();
      this.#h.synthesizeCaches();
    }
    #Yt(wbIn4985: unknown, wbIn4986: unknown) {
      return getWorkbookOps().workbookPrivYt(
        this.#opsHost(),
        wbIn4985,
        wbIn4986,
      );
    }
    #Xt(wbIn2726: unknown, wbIn2727: boolean = true) {
      return getWorkbookOps().workbookPrivXt(
        this.#opsHost(),
        wbIn2726,
        wbIn2727,
      );
    }
    #Zt(wbIn641: unknown) {
      return getWorkbookOps().workbookPrivZt(this.#opsHost(), wbIn641);
    }
    #Qt(wbIn5142: unknown) {
      return getWorkbookOps().workbookPrivQt(this.#opsHost(), wbIn5142);
    }
    #$t(wbIn7249: unknown) {
      return getWorkbookOps().workbookPriv$t(this.#opsHost(), wbIn7249);
    }
    #en(wbIn6518: unknown) {
      return getWorkbookOps().workbookPrivEn(this.#opsHost(), wbIn6518);
    }
    #tn(wbIn4357: unknown) {
      return getWorkbookOps().workbookPrivTn(this.#opsHost(), wbIn4357);
    }
    #nn(wbIn11307: unknown) {
      return getWorkbookOps().workbookPrivNn(this.#opsHost(), wbIn11307);
    }
    #rn(wbIn4460: unknown) {
      return getWorkbookOps().workbookPrivRn(this.#opsHost(), wbIn4460);
    }
    #in(wbIn7220: unknown) {
      return getWorkbookOps().workbookPrivIn(this.#opsHost(), wbIn7220);
    }
    __formatRawValueForDisplay(event: unknown) {
      return getWorkbookOps().workbookOp__formatRawValueForDisplay(
        this.#opsHost(),
        event,
      );
    }
    #an(wbIn10254: unknown, wbIn10255: unknown) {
      return getWorkbookOps().workbookPrivAn(
        this.#opsHost(),
        wbIn10254,
        wbIn10255,
      );
    }
    #on(wbIn11557: unknown) {
      return getWorkbookOps().workbookPrivOn(this.#opsHost(), wbIn11557);
    }
    #sn(wbIn9838: unknown) {
      return getWorkbookOps().workbookPrivSn(this.#opsHost(), wbIn9838);
    }
    #cn(wbIn10202) {
      if (!wbIn10202) return false;
      let wbBind20660 = wbIn10202.toUpperCase();
      return DATE_FORMULA_NAMES.some((item) =>
        wbBind20660.includes(`${item}(`),
      );
    }
    #ln(wbIn6963: unknown) {
      return getWorkbookOps().workbookPrivLn(this.#opsHost(), wbIn6963);
    }
    #un(wbIn3596: unknown, wbIn3597: unknown) {
      return getWorkbookOps().workbookPrivUn(
        this.#opsHost(),
        wbIn3596,
        wbIn3597,
      );
    }
    #dn(wbIn9451: unknown, wbIn9452: unknown, wbIn9453: unknown) {
      return getWorkbookOps().workbookPrivDn(
        this.#opsHost(),
        wbIn9451,
        wbIn9452,
        wbIn9453,
      );
    }
    #opsHost(): WorkbookOpsHost {
      const workbookSelf = this;
      return {
        wb: workbookSelf,
        p: {
          get field_e() {
            return workbookSelf.#e;
          },
          set field_e(value: any) {
            workbookSelf.#e = value;
          },
          get field_t() {
            return workbookSelf.#t;
          },
          set field_t(value: any) {
            workbookSelf.#t = value;
          },
          get field_n() {
            return workbookSelf.#n;
          },
          set field_n(value: any) {
            workbookSelf.#n = value;
          },
          get field_r() {
            return workbookSelf.#r;
          },
          set field_r(value: any) {
            workbookSelf.#r = value;
          },
          get field_i() {
            return workbookSelf.#i;
          },
          set field_i(value: any) {
            workbookSelf.#i = value;
          },
          get field_a() {
            return workbookSelf.#a;
          },
          set field_a(value: any) {
            workbookSelf.#a = value;
          },
          get field_o() {
            return workbookSelf.#o;
          },
          set field_o(value: any) {
            workbookSelf.#o = value;
          },
          get field_s() {
            return workbookSelf.#s;
          },
          set field_s(value: any) {
            workbookSelf.#s = value;
          },
          get field_c() {
            return workbookSelf.#c;
          },
          set field_c(value: any) {
            workbookSelf.#c = value;
          },
          get field_l() {
            return workbookSelf.#l;
          },
          set field_l(value: any) {
            workbookSelf.#l = value;
          },
          get field_u() {
            return workbookSelf.#u;
          },
          set field_u(value: any) {
            workbookSelf.#u = value;
          },
          get field_d() {
            return workbookSelf.#d;
          },
          set field_d(value: any) {
            workbookSelf.#d = value;
          },
          get field_f() {
            return workbookSelf.#f;
          },
          set field_f(value: any) {
            workbookSelf.#f = value;
          },
          get field_p() {
            return workbookSelf.#p;
          },
          set field_p(value: any) {
            workbookSelf.#p = value;
          },
          get field_m() {
            return workbookSelf.#m;
          },
          set field_m(value: any) {
            workbookSelf.#m = value;
          },
          get field_h() {
            return workbookSelf.#h;
          },
          set field_h(value: any) {
            workbookSelf.#h = value;
          },
          get field_g() {
            return workbookSelf.#g;
          },
          set field_g(value: any) {
            workbookSelf.#g = value;
          },
          get field__() {
            return workbookSelf.#_;
          },
          set field__(value: any) {
            workbookSelf.#_ = value;
          },
          get field_v() {
            return workbookSelf.#v;
          },
          set field_v(value: any) {
            workbookSelf.#v = value;
          },
          get field_y() {
            return workbookSelf.#y;
          },
          set field_y(value: any) {
            workbookSelf.#y = value;
          },
          get field_b() {
            return workbookSelf.#b;
          },
          set field_b(value: any) {
            workbookSelf.#b = value;
          },
          get field_x() {
            return workbookSelf.#x;
          },
          set field_x(value: any) {
            workbookSelf.#x = value;
          },
          get field_S() {
            return workbookSelf.#S;
          },
          set field_S(value: any) {
            workbookSelf.#S = value;
          },
          get field_C() {
            return workbookSelf.#C;
          },
          set field_C(value: any) {
            workbookSelf.#C = value;
          },
          get field_w() {
            return workbookSelf.#w;
          },
          set field_w(value: any) {
            workbookSelf.#w = value;
          },
          get field_T() {
            return workbookSelf.#T;
          },
          set field_T(value: any) {
            workbookSelf.#T = value;
          },
          get field_E() {
            return workbookSelf.#E;
          },
          set field_E(value: any) {
            workbookSelf.#E = value;
          },
          get field_D() {
            return workbookSelf.#D;
          },
          set field_D(value: any) {
            workbookSelf.#D = value;
          },
          get field_O() {
            return workbookSelf.#O;
          },
          set field_O(value: any) {
            workbookSelf.#O = value;
          },
          get field_k() {
            return workbookSelf.#k;
          },
          set field_k(value: any) {
            workbookSelf.#k = value;
          },
          get field_A() {
            return workbookSelf.#A;
          },
          set field_A(value: any) {
            workbookSelf.#A = value;
          },
          get field_j() {
            return workbookSelf.#j;
          },
          set field_j(value: any) {
            workbookSelf.#j = value;
          },
          get field_M() {
            return workbookSelf.#M;
          },
          set field_M(value: any) {
            workbookSelf.#M = value;
          },
          get field_N() {
            return workbookSelf.#N;
          },
          set field_N(value: any) {
            workbookSelf.#N = value;
          },
          get field_P() {
            return workbookSelf.#P;
          },
          set field_P(value: any) {
            workbookSelf.#P = value;
          },
          get field_F() {
            return workbookSelf.#F;
          },
          set field_F(value: any) {
            workbookSelf.#F = value;
          },
          get field_I() {
            return workbookSelf.#I;
          },
          set field_I(value: any) {
            workbookSelf.#I = value;
          },
          get field_L() {
            return workbookSelf.#L;
          },
          set field_L(value: any) {
            workbookSelf.#L = value;
          },
          get field_R() {
            return workbookSelf.#R;
          },
          set field_R(value: any) {
            workbookSelf.#R = value;
          },
          get field_z() {
            return workbookSelf.#z;
          },
          set field_z(value: any) {
            workbookSelf.#z = value;
          },
          get field_B() {
            return workbookSelf.#B;
          },
          set field_B(value: any) {
            workbookSelf.#B = value;
          },
          get field_V() {
            return workbookSelf.#V;
          },
          set field_V(value: any) {
            workbookSelf.#V = value;
          },
          get field_H() {
            return workbookSelf.#H;
          },
          set field_H(value: any) {
            workbookSelf.#H = value;
          },
          get field_U() {
            return workbookSelf.#U;
          },
          set field_U(value: any) {
            workbookSelf.#U = value;
          },
          get field_W() {
            return workbookSelf.#W;
          },
          set field_W(value: any) {
            workbookSelf.#W = value;
          },
          get field_G() {
            return workbookSelf.#G;
          },
          set field_G(value: any) {
            workbookSelf.#G = value;
          },
          get field_K() {
            return workbookSelf.#K;
          },
          set field_K(value: any) {
            workbookSelf.#K = value;
          },
          get field_q() {
            return workbookSelf.#q;
          },
          set field_q(value: any) {
            workbookSelf.#q = value;
          },
          get field_J() {
            return workbookSelf.#J;
          },
          set field_J(value: any) {
            workbookSelf.#J = value;
          },
          get field_Y() {
            return workbookSelf.#Y;
          },
          set field_Y(value: any) {
            workbookSelf.#Y = value;
          },
          get field_X() {
            return workbookSelf.#X;
          },
          set field_X(value: any) {
            workbookSelf.#X = value;
          },
          get field_Z() {
            return workbookSelf.#Z;
          },
          set field_Z(value: any) {
            workbookSelf.#Z = value;
          },
          get field_Q() {
            return workbookSelf.#Q;
          },
          set field_Q(value: any) {
            workbookSelf.#Q = value;
          },
        },
        m: {
          $: (...args: any[]) => workbookSelf.#$(...args),
          ee: (...args: any[]) => workbookSelf.#ee(...args),
          te: (...args: any[]) => workbookSelf.#te(...args),
          ne: (...args: any[]) => workbookSelf.#ne(...args),
          re: (...args: any[]) => workbookSelf.#re(...args),
          ie: (...args: any[]) => workbookSelf.#ie(...args),
          ae: (...args: any[]) => workbookSelf.#ae(...args),
          oe: (...args: any[]) => workbookSelf.#oe(...args),
          se: (...args: any[]) => workbookSelf.#se(...args),
          ce: (...args: any[]) => workbookSelf.#ce(...args),
          le: (...args: any[]) => workbookSelf.#le(...args),
          ue: (...args: any[]) => workbookSelf.#ue(...args),
          de: (...args: any[]) => workbookSelf.#de(...args),
          fe: (...args: any[]) => workbookSelf.#fe(...args),
          pe: (...args: any[]) => workbookSelf.#pe(...args),
          me: (...args: any[]) => workbookSelf.#me(...args),
          he: (...args: any[]) => workbookSelf.#he(...args),
          ge: (...args: any[]) => workbookSelf.#ge(...args),
          _e: (...args: any[]) => workbookSelf.#_e(...args),
          ve: (...args: any[]) => workbookSelf.#ve(...args),
          ye: (...args: any[]) => workbookSelf.#ye(...args),
          be: (...args: any[]) => workbookSelf.#be(...args),
          xe: (...args: any[]) => workbookSelf.#xe(...args),
          Se: (...args: any[]) => workbookSelf.#Se(...args),
          Ce: (...args: any[]) => workbookSelf.#Ce(...args),
          we: (...args: any[]) => workbookSelf.#we(...args),
          Te: (...args: any[]) => workbookSelf.#Te(...args),
          Ee: (...args: any[]) => workbookSelf.#Ee(...args),
          De: (...args: any[]) => workbookSelf.#De(...args),
          Oe: (...args: any[]) => workbookSelf.#Oe(...args),
          ke: (...args: any[]) => workbookSelf.#ke(...args),
          Ae: (...args: any[]) => workbookSelf.#Ae(...args),
          je: (...args: any[]) => workbookSelf.#je(...args),
          Me: (...args: any[]) => workbookSelf.#Me(...args),
          Ne: (...args: any[]) => workbookSelf.#Ne(...args),
          Pe: (...args: any[]) => workbookSelf.#Pe(...args),
          Fe: (...args: any[]) => workbookSelf.#Fe(...args),
          Ie: (...args: any[]) => workbookSelf.#Ie(...args),
          Le: (...args: any[]) => workbookSelf.#Le(...args),
          Re: (...args: any[]) => workbookSelf.#Re(...args),
          ze: (...args: any[]) => workbookSelf.#ze(...args),
          Be: (...args: any[]) => workbookSelf.#Be(...args),
          Ve: (...args: any[]) => workbookSelf.#Ve(...args),
          He: (...args: any[]) => workbookSelf.#He(...args),
          Ue: (...args: any[]) => workbookSelf.#Ue(...args),
          We: (...args: any[]) => workbookSelf.#We(...args),
          Ge: (...args: any[]) => workbookSelf.#Ge(...args),
          Ke: (...args: any[]) => workbookSelf.#Ke(...args),
          qe: (...args: any[]) => workbookSelf.#qe(...args),
          Je: (...args: any[]) => workbookSelf.#Je(...args),
          Ye: (...args: any[]) => workbookSelf.#Ye(...args),
          Xe: (...args: any[]) => workbookSelf.#Xe(...args),
          Ze: (...args: any[]) => workbookSelf.#Ze(...args),
          Qe: (...args: any[]) => workbookSelf.#Qe(...args),
          $e: (...args: any[]) => workbookSelf.#$e(...args),
          et: (...args: any[]) => workbookSelf.#et(...args),
          tt: (...args: any[]) => workbookSelf.#tt(...args),
          nt: (...args: any[]) => workbookSelf.#nt(...args),
          rt: (...args: any[]) => workbookSelf.#rt(...args),
          it: (...args: any[]) => workbookSelf.#it(...args),
          at: (...args: any[]) => workbookSelf.#at(...args),
          ot: (...args: any[]) => workbookSelf.#ot(...args),
          st: (...args: any[]) => workbookSelf.#st(...args),
          ct: (...args: any[]) => workbookSelf.#ct(...args),
          lt: (...args: any[]) => workbookSelf.#lt(...args),
          ut: (...args: any[]) => workbookSelf.#ut(...args),
          dt: (...args: any[]) => workbookSelf.#dt(...args),
          ft: (...args: any[]) => workbookSelf.#ft(...args),
          pt: (...args: any[]) => workbookSelf.#pt(...args),
          mt: (...args: any[]) => workbookSelf.#mt(...args),
          ht: (...args: any[]) => workbookSelf.#ht(...args),
          gt: (...args: any[]) => workbookSelf.#gt(...args),
          _t: (...args: any[]) => workbookSelf.#_t(...args),
          vt: (...args: any[]) => workbookSelf.#vt(...args),
          yt: (...args: any[]) => workbookSelf.#yt(...args),
          bt: (...args: any[]) => workbookSelf.#bt(...args),
          xt: (...args: any[]) => workbookSelf.#xt(...args),
          St: (...args: any[]) => workbookSelf.#St(...args),
          Ct: (...args: any[]) => workbookSelf.#Ct(...args),
          wt: (...args: any[]) => workbookSelf.#wt(...args),
          Tt: (...args: any[]) => workbookSelf.#Tt(...args),
          Et: (...args: any[]) => workbookSelf.#Et(...args),
          Dt: (...args: any[]) => workbookSelf.#Dt(...args),
          Ot: (...args: any[]) => workbookSelf.#Ot(...args),
          kt: (...args: any[]) => workbookSelf.#kt(...args),
          At: (...args: any[]) => workbookSelf.#At(...args),
          jt: (...args: any[]) => workbookSelf.#jt(...args),
          Mt: (...args: any[]) => workbookSelf.#Mt(...args),
          Nt: (...args: any[]) => workbookSelf.#Nt(...args),
          Pt: (...args: any[]) => workbookSelf.#Pt(...args),
          Ft: (...args: any[]) => workbookSelf.#Ft(...args),
          It: (...args: any[]) => workbookSelf.#It(...args),
          Lt: (...args: any[]) => workbookSelf.#Lt(...args),
          Rt: (...args: any[]) => workbookSelf.#Rt(...args),
          zt: (...args: any[]) => workbookSelf.#zt(...args),
          Bt: (...args: any[]) => workbookSelf.#Bt(...args),
          Vt: (...args: any[]) => workbookSelf.#Vt(...args),
          Ht: (...args: any[]) => workbookSelf.#Ht(...args),
          Ut: (...args: any[]) => workbookSelf.#Ut(...args),
          Wt: (...args: any[]) => workbookSelf.#Wt(...args),
          Gt: (...args: any[]) => workbookSelf.#Gt(...args),
          Kt: (...args: any[]) => workbookSelf.#Kt(...args),
          qt: (...args: any[]) => workbookSelf.#qt(...args),
          Jt: (...args: any[]) => workbookSelf.#Jt(...args),
          Yt: (...args: any[]) => workbookSelf.#Yt(...args),
          Xt: (...args: any[]) => workbookSelf.#Xt(...args),
          Zt: (...args: any[]) => workbookSelf.#Zt(...args),
          Qt: (...args: any[]) => workbookSelf.#Qt(...args),
          $t: (...args: any[]) => workbookSelf.#$t(...args),
          en: (...args: any[]) => workbookSelf.#en(...args),
          tn: (...args: any[]) => workbookSelf.#tn(...args),
          nn: (...args: any[]) => workbookSelf.#nn(...args),
          rn: (...args: any[]) => workbookSelf.#rn(...args),
          in: (...args: any[]) => workbookSelf.#in(...args),
          an: (...args: any[]) => workbookSelf.#an(...args),
          on: (...args: any[]) => workbookSelf.#on(...args),
          sn: (...args: any[]) => workbookSelf.#sn(...args),
          cn: (...args: any[]) => workbookSelf.#cn(...args),
          ln: (...args: any[]) => workbookSelf.#ln(...args),
          un: (...args: any[]) => workbookSelf.#un(...args),
          dn: (...args: any[]) => workbookSelf.#dn(...args),
        },
      };
    }
  };
});

export function ensureWorkbookNInit(): void {
  WorkbookN();
}
