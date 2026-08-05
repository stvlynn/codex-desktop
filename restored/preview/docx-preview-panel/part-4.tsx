// Restored from ref/webview/assets/docx-preview-panel-D6d6eiCV.js
// Wave FY — full polished body from `docx-preview-panel-D6d6eiCV/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 20 (verified 56/76).
// Wave FZ-support — PascalCase invalid JSX tags: at→At, DocxPreviewPanelHelper24→DocxPreviewPanelHelper24, DocxPreviewPanelHelper25→DocxPreviewPanelHelper25, DocxPreviewPanelHelper26→DocxPreviewPanelHelper26, DocxPreviewPanelHelper27→DocxPreviewPanelHelper27, DocxPreviewPanelHelper41→DocxPreviewPanelHelper41, isLocalOrNullValue→IsLocalOrNullValue, isWhitespaceOrEofCharCode→IsWhitespaceOrEofCharCode, queueAutomationRun→QueueAutomationRun, resolveWorktreeHandoffDirection→ResolveWorktreeHandoffDirection.
// Careful split 4/5
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { getAppSurfaceDisplayName } from "../../app/app-surface-display-name";
import {
  ensureArtifactAnalyticsInit,
  logArtifactAnnotationSubmitted,
  logArtifactRefreshClicked,
} from "../../artifact/artifact-analytics";
import {
  buildArtifactAnnotationCommentForTarget,
  collectRemovedArtifactAnnotationIds,
  nextArtifactAnnotationCommentLine,
} from "../../artifact/artifact-annotation-comment";
import { ArtifactPreviewDownloadButton } from "../../artifact/artifact-preview-download-button";
import { artifactTabLoading } from "../../artifact/artifact-tab-loading";
import { hypotDistance } from "../../artifact/hypot-distance";
import { QueueAutomationRun } from "../../automation/queue-automation-run";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_S8_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Z8_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { deferredComposerBV } from "../../composer/deferred-composer-bv";
import { DesignComposerSurface } from "../../composer/design-composer-surface";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { useThreadHandoffDisabledReason } from "../../conversation/use-thread-handoff-disabled-reason";
import { useTurnDiffEnrichmentQuery } from "../../diff/use-turn-diff-enrichment-query";
import { ResolveWorktreeHandoffDirection } from "../../environments/worktree-handoff-helpers";
import { ensureDebugPanelParsersInit } from "../../hooks/debug-panel-turn-files";
import { useResizeObserver } from "../../hooks/use-resize-observer";
import { IsLocalOrNullValue } from "../../hosts/is-local-or-null-value";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconGg } from "../../icons/app-icon-gg";
import { AppIconUg } from "../../icons/app-icon-ug";
import { AppIconYg } from "../../icons/app-icon-yg";
import { AppIconYj } from "../../icons/app-icon-yj";
import { IsWhitespaceOrEofCharCode } from "../../markdown/is-whitespace-or-eof-char-code";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { findSidebarSectionElement } from "../../navigation/app-action-dom";
import { newConversationEntrypointId } from "../../navigation/new-conversation-entrypoint-id";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureViteModulepreloadRuntime } from "../../runtime/vite-preload";
import {
  ArtifactPreviewStatus,
  ensureArtifactPreviewStatusInit,
} from "../../ui/artifact-preview-status";
import { deferredT1 } from "../../ui/deferred-t1";
import { getIconPixelSize } from "../../ui/icon-pixel-size";
import { MemoizedValueBridge } from "../../ui/memoized-value-bridge";
import { OperationStatusOverlay } from "../../ui/operation-status-overlay";
import { identityValue } from "../../utils/identity-value";
import { pickSourcePosition } from "../../utils/pick-source-position";
import { safeZodValue } from "../../utils/safe-zod-value";
import { ToWorktree } from "../../worktree/to-worktree";

