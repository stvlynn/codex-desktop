// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: XLSX workbook structural validation (legacy Tpt/Ept/Apt/kpt).
// Stage-3 wave-116.

import { xwvH } from "./boundary-hooks";
import { XLSX_VALIDATION_RULES } from "./validation-rules";

export function esmInit(fn: () => void): () => void {
  let done = false;
  return () => {
    if (done) return;
    done = true;
    fn();
  };
}

let rulesInitDone = false;
export function ensureXlsxValidationRulesInit(): void {
  rulesInitDone = true;
  void rulesInitDone;
  void XLSX_VALIDATION_RULES;
}

export function validateWorkbook(xwvIn8966: any, xwvIn8967: any = {}) {
  let xwvBind19510 = [],
    xwvBind19511 = (xwvIn14581, xwvIn14582, xwvIn14583) => {
      xwvBind19510.push(_workbookA.issue(xwvIn14581, xwvIn14582, xwvIn14583));
    };
  return (
    validateSheets(xwvIn8966, xwvBind19511),
    validateFonts(xwvIn8966, xwvBind19511),
    {
      valid: xwvBind19510.length === 0,
      errors: xwvBind19510,
    }
  );
}
export function validateSheets(xwvIn3166: any, xwvIn3167: any) {
  let xwvBind11307 = xwvIn3166.sheets ?? [];
  xwvBind11307.length === 0 &&
    xwvIn3167(
      "SS-WB-7A49",
      {
        workbook: xwvIn3166.id ?? "<workbook>",
      },
      "sheets",
    );
  let xwvBind11308 = new Map(),
    xwvBind11309 = new Map(),
    xwvBind11310 = xwvIn3166.styles?.cellXfs?.length ?? 0;
  for (
    let xwvBind14700 = 0;
    xwvBind14700 < xwvBind11307.length;
    xwvBind14700 += 1
  ) {
    let xwvBind15480 = xwvBind11307[xwvBind14700];
    if (!xwvBind15480) continue;
    let xwvBind15481 = xwvBind15480.name?.trim() || `Sheet ${xwvBind14700 + 1}`,
      xwvBind15482 = `sheets[${xwvBind14700}]`,
      xwvBind15483 = xwvBind15481.toLocaleUpperCase();
    xwvBind11308.get(xwvBind15483) === undefined
      ? xwvBind11308.set(xwvBind15483, xwvBind15481)
      : xwvIn3167(
          "SS-WB-E3C7",
          {
            sheetName: xwvBind15481,
          },
          `${xwvBind15482}.name`,
        );
    validateMergedCells(xwvBind15480, xwvBind15481, xwvBind15482, xwvIn3167);
    validateSheetCells(
      xwvBind15480,
      xwvBind15481,
      xwvBind15482,
      xwvBind11310,
      xwvIn3167,
    );
    validateTables(
      xwvBind15480,
      xwvBind15481,
      xwvBind15482,
      xwvBind11309,
      xwvIn3167,
    );
  }
}
export function validateFonts(xwvIn3819: any, xwvIn3820: any) {
  let xwvBind12616 = xwvIn3819.styles?.fonts ?? [];
  for (
    let xwvBind13491 = 0;
    xwvBind13491 < xwvBind12616.length;
    xwvBind13491 += 1
  ) {
    let xwvBind14236 = xwvBind12616[xwvBind13491]?.fontSize;
    typeof xwvBind14236 != "number" ||
      !Number.isFinite(xwvBind14236) ||
      (xwvBind14236 === 0
        ? xwvIn3820(
            "SS-ST-B660",
            {
              fontIndex: xwvBind13491,
              size: xwvBind14236,
            },
            `styles.fonts[${xwvBind13491}].fontSize`,
          )
        : xwvBind14236 < 1 &&
          xwvIn3820(
            "SS-ST-6780",
            {
              fontIndex: xwvBind13491,
              size: xwvBind14236,
            },
            `styles.fonts[${xwvBind13491}].fontSize`,
          ));
  }
}
export function validateMergedCells(
  xwvIn3482: any,
  xwvIn3483: any,
  xwvIn3484: any,
  xwvIn3485: any,
) {
  let xwvBind11925 = [];
  for (let xwvBind20522 of xwvIn3482.mergedCells ?? []) {
    let xwvBind21605 = xwvH.parseA1Range(
      joinA1Range(xwvBind20522.startAddress, xwvBind20522.endAddress),
    );
    xwvBind21605 &&
      xwvBind11925.push({
        ref: xwvBind21605.ref,
        bounds: xwvBind21605.bounds,
      });
  }
  for (
    let xwvBind15240 = 0;
    xwvBind15240 < xwvBind11925.length;
    xwvBind15240 += 1
  ) {
    let xwvBind15985 = xwvBind11925[xwvBind15240];
    if (xwvBind15985)
      for (
        let xwvBind16980 = xwvBind15240 + 1;
        xwvBind16980 < xwvBind11925.length;
        xwvBind16980 += 1
      ) {
        let xwvBind18124 = xwvBind11925[xwvBind16980];
        !xwvBind18124 ||
          !xwvH.boundsIntersect(xwvBind15985.bounds, xwvBind18124.bounds) ||
          xwvIn3485(
            "SS-MC-14C5",
            {
              sheet: xwvIn3483,
              ranges: `${xwvBind15985.ref}, ${xwvBind18124.ref}`,
            },
            `${xwvIn3484}.mergedCells`,
          );
      }
  }
}
export function validateSheetCells(
  xwvIn1928: any,
  xwvIn1929: any,
  xwvIn1930: any,
  xwvIn1931: any,
  xwvIn1932: any,
) {
  let xwvBind8668 = new Set();
  for (
    let xwvBind9046 = 0;
    xwvBind9046 < (xwvIn1928.rows ?? []).length;
    xwvBind9046 += 1
  ) {
    let xwvBind9519 = xwvIn1928.rows?.[xwvBind9046];
    if (xwvBind9519)
      for (
        let xwvBind9887 = 0;
        xwvBind9887 < (xwvBind9519.cells ?? []).length;
        xwvBind9887 += 1
      ) {
        let xwvBind10382 = xwvBind9519.cells?.[xwvBind9887];
        if (!xwvBind10382) continue;
        let xwvBind10383 =
            xwvBind10382.address?.trim() ||
            `<cell ${xwvBind9046}:${xwvBind9887}>`,
          xwvBind10384 = `${xwvIn1930}.rows[${xwvBind9046}].cells[${xwvBind9887}]`,
          xwvBind10385 = xwvBind10383.toLocaleUpperCase();
        xwvBind8668.has(xwvBind10385)
          ? xwvIn1932(
              "SS-WS-7C95",
              {
                sheet: xwvIn1929,
                cell: xwvBind10383,
              },
              xwvBind10384,
            )
          : xwvBind8668.add(xwvBind10385);
        let xwvBind10386 = xwvBind10382.styleIndex;
        typeof xwvBind10386 == "number" &&
          Number.isInteger(xwvBind10386) &&
          xwvBind10386 >= xwvIn1931 &&
          xwvIn1932(
            "SS-ST-B5DD",
            {
              cell: `${xwvIn1929}!${xwvBind10383}`,
              styleIndex: xwvBind10386,
            },
            `${xwvBind10384}.styleIndex`,
          );
        let xwvBind10387 = normalizeFormulaText(xwvBind10382.formula);
        xwvBind10387 &&
          Bpt.test(stripFormulaEquals(xwvBind10387)) &&
          xwvIn1932(
            "SS-FM-7E84",
            {
              sheet: xwvIn1929,
              cell: xwvBind10383,
              formula: xwvBind10387,
            },
            `${xwvBind10384}.formula`,
          );
      }
  }
}
export function validateTables(
  xwvIn1842: any,
  xwvIn1843: any,
  xwvIn1844: any,
  xwvIn1845: any,
  xwvIn1846: any,
) {
  let xwvBind8431 = xwvIn1842.tables ?? [];
  for (
    let xwvBind8840 = 0;
    xwvBind8840 < xwvBind8431.length;
    xwvBind8840 += 1
  ) {
    let xwvBind9126 = xwvBind8431[xwvBind8840];
    if (!xwvBind9126) continue;
    let xwvBind9127 = tableDisplayName(xwvBind9126, xwvBind8840),
      xwvBind9128 = `${xwvIn1844}.tables[${xwvBind8840}]`,
      xwvBind9129 = xwvBind9127.toLocaleUpperCase();
    xwvIn1845.has(xwvBind9129)
      ? xwvIn1846(
          "SS-TB-C6CD",
          {
            tableName: xwvBind9127,
          },
          `${xwvBind9128}.name`,
        )
      : xwvIn1845.set(xwvBind9129, `${xwvIn1843}!${xwvBind9127}`);
    let xwvBind9130 = xwvH.parseA1Range(xwvBind9126.ref ?? ""),
      xwvBind9131 = xwvBind9130
        ? xwvH.boundsSize(xwvBind9130.bounds).cols
        : undefined;
    xwvBind9131 !== undefined &&
      (xwvBind9126.columns?.length ?? 0) > 0 &&
      xwvBind9126.columns?.length !== xwvBind9131 &&
      xwvIn1846(
        "SS-TB-93B6",
        {
          table: xwvBind9127,
          ref: xwvBind9126.ref ?? "",
          tableColumns: xwvBind9126.columns?.length ?? 0,
        },
        `${xwvBind9128}.columns`,
      );
    xwvBind9126.autoFilter?.ref &&
      xwvBind9126.ref &&
      xwvBind9126.autoFilter.ref !== xwvBind9126.ref &&
      xwvIn1846(
        "SS-TB-4DDB",
        {
          table: xwvBind9127,
          tableRef: xwvBind9126.ref,
          autoFilterRef: xwvBind9126.autoFilter.ref,
        },
        `${xwvBind9128}.autoFilter.ref`,
      );
    validateTableColumns(xwvBind9126, xwvBind9127, xwvBind9128, xwvIn1846);
    validateAutoFilterColumns(
      xwvBind9126,
      xwvBind9127,
      xwvBind9128,
      xwvBind9131,
      xwvIn1846,
    );
  }
}
export function validateTableColumns(
  xwvIn3130: any,
  xwvIn3131: any,
  xwvIn3132: any,
  xwvIn3133: any,
) {
  let xwvBind11253 = new Set(),
    xwvBind11254 = new Set();
  for (
    let xwvBind12118 = 0;
    xwvBind12118 < (xwvIn3130.columns ?? []).length;
    xwvBind12118 += 1
  ) {
    let xwvBind12891 = xwvIn3130.columns?.[xwvBind12118];
    if (!xwvBind12891) continue;
    let xwvBind12892 = xwvBind12891.name?.trim();
    if (xwvBind12892) {
      let xwvBind18442 = xwvBind12892.toLocaleUpperCase();
      xwvBind11253.has(xwvBind18442)
        ? xwvIn3133(
            "SS-TB-0A42",
            {
              table: xwvIn3131,
              columnName: xwvBind12892,
            },
            `${xwvIn3132}.columns[${xwvBind12118}].name`,
          )
        : xwvBind11253.add(xwvBind18442);
    }
    let xwvBind12893 = xwvBind12891.id;
    typeof xwvBind12893 == "number" &&
      (xwvBind11254.has(xwvBind12893)
        ? xwvIn3133(
            "SS-TB-D29F",
            {
              table: xwvIn3131,
              columnId: xwvBind12893,
            },
            `${xwvIn3132}.columns[${xwvBind12118}].id`,
          )
        : xwvBind11254.add(xwvBind12893));
  }
}
export function validateAutoFilterColumns(
  xwvIn4960: any,
  xwvIn4961: any,
  xwvIn4962: any,
  xwvIn4963: any,
  xwvIn4964: any,
) {
  if (xwvIn4963 === undefined) return;
  let xwvBind14380 = xwvIn4960.autoFilter?.columns ?? [];
  for (
    let xwvBind16538 = 0;
    xwvBind16538 < xwvBind14380.length;
    xwvBind16538 += 1
  ) {
    let xwvBind17522 = xwvBind14380[xwvBind16538]?.colId;
    typeof xwvBind17522 == "number" &&
      Number.isInteger(xwvBind17522) &&
      (xwvBind17522 < 0 || xwvBind17522 >= xwvIn4963) &&
      xwvIn4964(
        "SS-TB-1EAF",
        {
          table: xwvIn4961,
          colId: xwvBind17522,
          width: xwvIn4963,
        },
        `${xwvIn4962}.autoFilter.columns[${xwvBind16538}].colId`,
      );
  }
}
export function joinA1Range(xwvIn11262: any, xwvIn11263: any) {
  let xwvBind21727 = xwvIn11262?.trim(),
    xwvBind21728 = xwvIn11263?.trim() || xwvBind21727;
  return xwvBind21727 && xwvBind21728 ? `${xwvBind21727}:${xwvBind21728}` : "";
}
export function normalizeFormulaText(xwvIn11941: any) {
  let xwvBind22197 = xwvIn11941?.trim();
  if (xwvBind22197)
    return xwvBind22197.startsWith("=") ? xwvBind22197 : `=${xwvBind22197}`;
}
export function stripFormulaEquals(props: any) {
  return props.startsWith("=") ? props.slice(1).trimStart() : props;
}
export function tableDisplayName(xwvIn11772: any, xwvIn11773: any) {
  return (
    xwvIn11772.displayName?.trim() ||
    xwvIn11772.name?.trim() ||
    `Table ${xwvIn11773 + 1}`
  );
}
export function lookupValidationRule(xwvIn9090: any) {
  Vpt ??= new Map(xwvBind1955.map((item) => [item.code, item]));
  let xwvBind19670 = Vpt.get(xwvIn9090);
  if (!xwvBind19670)
    throw Error(`Unknown workbook validation error code: ${xwvIn9090}`);
  return xwvBind19670;
}
export function templateParams(props: any) {
  return [...props.matchAll(/\[([^\]]+)\]/g)].map((item) => item[1] ?? "");
}
export function formatMessageTemplate(xwvIn10346: any, xwvIn10347: any) {
  return xwvIn10346.replace(/\[([^\]]+)\]/g, (xwvIn13025, xwvIn13026) => {
    let xwvBind22557 = xwvIn10347[xwvIn13026];
    return xwvBind22557 == null ? xwvIn13025 : String(xwvBind22557);
  });
}
export let workbookR: any;
export let Bpt: RegExp;
export let Vpt: Map<string, any> | undefined;
export let _workbookA: any;
export const _WorkbookI = esmInit(() => {
  xwvH.initAddressUtils();
  ensureXlsxValidationRulesInit();
  workbookR = class extends Error {
    result;
    constructor(xwvIn5603) {
      let xwvBind15430 = xwvIn5603.errors
        .map((item) => `[${item.code}] ${item.message}`)
        .join("; ");
      super(
        xwvBind15430
          ? `Workbook validation failed: ${xwvBind15430}`
          : "Workbook validation failed.",
      );
      this.name = "WorkbookValidationError";
      this.result = xwvIn5603;
    }
  };
  Bpt = /^\+?\s*TABLE\s*\(/i;
  xwvBind1955.map((item) => ({
    ...item,
    params: templateParams(item.messageTemplate),
    ruleId: item.name,
    sourceType: "Validation",
    tracked: "No",
  }));
  _workbookA = {
    format(xwvIn10502, xwvIn10503 = {}) {
      let xwvBind20972 = lookupValidationRule(xwvIn10502);
      return `[${xwvBind20972.code}] ${xwvBind20972.name}: ${formatMessageTemplate(xwvBind20972.messageTemplate, xwvIn10503)}`;
    },
    issue(xwvIn4896, xwvIn4897 = {}, xwvIn4898) {
      let xwvBind14302 = lookupValidationRule(xwvIn4896);
      return {
        code: xwvBind14302.code,
        name: xwvBind14302.name,
        message: formatMessageTemplate(xwvBind14302.messageTemplate, xwvIn4897),
        params: xwvIn4897,
        ruleId: xwvBind14302.name,
        sourceType: "Validation",
        severity: "error",
        triggersRepairDialog: xwvBind14302.triggersRepairDialog,
        path: xwvIn4898,
      };
    },
    log(xwvIn12779, xwvIn12780 = {}, xwvIn12781 = console) {
      xwvIn12781.log(this.format(xwvIn12779, xwvIn12780));
    },
  };
});

export const Tpt = validateWorkbook;
export const Ept = validateSheets;
export const Dpt = validateFonts;
export const Opt = validateMergedCells;
export const kpt = validateSheetCells;
export const Apt = validateTables;
export const jpt = validateTableColumns;
export const Mpt = validateAutoFilterColumns;
export const Npt = joinA1Range;
export const Ppt = normalizeFormulaText;
export const Fpt = stripFormulaEquals;
export const Ipt = tableDisplayName;
export const Lpt = lookupValidationRule;
export const Rpt = templateParams;
export const zpt = formatMessageTemplate;
