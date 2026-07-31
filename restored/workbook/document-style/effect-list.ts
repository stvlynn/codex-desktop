// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-16: EffectList VO for outer/inner shadow, glow, reflection, soft edges (legacy `_g` / Binding516).

import { esmInit } from "../../runtime/rolldown-runtime";
import { D as effectTypeEnum, Qt } from "../presentation-protobuf";

export type EffectProto = {
  type?: unknown;
  shadow?: unknown;
  glow?: unknown;
  reflection?: unknown;
  softEdges?: unknown;
  [key: string]: unknown;
};

/** Legacy `_g` — indexed effect list with typed getters. */
export class EffectList {
  #effects: EffectProto[];
  #outerShadow: unknown;
  #innerShadow: unknown;
  #glow: unknown;
  #reflection: unknown;
  #softEdges: unknown;

  constructor(effects: Iterable<EffectProto> | null | undefined) {
    this.#effects = structuredClone(Array.from(effects ?? []));
    for (const effect of this.#effects) {
      switch (effect.type) {
        case effectTypeEnum.EFFECT_TYPE_OUTER_SHADOW:
          this.#outerShadow = effect.shadow;
          break;
        case effectTypeEnum.EFFECT_TYPE_INNER_SHADOW:
          this.#innerShadow = effect.shadow;
          break;
        case effectTypeEnum.EFFECT_TYPE_GLOW:
          this.#glow = effect.glow;
          break;
        case effectTypeEnum.EFFECT_TYPE_REFLECTION:
          this.#reflection = effect.reflection;
          break;
        case effectTypeEnum.EFFECT_TYPE_SOFT_EDGES:
          this.#softEdges = effect.softEdges;
          break;
      }
    }
  }

  get outerShadow(): unknown {
    return this.#outerShadow;
  }
  get innerShadow(): unknown {
    return this.#innerShadow;
  }
  get glow(): unknown {
    return this.#glow;
  }
  get reflection(): unknown {
    return this.#reflection;
  }
  get softEdges(): unknown {
    return this.#softEdges;
  }
  get isSet(): boolean {
    return this.#effects.length > 0;
  }
  toProto(): EffectProto[] {
    return structuredClone(this.#effects);
  }
}

let effectListReady = false;

/** Legacy `workbookBinding516` — protobuf effect enums + EffectList class. */
export const ensureEffectListInit = esmInit(() => {
  if (effectListReady) return;
  Qt();
  effectListReady = true;
});
