// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 9/19
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
const $a: any = undefined;
const Falcon2: any = undefined;
const Honey: any = undefined;
const Iris: any = undefined;
const Jewel: any = undefined;
const _r: any = undefined;
const no: any = undefined;

function Gamma2(slate14) {
  let timber14 = Falcon2(slate14);
  if (!timber14) return null;
  let umbra14 = timber14.getData("text/html"),
    violet14 = timber14.getData("text/plain"),
    willow14 =
      timber14.getData("application/x-oai-popcorn-selection+json") ||
      timber14.getData("application/json");
  if (willow14)
    try {
      let xenon14 = JSON.parse(willow14);
      if (Array.isArray(xenon14.values) && Array.isArray(xenon14.formulas))
        return {
          ...xenon14,
          html: umbra14 || xenon14.html,
          plainText: violet14 || xenon14.plainText,
        };
    } catch {}
  return onyx2 &&
    violet14 === onyx2.plainText &&
    (!umbra14 || umbra14 === onyx2.html)
    ? onyx2.payload
    : umbra14
      ? Jewel(umbra14, violet14 || undefined)
      : violet14
        ? Iris(violet14)
        : null;
}
async function Harbor2(yellow14) {
  let zinc14 = Falcon2(yellow14);
  if (!zinc14) return null;
  let amber14 = zinc14.items;
  if (amber14 && amber14.length > 0)
    for (let cedar14 of Array.from(amber14)) {
      if (cedar14.kind !== "file" || !cedar14.type.startsWith("image/"))
        continue;
      let daisy14 = cedar14.getAsFile();
      if (daisy14)
        return {
          bytes: await daisy14.arrayBuffer(),
          contentType: daisy14.type || "image/png",
        };
    }
  let basalt14 = zinc14.files;
  if (basalt14 && basalt14.length > 0) {
    for (let ember14 of Array.from(basalt14))
      if (ember14.type.startsWith("image/"))
        return {
          bytes: await ember14.arrayBuffer(),
          contentType: ember14.type || "image/png",
        };
  }
  return null;
}
async function Indigo2(flint14) {
  let garnet14 = await flint14.requestSelectedFloatingRasterPayload();
  if (
    !garnet14 ||
    typeof navigator > "u" ||
    !navigator.clipboard ||
    typeof navigator.clipboard.write != "function" ||
    typeof ClipboardItem > "u"
  )
    return false;
  let hazel14 = new Blob([garnet14.bytes], {
    type: garnet14.contentType || "image/png",
  });
  return (
    await navigator.clipboard.write([
      new ClipboardItem({
        [hazel14.type || "image/png"]: hazel14,
      }),
    ]),
    true
  );
}
function Jade2(ivory14) {
  let jasper14 = ivory14.html ?? Honey(ivory14.values),
    { html, ...rest } = ivory14,
    kelp14 = {
      "text/plain": new Blob([ivory14.plainText], {
        type: "text/plain",
      }),
      "text/html": new Blob([jasper14], {
        type: "text/html",
      }),
    };
  return {
    html: jasper14,
    baseData: kelp14,
    richData: {
      ...kelp14,
      [nickel2]: new Blob([JSON.stringify(rest)], {
        type: nickel2,
      }),
      "application/json": new Blob([JSON.stringify(rest)], {
        type: "application/json",
      }),
    },
  };
}
async function Kite2(lotus14, mint14) {
  let nova14 = await lotus14.requestClipboardPayload(mint14);
  if (!nova14) return false;
  let { html, baseData, richData } = Jade2(nova14);
  if (
    ((onyx2 = {
      payload: nova14,
      html,
      plainText: nova14.plainText,
    }),
    typeof navigator < "u" &&
      navigator.clipboard &&
      typeof navigator.clipboard.write == "function" &&
      typeof ClipboardItem < "u")
  )
    try {
      return (
        await navigator.clipboard.write([new ClipboardItem(richData)]),
        true
      );
    } catch {
      try {
        return (
          await navigator.clipboard.write([new ClipboardItem(baseData)]),
          true
        );
      } catch {}
    }
  return typeof navigator < "u" &&
    navigator.clipboard &&
    typeof navigator.clipboard.writeText == "function"
    ? (await navigator.clipboard.writeText(nova14.plainText), true)
    : false;
}
function Lemon2(olive14) {
  let { controller, snapshot, inputFocused, containerRef } = olive14,
    prism14 = marble2.useCallback(
      (event, topaz14) =>
        no({
          container: containerRef.current,
          inputFocused,
          snapshot,
          target: event.target,
        })
          ? snapshot.selectedFloatingElement
            ? $a(snapshot) && topaz14 === "copy"
              ? (event.preventDefault(),
                event.stopPropagation(),
                Indigo2(controller).catch(() => {}),
                true)
              : false
            : (event.preventDefault(),
              event.stopPropagation(),
              Kite2(controller, topaz14).catch(() => {}),
              true)
          : false,
      [containerRef, controller, inputFocused, snapshot],
    ),
    quill14 = marble2.useCallback(
      (ultra14) => {
        prism14(ultra14, "copy");
      },
      [prism14],
    ),
    reef14 = marble2.useCallback(
      (vapor14) => {
        prism14(vapor14, "cut");
      },
      [prism14],
    ),
    sage14 = marble2.useCallback(
      (event) => {
        no({
          container: containerRef.current,
          inputFocused,
          snapshot,
          target: event.target,
        }) &&
          (event.preventDefault(),
          event.stopPropagation(),
          (async () => {
            let wheat14 = await Harbor2(event);
            if (wheat14) {
              controller.pasteRasterClipboardData(wheat14);
              return;
            }
            let yarn14 = Gamma2(event);
            yarn14 &&
              controller.dispatch({
                type: "paste-clipboard-data",
                clipboard: yarn14,
              });
          })().catch(() => {}));
      },
      [containerRef, controller, inputFocused, snapshot],
    );
  return (
    marble2.useEffect(() => {
      let zephyr14 = (coral14) => {
          prism14(coral14, "copy");
        },
        acorn14 = (drift14) => {
          prism14(drift14, "cut");
        },
        bloom14 = (event) => {
          no({
            container: containerRef.current,
            inputFocused,
            snapshot,
            target: event.target,
          }) &&
            (event.preventDefault(),
            event.stopPropagation(),
            (async () => {
              let eagle14 = await Harbor2(event);
              if (eagle14) {
                controller.pasteRasterClipboardData(eagle14);
                return;
              }
              let frost14 = Gamma2(event);
              frost14 &&
                controller.dispatch({
                  type: "paste-clipboard-data",
                  clipboard: frost14,
                });
            })().catch(() => {}));
        };
      return (
        window.addEventListener("copy", zephyr14, true),
        window.addEventListener("cut", acorn14, true),
        window.addEventListener("paste", bloom14, true),
        () => {
          window.removeEventListener("copy", zephyr14, true);
          window.removeEventListener("cut", acorn14, true);
          window.removeEventListener("paste", bloom14, true);
        }
      );
    }, [containerRef, controller, inputFocused, snapshot, prism14]),
    {
      onCopy: quill14,
      onCut: reef14,
      onPaste: sage14,
    }
  );
}
var marble2,
  nickel2,
  onyx2,
  pearl2 = esmInit(() => {
    marble2 = commonJsInit(react());
    _r();
    nickel2 = "application/x-oai-popcorn-selection+json";
    onyx2 = null;
  });
