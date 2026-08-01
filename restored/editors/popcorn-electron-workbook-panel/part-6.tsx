// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 6/19
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
const Jasper1: any = undefined;
const Quartz: any = undefined;
const Topaz1: any = undefined;
const quill1: any = undefined;
const sage1: any = undefined;
const violet: any = undefined;

var ultra1,
  vapor1 = esmInit(() => {
    initAddressMetrics();
    ultra1 = commonJsInit(react());
    violet();
    sage1();
  });
function Wheat1(storm10) {
  let tide10 = [0];
  for (let unity10 = 0; unity10 < storm10.length; unity10 += 1)
    tide10[unity10 + 1] = (tide10[unity10] ?? 0) + (storm10[unity10] ?? 0);
  return tide10;
}
function Yarn1({
  sheetName,
  tables,
  filterOptionsByColumn,
  viewColWidths,
  rowHeights,
  zoom,
  camera,
  freezePanes,
  activeFilters,
  activeSortByTable,
  onSetFilterValues,
  onSetSort,
}) {
  let [vale10, wave10] = zephyr1.useState(null),
    apex10 = zephyr1.useMemo(() => Wheat1(viewColWidths), [viewColWidths]),
    brook10 = zephyr1.useMemo(() => Wheat1(rowHeights), [rowHeights]),
    cliff10 = Topaz1(
      {
        name: sheetName,
        tables,
      },
      viewColWidths,
      rowHeights,
      apex10,
      brook10,
      activeFilters,
      activeSortByTable,
      camera,
      freezePanes,
    ),
    dusk10 = zephyr1.useCallback(() => {
      wave10(null);
    }, []);
  return cliff10.length === 0 ? null : (
    <>
      {cliff10.map((item) => {
        let elm10 =
            vale10?.tableId === item.tableId && vale10?.colIdx === item.colIdx,
          fern10 =
            filterOptionsByColumn[
              `${sheetName}:${item.tableId}:${item.colIdx}`
            ] ?? [];
        return (
          <Jasper1
            key={item.key}
            {...{
              btn: item,
              isOpen: elm10,
              onOpen: () => {
                wave10({
                  tableId: item.tableId,
                  colIdx: item.colIdx,
                });
              },
              onClose: dusk10,
              zoom,
              values: fern10,
              selectedValues: activeFilters[
                `${sheetName}:${item.tableId}:${item.colIdx}`
              ]
                ? new Set(
                    activeFilters[
                      `${sheetName}:${item.tableId}:${item.colIdx}`
                    ],
                  )
                : undefined,
              onToggleValue: (grove10) => {
                let hill10 = `${sheetName}:${item.tableId}:${item.colIdx}`,
                  isle10 = new Set(activeFilters[hill10] ?? fern10);
                if (
                  (isle10.has(grove10)
                    ? isle10.delete(grove10)
                    : isle10.add(grove10),
                  isle10.size === fern10.length)
                ) {
                  onSetFilterValues(item.tableId, item.colIdx, null);
                  return;
                }
                onSetFilterValues(item.tableId, item.colIdx, [...isle10]);
              },
              onSelectAll: () => {
                onSetFilterValues(item.tableId, item.colIdx, null);
              },
              onSort: (juniper10) => {
                onSetSort(item.tableId, {
                  colIdx: item.colIdx,
                  dir: juniper10,
                });
              },
              filterSortTitle: acorn1.filterSortTitle,
              filterHeaderLabel: acorn1.filterHeaderLabel,
              noDiscreteValuesLabel: acorn1.noDiscreteValuesLabel,
              selectAllLabel: acorn1.selectAllLabel,
              sortAZLabel: acorn1.sortAZLabel,
              sortZALabel: acorn1.sortZALabel,
            }}
          />
        );
      })}
    </>
  );
}
var zephyr1,
  $i,
  acorn1,
  bloom1 = esmInit(() => {
    zephyr1 = commonJsInit(react());
    quill1();
    vapor1();
    acorn1 = {
      filterSortTitle: "Filter & sort",
      filterHeaderLabel: "Filter",
      noDiscreteValuesLabel: "No discrete values",
      selectAllLabel: "Select all",
      sortAZLabel: "Sort A→Z",
      sortZALabel: "Sort Z→A",
    };
  });
