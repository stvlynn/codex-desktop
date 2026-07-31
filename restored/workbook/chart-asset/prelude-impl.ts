// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: She/Che area-grouping + axis patches + trendline collection + series data helpers (legacy She…Binding348).
// Stage-3 wave-75 cohesive chart-asset impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { qn } from "../presentation-protobuf";
import {
  ensureChartProtoNameMapsInit as workbookBinding404,
  areaGroupingNameToProto as vie,
  areaGroupingProtoToName as workbookBinding389,
  layoutTargetNameToProto as _ie,
  layoutModeNameToProto as workbookBinding386,
} from "../chart-proto-name-maps";
import {
  TextStyle as workbookVt,
  ensureTextStyleInit as workbookBt,
  applyTextStylePatch as workbookYt,
  parseTextStyleInput,
  parseFontSizePx,
} from "../text-style";
import { Fill as workbookCt, ensureFillInit as workbookWt } from "../fill";
import {
  Line as workbookBinding431,
  ensureLineInit as workbookBinding432,
} from "../line";
import {
  ensureStableIdConstantsInit as workbookH,
  randomUuid,
} from "../stable-id";
import {
  WorkbookColor as workbookBinding382,
  ensureWorkbookColorInit as workbookBinding383,
} from "../theme-color";
import {
  The,
  workbookBinding703,
  Ehe,
  workbookBinding704,
  Dhe,
  workbookBinding705,
  Ohe,
  khe,
  jhe,
  Nhe,
  workbookBinding706,
  workbookBinding707,
  workbookBinding708,
  workbookBinding709,
  Lhe,
  workbookBinding710,
  Ahe,
  Mhe,
  Phe,
  Fhe,
  Ihe,
  Rhe,
  zhe,
  Bhe,
  workbookBinding711,
  workbookBinding712,
  Vhe,
  Uhe,
  workbookBinding713,
  Khe,
  workbookBinding714,
  Hhe,
  Whe,
  Ghe,
  qhe,
  Jhe,
  workbookBinding715,
  Xhe,
  Qhe,
  workbookBinding716,
  tge,
  Yhe,
  Zhe,
  $he,
  ege,
  nge,
  workbookBinding717,
  ige,
} from "../chart-elements";
import { caH } from "./boundary-hooks";
import {
  She,
  oge,
  mge,
  hge,
  gge,
  _ge,
  workbookBinding719,
  yge,
  xge,
  Cge,
  Tge,
  workbookBinding721,
} from "./ca-slots";

/** No-op leave-behind (legacy Binding433). */
const workbookBinding433 = (): void => {};

