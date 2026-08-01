// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 1/19
/* split-lane-import-depth:1 */

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
  popcornSurfaceStyle_B as PopcornSurfaceStyle_B,
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
  popcornSurfaceStyle_mt as PopcornSurfaceStyle_mt,
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
const deferredDesktopErt: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/popover-primitives.tsx) */
const AppInitialFrt: any = undefined;
/** Wave FZ unresolved companion (missing-export:settings/settings-ipc.ts) */
const fetchSettingValue: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:usingCtx@vendor/babel-runtime-using-ctx.ts) */
const AppInitialGut: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureD3ShapeStackOrderInit@workbook/ensure-d3-shape-stack-order-init.ts) */
const AppInitialHrt: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-iit.ts) */
const deferredUiIit: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/popover-primitives.tsx) */
const PopoverPrimitiveTrigger: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensurePopoverPrimitivesInit@ui/popover-primitives.tsx) */
const AppInitialLrt: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:joinStringsOrNull@utils/join-strings-or-null.ts) */
const AppInitialMrt: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/popover-primitives.tsx) */
const AppInitialNrt: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/popover-primitives.tsx) */
const AppInitialPrt: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredHostsRt@hosts/deferred-hosts-rt.ts) */
const AppInitialRt: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FZ unresolved companion (sib-missing:boundaries/d3-hierarchy.ts) */
const p: any = undefined;
/** Wave FZ unresolved companion (sib-missing:boundaries/d3-hierarchy.ts) */
const u: any = undefined;
function Alpha(reef4) {
  return {
    workbookVersion: reef4.meta.workbookVersion,
    showFormulas: reef4.meta.showFormulas,
    canUndo: reef4.meta.canUndo,
    canRedo: reef4.meta.canRedo,
    activeSheetName: reef4.navigation.activeSheetName,
    sheetNames: [...reef4.navigation.sheetNames],
    activeCell: {
      ...reef4.selection.activeCell,
    },
    selectedAddress: reef4.selection.selectedAddress,
    selectionRect: {
      ...reef4.selection.selectionRect,
    },
    selectionRanges: reef4.selection.selectionRanges.map((item) => ({
      ...item,
    })),
    activeRangeIndex: reef4.selection.activeRangeIndex,
    selectAllStage: reef4.selection.selectAllStage,
    isDraggingSelection: reef4.selection.isDraggingSelection,
    fillPreviewRect: reef4.selection.fillPreviewRect
      ? {
          ...reef4.selection.fillPreviewRect,
        }
      : null,
    formulaInput: reef4.editor.formulaInput,
    editorMode: reef4.editor.editorMode,
    zoom: reef4.viewport.zoom,
    columnWidths: [...reef4.viewport.columnWidths],
    rowHeights: [...reef4.viewport.rowHeights],
    rowIndexRemap: reef4.viewport.rowIndexRemap
      ? [...reef4.viewport.rowIndexRemap]
      : null,
    freezePanes: {
      ...reef4.viewport.freezePanes,
    },
    resizeGuide: reef4.viewport.resizeGuide
      ? {
          ...reef4.viewport.resizeGuide,
        }
      : null,
    tableFilters: {
      ...reef4.overlays.tableFilters,
    },
    tableSorts: {
      ...reef4.overlays.tableSorts,
    },
    selectedFloatingElement: reef4.floating.selectedFloatingElement
      ? {
          ...reef4.floating.selectedFloatingElement,
          logicalBounds: {
            ...reef4.floating.selectedFloatingElement.logicalBounds,
          },
        }
      : null,
  };
}
var bravo = esmInit(() => {});
function Copper({ controller, children }) {
  return (
    <gamma.Provider
      {...{
        value: controller,
        children,
      }}
    />
  );
}
function on() {
  let sage4 = echo.useContext(gamma);
  if (!sage4) throw Error("PopcornEditorProvider is required");
  return sage4;
}
function Delta() {
  let topaz4 = on(),
    ultra4 = echo.useSyncExternalStore(
      (vapor4) => topaz4.subscribe(vapor4),
      () => topaz4.getState(),
      () => topaz4.getState(),
    );
  return echo.useMemo(() => Alpha(ultra4), [ultra4]);
}
var echo,
  falcon,
  gamma,
  harbor = esmInit(() => {
    echo = commonJsInit(react());
    bravo();
    gamma = echo.createContext(null);
  });