function Coral1(lagoon10, meadow10) {
  let nest10 = 0;
  for (let oak10 = 0; oak10 < meadow10; oak10 += 1)
    nest10 += lagoon10[oak10] ?? 0;
  return nest10;
}
function Drift1(petal10, quiet10, rain10) {
  return Math.min(rain10, Math.max(quiet10, petal10));
}
function Eagle1(seed10) {
  return Drift1(seed10, 0, 1);
}
function Frost1(trail10) {
  let urn10 = trail10.axis === "horizontal",
    vine10 = Math.max(trail10.zoom, 2.220446049250313e-16),
    wind10 = urn10 ? trail10.columnWidths : trail10.rowHeights,
    yarrow10 = wind10.reduce(
      (accumulator, current) => accumulator + current,
      0,
    ),
    azure10 = urn10
      ? 0
      : Math.max(0, trail10.bottomScrollReservePx ?? 0) / vine10,
    birch10 = Coral1(
      wind10,
      urn10 ? trail10.freezePanes.columnCount : trail10.freezePanes.rowCount,
    ),
    canyon10 = urn10 ? 40 : 20,
    dew10 = urn10 ? trail10.viewportWidth : trail10.viewportHeight,
    alpha11 = birch10 * vine10,
    bravo11 = urn10 ? trail10.verticalVisible : trail10.horizontalVisible,
    copper11 = canyon10 + alpha11 + lunar1,
    delta11 = Math.max(0, dew10 - copper11 - lunar1 - (bravo11 ? 10 : 0));
  if (delta11 <= 0) return null;
  let echo11 = Math.max(0, dew10 / vine10 - canyon10),
    falcon11 = Math.max(0, echo11 - birch10),
    gamma11 = Math.max(0, yarrow10 + azure10 - birch10),
    harbor11 = Math.max(0, gamma11 - falcon11);
  if (harbor11 <= 0 || gamma11 <= 0 || falcon11 <= 0) return null;
  let indigo11 = Drift1(
      urn10 ? trail10.scrollLeft : trail10.scrollTop,
      0,
      harbor11,
    ),
    jade11 = harbor11 > 0 ? indigo11 / harbor11 : 0,
    kite11 = Drift1(delta11 * Eagle1(falcon11 / gamma11), moss1, delta11),
    lemon11 = Math.max(0, delta11 - kite11) * jade11,
    marble11 = copper11 + lemon11,
    nickel11 = Drift1(
      kite11 + (Math.max(kite11, delta11 * north1) - kite11) * (1 - jade11),
      moss1,
      delta11,
    ),
    onyx11 = Math.max(0, delta11 - nickel11),
    pearl11 = Drift1(onyx11 * orbit1 + lemon11 * (1 - orbit1), 0, onyx11);
  return {
    axis: trail10.axis,
    visible: true,
    trackStart: copper11,
    trackLength: delta11,
    thickness: knoll1,
    maxScroll: harbor11,
    actualThumbStart: marble11,
    actualThumbLength: kite11,
    displayThumbStart: copper11 + pearl11,
    displayThumbLength: nickel11,
    edgeInset: pine1,
  };
}
function Glide1(quartz11) {
  let river11 = popcornSurfaceStyle_ct(quartz11.camera),
    slate11 = Frost1({
      axis: "horizontal",
      viewportWidth: quartz11.viewportWidth,
      viewportHeight: quartz11.viewportHeight,
      zoom: quartz11.camera.k,
      scrollLeft: river11.left,
      scrollTop: river11.top,
      columnWidths: quartz11.columnWidths,
      rowHeights: quartz11.rowHeights,
      freezePanes: quartz11.freezePanes,
      horizontalVisible: false,
      verticalVisible: false,
    }),
    timber11 = Frost1({
      axis: "vertical",
      viewportWidth: quartz11.viewportWidth,
      viewportHeight: quartz11.viewportHeight,
      zoom: quartz11.camera.k,
      scrollLeft: river11.left,
      scrollTop: river11.top,
      columnWidths: quartz11.columnWidths,
      rowHeights: quartz11.rowHeights,
      freezePanes: quartz11.freezePanes,
      horizontalVisible: false,
      verticalVisible: false,
      bottomScrollReservePx: quartz11.bottomScrollReservePx,
    }),
    umbra11 = slate11 != null,
    violet11 = timber11 != null;
  return {
    horizontal: Frost1({
      axis: "horizontal",
      viewportWidth: quartz11.viewportWidth,
      viewportHeight: quartz11.viewportHeight,
      zoom: quartz11.camera.k,
      scrollLeft: river11.left,
      scrollTop: river11.top,
      columnWidths: quartz11.columnWidths,
      rowHeights: quartz11.rowHeights,
      freezePanes: quartz11.freezePanes,
      horizontalVisible: umbra11,
      verticalVisible: violet11,
    }),
    vertical: Frost1({
      axis: "vertical",
      viewportWidth: quartz11.viewportWidth,
      viewportHeight: quartz11.viewportHeight,
      zoom: quartz11.camera.k,
      scrollLeft: river11.left,
      scrollTop: river11.top,
      columnWidths: quartz11.columnWidths,
      rowHeights: quartz11.rowHeights,
      freezePanes: quartz11.freezePanes,
      horizontalVisible: umbra11,
      verticalVisible: violet11,
      bottomScrollReservePx: quartz11.bottomScrollReservePx,
    }),
  };
}
function Honey1(willow11) {
  let xenon11 = Math.max(
      0,
      willow11.metrics.trackLength - willow11.snapshot.displayThumbLength,
    ),
    yellow11 = Drift1(
      willow11.snapshot.displayThumbStart -
        willow11.snapshot.trackStart +
        (willow11.metrics.actualThumbStart -
          willow11.snapshot.actualThumbStart),
      0,
      xenon11,
    );
  return {
    displayThumbStart: willow11.metrics.trackStart + yellow11,
    displayThumbLength: willow11.snapshot.displayThumbLength,
    edgeInset: willow11.snapshot.edgeInset,
  };
}
function Iris1(zinc11, amber11) {
  let basalt11 = Drift1(
    amber11 - zinc11.displayThumbStart,
    0,
    zinc11.displayThumbLength,
  );
  return (
    (zinc11.displayThumbLength > 0 ? basalt11 / zinc11.displayThumbLength : 0) *
    zinc11.actualThumbLength
  );
}
function Jewel1(cedar11) {
  let daisy11 = Math.max(
    0,
    cedar11.metrics.trackLength - cedar11.metrics.actualThumbLength,
  );
  return daisy11 <= 0 || cedar11.metrics.maxScroll <= 0
    ? 0
    : (Drift1(
        cedar11.pointerPos - cedar11.metrics.trackStart - cedar11.grabOffset,
        0,
        daisy11,
      ) /
        daisy11) *
        cedar11.metrics.maxScroll;
}
var knoll1,
  lunar1,
  moss1,
  north1,
  orbit1,
  pine1,
  quest1 = esmInit(() => {
    popcornSurfaceStyle_nt();
    initAddressMetrics();
    knoll1 = 6;
    lunar1 = 4;
    moss1 = 28;
    north1 = 0.8;
    orbit1 = 0.8;
    pine1 = 4;
  });