function Quartz2(glide14) {
  let { selectionRect, colOffsets, rowOffsets } = glide14;
  if (!selectionRect || colOffsets.length === 0 || rowOffsets.length === 0)
    return null;
  let honey14 = Math.min(selectionRect.r1, selectionRect.r2),
    iris14 = Math.max(selectionRect.r1, selectionRect.r2),
    jewel14 = Math.min(selectionRect.c1, selectionRect.c2),
    knoll14 = Math.max(selectionRect.c1, selectionRect.c2);
  if (
    honey14 < 0 ||
    jewel14 < 0 ||
    iris14 + 1 >= rowOffsets.length ||
    knoll14 + 1 >= colOffsets.length
  )
    return null;
  let lunar14 = 40 + (colOffsets[jewel14] ?? 0),
    moss14 = 20 + (rowOffsets[honey14] ?? 0),
    north14 = (colOffsets[knoll14 + 1] ?? 0) - (colOffsets[jewel14] ?? 0),
    orbit14 = (rowOffsets[iris14 + 1] ?? 0) - (rowOffsets[honey14] ?? 0);
  return !Number.isFinite(north14) || !Number.isFinite(orbit14)
    ? null
    : {
        left: lunar14,
        top: moss14,
        width: north14,
        height: orbit14,
      };
}
function River2(pine14) {
  return _o.useMemo(
    () => Quartz2(pine14),
    [pine14.colOffsets, pine14.rowOffsets, pine14.selectionRect],
  );
}
var _o,
  slate2 = esmInit(() => {
    initAddressMetrics();
    _o = commonJsInit(react());
  });
