// Restored from ref/webview/assets/pdf-preview-panel-Cv0tBSkT.js
// Wave FY — full polished body from `pdf-preview-panel-Cv0tBSkT/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 21 (verified 68/89).
// Careful split 1/6
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
const ember: any = undefined;
const ivory: any = undefined;
const jasper: any = undefined;
const kelp: any = undefined;
const quill: any = undefined;
const topaz: any = undefined;
const ultra: any = undefined;
const vapor: any = undefined;
const wheat: any = undefined;

const NotebookPreviewOpenActions: any = undefined;
/** Wave FY unresolved companion (jsx-collision:shouldOfferCloudFollowUp@conversation/should-offer-cloud-follow-up.ts) */
const AppInitialCg: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-gr.ts) */
const deferredUiGR: any = undefined;
/** Wave FY unresolved companion (missing-export:worktree/queued.tsx) */
const Queued: any = undefined;
/** Wave FY unresolved companion (missing-export:artifact/zoom-percent-menu-control.tsx) */
const ZoomPercentMenuControl: any = undefined;
/** Wave FY unresolved companion (jsx-collision:dismiss@conversation/dismiss.ts) */
const AppInitialIO: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-j1.tsx) */
const deferredUiJ1: any = undefined;
/** Wave FY unresolved companion (jsx-collision:flashBrowserCommentPopupShake@browser/flash-browser-comment-popup-shake.ts) */
const AppInitialLO: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureGpuTearingDebugSettingsInit@settings/gpu-tearing-debug-settings.ts) */
const AppInitialO: any = undefined;
/** Wave FY unresolved companion (jsx-collision:clearSuccessfulWorktreeOperation@environments/worktree-handoff-helpers.ts) */
const AppInitialOg: any = undefined;
/** Wave FY unresolved companion (missing-export:worktree/move-thread.ts) */
const moveThread: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-u1.tsx) */
const DeferredUiU1: any = undefined;
/** Wave FY unresolved companion (jsx-collision:formatSkillScopeLabel@skills/skill-scope-labels.ts) */
const AppInitialVj: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (missing-export:runtime/vite-preload.ts) */
const vitePreload: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-wr-2.ts) */
const deferredUiWR: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiXg@ui/deferred-ui-xg.tsx) */
const AppInitialXg: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-xr.ts) */
const deferredUiXR: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FY unresolved companion (jsx-collision:identity@utils/identity.ts) */
const AppInitialZO: any = undefined;
const __vite__mapDeps = (quillow, silk = __vite__mapDeps, thorn = silk.f || (silk.f = ["pdfjs-dist", "./app-initial-C-fROkKo.js", "./rolldown-runtime-BG2f4sTM.js", "./app-initial-Czet5G9g.css"])) => quillow.map(item => thorn[item]);
function alpha(upland) {
  let {
      containerRef,
      pageSelector,
      totalPages
    } = upland,
    [vista, wisp] = falcon.useState(1),
    yonder = falcon.useRef(null),
    zenith = falcon.useRef(null),
    anvil = copper(vista, totalPages),
    beacon,
    crag;
  beacon = () => {
    let jetty = containerRef.current;
    if (jetty == null || totalPages < 1 || typeof IntersectionObserver > "u") return;
    let knob = bravo(jetty, pageSelector);
    if (knob.length === 0) return;
    let ledge = new Map(),
      mire = new IntersectionObserver(oxbow => {
        for (let quarry of oxbow) ledge.set(quarry.target, quarry.intersectionRatio);
        let pond = delta({
          container: jetty,
          pageElements: knob,
          pageVisibilityByElement: ledge
        });
        pond != null && (yonder.current != null && pond !== yonder.current || (pond === yonder.current && (yonder.current = null, zenith.current?.(), zenith.current = null), wisp(pond)));
      }, {
        root: jetty,
        threshold: gamma
      });
    for (let rapids of knob) {
      ledge.set(rapids, 0);
      mire.observe(rapids);
    }
    let nook = delta({
      container: jetty,
      pageElements: knob,
      pageVisibilityByElement: ledge
    });
    return nook != null && wisp(nook), () => {
      mire.disconnect();
      yonder.current = null;
      zenith.current?.();
      zenith.current = null;
    };
  };
  crag = [containerRef, pageSelector, totalPages];
  falcon.useEffect(beacon, crag);
  let dome = spur => {
    let tor = containerRef.current;
    if (tor == null) return;
    let updraft = bravo(tor, pageSelector).at(spur - 1);
    if (updraft == null) return;
    zenith.current?.();
    zenith.current = null;
    yonder.current = spur;
    let verge = null,
      weir = () => {
        verge != null && (clearTimeout(verge), verge = null);
        tor.removeEventListener("scroll", bolt);
      },
      yard = () => {
        if (yonder.current !== spur) return;
        yonder.current = null;
        weir();
        let cog = delta({
          container: tor,
          pageElements: bravo(tor, pageSelector),
          pageVisibilityByElement: new Map()
        });
        cog != null && wisp(cog);
      },
      bolt = () => {
        verge != null && clearTimeout(verge);
        verge = setTimeout(yard, harbor);
      };
    zenith.current = weir;
    updraft.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    wisp(spur);
    bolt();
    tor.addEventListener("scroll", bolt);
  };
  let eddy = dome,
    fjord = () => {
      let disc = anvil - 1;
      disc < 1 || eddy(disc);
    };
  let glen = fjord,
    hearth = () => {
      let edge = anvil + 1;
      edge > totalPages || eddy(edge);
    };
  let inlet = hearth;
  return {
    currentPage: anvil,
    goToNextPage: inlet,
    goToPreviousPage: glen
  };
}
function bravo(forge, gear) {
  return Array.from(forge.querySelectorAll(gear));
}
function copper(hinge, iron) {
  return Math.min(Math.max(hinge, 1), Math.max(iron, 1));
}
function delta({
  container,
  pageElements,
  pageVisibilityByElement
}) {
  if (pageElements.length === 0) return null;
  let joint = 0,
    keystone = -1;
  for (let [piston, rivet] of pageElements.entries()) {
    let screw = pageVisibilityByElement.get(rivet) ?? 0;
    screw > keystone && (keystone = screw, joint = piston);
  }
  if (keystone > 0) return joint + 1;
  let latch = container.getBoundingClientRect().top,
    motor = 0,
    nut = 1 / 0;
  for (let [torque, valve] of pageElements.entries()) {
    let axle = Math.abs(valve.getBoundingClientRect().top - latch);
    axle < nut && (nut = axle, motor = torque);
  }
  return motor + 1;
}
var echo,
  falcon,
  gamma,
  harbor,
  indigo = esmInit(() => {
    echo = reactCompilerRuntime();
    falcon = commonJsInit(react(), 1);
    gamma = [0, 0.25, 0.5, 0.75, 1];
    harbor = 100;
  });
