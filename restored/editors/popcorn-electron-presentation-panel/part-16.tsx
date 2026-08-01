// Restored from ref/webview/assets/PopcornElectronPresentationPanel-B28phSkk.js
// Wave FZ — full polished body from `PopcornElectronPresentationPanel-B28phSkk/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 106/111).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 16/16
/* split-lane-import-depth:1 */

import type { ReactElement, ReactNode } from "react";

// Wave5d soft stubs.
const Bolt: any = undefined;
const IntlProvider: any = undefined;
const gasket: any = undefined;
const sage: any = undefined;
const topaz: any = undefined;

export type PopcornElectronPresentationPanelProps = {
  className?: string;
  externalCrdtUpdates?: unknown;
  headerTitleContent?: ReactNode;
  headerRightContent?: ReactNode;
  zoomToFitLabel?: ReactNode;
  renderHeaderZoomControl?: (props: Record<string, unknown>) => ReactNode;
  initialCrdtState?: unknown;
  initialPresentationProto?: unknown;
  initialSelectedSlideIdx?: number;
  initialZoom?: number;
  onCrdtUpdate?: (update: unknown) => void;
  pendingImageGenerations?: unknown[];
  resolveImageHydrationAssets?: (...args: unknown[]) => unknown;
  title?: string;
  theme?: string;
  isEditing?: boolean;
  hideSpeakerNotes?: boolean;
  navigationCommand?: unknown;
  reviewTools?: {
    annotation?: unknown;
    drawing?: unknown;
    [key: string]: unknown;
  };
  onHyperlinkClick?: (...args: unknown[]) => void;
  annotationsEnabled?: boolean;
  drawingAnnotationsEnabled?: boolean;
  enablePageNavigation?: boolean;
  artifactSearchEnabled?: boolean;
  commentThreadsEnabled?: boolean;
  workerFactory?: unknown;
};

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

