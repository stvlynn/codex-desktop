// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-59: WorkbookN peeled ops group 6.

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

export function createWorkbookOpsG6(env: WorkbookCoreEnv) {
  const { Qt, d, sn, workbookHelper1035: wbHlp1035 } = env;
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
  function workbookPrivXt(
    host: WorkbookOpsHost,
    wbIn2726: unknown,
    wbIn2727: boolean = true,
  ) {
    if (wbIn2726 == null) return null;
    if (wbIn2726 instanceof Date) return host.m.rn(wbIn2726) ?? "";
    if (host.m.Ut(wbIn2726)) return wbIn2726;
    if (wbIn2726 instanceof Error)
      return wbHlp1035(wbIn2726.message || "#VALUE!");
    if (typeof wbIn2726 == "number" || typeof wbIn2726 == "boolean")
      return wbIn2726;
    if (typeof wbIn2726 == "string") {
      if (wbIn2726.startsWith("#"))
        return {
          kind: "Error",
          code: wbIn2726,
        };
      if (wbIn2726 === "") return "";
      let wbBind15624 = wbIn2726.trim();
      if (wbBind15624 === "") return wbIn2726;
      if (wbIn2727) {
        let wbBind22040 = Number(wbBind15624);
        if (!Number.isNaN(wbBind22040)) return wbBind22040;
      }
      return wbIn2726;
    }
    return null;
  }
  function workbookPrivZt(host: WorkbookOpsHost, wbIn641: unknown) {
    let wbBind4758 =
      wbIn641.value !== undefined && wbIn641.value !== null
        ? wbIn641.value
        : null;
    if (wbBind4758 == null) return null;
    let wbBind4759 = wbIn641.dataType ?? d.CELL_DATA_TYPE_UNSPECIFIED,
      wbBind4760;
    switch (wbBind4759) {
      case d.CELL_DATA_TYPE_UNSPECIFIED:
        if (typeof wbBind4758 == "number" && Number.isFinite(wbBind4758))
          wbBind4760 = wbBind4758;
        else if (typeof wbBind4758 == "boolean") wbBind4760 = wbBind4758;
        else if (typeof wbBind4758 == "string") {
          if (wbBind4758 === "") {
            wbBind4760 = "";
            break;
          }
          let wbBind15402 = wbBind4758.trim();
          if (wbBind15402 === "") {
            wbBind4760 = wbBind4758;
            break;
          }
          let wbBind15403 = Number(wbBind15402);
          Number.isFinite(wbBind15403) && (wbBind4760 = wbBind15403);
        }
        break;
      case d.CELL_DATA_TYPE_DATE: {
        let wbBind19515 =
          host.m.tn(wbBind4758) ??
          (typeof wbBind4758 == "string" ? host.m.sn(wbBind4758) : null);
        if (wbBind19515) return host.m.nn(wbBind19515);
        break;
      }
      case d.CELL_DATA_TYPE_BOOLEAN: {
        let wbBind21533 = host.m.Qt(wbBind4758);
        if (wbBind21533 != null) return wbBind21533;
        break;
      }
      case d.CELL_DATA_TYPE_NUMBER: {
        let wbBind21608 = host.m.$t(wbBind4758);
        wbBind21608 != null && (wbBind4760 = wbBind21608);
        break;
      }
      case d.CELL_DATA_TYPE_ERROR: {
        let wbBind21777 = host.m.en(wbBind4758);
        if (wbBind21777) return wbBind21777;
        break;
      }
      case d.CELL_DATA_TYPE_STRING:
      case d.CELL_DATA_TYPE_SHARED_STRING:
        return typeof wbBind4758 == "string" ? wbBind4758 : String(wbBind4758);
      default:
        break;
    }
    if (host.m.cn(wbIn641.formula)) {
      let wbBind20809 =
        host.m.tn(wbBind4758) ??
        (typeof wbBind4758 == "string" ? host.m.sn(wbBind4758) : null);
      if (wbBind20809) return host.m.nn(wbBind20809);
    }
    if (wbBind4760 !== undefined) return wbBind4760;
    if (typeof wbBind4758 == "string") {
      let wbBind22308 = host.m.sn(wbBind4758);
      if (wbBind22308) return host.m.nn(wbBind22308);
    }
    return wbBind4758;
  }
  function workbookPrivQt(host: WorkbookOpsHost, wbIn5142: unknown) {
    if (typeof wbIn5142 == "boolean") return wbIn5142;
    if (typeof wbIn5142 == "number")
      return wbIn5142 === 1 ? true : wbIn5142 === 0 ? false : null;
    if (typeof wbIn5142 == "string") {
      let wbBind19803 = wbIn5142.trim().toUpperCase();
      if (wbBind19803 === "TRUE" || wbBind19803 === "1") return true;
      if (wbBind19803 === "FALSE" || wbBind19803 === "0") return false;
    }
    return null;
  }
  function workbookPriv$t(host: WorkbookOpsHost, wbIn7249: unknown) {
    if (typeof wbIn7249 == "number" && Number.isFinite(wbIn7249))
      return wbIn7249;
    if (typeof wbIn7249 == "string") {
      let wbBind22041 = Number(wbIn7249);
      return Number.isFinite(wbBind22041) ? wbBind22041 : null;
    }
    return null;
  }
  function workbookPrivEn(host: WorkbookOpsHost, wbIn6518: unknown) {
    return host.m.Ut(wbIn6518)
      ? wbIn6518
      : wbIn6518 instanceof Error
        ? {
            kind: "Error",
            code: wbIn6518.message,
          }
        : typeof wbIn6518 == "string" && wbIn6518.startsWith("#")
          ? {
              kind: "Error",
              code: wbIn6518,
            }
          : null;
  }
  function workbookPrivTn(host: WorkbookOpsHost, wbIn4357: unknown) {
    if (wbIn4357 instanceof Date) return wbIn4357;
    if (typeof wbIn4357 == "string") {
      let wbBind19728 = Number(wbIn4357);
      if (!Number.isFinite(wbBind19728)) return null;
      let wbBind19729 = EXCEL_EPOCH_UTC_MS + wbBind19728 * MS_PER_DAY;
      return host.m.in(new Date(wbBind19729));
    }
    let wbBind13492 = host.m.$t(wbIn4357);
    if (wbBind13492 == null || !Number.isFinite(wbBind13492)) return null;
    let wbBind13493 = EXCEL_EPOCH_UTC_MS + wbBind13492 * MS_PER_DAY;
    return host.m.in(new Date(wbBind13493));
  }
  function workbookPrivNn(host: WorkbookOpsHost, wbIn11307: unknown) {
    let wbBind21778 = host.m.rn(wbIn11307);
    return wbBind21778 == null
      ? wbIn11307
      : (host.m.tn(wbBind21778) ?? wbIn11307);
  }
  function workbookPrivRn(host: WorkbookOpsHost, wbIn4460: unknown) {
    if (!(wbIn4460 instanceof Date)) return null;
    let wbBind13696 = wbIn4460.getTime();
    if (!Number.isFinite(wbBind13696)) return null;
    let wbBind13697 = !!wbIn4460[EXCEL_CANONICAL_DATE],
      wbBind13698 =
        wbIn4460.getHours() === 0 &&
        wbIn4460.getMinutes() === 0 &&
        wbIn4460.getSeconds() === 0 &&
        wbIn4460.getMilliseconds() === 0;
    return (
      ((wbBind13697 || !wbBind13698
        ? wbBind13696
        : wbBind13696 - wbIn4460.getTimezoneOffset() * MS_PER_MINUTE) -
        EXCEL_EPOCH_UTC_MS) /
      MS_PER_DAY
    );
  }
  function workbookPrivIn(host: WorkbookOpsHost, wbIn7220: unknown) {
    return (
      wbIn7220[EXCEL_CANONICAL_DATE] ||
        Object.defineProperty(wbIn7220, EXCEL_CANONICAL_DATE, {
          value: true,
          enumerable: false,
          configurable: false,
        }),
      wbIn7220
    );
  }
  function workbookOp__formatRawValueForDisplay(
    host: WorkbookOpsHost,
    event: unknown,
  ) {
    return event == null
      ? {
          value: "",
          dataType: d.CELL_DATA_TYPE_UNSPECIFIED,
        }
      : host.m.Ut(event)
        ? {
            value: event.code,
            dataType: d.CELL_DATA_TYPE_ERROR,
          }
        : event instanceof Date
          ? {
              value: host.m.on(event),
              dataType: d.CELL_DATA_TYPE_NUMBER,
            }
          : typeof event == "number"
            ? {
                value: Number.isFinite(event) ? String(event) : "",
                dataType: d.CELL_DATA_TYPE_NUMBER,
              }
            : typeof event == "boolean"
              ? {
                  value: event ? "1" : "0",
                  dataType: d.CELL_DATA_TYPE_BOOLEAN,
                }
              : event == null
                ? {
                    value: "",
                    dataType: d.CELL_DATA_TYPE_UNSPECIFIED,
                  }
                : {
                    value: String(event),
                    dataType: d.CELL_DATA_TYPE_STRING,
                  };
  }
  function workbookPrivAn(
    host: WorkbookOpsHost,
    wbIn10254: unknown,
    wbIn10255: unknown,
  ) {
    let wbBind20727 = host.wb.__formatRawValueForDisplay(wbIn10255);
    wbIn10254.value = wbBind20727.value;
    wbIn10254.dataType = wbBind20727.dataType;
  }
  function workbookPrivOn(host: WorkbookOpsHost, wbIn11557: unknown) {
    let wbBind21950 = host.m.rn(wbIn11557);
    return wbBind21950 == null ? "" : wbBind21950.toString();
  }
  function workbookPrivSn(host: WorkbookOpsHost, wbIn9838: unknown) {
    if (!ISO_DATE_TIME_RE.test(wbIn9838)) return null;
    let wbBind20378 = Date.parse(wbIn9838);
    return Number.isNaN(wbBind20378) ? null : new Date(wbBind20378);
  }
  function workbookPrivLn(host: WorkbookOpsHost, wbIn6963: unknown) {
    if (wbIn6963.length <= 1) return wbIn6963;
    let wbBind17316 = "";
    for (let wbBind20558 = 0; wbBind20558 < wbIn6963.length; wbBind20558 += 1) {
      let wbBind21734 = wbIn6963[wbBind20558];
      (wbBind21734 === "=" &&
        wbBind20558 > 0 &&
        host.m.un(wbIn6963, wbBind20558)) ||
        (wbBind17316 += wbBind21734);
    }
    return wbBind17316;
  }
  function workbookPrivUn(
    host: WorkbookOpsHost,
    wbIn3596: unknown,
    wbIn3597: unknown,
  ) {
    let wbBind12121 = wbIn3597 - 1;
    for (; wbBind12121 >= 0 && /\s/.test(wbIn3596[wbBind12121] ?? ""); )
      --wbBind12121;
    if (wbBind12121 < 0) return false;
    let wbBind12122 = wbIn3596[wbBind12121] ?? "";
    if (!"(+-,*/^,".includes(wbBind12122)) return false;
    let wbBind12123 = wbIn3597 + 1;
    for (
      ;
      wbBind12123 < wbIn3596.length && /\s/.test(wbIn3596[wbBind12123] ?? "");
    )
      wbBind12123 += 1;
    if (wbBind12123 >= wbIn3596.length) return false;
    let wbBind12124 = wbIn3596[wbBind12123] ?? "";
    return !!(
      wbBind12124 === "(" ||
      wbBind12124 === "$" ||
      wbBind12124 === "'" ||
      /[A-Za-z0-9_]/.test(wbBind12124)
    );
  }
  function workbookPrivDn(
    host: WorkbookOpsHost,
    wbIn9451: unknown,
    wbIn9452: unknown,
    wbIn9453: unknown,
  ) {
    let wbBind19969 = wbHlp1035("#NAME?");
    host.m.dt(wbIn9451, wbBind19969);
    wbIn9453.evaluations.set(wbIn9451, {
      value: wbBind19969,
      formula: wbIn9452,
      precedents: [],
    });
  }
  return {
    workbookPrivXt,
    workbookPrivZt,
    workbookPrivQt,
    workbookPriv$t,
    workbookPrivEn,
    workbookPrivTn,
    workbookPrivNn,
    workbookPrivRn,
    workbookPrivIn,
    workbookOp__formatRawValueForDisplay,
    workbookPrivAn,
    workbookPrivOn,
    workbookPrivSn,
    workbookPrivLn,
    workbookPrivUn,
    workbookPrivDn,
  };
}
