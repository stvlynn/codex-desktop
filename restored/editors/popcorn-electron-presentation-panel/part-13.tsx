// Restored from ref/webview/assets/PopcornElectronPresentationPanel-B28phSkk.js
// Wave FZ — full polished body from `PopcornElectronPresentationPanel-B28phSkk/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 106/111).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 13/16
/* split-lane-import-depth:1 */

import type { ReactElement, ReactNode } from "react";

// Wave5d soft stubs.
const AppInitialRt: any = undefined;
const _t: any = undefined;
const alpha: any = undefined;
const bloom: any = undefined;
const cliff: any = undefined;
const gear: any = undefined;
const hinge: any = undefined;
const iron: any = undefined;
const keystone: any = undefined;
const latch: any = undefined;
const motor: any = undefined;
const pond: any = undefined;
const quill: any = undefined;
const vapor: any = undefined;
const yard: any = undefined;

import { ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
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

function Bolt({
  controller,
  plugins = [],
  slideThumbnailPlacement = "responsive",
  title = "presentation.pptx",
  fileMenuContent,
  headerRightContent,
  headerTitleContent,
  zoomToFitLabel,
  renderHeaderZoomControl,
  onClose,
  renderSlideThumbnailOverlay,
  className,
  enablePageNavigation,
  theme = "web",
  isEditing = true,
  hideSpeakerNotes: leverThird = false,
  reviewTools,
  onHyperlinkClick,
  annotationsEnabled = true,
  drawingAnnotationsEnabled = true,
  commentThreadsEnabled = true,
}) {
  let mountThird = RemoteTextEditSessionW(
    controller,
    gear.useCallback(() => quill(), []),
  );
  if (!mountThird) return null;
  let nozzleThird = cliff(mountThird),
    { panels, stageOverlays } = gear.useMemo(() => vapor(plugins), [plugins]),
    platenThird =
      annotationsEnabled && reviewTools?.annotation?.enabled !== false,
    [ratchetThird, shimThird] = gear.useState(false),
    tappetThird =
      drawingAnnotationsEnabled && reviewTools?.drawing?.enabled !== false,
    [arborThird, bushingThird] = gear.useState(false),
    [collarThird, dowelThird] = gear.useState(0),
    flangeThird = gear.useMemo(() => new pond(), []);
  gear.useEffect(() => {
    platenThird || shimThird(false);
  }, [platenThird]);
  gear.useEffect(() => {
    tappetThird || bushingThird(false);
  }, [tappetThird]);
  gear.useEffect(() => {
    !ratchetThird ||
      !platenThird ||
      (mountThird.clearElementSelection(),
      mountThird.setHoveredElementId(null));
  }, [platenThird, ratchetThird, mountThird]);
  gear.useEffect(() => {
    !arborThird ||
      !tappetThird ||
      (mountThird.clearElementSelection(),
      mountThird.setHoveredElementId(null));
  }, [mountThird, tappetThird, arborThird]);
  gear.useEffect(() => {
    if (!ratchetThird) return;
    let nickelFourth = (event) => {
      event.key === "Escape" &&
        ((event.target instanceof HTMLElement &&
          event.target.closest("[data-testid='popcorn-annotation-editor']")) ||
          shimThird(false));
    };
    return (
      window.addEventListener("keydown", nickelFourth, true),
      () => {
        window.removeEventListener("keydown", nickelFourth, true);
      }
    );
  }, [ratchetThird]);
  gear.useEffect(() => {
    if (!arborThird) return;
    let onyxFourth = (event) => {
      event.key === "Escape" && bushingThird(false);
    };
    return (
      window.addEventListener("keydown", onyxFourth, true),
      () => {
        window.removeEventListener("keydown", onyxFourth, true);
      }
    );
  }, [arborThird]);
  let [gibThird, hubThird] = gear.useState(() =>
      Object.fromEntries(
        panels.map((item) => [item.id, item.defaultOpen ?? false]),
      ),
    ),
    [idlerThird, jigThird] = gear.useState(hinge),
    [keeperThird, lugThird] = gear.useState(() =>
      Object.fromEntries(nozzleThird.slideIds.map((item) => [item, null])),
    ),
    [be, mandrelThird] = gear.useState(() =>
      Object.fromEntries(nozzleThird.slideIds.map((item) => [item, null])),
    ),
    [nippleThird, orificeThird] = gear.useState(() => nozzleThird.slideIds),
    [pinThird, raceThird] = gear.useState(null),
    [sleeveThird, trunnionThird] = gear.useState(false),
    [bossThird, camThird] = gear.useState(false),
    [detentThird, eccentricThird] = gear.useState(false),
    [followerThird, guideThird] = gear.useState(false),
    [helixThird, impellerThird] = gear.useState(() =>
      typeof window < "u" && typeof window.matchMedia == "function"
        ? window.matchMedia("(min-width: 900px)").matches
        : false,
    ),
    journalThird = gear.useRef(null),
    kingpinThird = gear.useRef(null),
    landThird = gear.useRef([]),
    meshThird = gear.useRef([]),
    neckThird = gear.useRef(null),
    padThird = gear.useRef(new Set()),
    quillshaftThird = gear.useRef(keeperThird),
    rollerThird = gear.useRef(be),
    spindleThird = gear.useRef(nippleThird),
    thrustThird = useDndSensors(
      stack(AppInitialRt, {
        activationConstraint: {
          distance: 4,
        },
      }),
    ),
    yokeThird = gear.useMemo(() => [restrictToVerticalAxis], []),
    baffleThird = slideThumbnailPlacement === "left",
    capstanThird = slideThumbnailPlacement === "bottom",
    diaphragmThird = theme === "codex",
    elbowThird = slideThumbnailPlacement === "responsive",
    ferruleThird = diaphragmThird && elbowThird,
    grommetThird = enablePageNavigation ?? diaphragmThird,
    headerThird = bossThird && (baffleThird || elbowThird || ferruleThird),
    injectorThird =
      !leverThird && (isEditing || nozzleThird.notesText.trim().length > 0),
    jumperThird = injectorThird && helixThird && idlerThird > 0,
    kerfThird = gear.useMemo(
      () => ({
        left: headerThird ? iron : 0,
        top: 0,
        right: 0,
        bottom: jumperThird ? yard(idlerThird, theme) : 0,
      }),
      [idlerThird, jumperThird, headerThird, theme],
    );
  gear.useEffect(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    let pearlFourth = window.matchMedia("(min-width: 900px)"),
      quartzFourth = pearlFourth,
      riverFourth = () => {
        impellerThird((slateFourth) =>
          slateFourth === pearlFourth.matches
            ? slateFourth
            : pearlFourth.matches,
        );
      };
    return (
      riverFourth(),
      typeof pearlFourth.addEventListener == "function"
        ? pearlFourth.addEventListener("change", riverFourth)
        : quartzFourth.addListener?.(riverFourth),
      () => {
        typeof pearlFourth.removeEventListener == "function"
          ? pearlFourth.removeEventListener("change", riverFourth)
          : quartzFourth.removeListener?.(riverFourth);
      }
    );
  }, []);
  popcornSurfaceStyle_P(() => {
    let timberFourth = journalThird.current;
    if (!timberFourth) return;
    let umbraFourth = null,
      violetFourth = (xenonFourth) => {
        let yellowFourth = xenonFourth >= 749,
          zincFourth = elbowThird && xenonFourth > 0 && xenonFourth <= 688;
        camThird((amberFourth) =>
          amberFourth === yellowFourth ? amberFourth : yellowFourth,
        );
        eccentricThird((basaltFourth) => basaltFourth || true);
        guideThird((cedarFourth) =>
          cedarFourth === zincFourth ? cedarFourth : zincFourth,
        );
      };
    if (
      (violetFourth(timberFourth.clientWidth),
      typeof window < "u" &&
        typeof window.requestAnimationFrame == "function" &&
        (umbraFourth = window.requestAnimationFrame(() => {
          violetFourth(timberFourth.clientWidth);
        })),
      typeof ResizeObserver > "u")
    )
      return () => {
        umbraFourth != null &&
          typeof window.cancelAnimationFrame == "function" &&
          window.cancelAnimationFrame(umbraFourth);
      };
    let willowFourth = new ResizeObserver((daisyFourth) => {
      let emberFourth = daisyFourth[0];
      violetFourth(
        emberFourth?.contentRect.width && emberFourth.contentRect.width > 0
          ? emberFourth.contentRect.width
          : timberFourth.clientWidth,
      );
    });
    return (
      willowFourth.observe(timberFourth),
      () => {
        umbraFourth != null &&
          typeof window.cancelAnimationFrame == "function" &&
          window.cancelAnimationFrame(umbraFourth);
        willowFourth.disconnect();
      }
    );
  }, [slideThumbnailPlacement, elbowThird]);
  gear.useEffect(() => {
    hubThird((flintFourth) => {
      let garnetFourth = {},
        hazelFourth = false;
      for (let ivoryFourth of panels) {
        let jasperFourth =
          flintFourth[ivoryFourth.id] ?? ivoryFourth.defaultOpen ?? false;
        garnetFourth[ivoryFourth.id] = jasperFourth;
        Object.is(flintFourth[ivoryFourth.id], jasperFourth) ||
          (hazelFourth = true);
      }
      for (let kelpFourth of Object.keys(flintFourth))
        if (!(kelpFourth in garnetFourth)) {
          hazelFourth = true;
          break;
        }
      return hazelFourth ? garnetFourth : flintFourth;
    });
  }, [panels]);
  let $e = gear.useMemo(
    () => ({
      isPanelOpen: (lotusFourth) => gibThird[lotusFourth] ?? false,
      openPanel: (mintFourth) => {
        hubThird((novaFourth) => ({
          ...novaFourth,
          [mintFourth]: true,
        }));
      },
      closePanel: (oliveFourth) => {
        hubThird((prismFourth) => ({
          ...prismFourth,
          [oliveFourth]: false,
        }));
      },
      togglePanel: (quillFourth) => {
        hubThird((reefFourth) => ({
          ...reefFourth,
          [quillFourth]: !(reefFourth[quillFourth] ?? false),
        }));
      },
    }),
    [gibThird],
  );
  gear.useEffect(() => {
    quillshaftThird.current = keeperThird;
    rollerThird.current = be;
  }, [be, keeperThird]);
  gear.useEffect(() => {
    spindleThird.current = nippleThird;
  }, [nippleThird]);
  gear.useEffect(() => {
    orificeThird(nozzleThird.slideIds);
    lugThird((sageFourth) => {
      let topazFourth = {};
      for (let ultraFourth of nozzleThird.slideIds)
        topazFourth[ultraFourth] = sageFourth[ultraFourth] ?? null;
      return topazFourth;
    });
    mandrelThird((vaporFourth) => {
      let wheatFourth = {};
      for (let yarnFourth of nozzleThird.slideIds)
        wheatFourth[yarnFourth] = vaporFourth[yarnFourth] ?? null;
      return wheatFourth;
    });
  }, [nozzleThird.slideIds]);
  let louverThird = gear.useMemo(
      () =>
        Object.fromEntries(
          nozzleThird.slideIds.map((item, index) => [
            item,
            nozzleThird.slideLabels[index] ?? `Slide ${index + 1}`,
          ]),
        ),
      [nozzleThird.slideIds, nozzleThird.slideLabels],
    ),
    manifoldThird = gear.useMemo(
      () =>
        Object.fromEntries(
          nozzleThird.slideIds.map((item, index) => [item, index]),
        ),
      [nozzleThird.slideIds],
    ),
    nipThird = nozzleThird.slideIds[nozzleThird.selectedSlideIdx] ?? null,
    outletThird =
      nozzleThird.fitScale ??
      (nozzleThird.slideRect && nozzleThird.zoom > 0
        ? nozzleThird.slideRect.scale / nozzleThird.zoom
        : null),
    packingThird = outletThird ? bloom(outletThird) : null,
    at =
      nozzleThird.slideRect?.scale ??
      bloom(outletThird ? outletThird * nozzleThird.zoom : nozzleThird.zoom),
    reducerThird =
      packingThird != null && Math.abs(nozzleThird.zoom - 1) < keystone,
    strainerThird = elbowThird && (!detentThird || followerThird),
    teeThird = !strainerThird,
    unionThird = grommetThird && !strainerThird,
    ventThird = (zephyrFourth) => {
      let acornFourth = bloom(zephyrFourth);
      if (outletThird && outletThird > 0) {
        mountThird.setZoom(acornFourth / outletThird);
        return;
      }
      mountThird.setZoom(acornFourth);
    },
    wyeThird =
      packingThird != null && zoomToFitLabel != null
        ? {
            label: zoomToFitLabel,
            selected: reducerThird,
            onSelect: () => {
              flangeThird.fitToViewport(1);
            },
          }
        : undefined,
    zenerThird = teeThird
      ? (renderHeaderZoomControl?.({
          fitOption: wyeThird,
          onZoomPercentChange: (bloomFourth) => {
            ventThird(bloomFourth / 100);
          },
          triggerTestId: "popcorn-presentation-zoom-select",
          zoomPercent: Math.round(at * 100),
        }) ?? (
          <RemoteTextEditSessionZoomControl
            {...{
              zoom: at,
              onZoomChange: ventThird,
              options: latch,
              fitOption: wyeThird,
              testId: "popcorn-presentation-zoom-select",
            }}
          />
        ))
      : null,
    alphaFourth = gear.useCallback(
      (coralFourth) => {
        coralFourth >= 0 && mountThird.setSelectedSlideIdx(coralFourth);
      },
      [mountThird],
    ),
    _t = gear.useCallback(
      (driftFourth) => {
        driftFourth >= 0 && mountThird.deleteSlide(driftFourth);
      },
      [mountThird],
    ),
    bravoFourth = gear.useCallback((eagleFourth, frostFourth, glideFourth) => {
      landThird.current[eagleFourth] = frostFourth;
      frostFourth &&
        neckThird.current &&
        glideFourth &&
        neckThird.current.observe(frostFourth);
    }, []),
    copperFourth = gear.useCallback(() => {}, []),
    deltaFourth = gear.useCallback(() => {
      mountThird.addSlide();
    }, [mountThird]),
    echoFourth = gear.useCallback(
      async (honeyFourth, irisFourth) => {
        if (
          honeyFourth < 0 ||
          honeyFourth >= mountThird.getSnapshot().slideCount
        )
          return;
        let jewelFourth = mountThird.getSnapshot().slideIds[honeyFourth];
        if (!jewelFourth) return;
        let knollFourth = irisFourth?.cacheKind === "stacked-page",
          lunarFourth = knollFourth
            ? rollerThird.current[jewelFourth]
            : quillshaftThird.current[jewelFourth],
          mossFourth = `${knollFourth ? "stacked-page" : "rail"}:${jewelFourth}`;
        if (
          !(
            (!irisFourth?.force && lunarFourth != null) ||
            padThird.current.has(mossFourth) ||
            honeyFourth < 0 ||
            honeyFourth >= mountThird.getSnapshot().slideCount
          )
        ) {
          padThird.current.add(mossFourth);
          try {
            await alpha();
            let northFourth = await mountThird.requestSlideThumbnail(
              honeyFourth,
              knollFourth
                ? {
                    cssMaxPx: motor,
                  }
                : undefined,
            );
            (knollFourth ? mandrelThird : lugThird)((orbitFourth) =>
              orbitFourth[jewelFourth] === northFourth
                ? orbitFourth
                : {
                    ...orbitFourth,
                    [jewelFourth]: northFourth,
                  },
            );
          } finally {
            padThird.current.delete(mossFourth);
          }
        }
      },
      [mountThird],
    );
  gear.useEffect(() => {
    let pineFourth = nozzleThird.slideIds[nozzleThird.selectedSlideIdx];
    pineFourth &&
      (padThird.current.delete(`rail:${pineFourth}`),
      padThird.current.delete(`stacked-page:${pineFourth}`));
    echoFourth(nozzleThird.selectedSlideIdx, {
      force: true,
    });
    pineFourth &&
      rollerThird.current[pineFourth] != null &&
      echoFourth(nozzleThird.selectedSlideIdx, {
        cacheKind: "stacked-page",
        force: true,
      });
  }, [
    echoFourth,
    nozzleThird.presentationVersion,
    nozzleThird.selectedSlideIdx,
    nozzleThird.slideIds,
  ]);
  gear.useEffect(() => {
    if (!(typeof IntersectionObserver > "u")) {
      neckThird.current?.disconnect();
      neckThird.current = new IntersectionObserver(
        (questFourth) => {
          for (let ridgeFourth of questFourth) {
            let stormFourth = ridgeFourth.target.getAttribute("data-index");
            if (!ridgeFourth.isIntersecting || stormFourth == null) continue;
            let tideFourth = Number(stormFourth);
            if (!Number.isFinite(tideFourth)) continue;
            let unityFourth =
                ridgeFourth.target.getAttribute("data-thumbnail-cache-kind") ===
                "stacked-page"
                  ? "stacked-page"
                  : "rail",
              valeFourth = unityFourth === "stacked-page";
            echoFourth(tideFourth, {
              cacheKind: unityFourth,
              force: valeFourth,
            });
            echoFourth(tideFourth + 1, {
              cacheKind: unityFourth,
              force: valeFourth,
            });
            neckThird.current?.unobserve(ridgeFourth.target);
          }
        },
        {
          root: journalThird.current,
          rootMargin: "200px",
          threshold: 0.05,
        },
      );
      for (let waveFourth of [...landThird.current, ...meshThird.current])
        waveFourth && neckThird.current.observe(waveFourth);
      return () => {
        neckThird.current?.disconnect();
      };
    }
  }, [echoFourth, nozzleThird.presentationVersion, nozzleThird.slideCount]);
  return undefined as any;
}
