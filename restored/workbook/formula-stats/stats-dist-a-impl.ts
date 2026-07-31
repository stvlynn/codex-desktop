// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel dist wrappers BETA…F (legacy Binding1849–1855).
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

export const ensureFormulaStatsDistAInit = esmInit(() => {
  workbookBinding1849 = {};
  workbookBinding1849.DIST = function (
    fsIn4467,
    fsIn4468,
    fsIn4469,
    fsIn4470,
    fsIn4471,
    fsIn4472,
  ) {
    return arguments.length < 4 ||
      ((fsIn4471 = fsIn4471 === undefined ? 0 : fsIn4471),
      (fsIn4472 = fsIn4472 === undefined ? 1 : fsIn4472),
      (fsIn4467 = fsH.fn849(fsIn4467)),
      (fsIn4468 = fsH.fn849(fsIn4468)),
      (fsIn4469 = fsH.fn849(fsIn4469)),
      (fsIn4471 = fsH.fn849(fsIn4471)),
      (fsIn4472 = fsH.fn849(fsIn4472)),
      fsH.fn846(fsIn4467, fsIn4468, fsIn4469, fsIn4471, fsIn4472))
      ? workbookBinding1835
      : ((fsIn4467 = (fsIn4467 - fsIn4471) / (fsIn4472 - fsIn4471)),
        fsIn4470
          ? workbookBinding1831.default.beta.cdf(fsIn4467, fsIn4468, fsIn4469)
          : workbookBinding1831.default.beta.pdf(fsIn4467, fsIn4468, fsIn4469));
  };
  workbookBinding1849.INV = (
    fsIn6525,
    fsIn6526,
    fsIn6527,
    fsIn6528,
    fsIn6529,
  ) => (
    (fsIn6528 = fsIn6528 === undefined ? 0 : fsIn6528),
    (fsIn6529 = fsIn6529 === undefined ? 1 : fsIn6529),
    (fsIn6525 = fsH.fn849(fsIn6525)),
    (fsIn6526 = fsH.fn849(fsIn6526)),
    (fsIn6527 = fsH.fn849(fsIn6527)),
    (fsIn6528 = fsH.fn849(fsIn6528)),
    (fsIn6529 = fsH.fn849(fsIn6529)),
    fsH.fn846(fsIn6525, fsIn6526, fsIn6527, fsIn6528, fsIn6529)
      ? workbookBinding1835
      : workbookBinding1831.default.beta.inv(fsIn6525, fsIn6526, fsIn6527) *
          (fsIn6529 - fsIn6528) +
        fsIn6528
  );
  workbookBinding1850 = {};
  workbookBinding1850.DIST = (fsIn7052, fsIn7053, fsIn7054, fsIn7055) => (
    (fsIn7052 = fsH.fn849(fsIn7052)),
    (fsIn7053 = fsH.fn849(fsIn7053)),
    (fsIn7054 = fsH.fn849(fsIn7054)),
    (fsIn7055 = fsH.fn849(fsIn7055)),
    fsH.fn846(fsIn7052, fsIn7053, fsIn7054, fsIn7055)
      ? workbookBinding1835
      : fsIn7055
        ? workbookBinding1831.default.binomial.cdf(fsIn7052, fsIn7053, fsIn7054)
        : workbookBinding1831.default.binomial.pdf(fsIn7052, fsIn7053, fsIn7054)
  );
  workbookBinding1850.DIST.RANGE = (fsIn5359, fsIn5360, fsIn5361, fsIn5362) => {
    if (
      ((fsIn5362 = fsIn5362 === undefined ? fsIn5361 : fsIn5362),
      (fsIn5359 = fsH.fn849(fsIn5359)),
      (fsIn5360 = fsH.fn849(fsIn5360)),
      (fsIn5361 = fsH.fn849(fsIn5361)),
      (fsIn5362 = fsH.fn849(fsIn5362)),
      fsH.fn846(fsIn5359, fsIn5360, fsIn5361, fsIn5362))
    )
      return workbookBinding1835;
    let workbookBinding15071 = 0;
    for (
      let workbookBinding22325 = fsIn5361;
      workbookBinding22325 <= fsIn5362;
      workbookBinding22325++
    )
      workbookBinding15071 +=
        fsH.fn870(fsIn5359, workbookBinding22325) *
        fsIn5360 ** +workbookBinding22325 *
        (1 - fsIn5360) ** (fsIn5359 - workbookBinding22325);
    return workbookBinding15071;
  };
  workbookBinding1850.INV = (fsIn7487, fsIn7488, fsIn7489) => {
    if (
      ((fsIn7487 = fsH.fn849(fsIn7487)),
      (fsIn7488 = fsH.fn849(fsIn7488)),
      (fsIn7489 = fsH.fn849(fsIn7489)),
      fsH.fn846(fsIn7487, fsIn7488, fsIn7489))
    )
      return workbookBinding1835;
    let workbookBinding17969 = 0;
    for (; workbookBinding17969 <= fsIn7487; ) {
      if (
        workbookBinding1831.default.binomial.cdf(
          workbookBinding17969,
          fsIn7487,
          fsIn7488,
        ) >= fsIn7489
      )
        return workbookBinding17969;
      workbookBinding17969++;
    }
  };
  workbookBinding1851 = {};
  workbookBinding1851.DIST = (fsIn8438, fsIn8439, fsIn8440) => (
    (fsIn8438 = fsH.fn849(fsIn8438)),
    (fsIn8439 = fsH.fn849(fsIn8439)),
    fsH.fn846(fsIn8438, fsIn8439)
      ? workbookBinding1835
      : fsIn8440
        ? workbookBinding1831.default.chisquare.cdf(fsIn8438, fsIn8439)
        : workbookBinding1831.default.chisquare.pdf(fsIn8438, fsIn8439)
  );
  workbookBinding1851.DIST.RT = (fsIn7776, fsIn7777) =>
    !fsIn7776 | !fsIn7777
      ? workbookBinding1839
      : fsIn7776 < 1 || fsIn7777 > 10000000000
        ? workbookBinding1838
        : typeof fsIn7776 != "number" || typeof fsIn7777 != "number"
          ? workbookBinding1835
          : 1 - workbookBinding1831.default.chisquare.cdf(fsIn7776, fsIn7777);
  workbookBinding1851.INV = (fsIn10969, fsIn10970) => (
    (fsIn10969 = fsH.fn849(fsIn10969)),
    (fsIn10970 = fsH.fn849(fsIn10970)),
    fsH.fn846(fsIn10969, fsIn10970)
      ? workbookBinding1835
      : workbookBinding1831.default.chisquare.inv(fsIn10969, fsIn10970)
  );
  workbookBinding1851.INV.RT = (fsIn7353, fsIn7354) =>
    !fsIn7353 | !fsIn7354
      ? workbookBinding1839
      : fsIn7353 < 0 || fsIn7353 > 1 || fsIn7354 < 1 || fsIn7354 > 10000000000
        ? workbookBinding1838
        : typeof fsIn7353 != "number" || typeof fsIn7354 != "number"
          ? workbookBinding1835
          : workbookBinding1831.default.chisquare.inv(1 - fsIn7353, fsIn7354);
  workbookBinding1851.TEST = function (fsIn1336, fsIn1337) {
    if (arguments.length !== 2) return workbookBinding1839;
    if (
      !(fsIn1336 instanceof Array) ||
      !(fsIn1337 instanceof Array) ||
      fsIn1336.length !== fsIn1337.length ||
      (fsIn1336[0] && fsIn1337[0] && fsIn1336[0].length !== fsIn1337[0].length)
    )
      return workbookBinding1835;
    let workbookBinding7048 = fsIn1336.length,
      workbookBinding7049,
      workbookBinding7050,
      workbookBinding7051;
    for (
      workbookBinding7050 = 0;
      workbookBinding7050 < workbookBinding7048;
      workbookBinding7050++
    ) {
      fsIn1336[workbookBinding7050] instanceof Array ||
        ((workbookBinding7049 = fsIn1336[workbookBinding7050]),
        (fsIn1336[workbookBinding7050] = []),
        fsIn1336[workbookBinding7050].push(workbookBinding7049));
      fsIn1337[workbookBinding7050] instanceof Array ||
        ((workbookBinding7049 = fsIn1337[workbookBinding7050]),
        (fsIn1337[workbookBinding7050] = []),
        fsIn1337[workbookBinding7050].push(workbookBinding7049));
    }
    let workbookBinding7052 = fsIn1336[0].length,
      workbookBinding7053 =
        workbookBinding7052 === 1
          ? workbookBinding7048 - 1
          : (workbookBinding7048 - 1) * (workbookBinding7052 - 1),
      workbookBinding7054 = 0,
      workbookBinding7055 = Math.PI;
    for (
      workbookBinding7050 = 0;
      workbookBinding7050 < workbookBinding7048;
      workbookBinding7050++
    )
      for (
        workbookBinding7051 = 0;
        workbookBinding7051 < workbookBinding7052;
        workbookBinding7051++
      )
        workbookBinding7054 +=
          (fsIn1336[workbookBinding7050][workbookBinding7051] -
            fsIn1337[workbookBinding7050][workbookBinding7051]) **
            2 /
          fsIn1337[workbookBinding7050][workbookBinding7051];
    function fsTmp1189(fsIn5535, fsIn5536) {
      let workbookBinding15330 = Math.exp(-0.5 * fsIn5535);
      fsIn5536 % 2 == 1 &&
        (workbookBinding15330 *= Math.sqrt(
          (2 * fsIn5535) / workbookBinding7055,
        ));
      let workbookBinding15331 = fsIn5536;
      for (; workbookBinding15331 >= 2; ) {
        workbookBinding15330 =
          (workbookBinding15330 * fsIn5535) / workbookBinding15331;
        workbookBinding15331 -= 2;
      }
      let workbookBinding15332 = workbookBinding15330,
        workbookBinding15333 = fsIn5536;
      for (; workbookBinding15332 > 1e-10 * workbookBinding15330; ) {
        workbookBinding15333 += 2;
        workbookBinding15332 =
          (workbookBinding15332 * fsIn5535) / workbookBinding15333;
        workbookBinding15330 += workbookBinding15332;
      }
      return 1 - workbookBinding15330;
    }
    return (
      Math.round(fsTmp1189(workbookBinding7054, workbookBinding7053) * 1e6) /
      1e6
    );
  };
  workbookBinding1852 = {};
  workbookBinding1852.NORM = (fsIn9903, fsIn9904, fsIn9905) => (
    (fsIn9903 = fsH.fn849(fsIn9903)),
    (fsIn9904 = fsH.fn849(fsIn9904)),
    (fsIn9905 = fsH.fn849(fsIn9905)),
    fsH.fn846(fsIn9903, fsIn9904, fsIn9905)
      ? workbookBinding1835
      : workbookBinding1831.default.normalci(
          1,
          fsIn9903,
          fsIn9904,
          fsIn9905,
        )[1] - 1
  );
  workbookBinding1852.T = (fsIn10105, fsIn10106, fsIn10107) => (
    (fsIn10105 = fsH.fn849(fsIn10105)),
    (fsIn10106 = fsH.fn849(fsIn10106)),
    (fsIn10107 = fsH.fn849(fsIn10107)),
    fsH.fn846(fsIn10105, fsIn10106, fsIn10107)
      ? workbookBinding1835
      : workbookBinding1831.default.tci(1, fsIn10105, fsIn10106, fsIn10107)[1] -
        1
  );
  workbookBinding1853 = {};
  workbookBinding1853.P = (fsIn6412, fsIn6413) => {
    if (
      ((fsIn6412 = fsH.fn850(fsH.fn841(fsIn6412))),
      (fsIn6413 = fsH.fn850(fsH.fn841(fsIn6413))),
      fsH.fn846(fsIn6412, fsIn6413))
    )
      return workbookBinding1835;
    let workbookBinding16589 = workbookBinding1831.default.mean(fsIn6412),
      workbookBinding16590 = workbookBinding1831.default.mean(fsIn6413),
      workbookBinding16591 = 0,
      workbookBinding16592 = fsIn6412.length;
    for (
      let workbookBinding22796 = 0;
      workbookBinding22796 < workbookBinding16592;
      workbookBinding22796++
    )
      workbookBinding16591 +=
        (fsIn6412[workbookBinding22796] - workbookBinding16589) *
        (fsIn6413[workbookBinding22796] - workbookBinding16590);
    return workbookBinding16591 / workbookBinding16592;
  };
  workbookBinding1853.S = (fsIn10885, fsIn10886) => (
    (fsIn10885 = fsH.fn850(fsH.fn841(fsIn10885))),
    (fsIn10886 = fsH.fn850(fsH.fn841(fsIn10886))),
    fsH.fn846(fsIn10885, fsIn10886)
      ? workbookBinding1835
      : workbookBinding1831.default.covariance(fsIn10885, fsIn10886)
  );
  workbookBinding1854 = {};
  workbookBinding1854.DIST = (fsIn8316, fsIn8317, fsIn8318) => (
    (fsIn8316 = fsH.fn849(fsIn8316)),
    (fsIn8317 = fsH.fn849(fsIn8317)),
    fsH.fn846(fsIn8316, fsIn8317)
      ? workbookBinding1835
      : fsIn8318
        ? workbookBinding1831.default.exponential.cdf(fsIn8316, fsIn8317)
        : workbookBinding1831.default.exponential.pdf(fsIn8316, fsIn8317)
  );
  workbookBinding1855 = {};
  workbookBinding1855.DIST = (fsIn7579, fsIn7580, fsIn7581, fsIn7582) => (
    (fsIn7579 = fsH.fn849(fsIn7579)),
    (fsIn7580 = fsH.fn849(fsIn7580)),
    (fsIn7581 = fsH.fn849(fsIn7581)),
    fsH.fn846(fsIn7579, fsIn7580, fsIn7581)
      ? workbookBinding1835
      : fsIn7582
        ? workbookBinding1831.default.centralF.cdf(fsIn7579, fsIn7580, fsIn7581)
        : workbookBinding1831.default.centralF.pdf(fsIn7579, fsIn7580, fsIn7581)
  );
  workbookBinding1855.DIST.RT = function (fsIn5756, fsIn5757, fsIn5758) {
    return arguments.length === 3
      ? fsIn5756 < 0 || fsIn5757 < 1 || fsIn5758 < 1
        ? workbookBinding1838
        : typeof fsIn5756 != "number" ||
            typeof fsIn5757 != "number" ||
            typeof fsIn5758 != "number"
          ? workbookBinding1835
          : 1 -
            workbookBinding1831.default.centralF.cdf(
              fsIn5756,
              fsIn5757,
              fsIn5758,
            )
      : workbookBinding1839;
  };
  workbookBinding1855.INV = (fsIn9408, fsIn9409, fsIn9410) => (
    (fsIn9408 = fsH.fn849(fsIn9408)),
    (fsIn9409 = fsH.fn849(fsIn9409)),
    (fsIn9410 = fsH.fn849(fsIn9410)),
    fsH.fn846(fsIn9408, fsIn9409, fsIn9410)
      ? workbookBinding1835
      : fsIn9408 <= 0 || fsIn9408 > 1
        ? workbookBinding1838
        : workbookBinding1831.default.centralF.inv(fsIn9408, fsIn9409, fsIn9410)
  );
  workbookBinding1855.INV.RT = function (fsIn5264, fsIn5265, fsIn5266) {
    return arguments.length === 3
      ? fsIn5264 < 0 ||
        fsIn5264 > 1 ||
        fsIn5265 < 1 ||
        fsIn5265 > 10000000000 ||
        fsIn5266 < 1 ||
        fsIn5266 > 10000000000
        ? workbookBinding1838
        : typeof fsIn5264 != "number" ||
            typeof fsIn5265 != "number" ||
            typeof fsIn5266 != "number"
          ? workbookBinding1835
          : workbookBinding1831.default.centralF.inv(
              1 - fsIn5264,
              fsIn5265,
              fsIn5266,
            )
      : workbookBinding1839;
  };
  workbookBinding1855.TEST = (fsIn4082, fsIn4083) => {
    if (
      !fsIn4082 ||
      !fsIn4083 ||
      !(fsIn4082 instanceof Array) ||
      !(fsIn4083 instanceof Array)
    )
      return workbookBinding1839;
    if (fsIn4082.length < 2 || fsIn4083.length < 2) return workbookBinding1834;
    let workbookBinding13049 = (fsIn10193, fsIn10194) => {
        let workbookBinding20652 = 0;
        for (
          let workbookBinding22814 = 0;
          workbookBinding22814 < fsIn10193.length;
          workbookBinding22814++
        )
          workbookBinding20652 +=
            (fsIn10193[workbookBinding22814] - fsIn10194) ** 2;
        return workbookBinding20652;
      },
      workbookBinding13050 = fsH.fn875(fsIn4082) / fsIn4082.length,
      workbookBinding13051 = fsH.fn875(fsIn4083) / fsIn4083.length;
    return (
      workbookBinding13049(fsIn4082, workbookBinding13050) /
      (fsIn4082.length - 1) /
      (workbookBinding13049(fsIn4083, workbookBinding13051) /
        (fsIn4083.length - 1))
    );
  };
  fsH.fn864.DIST = function (fsIn4932, fsIn4933, fsIn4934, fsIn4935) {
    return arguments.length === 4
      ? fsIn4932 < 0 ||
        fsIn4933 <= 0 ||
        fsIn4934 <= 0 ||
        typeof fsIn4932 != "number" ||
        typeof fsIn4933 != "number" ||
        typeof fsIn4934 != "number"
        ? workbookBinding1835
        : fsIn4935
          ? workbookBinding1831.default.gamma.cdf(
              fsIn4932,
              fsIn4933,
              fsIn4934,
              true,
            )
          : workbookBinding1831.default.gamma.pdf(
              fsIn4932,
              fsIn4933,
              fsIn4934,
              false,
            )
      : workbookBinding1839;
  };
  fsH.fn864.INV = function (fsIn5697, fsIn5698, fsIn5699) {
    return arguments.length === 3
      ? fsIn5697 < 0 || fsIn5697 > 1 || fsIn5698 <= 0 || fsIn5699 <= 0
        ? workbookBinding1838
        : typeof fsIn5697 != "number" ||
            typeof fsIn5698 != "number" ||
            typeof fsIn5699 != "number"
          ? workbookBinding1835
          : workbookBinding1831.default.gamma.inv(fsIn5697, fsIn5698, fsIn5699)
      : workbookBinding1839;
  };
  fsH.fn865.PRECISE = function (fsIn8223) {
    return arguments.length === 1
      ? fsIn8223 <= 0
        ? workbookBinding1838
        : typeof fsIn8223 == "number"
          ? workbookBinding1831.default.gammaln(fsIn8223)
          : workbookBinding1835
      : workbookBinding1839;
  };
});