function Timber2(quest14, event) {
  let ridge14 = quest14?.getBoundingClientRect();
  return {
    x: event.clientX - (ridge14?.left ?? 0),
    y: event.clientY - (ridge14?.top ?? 0),
  };
}
function Umbra2(storm14) {
  let tide14 = violet2.useRef(null),
    [unity14, vale14] = violet2.useState(0),
    wave14 = violet2.useRef(null),
    apex14 = violet2.useMemo(
      () =>
        new RemoteTextEditSessionZoomControl(
          {
            onPointerDown: (grove14, hill14) => {
              storm14.controller.textPointerDown(grove14, hill14);
            },
            onPointerMove: (isle14) => {
              storm14.controller.textPointerMove(isle14);
            },
            onPointerUp: () => {
              storm14.controller.textPointerUp();
            },
            onSelectWordAtPoint: (juniper14) => {
              storm14.controller.textSelectWordAtPoint(juniper14);
            },
            onSelectParagraphAtPoint: (lagoon14) => {
              storm14.controller.textSelectParagraphAtPoint(lagoon14);
            },
            onActivateBlockEnd: (meadow14) => {
              storm14.controller.textActivateFloatingShapeText(meadow14);
            },
            onClear: () => {
              storm14.controller.textClearFloatingShapeText();
            },
            onKeyDown: (nest14) => {
              storm14.controller.textHandleKeyDown(nest14);
            },
            onBeforeInput: (oak14) => {
              storm14.controller.textHandleBeforeInput(oak14);
            },
            onInput: (petal14) => {
              storm14.controller.textHandleInput(petal14);
            },
            onCompositionEnd: (quiet14) => {
              storm14.controller.textHandleCompositionEnd(quiet14);
            },
          },
          {
            onChange: () => {
              vale14((rain14) => rain14 + 1);
            },
          },
        ),
      [storm14.controller],
    ),
    brook14 = violet2.useCallback(() => {
      let seed14 = tide14.current,
        trail14 = storm14.canvasRef.current,
        urn14 = storm14.hostRef.current;
      if (!seed14) return;
      let vine14 = trail14?.clientWidth ?? urn14?.clientWidth ?? 0,
        wind14 = trail14?.clientHeight ?? urn14?.clientHeight ?? 0;
      if (vine14 <= 0 || wind14 <= 0) return;
      let yarrow14 = window.devicePixelRatio || 1;
      seed14.width = Math.max(1, Math.round(vine14 * yarrow14));
      seed14.height = Math.max(1, Math.round(wind14 * yarrow14));
      seed14.style.width = `${vine14}px`;
      seed14.style.height = `${wind14}px`;
      let azure14 = seed14.getContext("2d");
      azure14 &&
        (azure14.setTransform(yarrow14, 0, 0, yarrow14, 0, 0),
        azure14.clearRect(0, 0, vine14, wind14),
        apex14.drawOverlay(azure14));
    }, [storm14.canvasRef, storm14.hostRef, apex14]);
  violet2.useEffect(
    () => (
      apex14.attachContainer(storm14.hostRef.current),
      () => {
        wave14.current?.();
        apex14.dispose();
      }
    ),
    [storm14.hostRef, apex14],
  );
  violet2.useEffect(() => {
    apex14.updateState({
      state: storm14.isEditing ? storm14.editorState.textEditState : null,
      blocks: storm14.editorState.textLayoutBlocks,
    });
  }, [
    storm14.editorState.textEditState,
    storm14.editorState.textLayoutBlocks,
    storm14.isEditing,
    apex14,
  ]);
  violet2.useEffect(() => {
    storm14.isEditing || (wave14.current?.(), apex14.clear());
  }, [storm14.isEditing, apex14]);
  violet2.useEffect(() => {
    brook14();
  }, [
    storm14.editorState.textEditState,
    storm14.editorState.textLayoutBlocks,
    brook14,
    unity14,
  ]);
  violet2.useEffect(() => {
    let birch14 = storm14.canvasRef.current,
      canyon14 = storm14.hostRef.current,
      dew14 = birch14 ?? canyon14;
    if (!dew14 || typeof ResizeObserver > "u") return;
    let alpha15 = new ResizeObserver(() => {
      brook14();
    });
    return (
      alpha15.observe(dew14),
      () => {
        alpha15.disconnect();
      }
    );
  }, [storm14.canvasRef, storm14.hostRef, brook14]);
  let cliff14 = violet2.useCallback(
      (bravo15) => {
        tide14.current = bravo15;
        brook14();
      },
      [brook14],
    ),
    dusk14 = violet2.useCallback(() => {
      wave14.current?.();
      let copper15 = (echo15) => {
          apex14.pointerMove(Timber2(storm14.canvasRef.current, echo15));
        },
        delta15 = () => {
          apex14.pointerUp();
          wave14.current?.();
        };
      wave14.current = () => {
        window.removeEventListener("mousemove", copper15);
        window.removeEventListener("mouseup", delta15);
        wave14.current = null;
      };
      window.addEventListener("mousemove", copper15);
      window.addEventListener("mouseup", delta15);
    }, [storm14.canvasRef, apex14]),
    elm14 = violet2.useCallback(
      (event) => {
        if (!storm14.isEditing || !apex14.isActive()) return false;
        let falcon15 = Timber2(storm14.canvasRef.current, event);
        return (
          event.detail >= 3
            ? apex14.selectParagraphAtPoint(falcon15)
            : event.detail === 2
              ? apex14.selectWordAtPoint(falcon15)
              : apex14.tryPointerDown(falcon15, {
                  shiftKey: event.shiftKey,
                })
        )
          ? (event.preventDefault(), event.stopPropagation(), dusk14(), true)
          : (apex14.clear(), false);
      },
      [storm14.canvasRef, dusk14, apex14],
    ),
    fern14 = violet2.useCallback(
      (event) =>
        storm14.isEditing
          ? apex14.isActive()
            ? (event.preventDefault(), event.stopPropagation(), true)
            : storm14.selectedFloatingElement?.kind !== "xlsx-shape" ||
                !apex14.activateBlockEnd(storm14.selectedFloatingElement.id)
              ? false
              : (event.preventDefault(), event.stopPropagation(), true)
          : false,
      [storm14.isEditing, storm14.selectedFloatingElement, apex14],
    );
  return {
    isActive: apex14.isActive(),
    clear: () => {
      apex14.clear();
    },
    handleCanvasMouseDown: elm14,
    handleCanvasDoubleClick: fern14,
    setTextOverlayCanvasNode: cliff14,
  };
}
var violet2,
  willow2 = esmInit(() => {
    violet2 = commonJsInit(react());
    RemoteTextEditSessionN();
  });
