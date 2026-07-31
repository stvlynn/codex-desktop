// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: connector route helpers A (legacy Yge…b_e prelude).
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

export function Yge(props: any) {
  let { connectorEl, elements, pres, slide } = props,
    workbookBinding4183 = connectorEl.connector;
  if (!workbookBinding4183)
    throw Error("Connector element is missing connector metadata.");
  let workbookBinding4184 = icR.e_e(connectorEl),
    workbookBinding4185 = icR.Qge(props.options),
    workbookBinding4186 = icR.t_e(elements, workbookBinding4183.fromElementId),
    workbookBinding4187 = icR.t_e(elements, workbookBinding4183.toElementId);
  if (!workbookBinding4186 || !workbookBinding4187)
    throw Error("Connected elements not found for connector.");
  let workbookBinding4188 = icR.icFn353({
      element: workbookBinding4186,
      siteIndex: workbookBinding4183.fromIdx,
      pres,
      slide,
    }),
    workbookBinding4189 = icR.icFn353({
      element: workbookBinding4187,
      siteIndex: workbookBinding4183.toIdx,
      pres,
      slide,
    }),
    workbookBinding4190 = Math.max(0, workbookBinding4185.clearancePx),
    workbookBinding4191 = icR.$ge({
      fromAnchor: workbookBinding4188,
      toAnchor: workbookBinding4189,
      clearance: workbookBinding4190,
      requestedPortStubPx: workbookBinding4185.portStubPx,
    }),
    workbookBinding4192 = icR.o_e(
      workbookBinding4188.point,
      workbookBinding4188.normal,
      workbookBinding4191,
    ),
    workbookBinding4193 = icR.o_e(
      workbookBinding4189.point,
      workbookBinding4189.normal,
      workbookBinding4191,
    ),
    workbookBinding4194 = icR.icFn356({
      el: workbookBinding4186,
      pres,
      slide,
      clearance: workbookBinding4190,
    }),
    workbookBinding4195 = icR.icFn356({
      el: workbookBinding4187,
      pres,
      slide,
      clearance: workbookBinding4190,
    }),
    workbookBinding4196 =
      workbookBinding4194 && workbookBinding4195
        ? icR.d_e(workbookBinding4194, workbookBinding4195)
        : undefined,
    workbookBinding4197 = icR.p_e({
      fromNormal: workbookBinding4188.normal,
      toNormal: workbookBinding4189.normal,
      meetingPoint: workbookBinding4196,
    }),
    workbookBinding4198 = new Set([connectorEl.id]);
  workbookBinding4194 &&
    (icR.icFn357(workbookBinding4192, workbookBinding4194) ||
      icR.icFn357(workbookBinding4193, workbookBinding4194)) &&
    workbookBinding4198.add(workbookBinding4186.id);
  workbookBinding4195 &&
    (icR.icFn357(workbookBinding4192, workbookBinding4195) ||
      icR.icFn357(workbookBinding4193, workbookBinding4195)) &&
    workbookBinding4198.add(workbookBinding4187.id);
  let workbookBinding4199 = icR.c_e({
      elements,
      excludeIds: workbookBinding4198,
      pres,
      slide,
      clearance: workbookBinding4190,
    }),
    workbookBinding4200;
  switch (workbookBinding4184) {
    case "straight":
      workbookBinding4200 = icR._T(
        workbookBinding4188.point,
        workbookBinding4189.point,
      );
      break;
    case "elbow": {
      let workbookBinding12842 =
        workbookBinding4185.maxBendsOverride ??
        W_e[connectorEl.shape?.geometry ?? -1] ??
        4;
      try {
        let workbookBinding15500 = icR.E_e({
          start: workbookBinding4192,
          end: workbookBinding4193,
          obstacles: workbookBinding4199,
          maxBends: workbookBinding12842,
          bendPenalty: workbookBinding4185.bendPenaltyPx,
          preferredStartDir: icR.icFn367(workbookBinding4188.normal),
          preferredEndDir: icR.icFn368(icR.icFn367(workbookBinding4189.normal)),
          meetingGuidance: workbookBinding4197,
        });
        workbookBinding4200 = icR.icFn358([
          workbookBinding4188.point,
          ...workbookBinding15500,
          workbookBinding4189.point,
        ]);
      } catch {
        workbookBinding4200 = icR.Xge(workbookBinding4188, workbookBinding4189);
      }
      break;
    }
    case "curved": {
      let workbookBinding10187 = icR.g_e({
        fromAnchor: workbookBinding4188,
        toAnchor: workbookBinding4189,
        obstacles: workbookBinding4199,
      });
      if (workbookBinding10187) workbookBinding4200 = workbookBinding10187;
      else {
        let workbookBinding11347 =
          workbookBinding4185.maxBendsOverride ??
          G_e[connectorEl.shape?.geometry ?? -1] ??
          4;
        try {
          let workbookBinding14996 = icR.E_e({
            start: workbookBinding4192,
            end: workbookBinding4193,
            obstacles: workbookBinding4199,
            maxBends: workbookBinding11347,
            bendPenalty: workbookBinding4185.bendPenaltyPx,
            preferredStartDir: icR.icFn367(workbookBinding4188.normal),
            preferredEndDir: icR.icFn368(
              icR.icFn367(workbookBinding4189.normal),
            ),
            meetingGuidance: workbookBinding4197,
          });
          workbookBinding4200 = icR.S_e([
            workbookBinding4188.point,
            ...workbookBinding14996,
            workbookBinding4189.point,
          ]);
        } catch {
          workbookBinding4200 =
            icR.g_e({
              fromAnchor: workbookBinding4188,
              toAnchor: workbookBinding4189,
              obstacles: [],
            }) ?? icR._T(workbookBinding4188.point, workbookBinding4189.point);
        }
      }
      break;
    }
    default:
      workbookBinding4200 = icR._T(
        workbookBinding4188.point,
        workbookBinding4189.point,
      );
  }
  return {
    connectorId: connectorEl.id,
    kind: workbookBinding4184,
    commands: workbookBinding4200,
  };
}
export function Xge(icIn15186: any, icIn15187: any) {
  return icR.icFn358(icR.Zge(icIn15186, icIn15187));
}
export function Zge(icIn2565: any, icIn2566: any) {
  let workbookBinding9942 = icIn2565.point,
    workbookBinding9943 = icIn2566.point;
  if (
    icR.T_e(workbookBinding9942, workbookBinding9943) ||
    Math.abs(workbookBinding9942.x - workbookBinding9943.x) < 1e-4 ||
    Math.abs(workbookBinding9942.y - workbookBinding9943.y) < 1e-4
  )
    return [workbookBinding9942, workbookBinding9943];
  let workbookBinding9944 = icR.icFn370(icR.icFn367(icIn2565.normal)),
    workbookBinding9945 = icR.icFn370(icR.icFn367(icIn2566.normal));
  if (
    workbookBinding9944 === "vertical" &&
    workbookBinding9945 === "vertical"
  ) {
    let workbookBinding22174 =
      (workbookBinding9942.y + workbookBinding9943.y) / 2;
    return [
      workbookBinding9942,
      {
        x: workbookBinding9942.x,
        y: workbookBinding22174,
      },
      {
        x: workbookBinding9943.x,
        y: workbookBinding22174,
      },
      workbookBinding9943,
    ];
  }
  if (
    workbookBinding9944 === "horizontal" &&
    workbookBinding9945 === "horizontal"
  ) {
    let workbookBinding22175 =
      (workbookBinding9942.x + workbookBinding9943.x) / 2;
    return [
      workbookBinding9942,
      {
        x: workbookBinding22175,
        y: workbookBinding9942.y,
      },
      {
        x: workbookBinding22175,
        y: workbookBinding9943.y,
      },
      workbookBinding9943,
    ];
  }
  if (
    workbookBinding9944 === "vertical" ||
    workbookBinding9945 === "horizontal"
  )
    return [
      workbookBinding9942,
      {
        x: workbookBinding9942.x,
        y: workbookBinding9943.y,
      },
      workbookBinding9943,
    ];
  if (
    workbookBinding9944 === "horizontal" ||
    workbookBinding9945 === "vertical"
  )
    return [
      workbookBinding9942,
      {
        x: workbookBinding9943.x,
        y: workbookBinding9942.y,
      },
      workbookBinding9943,
    ];
  let workbookBinding9946 = (workbookBinding9942.x + workbookBinding9943.x) / 2;
  return [
    workbookBinding9942,
    {
      x: workbookBinding9946,
      y: workbookBinding9942.y,
    },
    {
      x: workbookBinding9946,
      y: workbookBinding9943.y,
    },
    workbookBinding9943,
  ];
}
export function Qge(icIn6146: any) {
  return {
    clearancePx: icIn6146?.clearancePx ?? workbookBinding729.clearancePx,
    bendPenaltyPx: icIn6146?.bendPenaltyPx ?? workbookBinding729.bendPenaltyPx,
    cornerRadiusPx:
      icIn6146?.cornerRadiusPx ?? workbookBinding729.cornerRadiusPx,
    maxBendsOverride: icIn6146?.maxBendsOverride,
    portStubPx: icIn6146?.portStubPx ?? workbookBinding729.portStubPx,
  };
}
export function $ge(icIn3665: any) {
  let { fromAnchor, toAnchor, clearance, requestedPortStubPx } = icIn3665,
    workbookBinding12260 =
      requestedPortStubPx > clearance ? requestedPortStubPx : clearance + 2,
    workbookBinding12261 = icR.icFn367(fromAnchor.normal),
    workbookBinding12262 = icR.icFn367(toAnchor.normal),
    workbookBinding12263 = icR.icFn370(workbookBinding12261),
    workbookBinding12264 = icR.icFn370(workbookBinding12262);
  if (
    workbookBinding12263 === "none" ||
    workbookBinding12264 === "none" ||
    workbookBinding12263 !== workbookBinding12264 ||
    !icR.icFn369(workbookBinding12261, workbookBinding12262)
  )
    return workbookBinding12260;
  let workbookBinding12265 = {
      x: toAnchor.point.x - fromAnchor.point.x,
      y: toAnchor.point.y - fromAnchor.point.y,
    },
    workbookBinding12266 = icR.V_e(workbookBinding12265, fromAnchor.normal),
    workbookBinding12267 = icR.V_e(
      {
        x: -workbookBinding12265.x,
        y: -workbookBinding12265.y,
      },
      toAnchor.normal,
    ),
    workbookBinding12268 = Math.min(workbookBinding12266, workbookBinding12267);
  return !Number.isFinite(workbookBinding12268) || workbookBinding12268 <= 0
    ? workbookBinding12260
    : Math.min(
        workbookBinding12260,
        Math.max(clearance, workbookBinding12268 / 2),
      );
}
export function e_e(icIn3160: any) {
  switch (icIn3160.shape?.geometry) {
    case workbookDt.SHAPE_GEOMETRY_STRAIGHT_CONNECTOR1:
      return "straight";
    case workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR2:
    case workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR3:
    case workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR4:
    case workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR5:
      return "elbow";
    case workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR2:
    case workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR3:
    case workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR4:
    case workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR5:
      return "curved";
    default:
      return icIn3160.connector ? "elbow" : "straight";
  }
}
export function t_e(icIn14013: any, icIn14014: any) {
  return icIn14013.find((item) => item.id === icIn14014);
}
export function n_e(icIn3716: any, icIn3717: any) {
  switch (icIn3717) {
    case 0:
      return {
        localPoint: {
          x: icIn3716.width / 2,
          y: 0,
        },
        normal: {
          x: 0,
          y: -1,
        },
      };
    case 1:
      return {
        localPoint: {
          x: 0,
          y: icIn3716.height / 2,
        },
        normal: {
          x: -1,
          y: 0,
        },
      };
    case 2:
      return {
        localPoint: {
          x: icIn3716.width / 2,
          y: icIn3716.height,
        },
        normal: {
          x: 0,
          y: 1,
        },
      };
    case 3:
      return {
        localPoint: {
          x: icIn3716.width,
          y: icIn3716.height / 2,
        },
        normal: {
          x: 1,
          y: 0,
        },
      };
    default:
      return null;
  }
}
export function icFn353({ element, siteIndex, pres, slide }: any) {
  if (!element.shape?.geometry)
    throw Error("Connected element is missing a preset geometry.");
  let workbookBinding5878 = resolveElementFramePx(element, pres, slide),
    workbookBinding5879 = icR.r_e(element),
    workbookBinding5880 = lookupPresetShapeDefinition(element.shape.geometry),
    workbookBinding5881 = workbookBinding5880?.cxnLst?.[siteIndex],
    workbookBinding5882,
    workbookBinding5883;
  if (workbookBinding5880 && workbookBinding5881) {
    let workbookBinding15655 = evalPresetGuides(
        workbookBinding5880,
        workbookBinding5878.width,
        workbookBinding5878.height,
        workbookBinding5879,
      ),
      workbookBinding15656 = evalShapeFormula(
        workbookBinding5881.pos?.x,
        workbookBinding15655,
      ),
      workbookBinding15657 = evalShapeFormula(
        workbookBinding5881.pos?.y,
        workbookBinding15655,
      );
    if (
      !Number.isFinite(workbookBinding15656) ||
      !Number.isFinite(workbookBinding15657)
    )
      throw Error(
        `Connection site ${siteIndex} has invalid coordinates for geometry ${element.shape.geometry}`,
      );
    workbookBinding5882 = {
      x: workbookBinding15656,
      y: workbookBinding15657,
    };
    workbookBinding5883 = icR.i_e(
      workbookBinding5881,
      workbookBinding5882,
      workbookBinding5878,
      workbookBinding15655,
    );
  } else {
    let workbookBinding10864 = icR.n_e(workbookBinding5878, siteIndex);
    if (!workbookBinding10864)
      throw Error(
        workbookBinding5880
          ? `Connection site ${siteIndex} is not defined for geometry ${element.shape.geometry}`
          : [
              `No preset definition found for geometry ${element.shape.geometry}.`,
              `Connection site ${siteIndex} cannot be resolved without preset metadata.`,
              "Load preset shape definitions with:",
              "  const { installPresetShapeDefinitions } = await import('@oai/granola/plugins/preset-shape-definitions');",
              "  installPresetShapeDefinitions();",
            ].join("\n"),
      );
    workbookBinding5882 = workbookBinding10864.localPoint;
    workbookBinding5883 = workbookBinding10864.normal;
  }
  let { point, normal } = icR.a_e({
      element,
      bbox: workbookBinding5878,
      local: workbookBinding5882,
      normal: workbookBinding5883,
    }),
    workbookBinding5884 = {
      x: workbookBinding5878.x + workbookBinding5878.width / 2,
      y: workbookBinding5878.y + workbookBinding5878.height / 2,
    };
  return {
    siteIndex,
    point,
    localPoint: workbookBinding5882,
    normal,
    shapeCenter: workbookBinding5884,
  };
}
export function r_e(icIn9666: any) {
  let workbookBinding20200 = {},
    workbookBinding20201 = icIn9666.shape?.adjustmentList ?? [];
  for (let workbookBinding22644 of workbookBinding20201)
    workbookBinding22644?.name &&
      workbookBinding22644.formula &&
      (workbookBinding20200[workbookBinding22644.name] =
        workbookBinding22644.formula);
  return workbookBinding20200;
}
export function i_e() {
  let workbookBinding13226 = icIn4187.ang
    ? evalShapeFormula(icIn4187.ang, icIn4190)
    : undefined;
  if (
    typeof workbookBinding13226 == "number" &&
    Number.isFinite(workbookBinding13226)
  ) {
    let workbookBinding22482 = icR.s_e(workbookBinding13226);
    return icR.icFn355({
      x: Math.cos(workbookBinding22482),
      y: Math.sin(workbookBinding22482),
    });
  }
  let workbookBinding13227 = icIn4188.x,
    workbookBinding13228 = icIn4189.width - icIn4188.x,
    workbookBinding13229 = icIn4188.y,
    workbookBinding13230 = icIn4189.height - icIn4188.y,
    workbookBinding13231 = Math.min(
      workbookBinding13227,
      workbookBinding13228,
      workbookBinding13229,
      workbookBinding13230,
    );
  return workbookBinding13231 === workbookBinding13227
    ? {
        x: -1,
        y: 0,
      }
    : workbookBinding13231 === workbookBinding13228
      ? {
          x: 1,
          y: 0,
        }
      : workbookBinding13231 === workbookBinding13229
        ? {
            x: 0,
            y: -1,
          }
        : {
            x: 0,
            y: 1,
          };
}
export function a_e({ element, bbox, local, normal }: any) {
  let workbookBinding12336 = bbox.width / 2,
    workbookBinding12337 = bbox.height / 2,
    x = local.x - workbookBinding12336,
    y = local.y - workbookBinding12337,
    __x = normal.x,
    __y = normal.y,
    workbookBinding12338 = !!element.bbox?.horizontalFlip,
    workbookBinding12339 = !!element.bbox?.verticalFlip;
  workbookBinding12338 && ((x = -x), (__x = -__x));
  workbookBinding12339 && ((y = -y), (__y = -__y));
  let workbookBinding12340 = rotationEmuToRadians(element.bbox?.rotation ?? 0);
  return (
    workbookBinding12340 !== 0 &&
      (({ x, y } = icR.icFn354(x, y, workbookBinding12340)),
      ({ x: __x, y: __y } = icR.icFn354(__x, __y, workbookBinding12340))),
    {
      point: {
        x: bbox.x + workbookBinding12336 + x,
        y: bbox.y + workbookBinding12337 + y,
      },
      normal: icR.icFn355({
        x: __x,
        y: __y,
      }),
    }
  );
}
export function icFn354() {
  let workbookBinding21295 = Math.cos(icIn10771),
    workbookBinding21296 = Math.sin(icIn10771);
  return {
    x: icIn10769 * workbookBinding21295 - icIn10770 * workbookBinding21296,
    y: icIn10769 * workbookBinding21296 + icIn10770 * workbookBinding21295,
  };
}
export function icFn355(icIn11041: any) {
  let workbookBinding21567 = Math.hypot(icIn11041.x, icIn11041.y);
  return workbookBinding21567
    ? {
        x: icIn11041.x / workbookBinding21567,
        y: icIn11041.y / workbookBinding21567,
      }
    : {
        x: 0,
        y: 0,
      };
}
export function o_e(icIn12812: any, icIn12813: any, icIn12814: any) {
  return {
    x: icIn12812.x + icIn12813.x * icIn12814,
    y: icIn12812.y + icIn12813.y * icIn12814,
  };
}
export function s_e(icIn14159: any) {
  return ((icIn14159 / U_e) * Math.PI) / 180;
}
export function c_e(icIn6422: any) {
  let { elements, excludeIds, pres, slide, clearance } = icIn6422,
    workbookBinding16606 = [];
  for (let workbookBinding20043 of elements) {
    if (!workbookBinding20043 || excludeIds.has(workbookBinding20043.id))
      continue;
    let workbookBinding20563 = icR.l_e({
      el: workbookBinding20043,
      pres,
      slide,
      clearance,
    });
    workbookBinding20563 &&
      workbookBinding16606.push({
        ...workbookBinding20563,
        id: workbookBinding20043.id,
      });
  }
  return workbookBinding16606;
}
export function l_e({ el: _el, pres, slide, clearance }: any) {
  return _el.type !== j.ELEMENT_TYPE_SHAPE ||
    _el.connector ||
    icR.u_e(_el, pres, slide)
    ? null
    : icR.icFn356({
        el: _el,
        pres,
        slide,
        clearance,
      });
}
export function icFn356({ el: _el, pres, slide, clearance }: any) {
  let workbookBinding15688 = resolveElementFramePx(_el, pres, slide);
  return !workbookBinding15688.width || !workbookBinding15688.height
    ? null
    : icR.h_e(
        icR.m_e({
          x: workbookBinding15688.x,
          y: workbookBinding15688.y,
          width: workbookBinding15688.width,
          height: workbookBinding15688.height,
          rotation: rotationEmuToRadians(_el.bbox?.rotation ?? 0),
        }),
        clearance,
      );
}
export function u_e(icIn6159: any, icIn6160: any, icIn6161: any) {
  if (/^bg[._-]/i.test(icIn6159.id)) return true;
  let workbookBinding16246 = icIn6161.frame;
  if (!workbookBinding16246) return false;
  let workbookBinding16247 = resolveElementFramePx(
    icIn6159,
    icIn6160,
    icIn6161,
  );
  return (
    Math.abs(workbookBinding16247.x - workbookBinding16246.left) <= 1 &&
    Math.abs(workbookBinding16247.y - workbookBinding16246.top) <= 1 &&
    Math.abs(workbookBinding16247.width - workbookBinding16246.width) <= 1 &&
    Math.abs(workbookBinding16247.height - workbookBinding16246.height) <= 1
  );
}
export function icFn357(icIn11728: any, icIn11729: any) {
  return (
    icIn11728.x > icIn11729.minX &&
    icIn11728.x < icIn11729.maxX &&
    icIn11728.y > icIn11729.minY &&
    icIn11728.y < icIn11729.maxY
  );
}
export function d_e(icIn10523: any, icIn10524: any) {
  return {
    x: icR.f_e(icIn10523.minX, icIn10523.maxX, icIn10524.minX, icIn10524.maxX),
    y: icR.f_e(icIn10523.minY, icIn10523.maxY, icIn10524.minY, icIn10524.maxY),
  };
}
export function f_e() {
  let workbookBinding19158 = Math.max(icIn8658, icIn8660),
    workbookBinding19159 = Math.min(icIn8659, icIn8661);
  return workbookBinding19158 <= workbookBinding19159
    ? (workbookBinding19158 + workbookBinding19159) / 2
    : (icIn8658 + icIn8659) / 2 <= (icIn8660 + icIn8661) / 2
      ? (icIn8659 + icIn8660) / 2
      : (icIn8661 + icIn8658) / 2;
}
export function p_e(icIn5382: any) {
  let { fromNormal, toNormal, meetingPoint } = icIn5382;
  if (!meetingPoint) return;
  let workbookBinding15121 = icR.icFn367(fromNormal),
    workbookBinding15122 = icR.icFn367(toNormal);
  if (
    (workbookBinding15121 === "up" || workbookBinding15121 === "down") &&
    (workbookBinding15122 === "up" || workbookBinding15122 === "down")
  )
    return {
      preferredMeetingY: meetingPoint.y,
    };
  if (
    (workbookBinding15121 === "left" || workbookBinding15121 === "right") &&
    (workbookBinding15122 === "left" || workbookBinding15122 === "right")
  )
    return {
      preferredMeetingX: meetingPoint.x,
    };
}
export function m_e({ x, y, width, height, rotation }: any) {
  if (rotation === 0)
    return {
      minX: x,
      minY: y,
      maxX: x + width,
      maxY: y + height,
    };
  let workbookBinding10689 = x + width / 2,
    workbookBinding10690 = y + height / 2,
    workbookBinding10691 = [
      {
        x: x - workbookBinding10689,
        y: y - workbookBinding10690,
      },
      {
        x: x + width - workbookBinding10689,
        y: y - workbookBinding10690,
      },
      {
        x: x + width - workbookBinding10689,
        y: y + height - workbookBinding10690,
      },
      {
        x: x - workbookBinding10689,
        y: y + height - workbookBinding10690,
      },
    ].map((item) => icR.icFn354(item.x, item.y, rotation)),
    workbookBinding10692 = 1 / 0,
    workbookBinding10693 = -1 / 0,
    workbookBinding10694 = 1 / 0,
    workbookBinding10695 = -1 / 0;
  for (let workbookBinding19524 of workbookBinding10691) {
    let workbookBinding20044 = workbookBinding19524.x + workbookBinding10689,
      workbookBinding20045 = workbookBinding19524.y + workbookBinding10690;
    workbookBinding10692 = Math.min(workbookBinding10692, workbookBinding20044);
    workbookBinding10693 = Math.max(workbookBinding10693, workbookBinding20044);
    workbookBinding10694 = Math.min(workbookBinding10694, workbookBinding20045);
    workbookBinding10695 = Math.max(workbookBinding10695, workbookBinding20045);
  }
  return {
    minX: workbookBinding10692,
    minY: workbookBinding10694,
    maxX: workbookBinding10693,
    maxY: workbookBinding10695,
  };
}
export function h_e(icIn10611: any, icIn10612: any) {
  return icIn10612
    ? {
        minX: icIn10611.minX - icIn10612,
        minY: icIn10611.minY - icIn10612,
        maxX: icIn10611.maxX + icIn10612,
        maxY: icIn10611.maxY + icIn10612,
      }
    : icIn10611;
}
export function _T(icIn10833: any, icIn10834: any) {
  return [
    {
      cmd: "moveTo",
      x: icIn10833.x,
      y: icIn10833.y,
    },
    {
      cmd: "lineTo",
      x: icIn10834.x,
      y: icIn10834.y,
    },
  ];
}
export function icFn358(icIn6423: any) {
  let workbookBinding16607 = icR.icFn361(icIn6423);
  if (workbookBinding16607.length < 2) return [];
  let workbookBinding16608 = workbookBinding16607[0];
  if (!workbookBinding16608) return [];
  let workbookBinding16609 = [
    {
      cmd: "moveTo",
      x: workbookBinding16608.x,
      y: workbookBinding16608.y,
    },
  ];
  for (
    let workbookBinding21401 = 1;
    workbookBinding21401 < workbookBinding16607.length;
    workbookBinding21401 += 1
  ) {
    let workbookBinding22495 = workbookBinding16607[workbookBinding21401];
    workbookBinding22495 &&
      workbookBinding16609.push({
        cmd: "lineTo",
        x: workbookBinding22495.x,
        y: workbookBinding22495.y,
      });
  }
  return workbookBinding16609;
}
export function g_e(icIn2924: any) {
  let { fromAnchor, toAnchor, obstacles } = icIn2924,
    workbookBinding10819 = fromAnchor.point,
    workbookBinding10820 = toAnchor.point,
    workbookBinding10821 = {
      x: workbookBinding10820.x - workbookBinding10819.x,
      y: workbookBinding10820.y - workbookBinding10819.y,
    },
    workbookBinding10822 = Math.hypot(
      workbookBinding10821.x,
      workbookBinding10821.y,
    );
  if (workbookBinding10822 <= 0.001) return;
  let workbookBinding10823 = {
      x: workbookBinding10821.x / workbookBinding10822,
      y: workbookBinding10821.y / workbookBinding10822,
    },
    workbookBinding10824 = icR.__e(fromAnchor.normal, workbookBinding10823),
    workbookBinding10825 = icR.__e(
      {
        x: -toAnchor.normal.x,
        y: -toAnchor.normal.y,
      },
      workbookBinding10823,
    ),
    workbookBinding10826 = icR.v_e({
      delta: workbookBinding10821,
      distance: workbookBinding10822,
      startDirection: workbookBinding10824,
      endDirection: workbookBinding10825,
    }),
    workbookBinding10827 = {
      cmd: "cubicBezTo",
      x1:
        workbookBinding10819.x + workbookBinding10824.x * workbookBinding10826,
      y1:
        workbookBinding10819.y + workbookBinding10824.y * workbookBinding10826,
      x2:
        workbookBinding10820.x - workbookBinding10825.x * workbookBinding10826,
      y2:
        workbookBinding10820.y - workbookBinding10825.y * workbookBinding10826,
      x: workbookBinding10820.x,
      y: workbookBinding10820.y,
    };
  if (icR.b_e(workbookBinding10819, workbookBinding10827, obstacles))
    return [
      {
        cmd: "moveTo",
        x: workbookBinding10819.x,
        y: workbookBinding10819.y,
      },
      workbookBinding10827,
    ];
}
export function __e(icIn10349: any, icIn10350: any) {
  let workbookBinding20813 = icR.icFn355({
    x: icIn10349.x * workbookBinding730 + icIn10350.x * workbookBinding731,
    y: icIn10349.y * workbookBinding730 + icIn10350.y * workbookBinding731,
  });
  return Math.hypot(workbookBinding20813.x, workbookBinding20813.y) > 0
    ? workbookBinding20813
    : icIn10350;
}
export function v_e(icIn6794: any) {
  let { delta, distance, startDirection, endDirection } = icIn6794,
    workbookBinding17098 = distance * K_e,
    workbookBinding17099 = icR.y_e(delta.x, startDirection.x, endDirection.x);
  workbookBinding17099 !== undefined &&
    (workbookBinding17098 = Math.min(
      workbookBinding17098,
      workbookBinding17099,
    ));
  let workbookBinding17100 = icR.y_e(delta.y, startDirection.y, endDirection.y);
  return (
    workbookBinding17100 !== undefined &&
      (workbookBinding17098 = Math.min(
        workbookBinding17098,
        workbookBinding17100,
      )),
    workbookBinding17098
  );
}
export function y_e(icIn8838: any, icIn8839: any, icIn8840: any) {
  if (
    Math.abs(icIn8838) <= 0.001 ||
    icIn8838 * icIn8839 <= 0 ||
    icIn8838 * icIn8840 <= 0
  )
    return;
  let workbookBinding19388 = Math.abs(icIn8839) + Math.abs(icIn8840);
  if (!(workbookBinding19388 <= 0.001))
    return (Math.abs(icIn8838) / workbookBinding19388) * 0.9;
}
icR.Yge = Yge;
icR.Xge = Xge;
icR.Zge = Zge;
icR.Qge = Qge;
icR.$ge = $ge;
icR.e_e = e_e;
icR.t_e = t_e;
icR.n_e = n_e;
icR.icFn353 = icFn353;
icR.r_e = r_e;
icR.i_e = i_e;
icR.a_e = a_e;
icR.icFn354 = icFn354;
icR.icFn355 = icFn355;
icR.o_e = o_e;
icR.s_e = s_e;
icR.c_e = c_e;
icR.l_e = l_e;
icR.icFn356 = icFn356;
icR.u_e = u_e;
icR.icFn357 = icFn357;
icR.d_e = d_e;
icR.f_e = f_e;
icR.p_e = p_e;
icR.m_e = m_e;
icR.h_e = h_e;
icR._T = _T;
icR.icFn358 = icFn358;
icR.g_e = g_e;
icR.__e = __e;
icR.v_e = v_e;
icR.y_e = y_e;
