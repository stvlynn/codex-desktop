// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-6: Line stroke value object (legacy Binding431).

import {
  ur as lineStyleEnum,
  Sr as compoundStyleEnum,
  tr as fillTypeEnum,
} from "../presentation-protobuf";
import { Fill } from "../fill";
import { emuToPoints, pointsToEmu } from "./emu-units";
import {
  type DashStyleName,
  dashStyleNameToProto,
  dashStyleProtoToName,
  parseDashStyle,
} from "./dash-style";
import {
  type CompoundStyleName,
  compoundStyleNameToProto,
  compoundStyleProtoToName,
  parseCompoundStyle,
} from "./compound-style";

export type LineProto = {
  widthEmu?: number;
  fill?: unknown;
  style?: number;
  compound?: number;
};

export type LineConfig = {
  style?: DashStyleName | string;
  compound?: CompoundStyleName | string;
  width?: number;
  weight?: number;
  fill?: unknown;
  color?: unknown;
};

export type LineInput =
  | { type: "proto"; proto?: LineProto }
  | LineConfig
  | null
  | undefined;

export type LineToConfigOptions = {
  preserveProto?: boolean;
};

export class Line {
  #e: number | undefined;
  #t: Fill;
  #n: DashStyleName | undefined;
  #r: number | undefined;
  #i: CompoundStyleName | undefined;
  #a: number | undefined;
  #o: ((line: Line) => void) | undefined;
  #s: unknown;
  #c = false;

