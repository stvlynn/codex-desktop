// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: TEXTBEFORE / TEXTAFTER / TEXTSPLIT / REGEX* cluster
// (legacy vdt..Jdt incl. bdt/Edt). Stage-3 wave-119.

import { createArrayValue, isArrayValue } from "../formula-array";

/** #VALUE! sentinel (legacy Binding1945). */
export const ERR_VALUE = { kind: "Error", code: "#VALUE!" } as const;
/** #N/A sentinel (legacy Binding1946). */
export const ERR_NA = { kind: "Error", code: "#N/A" } as const;

export function vdt(
  ftsIn3854: any,
  ftsIn3855: any,
  ftsIn3856: any,
  ftsIn3857: any,
  ftsIn3858: any,
  ftsIn3859: any,
) {
  if (ftsIn3854 === undefined || ftsIn3855 === undefined) return ftsBind1945;
  let ftsBind12680 = coerceToText(ftsIn3854);
  if (typeof ftsBind12680 != "string") return ftsBind12680;
  let ftsBind12681 = Ndt(ftsIn3855);
  if (typeof ftsBind12681 != "string") return ftsBind12681;
  if (ftsBind12681 === "") return ftsBind1945;
  let ftsBind12682 = Pdt(ftsIn3856);
  if (typeof ftsBind12682 != "number") return ftsBind12682;
  let ftsBind12683 = coerceMatchMode(ftsIn3857);
  if (typeof ftsBind12683 != "number") return ftsBind12683;
  let ftsBind12684 = coerceToBoolean(ftsIn3858, false);
  if (typeof ftsBind12684 != "boolean") return ftsBind12684;
  let ftsBind12685 = Ldt(
    Idt(ftsBind12680, ftsBind12681, ftsBind12683 === 1),
    ftsBind12682,
    ftsBind12684,
    ftsBind12680.length,
  );
  return ftsBind12685
    ? ftsBind12680.slice(0, ftsBind12685.index)
    : Fdt(ftsIn3859);
}
export function ydt(
  ftsIn3794: any,
  ftsIn3795: any,
  ftsIn3796: any,
  ftsIn3797: any,
  ftsIn3798: any,
  ftsIn3799: any,
) {
  if (ftsIn3794 === undefined || ftsIn3795 === undefined) return ftsBind1945;
  let ftsBind12544 = coerceToText(ftsIn3794);
  if (typeof ftsBind12544 != "string") return ftsBind12544;
  let ftsBind12545 = Ndt(ftsIn3795);
  if (typeof ftsBind12545 != "string") return ftsBind12545;
  if (ftsBind12545 === "") return ftsBind1945;
  let ftsBind12546 = Pdt(ftsIn3796);
  if (typeof ftsBind12546 != "number") return ftsBind12546;
  let ftsBind12547 = coerceMatchMode(ftsIn3797);
  if (typeof ftsBind12547 != "number") return ftsBind12547;
  let ftsBind12548 = coerceToBoolean(ftsIn3798, false);
  if (typeof ftsBind12548 != "boolean") return ftsBind12548;
  let ftsBind12549 = Ldt(
    Idt(ftsBind12544, ftsBind12545, ftsBind12547 === 1),
    ftsBind12546,
    ftsBind12548,
    ftsBind12544.length,
  );
  return ftsBind12549
    ? ftsBind12544.slice(ftsBind12549.index + ftsBind12549.length)
    : Fdt(ftsIn3799);
}
export function bdt(
  ftsIn1670: any,
  ftsIn1671: any,
  ftsIn1672: any,
  ftsIn1673: any,
  ftsIn1674: any,
  ftsIn1675: any,
) {
  let ftsBind7966 = coerceToText(ftsIn1670);
  if (typeof ftsBind7966 != "string") return ftsBind7966;
  let ftsBind7967 = Odt(ftsIn1671);
  if (!Array.isArray(ftsBind7967)) return ftsBind7967;
  let ftsBind7968 = ftsBind7967.filter((item) => item !== "");
  if (ftsBind7968.length === 0) return ftsBind1945;
  let ftsBind7969 = ftsIn1672 === undefined ? [] : Odt(ftsIn1672);
  if (!Array.isArray(ftsBind7969)) return ftsBind7969;
  let ftsBind7970 = ftsBind7969.filter((item) => item !== ""),
    ftsBind7971 = coerceToBoolean(ftsIn1673, true);
  if (typeof ftsBind7971 != "boolean") return ftsBind7971;
  let ftsBind7972 = coerceMatchMode(ftsIn1674);
  if (typeof ftsBind7972 != "number") return ftsBind7972;
  let ftsBind7973 = kdt(ftsIn1675);
  if (typeof ftsBind7973 != "string") return ftsBind7973;
  let ftsBind7974 = ftsBind7972 === 1,
    ftsBind7975 =
      ftsBind7970.length > 0
        ? Adt(ftsBind7966, ftsBind7970, ftsBind7974)
        : [ftsBind7966],
    ftsBind7976 =
      ftsBind7970.length > 0 && ftsBind7971
        ? ftsBind7975.filter((item) => item !== "")
        : ftsBind7975;
  if (ftsBind7976.length === 0) return createArrayValue([[]]);
  let ftsBind7977 = [],
    ftsBind7978 = 0;
  for (let ftsBind20521 of ftsBind7976) {
    let ftsBind21044 = Adt(ftsBind20521, ftsBind7968, ftsBind7974),
      ftsBind21045 = ftsBind7971
        ? ftsBind21044.filter((item) => item !== "")
        : ftsBind21044;
    ftsBind21045.length > ftsBind7978 && (ftsBind7978 = ftsBind21045.length);
    ftsBind7977.push(ftsBind21045);
  }
  return createArrayValue(
    ftsBind7978 === 0
      ? [[]]
      : ftsBind7977.map((item) => {
          let ftsBind21319 = item.map((_item) => _item);
          for (; ftsBind21319.length < ftsBind7978; )
            ftsBind21319.push(ftsBind7973);
          return ftsBind21319;
        }),
  );
}
export function xdt(ftsIn15476: any, ftsIn15477: any) {
  return Rdt(ftsIn15476, ftsIn15477);
}
export function Sdt(ftsIn15478: any, ftsIn15479: any) {
  return Rdt(ftsIn15478, ftsIn15479);
}
export function Cdt(ftsIn9513: any, ftsIn9514: any, ftsIn9515: any) {
  throw Error(
    `TRANSLATE is not implemented. text=${String(ftsIn9513)}, sourceLanguage=${String(ftsIn9514)}, targetLanguage=${String(ftsIn9515)}`,
  );
}
export function wdt(ftsIn11883: any) {
  throw Error(`DETECTLANGUAGE is not implemented. text=${String(ftsIn11883)}`);
}
export function Tdt(ftsIn6124: any, ftsIn6125: any, ftsIn6126: any) {
  if (ftsIn6124 === undefined || ftsIn6125 === undefined) return ftsBind1945;
  let ftsBind16198 = coerceToText(ftsIn6124);
  if (typeof ftsBind16198 != "string") return ftsBind16198;
  let ftsBind16199 = coerceToText(ftsIn6125);
  if (typeof ftsBind16199 != "string") return ftsBind16199;
  let ftsBind16200 = regexReplaceAll(ftsIn6126);
  if (typeof ftsBind16200 != "number") return ftsBind16200;
  let ftsBind16201 = regexCapture(ftsBind16199, ftsBind16200 === 1, false);
  return ftsBind16201 ? ftsBind16201.test(ftsBind16198) : ftsBind1945;
}
export function Edt(
  ftsIn2961: any,
  ftsIn2962: any,
  ftsIn2963: any,
  ftsIn2964: any,
  ftsIn2965: any,
) {
  if (
    ftsIn2961 === undefined ||
    ftsIn2962 === undefined ||
    ftsIn2963 === undefined
  )
    return ftsBind1945;
  let ftsBind10893 = coerceToText(ftsIn2961);
  if (typeof ftsBind10893 != "string") return ftsBind10893;
  let ftsBind10894 = coerceToText(ftsIn2962);
  if (typeof ftsBind10894 != "string") return ftsBind10894;
  let ftsBind10895 = coerceToText(ftsIn2963);
  if (typeof ftsBind10895 != "string") return ftsBind10895;
  let ftsBind10896 = regexReplaceAll(ftsIn2965);
  if (typeof ftsBind10896 != "number") return ftsBind10896;
  let ftsBind10897 = Gdt(ftsIn2964);
  if (typeof ftsBind10897 != "number") return ftsBind10897;
  let ftsBind10898 = regexCapture(ftsBind10894, ftsBind10896 === 1, true);
  if (!ftsBind10898) return ftsBind1945;
  let ftsBind10899 = Kdt(ftsBind10893, ftsBind10898);
  if (ftsBind10899.length === 0) return ftsBind10893;
  if (ftsBind10897 === 0)
    return qdt(ftsBind10893, ftsBind10899, () => true, ftsBind10895);
  let ftsBind10900 =
    ftsBind10897 > 0 ? ftsBind10897 - 1 : ftsBind10899.length + ftsBind10897;
  return ftsBind10900 < 0 || ftsBind10900 >= ftsBind10899.length
    ? ftsBind10893
    : qdt(
        ftsBind10893,
        ftsBind10899,
        (ftsIn16589) => ftsIn16589 === ftsBind10900,
        ftsBind10895,
      );
}
export function Ddt(
  ftsIn3626: any,
  ftsIn3627: any,
  ftsIn3628: any,
  ftsIn3629: any,
) {
  if (ftsIn3626 === undefined || ftsIn3627 === undefined) return ftsBind1945;
  let ftsBind12168 = coerceToText(ftsIn3626);
  if (typeof ftsBind12168 != "string") return ftsBind12168;
  let ftsBind12169 = coerceToText(ftsIn3627);
  if (typeof ftsBind12169 != "string") return ftsBind12169;
  let ftsBind12170 = Wdt(ftsIn3628);
  if (typeof ftsBind12170 != "number") return ftsBind12170;
  let ftsBind12171 = regexReplaceAll(ftsIn3629);
  if (typeof ftsBind12171 != "number") return ftsBind12171;
  let ftsBind12172 = regexCapture(ftsBind12169, ftsBind12171 === 1, true);
  if (!ftsBind12172) return ftsBind1945;
  let ftsBind12173 = Kdt(ftsBind12168, ftsBind12172);
  if (ftsBind12173.length === 0) return ftsBind1946;
  if (ftsBind12170 === 0) return ftsBind12173[0][0];
  let ftsBind12174 = ftsBind12173.map((item) => item[0] ?? "");
  return createArrayValue(
    ftsBind12170 === 1 ? ftsBind12174.map((item) => [item]) : [ftsBind12174],
  );
}
export function coerceToText(ftsIn13645: any) {
  let ftsBind22698 = unwrapCell(ftsIn13645);
  return isErrorKind(ftsBind22698) ? ftsBind22698 : valueToString(ftsBind22698);
}
export function Odt(ftsIn4239: any) {
  if (Array.isArray(ftsIn4239)) {
    let ftsBind16140 = [];
    for (let ftsBind17157 of ftsIn4239)
      if (ftsBind17157)
        for (let ftsBind18192 of ftsBind17157) {
          if (ftsBind18192 === undefined) continue;
          let ftsBind18673 = $5(ftsBind18192 ?? "");
          if (isErrorKind(ftsBind18673)) return ftsBind18673;
          let ftsBind18674 = valueToString(ftsBind18673);
          if (typeof ftsBind18674 != "string") return ftsBind18674;
          ftsBind16140.push(ftsBind18674);
        }
    return ftsBind16140;
  }
  let ftsBind13300 = $5(ftsIn4239);
  if (isErrorKind(ftsBind13300)) return ftsBind13300;
  let ftsBind13301 = valueToString(ftsBind13300);
  return typeof ftsBind13301 == "string" ? [ftsBind13301] : ftsBind13301;
}
export function coerceToBoolean(ftsIn4509: any, ftsIn4510: any) {
  if (ftsIn4509 === undefined) return ftsIn4510;
  let ftsBind13750 = unwrapCell(ftsIn4509);
  if (isErrorKind(ftsBind13750)) return ftsBind13750;
  if (ftsBind13750 === null || ftsBind13750 === "") return false;
  if (typeof ftsBind13750 == "boolean") return ftsBind13750;
  if (typeof ftsBind13750 == "number")
    return Number.isFinite(ftsBind13750) ? ftsBind13750 !== 0 : ftsBind1945;
  if (typeof ftsBind13750 == "string") {
    let ftsBind20751 = ftsBind13750.trim().toUpperCase();
    if (ftsBind20751 === "TRUE" || ftsBind20751 === "1") return true;
    if (ftsBind20751 === "FALSE" || ftsBind20751 === "0") return false;
  }
  return ftsBind1945;
}
export function coerceMatchMode(ftsIn5461: any) {
  if (ftsIn5461 === undefined) return 0;
  let ftsBind15261 = unwrapCell(ftsIn5461);
  if (isErrorKind(ftsBind15261)) return ftsBind15261;
  if (ftsBind15261 === null || ftsBind15261 === "") return 0;
  if (typeof ftsBind15261 == "boolean") return +!!ftsBind15261;
  if (typeof ftsBind15261 == "number")
    return ftsBind15261 === 0 || ftsBind15261 === 1
      ? ftsBind15261
      : ftsBind1945;
  if (typeof ftsBind15261 == "string") {
    let ftsBind22629 = Number(ftsBind15261);
    if (ftsBind22629 === 0 || ftsBind22629 === 1) return ftsBind22629;
  }
  return ftsBind1945;
}
export function kdt(ftsIn11611: any) {
  if (ftsIn11611 === undefined) return "";
  let ftsBind22010 = unwrapCell(ftsIn11611);
  return isErrorKind(ftsBind22010) ? ftsBind22010 : valueToString(ftsBind22010);
}
export function Adt(ftsIn8961: any, ftsIn8962: any, ftsIn8963: any) {
  if (ftsIn8962.length === 0) return [ftsIn8961];
  let ftsBind19507 = ftsIn8962.map(jdt).join("|");
  if (!ftsBind19507) return [ftsIn8961];
  let ftsBind19508 = new RegExp(ftsBind19507, ftsIn8963 ? "gi" : "g");
  return ftsIn8961.split(ftsBind19508);
}
export function jdt(ftsIn13090: any) {
  return ftsIn13090.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
export function unwrapCell(ftsIn8670: any) {
  if (Array.isArray(ftsIn8670)) {
    for (let ftsBind21771 of ftsIn8670)
      if (ftsBind21771) {
        for (let ftsBind22847 of ftsBind21771)
          if (ftsBind22847 !== undefined) return $5(ftsBind22847 ?? "");
      }
    return "";
  }
  return $5(ftsIn8670);
}
export function $5(ftsIn13373: any) {
  return ftsIn13373 instanceof Error || Mdt(ftsIn13373)
    ? ftsBind1945
    : ftsIn13373;
}
export function valueToString(ftsIn13197: any) {
  return isErrorKind(ftsIn13197)
    ? ftsIn13197
    : ftsIn13197 === null
      ? ""
      : String(ftsIn13197);
}
export function isErrorKind(ftsIn12584: any) {
  return (
    typeof ftsIn12584 == "object" && !!ftsIn12584 && ftsIn12584.kind === "Error"
  );
}
export function Mdt(props: any) {
  return typeof props == "object" && !!props && props.kind === "Lambda";
}
export function Ndt(ftsIn13574: any) {
  let ftsBind22682 = unwrapCell(ftsIn13574);
  return isErrorKind(ftsBind22682) ? ftsBind22682 : valueToString(ftsBind22682);
}
export function Pdt(ftsIn6545: any) {
  if (ftsIn6545 === undefined) return 1;
  let ftsBind16786 = unwrapCell(ftsIn6545);
  if (isErrorKind(ftsBind16786)) return ftsBind16786;
  if (ftsBind16786 === null || ftsBind16786 === "") return 1;
  if (typeof ftsBind16786 == "boolean") return ftsBind16786 ? 1 : ftsBind1945;
  let ftsBind16787 = Number(ftsBind16786);
  return !Number.isFinite(ftsBind16787) ||
    !Number.isInteger(ftsBind16787) ||
    ftsBind16787 === 0
    ? ftsBind1945
    : ftsBind16787;
}
export function Fdt(ftsIn14337: any) {
  return ftsIn14337 === undefined ? ftsBind1946 : unwrapCell(ftsIn14337);
}
export function Idt(ftsIn5288: any, ftsIn5289: any, ftsIn5290: any) {
  if (ftsIn5289 === "") return [];
  let ftsBind14897 = ftsIn5290 ? ftsIn5288.toLowerCase() : ftsIn5288,
    ftsBind14898 = ftsIn5290 ? ftsIn5289.toLowerCase() : ftsIn5289,
    ftsBind14899 = [],
    ftsBind14900 = 0;
  for (; ftsBind14900 <= ftsBind14897.length - ftsBind14898.length; ) {
    let ftsBind19829 = ftsBind14897.indexOf(ftsBind14898, ftsBind14900);
    if (ftsBind19829 === -1) break;
    ftsBind14899.push({
      index: ftsBind19829,
      length: ftsIn5289.length,
    });
    ftsBind14900 = ftsBind19829 + ftsBind14898.length;
    ftsBind14898.length === 0 && (ftsBind14900 += 1);
  }
  return ftsBind14899;
}
export function Ldt(
  ftsIn5521: any,
  ftsIn5522: any,
  ftsIn5523: any,
  ftsIn5524: any,
) {
  let ftsBind15317 = ftsIn5521;
  if (
    (ftsIn5523 &&
      (ftsIn5521.length === 0 || Math.abs(ftsIn5522) > ftsIn5521.length) &&
      (ftsBind15317 = [
        ...ftsIn5521,
        {
          index: ftsIn5524,
          length: 0,
        },
      ]),
    ftsBind15317.length === 0)
  )
    return null;
  if (ftsIn5522 > 0) {
    let ftsBind22924 = ftsIn5522 - 1;
    return ftsBind15317[ftsBind22924] ?? null;
  }
  let ftsBind15318 = ftsBind15317.length + ftsIn5522;
  return ftsBind15318 < 0 || ftsBind15318 >= ftsBind15317.length
    ? null
    : (ftsBind15317[ftsBind15318] ?? null);
}
export function Rdt(ftsIn6415: any, ftsIn6416: any) {
  if (ftsIn6415 === undefined) return ftsBind1945;
  let ftsBind16594 = zdt(ftsIn6416);
  if (typeof ftsBind16594 != "number") return ftsBind16594;
  let ftsBind16595 = Bdt(ftsIn6415);
  return ftsBind16595.kind === "Error"
    ? ftsBind16595
    : ftsBind16595.kind === "scalar"
      ? regexEscape(ftsBind16595.value, ftsBind16594 === 1)
      : ftsBind16594 === 0
        ? Hdt(ftsBind16595.grid)
        : Udt(ftsBind16595.grid);
}
export function zdt(ftsIn7430: any) {
  if (ftsIn7430 === undefined) return 0;
  let ftsBind17902 = unwrapCell(ftsIn7430);
  if (isErrorKind(ftsBind17902)) return ftsBind17902;
  if (ftsBind17902 === null || ftsBind17902 === "") return 0;
  if (typeof ftsBind17902 == "boolean") return +!!ftsBind17902;
  let ftsBind17903 = Number(ftsBind17902);
  return ftsBind17903 === 0 || ftsBind17903 === 1 ? ftsBind17903 : ftsBind1945;
}
export function Bdt(props: any) {
  if (Array.isArray(props))
    return {
      kind: "grid",
      grid: props.map((item) => Vdt(item)),
    };
  let ftsBind17521 = $5(props);
  return isArrayValue(ftsBind17521)
    ? {
        kind: "grid",
        grid: ftsBind17521.values.map((item) =>
          item.map((_item) => $5(_item ?? null)),
        ),
      }
    : {
        kind: "scalar",
        value: ftsBind17521,
      };
}
export function Vdt(props: any) {
  return props ? props.map((item) => $5(item ?? null)) : [];
}
export function regexEscape(event: any, ftsIn5619: any) {
  return isErrorKind(event)
    ? event.code
    : isArrayValue(event)
      ? ftsBind1945
      : event === null
        ? ""
        : typeof event == "string"
          ? ftsIn5619
            ? `"${event.replace(/"/g, '""')}"`
            : event
          : typeof event == "boolean"
            ? event
              ? "TRUE"
              : "FALSE"
            : String(event);
}
export function Hdt(props: any) {
  if (props.length === 0) return "";
  let ftsBind17573 = [];
  for (let ftsBind20325 of props) {
    let ftsBind20806 = ftsBind20325 ?? [];
    for (let ftsBind21814 of ftsBind20806) {
      let ftsBind22330 = regexEscape(ftsBind21814 ?? null, false);
      if (isErrorKind(ftsBind22330)) return ftsBind22330;
      ftsBind17573.push(ftsBind22330);
    }
  }
  return ftsBind17573.join(", ");
}
export function Udt(props: any) {
  if (props.length === 0) return "{}";
  let ftsBind16384 = [];
  for (let ftsBind19120 of props) {
    let ftsBind19668 = ftsBind19120 ?? [],
      ftsBind19669 = [];
    for (let ftsBind21815 of ftsBind19668) {
      let ftsBind22331 = regexEscape(ftsBind21815 ?? null, true);
      if (isErrorKind(ftsBind22331)) return ftsBind22331;
      ftsBind19669.push(ftsBind22331);
    }
    ftsBind16384.push(ftsBind19669.join(","));
  }
  return `{${ftsBind16384.join(";")}}`;
}
export function regexReplaceAll(ftsIn7454: any) {
  if (ftsIn7454 === undefined) return 0;
  let ftsBind17921 = unwrapCell(ftsIn7454);
  if (isErrorKind(ftsBind17921)) return ftsBind17921;
  if (ftsBind17921 === null || ftsBind17921 === "") return 0;
  if (typeof ftsBind17921 == "boolean") return +!!ftsBind17921;
  let ftsBind17922 = Number(ftsBind17921);
  return ftsBind17922 === 0 || ftsBind17922 === 1 ? ftsBind17922 : ftsBind1945;
}
export function Wdt(ftsIn7216: any) {
  if (ftsIn7216 === undefined) return 0;
  let ftsBind17574 = unwrapCell(ftsIn7216);
  if (isErrorKind(ftsBind17574)) return ftsBind17574;
  if (ftsBind17574 === null || ftsBind17574 === "") return 0;
  if (typeof ftsBind17574 == "boolean") return +!!ftsBind17574;
  let ftsBind17575 = Number(ftsBind17574);
  return ftsBind17575 === 0 || ftsBind17575 === 1 || ftsBind17575 === 2
    ? ftsBind17575
    : ftsBind1945;
}
export function Gdt(ftsIn6900: any) {
  if (ftsIn6900 === undefined) return 1;
  let ftsBind17225 = unwrapCell(ftsIn6900);
  if (isErrorKind(ftsBind17225)) return ftsBind17225;
  if (ftsBind17225 === null || ftsBind17225 === "") return 1;
  if (typeof ftsBind17225 == "boolean") return +!!ftsBind17225;
  let ftsBind17226 = Number(ftsBind17225);
  return !Number.isFinite(ftsBind17226) || !Number.isInteger(ftsBind17226)
    ? ftsBind1945
    : ftsBind17226;
}
export function regexCapture(ftsIn9865: any, ftsIn9866: any, ftsIn9867: any) {
  let ftsBind20410 = "";
  ftsIn9867 && (ftsBind20410 += "g");
  ftsIn9866 && (ftsBind20410 += "i");
  try {
    return new RegExp(ftsIn9865, ftsBind20410);
  } catch {
    return null;
  }
}
export function Kdt(ftsIn8245: any, ftsIn8246: any) {
  let ftsBind18759 = [],
    ftsBind18760;
  for (; (ftsBind18760 = ftsIn8246.exec(ftsIn8245)) !== null; )
    if ((ftsBind18759.push(ftsBind18760), ftsBind18760[0] === "")) {
      if (ftsIn8246.lastIndex >= ftsIn8245.length) break;
      ftsIn8246.lastIndex += 1;
    }
  return ftsBind18759;
}
export function qdt(
  ftsIn4829: any,
  ftsIn4830: any,
  ftsIn4831: any,
  ftsIn4832: any,
) {
  if (ftsIn4830.length === 0) return ftsIn4829;
  let ftsBind14204 = 0,
    ftsBind14205 = "";
  for (
    let ftsBind16788 = 0;
    ftsBind16788 < ftsIn4830.length;
    ftsBind16788 += 1
  ) {
    let ftsBind17781 = ftsIn4830[ftsBind16788],
      ftsBind17782 = ftsBind17781[0] ?? "",
      ftsBind17783 = ftsBind17781.index ?? 0,
      ftsBind17784 = ftsBind17783 + ftsBind17782.length;
    if (
      ((ftsBind14205 += ftsIn4829.slice(ftsBind14204, ftsBind17783)),
      ftsIn4831(ftsBind16788))
    ) {
      let ftsBind22446 = ftsBind17781.slice(1).map((item) => item ?? "");
      ftsBind14205 += Jdt(ftsIn4832, ftsBind17782, ftsBind22446);
    } else ftsBind14205 += ftsBind17782;
    ftsBind14204 = ftsBind17784;
  }
  return ((ftsBind14205 += ftsIn4829.slice(ftsBind14204)), ftsBind14205);
}
export function Jdt(ftsIn3533: any, ftsIn3534: any, ftsIn3535: any) {
  let ftsBind12004 = "";
  for (
    let ftsBind12817 = 0;
    ftsBind12817 < ftsIn3533.length;
    ftsBind12817 += 1
  ) {
    let ftsBind13422 = ftsIn3533[ftsBind12817];
    if (ftsBind13422 === "$") {
      if (ftsIn3533[ftsBind12817 + 1] === "$") {
        ftsBind12004 += "$";
        ftsBind12817 += 1;
        continue;
      }
      let ftsBind14432 = "",
        ftsBind14433 = ftsBind12817 + 1;
      for (
        ;
        ftsBind14433 < ftsIn3533.length &&
        /[0-9]/.test(ftsIn3533[ftsBind14433]);
      ) {
        ftsBind14432 += ftsIn3533[ftsBind14433];
        ftsBind14433 += 1;
      }
      if (ftsBind14432) {
        let ftsBind20072 = Number(ftsBind14432);
        ftsBind20072 === 0
          ? (ftsBind12004 += ftsIn3534)
          : ftsBind20072 > 0 &&
            ftsBind20072 <= ftsIn3535.length &&
            (ftsBind12004 += ftsIn3535[ftsBind20072 - 1] ?? "");
        ftsBind12817 = ftsBind14433 - 1;
        continue;
      }
    }
    ftsBind12004 += ftsBind13422;
  }
  return ftsBind12004;
}
