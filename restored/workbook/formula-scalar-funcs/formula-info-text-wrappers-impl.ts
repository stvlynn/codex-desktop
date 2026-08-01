// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: formula info/logic/text wrappers (legacy e2e…q4e + iot…Fot + Wut…_dt).
// Stage-3 wave-146.

import {
  uQe,
  cQe,
  lQe,
  rQe,
  mZe,
  isErrorOrBlank,
  yZe,
  bZe,
  dZe,
  _Ze,
  isFiniteNumber,
  vZe,
  hZe,
  pZe,
  fZe,
  gZe,
  IZe,
  zZe,
  padStartRepeat,
  UZe,
  VZe,
  XZe,
  JZe,
  MZe,
  HZe,
  $Ze,
  GZe,
  BZe,
  qZe,
  LZe,
  QZe,
  PZe,
  RZe,
  averageArgs,
  NZe,
  WZe,
} from "./scalar-funcs-a-impl";
import {
  geomeanArgs,
  PQe,
  TQe,
  hQe,
  wQe,
  _Qe,
  NQe,
  zQe,
} from "./scalar-funcs-b-impl";
import { Cot } from "../formula-eng-mids/formula-lookup-mids-impl";
import { t2e, r2e } from "../formula-eng-mids/formula-series-wrappers-impl";
import { $0e } from "../formula-eng-mids/formula-and-impl";
import { i2e, o2e } from "../formula-eng-mids/formula-or-xor-impl";
import {
  m2e,
  h2e,
  p2e,
  workbookBinding1848,
} from "../formula-stats/stats-slots";

export function e2e() {
  return false;
}

export function a2e() {
  return true;
}

export function E4e(fsfIn15348: any, fsfIn15349: any) {
  return uQe(fsfIn15348, fsfIn15349);
}

export function O4e(fsfIn15755: any) {
  return geomeanArgs(fsfIn15755);
}

export function k4e(fsfIn15658: any) {
  return cQe(fsfIn15658);
}

export function A4e(fsfIn15659: any) {
  return lQe(fsfIn15659);
}

export function j4e(fsfIn14976: any, fsfIn14977: any, fsfIn14978: any) {
  return PQe(fsfIn14976, fsfIn14977, fsfIn14978);
}

export function M4e(fsfIn15350: any, fsfIn15351: any) {
  return TQe(fsfIn15350, fsfIn15351);
}

export function N4e(fsfIn15352: any, fsfIn15353: any) {
  return rQe(fsfIn15352, fsfIn15353);
}

export function P4e(fsfIn15354: any, fsfIn15355: any) {
  return hQe(fsfIn15354, fsfIn15355);
}

export function F4e(fsfIn15356: any, fsfIn15357: any) {
  return wQe(fsfIn15356, fsfIn15357);
}

export function G4e(fsfIn15358: any, fsfIn15359: any) {
  return _Qe(fsfIn15358, fsfIn15359);
}

export function K4e(fsfIn15360: any, fsfIn15361: any) {
  return NQe(fsfIn15360, fsfIn15361);
}

export function q4e(fsfIn15362: any, fsfIn15363: any) {
  return zQe(fsfIn15362, fsfIn15363);
}

export function iot(fsfIn15690: any) {
  return mZe(fsfIn15690);
}

export function aot(fsfIn15768: any) {
  return isErrorOrBlank(fsfIn15768);
}

export function oot() {
  return yZe();
}

export function sot(fsfIn13024: any) {
  let fsfBind22556 = Cot(fsfIn13024);
  return fsfBind22556 === null ? 1 : bZe(fsfBind22556);
}

export function cot(fsfIn12331: any) {
  throw Error(`ISREF is not implemented. value=${String(fsfIn12331)}`);
}

export function lot(fsfIn15691: any) {
  return dZe(fsfIn15691);
}

export function uot(fsfIn15692: any) {
  return _Ze(fsfIn15692);
}

export function dot(fsfIn15769: any) {
  return isFiniteNumber(fsfIn15769);
}

export function fot(fsfIn15269: any) {
  return Cot(fsfIn15269) == null;
}

export function pot(fsfIn15693: any) {
  return vZe(fsfIn15693);
}

export function mot(fsfIn15694: any) {
  return hZe(fsfIn15694);
}

