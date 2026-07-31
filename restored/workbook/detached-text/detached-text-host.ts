// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-32: stub host for detached text contexts (legacy Binding625).

import type { DetachedTextHost } from "./types";

/** Legacy Binding625 — host stub when no document/assets context exists. */
export const DETACHED_TEXT_HOST: DetachedTextHost = {
  stub: () => {},
  getImageById: () => undefined,
  createImageAsset: () => {
    throw Error(
      "createImageAsset is not available in detached text contexts.",
    );
  },
  getChartById: () => undefined,
  getTextStyleByName: () => undefined,
  createChartAsset: () => {
    throw Error(
      "createChartAsset is not available in detached text contexts.",
    );
  },
  attachChartAsset: (_asset: unknown) => {
    throw Error(
      "attachChartAsset is not available in detached text contexts.",
    );
  },
};
