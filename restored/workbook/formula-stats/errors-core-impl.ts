// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: formula error consts + date serial mode + TYPE (legacy Binding1831–1848).
// Stage-3 wave-68 cohesive formula-stats impl kept flat under maxFlatLines.

import { esmInit, toEsm } from "../../runtime/rolldown-runtime";
import workbookJstat from "../../vendor/jstat";
import workbookBessel from "../../vendor/bessel";
import { fsH } from "./boundary-hooks";
import {
  workbookBinding1831,
  workbookBinding1832,
  workbookBinding1833,
  workbookBinding1834,
  workbookBinding1835,
  workbookBinding1836,
  workbookBinding1837,
  workbookBinding1838,
  workbookBinding1839,
  workbookBinding1840,
  workbookBinding1841,
  c2e,
  workbookBinding1842,
  l2e,
  u2e,
  d2e,
  workbookBinding1843,
  workbookBinding1844,
  f2e,
  workbookBinding1845,
  workbookBinding1846,
  workbookBinding1847,
  workbookBinding1848,
  p2e,
  m2e,
  h2e,
  g2e,
  workbookBinding1849,
  workbookBinding1850,
  workbookBinding1851,
  workbookBinding1852,
  workbookBinding1853,
  workbookBinding1854,
  workbookBinding1855,
  workbookBinding1856,
  workbookBinding1857,
  workbookBinding1858,
  workbookBinding1859,
  workbookBinding1860,
  workbookBinding1861,
  workbookBinding1862,
  workbookBinding1863,
  workbookBinding1864,
  workbookBinding1865,
  workbookBinding1866,
  workbookBinding1867,
  workbookBinding1868,
  workbookBinding1869,
  workbookBinding1870,
  _2e,
  v2e,
  y2e,
  workbookBinding1871,
  b2e,
  x2e,
  S2e,
  C2e,
  w2e,
  T2e,
  E2e,
  D2e,
  O2e,
  k2e,
  A2e,
  j2e,
  M2e,
  N2e,
  P2e,
  F2e,
  I2e,
  L2e,
  R2e,
  z2e,
  B2e,
  V2e,
  H2e,
  U2e,
  W2e,
  G2e,
  K2e,
  workbookBinding1872,
  q2e,
  workbookBinding1873,
  J2e,
  Y2e,
  X2e,
  Z2e,
} from "./stats-slots";

/** Toggle Excel date serial return mode (legacy YXe). */
export function YXe(): void {
  workbookBinding1842 = true;
}

/** Toggle Excel Date object return mode (legacy XXe). */
export function XXe(): void {
  workbookBinding1842 = false;
}

export const ensureFormulaStatsCoreInit = esmInit(() => {
  workbookBinding1831 = toEsm(workbookJstat, 1);
  workbookBinding1832 = toEsm(workbookBessel, 1);
  workbookBinding1833 = Error("#NULL!");
  workbookBinding1834 = Error("#DIV/0!");
  workbookBinding1835 = Error("#VALUE!");
  workbookBinding1836 = Error("#REF!");
  workbookBinding1837 = Error("#NAME?");
  workbookBinding1838 = Error("#NUM!");
  workbookBinding1839 = Error("#N/A");
  workbookBinding1840 = Error("#ERROR!");
  workbookBinding1841 = Error("#GETTING_DATA");
  c2e = Object.freeze({
    __proto__: null,
    data: workbookBinding1841,
    div0: workbookBinding1834,
    error: workbookBinding1840,
    na: workbookBinding1839,
    name: workbookBinding1837,
    nil: workbookBinding1833,
    num: workbookBinding1838,
    ref: workbookBinding1836,
    value: workbookBinding1835,
  });
  workbookBinding1842 = false;
  l2e = Object.freeze({
    __proto__: null,
    dateToSerial: fsH.fn835,
    get returnSerial() {
      return workbookBinding1842;
    },
    serialToDate: fsH.ZXe,
    useDate: XXe,
    useSerial: YXe,
  });
  u2e = "=";
  d2e = [">", ">=", "<", "<=", "=", "<>"];
  workbookBinding1843 = "operator";
  workbookBinding1844 = "literal";
  f2e = [workbookBinding1843, workbookBinding1844];
  workbookBinding1845 = workbookBinding1843;
  workbookBinding1846 = workbookBinding1844;
  workbookBinding1847 = fsH.tZe;
  workbookBinding1848 = {};
  workbookBinding1848.TYPE = (fsIn4851) => {
    switch (fsIn4851) {
      case workbookBinding1833:
        return 1;
      case workbookBinding1834:
        return 2;
      case workbookBinding1835:
        return 3;
      case workbookBinding1836:
        return 4;
      case workbookBinding1837:
        return 5;
      case workbookBinding1838:
        return 6;
      case workbookBinding1839:
        return 7;
      case workbookBinding1841:
        return 8;
    }
    return workbookBinding1839;
  };
  p2e = fsH.FZe;
  m2e = fsH.MZe;
  h2e = fsH.PZe;
  g2e = 2.5066282746310002;
});