function _a(ember11, flint11, garnet11) {
  return ember11
    ? !flint11 || flint11.axis !== garnet11
      ? ember11
      : {
          ...ember11,
          ...Honey1({
            metrics: ember11,
            snapshot: flint11.snapshot,
          }),
        }
    : null;
}
function Ridge1({
  host,
  camera,
  viewportSizeStore,
  columnWidths,
  rowHeights,
  freezePanes,
  bottomScrollReservePx,
  onSetLogicalScroll,
}) {
  let { width, height } = storm1.useSyncExternalStore(
      viewportSizeStore.subscribe,
      viewportSizeStore.getSnapshot,
      viewportSizeStore.getSnapshot,
    ),
    [hazel11, ivory11] = storm1.useState(null),
    [jasper11, kelp11] = storm1.useState(false),
    lotus11 = storm1.useRef(camera),
    mint11 = storm1.useRef(null),
    nova11 = storm1.useCallback(() => {
      kelp11(true);
      mint11.current != null && window.clearTimeout(mint11.current);
      mint11.current = window.setTimeout(() => {
        kelp11(false);
        mint11.current = null;
      }, apex1);
    }, []),
    olive11 = storm1.useMemo(
      () =>
        Glide1({
          camera,
          viewportWidth: width,
          viewportHeight: height,
          columnWidths,
          rowHeights,
          freezePanes,
          bottomScrollReservePx,
        }),
      [
        bottomScrollReservePx,
        camera,
        columnWidths,
        freezePanes,
        rowHeights,
        height,
        width,
      ],
    ),
    prism11 = storm1.useMemo(
      () => _a(olive11.vertical, hazel11, "vertical"),
      [hazel11, olive11.vertical],
    ),
    quill11 = storm1.useMemo(
      () => _a(olive11.horizontal, hazel11, "horizontal"),
      [hazel11, olive11.horizontal],
    ),
    reef11 = jasper11 || hazel11 != null;
  return (
    storm1.useEffect(
      () => () => {
        mint11.current != null && window.clearTimeout(mint11.current);
      },
      [],
    ),
    storm1.useEffect(() => {
      let sage11 = lotus11.current,
        topaz11 =
          sage11.x !== camera.x ||
          sage11.y !== camera.y ||
          sage11.k !== camera.k;
      lotus11.current = camera;
      topaz11 && nova11();
    }, [nova11, camera]),
    storm1.useEffect(() => {
      if (!hazel11 || !host) return;
      let ultra11 = (event) => {
          if (event.pointerId !== hazel11.pointerId) return;
          let wheat11 = host.getBoundingClientRect(),
            yarn11 =
              hazel11.axis === "horizontal"
                ? event.clientX - wheat11.left
                : event.clientY - wheat11.top,
            zephyr11 =
              hazel11.axis === "horizontal"
                ? olive11.horizontal
                : olive11.vertical;
          if (!zephyr11) return;
          let acorn11 = Jewel1({
            metrics: zephyr11,
            pointerPos: yarn11,
            grabOffset: hazel11.grabOffset,
          });
          hazel11.axis === "horizontal"
            ? onSetLogicalScroll({
                left: acorn11,
              })
            : onSetLogicalScroll({
                top: acorn11,
              });
          event.preventDefault();
        },
        vapor11 = (event) => {
          if ("pointerId" in event && event.pointerId !== hazel11.pointerId)
            return;
          let bloom11 =
            hazel11.axis === "horizontal"
              ? olive11.horizontal
              : olive11.vertical;
          if (bloom11 && "clientX" in event && host) {
            let coral11 = host.getBoundingClientRect(),
              drift11 = Jewel1({
                metrics: bloom11,
                pointerPos:
                  hazel11.axis === "horizontal"
                    ? event.clientX - coral11.left
                    : event.clientY - coral11.top,
                grabOffset: hazel11.grabOffset,
              });
            hazel11.axis === "horizontal"
              ? onSetLogicalScroll({
                  left: drift11,
                  settled: true,
                })
              : onSetLogicalScroll({
                  top: drift11,
                  settled: true,
                });
          }
          ivory11(null);
          nova11();
        };
      return (
        window.addEventListener("pointermove", ultra11, {
          passive: false,
        }),
        window.addEventListener("pointerup", vapor11),
        window.addEventListener("pointercancel", vapor11),
        window.addEventListener("blur", vapor11),
        () => {
          window.removeEventListener("pointermove", ultra11);
          window.removeEventListener("pointerup", vapor11);
          window.removeEventListener("pointercancel", vapor11);
          window.removeEventListener("blur", vapor11);
        }
      );
    }, [
      nova11,
      hazel11,
      host,
      onSetLogicalScroll,
      olive11.horizontal,
      olive11.vertical,
    ]),
    (
      <>
        {prism11 ? (
          <div
            data-testid="popcorn-scrollbar-vertical"
            className="pointer-events-auto absolute"
            style={{
              top: prism11.displayThumbStart,
              right: prism11.edgeInset,
              width: prism11.thickness,
              height: prism11.displayThumbLength,
              borderRadius: vale1,
              background: unity1,
              opacity: +!!reef11,
              pointerEvents: reef11 ? "auto" : "none",
              transition: `opacity ${wave1}ms ease`,
              touchAction: "none",
            }}
            onPointerDown={(event) => {
              !host ||
                !olive11.vertical ||
                (event.preventDefault(),
                event.stopPropagation(),
                nova11(),
                ivory11({
                  axis: "vertical",
                  pointerId: event.pointerId,
                  grabOffset: Iris1(
                    olive11.vertical,
                    event.clientY - host.getBoundingClientRect().top,
                  ),
                  snapshot: {
                    trackStart: olive11.vertical.trackStart,
                    actualThumbStart: olive11.vertical.actualThumbStart,
                    displayThumbStart: olive11.vertical.displayThumbStart,
                    displayThumbLength: olive11.vertical.displayThumbLength,
                    edgeInset: olive11.vertical.edgeInset,
                  },
                }));
            }}
          />
        ) : null}
        {quill11 ? (
          <div
            data-testid="popcorn-scrollbar-horizontal"
            className="pointer-events-auto absolute"
            style={{
              left: quill11.displayThumbStart,
              bottom: quill11.edgeInset,
              width: quill11.displayThumbLength,
              height: quill11.thickness,
              borderRadius: vale1,
              background: unity1,
              opacity: +!!reef11,
              pointerEvents: reef11 ? "auto" : "none",
              transition: `opacity ${wave1}ms ease`,
              touchAction: "none",
            }}
            onPointerDown={(event) => {
              !host ||
                !olive11.horizontal ||
                (event.preventDefault(),
                event.stopPropagation(),
                nova11(),
                ivory11({
                  axis: "horizontal",
                  pointerId: event.pointerId,
                  grabOffset: Iris1(
                    olive11.horizontal,
                    event.clientX - host.getBoundingClientRect().left,
                  ),
                  snapshot: {
                    trackStart: olive11.horizontal.trackStart,
                    actualThumbStart: olive11.horizontal.actualThumbStart,
                    displayThumbStart: olive11.horizontal.displayThumbStart,
                    displayThumbLength: olive11.horizontal.displayThumbLength,
                    edgeInset: olive11.horizontal.edgeInset,
                  },
                }));
            }}
          />
        ) : null}
      </>
    )
  );
}
var storm1,
  tide1,
  unity1,
  vale1,
  wave1,
  apex1,
  brook1 = esmInit(() => {
    storm1 = commonJsInit(react());
    quest1();
    unity1 = "rgba(0, 0, 0, 0.35)";
    vale1 = 9999;
    wave1 = 160;
    apex1 = 700;
  });