export const Che = esmInit(() => {
  workbookBinding404();
  She = class {
    #e;
    #t;
    constructor(caIn10458) {
      this.#e = caIn10458?.grouping
        ? workbookBinding389[caIn10458.grouping]
        : undefined;
      this.#t = caIn10458?.varyColors;
    }
    get grouping() {
      return this.#e;
    }
    set grouping(caIn14793) {
      this.#e = caIn14793;
    }
    get varyColors() {
      return this.#t;
    }
    set varyColors(caIn14599) {
      this.#t = caIn14599;
    }
    toProto() {
      let workbookBinding17958 = {};
      return (
        this.#e && (workbookBinding17958.grouping = vie[this.#e]),
        this.#t && (workbookBinding17958.varyColors = this.#t),
        Object.keys(workbookBinding17958).length > 0
          ? workbookBinding17958
          : undefined
      );
    }
  };
});
export function whe(caIn395: any, caIn396: any) {
  if (!caIn396) return;
  let workbookBinding3820 =
      ("deleted" in caIn396 && typeof caIn396.deleted == "boolean") ||
      ("visible" in caIn396 && typeof caIn396.visible == "boolean"),
    workbookBinding3821 = Object.keys(caIn396).some(
      (item) => item !== "deleted" && item !== "visible",
    );
  if (
    (!workbookBinding3820 && workbookBinding3821 && (caIn395.deleted = false),
    "deleted" in caIn396 && typeof caIn396.deleted == "boolean"
      ? (caIn395.deleted = caIn396.deleted)
      : "visible" in caIn396 &&
        typeof caIn396.visible == "boolean" &&
        (caIn395.deleted = !caIn396.visible),
    "axisType" in caIn396 && (caIn395.axisType = caIn396.axisType ?? undefined),
    "tickLabelInterval" in caIn396 &&
      (caIn395.tickLabelInterval = caIn396.tickLabelInterval ?? undefined),
    "tickMarkInterval" in caIn396 &&
      (caIn395.tickMarkInterval = caIn396.tickMarkInterval ?? undefined),
    "tickLabelDistanceFromAxis" in caIn396 &&
      (caIn395.tickLabelDistanceFromAxis =
        caIn396.tickLabelDistanceFromAxis ?? undefined),
    "numberFormatCode" in caIn396 &&
      (caIn395.numberFormatCode = caIn396.numberFormatCode ?? undefined),
    "numberFormatSourceLinked" in caIn396 &&
      (caIn395.numberFormatSourceLinked =
        caIn396.numberFormatSourceLinked ?? undefined),
    "min" in caIn396 && (caIn395.min = caIn396.min ?? undefined),
    "max" in caIn396 && (caIn395.max = caIn396.max ?? undefined),
    "logBase" in caIn396 && (caIn395.logBase = caIn396.logBase ?? undefined),
    "majorUnit" in caIn396 &&
      (caIn395.majorUnit = caIn396.majorUnit ?? undefined),
    "minorUnit" in caIn396 &&
      (caIn395.minorUnit = caIn396.minorUnit ?? undefined),
    "position" in caIn396 && (caIn395.position = caIn396.position ?? undefined),
    "orientation" in caIn396 &&
      (caIn395.orientation = caIn396.orientation ?? undefined),
    "majorTickMark" in caIn396 &&
      (caIn395.majorTickMark = caIn396.majorTickMark ?? undefined),
    "minorTickMark" in caIn396 &&
      (caIn395.minorTickMark = caIn396.minorTickMark ?? undefined),
    "tickLabelPosition" in caIn396 &&
      (caIn395.tickLabelPosition =
        caIn396.tickLabelPosition === undefined
          ? undefined
          : (workbookBinding704(caIn396.tickLabelPosition) ?? undefined)),
    "crossBetween" in caIn396 &&
      (caIn395.crossBetween = caIn396.crossBetween ?? undefined),
    "crosses" in caIn396 && (caIn395.crosses = caIn396.crosses ?? undefined),
    "crossesAt" in caIn396
      ? (caIn395.crossesAt = caIn396.crossesAt ?? undefined)
      : "crossValue" in caIn396 &&
        (caIn395.crossesAt = caIn396.crossValue ?? undefined),
    "textStyle" in caIn396 && caIn396.textStyle !== undefined)
  ) {
    let workbookBinding22837 = caIn396.textStyle;
    workbookYt(caIn395.textStyle, workbookBinding22837);
  }
  if ("line" in caIn396 && caIn396.line !== undefined) {
    let workbookBinding22544 = caIn396.line;
    caIn395.line =
      workbookBinding22544 instanceof workbookBinding431
        ? workbookBinding22544
        : new workbookBinding431(workbookBinding22544);
  }
  if ("majorGridlines" in caIn396) {
    let workbookBinding21433 = caIn396.majorGridlines;
    caIn395.majorGridlines =
      workbookBinding21433 == null
        ? undefined
        : workbookBinding21433 instanceof workbookBinding431
          ? workbookBinding21433
          : new workbookBinding431(workbookBinding21433);
  }
  if ("minorGridlines" in caIn396) {
    let workbookBinding21434 = caIn396.minorGridlines;
    caIn395.minorGridlines =
      workbookBinding21434 == null
        ? undefined
        : workbookBinding21434 instanceof workbookBinding431
          ? workbookBinding21434
          : new workbookBinding431(workbookBinding21434);
  }
  if (!("title" in caIn396)) return;
  let workbookBinding3822 = caIn396.title;
  if (typeof workbookBinding3822 == "string") {
    caIn395.title.text = workbookBinding3822;
    return;
  }
  if (workbookBinding3822 == null) {
    caIn395.title.text = undefined;
    return;
  }
  if (workbookBinding703(workbookBinding3822)) {
    if ("text" in workbookBinding3822) {
      let workbookBinding22292 = workbookBinding3822.text;
      caIn395.title.text =
        typeof workbookBinding22292 == "string"
          ? workbookBinding22292
          : undefined;
    }
    if ("textStyle" in workbookBinding3822) {
      let workbookBinding22145 = workbookBinding3822.textStyle,
        workbookBinding22146 = parseTextStyleInput(workbookBinding22145);
      workbookBinding22146 &&
        workbookYt(caIn395.title.textStyle, workbookBinding22146);
    }
  }
}
export function age(caIn1320: any, caIn1321: any) {
  if (
    (caIn1321.text !== undefined && (caIn1320.text = caIn1321.text),
    caIn1321.numberFormatCode !== undefined &&
      (caIn1320.numberFormatCode = caIn1321.numberFormatCode),
    caIn1321.numberFormatSourceLinked !== undefined &&
      (caIn1320.numberFormatSourceLinked = caIn1321.numberFormatSourceLinked),
    caIn1321.manualLayout !== undefined &&
      (caIn1320.manualLayout = {
        x: caIn1321.manualLayout.x,
        y: caIn1321.manualLayout.y,
        w: caIn1321.manualLayout.w,
        h: caIn1321.manualLayout.h,
      }),
    caIn1321.textStyle)
  ) {
    let workbookBinding12748 = caIn1320.textStyle,
      workbookBinding12749 = caIn1321.textStyle;
    workbookBinding12749.fontSize !== undefined &&
      (workbookBinding12748.fontSize = parseFontSizePx(
        workbookBinding12749.fontSize,
      ));
    workbookBinding12749.fill !== undefined &&
      (workbookBinding12748.fill = workbookBinding12749.fill);
    workbookBinding12749.bold !== undefined &&
      (workbookBinding12748.bold = workbookBinding12749.bold);
    workbookBinding12749.italic !== undefined &&
      (workbookBinding12748.italic = workbookBinding12749.italic);
    workbookBinding12749.underline !== undefined &&
      (workbookBinding12748.underline = workbookBinding12749.underline);
    workbookBinding12749.name !== undefined &&
      (workbookBinding12748.name = workbookBinding12749.name);
    workbookBinding12749.family !== undefined &&
      (workbookBinding12748.family = workbookBinding12749.family);
    workbookBinding12749.alignment !== undefined &&
      (workbookBinding12748.alignment = workbookBinding12749.alignment);
  }
  caIn1321.fill !== undefined && (caIn1320.fill = caIn1321.fill);
  caIn1321.line === undefined
    ? caIn1321.stroke !== undefined && (caIn1320.stroke = caIn1321.stroke)
    : (caIn1320.stroke = caIn1321.line);
  caIn1321.textRuns !== undefined && (caIn1320.textRuns = caIn1321.textRuns);
}
export const sge = esmInit(() => {
  ige();
  workbookBt();
  oge = class {
    #e;
    #t;
    constructor(caIn10976, caIn10977) {
      this.#t = caIn10977;
      this.#e = (caIn10976 ?? []).map(
        (item) => new workbookBinding717(item, this.#t),
      );
    }
    get items() {
      return [...this.#e];
    }
    get length() {
      return this.#e.length;
    }
    add(caIn1403, caIn1404) {
      let workbookBinding7226 = new workbookBinding717(undefined, this.#t);
      return (
        (workbookBinding7226.type = caIn1403),
        caIn1404 &&
          (caIn1404.name !== undefined &&
            (workbookBinding7226.name = caIn1404.name),
          caIn1404.polynomialOrder !== undefined &&
            (workbookBinding7226.polynomialOrder = caIn1404.polynomialOrder),
          caIn1404.movingAveragePeriod !== undefined &&
            (workbookBinding7226.movingAveragePeriod =
              caIn1404.movingAveragePeriod),
          caIn1404.forecastForward !== undefined &&
            (workbookBinding7226.forecastForward = caIn1404.forecastForward),
          caIn1404.forecastBackward !== undefined &&
            (workbookBinding7226.forecastBackward = caIn1404.forecastBackward),
          caIn1404.intercept !== undefined &&
            (workbookBinding7226.intercept = caIn1404.intercept),
          caIn1404.displayEquation !== undefined &&
            (workbookBinding7226.displayEquation = caIn1404.displayEquation),
          caIn1404.displayRSquared !== undefined &&
            (workbookBinding7226.displayRSquared = caIn1404.displayRSquared),
          caIn1404.line === undefined
            ? caIn1404.stroke !== undefined &&
              (workbookBinding7226.stroke = caIn1404.stroke)
            : (workbookBinding7226.stroke = caIn1404.line),
          caIn1404.label && age(workbookBinding7226.label, caIn1404.label)),
        this.#e.push(workbookBinding7226),
        workbookBinding7226
      );
    }
    clear() {
      this.#e = [];
    }
    toProto() {
      return this.#e.map((item) => item.toProto()).filter((item) => !!item);
    }
  };
});
export function cge(caIn5393: any) {
  let workbookBinding15134 = caIn5393.values ?? [],
    workbookBinding15135 = caIn5393.valueIndices ?? [];
  if (
    workbookBinding15135.length === 0 ||
    workbookBinding15135.length !== workbookBinding15134.length
  )
    return [...workbookBinding15134];
  let workbookBinding15136 = Math.max(
      workbookBinding15134.length,
      ...workbookBinding15135.map((item) => item + 1),
    ),
    workbookBinding15137 = Array.from(
      {
        length: workbookBinding15136,
      },
      () => NaN,
    );
  return (
    workbookBinding15134.forEach((item, index) => {
      let workbookBinding22545 = workbookBinding15135[index];
      workbookBinding22545 !== undefined &&
        (workbookBinding15137[workbookBinding22545] = item);
    }),
    workbookBinding15137
  );
}
export function caFn344(caIn12287: any) {
  return caIn12287 == null
    ? ""
    : typeof caIn12287 == "string"
      ? caIn12287
      : String(caIn12287);
}
export function lge(caIn8329: any) {
  if (caIn8329.length === 0) return [];
  if (Array.isArray(caIn8329[0])) {
    let workbookBinding21924 = caIn8329;
    return workbookBinding21924.length === 1
      ? (workbookBinding21924[0] ?? []).map(caFn344)
      : workbookBinding21924.map((item) => caFn344(item?.[0]));
  }
  return caIn8329.map(caFn344);
}
export function uge(caIn4194: any, caIn4195: any) {
  if (caIn4194 == null) return [];
  if (Array.isArray(caIn4194)) return lge(caIn4194);
  if (typeof caIn4194 == "string") return [caIn4194];
  if (typeof caIn4194 == "object") {
    let workbookBinding20481 = caIn4194.values;
    if (Array.isArray(workbookBinding20481)) return lge(workbookBinding20481);
    if (typeof caIn4194[Symbol.iterator] == "function")
      return Array.from(caIn4194, caFn344);
  }
  throw TypeError(
    `${caIn4195} must be a string[] (e.g. ['2020','2021']). If you have a Range, pass range.values and flatten to 1D first.`,
  );
}
export function dge(caIn15107: any) {
  return mge.repeat(caIn15107 + 1);
}
export function fge(caIn12008: any) {
  return caIn12008 <= 0
    ? []
    : Array.from(
        {
          length: caIn12008,
        },
        (caIn16460, caIn16461) => dge(caIn16461),
      );
}
export function caFn345(caIn6105: any) {
  let workbookBinding16171 = caIn6105?.categories ?? [],
    workbookBinding16172 = caIn6105?.categoryIndices ?? [],
    workbookBinding16173 = caIn6105?.valueIndices ?? [];
  if (workbookBinding16171.length > 0) {
    let workbookBinding22017 =
      workbookBinding16172.length > 0
        ? workbookBinding16172
        : workbookBinding16173;
    return Math.max(
      workbookBinding16171.length,
      ...workbookBinding22017.map((item) => item + 1),
    );
  }
  return Math.max(
    caIn6105?.values?.length ?? 0,
    ...workbookBinding16173.map((item) => item + 1),
  );
}
export function pge(caIn10319: any) {
  return caIn10319.categoryIndices && caIn10319.categoryIndices.length > 0
    ? caIn10319.categoryIndices
    : (caIn10319.valueIndices ?? []);
}
export function caFn346(caIn4161: any) {
  if (!caIn4161) return [];
  let workbookBinding13177 = caIn4161.categories ?? [];
  if (workbookBinding13177.length === 0) return [];
  let workbookBinding13178 = pge(caIn4161);
  if (workbookBinding13178.length < workbookBinding13177.length)
    return [...workbookBinding13177];
  let workbookBinding13179 = Math.max(
    caFn345(caIn4161),
    ...workbookBinding13178.map((item) => item + 1),
  );
  if (workbookBinding13179 <= workbookBinding13177.length)
    return [...workbookBinding13177];
  let workbookBinding13180 = Array.from(
    {
      length: workbookBinding13179,
    },
    (caIn16462, caIn16463) => dge(caIn16463),
  );
  return (
    workbookBinding13177.forEach((item, index) => {
      let workbookBinding21679 = workbookBinding13178[index];
      workbookBinding21679 !== undefined &&
        Number.isInteger(workbookBinding21679) &&
        workbookBinding21679 >= 0 &&
        (workbookBinding13180[workbookBinding21679] = item);
    }),
    workbookBinding13180
  );
}
export function caFn347(caIn11080: any, caIn11081: any) {
  let workbookBinding21587 = caFn346(caIn11080);
  return workbookBinding21587.length > 0
    ? workbookBinding21587
    : caIn11081 && caIn11081.length > 0
      ? [...caIn11081]
      : fge(caFn345(caIn11080));
}
export function caFn348(caIn5096: any, caIn5097: any) {
  if (!caIn5096) return [];
  let workbookBinding14546 = caIn5096.categories ?? [];
  if (workbookBinding14546.length > 0) return [...workbookBinding14546];
  let workbookBinding14547 = caIn5096.series ?? [];
  if (caIn5097 !== undefined) {
    let workbookBinding22753 = caFn346(workbookBinding14547[caIn5097]);
    if (workbookBinding22753.length > 0) return workbookBinding22753;
  }
  for (let workbookBinding22517 of workbookBinding14547) {
    let workbookBinding22803 = caFn346(workbookBinding22517);
    if (workbookBinding22803.length > 0) return workbookBinding22803;
  }
  let workbookBinding14548 = workbookBinding14547.reduce(
    (accumulator, current) => Math.max(accumulator, caFn345(current)),
    0,
  );
  return workbookBinding14548 <= 0 ? [] : fge(workbookBinding14548);
}
