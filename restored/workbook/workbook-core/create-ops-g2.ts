// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-59: WorkbookN peeled ops group 2.

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

export function createWorkbookOpsG2(env: WorkbookCoreEnv) {
  const {
    Amt,
    Kpt,
    Q_t,
    Upt,
    WXe,
    jmt,
    nt,
    parseA1Range,
    tt,
    wmt,
    zt,
    workbookP,
  } = env;
  const dollarUnderscoreT = env["$_t"];
  const wbBind1987 = env["workbookBinding1987"];
  const wbBind1990 = env["workbookBinding1990"];
  const wbHlp1035 = env["workbookHel" + "per1035"];
  const wbHlp227 = env["workbookHel" + "per227"];
  const wbHlp328 = env["workbookHel" + "per328"];
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
  function workbookOpToHTML(
    host: WorkbookOpsHost,
    wbIn416: unknown,
    wbIn417: unknown,
    wbIn418: unknown,
  ) {
    let wbBind3867 = host.p.field_g.getSheetNameByIndex(wbIn416);
    if (!wbBind3867) throw Error(`Worksheet index ${wbIn416} not found`);
    host.wb.recalculate();
    let wbBind3868 = host.wb.toProto(),
      wbBind3869 = wbBind3868.sheets[wbIn416];
    if (!wbBind3869) throw Error(`Worksheet index ${wbIn416} not found`);
    let wbBind3870 = wbHlp227(wbBind3868),
      wbBind3871 = (() => {
        let wbBind5056 = wbIn417?.trim();
        if (wbBind5056) {
          let wbBind8692 = wbBind5056.startsWith("=")
              ? wbBind5056.slice(1)
              : wbBind5056,
            wbBind8693 = wbBind8692.lastIndexOf("!"),
            wbBind8694 =
              wbBind8693 === -1 ? wbBind8692 : wbBind8692.slice(wbBind8693 + 1);
          if (wbBind8693 >= 0) {
            let wbBind14483 = wbBind8692.slice(0, wbBind8693),
              wbBind14484 = (
                wbBind14483.startsWith("'") && wbBind14483.endsWith("'")
                  ? wbBind14483.slice(1, -1).replace(/''/g, "'")
                  : wbBind14483
              ).trim();
            if (wbBind14484 && wbBind14484 !== wbBind3867)
              throw Error(
                `Range sheet "${wbBind14484}" does not match "${wbBind3867}"`,
              );
          }
          let wbBind8695 = parseA1Range(wbBind8694);
          if (!wbBind8695) throw Error(`Invalid range "${wbIn417}"`);
          return {
            r1: wbBind8695.bounds.startRow,
            c1: wbBind8695.bounds.startCol,
            r2: wbBind8695.bounds.endRow,
            c2: wbBind8695.bounds.endCol,
          };
        }
        let wbBind5057 = 1 / 0,
          wbBind5058 = 1 / 0,
          wbBind5059 = -1,
          wbBind5060 = -1,
          wbBind5061 = (wbIn8356, wbIn8357) => {
            wbBind5057 = Math.min(wbBind5057, wbIn8356);
            wbBind5058 = Math.min(wbBind5058, wbIn8357);
            wbBind5059 = Math.max(wbBind5059, wbIn8356);
            wbBind5060 = Math.max(wbBind5060, wbIn8357);
          };
        for (let wbBind18823 of wbBind3869.rows ?? [])
          for (let wbBind20158 of wbBind18823.cells ?? []) {
            let wbBind21047 = wbBind20158.address
              ? host.m.Lt(wbBind20158.address)
              : null;
            wbBind21047 && wbBind5061(wbBind21047.row, wbBind21047.col);
          }
        for (let wbBind17496 of wbBind3869.mergedCells ?? []) {
          let wbBind18479 =
              wbBind17496.startAddress && host.m.Lt(wbBind17496.startAddress),
            wbBind18480 =
              wbBind17496.endAddress && host.m.Lt(wbBind17496.endAddress);
          wbBind18479 && wbBind5061(wbBind18479.row, wbBind18479.col);
          wbBind18480 && wbBind5061(wbBind18480.row, wbBind18480.col);
        }
        return wbBind5059 >= 0 && wbBind5060 >= 0
          ? {
              r1: wbBind5057,
              c1: wbBind5058,
              r2: wbBind5059,
              c2: wbBind5060,
            }
          : {
              r1: 0,
              c1: 0,
              r2: 0,
              c2: 0,
            };
      })(),
      { rows, merges } = Upt({
        selectionRect: wbBind3871,
        selRow: wbBind3871.r1,
        selCol: wbBind3871.c1,
        sheet: wbBind3869,
        styleInfos: wbBind3870,
      });
    if (wbIn418?.formulas)
      for (
        let wbBind14856 = wbBind3871.r1;
        wbBind14856 <= wbBind3871.r2;
        wbBind14856 += 1
      ) {
        let wbBind15623 = rows[wbBind14856 - wbBind3871.r1];
        if (wbBind15623)
          for (
            let wbBind17785 = wbBind3871.c1;
            wbBind17785 <= wbBind3871.c2;
            wbBind17785 += 1
          ) {
            let wbBind18882 = host.wb.__getDisplayFormulaForCell(
              wbBind3867,
              wbBind14856,
              wbBind17785,
            );
            if (!wbBind18882) continue;
            let wbBind18883 = wbBind15623[wbBind17785 - wbBind3871.c1];
            wbBind18883 && (wbBind18883.v = wbBind18882);
          }
      }
    return Kpt(rows, merges);
  }
  function workbookOpFromHTML(
    host: WorkbookOpsHost,
    wbIn8498: unknown,
    wbIn8499: unknown,
    wbIn8500: unknown,
    wbIn8501: unknown,
  ) {
    return wmt({
      workbook: host.wb,
      sheetIndex: wbIn8498,
      html: wbIn8499,
      target: wbIn8500,
      options: wbIn8501,
    });
  }
  function workbookOpChartToImage(
    host: WorkbookOpsHost,
    wbIn11443: unknown,
    wbIn11444: unknown,
  ) {
    return Amt({
      workbook: host.wb,
      sheetIndex: wbIn11443,
      chartId: wbIn11444,
    });
  }
  function workbookOpFromImage(
    host: WorkbookOpsHost,
    wbIn8397: unknown,
    wbIn8398: unknown,
    wbIn8399: unknown,
    wbIn8400: unknown,
  ) {
    return jmt({
      workbook: host.wb,
      sheetIndex: wbIn8397,
      source: wbIn8398,
      target: wbIn8399,
      options: wbIn8400,
    });
  }
  function workbookOp__handleCellFormulaChanged(
    host: WorkbookOpsHost,
    wbIn944: unknown,
    wbIn945: unknown,
    wbIn946: unknown,
  ) {
    let wbBind5977 = wbIn944.name;
    if (!wbBind5977) return;
    let wbBind5978 = wbIn945.trim().toUpperCase();
    if (!wbBind5978) return;
    host.wb.invalidateConditionalFormattingCache(wbBind5977);
    let wbBind5979 = host.m.ae(),
      wbBind5980 = wbBind1987(wbBind5977, wbBind5978),
      wbBind5981 = host.m.qe(wbIn946),
      wbBind5982 = host.m.Lt(wbBind5978),
      wbBind5983 = () => {
        wbBind5982 && host.m.tt(wbBind5977, wbBind5982, wbBind5979);
      };
    if (!wbBind5981) {
      host.m.nt(wbBind5980, wbBind5979);
      host.m.et(wbBind5980, wbBind5979);
      wbBind5979.formulaKinds.delete(wbBind5980);
      wbBind5983();
      return;
    }
    if (dollarUnderscoreT(wbBind5981)) {
      host.m.dn(wbBind5980, wbBind5981, wbBind5979);
      host.m.rt(wbBind5979.graph, wbBind5980);
      wbBind5979.parsed.delete(wbBind5980);
      wbBind5979.dirty.delete(wbBind5980);
      wbBind5979.formulaKinds.delete(wbBind5980);
      host.m.et(wbBind5980, wbBind5979);
      wbBind5983();
      return;
    }
    let wbBind5984 = wbHlp328(wbBind5981);
    if (wbBind5984.errors.length > 0) {
      host.m.Ht(wbBind5980, "#NAME?");
      host.m.ft(wbBind5980, wbHlp1035("#NAME?"), wbBind5979, {
        formulaText: wbBind5981,
        precedents: [],
      });
      host.m.rt(wbBind5979.graph, wbBind5980);
      wbBind5979.parsed.delete(wbBind5980);
      wbBind5979.dirty.delete(wbBind5980);
      wbBind5979.formulaKinds.delete(wbBind5980);
      host.m.et(wbBind5980, wbBind5979);
      wbBind5983();
      return;
    }
    wbBind5979.parsed.set(wbBind5980, wbBind5984);
    let wbBind5985 = host.m.Je(wbBind5977);
    WXe(
      wbBind5979.graph,
      wbBind5980,
      wbBind5984.expr,
      wbBind5985,
      host.m.le(wbBind5980) ?? undefined,
    );
    host.m.it([wbBind5980], wbBind5979);
    host.m.se(wbBind5979, wbBind5980, wbBind5984.expr);
    wbBind5983();
    host.m.$e(wbBind5980, wbBind5979);
  }
  function workbookOp__handleCellValueChanged(
    host: WorkbookOpsHost,
    wbIn5202: unknown,
    wbIn5203: unknown,
  ) {
    let wbBind14725 = wbIn5202.name;
    if (!wbBind14725) return;
    let wbBind14726 = wbIn5203.trim().toUpperCase();
    if (!wbBind14726) return;
    host.wb.invalidateConditionalFormattingCache(wbBind14725);
    let wbBind14727 = host.m.ae(),
      wbBind14728 = wbBind1987(wbBind14725, wbBind14726);
    host.m.et(wbBind14728, wbBind14727);
    let wbBind14729 = host.m.Lt(wbBind14726);
    wbBind14729 && host.m.tt(wbBind14725, wbBind14729, wbBind14727);
  }
  function workbookOp__getVolatileChain(
    host: WorkbookOpsHost,
    wbIn4029: unknown,
    wbIn4030: unknown,
  ) {
    let wbBind12971 = wbIn4029?.trim(),
      wbBind12972 = wbIn4030?.trim().toUpperCase();
    if (!wbBind12971 || !wbBind12972) return null;
    let wbBind12973 = host.m.ae(),
      wbBind12974 = wbBind1987(wbBind12971, wbBind12972),
      wbBind12975 = wbBind12973.volatility.get(wbBind12974);
    return !wbBind12975 ||
      !wbBind12975.hasVolatileChain ||
      wbBind12975.chain.length === 0
      ? null
      : wbBind12975.chain.map((item) => {
          let wbBind21554 = wbBind1990(item);
          return `${wbBind21554.sheetName}!${wbBind21554.address}`;
        });
  }
  function workbookPrivAe(host: WorkbookOpsHost) {
    return (
      (host.p.field_x ||= {
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
      }),
      host.p.field_x.initialized ||
        (host.m.oe(host.p.field_x), (host.p.field_x.initialized = true)),
      host.p.field_x
    );
  }
  function workbookPrivOe(host: WorkbookOpsHost, wbIn952: unknown) {
    host.p.field_S.clear();
    wbIn952.graph.precedents.clear();
    wbIn952.graph.dependents.clear();
    wbIn952.parsed.clear();
    wbIn952.dirty.clear();
    wbIn952.volatility.clear();
    wbIn952.evaluations.clear();
    wbIn952.formulaKinds.clear();
    for (let wbBind7421 of host.p.field_g) {
      let wbBind7554 = wbBind7421.name?.trim();
      if (wbBind7554)
        for (let wbBind8000 of wbBind7421.cells) {
          let wbBind8101 = host.m.qe(wbBind8000.formula);
          if (!wbBind8101) continue;
          let wbBind8102 = wbBind8000.address?.trim();
          if (!wbBind8102) continue;
          let wbBind8103 = wbBind1987(wbBind7554, wbBind8102);
          if (dollarUnderscoreT(wbBind8101)) {
            host.m.dn(wbBind8103, wbBind8101, wbIn952);
            wbIn952.formulaKinds.delete(wbBind8103);
            continue;
          }
          let wbBind8104 = wbHlp328(wbBind8101);
          if (
            (wbIn952.parsed.set(wbBind8103, wbBind8104),
            wbBind8104.errors.length > 0)
          ) {
            let wbBind15320 = wbHlp1035("#NAME?");
            host.m.dt(wbBind8103, wbBind15320);
            wbIn952.evaluations.set(wbBind8103, {
              value: wbBind15320,
              formula: wbBind8101,
              precedents: [],
            });
            wbIn952.formulaKinds.delete(wbBind8103);
            continue;
          }
          let wbBind8105 = host.m.Je(wbBind7554);
          WXe(
            wbIn952.graph,
            wbBind8103,
            wbBind8104.expr,
            wbBind8105,
            host.m.le(wbBind8103) ?? undefined,
          );
          wbIn952.dirty.add(wbBind8103);
          host.m.se(wbIn952, wbBind8103, wbBind8104.expr);
        }
    }
    host.m.it(wbIn952.parsed.keys(), wbIn952);
  }
  function workbookPrivSe(
    host: WorkbookOpsHost,
    wbIn10786: unknown,
    wbIn10787: unknown,
    wbIn10788: unknown,
  ) {
    let wbBind21320 = Q_t(wbIn10788);
    wbBind21320
      ? wbIn10786.formulaKinds.set(wbIn10787, wbBind21320)
      : wbIn10786.formulaKinds.delete(wbIn10787);
  }
  function workbookPrivCe(
    host: WorkbookOpsHost,
    wbIn5550: unknown,
    wbIn5551: unknown,
    wbIn5552: unknown,
  ) {
    let wbBind15349 = {
        sheet: {
          sheetName: wbIn5550.sheet?.sheetName ?? wbIn5551,
        },
        row: wbIn5550.row,
        col: wbIn5550.col,
        absRow: wbIn5550.absRow,
        absCol: wbIn5550.absCol,
      },
      wbBind15350 = host.m.Ye(
        wbBind15349,
        wbBind15349.sheet?.sheetName ?? wbIn5551,
      );
    return wbIn5552.formulaKinds.get(wbBind15350) ?? null;
  }
  function workbookPrivLe(host: WorkbookOpsHost, wbIn5141: unknown) {
    let { sheetName, address } = wbBind1990(wbIn5141);
    if (!sheetName || !address) return null;
    let wbBind14641 = host.m.Lt(address);
    return wbBind14641
      ? {
          sheet: {
            sheetName,
          },
          row: wbBind14641.row + 1,
          col: wbBind14641.col + 1,
          absRow: false,
          absCol: false,
        }
      : null;
  }
  function workbookPrivUe(host: WorkbookOpsHost, wbIn2838: unknown) {
    if (!wbIn2838) return null;
    let wbBind10604 = wbIn2838.trim();
    if (!wbBind10604) return null;
    let wbBind10605,
      wbBind10606,
      wbBind10607 = wbBind10604.indexOf("!");
    if (wbBind10607 >= 0) {
      wbBind10605 = wbBind10604.slice(0, wbBind10607).trim();
      wbBind10606 = wbBind10604.slice(wbBind10607 + 1).trim();
    } else {
      let wbBind18824;
      try {
        wbBind18824 = host.p.field_g.getActiveWorksheet();
      } catch {
        return null;
      }
      wbBind10605 = wbBind18824.name;
      wbBind10606 = wbBind10604;
    }
    let wbBind10608 = wbBind10605?.trim(),
      wbBind10609 = wbBind10606.trim().toUpperCase();
    return !wbBind10608 ||
      !wbBind10609 ||
      !host.m.zt(wbBind10608) ||
      !host.m.Lt(wbBind10609)
      ? null
      : {
          sheetName: wbBind10608,
          address: wbBind10609,
        };
  }
  function workbookPrivFe(host: WorkbookOpsHost, wbIn7633: unknown) {
    let wbBind18125 = wbIn7633?.trim();
    if (wbBind18125) {
      for (let wbBind20843 of host.p.field_g)
        if (wbBind20843.name?.trim() === wbBind18125)
          return (
            (host.p.field_A[wbBind20843.index] = wbBind20843.name ?? ""),
            wbBind20843.index
          );
    }
  }
  function workbookPrivMe(
    host: WorkbookOpsHost,
    wbIn1936: unknown,
    wbIn1937: unknown,
    wbIn1938: unknown,
    wbIn1939: unknown,
    wbIn1940: unknown,
    wbIn1941: unknown,
  ) {
    let wbBind8670 = host.p.field_w.normalizeName(wbIn1936);
    if (!wbBind8670) return null;
    for (
      let wbBind15975 = wbIn1939.length - 1;
      wbBind15975 >= 0;
      --wbBind15975
    ) {
      let wbBind16941 = wbIn1939[wbBind15975];
      if (wbBind16941 && wbBind16941.has(wbBind8670)) {
        let wbBind18907 = wbBind16941.get(wbBind8670);
        return wbIn1937 === "range"
          ? Array.isArray(wbBind18907)
            ? wbBind18907
            : null
          : host.m.ve(wbBind18907);
      }
    }
    let wbBind8671 = host.p.field_w.lookup(
      wbBind8670,
      wbIn1941 ?? wbIn1938.currentSheet,
    );
    if (!wbBind8671) return host.m.he(wbBind8670, wbIn1938, wbIn1941);
    if (wbBind8671.isLambda && wbIn1937 === "scalar") {
      let wbBind17719 = host.p.field_w.parseEntry(wbBind8671);
      return !wbBind17719 ||
        wbBind17719.errors.length > 0 ||
        wbBind17719.expr.kind !== "FunctionCall"
        ? wbHlp1035("#NAME?")
        : host.m.Re(
            wbBind17719.expr,
            wbBind8671.scopeSheet ?? wbIn1938.currentSheet,
            wbIn1938,
            wbIn1939,
          );
    }
    return wbIn1937 === "range"
      ? host.m._e(wbBind8671, wbIn1938, wbIn1939, wbIn1940)
      : host.m.ge(wbBind8671, wbIn1938, wbIn1940);
  }
  function workbookPrivHe(
    host: WorkbookOpsHost,
    wbIn5104: unknown,
    wbIn5105: unknown,
    wbIn5106: unknown,
  ) {
    let wbBind14593 = host.p.field_k.findTableByName(wbIn5104);
    return wbBind14593
      ? host.p.field_k.readValues(
          {
            tableName:
              wbBind14593.table.name ??
              wbBind14593.table.displayName ??
              wbIn5104,
            section: "All",
          },
          wbIn5105,
          wbIn5106 ?? wbIn5105.currentSheet ?? wbBind14593.sheetName,
        )
      : null;
  }
  function workbookPrivGe(
    host: WorkbookOpsHost,
    wbIn3659: unknown,
    wbIn3660: unknown,
    wbIn3661: unknown,
  ) {
    let wbBind12243 = host.p.field_w.parseEntry(wbIn3659);
    if (!wbBind12243 || wbBind12243.errors.length > 0)
      return wbHlp1035("#NAME?");
    let wbBind12244 = host.p.field_w.makeGuardKey(wbIn3659);
    if (wbIn3661.has(wbBind12244)) return wbHlp1035("#CIRC!");
    wbIn3661.add(wbBind12244);
    let wbBind12245 = wbIn3660.currentSheet;
    wbIn3659.scopeSheet && (wbIn3660.currentSheet = wbIn3659.scopeSheet);
    let wbBind12246;
    try {
      wbBind12246 = wbHlp38(wbBind12243.expr, wbIn3660);
    } finally {
      wbIn3659.scopeSheet && (wbIn3660.currentSheet = wbBind12245);
      wbIn3661.delete(wbBind12244);
    }
    return wbBind12246;
  }
  function workbookPriv_e(
    host: WorkbookOpsHost,
    wbIn3947: unknown,
    wbIn3948: unknown,
    wbIn3949: unknown,
    wbIn3950: unknown,
  ) {
    if (wbIn3947.isLambda) return [[wbHlp1035("#VALUE!")]];
    let wbBind12850 = host.p.field_w.parseEntry(wbIn3947);
    if (!wbBind12850 || wbBind12850.errors.length > 0)
      return [[wbHlp1035("#NAME?")]];
    let wbBind12851 =
      wbIn3947.scopeSheet ?? wbIn3948.currentSheet ?? host.p.field_A[0] ?? "";
    if (!wbBind12851) return [[wbHlp1035("#REF!")]];
    if (wbBind12850.expr.kind === "RangeRef")
      return host.m.He(
        wbBind12850.expr.ref,
        wbIn3948,
        wbBind12851,
        wbIn3949,
        wbIn3950,
      );
    let wbBind12852 = host.m.ge(wbIn3947, wbIn3948, wbIn3950);
    return (host.m.Ut(wbBind12852), [[wbBind12852]]);
  }
  function workbookPrivVe(host: WorkbookOpsHost, wbIn8866: unknown) {
    if (Array.isArray(wbIn8866)) {
      let wbBind21854 = wbIn8866[0];
      return !wbBind21854 || wbBind21854.length === 0
        ? ""
        : (wbBind21854[0] ?? "");
    }
    return wbIn8866 ?? null;
  }
  return {
    workbookOpToHTML,
    workbookOpFromHTML,
    workbookOpChartToImage,
    workbookOpFromImage,
    workbookOp__handleCellFormulaChanged,
    workbookOp__handleCellValueChanged,
    workbookOp__getVolatileChain,
    workbookPrivAe,
    workbookPrivOe,
    workbookPrivSe,
    workbookPrivCe,
    workbookPrivLe,
    workbookPrivUe,
    workbookPrivFe,
    workbookPrivMe,
    workbookPrivHe,
    workbookPrivGe,
    workbookPriv_e,
    workbookPrivVe,
  };
}
