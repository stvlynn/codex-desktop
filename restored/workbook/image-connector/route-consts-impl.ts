// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: route consts + placeholder VO (legacy Binding734/735/q_e).
// Stage-3 wave-74 cohesive connector-routing impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt, j } from "../presentation-protobuf";
import {
  ShapeGeometry as workbookDt,
  ensureShapeGeometryInit as workbookOt,
} from "../shape-geometry";
import {
  ensureGeometryTransformDepsInit as workbookBinding628,
  ensureRotationScaleInit as $x,
  FrameBbox as workbookBinding632,
  frameUnitToEmu as workbookTt,
  resolveElementFramePx,
  rotationEmuToRadians,
} from "../geometry-transform";
import {
  lookupPresetShapeDefinition,
  ensurePluginSlotsInit as workbookU,
  evalShapeFormula,
  ensureShapeFormulaOpsInit as _S,
  evalPresetGuides,
  ensureAdjAliasInit as workbookBinding643,
} from "../preset-shape";
import { composeScopedId } from "../stable-id";
import {
  insertAxisElbow as xde,
  simplifyPolyline,
  pointsNearEqual,
  pointsBBox,
  rectCenter,
  nearestRectEdgeToward as Cde,
  scaleOffset as Tde,
  isAxisMonotonicPolyline as Ede,
  ratioToFixedPercent,
} from "../path-geometry";
import {
  Rge,
  workbookBinding723,
  workbookBinding724,
  Bge,
  workbookBinding725,
  workbookBinding726,
  Vge,
  Hge,
  Uge,
  Wge,
  workbookBinding727,
  Gge,
  Kge,
  qge,
  workbookBinding728,
  U_e,
  workbookBinding729,
  W_e,
  G_e,
  K_e,
  workbookBinding730,
  workbookBinding731,
  workbookBinding732,
  workbookBinding733,
  workbookBinding735,
} from "./ic-slots";
import { icR } from "./ic-route-bag";

export const workbookBinding734 = esmInit(() => {
  Qt();
  workbookOt();
  workbookBinding628();
  $x();
  workbookU();
  workbookBinding643();
  _S();
  U_e = 6e4;
  workbookBinding729 = {
    clearancePx: 12,
    bendPenaltyPx: 20,
    cornerRadiusPx: 24,
    portStubPx: 24,
  };
  W_e = {
    [workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR2]: 1,
    [workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR3]: 2,
    [workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR4]: 3,
    [workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR5]: 4,
  };
  G_e = {
    [workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR2]: 1,
    [workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR3]: 2,
    [workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR4]: 3,
    [workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR5]: 4,
  };
  K_e = 0.38;
  workbookBinding730 = 0.3;
  workbookBinding731 = 0.7;
  workbookBinding732 = 18;
  workbookBinding733 = 0.5;
});
export const q_e = esmInit(() => {
  workbookBinding735 = class {
    #e;
    #t;
    constructor(icIn11273 = {}) {
      this.#e = icIn11273.placeholderType;
      this.#t = icIn11273.placeholderIndex;
    }
    get type() {
      return this.#e;
    }
    set type(icIn15338) {
      this.#e = icIn15338;
    }
    get index() {
      return this.#t;
    }
    set index(icIn15301) {
      this.#t = icIn15301;
    }
    isSet() {
      return this.#e !== undefined || this.#t !== undefined;
    }
  };
});

icR.workbookBinding734 = workbookBinding734;
icR.q_e = q_e;
