// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: connector builders + custom-path EMU (legacy J_e…pve).
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

export function J_e(props: any) {
  let workbookBinding11016 = props.position
      ? new workbookBinding632(props.position, true).toProto()
      : undefined,
    workbookBinding11017 = icR.Y_e(props.kind),
    workbookBinding11018 = {
      fromElementId: icR.X_e(props.from, "from"),
      fromIdx: icR.icFn371(props.fromIdx, "fromIdx"),
      toElementId: icR.X_e(props.to, "to"),
      toIdx: icR.icFn371(props.toIdx, "toIdx"),
      lineStyle: icR.Z_e(props),
    };
  return {
    element: {
      type: j.ELEMENT_TYPE_SHAPE,
      bbox: workbookBinding11016,
      connector: workbookBinding11018,
      shape: {
        geometry: workbookBinding11017,
        fill: undefined,
        adjustmentList: props.adjustmentList ?? [],
        rectFormula: undefined,
        customPaths: [],
        customGeometryGuides: [],
      },
    },
  };
}
export function Y_e(icIn4162: any) {
  switch (icIn4162 ?? "elbow") {
    case "straight":
      return workbookDt.SHAPE_GEOMETRY_STRAIGHT_CONNECTOR1;
    case "curved":
      return workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR4;
    case "elbow2":
      return workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR2;
    case "elbow3":
      return workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR3;
    case "elbow5":
      return workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR5;
    default:
      return workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR4;
  }
}
export function X_e(icIn7103: any, icIn7104: any) {
  if (typeof icIn7103 == "string") {
    if (!icIn7103)
      throw Error(`Connector ${icIn7104} endpoint id must be non-empty.`);
    return icIn7103;
  }
  let workbookBinding17446 = icIn7103.id;
  if (!workbookBinding17446)
    throw Error(`Connector ${icIn7104} endpoint shape must have an id.`);
  return workbookBinding17446;
}
export function icFn371(icIn10686: any, icIn10687: any) {
  if (!Number.isFinite(icIn10686))
    throw Error(`Connector ${icIn10687} must be a finite number.`);
  return icIn10686;
}
export function Z_e(props: any) {
  let workbookBinding18267 = icR.Q_e(props.head),
    workbookBinding18268 = icR.Q_e(props.tail),
    workbookBinding18269 = props.cap ? mve[props.cap] : undefined,
    workbookBinding18270 = props.join ? hve[props.join] : undefined;
  if (
    !(
      !workbookBinding18267 &&
      !workbookBinding18268 &&
      !workbookBinding18269 &&
      !workbookBinding18270
    )
  )
    return {
      head: workbookBinding18267,
      tail: workbookBinding18268,
      cap: workbookBinding18269,
      join: workbookBinding18270,
    };
}
export function Q_e(props: any) {
  if (!props) return;
  let workbookBinding16560 = props.type ?? "none",
    workbookBinding16561 = props.width ?? "med",
    workbookBinding16562 = props.length ?? "med";
  return {
    type: gve[workbookBinding16560] ?? x.LINE_END_TYPE_UNSPECIFIED,
    width: _ve[workbookBinding16561] ?? presentationS.LINE_END_WIDTH_MEDIUM,
    length: vve[workbookBinding16562] ?? b.LINE_END_LENGTH_MEDIUM,
  };
}
export function $_e() {
  if (!icIn4541) return [];
  let workbookBinding13801 = icIn4542.find(
      (item) => item.id === icIn4541.fromElementId,
    ),
    workbookBinding13802 = icIn4542.find(
      (item) => item.id === icIn4541.toElementId,
    );
  if (!workbookBinding13801 || !workbookBinding13802) return [];
  let workbookBinding13803 = resolveElementFramePx(
      workbookBinding13801,
      icIn4543,
      icIn4544,
    ),
    workbookBinding13804 = resolveElementFramePx(
      workbookBinding13802,
      icIn4543,
      icIn4544,
    ),
    workbookBinding13805 = rectCenter(workbookBinding13803),
    workbookBinding13806 = rectCenter(workbookBinding13804),
    workbookBinding13807 = Cde(
      workbookBinding13803,
      icIn4541.fromIdx,
      workbookBinding13806,
    ),
    workbookBinding13808 = Cde(
      workbookBinding13804,
      icIn4541.toIdx,
      workbookBinding13805,
    ),
    workbookBinding13809 = xde(
      Tde(
        workbookBinding13807.point,
        workbookBinding13807.normal,
        workbookBinding738,
      ),
      Tde(
        workbookBinding13808.point,
        workbookBinding13808.normal,
        workbookBinding738,
      ),
    );
  return simplifyPolyline([
    workbookBinding13807.point,
    ...workbookBinding13809,
    workbookBinding13808.point,
  ]);
}
export function eve(icIn321: any) {
  let workbookBinding3617 = simplifyPolyline(icIn321);
  if (workbookBinding3617.length < 2) return;
  let workbookBinding3618 = pointsBBox(workbookBinding3617),
    workbookBinding3619 = workbookBinding3618.maxX - workbookBinding3618.minX,
    workbookBinding3620 = workbookBinding3618.maxY - workbookBinding3618.minY;
  if (workbookBinding3619 === 0 && workbookBinding3620 === 0) return;
  let workbookBinding3621 = workbookBinding3617[0],
    workbookBinding3622 = workbookBinding3617[workbookBinding3617.length - 1],
    workbookBinding3623 =
      workbookBinding3619 !== 0 &&
      workbookBinding3621.x > workbookBinding3622.x,
    workbookBinding3624 =
      workbookBinding3620 !== 0 &&
      workbookBinding3621.y > workbookBinding3622.y,
    workbookBinding3625 = workbookBinding3617.length - 1;
  if (workbookBinding3625 <= 1)
    return {
      bounds: workbookBinding3618,
      width: workbookBinding3619,
      height: workbookBinding3620,
      flipH: workbookBinding3623,
      flipV: workbookBinding3624,
      geometry: workbookDt.SHAPE_GEOMETRY_STRAIGHT_CONNECTOR1,
      adjustments: [],
    };
  let workbookBinding3626 = workbookBinding3617.map((item) => {
    let workbookBinding21402 = item.x - workbookBinding3618.minX,
      workbookBinding21403 = item.y - workbookBinding3618.minY;
    return {
      x: workbookBinding3623
        ? workbookBinding3619 - workbookBinding21402
        : workbookBinding21402,
      y: workbookBinding3624
        ? workbookBinding3620 - workbookBinding21403
        : workbookBinding21403,
    };
  });
  if (!Ede(workbookBinding3626)) return;
  let workbookBinding3627 =
    workbookBinding3625 > 0 &&
    pointsNearEqual(
      workbookBinding3626[0]?.x ?? 0,
      workbookBinding3626[1]?.x ?? 0,
    );
  if (workbookBinding3625 === 2)
    return workbookBinding3627
      ? {
          bounds: workbookBinding3618,
          width: workbookBinding3619,
          height: workbookBinding3620,
          flipH: workbookBinding3623,
          flipV: workbookBinding3624,
          geometry: workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR3,
          adjustments: [
            {
              name: "adj1",
              formula: "val 0",
            },
          ],
        }
      : {
          bounds: workbookBinding3618,
          width: workbookBinding3619,
          height: workbookBinding3620,
          flipH: workbookBinding3623,
          flipV: workbookBinding3624,
          geometry: workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR2,
          adjustments: [],
        };
  if (workbookBinding3625 === 3) {
    if (workbookBinding3627) {
      let workbookBinding13723 = ratioToFixedPercent(
        workbookBinding3626[1]?.y,
        workbookBinding3620,
      );
      return workbookBinding13723 === undefined
        ? undefined
        : {
            bounds: workbookBinding3618,
            width: workbookBinding3619,
            height: workbookBinding3620,
            flipH: workbookBinding3623,
            flipV: workbookBinding3624,
            geometry: workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR4,
            adjustments: [
              {
                name: "adj1",
                formula: "val 0",
              },
              {
                name: "adj2",
                formula: `val ${workbookBinding13723}`,
              },
            ],
          };
    }
    let workbookBinding9747 = ratioToFixedPercent(
      workbookBinding3626[1]?.x,
      workbookBinding3619,
    );
    return workbookBinding9747 === undefined
      ? undefined
      : {
          bounds: workbookBinding3618,
          width: workbookBinding3619,
          height: workbookBinding3620,
          flipH: workbookBinding3623,
          flipV: workbookBinding3624,
          geometry: workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR3,
          adjustments: [
            {
              name: "adj1",
              formula: `val ${workbookBinding9747}`,
            },
          ],
        };
  }
  if (workbookBinding3625 === 4) {
    if (workbookBinding3627) {
      let workbookBinding12180 = ratioToFixedPercent(
          workbookBinding3626[1]?.y,
          workbookBinding3620,
        ),
        workbookBinding12181 = ratioToFixedPercent(
          workbookBinding3626[2]?.x,
          workbookBinding3619,
        );
      return workbookBinding12180 === undefined ||
        workbookBinding12181 === undefined
        ? undefined
        : {
            bounds: workbookBinding3618,
            width: workbookBinding3619,
            height: workbookBinding3620,
            flipH: workbookBinding3623,
            flipV: workbookBinding3624,
            geometry: workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR5,
            adjustments: [
              {
                name: "adj1",
                formula: "val 0",
              },
              {
                name: "adj2",
                formula: `val ${workbookBinding12180}`,
              },
              {
                name: "adj3",
                formula: `val ${workbookBinding12181}`,
              },
            ],
          };
    }
    let workbookBinding8174 = ratioToFixedPercent(
        workbookBinding3626[1]?.x,
        workbookBinding3619,
      ),
      workbookBinding8175 = ratioToFixedPercent(
        workbookBinding3626[2]?.y,
        workbookBinding3620,
      );
    return workbookBinding8174 === undefined ||
      workbookBinding8175 === undefined
      ? undefined
      : {
          bounds: workbookBinding3618,
          width: workbookBinding3619,
          height: workbookBinding3620,
          flipH: workbookBinding3623,
          flipV: workbookBinding3624,
          geometry: workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR4,
          adjustments: [
            {
              name: "adj1",
              formula: `val ${workbookBinding8174}`,
            },
            {
              name: "adj2",
              formula: `val ${workbookBinding8175}`,
            },
          ],
        };
  }
  if (workbookBinding3627) return;
  let workbookBinding3628 = ratioToFixedPercent(
      workbookBinding3626[1]?.x,
      workbookBinding3619,
    ),
    workbookBinding3629 = ratioToFixedPercent(
      workbookBinding3626[2]?.y,
      workbookBinding3620,
    ),
    workbookBinding3630 = ratioToFixedPercent(
      workbookBinding3626[3]?.x,
      workbookBinding3619,
    );
  if (
    !(
      workbookBinding3628 === undefined ||
      workbookBinding3629 === undefined ||
      workbookBinding3630 === undefined
    )
  )
    return {
      bounds: workbookBinding3618,
      width: workbookBinding3619,
      height: workbookBinding3620,
      flipH: workbookBinding3623,
      flipV: workbookBinding3624,
      geometry: workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR5,
      adjustments: [
        {
          name: "adj1",
          formula: `val ${workbookBinding3628}`,
        },
        {
          name: "adj2",
          formula: `val ${workbookBinding3629}`,
        },
        {
          name: "adj3",
          formula: `val ${workbookBinding3630}`,
        },
      ],
    };
}
export function tve(icIn550: any) {
  let workbookBinding4478 = simplifyPolyline(icIn550);
  if (workbookBinding4478.length < 2) return;
  let workbookBinding4479 = pointsBBox(workbookBinding4478),
    workbookBinding4480 = workbookBinding4479.maxX - workbookBinding4479.minX,
    workbookBinding4481 = workbookBinding4479.maxY - workbookBinding4479.minY;
  if (workbookBinding4480 === 0 && workbookBinding4481 === 0) return;
  let workbookBinding4482 = workbookBinding4478[0],
    workbookBinding4483 = workbookBinding4478[workbookBinding4478.length - 1],
    workbookBinding4484 =
      workbookBinding4480 !== 0 &&
      workbookBinding4482.x > workbookBinding4483.x,
    workbookBinding4485 =
      workbookBinding4481 !== 0 &&
      workbookBinding4482.y > workbookBinding4483.y,
    workbookBinding4486 = workbookBinding4478.map((item) => {
      let workbookBinding21168 = item.x - workbookBinding4479.minX,
        workbookBinding21169 = item.y - workbookBinding4479.minY;
      return {
        x: workbookBinding4484
          ? workbookBinding4480 - workbookBinding21168
          : workbookBinding21168,
        y: workbookBinding4485
          ? workbookBinding4481 - workbookBinding21169
          : workbookBinding21169,
      };
    }),
    workbookBinding4487 = workbookBinding4478.length - 1;
  if (workbookBinding4487 <= 1) {
    if (workbookBinding4480 > 0 && workbookBinding4481 > 0) {
      let workbookBinding16466 = {
        bounds: workbookBinding4479,
        width: workbookBinding4480,
        height: workbookBinding4481,
        flipH: workbookBinding4484,
        flipV: workbookBinding4485,
        geometry: workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR3,
        adjustments: [
          {
            name: "adj1",
            formula: "val 50000",
          },
        ],
      };
      return icR.nve(workbookBinding4482, workbookBinding4483)
        ? icR.rve(
            workbookBinding16466,
            workbookBinding4482,
            workbookBinding4483,
          )
        : workbookBinding16466;
    }
    return {
      bounds: workbookBinding4479,
      width: workbookBinding4480,
      height: workbookBinding4481,
      flipH: workbookBinding4484,
      flipV: workbookBinding4485,
      geometry: workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR2,
      adjustments: [],
    };
  }
  if (!icR.ive(workbookBinding4486)) return;
  if (workbookBinding4487 === 2) {
    let workbookBinding15351 = ratioToFixedPercent(
      workbookBinding4486[1]?.x,
      workbookBinding4480,
    );
    if (workbookBinding15351 === undefined) return;
    let workbookBinding15352 = {
      bounds: workbookBinding4479,
      width: workbookBinding4480,
      height: workbookBinding4481,
      flipH: workbookBinding4484,
      flipV: workbookBinding4485,
      geometry: workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR3,
      adjustments: [
        {
          name: "adj1",
          formula: `val ${workbookBinding15351}`,
        },
      ],
    };
    return workbookBinding4480 > 0 &&
      workbookBinding4481 > 0 &&
      icR.nve(workbookBinding4482, workbookBinding4483)
      ? icR.rve(workbookBinding15352, workbookBinding4482, workbookBinding4483)
      : workbookBinding15352;
  }
  if (workbookBinding4487 === 3) {
    let workbookBinding13424 = ratioToFixedPercent(
        workbookBinding4486[1]?.x,
        workbookBinding4480,
      ),
      workbookBinding13425 = ratioToFixedPercent(
        workbookBinding4486[2]?.y,
        workbookBinding4481,
      );
    return workbookBinding13424 === undefined ||
      workbookBinding13425 === undefined
      ? undefined
      : {
          bounds: workbookBinding4479,
          width: workbookBinding4480,
          height: workbookBinding4481,
          flipH: workbookBinding4484,
          flipV: workbookBinding4485,
          geometry: workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR4,
          adjustments: [
            {
              name: "adj1",
              formula: `val ${workbookBinding13424}`,
            },
            {
              name: "adj2",
              formula: `val ${workbookBinding13425}`,
            },
          ],
        };
  }
  let workbookBinding4488 = ratioToFixedPercent(
      workbookBinding4486[1]?.x,
      workbookBinding4480,
    ),
    workbookBinding4489 = ratioToFixedPercent(
      workbookBinding4486[2]?.y,
      workbookBinding4481,
    ),
    workbookBinding4490 = ratioToFixedPercent(
      workbookBinding4486[3]?.x,
      workbookBinding4480,
    );
  if (
    !(
      workbookBinding4488 === undefined ||
      workbookBinding4489 === undefined ||
      workbookBinding4490 === undefined
    )
  )
    return {
      bounds: workbookBinding4479,
      width: workbookBinding4480,
      height: workbookBinding4481,
      flipH: workbookBinding4484,
      flipV: workbookBinding4485,
      geometry: workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR5,
      adjustments: [
        {
          name: "adj1",
          formula: `val ${workbookBinding4488}`,
        },
        {
          name: "adj2",
          formula: `val ${workbookBinding4489}`,
        },
        {
          name: "adj3",
          formula: `val ${workbookBinding4490}`,
        },
      ],
    };
}
export function nve(icIn13595: any, icIn13596: any) {
  return (
    !pointsNearEqual(icIn13595.x, icIn13596.x) &&
    !pointsNearEqual(icIn13595.y, icIn13596.y)
  );
}
export function rve(icIn4310: any, icIn4311: any, icIn4312: any) {
  let workbookBinding13396 = icIn4310.bounds.minX + icIn4310.width / 2,
    workbookBinding13397 = icIn4310.bounds.minY + icIn4310.height / 2,
    workbookBinding13398 = icIn4310.height,
    workbookBinding13399 = icIn4310.width,
    workbookBinding13400 = icIn4311.x > icIn4312.x,
    workbookBinding13401 = icIn4311.y < icIn4312.y,
    workbookBinding13402 =
      workbookBinding13400 === workbookBinding13401 ? 90 : 270,
    workbookBinding13403 = workbookBinding13400 !== workbookBinding13401;
  return {
    ...icIn4310,
    bounds: {
      minX: workbookBinding13396 - workbookBinding13398 / 2,
      minY: workbookBinding13397 - workbookBinding13399 / 2,
      maxX: workbookBinding13396 + workbookBinding13398 / 2,
      maxY: workbookBinding13397 + workbookBinding13399 / 2,
    },
    width: workbookBinding13398,
    height: workbookBinding13399,
    rotation: workbookBinding13402,
    flipH: workbookBinding13403,
    flipV: false,
  };
}
export function ive(icIn8844: any) {
  for (
    let workbookBinding20453 = 0;
    workbookBinding20453 < icIn8844.length - 1;
    workbookBinding20453 += 1
  ) {
    let workbookBinding21743 = icIn8844[workbookBinding20453],
      workbookBinding21744 = icIn8844[workbookBinding20453 + 1];
    if (
      workbookBinding21744.x < workbookBinding21743.x - 0.001 ||
      workbookBinding21744.y < workbookBinding21743.y - 0.001
    )
      return false;
  }
  return true;
}
export function ave(icIn4839: any, icIn4840: any) {
  let workbookBinding14218 = simplifyPolyline(icIn4839);
  if (workbookBinding14218.length < 2) return;
  let workbookBinding14219 = pointsBBox(workbookBinding14218),
    workbookBinding14220 =
      workbookBinding14219.maxX - workbookBinding14219.minX,
    workbookBinding14221 =
      workbookBinding14219.maxY - workbookBinding14219.minY;
  if (workbookBinding14220 === 0 && workbookBinding14221 === 0) return;
  let workbookBinding14222 = workbookBinding14218[0],
    workbookBinding14223 =
      workbookBinding14218[workbookBinding14218.length - 1];
  return {
    bounds: workbookBinding14219,
    width: workbookBinding14220,
    height: workbookBinding14221,
    flipH:
      workbookBinding14220 !== 0 &&
      workbookBinding14222.x > workbookBinding14223.x,
    flipV:
      workbookBinding14221 !== 0 &&
      workbookBinding14222.y > workbookBinding14223.y,
    geometry: icR.ove(icIn4840, workbookBinding14218.length - 1),
    adjustments: [],
  };
}
export function ove(icIn10210: any, icIn10211: any) {
  return icIn10210 !== undefined && icR.cve(icIn10210)
    ? icIn10210
    : icIn10211 <= 1
      ? workbookDt.SHAPE_GEOMETRY_STRAIGHT_CONNECTOR1
      : icR.sve(icIn10211);
}
export function sve(icIn7394: any) {
  return icIn7394 <= 2
    ? workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR2
    : icIn7394 === 3
      ? workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR3
      : icIn7394 === 4
        ? workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR4
        : workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR5;
}
export function cve(icIn11730: any) {
  return (
    icIn11730 === workbookDt.SHAPE_GEOMETRY_STRAIGHT_CONNECTOR1 ||
    icR.lve(icIn11730) ||
    icR.uve(icIn11730)
  );
}
export function lve(icIn6842: any) {
  switch (icIn6842) {
    case workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR2:
    case workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR3:
    case workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR4:
    case workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR5:
      return true;
    default:
      return false;
  }
}
export function uve(icIn6651: any) {
  switch (icIn6651) {
    case workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR2:
    case workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR3:
    case workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR4:
    case workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR5:
      return true;
    default:
      return false;
  }
}
export function dve(icIn2323: any) {
  if (icIn2323.geometry !== "custom") return [];
  let workbookBinding9451 = icIn2323.customPaths ?? [];
  if (workbookBinding9451.length === 0)
    throw Error('geometry "custom" requires at least one custom path.');
  return workbookBinding9451.map((item, index) => {
    if (!item?.commands?.length)
      throw Error(
        `Custom path ${index + 1} must declare at least one command.`,
      );
    let workbookBinding11351 = Number(item.width),
      workbookBinding11352 = Number(item.height);
    if (!Number.isFinite(workbookBinding11351) || workbookBinding11351 <= 0)
      throw Error(
        `Custom path ${index + 1} must specify a positive width (pixels).`,
      );
    if (!Number.isFinite(workbookBinding11352) || workbookBinding11352 <= 0)
      throw Error(
        `Custom path ${index + 1} must specify a positive height (pixels).`,
      );
    return {
      id: item.id,
      widthEmu: workbookTt(workbookBinding11351),
      heightEmu: workbookTt(workbookBinding11352),
      commands: item.commands.map(fve),
    };
  });
}
export function icFn372(icIn10424: any) {
  if (!Number.isFinite(icIn10424))
    throw Error("Custom path coordinates must be finite numbers.");
  return workbookTt(icIn10424);
}
export function fve(icIn2305: any) {
  return "moveTo" in icIn2305
    ? {
        moveTo: {
          x: icR.icFn372(icIn2305.moveTo.x),
          y: icR.icFn372(icIn2305.moveTo.y),
        },
      }
    : "lineTo" in icIn2305
      ? {
          lineTo: {
            x: icR.icFn372(icIn2305.lineTo.x),
            y: icR.icFn372(icIn2305.lineTo.y),
          },
        }
      : "quadBezTo" in icIn2305
        ? {
            quadBezTo: {
              x1: icR.icFn372(icIn2305.quadBezTo.x1),
              y1: icR.icFn372(icIn2305.quadBezTo.y1),
              x: icR.icFn372(icIn2305.quadBezTo.x),
              y: icR.icFn372(icIn2305.quadBezTo.y),
            },
          }
        : "cubicBezTo" in icIn2305
          ? {
              cubicBezTo: {
                x1: icR.icFn372(icIn2305.cubicBezTo.x1),
                y1: icR.icFn372(icIn2305.cubicBezTo.y1),
                x2: icR.icFn372(icIn2305.cubicBezTo.x2),
                y2: icR.icFn372(icIn2305.cubicBezTo.y2),
                x: icR.icFn372(icIn2305.cubicBezTo.x),
                y: icR.icFn372(icIn2305.cubicBezTo.y),
              },
            }
          : {
              close: {},
            };
}
export function pve(icIn15108: any, icIn15109: any, icIn15110: any) {
  return composeScopedId(icIn15108, icIn15109, icIn15110);
}
icR.J_e = J_e;
icR.Y_e = Y_e;
icR.X_e = X_e;
icR.icFn371 = icFn371;
icR.Z_e = Z_e;
icR.Q_e = Q_e;
icR.$_e = $_e;
icR.eve = eve;
icR.tve = tve;
icR.nve = nve;
icR.rve = rve;
icR.ive = ive;
icR.ave = ave;
icR.ove = ove;
icR.sve = sve;
icR.cve = cve;
icR.lve = lve;
icR.uve = uve;
icR.dve = dve;
icR.icFn372 = icFn372;
icR.fve = fve;
icR.pve = pve;
