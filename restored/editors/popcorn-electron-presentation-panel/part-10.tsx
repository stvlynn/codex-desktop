// Restored from ref/webview/assets/PopcornElectronPresentationPanel-B28phSkk.js

// Wave5d soft stubs (qg unbound).
const _e: any = undefined;
const annotationMode: any = undefined;
const anvilSecond: any = undefined;
const at: any = undefined;
const beaconSecond: any = undefined;
const boltSecond: any = undefined;
const cogSecond: any = undefined;
const controller: any = undefined;
const cragSecond: any = undefined;
const domeSecond: any = undefined;
const drawingMode: any = undefined;
const edgeSecond: any = undefined;
const frameSecond: any = undefined;
const glenSecond: any = undefined;
const handleSecond: any = undefined;
const havenSecond: any = undefined;
const inletSecond: any = undefined;
const isEditing: any = undefined;
const jacketSecond: any = undefined;
const jadeiteSecond: any = undefined;
const jointSecond: any = undefined;
const keystoneSecond: any = undefined;
const knobSecond: any = undefined;
const knurlSecond: any = undefined;
const mapleSecond: any = undefined;
const mireSecond: any = undefined;
const mountSecond: any = undefined;
const nimbusSecond: any = undefined;
const onAnnotationModeChange: any = undefined;
const onDrawingModeChange: any = undefined;
const onHyperlinkClick: any = undefined;
const opalSecond: any = undefined;
const plumeSecond: any = undefined;
const pondSecond: any = undefined;
const quillowSecond: any = undefined;
const reviewTools: any = undefined;
const rootSecond: any = undefined;
const runtime: any = undefined;
const silkSecond: any = undefined;
const thornSecond: any = undefined;
const updraftSecond: any = undefined;
const uplandSecond: any = undefined;
const yonderSecond: any = undefined;
const zenithSecond: any = undefined;
// Wave FZ — full polished body from `PopcornElectronPresentationPanel-B28phSkk/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 106/111).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 10/16
/* split-lane-import-depth:1 */

import type { ReactElement, ReactNode } from "react";

// Wave5d soft stubs.
const $n: any = undefined;
const acorn: any = undefined;
const anvil: any = undefined;
const beacon: any = undefined;
const canyon: any = undefined;
const eddy: any = undefined;
const ever: any = undefined;
const fjord: any = undefined;
const jadeite: any = undefined;
const kernel: any = undefined;
const knob: any = undefined;
const leaf: any = undefined;
const ledge: any = undefined;
const maple: any = undefined;
const opal: any = undefined;
const plume: any = undefined;
const popcornElectronSurfaceStyleUnderscore: any = undefined;
const zenith: any = undefined;

