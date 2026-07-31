// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-33: resolve element frame in CSS-px (legacy h286).

import { workbookGt } from "../text-style";
import { expandPlaceholderTypeCandidates } from "../presentation-theme";
import type {
  ElementWithOptionalBbox,
  FrameRectPx,
  SlideRenderHost,
} from "./types";

function isNonZeroBbox(bbox: {
  xEmu?: number;
  yEmu?: number;
  widthEmu?: number;
  heightEmu?: number;
}): boolean {
  return (
    bbox.xEmu !== 0 ||
    bbox.yEmu !== 0 ||
    bbox.widthEmu !== 0 ||
    bbox.heightEmu !== 0
  );
}

/**
 * Legacy h286 — prefer explicit EMU bbox; else placeholder
 * layout/master frame; else zero rect.
 */
export function resolveElementFramePx(
  element: ElementWithOptionalBbox,
  _presentation: unknown,
  slide: SlideRenderHost,
): FrameRectPx {
  if (element.bbox && isNonZeroBbox(element.bbox)) {
    let { xEmu, yEmu, widthEmu, heightEmu } = element.bbox;
    return {
      x: (xEmu ?? 0) * workbookGt,
      y: (yEmu ?? 0) * workbookGt,
      width: (widthEmu ?? 0) * workbookGt,
      height: (heightEmu ?? 0) * workbookGt,
    };
  }
  let placeholderIndex = element.placeholderIndex,
    typeCandidates = new Set(
      expandPlaceholderTypeCandidates(element.placeholderType),
    ),
    findByPlaceholder = (layout: any) => {
      if (layout) {
        if (placeholderIndex !== undefined) {
          let byIndex = layout.elements.find(
            (item: any) => item.placeholderIndex === placeholderIndex,
          );
          if (byIndex) return byIndex;
        }
        if (typeCandidates.size > 0) {
          let byType = layout.elements.find((item: any) =>
            item.placeholderTypeCandidates.some((_item: string) =>
              typeCandidates.has(_item),
            ),
          );
          if (byType) return byType;
        }
      }
    },
    frameFromLayout = (frame: any): FrameRectPx | undefined => {
      if (!frame) return;
      let { left, top, width, height } = frame;
      if (
        !(
          left === undefined ||
          top === undefined ||
          width === undefined ||
          height === undefined ||
          width <= 0 ||
          height <= 0
        )
      )
        return { x: left, y: top, width, height };
    };
  if (placeholderIndex !== undefined || typeCandidates.size > 0) {
    let { layout, masterLayout } = slide.resolveRenderContext(),
      fromLayout = frameFromLayout(findByPlaceholder(layout)?.frame);
    if (fromLayout) return fromLayout;
    let fromMaster = frameFromLayout(findByPlaceholder(masterLayout)?.frame);
    if (fromMaster) return fromMaster;
  }
  return { x: 0, y: 0, width: 0, height: 0 };
}
