// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: D* formula arg wrappers (legacy _8e…O8e / k8e / workbookHelper924–925).
// Stage-3 wave-143.

import {
  u0e,
  l0e,
  m0e,
  p0e,
  g0e,
  v0e,
  _0e,
  y0e,
  d0e,
  f0e,
} from "../formula-d-stats";
import { hlookupSum as h0e } from "./formula-eng-mids-impl";
import { transposeMatrix as A8e } from "../formula-matrix-transpose";
import { isArrayValue } from "../formula-array";

export function _8e(femIn14244: any, femIn14245: any, femIn14246: any) {
  return u0e(
    workbookHelper924(femIn14244),
    femIn14245,
    workbookHelper925(femIn14246),
  );
}
export function y8e(femIn14247: any, femIn14248: any, femIn14249: any) {
  return l0e(
    workbookHelper924(femIn14247),
    femIn14248,
    workbookHelper925(femIn14249),
  );
}
export function b8e(femIn14250: any, femIn14251: any, femIn14252: any) {
  return m0e(
    workbookHelper924(femIn14250),
    femIn14251,
    workbookHelper925(femIn14252),
  );
}
export function x8e(femIn14253: any, femIn14254: any, femIn14255: any) {
  return p0e(
    workbookHelper924(femIn14253),
    femIn14254,
    workbookHelper925(femIn14255),
  );
}
export function S8e(femIn14256: any, femIn14257: any, femIn14258: any) {
  return g0e(
    workbookHelper924(femIn14256),
    femIn14257,
    workbookHelper925(femIn14258),
  );
}
export function C8e(femIn14259: any, femIn14260: any, femIn14261: any) {
  return v0e(
    workbookHelper924(femIn14259),
    femIn14260,
    workbookHelper925(femIn14261),
  );
}
export function w8e(femIn14262: any, femIn14263: any, femIn14264: any) {
  return h0e(
    workbookHelper924(femIn14262),
    femIn14263,
    workbookHelper925(femIn14264),
  );
}
export function T8e(femIn14265: any, femIn14266: any, femIn14267: any) {
  return _0e(
    workbookHelper924(femIn14265),
    femIn14266,
    workbookHelper925(femIn14267),
  );
}
export function E8e(femIn14268: any, femIn14269: any, femIn14270: any) {
  return y0e(
    workbookHelper924(femIn14268),
    femIn14269,
    workbookHelper925(femIn14270),
  );
}
export function D8e(femIn14271: any, femIn14272: any, femIn14273: any) {
  return d0e(
    workbookHelper924(femIn14271),
    femIn14272,
    workbookHelper925(femIn14273),
  );
}
export function O8e(femIn14274: any, femIn14275: any, femIn14276: any) {
  return f0e(
    workbookHelper924(femIn14274),
    femIn14275,
    workbookHelper925(femIn14276),
  );
}
export function workbookHelper924(femIn15757: any) {
  return k8e(femIn15757);
}
export function workbookHelper925(femIn15758: any) {
  return k8e(femIn15758);
}
export function k8e(femIn11441: any) {
  return Array.isArray(femIn11441)
    ? A8e(femIn11441)
    : femIn11441 !== undefined && isArrayValue(femIn11441)
      ? A8e(femIn11441.values)
      : femIn11441;
}