function Cliff1(eagle11) {
  let frost11 = Math.max(eagle11.zoom, 2.220446049250313e-16),
    glide11 = eagle11.start + fern1,
    honey11 = eagle11.end - fern1;
  return eagle11.pointer < glide11
    ? -Math.max(
        grove1 / frost11,
        Math.min(hill1 / frost11, (glide11 - eagle11.pointer) / frost11),
      )
    : eagle11.pointer > honey11
      ? Math.max(
          grove1 / frost11,
          Math.min(hill1 / frost11, (eagle11.pointer - honey11) / frost11),
        )
      : 0;
}
function Dusk1(event) {
  return {
    deltaLeft: Cliff1({
      pointer: event.clientX,
      start: event.containerRect.left,
      end: event.containerRect.right,
      zoom: event.zoom,
    }),
    deltaTop: Cliff1({
      pointer: event.clientY,
      start: event.containerRect.top,
      end: event.containerRect.bottom,
      zoom: event.zoom,
    }),
  };
}
function Elm1(iris11) {
  let jewel11 = null,
    knoll11 = null,
    lunar11 = true,
    moss11 = () => {
      if (((jewel11 = null), !lunar11 || !knoll11)) return;
      let orbit11 = iris11.containerRef.current;
      if (!orbit11) return;
      let pine11 = Dusk1({
        clientX: knoll11.clientX,
        clientY: knoll11.clientY,
        containerRect: orbit11.getBoundingClientRect(),
        zoom: iris11.getZoom(),
      });
      (pine11.deltaLeft !== 0 || pine11.deltaTop !== 0) &&
        (iris11.panViewportBy(pine11.deltaLeft, pine11.deltaTop),
        iris11.onAutoScrollFrame(knoll11.clientX, knoll11.clientY));
      lunar11 && (jewel11 = window.requestAnimationFrame(moss11));
    },
    north11 = () => {
      jewel11 != null ||
        !lunar11 ||
        (jewel11 = window.requestAnimationFrame(moss11));
    };
  return {
    updatePointer(quest11, ridge11) {
      knoll11 = {
        clientX: quest11,
        clientY: ridge11,
      };
      north11();
    },
    stop() {
      lunar11 = false;
      knoll11 = null;
      jewel11 != null &&
        (window.cancelAnimationFrame(jewel11), (jewel11 = null));
    },
  };
}
var fern1,
  grove1,
  hill1,
  isle1 = esmInit(() => {
    fern1 = 24;
    grove1 = 2;
    hill1 = 24;
  });
