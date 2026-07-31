// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-8: text autofit proto ↔ VO helpers (legacy eoe/toe/roe + toProto).

/** Legacy Binding435 — proto fontScale is fixed-point × 1e5. */
export const FONT_SCALE_FIXED_POINT = 1e5;

export type AutofitType = "none" | "shrinkText" | "resizeShapeToFitText";

export type AutofitVo = {
  type?: AutofitType;
  scale?: number;
  lineSpaceReduction?: number;
};

export type AutofitProto = {
  noAutofit?: Record<string, never>;
  normalAutoFit?: { fontScale?: number; lineSpaceReduction?: number };
  shapeAutoFit?: Record<string, never>;
};

/** Legacy `eoe` — proto fontScale → unit scale. */
export function fontScaleFromProto(
  value: number | undefined,
): number | undefined {
  if (value !== undefined) return value / FONT_SCALE_FIXED_POINT;
}

/** Legacy `toe` — unit scale → proto fontScale. */
export function fontScaleToProto(
  value: number | undefined,
): number | undefined {
  if (value !== undefined) return Math.round(value * FONT_SCALE_FIXED_POINT);
}

/** Legacy `roe` — autofit proto bag → VO fields. */
export function autofitFromProto(
  proto: AutofitProto | null | undefined,
): AutofitVo {
  return proto?.noAutofit
    ? { type: "none" }
    : proto?.normalAutoFit
      ? {
          type: "shrinkText",
          scale: fontScaleFromProto(proto.normalAutoFit.fontScale),
          lineSpaceReduction: proto.normalAutoFit.lineSpaceReduction,
        }
      : proto?.shapeAutoFit
        ? { type: "resizeShapeToFitText" }
        : {};
}

/** VO autofit fields → proto bag. */
export function autofitToProto(value: AutofitVo): AutofitProto | undefined {
  if (value.type) {
    if (value.type === "none") return { noAutofit: {} };
    if (value.type === "resizeShapeToFitText") return { shapeAutoFit: {} };
    if (value.type === "shrinkText")
      return {
        normalAutoFit: {
          fontScale: fontScaleToProto(value.scale),
          lineSpaceReduction: value.lineSpaceReduction,
        },
      };
  }
}