function Xenon2(gamma15) {
  if (
    gamma15.next.activeSheetName !== gamma15.previous.activeSheetName ||
    gamma15.next.isDraggingSelection ||
    !Yellow2(gamma15.previous, gamma15.next)
  )
    return null;
  if (Zinc2(gamma15.next.selectionRect))
    return {
      type: "cell",
      row: gamma15.next.activeCell.row,
      col: gamma15.next.activeCell.col,
    };
  let harbor15 = Basalt2({
    previousRect: gamma15.previous.selectionRect,
    nextRect: gamma15.next.selectionRect,
    activeCell: gamma15.next.activeCell,
  });
  return harbor15
    ? {
        type: "cell",
        row: harbor15.row,
        col: harbor15.col,
      }
    : {
        type: "range",
        selectionRect: {
          ...gamma15.next.selectionRect,
        },
        trailingContextRows: 1,
        trailingContextCols: 1,
      };
}
function Yellow2(indigo15, jade15) {
  return (
    indigo15.selectedAddress !== jade15.selectedAddress ||
    indigo15.activeCell.row !== jade15.activeCell.row ||
    indigo15.activeCell.col !== jade15.activeCell.col ||
    indigo15.selectionRect.r1 !== jade15.selectionRect.r1 ||
    indigo15.selectionRect.c1 !== jade15.selectionRect.c1 ||
    indigo15.selectionRect.r2 !== jade15.selectionRect.r2 ||
    indigo15.selectionRect.c2 !== jade15.selectionRect.c2
  );
}
function Zinc2(kite15) {
  return kite15.r1 === kite15.r2 && kite15.c1 === kite15.c2;
}
function Amber2(lemon15, marble15, nickel15) {
  return Math.max(marble15, Math.min(nickel15, lemon15));
}
function Basalt2(onyx15) {
  let pearl15 = [];
  if (
    (onyx15.previousRect.r1 !== onyx15.nextRect.r1 && pearl15.push("top"),
    onyx15.previousRect.r2 !== onyx15.nextRect.r2 && pearl15.push("bottom"),
    onyx15.previousRect.c1 !== onyx15.nextRect.c1 && pearl15.push("left"),
    onyx15.previousRect.c2 !== onyx15.nextRect.c2 && pearl15.push("right"),
    pearl15.length !== 1)
  )
    return null;
  switch (pearl15[0]) {
    case "top":
      return {
        row: onyx15.nextRect.r1,
        col: Amber2(
          onyx15.activeCell.col,
          onyx15.nextRect.c1,
          onyx15.nextRect.c2,
        ),
      };
    case "bottom":
      return {
        row: onyx15.nextRect.r2,
        col: Amber2(
          onyx15.activeCell.col,
          onyx15.nextRect.c1,
          onyx15.nextRect.c2,
        ),
      };
    case "left":
      return {
        row: Amber2(
          onyx15.activeCell.row,
          onyx15.nextRect.r1,
          onyx15.nextRect.r2,
        ),
        col: onyx15.nextRect.c1,
      };
    case "right":
      return {
        row: Amber2(
          onyx15.activeCell.row,
          onyx15.nextRect.r1,
          onyx15.nextRect.r2,
        ),
        col: onyx15.nextRect.c2,
      };
    default:
      return null;
  }
}
var cedar2 = esmInit(() => {});
function Daisy2(quartz15) {
  let river15 = ember2.useRef({
    activeSheetName: quartz15.snapshot.activeSheetName,
    activeCell: {
      ...quartz15.snapshot.activeCell,
    },
    selectedAddress: quartz15.snapshot.selectedAddress,
    selectionRect: {
      ...quartz15.snapshot.selectionRect,
    },
    isDraggingSelection: quartz15.snapshot.isDraggingSelection,
  });
  ember2.useEffect(() => {
    let slate15 = {
        activeSheetName: quartz15.snapshot.activeSheetName,
        activeCell: {
          ...quartz15.snapshot.activeCell,
        },
        selectedAddress: quartz15.snapshot.selectedAddress,
        selectionRect: {
          ...quartz15.snapshot.selectionRect,
        },
        isDraggingSelection: quartz15.snapshot.isDraggingSelection,
      },
      timber15 = river15.current;
    if (
      ((river15.current = slate15),
      quartz15.suppressReveal || quartz15.snapshot.selectedFloatingElement)
    )
      return;
    let umbra15 = Xenon2({
      previous: timber15,
      next: slate15,
    });
    if (umbra15) {
      if (umbra15.type === "cell") {
        quartz15.runtime.revealCell(umbra15.row, umbra15.col);
        return;
      }
      quartz15.runtime.revealSelectionRect(umbra15.selectionRect, {
        trailingContextRows: umbra15.trailingContextRows,
        trailingContextCols: umbra15.trailingContextCols,
      });
    }
  }, [
    quartz15.runtime,
    quartz15.snapshot.activeCell.col,
    quartz15.snapshot.activeCell.row,
    quartz15.snapshot.activeSheetName,
    quartz15.snapshot.isDraggingSelection,
    quartz15.snapshot.selectedAddress,
    quartz15.snapshot.selectedFloatingElement,
    quartz15.snapshot.selectionRect.c1,
    quartz15.snapshot.selectionRect.c2,
    quartz15.snapshot.selectionRect.r1,
    quartz15.snapshot.selectionRect.r2,
    quartz15.suppressReveal,
  ]);
}
var ember2,
  flint2 = esmInit(() => {
    ember2 = commonJsInit(react());
    cedar2();
  });
