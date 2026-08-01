// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave5d soft stubs (unbound repair).
const Topaz2: any = undefined;
const Vapor2: any = undefined;

// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split export-budget 2/2 from part-11
/* split-lane-import-depth:1 */

// Careful split 11/19

import { ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
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
  popcornSurfaceStyle_dt,
  popcornSurfaceStyle_et,
  popcornSurfaceStyle_ft,
  popcornSurfaceStyle_gt,
  popcornSurfaceStyle_H,
  popcornSurfaceStyle_ht,
  popcornSurfaceStyle_it,
  popcornSurfaceStyle_J,
  popcornSurfaceStyle_lt,
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
  popcornSurfaceStyle_t,
  popcornSurfaceStyle_tt,
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

// Wave5d soft stubs.
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

function Wheat2(onyx17) {
  return onyx17
    ? {
        text: onyx17.text ?? "",
        textStyle: onyx17.textStyle
          ? {
              ...onyx17.textStyle,
            }
          : undefined,
        hyperlink: onyx17.hyperlink
          ? {
              ...onyx17.hyperlink,
            }
          : undefined,
        citations: onyx17.citations ? [...onyx17.citations] : [],
        id: onyx17.id,
        reviewMarkIds: onyx17.reviewMarkIds ? [...onyx17.reviewMarkIds] : [],
      }
    : {
        ...bloom2,
      };
}
function Yarn2(pearl17, quartz17) {
  return (
    Zephyr2(pearl17.textStyle, quartz17.textStyle) &&
    Zephyr2(pearl17.hyperlink, quartz17.hyperlink) &&
    Acorn2(pearl17.citations, quartz17.citations) &&
    Acorn2(pearl17.reviewMarkIds, quartz17.reviewMarkIds)
  );
}
function Zephyr2(river17, slate17) {
  if (river17 === slate17) return true;
  if (river17 == null || slate17 == null)
    return river17 == null && slate17 == null;
  if (typeof river17 != "object" || typeof slate17 != "object") return false;
  let timber17 = river17,
    umbra17 = slate17,
    violet17 = Object.keys(timber17),
    willow17 = Object.keys(umbra17);
  return violet17.length === willow17.length
    ? violet17.every(
        (item) => Reflect.get(timber17, item) === Reflect.get(umbra17, item),
      )
    : false;
}
function Acorn2(xenon17, yellow17) {
  return xenon17 === yellow17
    ? true
    : !xenon17 || !yellow17
      ? !xenon17 && !yellow17
      : xenon17.length === yellow17.length
        ? xenon17.every((item, index) => item === yellow17[index])
        : false;
}
var bloom2,
  coral2 = esmInit(() => {
    bloom2 = {
      text: "",
      citations: [],
      reviewMarkIds: [],
    };
    Topaz2("");
  });
function Drift2(zinc17) {
  return zinc17.kind === "formula" ? zinc17.text : Vapor2(zinc17.runs);
}
