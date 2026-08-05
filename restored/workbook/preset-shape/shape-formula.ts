// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-34: OOXML preset-shape formula tokenizer + ops (Pue/h292–294/_S).

import { esmInit } from "../../runtime/rolldown-runtime";
import type { FormulaEnv } from "./types";

/** OOXML shape rotation unit: 1 degree = 60000 EMUs (legacy Binding639). */
export const SHAPE_ROTATION_EMU_PER_DEGREE = 6e4;

/** Legacy Binding640 — named angle constants in rotation EMUs. */
export let shapeAngleConstants: Record<string, number> = {};

type FormulaOp = (...args: number[]) => number;
/** Legacy Binding641 — formula opcode table. */
export let shapeFormulaOps: Record<string, FormulaOp> = {};

/** Legacy Pue — degrees → radians. */
export function degreesToRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

/** Legacy h292 — rotation EMU → radians. */
export function rotationEmuToRadians(rotationEmu: number): number {
  return degreesToRadians(rotationEmu / SHAPE_ROTATION_EMU_PER_DEGREE);
}

/** Legacy Fue — resolve a bare token against env + angle constants. */
export function resolveFormulaToken(token: string, env: FormulaEnv): number {
  return token in env
    ? env[token]!
    : token in shapeAngleConstants
      ? shapeAngleConstants[token]!
      : /^-?\d+$/.test(token)
        ? parseInt(token, 10)
        : NaN;
}

/** Legacy h293 — evaluate `op arg…` formula call. */
export function evalShapeFormulaCall(formula: string, env: FormulaEnv): number {
  const tokens = formula.trim().split(/\s+/);
  const op = tokens[0];
  if (!op) return NaN;
  if (shapeFormulaOps[op]) {
    const args = tokens
      .slice(1)
      .map((token) => resolveFormulaToken(token, env));
    return args.some((value) => typeof value != "number" || Number.isNaN(value))
      ? NaN
      : shapeFormulaOps[op]!(...args);
  }
  if (tokens.length === 1 && tokens[0]) {
    const value = resolveFormulaToken(tokens[0], env);
    return typeof value == "number" && !Number.isNaN(value) ? value : NaN;
  }
  throw Error(`Unsupported formula: ${formula}`);
}

/** Legacy h294 — evaluate formula string or env/constant lookup. */
export function evalShapeFormula(
  formula: string | undefined | null,
  env: FormulaEnv,
): number {
  if (!formula) return NaN;
  if (
    /^(val|\+-|\*\/|\+\/|sum|prod|min|max|abs|mid|mod|sqrt|sin|cos|tan|at2|cat2|sat2|pin|\?:)(?:\s|$)/.test(
      formula,
    )
  ) {
    return evalShapeFormulaCall(formula, env);
  }
  if (formula in env) {
    const value = env[formula];
    return typeof value == "number" && !Number.isNaN(value) ? value : NaN;
  }
  if (formula in shapeAngleConstants) {
    const value = shapeAngleConstants[formula];
    return typeof value == "number" && !Number.isNaN(value) ? value : NaN;
  }
  return /^-?\d+$/.test(formula) ? parseInt(formula, 10) : NaN;
}

/** Legacy _S / Binding639–641 init. */
export const ensureShapeFormulaOpsInit = esmInit(() => {
  shapeAngleConstants = {
    cd4: 90 * SHAPE_ROTATION_EMU_PER_DEGREE,
    cd2: 180 * SHAPE_ROTATION_EMU_PER_DEGREE,
    "3cd4": 270 * SHAPE_ROTATION_EMU_PER_DEGREE,
    "5cd4": 450 * SHAPE_ROTATION_EMU_PER_DEGREE,
    "7cd4": 630 * SHAPE_ROTATION_EMU_PER_DEGREE,
    "3cd2": 540 * SHAPE_ROTATION_EMU_PER_DEGREE,
    cd: 360 * SHAPE_ROTATION_EMU_PER_DEGREE,
  };
  shapeFormulaOps = {
    val: (value) => value,
    "+-": (base, addend, subtrahend) => base + addend - subtrahend,
    "*/": (multiplicand, multiplier, divisor) =>
      (multiplicand * multiplier) / (divisor || 1),
    sum: (...values) => values.reduce((acc, cur) => acc + cur, 0),
    prod: (...values) => values.reduce((acc, cur) => acc * cur, 1),
    min: (...values) => Math.min(...values),
    max: (...values) => Math.max(...values),
    abs: (value) => Math.abs(value),
    mid: (left, right) => (left + right) / 2,
    mod: (...values) => (values.length === 0 ? NaN : Math.hypot(...values)),
    sqrt: (value) => Math.sqrt(Math.max(value, 0)),
    sin: (magnitudeOrAngle, angleEmu) =>
      angleEmu === undefined
        ? Math.sin(rotationEmuToRadians(magnitudeOrAngle))
        : magnitudeOrAngle * Math.sin(rotationEmuToRadians(angleEmu)),
    cos: (magnitudeOrAngle, angleEmu) =>
      angleEmu === undefined
        ? Math.cos(rotationEmuToRadians(magnitudeOrAngle))
        : magnitudeOrAngle * Math.cos(rotationEmuToRadians(angleEmu)),
    tan: (magnitudeOrAngle, angleEmu) =>
      angleEmu === undefined
        ? Math.tan(rotationEmuToRadians(magnitudeOrAngle))
        : magnitudeOrAngle * Math.tan(rotationEmuToRadians(angleEmu)),
    at2: (xCoord, yCoord) =>
      ((Math.atan2(yCoord, xCoord) * 180) / Math.PI) *
      SHAPE_ROTATION_EMU_PER_DEGREE,
    cat2: (radius, xCoord, yCoord) =>
      radius * Math.cos(Math.atan2(yCoord, xCoord)),
    sat2: (radius, xCoord, yCoord) =>
      radius * Math.sin(Math.atan2(yCoord, xCoord)),
    pin: (...pinArgs) => {
      if (pinArgs.length !== 3) throw Error("pin expects 3 arguments");
      {
        const [val, low, high] = pinArgs;
        if (
          typeof val == "number" &&
          typeof low == "number" &&
          typeof high == "number" &&
          !Number.isNaN(low) &&
          !Number.isNaN(val) &&
          !Number.isNaN(high)
        ) {
          return Math.min(
            Math.max(low, Math.min(val, high)),
            Math.max(val, high),
          );
        }
      }
      {
        const [low, val, high] = pinArgs;
        if (
          typeof low == "number" &&
          typeof val == "number" &&
          typeof high == "number"
        ) {
          return Math.min(
            Math.max(low, Math.min(val, high)),
            Math.max(val, high),
          );
        }
      }
      return NaN;
    },
    "?:": (condition, whenTrue, whenFalse) =>
      condition > 0 ? whenTrue : whenFalse,
    "+/": (...values) => {
      if (values.length === 0) return NaN;
      const divisor = (values.length >= 2 ? values[values.length - 1] : 2) || 2;
      return (
        (values.length >= 2 ? values.slice(0, -1) : values).reduce(
          (acc, cur) => acc + cur,
          0,
        ) / divisor
      );
    },
  };
});
