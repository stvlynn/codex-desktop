// Restored from ref/webview/assets/notebook-preview-panel-DwlTki9M.js
// Wave FY — full polished body from `notebook-preview-panel-DwlTki9M/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 8 (verified 27/35).
// Wave FZ-support — PascalCase invalid JSX tags: areVisualizationFeatureGatesEnabled→AreVisualizationFeatureGatesEnabled, isIndeterminate→IsIndeterminate, isLocalOrNullValue→IsLocalOrNullValue, renamedId→NotebookPreviewPanelHelper13, renamedId→NotebookPreviewPanelHelper14, renamedId→NotebookPreviewPanelHelper15, renamedId→NotebookPreviewPanelHelper16, renamedId→NotebookPreviewPanelHelper17, renamedId→NotebookPreviewPanelHelper18, renamedId→NotebookPreviewPanelHelper19, renamedId→NotebookPreviewPanelHelper20, renamedId→NotebookPreviewPanelHelper21.
// Split part — notebook preview panel data helpers.

import { markdownToPlainText } from "../../markdown/markdown-to-plain-text";
import { alpha } from "./notebook-parsing";

export function xenon(quarry: any) {
  try {
    return {
      document: alpha(JSON.parse(new TextDecoder().decode(yellow(quarry)))),
      status: "ready",
    };
  } catch {
    return {
      status: "error",
    };
  }
}
function yellow(rapids) {
  let spur = atob(rapids),
    tor = new Uint8Array(spur.length);
  for (let updraft = 0; updraft < spur.length; updraft += 1)
    tor[updraft] = spur.charCodeAt(updraft);
  return tor;
}
export function zinc(verge: any) {
  let weir = `${verge.ename}: ${verge.evalue}`.trim();
  return verge.traceback.trim().length === 0
    ? weir
    : `${weir}\n${verge.traceback}`;
}
export function amber(yard: any, anchor: any, bolt: any) {
  let cog = anchor.title?.trim();
  if (cog != null && cog.length > 0) return cog;
  switch (anchor.cellType) {
    case "markdown":
      return (
        basalt(anchor.source) ??
        yard.formatMessage(
          {
            id: "notebookPreview.markdownCellTitle",
            defaultMessage: "Markdown cell {cellNumber}",
            description:
              "Fallback title for a Markdown notebook cell without a heading",
          },
          {
            cellNumber: bolt,
          },
        )
      );
    case "raw":
      return yard.formatMessage(
        {
          id: "notebookPreview.rawCellTitle",
          defaultMessage: "Raw cell {cellNumber}",
          description: "Fallback title for a raw notebook cell",
        },
        {
          cellNumber: bolt,
        },
      );
    case "code": {
      let disc = markdownToPlainText(anchor.descriptionMarkdown ?? "");
      return disc.length > 0
        ? cedar(disc)
        : yard.formatMessage(
            {
              id: "notebookPreview.codeCellTitle",
              defaultMessage: "Code cell {cellNumber}",
              description:
                "Fallback title for a code notebook cell without a description",
            },
            {
              cellNumber: bolt,
            },
          );
    }
  }
}
function basalt(edge) {
  let forge = edge
    .split(/\r?\n/)
    .map((item) => item.trim())
    .find((item) => /^#{1,6}\s+/.test(item));
  return forge == null ? null : cedar(markdownToPlainText(forge));
}
function cedar(gear) {
  let hinge = gear.trim();
  return hinge.length <= 80 ? hinge : `${hinge.slice(0, 77).trimEnd()}…`;
}
export function daisy(iron: any) {
  return iron.replace(/\.ipynb$/i, "");
}