function Indigo(wheat4) {
  let yarn4 = [],
    zephyr4 = [],
    acorn4 = [];
  for (let bloom4 of wheat4) {
    yarn4.push(...(bloom4.toolbarActions ?? []));
    zephyr4.push(...(bloom4.panels ?? []));
    acorn4.push(...(bloom4.viewportOverlays ?? []));
  }
  return {
    toolbarActions: yarn4,
    panels: zephyr4,
    viewportOverlays: acorn4,
  };
}
var jade = esmInit(() => {});
function Kite(coral4, drift4) {
  let eagle4 = 0;
  for (let frost4 = 0; frost4 < drift4; frost4 += 1)
    eagle4 += coral4[frost4] ?? 0;
  return eagle4;
}
function Lemon(glide4) {
  if (!(glide4.size > 0)) return [];
  let honey4 = glide4.start + glide4.size,
    iris4 = glide4.headerSize + glide4.frozenBodySize,
    jewel4 = [],
    knoll4 = Math.min(honey4, iris4);
  knoll4 > glide4.start &&
    jewel4.push({
      start: glide4.start,
      size: knoll4 - glide4.start,
    });
  let lunar4 = Math.max(glide4.start, iris4);
  if (honey4 > lunar4) {
    let moss4 = lunar4 - glide4.scroll,
      north4 = honey4 - glide4.scroll,
      orbit4 = Math.max(moss4, iris4);
    north4 > orbit4 &&
      jewel4.push({
        start: orbit4,
        size: north4 - orbit4,
      });
  }
  return jewel4;
}
function Marble(pine4) {
  let quest4 = [0];
  for (let ridge4 = 0; ridge4 < pine4.length; ridge4 += 1)
    quest4[ridge4 + 1] = (quest4[ridge4] ?? 0) + (pine4[ridge4] ?? 0);
  return quest4;
}
function _n(storm4, tide4) {
  let unity4 = Math.max(0, tide4),
    vale4 = 0,
    wave4 = 1 / 0;
  for (let apex4 = 0; apex4 < storm4.length; apex4 += 1) {
    let brook4 = storm4[apex4] ?? 0,
      cliff4 = Math.abs(brook4 - unity4);
    cliff4 < wave4 && ((vale4 = apex4), (wave4 = cliff4));
  }
  return vale4;
}
function Nickel(dusk4) {
  let elm4 = Kite(dusk4.columnWidths, dusk4.freezePanes.columnCount),
    fern4 = Kite(dusk4.rowHeights, dusk4.freezePanes.rowCount);
  return {
    frozenBodyWidth: elm4,
    frozenBodyHeight: fern4,
    freezeLineX: 40 + elm4,
    freezeLineY: 20 + fern4,
  };
}
function Onyx(grove4) {
  let hill4 = Math.min(
      grove4.maxZoom,
      Math.max(grove4.minZoom, grove4.camera.k),
    ),
    isle4 = Nickel(grove4),
    juniper4 = Math.max(0, grove4.viewportWidth / hill4 - 40),
    lagoon4 = Math.max(0, grove4.viewportHeight / hill4 - 20),
    meadow4 = Math.max(0, grove4.bottomScrollReservePx ?? 0) / hill4,
    nest4 = Kite(grove4.columnWidths, grove4.columnWidths.length),
    oak4 = Kite(grove4.rowHeights, grove4.rowHeights.length),
    petal4 = Math.max(0, nest4 - isle4.frozenBodyWidth),
    quiet4 = Math.max(0, oak4 - isle4.frozenBodyHeight),
    rain4 = Math.max(0, juniper4 - isle4.frozenBodyWidth),
    seed4 = Math.max(0, lagoon4 - isle4.frozenBodyHeight),
    trail4 = Math.max(0, petal4 - rain4),
    urn4 = Math.max(0, quiet4 + meadow4 - seed4),
    vine4 = popcornSurfaceStyle_ct({
      ...grove4.camera,
      k: hill4,
    }),
    wind4 = Math.min(trail4, Math.max(0, vine4.left)),
    yarrow4 = Math.min(urn4, Math.max(0, vine4.top));
  return {
    x: -wind4 * hill4,
    y: -yarrow4 * hill4,
    k: hill4,
  };
}
function Pearl(azure4) {
  let birch4 = popcornSurfaceStyle_ct(azure4.camera),
    canyon4 = Nickel(azure4),
    dew4 = azure4.logicalX - 40,
    alpha5 = azure4.logicalY - 20,
    bravo5 = azure4.logicalX >= 0 && azure4.logicalX < 40,
    copper5 = azure4.logicalY >= 0 && azure4.logicalY < 20,
    delta5 =
      azure4.freezePanes.columnCount > 0 &&
      dew4 >= 0 &&
      dew4 < canyon4.frozenBodyWidth,
    echo5 =
      azure4.freezePanes.rowCount > 0 &&
      alpha5 >= 0 &&
      alpha5 < canyon4.frozenBodyHeight,
    falcon5 =
      bravo5 || delta5
        ? dew4
        : canyon4.frozenBodyWidth +
          (dew4 - canyon4.frozenBodyWidth) +
          birch4.left,
    gamma5 =
      copper5 || echo5
        ? alpha5
        : canyon4.frozenBodyHeight +
          (alpha5 - canyon4.frozenBodyHeight) +
          birch4.top;
  return {
    x: bravo5 ? azure4.logicalX : 40 + falcon5,
    y: copper5 ? azure4.logicalY : 20 + gamma5,
  };
}
function Quartz(event) {
  let harbor5 = Math.max(event.camera.k, 2.220446049250313e-16);
  return Pearl({
    camera: event.camera,
    logicalX: event.screenX / harbor5,
    logicalY: event.screenY / harbor5,
    freezePanes: event.freezePanes,
    columnWidths: event.columnWidths,
    rowHeights: event.rowHeights,
  });
}
function River(indigo5) {
  let jade5 = popcornSurfaceStyle_ct(indigo5.camera),
    kite5 = Nickel(indigo5),
    lemon5 = indigo5.worldX - 40,
    marble5 = indigo5.worldY - 20,
    nickel5 = indigo5.worldX >= 0 && indigo5.worldX < 40,
    onyx5 = indigo5.worldY >= 0 && indigo5.worldY < 20,
    pearl5 =
      indigo5.freezePanes.columnCount > 0 &&
      lemon5 >= 0 &&
      lemon5 < kite5.frozenBodyWidth,
    quartz5 =
      indigo5.freezePanes.rowCount > 0 &&
      marble5 >= 0 &&
      marble5 < kite5.frozenBodyHeight,
    river5 =
      nickel5 || pearl5
        ? lemon5
        : kite5.frozenBodyWidth + (lemon5 - kite5.frozenBodyWidth) - jade5.left,
    slate5 =
      onyx5 || quartz5
        ? marble5
        : kite5.frozenBodyHeight +
          (marble5 - kite5.frozenBodyHeight) -
          jade5.top;
  return {
    x: nickel5 ? indigo5.worldX : 40 + river5,
    y: onyx5 ? indigo5.worldY : 20 + slate5,
  };
}
function Slate(timber5) {
  let umbra5 = River(timber5);
  return {
    x: umbra5.x * timber5.camera.k,
    y: umbra5.y * timber5.camera.k,
  };
}
function Timber(violet5) {
  let willow5 = Math.max(violet5.camera.k, 2.220446049250313e-16),
    xenon5 = -violet5.camera.x / willow5,
    yellow5 = -violet5.camera.y / willow5,
    zinc5 = Lemon({
      start: violet5.worldX,
      size: violet5.width,
      headerSize: 40,
      frozenBodySize: Kite(
        violet5.columnWidths,
        violet5.freezePanes.columnCount,
      ),
      scroll: xenon5,
    }),
    amber5 = Lemon({
      start: violet5.worldY,
      size: violet5.height,
      headerSize: 20,
      frozenBodySize: Kite(violet5.rowHeights, violet5.freezePanes.rowCount),
      scroll: yellow5,
    }),
    basalt5 = [];
  for (let cedar5 of zinc5)
    for (let daisy5 of amber5)
      basalt5.push({
        x: cedar5.start,
        y: daisy5.start,
        width: cedar5.size,
        height: daisy5.size,
      });
  return basalt5;
}
function Umbra(ember5) {
  return Timber(ember5).map((item) => ({
    x: item.x * ember5.camera.k,
    y: item.y * ember5.camera.k,
    width: item.width * ember5.camera.k,
    height: item.height * ember5.camera.k,
  }));
}
var violet = esmInit(() => {
  initAddressMetrics();
  popcornSurfaceStyle_nt();
});
function Willow(flint5, garnet5, hazel5) {
  return Math.min(hazel5, Math.max(garnet5, flint5));
}
function Xenon({
  threads,
  camera,
  freezePanes,
  columnWidths,
  rowHeights,
  isEditing,
  onReply,
  onResolve,
  onReopen,
  onDeleteThread,
  onToggleReaction,
  onEditComment,
  onDeleteComment,
}) {
  let [ivory5, jasper5] = yellow.useState(null);
  return (
    yellow.useEffect(() => {
      ivory5 &&
        (threads.some((item) => item.threadId === ivory5) || jasper5(null));
    }, [ivory5, threads]),
    (
      <>
        {yellow
          .useMemo(
            () =>
              threads
                .map((item) => {
                  let kelp5 = Umbra({
                    camera,
                    worldX:
                      40 +
                      columnWidths
                        .slice(0, item.target.startCol)
                        .reduce(
                          (accumulator, current) => accumulator + current,
                          0,
                        ),
                    worldY:
                      20 +
                      rowHeights
                        .slice(0, item.target.startRow)
                        .reduce(
                          (accumulator, current) => accumulator + current,
                          0,
                        ),
                    width: columnWidths[item.target.startCol] ?? 0,
                    height: rowHeights[item.target.startRow] ?? 0,
                    freezePanes,
                    columnWidths,
                    rowHeights,
                  })[0];
                  return !kelp5 || kelp5.width <= 0 || kelp5.height <= 0
                    ? null
                    : {
                        thread: item,
                        rect: kelp5,
                        indicatorSize: Willow(Math.round(camera.k * 6), 5, 10),
                        hotspotSize: Willow(Math.round(camera.k * 14), 14, 22),
                        targetRef:
                          item.target.startAddress === item.target.endAddress
                            ? item.target.startAddress
                            : `${item.target.startAddress}:${item.target.endAddress}`,
                      };
                })
                .filter((item) => item != null),
            [camera, columnWidths, freezePanes, rowHeights, threads],
          )
          .map(({ thread, rect, indicatorSize, hotspotSize, targetRef }) => {
            let lotus5 = ivory5 === thread.threadId,
              mint5 = thread.status === "resolved" ? "#94A3B8" : "#339CFF";
            return (
              <PopcornSurfaceStyle_B
                key={thread.threadId}
                {...{
                  open: lotus5,
                  onOpenChange: (nova5) => {
                    jasper5(nova5 ? thread.threadId : null);
                  },
                  trigger: (
                    <button
                      type="button"
                      data-testid={`popcorn-workbook-thread-trigger-${thread.threadId}`}
                      aria-label={`Open comment thread for ${thread.label}`}
                      className="pointer-events-auto absolute z-[24] overflow-visible border-0 bg-transparent p-0"
                      style={{
                        left: rect.x + Math.max(0, rect.width - hotspotSize),
                        top: rect.y,
                        width: hotspotSize,
                        height: hotspotSize,
                      }}
                      onMouseDown={(event) => {
                        event.stopPropagation();
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                        jasper5((olive5) =>
                          olive5 === thread.threadId ? null : thread.threadId,
                        );
                      }}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute right-0 top-0"
                        style={{
                          width: 0,
                          height: 0,
                          borderTop: `${indicatorSize}px solid ${mint5}`,
                          borderLeft: `${indicatorSize}px solid transparent`,
                        }}
                      />
                    </button>
                  ),
                  content: (
                    <PopcornSurfaceStyle_mt
                      {...{
                        targetPrimaryLabel: targetRef,
                        targetSecondaryLabel: thread.sheetName,
                        status: thread.status,
                        resolvedByName: thread.resolvedBy?.displayName ?? null,
                        resolvedAt: thread.resolvedAt,
                        comments: thread.comments,
                        isEditing,
                        viewerAuthorId: thread.viewerAuthorId,
                        onReply: onReply
                          ? (prism5) => {
                              onReply(thread.threadId, prism5);
                            }
                          : undefined,
                        onResolve: onResolve
                          ? () => {
                              onResolve(thread.threadId);
                            }
                          : undefined,
                        onReopen: onReopen
                          ? () => {
                              onReopen(thread.threadId);
                            }
                          : undefined,
                        onDeleteThread: onDeleteThread
                          ? () => {
                              onDeleteThread(thread.threadId);
                            }
                          : undefined,
                        onToggleReaction: onToggleReaction
                          ? (quill5, reef5) => {
                              onToggleReaction(thread.threadId, quill5, reef5);
                            }
                          : undefined,
                        onEditComment: onEditComment
                          ? (sage5, topaz5) => {
                              onEditComment(thread.threadId, sage5, topaz5);
                            }
                          : undefined,
                        onDeleteComment: onDeleteComment
                          ? (ultra5) => {
                              onDeleteComment(thread.threadId, ultra5);
                            }
                          : undefined,
                      }}
                    />
                  ),
                }}
              />
            );
          })}
      </>
    )
  );
}
var yellow,
  zinc,
  amber = esmInit(() => {
    yellow = commonJsInit(react());
    initAddressMetrics();
    violet();
    popcornSurfaceStyle_pt();
  });
