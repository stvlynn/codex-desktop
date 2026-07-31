// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-64: entity query ops tail (legacy R_t body).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  formatA1Range,
  lettersToColIndex,
  parseA1Range,
  parseSheetRef,
  rowTokenToIndex,
} from "../../utils/spreadsheet-address-utils";
import { randomBase36Id } from "../stable-id";
import { eq } from "./query-bag";
import { ensureEntityQueryKindsInit } from "./query-a";
import { resolveWorksheetRef } from "./address-preview";

const clampNonNegInt = resolveWorksheetRef;

export const ensureEntityQueryOpsInit = esmInit(() => {
  ensureEntityQueryKindsInit();
  eq.eqBind1973 = (eqIn3498) => {
    if (eqIn3498.length === 0) return [];
    let eqBind11937 = [...eqIn3498].sort(
        (eqIn16577, eqIn16578) => eqIn16577 - eqIn16578,
      ),
      eqBind11938 = [],
      eqBind11939 = eqBind11937[0];
    if (eqBind11939 == null) return [];
    let eqBind11940 = eqBind11939,
      eqBind11941 = eqBind11939;
    for (
      let eqBind16981 = 1;
      eqBind16981 < eqBind11937.length;
      eqBind16981 += 1
    ) {
      let eqBind18008 = eqBind11937[eqBind16981];
      if (eqBind18008 != null) {
        if (eqBind18008 === eqBind11941 + 1) {
          eqBind11941 = eqBind18008;
          continue;
        }
        eqBind11938.push({
          start: eqBind11940,
          end: eqBind11941,
        });
        eqBind11940 = eqBind18008;
        eqBind11941 = eqBind18008;
      }
    }
    return (
      eqBind11938.push({
        start: eqBind11940,
        end: eqBind11941,
      }),
      eqBind11938
    );
  };
  eq.y_t = (eqIn2116, eqIn2117, eqIn2118) => {
    let eqBind9028 = Math.min(
        eqIn2118.maxRows,
        eqIn2116.endRow - eqIn2116.startRow + 1,
      ),
      eqBind9029 = Math.min(
        eqIn2118.maxCols,
        eqIn2116.endCol - eqIn2116.startCol + 1,
      ),
      eqBind9030 = Array.from(
        {
          length: eqBind9028,
        },
        () =>
          Array.from(
            {
              length: eqBind9029,
            },
            () => null,
          ),
      );
    for (let eqBind17039 of eqIn2117) {
      let eqBind17465 = eqBind17039.row - eqIn2116.startRow,
        eqBind17466 = eqBind17039.col - eqIn2116.startCol;
      if (
        eqBind17465 < 0 ||
        eqBind17465 >= eqBind9028 ||
        eqBind17466 < 0 ||
        eqBind17466 >= eqBind9029
      )
        continue;
      let eqBind17467 = eq.eqBind1976(eqBind17039.value),
        eqBind17468 = eqBind9030[eqBind17465];
      eqBind17468 &&
        (eqBind17468[eqBind17466] = eq.eqBind1977(
          eqBind17467,
          eqIn2118.maxCellChars,
        ));
    }
    let eqBind9031 = {
      startRow: eqIn2116.startRow,
      startCol: eqIn2116.startCol,
      endRow: eqIn2116.startRow + eqBind9028 - 1,
      endCol: eqIn2116.startCol + eqBind9029 - 1,
    };
    return {
      values: eqBind9030,
      rows: eqBind9028 || undefined,
      cols: eqBind9029 || undefined,
      address: formatA1Range(eqBind9031),
    };
  };
  eq.b_t = (eqIn2622) => {
    let eqBind10091 = eqIn2622.toSnapshot(),
      eqBind10092 =
        eqBind10091.target?.spreadsheetCell?.address ??
        eq.eqBind1974(eqBind10091.target?.spreadsheetRange) ??
        undefined,
      eqBind10093 =
        eqBind10091.target?.spreadsheetCell?.sheetName ??
        eqBind10091.target?.spreadsheetRange?.sheetName,
      eqBind10094 = eqBind10091.comments.map((item) => ({
        id: item.id,
        text: item.text,
        authorId: item.authorId,
        createdAt: item.createdAt,
      }));
    return {
      kind: "thread",
      id: `th/${eqBind10091.id}`,
      sheet: eqBind10093,
      target: eqBind10092,
      status:
        eqBind10091.status == null ? undefined : String(eqBind10091.status),
      text: eqBind10094[0]?.text,
      comments: eqBind10094,
    };
  };
  eq.eqBind1974 = (props) => {
    if (!props) return null;
    let eqBind19327 = props.startAddress ?? "",
      eqBind19328 = props.endAddress ?? "";
    return eqBind19327 && eqBind19328 && eqBind19327 !== eqBind19328
      ? `${eqBind19327}:${eqBind19328}`
      : eqBind19327 || eqBind19328 || null;
  };
  eq.x_t = (eqIn798, eqIn799, eqIn800) => {
    if (!eqIn799.length) return [];
    let eqBind5405 = [];
    for (let eqBind5572 of eqIn799) {
      let eqBind5613 = (eqBind5572.ranges ?? [])
        .map((item) => eq.eqBind1974(item))
        .filter((item) => !!item);
      if (
        eqBind5613.length === 0 ||
        (eqIn800.bounds &&
          !eqBind5613.some((item) => {
            let eqBind21423 = parseA1Range(item)?.bounds;
            return eqBind21423 ? eq.k_t(eqBind21423, eqIn800.bounds) : false;
          }))
      )
        continue;
      let eqBind5614 = eqBind5613.join(", ");
      for (let eqBind6808 of eqBind5572.rules ?? [])
        eqBind5405.push({
          kind: "conditionalFormatting",
          sheet: eqIn798,
          address: eqBind5614,
          type: eqBind6808.type,
          priority:
            typeof eqBind6808.priority == "number"
              ? eqBind6808.priority
              : undefined,
          operator: eqBind6808.operator ?? undefined,
          formula: eq.S_t(eqBind6808.formula),
          text: eqBind6808.text ?? undefined,
          timePeriod: eqBind6808.timePeriod ?? undefined,
          rank:
            typeof eqBind6808.rank == "number" ? eqBind6808.rank : undefined,
          percent:
            typeof eqBind6808.percent == "boolean"
              ? eqBind6808.percent
              : undefined,
          bottom:
            typeof eqBind6808.bottom == "boolean"
              ? eqBind6808.bottom
              : undefined,
          aboveAverage:
            typeof eqBind6808.aboveAverage == "boolean"
              ? eqBind6808.aboveAverage
              : undefined,
          equalAverage:
            typeof eqBind6808.equalAverage == "boolean"
              ? eqBind6808.equalAverage
              : undefined,
          stdDev:
            typeof eqBind6808.stdDev == "number"
              ? eqBind6808.stdDev
              : undefined,
          dxfId:
            typeof eqBind6808.dxfId == "number" ? eqBind6808.dxfId : undefined,
          stopIfTrue:
            typeof eqBind6808.stopIfTrue == "boolean"
              ? eqBind6808.stopIfTrue
              : undefined,
          colorScale: eq.w_t(eqBind6808),
          dataBar: eq.T_t(eqBind6808),
          iconSet: eq.E_t(eqBind6808),
        });
    }
    return eqBind5405;
  };
  eq.S_t = (props) => {
    if (!Array.isArray(props)) return;
    let eqBind19772 = props
      .map((item) => String(item ?? "").trim())
      .filter(Boolean);
    return eqBind19772.length > 0 ? eqBind19772 : undefined;
  };
  eq.eqBind1975 = (props) => {
    if (!props || props.length === 0) return;
    let eqBind17644 = props
      .map((item) => ({
        type: item.type ?? undefined,
        value: item.val ?? undefined,
      }))
      .filter((item) => item.type || item.value);
    return eqBind17644.length > 0 ? eqBind17644 : undefined;
  };
  eq.C_t = (props) => {
    if (!props || props.length === 0) return;
    let eqBind19493 = props
      .map((item) => item.value ?? item.lastColor ?? "")
      .filter(Boolean);
    return eqBind19493.length > 0 ? eqBind19493 : undefined;
  };
  eq.w_t = (eqIn8465) => {
    if (!eqIn8465.colorScale) return;
    let eqBind18980 = eq.C_t(eqIn8465.colorScale.colors),
      eqBind18981 = eq.eqBind1975(eqIn8465.colorScale.cfvos);
    if (!(!eqBind18980 && !eqBind18981))
      return {
        colors: eqBind18980,
        thresholds: eqBind18981,
      };
  };
  eq.T_t = (props) => {
    if (!props.dataBar) return;
    let eqBind14310 =
        props.dataBar.color?.value ??
        props.dataBar.color?.lastColor ??
        undefined,
      eqBind14311 =
        typeof props.dataBar.gradient == "boolean"
          ? props.dataBar.gradient
          : undefined,
      eqBind14312 = eq.eqBind1975(props.dataBar.cfvos);
    if (!(!eqBind14310 && eqBind14311 === undefined && !eqBind14312))
      return {
        color: eqBind14310,
        gradient: eqBind14311,
        thresholds: eqBind14312,
      };
  };
  eq.E_t = (props) => {
    if (!props.iconSet) return;
    let eqBind11026 = eq.eqBind1975(props.iconSet.cfvos);
    return {
      iconSet: props.iconSet.iconSet ?? undefined,
      showValue:
        typeof props.iconSet.showValue == "boolean"
          ? props.iconSet.showValue
          : undefined,
      reverse:
        typeof props.iconSet.reverse == "boolean"
          ? props.iconSet.reverse
          : undefined,
      custom:
        typeof props.iconSet.custom == "boolean"
          ? props.iconSet.custom
          : undefined,
      percent:
        typeof props.iconSet.percent == "boolean"
          ? props.iconSet.percent
          : undefined,
      thresholds: eqBind11026,
    };
  };
  eq.D_t = (eqIn4900, eqIn4901) => {
    let eqBind14304 = eqIn4901.sheetId ?? eqIn4901.id ?? null,
      eqBind14305 = eqIn4901.name;
    return eqIn4900.filter((item) => {
      let eqBind16663 = item.toSnapshot().target,
        eqBind16664 =
          eqBind16663?.spreadsheetCell?.sheetId ??
          eqBind16663?.spreadsheetRange?.sheetId,
        eqBind16665 =
          eqBind16663?.spreadsheetCell?.sheetName ??
          eqBind16663?.spreadsheetRange?.sheetName;
      return !!(
        (eqBind16664 && eqBind14304 && eqBind16664 === eqBind14304) ||
        (eqBind16665 && eqBind16665 === eqBind14305)
      );
    });
  };
  eq.O_t = (props) => `ws/${props.id ?? randomBase36Id()}`;
  eq.eqBind1976 = (eqIn14134) =>
    eqIn14134 instanceof Date ? eqIn14134.toISOString() : (eqIn14134 ?? null);
  eq.eqBind1977 = (eqIn9572, eqIn9573) =>
    typeof eqIn9572 != "string" || eqIn9572.length <= eqIn9573
      ? eqIn9572
      : eqIn9573 <= 3
        ? eqIn9572.slice(0, eqIn9573)
        : `${eqIn9572.slice(0, eqIn9573 - 3)}...`;
  eq.eqBind1978 = 200;
  eq.eqBind1979 = (eqIn9107, eqIn9108) => {
    let eqBind19694 = rowTokenToIndex(eqIn9107),
      eqBind19695 = lettersToColIndex(eqIn9107);
    return (
      eqBind19694 >= eqIn9108.startRow &&
      eqBind19694 <= eqIn9108.endRow &&
      eqBind19695 >= eqIn9108.startCol &&
      eqBind19695 <= eqIn9108.endCol
    );
  };
  eq.k_t = (eqIn10041, eqIn10042) =>
    eqIn10041.startRow <= eqIn10042.endRow &&
    eqIn10041.endRow >= eqIn10042.startRow &&
    eqIn10041.startCol <= eqIn10042.endCol &&
    eqIn10041.endCol >= eqIn10042.startCol;
  eq.eqBind1980 = (eqIn8495, eqIn8496, eqIn8497) => {
    let eqBind19013 = eqIn8495;
    return (
      eqIn8497 &&
        (eqBind19013 = eqBind19013
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")),
      eqIn8496 || (eqBind19013 = eqBind19013.toLowerCase()),
      eqBind19013
    );
  };
  eq.A_t = (props) => {
    if (props.useRegex) {
      let eqBind19409 = props.matchEntireCell
          ? `^(?:${props.searchTerm})$`
          : props.searchTerm,
        eqBind19410 = new RegExp(eqBind19409, props.matchCase ? "" : "i");
      return (eqIn16489) => eqBind19410.test(eqIn16489);
    }
    let eqBind13262 = eq.eqBind1980(
      props.searchTerm,
      props.matchCase,
      props.ignoreDiacritics,
    );
    return (eqIn10174) => {
      let eqBind20634 = eq.eqBind1980(
        eqIn10174,
        props.matchCase,
        props.ignoreDiacritics,
      );
      return props.matchEntireCell
        ? eqBind20634 === eqBind13262
        : eqBind20634.includes(eqBind13262);
    };
  };
  eq.eqBind1981 = (eqIn439, eqIn440, eqIn441) => {
    let eqBind3976 = (
      typeof eqIn440.searchTerm == "string" ? eqIn440.searchTerm : ""
    ).trim();
    if (!eqBind3976) return null;
    let eqBind3977 = eqIn440.options,
      eqBind3978 = eqBind3977?.matchCase === true,
      eqBind3979 = eqBind3977?.matchEntireCell === true,
      eqBind3980 = eqBind3977?.useRegex === true,
      eqBind3981 = eqBind3977?.matchFormulas === true,
      eqBind3982 = eqBind3977?.ignoreDiacritics === true,
      eqBind3983 =
        typeof eqBind3977?.maxResults == "number" &&
        Number.isFinite(eqBind3977.maxResults)
          ? Math.max(1, Math.floor(eqBind3977.maxResults))
          : eq.eqBind1978,
      eqBind3984 =
        typeof eqIn440.offset == "number" && Number.isFinite(eqIn440.offset)
          ? Math.max(0, Math.floor(eqIn440.offset))
          : 0,
      eqBind3985 = typeof eqIn440.range == "string" ? eqIn440.range.trim() : "",
      eqBind3986 = eqBind3985
        ? parseSheetRef(eqBind3985)
        : {
            ref: "",
          },
      eqBind3987 = eqBind3985 ? parseA1Range(eqBind3986.ref)?.bounds : null;
    eqBind3985 &&
      !eqBind3987 &&
      ((eqIn441.notices ??= []),
      eqIn441.notices.push(`Invalid range filter: ${eqBind3985}`));
    let eqBind3988 =
        (typeof eqIn440.sheetId == "string" ? eqIn440.sheetId.trim() : "") ||
        eqBind3986.sheetName,
      eqBind3989 = eqBind3988
        ? [resolveWorksheetRef(eqIn439, eqBind3988)]
        : Array.from(eqIn439.worksheets),
      eqBind3990;
    try {
      eqBind3990 = eq.A_t({
        searchTerm: eqBind3976,
        matchCase: eqBind3978,
        matchEntireCell: eqBind3979,
        useRegex: eqBind3980,
        ignoreDiacritics: eqBind3982,
      });
    } catch (eqBind20129) {
      let eqBind20130 =
        eqBind20129 instanceof Error
          ? eqBind20129.message
          : "Invalid regular expression";
      throw Error(`Invalid search regex: ${eqBind20130}`);
    }
    let eqBind3991 = [],
      eqBind3992 = 0,
      eqBind3993 = 0;
    for (let eqBind7660 of eqBind3989) {
      let eqBind7722 = eqBind7660.toProto();
      for (let eqBind8019 of eqBind7722.rows ?? [])
        for (let eqBind8319 of eqBind8019.cells ?? []) {
          let eqBind8482 = eqBind8319.address;
          if (
            !eqBind8482 ||
            (eqBind3987 && !eq.eqBind1979(eqBind8482, eqBind3987))
          )
            continue;
          let eqBind8483 = [];
          if (
            (eqBind8319.value != null &&
              eqBind8483.push({
                type: "value",
                value: String(eqBind8319.value),
              }),
            eqBind3981 &&
              eqBind8319.formula &&
              eqBind8483.push({
                type: "formula",
                value: eqBind8319.formula,
              }),
            !eqBind8483.length)
          )
            continue;
          let eqBind8484 = eqBind8483.find((item) => eqBind3990(item.value));
          if (eqBind8484) {
            if (((eqBind3993 += 1), eqBind3992 < eqBind3984)) {
              eqBind3992 += 1;
              continue;
            }
            eqBind3991.length < eqBind3983 &&
              eqBind3991.push({
                kind: "match",
                sheet: eqBind7660.name,
                address: eqBind8482,
                value: eqBind8319.value ?? null,
                formula: eqBind8319.formula ?? null,
                match: eqBind8484.type,
              });
          }
        }
    }
    return {
      records: eqBind3991,
      truncated: eqBind3993 > eqBind3984 + eqBind3991.length,
      offset: eqBind3984,
      limit: eqBind3983,
      total: eqBind3993,
    };
  };
  eq.j_t = (eqIn2922) => {
    let eqBind10814 = (eqIn2922 ?? eq.eqBind1967.join(","))
        .split(/[^A-Za-z0-9-]+/)
        .map((item) => item.trim().toLowerCase())
        .filter(Boolean),
      eqBind10815 = [],
      eqBind10816 = new Set(),
      eqBind10817 = [];
    for (let eqBind17977 of eqBind10814) {
      let eqBind18443 = eq.t_t[eqBind17977] ?? eqBind17977;
      if (!eq.eqBind1969.has(eqBind18443)) {
        eqBind10817.includes(eqBind17977) || eqBind10817.push(eqBind17977);
        continue;
      }
      let eqBind18444 = eqBind18443;
      eqBind10816.has(eqBind18444) ||
        (eqBind10816.add(eqBind18444), eqBind10815.push(eqBind18444));
    }
    let eqBind10818 = [];
    return (
      eqBind10817.length > 0 &&
        eqBind10818.push(`Unknown kind tokens: ${eqBind10817.join(", ")}`),
      {
        tokens: eqBind10815,
        tokenSet: eqBind10816,
        notices: eqBind10818,
      }
    );
  };
  eq.eqBind1982 = (eqIn2434, eqIn2435) => {
    if (!eqIn2434)
      return {
        tokens: [],
        tokenSet: new Set(),
        notices: [],
      };
    let eqBind9676 = eqIn2434
        .split(/[^A-Za-z0-9-]+/)
        .map((item) => item.trim().toLowerCase())
        .filter(Boolean),
      eqBind9677 = [],
      eqBind9678 = new Set(),
      eqBind9679 = [];
    for (let eqBind18553 of eqBind9676) {
      let eqBind19056 = eq.n_t[eqBind18553] ?? eqBind18553;
      if (!eq.r_t.has(eqBind19056)) {
        eqBind9679.includes(eqBind18553) || eqBind9679.push(eqBind18553);
        continue;
      }
      eqBind9678.has(eqBind19056) ||
        (eqBind9678.add(eqBind19056), eqBind9677.push(eqBind19056));
    }
    let eqBind9680 = [];
    return (
      eqBind9679.length > 0 &&
        eqBind9680.push(
          `Unknown ${eqIn2435 === "include" ? "include" : "exclude"} tokens: ${eqBind9679.join(", ")}`,
        ),
      {
        tokens: eqBind9677,
        tokenSet: eqBind9678,
        notices: eqBind9680,
      }
    );
  };
  eq.M_t = (eqIn15585, eqIn15586, eqIn15587) =>
    eqIn15585.map((item) => eq.N_t(item, eqIn15586, eqIn15587));
  eq.N_t = (eqIn5539, eqIn5540, eqIn5541) => {
    let eqBind15337 = eq.eqBind1968[eqIn5539.kind] ?? [],
      eqBind15338 = new Set(eqBind15337);
    eqIn5540.tokens.forEach((item) => eqBind15338.add(item));
    eqIn5541.tokens.forEach((item) => eqBind15338.delete(item));
    let eqBind15339 = {
      kind: eqIn5539.kind,
    };
    for (let [eqBind21732, eqBind21733] of Object.entries(eqIn5539))
      eqBind21732 !== "kind" &&
        eqBind15338.has(eqBind21732) &&
        eqBind21733 !== undefined &&
        (eqBind15339[eqBind21732] = eqBind21733);
    return eqBind15339;
  };
  eq.P_t = (eqIn2599, eqIn2600, eqIn2601) => {
    if (!eqIn2600) return eqIn2599;
    let eqBind10027;
    try {
      eqBind10027 = new RegExp(eqIn2600, "i");
    } catch (eqBind20131) {
      let eqBind20132 =
        eqBind20131 instanceof Error
          ? eqBind20131.message
          : "Invalid regular expression";
      throw Error(`Invalid search regex: ${eqBind20132}`);
    }
    let eqBind10028 = eqIn2599.filter(
      (item) => item.includes('"kind":"notice"') || eqBind10027.test(item),
    );
    return (
      eqIn2599.some((item) => eqBind10027.test(item)) ||
        ((eqIn2601.notices ??= []),
        eqIn2601.notices.push("Search matched 0 entries")),
      eqBind10028.length === 0
        ? [
            JSON.stringify({
              kind: "notice",
              message: "Search matched 0 entries.",
            }),
          ]
        : eqBind10028
    );
  };
  eq.F_t = (eqIn4833, eqIn4834) =>
    eqIn4833
      ? {
          id: eqIn4833.id,
          beforeLines: Number.isFinite(eqIn4833.beforeLines)
            ? Math.max(0, Math.floor(eqIn4833.beforeLines))
            : 0,
          afterLines: Number.isFinite(eqIn4833.afterLines)
            ? Math.max(0, Math.floor(eqIn4833.afterLines))
            : 0,
        }
      : {
          id: eqIn4834,
          beforeLines: 0,
          afterLines: 0,
        };
  eq.eqBind1983 = (eqIn8080) =>
    JSON.stringify({
      kind: "notice",
      message: `Truncated: omitted ${eqIn8080} lines. Increase maxChars, narrow range, or use tableMaxRows/tableMaxCols/tableMaxCellChars.`,
    });
  eq.I_t = (eqIn2151, eqIn2152) => {
    let eqBind9132 = eqIn2151.join("\n");
    if (eqIn2152 <= 0 || eqBind9132.length <= eqIn2152)
      return {
        ndjson: eqBind9132,
        truncated: false,
      };
    let eqBind9133 = eqIn2151.length,
      eqBind9134 = eq.eqBind1983(eqBind9133),
      eqBind9135 = [];
    for (let eqBind14237 = 0; eqBind14237 < 3; eqBind14237 += 1) {
      eqBind9135 = [];
      let eqBind14825 = 0;
      for (let eqBind18850 of eqIn2151) {
        let eqBind19383 = eqBind18850.length + +(eqBind9135.length > 0),
          eqBind19384 = eqBind9134.length + +(eqBind9135.length > 0);
        if (eqBind14825 + eqBind19383 + eqBind19384 > eqIn2152) break;
        eqBind9135.push(eqBind18850);
        eqBind14825 += eqBind19383;
      }
      let eqBind14826 = eqIn2151.length - eqBind9135.length;
      if (eqBind14826 === eqBind9133) break;
      eqBind9133 = eqBind14826;
      eqBind9134 = eq.eqBind1983(eqBind9133);
    }
    let eqBind9136 =
      eqBind9135.length > 0
        ? `${eqBind9135.join("\n")}\n${eqBind9134}`
        : eqBind9134;
    return eqBind9135.length === 0 && eqIn2151.length === 1
      ? {
          ndjson: eqIn2151[0] ?? "",
          truncated: true,
        }
      : {
          ndjson: eqBind9136,
          truncated: true,
        };
  };
  eq.L_t = (eqIn2582, eqIn2583) => {
    let eqBind9986 = eqIn2583.beforeLines,
      eqBind9987 = eqIn2583.afterLines;
    if (eqBind9986 <= 0 && eqBind9987 <= 0) return eqIn2582;
    let eqBind9988 = eqIn2582
      .map((item) => JSON.stringify(item))
      .findIndex((item) => item.includes(eqIn2583.id));
    if (eqBind9988 === -1) return eqIn2582;
    let eqBind9989 = Math.max(0, eqBind9988 - eqBind9986),
      eqBind9990 = Math.min(eqIn2582.length, eqBind9988 + eqBind9987 + 1),
      eqBind9991 = eqIn2582.slice(eqBind9989, eqBind9990),
      eqBind9992 = eqIn2582.filter((item) => item.kind === "workbook"),
      eqBind9993 = [],
      eqBind9994 = new Set();
    for (let eqBind21531 of eqBind9992) {
      let eqBind22068 = JSON.stringify(eqBind21531);
      eqBind9994.has(eqBind22068) ||
        (eqBind9994.add(eqBind22068), eqBind9993.push(eqBind21531));
    }
    for (let eqBind21532 of eqBind9991) {
      let eqBind22069 = JSON.stringify(eqBind21532);
      eqBind9994.has(eqBind22069) ||
        (eqBind9994.add(eqBind22069), eqBind9993.push(eqBind21532));
    }
    return eqBind9993;
  };
});
