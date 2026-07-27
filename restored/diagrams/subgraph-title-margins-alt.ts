// Restored from ref/webview/assets/chunk-ZZ45TVLE-Mx_-ndvi.js
// Mermaid flowchart subgraph title margins + label image sizing (alt).
// Stage 3 candidate: typed rewrite; semantic export names.

import { esmInit } from "../runtime/rolldown-runtime";
import {
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../utils/dayjs-core-alt";
import { A, b, d } from "./mermaid-config-alt";
import { chunk5PVQY5BWP, chunk5PVQY5BWU } from "./mermaid-common-utils-alt";
export type FlowchartSubGraphTitleMargin = {
  top?: number;
  bottom?: number;
};
export type FlowchartConfigSlice = {
  flowchart?: {
    subGraphTitleMargin?: FlowchartSubGraphTitleMargin;
  };
};
export type SubGraphTitleMargins = {
  subGraphTitleTopMargin: number;
  subGraphTitleBottomMargin: number;
  subGraphTitleTotalMargin: number;
};

/** Size label <img> nodes inside a mermaid HTML label element. */
export async function configureLabelImages(labelEl: Element, labelHtml: string): Promise<void> {
  const images = labelEl.getElementsByTagName("img");
  if (!images || images.length === 0) return;
  const imageOnly = labelHtml.replace(/<img[^>]*>/g, "").trim() === "";
  await Promise.all(
    [...images].map(
      (item) =>
        new Promise<HTMLImageElement>((resolve) => {
          function setupImage(): void {
            item.style.display = "flex";
            item.style.flexDirection = "column";
            if (imageOnly) {
              const [fontSize = d.fontSize] = chunk5PVQY5BWP(
                b().fontSize
                  ? b().fontSize
                  : window.getComputedStyle(document.body).fontSize,
              );
              const size = fontSize * 5 + "px";
              item.style.minWidth = size;
              item.style.maxWidth = size;
            } else {
              item.style.width = "100%";
            }
            resolve(item);
          }
          defineFunctionName(setupImage, "setupImage");
          setTimeout(() => {
            if (item.complete) setupImage();
          });
          item.addEventListener("error", setupImage);
          item.addEventListener("load", setupImage);
        }),
    ),
  );
}
export function getSubGraphTitleMargins(config: FlowchartConfigSlice): SubGraphTitleMargins {
  const top = config.flowchart?.subGraphTitleMargin?.top ?? 0;
  const bottom = config.flowchart?.subGraphTitleMargin?.bottom ?? 0;
  return {
    subGraphTitleTopMargin: top,
    subGraphTitleBottomMargin: bottom,
    subGraphTitleTotalMargin: top + bottom,
  };
}

/** Rolldown ESM init thunk (bundle export `r`). */
export const initSubGraphTitleMarginsAlt = esmInit(() => {
  chunk5PVQY5BWU();
  A();
  initDayjsLoggerRuntime();
  defineFunctionName(getSubGraphTitleMargins, "getSubGraphTitleMargins");
  defineFunctionName(configureLabelImages, "configureLabelImages");
});
