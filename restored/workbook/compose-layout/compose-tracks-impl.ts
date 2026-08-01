// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: compose track helpers fr/repeat/normalize (legacy Binding1330).
// Stage-3 wave-148.

import { esmInit } from "../../runtime/rolldown-runtime";

export const $H = "auto";

export const workbookBinding1325 = (ctIn13683: any = 1) => ({
  mode: "fr",
  value: workbookBinding1329(ctIn13683, "compose.fr(value)"),
});

export const workbookBinding1326 = (ctIn7467: any, ctIn7468: any) => {
  if (!Number.isInteger(ctIn7467) || ctIn7467 <= 0)
    throw Error(
      "compose.repeat(count, value) count must be a positive integer.",
    );
  return Array.from(
    {
      length: ctIn7467,
    },
    () => ctIn7468,
  );
};

export const workbookBinding1327 = (
  ctIn5395: any,
  ctIn5396: any = "compose.track",
) => {
  if (ctIn5395 === "auto") return ctIn5395;
  if (ctIn5395.mode === "fr")
    return {
      mode: "fr",
      value: workbookBinding1329(ctIn5395.value, `${ctIn5396}.fr.value`),
    };
  if (ctIn5395.mode === "fixed")
    return {
      mode: "fixed",
      value: workbookBinding1329(ctIn5395.value, `${ctIn5396}.fixed.value`),
    };
  throw Error(`${ctIn5396} must be auto, fr(...), or fixed(...).`);
};

export const workbookBinding1328 = (
  ctIn8124: any,
  ctIn8125: any = "compose.tracks",
) => {
  if (!Array.isArray(ctIn8124) || ctIn8124.length === 0)
    throw Error(`${ctIn8125} must include at least one track.`);
  return ctIn8124.map((item, index) =>
    workbookBinding1327(item, `${ctIn8125}[${index}]`),
  );
};

export const workbookBinding1329 = (ctIn10148: any, ctIn10149: any) => {
  if (!Number.isFinite(ctIn10148) || ctIn10148 <= 0)
    throw Error(`${ctIn10149} must be a positive number.`);
  return ctIn10148;
};

export const workbookBinding1330 = esmInit(() => {});

export const ensureComposeTracksInit = workbookBinding1330;
