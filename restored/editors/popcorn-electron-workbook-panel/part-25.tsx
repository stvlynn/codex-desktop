// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Careful split export-budget 2/2 from part-11
/* split-lane-import-depth:1 */

const $e: any = undefined;
const Wheat2: any = undefined;
const Yarn2: any = undefined;
const _e: any = undefined;
const accentFill: any = undefined;
const accentStroke: any = undefined;
const activeDrawingStroke: any = undefined;
const activeDrawingStrokeRef: any = undefined;
const alpha16: any = undefined;
const annotationEditorAnchorBounds: any = undefined;
const annotationEditorLightDismissArmedRef: any = undefined;
const annotationEditorRef: any = undefined;
const annotationEditorSession: any = undefined;
const annotationEditorSessionRef: any = undefined;
const annotationEnabled: any = undefined;
const annotationHighlightBounds: any = undefined;
const annotationMode: any = undefined;
const apex15: any = undefined;
const artifactSearchEnabled: any = undefined;
const azure15: any = undefined;
const be: any = undefined;
const beginDrawingSession: any = undefined;
const bloom2: any = undefined;
const bottomScrollReservePx: any = undefined;
const brook15: any = undefined;
const canyon15: any = undefined;
const cleanupDrawingSession: any = undefined;
const closeAnnotationEditor: any = undefined;
const commentThreadsEnabled: any = undefined;
const controller: any = undefined;
const copper16: any = undefined;
const coral15: any = undefined;
const deleteAnnotationEditor: any = undefined;
const delta16: any = undefined;
const dew15: any = undefined;
const draftAnnotationMarkerNumber: any = undefined;
const draftDrawingStrokes: any = undefined;
const drawingEnabled: any = undefined;
const drawingMode: any = undefined;
const dusk15: any = undefined;
const eagle15: any = undefined;
const elm15: any = undefined;
const falcon16: any = undefined;
const gamma16: any = undefined;
const getAnnotationMarkerBlurHandler: any = undefined;
const getAnnotationMarkerClickHandler: any = undefined;
const getAnnotationMarkerFocusHandler: any = undefined;
const getAnnotationMarkerMouseEnterHandler: any = undefined;
const getAnnotationMarkerMouseLeaveHandler: any = undefined;
const grove15: any = undefined;
const handleAnnotationEditorChange: any = undefined;
const harbor16: any = undefined;
const hill15: any = undefined;
const honey15: any = undefined;
const indigo16: any = undefined;
const inputFocused: any = undefined;
const iris15: any = undefined;
const isEditing: any = undefined;
const isle15: any = undefined;
const jewel15: any = undefined;
const kelp15: any = undefined;
const knoll15: any = undefined;
const lotus15: any = undefined;
const lunar15: any = undefined;
const meadow15: any = undefined;
const mint15: any = undefined;
const moss15: any = undefined;
const nest15: any = undefined;
const north15: any = undefined;
const nova15: any = undefined;
const oak15: any = undefined;
const onAnnotationModeChange: any = undefined;
const onCellEditorBlur: any = undefined;
const onCellEditorChange: any = undefined;
const onCellEditorFocus: any = undefined;
const onDrawingModeChange: any = undefined;
const openCreateAnnotationEditor: any = undefined;
const pendingAnnotationMarkers: any = undefined;
const petal15: any = undefined;
const prism15: any = undefined;
const projectWorkbookDrawingPointToViewport: any = undefined;
const quest15: any = undefined;
const queueAnnotationDraftOpen: any = undefined;
const quiet15: any = undefined;
const rain15: any = undefined;
const reef15: any = undefined;
const requestAnnotationEditorDismiss: any = undefined;
const reviewTools: any = undefined;
const ridge15: any = undefined;
const sage15: any = undefined;
const seed15: any = undefined;
const snapshot: any = undefined;
const storm15: any = undefined;
const submitAnnotationEditor: any = undefined;
const topaz15: any = undefined;
const trail15: any = undefined;
const ultra15: any = undefined;
const urn15: any = undefined;
const vale15: any = undefined;
const vapor15: any = undefined;
const viewportOverlays: any = undefined;
const visiblePendingDrawings: any = undefined;
const wave15: any = undefined;
const wheat15: any = undefined;
const yarn15: any = undefined;
const zephyr15: any = undefined;

// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split export-budget 1/2 from part-11

// Careful split 11/19

