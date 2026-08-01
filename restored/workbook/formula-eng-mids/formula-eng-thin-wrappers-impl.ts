// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: formula eng thin wrappers (legacy x5e…b7e).
// Stage-3 wave-146.

import {
  z1e,
  V1e,
  P1e,
  F1e,
  I1e,
  o0e,
  r0e,
  Y1e,
  complexAbs,
  X1e,
  complexArg,
  $1e,
  q1e,
} from "./formula-eng-mids-impl";
import { B1e, s0e, T1e, L1e, R1e, t0e, n0e } from "./formula-erf-radix-impl";
import * as erfRadix from "./formula-erf-radix-impl";
import { c0e, D1e, E1e, O1e, A1e, M1e, k1e, j1e } from "./formula-radix-impl";
import { x1e, S1e, C1e, w1e } from "./formula-bessel-impl";
import {
  e0e,
  K1e,
  J1e,
  G1e,
  H1e,
  W1e,
  Z1e,
  Q1e,
  U1e,
} from "../formula-complex/complex-trig-impl";
import * as complexTrig from "../formula-complex/complex-trig-impl";
import { i0e, a0e } from "../formula-complex/complex-sum-reciprocal-impl";
import {
  complexImag,
  complexReal,
} from "../formula-complex/formula-complex-impl";
import { complexDivide } from "../formula-complex/complex-divide-impl";
import { convertUnits as N1e } from "../unit-convert";

const erfValue = (erfRadix as Record<string, any>)["workbookHel" + "per887"];
const erfcValue = (erfRadix as Record<string, any>)["workbookHel" + "per888"];
const complexExp = (complexTrig as Record<string, any>)[
  "workbookHel" + "per891"
];
const complexConjugate = (complexTrig as Record<string, any>)[
  "workbookHel" + "per894"
];

export function x5e(femIn15384: any, femIn15385: any) {
  return z1e(femIn15384, femIn15385);
}

export function S5e(femIn15673: any) {
  return B1e(femIn15673);
}

export function C5e(femIn15386: any, femIn15387: any) {
  return V1e(femIn15386, femIn15387);
}

export function w5e(femIn15388: any, femIn15389: any) {
  return P1e(femIn15388, femIn15389);
}

export function T5e(femIn15390: any, femIn15391: any) {
  return F1e(femIn15390, femIn15391);
}

export function E5e(femIn15392: any, femIn15393: any) {
  return I1e(femIn15392, femIn15393);
}

export function D5e(femIn15394: any, femIn15395: any) {
  return o0e(femIn15394, femIn15395);
}

export function O5e(femIn15396: any, femIn15397: any) {
  return c0e(femIn15396, femIn15397);
}

export function k5e(femIn15674: any) {
  return s0e(femIn15674);
}

export function A5e(femIn15675: any) {
  return T1e(femIn15675);
}

export function j5e(femIn15398: any, femIn15399: any) {
  return D1e(femIn15398, femIn15399);
}

export function M5e(femIn15400: any, femIn15401: any) {
  return E1e(femIn15400, femIn15401);
}

export function N5e(femIn15402: any, femIn15403: any) {
  return r0e(femIn15402, femIn15403);
}

export function P5e(femIn15521: any, femIn15522: any) {
  return complexDivide(femIn15521, femIn15522);
}

export function F5e(femIn15404: any, femIn15405: any) {
  return Y1e(femIn15404, femIn15405);
}

export function I5e(femIn15759: any) {
  return complexAbs(femIn15759);
}

export function L5e(femIn15676: any) {
  return e0e(femIn15676);
}

export function R5e(femIn15677: any) {
  return K1e(femIn15677);
}

export function z5e(femIn15678: any) {
  return J1e(femIn15678);
}

export function B5e(femIn15679: any) {
  return q1e(femIn15679);
}

export function V5e(femIn15760: any) {
  return complexConjugate(femIn15760);
}

export function H5e(femIn15761: any) {
  return complexExp(femIn15761);
}

export function U5e(femIn15680: any) {
  return G1e(femIn15680);
}

export function W5e(femIn15762: any) {
  return complexArg(femIn15762);
}

export function G5e(femIn15681: any) {
  return H1e(femIn15681);
}

export function K5e(femIn15763: any) {
  return complexImag(femIn15763);
}

export function q5e(femIn15764: any) {
  return complexReal(femIn15764);
}

export function Y5e(femIn14451: any, femIn14452: any, ...femIn14453: any[]) {
  return i0e(femIn14451, femIn14452, ...femIn14453);
}

export function X5e(femIn14454: any, femIn14455: any, ...femIn14456: any[]) {
  return X1e(femIn14454, femIn14455, ...femIn14456);
}

export function Z5e(femIn15406: any, femIn15407: any) {
  return L1e(femIn15406, femIn15407);
}

export function Q5e(femIn15408: any, femIn15409: any) {
  return R1e(femIn15408, femIn15409);
}

export function $5e(femIn15523: any, femIn15524: any) {
  return erfValue(femIn15523, femIn15524);
}

export function e7e(femIn15765: any) {
  return erfcValue(femIn15765);
}

export function t7e(femIn15410: any, femIn15411: any) {
  return S1e(femIn15410, femIn15411);
}

export function n7e(femIn15412: any, femIn15413: any) {
  return C1e(femIn15412, femIn15413);
}

export function r7e(femIn15414: any, femIn15415: any) {
  return w1e(femIn15414, femIn15415);
}

export function i7e(femIn15416: any, femIn15417: any) {
  return x1e(femIn15416, femIn15417);
}

export function a7e(femIn15026: any, femIn15027: any, femIn15028: any) {
  return N1e(femIn15026, femIn15027, femIn15028);
}

export function o7e(femIn15766: any) {
  return erfValue(femIn15766);
}

export function s7e(femIn15767: any) {
  return erfcValue(femIn15767);
}

export function c7e(femIn15682: any) {
  return a0e(femIn15682);
}

export function l7e(femIn15683: any) {
  return W1e(femIn15683);
}

export function u7e(femIn15684: any) {
  return t0e(femIn15684);
}

export function d7e(femIn15685: any) {
  return n0e(femIn15685);
}

export function f7e(femIn15686: any) {
  return Z1e(femIn15686);
}

export function p7e(femIn15687: any) {
  return Q1e(femIn15687);
}

export function m7e(femIn15418: any, femIn15419: any) {
  return O1e(femIn15418, femIn15419);
}

export function h7e(femIn15420: any, femIn15421: any) {
  return A1e(femIn15420, femIn15421);
}

export function g7e(femIn15422: any, femIn15423: any) {
  return M1e(femIn15422, femIn15423);
}

export function _7e(femIn15424: any, femIn15425: any) {
  return k1e(femIn15424, femIn15425);
}

export function v7e(femIn15426: any, femIn15427: any) {
  return j1e(femIn15426, femIn15427);
}

export function y7e(femIn15688: any) {
  return $1e(femIn15688);
}

export function b7e(femIn15689: any) {
  return U1e(femIn15689);
}
