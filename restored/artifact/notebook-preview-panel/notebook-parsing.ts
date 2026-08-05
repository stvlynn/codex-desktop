// Restored from ref/webview/assets/notebook-preview-panel-DwlTki9M.js
// Wave FY — full polished body from `notebook-preview-panel-DwlTki9M/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 8 (verified 27/35).
// Wave FZ-support — PascalCase invalid JSX tags: areVisualizationFeatureGatesEnabled→AreVisualizationFeatureGatesEnabled, isIndeterminate→IsIndeterminate, isLocalOrNullValue→IsLocalOrNullValue, renamedId→NotebookPreviewPanelHelper13, renamedId→NotebookPreviewPanelHelper14, renamedId→NotebookPreviewPanelHelper15, renamedId→NotebookPreviewPanelHelper16, renamedId→NotebookPreviewPanelHelper17, renamedId→NotebookPreviewPanelHelper18, renamedId→NotebookPreviewPanelHelper19, renamedId→NotebookPreviewPanelHelper20, renamedId→NotebookPreviewPanelHelper21.
// Split part — notebook JSON parsing and schema init.

import { ensureAccountPlanQueryInit } from "../../account/ensure-account-plan-query-init";
import {
  siteAnalyticsEventsPath,
  siteAnalyticsPath,
} from "../../appgen/site-analytics-paths";
import { esmInit } from "../../runtime/rolldown-runtime";
import { remote } from "../../ui/remote";
import { coalesceTruthy } from "../../utils/coalesce-truthy";
import { deferredNavigationFT, deferredUiXT } from "./companion-stubs";