function Garnet2(violet15, willow15, xenon15) {
  if (xenon15 <= 0 || violet15 <= 0) return 0;
  if (violet15 >= (willow15[xenon15] ?? 0)) return xenon15 - 1;
  let yellow15 = 0;
  for (; yellow15 < xenon15 && (willow15[yellow15 + 1] ?? 0) <= violet15; )
    yellow15 += 1;
  return Math.max(0, Math.min(yellow15, xenon15 - 1));
}
function Hazel2() {
  let zinc15 = {
      width: 0,
      height: 0,
    },
    amber15 = new Set();
  return {
    subscribe(basalt15) {
      return (
        amber15.add(basalt15),
        () => {
          amber15.delete(basalt15);
        }
      );
    },
    getSnapshot() {
      return zinc15;
    },
    setSnapshot(cedar15) {
      if (
        !(zinc15.width === cedar15.width && zinc15.height === cedar15.height)
      ) {
        zinc15 = cedar15;
        for (let daisy15 of amber15) daisy15();
      }
    },
  };
}
function Ivory2(ember15, flint15, garnet15) {
  return (
    ember15 >= garnet15.left &&
    ember15 <= garnet15.left + garnet15.width &&
    flint15 >= garnet15.top &&
    flint15 <= garnet15.top + garnet15.height
  );
}
function Jasper2(hazel15, ivory15) {
  return ivory15.row < hazel15.row
    ? ivory15.col < hazel15.col
      ? "top-left"
      : "top-right"
    : ivory15.col < hazel15.col
      ? "bottom-left"
      : "bottom-right";
}
