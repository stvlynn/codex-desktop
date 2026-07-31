// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: connector route helpers B (legacy x_e…L_e).
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

export function b_e(icIn8841: any, icIn8842: any, icIn8843: any) {
  if (icIn8843.length === 0) return true;
  for (
    let workbookBinding21639 = 1;
    workbookBinding21639 < workbookBinding732;
    workbookBinding21639 += 1
  ) {
    let workbookBinding22519 = icR.x_e(
      icIn8841,
      icIn8842,
      workbookBinding21639 / workbookBinding732,
    );
    if (icR.z_e(workbookBinding22519.x, workbookBinding22519.y, icIn8843))
      return false;
  }
  return true;
}
export function x_e(icIn7391: any, icIn7392: any, icIn7393: any) {
  let workbookBinding17826 = 1 - icIn7393,
    workbookBinding17827 = workbookBinding17826 * workbookBinding17826,
    workbookBinding17828 = icIn7393 * icIn7393;
  return {
    x:
      icIn7391.x * workbookBinding17827 * workbookBinding17826 +
      3 * icIn7392.x1 * workbookBinding17827 * icIn7393 +
      3 * icIn7392.x2 * workbookBinding17826 * workbookBinding17828 +
      icIn7392.x * icIn7393 * workbookBinding17828,
    y:
      icIn7391.y * workbookBinding17827 * workbookBinding17826 +
      3 * icIn7392.y1 * workbookBinding17827 * icIn7393 +
      3 * icIn7392.y2 * workbookBinding17826 * workbookBinding17828 +
      icIn7392.y * icIn7393 * workbookBinding17828,
  };
}
export function S_e(icIn682: any) {
  let workbookBinding4938 = icR.icFn361(icIn682);
  if (workbookBinding4938.length <= 2) return icR.icFn358(workbookBinding4938);
  let workbookBinding4939 = workbookBinding4938[0];
  if (!workbookBinding4939) return [];
  if (workbookBinding4938.length === 3) {
    let workbookBinding14288 = workbookBinding4938[1],
      workbookBinding14289 = workbookBinding4938[2];
    return !workbookBinding14288 || !workbookBinding14289
      ? []
      : [
          {
            cmd: "moveTo",
            x: workbookBinding4939.x,
            y: workbookBinding4939.y,
          },
          {
            cmd: "cubicBezTo",
            x1:
              workbookBinding14288.x -
              (workbookBinding14288.x - workbookBinding4939.x) / 3,
            y1:
              workbookBinding14288.y -
              (workbookBinding14288.y - workbookBinding4939.y) / 3,
            x2:
              workbookBinding14288.x -
              (workbookBinding14288.x - workbookBinding14289.x) / 3,
            y2:
              workbookBinding14288.y -
              (workbookBinding14288.y - workbookBinding14289.y) / 3,
            x: workbookBinding14289.x,
            y: workbookBinding14289.y,
          },
        ];
  }
  let workbookBinding4940 = workbookBinding4938[workbookBinding4938.length - 1],
    workbookBinding4941 = workbookBinding4938[1],
    workbookBinding4942 = workbookBinding4938[workbookBinding4938.length - 2];
  if (!workbookBinding4940 || !workbookBinding4941 || !workbookBinding4942)
    return [];
  let workbookBinding4943 = icR.w_e(
      workbookBinding4941,
      workbookBinding4939,
      0.5,
    ),
    workbookBinding4944 = icR.w_e(
      workbookBinding4942,
      workbookBinding4940,
      0.5,
    ),
    workbookBinding4945 = [
      {
        cmd: "moveTo",
        x: workbookBinding4939.x,
        y: workbookBinding4939.y,
      },
    ];
  if (workbookBinding4938.length === 4)
    return (
      workbookBinding4945.push({
        cmd: "cubicBezTo",
        x1: workbookBinding4943.x,
        y1: workbookBinding4943.y,
        x2: workbookBinding4944.x,
        y2: workbookBinding4944.y,
        x: workbookBinding4940.x,
        y: workbookBinding4940.y,
      }),
      workbookBinding4945
    );
  if (workbookBinding4938.length === 5) {
    let workbookBinding11861 = workbookBinding4938[2];
    if (!workbookBinding11861) return workbookBinding4945;
    let workbookBinding11862 = icR.icFn359(
        workbookBinding4943,
        workbookBinding11861,
      ),
      workbookBinding11863 = {
        x:
          workbookBinding11861.x -
          (workbookBinding11861.x -
            workbookBinding4943.x +
            (workbookBinding11861.x - workbookBinding4944.x)) /
            4,
        y:
          workbookBinding11861.y -
          (workbookBinding11861.y -
            workbookBinding4943.y +
            (workbookBinding11861.y - workbookBinding4944.y)) /
            4,
      },
      workbookBinding11864 = icR.icFn359(
        workbookBinding4944,
        workbookBinding11861,
      );
    return (
      workbookBinding4945.push({
        cmd: "cubicBezTo",
        x1: workbookBinding4943.x,
        y1: workbookBinding4943.y,
        x2: workbookBinding11862.x,
        y2: workbookBinding11862.y,
        x: workbookBinding11863.x,
        y: workbookBinding11863.y,
      }),
      workbookBinding4945.push({
        cmd: "cubicBezTo",
        x1: workbookBinding11864.x,
        y1: workbookBinding11864.y,
        x2: workbookBinding4944.x,
        y2: workbookBinding4944.y,
        x: workbookBinding4940.x,
        y: workbookBinding4940.y,
      }),
      workbookBinding4945
    );
  }
  if (workbookBinding4938.length === 6) {
    let workbookBinding13657 = workbookBinding4938[2],
      workbookBinding13658 = workbookBinding4938[3];
    if (!workbookBinding13657 || !workbookBinding13658)
      return workbookBinding4945;
    let workbookBinding13659 = icR.icFn359(
      workbookBinding13657,
      workbookBinding13658,
    );
    return (
      workbookBinding4945.push({
        cmd: "cubicBezTo",
        x1: workbookBinding4943.x,
        y1: workbookBinding4943.y,
        x2: workbookBinding13657.x,
        y2: workbookBinding13657.y,
        x: workbookBinding13659.x,
        y: workbookBinding13659.y,
      }),
      workbookBinding4945.push({
        cmd: "cubicBezTo",
        x1: workbookBinding13658.x,
        y1: workbookBinding13658.y,
        x2: workbookBinding4944.x,
        y2: workbookBinding4944.y,
        x: workbookBinding4940.x,
        y: workbookBinding4940.y,
      }),
      workbookBinding4945
    );
  }
  return icR.C_e(workbookBinding4938);
}
export function C_e(icIn1279: any) {
  let workbookBinding6925 = icR.icFn361(icIn1279);
  if (workbookBinding6925.length <= 2) return icR.icFn358(workbookBinding6925);
  let workbookBinding6926 = workbookBinding6925[0];
  if (!workbookBinding6926) return [];
  let workbookBinding6927 = [
      {
        cmd: "moveTo",
        x: workbookBinding6926.x,
        y: workbookBinding6926.y,
      },
    ],
    workbookBinding6928 = workbookBinding6925.length - 1;
  if (workbookBinding6925.length === 3) {
    let workbookBinding16632 = workbookBinding6925[2];
    if (!workbookBinding16632) return workbookBinding6927;
    let workbookBinding16633 = icR.icFn360(workbookBinding6925, 1, 0.5),
      workbookBinding16634 = icR.icFn360(workbookBinding6925, 2, 0.5);
    return (
      workbookBinding6927.push({
        cmd: "cubicBezTo",
        x1: workbookBinding16633.x,
        y1: workbookBinding16633.y,
        x2: workbookBinding16634.x,
        y2: workbookBinding16634.y,
        x: workbookBinding16632.x,
        y: workbookBinding16632.y,
      }),
      workbookBinding6927
    );
  }
  let workbookBinding6929 = icR.icFn360(workbookBinding6925, 1, 0.5),
    workbookBinding6930 = icR.icFn360(workbookBinding6925, 2, 0.25),
    workbookBinding6931 = icR.icFn360(workbookBinding6925, 2, 0.5);
  workbookBinding6927.push({
    cmd: "cubicBezTo",
    x1: workbookBinding6929.x,
    y1: workbookBinding6929.y,
    x2: workbookBinding6930.x,
    y2: workbookBinding6930.y,
    x: workbookBinding6931.x,
    y: workbookBinding6931.y,
  });
  for (
    let workbookBinding17122 = 3;
    workbookBinding17122 <= workbookBinding6928 - 1;
    workbookBinding17122 += 1
  ) {
    let workbookBinding18107 = icR.icFn360(
        workbookBinding6925,
        workbookBinding17122 - 1,
        0.75,
      ),
      workbookBinding18108 = icR.icFn360(
        workbookBinding6925,
        workbookBinding17122,
        0.25,
      ),
      workbookBinding18109 = icR.icFn360(
        workbookBinding6925,
        workbookBinding17122,
        0.5,
      );
    workbookBinding6927.push({
      cmd: "cubicBezTo",
      x1: workbookBinding18107.x,
      y1: workbookBinding18107.y,
      x2: workbookBinding18108.x,
      y2: workbookBinding18108.y,
      x: workbookBinding18109.x,
      y: workbookBinding18109.y,
    });
  }
  let workbookBinding6932 = workbookBinding6925[workbookBinding6928];
  if (!workbookBinding6932) return workbookBinding6927;
  let workbookBinding6933 = icR.icFn360(
      workbookBinding6925,
      workbookBinding6928 - 1,
      0.75,
    ),
    workbookBinding6934 = icR.icFn360(
      workbookBinding6925,
      workbookBinding6928,
      0.5,
    );
  return (
    workbookBinding6927.push({
      cmd: "cubicBezTo",
      x1: workbookBinding6933.x,
      y1: workbookBinding6933.y,
      x2: workbookBinding6934.x,
      y2: workbookBinding6934.y,
      x: workbookBinding6932.x,
      y: workbookBinding6932.y,
    }),
    workbookBinding6927
  );
}
export function w_e(icIn11838: any, icIn11839: any, icIn11840: any) {
  return {
    x: icIn11838.x + (icIn11838.x - icIn11839.x) * icIn11840,
    y: icIn11838.y + (icIn11838.y - icIn11839.y) * icIn11840,
  };
}
export function icFn359(icIn12815: any, icIn12816: any) {
  return {
    x: (icIn12815.x + icIn12816.x) / 2,
    y: (icIn12815.y + icIn12816.y) / 2,
  };
}
export function icFn360() {
  let workbookBinding18455 = icIn7969[icIn7970 - 1],
    workbookBinding18456 = icIn7969[icIn7970];
  if (!workbookBinding18455 || !workbookBinding18456)
    throw Error(`Curved connector segment ${icIn7970} is missing a point.`);
  return {
    x:
      workbookBinding18455.x +
      icIn7971 * (workbookBinding18456.x - workbookBinding18455.x),
    y:
      workbookBinding18455.y +
      icIn7971 * (workbookBinding18456.y - workbookBinding18455.y),
  };
}
export function icFn361(icIn10292: any) {
  let workbookBinding20773 = [];
  for (let workbookBinding22259 of icIn10292) {
    let workbookBinding22570 =
      workbookBinding20773[workbookBinding20773.length - 1];
    (workbookBinding22570 &&
      icR.T_e(workbookBinding22570, workbookBinding22259)) ||
      workbookBinding20773.push(workbookBinding22259);
  }
  return workbookBinding20773;
}
export function T_e(icIn11900: any, icIn11901: any) {
  return (
    Math.abs(icIn11900.x - icIn11901.x) < 1e-4 &&
    Math.abs(icIn11900.y - icIn11901.y) < 1e-4
  );
}
export function E_e(props: any) {
  let {
      start,
      end,
      obstacles,
      maxBends,
      bendPenalty,
      preferredStartDir,
      preferredEndDir,
      meetingGuidance,
    } = props,
    workbookBinding4349 = icR.D_e({
      start,
      end,
      obstacles,
      maxBends,
      preferredStartDir,
      preferredEndDir,
      meetingGuidance,
    });
  if (workbookBinding4349) return workbookBinding4349;
  let workbookBinding4350 = icR.F_e(start, end, obstacles, meetingGuidance),
    workbookBinding4351 = icR.I_e(workbookBinding4350, obstacles),
    workbookBinding4352 = icR.icFn366(start),
    workbookBinding4353 = icR.icFn366(end),
    workbookBinding4354 = workbookBinding4350.findIndex(
      (item) => item.key === workbookBinding4352,
    ),
    workbookBinding4355 = workbookBinding4350.findIndex(
      (item) => item.key === workbookBinding4353,
    );
  if (workbookBinding4354 < 0 || workbookBinding4355 < 0)
    throw Error("Failed to seed orthogonal routing nodes.");
  let workbookBinding4356 = workbookBinding4350[workbookBinding4354],
    workbookBinding4357 = workbookBinding4350[workbookBinding4355];
  if (!workbookBinding4356 || !workbookBinding4357)
    throw Error("Failed to seed routing endpoints.");
  let workbookBinding4358 = [],
    workbookBinding4359 = new Map(),
    workbookBinding4360 = new Map(),
    workbookBinding4361 = {
      node: workbookBinding4354,
      dir: "none",
      bends: 0,
      g: 0,
      f: icR.icFn364(workbookBinding4356, workbookBinding4357),
      pathLen: 0,
    };
  for (
    workbookBinding4358.push(workbookBinding4361),
      workbookBinding4360.set(icR.icFn365(workbookBinding4361), 0);
    workbookBinding4358.length > 0;
  ) {
    workbookBinding4358.sort(
      (icIn12049, icIn12050) =>
        icIn12049.f - icIn12050.f ||
        icIn12049.bends - icIn12050.bends ||
        icIn12049.g - icIn12050.g ||
        icIn12049.pathLen - icIn12050.pathLen,
    );
    let workbookBinding6287 = workbookBinding4358.shift();
    if (workbookBinding6287.node === workbookBinding4355)
      return icR.H_e({
        nodes: workbookBinding4350,
        cameFrom: workbookBinding4359,
        state: workbookBinding6287,
      });
    let workbookBinding6288 = icR.icFn365(workbookBinding6287),
      workbookBinding6289 = workbookBinding4350[workbookBinding6287.node];
    if (!workbookBinding6289) continue;
    let workbookBinding6290 =
      workbookBinding4351.get(workbookBinding6289.key) ?? [];
    for (let workbookBinding7677 of workbookBinding6290) {
      let workbookBinding7746 = workbookBinding4350[workbookBinding7677.index];
      if (!workbookBinding7746) continue;
      let workbookBinding7747 = icR.icFn363(
        workbookBinding6289,
        workbookBinding7746,
      );
      if (workbookBinding7747 === "none") continue;
      let workbookBinding7748 =
        workbookBinding6287.dir === "none" ||
        workbookBinding6287.dir === workbookBinding7747
          ? workbookBinding6287.bends
          : workbookBinding6287.bends + 1;
      if (workbookBinding7748 > maxBends) continue;
      let workbookBinding7749 = Math.hypot(
          workbookBinding7746.x - workbookBinding6289.x,
          workbookBinding7746.y - workbookBinding6289.y,
        ),
        workbookBinding7750 =
          workbookBinding7748 > workbookBinding6287.bends ? bendPenalty : 0,
        workbookBinding7751 =
          workbookBinding6287.dir === "none" &&
          preferredStartDir !== "none" &&
          icR.icFn369(workbookBinding7747, preferredStartDir)
            ? bendPenalty * 2
            : 0,
        workbookBinding7752 =
          workbookBinding7677.index === workbookBinding4355 &&
          preferredEndDir !== "none" &&
          icR.icFn369(workbookBinding7747, preferredEndDir)
            ? bendPenalty * 2
            : 0,
        workbookBinding7753 = icR.P_e({
          currentNode: workbookBinding6289,
          nextNode: workbookBinding7746,
          nextDir: workbookBinding7747,
          currentIndex: workbookBinding6287.node,
          nextIndex: workbookBinding7677.index,
          startIndex: workbookBinding4354,
          endIndex: workbookBinding4355,
          meetingGuidance,
        }),
        workbookBinding7754 =
          workbookBinding6287.g +
          workbookBinding7749 +
          workbookBinding7750 +
          workbookBinding7751 +
          workbookBinding7752 +
          workbookBinding7753,
        workbookBinding7755 = {
          node: workbookBinding7677.index,
          dir: workbookBinding7747,
          bends: workbookBinding7748,
          g: workbookBinding7754,
          f:
            workbookBinding7754 +
            icR.icFn364(workbookBinding7746, workbookBinding4357),
          pathLen: workbookBinding6287.pathLen + 1,
        },
        workbookBinding7756 = icR.icFn365(workbookBinding7755);
      workbookBinding7754 <
        (workbookBinding4360.get(workbookBinding7756) ?? 1 / 0) &&
        (workbookBinding4359.set(workbookBinding7756, {
          prevKey: workbookBinding6288,
          node: workbookBinding6287.node,
          dir: workbookBinding6287.dir,
        }),
        workbookBinding4360.set(workbookBinding7756, workbookBinding7754),
        workbookBinding4358.push(workbookBinding7755));
    }
  }
  throw Error("Failed to compute orthogonal route.");
}
export function D_e(props: any) {
  let {
      start,
      end,
      obstacles,
      maxBends,
      preferredStartDir,
      preferredEndDir,
      meetingGuidance,
    } = props,
    workbookBinding8688 = icR.k_e({
      start,
      end,
      preferredStartDir,
      preferredEndDir,
      meetingGuidance,
    });
  if (workbookBinding8688) {
    let workbookBinding22406 = icR.icFn361(workbookBinding8688);
    if (
      workbookBinding22406.length >= 2 &&
      icR.A_e(workbookBinding22406) &&
      icR.j_e(workbookBinding22406, obstacles)
    )
      return workbookBinding22406;
  }
  let workbookBinding8689 = [
      [start, end],
      [
        start,
        {
          x: end.x,
          y: start.y,
        },
        end,
      ],
      [
        start,
        {
          x: start.x,
          y: end.y,
        },
        end,
      ],
    ],
    workbookBinding8690;
  for (let workbookBinding15383 of workbookBinding8689) {
    let workbookBinding15705 = icR.icFn361(workbookBinding15383);
    if (
      workbookBinding15705.length < 2 ||
      !icR.A_e(workbookBinding15705) ||
      !icR.j_e(workbookBinding15705, obstacles) ||
      icR.O_e({
        points: workbookBinding15705,
        preferredStartDir,
        preferredEndDir,
      }) > maxBends
    )
      continue;
    let workbookBinding15706 = icR.N_e({
      points: workbookBinding15705,
      preferredStartDir,
      preferredEndDir,
    });
    (!workbookBinding8690 ||
      workbookBinding15706 < workbookBinding8690.score) &&
      (workbookBinding8690 = {
        points: workbookBinding15705,
        score: workbookBinding15706,
      });
  }
  return workbookBinding8690?.points;
}
export function O_e(props: any) {
  let { points, preferredStartDir, preferredEndDir } = props,
    workbookBinding14549 = [];
  preferredStartDir !== "none" && workbookBinding14549.push(preferredStartDir);
  for (
    let workbookBinding21619 = 1;
    workbookBinding21619 < points.length;
    workbookBinding21619 += 1
  ) {
    let workbookBinding22585 = icR.icFn363(
      points[workbookBinding21619 - 1],
      points[workbookBinding21619],
    );
    workbookBinding22585 !== "none" &&
      workbookBinding14549.push(workbookBinding22585);
  }
  preferredEndDir !== "none" && workbookBinding14549.push(preferredEndDir);
  let workbookBinding14550 = 0,
    workbookBinding14551 = "none";
  for (let workbookBinding22672 of workbookBinding14549) {
    workbookBinding14551 !== "none" &&
      workbookBinding22672 !== workbookBinding14551 &&
      (workbookBinding14550 += 1);
    workbookBinding14551 = workbookBinding22672;
  }
  return workbookBinding14550;
}
export function k_e(icIn3744: any) {
  let { start, end, preferredStartDir, preferredEndDir, meetingGuidance } =
    icIn3744;
  if (!(!meetingGuidance || preferredStartDir !== preferredEndDir)) {
    if (
      icR.icFn370(preferredStartDir) === "horizontal" &&
      meetingGuidance.preferredMeetingX !== undefined
    ) {
      let workbookBinding21859 = meetingGuidance.preferredMeetingX;
      return [
        start,
        {
          x: workbookBinding21859,
          y: start.y,
        },
        {
          x: workbookBinding21859,
          y: end.y,
        },
        end,
      ];
    }
    if (
      icR.icFn370(preferredStartDir) === "vertical" &&
      meetingGuidance.preferredMeetingY !== undefined
    ) {
      let workbookBinding21860 = meetingGuidance.preferredMeetingY;
      return [
        start,
        {
          x: start.x,
          y: workbookBinding21860,
        },
        {
          x: end.x,
          y: workbookBinding21860,
        },
        end,
      ];
    }
  }
}
export function A_e(props: any) {
  for (
    let workbookBinding22229 = 1;
    workbookBinding22229 < props.length;
    workbookBinding22229 += 1
  )
    if (
      icR.icFn363(
        props[workbookBinding22229 - 1],
        props[workbookBinding22229],
      ) === "none"
    )
      return false;
  return true;
}
export function j_e(icIn10835: any, icIn10836: any) {
  for (
    let workbookBinding22454 = 1;
    workbookBinding22454 < icIn10835.length;
    workbookBinding22454 += 1
  )
    if (
      !icR.M_e(
        icIn10835[workbookBinding22454 - 1],
        icIn10835[workbookBinding22454],
        icIn10836,
      )
    )
      return false;
  return true;
}
export function M_e(icIn8811: any, icIn8812: any, icIn8813: any) {
  let workbookBinding19369 = {
      x: icIn8811.x,
      y: icIn8811.y,
      key: icR.icFn366(icIn8811),
    },
    workbookBinding19370 = {
      x: icIn8812.x,
      y: icIn8812.y,
      key: icR.icFn366(icIn8812),
    };
  return icIn8811.x === icIn8812.x
    ? !icR.L_e(workbookBinding19369, workbookBinding19370, icIn8813)
    : icIn8811.y === icIn8812.y
      ? !icR.R_e(workbookBinding19369, workbookBinding19370, icIn8813)
      : false;
}
export function N_e(props: any) {
  let { points, preferredStartDir, preferredEndDir } = props,
    workbookBinding12269 = 0,
    workbookBinding12270 = 0,
    workbookBinding12271 = "none";
  for (
    let workbookBinding18992 = 1;
    workbookBinding18992 < points.length;
    workbookBinding18992 += 1
  ) {
    let workbookBinding20140 = points[workbookBinding18992 - 1],
      workbookBinding20141 = points[workbookBinding18992],
      workbookBinding20142 = icR.icFn363(
        workbookBinding20140,
        workbookBinding20141,
      );
    workbookBinding20142 !== "none" &&
      ((workbookBinding12269 += icR.icFn364(
        workbookBinding20140,
        workbookBinding20141,
      )),
      workbookBinding12271 !== "none" &&
        workbookBinding20142 !== workbookBinding12271 &&
        (workbookBinding12270 += 1),
      (workbookBinding12271 = workbookBinding20142));
  }
  let workbookBinding12272 = icR.icFn363(points[0], points[1]),
    workbookBinding12273 = icR.icFn363(
      points[points.length - 2],
      points[points.length - 1],
    ),
    workbookBinding12274 =
      preferredStartDir !== "none" &&
      icR.icFn369(workbookBinding12272, preferredStartDir)
        ? 500
        : 0,
    workbookBinding12275 =
      preferredEndDir !== "none" &&
      icR.icFn369(workbookBinding12273, preferredEndDir)
        ? 500
        : 0;
  return (
    workbookBinding12270 * 1e3 +
    workbookBinding12269 +
    workbookBinding12274 +
    workbookBinding12275
  );
}
export function P_e(props: any) {
  let {
    currentNode,
    nextNode,
    nextDir,
    currentIndex,
    nextIndex,
    startIndex,
    endIndex,
    meetingGuidance,
  } = props;
  return !meetingGuidance ||
    currentIndex === startIndex ||
    currentIndex === endIndex ||
    nextIndex === startIndex ||
    nextIndex === endIndex
    ? 0
    : (nextDir === "up" || nextDir === "down") &&
        meetingGuidance.preferredMeetingX !== undefined
      ? (Math.abs(currentNode.x - meetingGuidance.preferredMeetingX) +
          Math.abs(nextNode.x - meetingGuidance.preferredMeetingX)) *
        0.5 *
        workbookBinding733
      : (nextDir === "left" || nextDir === "right") &&
          meetingGuidance.preferredMeetingY !== undefined
        ? (Math.abs(currentNode.y - meetingGuidance.preferredMeetingY) +
            Math.abs(nextNode.y - meetingGuidance.preferredMeetingY)) *
          0.5 *
          workbookBinding733
        : 0;
}
export function F_e() {
  let workbookBinding11337 = new Set([icIn3174.x, icIn3175.x]),
    workbookBinding11338 = new Set([icIn3174.y, icIn3175.y]);
  icIn3177?.preferredMeetingX !== undefined &&
    workbookBinding11337.add(icIn3177.preferredMeetingX);
  icIn3177?.preferredMeetingY !== undefined &&
    workbookBinding11338.add(icIn3177.preferredMeetingY);
  for (let workbookBinding22436 of icIn3176) {
    workbookBinding11337.add(workbookBinding22436.minX);
    workbookBinding11337.add(workbookBinding22436.maxX);
    workbookBinding11338.add(workbookBinding22436.minY);
    workbookBinding11338.add(workbookBinding22436.maxY);
  }
  let workbookBinding11339 = [...workbookBinding11337].sort(
      (icIn16513, icIn16514) => icIn16513 - icIn16514,
    ),
    workbookBinding11340 = [...workbookBinding11338].sort(
      (icIn16515, icIn16516) => icIn16515 - icIn16516,
    ),
    workbookBinding11341 = [];
  for (let workbookBinding19550 of workbookBinding11339)
    for (let workbookBinding20202 of workbookBinding11340)
      (!(
        icR.B_e(
          {
            x: workbookBinding19550,
            y: workbookBinding20202,
          },
          icIn3174,
        ) ||
        icR.B_e(
          {
            x: workbookBinding19550,
            y: workbookBinding20202,
          },
          icIn3175,
        )
      ) &&
        icR.z_e(workbookBinding19550, workbookBinding20202, icIn3176)) ||
        workbookBinding11341.push({
          x: workbookBinding19550,
          y: workbookBinding20202,
          key: icR.icFn366({
            x: workbookBinding19550,
            y: workbookBinding20202,
          }),
        });
  return workbookBinding11341;
}
export function I_e(icIn2088: any, icIn2089: any) {
  let workbookBinding8971 = new Map(),
    workbookBinding8972 = new Map();
  icIn2088.forEach((item, index) => {
    workbookBinding8971.set(item.key, []);
    workbookBinding8972.set(item.key, index);
  });
  let workbookBinding8973 = new Map(),
    workbookBinding8974 = new Map();
  return (
    icIn2088.forEach((item) => {
      workbookBinding8973.has(item.x) || workbookBinding8973.set(item.x, []);
      workbookBinding8973.get(item.x).push(item);
      workbookBinding8974.has(item.y) || workbookBinding8974.set(item.y, []);
      workbookBinding8974.get(item.y).push(item);
    }),
    workbookBinding8973.forEach((item) => {
      item.sort((icIn16352, icIn16353) => icIn16352.y - icIn16353.y);
      for (
        let workbookBinding19759 = 0;
        workbookBinding19759 < item.length - 1;
        workbookBinding19759 += 1
      ) {
        let workbookBinding21019 = item[workbookBinding19759],
          workbookBinding21020 = item[workbookBinding19759 + 1];
        !workbookBinding21019 ||
          !workbookBinding21020 ||
          icR.L_e(workbookBinding21019, workbookBinding21020, icIn2089) ||
          (icR.icFn362(
            workbookBinding8971,
            workbookBinding8972,
            workbookBinding21019,
            workbookBinding21020,
          ),
          icR.icFn362(
            workbookBinding8971,
            workbookBinding8972,
            workbookBinding21020,
            workbookBinding21019,
          ));
      }
    }),
    workbookBinding8974.forEach((item) => {
      item.sort((icIn16354, icIn16355) => icIn16354.x - icIn16355.x);
      for (
        let workbookBinding19760 = 0;
        workbookBinding19760 < item.length - 1;
        workbookBinding19760 += 1
      ) {
        let workbookBinding21021 = item[workbookBinding19760],
          workbookBinding21022 = item[workbookBinding19760 + 1];
        !workbookBinding21021 ||
          !workbookBinding21022 ||
          icR.R_e(workbookBinding21021, workbookBinding21022, icIn2089) ||
          (icR.icFn362(
            workbookBinding8971,
            workbookBinding8972,
            workbookBinding21021,
            workbookBinding21022,
          ),
          icR.icFn362(
            workbookBinding8971,
            workbookBinding8972,
            workbookBinding21022,
            workbookBinding21021,
          ));
      }
    }),
    workbookBinding8971
  );
}
export function icFn362() {
  let workbookBinding19785 = icIn9220.get(_event.key);
  if (workbookBinding19785 === undefined) return;
  let workbookBinding19786 = icIn9219.get(event.key);
  workbookBinding19786 &&
    (workbookBinding19786.some((item) => item.index === workbookBinding19785) ||
      workbookBinding19786.push({
        index: workbookBinding19785,
      }));
}
export function L_e(icIn7275: any, icIn7276: any, icIn7277: any) {
  if (icIn7275.x !== icIn7276.x) return true;
  let workbookBinding17649 = Math.min(icIn7275.y, icIn7276.y),
    workbookBinding17650 = Math.max(icIn7275.y, icIn7276.y);
  for (let workbookBinding21544 of icIn7277)
    if (
      !(
        icIn7275.x <= workbookBinding21544.minX ||
        icIn7275.x >= workbookBinding21544.maxX
      ) &&
      !(
        workbookBinding17650 <= workbookBinding21544.minY ||
        workbookBinding17649 >= workbookBinding21544.maxY
      )
    )
      return true;
  return false;
}
icR.b_e = b_e;
icR.x_e = x_e;
icR.S_e = S_e;
icR.C_e = C_e;
icR.w_e = w_e;
icR.icFn359 = icFn359;
icR.icFn360 = icFn360;
icR.icFn361 = icFn361;
icR.T_e = T_e;
icR.E_e = E_e;
icR.D_e = D_e;
icR.O_e = O_e;
icR.k_e = k_e;
icR.A_e = A_e;
icR.j_e = j_e;
icR.M_e = M_e;
icR.N_e = N_e;
icR.P_e = P_e;
icR.F_e = F_e;
icR.I_e = I_e;
icR.icFn362 = icFn362;
icR.L_e = L_e;
