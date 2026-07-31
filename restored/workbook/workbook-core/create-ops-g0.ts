// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-59: WorkbookN peeled ops group 0.

import type { WorkbookOpsHost } from "./types";
import type { WorkbookCoreEnv } from "./runtime-env";
import {
  featureBagCheckboxType,
  featureBagXfControlsType,
  featureBagXfComplementType,
  featureBagXfComplementsType,
  XF_COMPLEMENTS_MAPPER_EXT_REF,
  CELL_CONTROL,
  XF_CONTROLS,
  MAPPED_FEATURE_PROPERTY_BAGS,
  EXCEL_EPOCH_UTC_MS,
  MS_PER_DAY,
  MS_PER_MINUTE,
  EXCEL_CANONICAL_DATE,
  DATE_FORMULA_NAMES,
  ISO_DATE_TIME_RE,
  TRACE_ERROR_TOKEN,
  CIRC_ERROR_TOKEN,
} from "./constants";

export function createWorkbookOpsG0(env: WorkbookCoreEnv) {
  const {
    colIndexToLetters,
    Bae,
    Ft,
    Gft,
    Kht,
    Mgt,
    OXe,
    Ogt,
    PXe,
    RXe,
    Tpt,
    Uft,
    Wgt,
    Z,
    _o,
    _workbookU,
    cvt,
    d,
    is,
    kht,
    ovt,
    rpt,
    uvt,
    wXe,
    workbookR,
    zt,
    workbookP,
  } = env;
  const wbBind1995 = env["workbookBinding1995"];
  const wbBind676 = env["workbookBinding676"];
  const wbBind684 = env["workbookBinding684"];
  const wbHlp1035 = env["workbookHel" + "per1035"];
  const wbHlp222 = env["workbookHel" + "per222"];
  const wbHlp227 = env["workbookHel" + "per227"];
  const wbHlp228 = env["workbookHel" + "per228"];
  const wbHlp298 = env["workbookHel" + "per298"];
  const wbHlp312 = env["workbookHel" + "per312"];
  const wbHlp377 = env["workbookHel" + "per377"];
  const wbHlp38 = env["workbookHel" + "per38"];

  void featureBagCheckboxType;
  void featureBagXfControlsType;
  void featureBagXfComplementType;
  void featureBagXfComplementsType;
  void XF_COMPLEMENTS_MAPPER_EXT_REF;
  void CELL_CONTROL;
  void XF_CONTROLS;
  void MAPPED_FEATURE_PROPERTY_BAGS;
  void EXCEL_EPOCH_UTC_MS;
  void MS_PER_DAY;
  void MS_PER_MINUTE;
  void EXCEL_CANONICAL_DATE;
  void DATE_FORMULA_NAMES;
  void ISO_DATE_TIME_RE;
  void TRACE_ERROR_TOKEN;
  void CIRC_ERROR_TOKEN;
  function workbookConstruct(host: WorkbookOpsHost, wbIn190: unknown) {
    let wbBind3007 = cvt(wbIn190);
    host.p.field_t.addThemeFontScheme(wbIn190.theme?.fontScheme);
    host.p.field_c =
      wbBind3007.id && wbBind3007.id.length > 0 ? wbBind3007.id : wbHlp298();
    host.p.field_e = new Bae(wbIn190.styles, host.p.field_t);
    host.p.field_r = new PXe(wbBind3007.theme);
    host.p.field_o = wbBind3007.featurePropertyBags;
    host.p.field_s = wbBind3007.metadata;
    host.p.field_l = wbBind3007.contentReferences;
    host.p.field_u = wbBind3007.images;
    host.wb.comments = new _workbookU({
      people: wbBind3007.people,
      threads: wbBind3007.threads,
      recordOp: (wbIn4669) => {
        host.wb.queueWorkbookCollabPublish();
        (wbIn4669.op === "comments.self.set" ||
          wbIn4669.op === "thread.add" ||
          wbIn4669.op === "thread.reply" ||
          wbIn4669.op === "thread.resolve" ||
          wbIn4669.op === "thread.reopen" ||
          wbIn4669.op === "thread.remove") &&
          host.p.field_V?.record(wbIn4669);
      },
    });
    host.p.field_N = new _o();
    host.p.field_z = {};
    host.p.field_B = {};
    host.p.field_R = new is(host.p.field_N, {
      trackedOrigins: new Set([host.p.field_z]),
      captureTimeout: 0,
    });
    host.p.field_n = new Ogt({
      doc: host.p.field_N,
      isCollaborativeStateReady: () => host.p.field_Q,
      styleRegistry: host.p.field_e,
      runLocalTransaction: (wbIn15559) =>
        host.wb.runLocalCollabTransaction(wbIn15559),
    });
    host.p.field_d = wbBind3007.slicerCaches;
    host.p.field_f = wbBind3007.pivotCaches;
    host.p.field_p = wbBind3007.timelineCaches;
    host.p.field_v = {
      pivotCaches: host.p.field_f,
    };
    host.p.field_y = {
      slicerCaches: host.p.field_d,
    };
    host.p.field_b = {
      workbook: host.wb,
      fontFamilyCache: host.p.field_t,
      pivotTables: host.p.field_v,
      slicers: host.p.field_y,
      getOrCreateWorksheetState: (wbIn16452) => host.m.$(wbIn16452),
      getOrCreateWorksheetStyleRefsState: (wbIn16397) => host.m.ee(wbIn16397),
      getWorksheetByName: (wbIn15777) =>
        host.wb.__getWorksheetByName(wbIn15777),
      getWorksheetBySheetId: (wbIn15620) =>
        host.wb.__getWorksheetBySheetId(wbIn15620),
      onWorksheetCollectionChanged: () => host.m.jt(),
      notifyCellFormulaChanged: (wbIn13140, wbIn13141, wbIn13142) =>
        host.wb.__handleCellFormulaChanged(wbIn13140, wbIn13141, wbIn13142),
      notifyCellValueChanged: (wbIn13758, wbIn13759) =>
        host.wb.__handleCellValueChanged(wbIn13758, wbIn13759),
    };
    host.p.field_g = new wXe(wbBind3007.sheets, host.p.field_b);
    host.p.field_k = new rpt({
      worksheets: host.p.field_g,
      getWorksheetByName: (wbIn16398) => host.m.zt(wbIn16398),
      normalizeCellAddress: (wbIn16194, wbIn16195) =>
        host.m.Qe(wbIn16194, wbIn16195),
      makeError: (wbIn16622) => wbHlp1035(wbIn16622),
    });
    host.p.field_O = new Uft({
      structuredReferences: host.p.field_k,
      expandRange: (wbIn15883, wbIn15884, wbIn15885) =>
        host.m.Xe(wbIn15883, wbIn15884, wbIn15885),
      cellAddressIsBlank: (wbIn16196, wbIn16197) =>
        host.m.Et(wbIn16196, wbIn16197),
    });
    host.p.field_F = new Mgt({
      doc: host.p.field_N,
      runLocalTransaction: (wbIn15560) =>
        host.wb.runLocalCollabTransaction(wbIn15560),
      getCollabOrigins: () => host.wb.getCollabOrigins(),
    });
    host.p.field_F.onDidChange(() => {
      host.m.kt();
    });
    host.m.kt();
    let wbBind3008 = host.p.field_g.getSheetNameByIndex(0);
    host.wb.awareness = new Kht({
      activeSheetName: wbBind3008 ?? null,
    });
    host.p.field_m = new wbBind676({
      workbook: host.wb,
      context: host.p.field_v,
    });
    host.p.field_h = new wbBind684({
      workbook: host.wb,
      context: host.p.field_y,
    });
    host.p.field__ = new OXe(wbBind3007.notes, {}, () => {
      host.wb.queueWorkbookCollabPublish();
    });
    host.p.field_A = [];
    host.m.pe();
    host.p.field_w = new RXe({
      getSheetNameByLocalId: (wbIn16399) => host.m.de(wbIn16399),
      getLocalSheetIdByName: (wbIn16400) => host.m.fe(wbIn16400),
      getWorksheetByName: (wbIn15778) =>
        host.wb.__getWorksheetByName(wbIn15778),
      onChange: () => {
        host.m.Ue();
        host.wb.queueWorkbookCollabPublish();
      },
      recordOp: (wbIn13902) => {
        host.p.field_V?.record(wbIn13902);
      },
    });
    host.p.field_w.ingest(wbIn190.definedNames?.names ?? []);
    host.p.field_T = host.p.field_w.createApi();
    host.p.field_E = new Map();
    host.p.field_P = host.m.ne();
    host.p.field_D = new Map();
    host.p.field_S = new Map();
    host.p.field_C = new Set();
    host.p.field_j = new Gft();
    host.p.field_M = new Map();
    host.p.field_x = {
      graph: {
        precedents: new Map(),
        dependents: new Map(),
      },
      parsed: new Map(),
      dirty: new Set(),
      initialized: false,
      volatility: new Map(),
      evaluations: new Map(),
      formulaKinds: new Map(),
    };
    host.m.oe(host.p.field_x);
    host.p.field_x.initialized = true;
    host.p.field_m.hydrateLayouts();
    host.m.Gt();
    host.m.qt();
  }
  function workbookStaticCreate(WorkbookCtor: any) {
    return new WorkbookCtor({
      sheets: [],
      styles: undefined,
      theme: undefined,
      contentReferences: [],
      images: [],
      people: [],
      threads: [],
      notes: [],
      slicerCaches: [],
      pivotCaches: [],
      timelineCaches: [],
      textStyles: [],
      codeEnvironments: [],
      codeBlocks: [],
    });
  }
  function workbookStaticLoad(
    WorkbookCtor: any,
    wbIn8652: unknown,
    wbIn8653: unknown,
  ) {
    let wbBind19148 = uvt(wbIn8653);
    if (wbBind19148) {
      let wbBind22251 = Tpt(wbIn8652, wbBind19148);
      if (!wbBind22251.valid) throw new workbookR(wbBind22251);
    }
    return new WorkbookCtor(wbIn8652);
  }
  function workbookStaticFromMarkdown(
    WorkbookCtor: any,
    wbIn1703: unknown,
    wbIn1704: unknown,
  ) {
    let { buildTableValuesFromMarkdown, sanitizeSheetName } = await ovt(),
      wbBind8014 = buildTableValuesFromMarkdown(wbIn1703),
      wbBind8015 = wbIn1704?.format ?? true,
      wbBind8016 = WorkbookCtor.create(),
      wbBind8017 = wbBind8016.worksheets.add(
        sanitizeSheetName(wbIn1704?.sheetName),
      ),
      wbBind8018 = wbBind8014.reduce(
        (accumulator, current) => Math.max(accumulator, current.length),
        0,
      );
    if (wbBind8018 === 0) return wbBind8016;
    for (
      let wbBind15954 = 0;
      wbBind15954 < wbBind8014.length;
      wbBind15954 += 1
    ) {
      let wbBind16858 = (wbBind8014[wbBind15954] ?? []).slice();
      for (; wbBind16858.length < wbBind8018; ) wbBind16858.push("");
      let wbBind16859 = `${colIndexToLetters(0)}${wbBind15954 + 1}`,
        wbBind16860 = `${colIndexToLetters(wbBind8018 - 1)}${wbBind15954 + 1}`,
        wbBind16861 =
          wbBind8018 === 1 ? wbBind16859 : `${wbBind16859}:${wbBind16860}`;
      wbBind8017.getRange(wbBind16861).values = [wbBind16858];
    }
    if (wbBind8014.length > 0 && wbBind8018 > 0) {
      let wbBind17816 = `${colIndexToLetters(0)}1`,
        wbBind17817 = `${colIndexToLetters(wbBind8018 - 1)}${wbBind8014.length}`,
        wbBind17818 =
          wbBind8018 === 1 && wbBind8014.length === 1
            ? wbBind17816
            : `${wbBind17816}:${wbBind17817}`;
      wbBind8015 && wbBind8017.tables.add(wbBind17818, true);
      wbBind8017.getRange(wbBind17818).format.autofitColumns();
    }
    return wbBind8016;
  }
  function workbookStaticFromCSV(
    WorkbookCtor: any,
    wbIn4819: unknown,
    wbIn4820: unknown,
  ) {
    let { planCsvImport } = await wbBind1995(),
      wbBind14194 = planCsvImport(wbIn4819, wbIn4820),
      wbBind14195 = WorkbookCtor.create(),
      wbBind14196 = wbBind14195.worksheets.add(wbBind14194.sheetName);
    if (wbBind14194.values.length > 0 && wbBind14194.rangeRef) {
      let wbBind20659 = wbBind14194.rangeRef;
      wbBind14195.record(() => {
        wbBind14196.getRange(wbBind20659).values = wbBind14194.values;
      });
    }
    return wbBind14195;
  }
  function workbookOpFromCSV(
    host: WorkbookOpsHost,
    wbIn3359: unknown,
    wbIn3360: unknown,
  ) {
    let { planCsvImport } = await wbBind1995(),
      wbBind11680 = planCsvImport(wbIn3359, wbIn3360),
      wbBind11681 = host.wb.worksheets.getOrAdd(wbBind11680.sheetName, {
        renameFirstIfOnlyNewSpreadsheet: true,
      });
    if (wbBind11680.values.length > 0 && wbBind11680.rangeRef) {
      let wbBind17876 = wbBind11680.rangeRef;
      return (
        host.wb.record(() => {
          wbBind11681.getRange(wbBind17876).values = wbBind11680.values;
        }),
        {
          sheet: wbBind11681,
          range: wbBind11681.getRange(wbBind17876),
        }
      );
    }
    return {
      sheet: wbBind11681,
      range: null,
    };
  }
  function workbookOpGetSpreadsheetRenderAssets(host: WorkbookOpsHost) {
    let wbBind11820 = host.p.field_e.getRevision(),
      wbBind11821 = host.p.field_a;
    if (
      wbBind11821 &&
      wbBind11821.styleRevision === wbBind11820 &&
      wbBind11821.themeRevision === host.p.field_i
    )
      return wbBind11821;
    let wbBind11822 = host.wb.theme,
      wbBind11823 = wbHlp227({
        styles: host.p.field_e.toProto(),
        theme: wbBind11822,
      }),
      wbBind11824 = {
        styleInfos: wbBind11823,
        themeMap: wbHlp222(wbBind11822),
        defaultFontMaxDigitWidthPx: wbHlp228(wbBind11823),
        styleRevision: wbBind11820,
        themeRevision: host.p.field_i,
      };
    return ((host.p.field_a = wbBind11824), wbBind11824);
  }
  function workbookOpHydrateCrdtFromProto(host: WorkbookOpsHost) {
    host.m.Ft("hydrateCrdtFromProto");
    host.wb.runLocalCollabTransaction(() => {
      host.m.Pt();
      host.p.field_Q = true;
      host.m.Ot();
      host.p.field_n.hydrateFromStyleRegistry();
      for (let wbBind22737 of host.p.field_g)
        wbBind22737.hydrateCollaborativeRefsFromProto();
      host.m.Kt();
      host.p.field_P.activate();
      host.p.field_P.flushFromOwner();
      for (let wbBind22894 of host.p.field_g)
        wbBind22894.flushCollaborativeState();
    });
  }
  function workbookOpGetCollabOrigins(host: WorkbookOpsHost) {
    return {
      record: host.p.field_z,
      local: host.p.field_B,
    };
  }
  function workbookOpQueueWorksheetCollabPublish(
    host: WorkbookOpsHost,
    wbIn9786: unknown,
  ) {
    !host.p.field_Q ||
      host.p.field_Z ||
      (wbIn9786.length !== 0 && (host.p.field_Y.add(wbIn9786), host.m.Mt()));
  }
  function workbookOpBatchCellInputWrites(
    host: WorkbookOpsHost,
    wbIn5643: unknown,
  ) {
    let wbBind15516 = host.p.field_H ?? host.p.field_B;
    host.p.field_W += 1;
    try {
      let wbBind22201 = host.m.Rt(wbBind15516, wbIn5643);
      return ((host.p.field_G = true), wbBind22201);
    } finally {
      --host.p.field_W;
      host.p.field_W === 0 &&
        host.p.field_G &&
        ((host.p.field_G = false), host.wb.recalculate());
    }
  }
  function workbookOpGetConditionalFormattingRenderCache(
    host: WorkbookOpsHost,
    wbIn2311: unknown,
  ) {
    let wbBind9417 = wbIn2311?.trim();
    if (!wbBind9417) return null;
    let wbBind9418 = host.p.field_D.get(wbBind9417);
    if (wbBind9418) return wbBind9418;
    let wbBind9419 = host.m.zt(wbBind9417);
    if (!wbBind9419) return null;
    let wbBind9420 = wbHlp222(host.wb.theme),
      wbBind9421 = host.p.field_e.toProto().dxfs,
      wbBind9422 = host.m.ae(),
      wbBind9423 = host.m.st(wbBind9417, new Map(), wbBind9422),
      wbBind9424 = kht({
        sheetName: wbBind9417,
        conditionalFormattings: wbBind9419.__getConditionalFormattings(),
        dxfs: wbBind9421,
        themeMap: wbBind9420,
        getCell: (wbIn16108, wbIn16109) =>
          wbBind9419.__getCell(wbIn16108, wbIn16109),
        evaluateExpression: (wbIn11614, wbIn11615) => (
          (wbBind9423.activeCellAddress = wbIn11615),
          wbHlp38(wbIn11614, wbBind9423)
        ),
      });
    return (host.p.field_D.set(wbBind9417, wbBind9424), wbBind9424);
  }
  function workbookOpInvalidateConditionalFormattingCache(
    host: WorkbookOpsHost,
    wbIn8441: unknown,
  ) {
    if (!wbIn8441) {
      host.p.field_D.clear();
      return;
    }
    let wbBind18948 = wbIn8441.trim();
    wbBind18948 && host.p.field_D.delete(wbBind18948);
  }
  function workbookOp__getOrCreateCheckboxFeaturePropertyBagIndex(
    host: WorkbookOpsHost,
  ) {
    let wbBind9065 = host.p.field_o?.bags ?? [],
      wbBind9066 = wbBind9065.findIndex(
        (item) => item?.type === featureBagCheckboxType(),
      );
    if (wbBind9066 >= 0) return wbBind9066;
    let wbBind9067 = wbBind9065.slice(),
      wbBind9068 = wbBind9067.length,
      wbBind9069 = wbBind9068 + 1,
      wbBind9070 = wbBind9068 + 2;
    return (
      wbBind9067.push({
        type: featureBagCheckboxType(),
        properties: [],
      }),
      wbBind9067.push({
        type: featureBagXfControlsType(),
        properties: [
          {
            key: CELL_CONTROL,
            bagIdValue: wbBind9068,
          },
        ],
      }),
      wbBind9067.push({
        type: featureBagXfComplementType(),
        properties: [
          {
            key: XF_CONTROLS,
            bagIdValue: wbBind9069,
          },
        ],
      }),
      wbBind9067.push({
        type: featureBagXfComplementsType(),
        extRef: XF_COMPLEMENTS_MAPPER_EXT_REF,
        properties: [
          {
            key: MAPPED_FEATURE_PROPERTY_BAGS,
            arrayValue: {
              values: [
                {
                  bagIdValue: wbBind9070,
                },
              ],
            },
          },
        ],
      }),
      (host.p.field_o = {
        bags: wbBind9067,
      }),
      host.wb.queueWorkbookCollabPublish(),
      wbBind9068
    );
  }
  function workbookOp__resolveCheckboxStyleIndex(
    host: WorkbookOpsHost,
    wbIn8810: unknown,
  ) {
    let wbBind19365 = host.wb.__getOrCreateCheckboxFeaturePropertyBagIndex();
    return host.p.field_e.resolveFeaturePropertyBagStyleIndex(
      wbIn8810,
      wbBind19365,
    );
  }
  function workbookOp__removeCheckboxStyleIndex(
    host: WorkbookOpsHost,
    wbIn8968: unknown,
  ) {
    return host.wb.__isCheckboxStyleIndex(wbIn8968)
      ? host.p.field_e.resolveFeaturePropertyBagStyleIndex(wbIn8968, undefined)
      : wbIn8968;
  }
  function workbookOpCreateImageAsset(
    host: WorkbookOpsHost,
    wbIn3723: unknown,
  ) {
    let wbBind12392 = wbHlp312(wbIn3723);
    if (!wbBind12392.data && !wbBind12392.prompt && !wbBind12392.uri)
      throw Error("Image assets need data, a prompt, or a uri.");
    let wbBind12393 = {
      id: "id" in wbIn3723 && wbIn3723.id ? wbIn3723.id : wbHlp298(),
      contentType: wbBind12392.contentType ?? "",
      data: wbBind12392.data
        ? new Uint8Array(wbBind12392.data)
        : new Uint8Array(),
      prompt: wbBind12392.prompt,
      uri: wbBind12392.uri,
    };
    return (
      host.p.field_u.push(wbBind12393),
      host.wb.queueWorkbookCollabPublish(),
      wbBind12393
    );
  }
  function workbookPrivNe(host: WorkbookOpsHost) {
    return new Wgt({
      root: wbHlp377(host.p.field_N),
      runLocalTransaction: (wbIn15561) =>
        host.wb.runLocalCollabTransaction(wbIn15561),
      getCollabOrigins: () => host.wb.getCollabOrigins(),
      readTheme: () => host.wb.theme,
      applyTheme: (wbIn7434) => {
        host.p.field_r.replace(wbIn7434);
        host.p.field_i += 1;
        host.m.te();
        host.wb.invalidateConditionalFormattingCache();
        host.wb.queueWorkbookCollabPublish();
      },
      readFeaturePropertyBags: () => host.p.field_o,
      applyFeaturePropertyBags: (wbIn12001) => {
        host.p.field_o = wbIn12001;
        host.wb.queueWorkbookCollabPublish();
      },
      readDefinedNames: () => host.p.field_w.buildProto(),
      applyDefinedNames: (wbIn9109) => {
        host.p.field_w.replace(wbIn9109);
        host.p.field_E.clear();
        host.m.Ue();
        host.wb.queueWorkbookCollabPublish();
      },
      readImages: () => host.p.field_u,
      applyImages: (wbIn12002) => {
        host.p.field_u = wbIn12002;
        host.wb.queueWorkbookCollabPublish();
      },
      readComments: () => host.wb.comments.toProto(),
      applyComments: (wbIn10605) => {
        host.wb.comments.replaceFromProto(wbIn10605);
        host.wb.queueWorkbookCollabPublish();
      },
      readNotes: () => host.p.field__.proto,
      applyNotes: (wbIn11716) => {
        host.p.field__.replace(wbIn11716);
        host.wb.queueWorkbookCollabPublish();
      },
    });
  }
  return {
    workbookConstruct,
    workbookStaticCreate,
    workbookStaticLoad,
    workbookStaticFromMarkdown,
    workbookStaticFromCSV,
    workbookOpFromCSV,
    workbookOpGetSpreadsheetRenderAssets,
    workbookOpHydrateCrdtFromProto,
    workbookOpGetCollabOrigins,
    workbookOpQueueWorksheetCollabPublish,
    workbookOpBatchCellInputWrites,
    workbookOpGetConditionalFormattingRenderCache,
    workbookOpInvalidateConditionalFormattingCache,
    workbookOp__getOrCreateCheckboxFeaturePropertyBagIndex,
    workbookOp__resolveCheckboxStyleIndex,
    workbookOp__removeCheckboxStyleIndex,
    workbookOpCreateImageAsset,
    workbookPrivNe,
  };
}
