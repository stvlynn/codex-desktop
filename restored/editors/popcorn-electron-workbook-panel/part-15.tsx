// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 15/19
/* split-lane-import-depth:1 */

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
const Alpha: any = undefined;
const AppInitialLrt: any = undefined;
const Cliff2: any = undefined;
const Hazel3: any = undefined;
const IntlProvider: any = undefined;
const Isle: any = undefined;
const Juniper: any = undefined;
const _r: any = undefined;
const bravo: any = undefined;
const cedar: any = undefined;
const deferredUiIit: any = undefined;
const garnet: any = undefined;
const nest: any = undefined;
const p: any = undefined;
const sage1: any = undefined;
const seed1: any = undefined;
const trail2: any = undefined;
const u: any = undefined;
const violet: any = undefined;

var ivory3,
  jasper3,
  kelp3,
  lotus3 = esmInit(() => {
    ensureD3ShapeStackOffsetInit();
    ensureDndAxisLockModifiersInit();
    popcornSurfaceStyle_tt();
    dndAxisLockModifiers();
    AppInitialLrt();
    ensureComposerEsm_Tft_Init();
    ivory3 = commonJsInit(react());
    popcornSurfaceStyle_ot();
    RemoteTextEditSessionLowerT();
    kelp3 = {
      "--app-shell-tab-background":
        "color-mix(in srgb, var(--color-token-foreground) 5%, var(--color-token-main-surface-primary))",
    };
  });
function Mint3({
  controller,
  snapshot,
  title,
  actions,
  reviewToolControl,
  headerTitleContent,
  headerRightContent,
  renderHeaderZoomControl,
  fileMenuContent,
  sheetTabAccentFill,
  sheetTabAccentStroke,
  theme,
  isEditing,
  onClose,
}) {
  let drift20 = theme === "codex",
    eagle20 = renderHeaderZoomControl?.({
      onZoomPercentChange: (frost20) => {
        controller.setZoom(frost20 / 100);
      },
      triggerTestId: "popcorn-zoom-select",
      zoomPercent: Math.round(snapshot.zoom * 100),
    }) ?? (
      <RemoteTextEditSessionZoomControl
        {...{
          zoom: snapshot.zoom,
          onZoomChange: (glide20) => controller.setZoom(glide20),
        }}
      />
    );
  return (
    <RemoteTextEditSessionH
      {...{
        testId: "popcorn-toolbar",
        title,
        headerTitleContent,
        closeLabel: "Close spreadsheet",
        onClose,
        compactTitle: drift20,
        fileMenuContent,
        icon: (
          <RemoteTextEditSessionSurfaceKind
            {...{
              kind: "workbook",
              children: (
                <RemoteTextEditSessionG
                  {...{
                    className: "size-4",
                  }}
                />
              ),
            }}
          />
        ),
        centerContent: (
          <Hazel3
            {...{
              controller,
              snapshot,
              accentFill: sheetTabAccentFill,
              accentStroke: sheetTabAccentStroke,
              variant: "inline",
              addButtonPosition: "end",
              isEditing,
            }}
          />
        ),
        actions:
          drift20 ||
          actions.length > 0 ||
          reviewToolControl ||
          headerRightContent ? (
            <div
              className={IntlProvider(
                "flex items-center",
                drift20 ? "gap-1" : "gap-2",
              )}
            >
              {reviewToolControl}
              {drift20 ? eagle20 : null}
              {actions.length > 0 ? (
                <div className="flex items-center gap-1">
                  {actions.map((item) => (
                    <button
                      key={item.id}
                      className={IntlProvider(
                        olive3,
                        "text-token-text-primary",
                        item.isActive ? "bg-token-bg-tertiary" : null,
                      )}
                      data-testid={`popcorn-toolbar-action-${item.id}`}
                      type="button"
                      title={item.title}
                      aria-label={item.ariaLabel ?? item.title ?? item.label}
                      onClick={() => item.onSelect(controller)}
                    >
                      {item.icon ? (
                        <item.icon
                          {...{
                            className: "size-4",
                          }}
                        />
                      ) : (
                        item.label
                      )}
                    </button>
                  ))}
                </div>
              ) : null}
              {headerRightContent}
            </div>
          ) : null,
      }}
    />
  );
}
var nova3,
  olive3,
  prism3 = esmInit(() => {
    ensureComposerEsm_Tft_Init();
    RemoteTextEditSessionA();
    RemoteTextEditSessionO();
    RemoteTextEditSessionE();
    RemoteTextEditSessionLowerT();
    lotus3();
    olive3 =
      "text-token-text-primary hover:bg-token-bg-tertiary inline-flex size-8 items-center justify-center rounded-md";
  }),
  quill3,
  reef3,
  sage3,
  topaz3 = esmInit(() => {
    quill3 = [2, 133, 255];
    reef3 = `rgba(${quill3[0]}, ${quill3[1]}, ${quill3[2]}, 0.15)`;
    sage3 = `rgba(${quill3[0]}, ${quill3[1]}, ${quill3[2]}, 1)`;
  });
