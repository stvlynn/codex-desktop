// Restored from ref/webview/assets/feature-catalog-CfKGRvXi.js
// Wave GA — full polished body from `feature-catalog-CfKGRvXi/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 1 (verified 9/10).

import { ensureComposerEsm_Tft_Init } from "../composer/composer-esm-inits";
import {
  jsxRuntime as getJsxRuntime,
  react,
} from "../boundaries/react-cjs-runtime";
import { commonJsInit, esmInit } from "../runtime/rolldown-runtime";
import {
  RemoteTextEditSessionLowerC,
  RemoteTextEditSessionLowerL,
  RemoteTextEditSessionLowerO,
  RemoteTextEditSessionLowerS,
} from "./remote-text-edit-session/index";

/** Wave GA unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
export function featureCatalogI({
  open,
  query,
  summary,
  focusToken,
  onQueryChange,
  onNavigatePrevious,
  onNavigateNext: _featureCatalogI,
  onClose: _featureCatalogA,
}: {
  open?: unknown;
  query?: unknown;
  summary?: unknown;
  focusToken?: unknown;
  onQueryChange?: unknown;
  onNavigatePrevious?: unknown;
  onNavigateNext?: unknown;
  onClose?: unknown;
  [key: string]: unknown;
}) {
  let _featureCatalogT = alpha.useRef(null);
  if (
    (alpha.useEffect(() => {
      open &&
        (_featureCatalogT.current?.focus(), _featureCatalogT.current?.select());
    }, [focusToken, open]),
    !open)
  )
    return null;
  let _featureCatalogN = summary.length > 0 && summary !== "No results";
  return (
    <div
      data-testid="popcorn-find-bar"
      className="border-token-border-light bg-token-bg-primary pointer-events-auto absolute end-3 top-3 z-40 flex h-10 items-center gap-2 rounded-xl border px-2 shadow-lg"
    >
      <div className="border-token-border-light bg-token-bg-primary flex h-8 items-center rounded-lg border">
        <input
          ref={_featureCatalogT}
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          onKeyDown={(event) => {
            if ((event.stopPropagation(), event.key === "Enter")) {
              if ((event.preventDefault(), event.shiftKey)) {
                onNavigatePrevious();
                return;
              }
              _featureCatalogI();
              return;
            }
            event.key === "Escape" &&
              (event.preventDefault(), _featureCatalogA());
          }}
          placeholder="Find"
          aria-label="Find"
          className="text-token-text-primary placeholder:text-token-text-tertiary h-8 w-[220px] rounded-lg border-0 bg-transparent px-2 text-sm outline-none"
        />
      </div>
      <div
        className={IntlProvider(
          "min-w-[64px] text-right text-xs",
          _featureCatalogN
            ? "text-token-text-secondary"
            : "text-token-text-tertiary",
        )}
      >
        {summary}
      </div>
      <button
        type="button"
        aria-label="Previous search result"
        className="text-token-text-primary hover:bg-token-bg-secondary inline-flex size-8 items-center justify-center rounded-md disabled:cursor-default disabled:opacity-40"
        disabled={!_featureCatalogN}
        onClick={onNavigatePrevious}
      >
        {<RemoteTextEditSessionLowerC className="size-3.5" />}
      </button>
      <button
        type="button"
        aria-label="Next search result"
        className="text-token-text-primary hover:bg-token-bg-secondary inline-flex size-8 items-center justify-center rounded-md disabled:cursor-default disabled:opacity-40"
        disabled={!_featureCatalogN}
        onClick={_featureCatalogI}
      >
        {<RemoteTextEditSessionLowerS className="size-3.5" />}
      </button>
      <button
        type="button"
        aria-label="Close find"
        className="text-token-text-primary hover:bg-token-bg-secondary inline-flex size-8 items-center justify-center rounded-md"
        onClick={_featureCatalogA}
      >
        {<RemoteTextEditSessionLowerO className="size-4" />}
      </button>
    </div>
  );
}
var alpha, bravo;
export const featureCatalogA = esmInit(() => {
  alpha = commonJsInit(react());
  ensureComposerEsm_Tft_Init();
  RemoteTextEditSessionLowerL();
  bravo = getJsxRuntime();
});
export function featureCatalogT(falcon: unknown) {
  return falcon ? delta.filter((item) => item.artifact === falcon) : [...delta];
}
export function featureCatalogN() {
  return delta.map((item) => [
    copper(item.artifact),
    item.area,
    item.feature,
    item.summary,
  ]);
}
function copper(echo) {
  return echo.charAt(0).toUpperCase() + echo.slice(1);
}
var delta;
export const featureCatalogR = esmInit(() => {
  delta = [
    {
      artifact: "shared",
      area: "Architecture",
      feature: "Per-artifact worker bundles",
      summary:
        "Workbook, presentation, and document each ship a dedicated worker bundle so hosts can scale them independently.",
    },
    {
      artifact: "shared",
      area: "Canvas runtime",
      feature: "Worker-owned redraw loop",
      summary:
        "Granola owns the render/cache path while Popcorn keeps the React shell thin and event-driven.",
    },
    {
      artifact: "shared",
      area: "Editing",
      feature: "Canvas-native text sessions",
      summary:
        "Presentation and document reuse the shared hidden-textarea bridge and Granola text-edit controller instead of contentEditable.",
    },
    {
      artifact: "shared",
      area: "Floating objects",
      feature: "Shared selection overlays",
      summary:
        "Charts, shapes, and images use the same hit-test and overlay direction across artifact lanes.",
    },
    {
      artifact: "shared",
      area: "Validation",
      feature: "State-oriented devtools and receipts",
      summary:
        "Each route exposes deterministic state capture for browser automation, smoke receipts, and manual debugging.",
    },
    {
      artifact: "workbook",
      area: "Core grid",
      feature: "Formula editing and recalculation",
      summary:
        "Formula bar edits, in-cell edits, and recalc all flow through the Granola workbook model and undo stack.",
    },
    {
      artifact: "workbook",
      area: "Analysis",
      feature: "Tables, filters, and pivots",
      summary:
        "Workbook demos include structured tables, filter menus, and a pivot table backed by a large data sheet.",
    },
    {
      artifact: "workbook",
      area: "Formatting",
      feature: "Conditional formats and validation",
      summary:
        "Color scales, rule-based highlights, validation dropdowns, and prompts render from workbook-native metadata.",
    },
    {
      artifact: "workbook",
      area: "Layout",
      feature: "Freeze panes and Excel-like sizing",
      summary:
        "Frozen headers, autofit, wrap-text cases, and explicit row/column sizing are part of the default workbook catalog.",
    },
    {
      artifact: "workbook",
      area: "Objects",
      feature: "Charts, shapes, images, and sparklines",
      summary:
        "The workbook showcase includes anchored charts plus floating shapes, images, and sparkline groups.",
    },
    {
      artifact: "workbook",
      area: "Productivity",
      feature: "Clipboard, find, and undo/redo",
      summary:
        "Browser-native clipboard, workbook search, and keyboard history are validated against the model rather than UI text.",
    },
    {
      artifact: "presentation",
      area: "Stage",
      feature: "Thumbnails, stage, and notes",
      summary:
        "The slide editor owns selected-slide state, thumbnails, a centered stage, and speaker notes per slide.",
    },
    {
      artifact: "presentation",
      area: "Canvas text",
      feature: "Canvas text editing",
      summary:
        "Double-click text editing, selection gestures, and undo all reuse the shared Granola text session.",
    },
    {
      artifact: "presentation",
      area: "Objects",
      feature: "Shapes, connectors, and z-order",
      summary:
        "Slides demonstrate cards, callouts, arrows, and routed connectors that can be selected, moved, and resized.",
    },
    {
      artifact: "presentation",
      area: "Data visuals",
      feature: "Charts and tables",
      summary:
        "The presentation catalog includes metric tables plus multiple chart types for selection and editing coverage.",
    },
    {
      artifact: "presentation",
      area: "Media",
      feature: "Images and themed backgrounds",
      summary:
        "Slides include image elements, varied backgrounds, and polished notes so the route exercises more than text boxes.",
    },
    {
      artifact: "document",
      area: "Structure",
      feature: "Sections, headers, footers, and columns",
      summary:
        "The document catalog spans multiple sections, page setups, headers/footers, and one-column versus two-column layouts.",
    },
    {
      artifact: "document",
      area: "Canvas text",
      feature: "Pagination-aware text editing and find",
      summary:
        "Document editing supports page navigation, find, wrapped-line selection, and canvas-native text mutations.",
    },
    {
      artifact: "document",
      area: "Rich text",
      feature: "Headings, lists, spacing, and callouts",
      summary:
        "The document demo uses styled text blocks, list-style sections, and floating callouts to exercise layout and text styles.",
    },
    {
      artifact: "document",
      area: "Embedded content",
      feature: "Tables, shapes, and images",
      summary:
        "Document pages include anchored tables, inline images, and floating shapes to drive object selection and pagination.",
    },
  ];
});
export { featureCatalogA as ensureFeatureCatalogAtomsInit };
export { featureCatalogI as PopcornFindBar };
export { featureCatalogN as listFeatureCatalogRows };
export { featureCatalogR as ensureFeatureCatalogInit };
export { featureCatalogT as getFeatureCatalogEntries };
/** Wave GA: bind no longer required after full body promote */
export function bindPopcornFindBar(_next: unknown): void {}

/** Wave GA: bind no longer required after full body promote */
export function bindListFeatureCatalogRows(_next: unknown): void {}

/** Wave GA: bind no longer required after full body promote */
export function bindGetFeatureCatalogEntries(_next: unknown): void {}
