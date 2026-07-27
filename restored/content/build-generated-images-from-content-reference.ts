// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Qxa` / export `uI`.

import { collectContentReferenceImages } from "./collect-content-reference-images";
import { pickContentReferenceImageSrc } from "./pick-content-reference-image-src";
import { pickContentReferenceImagePreviewSrc } from "./pick-content-reference-image-preview-src";
import { pickContentReferenceImageDimension } from "./pick-content-reference-image-dimension";

export type GeneratedImageFromContentReference = {
  height: number | null;
  id: string;
  previewSrc: string;
  src: string;
  status: "completed";
  type: "generated-image";
  width: number | null;
};

export function buildGeneratedImagesFromContentReference(ref: Record<string, unknown>, groupKey: string | number): GeneratedImageFromContentReference[] {
  return collectContentReferenceImages(ref).flatMap((image, index) => {
    const src = pickContentReferenceImageSrc(image);
    if (src == null) return [];
    const previewSrc = pickContentReferenceImagePreviewSrc(image) ?? src;
    return [
      {
        height: pickContentReferenceImageDimension(image, "height"),
        id: `chatgpt-image-group-${String(groupKey)}-${String(index)}`,
        previewSrc,
        src,
        status: "completed" as const,
        type: "generated-image" as const,
        width: pickContentReferenceImageDimension(image, "width"),
      },
    ];
  });
}
