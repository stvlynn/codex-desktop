// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split export-budget 1/2 from part-5
/* split-lane-import-depth:1 */

// Careful split 5/19

import { ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { ensurePersistedAtomInit } from "../../boundaries/persisted-atom";
import { react } from "../../boundaries/react-cjs-runtime";
import {
  _workbookT,
  workbookB,
  workbookL,
  WorkbookR,
  workbookZ,
} from "../../boundaries/workbook-runtime/index";
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
const AppInitialGut: any = undefined;
const IntlProvider: any = undefined;
const Marble: any = undefined;
const Nickel: any = undefined;
const Quartz: any = undefined;
const Slate: any = undefined;
const Umbra: any = undefined;
const _n: any = undefined;
const fetchSettingValue: any = undefined;
const ultra1: any = undefined;
const violet: any = undefined;

function Falcon1(topaz9) {
  let ultra9 = topaz9.match(
    /^rgba?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)/i,
  );
  return ultra9
    ? {
        r: Number(ultra9[1] ?? 0),
        g: Number(ultra9[2] ?? 0),
        b: Number(ultra9[3] ?? 0),
      }
    : null;
}
var gamma1,
  harbor1,
  indigo1,
  ui,
  jade1 = esmInit(() => {
    initAddressMetrics();
    gamma1 = commonJsInit(react());
    violet();
    popcornSurfaceStyle_at();
    indigo1 = 24;
    ui = 1e-4;
  });
function Kite1(vapor9, wheat9, yarn9 = 12) {
  for (let zephyr9 = vapor9.length - 1; zephyr9 >= 0; --zephyr9) {
    let acorn9 = vapor9[zephyr9];
    if (acorn9) {
      if (Lemon1(acorn9.kind)) {
        if (
          acorn9.x === undefined ||
          acorn9.y === undefined ||
          acorn9.width === undefined ||
          acorn9.height === undefined
        )
          continue;
        let bloom9 = acorn9.x + acorn9.width / 2,
          coral9 = acorn9.y + acorn9.height / 2,
          drift9 =
            Math.max(acorn9.width, acorn9.height) / 2 + Math.max(0, yarn9);
        if (
          wheat9.x >= bloom9 - drift9 &&
          wheat9.x <= bloom9 + drift9 &&
          wheat9.y >= coral9 - drift9 &&
          wheat9.y <= coral9 + drift9
        )
          return acorn9;
        continue;
      }
      if (Marble1(acorn9.kind)) {
        if (
          acorn9.x !== undefined &&
          acorn9.y !== undefined &&
          acorn9.width !== undefined &&
          acorn9.height !== undefined &&
          wheat9.x >= acorn9.x &&
          wheat9.x <= acorn9.x + acorn9.width &&
          wheat9.y >= acorn9.y &&
          wheat9.y <= acorn9.y + acorn9.height
        )
          return acorn9;
        continue;
      }
      if (acorn9.kind === "pie" && acorn9.cx != null && acorn9.cy != null) {
        let eagle9 = wheat9.x - acorn9.cx,
          frost9 = wheat9.y - acorn9.cy,
          glide9 = Math.hypot(eagle9, frost9);
        if (glide9 < (acorn9.rInner ?? 0) || glide9 > (acorn9.rOuter ?? 0))
          continue;
        let honey9 = Math.atan2(frost9, eagle9);
        honey9 < 0 && (honey9 += Math.PI * 2);
        let iris9 = acorn9.startAngle ?? 0,
          jewel9 = acorn9.endAngle ?? 0;
        if (
          (iris9 < 0 && (iris9 += Math.PI * 2),
          jewel9 < 0 && (jewel9 += Math.PI * 2),
          iris9 <= jewel9
            ? honey9 >= iris9 && honey9 <= jewel9
            : honey9 >= iris9 || honey9 <= jewel9)
        )
          return acorn9;
      }
    }
  }
  return null;
}
function Lemon1(knoll9) {
  return (
    knoll9 === "scatter-point" ||
    knoll9 === "bubble-point" ||
    knoll9 === "line-point"
  );
}
function Marble1(lunar9) {
  return (
    lunar9 === "bar-vertical" ||
    lunar9 === "bar-horizontal" ||
    lunar9 === "line-point" ||
    lunar9 === "area-point" ||
    lunar9 === "legend"
  );
}
var nickel1 = esmInit(() => {}),
  onyx1 = esmInit(() => {
    nickel1();
  });
