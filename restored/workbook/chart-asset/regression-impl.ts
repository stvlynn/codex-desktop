// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: trendline regression + manual-layout helpers (legacy Helper349…Fge/Binding720).
// Stage-3 wave-75 cohesive chart-asset impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { qn } from "../presentation-protobuf";
import {
  ensureChartProtoNameMapsInit as workbookBinding404,
  areaGroupingNameToProto as vie,
  areaGroupingProtoToName as workbookBinding389,
  layoutTargetNameToProto as _ie,
  layoutModeNameToProto as workbookBinding386,
} from "../chart-proto-name-maps";
import {
  TextStyle as workbookVt,
  ensureTextStyleInit as workbookBt,
  applyTextStylePatch as workbookYt,
  parseTextStyleInput,
  parseFontSizePx,
} from "../text-style";
import { Fill as workbookCt, ensureFillInit as workbookWt } from "../fill";
import {
  Line as workbookBinding431,
  ensureLineInit as workbookBinding432,
} from "../line";
import {
  ensureStableIdConstantsInit as workbookH,
  randomUuid,
} from "../stable-id";
import {
  WorkbookColor as workbookBinding382,
  ensureWorkbookColorInit as workbookBinding383,
} from "../theme-color";
import {
  The,
  workbookBinding703,
  Ehe,
  workbookBinding704,
  Dhe,
  workbookBinding705,
  Ohe,
  khe,
  jhe,
  Nhe,
  workbookBinding706,
  workbookBinding707,
  workbookBinding708,
  workbookBinding709,
  Lhe,
  workbookBinding710,
  Ahe,
  Mhe,
  Phe,
  Fhe,
  Ihe,
  Rhe,
  zhe,
  Bhe,
  workbookBinding711,
  workbookBinding712,
  Vhe,
  Uhe,
  workbookBinding713,
  Khe,
  workbookBinding714,
  Hhe,
  Whe,
  Ghe,
  qhe,
  Jhe,
  workbookBinding715,
  Xhe,
  Qhe,
  workbookBinding716,
  tge,
  Yhe,
  Zhe,
  $he,
  ege,
  nge,
  workbookBinding717,
  ige,
} from "../chart-elements";
import { caH } from "./boundary-hooks";
import {
  She,
  oge,
  mge,
  hge,
  gge,
  _ge,
  workbookBinding719,
  yge,
  xge,
  Cge,
  Tge,
  workbookBinding721,
} from "./ca-slots";

/** No-op leave-behind (legacy Binding433). */
const workbookBinding433 = (): void => {};

