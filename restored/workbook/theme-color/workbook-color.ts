// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-2: workbook/presentation color value object (legacy Binding382).

import { Zn as colorTypeEnum } from "../presentation-protobuf";
import { colorTypeProtoToName } from "./color-type-proto-to-name";
import {
  normalizeColorTransformConfig,
  colorTransformToConfig,
  normalizeProtoTint,
} from "./color-transform-config";
import {
  parseLightenDarkenSuffix,
  parseColorString,
  normalizeHexColor,
  applyTransformToHex,
} from "./color-string-parse";
import { hexToRgb } from "./rgb-hex";
import {
  clampUnitInterval,
  normalizeUnitOrPercent,
} from "./color-unit-helpers";

const defaultHexBlack = "#000000";

export class WorkbookColor {
  #e;
  #t = false;
  #n;
  #r;
  constructor(
    colorCfg567: unknown,
    colorCfg568?: { resolveThemeColor?: (name: string) => string | undefined },
  ) {
    if (
      ((this.#r = colorCfg568),
      (this.#t = true),
      typeof colorCfg567 == "string")
    ) {
      this.#e = {
        type: colorTypeEnum.COLOR_TYPE_RGB,
        value: colorCfg567,
        transform: undefined,
        lastColor: undefined,
      };
      this.#e.value = this.#i(colorCfg567);
    } else if (colorCfg567?.type === "proto") {
      if (
        !colorCfg567.proto ||
        colorCfg567.proto.type === colorTypeEnum.COLOR_TYPE_UNSPECIFIED
      ) {
        this.#e = {
          type: colorTypeEnum.COLOR_TYPE_UNSPECIFIED,
          value: "",
          transform: undefined,
          lastColor: undefined,
        };
        this.#t = false;
        this.#n = undefined;
        return;
      } else {
        this.#e = {
          type: colorCfg567.proto?.type,
          value: colorCfg567.proto?.value,
          transform: colorCfg567.proto?.transform,
          lastColor: colorCfg567.proto?.lastColor,
        };
        this.#e.type === colorTypeEnum.COLOR_TYPE_RGB &&
          this.#e.value.length === 8 &&
          (this.#e.value = this.#e.value.slice(2));
        this.#e.type === colorTypeEnum.COLOR_TYPE_RGB &&
          (this.#e.value = normalizeHexColor(this.#e.value));
      }
    } else if (colorCfg567?.type === "rgb") {
      let workbookBinding10676 = parseColorString(colorCfg567.value),
        workbookBinding10677 =
          workbookBinding10676?.type === colorTypeEnum.COLOR_TYPE_RGB
            ? workbookBinding10676
            : null,
        workbookBinding10678 =
          typeof workbookBinding10677?.alpha == "number" ||
          typeof colorCfg567.transform?.opacity == "number"
            ? (workbookBinding10677?.alpha ?? 1) *
              normalizeUnitOrPercent(colorCfg567.transform?.opacity ?? 1)
            : undefined;
      this.#e = {
        type: colorTypeEnum.COLOR_TYPE_RGB,
        value:
          workbookBinding10677?.value ?? normalizeHexColor(colorCfg567.value),
        transform: normalizeColorTransformConfig({
          opacity: workbookBinding10678,
          lighten: colorCfg567.transform?.lighten,
          darken: colorCfg567.transform?.darken,
        }),
        lastColor: undefined,
      };
    } else if (colorCfg567?.type === "theme")
      this.#e = {
        type: colorTypeEnum.COLOR_TYPE_SCHEME,
        value: colorCfg567.value,
        transform: normalizeColorTransformConfig(colorCfg567.transform),
        lastColor: undefined,
      };
    else throw Error("Invalid color config");
    this.#o();
  }
  get value() {
    return this.#e.value;
  }
  get hex() {
    return this.#t
      ? (this.#n === undefined && this.#o(), this.#n ?? defaultHexBlack)
      : defaultHexBlack;
  }
  #i(colorCfg1858) {
    let workbookBinding8464 = colorCfg1858.trim();
    if (!workbookBinding8464)
      return (
        (this.#e.type = colorTypeEnum.COLOR_TYPE_RGB),
        this.#a(undefined),
        defaultHexBlack
      );
    let workbookBinding8465 = parseLightenDarkenSuffix(workbookBinding8464),
      workbookBinding8466 = workbookBinding8465
        ? parseColorString(workbookBinding8465.base)
        : null,
      workbookBinding8467 =
        workbookBinding8466 ?? parseColorString(workbookBinding8464);
    if (workbookBinding8467) {
      this.#e.type = workbookBinding8467.type;
      this.#e.value = workbookBinding8467.value;
      let workbookBinding12633 = workbookBinding8466
          ? workbookBinding8465?.transform
          : undefined,
        workbookBinding12634 = normalizeColorTransformConfig({
          opacity:
            typeof workbookBinding8467.alpha == "number" ||
            typeof workbookBinding12633?.opacity == "number"
              ? (workbookBinding8467.alpha ?? 1) *
                normalizeUnitOrPercent(workbookBinding12633?.opacity ?? 1)
              : undefined,
          lighten: workbookBinding12633?.lighten,
          darken: workbookBinding12633?.darken,
        });
      return (
        (this.#e.transform = workbookBinding12634),
        workbookBinding8467.value
      );
    }
    return (
      `${colorCfg1858}`,
      (this.#e.type = colorTypeEnum.COLOR_TYPE_RGB),
      (this.#e.value = defaultHexBlack),
      this.#a(undefined),
      defaultHexBlack
    );
  }
  #a(colorCfg3210) {
    if (
      colorCfg3210 === undefined ||
      Number.isNaN(colorCfg3210) ||
      colorCfg3210 >= 1
    ) {
      if (!this.#e.transform) {
        this.#o();
        return;
      }
      let { alpha, ...rest } = this.#e.transform,
        workbookBinding15583 = Object.values(rest).some(
          (item) => item !== undefined && item !== 0,
        );
      this.#e.transform = workbookBinding15583 ? rest : undefined;
      this.#o();
      return;
    }
    let workbookBinding11381 = Math.max(0, Math.min(colorCfg3210, 1)),
      workbookBinding11382 = {
        ...(this.#e.transform ?? {}),
      };
    workbookBinding11382.alpha = Math.round(workbookBinding11381 * 1e5);
    this.#e.transform = workbookBinding11382;
    this.#o();
  }
  get transform() {
    return this.#e.transform;
  }
  set transform(colorCfg12655) {
    this.#e.transform = colorCfg12655;
    this.#o();
  }
  get type() {
    return colorTypeProtoToName[this.#e.type];
  }
  get lastColor() {
    return this.#e.lastColor;
  }
  toProto() {
    if (!this.#t) return;
    let workbookBinding14701 =
      this.#e.type === colorTypeEnum.COLOR_TYPE_RGB
        ? normalizeHexColor(this.#e.value).slice(1)
        : this.#e.value;
    return {
      type: this.#e.type,
      value: workbookBinding14701,
      transform: normalizeProtoTint(this.#e.transform),
      lastColor: this.#e.lastColor,
    };
  }
  toConfig() {
    if (this.#t) {
      if (this.type === "theme") {
        let workbookBinding19057 = colorTransformToConfig(this.#e.transform);
        return workbookBinding19057
          ? {
              type: "theme",
              value: this.#e.value,
              transform: workbookBinding19057,
            }
          : this.#e.value;
      }
      if (this.type === "rgb") {
        let workbookBinding12728 = this.#e.transform,
          workbookBinding12729 = workbookBinding12728?.alpha,
          { alpha, ...rest } = workbookBinding12728 ?? {},
          workbookBinding12730 = Object.values(rest).some(
            (item) => item !== undefined && item !== 0,
          ),
          workbookBinding12731 = normalizeHexColor(this.#e.value),
          workbookBinding12732 = workbookBinding12730
            ? applyTransformToHex(workbookBinding12731, workbookBinding12728)
            : workbookBinding12731;
        if (typeof workbookBinding12729 == "number") {
          let { r: __r, g, b } = hexToRgb(workbookBinding12732);
          return `rgba(${__r}, ${g}, ${b}, ${clampUnitInterval(workbookBinding12729 / 1e5)})`;
        }
        return workbookBinding12732;
      }
      if (this.type === "system") {
        let workbookBinding22043 = this.#e.lastColor;
        return workbookBinding22043
          ? normalizeHexColor(workbookBinding22043)
          : defaultHexBlack;
      }
    }
  }
  toMarkdown() {
    return this.hex;
  }
  clone() {
    return new WorkbookColor({
      type: "proto",
      proto: this.#e,
    });
  }
  #o() {
    if (!this.#t) {
      this.#n = undefined;
      return;
    }
    let workbookBinding8366 =
      this.#e.type ?? colorTypeEnum.COLOR_TYPE_UNSPECIFIED;
    if (workbookBinding8366 === colorTypeEnum.COLOR_TYPE_RGB) {
      this.#n = applyTransformToHex(this.#e.value, this.#e.transform);
      return;
    }
    if (workbookBinding8366 === colorTypeEnum.COLOR_TYPE_SYSTEM) {
      let workbookBinding20667 = this.#e.lastColor;
      workbookBinding20667 ||= defaultHexBlack;
      this.#n = applyTransformToHex(workbookBinding20667, this.#e.transform);
      return;
    }
    if (workbookBinding8366 === colorTypeEnum.COLOR_TYPE_SCHEME) {
      let workbookBinding14252 = this.#r?.resolveThemeColor;
      if (!workbookBinding14252) {
        this.#n = defaultHexBlack;
        return;
      }
      let workbookBinding14253 = workbookBinding14252(this.#e.value);
      if (!workbookBinding14253) {
        `${this.#e.value}`;
        this.#n = defaultHexBlack;
        return;
      }
      let workbookBinding14254 = normalizeHexColor(workbookBinding14253);
      this.#n = applyTransformToHex(workbookBinding14254, this.#e.transform);
      return;
    }
    this.#n = defaultHexBlack;
  }
}

let workbookColorInitialized = false;

export function ensureWorkbookColorInit(): void {
  workbookColorInitialized = true;
}
