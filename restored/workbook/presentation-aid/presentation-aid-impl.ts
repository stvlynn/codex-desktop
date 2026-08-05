// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation AID resolve (legacy ZRe/JRe/YRe + eze).
// Stage-3 wave-126.

import { composeScopedId } from "../stable-id";

export function findElementByAid(
  paidIn3839: any,
  paidIn3840: any,
  paidIn3841: any,
) {
  for (let paidBind13837 of paidIn3839.slides.items)
    for (let paidBind14431 of paidBind13837.elements.items)
      if (
        !(paidIn3840 === "sh" && paidBind14431.type !== "shape") &&
        !(paidIn3840 === "ch" && paidBind14431.type !== "chart") &&
        !(paidIn3840 === "im" && paidBind14431.type !== "image") &&
        !(paidIn3840 === "tb" && paidBind14431.type !== "table") &&
        !(paidIn3840 === "ea" && paidBind14431.type !== "embeddedArtifact") &&
        paidBind14431.type !== "smartArt" &&
        composeScopedId(paidIn3840, paidBind13837.id, paidBind14431.id) ===
          paidIn3841
      )
        return paidBind14431;
  throw Error(`Unknown element aid: ${paidIn3841}`);
}
export function normalizeAidPrefix(props: any) {
  let paidBind15257 = props.trim().toLowerCase();
  return (
    {
      presentation: "pr",
      deck: "pr",
      slide: "sl",
      shape: "sh",
      chart: "ch",
      image: "im",
      table: "tb",
      embeddedartifact: "ea",
      artifact: "ea",
      notes: "nt",
      thread: "th",
      textrange: "tr",
    }[paidBind15257] ?? paidBind15257
  );
}
export function resolvePresentationAid(paidIn2755: any, paidIn2756: any) {
  if (!paidIn2756 || typeof paidIn2756 != "string")
    throw Error("resolve requires a non-empty aid.");
  let { prefix, suffix } = splitAid(paidIn2756),
    paidBind10398 = normalizeAidPrefix(prefix);
  if (paidBind10398 === "tr") return resolveTextRangeAid(paidIn2755, suffix);
  if (paidBind10398 === "pr") {
    if (suffix !== paidIn2755.id)
      throw Error(`Unknown presentation aid: ${paidIn2756}`);
    return paidIn2755;
  }
  if (paidBind10398 === "sl") return findSlideById(paidIn2755, suffix);
  if (paidBind10398 === "nt")
    return findSlideById(paidIn2755, suffix).speakerNotes;
  if (paidBind10398 === "th") {
    let paidBind21362 = paidIn2755.comments.threads.getById(suffix);
    if (!paidBind21362) throw Error(`Unknown thread aid: ${paidIn2756}`);
    return paidBind21362;
  }
  if (
    paidBind10398 === "sh" ||
    paidBind10398 === "ch" ||
    paidBind10398 === "im" ||
    paidBind10398 === "tb" ||
    paidBind10398 === "ea"
  )
    return findElementByAid(
      paidIn2755,
      paidBind10398,
      `${paidBind10398}/${suffix}`,
    );
  throw Error(`Unknown aid prefix: ${paidIn2756}`);
}
export function findSlideById(paidIn9682: any, paidIn9683: any) {
  let paidBind20211 = paidIn9682.slides.items.find(
    (item) => item.id === paidIn9683,
  );
  if (!paidBind20211) throw Error(`Unknown slide aid: sl/${paidIn9683}`);
  return paidBind20211;
}
export function resolveTextRangeAid(paidIn2676: any, paidIn2677: any) {
  let paidBind10210 = /^([a-z]+)\/([^/]+)\/(\d+)\/(\d+)$/.exec(paidIn2677);
  if (!paidBind10210) throw Error(`Invalid text range aid: tr/${paidIn2677}`);
  let [, paidBind10211, paidBind10212, paidBind10213, paidBind10214] =
      paidBind10210,
    paidBind10215 = Number(paidBind10213),
    paidBind10216 = Number(paidBind10214);
  if (!Number.isFinite(paidBind10215) || !Number.isFinite(paidBind10216))
    throw Error(`Invalid text range offsets: tr/${paidIn2677}`);
  let paidBind10217 = resolvePresentationAid(
    paidIn2676,
    `${paidBind10211}/${paidBind10212}`,
  );
  if (typeof paidBind10217.text != "object" || paidBind10217 === null)
    throw Error(`Text range target is not text-bearing: tr/${paidIn2677}`);
  let paidBind10218 = paidBind10217.text;
  if (!paidBind10218 || typeof paidBind10218.getRange != "function")
    throw Error(`Text range target does not support ranges: tr/${paidIn2677}`);
  return paidBind10218.getRange(paidBind10215, paidBind10216);
}
export function splitAid(paidIn8539: any) {
  let paidBind19049 = paidIn8539.indexOf("/");
  if (paidBind19049 <= 0 || paidBind19049 === paidIn8539.length - 1)
    throw Error(`Invalid aid: ${paidIn8539}`);
  return {
    prefix: paidIn8539.slice(0, paidBind19049),
    suffix: paidIn8539.slice(paidBind19049 + 1),
  };
}

/** Legacy aliases (wave-126). */
export const JRe = findElementByAid;
export const YRe = normalizeAidPrefix;
export const ZRe = resolvePresentationAid;
export const workbookBinding1749 = findSlideById;
export const QRe = resolveTextRangeAid;
export const $Re = splitAid;
