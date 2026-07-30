// Restored from ref/webview/assets/docx-preview-panel-D6d6eiCV.js
// Wave FY — full polished body from `docx-preview-panel-D6d6eiCV/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 20 (verified 56/76).
// Wave FZ-support — PascalCase invalid JSX tags: at→At, DocxPreviewPanelHelper24→DocxPreviewPanelHelper24, DocxPreviewPanelHelper25→DocxPreviewPanelHelper25, DocxPreviewPanelHelper26→DocxPreviewPanelHelper26, DocxPreviewPanelHelper27→DocxPreviewPanelHelper27, DocxPreviewPanelHelper41→DocxPreviewPanelHelper41, isLocalOrNullValue→IsLocalOrNullValue, isWhitespaceOrEofCharCode→IsWhitespaceOrEofCharCode, queueAutomationRun→QueueAutomationRun, resolveWorktreeHandoffDirection→ResolveWorktreeHandoffDirection.
// Careful split 3/5
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { getAppSurfaceDisplayName } from "../../app/app-surface-display-name";
import { ensureArtifactAnalyticsInit, logArtifactAnnotationSubmitted, logArtifactRefreshClicked } from "../../artifact/artifact-analytics";
import { buildArtifactAnnotationCommentForTarget, collectRemovedArtifactAnnotationIds, nextArtifactAnnotationCommentLine } from "../../artifact/artifact-annotation-comment";
import { ArtifactPreviewDownloadButton } from "../../artifact/artifact-preview-download-button";
import { artifactTabLoading } from "../../artifact/artifact-tab-loading";
import { hypotDistance } from "../../artifact/hypot-distance";
import { QueueAutomationRun } from "../../automation/queue-automation-run";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_MT_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Z8_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
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
import { ArtifactPreviewStatus, ensureArtifactPreviewStatusInit } from "../../ui/artifact-preview-status";
import { deferredT1 } from "../../ui/deferred-t1";
import { getIconPixelSize } from "../../ui/icon-pixel-size";
import { MemoizedValueBridge } from "../../ui/memoized-value-bridge";
import { OperationStatusOverlay } from "../../ui/operation-status-overlay";
import { identityValue } from "../../utils/identity-value";
import { pickSourcePosition } from "../../utils/pick-source-position";
import { safeZodValue } from "../../utils/safe-zod-value";
import { ToWorktree } from "../../worktree/to-worktree";

// Cross-part soft stubs.
const $: any = undefined;
const $e: any = undefined;
const AppInitialLO: any = undefined;
const AppInitialOg: any = undefined;
const AppInitialXg: any = undefined;
const At: any = undefined;
const DocxPreviewPanelHelper24: any = undefined;
const DocxPreviewPanelHelper25: any = undefined;
const DocxPreviewPanelHelper26: any = undefined;
const IntlProvider: any = undefined;
const Queued: any = undefined;
const _t: any = undefined;
const bravo: any = undefined;
const delta: any = undefined;
const ember: any = undefined;
const flint: any = undefined;
const jade: any = undefined;
const kite: any = undefined;
const lemon: any = undefined;
const sage: any = undefined;
const timber: any = undefined;
const topaz: any = undefined;
const umbra: any = undefined;
const vapor: any = undefined;
const violet: any = undefined;
const willow: any = undefined;
const xenon: any = undefined;
const yarn: any = undefined;
const yellow: any = undefined;
const zinc: any = undefined;

