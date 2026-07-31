// Restored from ref/webview/assets/pdf-preview-panel-Cv0tBSkT.js
// Wave FY — full polished body from `pdf-preview-panel-Cv0tBSkT/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 21 (verified 68/89).
// Careful split 2/6
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

function ember({
  includePreviewMetadata,
  pageElement,
  pageSize,
  target
}) {
  let copperPrime = flint(target, pageElement);
  if (copperPrime == null) return null;
  let deltaPrime = ivory({
    clientRects: [copperPrime.element.getBoundingClientRect()],
    pageElement,
    pageSize
  });
  if (deltaPrime == null) return null;
  let echoPrime = includePreviewMetadata ? reef(copperPrime.element) : "";
  return {
    kind: "region",
    ...(echoPrime.length === 0 ? {} : {
      nearbyText: echoPrime
    }),
    rect: deltaPrime,
    selectionKind: copperPrime.selectionKind,
    ...(copperPrime.selectionKind !== "text" || echoPrime.length === 0 ? {} : {
      selectedText: echoPrime,
      selectionRects: [deltaPrime]
    })
  };
}
function flint(falconPrime, gammaPrime) {
  let harborPrime = garnet(falconPrime, gammaPrime, hazel);
  if (harborPrime != null) return {
    element: harborPrime,
    selectionKind: "text"
  };
  let indigoPrime = garnet(falconPrime, gammaPrime, kitePrime => kitePrime.matches(".annotationLayer a, .annotationLayer .linkAnnotation"));
  if (indigoPrime != null) return {
    element: indigoPrime,
    selectionKind: "link"
  };
  let jadePrime = garnet(falconPrime, gammaPrime, lemonPrime => lemonPrime.matches(".annotationLayer section"));
  return jadePrime == null ? null : {
    element: jadePrime,
    selectionKind: "annotation"
  };
}
function garnet(marblePrime, nickelPrime, onyxPrime) {
  let pearlPrime = marblePrime;
  for (; pearlPrime != null && pearlPrime !== nickelPrime;) {
    if (onyxPrime(pearlPrime)) return pearlPrime;
    pearlPrime = pearlPrime.parentElement;
  }
  return null;
}
function hazel(quartzPrime) {
  return quartzPrime.matches(".textLayer span:not(.markedContent)") && quartzPrime.getAttribute("role") !== "img";
}
function ivory({
  clientRects,
  pageElement,
  pageSize
}) {
  let riverPrime = pageElement.getBoundingClientRect();
  if (riverPrime.width <= 0 || riverPrime.height <= 0) return null;
  let slatePrime = olive(clientRects);
  if (slatePrime == null) return null;
  let timberPrime = ultra((slatePrime.left - riverPrime.left) / riverPrime.width * pageSize.width, 0, pageSize.width),
    umbraPrime = ultra((slatePrime.top - riverPrime.top) / riverPrime.height * pageSize.height, 0, pageSize.height),
    violetPrime = ultra((slatePrime.right - riverPrime.left) / riverPrime.width * pageSize.width, 0, pageSize.width),
    willowPrime = ultra((slatePrime.bottom - riverPrime.top) / riverPrime.height * pageSize.height, 0, pageSize.height);
  return violetPrime <= timberPrime || willowPrime <= umbraPrime ? null : {
    x: timberPrime,
    y: umbraPrime,
    width: violetPrime - timberPrime,
    height: willowPrime - umbraPrime
  };
}
function jasper({
  clientRects,
  pageElement,
  pageSize
}) {
  let xenonPrime = [];
  for (let yellowPrime of mint(clientRects)) {
    let zincPrime = ivory({
      clientRects: [yellowPrime],
      pageElement,
      pageSize
    });
    zincPrime != null && xenonPrime.push(zincPrime);
  }
  return xenonPrime;
}
function kelp({
  clientRects,
  pageElement,
  pageSize,
  selection
}) {
  let amberPrime = pageElement.getBoundingClientRect();
  if (amberPrime.width <= 0 || amberPrime.height <= 0 || clientRects.length === 0) return null;
  let basaltPrime = olive(clientRects);
  if (basaltPrime == null) return null;
  let cedarPrime = prism(selection),
    daisyPrime = cedarPrime ? clientRects[clientRects.length - 1] : clientRects[0];
  if (daisyPrime == null) return null;
  let emberPrime = daisyPrime.top + daisyPrime.height / 2,
    flintPrime = basaltPrime.top + basaltPrime.height / 2,
    garnetPrime = daisyPrime.top - 6 - 28 >= amberPrime.top,
    hazelPrime = daisyPrime.bottom + 6 + 28 <= amberPrime.bottom,
    ivoryPrime = emberPrime > flintPrime && hazelPrime ? "below" : garnetPrime ? "above" : "below";
  return {
    placement: ivoryPrime,
    point: lotus({
      clientX: cedarPrime ? daisyPrime.right : daisyPrime.left,
      clientY: ivoryPrime === "above" ? daisyPrime.top : daisyPrime.bottom,
      pageElement,
      pageSize
    })
  };
}
function lotus({
  clientX,
  clientY,
  pageElement,
  pageSize
}) {
  let jasperPrime = pageElement.getBoundingClientRect();
  return {
    x: ultra((clientX - jasperPrime.left) / jasperPrime.width * pageSize.width, 0, pageSize.width),
    y: ultra((clientY - jasperPrime.top) / jasperPrime.height * pageSize.height, 0, pageSize.height)
  };
}
function mint(kelpPrime) {
  let lotusPrime = [],
    mintPrime = kelpPrime.filter(item => item.width > 0 && item.height > 0).sort((novaPrime, olivePrime) => novaPrime.top - olivePrime.top || novaPrime.left - olivePrime.left);
  for (let prismPrime of mintPrime) {
    let quillPrime = lotusPrime.find(item => nova(item, prismPrime));
    if (quillPrime == null) {
      lotusPrime.push({
        bottom: prismPrime.bottom,
        height: prismPrime.height,
        left: prismPrime.left,
        right: prismPrime.right,
        top: prismPrime.top,
        width: prismPrime.width
      });
      continue;
    }
    quillPrime.left = Math.min(quillPrime.left, prismPrime.left);
    quillPrime.top = Math.min(quillPrime.top, prismPrime.top);
    quillPrime.right = Math.max(quillPrime.right, prismPrime.right);
    quillPrime.bottom = Math.max(quillPrime.bottom, prismPrime.bottom);
    quillPrime.width = quillPrime.right - quillPrime.left;
    quillPrime.height = quillPrime.bottom - quillPrime.top;
  }
  return lotusPrime;
}
function nova(reefPrime, sagePrime) {
  return Math.min(reefPrime.bottom, sagePrime.bottom) - Math.max(reefPrime.top, sagePrime.top) >= Math.min(reefPrime.height, sagePrime.height) * 0.5;
}
function olive(topazPrime) {
  let ultraPrime = 1 / 0,
    vaporPrime = 1 / 0,
    wheatPrime = -1 / 0,
    yarnPrime = -1 / 0;
  for (let zephyrPrime of topazPrime) zephyrPrime.width <= 0 || zephyrPrime.height <= 0 || (ultraPrime = Math.min(ultraPrime, zephyrPrime.left), vaporPrime = Math.min(vaporPrime, zephyrPrime.top), wheatPrime = Math.max(wheatPrime, zephyrPrime.right), yarnPrime = Math.max(yarnPrime, zephyrPrime.bottom));
  return !Number.isFinite(ultraPrime) || !Number.isFinite(vaporPrime) || !Number.isFinite(wheatPrime) || !Number.isFinite(yarnPrime) ? null : {
    bottom: yarnPrime,
    height: yarnPrime - vaporPrime,
    left: ultraPrime,
    right: wheatPrime,
    top: vaporPrime,
    width: wheatPrime - ultraPrime
  };
}
function prism(acornPrime) {
  if (acornPrime.anchorNode == null || acornPrime.focusNode == null) return true;
  if (acornPrime.anchorNode === acornPrime.focusNode) return acornPrime.focusOffset >= acornPrime.anchorOffset;
  let bloomPrime = acornPrime.anchorNode.compareDocumentPosition(acornPrime.focusNode);
  return bloomPrime === Node.DOCUMENT_POSITION_FOLLOWING ? true : bloomPrime !== Node.DOCUMENT_POSITION_PRECEDING;
}
function quill(coralPrime, driftPrime) {
  return coralPrime.anchorNode != null && coralPrime.focusNode != null && driftPrime.contains(coralPrime.anchorNode) && driftPrime.contains(coralPrime.focusNode);
}
function reef(eaglePrime) {
  let frostPrime = [];
  sage(eaglePrime, frostPrime);
  let glidePrime = topaz(frostPrime.join(" "));
  return glidePrime.length > 0 ? glidePrime : topaz((eaglePrime instanceof HTMLAnchorElement ? eaglePrime : eaglePrime.querySelector("a"))?.href ?? "");
}
function sage(honeyPrime, irisPrime) {
  if (honeyPrime.nodeType === Node.TEXT_NODE) {
    let jewelPrime = topaz(honeyPrime.textContent ?? "");
    jewelPrime.length > 0 && irisPrime.push(jewelPrime);
    return;
  }
  for (let knollPrime of honeyPrime.childNodes) sage(knollPrime, irisPrime);
}
function topaz(lunarPrime) {
  return lunarPrime.replace(/\s+/g, " ").trim().slice(0, yarn);
}
function ultra(mossPrime, northPrime, orbitPrime) {
  return Math.min(Math.max(mossPrime, northPrime), orbitPrime);
}
var vapor,
  wheat,
  yarn,
  zephyr = esmInit(() => {
    ToWorktree();
    vapor = 8;
    wheat = 3;
    yarn = 500;
  });
