// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: date construct / day-diff helpers (legacy helper930–935 nest).
// Stage-3 wave-133 — unlocks helper935 preferred peel (H7e/w7e nest).

export const CONSTRUCT_DATE_FROM = Symbol.for("constructDateFrom");
export const DAY_MS = 864e5;

export function workbookHelper930(fdmIn8128: any, fdmIn8129: any) {
  return typeof fdmIn8128 == "function"
    ? fdmIn8128(fdmIn8129)
    : fdmIn8128 &&
        typeof fdmIn8128 == "object" &&
        CONSTRUCT_DATE_FROM in fdmIn8128
      ? fdmIn8128[CONSTRUCT_DATE_FROM](fdmIn8129)
      : fdmIn8128 instanceof Date
        ? new fdmIn8128.constructor(fdmIn8129)
        : new Date(fdmIn8129);
}
export function workbookHelper931(fdmIn15237: any, fdmIn15238: any) {
  return workbookHelper930(fdmIn15238 || fdmIn15237, fdmIn15237);
}
export function H7e(fdmIn5935: any) {
  let fdmBind15951 = workbookHelper931(fdmIn5935),
    fdmBind15952 = new Date(
      Date.UTC(
        fdmBind15951.getFullYear(),
        fdmBind15951.getMonth(),
        fdmBind15951.getDate(),
        fdmBind15951.getHours(),
        fdmBind15951.getMinutes(),
        fdmBind15951.getSeconds(),
        fdmBind15951.getMilliseconds(),
      ),
    );
  return (
    fdmBind15952.setUTCFullYear(fdmBind15951.getFullYear()),
    fdmIn5935 - +fdmBind15952
  );
}
export function workbookHelper932(fdmIn11002: any, ...fdmIn11003: any[]) {
  let fdmBind21526 = workbookHelper930.bind(
    null,
    fdmIn11002 || fdmIn11003.find((item) => typeof item == "object"),
  );
  return fdmIn11003.map(fdmBind21526);
}
export function workbookHelper933(fdmIn12273: any, fdmIn12274: any) {
  let fdmBind22366 = workbookHelper931(fdmIn12273, fdmIn12274?.in);
  return (fdmBind22366.setHours(0, 0, 0, 0), fdmBind22366);
}
export function G7e(fdmIn9270: any, fdmIn9271: any, fdmIn9272: any) {
  let [fdmBind19822, fdmBind19823] = workbookHelper932(
      fdmIn9272?.in,
      fdmIn9270,
      fdmIn9271,
    ),
    fdmBind19824 = workbookHelper933(fdmBind19822),
    fdmBind19825 = workbookHelper933(fdmBind19823),
    fdmBind19826 = +fdmBind19824 - H7e(fdmBind19824),
    fdmBind19827 = +fdmBind19825 - H7e(fdmBind19825);
  return Math.round((fdmBind19826 - fdmBind19827) / DAY_MS);
}
export function workbookHelper935(
  fdmIn7955: any,
  fdmIn7956: any,
  fdmIn7957: any,
) {
  let [fdmBind18436, fdmBind18437] = workbookHelper932(
      fdmIn7957?.in,
      fdmIn7955,
      fdmIn7956,
    ),
    fdmBind18438 = C9e(fdmBind18436, fdmBind18437),
    fdmBind18439 = Math.abs(G7e(fdmBind18436, fdmBind18437));
  fdmBind18436.setDate(fdmBind18436.getDate() - fdmBind18438 * fdmBind18439);
  let fdmBind18440 =
    fdmBind18438 *
    (fdmBind18439 - Number(C9e(fdmBind18436, fdmBind18437) === -fdmBind18438));
  return fdmBind18440 === 0 ? 0 : fdmBind18440;
}
export function C9e(fdmIn5548: any, fdmIn5549: any) {
  let fdmBind15348 =
    fdmIn5548.getFullYear() - fdmIn5549.getFullYear() ||
    fdmIn5548.getMonth() - fdmIn5549.getMonth() ||
    fdmIn5548.getDate() - fdmIn5549.getDate() ||
    fdmIn5548.getHours() - fdmIn5549.getHours() ||
    fdmIn5548.getMinutes() - fdmIn5549.getMinutes() ||
    fdmIn5548.getSeconds() - fdmIn5549.getSeconds() ||
    fdmIn5548.getMilliseconds() - fdmIn5549.getMilliseconds();
  return fdmBind15348 < 0 ? -1 : fdmBind15348 > 0 ? 1 : fdmBind15348;
}

export const utcTimezoneOffsetMs = H7e;
export const daysBetweenDates = G7e;
export const compareDateTime = C9e;
export const datedifYdUnits = workbookHelper935;
