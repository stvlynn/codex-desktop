// Restored from ref/webview/assets/pdf-preview-panel-Cv0tBSkT.js
// Wave FY — full polished body from `pdf-preview-panel-Cv0tBSkT/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 21 (verified 68/89).
// Careful split 5/6
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginClickTarget } from "../../analytics/codex-plugin-click-target";
import { CodexProfileInlinePhotoChangeAction } from "../../analytics/codex-profile-inline-photo-change-action";
import { logProductEvent } from "../../analytics/log-product-event";
import {
  ensureArtifactAnalyticsInit,
  logArtifactAnnotationModeEnabled,
  logArtifactAnnotationSubmitted,
  logArtifactRefreshClicked,
} from "../../artifact/artifact-analytics";
import { ArtifactPreviewDownloadButton } from "../../artifact/artifact-preview-download-button";
import { ArtifactPreviewPageNav } from "../../artifact/artifact-preview-page-nav";
import { artifactTabLoading } from "../../artifact/artifact-tab-loading";
import { queueAutomationRun as QueueAutomationRun } from "../../automation/queue-automation-run";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_S8_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Utt_Init,
  ensureComposerEsm_Z8_Init,
} from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
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
import {
  ArtifactPreviewStatus,
  ensureArtifactPreviewStatusInit,
} from "../../ui/artifact-preview-status";
import { deferredW1 } from "../../ui/deferred-w1";
import { ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { MemoizedValueBridge } from "../../ui/memoized-value-bridge";
import { OperationStatusOverlay } from "../../ui/operation-status-overlay";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { RtlAwareToggleThumb } from "../../ui/rtl-aware-toggle-thumb";
import { pickSourcePosition } from "../../utils/pick-source-position";
import { ToWorktree } from "../../worktree/to-worktree";

// Cross-part soft stubs.
const PdfPreviewPanelHelper32: any = undefined;
const PdfPreviewPanelHelper50: any = undefined;
const PdfPreviewPanelHelper8: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const deferredUiJ1: any = undefined;
const pine: any = undefined;
const river: any = undefined;
const tide: any = undefined;
const wave: any = undefined;
const xenon: any = undefined;

function apex(prismSecond, quillSecond) {
  let reefSecond = brook(prismSecond);
  if (quillSecond === "in") {
    for (let sageSecond of lagoon)
      if (sageSecond > reefSecond + hill) return sageSecond;
    return lagoon[lagoon.length - 1];
  }
  for (let topazSecond = lagoon.length - 1; topazSecond >= 0; --topazSecond) {
    let ultraSecond = lagoon[topazSecond];
    if (ultraSecond < reefSecond - hill) return ultraSecond;
  }
  return lagoon[0];
}
function brook(vaporSecond) {
  return Math.min(grove, Math.max(fern, vaporSecond));
}
var cliff,
  dusk,
  elm,
  fern,
  grove,
  hill,
  isle,
  juniper,
  lagoon,
  meadow = esmInit(() => {
    cliff = reactCompilerRuntime();
    dusk = commonJsInit(react(), 1);
    elm = {
      height: 792,
      width: 612,
    };
    fern = 0.3;
    grove = 8;
    hill = 1e-4;
    isle = 5;
    juniper = 200;
    lagoon = [
      fern,
      0.4,
      0.5,
      0.67,
      0.75,
      0.9,
      1,
      1.1,
      1.25,
      1.5,
      1.75,
      2,
      2.5,
      3,
      4,
      5,
      6,
      7,
      grove,
    ];
  });
function nest(wheatSecond) {
  return (
    typeof wheatSecond == "object" &&
    !!wheatSecond &&
    "name" in wheatSecond &&
    wheatSecond.name === "RenderingCancelledException"
  );
}
var oak,
  petal,
  quiet,
  Rain,
  seed = esmInit(() => {
    oak = reactCompilerRuntime();
    petal = commonJsInit(react(), 1);
    river();
    xenon();
    pine();
    tide();
    meadow();
    Rain = petal.memo(function (yarnSecond) {
      let {
          commentLayer,
          currentPage,
          linkNavigation,
          pageNumber,
          pageSelector,
          pageViewportSize,
          pageWidth,
          pdfDocument,
          resize,
          renderRequestKey,
          scrollRootRef,
          isZooming,
          onRenderError,
          onRendered,
          onViewportReady,
          zoomEndTick: zephyrSecond,
        } = yarnSecond,
        acornSecond = petal.useRef(null),
        bloomSecond = petal.useRef(null),
        [coralSecond, driftSecond] = petal.useState(null),
        [eagleSecond, frostSecond] = petal.useState(null),
        [glideSecond, honeySecond] = petal.useState(false),
        irisSecond = coralSecond?.pdfDocument === pdfDocument,
        jewelSecond = irisSecond ? coralSecond.page : null,
        knollSecond = irisSecond ? coralSecond.viewportSize : null,
        lunarSecond = knollSecond ?? pageViewportSize,
        mossSecond = wave({
          pageViewportSize: lunarSecond,
          pageWidth,
          resize,
        });
      let northSecond = mossSecond,
        orbitSecond =
          knollSecond != null && knollSecond.width > 0
            ? northSecond.width / knollSecond.width
            : 1,
        pineSecond = Math.abs(currentPage - pageNumber),
        questSecond = glideSecond || pineSecond <= 2,
        ridgeSecond = glideSecond || pineSecond <= 2,
        stormSecond = glideSecond ? 50 : 50 + pineSecond * 40,
        tideSecond = stormSecond + pineSecond * 60,
        unitySecond = () => {
          let petalSecond = false;
          return (
            driftSecond(null),
            frostSecond(null),
            (async function () {
              try {
                let quietSecond = await pdfDocument.getPage(pageNumber);
                if (petalSecond) return;
                let rainSecond = quietSecond.getViewport({
                  scale: 1,
                });
                driftSecond({
                  page: quietSecond,
                  pdfDocument,
                  viewportSize: {
                    height: rainSecond.height,
                    width: rainSecond.width,
                  },
                });
              } catch {
                petalSecond || (driftSecond(null), frostSecond(pdfDocument));
              }
            })(),
            () => {
              petalSecond = true;
            }
          );
        };
      let valeSecond;
      valeSecond = [pageNumber, pdfDocument, renderRequestKey];
      petal.useEffect(unitySecond, valeSecond);
      let waveSecond, apexSecond;
      waveSecond = () => {
        eagleSecond !== pdfDocument ||
          (!glideSecond && currentPage !== pageNumber) ||
          onRenderError?.();
      };
      apexSecond = [
        currentPage,
        eagleSecond,
        glideSecond,
        onRenderError,
        pageNumber,
        pdfDocument,
      ];
      petal.useEffect(waveSecond, apexSecond);
      let brookSecond, cliffSecond;
      brookSecond = () => {
        knollSecond != null && onViewportReady?.();
      };
      cliffSecond = [knollSecond, onViewportReady];
      petal.useLayoutEffect(brookSecond, cliffSecond);
      let duskSecond, elmSecond;
      elmSecond = () => {
        let seedSecond = bloomSecond.current;
        if (seedSecond == null) return;
        if (typeof IntersectionObserver > "u") {
          honeySecond(true);
          return;
        }
        let trailSecond = new IntersectionObserver(
          (urnSecond) => {
            let vineSecond = urnSecond[0];
            vineSecond != null &&
              honeySecond(
                vineSecond.isIntersecting || vineSecond.intersectionRatio > 0,
              );
          },
          {
            root: scrollRootRef.current,
            rootMargin: "200px 0px",
            threshold: 0.01,
          },
        );
        return (
          trailSecond.observe(seedSecond),
          () => {
            trailSecond.disconnect();
          }
        );
      };
      duskSecond = [scrollRootRef];
      petal.useEffect(elmSecond, duskSecond);
      let fernSecond = () => {
        let windSecond = acornSecond.current;
        if (windSecond == null) return;
        if (jewelSecond == null || !questSecond) {
          windSecond.width = 0;
          windSecond.height = 0;
          return;
        }
        if (isZooming) return;
        let yarrowSecond = jewelSecond.getViewport({
          scale: 1,
        });
        if (
          yarrowSecond.width <= 0 ||
          northSecond.width <= 0 ||
          northSecond.height <= 0
        )
          return;
        let azureSecond = false,
          birchSecond = null,
          canyonSecond = window.devicePixelRatio || 1,
          dewSecond = Math.ceil(northSecond.width * canyonSecond),
          everSecond = Math.ceil(northSecond.height * canyonSecond);
        windSecond.width = dewSecond;
        windSecond.height = everSecond;
        windSecond.getContext("2d")?.clearRect(0, 0, dewSecond, everSecond);
        try {
          birchSecond = jewelSecond.render({
            canvas: windSecond,
            viewport: jewelSecond.getViewport({
              scale: dewSecond / yarrowSecond.width,
            }),
          });
          birchSecond.promise.then(
            () => {
              !azureSecond && glideSecond && onRendered?.();
            },
            (fieldSecond) => {
              !azureSecond &&
                glideSecond &&
                !nest(fieldSecond) &&
                onRenderError?.();
            },
          );
        } catch (grainSecond) {
          glideSecond && !nest(grainSecond) && onRenderError?.();
          return;
        }
        return () => {
          azureSecond = true;
          birchSecond?.cancel();
        };
      };
      let groveSecond;
      groveSecond = [
        northSecond.height,
        northSecond.width,
        glideSecond,
        isZooming,
        onRenderError,
        onRendered,
        jewelSecond,
        renderRequestKey,
        questSecond,
        zephyrSecond,
      ];
      petal.useEffect(fernSecond, groveSecond);
      let hillSecond = knollSecond == null ? undefined : "",
        isleSecond = jewelSecond?.userUnit ?? 1,
        juniperSecond = {
          "--scale-factor": orbitSecond,
          "--user-unit": isleSecond,
          height: northSecond.height,
          width: northSecond.width,
        };
      let lagoonSecond = juniperSecond,
        meadowSecond = (
          <canvas ref={acornSecond} className="absolute inset-0 size-full" />
        );
      let nestSecond =
        jewelSecond == null || isZooming || !ridgeSecond ? null : (
          <>
            {
              <PdfPreviewPanelHelper50
                {...{
                  page: jewelSecond,
                  deferMs: stormSecond,
                }}
              />
            }
            {
              <PdfPreviewPanelHelper8
                {...{
                  deferMs: tideSecond,
                  linkNavigation,
                  page: jewelSecond,
                  pageSelector,
                  pdfDocument,
                  scrollRootRef,
                }}
              />
            }
          </>
        );
      let oakSecond =
        jewelSecond == null ||
        knollSecond == null ||
        commentLayer == null ? null : (
          <PdfPreviewPanelHelper32
            key={commentLayer.isCommentMode ? "comment" : "browse"}
            {...{
              comments: commentLayer.comments,
              conversationId: commentLayer.conversationId,
              isCommentMode: commentLayer.isCommentMode,
              nextCommentNumber: commentLayer.nextCommentNumber,
              onCommentsChange: commentLayer.onCommentsChange,
              onDraftActiveChange: commentLayer.onDraftActiveChange,
              page: jewelSecond,
              pageCount: commentLayer.pageCount,
              pageNumber,
              pageSize: knollSecond,
              path: commentLayer.path,
              tabId: commentLayer.tabId,
              threadId: commentLayer.threadId,
              title: commentLayer.title,
            }}
          />
        );
      return (
        <div
          ref={bloomSecond}
          className="pdfPreviewPage relative shrink-0 overflow-hidden border border-token-border-default bg-white shadow-sm"
          data-artifact-pdf-page={true}
          data-page-number={pageNumber}
          data-page-viewport-ready={hillSecond}
          style={lagoonSecond}
        >
          {meadowSecond}
          {nestSecond}
          {oakSecond}
        </div>
      );
    });
  });
function PdfPreviewPanelHelper57(havenSecond) {
  let {
      initialPage,
      numPages,
      onClose,
      onOpenExternalLink,
      pageViewportSize,
      pdfDocument,
      title,
    } = havenSecond,
    inkSecond = useIntl(),
    jadeiteSecond = wind.useRef(null),
    kernelSecond = urn(initialPage, numPages);
  let [leafSecond, mapleSecond] = wind.useState(kernelSecond),
    [nimbusSecond, opalSecond] = wind.useState(null),
    plumeSecond = (cogSecond) => {
      opalSecond({
        height: Math.floor(cogSecond.contentRect.height),
        width: Math.floor(cogSecond.contentRect.width),
      });
    };
  let quillowSecond = useResizeObserver(plumeSecond),
    rootSecond = (discSecond) => {
      jadeiteSecond.current = discSecond;
      quillowSecond(discSecond);
    };
  let silkSecond = rootSecond,
    thornSecond = (edgeSecond) => {
      mapleSecond(urn(edgeSecond, numPages));
    };
  let uplandSecond = thornSecond,
    vistaSecond = {
      onExternalLink: onOpenExternalLink,
      onPageChange: uplandSecond,
    };
  let wispSecond = vistaSecond,
    yonderSecond = inkSecond.formatMessage({
      id: "artifactTab.preview.previousPage",
      defaultMessage: "Previous page",
      description:
        "Tooltip for navigating to the previous page in an artifact preview",
    });
  let zenithSecond = yonderSecond,
    anvilSecond = inkSecond.formatMessage({
      id: "artifactTab.preview.nextPage",
      defaultMessage: "Next page",
      description:
        "Tooltip for navigating to the next page in an artifact preview",
    });
  let beaconSecond = anvilSecond,
    cragSecond = urn(leafSecond, numPages),
    domeSecond = () => {
      uplandSecond(cragSecond - 1);
    };
  let eddySecond = domeSecond,
    fjordSecond = () => {
      uplandSecond(cragSecond + 1);
    };
  let glenSecond = fjordSecond,
    hearthSecond = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        eddySecond();
        return;
      }
      if (
        event.key === "ArrowRight" ||
        event.key === "PageDown" ||
        event.key === " "
      ) {
        event.preventDefault();
        glenSecond();
        return;
      }
      if (event.key === "Home") {
        event.preventDefault();
        uplandSecond(1);
        return;
      }
      event.key === "End" && (event.preventDefault(), uplandSecond(numPages));
    };
  let inletSecond = hearthSecond,
    jettySecond = (event) => {
      if (
        event.defaultPrevented ||
        (event.target instanceof Element &&
          event.target.closest(
            "a,button,input,select,textarea,[role='button']",
          ) != null)
      )
        return;
      let forgeSecond = event.currentTarget.getBoundingClientRect();
      event.clientX < forgeSecond.left + forgeSecond.width / 2
        ? eddySecond()
        : glenSecond();
    };
  let knobSecond = jettySecond,
    ledgeSecond = trail({
      pageViewportSize,
      presentationSize: nimbusSecond,
    });
  let mireSecond = {
    kind: "page-width",
  };
  let nookSecond = (
    <div className="flex min-h-0 flex-1 items-center justify-center px-8 py-10">
      {
        <Rain
          {...{
            currentPage: cragSecond,
            isZooming: false,
            linkNavigation: wispSecond,
            pageNumber: cragSecond,
            pageSelector: "[data-artifact-pdf-page]",
            pageViewportSize,
            pageWidth: ledgeSecond,
            pdfDocument,
            resize: mireSecond,
            scrollRootRef: jadeiteSecond,
            zoomEndTick: 0,
          }}
        />
      }
    </div>
  );
  let oxbowSecond = cragSecond <= 1,
    pondSecond = (
      <AppIconYlt
        {...{
          className: "icon-2xs rotate-180",
        }}
      />
    );
  let quarrySecond = (
    <ReadLoginRouteQuerySnapshot
      {...{
        "aria-label": zenithSecond,
        color: "ghost",
        disabled: oxbowSecond,
        size: "toolbar",
        uniform: true,
        className: "text-white hover:text-white",
        onClick: eddySecond,
        children: pondSecond,
      }}
    />
  );
  let rapidsSecond = (
    <span className="min-w-14 px-2 text-center text-sm tabular-nums">
      {
        <MemoizedFormattedMessage
          {...{
            id: "artifactTab.preview.pageIndicator",
            defaultMessage: "{current}/{total}",
            description: "Current page indicator in an artifact preview header",
            values: {
              current: cragSecond,
              total: numPages,
            },
          }}
        />
      }
    </span>
  );
  let spurSecond = cragSecond >= numPages,
    torSecond = (
      <AppIconYlt
        {...{
          className: "icon-2xs",
        }}
      />
    );
  let updraftSecond = (
    <ReadLoginRouteQuerySnapshot
      {...{
        "aria-label": beaconSecond,
        color: "ghost",
        disabled: spurSecond,
        size: "toolbar",
        uniform: true,
        className: "text-white hover:text-white",
        onClick: glenSecond,
        children: torSecond,
      }}
    />
  );
  let vergeSecond = <div className="mx-1 h-4 w-px bg-white/25" />;
  let weirSecond, yardSecond;
  weirSecond = (
    <Chatgpt2
      {...{
        className: "icon-2xs",
      }}
    />
  );
  yardSecond = (
    <MemoizedFormattedMessage
      {...{
        id: "artifactTab.preview.exitPresentation",
        defaultMessage: "Exit",
        description: "Button label that exits PDF presentation mode",
      }}
    />
  );
  let anchorSecond = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "ghost",
        size: "toolbar",
        className: "gap-1 px-2 text-white hover:text-white",
        onClick: onClose,
        children: [weirSecond, yardSecond],
      }}
    />
  );
  let boltSecond = (
    <div className="pointer-events-none absolute right-6 bottom-6 left-6 flex justify-center">
      <div className="pointer-events-auto flex items-center gap-1 rounded-md bg-black/75 px-2 py-1 text-white shadow-lg">
        {quarrySecond}
        {rapidsSecond}
        {updraftSecond}
        {vergeSecond}
        {anchorSecond}
      </div>
    </div>
  );
  return (
    <div
      ref={silkSecond}
      aria-label={title}
      autoFocus={true}
      className="relative flex h-full min-h-0 flex-col overflow-hidden bg-black text-white outline-none"
      data-testid="artifact-pdf-presentation"
      onClick={knobSecond}
      onKeyDown={inletSecond}
      tabIndex={-1}
    >
      {nookSecond}
      {boltSecond}
    </div>
  );
}
function trail({ pageViewportSize, presentationSize }) {
  let gearSecond = pageViewportSize?.width ?? 612,
    hingeSecond = pageViewportSize?.height ?? 792;
  if (presentationSize == null || gearSecond <= 0 || hingeSecond <= 0)
    return gearSecond;
  let ironSecond = Math.max(1, presentationSize.width - 64),
    jointSecond = Math.max(1, presentationSize.height - 112);
  return Math.floor(
    Math.min(ironSecond, (gearSecond / hingeSecond) * jointSecond),
  );
}
function urn(keystoneSecond, latchSecond) {
  return Math.min(Math.max(keystoneSecond, 1), Math.max(latchSecond, 1));
}
var vine,
  wind,
  yarrow,
  azure = esmInit(() => {
    vine = reactCompilerRuntime();
    wind = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    AppIconYlt();
    ensureConversationPageEsm_Act_Init();
    deferredUiJ1();
    seed();
  });