function _i({
  canvasRef,
  viewportRef,
  chartTargetsRef,
  getCamera,
  selectedFloatingElement,
  suppressHover = false,
  freezePanes,
  columnWidths,
  rowHeights,
  minPointHitRadius = 12,
  subscribeToPointerEvents,
  subscribeToCameraChanges,
}) {
  let [moss9, north9] = pearl1.useState(null),
    {
      x: _x,
      y: _y,
      strategy: orbit9,
      refs,
      update,
    } = AppInitialGut({
      placement: "top",
      middleware: [
        ensureSettingsQueryAtomsInit(6),
        ensurePersistedAtomInit(),
        readPrefersReducedMotionAtom({
          padding: 8,
        }),
      ],
      whileElementsMounted: buildMemoryFeatureFlags,
      strategy: "fixed",
    }),
    pine9 = pearl1.useRef(null),
    quest9 = pearl1.useRef(false),
    ridge9 = pearl1.useCallback(
      (vale9) => {
        if (vale9 == null && !quest9.current) return;
        let wave9 = vale9 ?? "",
          apex9 = canvasRef.current;
        apex9 && (apex9.style.cursor = wave9);
        let brook9 = viewportRef.current;
        brook9 && (brook9.style.cursor = wave9);
        quest9.current = vale9 != null;
      },
      [canvasRef, viewportRef],
    ),
    storm9 = pearl1.useCallback(() => {
      north9(null);
      ridge9(null);
    }, [ridge9]),
    tide9 =
      suppressHover ||
      selectedFloatingElement?.interactionState === "dragging" ||
      selectedFloatingElement?.interactionState === "resizing" ||
      selectedFloatingElement?.interactionState === "rotating",
    unity9 = pearl1.useCallback(
      (cliff9, dusk9) => {
        if (tide9) {
          storm9();
          return;
        }
        let elm9 = getCamera(),
          fern9 = minPointHitRadius / Math.max(elm9.k, 1e-4),
          grove9 = Kite1(
            chartTargetsRef.current,
            {
              x: cliff9,
              y: dusk9,
            },
            fern9,
          );
        north9(grove9);
        ridge9(grove9 ? "pointer" : null);
      },
      [chartTargetsRef, getCamera, tide9, minPointHitRadius, storm9, ridge9],
    );
  return (
    pearl1.useEffect(() => {
      tide9 && storm9();
    }, [tide9, storm9]),
    pearl1.useEffect(() => {
      if (!moss9 || moss9.kind === "legend" || !canvasRef.current) return;
      let hill9 = canvasRef.current.getBoundingClientRect(),
        isle9 = Slate({
          camera: getCamera(),
          worldX: moss9.anchorX,
          worldY: moss9.anchorY,
          freezePanes,
          columnWidths,
          rowHeights,
        }),
        juniper9 = {
          getBoundingClientRect: () =>
            new DOMRect(hill9.left + isle9.x, hill9.top + isle9.y, 0, 0),
        };
      pine9.current = juniper9;
      refs.setReference(juniper9);
      update?.();
    }, [
      canvasRef,
      columnWidths,
      freezePanes,
      getCamera,
      moss9,
      refs,
      rowHeights,
      update,
    ]),
    pearl1.useEffect(() => {
      if (subscribeToPointerEvents)
        return subscribeToPointerEvents((event) => {
          if (event.type === "pointerLeave") {
            storm9();
            return;
          }
          if (event.type === "pointerDown") {
            storm9();
            return;
          }
          if (event.type === "pointerUp" && event.pointerType !== "mouse") {
            storm9();
            return;
          }
          event.type === "pointerMove" && unity9(event.world.x, event.world.y);
        });
    }, [storm9, subscribeToPointerEvents, unity9]),
    pearl1.useEffect(() => {
      if (subscribeToPointerEvents) return;
      let lagoon9 = canvasRef.current;
      if (!lagoon9) return;
      let meadow9 = (event) => {
          let oak9 = lagoon9.getBoundingClientRect(),
            petal9 = Quartz({
              camera: getCamera(),
              screenX: event.clientX - oak9.left,
              screenY: event.clientY - oak9.top,
              freezePanes,
              columnWidths,
              rowHeights,
            });
          unity9(petal9.x, petal9.y);
        },
        nest9 = () => storm9();
      return (
        lagoon9.addEventListener("mousemove", meadow9),
        lagoon9.addEventListener("mouseleave", nest9),
        () => {
          lagoon9.removeEventListener("mousemove", meadow9);
          lagoon9.removeEventListener("mouseleave", nest9);
          storm9();
        }
      );
    }, [
      canvasRef,
      storm9,
      subscribeToPointerEvents,
      unity9,
      getCamera,
      columnWidths,
      freezePanes,
      rowHeights,
    ]),
    pearl1.useEffect(() => {
      if (subscribeToCameraChanges)
        return subscribeToCameraChanges(() => {
          storm9();
        });
    }, [storm9, subscribeToCameraChanges]),
    !moss9 || moss9.kind === "legend" ? null : (
      <div
        ref={refs.setFloating}
        style={{
          position: orbit9,
          left: _x ?? 0,
          top: _y ?? 0,
          zIndex: 1e3,
        }}
        className="pointer-events-none font-sans"
        data-testid="popcorn-chart-hover-tooltip"
      >
        <div
          className={IntlProvider(
            "bg-token-main-surface-primary text-token-text-primary relative rounded-lg border px-2 py-1.5",
            river1,
          )}
          style={{
            borderColor: slate1,
          }}
        >
          <div className="flex w-full flex-col px-1 py-0.5 text-xs leading-tight">
            <div className="me-6 w-full min-w-[88px]">
              {moss9.category ?? moss9.seriesName ?? ""}
            </div>
          </div>
          <div
            className="mt-0.5 flex flex-col border-t border-solid pt-2"
            style={{
              borderTopColor: slate1,
            }}
          >
            <div className="flex flex-row items-stretch px-1 py-0 text-xs leading-tight">
              <div className="flex items-center">
                <div
                  className="me-1.5 h-2 w-2 rounded-[2px]"
                  style={{
                    backgroundColor: moss9.color ?? "transparent",
                  }}
                />
                <div className="me-6 min-w-[88px]">
                  {moss9.seriesName ?? ""}
                </div>
              </div>
              <div className="grow text-end">{moss9.value}</div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
var pearl1,
  quartz1,
  river1,
  slate1,
  timber1 = esmInit(() => {
    fetchSettingValue();
    onyx1();
    ensureComposerEsm_Tft_Init();
    pearl1 = commonJsInit(react());
    violet();
    river1 =
      "shadow-[0_5px_8px_3px_rgba(0,0,0,0.025),_0_0.5px_1px_0px_rgba(0,0,0,0.045)]";
    slate1 = "rgba(13, 13, 13, 0.08)";
  });
function Umbra1({
  open,
  values,
  selectedValue,
  targetBounds,
  onSelect,
  onClose,
}) {
  let quiet9 = violet1.useRef(null);
  return (
    violet1.useEffect(() => {
      if (!open) return;
      let rain9 = (event) => {
          let trail9 = event.target;
          trail9 instanceof Node &&
            (quiet9.current?.contains(trail9) || onClose());
        },
        seed9 = (event) => {
          event.key === "Escape" && onClose();
        };
      return (
        window.addEventListener("pointerdown", rain9, true),
        window.addEventListener("keydown", seed9),
        () => {
          window.removeEventListener("pointerdown", rain9, true);
          window.removeEventListener("keydown", seed9);
        }
      );
    }, [onClose, open]),
    !open || !targetBounds || values.length === 0 ? null : (
      <div
        ref={quiet9}
        data-testid="popcorn-data-validation-overlay"
        className="border-token-border-light bg-token-bg-primary pointer-events-auto absolute z-30 w-48 overflow-hidden rounded-xl border shadow-lg"
        style={{
          left: targetBounds.x,
          top: targetBounds.y + targetBounds.height + 4,
        }}
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="max-h-56 overflow-auto py-1">
          {values.map((item) => (
            <button
              key={item}
              type="button"
              className={IntlProvider(
                "text-token-text-primary hover:bg-token-bg-secondary flex w-full items-center px-3 py-1.5 text-left text-sm",
                item === selectedValue && "bg-token-bg-secondary font-medium",
              )}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                onSelect(item);
              }}
            >
              <span className="block truncate">{item}</span>
            </button>
          ))}
        </div>
      </div>
    )
  );
}
var violet1,
  willow1,
  xenon1 = esmInit(() => {
    violet1 = commonJsInit(react());
    ensureComposerEsm_Tft_Init();
  });
function Yellow1(urn9, vine9) {
  return Math.max(0, Math.min(vine9, urn9));
}
function Zinc1({
  hostRef,
  camera,
  freezePanes,
  columnWidths,
  rowHeights,
  onCommit,
}) {
  let [wind9, yarrow9] = amber1.useState(null),
    [azure9, birch9] = amber1.useState(null),
    [canyon9, dew9] = amber1.useState(null),
    alpha10 = amber1.useMemo(() => Marble(columnWidths), [columnWidths]),
    bravo10 = amber1.useMemo(() => Marble(rowHeights), [rowHeights]),
    copper10 = wind9 ?? freezePanes,
    delta10 = amber1.useMemo(
      () =>
        Nickel({
          freezePanes: copper10,
          columnWidths,
          rowHeights,
        }),
      [columnWidths, copper10, rowHeights],
    ),
    echo10 = Math.max(camera.k, 1e-4),
    falcon10 = delta10.freezeLineX * echo10,
    gamma10 = delta10.freezeLineY * echo10,
    harbor10 = 40 * echo10,
    indigo10 = 20 * echo10,
    jade10 =
      canyon9 === "column" || azure9?.axis === "column" ? daisy1 : cedar1,
    kite10 = canyon9 === "row" || azure9?.axis === "row" ? daisy1 : cedar1,
    lemon10 = amber1.useCallback(
      (event, nickel10) => {
        let onyx10 = hostRef.current;
        if (!onyx10) return nickel10.baseFreezePanes;
        let pearl10 = onyx10.getBoundingClientRect(),
          quartz10 = event.clientX - pearl10.left,
          river10 = event.clientY - pearl10.top;
        if (nickel10.axis === "column" && quartz10 <= 40 * echo10)
          return {
            ...nickel10.baseFreezePanes,
            columnCount: 0,
          };
        if (nickel10.axis === "row" && river10 <= 20 * echo10)
          return {
            ...nickel10.baseFreezePanes,
            rowCount: 0,
          };
        let slate10 = Quartz({
          camera,
          screenX: quartz10,
          screenY: river10,
          freezePanes: nickel10.baseFreezePanes,
          columnWidths,
          rowHeights,
        });
        return nickel10.axis === "column"
          ? {
              ...nickel10.baseFreezePanes,
              columnCount: Yellow1(
                _n(alpha10, Math.max(0, slate10.x - 40)),
                columnWidths.length,
              ),
            }
          : {
              ...nickel10.baseFreezePanes,
              rowCount: Yellow1(
                _n(bravo10, Math.max(0, slate10.y - 20)),
                rowHeights.length,
              ),
            };
      },
      [
        camera,
        alpha10,
        columnWidths.length,
        hostRef,
        rowHeights,
        bravo10,
        echo10,
      ],
    );
  amber1.useEffect(() => {
    if (!azure9) return;
    let timber10 = (violet10) => {
        yarrow9(lemon10(violet10, azure9));
      },
      umbra10 = (willow10) => {
        let xenon10 = lemon10(willow10, azure9);
        yarrow9(null);
        birch9(null);
        (xenon10.rowCount !== freezePanes.rowCount ||
          xenon10.columnCount !== freezePanes.columnCount) &&
          onCommit(xenon10);
      };
    return (
      window.addEventListener("mousemove", timber10),
      window.addEventListener("mouseup", umbra10),
      () => {
        window.removeEventListener("mousemove", timber10);
        window.removeEventListener("mouseup", umbra10);
      }
    );
  }, [azure9, freezePanes, onCommit, lemon10]);
  let marble10 = amber1.useCallback(
    (yellow10) => (event) => {
      event.preventDefault();
      event.stopPropagation();
      let zinc10 = {
        ...freezePanes,
      };
      birch9({
        axis: yellow10,
        baseFreezePanes: zinc10,
      });
      yarrow9(zinc10);
    },
    [freezePanes],
  );
  return (
    <div className="pointer-events-none absolute inset-0 z-30">
      {(copper10.columnCount > 0 || azure9?.axis === "column") && (
        <>
          <div
            aria-hidden="true"
            data-testid="popcorn-freeze-column-line"
            className="absolute top-0 bottom-0"
            style={{
              left: falcon10 - ember1 / 2,
              width: ember1,
              backgroundColor: jade10,
            }}
          />
          <div
            data-testid="popcorn-freeze-column-handle"
            className="pointer-events-auto absolute top-0 bottom-0"
            style={{
              left: falcon10 - flint1 / 2,
              width: flint1,
              cursor: azure9?.axis === "column" ? "grabbing" : "grab",
            }}
            onMouseEnter={() => {
              dew9("column");
            }}
            onMouseLeave={() => {
              dew9((amber10) => (amber10 === "column" ? null : amber10));
            }}
            onMouseDown={marble10("column")}
          />
        </>
      )}
      {(copper10.rowCount > 0 || azure9?.axis === "row") && (
        <>
          <div
            aria-hidden="true"
            data-testid="popcorn-freeze-row-line"
            className="absolute start-0 end-0"
            style={{
              top: gamma10 - ember1 / 2,
              height: ember1,
              backgroundColor: kite10,
            }}
          />
          <div
            data-testid="popcorn-freeze-row-handle"
            className="pointer-events-auto absolute start-0 end-0"
            style={{
              top: gamma10 - flint1 / 2,
              height: flint1,
              cursor: azure9?.axis === "row" ? "grabbing" : "grab",
            }}
            onMouseEnter={() => {
              dew9("row");
            }}
            onMouseLeave={() => {
              dew9((basalt10) => (basalt10 === "row" ? null : basalt10));
            }}
            onMouseDown={marble10("row")}
          />
        </>
      )}
      {copper10.columnCount === 0 && azure9?.axis !== "column" ? (
        <div
          data-testid="popcorn-freeze-column-parked-handle"
          className="pointer-events-auto absolute"
          style={{
            left: harbor10 - flint1 / 2,
            top: 0,
            width: flint1,
            height: 20 * echo10,
            cursor: "grab",
          }}
          onMouseEnter={() => {
            dew9("column");
          }}
          onMouseLeave={() => {
            dew9((cedar10) => (cedar10 === "column" ? null : cedar10));
          }}
          onMouseDown={marble10("column")}
        >
          <div
            className="absolute"
            style={{
              left: (flint1 - ember1) / 2,
              top: 0,
              width: ember1,
              height: 20 * echo10,
              backgroundColor: jade10,
            }}
          />
        </div>
      ) : null}
      {copper10.rowCount === 0 && azure9?.axis !== "row" ? (
        <div
          data-testid="popcorn-freeze-row-parked-handle"
          className="pointer-events-auto absolute"
          style={{
            left: 0,
            top: indigo10 - flint1 / 2,
            width: 40 * echo10,
            height: flint1,
            cursor: "grab",
          }}
          onMouseEnter={() => {
            dew9("row");
          }}
          onMouseLeave={() => {
            dew9((daisy10) => (daisy10 === "row" ? null : daisy10));
          }}
          onMouseDown={marble10("row")}
        >
          <div
            className="absolute"
            style={{
              left: 0,
              top: (flint1 - ember1) / 2,
              width: 40 * echo10,
              height: ember1,
              backgroundColor: kite10,
            }}
          />
        </div>
      ) : null}
    </div>
  );
}
var amber1,
  basalt1,
  cedar1,
  daisy1,
  ember1,
  flint1,
  garnet1 = esmInit(() => {
    amber1 = commonJsInit(react());
    initAddressMetrics();
    violet();
    cedar1 = "rgba(15, 23, 42, 0.32)";
    daisy1 = "rgba(96, 165, 250, 0.95)";
    ember1 = 1;
    flint1 = 18;
  });
function Hazel1({ className }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.4707 5.8623C4.73038 5.60262 5.15142 5.60262 5.4111 5.8623L8 8.45117L10.5889 5.8623L10.6992 5.77246C10.9709 5.59336 11.34 5.62322 11.5791 5.8623C11.8182 6.10138 11.848 6.47052 11.6689 6.74219L11.5791 6.85254L8.49512 9.93652C8.22175 10.2099 7.77825 10.2099 7.50488 9.93652L4.4209 6.85254C4.16122 6.59286 4.16122 6.17198 4.4209 5.91211L4.4707 5.8623Z" />
    </svg>
  );
}
function Ivory1({ className }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M7.50488 6.06348C7.76455 5.804 8.18545 5.804 8.44531 6.06348L11.5293 9.14746L11.6191 9.25781C11.7982 9.52948 11.7684 9.89862 11.5293 10.1377C11.2902 10.3768 10.921 10.4066 10.6494 10.2275L10.5391 10.1377L8 7.59863L5.46094 10.1377C5.18757 10.411 4.74407 10.411 4.4707 10.1377C4.19733 9.86429 4.19733 9.42079 4.4707 9.14746L7.50488 6.06348Z" />
    </svg>
  );
}
