// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 4/19
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
const Azure: any = undefined;
const Falcon1: any = undefined;
const Onyx: any = undefined;
const Quartz: any = undefined;
const Seed: any = undefined;
const Trail: any = undefined;
const Umbra: any = undefined;
const Yarrow: any = undefined;
const frost: any = undefined;
const gamma1: any = undefined;
const indigo1: any = undefined;
const or: any = undefined;
const p: any = undefined;
const u: any = undefined;
const ui: any = undefined;
const violet: any = undefined;
const wind: any = undefined;

var birch,
  canyon = esmInit(() => {
    initAddressMetrics();
    violet();
    wind();
    RemoteTextEditSessionH();
    popcornSurfaceStyle_et();
    frost();
    birch = class {
      #e = {
        current: null,
      };
      #t = {
        current: null,
      };
      #n = {
        current: {
          width: 0,
          height: 0,
          dpr: 0,
        },
      };
      #r = RemoteTextEditSessionM("viewport");
      #i;
      #a = () => {
        this.scheduleViewportCanvasSync();
      };
      #o;
      #s = null;
      #c = null;
      #l = null;
      #u = null;
      #d = null;
      #f = "rgba(2, 133, 255, 0.16)";
      #p;
      #m = false;
      #h = false;
      #g = typeof document > "u" || Seed();
      #_ = true;
      #v = null;
      #y = null;
      #b = false;
      #x = null;
      #S = null;
      #C = 0;
      constructor(hill7) {
        this.#w = hill7.controller;
        this.#p = hill7.accentStroke;
        this.#_ = hill7.isEditing ?? true;
        this.#C = Math.max(0, hill7.bottomScrollReservePx ?? 0);
        this.#o = new popcornSurfaceStyle_ct({
          enabled: true,
          initialCamera: {
            x: 0,
            y: 0,
            k: this.#D().zoom,
          },
          minZoom: 0.25,
          maxZoom: 4,
          getViewportSize: () => {
            let juniper7 = this.#s;
            return {
              width: juniper7?.clientWidth ?? this.#n.current.width,
              height: juniper7?.clientHeight ?? this.#n.current.height,
            };
          },
          getWorldSize: () => {
            let lagoon7 = this.#D(),
              meadow7 = lagoon7.columnWidths.reduce(
                (accumulator, current) => accumulator + current,
                0,
              ),
              nest7 = lagoon7.rowHeights.reduce(
                (accumulator, current) => accumulator + current,
                0,
              );
            return {
              width: meadow7 + 40,
              height: nest7 + 20,
            };
          },
          requestDraw: () => {
            let oak7 = this.#o.getCamera();
            this.#w.setViewportCamera(oak7);
            this.scheduleViewportRedraw();
          },
          screenToWorldPoint: (petal7, quiet7, rain7) => {
            let seed7 = this.#D();
            return Quartz({
              camera: petal7,
              screenX: quiet7,
              screenY: rain7,
              freezePanes: seed7.freezePanes,
              columnWidths: seed7.columnWidths,
              rowHeights: seed7.rowHeights,
            });
          },
          clampCamera: (trail7) => {
            let urn7 = this.#D(),
              vine7 = this.#s;
            return Onyx({
              camera: trail7,
              viewportWidth: vine7?.clientWidth ?? this.#n.current.width,
              viewportHeight: vine7?.clientHeight ?? this.#n.current.height,
              freezePanes: urn7.freezePanes,
              columnWidths: urn7.columnWidths,
              rowHeights: urn7.rowHeights,
              minZoom: 0.25,
              maxZoom: 4,
              bottomScrollReservePx: this.#C,
            });
          },
          onCameraSettled: (wind7) => {
            this.#w.setViewportCamera(wind7);
            this.#w.setZoom(wind7.k);
          },
        });
        let isle7 = this.#w.getState();
        this.#i = this.#w.subscribe(() => {
          let yarrow7 = this.#w.getState(),
            azure7 = yarrow7.viewport !== isle7.viewport,
            birch7 = yarrow7.navigation !== isle7.navigation,
            canyon7 = yarrow7.selection !== isle7.selection,
            dew7 = yarrow7.meta !== isle7.meta,
            alpha8 =
              azure7 ||
              birch7 ||
              dew7 ||
              canyon7 ||
              yarrow7.editor !== isle7.editor ||
              yarrow7.overlays !== isle7.overlays ||
              yarrow7.floating !== isle7.floating;
          isle7 = yarrow7;
          alpha8 &&
            (azure7 && this.#o.setCamera(this.#w.getViewportCamera()),
            this.#E());
        });
        this.#o.setCamera(this.#w.getViewportCamera(), {
          settled: true,
        });
        typeof document < "u" &&
          Trail().then(() => {
            this.#g = true;
            this.syncViewportCanvases();
            this.scheduleViewportRedraw();
          });
      }
      #w;
      setAccentStroke(bravo8) {
        this.#p !== bravo8 &&
          ((this.#p = bravo8),
          this.#w.setViewportAccentStroke(bravo8),
          this.scheduleViewportRedraw());
      }
      setAccentFill(copper8) {
        this.#f !== copper8 &&
          ((this.#f = copper8), this.scheduleViewportRedraw());
      }
      setEditingEnabled(delta8) {
        this.#_ !== delta8 &&
          ((this.#_ = delta8), this.scheduleViewportRedraw());
      }
      setBottomScrollReservePx(echo8) {
        let falcon8 = Math.max(0, echo8);
        this.#C !== falcon8 &&
          ((this.#C = falcon8),
          this.#o.setCamera(this.#o.getCamera(), {
            settled: true,
          }));
      }
      setOverlaySelectionStateProvider(gamma8) {
        this.#v = gamma8;
      }
      setRangeHighlightsProvider(harbor8) {
        this.#y = harbor8;
        this.scheduleViewportRedraw();
      }
      setSuppressCellSelection(indigo8) {
        this.#b !== indigo8 &&
          ((this.#b = indigo8), this.scheduleViewportRedraw());
      }
      setDrawingSelectionProvider(jade8) {
        this.#x = jade8;
      }
      setDrawingOcclusionProvider(kite8) {
        this.#S = kite8;
      }
      attachHost(lemon8) {
        this.#s !== lemon8 &&
          (this.#T(),
          (this.#s = lemon8),
          this.#o.attach(lemon8),
          lemon8 &&
            (typeof ResizeObserver < "u" &&
              ((this.#c = new ResizeObserver(() => {
                this.scheduleViewportCanvasSync();
              })),
              this.#c.observe(lemon8)),
            window.addEventListener("resize", this.#a),
            this.scheduleViewportCanvasSync()));
      }
      attachCanvas(marble8) {
        this.#e.current = marble8;
        this.scheduleViewportCanvasSync();
      }
      attachOverlayCanvas(nickel8) {
        this.#t.current = nickel8;
        this.#h = false;
        this.scheduleViewportCanvasSync();
      }
      getCamera() {
        return this.#o.getCamera();
      }
      subscribeToCameraChanges(onyx8) {
        return this.#o.subscribeToCameraChanges(onyx8);
      }
      shouldSuppressMouseInteractions() {
        return this.#o.shouldSuppressMouseInteractions();
      }
      setCamera(pearl8, quartz8) {
        this.#o.setCamera(pearl8, quartz8);
      }
      zoomTo(river8, slate8) {
        this.#o.zoomTo(river8, slate8);
      }
      panByScroll(timber8, umbra8) {
        this.#o.panByScroll(timber8, umbra8);
      }
      revealCell(violet8, willow8, xenon8) {
        return this.revealSelectionRect(
          {
            r1: violet8,
            c1: willow8,
            r2: violet8,
            c2: willow8,
          },
          {
            paddingPx: xenon8?.paddingPx,
          },
        );
      }
      revealSelectionRect(yellow8, zinc8) {
        let amber8 = this.#s,
          basalt8 = this.#D(),
          cedar8 = this.#o.getCamera(),
          daisy8 = Math.max(cedar8.k, 2.220446049250313e-16),
          ember8 = amber8?.clientWidth ?? this.#n.current.width,
          flint8 = amber8?.clientHeight ?? this.#n.current.height,
          garnet8 = ember8 / daisy8 - 40,
          hazel8 = (flint8 - this.#C) / daisy8 - 20;
        if (garnet8 <= 0 || hazel8 <= 0) return;
        let ivory8 = Yarrow(basalt8.columnWidths),
          jasper8 = Yarrow(basalt8.rowHeights),
          kelp8 = Math.max(
            0,
            Math.min(yellow8.c1, basalt8.columnWidths.length - 1),
          ),
          lotus8 = Math.max(
            0,
            Math.min(yellow8.r1, basalt8.rowHeights.length - 1),
          ),
          mint8 = Math.max(
            kelp8,
            Math.min(
              yellow8.c2 + (zinc8?.trailingContextCols ?? 0),
              basalt8.columnWidths.length - 1,
            ),
          ),
          nova8 = Math.max(
            lotus8,
            Math.min(
              yellow8.r2 + (zinc8?.trailingContextRows ?? 0),
              basalt8.rowHeights.length - 1,
            ),
          ),
          olive8 = ivory8[kelp8] ?? 0,
          prism8 = ivory8[mint8 + 1] ?? olive8,
          quill8 = jasper8[lotus8] ?? 0,
          reef8 = jasper8[nova8 + 1] ?? quill8,
          sage8 = (zinc8?.paddingPx ?? 24) / daisy8,
          topaz8 = ivory8[basalt8.freezePanes.columnCount] ?? 0,
          ultra8 = jasper8[basalt8.freezePanes.rowCount] ?? 0,
          vapor8 = Math.max(0, garnet8 - topaz8),
          wheat8 = Math.max(0, hazel8 - ultra8),
          yarn8 = -cedar8.x / daisy8,
          zephyr8 = -cedar8.y / daisy8;
        if (mint8 >= basalt8.freezePanes.columnCount) {
          let bloom8 = Math.max(olive8, topaz8),
            coral8 = Math.max(0, prism8 - bloom8),
            drift8 = topaz8 + yarn8 + vapor8 - sage8,
            eagle8 = topaz8 + yarn8 + sage8;
          coral8 >= vapor8 - sage8 * 2 || bloom8 < eagle8
            ? (yarn8 = Math.max(0, bloom8 - topaz8 - sage8))
            : prism8 > drift8 &&
              (yarn8 = Math.max(0, prism8 - topaz8 - vapor8 + sage8));
        }
        if (nova8 >= basalt8.freezePanes.rowCount) {
          let frost8 = Math.max(quill8, ultra8),
            glide8 = Math.max(0, reef8 - frost8),
            honey8 = ultra8 + zephyr8 + wheat8 - sage8,
            iris8 = ultra8 + zephyr8 + sage8;
          glide8 >= wheat8 - sage8 * 2 || frost8 < iris8
            ? (zephyr8 = Math.max(0, frost8 - ultra8 - sage8))
            : reef8 > honey8 &&
              (zephyr8 = Math.max(0, reef8 - ultra8 - wheat8 + sage8));
        }
        let acorn8 = {
          x: -yarn8 * daisy8,
          y: -zephyr8 * daisy8,
          k: daisy8,
        };
        return acorn8.x === cedar8.x &&
          acorn8.y === cedar8.y &&
          acorn8.k === cedar8.k
          ? false
          : (this.#o.setCamera(acorn8, {
              settled: true,
            }),
            true);
      }
      scheduleViewportRedraw() {
        this.#l ??= window.requestAnimationFrame(() => {
          this.#l = null;
          this.runViewportRedraw();
        });
      }
      scheduleViewportCanvasSync() {
        this.#u != null && cancelAnimationFrame(this.#u);
        this.#u = requestAnimationFrame(() => {
          this.#u = null;
          let jewel8 = this.syncViewportCanvases();
          if (
            (this.#l != null &&
              (cancelAnimationFrame(this.#l), (this.#l = null)),
            jewel8)
          ) {
            this.#E();
            return;
          }
          this.runViewportRedraw();
        });
      }
      syncViewportCanvases() {
        let knoll8 = this.#s;
        if (!knoll8) return false;
        let lunar8 = knoll8.clientWidth,
          moss8 = knoll8.clientHeight,
          north8 = window.devicePixelRatio || 1,
          orbit8 = {
            width: lunar8,
            height: moss8,
            dpr: north8,
          },
          pine8 = lunar8 > 0 ? Math.round(lunar8 * north8) : 0,
          quest8 = moss8 > 0 ? Math.round(moss8 * north8) : 0,
          ridge8 = `${lunar8}px`,
          storm8 = `${moss8}px`,
          tide8 = this.#t.current;
        tide8 &&
          (tide8.width !== pine8 && (tide8.width = pine8),
          tide8.height !== quest8 && (tide8.height = quest8),
          tide8.style.width !== ridge8 && (tide8.style.width = ridge8),
          tide8.style.height !== storm8 && (tide8.style.height = storm8));
        let unity8 = this.#e.current;
        unity8 &&
          (unity8.width !== pine8 && (unity8.width = pine8),
          unity8.height !== quest8 && (unity8.height = quest8),
          unity8.style.width !== ridge8 && (unity8.style.width = ridge8),
          unity8.style.height !== storm8 && (unity8.style.height = storm8));
        this.#n.current = {
          ...orbit8,
        };
        let vale8 = false;
        return (
          unity8 &&
            !this.#m &&
            lunar8 > 0 &&
            moss8 > 0 &&
            (this.#w.attachViewportCanvas(unity8, {
              width: lunar8,
              height: moss8,
              dpr: north8,
            }),
            (this.#m = true),
            (this.#d = {
              ...orbit8,
            }),
            (vale8 = true)),
          tide8 &&
            !this.#h &&
            lunar8 > 0 &&
            moss8 > 0 &&
            (this.#w.attachViewportOverlayCanvas(tide8, {
              width: lunar8,
              height: moss8,
              dpr: north8,
            }),
            (this.#h = true)),
          Azure(this.#d, orbit8) ||
            (this.#w.resizeViewportCanvas({
              width: lunar8,
              height: moss8,
              dpr: north8,
            }),
            (this.#d = {
              ...orbit8,
            }),
            (vale8 = true)),
          vale8
        );
      }
      runViewportRedraw() {
        if (!this.#g) return;
        let wave8 = this.#o.getCamera();
        this.#w.requestViewportRedraw();
        this.#r.debug("worker-redraw", {
          activeSheetName: this.#D().activeSheetName,
          selection: this.#D().selectedAddress,
          viewportMetrics: this.#n.current,
          zoom: wave8.k,
        });
        this.#E();
      }
      destroy() {
        this.#l != null && (cancelAnimationFrame(this.#l), (this.#l = null));
        this.#u != null && (cancelAnimationFrame(this.#u), (this.#u = null));
        this.#T();
        this.#o.destroy();
        this.#e.current = null;
        this.#t.current = null;
        this.#m = false;
        this.#h = false;
        this.#d = null;
        this.#i();
      }
      #T() {
        this.#c?.disconnect();
        this.#c = null;
        this.#o.attach(null);
        this.#s && window.removeEventListener("resize", this.#a);
        this.#s = null;
      }
      #E() {
        let apex8 = this.#D(),
          brook8 = {
            mergedCells: this.#w.getState().overlays.mergedCells,
          },
          cliff8 = !!apex8.selectedFloatingElement || this.#b;
        or({
          overlayCanvas: this.#t.current,
          camera: this.#o.getCamera(),
          viewportMetrics: this.#n.current,
          syncViewportCanvases: () => this.syncViewportCanvases(),
          activeCell: apex8.activeCell,
          selectionRect: apex8.selectionRect,
          fillPreviewRect: apex8.fillPreviewRect,
          selectionStart: this.#v?.().selectionStart,
          selectionEnd: this.#v?.().selectionEnd,
          rangeHighlights: [...(this.#y?.() ?? [])],
          drawingSelection: this.#x?.() ?? null,
          drawingOcclusionRects: [...(this.#S?.() ?? [])],
          viewColWidths: apex8.columnWidths,
          rowHeights: apex8.rowHeights,
          freezePanes: apex8.freezePanes,
          accentFill: this.#f,
          accentStroke: this.#p,
          sheet: brook8,
          resizeGuide: apex8.resizeGuide,
          showFillHandle: this.#_,
          showDrawingHandles: this.#_,
          suppressCellSelection: cliff8,
        });
      }
      #D() {
        let dusk8 = this.#w.getState();
        return {
          workbookVersion: dusk8.meta.workbookVersion,
          showFormulas: dusk8.meta.showFormulas,
          activeSheetName: dusk8.navigation.activeSheetName,
          activeCell: dusk8.selection.activeCell,
          selectedAddress: dusk8.selection.selectedAddress,
          selectionRect: dusk8.selection.selectionRect,
          fillPreviewRect: dusk8.selection.fillPreviewRect,
          zoom: dusk8.viewport.zoom,
          columnWidths: dusk8.viewport.columnWidths,
          rowHeights: dusk8.viewport.rowHeights,
          freezePanes: dusk8.viewport.freezePanes,
          resizeGuide: dusk8.viewport.resizeGuide,
          selectedFloatingElement: dusk8.floating.selectedFloatingElement
            ? {
                logicalBounds:
                  dusk8.floating.selectedFloatingElement.logicalBounds,
                rotation: dusk8.floating.selectedFloatingElement.rotation,
              }
            : null,
        };
      }
    };
  });