function DocxPreviewPanelHelper41(header) {
  let {
      comments,
      conversationId,
      isCommentMode,
      nextCommentNumber,
      onCommentsChange,
      onTouchCancel,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
      onWheel,
      pageCount,
      pageNumber,
      pageSize,
      path: injector,
      tabId,
      threadId,
      title,
      zoomScale = 1
    } = header,
    jumper = CodexPluginActionType(appScopeAtom),
    kerf = useIntl(),
    [louver, manifold] = vapor.useState(null),
    nip = vapor.useRef(null),
    outlet = vapor.useRef(null),
    packing = vapor.useRef(false),
    [reducer, strainer] = vapor.useState(null),
    [tee, union] = vapor.useState(null),
    [vent, wye] = vapor.useState(null),
    [zener, alphaPrime] = vapor.useState(null),
    bravoPrime = 1 / (Math.max(zoomScale, 2.220446049250313e-16) / 0.9),
    [copperPrime, deltaPrime] = vapor.useState(""),
    [echoPrime, falconPrime] = vapor.useState(null),
    [gammaPrime, be] = vapor.useState(null),
    [harborPrime, indigoPrime] = vapor.useState(null),
    [jadePrime, kitePrime] = vapor.useState(false),
    lemonPrime;
  {
    let lagoonPrime;
    lagoonPrime = meadowPrime => meadowPrime.localArtifactAnnotationContext?.path === injector && willow(meadowPrime) === pageNumber;
    lemonPrime = comments.filter(lagoonPrime);
  }
  let marblePrime = lemonPrime,
    nickelPrime = harborPrime == null ? null : marblePrime.find(item => zinc(item) === harborPrime) ?? null;
  let onyxPrime = nickelPrime,
    pearlPrime,
    quartzPrime,
    riverPrime,
    slatePrime;
  riverPrime = gammaPrime == null ? null : marblePrime.find(item => zinc(item) === gammaPrime) ?? null;
  quartzPrime = riverPrime == null ? null : xenon(riverPrime);
  pearlPrime = reducer ?? quartzPrime;
  slatePrime = reducer == null ? (riverPrime == null ? null : $e(riverPrime) ?? pageSize) ?? pageSize : tee ?? pageSize;
  let timberPrime = slatePrime,
    umbraPrime;
  bb0: {
    if (reducer != null) {
      let oakPrime;
      oakPrime = timber({
        anchor: reducer,
        body: copperPrime,
        conversationId,
        pageNumber,
        pageSize: timberPrime,
        path: injector,
        target: {
          mode: "create"
        },
        title
      });
      umbraPrime = oakPrime;
      break bb0;
    }
    if (quartzPrime == null || riverPrime == null || gammaPrime == null) {
      umbraPrime = null;
      break bb0;
    }
    let nestPrime;
    nestPrime = timber({
      anchor: quartzPrime,
      body: yellow(riverPrime),
      conversationId,
      pageNumber,
      pageSize: timberPrime,
      path: injector,
      target: {
        mode: "edit",
        commentId: gammaPrime
      },
      title
    });
    umbraPrime = nestPrime;
  }
  let violetPrime = umbraPrime,
    willowPrime = pearlPrime == null ? null : bravo({
      anchor: pearlPrime,
      editorScale: bravoPrime,
      layer: louver,
      pageSize: timberPrime
    });
  let xenonPrime = willowPrime,
    yellowPrime = pearlPrime != null,
    zincPrime = kerf.formatMessage({
      id: "artifactDocxPreview.commentInput",
      defaultMessage: "Document annotation comment",
      description: "Aria label for the DOCX annotation comment input"
    });
  let amberPrime = zincPrime,
    basaltPrime = kerf.formatMessage({
      id: "artifactAnnotationComment.placeholder",
      defaultMessage: "Describe a change or ask a question",
      description: "Placeholder text for an artifact annotation comment editor"
    });
  let cedarPrime = basaltPrime,
    daisyPrime = kerf.formatMessage({
      id: "artifactDocxPreview.askCodex",
      defaultMessage: "Ask ChatGPT",
      description: "Button label for starting a contextual DOCX annotation from the selected document element"
    });
  let emberPrime = daisyPrime,
    flintPrime = () => {
      strainer(null);
      union(null);
      wye(null);
      alphaPrime(null);
      deltaPrime("");
      be(null);
      kitePrime(false);
    };
  let garnetPrime = flintPrime,
    hazelPrime = petalPrime => {
      deltaPrime(petalPrime);
      kitePrime(false);
    };
  let ivoryPrime = hazelPrime,
    jasperPrime = () => {
      typeof window > "u" || AppInitialLO({
        animationFrameRef: outlet,
        animationWindow: window,
        editorWrapper: nip.current
      });
    };
  let kelpPrime = jasperPrime,
    lotusPrime = () => violetPrime == null ? false : violetPrime.target.mode === "create" && copperPrime.trim().length > 0 ? jadePrime ? (garnetPrime(), true) : (kitePrime(true), kelpPrime(), false) : (garnetPrime(), true);
  let mintPrime = lotusPrime,
    novaPrime = () => {
      if (pearlPrime == null) return;
      let quietPrime = bravo({
        anchor: pearlPrime,
        editorScale: bravoPrime,
        layer: louver,
        pageSize: timberPrime
      });
      quietPrime != null && AppIconGg(nip.current, quietPrime);
    };
  let olivePrime = vapor.useEffectEvent(novaPrime),
    prismPrime = () => {
      if (!yellowPrime || louver == null) return;
      let rainPrime = louver.ownerDocument,
        seedPrime = rainPrime.defaultView,
        trailPrime = () => {
          olivePrime();
        };
      rainPrime.addEventListener("scroll", trailPrime, {
        capture: true
      });
      seedPrime?.addEventListener("resize", trailPrime);
      let urnPrime = typeof ResizeObserver > "u" ? null : new ResizeObserver(trailPrime);
      return urnPrime?.observe(louver), trailPrime(), () => {
        rainPrime.removeEventListener("scroll", trailPrime, {
          capture: true
        });
        seedPrime?.removeEventListener("resize", trailPrime);
        urnPrime?.disconnect();
      };
    };
  let quillPrime;
  quillPrime = [timberPrime.height, timberPrime.width, bravoPrime, yellowPrime, louver];
  vapor.useEffect(prismPrime, quillPrime);
  let reefPrime = event => {
    let vinePrime = event.target;
    vinePrime instanceof Node && nip.current?.contains(vinePrime) || (event.preventDefault(), event.stopPropagation(), mintPrime() && (vinePrime instanceof Node ? vinePrime.ownerDocument : louver?.ownerDocument)?.getSelection()?.removeAllRanges());
  };
  let sagePrime = vapor.useEffectEvent(reefPrime),
    topazPrime = () => {
      if (isCommentMode || violetPrime?.target.mode !== "create" || louver == null) return;
      let windPrime = louver.ownerDocument,
        yarrowPrime = azurePrime => {
          sagePrime(azurePrime);
        };
      return windPrime.addEventListener("pointerdown", yarrowPrime, {
        capture: true
      }), () => {
        windPrime.removeEventListener("pointerdown", yarrowPrime, {
          capture: true
        });
      };
    };
  let ultraPrime = violetPrime?.target.mode,
    _t;
  _t = [ultraPrime, isCommentMode, louver];
  vapor.useEffect(topazPrime, _t);
  let vaporPrime = () => {
    if (isCommentMode || louver == null) return;
    let birchPrime = louver.parentElement;
    if (birchPrime == null) return;
    let canyonPrime = ember({
      pageElement: birchPrime,
      pageSize
    });
    if (canyonPrime == null) {
      wye(null);
      return;
    }
    (reducer != null || gammaPrime != null) && !mintPrime() || (wye(canyonPrime), strainer(null), union(null), deltaPrime(""), be(null), indigoPrime(null), kitePrime(false));
  };
  let wheatPrime = vapor.useEffectEvent(vaporPrime),
    yarnPrime = () => {
      if (louver == null || isCommentMode) return;
      let dewPrime = louver.parentElement;
      if (dewPrime == null) return;
      let everPrime = () => {
        wheatPrime();
      };
      return dewPrime.addEventListener("mouseup", everPrime), dewPrime.addEventListener("keyup", everPrime), () => {
        dewPrime.removeEventListener("mouseup", everPrime);
        dewPrime.removeEventListener("keyup", everPrime);
      };
    };
  let zephyrPrime;
  zephyrPrime = [isCommentMode, louver];
  vapor.useEffect(yarnPrime, zephyrPrime);
  let acornPrime = event => {
    if (isCommentMode || louver == null || event.defaultPrevented) return;
    let fieldPrime = event.target;
    if (fieldPrime instanceof Node && louver.contains(fieldPrime)) return;
    let grainPrime = louver.parentElement;
    if (grainPrime == null) return;
    let havenPrime = flint({
      clientX: event.clientX,
      clientY: event.clientY,
      includePreviewMetadata: true,
      layerElement: louver,
      pageElement: grainPrime,
      pageSize,
      selectionKindFilter: topaz
    });
    havenPrime != null && (event.preventDefault(), event.stopPropagation(), !((reducer != null || gammaPrime != null) && !mintPrime()) && (grainPrime.ownerDocument.getSelection()?.removeAllRanges(), wye(havenPrime), strainer(null), union(null), deltaPrime(""), be(null), indigoPrime(null), kitePrime(false)));
  };
  let bloomPrime = vapor.useEffectEvent(acornPrime),
    coralPrime = () => {
      if (louver == null || isCommentMode) return;
      let inkPrime = louver.parentElement;
      if (inkPrime == null) return;
      let jadeitePrime = kernelPrime => {
        bloomPrime(kernelPrime);
      };
      return inkPrime.addEventListener("click", jadeitePrime), () => {
        inkPrime.removeEventListener("click", jadeitePrime);
      };
    };
  let driftPrime;
  driftPrime = [isCommentMode, louver];
  vapor.useEffect(coralPrime, driftPrime);
  let eaglePrime = (leafPrime, maplePrime, nimbusPrime) => {
    if (!isCommentMode || louver == null) return null;
    let opalPrime = louver.parentElement;
    return opalPrime == null ? null : flint({
      clientX: leafPrime,
      clientY: maplePrime,
      includePreviewMetadata: nimbusPrime,
      layerElement: louver,
      pageElement: opalPrime,
      pageSize
    });
  };
  let _DocxPreviewPanel = eaglePrime,
    frostPrime = (plumePrime, quillowPrime) => {
      logArtifactAnnotationSubmitted(jumper, {
        artifactTabId: tabId,
        artifactType: "document",
        importKind: "docx",
        threadId
      }, {
        annotationModeEnabled: isCommentMode,
        startSource: quillowPrime
      });
      strainer(plumePrime);
      union(pageSize);
      wye(null);
      alphaPrime(null);
      deltaPrime("");
      be(null);
      indigoPrime(null);
      kitePrime(false);
    };
  let glidePrime = frostPrime,
    honeyPrime = (event, rootPrime) => {
      if (reducer != null || gammaPrime != null || !AppInitialXg(event)) return;
      let silkPrime = ember({
        pageElement: rootPrime,
        pageSize
      }) ?? (vent?.selectionKind === "text" ? null : vent);
      silkPrime != null && (event.preventDefault(), event.stopPropagation(), glidePrime(silkPrime, "ask_codex_shortcut"));
    };
  let irisPrime = vapor.useEffectEvent(honeyPrime),
    jewelPrime = () => {
      if (louver == null || isCommentMode) return;
      let thornPrime = louver.parentElement;
      if (thornPrime == null) return;
      let uplandPrime = vistaPrime => {
        irisPrime(vistaPrime, thornPrime);
      };
      return thornPrime.ownerDocument.addEventListener("keydown", uplandPrime, {
        capture: true
      }), () => {
        thornPrime.ownerDocument.removeEventListener("keydown", uplandPrime, {
          capture: true
        });
      };
    };
  let knollPrime;
  knollPrime = [isCommentMode, louver];
  vapor.useEffect(jewelPrime, knollPrime);
  let lunarPrime = wispPrime => {
    (reducer != null || gammaPrime != null) && !mintPrime() || glidePrime(wispPrime, "annotation_mode_pointer");
  };
  let mossPrime = lunarPrime,
    northPrime = event => {
      if (!isCommentMode || !event.isPrimary || event.pointerType === "touch" || event.button !== 0) return;
      let yonderPrime = delta(event, pageSize);
      yonderPrime != null && (packing.current = false, event.preventDefault(), event.stopPropagation(), event.currentTarget.setPointerCapture(event.pointerId), wye(null), alphaPrime(null), indigoPrime(null), falconPrime({
        pointerId: event.pointerId,
        start: yonderPrime,
        current: yonderPrime,
        clientStart: {
          x: event.clientX,
          y: event.clientY
        },
        clientCurrent: {
          x: event.clientX,
          y: event.clientY
        }
      }));
    };
  let orbitPrime = northPrime,
    pinePrime = event => {
      if (echoPrime == null) {
        if (reducer != null || gammaPrime != null) {
          alphaPrime(null);
          return;
        }
        alphaPrime(_DocxPreviewPanel(event.clientX, event.clientY, false));
        return;
      }
      if (event.pointerId !== echoPrime.pointerId) return;
      let zenithPrime = delta(event, pageSize);
      zenithPrime != null && (event.preventDefault(), event.stopPropagation(), falconPrime(_event => _event == null || _event.pointerId !== event.pointerId ? _event : {
        ..._event,
        current: zenithPrime,
        clientCurrent: {
          x: event.clientX,
          y: event.clientY
        }
      }));
    };
  let questPrime = pinePrime,
    ridgePrime = event => {
      if (echoPrime == null || event.pointerId !== echoPrime.pointerId) return;
      let anvilPrime = delta(event, pageSize) ?? echoPrime.current;
      event.preventDefault();
      event.stopPropagation();
      event.currentTarget.hasPointerCapture(event.pointerId) && event.currentTarget.releasePointerCapture(event.pointerId);
      let beaconPrime = {
          ...echoPrime,
          current: anvilPrime,
          clientCurrent: {
            x: event.clientX,
            y: event.clientY
          }
        },
        cragPrime = jade(beaconPrime),
        domePrime = kite(beaconPrime, cragPrime);
      if (packing.current = cragPrime, !cragPrime) {
        let eddyPrime = _DocxPreviewPanel(event.clientX, event.clientY, true);
        if (eddyPrime != null) {
          packing.current = true;
          falconPrime(null);
          mossPrime(eddyPrime);
          return;
        }
      }
      if (reducer != null && domePrime.kind === "point") {
        mintPrime();
        falconPrime(null);
        return;
      }
      glidePrime(domePrime, "annotation_mode_pointer");
      falconPrime(null);
    };
  let stormPrime = ridgePrime,
    tidePrime = event => {
      if (packing.current) {
        packing.current = false;
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      let fjordPrime = _DocxPreviewPanel(event.clientX, event.clientY, true);
      fjordPrime != null && (event.preventDefault(), event.stopPropagation(), mossPrime(fjordPrime));
    };
  let unityPrime = tidePrime,
    valePrime = (glenPrime, hearthPrime) => {
      let {
          submitDirectly = false
        } = hearthPrime === undefined ? {} : hearthPrime,
        inletPrime = glenPrime.body.trim();
      if (gammaPrime != null) {
        if (inletPrime.length === 0) return;
        onCommentsChange(ledgePrime => ledgePrime.map(item => zinc(item) === gammaPrime ? {
          ...item,
          content: [{
            content_type: "text",
            text: inletPrime
          }]
        } : item));
        garnetPrime();
        return;
      }
      if (reducer == null || inletPrime.length === 0) return;
      let jettyPrime = umbra({
          anchor: reducer,
          pageCount,
          pageNumber,
          pageSize: tee ?? pageSize
        }),
        knobPrime = getAppSurfaceDisplayName({
          artifactKind: "document",
          body: inletPrime,
          label: violet(reducer, pageNumber),
          line: nextCommentNumber,
          metadata: jettyPrime,
          path: injector,
          title
        });
      logArtifactRefreshClicked(jumper, {
        artifactTabId: tabId,
        artifactType: "document",
        importKind: "docx",
        threadId
      }, {
        annotationModeEnabled: isCommentMode,
        annotationTargetKind: jettyPrime.target.type,
        submitMode: submitDirectly ? "direct" : "saved",
        submitSource: glenPrime.submitSource
      });
      submitDirectly ? ensureAppActionPayloadSchemasInit.dispatchHostMessage({
        type: "artifact-direct-comment",
        body: inletPrime,
        comment: knobPrime,
        conversationId,
        sessionId: crypto.randomUUID()
      }) : onCommentsChange(mirePrime => [...mirePrime, knobPrime]);
      garnetPrime();
    };
  let $ = valePrime,
    wavePrime = isCommentMode ? "pointer-events-auto" : "pointer-events-none",
    apexPrime = IntlProvider("absolute inset-0 z-[3]", wavePrime);
  let brookPrime = isCommentMode ? {
    cursor: pickSourcePosition
  } : undefined;
  let cliffPrime, duskPrime;
  cliffPrime = () => {
    falconPrime(null);
    alphaPrime(null);
  };
  duskPrime = () => alphaPrime(null);
  let elmPrime;
  {
    let nookPrime;
    nookPrime = oxbowPrime => <At key={zinc(oxbowPrime)} {...{
      comment: oxbowPrime,
      isSelected: zinc(oxbowPrime) === gammaPrime,
      onEdit: pondPrime => {
        strainer(null);
        union(null);
        deltaPrime("");
        kitePrime(false);
        indigoPrime(null);
        alphaPrime(null);
        be(pondPrime);
      },
      onPreviewChange: indigoPrime,
      zoomScale: zoomScale
    }} />;
    elmPrime = marblePrime.map(nookPrime);
  }
  let fernPrime = onyxPrime == null || gammaPrime != null ? null : <DocxPreviewPanelHelper25 {...{
    comment: onyxPrime,
    layer: louver
  }} />;
  let $t = zener != null && reducer == null && gammaPrime == null ? <DocxPreviewPanelHelper24 {...{
    paddingPx: 4,
    pageSize,
    rect: zener.rect,
    testId: "artifact-docx-element-hover-highlight"
  }} /> : null;
  let grovePrime = vent != null && reducer == null ? <>
        {vent.selectionKind === "text" ? null : <DocxPreviewPanelHelper24 {...{
      bordered: true,
      paddingPx: 4,
      pageSize,
      rect: vent.rect,
      testId: "artifact-docx-selection-outline"
    }} />}
        {<IsWhitespaceOrEofCharCode {...{
      anchor: vent.askForEditAnchor,
      label: emberPrime,
      pageSize,
      rect: vent.rect,
      testId: "artifact-docx-ask-for-edit-button",
      zoomScale: zoomScale,
      onClick: () => glidePrime(vent, "ask_codex_button")
    }} />}
      </> : null;
  let hillPrime = echoPrime == null ? null : <ResolveWorktreeHandoffDirection {...{
    pageSize,
    rect: lemon(echoPrime.start, echoPrime.current),
    testId: "artifact-docx-comment-region-outline"
  }} />;
  let islePrime = reducer == null ? null : <DocxPreviewPanelHelper26 {...{
    anchor: reducer,
    label: nextCommentNumber,
    pageSize: tee ?? pageSize,
    zoomScale: zoomScale
  }} />;
  let juniperPrime = pearlPrime == null || xenonPrime == null || violetPrime == null ? null : <div ref={nip} className={AppInitialOg} style={{
    scale: `${bravoPrime}`,
    transformOrigin: "top left",
    left: xenonPrime.x,
    top: xenonPrime.y,
    height: Queued,
    width: 294
  }} onPointerDown={sage} onTouchCancel={event => {
    event.stopPropagation();
    onTouchCancel?.();
  }} onTouchEnd={event => {
    event.stopPropagation();
    onTouchEnd?.();
  }} onTouchMove={event => {
    event.stopPropagation();
    onTouchMove?.(event);
  }} onTouchStart={event => {
    event.stopPropagation();
    onTouchStart?.(event);
  }} onWheel={event => {
    event.stopPropagation();
    onWheel?.(event);
  }}>
        <DesignComposerSurface key={violetPrime.sessionId} allowImageAttachments={false} defaultCreateSubmitMode="direct" inputAriaLabel={amberPrime} keyboardEventTarget={typeof window > "u" ? undefined : window} placeholder={cedarPrime} session={violetPrime} windowHeight={Queued} onCancel={garnetPrime} onDelete={quarryPrime => {
      onCommentsChange(rapidsPrime => rapidsPrime.filter(item => zinc(item) !== quarryPrime));
      garnetPrime();
    }} onEscape={garnetPrime} onBodyChange={violetPrime.target.mode === "create" ? ivoryPrime : undefined} onLightDismissibilityChange={yarn} onMounted={yarn} onDirectSubmit={spurPrime => {
      $(spurPrime, {
        submitDirectly: true
      });
    }} onSubmit={$} />
      </div>;
  return <div ref={manifold} className={apexPrime} data-testid="artifact-docx-comment-layer" style={brookPrime} onPointerDown={orbitPrime} onPointerMove={questPrime} onPointerUp={stormPrime} onPointerCancel={cliffPrime} onPointerLeave={duskPrime} onClick={unityPrime} onTouchCancel={onTouchCancel} onTouchEnd={onTouchEnd} onTouchMove={onTouchMove} onTouchStart={onTouchStart} onWheel={onWheel}>
      {elmPrime}
      {fernPrime}
      {$t}
      {grovePrime}
      {hillPrime}
      {islePrime}
      {juniperPrime}
    </div>;
}
