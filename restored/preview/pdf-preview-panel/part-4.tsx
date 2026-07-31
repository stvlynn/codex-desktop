// Restored from ref/webview/assets/pdf-preview-panel-Cv0tBSkT.js
// Wave FY — full polished body from `pdf-preview-panel-Cv0tBSkT/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 21 (verified 68/89).
// Careful split 4/6
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
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Z8_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
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
const AppInitialIO: any = undefined;
const AppInitialZO: any = undefined;
const apex: any = undefined;
const brook: any = undefined;
const daisy: any = undefined;
const dusk: any = undefined;
const elm: any = undefined;
const isle: any = undefined;
const juniper: any = undefined;
const kite: any = undefined;
const moveThread: any = undefined;
const quartz: any = undefined;
const zephyr: any = undefined;

function PdfPreviewPanelHelper35(arborPrime) {
  let {
    anchor,
    label,
    pageSize
  } = arborPrime;
  if (anchor.kind === "region") {
    let bushingPrime = anchor.selectionKind == null ? <PdfPreviewPanelHelper37 {...{
      rect: anchor.rect,
      pageSize
    }} /> : <PdfPreviewPanelHelper36 {...{
      bordered: true,
      anchor,
      pageSize,
      testId: "artifact-pdf-comment-region-outline"
    }} />;
    let collarPrime = daisy(anchor.rect);
    let dowelPrime = <PdfPreviewPanelHelper38 {...{
      draft: true,
      label,
      point: collarPrime,
      pageSize
    }} />;
    let flangePrime;
    return <>
        {bushingPrime}
        {dowelPrime}
      </>;
  }
  return <PdfPreviewPanelHelper38 {...{
    draft: true,
    label,
    point: anchor.point,
    pageSize
  }} />;
}
function PdfPreviewPanelHelper36(gibPrime) {
  let {
    anchor,
    bordered = false,
    pageSize,
    testId
  } = gibPrime;
  if (anchor.selectionKind === "text") {
    let hubPrime = anchor.selectionRects == null || anchor.selectionRects.length === 0 ? [anchor.rect] : anchor.selectionRects;
    let idlerPrime = hubPrime,
      jigPrime;
    {
      let lugPrime;
      lugPrime = (mandrelPrime, nipplePrime) => <QueueAutomationRun key={`${mandrelPrime.x}:${mandrelPrime.y}:${mandrelPrime.width}:${mandrelPrime.height}:${nipplePrime}`} {...{
        paddingX: 4,
        paddingY: 0,
        pageSize,
        rect: mandrelPrime,
        testId
      }} />;
      jigPrime = idlerPrime.map(lugPrime);
    }
    let keeperPrime;
    return <>{jigPrime}</>;
  }
  return <QueueAutomationRun {...{
    bordered: bordered,
    paddingPx: 4,
    pageSize,
    rect: anchor.rect,
    testId
  }} />;
}
function PdfPreviewPanelHelper37(orificePrime) {
  let {
    pageSize,
    rect
  } = orificePrime;
  return <ResolveWorktreeHandoffDirection {...{
    pageSize,
    rect,
    testId: "artifact-pdf-comment-region-outline"
  }} />;
}
function PdfPreviewPanelHelper38(pinPrime) {
  let {
    ariaLabel,
    draft = false,
    isSelected = false,
    label,
    onClick,
    onPreviewHide,
    onPreviewShow,
    pageSize,
    point
  } = pinPrime;
  return <AppIconUg {...{
    ariaLabel,
    draft: draft,
    draftTestId: "artifact-pdf-comment-draft-marker",
    isSelected: isSelected,
    label,
    pageSize,
    point,
    testId: "artifact-pdf-comment-marker",
    onClick,
    onPreviewHide,
    onPreviewShow
  }} />;
}
function acorn({
  anchor,
  body,
  conversationId,
  pageNumber,
  pageSize,
  path,
  target,
  title
}) {
  let racePrime = anchor.kind === "region" ? anchor.rect : {
      x: anchor.point.x,
      y: anchor.point.y,
      width: 1,
      height: 1
    },
    sleevePrime = anchor.kind === "region" ? {
      x: anchor.rect.x + anchor.rect.width,
      y: anchor.rect.y
    } : anchor.point;
  return {
    sessionId: target.mode === "edit" ? `pdf-comment-edit:${target.commentId}` : anchor.kind === "region" ? ["pdf-comment", pageNumber, "region", anchor.rect.x, anchor.rect.y, anchor.rect.width, anchor.rect.height].join(":") : ["pdf-comment", pageNumber, "point", anchor.point.x, anchor.point.y].join(":"),
    conversationId,
    target,
    anchorState: {
      anchor: {
        kind: "region",
        pageUrl: path,
        frameUrl: null,
        title,
        elementPath: `pdf-page-${pageNumber}`,
        point: {
          xPercent: pageSize.width === 0 ? 0 : sleevePrime.x / pageSize.width * 100,
          y: sleevePrime.y
        },
        rect: racePrime,
        isFixed: false,
        role: null,
        name: null,
        selector: null,
        framePath: [],
        nearbyText: null
      },
      viewportRect: racePrime,
      viewportPoint: sleevePrime,
      viewportSize: pageSize
    },
    body,
    cwd: null,
    placementStrategy: "anchored",
    previewAlignment: "end",
    surfaceMode: "editor"
  };
}
function bloom({
  anchor,
  pageSize
}) {
  return anchor.kind === "region" ? {
    kind: "region",
    pageRect: anchor.rect,
    pageSize,
    nearbyText: anchor.nearbyText,
    selectedText: anchor.selectedText,
    selectionKind: anchor.selectionKind,
    selectionRects: anchor.selectionRects
  } : {
    kind: "point",
    pagePoint: anchor.point,
    pageSize
  };
}
function coral(trunnionPrime) {
  let bossPrime = trunnionPrime.localPdfCommentMetadata;
  return bossPrime == null ? null : bossPrime.kind === "region" ? {
    pageSize: bossPrime.pageSize,
    point: daisy(bossPrime.pageRect)
  } : {
    pageSize: bossPrime.pageSize,
    point: bossPrime.pagePoint
  };
}
function drift(camPrime) {
  let detentPrime = camPrime.localPdfCommentMetadata;
  return detentPrime == null ? null : detentPrime.kind === "region" ? {
    kind: "region",
    nearbyText: detentPrime.nearbyText,
    rect: detentPrime.pageRect,
    selectedText: detentPrime.selectedText,
    selectionKind: detentPrime.selectionKind,
    selectionRects: detentPrime.selectionRects
  } : {
    kind: "point",
    point: detentPrime.pagePoint
  };
}
function eagle(eccentricPrime) {
  return eccentricPrime.content.flatMap(item => item.content_type === "text" ? [item.text] : []).join("\n");
}
function $t({
  anchor,
  layer,
  pageSize
}) {
  return anchor.kind === "region" && anchor.selectionKind != null ? useOpenLocatorInMainWindow({
    layer,
    pageSize,
    rect: anchor.rect
  }) : OperationStatusOverlay({
    layer,
    markerPoint: anchor.kind === "region" ? daisy(anchor.rect) : anchor.point,
    pageSize
  });
}
async function frost({
  anchor,
  commentId,
  markerLabel,
  page,
  pageNumber,
  pageSize
}) {
  let followerPrime = glide(anchor, pageSize),
    guidePrime = Math.min(2, Math.max(1, 1200 / followerPrime.width)),
    helixPrime = document.createElement("canvas");
  if (helixPrime.width = Math.ceil(pageSize.width * guidePrime), helixPrime.height = Math.ceil(pageSize.height * guidePrime), helixPrime.getContext("2d") == null) throw Error("Unable to create PDF screenshot canvas context");
  await page.render({
    canvas: helixPrime,
    viewport: page.getViewport({
      scale: guidePrime
    })
  }).promise;
  let impellerPrime = document.createElement("canvas");
  impellerPrime.width = Math.ceil(followerPrime.width * guidePrime);
  impellerPrime.height = Math.ceil(followerPrime.height * guidePrime);
  let journalPrime = impellerPrime.getContext("2d");
  if (journalPrime == null) throw Error("Unable to create PDF crop canvas context");
  return journalPrime.drawImage(helixPrime, followerPrime.x * guidePrime, followerPrime.y * guidePrime, followerPrime.width * guidePrime, followerPrime.height * guidePrime, 0, 0, impellerPrime.width, impellerPrime.height), iris({
    anchor,
    context: journalPrime,
    crop: followerPrime,
    markerLabel,
    scale: guidePrime
  }), {
    commentId,
    dataUrl: impellerPrime.toDataURL("image/png"),
    height: impellerPrime.height,
    pageNumber,
    width: impellerPrime.width
  };
}
function glide(kingpinPrime, landPrime) {
  if (kingpinPrime.kind === "region") {
    let meshPrime = Math.max(24, Math.min(72, Math.min(kingpinPrime.rect.width, kingpinPrime.rect.height) * 0.25));
    return honey({
      x: kingpinPrime.rect.x - meshPrime,
      y: kingpinPrime.rect.y - meshPrime,
      width: kingpinPrime.rect.width + meshPrime * 2,
      height: kingpinPrime.rect.height + meshPrime * 2
    }, landPrime);
  }
  return honey({
    x: kingpinPrime.point.x - 180,
    y: kingpinPrime.point.y - 120,
    width: 360,
    height: 240
  }, landPrime);
}
function honey(neckPrime, padPrime) {
  let quillshaftPrime = Math.min(Math.max(neckPrime.width, 1), padPrime.width),
    rollerPrime = Math.min(Math.max(neckPrime.height, 1), padPrime.height);
  return {
    x: knoll(neckPrime.x, 0, padPrime.width - quillshaftPrime),
    y: knoll(neckPrime.y, 0, padPrime.height - rollerPrime),
    width: quillshaftPrime,
    height: rollerPrime
  };
}
function iris({
  anchor,
  context,
  crop,
  markerLabel,
  scale
}) {
  if (context.save(), context.strokeStyle = moveThread, context.fillStyle = moveThread, context.lineWidth = 3, context.font = "bold 14px sans-serif", context.textAlign = "center", context.textBaseline = "middle", anchor.kind === "region") {
    let spindlePrime = (anchor.rect.x - crop.x) * scale,
      thrustPrime = (anchor.rect.y - crop.y) * scale,
      yokePrime = anchor.rect.width * scale,
      bafflePrime = anchor.rect.height * scale;
    context.strokeRect(spindlePrime, thrustPrime, yokePrime, bafflePrime);
    jewel(context, markerLabel, spindlePrime + yokePrime, thrustPrime);
  } else jewel(context, markerLabel, (anchor.point.x - crop.x) * scale, (anchor.point.y - crop.y) * scale);
  context.restore();
}
function jewel(capstanPrime, diaphragmPrime, elbowPrime, ferrulePrime) {
  capstanPrime.beginPath();
  capstanPrime.arc(elbowPrime, ferrulePrime, 11, 0, Math.PI * 2);
  capstanPrime.fill();
  capstanPrime.lineWidth = 2;
  capstanPrime.strokeStyle = "#fff";
  capstanPrime.stroke();
  capstanPrime.fillStyle = "#fff";
  capstanPrime.fillText(diaphragmPrime, elbowPrime, ferrulePrime + 0.5);
}
function on(grommetPrime) {
  return `${grommetPrime.localPdfContext?.path ?? ""}:${grommetPrime.localPdfContext?.pageNumber ?? 0}:${grommetPrime.position.line}:${grommetPrime.content.map(item => item.content_type === "text" ? item.text : "").join("\n")}`;
}
function knoll(headerPrime, injectorPrime, jumperPrime) {
  return Math.min(Math.max(headerPrime, injectorPrime), jumperPrime);
}
var lunar,
  moss,
  north,
  orbit,
  pine = esmInit(() => {
    lunar = reactCompilerRuntime();
    ensureComposerEsm_Utt_Init();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    moss = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    AppInitialIO();
    AppInitialZO();
    findSidebarSectionElement();
    ensureComposerEsm_K9_Init();
    ensureAppScopeInit();
    ensureArtifactAnalyticsInit();
    useThreadHandoffDisabledReason();
    ToWorktree();
    zephyr();
    orbit = () => {};
  });
