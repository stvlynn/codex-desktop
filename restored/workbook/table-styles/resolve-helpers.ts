// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: table-style resolve helpers (legacy Binding341–343 renamed).
// Stage-3 wave-70 cohesive table-styles impl kept flat under maxFlatLines.

import {
  Zn as colorTypeEnum,
  tr as fillTypeEnum,
} from "../presentation-protobuf";
import {
  workbookBinding688,
  Ame,
  jme,
  Mme,
  Pme,
  Fme,
  Ime,
  Lme,
  Rme,
  zme,
  Bme,
  Vme,
  Hme,
  workbookBinding689,
  workbookBinding690,
  _w,
  Qme,
  $me,
  ehe,
  workbookBinding691,
  workbookBinding692,
  workbookBinding693,
  workbookBinding694,
  workbookBinding695,
  workbookBinding696,
  workbookBinding697,
  the,
  nhe,
  rhe,
  ihe,
  workbookBinding698,
  workbookBinding699,
} from "./style-slots";

function normalizeStyleNameKey(tsIn12981) {
  return tsIn12981.replace(/[^a-z0-9]/gi, "").toLowerCase();
}
function Wme(tsIn13591) {
  if (tsIn13591)
    return workbookBinding689[tsIn13591]
      ? tsIn13591
      : Qme.get(normalizeStyleNameKey(tsIn13591));
}
function Gme(tsIn13592) {
  if (tsIn13592)
    return workbookBinding690[tsIn13592]
      ? tsIn13592
      : $me.get(normalizeStyleNameKey(tsIn13592));
}
function resolvePresetSchemeColor(tsIn5620) {
  let workbookBinding15457 = workbookBinding691[tsIn5620];
  if (workbookBinding15457) return workbookBinding15457;
  let workbookBinding15458 = Fme[tsIn5620];
  if (!workbookBinding15458)
    throw Error(`Unknown preset color id: ${tsIn5620}`);
  let [workbookBinding15459, workbookBinding15460] = workbookBinding15458,
    workbookBinding15461 = {
      type: colorTypeEnum.COLOR_TYPE_SCHEME,
      value: `theme:${workbookBinding15459}`,
      transform:
        workbookBinding15460 === undefined
          ? undefined
          : {
              tint: workbookBinding15460,
            },
      lastColor: undefined,
    };
  return (
    (workbookBinding691[tsIn5620] = workbookBinding15461),
    workbookBinding15461
  );
}
function Kme(tsIn5966) {
  if (tsIn5966 === _w) return ehe;
  let workbookBinding15991 = workbookBinding692[tsIn5966];
  if (workbookBinding15991) return workbookBinding15991;
  let workbookBinding15992 = Lme[tsIn5966];
  if (workbookBinding15992 === undefined)
    throw Error(`Unknown preset fill id: ${tsIn5966}`);
  let workbookBinding15993 = {
    type: fillTypeEnum.FILL_TYPE_SOLID,
    color: resolvePresetSchemeColor(workbookBinding15992),
    gradientStops: [],
    pictureEffects: [],
  };
  return (
    (workbookBinding692[tsIn5966] = workbookBinding15993),
    workbookBinding15993
  );
}
function qme(tsIn4715) {
  if (tsIn4715 === _w) return;
  let workbookBinding14005 = workbookBinding693[tsIn4715];
  if (workbookBinding14005) return workbookBinding14005;
  let workbookBinding14006 = Ime[tsIn4715];
  if (!workbookBinding14006) throw Error(`Unknown preset font id: ${tsIn4715}`);
  let [workbookBinding14007, workbookBinding14008] = workbookBinding14006,
    workbookBinding14009 = {};
  return (
    workbookBinding14007 & 1 && (workbookBinding14009.bold = true),
    workbookBinding14008 >= 0 &&
      (workbookBinding14009.fill = {
        type: fillTypeEnum.FILL_TYPE_SOLID,
        color: resolvePresetSchemeColor(workbookBinding14008),
        gradientStops: [],
        pictureEffects: [],
      }),
    (workbookBinding693[tsIn4715] = workbookBinding14009),
    workbookBinding14009
  );
}
function Jme(tsIn6220) {
  let workbookBinding16312 = workbookBinding694[tsIn6220];
  if (workbookBinding16312) return workbookBinding16312;
  let workbookBinding16313 = Rme[tsIn6220];
  if (!workbookBinding16313) throw Error(`Unknown preset line id: ${tsIn6220}`);
  let [workbookBinding16314, workbookBinding16315] = workbookBinding16313,
    workbookBinding16316 = Mme[workbookBinding16314];
  if (!workbookBinding16316)
    throw Error(`Unknown preset border style id: ${workbookBinding16314}`);
  let workbookBinding16317 = {
    style: workbookBinding16316,
    color: resolvePresetSchemeColor(workbookBinding16315),
  };
  return (
    (workbookBinding694[tsIn6220] = workbookBinding16317),
    workbookBinding16317
  );
}
function Yme(tsIn5649) {
  if (tsIn5649 === _w) return;
  let workbookBinding15523 = workbookBinding695[tsIn5649];
  if (workbookBinding15523) return workbookBinding15523;
  let workbookBinding15524 = zme[tsIn5649];
  if (!workbookBinding15524)
    throw Error(`Unknown preset border id: ${tsIn5649}`);
  let workbookBinding15525 = {};
  for (
    let workbookBinding20894 = 0;
    workbookBinding20894 < workbookBinding15524.length;
    workbookBinding20894 += 2
  ) {
    let workbookBinding22106 = jme[workbookBinding15524[workbookBinding20894]],
      workbookBinding22107 = workbookBinding15524[workbookBinding20894 + 1];
    !workbookBinding22106 ||
      workbookBinding22107 === undefined ||
      (workbookBinding15525[workbookBinding22106] = Jme(workbookBinding22107));
  }
  return (
    (workbookBinding695[tsIn5649] = workbookBinding15525),
    workbookBinding15525
  );
}
function Xme(tsIn7409) {
  let workbookBinding17856 = workbookBinding696[tsIn7409];
  if (workbookBinding17856) return workbookBinding17856;
  let workbookBinding17857 = Bme[tsIn7409];
  if (!workbookBinding17857) throw Error(`Unknown preset dxf id: ${tsIn7409}`);
  let [workbookBinding17858, workbookBinding17859, workbookBinding17860] =
      workbookBinding17857,
    workbookBinding17861 = {
      fill: Kme(workbookBinding17859),
      font: qme(workbookBinding17858),
      border: Yme(workbookBinding17860),
    };
  return (
    (workbookBinding696[tsIn7409] = workbookBinding17861),
    workbookBinding17861
  );
}
function Zme(tsIn15253) {
  return workbookBinding698.getStyle(tsIn15253);
}
function resolveTableStyleByName(tsIn14704) {
  return Zme(tsIn14704)?.toTableStyle();
}

export {
  normalizeStyleNameKey,
  Wme,
  Gme,
  resolvePresetSchemeColor,
  Kme,
  qme,
  Jme,
  Yme,
  Xme,
  Zme,
  resolveTableStyleByName,
};