function Juniper1(storm11, tide11) {
  return storm11 === tide11
    ? true
    : storm11 == null || tide11 == null
      ? false
      : storm11.r1 === tide11.r1 &&
        storm11.c1 === tide11.c1 &&
        storm11.r2 === tide11.r2 &&
        storm11.c2 === tide11.c2;
}
function Lagoon1(unity11, vale11) {
  return (
    unity11.isDragging === vale11.isDragging &&
    unity11.rangeAddress === vale11.rangeAddress &&
    unity11.rows === vale11.rows &&
    unity11.cols === vale11.cols &&
    Juniper1(unity11.rect, vale11.rect)
  );
}
function Meadow1() {
  let wave11 = oak1,
    apex11 = new Set();
  return {
    getSnapshot: () => wave11,
    subscribe: (brook11) => (
      apex11.add(brook11),
      () => {
        apex11.delete(brook11);
      }
    ),
    publish: (cliff11) => {
      if (!Lagoon1(wave11, cliff11)) {
        wave11 = cliff11;
        for (let dusk11 of apex11) dusk11();
      }
    },
  };
}
function Nest1(elm11, fern11) {
  let grove11 = {
      r1: Math.min(elm11.r1, elm11.r2),
      c1: Math.min(elm11.c1, elm11.c2),
      r2: Math.max(elm11.r1, elm11.r2),
      c2: Math.max(elm11.c1, elm11.c2),
    },
    hill11 = grove11.r2 - grove11.r1 + 1,
    isle11 = grove11.c2 - grove11.c1 + 1,
    juniper11 = `${colIndexToLetters(grove11.c1)}${grove11.r1 + 1}`,
    lagoon11 = `${colIndexToLetters(grove11.c2)}${grove11.r2 + 1}`;
  return {
    isDragging: fern11,
    rect: grove11,
    rangeAddress:
      juniper11 === lagoon11 ? juniper11 : `${juniper11}:${lagoon11}`,
    rows: hill11,
    cols: isle11,
  };
}
var oak1,
  petal1,
  quiet1 = esmInit(() => {
    initAddressMetrics();
    oak1 = Object.freeze({
      isDragging: false,
      rect: null,
      rangeAddress: "",
      rows: 1,
      cols: 1,
    });
    petal1 = {
      getSnapshot: () => oak1,
      subscribe: () => () => {},
    };
  });