function PdfPreviewPanelHelper50(kerfPrime) {
  let {
      deferMs,
      page
    } = kerfPrime,
    louverPrime = ridge.useRef(null),
    manifoldPrime,
    nipPrime;
  manifoldPrime = () => {
    let outletPrime = louverPrime.current;
    if (outletPrime == null) return;
    let packingPrime = outletPrime;
    packingPrime.innerHTML = "";
    let reducerPrime = false,
      strainerPrime = null,
      teePrime = null,
      unionPrime = async function () {
        let ventPrime = await kite();
        if (reducerPrime) return;
        strainerPrime = new ventPrime.TextLayer({
          container: packingPrime,
          textContentSource: page.streamTextContent({
            includeMarkedContent: true
          }),
          viewport: page.getViewport({
            scale: 1
          })
        });
        try {
          await strainerPrime.render();
        } catch {
          return;
        }
        if (reducerPrime) return;
        let wyePrime = document.createElement("div");
        wyePrime.className = "endOfContent";
        packingPrime.append(wyePrime);
      };
    return teePrime = setTimeout(() => {
      unionPrime();
    }, deferMs), () => {
      reducerPrime = true;
      teePrime != null && clearTimeout(teePrime);
      strainerPrime?.cancel();
      packingPrime.innerHTML = "";
    };
  };
  nipPrime = [deferMs, page];
  ridge.useEffect(manifoldPrime, nipPrime);
  return <div ref={louverPrime} className="textLayer" />;
}
var quest,
  ridge,
  storm,
  tide = esmInit(() => {
    quest = reactCompilerRuntime();
    ridge = commonJsInit(react(), 1);
    quartz();
  });