function jade(bracket) {
  let {
      fileDataUrl
    } = bracket,
    [clamp, drill] = $e.useState(null),
    [engine, frame] = $e.useState("loading"),
    [gasket, handle] = $e.useState(fileDataUrl),
    [insert, jacket] = $e.useState(0),
    [knurl, lever] = $e.useState(null),
    [mount, nozzle] = $e.useState(null),
    platen,
    ratchet;
  platen = () => {
    let shim = false,
      tappet = null;
    return drill(null), handle(fileDataUrl), frame("loading"), jacket(0), lever(null), nozzle(null), async function () {
      try {
        let arbor = await kite();
        if (shim) return;
        let bushing = lemon(fileDataUrl);
        if (bushing == null) {
          frame("error");
          return;
        }
        tappet = arbor.getDocument({
          data: bushing
        });
        let collar = await tappet.promise;
        if (shim) {
          collar.destroy();
          return;
        }
        if (!Number.isSafeInteger(collar.numPages) || collar.numPages <= 0) {
          collar.destroy();
          frame("error");
          return;
        }
        let dowel = (await collar.getPage(1)).getViewport({
          scale: 1
        });
        if (shim) {
          collar.destroy();
          return;
        }
        nozzle(collar);
        drill(fileDataUrl);
        jacket(collar.numPages);
        lever({
          height: dowel.height,
          width: dowel.width
        });
        frame("ready");
      } catch {
        if (shim) return;
        nozzle(null);
        drill(null);
        jacket(0);
        lever(null);
        frame("error");
      }
    }(), () => {
      shim = true;
      tappet != null && !tappet.destroyed && tappet.destroy();
    };
  };
  ratchet = [fileDataUrl];
  $e.useEffect(platen, ratchet);
  return {
    loadedFileDataUrl: clamp,
    loadState: engine,
    loadStateFileDataUrl: gasket,
    numPages: insert,
    pageViewportSize: knurl,
    pdfDocument: mount
  };
}
async function kite() {
  if (typeof window > "u") throw Error("pdf.js can only be loaded in the browser");
  onyx ??= vitePreload(() => import("pdfjs-dist"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url);
  let flange = await onyx;
  return (!pearl || flange.GlobalWorkerOptions.workerSrc !== nickel) && (flange.GlobalWorkerOptions.workerSrc = nickel, pearl = true), flange;
}
function lemon(gib) {
  let hub = gib.indexOf("base64,");
  if (!gib.startsWith("data:") || hub < 0) return null;
  let idler;
  try {
    idler = window.atob(gib.slice(hub + 7));
  } catch {
    return null;
  }
  let jig = new Uint8Array(idler.length);
  for (let keeper = 0; keeper < idler.length; keeper += 1) jig[keeper] = idler.charCodeAt(keeper);
  return jig;
}
var marble,
  $e,
  nickel,
  onyx,
  pearl,
  quartz = esmInit(() => {
    marble = reactCompilerRuntime();
    $e = commonJsInit(react(), 1);
    ensureViteModulepreloadRuntime();
    nickel = new URL("" + new URL("pdf.worker.min-qwK7q_zL.mjs", import.meta.url).href, "" + import.meta.url).toString();
    onyx = null;
    pearl = false;
  }),
  river = esmInit(() => {});
function at(lug) {
  return typeof lug == "object" && !!lug && "num" in lug && typeof lug.num == "number" && "gen" in lug && typeof lug.gen == "number";
}
var slate,
  timber = esmInit(() => {
    slate = class {
      isInPresentationMode;
      externalLinksEnabled = true;
      constructor({
        linkNavigation,
        pageSelector,
        pdfDocument,
        scrollRootRef
      }) {
        this.isInPresentationMode = linkNavigation != null;
        this.linkNavigation = linkNavigation;
        this.pageSelector = pageSelector;
        this.pdfDocument = pdfDocument;
        this.scrollRootRef = scrollRootRef;
      }
      linkNavigation;
      pageSelector;
      pdfDocument;
      scrollRootRef;
      get pagesCount() {
        return this.pdfDocument.numPages;
      }
      set page(mandrel) {
        this.scrollToPage(mandrel);
      }
      get page() {
        return 1;
      }
      set rotation(nipple) {}
      get rotation() {
        return 0;
      }
      set externalLinkEnabled(orifice) {
        this.externalLinksEnabled = orifice;
      }
      get externalLinkEnabled() {
        return this.externalLinksEnabled;
      }
      async goToDestination(pin) {
        let race = typeof pin == "string" ? await this.pdfDocument.getDestination(pin) : pin,
          sleeve = race == null ? null : await this.getDestinationPageNumber(race);
        sleeve != null && this.scrollToPage(sleeve);
      }
      goToPage(trunnion) {
        let boss = Number(trunnion);
        Number.isInteger(boss) && this.scrollToPage(boss);
      }
      goToXY(cam) {
        this.scrollToPage(cam);
      }
      addLinkAttributes(event, detent) {
        if (!detent || !this.externalLinksEnabled) {
          event.href = "";
          event.onclick = null;
          return;
        }
        if (event.href = detent, event.title = detent, event.target = "_blank", event.rel = "noopener noreferrer nofollow", this.linkNavigation?.onExternalLink == null) {
          event.onclick = null;
          return;
        }
        event.onclick = _event => {
          _event.preventDefault();
          _event.stopPropagation();
          this.linkNavigation?.onExternalLink?.(detent, _event);
        };
      }
      getDestinationHash(eccentric) {
        return typeof eccentric == "string" && eccentric.length > 0 ? this.getAnchorUrl(`#${window.encodeURIComponent(eccentric)}`) : this.getAnchorUrl("");
      }
      getAnchorUrl(follower) {
        return typeof follower == "string" ? follower : "";
      }
      setHash(guide) {}
      executeNamedAction(helix) {}
      executeSetOCGState(impeller) {}
      async getDestinationPageNumber(journal) {
        let kingpin = journal[0];
        if (typeof kingpin == "number" && Number.isInteger(kingpin)) return kingpin + 1;
        if (!at(kingpin)) return null;
        let land = this.pdfDocument.cachedPageNumber(kingpin);
        if (land != null) return land;
        try {
          return (await this.pdfDocument.getPageIndex(kingpin)) + 1;
        } catch {
          return null;
        }
      }
      scrollToPage(mesh) {
        if (!(mesh < 1 || mesh > this.pdfDocument.numPages)) {
          if (this.linkNavigation?.onPageChange != null) {
            this.linkNavigation.onPageChange(mesh);
            return;
          }
          (this.scrollRootRef.current?.querySelector(`${this.pageSelector}[data-page-number="${mesh}"]`) ?? null)?.scrollIntoView({
            block: "start",
            inline: "nearest"
          });
        }
      }
    };
  });
function PdfPreviewPanelHelper8(neck) {
  let {
      deferMs,
      linkNavigation,
      page,
      pageSelector,
      pdfDocument,
      scrollRootRef
    } = neck,
    pad = violet.useRef(null),
    quillshaft,
    roller;
  quillshaft = () => {
    let spindle = pad.current;
    if (spindle == null) return;
    let thrust = spindle;
    thrust.innerHTML = "";
    let yoke = false,
      baffle = null,
      capstan = async function () {
        let diaphragm = await kite(),
          elbow = await page.getAnnotations();
        if (yoke || elbow.length === 0) return;
        let ferrule = page.getViewport({
            scale: 1
          }),
          grommet = new slate({
            linkNavigation,
            pageSelector,
            pdfDocument,
            scrollRootRef
          });
        await new diaphragm.AnnotationLayer({
          accessibilityManager: undefined,
          annotationCanvasMap: undefined,
          annotationEditorUIManager: undefined,
          annotationStorage: undefined,
          commentManager: undefined,
          div: thrust,
          linkService: grommet,
          page,
          structTreeLayer: undefined,
          viewport: ferrule
        }).render({
          annotations: elbow,
          div: thrust,
          linkService: grommet,
          page,
          renderForms: false,
          viewport: ferrule
        });
      };
    return baffle = setTimeout(() => {
      capstan();
    }, deferMs), () => {
      yoke = true;
      baffle != null && clearTimeout(baffle);
      thrust.innerHTML = "";
    };
  };
  roller = [deferMs, linkNavigation, page, pageSelector, pdfDocument, scrollRootRef];
  violet.useEffect(quillshaft, roller);
  return <div ref={pad} className="annotationLayer" />;
}
var umbra,
  violet,
  willow,
  xenon = esmInit(() => {
    umbra = reactCompilerRuntime();
    violet = commonJsInit(react(), 1);
    quartz();
    timber();
  });
function yellow(event, header) {
  let injector = event.currentTarget.getBoundingClientRect();
  return injector.width <= 0 || injector.height <= 0 ? null : {
    x: ultra((event.clientX - injector.left) / injector.width * header.width, 0, header.width),
    y: ultra((event.clientY - injector.top) / injector.height * header.height, 0, header.height)
  };
}
function zinc({
  pageElement,
  pageSize
}) {
  let jumper = pageElement.querySelector(".textLayer"),
    kerf = pageElement.ownerDocument.getSelection();
  if (jumper == null || kerf == null || kerf.isCollapsed || kerf.rangeCount === 0 || !quill(kerf, jumper)) return null;
  let louver = topaz(kerf.toString());
  if (louver.length === 0) return null;
  let manifold = kerf.getRangeAt(0);
  if (!jumper.contains(manifold.commonAncestorContainer)) return null;
  let nip = Array.from(manifold.getClientRects()),
    outlet = ivory({
      clientRects: nip,
      pageElement,
      pageSize
    });
  if (outlet == null) return null;
  let packing = jasper({
    clientRects: nip,
    pageElement,
    pageSize
  });
  return {
    askForEditAnchor: kelp({
      clientRects: nip,
      pageElement,
      pageSize,
      selection: kerf
    }) ?? undefined,
    kind: "region",
    nearbyText: louver,
    rect: outlet,
    selectedText: louver,
    selectionKind: "text",
    ...(packing.length <= 1 ? {} : {
      selectionRects: packing
    })
  };
}
function amber({
  clientX,
  clientY,
  includePreviewMetadata,
  layerElement,
  pageElement,
  pageSize
}) {
  for (let reducer of pageElement.ownerDocument.elementsFromPoint?.(clientX, clientY) ?? []) {
    if (reducer === layerElement || layerElement.contains(reducer) || !pageElement.contains(reducer)) continue;
    let strainer = ember({
      includePreviewMetadata,
      pageElement,
      pageSize,
      target: reducer
    });
    if (strainer != null) return strainer;
  }
  return null;
}
function basalt(tee, union = false) {
  let vent = cedar(tee.start, tee.current);
  return !union && vent.width < vapor && vent.height < vapor ? {
    kind: "point",
    point: tee.current
  } : {
    kind: "region",
    rect: vent
  };
}
function _t(wye) {
  return Math.abs(wye.clientCurrent.x - wye.clientStart.x) >= wheat || Math.abs(wye.clientCurrent.y - wye.clientStart.y) >= wheat;
}
function cedar(zener, alphaPrime) {
  return {
    x: Math.min(zener.x, alphaPrime.x),
    y: Math.min(zener.y, alphaPrime.y),
    width: Math.abs(zener.x - alphaPrime.x),
    height: Math.abs(zener.y - alphaPrime.y)
  };
}
function daisy(bravoPrime) {
  return AppIconYg(bravoPrime);
}