function Ultra3(honey20) {
  if (!honey20) return null;
  let iris20 = honey20.replace(/\$|\s+/g, "");
  if (!iris20) return null;
  let jewel20 = /[A-Za-z]/.test(iris20),
    knoll20 = /\d/.test(iris20);
  return jewel20 && knoll20
    ? {
        kind: "cell",
        row: rowTokenToIndex(iris20),
        col: lettersToColIndex(iris20),
      }
    : jewel20
      ? {
          kind: "column",
          col: lettersToColIndex(iris20),
        }
      : knoll20
        ? {
            kind: "row",
            row: rowTokenToIndex(iris20),
          }
        : null;
}
var vapor3 = esmInit(() => {
  initAddressMetrics();
});
function Wheat3(lunar20) {
  if (!lunar20) return null;
  let moss20 = (
      lunar20.includes("!") ? lunar20.slice(lunar20.indexOf("!") + 1) : lunar20
    ).split(":"),
    north20 = Ultra3(moss20[0] ?? ""),
    orbit20 = Ultra3(moss20[1] ?? moss20[0] ?? "");
  return !north20 || !orbit20
    ? null
    : north20.kind === "cell" && orbit20.kind === "cell"
      ? {
          r1: Math.min(north20.row, orbit20.row),
          r2: Math.max(north20.row, orbit20.row),
          c1: Math.min(north20.col, orbit20.col),
          c2: Math.max(north20.col, orbit20.col),
        }
      : north20.kind === "column" && orbit20.kind === "column"
        ? {
            r1: 0,
            r2: 1 / 0,
            c1: Math.min(north20.col, orbit20.col),
            c2: Math.max(north20.col, orbit20.col),
          }
        : north20.kind === "row" && orbit20.kind === "row"
          ? {
              r1: Math.min(north20.row, orbit20.row),
              r2: Math.max(north20.row, orbit20.row),
              c1: 0,
              c2: 1 / 0,
            }
          : null;
}
var yarn3 = esmInit(() => {
  vapor3();
});
function Zephyr3({ sheetName, resetSelectionAddr, resetSheet }) {
  let [pine20, quest20] = acorn3.useState(false),
    [ridge20, storm20] = acorn3.useState([]),
    [tide20, unity20] = acorn3.useState({}),
    vale20 = acorn3.useMemo(
      () =>
        ridge20
          .map((item) => {
            let cliff20 = Wheat3(item.ref),
              dusk20 = tide20[item.id];
            return !cliff20 || !dusk20
              ? null
              : {
                  ...cliff20,
                  color: dusk20,
                };
          })
          .filter((item) => item != null),
      [ridge20, tide20],
    ),
    wave20 = acorn3.useCallback(() => {
      quest20(false);
      storm20([]);
      unity20({});
    }, []),
    apex20 = acorn3.useCallback(
      (elm20) => {
        let fern20 = elm20.trim();
        if (!fern20.startsWith("=")) {
          storm20([]);
          unity20({});
          return;
        }
        try {
          let grove20 = Cliff2(fern20),
            hill20 = sheetName ? sheetName.trim().toUpperCase() : null,
            isle20 = [],
            juniper20 = new Set(),
            lagoon20 = {};
          for (let meadow20 of grove20.refs) {
            if (!meadow20 || juniper20.has(meadow20.id)) continue;
            let nest20 = meadow20.sheet?.toUpperCase();
            if (nest20 && hill20 && nest20 !== hill20) continue;
            let oak20 = bloom3(isle20.length.toString());
            lagoon20[meadow20.id] = oak20;
            isle20.push({
              id: meadow20.id,
              ref: meadow20.a1,
            });
            juniper20.add(meadow20.id);
          }
          storm20(isle20);
          unity20(lagoon20);
        } catch {
          storm20([]);
          unity20({});
        }
      },
      [sheetName],
    ),
    brook20 = acorn3.useCallback(
      (petal20) => {
        quest20(true);
        apex20(petal20);
      },
      [apex20],
    );
  return (
    acorn3.useEffect(() => {
      quest20(false);
      storm20([]);
      unity20({});
    }, [resetSelectionAddr, resetSheet]),
    {
      inputFocused: pine20,
      beginInputSession: brook20,
      endInputSession: wave20,
      updateFormulaReferences: apex20,
      formulaHighlightRects: vale20,
      refColors: tide20,
    }
  );
}
var acorn3,
  bloom3,
  coral3 = esmInit(() => {
    deferredUiIit();
    u();
    acorn3 = commonJsInit(react());
    trail2();
    yarn3();
    bloom3 = deferredUiYat()
      .domain(
        Array.from(
          {
            length: 12,
          },
          (quiet20, rain20) => rain20.toString(),
        ),
      )
      .range(p);
  });