function $r({
  rowIndex,
  colIndex,
  zoom,
  viewColWidths,
  rowHeights,
  initialValue,
  onFocus,
  onChange,
  onCommit,
  onCancel,
  viewport,
  accentColor,
  camera,
  freezePanes,
  sheetName,
}) {
  let elm8 = gamma1.useRef(null),
    fern8 = gamma1.useRef(false),
    grove8 = gamma1.useRef(null),
    hill8 = gamma1.useRef(false),
    [isle8, juniper8] = gamma1.useState(0),
    lagoon8 = gamma1.useMemo(() => Dew(viewColWidths), [viewColWidths]),
    meadow8 = gamma1.useMemo(() => Dew(rowHeights), [rowHeights]),
    nest8 = 40 + (lagoon8[colIndex] ?? 0),
    oak8 = 20 + (meadow8[rowIndex] ?? 0),
    petal8 = Math.max(viewColWidths[colIndex] ?? 0, indigo1),
    quiet8 = Math.max(rowHeights[rowIndex] ?? 0, indigo1),
    rain8 =
      Umbra({
        camera,
        worldX: nest8,
        worldY: oak8,
        width: petal8,
        height: quiet8,
        freezePanes,
        columnWidths: viewColWidths,
        rowHeights,
      })[0] ?? null,
    seed8 = (viewport.scrollLeft + viewport.width) / Math.max(zoom, ui),
    trail8 = (viewport.scrollTop + viewport.height) / Math.max(zoom, ui),
    urn8 = Alpha1(viewColWidths, colIndex),
    vine8 = Alpha1(rowHeights, rowIndex),
    wind8 = Math.max(0, Math.min(seed8 - (nest8 + petal8), urn8 - petal8)),
    yarrow8 = Math.max(0, Math.min(trail8 - (oak8 + quiet8), vine8 - quiet8)),
    azure8 = petal8 + wind8,
    birch8 = quiet8 + yarrow8,
    canyon8 = gamma1.useMemo(
      () =>
        Bravo1({
          sizes: viewColWidths,
          startIndex: colIndex,
          baseSize: petal8,
          limit: azure8,
        }),
      [petal8, colIndex, viewColWidths, azure8],
    ),
    dew8 = gamma1.useMemo(
      () =>
        Bravo1({
          sizes: rowHeights,
          startIndex: rowIndex,
          baseSize: quiet8,
          limit: birch8,
        }),
      [quiet8, birch8, rowHeights, rowIndex],
    ),
    [alpha9, bravo9] = gamma1.useState(canyon8[0] ?? petal8),
    [copper9, delta9] = gamma1.useState(dew8[0] ?? quiet8);
  popcornSurfaceStyle_A(() => {
    bravo9(canyon8[0] ?? petal8);
  }, [petal8, canyon8]);
  popcornSurfaceStyle_A(() => {
    delta9(dew8[0] ?? quiet8);
  }, [quiet8, dew8]);
  popcornSurfaceStyle_A(() => {
    let jade9 = elm8.current,
      kite9 = `${sheetName}:${rowIndex}:${colIndex}`,
      lemon9 = grove8.current !== kite9;
    lemon9 && ((grove8.current = kite9), (hill8.current = false));
    !(!jade9 || fern8.current || (!lemon9 && hill8.current)) &&
      ((jade9.textContent = initialValue),
      jade9.focus(),
      Delta1(jade9),
      juniper8((marble9) => marble9 + 1));
  }, [colIndex, initialValue, rowIndex, sheetName]);
  popcornSurfaceStyle_A(() => {
    let nickel9 = elm8.current;
    if (!nickel9) return;
    let onyx9 =
        Math.max(nickel9.scrollWidth, nickel9.clientWidth) / Math.max(zoom, ui),
      pearl9 =
        Math.max(nickel9.scrollHeight, nickel9.clientHeight) /
        Math.max(zoom, ui),
      quartz9 = Copper1(canyon8, onyx9),
      river9 = Copper1(dew8, pearl9);
    quartz9 && Math.abs(quartz9 - alpha9) > 0.5 && bravo9(quartz9);
    river9 && Math.abs(river9 - copper9) > 0.5 && delta9(river9);
  }, [dew8, copper9, alpha9, isle8, canyon8, zoom]);
  let echo9 = gamma1.useCallback(() => {
      hill8.current = true;
      let slate9 = elm8.current?.textContent ?? "";
      onChange?.(slate9);
      juniper8((timber9) => timber9 + 1);
    }, [onChange]),
    falcon9 = gamma1.useCallback(() => {
      fern8.current ||
        ((fern8.current = true),
        onCommit?.(elm8.current?.textContent ?? "", {
          source: "blur",
        }));
    }, [onCommit]),
    gamma9 = gamma1.useCallback(
      (event) => {
        if (
          (event.stopPropagation(),
          !(event.nativeEvent.isComposing || event.keyCode === 229))
        ) {
          if (fern8.current) {
            event.preventDefault();
            return;
          }
          if (event.key === "Escape") {
            event.preventDefault();
            fern8.current = true;
            onCancel?.();
            return;
          }
          if (event.key === "Enter" && event.altKey) {
            event.preventDefault();
            let umbra9 = elm8.current;
            if (umbra9 == null) return;
            let violet9 = window.getSelection();
            if (
              violet9 == null ||
              violet9.rangeCount === 0 ||
              !umbra9.contains(violet9.getRangeAt(0).commonAncestorContainer)
            ) {
              umbra9.append("\n");
              Delta1(umbra9);
            } else {
              let willow9 = violet9.getRangeAt(0);
              willow9.deleteContents();
              let xenon9 = document.createTextNode("\n");
              willow9.insertNode(xenon9);
              willow9.setStartAfter(xenon9);
              willow9.collapse(true);
              violet9.removeAllRanges();
              violet9.addRange(willow9);
            }
            echo9();
            return;
          }
          (event.key === "Enter" || event.key.startsWith("Arrow")) &&
            (event.preventDefault(),
            (fern8.current = true),
            onCommit?.(elm8.current?.textContent ?? "", {
              source: "keyboard",
              keyboardInput: {
                key: event.key,
                metaKey: event.metaKey,
                ctrlKey: event.ctrlKey,
                altKey: event.altKey,
                shiftKey: event.shiftKey,
              },
            }));
        }
      },
      [echo9, onCancel, onCommit],
    ),
    harbor9 = gamma1.useCallback((event) => {
      event.stopPropagation();
    }, []),
    indigo9 = Echo1(accentColor, 0.1);
  return rain8 ? (
    <div
      data-testid="popcorn-cell-edit-overlay"
      className="border-token-border pointer-events-auto absolute z-30 overflow-hidden border bg-white"
      style={{
        left: rain8.x,
        top: rain8.y,
        width: alpha9 * zoom,
        height: copper9 * zoom,
        outline: indigo9 ? `2px solid ${indigo9}` : undefined,
      }}
      onMouseDown={harbor9}
      onPointerDown={harbor9}
    >
      <div
        ref={elm8}
        role="textbox"
        aria-label="Cell editor"
        aria-multiline="true"
        data-testid="popcorn-cell-editor-input"
        contentEditable={true}
        suppressContentEditableWarning={true}
        spellCheck={false}
        className="text-token-text-primary h-full w-full px-[6px] text-[13px] break-words whitespace-pre-wrap focus:outline-none"
        onInput={echo9}
        onFocus={onFocus}
        onBlur={falcon9}
        onKeyDown={gamma9}
      />
    </div>
  ) : null;
}
function Dew(yellow9) {
  let zinc9 = [0];
  for (let amber9 = 0; amber9 < yellow9.length; amber9 += 1)
    zinc9[amber9 + 1] = (zinc9[amber9] ?? 0) + (yellow9[amber9] ?? 0);
  return zinc9;
}
function Alpha1(basalt9, cedar9) {
  let daisy9 = 0;
  for (let ember9 = cedar9; ember9 < basalt9.length; ember9 += 1)
    daisy9 += Math.max(basalt9[ember9] ?? 0, 0);
  return daisy9;
}
function Bravo1({ sizes, startIndex, baseSize, limit }) {
  let flint9 = [],
    garnet9 = Math.max(baseSize, indigo1);
  flint9.push(garnet9);
  let hazel9 = garnet9;
  for (let ivory9 = startIndex + 1; ivory9 < sizes.length; ivory9 += 1) {
    let jasper9 = Math.max(sizes[ivory9] ?? 0, 0);
    if (
      !(jasper9 <= 0) &&
      ((hazel9 += jasper9),
      flint9.push(Math.min(hazel9, limit)),
      hazel9 >= limit - 0.5)
    )
      break;
  }
  return flint9;
}
function Copper1(kelp9, lotus9) {
  for (let mint9 of kelp9) if (mint9 >= lotus9 - 0.5) return mint9;
  return kelp9[kelp9.length - 1] ?? null;
}
function Delta1(nova9) {
  if (typeof window > "u" || !window.getSelection) return;
  let olive9 = window.getSelection();
  if (!olive9) return;
  let prism9 = document.createRange();
  prism9.selectNodeContents(nova9);
  prism9.collapse(false);
  olive9.removeAllRanges();
  olive9.addRange(prism9);
}
function Echo1(quill9, reef9) {
  let sage9 = Falcon1(quill9);
  return sage9 ? `rgba(${sage9.r}, ${sage9.g}, ${sage9.b}, ${reef9})` : null;
}