// Cross-part soft stubs.
const AppInitialHgt: any = undefined;
const AppInitialIO: any = undefined;
const AppInitialJR: any = undefined;
const AppInitialKR: any = undefined;
const AppInitialVj: any = undefined;
const AppInitialZO: any = undefined;
const DocxPreviewPanelHelper41: any = undefined;
const NotebookPreviewOpenActions: any = undefined;
const ZoomPercentMenuControl: any = undefined;
const alpha: any = undefined;
const amber: any = undefined;
const copper: any = undefined;
const daisy: any = undefined;
const deferredUiE1: any = undefined;
const deferredUiGR: any = undefined;
const reef: any = undefined;
const slate: any = undefined;

function sage(event) {
  return event.stopPropagation();
}
function topaz(torPrime) {
  return torPrime === "image" || torPrime === "drawing";
}
var ultra,
  vapor,
  wheat,
  yarn,
  zephyr = esmInit(() => {
    ultra = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    vapor = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    AppInitialIO();
    AppInitialZO();
    findSidebarSectionElement();
    ensureAppScopeInit();
    ensureArtifactAnalyticsInit();
    alpha();
    copper();
    slate();
    amber();
    daisy();
    reef();
    useThreadHandoffDisabledReason();
    ToWorktree();
    yarn = () => {};
  });
