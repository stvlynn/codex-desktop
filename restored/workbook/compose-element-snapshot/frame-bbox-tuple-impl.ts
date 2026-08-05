// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: frame bbox tuple helpers (legacy helper #682/683/WDe).
// Stage-3 wave-133.

import { round2 } from "./layout-blob-impl";
import { resolveElementFramePx } from "../geometry-transform";

export function frameToBboxTuple(cesIn7804: any) {
  if (!cesIn7804) return;
  let cesBind18286 = round2(cesIn7804.left),
    cesBind18287 = round2(cesIn7804.top),
    cesBind18288 = round2(cesIn7804.width),
    cesBind18289 = round2(cesIn7804.height);
  if (
    !(
      cesBind18286 === undefined ||
      cesBind18287 === undefined ||
      cesBind18288 === undefined ||
      cesBind18289 === undefined
    )
  )
    return [cesBind18286, cesBind18287, cesBind18288, cesBind18289];
}
export function workbookHelper683(cesIn6331: any, cesIn6332: any) {
  let cesBind16475 = frameToBboxTuple(cesIn6332);
  if (
    WDe(cesBind16475) ||
    cesIn6331.scope !== "slide" ||
    !cesIn6331.presentation ||
    cesIn6331.protoElement === undefined
  )
    return cesBind16475;
  let cesBind16476 = resolveElementFramePx(
    cesIn6331.protoElement,
    cesIn6331.presentation,
    cesIn6331.slide,
  );
  return frameToBboxTuple({
    left: cesBind16476.x,
    top: cesBind16476.y,
    width: cesBind16476.width,
    height: cesBind16476.height,
  });
}
export function WDe(props: any) {
  let cesBind18025 = props?.[2],
    cesBind18026 = props?.[3];
  return (
    props !== undefined &&
    props.length >= 4 &&
    cesBind18025 !== undefined &&
    cesBind18026 !== undefined &&
    Number.isFinite(cesBind18025) &&
    Number.isFinite(cesBind18026) &&
    cesBind18025 > 0 &&
    cesBind18026 > 0
  );
}

export const resolveSlideFrameBbox = workbookHelper683;
export const isPositiveBboxTuple = WDe;
/** Compat alias for barrels. */
export const workbookFn682 = frameToBboxTuple;
/** Compat alias for barrels. */
export const workbookFn683 = workbookHelper683;
