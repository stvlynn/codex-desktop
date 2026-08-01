// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 16/19
/* split-lane-import-depth:1 */
// Late methods attached via attachWorkbookControllerLateMethods (part-24).
import { attachWorkbookControllerLateMethods } from "./part-24";

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
const Lunar3: any = undefined;
const Meadow1: any = undefined;
const Nest1: any = undefined;
const North3: any = undefined;
const Orbit3: any = undefined;
const Pine3: any = undefined;
const Quest3: any = undefined;
const Ridge3: any = undefined;
const Storm3: any = undefined;
const Trail: any = undefined;
const Unity3: any = undefined;
const _l: any = undefined;
const el: any = undefined;
const frost3: any = undefined;
const iris3: any = undefined;
const moss3: any = undefined;
const p: any = undefined;
const quiet1: any = undefined;
const u: any = undefined;
const wind: any = undefined;
var vale3,
  wave3,
  apex3 = esmInit(() => {
    RemoteTextEditSessionY();
    RemoteTextEditSessionS();
    quiet1();
    frost3();
    RemoteTextEditSessionH();
    wind();
    iris3();
    moss3();
    vale3 = 1;
    ((wave3 = class {
      id = vale3++;
      _wb_e = RemoteTextEditSessionM("workbook-main-controller");
      _wb_t = Lunar3();
      _wb_n = Meadow1();
      _wb_r = new Set();
      _wb_i;
      _wb_a;
      _wb_o = null;
      _wb_s = null;
      _wb_c = null;
      _wb_l = null;
      _wb_u = null;
      _wb_d = null;
      _wb_f = 1;
      _wb_p = null;
      _wb_m = null;
      _wb_h = null;
      _wb_g = null;
      _wb__ = null;
      _wb_v = 0;
      _wb_y = 0;
      _wb_b = null;
      _wb_x;
      _wb_S = false;
      constructor(timber21 = {}) {
        let umbra21 = timber21.workbook ?? el(),
          violet21 = (timber21.workerFactory ?? Orbit3)();
        this._wb_a = {
          x: 0,
          y: 0,
          k: timber21.initialZoom ?? 1,
        };
        this._wb_i = new RemoteTextEditSessionV(
          violet21,
          (willow21) => this._wb_O(willow21),
          (xenon21) => {
            throw Error(xenon21);
          },
        );
        this._wb_e.debug("bootstrap", {
          controllerId: this.id,
          activeSheetName: umbra21.awareness.activeSheetName,
          sheetNames: Array.from(
            umbra21.worksheets,
            (yellow21) => yellow21.name,
          ),
          initialSelectedAddress: timber21.initialSelectedAddress,
          initialZoom: timber21.initialZoom,
        });
        this._wb_i.bootstrap({
          workbookProto: umbra21.toProto(),
          initialCrdtState: timber21.initialCrdtState,
          initialSelectedAddress: timber21.initialSelectedAddress,
          initialZoom: timber21.initialZoom,
        });
        this._wb_x = Trail()
          .then(() => {
            let zinc21 = RemoteTextEditSessionB();
            this._wb_e.debug("font-render-deps-ready", {
              fontCount: zinc21.length,
              fonts: zinc21.map((item) => ({
                family: item.family,
                style: item.style,
                weight: item.weight,
                format: item.format,
                src: item.src,
              })),
              fontDebug: RemoteTextEditSessionX(),
            });
            zinc21.length !== 0 &&
              (this._wb_i.dispatch({
                kind: "install-font-faces",
                fonts: zinc21,
              }),
              this._wb_e.debug("font-install-dispatched", {
                fontCount: zinc21.length,
              }));
          })
          .catch(() => {});
      }
      subscribe(amber21) {
        return this._wb_t.subscribe(amber21);
      }
      getState() {
        return this._wb_t.getState();
      }
      getSnapshot() {
        return this.getState();
      }
      getSelectionSummarySource() {
        return this._wb_n;
      }
      dispatch(basalt21) {
        this._wb_i.dispatch({
          kind: "command",
          command: basalt21,
        });
      }
      attachViewport(cedar21) {
        return (
          North3(),
          this._wb_x.then(() => {
            if (this._wb_S) return;
            let daisy21 = cedar21.host.getBoundingClientRect(),
              ember21 = window.devicePixelRatio || 1;
            this.attachViewportCanvas(cedar21.canvas, {
              width: daisy21.width,
              height: daisy21.height,
              dpr: ember21,
            });
          }),
          () => {}
        );
      }
      requestExport(flint21) {
        return this._wb_i
          .request({
            kind: "export",
            format: flint21?.format ?? "proto",
          })
          .then((value) => {
            if (value.kind !== "export")
              throw Error(`Unexpected export response: ${value.kind}`);
            return value.result;
          });
      }
      requestCrdtSnapshot() {
        return this._wb_i
          .request({
            kind: "crdt-snapshot",
          })
          .then((value) => {
            if (value.kind !== "crdt-snapshot")
              throw Error(`Unexpected CRDT snapshot response: ${value.kind}`);
            return new Uint8Array(value.result);
          });
      }
      loadInitialCrdtState(garnet21) {
        return this._wb_i
          .request({
            kind: "load-initial-crdt-state",
            update: garnet21,
          })
          .then((value) => {
            if (value.kind !== "load-initial-crdt-state")
              throw Error(
                `Unexpected initial CRDT load response: ${value.kind}`,
              );
          });
      }
      applyCrdtUpdate(hazel21) {
        return this._wb_i
          .request({
            kind: "apply-crdt-update",
            update: hazel21,
          })
          .then((value) => {
            if (value.kind !== "apply-crdt-update")
              throw Error(`Unexpected CRDT apply response: ${value.kind}`);
          });
      }
      subscribeCrdtUpdates(ivory21) {
        return (
          this._wb_r.add(ivory21),
          () => {
            this._wb_r.delete(ivory21);
          }
        );
      }
      setPresenceSelections(jasper21, kelp21, lotus21 = {}) {
        this._wb_i.dispatch({
          kind: "set-presence-selections",
          presenceId: jasper21,
          selections: kelp21,
          presenceKind: lotus21.kind,
        });
      }
      clearPresenceSelections(mint21, nova21 = {}) {
        this._wb_i.dispatch({
          kind: "clear-presence-selections",
          presenceId: mint21,
          sheetName: nova21.sheetName,
        });
      }
      replaceFromProto(olive21) {
        return this._wb_i
          .request({
            kind: "replace-from-proto",
            workbookProto: olive21,
          })
          .then((value) => {
            if (value.kind !== "replace-from-proto")
              throw Error(`Unexpected replace response: ${value.kind}`);
          });
      }
      dispose() {
        this._wb_S ||
          ((this._wb_S = true),
          this._wb_p?.bitmap.close(),
          (this._wb_p = null),
          this._wb_r.clear(),
          this._wb_i.dispose());
      }
      setZoom(prism21) {
        this.dispatch({
          type: "set-zoom",
          zoom: prism21,
        });
      }
      setSelectedAddress(quill21) {
        this.dispatch({
          type: "set-selected-address",
          address: quill21,
        });
      }
      handleKeyboardEvent(reef21) {
        return (
          this.dispatch({
            type: "handle-keyboard-event",
            event: reef21,
          }),
          true
        );
      }
      updateFormulaInput(sage21) {
        if (this._wb_b) {
          this._wb_b.formulaInput = sage21;
          let topaz21 = this._wb_t.getState().editor;
          this._wb_t.patch({
            editor: {
              ...topaz21,
              formulaInput: sage21,
            },
          });
        }
        this.dispatch({
          type: "update-formula-input",
          value: sage21,
        });
      }
      commitFormulaInput(ultra21) {
        this.dispatch({
          type: "commit-formula-input",
          value: ultra21,
        });
      }
      openCellEditor(vapor21) {
        let wheat21 = this._wb_t.getState().editor,
          yarn21 = vapor21 ?? wheat21.formulaInput;
        return (
          (this._wb_b = this._wb_b
            ? {
                ...this._wb_b,
                formulaInput: yarn21,
              }
            : {
                formulaInput: yarn21,
                hasObservedWorkerGridState: wheat21.editorMode !== "editCell",
              }),
          this._wb_t.patch({
            editor: {
              ...wheat21,
              formulaInput: yarn21,
              editorMode: "editCell",
            },
          }),
          this.dispatch({
            type: "open-cell-editor",
            initialValue: vapor21,
          }),
          true
        );
      }
      commitCellEdit(zephyr21) {
        return (
          this.dispatch({
            type: "commit-cell-edit",
            value: zephyr21,
          }),
          true
        );
      }
      cancelCellEdit() {
        this.dispatch({
          type: "cancel-cell-edit",
        });
      }
      setActiveSheetName(acorn21) {
        this.dispatch({
          type: "set-active-sheet-name",
          sheetName: acorn21,
        });
      }
      setSelectionRect(bloom21) {
        this.dispatch({
          type: "set-selection-rect",
          selectionRect: bloom21,
        });
      }
      setIsDraggingSelection(coral21) {
        this.dispatch({
          type: "set-is-dragging-selection",
          isDraggingSelection: coral21,
        });
      }
      setResizeGuide(drift21) {
        this.dispatch({
          type: "set-resize-guide",
          resizeGuide: drift21,
        });
      }
      setColumnWidth(eagle21, frost21) {
        this.dispatch({
          type: "set-column-width",
          index: eagle21,
          width: frost21,
        });
      }
      setRowHeight(glide21, honey21) {
        this.dispatch({
          type: "set-row-height",
          index: glide21,
          height: honey21,
        });
      }
      autofitColumn(iris21) {
        this.dispatch({
          type: "autofit-column",
          index: iris21,
        });
      }
      autofitRow(jewel21) {
        this.dispatch({
          type: "autofit-row",
          index: jewel21,
        });
      }
      moveSheet(knoll21, lunar21) {
        this.dispatch({
          type: "move-sheet",
          fromIndex: knoll21,
          toIndex: lunar21,
        });
      }
      renameSheet(moss21, north21) {
        this.dispatch({
          type: "rename-sheet",
          index: moss21,
          nextName: north21,
        });
      }
      addSheet(orbit21) {
        this.dispatch({
          type: "add-sheet",
          sheetName: orbit21,
        });
      }
      deleteSheet(pine21) {
        this.dispatch({
          type: "delete-sheet",
          index: pine21,
        });
      }
    }),
      attachWorkbookControllerLateMethods(wave3),
      wave3);
  });
