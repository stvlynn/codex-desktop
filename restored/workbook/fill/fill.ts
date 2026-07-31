// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-4: Fill value object — solid/gradient/pattern/image (legacy workbookCt).

import {
  tr as fillTypeEnum,
  nr as gradientKindEnum,
} from "../presentation-protobuf";
import { WorkbookColor, PatternFill } from "../theme-color";
import { parseGradientFillString } from "./gradient-fill-parse";
import {
  defaultGradientKindName,
  gradientKindProtoToName,
  gradientKindNameToProto,
} from "./gradient-kind-maps";
import {
  emptyWorkbookColor,
  isExplicitNoneFillProto,
  normalizeGradientAngleDeg,
  resolveGradientKind,
} from "./fill-proto-helpers";

export class Fill {
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
  #d;
  #f;
  #p;
  #m;
  #h;
  #g;
  #_;
  #v;
  #y = false;
  #b = false;
  constructor(fillCfg189?: string | Record<string, unknown>) {
    if (typeof fillCfg189 == "string") {
      let fillBind5608 = parseGradientFillString(fillCfg189);
      if (
        fillBind5608 &&
        typeof fillBind5608 == "object" &&
        fillBind5608.type === "none"
      ) {
        this.#b = true;
        this.#n = fillTypeEnum.FILL_TYPE_UNSPECIFIED;
        this.#r = emptyWorkbookColor();
        this.#i = undefined;
        this.#a = null;
        this.#o = null;
        this.#c = undefined;
        this.#l = undefined;
        this.#u = undefined;
        this.#d = undefined;
        return;
      }
      if (
        fillBind5608 &&
        typeof fillBind5608 == "object" &&
        fillBind5608.type === "gradient"
      ) {
        this.#n = fillTypeEnum.FILL_TYPE_GRADIENT;
        this.#r = emptyWorkbookColor();
        this.#i = fillBind5608.stops.map((item) => ({
          position: item.offset,
          color: new WorkbookColor(item.color).toProto() ?? undefined,
        }));
        this.#a =
          gradientKindNameToProto[
            fillBind5608.gradientKind ?? defaultGradientKindName
          ];
        this.#o = normalizeGradientAngleDeg(fillBind5608.angleDeg);
        this.#s = fillBind5608.isScaled;
        this.#m = fillBind5608.tileRect;
        return;
      }
      if (fillCfg189.trim().toLowerCase() === "none") {
        this.#b = true;
        this.#n = fillTypeEnum.FILL_TYPE_UNSPECIFIED;
        this.#r = emptyWorkbookColor();
        this.#i = undefined;
        this.#a = null;
        this.#o = null;
        this.#c = undefined;
        this.#l = undefined;
        this.#u = undefined;
        this.#d = undefined;
        return;
      }
      this.#n = fillTypeEnum.FILL_TYPE_SOLID;
      this.#r = new WorkbookColor(fillCfg189);
    } else
      fillCfg189?.type === "proto"
        ? ((this.#y = fillCfg189.proto !== undefined),
          (this.#b = isExplicitNoneFillProto(fillCfg189.proto)),
          (this.#n =
            fillCfg189.proto?.type ?? fillTypeEnum.FILL_TYPE_UNSPECIFIED),
          (this.#r = new WorkbookColor({
            type: "proto",
            proto: fillCfg189.proto?.color,
          })),
          (this.#c = new PatternFill({
            type: "proto",
            proto: fillCfg189.proto?.pattern,
          })),
          (this.#e = fillCfg189.proto?.relId),
          (this.#i = fillCfg189.proto?.gradientStops ?? []),
          (this.#a = resolveGradientKind(
            this.#n,
            fillCfg189.proto?.gradientKind,
          )),
          (this.#o = fillCfg189.proto?.angleDeg ?? null),
          (this.#s = fillCfg189.proto?.isScaled),
          (this.#l = fillCfg189.proto?.imageReference),
          (this.#u = fillCfg189.proto?.alphaModFix),
          (this.#d = fillCfg189.proto?.pictureEffects),
          (this.#f = fillCfg189.proto?.stretchFillRect),
          (this.#p = fillCfg189.proto?.fillRect),
          (this.#m = fillCfg189.proto?.tileRect),
          (this.#h = fillCfg189.proto?.pathType),
          (this.#g = fillCfg189.proto?.srcRect),
          (this.#_ = fillCfg189.proto?.rotateWithShape),
          (this.#v = fillCfg189.proto?.tile))
        : fillCfg189?.type === "none"
          ? ((this.#b = true),
            (this.#n = fillTypeEnum.FILL_TYPE_UNSPECIFIED),
            (this.#r = emptyWorkbookColor()),
            (this.#i = undefined),
            (this.#a = null),
            (this.#o = null),
            (this.#c = undefined),
            (this.#l = undefined),
            (this.#u = undefined),
            (this.#d = undefined))
          : fillCfg189?.type === "solid"
            ? ((this.#n = fillTypeEnum.FILL_TYPE_SOLID),
              (this.#r = new WorkbookColor(fillCfg189.color)),
              (this.#c = fillCfg189.pattern
                ? new PatternFill(fillCfg189.pattern)
                : undefined))
            : fillCfg189?.type === "gradient"
              ? ((this.#n = fillTypeEnum.FILL_TYPE_GRADIENT),
                (this.#r = emptyWorkbookColor()),
                (this.#i = fillCfg189.stops.map((item) => ({
                  position: item.offset,
                  color: new WorkbookColor(item.color).toProto() ?? undefined,
                }))),
                (this.#a =
                  gradientKindNameToProto[
                    fillCfg189.gradientKind ?? defaultGradientKindName
                  ]),
                (this.#o = normalizeGradientAngleDeg(fillCfg189.angleDeg)),
                (this.#s = fillCfg189.isScaled),
                (this.#m = fillCfg189.tileRect),
                (this.#p = fillCfg189.fillRect),
                (this.#h = fillCfg189.pathType))
              : fillCfg189?.type === "image"
                ? ((this.#n = fillTypeEnum.FILL_TYPE_PICTURE),
                  (this.#r = emptyWorkbookColor()),
                  (this.#l = fillCfg189.imageReference),
                  (this.#u = fillCfg189.alphaModFix),
                  (this.#d = fillCfg189.pictureEffects),
                  (this.#f = fillCfg189.stretchFillRect),
                  (this.#p = fillCfg189.fillRect),
                  (this.#h = fillCfg189.pathType),
                  (this.#g = fillCfg189.srcRect),
                  (this.#_ = fillCfg189.rotateWithShape),
                  (this.#v = fillCfg189.tile))
                : ((this.#n = fillTypeEnum.FILL_TYPE_UNSPECIFIED),
                  (this.#r = emptyWorkbookColor()),
                  (this.#i = undefined),
                  (this.#a = null),
                  (this.#o = null),
                  (this.#c = undefined),
                  (this.#l = undefined),
                  (this.#u = undefined),
                  (this.#d = undefined));
  }
  get type() {
    return this.#n;
  }
  get isSet() {
    return this.#b || this.#n !== fillTypeEnum.FILL_TYPE_UNSPECIFIED;
  }
  get isExplicitNone() {
    return this.#b;
  }
  get relId() {
    return this.#e;
  }
  get gradientKind() {
    return this.#a ? gradientKindProtoToName[this.#a] : null;
  }
  get angleDeg() {
    return this.#o ?? null;
  }
  get isScaled() {
    return this.#s;
  }
  get imageReference() {
    return this.#l;
  }
  get stretchFillRect() {
    return this.#f;
  }
  get fillRect() {
    return this.#p;
  }
  get tileRect() {
    return this.#m;
  }
  get srcRect() {
    return this.#g;
  }
  get rotateWithShape() {
    return this.#_;
  }
  get tile() {
    return this.#v;
  }
  get pathType() {
    return this.#h;
  }
  get alphaModFix() {
    return this.#u;
  }
  get pictureEffects() {
    return this.#d;
  }
  get transparency() {
    return this.#t;
  }
  get gradientStops() {
    return this.#i;
  }
  get pattern() {
    return this.#c;
  }
  get color() {
    return this.#r;
  }
  set color(fillCfg3231: string | Record<string, unknown>) {
    this.#n = fillTypeEnum.FILL_TYPE_SOLID;
    this.#r = new WorkbookColor(fillCfg3231);
    this.#i = [];
    this.#a = null;
    this.#o = null;
    this.#s = undefined;
    this.#m = undefined;
    this.#e = undefined;
    this.#l = undefined;
    this.#u = undefined;
    this.#d = undefined;
    this.#f = undefined;
    this.#p = undefined;
    this.#h = undefined;
    this.#g = undefined;
    this.#_ = undefined;
    this.#v = undefined;
  }
  toProto() {
    let fillBind5185 = this.#r.toProto(),
      fillBind5186 = this.#c?.toProto(),
      fillBind5187 = this.#i,
      fillBind5188 =
        fillBind5186 &&
        (this.#n === fillTypeEnum.FILL_TYPE_SOLID ||
          this.#n === fillTypeEnum.FILL_TYPE_UNSPECIFIED)
          ? fillTypeEnum.FILL_TYPE_PATTERN
          : this.#n,
      fillBind5189 = {
        type: fillBind5188,
        color: fillBind5185 ?? undefined,
        gradientStops: fillBind5187 ?? [],
        relId: this.#e,
        gradientKind: this.#a ?? undefined,
        angleDeg: this.#o ?? undefined,
        isScaled: this.#s,
        pattern: fillBind5186 ?? undefined,
        imageReference: this.#l,
        alphaModFix: this.#u,
        pictureEffects: this.#d ?? [],
        stretchFillRect: this.#f,
        fillRect: this.#p,
        tileRect: this.#m,
        pathType: this.#h,
        srcRect: this.#g,
        rotateWithShape: this.#_,
        tile: this.#v,
      };
    return fillBind5188 !== fillTypeEnum.FILL_TYPE_UNSPECIFIED ||
      fillBind5185 ||
      fillBind5186 ||
      this.#e ||
      this.#a != null ||
      this.#o != null ||
      this.#s !== undefined ||
      this.#l !== undefined ||
      this.#u !== undefined ||
      this.#d?.length ||
      this.#f !== undefined ||
      this.#p !== undefined ||
      this.#m !== undefined ||
      this.#h !== undefined ||
      this.#g !== undefined ||
      this.#_ !== undefined ||
      this.#v !== undefined
      ? fillBind5189
      : this.#b || this.#y
        ? {
            type: fillTypeEnum.FILL_TYPE_UNSPECIFIED,
            color: undefined,
            gradientStops: [],
            pictureEffects: [],
          }
        : undefined;
  }
  toConfig(fillCfg867: { preserveProto?: boolean } = {}) {
    if (this.#b)
      return {
        type: "none",
      };
    if (this.#y && fillCfg867.preserveProto !== false)
      return {
        type: "proto",
        proto: this.toProto(),
      };
    let fillBind5552 = this.#c?.toConfig(),
      fillBind5553 = this.#r.toConfig(),
      fillBind5554 = !!fillBind5552;
    if (this.#n === fillTypeEnum.FILL_TYPE_PICTURE && this.#l !== undefined)
      return {
        type: "image",
        imageReference: this.#l,
        alphaModFix: this.#u,
        pictureEffects: this.#d,
        stretchFillRect: this.#f,
        fillRect: this.#p,
        pathType: this.#h,
        srcRect: this.#g,
        rotateWithShape: this.#_,
        tile: this.#v,
      };
    if (this.#n === fillTypeEnum.FILL_TYPE_GRADIENT) {
      let fillBind10590 =
          this.#i?.map((fillCfg9909) => ({
            offset: fillCfg9909.position,
            color: new WorkbookColor({
              type: "proto",
              proto: fillCfg9909.color,
            }).toConfig(),
          })) ?? [],
        fillBind10591 =
          this.#a !== undefined && this.#a !== null
            ? (gradientKindProtoToName[this.#a] ?? undefined)
            : undefined;
      return {
        type: "gradient",
        stops: fillBind10590,
        angleDeg: this.#o ?? undefined,
        gradientKind: fillBind10591,
        isScaled: this.#s,
        tileRect: this.#m,
        fillRect: this.#p,
        pathType: this.#h,
      };
    }
    if (!(!fillBind5553 && !fillBind5554))
      return !fillBind5554 && typeof fillBind5553 == "string"
        ? fillBind5553
        : {
            type: "solid",
            color: fillBind5553,
            pattern: fillBind5552,
          };
  }
}

let fillInitialized = false;

/** Legacy workbookWt — Fill class is eager. */
export function ensureFillInit(): void {
  if (fillInitialized) return;
  fillInitialized = true;
}
