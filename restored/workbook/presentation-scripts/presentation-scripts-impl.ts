// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: walnut presentation script registry + runner (legacy kLe/OLe/jLe/ALe).
// Stage-3 wave-147. Dead default-constant assigns from kLe were already owned by presentation-edit.

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureChartProtoNameMapsInit as workbookBinding404 } from "../chart-proto-name-maps";
import {
  insertSlideFromLayout as mLe,
  insertShape as hLe,
  insertChartFromTemplate as gLe,
  setShapeFill as _Le,
  setShapeStroke as vLe,
  setSlideBackgroundFill as yLe,
  setTextRangeFormatting as bLe,
} from "../presentation-edit";

export const OLe = {
  insertSlide: {
    feature: "walnut_insert_slide_from_layout",
    run: mLe,
  },
  insertShape: {
    feature: "walnut_insert_shape",
    run: hLe,
  },
  insertChartFromTemplate: {
    feature: "walnut_insert_chart_from_template",
    run: gLe,
  },
  setShapeFill: {
    feature: "walnut_set_shape_fill",
    run: _Le,
  },
  setShapeStroke: {
    feature: "walnut_set_shape_stroke",
    run: vLe,
  },
  setSlideBackgroundFill: {
    feature: "walnut_set_slide_background_fill",
    run: yLe,
  },
  setTextRangeFormatting: {
    feature: "walnut_set_text_range_formatting",
    run: bLe,
  },
};

/** @deprecated legacy alias — same registry object. */
export const DLe = OLe;

export const kLe = esmInit(() => {
  workbookBinding404();
});

export class ALe {
  #e;
  #t = null;
  #n = null;
  #r = null;
  constructor(psIn14912) {
    this.#e = psIn14912;
  }
  configureRuntime(psIn9681) {
    Object.prototype.hasOwnProperty.call(psIn9681, "resolveSlideId") &&
      (this.#t = psIn9681.resolveSlideId ?? null);
  }
  onAfterRun(psIn14227) {
    this.#n = psIn14227 ?? null;
  }
  onError(psIn14555) {
    this.#r = psIn14555 ?? null;
  }
  run(psIn3202, psIn3203) {
    let psBind11369 = OLe[psIn3202];
    if (!psBind11369) {
      let psBind20600 = Error(
        `Unknown presentation script: ${String(psIn3202)}`,
      );
      return (
        this.#r?.(psBind20600, {
          kind: psIn3202,
        }),
        null
      );
    }
    let psBind11370 = {
      presentation: this.#e.presentation,
      slideId: this.#t?.() ?? null,
    };
    try {
      let psBind20053 = psBind11369.run(psBind11370, psIn3203) ?? undefined,
        psBind20054 = {
          kind: psIn3202,
          feature: psBind11369.feature,
          context: psBind20053,
        };
      return (this.#n?.(psBind20054), psBind20054);
    } catch (psBind22466) {
      return (
        this.#r?.(psBind22466, {
          kind: psIn3202,
        }),
        null
      );
    }
  }
}

export const jLe = esmInit(() => {
  kLe();
});

export function getPresentationScriptRunnerClass(): typeof ALe {
  jLe();
  return ALe;
}

export const ensurePresentationScriptsInit = jLe;