function birch({ anchor, container, pageSelector }) {
  let motorSecond = container.getBoundingClientRect(),
    nutSecond =
      anchor.kind === "point"
        ? anchor.clientX
        : motorSecond.left + motorSecond.width / 2,
    pistonSecond =
      anchor.kind === "point"
        ? anchor.clientY
        : motorSecond.top + motorSecond.height / 2,
    rivetSecond = dew({
      anchorClientX: nutSecond,
      anchorClientY: pistonSecond,
      container,
      pageSelector,
    });
  if (rivetSecond == null) return null;
  let screwSecond = Number(rivetSecond.dataset.pageNumber);
  if (!Number.isFinite(screwSecond)) return null;
  let torqueSecond = rivetSecond.getBoundingClientRect();
  return torqueSecond.width <= 0 || torqueSecond.height <= 0
    ? null
    : {
        anchorContainerOffsetX: nutSecond - motorSecond.left,
        anchorContainerOffsetY: pistonSecond - motorSecond.top,
        pageNumber: screwSecond,
        ratioX: haven((nutSecond - torqueSecond.left) / torqueSecond.width),
        ratioY: haven((pistonSecond - torqueSecond.top) / torqueSecond.height),
      };
}
function canyon({ anchorState, container, pageSelector }) {
  let valveSecond = ever({
    container,
    pageNumber: anchorState.pageNumber,
    pageSelector,
  });
  if (valveSecond == null) return false;
  let axleSecond = container.getBoundingClientRect(),
    bracketSecond = valveSecond.getBoundingClientRect(),
    clampSecond = bracketSecond.left + bracketSecond.width * anchorState.ratioX,
    drillSecond = bracketSecond.top + bracketSecond.height * anchorState.ratioY,
    engineSecond = axleSecond.left + anchorState.anchorContainerOffsetX,
    frameSecond = axleSecond.top + anchorState.anchorContainerOffsetY;
  return (
    (container.scrollLeft += clampSecond - engineSecond),
    (container.scrollTop += drillSecond - frameSecond),
    true
  );
}
function dew({ anchorClientX, anchorClientY, container, pageSelector }) {
  let gasketSecond = document.elementFromPoint(anchorClientX, anchorClientY),
    handleSecond =
      gasketSecond instanceof HTMLElement
        ? gasketSecond.closest(pageSelector)
        : null;
  if (handleSecond != null && container.contains(handleSecond))
    return handleSecond;
  let insertSecond = null,
    jacketSecond = 1 / 0;
  for (let knurlSecond of field(container, pageSelector)) {
    let leverSecond = knurlSecond.getBoundingClientRect(),
      mountSecond =
        grain({
          max: leverSecond.bottom,
          min: leverSecond.top,
          value: anchorClientY,
        }) +
        grain({
          max: leverSecond.right,
          min: leverSecond.left,
          value: anchorClientX,
        });
    mountSecond < jacketSecond &&
      ((jacketSecond = mountSecond), (insertSecond = knurlSecond));
  }
  return insertSecond;
}
function ever({ container, pageNumber, pageSelector }) {
  return (
    field(container, pageSelector).find(
      (item) => Number(item.dataset.pageNumber) === pageNumber,
    ) ?? null
  );
}
function field(nozzleSecond, platenSecond) {
  return Array.from(nozzleSecond.querySelectorAll(platenSecond));
}
function grain({ max, min, value }) {
  return value < min ? min - value : value > max ? value - max : 0;
}
function haven(ratchetSecond) {
  return Number.isFinite(ratchetSecond)
    ? Math.min(1, Math.max(0, ratchetSecond))
    : 0;
}
var ink = esmInit(() => {});