import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { ensurePersistedAtomInit } from "../../boundaries/persisted-atom";
import { react } from "../../boundaries/react-cjs-runtime";
import {
  _workbookT,
  workbookB,
  workbookL,
  WorkbookR,
  workbookZ,
} from "../../workbook/editor-compat";
import { readPrefersReducedMotionAtom } from "../../motion/use-prefers-reduced-motion";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { buildMemoryFeatureFlags } from "../../settings/build-memory-feature-flags";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { deferredUiYat } from "../../ui/deferred-ui-yat";
import {
  ensureDndAxisLockModifiersInit,
  restrictToFirstScrollableAncestor,
  restrictToVerticalAxis,
} from "../../ui/dnd-axis-lock-modifiers";
import { dndAxisLockModifiers } from "../../ui/dnd-axis-lock-modifiers-bindable";
import { useDndSensors } from "../../ui/use-dnd-sensors";
import { joinStringsOrNull } from "../../utils/join-strings-or-null";
import { safeZodValue } from "../../utils/safe-zod-value";
import {
  colIndexToLetters,
  formatA1,
  initAddressMetrics,
  initAddressUtils,
  lettersToColIndex,
  parseA1Range,
  rowTokenToIndex,
} from "../../utils/spreadsheet-address-utils";
import { stack, stackOffsetExpand } from "../../vendor/d3-shape-line-pie-stack";
import { ensureD3ShapeStackOffsetInit } from "../../workbook/ensure-d3-shape-stack-offset-init";
import {
  ensureFeatureCatalogAtomsInit,
  ensureFeatureCatalogInit,
  listFeatureCatalogRows,
  PopcornFindBar,
} from "../feature-catalog";
import {
  popcornSurfaceStyle__t,
  popcornSurfaceStyle_A,
  popcornSurfaceStyle_at,
  popcornSurfaceStyle_B,
  popcornSurfaceStyle_ct,
  popcornSurfaceStyle_Ct,
  popcornSurfaceStyle_dt as PopcornSurfaceStyle_dt,
  popcornSurfaceStyle_et,
  popcornSurfaceStyle_ft as PopcornSurfaceStyle_ft,
  popcornSurfaceStyle_gt,
  popcornSurfaceStyle_H,
  popcornSurfaceStyle_ht as PopcornSurfaceStyle_ht,
  popcornSurfaceStyle_it,
  popcornSurfaceStyle_J,
  popcornSurfaceStyle_lt as PopcornSurfaceStyle_lt,
  popcornSurfaceStyle_mt,
  popcornSurfaceStyle_N,
  popcornSurfaceStyle_nt,
  popcornSurfaceStyle_O,
  popcornSurfaceStyle_ot,
  popcornSurfaceStyle_P,
  popcornSurfaceStyle_pt,
  popcornSurfaceStyle_Q,
  popcornSurfaceStyle_r,
  popcornSurfaceStyle_rt,
  popcornSurfaceStyle_st,
  popcornSurfaceStyle_St,
  popcornSurfaceStyle_t as PopcornSurfaceStyle_t,
  popcornSurfaceStyle_tt as PopcornSurfaceStyle_tt,
  popcornSurfaceStyle_ut,
  popcornSurfaceStyle_wt,
} from "../popcorn-electron-surface-style";
import {
  RemoteTextEditSessionA,
  RemoteTextEditSessionB,
  RemoteTextEditSessionC,
  RemoteTextEditSessionE,
  RemoteTextEditSessionF,
  RemoteTextEditSessionG,
  RemoteTextEditSessionH,
  RemoteTextEditSessionI,
  RemoteTextEditSessionJ,
  RemoteTextEditSessionL,
  RemoteTextEditSessionLowerR,
  RemoteTextEditSessionLowerT,
  RemoteTextEditSessionM,
  RemoteTextEditSessionN,
  RemoteTextEditSessionO,
  RemoteTextEditSessionP,
  RemoteTextEditSessionQ,
  RemoteTextEditSessionR,
  RemoteTextEditSessionS,
  RemoteTextEditSessionSurfaceKind,
  RemoteTextEditSessionU,
  remoteTextEditSessionUnderscore,
  RemoteTextEditSessionV,
  RemoteTextEditSessionW,
  RemoteTextEditSessionX,
  RemoteTextEditSessionY,
  RemoteTextEditSessionZ,
  RemoteTextEditSessionZoomControl,
} from "../remote-text-edit-session/index";