export function caFn349(caIn12986: any) {
  return typeof caIn12986 == "number" && Number.isFinite(caIn12986);
}
export function formatFitCoef(caIn10710: any) {
  let workbookBinding21219 = Math.abs(caIn10710),
    workbookBinding21220 =
      workbookBinding21219 >= 1e3
        ? 0
        : workbookBinding21219 >= 100
          ? 1
          : workbookBinding21219 >= 10
            ? 2
            : 3;
  return caIn10710.toFixed(workbookBinding21220);
}
export function caFn350(caIn5244: any, caIn5245: any) {
  if (caIn5244.length < 2) return;
  let workbookBinding14813 = caIn5244.map((item) => item.y),
    workbookBinding14814 =
      workbookBinding14813.reduce(
        (accumulator, current) => accumulator + current,
        0,
      ) / workbookBinding14813.length,
    workbookBinding14815 = 0,
    workbookBinding14816 = 0;
  for (let workbookBinding22018 of caIn5244) {
    let workbookBinding22453 = caIn5245(workbookBinding22018.x);
    workbookBinding14815 +=
      (workbookBinding22018.y - workbookBinding14814) ** 2;
    workbookBinding14816 +=
      (workbookBinding22018.y - workbookBinding22453) ** 2;
  }
  if (workbookBinding14815 <= 1e-12) return;
  let workbookBinding14817 = 1 - workbookBinding14816 / workbookBinding14815;
  return Number.isFinite(workbookBinding14817)
    ? Math.max(0, Math.min(1, workbookBinding14817))
    : undefined;
}
export function Dge(caIn2440: any, caIn2441: any) {
  if (caIn2440.length < 2) return null;
  if (caFn349(caIn2441)) {
    let workbookBinding16174 = 0,
      workbookBinding16175 = 0;
    for (let workbookBinding22744 of caIn2440) {
      workbookBinding16174 += workbookBinding22744.x * workbookBinding22744.x;
      workbookBinding16175 +=
        workbookBinding22744.x * (workbookBinding22744.y - caIn2441);
    }
    if (Math.abs(workbookBinding16174) < 1e-12) return null;
    let workbookBinding16176 = workbookBinding16175 / workbookBinding16174,
      workbookBinding16177 = caIn2441,
      workbookBinding16178 = (caIn16464) =>
        workbookBinding16176 * caIn16464 + workbookBinding16177,
      workbookBinding16179 = caFn350(caIn2440, workbookBinding16178);
    return {
      evalY: workbookBinding16178,
      equation: `y = ${$w(workbookBinding16176)}x + ${$w(workbookBinding16177)}`,
      rSquared: workbookBinding16179,
    };
  }
  let workbookBinding9694 = caIn2440.length,
    workbookBinding9695 = 0,
    workbookBinding9696 = 0,
    workbookBinding9697 = 0,
    workbookBinding9698 = 0;
  for (let workbookBinding22435 of caIn2440) {
    workbookBinding9695 += workbookBinding22435.x;
    workbookBinding9696 += workbookBinding22435.y;
    workbookBinding9697 += workbookBinding22435.x * workbookBinding22435.x;
    workbookBinding9698 += workbookBinding22435.x * workbookBinding22435.y;
  }
  let workbookBinding9699 =
    workbookBinding9694 * workbookBinding9697 -
    workbookBinding9695 * workbookBinding9695;
  if (Math.abs(workbookBinding9699) < 1e-12) return null;
  let workbookBinding9700 =
      (workbookBinding9694 * workbookBinding9698 -
        workbookBinding9695 * workbookBinding9696) /
      workbookBinding9699,
    workbookBinding9701 =
      (workbookBinding9696 - workbookBinding9700 * workbookBinding9695) /
      workbookBinding9694,
    workbookBinding9702 = (caIn16465) =>
      workbookBinding9700 * caIn16465 + workbookBinding9701,
    workbookBinding9703 = caFn350(caIn2440, workbookBinding9702);
  return {
    evalY: workbookBinding9702,
    equation: `y = ${$w(workbookBinding9700)}x + ${$w(workbookBinding9701)}`,
    rSquared: workbookBinding9703,
  };
}
export function Oge(caIn3432: any, caIn3433: any) {
  let workbookBinding11849 = caIn3432.filter((item) => item.x > 0);
  if (workbookBinding11849.length < 2) return null;
  let workbookBinding11850 = Dge(
    workbookBinding11849.map((item) => ({
      x: Math.log(item.x),
      y: item.y,
    })),
    caFn349(caIn3433) ? caIn3433 : undefined,
  );
  if (!workbookBinding11850) return null;
  let workbookBinding11851 = (caIn15300) =>
      caIn15300 > 0 ? workbookBinding11850.evalY(Math.log(caIn15300)) : NaN,
    workbookBinding11852 = caFn350(workbookBinding11849, workbookBinding11851),
    workbookBinding11853 = /y\s*=\s*([-\d.]+)x\s*\+\s*([-\d.]+)/.exec(
      workbookBinding11850.equation,
    ),
    workbookBinding11854 = workbookBinding11853
      ? Number(workbookBinding11853[1])
      : undefined,
    workbookBinding11855 = workbookBinding11853
      ? Number(workbookBinding11853[2])
      : undefined;
  return {
    evalY: workbookBinding11851,
    equation: `y = ${caFn349(workbookBinding11854) ? $w(workbookBinding11854) : "?"}ln(x) + ${caFn349(workbookBinding11855) ? $w(workbookBinding11855) : "?"}`,
    rSquared: workbookBinding11852,
  };
}
export function kge(caIn3136: any, caIn3137: any) {
  let workbookBinding11257 = caIn3136.length,
    workbookBinding11258 = caIn3136.map((item, index) => [
      ...item,
      caIn3137[index],
    ]);
  for (
    let workbookBinding12769 = 0;
    workbookBinding12769 < workbookBinding11257;
    workbookBinding12769++
  ) {
    let workbookBinding13131 = workbookBinding12769;
    for (
      let workbookBinding22227 = workbookBinding12769 + 1;
      workbookBinding22227 < workbookBinding11257;
      workbookBinding22227++
    )
      Math.abs(
        workbookBinding11258[workbookBinding22227][workbookBinding12769],
      ) >
        Math.abs(
          workbookBinding11258[workbookBinding13131][workbookBinding12769],
        ) && (workbookBinding13131 = workbookBinding22227);
    if (
      Math.abs(
        workbookBinding11258[workbookBinding13131][workbookBinding12769],
      ) < 1e-12
    )
      return null;
    workbookBinding13131 !== workbookBinding12769 &&
      ([
        workbookBinding11258[workbookBinding12769],
        workbookBinding11258[workbookBinding13131],
      ] = [
        workbookBinding11258[workbookBinding13131],
        workbookBinding11258[workbookBinding12769],
      ]);
    let workbookBinding13132 =
      workbookBinding11258[workbookBinding12769][workbookBinding12769];
    for (
      let workbookBinding22838 = workbookBinding12769;
      workbookBinding22838 < workbookBinding11257 + 1;
      workbookBinding22838++
    )
      workbookBinding11258[workbookBinding12769][workbookBinding22838] =
        workbookBinding11258[workbookBinding12769][workbookBinding22838] /
        workbookBinding13132;
    for (
      let workbookBinding20016 = 0;
      workbookBinding20016 < workbookBinding11257;
      workbookBinding20016++
    ) {
      if (workbookBinding20016 === workbookBinding12769) continue;
      let workbookBinding20858 =
        workbookBinding11258[workbookBinding20016][workbookBinding12769];
      for (
        let workbookBinding22671 = workbookBinding12769;
        workbookBinding22671 < workbookBinding11257 + 1;
        workbookBinding22671++
      )
        workbookBinding11258[workbookBinding20016][workbookBinding22671] =
          workbookBinding11258[workbookBinding20016][workbookBinding22671] -
          workbookBinding20858 *
            workbookBinding11258[workbookBinding12769][workbookBinding22671];
    }
  }
  return workbookBinding11258.map((item) => item[workbookBinding11257]);
}
export function Age(caIn1109: any, caIn1110: any, caIn1111: any) {
  let workbookBinding6488 = Math.max(2, Math.min(6, Math.floor(caIn1110))) + 1;
  if (caIn1109.length < workbookBinding6488) return null;
  let workbookBinding6489 = caFn349(caIn1111) ? caIn1111 : undefined,
    workbookBinding6490 =
      workbookBinding6489 === undefined
        ? workbookBinding6488
        : workbookBinding6488 - 1,
    workbookBinding6491 = Array.from(
      {
        length: workbookBinding6490,
      },
      () => Array(workbookBinding6490).fill(0),
    ),
    workbookBinding6492 = Array(workbookBinding6490).fill(0);
  for (let workbookBinding13686 of caIn1109) {
    let workbookBinding13973 = Array(workbookBinding6488 * 2).fill(0);
    workbookBinding13973[0] = 1;
    for (
      let workbookBinding22788 = 1;
      workbookBinding22788 < workbookBinding13973.length;
      workbookBinding22788++
    )
      workbookBinding13973[workbookBinding22788] =
        workbookBinding13973[workbookBinding22788 - 1] * workbookBinding13686.x;
    let workbookBinding13974 =
      workbookBinding6489 === undefined
        ? workbookBinding13686.y
        : workbookBinding13686.y - workbookBinding6489;
    for (
      let workbookBinding17559 = 0;
      workbookBinding17559 < workbookBinding6490;
      workbookBinding17559++
    ) {
      let workbookBinding18351 = workbookBinding6491[workbookBinding17559];
      for (
        let workbookBinding21356 = 0;
        workbookBinding21356 < workbookBinding6490;
        workbookBinding21356++
      ) {
        let workbookBinding22228 =
          workbookBinding6489 === undefined
            ? workbookBinding17559 + workbookBinding21356
            : workbookBinding17559 + workbookBinding21356 + 2;
        workbookBinding18351[workbookBinding21356] =
          workbookBinding18351[workbookBinding21356] +
          workbookBinding13973[workbookBinding22228];
      }
      let workbookBinding18352 =
        workbookBinding6489 === undefined
          ? workbookBinding17559
          : workbookBinding17559 + 1;
      workbookBinding6492[workbookBinding17559] +=
        workbookBinding13974 * workbookBinding13973[workbookBinding18352];
    }
  }
  let workbookBinding6493 = kge(workbookBinding6491, workbookBinding6492);
  if (!workbookBinding6493) return null;
  let workbookBinding6494 =
      workbookBinding6489 === undefined
        ? workbookBinding6493
        : [workbookBinding6489, ...workbookBinding6493],
    workbookBinding6495 = (caIn10959) => {
      let workbookBinding21464 = 0,
        workbookBinding21465 = 1;
      for (let workbookBinding22995 of workbookBinding6494) {
        workbookBinding21464 += workbookBinding22995 * workbookBinding21465;
        workbookBinding21465 *= caIn10959;
      }
      return workbookBinding21464;
    },
    workbookBinding6496 = caFn350(caIn1109, workbookBinding6495),
    workbookBinding6497 = [];
  return (
    workbookBinding6494.forEach((item, index) => {
      if (!Number.isFinite(item)) return;
      if (index === 0) {
        workbookBinding6497.push($w(item));
        return;
      }
      let workbookBinding17173 = item >= 0 ? "+" : "-",
        workbookBinding17174 = $w(Math.abs(item)),
        workbookBinding17175 = index === 1 ? "x" : `x^${index}`;
      workbookBinding6497.push(
        `${workbookBinding17173} ${workbookBinding17174}${workbookBinding17175}`,
      );
    }),
    {
      coeffs: workbookBinding6494,
      evalY: workbookBinding6495,
      equation: `y = ${workbookBinding6497.join(" ")}`,
      rSquared: workbookBinding6496,
    }
  );
}
export function jge(caIn6420: any, caIn6421: any) {
  let workbookBinding16604 = Math.max(2, Math.floor(caIn6421)),
    workbookBinding16605 = [];
  for (
    let workbookBinding19024 = 0;
    workbookBinding19024 < caIn6420.length;
    workbookBinding19024++
  ) {
    let workbookBinding20084 = Math.max(
        0,
        workbookBinding19024 - workbookBinding16604 + 1,
      ),
      workbookBinding20085 = caIn6420.slice(
        workbookBinding20084,
        workbookBinding19024 + 1,
      ),
      workbookBinding20086 =
        workbookBinding20085.reduce(
          (accumulator, current) => accumulator + current.y,
          0,
        ) / workbookBinding20085.length;
    workbookBinding16605.push({
      x: caIn6420[workbookBinding19024].x,
      y: workbookBinding20086,
    });
  }
  return workbookBinding16605;
}
export function caFn351() {
  let workbookBinding15452 = Math.max(2, Math.floor(caIn5612));
  if (
    !Number.isFinite(caIn5610) ||
    !Number.isFinite(caIn5611) ||
    caIn5611 === caIn5610
  )
    return [];
  let workbookBinding15453 = [];
  for (
    let workbookBinding19843 = 0;
    workbookBinding19843 < workbookBinding15452;
    workbookBinding19843++
  ) {
    let workbookBinding20675 =
        caIn5610 +
        (workbookBinding19843 / (workbookBinding15452 - 1)) *
          (caIn5611 - caIn5610),
      workbookBinding20676 = caIn5613(workbookBinding20675);
    !Number.isFinite(workbookBinding20675) ||
      !Number.isFinite(workbookBinding20676) ||
      workbookBinding15453.push({
        x: workbookBinding20675,
        y: workbookBinding20676,
      });
  }
  return workbookBinding15453;
}
export function caFn352(caIn511: any) {
  let workbookBinding4270 = caIn511.type,
    workbookBinding4271 = caIn511.points.filter(
      (item) => caFn349(item.x) && caFn349(item.y),
    );
  if (workbookBinding4271.length < 2) return null;
  let workbookBinding4272 = workbookBinding4271.map((item) => item.x),
    workbookBinding4273 = Math.min(...workbookBinding4272),
    workbookBinding4274 = Math.max(...workbookBinding4272),
    workbookBinding4275 = caFn349(caIn511.forecastForward)
      ? caIn511.forecastForward
      : 0,
    workbookBinding4276 =
      workbookBinding4273 -
      (caFn349(caIn511.forecastBackward) ? caIn511.forecastBackward : 0),
    workbookBinding4277 = workbookBinding4274 + workbookBinding4275,
    workbookBinding4278 =
      !!caIn511.displayEquation || !!caIn511.displayRSquared;
  if (workbookBinding4270 === "movingAverage") {
    let workbookBinding17885 = caFn349(caIn511.movingAveragePeriod)
      ? caIn511.movingAveragePeriod
      : 2;
    return {
      type: workbookBinding4270,
      points: jge(workbookBinding4271, workbookBinding17885),
      label: workbookBinding4278
        ? {
            text: `Moving average (period = ${Math.floor(workbookBinding17885)})`,
          }
        : undefined,
    };
  }
  if (workbookBinding4270 === "polynomial") {
    let workbookBinding11088 = Age(
      workbookBinding4271,
      caFn349(caIn511.polynomialOrder) ? caIn511.polynomialOrder : 2,
      caIn511.intercept,
    );
    return workbookBinding11088
      ? {
          type: workbookBinding4270,
          points: caFn351(
            workbookBinding4276,
            workbookBinding4277,
            64,
            workbookBinding11088.evalY,
          ),
          label: workbookBinding4278
            ? {
                text: [
                  caIn511.displayEquation
                    ? workbookBinding11088.equation
                    : undefined,
                  caIn511.displayRSquared &&
                  workbookBinding11088.rSquared !== undefined
                    ? `R^2 = ${$w(workbookBinding11088.rSquared)}`
                    : undefined,
                ]
                  .filter((item) => typeof item == "string" && item.length > 0)
                  .join("\n"),
                rSquared: workbookBinding11088.rSquared,
              }
            : undefined,
        }
      : null;
  }
  if (workbookBinding4270 === "logarithmic") {
    let workbookBinding11612 = Oge(workbookBinding4271, caIn511.intercept);
    return workbookBinding11612
      ? {
          type: workbookBinding4270,
          points: caFn351(
            workbookBinding4276,
            workbookBinding4277,
            64,
            workbookBinding11612.evalY,
          ),
          label: workbookBinding4278
            ? {
                text: [
                  caIn511.displayEquation
                    ? workbookBinding11612.equation
                    : undefined,
                  caIn511.displayRSquared &&
                  workbookBinding11612.rSquared !== undefined
                    ? `R^2 = ${$w(workbookBinding11612.rSquared)}`
                    : undefined,
                ]
                  .filter((item) => typeof item == "string" && item.length > 0)
                  .join("\n"),
                rSquared: workbookBinding11612.rSquared,
              }
            : undefined,
        }
      : null;
  }
  let workbookBinding4279 = Dge(workbookBinding4271, caIn511.intercept);
  return workbookBinding4279
    ? {
        type: workbookBinding4270,
        points: caFn351(
          workbookBinding4276,
          workbookBinding4277,
          64,
          workbookBinding4279.evalY,
        ),
        label: workbookBinding4278
          ? {
              text: [
                caIn511.displayEquation
                  ? workbookBinding4279.equation
                  : undefined,
                caIn511.displayRSquared &&
                workbookBinding4279.rSquared !== undefined
                  ? `R^2 = ${$w(workbookBinding4279.rSquared)}`
                  : undefined,
              ]
                .filter((item) => typeof item == "string" && item.length > 0)
                .join("\n"),
              rSquared: workbookBinding4279.rSquared,
            }
          : undefined,
      }
    : null;
}
export const workbookBinding720 = esmInit(() => {});
export function Mge(caIn6191: any, caIn6192: any) {
  caIn6192.addTextStyle(caIn6191.dataLabels?.textStyle);
  for (let workbookBinding22561 of caIn6191.dataLabelOverrides ?? [])
    caIn6192.addTextStyle(workbookBinding22561.textStyle);
  for (let workbookBinding20226 of caIn6191.trendlines ?? []) {
    caIn6192.addTextStyle(workbookBinding20226.label?.textStyle);
    for (let workbookBinding22595 of workbookBinding20226.label?.textRuns ?? [])
      caIn6192.addTextStyle(workbookBinding22595.textStyle);
  }
}
export function Nge(caIn8765: any, caIn8766: any) {
  if (!(!caIn8765 || !caIn8766))
    for (let workbookBinding20677 of caIn8765.chartGroups ?? []) {
      caIn8766.addTextStyle(workbookBinding20677.dataLabels?.textStyle);
      for (let workbookBinding23016 of workbookBinding20677.series ?? [])
        Mge(workbookBinding23016, caIn8766);
    }
}
export function Pge(props: any) {
  if (!props) return;
  let workbookBinding10432 = {},
    workbookBinding10433 =
      props.layoutTarget === undefined
        ? undefined
        : workbookBinding385[props.layoutTarget];
  workbookBinding10433 && (workbookBinding10432.target = workbookBinding10433);
  let workbookBinding10434 =
      props.xMode === undefined ? undefined : workbookBinding387[props.xMode],
    workbookBinding10435 =
      props.yMode === undefined ? undefined : workbookBinding387[props.yMode],
    workbookBinding10436 =
      props.wMode === undefined ? undefined : workbookBinding387[props.wMode],
    workbookBinding10437 =
      props.hMode === undefined ? undefined : workbookBinding387[props.hMode];
  return (
    workbookBinding10434 && (workbookBinding10432.xMode = workbookBinding10434),
    workbookBinding10435 && (workbookBinding10432.yMode = workbookBinding10435),
    workbookBinding10436 && (workbookBinding10432.wMode = workbookBinding10436),
    workbookBinding10437 && (workbookBinding10432.hMode = workbookBinding10437),
    typeof props.x == "number" && (workbookBinding10432.x = props.x),
    typeof props.y == "number" && (workbookBinding10432.y = props.y),
    typeof props.w == "number" && (workbookBinding10432.w = props.w),
    typeof props.h == "number" && (workbookBinding10432.h = props.h),
    Object.keys(workbookBinding10432).length > 0
      ? workbookBinding10432
      : undefined
  );
}
export function Fge(event: any) {
  let workbookBinding11945 = {},
    workbookBinding11946 = event.target ?? event.layoutTarget,
    workbookBinding11947 = workbookBinding11946
      ? _ie[workbookBinding11946]
      : undefined;
  return (
    workbookBinding11947 !== undefined &&
      (workbookBinding11945.layoutTarget = workbookBinding11947),
    event.xMode &&
      (workbookBinding11945.xMode = workbookBinding386[event.xMode]),
    event.yMode &&
      (workbookBinding11945.yMode = workbookBinding386[event.yMode]),
    event.wMode &&
      (workbookBinding11945.wMode = workbookBinding386[event.wMode]),
    event.hMode &&
      (workbookBinding11945.hMode = workbookBinding386[event.hMode]),
    typeof event.x == "number" && (workbookBinding11945.x = event.x),
    typeof event.y == "number" && (workbookBinding11945.y = event.y),
    typeof event.w == "number" && (workbookBinding11945.w = event.w),
    typeof event.h == "number" && (workbookBinding11945.h = event.h),
    Object.keys(workbookBinding11945).length > 0
      ? workbookBinding11945
      : undefined
  );
}
