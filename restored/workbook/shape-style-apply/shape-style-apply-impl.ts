// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: apply shape/image/text style patches from JSON (legacy fze/gze/_ze).
// Stage-3 wave-123. Preferred peels fze/gze/_ze; owns pze/mze/vze for contiguous drain.

import { requireShapeTarget } from "../shape-element";
import { parseFontSizePx } from "../text-style";

export function applyShapeElementPatch(
  ssaIn1891: any,
  ssaIn1892: any,
  ssaIn1893: any,
) {
  ssaIn1892.className !== undefined &&
    (ssaIn1891.className = ssaIn1892.className);
  ssaIn1892.name !== undefined && (ssaIn1891.name = ssaIn1892.name);
  ssaIn1892.zIndex !== undefined && (ssaIn1891.zIndex = ssaIn1892.zIndex);
  ssaIn1892.placeholderType !== undefined &&
    (ssaIn1891.placeholderType = ssaIn1892.placeholderType);
  ssaIn1892.placeholderIndex !== undefined &&
    (ssaIn1891.placeholderIndex = ssaIn1892.placeholderIndex);
  ssaIn1892.position && (ssaIn1891.position = ssaIn1892.position);
  (ssaIn1892.from !== undefined || ssaIn1892.fromIdx !== undefined) &&
    ssaIn1891.setConnectorFrom(
      ssaIn1892.from === undefined
        ? undefined
        : requireShapeTarget(ssaIn1893(ssaIn1892.from), "shape.set"),
      ssaIn1892.fromIdx,
    );
  (ssaIn1892.to !== undefined || ssaIn1892.toIdx !== undefined) &&
    ssaIn1891.setConnectorTo(
      ssaIn1892.to === undefined
        ? undefined
        : requireShapeTarget(ssaIn1893(ssaIn1892.to), "shape.set"),
      ssaIn1892.toIdx,
    );
  ssaIn1892.borderRadius !== undefined &&
    (ssaIn1891.borderRadius = ssaIn1892.borderRadius);
  ssaIn1892.shadow !== undefined && (ssaIn1891.shadow = ssaIn1892.shadow);
  ssaIn1892.fill !== undefined && (ssaIn1891.fill = ssaIn1892.fill);
  ssaIn1892.line && applyShapeLinePatch(ssaIn1891, ssaIn1892.line);
}
export function applyShapeLinePatch(ssaIn8956: any, ssaIn8957: any) {
  ssaIn8957.style !== undefined && (ssaIn8956.line.style = ssaIn8957.style);
  ssaIn8957.width !== undefined && (ssaIn8956.line.width = ssaIn8957.width);
  ssaIn8957.fill !== undefined && (ssaIn8956.line.fill = ssaIn8957.fill);
}
export function applyImageElementPatch(ssaIn2538: any, ssaIn2539: any) {
  ssaIn2539.alt !== undefined && (ssaIn2538.alt = ssaIn2539.alt);
  ssaIn2539.fit !== undefined && (ssaIn2538.fit = ssaIn2539.fit);
  ssaIn2539.geometry !== undefined && (ssaIn2538.geometry = ssaIn2539.geometry);
  ssaIn2539.borderRadius !== undefined &&
    (ssaIn2538.borderRadius = ssaIn2539.borderRadius);
  ssaIn2539.lockAspectRatio !== undefined &&
    (ssaIn2538.lockAspectRatio = ssaIn2539.lockAspectRatio);
  ssaIn2539.crop !== undefined && (ssaIn2538.crop = ssaIn2539.crop);
  ssaIn2539.position && (ssaIn2538.position = ssaIn2539.position);
  ssaIn2539.frame && (ssaIn2538.frame = ssaIn2539.frame);
  ssaIn2539.rotation !== undefined && (ssaIn2538.rotation = ssaIn2539.rotation);
  ssaIn2539.flipHorizontal !== undefined &&
    (ssaIn2538.flipHorizontal = ssaIn2539.flipHorizontal);
  ssaIn2539.flipVertical !== undefined &&
    (ssaIn2538.flipVertical = ssaIn2539.flipVertical);
  ssaIn2539.width !== undefined && (ssaIn2538.width = ssaIn2539.width);
  ssaIn2539.height !== undefined && (ssaIn2538.height = ssaIn2539.height);
}
export function applyTextFramePatch(ssaIn1595: any, ssaIn1596: any) {
  ssaIn1596.className !== undefined &&
    (ssaIn1595.className = ssaIn1596.className);
  ssaIn1596.style !== undefined && (ssaIn1595.style = ssaIn1596.style);
  ssaIn1596.bold !== undefined && (ssaIn1595.bold = ssaIn1596.bold);
  ssaIn1596.italic !== undefined && (ssaIn1595.italic = ssaIn1596.italic);
  ssaIn1596.underline !== undefined &&
    (ssaIn1595.underline = ssaIn1596.underline);
  let ssaBind7740 = resolveFontSizeFromPtOrPx(
    ssaIn1596.fontSize,
    ssaIn1596.fontSizePt,
  );
  ssaBind7740 !== undefined && (ssaIn1595.fontSize = ssaBind7740);
  ssaIn1596.typeface !== undefined && (ssaIn1595.typeface = ssaIn1596.typeface);
  ssaIn1596.lineSpacing !== undefined &&
    (ssaIn1595.lineSpacing = ssaIn1596.lineSpacing);
  ssaIn1596.color !== undefined && (ssaIn1595.color = ssaIn1596.color);
  ssaIn1596.fill !== undefined && (ssaIn1595.fill = ssaIn1596.fill);
  ssaIn1596.highlight !== undefined &&
    (ssaIn1595.highlight = ssaIn1596.highlight);
  ssaIn1596.outline !== undefined && (ssaIn1595.outline = ssaIn1596.outline);
  ssaIn1596.shadow !== undefined && (ssaIn1595.shadow = ssaIn1596.shadow);
  ssaIn1596.alignment !== undefined &&
    (ssaIn1595.alignment = ssaIn1596.alignment);
  ssaIn1596.verticalAlignment !== undefined &&
    (ssaIn1595.verticalAlignment = ssaIn1596.verticalAlignment);
  ssaIn1596.autoFit !== undefined && (ssaIn1595.autoFit = ssaIn1596.autoFit);
  ssaIn1596.wrap !== undefined && (ssaIn1595.wrap = ssaIn1596.wrap);
  ssaIn1596.insets !== undefined && (ssaIn1595.insets = ssaIn1596.insets);
}
export function applyParagraphStylePatch(ssaIn1399: any, ssaIn1400: any) {
  ssaIn1400.className !== undefined &&
    (ssaIn1399.className = ssaIn1400.className);
  ssaIn1400.style !== undefined && (ssaIn1399.style = ssaIn1400.style);
  ssaIn1400.bold !== undefined && (ssaIn1399.bold = ssaIn1400.bold);
  ssaIn1400.italic !== undefined && (ssaIn1399.italic = ssaIn1400.italic);
  ssaIn1400.underline !== undefined &&
    (ssaIn1399.underline = ssaIn1400.underline);
  let ssaBind7206 = resolveFontSizeFromPtOrPx(
    ssaIn1400.fontSize,
    ssaIn1400.fontSizePt,
  );
  ssaBind7206 !== undefined && (ssaIn1399.fontSize = ssaBind7206);
  ssaIn1400.typeface !== undefined && (ssaIn1399.typeface = ssaIn1400.typeface);
  ssaIn1400.color !== undefined && (ssaIn1399.color = ssaIn1400.color);
  ssaIn1400.fill !== undefined && (ssaIn1399.fill = ssaIn1400.fill);
  ssaIn1400.highlight !== undefined &&
    (ssaIn1399.highlight = ssaIn1400.highlight);
  ssaIn1400.outline !== undefined && (ssaIn1399.outline = ssaIn1400.outline);
  ssaIn1400.shadow !== undefined && (ssaIn1399.shadow = ssaIn1400.shadow);
  ssaIn1400.alignment !== undefined &&
    (ssaIn1399.alignment = ssaIn1400.alignment);
  ssaIn1400.spacingBefore !== undefined &&
    (ssaIn1399.spacingBefore = ssaIn1400.spacingBefore);
  ssaIn1400.spacingAfter !== undefined &&
    (ssaIn1399.spacingAfter = ssaIn1400.spacingAfter);
  ssaIn1400.lineSpacing !== undefined &&
    (ssaIn1399.lineSpacing = ssaIn1400.lineSpacing);
  ssaIn1400.indentLeft !== undefined &&
    (ssaIn1399.indentLeft = ssaIn1400.indentLeft);
  ssaIn1400.indentFirstLine !== undefined &&
    (ssaIn1399.indentFirstLine = ssaIn1400.indentFirstLine);
  ssaIn1400.link !== undefined &&
    (ssaIn1399.link = ssaIn1400.link ?? undefined);
}
export function resolveFontSizeFromPtOrPx(ssaIn11485: any, ssaIn11486: any) {
  if (ssaIn11485 !== undefined) return parseFontSizePx(ssaIn11485);
  if (ssaIn11486 !== undefined) return (ssaIn11486 * 96) / 72;
}

/** Legacy aliases (wave-123). */
export const fze = applyShapeElementPatch;
export const pze = applyShapeLinePatch;
export const mze = applyImageElementPatch;
export const gze = applyTextFramePatch;
export const _ze = applyParagraphStylePatch;
export const vze = resolveFontSizeFromPtOrPx;
