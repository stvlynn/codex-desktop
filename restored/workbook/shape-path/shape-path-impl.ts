// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: preset-shape path draw (legacy path-angle helpers).
// Stage-3 wave-92; kept flat under maxFlatLines.

import { evalShapeFormula } from "../preset-shape";

/** Full circle radians (legacy Binding1256). */
export const TAU = Math.PI * 2;
/** Radians → degrees (legacy Binding1257). */
export const RAD_TO_DEG = 180 / Math.PI;
/** Degrees → radians (legacy Binding1258). */
export const DEG_TO_RAD = Math.PI / 180;
/** Path tangent epsilon (legacy `_B`). */
export const PATH_EPS = 1e-6;

export function normalizePathAngle(spIn11090: any) {
  if (!Number.isFinite(spIn11090)) return spIn11090;
  let spBind21594 = spIn11090 % TAU;
  return (
    spBind21594 < 0 && (spBind21594 += TAU),
    spBind21594
  );
}
export function adjustEllipseAngle(spIn4735: any, spIn4736: any, spIn4737: any, ) {
  if (
    !Number.isFinite(spIn4735) ||
    spIn4736 === 0 ||
    spIn4737 === 0
  )
    return normalizePathAngle(spIn4735);
  let spBind14075 = (spIn4735 * RAD_TO_DEG) % 360,
    spBind14076 =
      spBind14075 < 0
        ? spBind14075 + 360
        : spBind14075;
  if (
    spBind14076 === 0 ||
    spBind14076 === 90 ||
    spBind14076 === 180 ||
    spBind14076 === 270
  )
    return spBind14076 * DEG_TO_RAD;
  let spBind14077 = spBind14076 * DEG_TO_RAD,
    spBind14078 = spIn4737 * Math.cos(spBind14077),
    spBind14079 = spIn4736 * Math.sin(spBind14077);
  if (
    Math.abs(spBind14078) < 1e-12 &&
    Math.abs(spBind14079) < 1e-12
  )
    return spBind14077;
  let spBind14080 = Math.atan2(
    spBind14079,
    spBind14078,
  );
  return (
    spBind14080 < 0 && (spBind14080 += TAU),
    spBind14080
  );
}
export function drawShapePath(spIn222: any, spIn223: any, spIn224: any, spIn225: any = true, spIn226: any = true, spIn227: any = false, spIn228: any = true, ) {
  spIn228 && spIn222.beginPath();
  let spBind3236 = 0,
    spBind3237 = 0,
    spBind3238 = 0,
    spBind3239 = 0,
    spBind3240 = spIn227 ? {} : undefined,
    spBind3241 = /^-?\d+(?:\.\d+)?$/,
    spBind3242 =
      spIn223.w && spBind3241.test(spIn223.w)
        ? Number(spIn223.w)
        : undefined,
    spBind3243 =
      spIn223.h && spBind3241.test(spIn223.h)
        ? Number(spIn223.h)
        : undefined,
    spBind3244 = spBind3242
      ? spIn224.w / spBind3242
      : undefined,
    spBind3245 = spBind3243
      ? spIn224.h / spBind3243
      : undefined,
    spBind3246 =
      typeof spBind3244 == "number" &&
      Number.isFinite(spBind3244),
    spBind3247 =
      typeof spBind3245 == "number" &&
      Number.isFinite(spBind3245),
    spBind3248 = (spIn7751, spIn7752) => {
      if (!spIn7751) return NaN;
      if (
        spBind3241.test(spIn7751) &&
        ((spIn7752 === "x" && spBind3246) ||
          (spIn7752 === "y" && spBind3247))
      ) {
        let spBind22210 =
          spIn7752 === "x"
            ? (spBind3244 ?? 1)
            : (spBind3245 ?? 1);
        return Number(spIn7751) * spBind22210;
      }
      return evalShapeFormula(spIn7751, spIn224);
    },
    spBind3249 = (spIn7594, spIn7595) => {
      if (!spIn7594)
        return evalShapeFormula(spIn7594, spIn224);
      if (
        spBind3241.test(spIn7594) &&
        ((spIn7595 === "x" && spBind3246) ||
          (spIn7595 === "y" && spBind3247))
      ) {
        let spBind22211 =
          spIn7595 === "x"
            ? (spBind3244 ?? 1)
            : (spBind3245 ?? 1);
        return Number(spIn7594) * spBind22211;
      }
      return evalShapeFormula(spIn7594, spIn224);
    },
    spBind3250 = (
      spIn6537,
      spIn6538,
      spIn6539,
      spIn6540,
    ) => {
      !spBind3240 ||
        spBind3240.start ||
        !Number.isFinite(spIn6537) ||
        !Number.isFinite(spIn6538) ||
        !Number.isFinite(spIn6539) ||
        !Number.isFinite(spIn6540) ||
        Math.hypot(spIn6539, spIn6540) < PATH_EPS ||
        (spBind3240.start = {
          x: spIn6537,
          y: spIn6538,
          angle: Math.atan2(spIn6540, spIn6539),
        });
    },
    spBind3251 = (
      spIn6733,
      spIn6734,
      spIn6735,
      spIn6736,
    ) => {
      spBind3240 &&
        (!Number.isFinite(spIn6733) ||
          !Number.isFinite(spIn6734) ||
          !Number.isFinite(spIn6735) ||
          !Number.isFinite(spIn6736) ||
          Math.hypot(spIn6735, spIn6736) < PATH_EPS ||
          (spBind3240.end = {
            x: spIn6733,
            y: spIn6734,
            angle: Math.atan2(spIn6736, spIn6735),
          }));
    },
    spBind3252 = (spIn11681, spIn11682) => {
      spBind3236 = spBind3248(spIn11681, "x");
      spBind3237 = spBind3248(spIn11682, "y");
      spBind3238 = spBind3236;
      spBind3239 = spBind3237;
      spIn222.moveTo(spBind3236, spBind3237);
    };
  for (let spBind4314 of spIn223.commands)
    switch (spBind4314.cmd) {
      case "moveTo":
        spBind3252(spBind4314.x, spBind4314.y);
        break;
      case "lineTo": {
        let spBind17541 = spBind3248(
            spBind4314.x,
            "x",
          ),
          spBind17542 = spBind3248(
            spBind4314.y,
            "y",
          ),
          spBind17543 = spBind3236,
          spBind17544 = spBind3237;
        spBind3236 = spBind17541;
        spBind3237 = spBind17542;
        let spBind17545 = spBind17541 - spBind17543,
          spBind17546 = spBind17542 - spBind17544;
        spBind3250(
          spBind17543,
          spBind17544,
          spBind17545,
          spBind17546,
        );
        spBind3251(
          spBind17541,
          spBind17542,
          spBind17545,
          spBind17546,
        );
        spIn222.lineTo(spBind17541, spBind17542);
        break;
      }
      case "quadBezTo": {
        let spBind15737 = spBind3248(
            spBind4314.x1,
            "x",
          ),
          spBind15738 = spBind3248(
            spBind4314.y1,
            "y",
          ),
          spBind15739 = spBind3248(
            spBind4314.x,
            "x",
          ),
          spBind15740 = spBind3248(
            spBind4314.y,
            "y",
          ),
          spBind15741 = spBind3236,
          spBind15742 = spBind3237;
        spBind3236 = spBind15739;
        spBind3237 = spBind15740;
        spBind3250(
          spBind15741,
          spBind15742,
          spBind15737 - spBind15741,
          spBind15738 - spBind15742,
        );
        spBind3251(
          spBind15739,
          spBind15740,
          spBind15739 - spBind15737,
          spBind15740 - spBind15738,
        );
        spIn222.quadraticCurveTo(
          spBind15737,
          spBind15738,
          spBind15739,
          spBind15740,
        );
        break;
      }
      case "cubicBezTo": {
        let spBind14508 = spBind3248(
            spBind4314.x1,
            "x",
          ),
          spBind14509 = spBind3248(
            spBind4314.y1,
            "y",
          ),
          spBind14510 = spBind3248(
            spBind4314.x2,
            "x",
          ),
          spBind14511 = spBind3248(
            spBind4314.y2,
            "y",
          ),
          spBind14512 = spBind3248(
            spBind4314.x,
            "x",
          ),
          spBind14513 = spBind3248(
            spBind4314.y,
            "y",
          ),
          spBind14514 = spBind3236,
          spBind14515 = spBind3237;
        spBind3236 = spBind14512;
        spBind3237 = spBind14513;
        spBind3250(
          spBind14514,
          spBind14515,
          spBind14508 - spBind14514,
          spBind14509 - spBind14515,
        );
        spBind3251(
          spBind14512,
          spBind14513,
          spBind14512 - spBind14510,
          spBind14513 - spBind14511,
        );
        spIn222.bezierCurveTo(
          spBind14508,
          spBind14509,
          spBind14510,
          spBind14511,
          spBind14512,
          spBind14513,
        );
        break;
      }
      case "arcTo": {
        let spBind7904 = spBind3249(
            spBind4314.wR,
            "x",
          ),
          spBind7905 = spBind3249(
            spBind4314.hR,
            "y",
          ),
          spBind7906 = Math.abs(spBind7904),
          spBind7907 = Math.abs(spBind7905),
          spBind7908 = spHelper1141(
            evalShapeFormula(spBind4314.stAng, spIn224),
          ),
          spBind7909 = spHelper1141(
            evalShapeFormula(spBind4314.swAng, spIn224),
          );
        spBind7909 > TAU &&
          (spBind7909 = TAU);
        spBind7909 < -TAU &&
          (spBind7909 = -TAU);
        let spBind7910 = spBind7908 + spBind7909,
          spBind7911 = adjustEllipseAngle(
            spBind7908,
            spBind7906,
            spBind7907,
          ),
          spBind7912 = adjustEllipseAngle(
            spBind7910,
            spBind7906,
            spBind7907,
          ),
          spBind7913 = spBind7909 < 0,
          spBind7914 = spBind7912 - spBind7911;
        spBind7909 < 0 && spBind7914 >= 0
          ? ((spBind7912 -= TAU),
            (spBind7914 = spBind7912 - spBind7911))
          : spBind7909 > 0 &&
            spBind7914 <= 0 &&
            ((spBind7912 += TAU),
            (spBind7914 = spBind7912 - spBind7911));
        Math.abs(spBind7909) > 1e-9 &&
          Math.abs(spBind7914) < 1e-9 &&
          ((spBind7912 =
            spBind7911 +
            (spBind7909 < 0
              ? -TAU
              : TAU)),
          (spBind7914 = spBind7912 - spBind7911));
        let spBind7915 =
            spBind3236 -
            spBind7904 * Math.cos(spBind7911),
          spBind7916 =
            spBind3237 -
            spBind7905 * Math.sin(spBind7911),
          spBind7917 = spBind7913 ? -1 : 1,
          spBind7918 = normalizePathAngle(spBind7911),
          spBind7919 = normalizePathAngle(spBind7912);
        spIn222.ellipse(
          spBind7915,
          spBind7916,
          spBind7906,
          spBind7907,
          0,
          spBind7918,
          spBind7919,
          spBind7913,
        );
        spBind3250(
          spBind3236,
          spBind3237,
          spBind7917 *
            -spBind7904 *
            Math.sin(spBind7911),
          spBind7917 *
            spBind7905 *
            Math.cos(spBind7911),
        );
        spBind3236 =
          spBind7915 +
          spBind7904 * Math.cos(spBind7912);
        spBind3237 =
          spBind7916 +
          spBind7905 * Math.sin(spBind7912);
        spBind3251(
          spBind3236,
          spBind3237,
          spBind7917 *
            -spBind7904 *
            Math.sin(spBind7912),
          spBind7917 *
            spBind7905 *
            Math.cos(spBind7912),
        );
        break;
      }
      case "close": {
        spIn222.closePath();
        let spBind18897 = spBind3236,
          spBind18898 = spBind3237;
        spBind3236 = spBind3238;
        spBind3237 = spBind3239;
        let spBind18899 = spBind3236 - spBind18897,
          spBind18900 = spBind3237 - spBind18898;
        spBind3250(
          spBind18897,
          spBind18898,
          spBind18899,
          spBind18900,
        );
        spBind3251(
          spBind3236,
          spBind3237,
          spBind18899,
          spBind18900,
        );
        break;
      }
    }
  function spHelper1141(spIn13941: any) {
    return ((spIn13941 / 6e4) * Math.PI) / 180;
  }
  let spBind3253 = spIn222.globalCompositeOperation;
  return (
    spIn223.fill === "darken" &&
      (spIn222.globalCompositeOperation = "darken"),
    spIn223.fill &&
      spIn223.fill !== "none" &&
      spIn225 &&
      spIn222.fill(),
    (spIn223.stroke ?? true) &&
      spIn226 &&
      spIn222.stroke(),
    (spIn222.globalCompositeOperation = spBind3253),
    spBind3240
  );
}