function unity(zenerPrime) {
  let {
      onBeforeZoom,
      pageViewportSize,
      pageWidth
    } = zenerPrime,
    alphaSecond = {
      kind: "page-width"
    };
  let [bravoSecond, copperSecond] = dusk.useState(alphaSecond),
    [deltaSecond, echoSecond] = dusk.useState(false),
    [falconSecond, gammaSecond] = dusk.useState(0),
    harborSecond = dusk.useRef(null),
    indigoSecond = dusk.useRef(0),
    jadeSecond = dusk.useRef(null),
    kiteSecond = () => {
      echoSecond(true);
      harborSecond.current != null && window.clearTimeout(harborSecond.current);
      harborSecond.current = window.setTimeout(() => {
        harborSecond.current = null;
        echoSecond(false);
        gammaSecond(_n);
      }, 120);
    };
  let lemonSecond = kiteSecond,
    marbleSecond,
    nickelSecond;
  marbleSecond = () => () => {
    harborSecond.current != null && window.clearTimeout(harborSecond.current);
    jadeSecond.current != null && window.clearTimeout(jadeSecond.current);
  };
  nickelSecond = [];
  dusk.useEffect(marbleSecond, nickelSecond);
  let onyxSecond = daisySecond => {
    onBeforeZoom({
      kind: "center"
    });
    lemonSecond();
    copperSecond(daisySecond);
  };
  let pearlSecond = onyxSecond,
    quartzSecond = emberSecond => vale({
      pageViewportSize,
      pageWidth,
      resize: emberSecond
    });
  let riverSecond = quartzSecond,
    slateSecond = () => {
      pearlSecond({
        kind: "page-width"
      });
    };
  let timberSecond = slateSecond,
    umbraSecond = flintSecond => {
      pearlSecond({
        kind: "percentage",
        value: brook(flintSecond / 100)
      });
    };
  let violetSecond = umbraSecond,
    willowSecond = () => {
      onBeforeZoom({
        kind: "center"
      });
      lemonSecond();
      copperSecond(garnetSecond => ({
        kind: "percentage",
        value: apex(riverSecond(garnetSecond), "out")
      }));
    };
  let xenonSecond = willowSecond,
    yellowSecond = () => {
      onBeforeZoom({
        kind: "center"
      });
      lemonSecond();
      copperSecond(hazelSecond => ({
        kind: "percentage",
        value: apex(riverSecond(hazelSecond), "in")
      }));
    };
  let zincSecond = yellowSecond,
    amberSecond = event => {
      if (!event.ctrlKey || (event.preventDefault(), event.deltaY === 0) || (jadeSecond.current != null && window.clearTimeout(jadeSecond.current), jadeSecond.current = window.setTimeout(() => {
        indigoSecond.current = 0;
        jadeSecond.current = null;
      }, juniper), indigoSecond.current += event.deltaY, Math.abs(indigoSecond.current) < isle)) return;
      let ivorySecond = indigoSecond.current > 0 ? "out" : "in";
      indigoSecond.current = 0;
      onBeforeZoom({
        clientX: event.clientX,
        clientY: event.clientY,
        kind: "point"
      });
      lemonSecond();
      copperSecond(jasperSecond => ({
        kind: "percentage",
        value: apex(riverSecond(jasperSecond), ivorySecond)
      }));
    };
  let basaltSecond = amberSecond,
    cedarSecond = Math.round(riverSecond(bravoSecond) * 100);
  return {
    beginScaleChange: lemonSecond,
    decreaseZoom: xenonSecond,
    fitToWidth: timberSecond,
    handleWheel: basaltSecond,
    increaseZoom: zincSecond,
    isZooming: deltaSecond,
    resize: bravoSecond,
    setResize: pearlSecond,
    setZoomPercent: violetSecond,
    zoomEndTick: falconSecond,
    zoomPercent: cedarSecond
  };
}
function _n(kelpSecond) {
  return kelpSecond + 1;
}
function vale({
  pageViewportSize,
  pageWidth,
  resize
}) {
  if (resize.kind === "percentage") return brook(resize.value);
  let lotusSecond = pageViewportSize?.width ?? elm.width;
  return pageWidth == null || pageWidth <= 0 || lotusSecond <= 0 ? 1 : brook(pageWidth / lotusSecond);
}
function wave({
  pageViewportSize,
  pageWidth,
  resize
}) {
  let mintSecond = pageViewportSize ?? elm,
    novaSecond = mintSecond.width / mintSecond.height,
    oliveSecond = resize.kind === "page-width" && pageWidth != null && pageWidth > 0 ? pageWidth : mintSecond.width * vale({
      pageViewportSize,
      pageWidth,
      resize
    });
  return {
    height: Math.round(oliveSecond / novaSecond),
    width: Math.round(oliveSecond)
  };
}