  constructor(lineCfg?: LineInput) {
    if (!lineCfg) {
      this.#e = undefined;
      this.#t = new Fill();
      this.#n = undefined;
      this.#r = undefined;
      this.#i = undefined;
      this.#a = undefined;
      return;
    }
    if ("type" in lineCfg && lineCfg.type === "proto") {
      this.#c = lineCfg.proto !== undefined;
      let widthEmu = lineCfg.proto?.widthEmu;
      this.#e =
        widthEmu === undefined ? undefined : emuToPoints(widthEmu);
      this.#t = new Fill({
        type: "proto",
        proto: lineCfg.proto?.fill,
      });
      let styleProto = lineCfg.proto?.style;
      this.#r =
        styleProto === undefined ||
        styleProto === lineStyleEnum.LINE_STYLE_UNSPECIFIED
          ? undefined
          : styleProto;
      this.#n =
        this.#r === undefined
          ? undefined
          : (dashStyleProtoToName[this.#r] ?? undefined);
      let compoundProto = lineCfg.proto?.compound;
      this.#a =
        compoundProto === undefined ||
        compoundProto === compoundStyleEnum.COMPOUND_STYLE_UNSPECIFIED
          ? undefined
          : compoundProto;
      this.#i =
        this.#a === undefined
          ? undefined
          : (compoundStyleProtoToName[this.#a] ?? undefined);
    } else {
      let cfg = lineCfg as LineConfig;
      let width = cfg.width ?? cfg.weight;
      let fillOrColor = cfg.fill ?? cfg.color;
      let compoundFromStyle =
        typeof cfg.style == "string"
          ? parseCompoundStyle(cfg.style)
          : undefined;
      let dash =
        typeof cfg.style == "string"
          ? (parseDashStyle(cfg.style) ??
            (compoundFromStyle ? "solid" : undefined))
          : (cfg.style as DashStyleName | undefined);
      let compound =
        typeof cfg.compound == "string"
          ? parseCompoundStyle(cfg.compound)
          : ((cfg.compound as CompoundStyleName | undefined) ??
            compoundFromStyle);
      this.#e = width;
      this.#t = new Fill(fillOrColor as never);
      this.#n = dash;
      this.#r = dash ? dashStyleNameToProto[dash] : undefined;
      this.#i = compound;
      this.#a = compound ? compoundStyleNameToProto[compound] : undefined;
    }
  }

  get width(): number | undefined {
    return this.#e;
  }

  get isSet(): boolean {
    return this.#hasValue();
  }

  set width(value: number | undefined) {
    this.#e = value;
    this.#o?.(this);
  }

  get fill(): Fill {
    return this.#t;
  }

  get format(): { line: Line } {
    return {
      line: this,
    };
  }

  get visible(): boolean {
    let fillProto = this.#t.toProto() as
      | { type?: number; color?: unknown }
      | undefined;
    return fillProto
      ? !(
          fillProto.type === fillTypeEnum.FILL_TYPE_UNSPECIFIED &&
          fillProto.color === undefined
        )
      : true;
  }

  set visible(value: boolean) {
    if (!value) {
      if (!this.visible) return;
      this.#s = this.#t.toConfig();
      this.fill = {
        type: "none",
      };
      return;
    }
    this.visible || (this.fill = this.#s);
  }

  get color(): string | undefined {
    let cfg = this.#t.toConfig();
    if (typeof cfg == "string") return cfg;
    if (cfg && typeof cfg == "object" && "color" in (cfg as object)) {
      let color = (cfg as { color?: unknown }).color;
      return typeof color == "string" ? color : undefined;
    }
  }

  set color(value: string | undefined) {
    typeof value != "string" ||
      value.trim().length === 0 ||
      (this.fill = value);
  }

  get style(): DashStyleName | undefined {
    return this.#n;
  }

  set style(value: DashStyleName | string | undefined) {
    let compoundFromStyle =
      typeof value == "string" ? parseCompoundStyle(value) : undefined;
    let dash =
      typeof value == "string"
        ? (parseDashStyle(value) ??
          (compoundFromStyle ? "solid" : undefined))
        : value;
    this.#n = dash;
    this.#r = dash ? dashStyleNameToProto[dash] : undefined;
    if (compoundFromStyle) {
      this.compound = compoundFromStyle;
      return;
    }
    this.#o?.(this);
  }

  get compound(): CompoundStyleName | undefined {
    return this.#i;
  }

  set compound(value: CompoundStyleName | string | undefined) {
    let compound =
      typeof value == "string" ? parseCompoundStyle(value) : value;
    this.#i = compound;
    this.#a = compound ? compoundStyleNameToProto[compound] : undefined;
    this.#o?.(this);
  }

  set fill(value: unknown) {
    this.#t = new Fill(value as never);
    this.#o?.(this);
  }

  setChangeHandler(handler: ((line: Line) => void) | undefined): void {
    this.#o = handler;
  }

  #hasValue(): boolean {
    return (
      this.#e !== undefined ||
      this.#t.toProto() !== undefined ||
      this.#n !== undefined ||
      this.#r !== undefined ||
      this.#i !== undefined ||
      this.#a !== undefined
    );
  }

  toProto(): LineProto | undefined {
    if (!this.#hasValue()) return;
    let styleProto =
      this.#n === undefined ? this.#r : dashStyleNameToProto[this.#n];
    let style =
      styleProto === undefined
        ? lineStyleEnum.LINE_STYLE_UNSPECIFIED
        : styleProto;
    let compoundProto =
      this.#i === undefined ? this.#a : compoundStyleNameToProto[this.#i];
    return {
      widthEmu: this.#e === undefined ? undefined : pointsToEmu(this.#e),
      fill: this.#t.toProto(),
      style,
      compound: compoundProto,
    };
  }

  toConfig(
    options: LineToConfigOptions = {},
  ):
    | { type: "proto"; proto: LineProto | undefined }
    | {
        style: DashStyleName | "solid";
        compound: CompoundStyleName | undefined;
        width: number | undefined;
        fill: unknown;
      }
    | undefined {
    if (this.#hasValue())
      return this.#c && options.preserveProto !== false
        ? {
            type: "proto",
            proto: this.toProto(),
          }
        : {
            style: this.#n ?? "solid",
            compound: this.#i,
            width: this.#e,
            fill: this.#t.toConfig(options as never),
          };
  }
}
