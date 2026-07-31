// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-8: TextStyle value object (legacy workbookVt).

import { Fill } from "../fill";
import { WorkbookColor } from "../theme-color";
import { Line, emuToPoints, pointsToEmu } from "../line";
import {
  textWrappingTypeNameToProto,
  textWrappingTypeProtoToName,
} from "../chart-proto-name-maps";
import { normalizeAlignment, parseAlignment } from "./alignment";
import { autofitFromProto, autofitToProto, type AutofitType } from "./autofit";
import {
  capitalizationFromTextTransform,
  textTransformFromCapitalization,
  type TextTransformName,
} from "./capitalization";
import { normalizeTextShadow } from "./text-shadow-wire";

/** Legacy Binding436 — minimum font size when serializing to proto (centipoints). */
export const MIN_FONT_SIZE_CENTIPOINTS = 100;

export type TextStyleProto = {
  anchor?: number;
  vertical?: number;
  rotation?: number;
  bold?: boolean;
  italic?: boolean;
  fontSize?: number;
  alignment?: number;
  underline?: unknown;
  bottomInset?: number;
  leftInset?: number;
  rightInset?: number;
  topInset?: number;
  useParagraphSpacing?: boolean;
  wrap?: number;
  name?: string;
  family?: string;
  scheme?: string;
  typeface?: string;
  shadow?: unknown;
  capitalization?: number;
  fill?: unknown;
  highlight?: unknown;
  outline?: unknown;
  autoFit?: unknown;
};

export type TextStyleInsets = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

type TextStyleFields = {
  anchor?: number;
  vertical?: number;
  rotation?: number;
  bold?: boolean;
  italic?: boolean;
  fontSize?: number;
  alignment?: number;
  underline?: unknown;
  bottomInset?: number;
  leftInset?: number;
  rightInset?: number;
  topInset?: number;
  useParagraphSpacing?: boolean;
  wrap?: number;
  name?: string;
  family?: string;
  scheme?: string;
  typeface?: string;
  shadow?: unknown;
  capitalization?: number;
};

export class TextStyle {
  #fields: TextStyleFields;
  #fill: Fill;
  #highlight: WorkbookColor | undefined;
  #outline: Line;
  #autoFitType: AutofitType | undefined;
  #autoFitScale: number | undefined;
  #autoFitLineSpaceReduction: number | undefined;
  #lineSpacingFixed: number | undefined;

