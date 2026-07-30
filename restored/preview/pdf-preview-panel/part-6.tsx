// Restored from ref/webview/assets/pdf-preview-panel-Cv0tBSkT.js
// Wave FY — full polished body from `pdf-preview-panel-Cv0tBSkT/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 21 (verified 68/89).
// Careful split 6/6
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginClickTarget } from "../../analytics/codex-plugin-click-target";
import { CodexProfileInlinePhotoChangeAction } from "../../analytics/codex-profile-inline-photo-change-action";
import { logProductEvent } from "../../analytics/log-product-event";
import { ensureArtifactAnalyticsInit, logArtifactAnnotationModeEnabled, logArtifactAnnotationSubmitted, logArtifactRefreshClicked } from "../../artifact/artifact-analytics";
import { ArtifactPreviewDownloadButton } from "../../artifact/artifact-preview-download-button";
import { ArtifactPreviewPageNav } from "../../artifact/artifact-preview-page-nav";
import { artifactTabLoading } from "../../artifact/artifact-tab-loading";
import { queueAutomationRun as QueueAutomationRun } from "../../automation/queue-automation-run";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Z8_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../boundaries/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { chatgpt2 as Chatgpt2 } from "../../browser/chatgpt2";
import { deferredComposerBV } from "../../composer/deferred-composer-bv";
import { DesignComposerSurface } from "../../composer/design-composer-surface";
import { DURABLE_OBJECT_KIND } from "../../config/durable-object-kind";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { useThreadHandoffDisabledReason } from "../../conversation/use-thread-handoff-disabled-reason";
import { resolveWorktreeHandoffDirection as ResolveWorktreeHandoffDirection } from "../../environments/worktree-handoff-helpers";
import { ensureDebugPanelParsersInit } from "../../hooks/debug-panel-turn-files";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useResizeObserver } from "../../hooks/use-resize-observer";
import { isLocalOrNullValue as IsLocalOrNullValue } from "../../hosts/is-local-or-null-value";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconGg } from "../../icons/app-icon-gg";
import { AppIconUg } from "../../icons/app-icon-ug";
import { AppIconYg } from "../../icons/app-icon-yg";
import { AppIconYj } from "../../icons/app-icon-yj";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { isWhitespaceOrEofCharCode as IsWhitespaceOrEofCharCode } from "../../markdown/is-whitespace-or-eof-char-code";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { findSidebarSectionElement } from "../../navigation/app-action-dom";
import { newConversationEntrypointId } from "../../navigation/new-conversation-entrypoint-id";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureViteModulepreloadRuntime } from "../../runtime/vite-preload";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ArtifactPreviewStatus, ensureArtifactPreviewStatusInit } from "../../ui/artifact-preview-status";
import { deferredW1 } from "../../ui/deferred-w1";
import { ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { MemoizedValueBridge } from "../../ui/memoized-value-bridge";
import { OperationStatusOverlay } from "../../ui/operation-status-overlay";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { RtlAwareToggleThumb } from "../../ui/rtl-aware-toggle-thumb";
import { pickSourcePosition } from "../../utils/pick-source-position";
import { ToWorktree } from "../../worktree/to-worktree";

// Cross-part soft stubs.
const $e: any = undefined;
const AppInitialO: any = undefined;
const AppInitialVj: any = undefined;
const DeferredUiU1: any = undefined;
const NotebookPreviewOpenActions: any = undefined;
const PdfPreviewPanelHelper57: any = undefined;
const Rain: any = undefined;
const ZoomPercentMenuControl: any = undefined;
const _t: any = undefined;
const alpha: any = undefined;
const at: any = undefined;
const azure: any = undefined;
const birch: any = undefined;
const canyon: any = undefined;
const deferredUiEnt: any = undefined;
const deferredUiGR: any = undefined;
const deferredUiJ1: any = undefined;
const deferredUiWR: any = undefined;
const deferredUiXR: any = undefined;
const indigo: any = undefined;
const ink: any = undefined;
const jade: any = undefined;
const meadow: any = undefined;
const quartz: any = undefined;
const seed: any = undefined;
const unity: any = undefined;

export function PdfPreviewPanel(rain: unknown) {
  let {
      chromeMode = "default",
      fileDataUrl,
      headerRightContent,
      hostId,
      onBeforeOpen,
      onDocumentReady,
      onError,
      onReady,
      path,
      previewRequestKey,
      sizeBytes,
      tabId,
      title
    } = rain,
    frostThird = `${fileDataUrl}\0${previewRequestKey ?? "initial"}`,
    glideThird = <section className="flex h-full min-h-0 flex-col bg-token-side-bar-background">
        {ArtifactPreviewStatus("error")}
      </section>;
  let honeyThird = <$n {...{
    chromeMode: chromeMode,
    fileDataUrl,
    headerRightContent,
    hostId,
    onBeforeOpen,
    onDocumentReady,
    onError,
    onReady,
    path,
    previewRequestKey,
    sizeBytes,
    tabId,
    title
  }} />;
  return <DeferredUiU1 {...{
    name: "PdfPreviewPanel",
    onError,
    resetKey: frostThird,
    fallback: glideThird,
    children: honeyThird
  }} />;
}
function $n(shimSecond) {
  let {
      chromeMode,
      fileDataUrl,
      headerRightContent,
      hostId,
      onBeforeOpen,
      onDocumentReady,
      onError,
      onReady,
      path,
      previewRequestKey,
      sizeBytes: tappetSecond,
      tabId,
      title
    } = shimSecond,
    arborSecond = CodexPluginActionType(ensureComposerEsm_S8_Init),
    bushingSecond = useIntl(),
    collarSecond = plume.useRef(null),
    dowelSecond = plume.useRef(null),
    flangeSecond = plume.useRef(false),
    gibSecond = plume.useRef(false),
    hubSecond = plume.useRef(false),
    idlerSecond = plume.useRef(null),
    jigSecond = plume.useRef(fileDataUrl),
    keeperSecond = plume.useRef(null),
    lugSecond = new Set();
  let mandrelSecond = plume.useRef(lugSecond),
    [nippleSecond, orificeSecond] = plume.useState(false),
    [pinSecond, raceSecond] = plume.useState(false),
    [sleeveSecond, trunnionSecond] = plume.useState(null),
    bossSecond = ensureDebugPanelParsersInit(arborSecond.value);
  let camSecond = bossSecond,
    detentSecond = camSecond ?? newConversationEntrypointId({
      entrypoint: "home"
    });
  let eccentricSecond = detentSecond,
    followerSecond = CodexBrowserSurfaceActionType(AppInitialVj, eccentricSecond),
    guideSecond = cedarThird => {
      MemoizedValueBridge(arborSecond, eccentricSecond, cedarThird);
    };
  let helixSecond = guideSecond,
    impellerSecond;
  {
    let daisyThird;
    daisyThird = emberThird => ensureViteModulepreloadRuntime(emberThird) && emberThird.localPdfContext?.path === path;
    impellerSecond = followerSecond.filter(daisyThird);
  }
  let journalSecond = impellerSecond,
    kingpinSecond = Math.max(0, ...journalSecond.map(maple));
  let landSecond = kingpinSecond + 1,
    meshSecond,
    neckSecond;
  meshSecond = () => () => {
    helixSecond(flintThird => {
      let garnetThird = flintThird.filter(item => !(ensureViteModulepreloadRuntime(item) && item.localPdfContext?.path === path));
      return garnetThird.length === flintThird.length ? flintThird : garnetThird;
    });
  };
  neckSecond = [path, helixSecond];
  plume.useEffect(meshSecond, neckSecond);
  let padSecond = {
    fileDataUrl
  };
  let {
      loadedFileDataUrl,
      loadState,
      loadStateFileDataUrl,
      numPages,
      pageViewportSize,
      pdfDocument
    } = jade(padSecond),
    quillshaftSecond = {
      containerRef: dowelSecond,
      pageSelector: "[data-artifact-pdf-page]",
      totalPages: numPages
    };
  let {
      currentPage,
      goToNextPage,
      goToPreviousPage
    } = alpha(quillshaftSecond),
    rollerSecond = hazelThird => {
      let ivoryThird = dowelSecond.current;
      if (ivoryThird == null) {
        idlerSecond.current = null;
        return;
      }
      idlerSecond.current = birch({
        anchor: hazelThird,
        container: ivoryThird,
        pageSelector: "[data-artifact-pdf-page]"
      });
    };
  let spindleSecond = rollerSecond,
    thrustSecond = {
      onBeforeZoom: spindleSecond,
      pageViewportSize,
      pageWidth: sleeveSecond
    };
  let {
      beginScaleChange,
      fitToWidth,
      handleWheel,
      isZooming,
      resize,
      setZoomPercent,
      zoomPercent,
      zoomEndTick
    } = unity(thrustSecond),
    yokeSecond = () => {
      let jasperThird = resize.kind === "page-width" ? null : dowelSecond.current?.querySelector(`[data-artifact-pdf-page][data-page-number="${currentPage}"]`);
      fitToWidth();
      jasperThird != null && window.requestAnimationFrame(() => {
        jasperThird.scrollIntoView({
          block: "center",
          inline: "center"
        });
      });
    };
  let baffleSecond = yokeSecond,
    capstanSecond = kelpThird => {
      if (kelpThird.contentRect.width <= 0) return;
      let lotusThird = Math.max(0, Math.floor(kelpThird.contentRect.width) - 48),
        mintThird = keeperSecond.current;
      mintThird !== lotusThird && (mintThird != null && (spindleSecond({
        kind: "center"
      }), beginScaleChange()), keeperSecond.current = lotusThird, trunnionSecond(lotusThird));
    };
  let diaphragmSecond = useResizeObserver(capstanSecond),
    elbowSecond = () => {
      let novaThird = idlerSecond.current,
        oliveThird = dowelSecond.current;
      novaThird == null || oliveThird == null || pdfDocument == null || numPages < 1 || canyon({
        anchorState: {
          ...novaThird,
          pageNumber: Math.min(novaThird.pageNumber, numPages)
        },
        container: oliveThird,
        pageSelector: "[data-artifact-pdf-page][data-page-viewport-ready]"
      }) && (idlerSecond.current = null);
    };
  let ferruleSecond = elbowSecond,
    grommetSecond = () => {
      ferruleSecond();
    };
  let $e;
  $e = [pageViewportSize, sleeveSecond, resize, ferruleSecond];
  plume.useLayoutEffect(grommetSecond, $e);
  let headerSecond, injectorSecond;
  headerSecond = () => {
    jigSecond.current !== fileDataUrl && (jigSecond.current = fileDataUrl, spindleSecond({
      kind: "center"
    }));
  };
  injectorSecond = [spindleSecond, fileDataUrl];
  plume.useLayoutEffect(headerSecond, injectorSecond);
  let jumperSecond = () => {
    flangeSecond.current = false;
    orificeSecond(false);
    raceSecond(false);
  };
  let kerfSecond;
  kerfSecond = [fileDataUrl];
  plume.useEffect(jumperSecond, kerfSecond);
  let louverSecond = () => {
    gibSecond.current = false;
    hubSecond.current = false;
  };
  let at;
  at = [fileDataUrl, previewRequestKey];
  plume.useEffect(louverSecond, at);
  let manifoldSecond, nipSecond;
  manifoldSecond = () => {
    let prismThird = () => {
      document.fullscreenElement !== collarSecond.current && orificeSecond(false);
    };
    return document.addEventListener("fullscreenchange", prismThird), () => {
      document.removeEventListener("fullscreenchange", prismThird);
    };
  };
  nipSecond = [];
  plume.useEffect(manifoldSecond, nipSecond);
  let outletSecond = quillThird => {
    let reefThird = dowelSecond.current;
    reefThird !== quillThird && (reefThird?.removeEventListener("wheel", handleWheel), dowelSecond.current = quillThird, quillThird?.addEventListener("wheel", handleWheel, {
      passive: false
    }));
  };
  let packingSecond = outletSecond,
    reducerSecond = loadState === "ready" && pdfDocument != null && loadedFileDataUrl === fileDataUrl,
    strainerSecond = reducerSecond,
    teeSecond = reducerSecond ? pdfDocument : null,
    unionSecond = () => {
      flangeSecond.current = true;
      logProductEvent(arborSecond, CodexProfileInlinePhotoChangeAction, {
        pageCount: numPages
      });
    };
  let ventSecond = plume.useEffectEvent(unionSecond),
    wyeSecond = () => {
      hubSecond.current || !Number.isSafeInteger(numPages) || numPages <= 0 || (hubSecond.current = true, onReady?.(numPages));
    };
  let zenerSecond = useEventCallback(wyeSecond),
    _t = () => {
      gibSecond.current || (gibSecond.current = true, onDocumentReady?.());
    };
  let alphaThird = useEventCallback(_t),
    bravoThird = () => {
      hubSecond.current || (hubSecond.current = true, onError?.());
    };
  let copperThird = useEventCallback(bravoThird),
    deltaThird = () => {
      !strainerSecond || flangeSecond.current || ventSecond();
    };
  let echoThird;
  echoThird = [strainerSecond];
  plume.useEffect(deltaThird, echoThird);
  let falconThird = () => {
    !reducerSecond || gibSecond.current || alphaThird();
  };
  let gammaThird;
  gammaThird = [reducerSecond, previewRequestKey, alphaThird];
  plume.useEffect(falconThird, gammaThird);
  let harborThird = () => {
    loadState !== "error" || loadStateFileDataUrl !== fileDataUrl || hubSecond.current || copperThird();
  };
  let indigoThird;
  indigoThird = [fileDataUrl, loadState, loadStateFileDataUrl, previewRequestKey, copperThird];
  plume.useEffect(harborThird, indigoThird);
  let jadeThird = () => {
    orificeSecond(false);
    document.fullscreenElement === collarSecond.current && document.exitFullscreen().catch(leaf);
  };
  let kiteThird = jadeThird,
    lemonThird = (sageThird, topazThird) => {
      orificeSecond(false);
      (document.fullscreenElement === collarSecond.current ? document.exitFullscreen() : Promise.resolve()).catch(kernel).finally(() => {
        deferredUiEnt({
          event: topazThird,
          href: sageThird,
          initiator: "open_in_browser_bridge"
        });
      });
    };
  let marbleThird = lemonThird,
    nickelThird = (ultraThird, vaporThird) => {
      if (vaporThird) {
        mandrelSecond.current.add(ultraThird);
        return;
      }
      mandrelSecond.current.delete(ultraThird);
    };
  let onyxThird = nickelThird,
    pearlThird,
    quartzThird;
  pearlThird = () => {
    if (!pinSecond || nippleSecond) {
      mandrelSecond.current.clear();
      return;
    }
    let wheatThird = event => {
      event.defaultPrevented || event.key !== "Escape" || mandrelSecond.current.size > 0 || (event.preventDefault(), event.stopPropagation(), raceSecond(false));
    };
    return window.addEventListener("keydown", wheatThird), () => {
      window.removeEventListener("keydown", wheatThird);
    };
  };
  quartzThird = [pinSecond, nippleSecond];
  plume.useEffect(pearlThird, quartzThird);
  let riverThird = bushingSecond.formatMessage({
    id: "artifactPdfPreview.annotate",
    defaultMessage: "Annotate",
    description: "Tooltip text for the PDF annotation button"
  });
  let slateThird = riverThird,
    timberThird = bushingSecond.formatMessage({
      id: "artifactPdfPreview.annotationMode",
      defaultMessage: "Annotating",
      description: "Label shown when PDF annotation mode is active"
    });
  let umbraThird = timberThird,
    [violetThird, willowThird] = plume.useState(false),
    xenonThird = () => {
      willowThird(false);
      pinSecond || logArtifactAnnotationModeEnabled(arborSecond, {
        artifactTabId: tabId,
        artifactType: "pdf",
        importKind: "pdf",
        threadId: camSecond
      });
      raceSecond(jadeite);
    };
  let yellowThird = <RtlAwareToggleThumb {...{
    active: pinSecond,
    activeLabel: umbraThird,
    label: slateThird,
    onClick: xenonThird
  }} />;
  let zincThird = yellowThird,
    amberThird = {
      comments: journalSecond,
      conversationId: eccentricSecond,
      isCommentMode: pinSecond,
      nextCommentNumber: landSecond,
      onCommentsChange: helixSecond,
      onDraftActiveChange: onyxThird,
      pageCount: numPages,
      path,
      tabId,
      threadId: camSecond,
      title
    };
  let basaltThird = amberThird;
  return <section ref={collarSecond} className="flex h-full min-h-0 flex-col bg-token-side-bar-background">
      {nippleSecond && teeSecond != null ? <PdfPreviewPanelHelper57 {...{
      initialPage: currentPage,
      numPages,
      onClose: kiteThird,
      onOpenExternalLink: marbleThird,
      pageViewportSize,
      pdfDocument: teeSecond,
      title
    }} /> : <>
          {reducerSecond ? <IsLocalOrNullValue {...{
        artifactType: "PDF",
        hideMetadata: chromeMode === "standalone",
        title: nimbus(title),
        centerContent: <ArtifactPreviewPageNav {...{
          currentPage,
          onNextPage: goToNextPage,
          onPreviousPage: goToPreviousPage,
          totalPages: numPages
        }} />,
        rightContent: <div className="flex min-w-0 items-center gap-1 overflow-hidden [@container_(max-width:300px)]:gap-0.5">
                    {<OptionalTooltip {...{
            tooltipContent: slateThird,
            open: !pinSecond && violetThird,
            onOpenChange: yarnThird => {
              pinSecond || willowThird(yarnThird);
            },
            children: zincThird
          }} />}
                    {<ZoomPercentMenuControl {...{
            triggerTestId: "pdf-preview-zoom-trigger",
            zoomPercent,
            zoomOptions: deferredUiGR,
            onZoomPercentChange: setZoomPercent,
            fitOption: {
              selected: resize.kind === "page-width",
              onSelect: baffleSecond
            }
          }} />}
                    {chromeMode === "default" ? <>
                        {<ArtifactPreviewDownloadButton {...{
              hostId,
              path,
              sizeBytes: tappetSecond
            }} />}
                        {<NotebookPreviewOpenActions {...{
              hostId,
              onBeforeOpen,
              path,
              showLabel: true
            }} />}
                      </> : null}
                    {headerRightContent}
                  </div>
      }} /> : null}
          <div ref={packingSecond} aria-label={title} className={reducerSecond ? "min-h-0 flex-1 overflow-auto bg-token-side-bar-background" : "hidden"} data-testid="artifact-pdf-preview-panel">
            <div ref={diaphragmSecond} className="min-h-full pt-6" style={{
          paddingBottom: artifactTabLoading
        }}>
              <div className="flex min-h-full w-max min-w-full flex-col items-center gap-6 px-6">
                {teeSecond == null ? null : Array.from({
              length: numPages
            }, (zephyrThird, acornThird) => {
              let bloomThird = acornThird + 1;
              return <Rain key={bloomThird} {...{
                commentLayer: basaltThird,
                currentPage,
                isZooming,
                onRenderError: copperThird,
                onRendered: zenerSecond,
                onViewportReady: ferruleSecond,
                pdfDocument: teeSecond,
                pageSelector: "[data-artifact-pdf-page]",
                pageViewportSize,
                pageNumber: bloomThird,
                pageWidth: sleeveSecond,
                resize,
                renderRequestKey: previewRequestKey,
                scrollRootRef: dowelSecond,
                zoomEndTick
              }} />;
            })}
              </div>
            </div>
          </div>
          {ArtifactPreviewStatus(loadState)}
        </>}
    </section>;
}
function jadeite(coralThird) {
  return !coralThird;
}
function kernel() {}
function leaf() {}
function maple(driftThird) {
  return driftThird.position.line;
}
function nimbus(eagleThird) {
  return eagleThird.replace(/\.pdf$/i, "");
}
var opal, plume, $;
esmInit(() => {
  opal = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  plume = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  AppIconYj();
  AppInitialO();
  deferredW1();
  ensureComposerEsm_Qtt_Init();
  ensureComposerEsm_Hlt_Init();
  ensureComposerEsm_Z8_Init();
  ensureComposerEsm_K9_Init();
  deferredUiJ1();
  filterConversationTimelineItems();
  deferredComposerBV();
  ensureDropdownMenuPopoverInit();
  ensureArtifactAnalyticsInit();
  deferredUiWR();
  indigo();
  ensureArtifactPreviewStatusInit();
  deferredUiXR();
  quartz();
  seed();
  azure();
  ink();
  meadow();
})();