const $r: any = undefined;
const Birch1: any = undefined;
const Elm1: any = undefined;
const Flint: any = undefined;
const Garnet2: any = undefined;
const Ivory2: any = undefined;
const Jasper2: any = undefined;
const Quartz: any = undefined;
const Ridge1: any = undefined;
const Umbra1: any = undefined;
const Xenon: any = undefined;
const Yarn1: any = undefined;
const Zinc1: any = undefined;
const _i: any = undefined;
const _r: any = undefined;
const amber: any = undefined;
const bloom1: any = undefined;
const brook1: any = undefined;
const canyon: any = undefined;
const copper2: any = undefined;
const dew1: any = undefined;
const flint2: any = undefined;
const garnet: any = undefined;
const garnet1: any = undefined;
const hill: any = undefined;
const isle1: any = undefined;
const jade1: any = undefined;
const nest: any = undefined;
const pearl2: any = undefined;
const quiet: any = undefined;
const slate2: any = undefined;
const timber1: any = undefined;
const violet: any = undefined;
const willow2: any = undefined;
const xenon1: any = undefined;

var lotus2,
  mint2,
  nova2,
  olive2 = esmInit(() => {
    initAddressMetrics();
    lotus2 = commonJsInit(react());
    amber();
    violet();
    garnet();
    popcornSurfaceStyle_nt();
    popcornSurfaceStyle_it();
    hill();
    popcornSurfaceStyle__t();
    popcornSurfaceStyle_St();
    RemoteTextEditSessionH();
    RemoteTextEditSessionG();
    _r();
    nest();
    quiet();
    canyon();
    jade1();
    timber1();
    xenon1();
    ensureFeatureCatalogAtomsInit();
    garnet1();
    bloom1();
    brook1();
    isle1();
    dew1();
    copper2();
    pearl2();
    slate2();
    willow2();
    flint2();
    nova2 = 2e3;
  });
function Prism2({
  title,
  widthPx = 360,
  topPx = 92,
  rightPx = 16,
  onClose,
  children,
}) {
  return (
    <div
      className="pointer-events-auto absolute"
      style={{
        right: rightPx,
        top: topPx,
        width: widthPx,
        maxWidth: "calc(100% - 32px)",
        maxHeight: `calc(100% - ${topPx + 16}px)`,
      }}
      data-testid={`popcorn-floating-panel-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <section className="border-token-border-light bg-token-bg-primary flex max-h-full min-h-0 flex-col overflow-hidden rounded-2xl border shadow-2xl">
        <header className="border-token-border-light flex items-center justify-between border-b px-3 py-2">
          <h2 className="text-token-text-primary text-sm font-medium">
            {title}
          </h2>
          <button
            type="button"
            className="text-token-text-secondary hover:bg-token-bg-tertiary inline-flex size-8 items-center justify-center rounded-md"
            onClick={onClose}
            aria-label={`Close ${title}`}
          >
            {
              <RemoteTextEditSessionB
                {...{
                  className: "size-4",
                }}
              />
            }
          </button>
        </header>
        <div className="min-h-0 overflow-auto p-3">{children}</div>
      </section>
    </div>
  );
}
var quill2,
  reef2 = esmInit(() => {
    RemoteTextEditSessionLowerT();
  });
function Sage2(falcon17) {
  let gamma17 = falcon17.trimStart();
  return {
    kind: "formula",
    text: gamma17.startsWith("=") ? gamma17 : `=${gamma17}`,
  };
}
function Topaz2(harbor17) {
  return {
    kind: "text",
    runs: [
      Wheat2({
        ...bloom2,
        text: harbor17,
      }),
    ],
  };
}
function Ultra2(indigo17) {
  if (!Array.isArray(indigo17) || indigo17.length === 0)
    return [Wheat2(bloom2)];
  let jade17 = [];
  for (let kite17 of indigo17) {
    if (!kite17) continue;
    let lemon17 = Wheat2(kite17);
    lemon17.text ||= "";
    let marble17 = jade17[jade17.length - 1];
    if (marble17 && Yarn2(marble17, lemon17)) {
      marble17.text += lemon17.text;
      continue;
    }
    jade17.push(lemon17);
  }
  return jade17.length > 0 ? jade17 : [Wheat2(bloom2)];
}
function Vapor2(nickel17) {
  return Ultra2(nickel17)
    .map((item) => item.text ?? "")
    .join("");
}