  constructor(proto?: TextStyleProto | null) {
    this.#fill = new Fill({
      type: "proto",
      proto: proto?.fill,
    } as never);
    this.#highlight = proto?.highlight
      ? new WorkbookColor({
          type: "proto",
          proto: proto.highlight,
        })
      : undefined;
    this.#outline = new Line({
      type: "proto",
      proto: proto?.outline as never,
    });
    const autofit = autofitFromProto(proto?.autoFit as never);
    this.#fields = {
      anchor: proto?.anchor,
      vertical: proto?.vertical,
      rotation: proto?.rotation,
      bold: proto?.bold,
      italic: proto?.italic,
      fontSize: proto?.fontSize,
      alignment: parseAlignment(proto?.alignment),
      underline: proto?.underline,
      bottomInset: proto?.bottomInset,
      leftInset: proto?.leftInset,
      rightInset: proto?.rightInset,
      topInset: proto?.topInset,
      useParagraphSpacing: proto?.useParagraphSpacing,
      wrap: proto?.wrap,
      name: proto?.name,
      family: proto?.family,
      scheme: proto?.scheme,
      typeface: proto?.typeface,
      shadow: proto?.shadow,
      capitalization: proto?.capitalization,
    };
    this.#autoFitType = autofit.type;
    this.#autoFitScale = autofit.scale;
    this.#autoFitLineSpaceReduction = autofit.lineSpaceReduction;
    this.#lineSpacingFixed = undefined;
  }

  get anchor() {
    return this.#fields.anchor;
  }
  set anchor(value: number | undefined) {
    this.#fields.anchor = value;
  }

  get vertical() {
    return this.#fields.vertical;
  }
  set vertical(value: number | undefined) {
    this.#fields.vertical = value;
  }

  get rotation() {
    return this.#fields.rotation;
  }
  set rotation(value: number | undefined) {
    this.#fields.rotation = value;
  }

  get bold() {
    return this.#fields.bold;
  }
  set bold(value: boolean | undefined) {
    this.#fields.bold = value;
  }

  get italic() {
    return this.#fields.italic;
  }
  set italic(value: boolean | undefined) {
    this.#fields.italic = value;
  }

  get fontSize() {
    const centipoints = this.#fields.fontSize;
    if (centipoints !== undefined) return ((centipoints / 100) * 96) / 72;
  }
  set fontSize(value: number | undefined) {
    if (value === undefined) {
      this.#fields.fontSize = undefined;
      return;
    }
    const points = (value * 72) / 96;
    this.#fields.fontSize = Math.round(points * 100);
  }

  get fontSizeCentipoints() {
    return this.#fields.fontSize;
  }

  get alignment() {
    return this.#fields.alignment;
  }
  set alignment(value: unknown) {
    this.#fields.alignment = normalizeAlignment(value);
  }

  get lineSpacing() {
    const fixed = this.#lineSpacingFixed;
    if (!(fixed === undefined || !Number.isFinite(fixed))) return fixed / 1e5;
  }
  set lineSpacing(value: number | undefined) {
    if (value === undefined) {
      this.#lineSpacingFixed = undefined;
      return;
    }
    this.#lineSpacingFixed = Math.round(value * 1e5);
  }

  get underline() {
    return this.#fields.underline;
  }
  set underline(value: unknown) {
    this.#fields.underline = value;
  }

  get fill() {
    return this.#fill;
  }
  set fill(value: unknown) {
    this.#fill = new Fill(value as never);
  }

  get color() {
    if (this.#fill) return this.#fill.color.clone();
  }
  set color(value: unknown) {
    if (value === undefined) {
      this.#fill = new Fill();
      return;
    }
    this.#fill = new Fill({
      type: "solid",
      color: value,
    } as never);
  }

  get highlight() {
    return this.#highlight;
  }
  set highlight(value: unknown) {
    if (value === undefined) {
      this.#highlight = undefined;
      return;
    }
    const next = new WorkbookColor(value);
    this.#highlight = next.toProto() ? next : undefined;
  }

  get outline() {
    return this.#outline;
  }
  set outline(value: unknown) {
    if (value instanceof Line) {
      this.#outline = value;
      return;
    }
    this.#outline = new Line(value as never);
  }

  get shadow() {
    return this.#fields.shadow;
  }
  set shadow(value: unknown) {
    this.#fields.shadow = normalizeTextShadow(value);
  }

  get capitalization() {
    return this.#fields.capitalization;
  }
  set capitalization(value: number | undefined) {
    this.#fields.capitalization = value;
  }

  get textTransform() {
    return textTransformFromCapitalization(this.#fields.capitalization);
  }
  set textTransform(value: TextTransformName | string | undefined) {
    this.#fields.capitalization = capitalizationFromTextTransform(value);
  }

  get useParagraphSpacing() {
    return this.#fields.useParagraphSpacing;
  }
  set useParagraphSpacing(value: boolean | undefined) {
    this.#fields.useParagraphSpacing = value;
  }

  get wrap() {
    const proto = this.#fields.wrap;
    if (proto !== undefined) return textWrappingTypeProtoToName[proto];
  }
  get wrapProto() {
    return this.#fields.wrap;
  }
  set wrap(value: string | undefined) {
    if (value === undefined) {
      this.#fields.wrap = undefined;
      return;
    }
    this.#fields.wrap = (textWrappingTypeNameToProto as Record<string, number>)[
      value
    ];
  }

  get autoFit() {
    return this.#autoFitType;
  }
  set autoFit(value: AutofitType | undefined) {
    this.#autoFitType = value;
    value !== "shrinkText" &&
      ((this.#autoFitScale = undefined),
      (this.#autoFitLineSpaceReduction = undefined));
  }

  get autoFitScale() {
    return this.#autoFitScale;
  }
  set autoFitScale(value: number | undefined) {
    this.#autoFitScale = value;
  }

  get autoFitLineSpaceReduction() {
    return this.#autoFitLineSpaceReduction;
  }
  set autoFitLineSpaceReduction(value: number | undefined) {
    this.#autoFitLineSpaceReduction = value;
  }

  get name() {
    return this.#fields.name;
  }
  set name(value: string | undefined) {
    this.#fields.name = value;
  }

  get family() {
    return this.#fields.family;
  }
  set family(value: string | undefined) {
    this.#fields.family = value;
  }

  get scheme() {
    return this.#fields.scheme;
  }
  set scheme(value: string | undefined) {
    this.#fields.scheme = value;
  }

  get typeface() {
    return this.#fields.typeface;
  }
  set typeface(value: string | undefined) {
    this.#fields.typeface = value;
  }

  get topInsetEmu() {
    return this.#fields.topInset;
  }
  get rightInsetEmu() {
    return this.#fields.rightInset;
  }
  get bottomInsetEmu() {
    return this.#fields.bottomInset;
  }
  get leftInsetEmu() {
    return this.#fields.leftInset;
  }

  get autoFitProto() {
    return autofitToProto({
      type: this.#autoFitType,
      scale: this.#autoFitScale,
      lineSpaceReduction: this.#autoFitLineSpaceReduction,
    });
  }

  get insets(): TextStyleInsets | undefined {
    const { topInset, rightInset, bottomInset, leftInset } = this.#fields;
    if (
      !(
        topInset === undefined &&
        rightInset === undefined &&
        bottomInset === undefined &&
        leftInset === undefined
      )
    )
      return {
        top: topInset === undefined ? undefined : emuToPoints(topInset),
        right: rightInset === undefined ? undefined : emuToPoints(rightInset),
        bottom:
          bottomInset === undefined ? undefined : emuToPoints(bottomInset),
        left: leftInset === undefined ? undefined : emuToPoints(leftInset),
      };
  }
  set insets(value: TextStyleInsets | null | undefined) {
    this.#fields.topInset =
      value?.top === undefined ? undefined : pointsToEmu(value.top);
    this.#fields.rightInset =
      value?.right === undefined ? undefined : pointsToEmu(value.right);
    this.#fields.bottomInset =
      value?.bottom === undefined ? undefined : pointsToEmu(value.bottom);
    this.#fields.leftInset =
      value?.left === undefined ? undefined : pointsToEmu(value.left);
  }

  get isSet() {
    return Object.values(this.toProto()).some((item) => item !== undefined);
  }

  toProto(): TextStyleProto {
    const { lineSpacing: _lineSpacing, ...rest } = this
      .#fields as TextStyleFields & {
      lineSpacing?: number;
    };
    const autoFit = autofitToProto({
      type: this.#autoFitType,
      scale: this.#autoFitScale,
      lineSpaceReduction: this.#autoFitLineSpaceReduction,
    });
    return {
      anchor: rest.anchor,
      vertical: rest.vertical,
      rotation: rest.rotation,
      bold: rest.bold,
      italic: rest.italic,
      fontSize:
        rest.fontSize === undefined
          ? undefined
          : Math.max(MIN_FONT_SIZE_CENTIPOINTS, rest.fontSize),
      fill: this.#fill?.toProto(),
      outline: this.#outline?.toProto(),
      alignment: rest.alignment,
      underline: rest.underline,
      bottomInset: rest.bottomInset,
      leftInset: rest.leftInset,
      rightInset: rest.rightInset,
      topInset: rest.topInset,
      useParagraphSpacing: rest.useParagraphSpacing,
      wrap: rest.wrap,
      autoFit,
      name: rest.name,
      family: rest.family,
      scheme: rest.scheme,
      typeface: rest.typeface,
      shadow: rest.shadow,
      capitalization: rest.capitalization,
      highlight: this.#highlight?.toProto(),
    };
  }
}
