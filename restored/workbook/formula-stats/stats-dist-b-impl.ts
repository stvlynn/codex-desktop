// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel dist wrappers GAMMA…POISSON (legacy Binding1856–1863).
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

export const ensureFormulaStatsDistBInit = esmInit(() => {
  workbookBinding1856 = {};
  workbookBinding1856.DIST = (
    fsIn4453,
    fsIn4454,
    fsIn4455,
    fsIn4456,
    fsIn4457,
  ) => {
    if (
      ((fsIn4453 = fsH.fn849(fsIn4453)),
      (fsIn4454 = fsH.fn849(fsIn4454)),
      (fsIn4455 = fsH.fn849(fsIn4455)),
      (fsIn4456 = fsH.fn849(fsIn4456)),
      fsH.fn846(fsIn4453, fsIn4454, fsIn4455, fsIn4456))
    )
      return workbookBinding1835;
    function fsTmp1213(fsIn11711, fsIn11712, fsIn11713, fsIn11714) {
      return (
        (fsH.fn870(fsIn11713, fsIn11711) *
          fsH.fn870(fsIn11714 - fsIn11713, fsIn11712 - fsIn11711)) /
        fsH.fn870(fsIn11714, fsIn11712)
      );
    }
    function fsTmp1214(fsIn10276, fsIn10277, fsIn10278, fsIn10279) {
      let workbookBinding20746 = 0;
      for (
        let workbookBinding22936 = 0;
        workbookBinding22936 <= fsIn10276;
        workbookBinding22936++
      )
        workbookBinding20746 += fsTmp1213(
          workbookBinding22936,
          fsIn10277,
          fsIn10278,
          fsIn10279,
        );
      return workbookBinding20746;
    }
    return fsIn4457
      ? fsTmp1214(fsIn4453, fsIn4454, fsIn4455, fsIn4456)
      : fsTmp1213(fsIn4453, fsIn4454, fsIn4455, fsIn4456);
  };
  workbookBinding1857 = {};
  workbookBinding1857.DIST = (fsIn7521, fsIn7522, fsIn7523, fsIn7524) => (
    (fsIn7521 = fsH.fn849(fsIn7521)),
    (fsIn7522 = fsH.fn849(fsIn7522)),
    (fsIn7523 = fsH.fn849(fsIn7523)),
    fsH.fn846(fsIn7521, fsIn7522, fsIn7523)
      ? workbookBinding1835
      : fsIn7524
        ? workbookBinding1831.default.lognormal.cdf(
            fsIn7521,
            fsIn7522,
            fsIn7523,
          )
        : workbookBinding1831.default.lognormal.pdf(
            fsIn7521,
            fsIn7522,
            fsIn7523,
          )
  );
  workbookBinding1857.INV = (fsIn10108, fsIn10109, fsIn10110) => (
    (fsIn10108 = fsH.fn849(fsIn10108)),
    (fsIn10109 = fsH.fn849(fsIn10109)),
    (fsIn10110 = fsH.fn849(fsIn10110)),
    fsH.fn846(fsIn10108, fsIn10109, fsIn10110)
      ? workbookBinding1835
      : workbookBinding1831.default.lognormal.inv(
          fsIn10108,
          fsIn10109,
          fsIn10110,
        )
  );
  workbookBinding1858 = {};
  workbookBinding1858.MULT = function () {
    let workbookBinding14025 = fsH.fn850(fsH.fn841(arguments));
    if (workbookBinding14025 instanceof Error) return workbookBinding14025;
    let workbookBinding14026 = workbookBinding14025.length,
      workbookBinding14027 = {},
      workbookBinding14028 = [],
      workbookBinding14029 = 0,
      workbookBinding14030;
    for (
      let workbookBinding19179 = 0;
      workbookBinding19179 < workbookBinding14026;
      workbookBinding19179++
    ) {
      workbookBinding14030 = workbookBinding14025[workbookBinding19179];
      workbookBinding14027[workbookBinding14030] = workbookBinding14027[
        workbookBinding14030
      ]
        ? workbookBinding14027[workbookBinding14030] + 1
        : 1;
      workbookBinding14027[workbookBinding14030] > workbookBinding14029 &&
        ((workbookBinding14029 = workbookBinding14027[workbookBinding14030]),
        (workbookBinding14028 = []));
      workbookBinding14027[workbookBinding14030] === workbookBinding14029 &&
        (workbookBinding14028[workbookBinding14028.length] =
          workbookBinding14030);
    }
    return workbookBinding14028;
  };
  workbookBinding1858.SNGL = function () {
    let workbookBinding20830 = fsH.fn850(fsH.fn841(arguments));
    return workbookBinding20830 instanceof Error
      ? workbookBinding20830
      : workbookBinding1858
          .MULT(workbookBinding20830)
          .sort((fsIn16557, fsIn16558) => fsIn16557 - fsIn16558)[0];
  };
  workbookBinding1859 = {};
  workbookBinding1859.DIST = (fsIn7677, fsIn7678, fsIn7679, fsIn7680) => (
    (fsIn7677 = fsH.fn849(fsIn7677)),
    (fsIn7678 = fsH.fn849(fsIn7678)),
    (fsIn7679 = fsH.fn849(fsIn7679)),
    fsH.fn846(fsIn7677, fsIn7678, fsIn7679)
      ? workbookBinding1835
      : fsIn7680
        ? workbookBinding1831.default.negbin.cdf(fsIn7677, fsIn7678, fsIn7679)
        : workbookBinding1831.default.negbin.pdf(fsIn7677, fsIn7678, fsIn7679)
  );
  workbookBinding1860 = {};
  workbookBinding1860.DIST = (fsIn6765, fsIn6766, fsIn6767, fsIn6768) => (
    (fsIn6765 = fsH.fn849(fsIn6765)),
    (fsIn6766 = fsH.fn849(fsIn6766)),
    (fsIn6767 = fsH.fn849(fsIn6767)),
    fsH.fn846(fsIn6765, fsIn6766, fsIn6767)
      ? workbookBinding1835
      : fsIn6767 <= 0
        ? workbookBinding1838
        : fsIn6768
          ? workbookBinding1831.default.normal.cdf(fsIn6765, fsIn6766, fsIn6767)
          : workbookBinding1831.default.normal.pdf(fsIn6765, fsIn6766, fsIn6767)
  );
  workbookBinding1860.INV = (fsIn10195, fsIn10196, fsIn10197) => (
    (fsIn10195 = fsH.fn849(fsIn10195)),
    (fsIn10196 = fsH.fn849(fsIn10196)),
    (fsIn10197 = fsH.fn849(fsIn10197)),
    fsH.fn846(fsIn10195, fsIn10196, fsIn10197)
      ? workbookBinding1835
      : workbookBinding1831.default.normal.inv(fsIn10195, fsIn10196, fsIn10197)
  );
  workbookBinding1860.S = {};
  workbookBinding1860.S.DIST = (fsIn8788, fsIn8789) => (
    (fsIn8788 = fsH.fn849(fsIn8788)),
    fsIn8788 instanceof Error
      ? workbookBinding1835
      : fsIn8789
        ? workbookBinding1831.default.normal.cdf(fsIn8788, 0, 1)
        : workbookBinding1831.default.normal.pdf(fsIn8788, 0, 1)
  );
  workbookBinding1860.S.INV = (fsIn11439) => (
    (fsIn11439 = fsH.fn849(fsIn11439)),
    fsIn11439 instanceof Error
      ? workbookBinding1835
      : workbookBinding1831.default.normal.inv(fsIn11439, 0, 1)
  );
  workbookBinding1861 = {};
  workbookBinding1861.EXC = (fsIn5537, fsIn5538) => {
    if (
      ((fsIn5537 = fsH.fn850(fsH.fn841(fsIn5537))),
      (fsIn5538 = fsH.fn849(fsIn5538)),
      fsH.fn846(fsIn5537, fsIn5538))
    )
      return workbookBinding1835;
    fsIn5537 = fsIn5537.sort((fsIn16559, fsIn16560) => fsIn16559 - fsIn16560);
    let workbookBinding15334 = fsIn5537.length;
    if (
      fsIn5538 < 1 / (workbookBinding15334 + 1) ||
      fsIn5538 > 1 - 1 / (workbookBinding15334 + 1)
    )
      return workbookBinding1838;
    let workbookBinding15335 = fsIn5538 * (workbookBinding15334 + 1) - 1,
      workbookBinding15336 = Math.floor(workbookBinding15335);
    return fsH.cZe(
      workbookBinding15335 === workbookBinding15336
        ? fsIn5537[workbookBinding15335]
        : fsIn5537[workbookBinding15336] +
            (workbookBinding15335 - workbookBinding15336) *
              (fsIn5537[workbookBinding15336 + 1] -
                fsIn5537[workbookBinding15336]),
    );
  };
  workbookBinding1861.INC = (fsIn6558, fsIn6559) => {
    if (
      ((fsIn6558 = fsH.fn850(fsH.fn841(fsIn6558))),
      (fsIn6559 = fsH.fn849(fsIn6559)),
      fsH.fn846(fsIn6558, fsIn6559))
    )
      return workbookBinding1835;
    fsIn6558 = fsIn6558.sort((fsIn16561, fsIn16562) => fsIn16561 - fsIn16562);
    let workbookBinding16812 = fsIn6558.length,
      workbookBinding16813 = fsIn6559 * (workbookBinding16812 - 1),
      workbookBinding16814 = Math.floor(workbookBinding16813);
    return fsH.cZe(
      workbookBinding16813 === workbookBinding16814
        ? fsIn6558[workbookBinding16813]
        : fsIn6558[workbookBinding16814] +
            (workbookBinding16813 - workbookBinding16814) *
              (fsIn6558[workbookBinding16814 + 1] -
                fsIn6558[workbookBinding16814]),
    );
  };
  workbookBinding1862 = {};
  workbookBinding1862.EXC = (fsIn2339, fsIn2340, fsIn2341) => {
    if (
      ((fsIn2341 = fsIn2341 === undefined ? 3 : fsIn2341),
      (fsIn2339 = fsH.fn850(fsH.fn841(fsIn2339))),
      (fsIn2340 = fsH.fn849(fsIn2340)),
      (fsIn2341 = fsH.fn849(fsIn2341)),
      fsH.fn846(fsIn2339, fsIn2340, fsIn2341))
    )
      return workbookBinding1835;
    fsIn2339 = fsIn2339.sort((fsIn16563, fsIn16564) => fsIn16563 - fsIn16564);
    let workbookBinding9476 = AZe.apply(null, fsIn2339),
      workbookBinding9477 = fsIn2339.length,
      workbookBinding9478 = workbookBinding9476.length,
      workbookBinding9479 = 10 ** fsIn2341,
      workbookBinding9480 = 0,
      workbookBinding9481 = false,
      workbookBinding9482 = 0;
    for (
      ;
      !workbookBinding9481 && workbookBinding9482 < workbookBinding9478;
    ) {
      fsIn2340 === workbookBinding9476[workbookBinding9482]
        ? ((workbookBinding9480 =
            (fsIn2339.indexOf(workbookBinding9476[workbookBinding9482]) + 1) /
            (workbookBinding9477 + 1)),
          (workbookBinding9481 = true))
        : fsIn2340 >= workbookBinding9476[workbookBinding9482] &&
          (fsIn2340 < workbookBinding9476[workbookBinding9482 + 1] ||
            workbookBinding9482 === workbookBinding9478 - 1) &&
          ((workbookBinding9480 =
            (fsIn2339.indexOf(workbookBinding9476[workbookBinding9482]) +
              1 +
              (fsIn2340 - workbookBinding9476[workbookBinding9482]) /
                (workbookBinding9476[workbookBinding9482 + 1] -
                  workbookBinding9476[workbookBinding9482])) /
            (workbookBinding9477 + 1)),
          (workbookBinding9481 = true));
      workbookBinding9482++;
    }
    return (
      Math.floor(workbookBinding9480 * workbookBinding9479) /
      workbookBinding9479
    );
  };
  workbookBinding1862.INC = (fsIn2420, fsIn2421, fsIn2422) => {
    if (
      ((fsIn2422 = fsIn2422 === undefined ? 3 : fsIn2422),
      (fsIn2420 = fsH.fn850(fsH.fn841(fsIn2420))),
      (fsIn2421 = fsH.fn849(fsIn2421)),
      (fsIn2422 = fsH.fn849(fsIn2422)),
      fsH.fn846(fsIn2420, fsIn2421, fsIn2422))
    )
      return workbookBinding1835;
    fsIn2420 = fsIn2420.sort((fsIn16565, fsIn16566) => fsIn16565 - fsIn16566);
    let workbookBinding9644 = AZe.apply(null, fsIn2420),
      workbookBinding9645 = fsIn2420.length,
      workbookBinding9646 = workbookBinding9644.length,
      workbookBinding9647 = 10 ** fsIn2422,
      workbookBinding9648 = 0,
      workbookBinding9649 = false,
      workbookBinding9650 = 0;
    for (
      ;
      !workbookBinding9649 && workbookBinding9650 < workbookBinding9646;
    ) {
      fsIn2421 === workbookBinding9644[workbookBinding9650]
        ? ((workbookBinding9648 =
            fsIn2420.indexOf(workbookBinding9644[workbookBinding9650]) /
            (workbookBinding9645 - 1)),
          (workbookBinding9649 = true))
        : fsIn2421 >= workbookBinding9644[workbookBinding9650] &&
          (fsIn2421 < workbookBinding9644[workbookBinding9650 + 1] ||
            workbookBinding9650 === workbookBinding9646 - 1) &&
          ((workbookBinding9648 =
            (fsIn2420.indexOf(workbookBinding9644[workbookBinding9650]) +
              (fsIn2421 - workbookBinding9644[workbookBinding9650]) /
                (workbookBinding9644[workbookBinding9650 + 1] -
                  workbookBinding9644[workbookBinding9650])) /
            (workbookBinding9645 - 1)),
          (workbookBinding9649 = true));
      workbookBinding9650++;
    }
    return (
      Math.floor(workbookBinding9648 * workbookBinding9647) /
      workbookBinding9647
    );
  };
  workbookBinding1863 = {};
  workbookBinding1863.DIST = (fsIn8553, fsIn8554, fsIn8555) => (
    (fsIn8553 = fsH.fn849(fsIn8553)),
    (fsIn8554 = fsH.fn849(fsIn8554)),
    fsH.fn846(fsIn8553, fsIn8554)
      ? workbookBinding1835
      : fsIn8555
        ? workbookBinding1831.default.poisson.cdf(fsIn8553, fsIn8554)
        : workbookBinding1831.default.poisson.pdf(fsIn8553, fsIn8554)
  );
});
