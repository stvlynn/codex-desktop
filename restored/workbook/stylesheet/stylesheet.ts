// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-5: Stylesheet — font/fill/border/xf/numberFormat tables (legacy Bae / Binding424).

import {
  tr as fillTypeEnum,
  dr as patternTypeEnum,
} from "../presentation-protobuf";
import { WorkbookColor } from "../theme-color";
import { Fill } from "../fill";
import {
  defaultFont,
  defaultPatternFills,
  defaultBorders,
  defaultCellXf,
  normalCellStyle,
  defaultCellStyleXf,
} from "../presentation-theme";
import { SpreadsheetFont } from "./spreadsheet-font";
import { Borders } from "./borders";
import { CellXf } from "./cell-xf";
import { NumberFormat } from "./number-format";
import { deepCloneArray, stableJsonStringify } from "./style-value-utils";
import {
  applyThemeColorsToDxf,
  borderFromConfig,
  cloneFill,
  coerceSolidFillToPattern,
} from "./stylesheet-helpers";

export type FontRegistry = {
  addTextStyle?: (font: unknown) => void;
  addFamily?: (name: string | undefined) => void;
};

export class Stylesheet {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #s;
  #c;
  #l;
  #u;
  #d = 0;
  #f;
  constructor(
    styleCfg788?: Record<string, any> | null,
    styleCfg789?: FontRegistry | null,
  ) {
    let styleBind5387 = styleCfg788 ?? {};
    this.#f = styleCfg789;
    let styleBind5388 =
      styleBind5387.fonts && styleBind5387.fonts.length > 0
        ? styleBind5387.fonts
        : [defaultFont];
    this.#e = styleBind5388.map((item) => new SpreadsheetFont(item));
    let styleBind5389 = (() => {
      let styleBind14890 = styleBind5387.fills ?? [];
      if (styleBind14890.length === 0) return defaultPatternFills;
      if (styleBind14890.length === 1) {
        let styleBind18565 = styleBind14890[0],
          styleBind18566 = styleBind18565?.pattern?.patternType;
        if (
          styleBind18565?.type === fillTypeEnum.FILL_TYPE_PATTERN &&
          styleBind18566 === patternTypeEnum.PATTERN_TYPE_NONE
        )
          return [...styleBind14890, defaultPatternFills[1]];
      }
      return styleBind14890;
    })();
    this.#t = styleBind5389.map(
      (item) =>
        new Fill({
          type: "proto",
          proto: item,
        }),
    );
    let styleBind5390 =
      styleBind5387.borders && styleBind5387.borders.length > 0
        ? styleBind5387.borders
        : [defaultBorders];
    if (
      ((this.#n = styleBind5390.map((item) => new Borders(item))),
      (this.#i = deepCloneArray(styleBind5387.cellStyles)),
      (this.#a = deepCloneArray(styleBind5387.cellStyleXfs)),
      this.#i.length === 0 &&
        (this.#i = [
          {
            ...normalCellStyle,
          },
        ]),
      this.#a.length === 0)
    ) {
      let styleBind20528 = defaultCellStyleXf.format,
        styleBind20529 = defaultCellStyleXf.index;
      this.#a = [
        {
          index: styleBind20529,
          format: styleBind20528
            ? {
                ...styleBind20528,
              }
            : undefined,
        },
      ];
    }
    let styleBind5391 =
      styleBind5387.cellXfs && styleBind5387.cellXfs.length > 0
        ? styleBind5387.cellXfs
        : [defaultCellXf];
    this.#r = styleBind5391.map((item) => {
      let styleBind19471 = new CellXf(item);
      this.#_(styleBind19471.fontId);
      let styleBind19472 = this.#a[styleBind19471.xfId ?? 0]?.format?.fontId;
      return (this.#_(styleBind19472), styleBind19471);
    });
    this.#o = deepCloneArray(styleBind5387.dxfs);
    for (let styleBind22854 of this.#o)
      this.#f?.addTextStyle(styleBind22854.font);
    this.#s = deepCloneArray(styleBind5387.indexedColors);
    this.#c = deepCloneArray(styleBind5387.mruColors);
    this.#l = (styleBind5387.numberFormats ?? []).map(
      (item) => new NumberFormat(item),
    );
    this.#u = this.#x();
  }
  describe(styleCfg2716?: number) {
    let styleBind10317 =
        typeof styleCfg2716 == "number" &&
        styleCfg2716 >= 0 &&
        styleCfg2716 < this.#r.length
          ? styleCfg2716
          : 0,
      styleBind10318 = this.#r[styleBind10317];
    if (!styleBind10318)
      throw Error(`Missing cell format at index ${styleBind10317}`);
    return {
      styleIndex: styleBind10317,
      fill: this.#p(styleBind10318.fillId),
      font: this.#m(styleBind10318.fontId),
      border: this.#h(styleBind10318.borderId),
      numberFormatId: styleBind10318.numberFormatId,
      numberFormatCode: this.#S(styleBind10318.numberFormatId),
      wrapText: styleBind10318.wrapText,
      horizontalAlignment: styleBind10318.horizontalAlignment,
      verticalAlignment: styleBind10318.verticalAlignment,
      featurePropertyBagIndex: styleBind10318.featurePropertyBagIndex,
    };
  }
  getStyleCount() {
    return this.#r.length;
  }
  getRevision() {
    return this.#d;
  }
  getNumberFormatCode(styleCfg13579?: number) {
    return this.#S(styleCfg13579);
  }
  register(styleCfg1344: Record<string, any>) {
    let styleBind7085 = styleCfg1344.font
        ? this.#g(styleCfg1344.font)
        : undefined,
      styleBind7086 = styleCfg1344.fill
        ? this.#v(styleCfg1344.fill)
        : undefined,
      styleBind7087 = styleCfg1344.border
        ? this.#y(styleCfg1344.border)
        : undefined,
      styleBind7088 = this.#b(
        styleCfg1344.numberFormatId,
        styleCfg1344.numberFormatCode,
      ),
      styleBind7089 = new CellXf();
    styleBind7089.fontId = styleBind7085;
    styleBind7089.fillId = styleBind7086;
    styleBind7089.borderId = styleBind7087;
    styleBind7089.xfId = 0;
    styleBind7089.numberFormatId = styleBind7088;
    styleBind7089.wrapText = styleCfg1344.wrapText;
    styleBind7089.horizontalAlignment = styleCfg1344.horizontalAlignment;
    styleBind7089.verticalAlignment = styleCfg1344.verticalAlignment;
    styleBind7089.featurePropertyBagIndex =
      styleCfg1344.featurePropertyBagIndex;
    styleBind7089.applyFont = styleBind7085 !== undefined;
    styleBind7089.applyFill = styleBind7086 !== undefined;
    styleBind7089.applyBorder = styleBind7087 !== undefined;
    styleBind7089.applyNumberFormat = styleBind7088 !== undefined;
    (styleCfg1344.horizontalAlignment !== undefined ||
      styleCfg1344.verticalAlignment !== undefined ||
      styleCfg1344.wrapText !== undefined) &&
      (styleBind7089.applyAlignment = true);
    let styleBind7090 = this.#E(styleBind7089);
    return styleBind7090 === undefined
      ? (this.#r.push(styleBind7089), (this.#d += 1), this.#r.length - 1)
      : styleBind7090;
  }
  resolveFeaturePropertyBagStyleIndex(
    styleCfg4053: number | undefined,
    styleCfg4054: number | undefined,
  ) {
    let styleBind13018 =
        typeof styleCfg4053 == "number" &&
        styleCfg4053 >= 0 &&
        styleCfg4053 < this.#r.length
          ? styleCfg4053
          : 0,
      styleBind13019 = this.#r[styleBind13018] ?? new CellXf();
    if (styleBind13019.featurePropertyBagIndex === styleCfg4054)
      return styleBind13018;
    let styleBind13020 = new CellXf(styleBind13019.toProto());
    styleBind13020.featurePropertyBagIndex = styleCfg4054;
    let styleBind13021 = this.#E(styleBind13020);
    return styleBind13021 === undefined
      ? (this.#r.push(styleBind13020), (this.#d += 1), this.#r.length - 1)
      : styleBind13021;
  }
  toProto() {
    return {
      fonts: this.#e.map((item) => item.toProto()),
      fills: this.#t.map((item) => {
        let styleBind20135 = item.toProto();
        if (!styleBind20135) throw Error("Stored fill is missing proto data.");
        return styleBind20135;
      }),
      cellXfs: this.#r.map((item) => item.toProto()),
      borders: this.#n.map((item) => item.toProto()),
      cellStyles: deepCloneArray(this.#i),
      cellStyleXfs: deepCloneArray(this.#a),
      numberFormats: this.#l.map((item) => item.toProto()),
      dxfs: deepCloneArray(this.#o),
      indexedColors: deepCloneArray(this.#s),
      mruColors: deepCloneArray(this.#c),
    };
  }
  registerDifferentialFormat(
    styleCfg1269: Record<string, any>,
    styleCfg1270?: unknown,
  ) {
    let styleBind6900 = {};
    if (styleCfg1269.fill) {
      let styleBind20882 = (
        styleCfg1269.fill instanceof Fill
          ? styleCfg1269.fill
          : new Fill(styleCfg1269.fill)
      ).toProto();
      styleBind20882 &&
        (styleBind6900.fill = coerceSolidFillToPattern(styleBind20882));
    }
    if (styleCfg1269.font) {
      let styleBind12922 = new SpreadsheetFont();
      styleBind12922.bold = styleCfg1269.font.bold;
      styleBind12922.italic = styleCfg1269.font.italic;
      styleBind12922.size = styleCfg1269.font.size;
      styleBind12922.name = styleCfg1269.font.name;
      styleCfg1269.font.color &&
        (styleBind12922.color =
          styleCfg1269.font.color instanceof WorkbookColor
            ? styleCfg1269.font.color
            : new WorkbookColor(styleCfg1269.font.color));
      styleBind6900.font = styleBind12922.toProto();
      this.#f?.addTextStyle(styleBind6900.font);
    }
    if (styleCfg1269.border) {
      let styleBind21699 = borderFromConfig(styleCfg1269.border);
      styleBind21699.hasValues() &&
        (styleBind6900.border = styleBind21699.toProto());
    }
    if (styleCfg1269.numberFormat) {
      let styleBind19781 = this.#b(undefined, styleCfg1269.numberFormat);
      styleBind19781 !== undefined &&
        (styleBind6900.numberFormat = {
          id: styleBind19781,
          formatCode: styleCfg1269.numberFormat,
        });
    }
    return (
      styleCfg1270 && applyThemeColorsToDxf(styleBind6900, styleCfg1270),
      this.#o.push(styleBind6900),
      (this.#d += 1),
      this.#o.length - 1
    );
  }
  #p(styleCfg10826) {
    if (styleCfg10826 === undefined) return;
    let styleBind21349 = this.#t[styleCfg10826];
    if (styleBind21349) return cloneFill(styleBind21349);
  }
  #m(styleCfg10580) {
    if (styleCfg10580 === undefined) return;
    let styleBind21051 = this.#e[styleCfg10580];
    return styleBind21051 ? styleBind21051.clone() : undefined;
  }
  #h(styleCfg10581) {
    if (styleCfg10581 === undefined) return;
    let styleBind21052 = this.#n[styleCfg10581];
    return styleBind21052 ? styleBind21052.clone() : undefined;
  }
  #g(styleCfg8561) {
    let styleBind19058 = styleCfg8561.clone();
    this.#f?.addFamily(styleBind19058.name);
    let styleBind19059 = this.#C(styleBind19058);
    return styleBind19059 === undefined
      ? (this.#e.push(styleBind19058), this.#e.length - 1)
      : styleBind19059;
  }
  #_(styleCfg12350) {
    styleCfg12350 !== undefined &&
      this.#f?.addFamily(this.#e[styleCfg12350]?.name);
  }
  #v(styleCfg6592) {
    let styleBind16863 = styleCfg6592.toProto();
    if (!styleBind16863) throw Error("Fill is missing proto data.");
    let styleBind16864 = new Fill({
        type: "proto",
        proto: styleBind16863,
      }),
      styleBind16865 = this.#w(styleBind16864);
    return styleBind16865 === undefined
      ? (this.#t.push(styleBind16864), this.#t.length - 1)
      : styleBind16865;
  }
  #y(styleCfg9759) {
    let styleBind20297 = styleCfg9759.clone(),
      styleBind20298 = this.#T(styleBind20297);
    return styleBind20298 === undefined
      ? (this.#n.push(styleBind20297), this.#n.length - 1)
      : styleBind20298;
  }
  #b(styleCfg6018, styleCfg6019) {
    if (styleCfg6019 && styleCfg6019.trim() !== "") {
      let styleBind18041 = this.#l.find(
        (item) => item.formatCode === styleCfg6019,
      );
      if (styleBind18041?.id !== undefined) return styleBind18041.id;
      let styleBind18042 = this.#u++;
      return (
        this.#l.push(
          new NumberFormat({
            id: styleBind18042,
            formatCode: styleCfg6019,
          }),
        ),
        styleBind18042
      );
    }
    return styleCfg6018;
  }
  #x() {
    let styleBind19578 = this.#l
        .map((item) => item.id ?? 0)
        .filter((item) => item > 0),
      styleBind19579 = styleBind19578.length ? Math.max(...styleBind19578) : 0;
    return Math.max(200, styleBind19579 + 1);
  }
  #S(styleCfg11510) {
    if (styleCfg11510 !== undefined)
      return this.#l.find((item) => item.id === styleCfg11510)?.formatCode;
  }
  #C(styleCfg9371) {
    for (
      let styleBind20761 = 0;
      styleBind20761 < this.#e.length;
      styleBind20761 += 1
    ) {
      let styleBind22166 = this.#e[styleBind20761];
      if (styleBind22166 && styleBind22166.equals(styleCfg9371))
        return styleBind20761;
    }
  }
  #w(styleCfg5453) {
    let styleBind15244 = styleCfg5453.toProto();
    if (!styleBind15244) throw Error("Fill is missing proto data.");
    let styleBind15245 = stableJsonStringify(styleBind15244);
    for (
      let styleBind18854 = 0;
      styleBind18854 < this.#t.length;
      styleBind18854 += 1
    ) {
      let styleBind20193 = this.#t[styleBind18854];
      if (!styleBind20193) continue;
      let styleBind20194 = styleBind20193.toProto();
      if (
        styleBind20194 &&
        stableJsonStringify(styleBind20194) === styleBind15245
      )
        return styleBind18854;
    }
  }
  #T(styleCfg9372) {
    for (
      let styleBind20762 = 0;
      styleBind20762 < this.#n.length;
      styleBind20762 += 1
    ) {
      let styleBind22167 = this.#n[styleBind20762];
      if (styleBind22167 && styleBind22167.equals(styleCfg9372))
        return styleBind20762;
    }
  }
  #E(styleCfg9373) {
    for (
      let styleBind20763 = 0;
      styleBind20763 < this.#r.length;
      styleBind20763 += 1
    ) {
      let styleBind22168 = this.#r[styleBind20763];
      if (styleBind22168 && styleBind22168.equals(styleCfg9373))
        return styleBind20763;
    }
  }
}
