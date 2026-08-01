// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: compose/slide element snapshot VO (legacy helper #678).
// Stage-3 wave-103.

import { cesH } from "./boundary-hooks";

void cesH;

export function buildComposeElementSnapshot(cesIn639: any) {
  let cesBind4744 = cesH.bh681(cesIn639.modelElement),
    cesBind4745 = cesH.paragraphsFromElement(cesIn639),
    cesBind4746 =
      cesIn639.modelElement instanceof cesH.tableElementClass
        ? cesH.tableCellsFromElement(
            cesIn639.modelElement,
            cesIn639.presentation,
          )
        : undefined,
    cesBind4747 =
      cesBind4746 === undefined
        ? cesH.bh695(cesBind4744.preview)
        : cesH.cellsPreview(cesBind4746),
    cesBind4748 =
      cesH.protoText(cesIn639.protoElement) ??
      cesH.bh695(cesBind4744.text) ??
      cesBind4747,
    cesBind4749 =
      cesBind4746 === undefined
        ? cesH.bh683(cesIn639, cesBind4744.frame)
        : (cesH.cellsBbox(cesBind4746) ??
          cesH.bh683(cesIn639, cesBind4744.frame));
  return {
    order: cesIn639.order,
    kind: cesH.mapKind(cesBind4744.kind),
    scope: cesIn639.scope,
    aid: cesIn639.aid ?? cesBind4744.aid,
    id: cesBind4744.id,
    name: cesH.bh695(cesBind4744.name),
    bbox: cesBind4749,
    rotation: cesH.bh696(
      cesIn639.modelElement.rotation ?? cesBind4744.frame?.rotation,
    ),
    horizontalFlip:
      cesIn639.modelElement.position.horizontalFlip === true ||
      cesBind4744.frame?.horizontalFlip === true
        ? true
        : undefined,
    verticalFlip:
      cesIn639.modelElement.position.verticalFlip === true ||
      cesBind4744.frame?.verticalFlip === true
        ? true
        : undefined,
    hidden: cesIn639.protoElement?.hidden === true ? true : undefined,
    composeSource: cesIn639.composeSource,
    geometry: cesH.geometrySnapshot(cesBind4744, cesIn639.protoElement),
    text: cesBind4748,
    textPreview: cesH.bh684(cesBind4748),
    resolvedFontSize:
      cesIn639.scope === "slide"
        ? cesH.resolvedFontSize(
            cesIn639.modelElement,
            cesIn639.slide,
            cesIn639.protoElement,
          )
        : undefined,
    resolvedTextStyle:
      cesIn639.scope === "slide"
        ? cesH.resolvedTextStyle(
            cesIn639.modelElement,
            cesIn639.slide,
            cesIn639.protoElement,
          )
        : (cesH.bh688(
            cesH.bh686(cesIn639.modelElement, cesIn639.presentation),
          ) ??
          cesH.bh689(cesIn639.modelElement.textStyle, cesIn639.presentation)),
    textLayout: cesIn639.textLayout,
    paragraphs: cesBind4745,
    fillColor: cesH.fillColor(cesIn639.protoElement),
    lineColor: cesH.lineColor(cesIn639.protoElement),
    lineWidth: cesH.lineWidth(cesIn639.protoElement),
    alt: cesH.bh695(cesBind4744.alt),
    chartType: cesH.bh695(cesBind4744.chartType),
    rows:
      typeof cesBind4744.rows == "number" && Number.isFinite(cesBind4744.rows)
        ? cesBind4744.rows
        : undefined,
    cols:
      typeof cesBind4744.cols == "number" && Number.isFinite(cesBind4744.cols)
        ? cesBind4744.cols
        : undefined,
    contentType: cesH.bh695(cesBind4744.contentType),
    imageCrop: cesH.imageCrop(cesIn639.modelElement),
    imageFit: cesH.imageFit(cesIn639.modelElement),
    imageMask: cesH.imageMask(cesIn639.modelElement),
    prompt: cesH.bh695(cesBind4744.prompt),
    isPlaceholder: cesBind4744.isPlaceholder === true ? true : undefined,
    asset: cesH.assetRef(cesIn639.modelElement),
    fillImage: cesH.fillImage(cesIn639.protoElement, cesIn639.presentation),
    cells: cesBind4746,
  };
}

/** Legacy alias. */
/** Compat alias for barrels. */
export const workbookFn678 = buildComposeElementSnapshot;