export function PopcornElectronPresentationPanel({
  className,
  externalCrdtUpdates,
  headerTitleContent,
  headerRightContent,
  zoomToFitLabel,
  renderHeaderZoomControl,
  initialCrdtState,
  initialPresentationProto,
  initialSelectedSlideIdx,
  initialZoom,
  onCrdtUpdate,
  pendingImageGenerations = [],
  resolveImageHydrationAssets,
  title = "codex-popcorn-demo.pptx",
  theme = "codex",
  isEditing = false,
  hideSpeakerNotes = false,
  navigationCommand,
  reviewTools,
  onHyperlinkClick,
  annotationsEnabled = false,
  drawingAnnotationsEnabled = false,
  enablePageNavigation: eddyFourth,
  artifactSearchEnabled = false,
  commentThreadsEnabled = false,
  workerFactory,
}: PopcornElectronPresentationPanelProps): ReactElement {
  let fjordFourth = popcornSurfaceStyle_P({
      initialCrdtState,
      externalCrdtUpdates,
    }),
    glenFourth = lever.useRef(initialPresentationProto),
    hearthFourth = lever.useRef(null),
    inletFourth = RemoteTextEditSessionW(
      undefined,
      () =>
        new sage({
          initialCrdtState: fjordFourth.initialCrdtState,
          initialSelectedSlideIdx,
          initialZoom,
          presentationProto: initialPresentationProto ?? handle().toProto(),
          workerFactory,
        }),
    ),
    jettyFourth = lever.useRef(0),
    knobFourth = popcornSurfaceStyle_O({
      artifactLabel: "Presentation",
      controller: inletFourth,
      externalCrdtUpdates: fjordFourth.externalCrdtUpdates,
      onCrdtUpdate,
    }),
    ledgeFourth = lever.useMemo(
      () => jacket(pendingImageGenerations),
      [pendingImageGenerations],
    ),
    mireFourth = lever.useMemo(() => knurl(ledgeFourth), [ledgeFourth]);
  return (
    lever.useEffect(() => {
      inletFourth &&
        glenFourth.current !== initialPresentationProto &&
        ((glenFourth.current = initialPresentationProto),
        inletFourth.replaceFromProto(
          initialPresentationProto ?? handle().toProto(),
        ));
    }, [inletFourth, initialPresentationProto]),
    lever.useEffect(() => {
      if (!inletFourth || navigationCommand == null) return;
      let nookFourth = () => {
        if (navigationCommand.requestId === hearthFourth.current) return true;
        let pondFourth = null;
        if (navigationCommand.slideId != null) {
          let quarryFourth = inletFourth
            .getSnapshot()
            .slideIds.indexOf(navigationCommand.slideId);
          quarryFourth >= 0 && (pondFourth = quarryFourth);
        }
        return (
          pondFourth == null &&
            navigationCommand.slideNumber != null &&
            (pondFourth = navigationCommand.slideNumber - 1),
          pondFourth == null
            ? navigationCommand.slideId == null
            : ((hearthFourth.current = navigationCommand.requestId),
              inletFourth.setSelectedSlideIdx(pondFourth),
              inletFourth.setSelectedElementId(
                navigationCommand.objectId ?? null,
              ),
              true)
        );
      };
      if (nookFourth()) return;
      let oxbowFourth = inletFourth.subscribe(() => {
        nookFourth() && oxbowFourth();
      });
      return oxbowFourth;
    }, [inletFourth, navigationCommand]),
    lever.useEffect(() => {
      if (inletFourth && resolveImageHydrationAssets)
        return inletFourth.subscribeImageHydrationRequests((rapidsFourth) => {
          let spurFourth = jettyFourth.current + 1;
          jettyFourth.current = spurFourth;
          resolveImageHydrationAssets(rapidsFourth)
            .then((value) => {
              if (!(jettyFourth.current !== spurFourth || value.length === 0))
                return inletFourth.hydrateImageAssets(value);
            })
            .catch(() => {});
        });
    }, [inletFourth, resolveImageHydrationAssets]),
    inletFourth ? (
      <section
        className={IntlProvider(
          "no-drag relative h-full min-h-0 bg-token-bg-primary",
          className,
        )}
        style={popcornSurfaceStyle_T(theme)}
        data-codex-popcorn-editor={true}
        data-testid="popcorn-electron-presentation-panel"
      >
        {
          <Bolt
            {...{
              className: "h-full min-h-0",
              controller: inletFourth,
              headerTitleContent,
              headerRightContent:
                ledgeFourth.length > 0 ? (
                  <>
                    {
                      <Insert
                        {...{
                          count: ledgeFourth.length,
                        }}
                      />
                    }
                    {headerRightContent}
                  </>
                ) : (
                  headerRightContent
                ),
              renderHeaderZoomControl,
              zoomToFitLabel,
              renderSlideThumbnailOverlay: (torFourth) => {
                let updraftFourth = mireFourth[torFourth] ?? 0;
                return updraftFourth === 0 ? null : (
                  <div
                    data-testid={`popcorn-pending-image-thumb-${torFourth}`}
                    className="absolute top-2 right-2 rounded-full bg-amber-100/95 px-2 py-0.5 text-[11px] font-semibold text-amber-900 shadow-sm"
                  >
                    {updraftFourth}
                  </div>
                );
              },
              slideThumbnailPlacement: "responsive",
              title,
              theme,
              isEditing,
              hideSpeakerNotes,
              reviewTools,
              onHyperlinkClick,
              annotationsEnabled,
              drawingAnnotationsEnabled,
              enablePageNavigation: eddyFourth,
              artifactSearchEnabled,
              commentThreadsEnabled,
            }}
          />
        }
        {
          <PopcornSurfaceStyle_R
            {...{
              artifactLabel: "Presentation",
              restoreState: knobFourth,
            }}
          />
        }
      </section>
    ) : null
  );
}
function handle() {
  let vergeFourth = workbookO.create(),
    weirFourth = vergeFourth.slides.add();
  weirFourth.background.fill = "#FFFFFF";
  let yardFourth = weirFourth.shapes.add({
    geometry: "textbox",
    position: {
      left: 140,
      top: 188,
      width: 1e3,
      height: 88,
    },
  });
  yardFourth.text = "Untitled presentation";
  yardFourth.text.fontSize = 30;
  yardFourth.text.bold = true;
  yardFourth.text.alignment = "center";
  yardFourth.text.verticalAlignment = "middle";
  yardFourth.text.color = "#111111";
  let anchorFourth = weirFourth.shapes.add({
    geometry: "textbox",
    position: {
      left: 220,
      top: 300,
      width: 840,
      height: 56,
    },
  });
  return (
    (anchorFourth.text = "Import a presentation to replace this placeholder."),
    (anchorFourth.text.fontSize = 18),
    (anchorFourth.text.alignment = "center"),
    (anchorFourth.text.verticalAlignment = "middle"),
    (anchorFourth.text.color = "#666666"),
    vergeFourth
  );
}
function Insert({ count }) {
  return (
    <div
      data-testid="popcorn-pending-image-summary"
      className="rounded-full bg-amber-100/90 px-3 py-1 text-xs font-semibold text-amber-900"
    >
      {count === 1 ? "1 image pending" : `${count} images pending`}
    </div>
  );
}
function jacket(boltFourth) {
  return boltFourth.flatMap((item) =>
    item.status === "failed" ||
    item.target.type !== "presentation" ||
    typeof item.target.aid != "string" ||
    !item.target.aid ||
    !item.slideId ||
    !item.elementId
      ? []
      : [
          {
            requestId: item.requestId,
            slideId: item.slideId,
            elementId: item.elementId,
          },
        ],
  );
}
function knurl(cogFourth) {
  let discFourth = {};
  for (let edgeFourth of cogFourth)
    discFourth[edgeFourth.slideId] = (discFourth[edgeFourth.slideId] ?? 0) + 1;
  return discFourth;
}
var lever, mount;
esmInit(() => {
  workbookS();
  ensureComposerEsm_Tft_Init();
  lever = commonJsInit(react());
  gasket();
  topaz();
  RemoteTextEditSessionLowerX();
  popcornSurfaceStyle_I();
  popcornSurfaceStyle_N();
})();