function Rain1(meadow11) {
  let { logicalX, logicalY, viewColWidths, rowHeights } = meadow11,
    nest11 = 4 / Math.max(meadow11.zoom, 1e-4);
  if (logicalY >= 0 && logicalY <= 20 && logicalX > 40) {
    let oak11 = logicalX - 40,
      petal11 = 0;
    for (let quiet11 = 0; quiet11 < viewColWidths.length; quiet11 += 1)
      if (
        ((petal11 += viewColWidths[quiet11] ?? 0),
        Math.abs(petal11 - oak11) <= nest11)
      )
        return {
          type: "col",
          index: quiet11,
          cursor: "col-resize",
          boundaryPos: 40 + petal11,
          tolerance: nest11,
        };
  }
  if (logicalX >= 0 && logicalX <= 40 && logicalY > 20) {
    let rain11 = logicalY - 20,
      seed11 = 0;
    for (let trail11 = 0; trail11 < rowHeights.length; trail11 += 1)
      if (
        ((seed11 += rowHeights[trail11] ?? 0),
        Math.abs(seed11 - rain11) <= nest11)
      )
        return {
          type: "row",
          index: trail11,
          cursor: "row-resize",
          boundaryPos: 20 + seed11,
          tolerance: nest11,
        };
  }
  return null;
}
var seed1 = esmInit(() => {
  initAddressMetrics();
});
function Trail1(event, urn11, vine11, wind11, yarrow11, azure11, birch11) {
  let canyon11 = urn11.current;
  if (!canyon11 || vine11.current) return null;
  let dew11 = canyon11.getBoundingClientRect(),
    alpha12 = wind11(),
    bravo12 = Quartz({
      camera: alpha12,
      screenX: event.clientX - dew11.left,
      screenY: event.clientY - dew11.top,
      freezePanes: birch11,
      columnWidths: yarrow11,
      rowHeights: azure11,
    }),
    copper12 = bravo12.x,
    delta12 = bravo12.y,
    echo12 = Rain1({
      logicalX: copper12,
      logicalY: delta12,
      zoom: alpha12.k,
      viewColWidths: yarrow11,
      rowHeights: azure11,
    });
  try {
    canyon11.style.cursor = echo12?.cursor ?? "";
  } catch {}
  return echo12?.cursor ?? null;
}
var urn1 = esmInit(() => {
  violet();
  seed1();
});