export function alpha(flint: any) {
  let garnet = slate.safeParse(flint);
  if (!garnet.success)
    throw Error("Notebook must be a JSON object with a cells array");
  return {
    cells: garnet.data.cells.map(bravo),
    title: gamma(garnet.data.metadata, "title"),
  };
}
function bravo(hazel) {
  let ivory = falcon(hazel.source),
    jasper = hazel.id ?? null,
    kelp = harbor(hazel.metadata, marble);
  switch (hazel.cell_type) {
    case "code":
      return {
        cellType: "code",
        descriptionMarkdown: harbor(hazel.metadata, nickel),
        executionCount: hazel.execution_count ?? null,
        id: jasper,
        outputs: (hazel.outputs ?? []).flatMap((item, index) =>
          copper(item, index, indigo(hazel.metadata, index)),
        ),
        source: ivory,
        title: kelp,
      };
    case "markdown":
      return {
        cellType: "markdown",
        id: jasper,
        source: ivory,
        title: kelp,
      };
    case "raw":
      return {
        cellType: "raw",
        id: jasper,
        source: ivory,
        title: kelp,
      };
    default:
      return {
        cellType: "raw",
        id: jasper,
        source: ivory,
        title: kelp,
      };
  }
}
function copper(lotus, mint, nova) {
  switch (lotus.output_type) {
    case "stream": {
      let olive = kite(lotus.text);
      return olive == null
        ? []
        : [
            {
              name: gamma(lotus, "name") ?? "stdout",
              summaryMarkdown: nova,
              text: olive,
              type: "stream",
            },
          ];
    }
    case "error":
      return [
        {
          ename: gamma(lotus, "ename") ?? "Error",
          evalue: gamma(lotus, "evalue") ?? "",
          summaryMarkdown: nova,
          traceback: kite(lotus.traceback) ?? "",
          type: "error",
        },
      ];
    case "display_data":
    case "execute_result":
      return delta(lotus.data, mint, nova);
    default:
      return [];
  }
}
function delta(prism, quill, reef) {
  let sage = onyx.safeParse(prism);
  if (!sage.success) return [];
  let topaz = echo(sage.data, quill);
  if (topaz != null) return [topaz];
  let ultra = kite(sage.data["text/html"]);
  if (ultra != null && ultra.trim().length > 0)
    return [
      {
        html: ultra,
        type: "html",
      },
    ];
  let vapor = kite(sage.data["text/markdown"]);
  if (vapor != null && vapor.trim().length > 0)
    return [
      {
        markdown: vapor,
        type: "markdown",
      },
    ];
  let wheat = kite(sage.data["text/plain"]);
  if (wheat != null)
    return [
      {
        summaryMarkdown: reef,
        text: wheat,
        type: "text",
      },
    ];
  let yarn =
    sage.data["application/json"] ?? sage.data["application/vnd.vega.v5+json"];
  return yarn == null
    ? []
    : [
        {
          summaryMarkdown: reef,
          text: JSON.stringify(yarn, null, 2),
          type: "json",
        },
      ];
}
function echo(zephyr, acorn) {
  let bloom = kite(zephyr["image/png"]);
  if (bloom != null)
    return {
      dataUrl: `data:image/png;base64,${bloom.replaceAll(/\s/g, "")}`,
      outputNumber: acorn + 1,
      type: "image",
    };
  let coral = kite(zephyr["image/jpeg"]);
  if (coral != null)
    return {
      dataUrl: `data:image/jpeg;base64,${coral.replaceAll(/\s/g, "")}`,
      outputNumber: acorn + 1,
      type: "image",
    };
  let drift = kite(zephyr["image/svg+xml"]);
  return drift == null
    ? null
    : {
        dataUrl: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(drift)}`,
        outputNumber: acorn + 1,
        type: "image",
      };
}
function falcon(eagle) {
  return kite(eagle) ?? "";
}
function gamma(frost, glide) {
  let honey = frost?.[glide];
  return typeof honey == "string" ? honey : null;
}
function harbor(iris, jewel) {
  for (let knoll of jade(iris))
    for (let lunar of jewel) {
      let moss = kite(knoll[lunar]);
      if (moss != null && moss.trim().length > 0) return moss;
    }
  return null;
}
function indigo(north, orbit) {
  for (let pine of jade(north)) {
    let quest = pine.outputSummaries;
    if (!Array.isArray(quest)) continue;
    let ridge = onyx.safeParse(quest[orbit]);
    if (!ridge.success) continue;
    let storm = kite(ridge.data.summaryMarkdown);
    if (storm != null && storm.trim().length > 0) return storm;
  }
  return null;
}
function jade(tide) {
  return tide == null
    ? []
    : [
        ...lemon.flatMap((item) => {
          let unity = onyx.safeParse(tide[item]);
          return unity.success ? [unity.data] : [];
        }),
        tide,
      ];
}
function kite(vale) {
  return typeof vale == "string"
    ? vale
    : Array.isArray(vale) && vale.every((item) => typeof item == "string")
      ? vale.join("")
      : null;
}
var lemon, marble, nickel, onyx, pearl, quartz, river, slate;
export var timber = esmInit(() => {
  coalesceTruthy();
  lemon = ["codex", "codexNotebook", "codex_notebook", "codex-app"];
  marble = ["title", "cellTitle", "cell_title"];
  nickel = [
    "codeDescriptionMarkdown",
    "code_description_markdown",
    "descriptionMarkdown",
    "description_markdown",
    "description",
  ];
  onyx = ensureAccountPlanQueryInit(coalesceTruthy(), siteAnalyticsPath());
  pearl = siteAnalyticsEventsPath([
    coalesceTruthy(),
    deferredNavigationFT(coalesceTruthy()),
  ]).optional();
  quartz = onyx;
  river = deferredUiXT({
    cell_type: coalesceTruthy(),
    execution_count: remote().int().nullable().optional(),
    id: coalesceTruthy().optional(),
    metadata: onyx.optional(),
    outputs: deferredNavigationFT(quartz).optional(),
    source: pearl,
  }).passthrough();
  slate = deferredUiXT({
    cells: deferredNavigationFT(river),
    metadata: onyx.optional(),
  }).passthrough();
});
