// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel criteria predicate builder (legacy criteria-predicate cluster).
// Stage-3 wave-110.

import { isArrayValue } from "../formula-array";

/** Excel serial-date epoch (1899-12-30 UTC). */
const EXCEL_EPOCH_UTC_MS = Date.UTC(1899, 11, 30);
/** Milliseconds per day. */
const MS_PER_DAY = 86400000;

void isArrayValue;
void EXCEL_EPOCH_UTC_MS;
void MS_PER_DAY;

export function rowMatchesAnyCriteriaGroup(fcpIn6611: any, fcpIn6612: any) {
  if (fcpIn6612.length === 0) return true;
  for (let fcpBind18846 of fcpIn6612) {
    let fcpBind19380 = true;
    for (let fcpBind20804 of fcpBind18846) {
      let fcpBind21365 = fcpIn6611[fcpBind20804.columnIndex];
      if (fcpBind21365 != null && !fcpBind20804.test(fcpBind21365)) {
        fcpBind19380 = false;
        break;
      }
    }
    if (fcpBind19380) return true;
  }
  return false;
}
export function buildCriteriaPredicate(fcpIn2131: any) {
  if (fcpIn2131 == null) return null;
  if (typeof fcpIn2131 == "boolean")
    return (fcpIn16485) => !!fcpIn16485 === fcpIn2131;
  if (typeof fcpIn2131 == "number" && Number.isFinite(fcpIn2131))
    return (fcpIn16191) =>
      compareCriteriaNumber(coerceCriteriaNumber(fcpIn16191), fcpIn2131, "=");
  if (fcpIn2131 instanceof Date) {
    let fcpBind22708 = dateToExcelSerial(fcpIn2131);
    return (fcpIn16192) =>
      compareCriteriaNumber(
        coerceCriteriaNumber(fcpIn16192),
        fcpBind22708,
        "=",
      );
  }
  let fcpBind9059 = normalizeCriteriaString(String(fcpIn2131));
  if (!fcpBind9059) return null;
  let fcpBind9060 = fcpBind9059.match(/^(<=|>=|<>|=|<|>)/),
    fcpBind9061 = fcpBind9060 ? fcpBind9060[0] : "=",
    fcpBind9062 = fcpBind9059.slice(fcpBind9061.length).trim();
  if (
    (fcpBind9061 === "=" || fcpBind9061 === "<>") &&
    hasWildcardChars(fcpBind9062)
  ) {
    let fcpBind20062 = wildcardToRegExp(fcpBind9062);
    return (fcpIn10736) => {
      let fcpBind21249 = normalizeCriteriaString(
          String(fcpIn10736 ?? ""),
        ).toUpperCase(),
        fcpBind21250 = fcpBind20062.test(fcpBind21249);
      return fcpBind9061 === "=" ? fcpBind21250 : !fcpBind21250;
    };
  }
  let fcpBind9063 = parseCriteriaNumberOrDate(fcpBind9062);
  if (fcpBind9063 != null)
    return (fcpIn16286) =>
      compareCriteriaNumber(
        coerceCriteriaNumber(fcpIn16286),
        fcpBind9063,
        fcpBind9061,
      );
  if (fcpBind9061 !== "=" && fcpBind9061 !== "<>") return () => false;
  let fcpBind9064 = fcpBind9062.toUpperCase();
  return (fcpIn14756) =>
    compareCriteriaString(
      normalizeCriteriaString(String(fcpIn14756 ?? "")).toUpperCase(),
      fcpBind9064,
      fcpBind9061,
    );
}
export function unwrapCriteriaScalar(props: any) {
  return Array.isArray(props)
    ? props[0]?.[0]
    : props !== undefined && isArrayValue(props)
      ? props.values[0]?.[0]
      : props;
}
export function coerceCriteriaNumber(fcpIn5727: any) {
  if (typeof fcpIn5727 == "number" && Number.isFinite(fcpIn5727))
    return fcpIn5727;
  if (fcpIn5727 instanceof Date) return dateToExcelSerial(fcpIn5727);
  if (typeof fcpIn5727 == "boolean") return +!!fcpIn5727;
  if (typeof fcpIn5727 == "string") {
    let fcpBind21310 = fcpIn5727.trim();
    if (!fcpBind21310) return null;
    let fcpBind21311 = Number(fcpBind21310);
    return Number.isFinite(fcpBind21311) ? fcpBind21311 : null;
  }
  return null;
}
export function parseCriteriaNumberOrDate(fcpIn9448: any) {
  if (!fcpIn9448) return null;
  let fcpBind19962 = Number(fcpIn9448);
  if (Number.isFinite(fcpBind19962)) return fcpBind19962;
  let fcpBind19963 = parseSlashDateMs(fcpIn9448);
  return fcpBind19963 == null
    ? null
    : (fcpBind19963 - EXCEL_EPOCH_UTC_MS) / MS_PER_DAY;
}
export function parseSlashDateMs(fcpIn4725: any) {
  let fcpBind14031 = fcpIn4725.replace(/[-.]/g, "/").trim();
  if (!fcpBind14031) return null;
  let fcpBind14032 = fcpBind14031.split("/");
  if (fcpBind14032.length !== 3) return null;
  let [fcpBind14033, fcpBind14034, fcpBind14035] = fcpBind14032,
    fcpBind14036 = Number(fcpBind14033),
    fcpBind14037 = Number(fcpBind14034),
    fcpBind14038 = Number(fcpBind14035);
  if (
    !Number.isFinite(fcpBind14036) ||
    !Number.isFinite(fcpBind14037) ||
    !Number.isFinite(fcpBind14038)
  )
    return null;
  let fcpBind14039 = new Date(fcpBind14036, fcpBind14037 - 1, fcpBind14038);
  return Number.isNaN(fcpBind14039.getTime()) ? null : fcpBind14039.getTime();
}
export function normalizeCriteriaString(props: any) {
  let fcpBind16256 = "";
  for (let fcpBind17640 of props.trim())
    switch (fcpBind17640) {
      case "／":
        fcpBind16256 += "/";
        break;
      case "－":
        fcpBind16256 += "-";
        break;
      case "，":
        fcpBind16256 += ",";
        break;
      default:
        fcpBind16256 += fcpBind17640;
        break;
    }
  return fcpBind16256.trim();
}
export function hasWildcardChars(props: any) {
  return props.includes("*") || props.includes("?");
}
export function wildcardToRegExp(props: any) {
  let fcpBind19381 = props
    .toUpperCase()
    .replace(/[.+^${}()|[\]\\]/g, "\\$&")
    .replace(/\\\*/g, ".*")
    .replace(/\\\?/g, ".");
  return RegExp(`^${fcpBind19381}$`, "u");
}
export function compareCriteriaNumber(
  fcpIn5954: any,
  fcpIn5955: any,
  fcpIn5956: any,
) {
  if (fcpIn5954 == null) return fcpIn5956 === "<>" ? fcpIn5955 !== 0 : false;
  switch (fcpIn5956) {
    case "<":
      return fcpIn5954 < fcpIn5955;
    case "<=":
      return fcpIn5954 <= fcpIn5955;
    case ">":
      return fcpIn5954 > fcpIn5955;
    case ">=":
      return fcpIn5954 >= fcpIn5955;
    case "<>":
      return fcpIn5954 !== fcpIn5955;
    default:
      return fcpIn5954 === fcpIn5955;
  }
}
export function compareCriteriaString(
  fcpIn6877: any,
  fcpIn6878: any,
  fcpIn6879: any,
) {
  switch (fcpIn6879) {
    case "<":
      return fcpIn6877 < fcpIn6878;
    case "<=":
      return fcpIn6877 <= fcpIn6878;
    case ">":
      return fcpIn6877 > fcpIn6878;
    case ">=":
      return fcpIn6877 >= fcpIn6878;
    case "<>":
      return fcpIn6877 !== fcpIn6878;
    default:
      return fcpIn6877 === fcpIn6878;
  }
}
export function dateToExcelSerial(props: any) {
  return (props.getTime() - EXCEL_EPOCH_UTC_MS) / MS_PER_DAY;
}

/** Legacy aliases. */
export const F8e = rowMatchesAnyCriteriaGroup;
export const I8e = buildCriteriaPredicate;
export const L8e = unwrapCriteriaScalar;
export const workbookHelper927 = coerceCriteriaNumber;
export const workbookHelper928 = normalizeCriteriaString;
export const workbookHelper929 = compareCriteriaNumber;
