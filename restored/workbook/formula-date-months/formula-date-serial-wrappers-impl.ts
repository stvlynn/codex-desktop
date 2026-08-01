// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: formula date serial wrappers (legacy K8e…_5e).
// Stage-3 wave-146.

import {
  l1e,
  d1e,
  f1e,
  p1e,
  m1e,
  g1e,
  _1e,
  v1e,
  b1e,
} from "./formula-time-parts-impl";
import { s1e } from "../formula-eng-mids/formula-eng-mids-impl";
import { c1e, h1e } from "../formula-eng-mids/formula-radix-impl";
import {
  i1e,
  o1e,
  a1e,
  days360,
  dateDiffDays,
} from "../formula-scalar-funcs/scalar-funcs-c-impl";
import { y1e, u1e } from "../formula-weeknum/formula-weeknum-impl";

const EXCEL_EPOCH_UTC = Date.UTC(1899, 11, 30);
const MS_PER_DAY = 86400000;

export function K8e(props: any) {
  return props instanceof Date
    ? (props.getTime() - EXCEL_EPOCH_UTC) / MS_PER_DAY
    : props;
}

export function q8e(fdmIn15020: any, fdmIn15021: any, fdmIn15022: any) {
  return i1e(fdmIn15020, fdmIn15021, fdmIn15022);
}

export function J8e(fdmIn15023: any, fdmIn15024: any, fdmIn15025: any) {
  return h1e(fdmIn15023, fdmIn15024, fdmIn15025);
}

export function Y8e(fdmIn15665: any) {
  return o1e(fdmIn15665);
}

export function X8e(fdmIn15666: any) {
  return f1e(fdmIn15666);
}

export function Z8e(fdmIn15667: any) {
  return b1e(fdmIn15667);
}

export function Q8e(fdmIn15376: any, fdmIn15377: any) {
  return v1e(fdmIn15376, fdmIn15377);
}

export function $8e(fdmIn15668: any) {
  return l1e(fdmIn15668);
}

export function e5e(fdmIn15669: any) {
  return d1e(fdmIn15669);
}

export function t5e(fdmIn15670: any) {
  return m1e(fdmIn15670);
}

export function n5e() {
  return p1e();
}

export function r5e(fdmIn15518: any) {
  return K8e(a1e(fdmIn15518));
}

export function i5e(fdmIn15671: any) {
  return g1e(fdmIn15671);
}

export function a5e(fdmIn15145: any, fdmIn15146: any, fdmIn15147: any) {
  return days360(fdmIn15145, fdmIn15146, fdmIn15147);
}

export function o5e() {
  return _1e();
}

export function s5e(fdmIn15378: any, fdmIn15379: any) {
  return s1e(fdmIn15378, fdmIn15379);
}

export function c5e(fdmIn15380: any, fdmIn15381: any) {
  return c1e(fdmIn15380, fdmIn15381);
}

export function u5e(fdmIn15382: any, fdmIn15383: any) {
  return y1e(fdmIn15382, fdmIn15383);
}

export function h5e(fdmIn15519: any, fdmIn15520: any) {
  return dateDiffDays(fdmIn15519, fdmIn15520);
}

export function _5e(fdmIn15672: any) {
  return u1e(fdmIn15672);
}