import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { react } from "../../boundaries/react-cjs-runtime";
import { workbookO, workbookS } from "../../workbook/editor-compat";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureDndAxisLockModifiersInit,
  restrictToVerticalAxis,
} from "../../ui/dnd-axis-lock-modifiers";
import { dndAxisLockModifiers } from "../../ui/dnd-axis-lock-modifiers-bindable";
import { useDndSensors } from "../../ui/use-dnd-sensors";
import { joinStringsOrNull as JoinStringsOrNull } from "../../utils/join-strings-or-null";
import { stack, stackOffsetExpand } from "../../vendor/d3-shape-line-pie-stack";
import { ensureD3ShapeStackOffsetInit } from "../../workbook/ensure-d3-shape-stack-offset-init";
import {
  popcornSurfaceStyle_B as PopcornSurfaceStyle_B,
  popcornSurfaceStyle_Ct as PopcornSurfaceStyle_Ct,
  popcornSurfaceStyle_dt,
  popcornSurfaceStyle_E,
  popcornSurfaceStyle_F,
  popcornSurfaceStyle_ft as PopcornSurfaceStyle_ft,
  popcornSurfaceStyle_G,
  popcornSurfaceStyle_H,
  popcornSurfaceStyle_I,
  popcornSurfaceStyle_it as PopcornSurfaceStyle_it,
  popcornSurfaceStyle_K as PopcornSurfaceStyle_K,
  popcornSurfaceStyle_L,
  popcornSurfaceStyle_lt,
  popcornSurfaceStyle_mt,
  popcornSurfaceStyle_N,
  popcornSurfaceStyle_O,
  popcornSurfaceStyle_P,
  popcornSurfaceStyle_r,
  popcornSurfaceStyle_R as PopcornSurfaceStyle_R,
  popcornSurfaceStyle_rt,
  popcornSurfaceStyle_st,
  popcornSurfaceStyle_t as PopcornSurfaceStyle_t,
  popcornSurfaceStyle_T,
  popcornSurfaceStyle_tt as PopcornSurfaceStyle_tt,
  popcornSurfaceStyle_Tt,
  popcornSurfaceStyle_U as PopcornSurfaceStyle_U,
  popcornSurfaceStyle_ut,
  popcornSurfaceStyle_V as PopcornSurfaceStyle_V,
  popcornSurfaceStyle_Y as PopcornSurfaceStyle_Y,
  popcornSurfaceStyle_Z as PopcornSurfaceStyle_Z,
} from "../popcorn-electron-surface-style";
import {
  ensurePopcornPageNumberNavigationInit,
  PopcornPageNumberNavigation,
} from "../popcorn-page-number-navigation";
import {
  RemoteTextEditSessionA,
  RemoteTextEditSessionC,
  RemoteTextEditSessionChrome,
  RemoteTextEditSessionI,
  RemoteTextEditSessionLowerB,
  RemoteTextEditSessionLowerG,
  RemoteTextEditSessionLowerH,
  RemoteTextEditSessionLowerR,
  RemoteTextEditSessionLowerV,
  RemoteTextEditSessionLowerW,
  RemoteTextEditSessionLowerX,
  RemoteTextEditSessionLowerY,
  RemoteTextEditSessionM,
  RemoteTextEditSessionN,
  RemoteTextEditSessionO,
  RemoteTextEditSessionS,
  RemoteTextEditSessionSurfaceKind,
  RemoteTextEditSessionUnderscore,
  RemoteTextEditSessionV,
  RemoteTextEditSessionW,
  RemoteTextEditSessionY,
  RemoteTextEditSessionZoomControl,
} from "../remote-text-edit-session/index";