export function hot(fsfIn15695: any) {
  return pZe(fsfIn15695);
}

export function got(fsfIn15557: any) {
  return workbookBinding1848.TYPE(fsfIn15557);
}

export function _ot(fsfIn15696: any) {
  return fZe(fsfIn15696);
}

export function vot(fsfIn15697: any) {
  return gZe(fsfIn15697);
}

export function yot(fsfIn12332: any) {
  throw Error(`SHEET is not implemented. value=${String(fsfIn12332)}`);
}

export function Oot(fsfIn15069: any, fsfIn15070: any, fsfIn15071: any) {
  return t2e(fsfIn15069, fsfIn15070, fsfIn15071);
}

export function kot() {
  return a2e();
}

export function Aot() {
  return e2e();
}

export function jot(fsfIn14469: any, fsfIn14470: any, ...fsfIn14471: any[]) {
  return $0e(fsfIn14469, fsfIn14470, ...fsfIn14471);
}

export function Mot(fsfIn14472: any, fsfIn14473: any, ...fsfIn14474: any[]) {
  return i2e(fsfIn14472, fsfIn14473, ...fsfIn14474);
}

export function Not(fsfIn15698: any) {
  return r2e(fsfIn15698);
}

export function Fot(fsfIn14475: any, fsfIn14476: any, ...fsfIn14477: any[]) {
  return o2e(fsfIn14475, fsfIn14476, ...fsfIn14477);
}

export function Wut(fsfIn15466: any, fsfIn15467: any) {
  return IZe(fsfIn15466, fsfIn15467);
}

export function Gut(fsfIn15072: any, fsfIn15073: any, fsfIn15074: any) {
  return zZe(fsfIn15072, fsfIn15073, fsfIn15074);
}

export function Kut(fsfIn15527: any, fsfIn15528: any) {
  return padStartRepeat(fsfIn15527, fsfIn15528);
}

export function qut(fsfIn15075: any, fsfIn15076: any, fsfIn15077: any) {
  return UZe(fsfIn15075, fsfIn15076, fsfIn15077);
}

export function Jut(fsfIn15734: any) {
  return VZe(fsfIn15734);
}

export function Xut(fsfIn15468: any, fsfIn15469: any) {
  return XZe(fsfIn15468, fsfIn15469);
}

export function Zut(fsfIn15078: any, fsfIn15079: any, fsfIn15080: any) {
  return JZe(fsfIn15078, fsfIn15079, fsfIn15080);
}

export function Qut(fsfIn15735: any) {
  return MZe(fsfIn15735);
}

export function $ut(fsfIn15736: any) {
  return HZe(fsfIn15736);
}

export function edt(fsfIn15737: any) {
  return _Ze(fsfIn15737);
}

export function tdt(fsfIn15738: any) {
  return GZe(fsfIn15738);
}

export function ndt(fsfIn15470: any, fsfIn15471: any) {
  return BZe(fsfIn15470, fsfIn15471);
}

export function rdt(fsfIn15472: any, fsfIn15473: any) {
  return qZe(fsfIn15472, fsfIn15473);
}

export function idt(fsfIn15474: any, fsfIn15475: any) {
  return LZe(fsfIn15474, fsfIn15475);
}

export function adt(fsfIn15739: any) {
  return QZe(fsfIn15739);
}

export function cdt(fsfIn15740: any) {
  return PZe(fsfIn15740);
}

export function ldt(fsfIn15081: any, fsfIn15082: any, fsfIn15083: any) {
  return RZe(fsfIn15081, fsfIn15082, fsfIn15083);
}

export function udt(fsfIn15774: any) {
  return averageArgs(fsfIn15774);
}

export function ddt(fsfIn15741: any) {
  return NZe(fsfIn15741);
}

export function pdt(fsfIn15742: any) {
  return m2e(fsfIn15742);
}

export function mdt(fsfIn15743: any) {
  return h2e(fsfIn15743);
}

export function hdt(fsfIn15084: any, fsfIn15085: any, fsfIn15086: any) {
  return WZe(fsfIn15084, fsfIn15085, fsfIn15086);
}

export function _dt(fsfIn15087: any, ...fsfIn15088: any[]) {
  return p2e(fsfIn15087, ...fsfIn15088);
}