function Drift3() {
  return typeof window > "u" ? null : window;
}
function Eagle3(seed20) {
  if (!remoteTextEditSessionUnderscore()) return () => {};
  let trail20 = Drift3();
  if (!trail20) return () => {};
  let urn20 = {
    controller: seed20,
    controllerId:
      "id" in seed20 && typeof seed20.id == "number" ? seed20.id : undefined,
    getSnapshot: () => Alpha(seed20.getState()),
    exportWorkbookProto: () => Isle(seed20),
    getCellState: undefined,
    captureState: undefined,
    requestWorkbookProto: () => Isle(seed20),
    requestCellState: (vine20, wind20) => Juniper(seed20, vine20, wind20),
    captureStateAsync: async () => {
      let yarrow20 = Alpha(seed20.getState());
      return {
        snapshot: yarrow20,
        selectedCell:
          yarrow20.activeSheetName && yarrow20.selectedAddress
            ? await Juniper(
                seed20,
                yarrow20.activeSheetName,
                yarrow20.selectedAddress,
              )
            : null,
        logCount: (trail20.__POPCORN_LOGS__ ?? []).length,
      };
    },
    getLogs: () => [...(trail20.__POPCORN_LOGS__ ?? [])],
    clearLogs: () => {
      trail20.__POPCORN_LOGS__ = [];
    },
  };
  return (
    (trail20.__POPCORN_DEVTOOLS__ = urn20),
    () => {
      trail20.__POPCORN_DEVTOOLS__ === urn20 &&
        delete trail20.__POPCORN_DEVTOOLS__;
    }
  );
}
var $c = esmInit(() => {
  nest();
  bravo();
  RemoteTextEditSessionG();
});
function el() {
  let azure20 = _workbookT.create(),
    birch20 = azure20.worksheets.add("Sheet1");
  birch20.getRange("A1:B4").values = [
    ["Month", "Revenue"],
    ["Jan", 120],
    ["Feb", 140],
    ["Mar", 165],
  ];
  let canyon20 = birch20.charts.add(
    "ColumnClustered",
    birch20.getRange("A1:B4"),
    "Auto",
  );
  return (
    (canyon20.title.text = "Quarterly revenue"),
    canyon20.setPosition(birch20.getRange("D2")),
    (canyon20.width = 360),
    (canyon20.height = 240),
    azure20.recalculate(),
    azure20
  );
}
var frost3 = esmInit(() => {
    workbookB();
  }),
  glide3 = esmInit(() => {});
function Honey3() {
  return new Worker(
    new URL(
      "" + new URL("runtime.worker-B8x81tEL.js", import.meta.url).href,
      "" + import.meta.url,
    ),
    {
      type: "module",
      name: "popcorn-workbook-worker",
    },
  );
}
var iris3 = esmInit(() => {
    glide3();
    yarn3();
    frost3();
    cedar();
    garnet();
    sage1();
    _r();
    violet();
    seed1();
  }),
  jewel3,
  knoll3 = esmInit(() => {
    jewel3 = {
      meta: {
        workbookVersion: 0,
        showFormulas: false,
        canUndo: false,
        canRedo: false,
      },
      navigation: {
        activeSheetName: "Sheet1",
        sheetNames: ["Sheet1"],
      },
      selection: {
        activeCell: {
          row: 0,
          col: 0,
        },
        selectedAddress: "A1",
        selectionRect: {
          r1: 0,
          c1: 0,
          r2: 0,
          c2: 0,
        },
        selectionRanges: [
          {
            r1: 0,
            c1: 0,
            r2: 0,
            c2: 0,
          },
        ],
        activeRangeIndex: 0,
        selectAllStage: 0,
        isDraggingSelection: false,
        fillPreviewRect: null,
      },
      editor: {
        formulaInput: "",
        editorMode: "grid",
        textLayoutBlocks: [],
        textEditState: null,
      },
      viewport: {
        zoom: 1,
        columnWidths: [],
        rowHeights: [],
        rowIndexRemap: null,
        freezePanes: {
          rowCount: 0,
          columnCount: 0,
        },
        resizeGuide: null,
        camera: {
          x: 0,
          y: 0,
          k: 1,
        },
      },
      overlays: {
        awarenessSelections: [],
        awarenessDrawingSelections: [],
        mergedCells: [],
        sheetTables: [],
        tableFilterOptions: {},
        tableFilters: {},
        tableSorts: {},
        chartSelectionHighlights: [],
        activeDataValidation: null,
        dataValidationTargets: [],
        commentThreads: [],
      },
      floating: {
        selectedFloatingElement: null,
        chartHoverTargets: [],
      },
      find: {
        query: "",
        matches: [],
        total: 0,
      },
      clipboard: {
        copyPayload: null,
        cutPayload: null,
      },
    };
  });
