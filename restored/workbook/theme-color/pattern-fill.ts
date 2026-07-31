// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-2: pattern fill value object (legacy Hie / Binding407).

import { dr as patternTypeEnum } from "../presentation-protobuf";
import { patternTypeNameToProto } from "../chart-proto-name-maps";
import { WorkbookColor } from "./workbook-color";

export const patternTypeProtoToName: Record<number, string | null> = {
  [patternTypeEnum.PATTERN_TYPE_UNSPECIFIED]: null,
  [patternTypeEnum.UNRECOGNIZED]: null,
};
for (const [name, code] of Object.entries(patternTypeNameToProto)) {
  patternTypeProtoToName[code as number] = name;
}

export class PatternFill {

  #e = {
    patternType: patternTypeEnum.PATTERN_TYPE_UNSPECIFIED,
  };
  #t;
  #n = false;
  constructor(colorCfg3693) {
    if (colorCfg3693.type === "proto") {
      let workbookBinding15431 = colorCfg3693.proto;
      if (!workbookBinding15431) return;
      this.#e.patternType =
        workbookBinding15431.patternType ?? patternTypeEnum.PATTERN_TYPE_UNSPECIFIED;
      this.#t = workbookBinding15431.color
        ? new WorkbookColor({
            type: "proto",
            proto: workbookBinding15431.color,
          })
        : undefined;
      this.#r();
      return;
    }
    this.#e.patternType = patternTypeNameToProto[colorCfg3693.type];
    this.#t = new WorkbookColor(colorCfg3693.color);
    this.#r();
  }
  get type() {
    return patternTypeProtoToName[this.#e.patternType];
  }
  get patternType() {
    return this.#e.patternType;
  }
  set type(colorCfg12590) {
    this.#e.patternType = patternTypeNameToProto[colorCfg12590];
    this.#r();
  }
  get color() {
    return this.#t;
  }
  set color(colorCfg11826) {
    this.#t =
      colorCfg11826 instanceof WorkbookColor
        ? colorCfg11826
        : new WorkbookColor(colorCfg11826);
    this.#r();
  }
  toProto() {
    return this.#n
      ? {
          patternType: this.#e.patternType,
          color: this.#t?.toProto() ?? undefined,
        }
      : null;
  }
  toConfig() {
    if (!this.#n) return;
    let workbookBinding18562 = this.type;
    if (!workbookBinding18562 || !this.#t) return;
    let workbookBinding18563 = this.#t.toConfig();
    if (workbookBinding18563)
      return {
        type: workbookBinding18562,
        color: workbookBinding18563,
      };
  }
  #r() {
    this.#n =
      this.#e.patternType !== patternTypeEnum.PATTERN_TYPE_UNSPECIFIED || !!this.#t;
  }

}

let patternFillInitialized = false;

export function ensurePatternFillInit(): void {
  patternFillInitialized = true;
}