function Basalt(vapor5) {
  let wheat5 = [0];
  for (let yarn5 of vapor5)
    wheat5.push((wheat5[wheat5.length - 1] ?? 0) + yarn5);
  return wheat5;
}
var cedar = esmInit(() => {});
function Daisy(zephyr5) {
  return Ember({
    ...zephyr5,
    sizePx: 6,
  });
}
function Ember(acorn5) {
  let bloom5 = Math.min(
      Math.max(acorn5.selectionRect.c1, acorn5.selectionRect.c2),
      acorn5.colWidths.length - 1,
    ),
    coral5 = Math.min(
      Math.max(acorn5.selectionRect.r1, acorn5.selectionRect.r2),
      acorn5.rowHeights.length - 1,
    );
  if (bloom5 < 0 || coral5 < 0) return null;
  let drift5 = Basalt(acorn5.colWidths),
    eagle5 = Basalt(acorn5.rowHeights),
    frost5 = River({
      camera: acorn5.camera,
      worldX: 40 + (drift5[bloom5 + 1] ?? 0),
      worldY: 20 + (eagle5[coral5 + 1] ?? 0),
      freezePanes: acorn5.freezePanes,
      columnWidths: acorn5.colWidths,
      rowHeights: acorn5.rowHeights,
    }),
    glide5 = Math.max(acorn5.camera.k, 2.220446049250313e-16),
    honey5 = acorn5.sizePx / glide5;
  return {
    left: frost5.x - honey5 / 2,
    top: frost5.y - honey5 / 2,
    width: honey5,
    height: honey5,
  };
}
function Flint(event) {
  let iris5 = Ember({
      selectionRect: event.selectionRect,
      colWidths: event.colWidths,
      rowHeights: event.rowHeights,
      camera: event.camera,
      freezePanes: event.freezePanes,
      sizePx: 12,
    }),
    jewel5 = Math.max(event.camera.k, 2.220446049250313e-16);
  return !!(
    iris5 &&
    event.screenX >= iris5.left * jewel5 &&
    event.screenX <= (iris5.left + iris5.width) * jewel5 &&
    event.screenY >= iris5.top * jewel5 &&
    event.screenY <= (iris5.top + iris5.height) * jewel5
  );
}
var garnet = esmInit(() => {
  violet();
  cedar();
  initAddressMetrics();
});
function Hazel(knoll5) {
  let lunar5 = [0];
  for (let moss5 = 0; moss5 < knoll5.length; moss5 += 1)
    lunar5[moss5 + 1] = (lunar5[moss5] ?? 0) + (knoll5[moss5] ?? 0);
  return lunar5;
}
function Ivory(north5) {
  let orbit5 = Math.max(0, Math.min(north5.c1, north5.c2)),
    pine5 = Math.min(
      north5.viewColWidths.length - 1,
      Math.max(north5.c1, north5.c2),
    ),
    quest5 = Math.max(0, Math.min(north5.r1, north5.r2)),
    ridge5 = Math.min(
      north5.rowHeights.length - 1,
      Math.max(north5.r1, north5.r2),
    );
  return orbit5 > pine5 || quest5 > ridge5
    ? null
    : {
        cStart: orbit5,
        cEnd: pine5,
        rStart: quest5,
        rEnd: ridge5,
      };
}
function Jasper(storm5) {
  let tide5 = new Map();
  for (let unity5 of storm5?.mergedCells ?? []) {
    let vale5 = lettersToColIndex(unity5.startAddress),
      wave5 = rowTokenToIndex(unity5.startAddress),
      apex5 = lettersToColIndex(unity5.endAddress),
      brook5 = rowTokenToIndex(unity5.endAddress),
      cliff5 = {
        r1: Math.min(wave5, brook5),
        c1: Math.min(vale5, apex5),
        r2: Math.max(wave5, brook5),
        c2: Math.max(vale5, apex5),
      };
    for (let dusk5 = cliff5.r1; dusk5 <= cliff5.r2; dusk5 += 1)
      for (let elm5 = cliff5.c1; elm5 <= cliff5.c2; elm5 += 1)
        tide5.set(`${dusk5}:${elm5}`, cliff5);
  }
  return tide5;
}
function Kelp(fern5, grove5, hill5, isle5, juniper5, lagoon5) {
  let meadow5 = Math.max(0, Math.min(lagoon5, isle5 / 2, juniper5 / 2));
  fern5.beginPath();
  fern5.moveTo(grove5 + meadow5, hill5);
  fern5.arcTo(grove5 + isle5, hill5, grove5 + isle5, hill5 + juniper5, meadow5);
  fern5.arcTo(
    grove5 + isle5,
    hill5 + juniper5,
    grove5,
    hill5 + juniper5,
    meadow5,
  );
  fern5.arcTo(grove5, hill5 + juniper5, grove5, hill5, meadow5);
  fern5.arcTo(grove5, hill5, grove5 + isle5, hill5, meadow5);
  fern5.closePath();
}
function Lotus(nest5) {
  let { ctx, camera } = nest5,
    oak5 = Math.max(camera.k, 2.220446049250313e-16),
    petal5 = -camera.x / oak5,
    quiet5 = -camera.y / oak5,
    { width, height, dpr } = nest5.viewportMetrics;
  if (width <= 0 || height <= 0 || dpr <= 0) return null;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);
  let rain5 = width / oak5 - 40,
    seed5 = height / oak5 - 20,
    trail5 = rain5 > 0 && seed5 > 0;
  return {
    ctx,
    camera,
    freezePanes: nest5.freezePanes,
    viewColWidths: nest5.viewColWidths,
    rowHeights: nest5.rowHeights,
    zoom: oak5,
    scrollLeft: petal5,
    scrollTop: quiet5,
    viewportW: width,
    viewportH: height,
    gridBodyWidth: rain5,
    gridBodyHeight: seed5,
    hasGridBody: trail5,
    applyGridBodyClip: (urn5) =>
      trail5
        ? (urn5.beginPath(), urn5.rect(40, 20, rain5, seed5), urn5.clip(), true)
        : false,
    intersectsGridBody: (vine5, wind5, yarrow5, azure5) =>
      trail5 &&
      yarrow5 > 0 &&
      azure5 > 0 &&
      vine5 + yarrow5 > 40 &&
      vine5 < 40 + rain5 &&
      wind5 + azure5 > 20 &&
      wind5 < 20 + seed5,
  };
}
function Mint(birch5) {
  if (!birch5.selectionStart || !birch5.selectionEnd) return null;
  let r1 = Math.min(birch5.selectionStart.row, birch5.selectionEnd.row),
    r2 = Math.max(birch5.selectionStart.row, birch5.selectionEnd.row),
    c1 = Math.min(birch5.selectionStart.col, birch5.selectionEnd.col),
    c2 = Math.max(birch5.selectionStart.col, birch5.selectionEnd.col);
  birch5.selectionStart.row === birch5.selectionEnd.row &&
    birch5.selectionStart.col === birch5.selectionEnd.col &&
    ({ r1, c1, r2, c2 } = birch5.resolveMergedRect({
      r1: birch5.selectionStart.row,
      c1: birch5.selectionStart.col,
      r2: birch5.selectionStart.row,
      c2: birch5.selectionStart.col,
    }));
  let canyon5 = River({
      camera: birch5.camera,
      worldX: 40 + (birch5.colOffsets[c1] ?? 0),
      worldY: 20 + (birch5.rowOffsets[r1] ?? 0),
      freezePanes: birch5.freezePanes,
      columnWidths: birch5.viewColWidths,
      rowHeights: birch5.rowHeights,
    }),
    dew5 = River({
      camera: birch5.camera,
      worldX: 40 + (birch5.colOffsets[birch5.selectionStart.col] ?? 0),
      worldY: 20 + (birch5.rowOffsets[birch5.selectionStart.row] ?? 0),
      freezePanes: birch5.freezePanes,
      columnWidths: birch5.viewColWidths,
      rowHeights: birch5.rowHeights,
    });
  return {
    r1,
    c1,
    r2,
    c2,
    x: canyon5.x,
    y: canyon5.y,
    w: (birch5.colOffsets[c2 + 1] ?? 0) - (birch5.colOffsets[c1] ?? 0),
    h: (birch5.rowOffsets[r2 + 1] ?? 0) - (birch5.rowOffsets[r1] ?? 0),
    ax: dew5.x,
    ay: dew5.y,
    aw: birch5.viewColWidths[birch5.selectionStart.col] ?? 0,
    ah: birch5.rowHeights[birch5.selectionStart.row] ?? 0,
  };
}