function Vista__splitRest2(__splitParams: any) {
  let tappetSecond = (willowThird) => {
      uplandSecond.current = willowThird
        ? {
            x: Math.round(willowThird.x),
            y: Math.round(willowThird.y),
          }
        : null;
      thornSecond.current ??= window.requestAnimationFrame(() => {
        thornSecond.current = null;
        let xenonThird = uplandSecond.current;
        if (xenonThird) {
          controller.setLocalAwarenessCursor(xenonThird);
          return;
        }
        controller.clearLocalAwarenessCursor();
      });
    },
    arborSecond = (event) => {
      zenithSecond(false);
      jadeiteSecond.current?.focus();
      let yellowThird = anvil(
        event,
        jadeiteSecond.current,
        cogSecond,
        havenSecond,
        edgeSecond,
      );
      if ((tappetSecond(yellowThird), beaconSecond && drawingMode)) {
        if (!yellowThird) return;
        eddy(event, nimbusSecond);
        updraftSecond.current = () => {
          let ivoryThird = mapleSecond.current,
            jasperThird = nimbusSecond.current;
          if (
            ivoryThird &&
            jasperThird != null &&
            ivoryThird.hasPointerCapture?.(jasperThird)
          )
            try {
              ivoryThird.releasePointerCapture(jasperThird);
            } catch {}
          nimbusSecond.current === jasperThird && (nimbusSecond.current = null);
        };
        boltSecond({
          color: popcornSurfaceStyle_r,
          strokeWidth: 3,
          points: [yellowThird],
        });
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      if (
        anvilSecond &&
        !annotationMode &&
        glenSecond.current &&
        !knurlSecond()
      ) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      if (anvilSecond && annotationMode) {
        let kelpThird = glenSecond.current,
          lotusThird =
            kelpThird?.mode === "create"
              ? kelpThird.body.trim().length === 0
                ? "close"
                : "keep"
              : "replace";
        if (
          (kelpThird != null && lotusThird === "replace" && domeSecond(null),
          !yellowThird)
        ) {
          kelpThird != null && lotusThird !== "replace" && knurlSecond();
          knobSecond.current = null;
          mireSecond(null);
          return;
        }
        let mintThird = jadeite(
          havenSecond.selectedSlideElementTargets,
          yellowThird,
          cogSecond.k,
        );
        controller.setHoveredElementId(mintThird);
        let novaThird =
          mintThird == null
            ? null
            : (havenSecond.selectedSlideElementTargets.find(
                (item) => item.id === mintThird,
              ) ?? null);
        knobSecond.current = {
          pointerId: event.pointerId,
          start: yellowThird,
          draftClickAction: lotusThird,
          clickedElementTarget: novaThird,
        };
        eddy(event, nimbusSecond);
        mireSecond(null);
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      if (!yellowThird) {
        if (frameSecond?.isActive()) {
          frameSecond.clear();
          plumeSecond.current = null;
          return;
        }
        controller.clearElementSelection();
        plumeSecond.current = null;
        return;
      }
      if (!isEditing) {
        let oliveThird = kernel(havenSecond.hyperlinkTargets, yellowThird);
        if (oliveThird) {
          let quillThird = {
            id: oliveThird.id,
            url: oliveThird.url,
            point: {
              x: yellowThird.x,
              y: yellowThird.y,
            },
          };
          oliveThird.action !== undefined &&
            (quillThird.action = oliveThird.action);
          onHyperlinkClick?.(quillThird);
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        let prismThird = jadeite(
          havenSecond.selectedSlideElementTargets,
          yellowThird,
          cogSecond.k,
        );
        controller.setSelectedElementId(prismThird);
        plumeSecond.current = null;
        opalSecond.current = null;
        quillowSecond.current = null;
        rootSecond.current = null;
        silkSecond.current = false;
        return;
      }
      let zincThird = frameSecond.isActive(),
        amberThird =
          !zincThird &&
          havenSecond.selectedElementIds.length === 1 &&
          havenSecond.primarySelectedElementId &&
          plumeSecond.current === havenSecond.primarySelectedElementId
            ? havenSecond.primarySelectedElementId
            : undefined;
      if (
        (zincThird || amberThird) &&
        frameSecond.tryPointerDown(yellowThird, {
          shiftKey: event.shiftKey,
          restrictToBlockId: amberThird,
        })
      ) {
        event.preventDefault();
        opalSecond.current = "text";
        quillowSecond.current = null;
        rootSecond.current = null;
        silkSecond.current = false;
        plumeSecond.current = null;
        eddy(event, nimbusSecond);
        return;
      }
      zincThird && (frameSecond.clear(), (plumeSecond.current = null));
      let basaltThird = havenSecond.primarySelectedElementId
          ? havenSecond.selectedSlideElementTargets.find(
              (item) => item.id === havenSecond.primarySelectedElementId,
            )
          : null,
        cedarThird =
          havenSecond.selectedElementIds.length === 1
            ? (basaltThird?.frame ?? null)
            : null,
        daisyThird =
          havenSecond.selectedElementIds.length === 1 && basaltThird
            ? leaf([basaltThird], yellowThird, cogSecond.k)
            : null,
        emberThird = daisyThird
          ? null
          : opal(cedarThird, yellowThird, cogSecond.k),
        flintThird =
          !daisyThird &&
          !emberThird &&
          !!basaltThird?.canRotate &&
          plume(cedarThird, yellowThird, cogSecond.k),
        garnetThird = daisyThird
          ? daisyThird.endpoint === "from"
            ? "connector-from"
            : "connector-to"
          : emberThird
            ? "resize"
            : flintThird
              ? "rotate"
              : "move",
        hazelThird =
          daisyThird?.elementId ??
          (garnetThird === "move"
            ? jadeite(
                havenSecond.selectedSlideElementTargets,
                yellowThird,
                cogSecond.k,
              )
            : havenSecond.primarySelectedElementId);
      if (!hazelThird) {
        if (
          ((quillowSecond.current = null),
          (rootSecond.current = null),
          (silkSecond.current = false),
          zincThird)
        )
          return;
        eddy(event, nimbusSecond);
        opalSecond.current = "marquee";
        plumeSecond.current = null;
        controller.beginSelectionMarquee({
          point: yellowThird,
          additive: event.shiftKey,
        });
        return;
      }
      controller.beginElementInteraction({
        elementId: hazelThird,
        point: yellowThird,
        mode: garnetThird,
        corner: emberThird,
        preserveRatio: event.shiftKey,
        altKey: event.altKey,
        ctrlKey: event.ctrlKey,
      });
      eddy(event, nimbusSecond);
      opalSecond.current = "element";
      quillowSecond.current = hazelThird;
      rootSecond.current = yellowThird;
      silkSecond.current = false;
      plumeSecond.current &&
        plumeSecond.current !== hazelThird &&
        (plumeSecond.current = null);
    },
    bushingSecond = (event) => {
      let reefThird = anvil(
        event,
        jadeiteSecond.current,
        cogSecond,
        havenSecond,
        edgeSecond,
      );
      if ((tappetSecond(reefThird), beaconSecond && drawingMode)) {
        if (
          nimbusSecond.current != null &&
          nimbusSecond.current !== event.pointerId
        )
          return;
        reefThird &&
          pondSecond.current &&
          boltSecond((yarnThird) => {
            if (!yarnThird) return yarnThird;
            let zephyrThird = yarnThird.points[yarnThird.points.length - 1];
            return zephyrThird &&
              Math.hypot(
                reefThird.x - zephyrThird.x,
                reefThird.y - zephyrThird.y,
              ) < 0.5
              ? yarnThird
              : {
                  ...yarnThird,
                  points: [...yarnThird.points, reefThird],
                };
          });
        event.currentTarget.style.cursor = "crosshair";
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      if (anvilSecond && annotationMode) {
        let acornThird = knobSecond.current;
        if (
          acornThird != null &&
          nimbusSecond.current != null &&
          nimbusSecond.current !== event.pointerId
        )
          return;
        if (acornThird != null && reefThird) {
          _e(true);
          let coralThird =
            Math.hypot(
              reefThird.x - acornThird.start.x,
              reefThird.y - acornThird.start.y,
            ) >= ledge;
          coralThird &&
            glenSecond.current &&
            ((inletSecond.current = false), domeSecond(null));
          mireSecond(
            coralThird
              ? {
                  start: acornThird.start,
                  current: reefThird,
                }
              : null,
          );
          event.preventDefault();
          event.stopPropagation();
        }
        if (!reefThird) {
          controller.setHoveredElementId(null);
          event.currentTarget.style.cursor = "";
          return;
        }
        _e(true);
        let bloomThird = jadeite(
          havenSecond.selectedSlideElementTargets,
          reefThird,
          cogSecond.k,
        );
        controller.setHoveredElementId(bloomThird);
        event.currentTarget.style.cursor = glenSecond.current
          ? ""
          : PopcornSurfaceStyle_t;
        return;
      }
      if (opalSecond.current === "text") {
        reefThird && frameSecond.pointerMove(reefThird);
        return;
      }
      if (opalSecond.current === "marquee") {
        reefThird &&
          controller.updateSelectionMarquee({
            nextPoint: reefThird,
          });
        return;
      }
      if (opalSecond.current === "element" && reefThird) {
        rootSecond.current &&
          Math.hypot(
            reefThird.x - rootSecond.current.x,
            reefThird.y - rootSecond.current.y,
          ) > knob &&
          (silkSecond.current = true);
        controller.updateElementInteraction({
          nextPoint: reefThird,
          shiftKey: event.shiftKey,
          altKey: event.altKey,
          ctrlKey: event.ctrlKey,
        });
        return;
      }
      if (!isEditing) {
        if (reefThird && kernel(havenSecond.hyperlinkTargets, reefThird)) {
          controller.setHoveredElementId(null);
          event.currentTarget.style.cursor = "pointer";
          return;
        }
        let driftThird = reefThird
          ? jadeite(
              havenSecond.selectedSlideElementTargets,
              reefThird,
              cogSecond.k,
            )
          : null;
        controller.setHoveredElementId(driftThird);
        event.currentTarget.style.cursor = "";
        return;
      }
      if (!reefThird) {
        controller.setHoveredElementId(null);
        event.currentTarget.style.cursor = "";
        return;
      }
      let sageThird = havenSecond.primarySelectedElementId
          ? havenSecond.selectedSlideElementTargets.find(
              (item) => item.id === havenSecond.primarySelectedElementId,
            )
          : null,
        topazThird =
          havenSecond.selectedElementIds.length === 1
            ? (sageThird?.frame ?? null)
            : null,
        ultraThird =
          havenSecond.selectedElementIds.length === 1 && sageThird
            ? leaf([sageThird], reefThird, cogSecond.k)
            : null;
      if (ultraThird) {
        controller.setHoveredElementId(ultraThird.elementId);
        event.currentTarget.style.cursor = "crosshair";
        return;
      }
      let vaporThird = opal(topazThird, reefThird, cogSecond.k);
      if (vaporThird) {
        controller.setHoveredElementId(havenSecond.primarySelectedElementId);
        event.currentTarget.style.cursor =
          popcornSurfaceStyle_G(vaporThird) ?? "";
        return;
      }
      if (
        topazThird &&
        sageThird?.canRotate &&
        plume(topazThird, reefThird, cogSecond.k)
      ) {
        controller.setHoveredElementId(havenSecond.primarySelectedElementId);
        event.currentTarget.style.cursor =
          popcornElectronSurfaceStyleUnderscore();
        return;
      }
      if (
        frameSecond.isActive() &&
        frameSecond.hasTextCursorAtPoint(reefThird)
      ) {
        controller.setHoveredElementId(null);
        event.currentTarget.style.cursor = "text";
        return;
      }
      let wheatThird = jadeite(
        havenSecond.selectedSlideElementTargets,
        reefThird,
        cogSecond.k,
      );
      controller.setHoveredElementId(wheatThird);
      event.currentTarget.style.cursor = wheatThird ? "move" : "";
    },
    collarSecond = (event, eagleThird) => {
      if (beaconSecond && drawingMode) {
        if (
          nimbusSecond.current != null &&
          nimbusSecond.current !== event.pointerId
        )
          return;
        tappetSecond(
          anvil(
            event,
            jadeiteSecond.current,
            cogSecond,
            havenSecond,
            edgeSecond,
          ),
        );
        let irisThird = pondSecond.current;
        fjord(event, nimbusSecond);
        updraftSecond.current = null;
        boltSecond(null);
        eagleThird && mountSecond(irisThird);
        return;
      }
      if (anvilSecond && annotationMode) {
        if (
          nimbusSecond.current != null &&
          nimbusSecond.current !== event.pointerId
        )
          return;
        tappetSecond(
          anvil(
            event,
            jadeiteSecond.current,
            cogSecond,
            havenSecond,
            edgeSecond,
          ),
        );
        fjord(event, nimbusSecond);
        let jewelThird = knobSecond.current;
        if (
          ((knobSecond.current = null),
          mireSecond(null),
          !eagleThird || !jewelThird)
        )
          return;
        let knollThird = anvil(
          event,
          jadeiteSecond.current,
          cogSecond,
          havenSecond,
          edgeSecond,
        );
        if (!knollThird) return;
        let lunarThird = maple(jewelThird.start, knollThird),
          mossThird =
            Math.hypot(
              knollThird.x - jewelThird.start.x,
              knollThird.y - jewelThird.start.y,
            ) < ledge;
        if (mossThird) {
          if (jewelThird.clickedElementTarget) {
            switch (jewelThird.draftClickAction) {
              case "keep":
              case "close":
                knurlSecond();
                return;
              case "replace":
                break;
            }
            let orbitThird = jewelThird.clickedElementTarget,
              pineThird = $n({
                snapshot: havenSecond,
                elementIds: [orbitThird.id],
                primaryElementId: orbitThird.id,
                frame: orbitThird.frame,
                anchorPoint: knollThird,
              });
            if (!pineThird) return;
            controller.setHoveredElementId(null);
            _e(false);
            reviewTools?.annotation?.onStart?.("annotation_mode_pointer", {
              annotationMode,
            });
            inletSecond.current = false;
            domeSecond({
              mode: "create",
              target: pineThird,
              body: "",
            });
            return;
          }
          switch (jewelThird.draftClickAction) {
            case "keep":
            case "close":
              knurlSecond();
              return;
            case "replace":
              break;
          }
        }
        let northThird = canyon({
          snapshot: havenSecond,
          frame: mossThird
            ? {
                left: knollThird.x,
                top: knollThird.y,
                width: 0,
                height: 0,
              }
            : lunarThird,
          anchorPoint: knollThird,
          containedElements: mossThird ? [] : at,
        });
        if (!northThird) return;
        reviewTools?.annotation?.onStart?.("annotation_mode_pointer", {
          annotationMode,
        });
        inletSecond.current = false;
        domeSecond({
          mode: "create",
          target: northThird,
          body: "",
        });
        return;
      }
      if (
        nimbusSecond.current != null &&
        nimbusSecond.current !== event.pointerId
      )
        return;
      let frostThird = opalSecond.current;
      if (!frostThird) return;
      if (
        (tappetSecond(
          anvil(
            event,
            jadeiteSecond.current,
            cogSecond,
            havenSecond,
            edgeSecond,
          ),
        ),
        fjord(event, nimbusSecond),
        frostThird === "text")
      ) {
        opalSecond.current = null;
        frameSecond.pointerUp();
        return;
      }
      if (frostThird === "marquee") {
        opalSecond.current = null;
        quillowSecond.current = null;
        rootSecond.current = null;
        silkSecond.current = false;
        controller.endSelectionMarquee({
          commit: eagleThird,
        });
        return;
      }
      opalSecond.current = null;
      let glideThird = quillowSecond.current,
        honeyThird =
          !!eagleThird &&
          !silkSecond.current &&
          !!glideThird &&
          havenSecond.textLayoutBlocks.some((item) => item.id === glideThird);
      quillowSecond.current = null;
      rootSecond.current = null;
      silkSecond.current = false;
      controller.endElementInteraction({
        commit: eagleThird,
      });
      plumeSecond.current = honeyThird ? glideThird : null;
    },
    dowelSecond = (event) => {
      if (beaconSecond && drawingMode) {
        event.preventDefault();
        return;
      }
      if (anvilSecond && annotationMode) {
        event.preventDefault();
        return;
      }
      if (!isEditing) return;
      let questThird = beacon(
        event.clientX,
        event.clientY,
        jadeiteSecond.current,
        cogSecond,
        havenSecond,
        edgeSecond,
      );
      questThird &&
        (controller.endSelectionMarquee({
          commit: false,
        }),
        controller.endElementInteraction({
          commit: false,
        }),
        frameSecond.selectWordAtPoint(questThird) && event.preventDefault());
    },
    flangeSecond = (event) =>
      !event.metaKey && !event.ctrlKey
        ? false
        : event.key === "0"
          ? (runtime.fitToViewport(1), event.preventDefault(), true)
          : event.key === "=" || event.key === "+"
            ? (runtime.zoomTo(
                acorn(havenSecond.zoom + 0.1, havenSecond.fitScale ?? 1),
                {
                  settled: true,
                },
              ),
              event.preventDefault(),
              true)
            : event.key === "-"
              ? (runtime.zoomTo(
                  acorn(havenSecond.zoom - 0.1, havenSecond.fitScale ?? 1),
                  {
                    settled: true,
                  },
                ),
                event.preventDefault(),
                true)
              : false,
    gibSecond = (event) => {
      if (
        !(
          event.target instanceof HTMLElement &&
          event.target.closest("[data-testid='popcorn-annotation-editor']")
        )
      ) {
        if (
          anvilSecond &&
          reviewTools?.annotation?.onRequestLink &&
          !cragSecond &&
          !drawingMode &&
          !frameSecond.isActive() &&
          (event.metaKey || event.ctrlKey) &&
          !event.altKey &&
          !event.shiftKey &&
          event.key.toLowerCase() === "l"
        ) {
          if (!keystoneSecond) return;
          reviewTools.annotation.onRequestLink({
            requestId: PopcornSurfaceStyle_Y("selection-link"),
            artifactKind: "presentation",
            label: ever(keystoneSecond),
            target: keystoneSecond,
          });
          event.preventDefault();
          return;
        }
        if (event.key === "Escape" && pondSecond.current) {
          handleSecond();
          event.preventDefault();
          return;
        }
        if (event.key === "Escape" && drawingMode) {
          onDrawingModeChange?.(false);
          event.preventDefault();
          return;
        }
        if (
          !event.metaKey &&
          !event.ctrlKey &&
          !event.altKey &&
          !event.shiftKey &&
          havenSecond.selectedElementIds.length === 0 &&
          (event.key === "ArrowLeft" || event.key === "ArrowRight")
        ) {
          let ridgeThird = event.key === "ArrowLeft" ? -1 : 1,
            stormThird = Math.max(
              0,
              Math.min(
                havenSecond.slideCount - 1,
                havenSecond.selectedSlideIdx + ridgeThird,
              ),
            );
          stormThird !== havenSecond.selectedSlideIdx &&
            (controller.setSelectedSlideIdx(stormThird),
            event.preventDefault());
          return;
        }
        if (!isEditing) {
          if (event.key === "Escape" && cragSecond) {
            jacketSecond();
            event.preventDefault();
            return;
          }
          if (event.key === "Escape" && annotationMode) {
            onAnnotationModeChange?.(false);
            mireSecond(null);
            event.preventDefault();
            return;
          }
          flangeSecond(event);
          return;
        }
        if (event.key === "Escape" && cragSecond) {
          jacketSecond();
          event.preventDefault();
          return;
        }
        if (event.key === "Escape" && annotationMode) {
          onAnnotationModeChange?.(false);
          mireSecond(null);
          event.preventDefault();
          return;
        }
        if (annotationMode) return (flangeSecond(event), undefined);
        if (frameSecond.isActive()) {
          event.key === "Escape" &&
            (frameSecond.clear(), event.preventDefault());
          return;
        }
        if (
          event.key === "/" &&
          !event.metaKey &&
          !event.ctrlKey &&
          !event.altKey
        ) {
          let tideThird = !!jointSecond;
          zenithSecond(tideThird);
          tideThird && event.preventDefault();
          return;
        }
        if (event.key === "Escape" && yonderSecond) {
          zenithSecond(false);
          event.preventDefault();
          return;
        }
        if (
          event.key === "Enter" &&
          havenSecond.selectedElementIds.length === 1 &&
          havenSecond.primarySelectedElementId
        ) {
          frameSecond.activateBlockEnd(havenSecond.primarySelectedElementId) &&
            event.preventDefault();
          return;
        }
        if (event.key === "Backspace" || event.key === "Delete") {
          controller.deleteSelectedElement() && event.preventDefault();
          return;
        }
        if (
          !event.metaKey &&
          !event.ctrlKey &&
          !event.altKey &&
          !event.shiftKey &&
          havenSecond.selectedElementIds.length > 0
        ) {
          let unityThird = zenith(event.key);
          if (unityThird && controller.nudgeSelectedElements(unityThird)) {
            event.preventDefault();
            return;
          }
        }
        if (
          (event.metaKey || event.ctrlKey) &&
          event.key.toLowerCase() === "z"
        ) {
          event.shiftKey ? controller.redo() : controller.undo();
          event.preventDefault();
          return;
        }
        if (
          (event.metaKey || event.ctrlKey) &&
          event.key.toLowerCase() === "y"
        ) {
          controller.redo();
          event.preventDefault();
          return;
        }
        flangeSecond(event);
      }
    },
    hubSecond =
      anvilSecond &&
      !annotationMode &&
      !drawingMode &&
      !cragSecond &&
      !havenSecond.textEditState?.activeBlockId;
  return undefined as any;
}