export function DocxPreviewPanel(updraftPrime: unknown) {
  let {
      bytes,
      chromeMode = "default",
      disableAnnotations = false,
      disableFileActions = false,
      headerRightContent,
      headerTitleContent,
      headerZoomLeadingContent,
      hostId,
      onBeforeOpen,
      path,
      ref: vergePrime,
      tabId,
      title,
    } = updraftPrime,
    weirPrime = CodexPluginActionType(ensureComposerEsm_S8_Init),
    yardPrime = orbit.use(wave),
    anchorPrime = getIconPixelSize(),
    boltPrime = orbit.useRef(null),
    cogPrime = orbit.useRef(null),
    discPrime = () => {
      cogPrime.current != null &&
        (window.cancelAnimationFrame(cogPrime.current),
        (cogPrime.current = null));
    };
  let edgePrime = discPrime,
    forgePrime = (mountPrime) => {
      let nozzlePrime = boltPrime.current;
      nozzlePrime != null &&
        iris(mountPrime, nozzlePrime, cogPrime, anchorPrime) &&
        (boltPrime.current = null);
    };
  let gearPrime = forgePrime,
    hingePrime = {
      bytes,
      onPagesRendered: gearPrime,
      renderAsync: yardPrime,
    };
  let {
      bodyContainerElementRef,
      bodyContainerRef,
      loadState,
      pageElements,
      styleContainerRef,
      totalPages,
    } = bloom(hingePrime),
    ironPrime = ensureDebugPanelParsersInit(weirPrime.value);
  let jointPrime = ironPrime,
    keystonePrime =
      jointPrime ??
      newConversationEntrypointId({
        entrypoint: "home",
      });
  let latchPrime = keystonePrime,
    motorPrime = CodexBrowserSurfaceActionType(AppInitialVj, latchPrime),
    nutPrime = (platenPrime) => {
      MemoizedValueBridge(weirPrime, latchPrime, platenPrime);
    };
  let pistonPrime = nutPrime,
    _e,
    rivetPrime;
  _e = collectRemovedArtifactAnnotationIds(motorPrime, path).filter(acorn);
  rivetPrime = nextArtifactAnnotationCommentLine(_e);
  let screwPrime = rivetPrime,
    {
      handleTouchCancel,
      handleTouchEnd,
      handleTouchMove,
      handleTouchStart,
      handleWheel,
      fitToWidth,
      isZoomToFitSelected,
      previewStyle,
      resizeRef,
      setZoomPercent,
      zoomPercent,
    } = coral(bodyContainerElementRef),
    torquePrime = loadState === "ready",
    valvePrime = (ratchetPrime) => {
      let shimPrime = bodyContainerElementRef.current;
      if (
        shimPrime == null ||
        !iris(shimPrime, ratchetPrime, cogPrime, anchorPrime)
      ) {
        boltPrime.current = ratchetPrime;
        return;
      }
      boltPrime.current = null;
    };
  let axlePrime = valvePrime,
    bracketPrime,
    clampPrime;
  bracketPrime = () => ({
    navigateToPage: axlePrime,
  });
  clampPrime = [axlePrime];
  orbit.useImperativeHandle(vergePrime, bracketPrime, clampPrime);
  let drillPrime, enginePrime;
  drillPrime = () => () => {
    edgePrime();
    pistonPrime((tappetPrime) => {
      let arborPrime = tappetPrime.filter((item) => !lunar(item, path));
      return arborPrime.length === tappetPrime.length
        ? tappetPrime
        : arborPrime;
    });
  };
  enginePrime = [edgePrime, path, pistonPrime];
  orbit.useEffect(drillPrime, enginePrime);
  let framePrime = (
    <div ref={styleContainerRef} aria-hidden={true} className="hidden" />
  );
  let gasketPrime = torquePrime ? (
    <IsLocalOrNullValue
      {...{
        artifactType: "DOC",
        hideMetadata: chromeMode === "standalone",
        title: frost(title),
        leftContent: headerTitleContent,
        centerContent: null,
        rightContent: (
          <div className="flex items-center gap-1">
            {headerZoomLeadingContent}
            {
              <ZoomPercentMenuControl
                {...{
                  triggerTestId: "docx-preview-zoom-trigger",
                  zoomPercent,
                  zoomOptions: deferredUiGR,
                  onZoomPercentChange: setZoomPercent,
                  fitOption: {
                    selected: isZoomToFitSelected,
                    onSelect: fitToWidth,
                  },
                }}
              />
            }
            {chromeMode === "default" && !disableFileActions ? (
              <>
                {
                  <ArtifactPreviewDownloadButton
                    {...{
                      hostId,
                      path,
                    }}
                  />
                }
                {
                  <NotebookPreviewOpenActions
                    {...{
                      hostId,
                      onBeforeOpen,
                      path,
                      showLabel: true,
                    }}
                  />
                }
              </>
            ) : null}
            {headerRightContent}
          </div>
        ),
      }}
    />
  ) : null;
  let handlePrime = deferredUiE1(bodyContainerRef, resizeRef);
  let insertPrime = torquePrime ? ridge : "hidden",
    jacketPrime = (
      <div
        ref={handlePrime}
        aria-label={title}
        className={insertPrime}
        data-testid="docx-preview-panel"
        onTouchCancel={handleTouchCancel}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onWheel={handleWheel}
        style={previewStyle}
      />
    );
  let knurlPrime =
    torquePrime && !disableAnnotations
      ? pageElements.map((item, index) => {
          let bushingPrime = index + 1;
          return pine.createPortal(
            <DocxPreviewPanelHelper41
              {...{
                comments: _e,
                conversationId: latchPrime,
                isCommentMode: false,
                nextCommentNumber: screwPrime,
                onCommentsChange: pistonPrime,
                onTouchCancel: handleTouchCancel,
                onTouchEnd: handleTouchEnd,
                onTouchMove: handleTouchMove,
                onTouchStart: handleTouchStart,
                onWheel: handleWheel,
                pageCount: totalPages,
                pageNumber: bushingPrime,
                pageSize: knoll(item, zoomPercent),
                path,
                tabId,
                threadId: jointPrime,
                title,
                zoomScale: zoomPercent / 100,
              }}
            />,
            item,
            `${path}:${bushingPrime}:browse`,
          );
        })
      : null;
  let leverPrime = ArtifactPreviewStatus(loadState);
  return (
    <section className="flex h-full min-h-0 flex-col bg-token-side-bar-background">
      {framePrime}
      {gasketPrime}
      {jacketPrime}
      {knurlPrime}
      {leverPrime}
    </section>
  );
}
function acorn(collarPrime) {
  return (
    collarPrime.localArtifactAnnotationContext?.artifactKind === "document"
  );
}
function bloom(dowelPrime) {
  let { bytes, onPagesRendered, renderAsync } = dowelPrime,
    flangePrime = orbit.useRef(null),
    gibPrime = orbit.useRef(null),
    hubPrime = orbit.useRef(0),
    idlerPrime = orbit.useRef(false),
    [jigPrime, keeperPrime] = orbit.useState(
      renderAsync == null ? "error" : "loading",
    ),
    lugPrime = [];
  let [mandrelPrime, nipplePrime] = orbit.useState(lugPrime),
    [orificePrime, pinPrime] = orbit.useState(0),
    racePrime = () => {
      let impellerPrime = flangePrime.current,
        journalPrime = gibPrime.current;
      impellerPrime == null ||
        journalPrime == null ||
        (eagle({
          bodyContainer: impellerPrime,
          styleContainer: journalPrime,
        }),
        nipplePrime([]),
        pinPrime(0));
    };
  let sleevePrime = racePrime,
    trunnionPrime = () => {
      let kingpinPrime = flangePrime.current,
        landPrime = gibPrime.current;
      if (kingpinPrime == null || landPrime == null || idlerPrime.current)
        return;
      if (((idlerPrime.current = true), sleevePrime(), renderAsync == null)) {
        keeperPrime("error");
        return;
      }
      let meshPrime = hubPrime.current + 1;
      hubPrime.current = meshPrime;
      keeperPrime("loading");
      drift({
        bytes,
        bodyContainer: kingpinPrime,
        renderAsync,
        styleContainer: landPrime,
      }).then((value) => {
        if (hubPrime.current !== meshPrime) return;
        if (!value) {
          eagle({
            bodyContainer: kingpinPrime,
            styleContainer: landPrime,
          });
          keeperPrime("error");
          return;
        }
        let neckPrime = honey(kingpinPrime);
        nipplePrime(neckPrime);
        pinPrime(Math.max(neckPrime.length, 1));
        keeperPrime("ready");
        onPagesRendered(kingpinPrime);
      });
    };
  let bossPrime = trunnionPrime,
    camPrime = () => {
      hubPrime.current += 1;
      idlerPrime.current = false;
      sleevePrime();
    };
  let detentPrime = camPrime,
    eccentricPrime = (padPrime) => {
      if (padPrime == null) {
        detentPrime();
        flangePrime.current = null;
        return;
      }
      flangePrime.current = padPrime;
      bossPrime();
    };
  let followerPrime = eccentricPrime,
    guidePrime = (quillshaftPrime) => {
      if (quillshaftPrime == null) {
        detentPrime();
        gibPrime.current = null;
        return;
      }
      gibPrime.current = quillshaftPrime;
      bossPrime();
    };
  let helixPrime = guidePrime;
  return {
    bodyContainerElementRef: flangePrime,
    bodyContainerRef: followerPrime,
    loadState: jigPrime,
    pageElements: mandrelPrime,
    styleContainerRef: helixPrime,
    totalPages: orificePrime,
  };
}
function coral(rollerPrime) {
  let spindlePrime = orbit.useRef(null),
    [thrustPrime, yokePrime] = orbit.useState(null),
    [bafflePrime, capstanPrime] = orbit.useState({
      kind: "fit-width",
    }),
    diaphragmPrime =
      bafflePrime.kind === "fit-width"
        ? (glide({
            bodyContainer: rollerPrime.current,
            bodyContainerWidth: thrustPrime,
            zoomPercent: tide,
          }) ?? tide)
        : bafflePrime.zoomPercent,
    elbowPrime = useResizeObserver((grommetPrime) => {
      let headerPrime = Math.floor(grommetPrime.contentRect.width);
      yokePrime((injectorPrime) =>
        injectorPrime === headerPrime ? injectorPrime : headerPrime,
      );
    }),
    ferrulePrime = () => {
      spindlePrime.current = null;
    };
  return {
    fitToWidth: () => {
      let jumperPrime =
        bafflePrime.kind === "fit-width" ? null : jewel(rollerPrime.current);
      glide({
        bodyContainer: rollerPrime.current,
        bodyContainerWidth: thrustPrime,
        zoomPercent: diaphragmPrime,
      }) != null &&
        (capstanPrime({
          kind: "fit-width",
        }),
        jumperPrime != null &&
          window.requestAnimationFrame(() => {
            jumperPrime.scrollIntoView({
              block: "center",
              inline: "center",
            });
          }));
    },
    handleTouchCancel: ferrulePrime,
    handleTouchEnd: ferrulePrime,
    handleTouchMove: (event) => {
      let kerfPrime = spindlePrime.current;
      if (event.touches.length !== 2 || kerfPrime == null) return;
      event.preventDefault();
      let louverPrime = hypotDistance(
        event.touches[0].clientX,
        event.touches[0].clientY,
        event.touches[1].clientX,
        event.touches[1].clientY,
      );
      louverPrime <= 0 ||
        kerfPrime.distance <= 0 ||
        capstanPrime({
          kind: "percentage",
          zoomPercent: useTurnDiffEnrichmentQuery({
            initialDistance: kerfPrime.distance,
            initialZoomPercent: kerfPrime.zoomPercent,
            nextDistance: louverPrime,
          }),
        });
    },
    handleTouchStart: (event) => {
      if (event.touches.length !== 2) {
        ferrulePrime();
        return;
      }
      event.preventDefault();
      spindlePrime.current = {
        distance: hypotDistance(
          event.touches[0].clientX,
          event.touches[0].clientY,
          event.touches[1].clientX,
          event.touches[1].clientY,
        ),
        zoomPercent: diaphragmPrime,
      };
    },
    handleWheel: (event) => {
      event.ctrlKey &&
        (event.preventDefault(),
        capstanPrime((manifoldPrime) => ({
          kind: "percentage",
          zoomPercent: AppInitialJR(
            manifoldPrime.kind === "percentage"
              ? manifoldPrime.zoomPercent
              : diaphragmPrime,
            event.deltaY,
          ),
        })));
    },
    isZoomToFitSelected: bafflePrime.kind === "fit-width",
    previewStyle: {
      "--codex-docx-preview-zoom": `${diaphragmPrime / 100}`,
    },
    resizeRef: elbowPrime,
    setZoomPercent: (nipPrime) => {
      capstanPrime({
        kind: "percentage",
        zoomPercent: AppInitialKR(nipPrime),
      });
    },
    zoomPercent: diaphragmPrime,
  };
}
async function drift({ bytes, bodyContainer, renderAsync, styleContainer }) {
  try {
    return (
      await renderAsync(bytes, bodyContainer, styleContainer, {
        className: $,
        renderAltChunks: false,
        useBase64URL: true,
      }),
      moss(styleContainer),
      true
    );
  } catch {
    return false;
  }
}
function eagle({ bodyContainer, styleContainer }) {
  bodyContainer.replaceChildren();
  styleContainer.replaceChildren();
}
function frost(outletPrime) {
  return outletPrime.replace(/\.docx$/i, "");
}
function glide({ bodyContainer, bodyContainerWidth, zoomPercent }) {
  if (bodyContainer == null) return null;
  let packingPrime = bodyContainer.querySelector(vale);
  if (packingPrime == null) return null;
  let reducerPrime = packingPrime.parentElement ?? bodyContainer,
    strainerPrime = window.getComputedStyle(reducerPrime),
    teePrime =
      Number.parseFloat(strainerPrime.paddingLeft) +
      Number.parseFloat(strainerPrime.paddingRight),
    unionPrime = Math.max(
      1,
      ((bodyContainerWidth ?? reducerPrime.clientWidth) ||
        bodyContainer.clientWidth) - (Number.isFinite(teePrime) ? teePrime : 0),
    ),
    ventPrime = Number.parseFloat(window.getComputedStyle(packingPrime).width),
    wyePrime =
      ventPrime > 0
        ? ventPrime
        : packingPrime.getBoundingClientRect().width /
          Math.max(zoomPercent / 100, 2.220446049250313e-16);
  return !Number.isFinite(wyePrime) || wyePrime <= 0
    ? null
    : AppInitialKR(Math.round((unionPrime / wyePrime) * 100));
}
function honey(zenerPrime) {
  return Array.from(zenerPrime.querySelectorAll(vale));
}
function iris(alphaSecond, bravoSecond, copperSecond, deltaSecond) {
  if (!Number.isInteger(bravoSecond) || bravoSecond < 1) return false;
  let echoSecond = honey(alphaSecond)[bravoSecond - 1];
  if (echoSecond == null) return false;
  copperSecond.current != null &&
    (window.cancelAnimationFrame(copperSecond.current),
    (copperSecond.current = null));
  let falconSecond = unity,
    gammaSecond = () => {
      let harborSecond = alphaSecond.getBoundingClientRect(),
        indigoSecond = echoSecond.getBoundingClientRect(),
        jadeSecond =
          alphaSecond.scrollTop +
          (indigoSecond.top - harborSecond.top) /
            Math.max(deltaSecond, 2.220446049250313e-16);
      if (
        (alphaSecond.scrollTo({
          top: jadeSecond,
        }),
        --falconSecond,
        falconSecond > 0)
      ) {
        copperSecond.current = window.requestAnimationFrame(gammaSecond);
        return;
      }
      copperSecond.current = null;
    };
  return (
    (copperSecond.current = window.requestAnimationFrame(gammaSecond)),
    true
  );
}
function jewel(kiteSecond) {
  if (kiteSecond == null) return null;
  let lemonSecond = honey(kiteSecond);
  if (lemonSecond.length === 0) return null;
  let marbleSecond = kiteSecond.getBoundingClientRect(),
    nickelSecond = marbleSecond.top + marbleSecond.height / 2,
    onyxSecond = lemonSecond[0],
    pearlSecond = 1 / 0;
  for (let quartzSecond of lemonSecond) {
    let riverSecond = quartzSecond.getBoundingClientRect(),
      slateSecond = riverSecond.top + riverSecond.height / 2,
      timberSecond = Math.abs(slateSecond - nickelSecond);
    timberSecond < pearlSecond &&
      ((onyxSecond = quartzSecond), (pearlSecond = timberSecond));
  }
  return onyxSecond;
}
function knoll(umbraSecond, violetSecond) {
  let willowSecond = window.getComputedStyle(umbraSecond),
    xenonSecond = Number.parseFloat(willowSecond.width),
    yellowSecond = Number.parseFloat(willowSecond.height),
    zincSecond = umbraSecond.getBoundingClientRect(),
    amberSecond = Math.max(violetSecond / 100, 2.220446049250313e-16);
  return {
    height:
      Number.isFinite(yellowSecond) && yellowSecond > 0
        ? yellowSecond
        : zincSecond.height / amberSecond,
    width:
      Number.isFinite(xenonSecond) && xenonSecond > 0
        ? xenonSecond
        : zincSecond.width / amberSecond,
  };
}
function lunar(basaltSecond, cedarSecond) {
  return (
    AppInitialHgt(basaltSecond) &&
    basaltSecond.localArtifactAnnotationContext?.artifactKind === "document" &&
    basaltSecond.localArtifactAnnotationContext.path === cedarSecond
  );
}
function moss(daisySecond) {
  let emberSecond = document.createElement("style");
  emberSecond.textContent = storm;
  daisySecond.appendChild(emberSecond);
}
var north, orbit, pine, quest, $, ridge, storm, tide, unity, vale, wave;
