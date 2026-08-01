// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 2/19
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
const Daisy: any = undefined;
const Eagle: any = undefined;
const Hazel: any = undefined;
const Ivory: any = undefined;
const Jasper: any = undefined;
const Kelp: any = undefined;
const Mint: any = undefined;
const River: any = undefined;
const Timber: any = undefined;

function Nova(alpha6) {
  let bravo6 = Hazel(alpha6.viewColWidths),
    copper6 = Hazel(alpha6.rowHeights),
    delta6 = Jasper(alpha6.sheet),
    echo6 = (kite6) =>
      kite6.r1 !== kite6.r2 || kite6.c1 !== kite6.c2
        ? kite6
        : (delta6.get(`${kite6.r1}:${kite6.c1}`) ?? kite6),
    falcon6 = {
      r1: Math.min(alpha6.selectionRect.r1, alpha6.selectionRect.r2),
      c1: Math.min(alpha6.selectionRect.c1, alpha6.selectionRect.c2),
      r2: Math.max(alpha6.selectionRect.r1, alpha6.selectionRect.r2),
      c2: Math.max(alpha6.selectionRect.c1, alpha6.selectionRect.c2),
    },
    gamma6 =
      alpha6.activeCell == null
        ? {
            row: falcon6.r1,
            col: falcon6.c1,
          }
        : {
            row: Math.max(
              falcon6.r1,
              Math.min(alpha6.activeCell.row, falcon6.r2),
            ),
            col: Math.max(
              falcon6.c1,
              Math.min(alpha6.activeCell.col, falcon6.c2),
            ),
          },
    harbor6 = alpha6.selectionStart ?? gamma6,
    indigo6 = alpha6.selectionEnd ?? {
      row: harbor6.row === falcon6.r1 ? falcon6.r2 : falcon6.r1,
      col: harbor6.col === falcon6.c1 ? falcon6.c2 : falcon6.c1,
    },
    jade6 = Mint({
      camera: alpha6.camera,
      colOffsets: bravo6,
      freezePanes: alpha6.freezePanes,
      resolveMergedRect: echo6,
      rowOffsets: copper6,
      rowHeights: alpha6.rowHeights,
      selectionStart: harbor6,
      selectionEnd: indigo6,
      viewColWidths: alpha6.viewColWidths,
    });
  return {
    colOffsets: bravo6,
    rowOffsets: copper6,
    resolveMergedRect: echo6,
    normalizedRect: falcon6,
    selectionRect: jade6,
    clampedRect:
      jade6 &&
      Ivory({
        c1: falcon6.c1,
        c2: falcon6.c2,
        r1: falcon6.r1,
        r2: falcon6.r2,
        viewColWidths: alpha6.viewColWidths,
        rowHeights: alpha6.rowHeights,
      }),
  };
}
function Prism(lemon6) {
  let { clampedRect, selectionRect } = Nova(lemon6);
  if (!selectionRect || !clampedRect) return null;
  let marble6 = Math.max(lemon6.camera.k, 2.220446049250313e-16);
  return {
    left: selectionRect.x * marble6,
    top: selectionRect.y * marble6,
    width: selectionRect.w * marble6,
    height: selectionRect.h * marble6,
  };
}
function Quill(nickel6) {
  if (!nickel6.frame.hasGridBody || !nickel6.selectionRect) return;
  let { ctx, zoom } = nickel6.frame,
    { ax, ah, aw, ay, h, w, x, y } = nickel6.selectionRect;
  ctx.save();
  ctx.scale(zoom, zoom);
  nickel6.frame.applyGridBodyClip(ctx);
  ctx.fillStyle = nickel6.accentFill;
  let onyx6 = x + w,
    pearl6 = y + h,
    quartz6 = ax + aw,
    river6 = ay + ah;
  ay > y && ctx.fillRect(x, y, w, ay - y);
  river6 < pearl6 && ctx.fillRect(x, river6, w, pearl6 - river6);
  ax > x && ctx.fillRect(x, ay, ax - x, ah);
  quartz6 < onyx6 && ctx.fillRect(quartz6, ay, onyx6 - quartz6, ah);
  ctx.restore();
}
function Reef(slate6) {
  let timber6 = Ivory({
    c1: Number.isFinite(slate6.range.c1) ? slate6.range.c1 : 0,
    c2: Number.isFinite(slate6.range.c2)
      ? slate6.range.c2
      : slate6.viewColWidths.length - 1,
    r1: Number.isFinite(slate6.range.r1) ? slate6.range.r1 : 0,
    r2: Number.isFinite(slate6.range.r2)
      ? slate6.range.r2
      : slate6.rowHeights.length - 1,
    viewColWidths: slate6.viewColWidths,
    rowHeights: slate6.rowHeights,
  });
  return timber6
    ? {
        x: 40 + (slate6.colOffsets[timber6.cStart] ?? 0),
        y: 20 + (slate6.rowOffsets[timber6.rStart] ?? 0),
        w:
          (slate6.colOffsets[timber6.cEnd + 1] ?? 0) -
          (slate6.colOffsets[timber6.cStart] ?? 0),
        h:
          (slate6.rowOffsets[timber6.rEnd + 1] ?? 0) -
          (slate6.rowOffsets[timber6.rStart] ?? 0),
      }
    : null;
}
function Sage(umbra6) {
  if (!umbra6.rangeHighlights?.length || !umbra6.frame.hasGridBody) return;
  let { ctx, zoom } = umbra6.frame;
  ctx.save();
  ctx.scale(zoom, zoom);
  umbra6.frame.applyGridBodyClip(ctx);
  for (let violet6 of umbra6.rangeHighlights) {
    let willow6 = Reef({
      colOffsets: umbra6.colOffsets,
      rowOffsets: umbra6.rowOffsets,
      viewColWidths: umbra6.viewColWidths,
      rowHeights: umbra6.rowHeights,
      range: violet6,
    });
    if (!willow6) continue;
    let xenon6 = Timber({
      camera: umbra6.frame.camera,
      worldX: willow6.x,
      worldY: willow6.y,
      width: willow6.w,
      height: willow6.h,
      freezePanes: umbra6.frame.freezePanes,
      columnWidths: umbra6.viewColWidths,
      rowHeights: umbra6.rowHeights,
    });
    for (let yellow6 of xenon6) {
      if (
        !umbra6.frame.intersectsGridBody(
          yellow6.x,
          yellow6.y,
          yellow6.width,
          yellow6.height,
        )
      )
        continue;
      let zinc6 = violet6.fillAlpha ?? 0.12;
      ctx.fillStyle = Eagle(violet6.color, zinc6);
      ctx.fillRect(yellow6.x, yellow6.y, yellow6.width, yellow6.height);
      violet6.showBorder !== false &&
        (ctx.save(),
        violet6.dashed && ctx.setLineDash([6 / zoom, 4 / zoom]),
        (ctx.strokeStyle = violet6.color),
        (ctx.lineWidth = (violet6.borderWidthPx ?? 2) / zoom),
        Kelp(
          ctx,
          yellow6.x,
          yellow6.y,
          yellow6.width,
          yellow6.height,
          (violet6.borderRadiusPx ?? 2) / zoom,
        ),
        ctx.stroke(),
        ctx.restore());
    }
  }
  ctx.restore();
}
function Topaz(amber6, basalt6, cedar6, daisy6, ember6, flint6) {
  let garnet6 = 10 / flint6,
    hazel6 = 4 / flint6,
    ivory6 = 2 / flint6,
    jasper6 = 4 / flint6;
  amber6.save();
  amber6.font = `${garnet6}px system-ui, -apple-system, BlinkMacSystemFont, sans-serif`;
  amber6.textBaseline = "top";
  amber6.textAlign = "left";
  let kelp6 = amber6.measureText(basalt6).width + hazel6 * 2,
    lotus6 = garnet6 + ivory6 * 2,
    mint6 = cedar6 + 2 / flint6,
    nova6 = daisy6 + 2 / flint6;
  amber6.fillStyle = ember6;
  Kelp(amber6, mint6, nova6, kelp6, lotus6, jasper6);
  amber6.fill();
  amber6.fillStyle = "#ffffff";
  amber6.fillText(basalt6, mint6 + hazel6, nova6 + ivory6);
  amber6.restore();
}
function Ultra(olive6) {
  if (
    olive6.awarenessSelections.length === 0 ||
    olive6.viewColWidths.length === 0 ||
    olive6.rowHeights.length === 0
  )
    return;
  let { ctx, scrollLeft, scrollTop, zoom } = olive6.frame;
  if ((ctx.save(), ctx.scale(zoom, zoom), olive6.frame.applyGridBodyClip(ctx)))
    for (let prism6 of olive6.awarenessSelections) {
      if (prism6.selectedElementIds.length > 0) continue;
      let quill6 = olive6.resolveMergedRect(prism6.rect),
        reef6 = Ivory({
          c1: quill6.c1,
          c2: quill6.c2,
          r1: quill6.r1,
          r2: quill6.r2,
          viewColWidths: olive6.viewColWidths,
          rowHeights: olive6.rowHeights,
        });
      if (!reef6) continue;
      let { cStart, cEnd, rStart, rEnd } = reef6,
        sage6 = 40 + (olive6.colOffsets[cStart] ?? 0) - scrollLeft,
        topaz6 = 20 + (olive6.rowOffsets[rStart] ?? 0) - scrollTop,
        ultra6 =
          (olive6.colOffsets[cEnd + 1] ?? 0) - (olive6.colOffsets[cStart] ?? 0),
        vapor6 =
          (olive6.rowOffsets[rEnd + 1] ?? 0) - (olive6.rowOffsets[rStart] ?? 0);
      if (!olive6.frame.intersectsGridBody(sage6, topaz6, ultra6, vapor6))
        continue;
      ctx.strokeStyle = prism6.stroke;
      ctx.lineWidth = 2 / zoom;
      ctx.setLineDash([]);
      ctx.strokeRect(sage6, topaz6, ultra6, vapor6);
      let wheat6 = prism6.status ?? prism6.label;
      wheat6 && Topaz(ctx, wheat6, sage6, topaz6, prism6.stroke, zoom);
    }
  ctx.restore();
}
function Vapor(yarn6) {
  if (yarn6.awarenessDrawingSelections.length === 0 || !yarn6.frame.hasGridBody)
    return;
  let { ctx, zoom } = yarn6.frame;
  if ((ctx.save(), ctx.scale(zoom, zoom), yarn6.frame.applyGridBodyClip(ctx)))
    for (let zephyr6 of yarn6.awarenessDrawingSelections) {
      let acorn6 = zephyr6.rotation ?? 0,
        bloom6 = Math.abs(acorn6) < 0.001,
        coral6 = (
          bloom6
            ? [
                {
                  x: zephyr6.logicalBounds.x,
                  y: zephyr6.logicalBounds.y,
                },
                {
                  x: zephyr6.logicalBounds.x + zephyr6.logicalBounds.width,
                  y: zephyr6.logicalBounds.y,
                },
                {
                  x: zephyr6.logicalBounds.x + zephyr6.logicalBounds.width,
                  y: zephyr6.logicalBounds.y + zephyr6.logicalBounds.height,
                },
                {
                  x: zephyr6.logicalBounds.x,
                  y: zephyr6.logicalBounds.y + zephyr6.logicalBounds.height,
                },
              ]
            : (() => {
                let eagle6 = popcornSurfaceStyle_dt({
                  left: zephyr6.logicalBounds.x,
                  top: zephyr6.logicalBounds.y,
                  width: zephyr6.logicalBounds.width,
                  height: zephyr6.logicalBounds.height,
                  rotation: acorn6,
                });
                return [eagle6.nw, eagle6.ne, eagle6.se, eagle6.sw];
              })()
        ).map((item) =>
          River({
            camera: yarn6.frame.camera,
            worldX: item.x,
            worldY: item.y,
            freezePanes: yarn6.frame.freezePanes,
            columnWidths: yarn6.frame.viewColWidths,
            rowHeights: yarn6.frame.rowHeights,
          }),
        );
      if (
        ((ctx.strokeStyle = zephyr6.stroke),
        (ctx.lineWidth = 1.25 / zoom),
        ctx.setLineDash([]),
        bloom6)
      ) {
        let frost6 = Timber({
          camera: yarn6.frame.camera,
          worldX: zephyr6.logicalBounds.x,
          worldY: zephyr6.logicalBounds.y,
          width: zephyr6.logicalBounds.width,
          height: zephyr6.logicalBounds.height,
          freezePanes: yarn6.frame.freezePanes,
          columnWidths: yarn6.frame.viewColWidths,
          rowHeights: yarn6.frame.rowHeights,
        });
        for (let glide6 of frost6)
          ctx.strokeRect(glide6.x, glide6.y, glide6.width, glide6.height);
      } else {
        ctx.beginPath();
        ctx.moveTo(coral6[0].x, coral6[0].y);
        for (let honey6 = 1; honey6 < coral6.length; honey6 += 1)
          ctx.lineTo(coral6[honey6].x, coral6[honey6].y);
        ctx.closePath();
        ctx.stroke();
      }
      let drift6 = zephyr6.label ?? zephyr6.status;
      drift6 &&
        Topaz(
          ctx,
          drift6,
          Math.min(...coral6.map((item) => item.x)),
          Math.max(...coral6.map((item) => item.y)) + 4 / zoom,
          zephyr6.stroke,
          zoom,
        );
    }
  ctx.restore();
}
function Wheat(iris6) {
  if (!iris6.frame.hasGridBody || !iris6.selectionRect) return;
  let { ctx, zoom } = iris6.frame;
  ctx.save();
  ctx.scale(zoom, zoom);
  iris6.frame.applyGridBodyClip(ctx) &&
    ((ctx.strokeStyle = iris6.accentStroke),
    (ctx.lineWidth = 2 / zoom),
    Kelp(
      ctx,
      iris6.selectionRect.x,
      iris6.selectionRect.y,
      iris6.selectionRect.w,
      iris6.selectionRect.h,
      2 / zoom,
    ),
    ctx.stroke());
  ctx.restore();
}
function $n(jewel6) {
  if (
    !jewel6.frame.hasGridBody ||
    !jewel6.fillPreviewRect ||
    !jewel6.selectionRect ||
    (jewel6.fillPreviewRect.r1 === jewel6.selectionRect.r1 &&
      jewel6.fillPreviewRect.c1 === jewel6.selectionRect.c1 &&
      jewel6.fillPreviewRect.r2 === jewel6.selectionRect.r2 &&
      jewel6.fillPreviewRect.c2 === jewel6.selectionRect.c2)
  )
    return;
  let { ctx, zoom } = jewel6.frame;
  ctx.save();
  ctx.scale(zoom, zoom);
  jewel6.frame.applyGridBodyClip(ctx) &&
    ((ctx.strokeStyle = jewel6.accentStroke),
    (ctx.lineWidth = 2 / zoom),
    Kelp(
      ctx,
      jewel6.fillPreviewRect.x,
      jewel6.fillPreviewRect.y,
      jewel6.fillPreviewRect.w,
      jewel6.fillPreviewRect.h,
      2 / zoom,
    ),
    ctx.stroke());
  ctx.restore();
}
function Yarn(knoll6) {
  if (!knoll6.frame.hasGridBody) return;
  let lunar6 = Daisy({
    selectionRect: knoll6.selectionRect,
    colWidths: knoll6.frame.viewColWidths,
    rowHeights: knoll6.frame.rowHeights,
    camera: knoll6.frame.camera,
    freezePanes: knoll6.frame.freezePanes,
  });
  if (
    !lunar6 ||
    !knoll6.frame.intersectsGridBody(
      lunar6.left,
      lunar6.top,
      lunar6.width,
      lunar6.height,
    )
  )
    return;
  let { ctx, zoom } = knoll6.frame,
    moss6 = 2 / zoom,
    north6 = 1 / zoom,
    orbit6 = lunar6.left,
    pine6 = lunar6.top,
    quest6 = lunar6.width,
    ridge6 = lunar6.height;
  ctx.save();
  ctx.scale(zoom, zoom);
  knoll6.frame.applyGridBodyClip(ctx) &&
    ((ctx.fillStyle = knoll6.accentStroke),
    Kelp(ctx, orbit6, pine6, quest6, ridge6, moss6),
    ctx.fill(),
    (ctx.strokeStyle = "#ffffff"),
    (ctx.lineWidth = north6),
    Kelp(
      ctx,
      orbit6 + north6 / 2,
      pine6 + north6 / 2,
      Math.max(0, quest6 - north6),
      Math.max(0, ridge6 - north6),
      Math.max(0, moss6 - north6 / 2),
    ),
    ctx.stroke());
  ctx.restore();
}
function Zephyr(storm6) {
  if (!storm6.drawingSelection || !storm6.frame.hasGridBody) return;
  let { ctx, zoom } = storm6.frame,
    { halfVisibleSize, visibleSize } = popcornSurfaceStyle_H(zoom),
    tide6 = storm6.drawingSelection.rotation ?? 0,
    unity6 = Math.abs(tide6) < 0.001,
    vale6 = unity6
      ? [
          {
            x: storm6.drawingSelection.x,
            y: storm6.drawingSelection.y,
          },
          {
            x: storm6.drawingSelection.x + storm6.drawingSelection.width,
            y: storm6.drawingSelection.y,
          },
          {
            x: storm6.drawingSelection.x + storm6.drawingSelection.width,
            y: storm6.drawingSelection.y + storm6.drawingSelection.height,
          },
          {
            x: storm6.drawingSelection.x,
            y: storm6.drawingSelection.y + storm6.drawingSelection.height,
          },
        ]
      : (() => {
          let apex6 = popcornSurfaceStyle_dt({
            left: storm6.drawingSelection.x,
            top: storm6.drawingSelection.y,
            width: storm6.drawingSelection.width,
            height: storm6.drawingSelection.height,
            rotation: tide6,
          });
          return [apex6.nw, apex6.ne, apex6.se, apex6.sw];
        })(),
    wave6 = vale6.map((item) =>
      River({
        camera: storm6.frame.camera,
        worldX: item.x,
        worldY: item.y,
        freezePanes: storm6.frame.freezePanes,
        columnWidths: storm6.frame.viewColWidths,
        rowHeights: storm6.frame.rowHeights,
      }),
    );
  if (
    (ctx.save(), ctx.scale(zoom, zoom), storm6.frame.applyGridBodyClip(ctx))
  ) {
    if (
      ((ctx.strokeStyle = storm6.accentStroke),
      (ctx.lineWidth = 1.25 / zoom),
      ctx.setLineDash([]),
      unity6)
    ) {
      let brook6 = Timber({
        camera: storm6.frame.camera,
        worldX: storm6.drawingSelection.x,
        worldY: storm6.drawingSelection.y,
        width: storm6.drawingSelection.width,
        height: storm6.drawingSelection.height,
        freezePanes: storm6.frame.freezePanes,
        columnWidths: storm6.frame.viewColWidths,
        rowHeights: storm6.frame.rowHeights,
      });
      for (let cliff6 of brook6)
        storm6.frame.intersectsGridBody(
          cliff6.x,
          cliff6.y,
          cliff6.width,
          cliff6.height,
        ) && ctx.strokeRect(cliff6.x, cliff6.y, cliff6.width, cliff6.height);
    } else if (wave6.length === 4) {
      ctx.beginPath();
      ctx.moveTo(wave6[0].x, wave6[0].y);
      for (let dusk6 = 1; dusk6 < wave6.length; dusk6 += 1)
        ctx.lineTo(wave6[dusk6].x, wave6[dusk6].y);
      ctx.closePath();
      ctx.stroke();
    }
    if (storm6.showResizeHandles !== false) {
      ctx.fillStyle = "#ffffff";
      for (let elm6 of vale6) {
        let fern6 = Timber({
          camera: storm6.frame.camera,
          worldX: elm6.x - halfVisibleSize,
          worldY: elm6.y - halfVisibleSize,
          width: visibleSize,
          height: visibleSize,
          freezePanes: storm6.frame.freezePanes,
          columnWidths: storm6.frame.viewColWidths,
          rowHeights: storm6.frame.rowHeights,
        });
        for (let grove6 of fern6)
          storm6.frame.intersectsGridBody(
            grove6.x,
            grove6.y,
            grove6.width,
            grove6.height,
          ) &&
            (ctx.beginPath(),
            ctx.rect(grove6.x, grove6.y, grove6.width, grove6.height),
            ctx.fill(),
            ctx.stroke());
      }
    }
  }
  ctx.restore();
}
function Acorn(hill6) {
  if (!hill6.resizeGuide) return;
  let { ctx, viewportH, viewportW, zoom } = hill6.frame;
  if (
    (ctx.save(),
    ctx.scale(zoom, zoom),
    (ctx.strokeStyle = hill6.accentStroke),
    (ctx.lineWidth = 1 / zoom),
    ctx.setLineDash([4 / zoom, 3 / zoom]),
    hill6.resizeGuide.type === "col")
  ) {
    let isle6 = River({
      camera: hill6.frame.camera,
      worldX: hill6.resizeGuide.pos,
      worldY: 20,
      freezePanes: hill6.frame.freezePanes,
      columnWidths: hill6.frame.viewColWidths,
      rowHeights: hill6.frame.rowHeights,
    }).x;
    ctx.beginPath();
    ctx.moveTo(isle6, 0);
    ctx.lineTo(isle6, viewportH / zoom);
    ctx.stroke();
  } else {
    let juniper6 = River({
      camera: hill6.frame.camera,
      worldX: 40,
      worldY: hill6.resizeGuide.pos,
      freezePanes: hill6.frame.freezePanes,
      columnWidths: hill6.frame.viewColWidths,
      rowHeights: hill6.frame.rowHeights,
    }).y;
    ctx.beginPath();
    ctx.moveTo(0, juniper6);
    ctx.lineTo(viewportW / zoom, juniper6);
    ctx.stroke();
  }
  ctx.restore();
}
function Bloom(lagoon6) {
  if (!lagoon6.selectionRect) return;
  let { ctx, viewportH, viewportW, zoom } = lagoon6.frame;
  ctx.save();
  ctx.scale(zoom, zoom);
  ctx.fillStyle = lagoon6.accentFill;
  let meadow6 = viewportW / zoom - 40;
  if (meadow6 > 0) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(40, 0, meadow6, 20);
    ctx.clip();
    for (
      let oak6 = lagoon6.selectionRect.c1;
      oak6 <= lagoon6.selectionRect.c2;
      oak6 += 1
    ) {
      let petal6 = lagoon6.viewColWidths[oak6] ?? 0,
        quiet6 = Timber({
          camera: lagoon6.frame.camera,
          worldX: 40 + (lagoon6.colOffsets[oak6] ?? 0),
          worldY: 0,
          width: petal6,
          height: 20,
          freezePanes: lagoon6.frame.freezePanes,
          columnWidths: lagoon6.viewColWidths,
          rowHeights: lagoon6.rowHeights,
        });
      for (let rain6 of quiet6) {
        ctx.fillRect(rain6.x, rain6.y, rain6.width, rain6.height);
        ctx.strokeStyle = lagoon6.accentStroke;
        ctx.lineWidth = 2.5 / zoom;
        ctx.beginPath();
        ctx.moveTo(rain6.x, 20);
        ctx.lineTo(rain6.x + rain6.width, 20);
        ctx.stroke();
      }
    }
    ctx.restore();
  }
  let nest6 = viewportH / zoom - 20;
  if (nest6 > 0) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 20, 40, nest6);
    ctx.clip();
    for (
      let seed6 = lagoon6.selectionRect.r1;
      seed6 <= lagoon6.selectionRect.r2;
      seed6 += 1
    ) {
      let trail6 = lagoon6.rowHeights[seed6] ?? 0,
        urn6 = Timber({
          camera: lagoon6.frame.camera,
          worldX: 0,
          worldY: 20 + (lagoon6.rowOffsets[seed6] ?? 0),
          width: 40,
          height: trail6,
          freezePanes: lagoon6.frame.freezePanes,
          columnWidths: lagoon6.viewColWidths,
          rowHeights: lagoon6.rowHeights,
        });
      for (let vine6 of urn6) {
        ctx.fillRect(vine6.x, vine6.y, vine6.width, vine6.height);
        ctx.strokeStyle = lagoon6.accentStroke;
        ctx.lineWidth = 2.5 / zoom;
        ctx.beginPath();
        ctx.moveTo(40, vine6.y);
        ctx.lineTo(40, vine6.y + vine6.height);
        ctx.stroke();
      }
    }
    ctx.restore();
  }
  ctx.restore();
}
function Coral(wind6) {
  if (wind6.drawingOcclusionRects.length === 0 || !wind6.frame.hasGridBody)
    return;
  let { ctx, zoom } = wind6.frame,
    yarrow6 = 1 / Math.max(zoom, 2.220446049250313e-16);
  if ((ctx.save(), ctx.scale(zoom, zoom), wind6.frame.applyGridBodyClip(ctx)))
    for (let azure6 of wind6.drawingOcclusionRects)
      wind6.frame.intersectsGridBody(
        azure6.x,
        azure6.y,
        azure6.width,
        azure6.height,
      ) &&
        ctx.clearRect(
          azure6.x - yarrow6,
          azure6.y - yarrow6,
          azure6.width + yarrow6 * 2,
          azure6.height + yarrow6 * 2,
        );
  ctx.restore();
}