function Lunar3(dew20 = jewel3) {
  return new RemoteTextEditSessionR(dew20);
}
var moss3 = esmInit(() => {
  RemoteTextEditSessionI();
  knoll3();
});
function North3() {
  if (
    !(
      typeof window < "u" &&
      typeof Worker < "u" &&
      typeof HTMLCanvasElement < "u" &&
      typeof OffscreenCanvas < "u"
    )
  )
    throw Error(
      "Popcorn workbook viewport requires Worker and OffscreenCanvas support.",
    );
}
function Orbit3() {
  return Honey3();
}
function Pine3(alpha21, bravo21) {
  return (
    alpha21?.width === bravo21?.width &&
    alpha21?.height === bravo21?.height &&
    alpha21?.dpr === bravo21?.dpr
  );
}
function Quest3(copper21) {
  return copper21
    ? {
        ...copper21,
      }
    : null;
}
function Ridge3(delta21) {
  return delta21
    ? {
        ...delta21,
      }
    : null;
}
function Storm3(echo21, falcon21, gamma21) {
  (gamma21?.resizeIntrinsicBitmap ?? true) &&
    ((echo21.width = Math.max(1, Math.round(falcon21.width * falcon21.dpr))),
    (echo21.height = Math.max(1, Math.round(falcon21.height * falcon21.dpr))));
  echo21.style.width = `${falcon21.width}px`;
  echo21.style.height = `${falcon21.height}px`;
}
function Tide3(harbor21, indigo21) {
  return (
    harbor21.x === indigo21.x &&
    harbor21.y === indigo21.y &&
    harbor21.width === indigo21.width &&
    harbor21.height === indigo21.height
  );
}
function Unity3(jade21, kite21) {
  if (jade21.length !== kite21.length) return false;
  for (let lemon21 = 0; lemon21 < jade21.length; lemon21 += 1) {
    let marble21 = jade21[lemon21],
      nickel21 = kite21[lemon21];
    if (
      !marble21 ||
      !nickel21 ||
      marble21.id !== nickel21.id ||
      marble21.addr !== nickel21.addr ||
      marble21.sheetName !== nickel21.sheetName ||
      !Tide3(marble21.cssBounds, nickel21.cssBounds)
    )
      return false;
  }
  return true;
}
function _l(onyx21, pearl21) {
  if (onyx21.length !== pearl21.length) return false;
  for (let quartz21 = 0; quartz21 < onyx21.length; quartz21 += 1) {
    let river21 = onyx21[quartz21],
      slate21 = pearl21[quartz21];
    if (
      !river21 ||
      !slate21 ||
      river21.kind !== slate21.kind ||
      river21.x !== slate21.x ||
      river21.y !== slate21.y ||
      river21.width !== slate21.width ||
      river21.height !== slate21.height ||
      river21.cx !== slate21.cx ||
      river21.cy !== slate21.cy ||
      river21.rOuter !== slate21.rOuter ||
      river21.rInner !== slate21.rInner ||
      river21.startAngle !== slate21.startAngle ||
      river21.endAngle !== slate21.endAngle ||
      river21.seriesName !== slate21.seriesName ||
      river21.category !== slate21.category ||
      river21.value !== slate21.value ||
      river21.color !== slate21.color ||
      river21.anchorX !== slate21.anchorX ||
      river21.anchorY !== slate21.anchorY ||
      river21.elementId !== slate21.elementId ||
      river21.seriesIndex !== slate21.seriesIndex
    )
      return false;
  }
  return true;
}
