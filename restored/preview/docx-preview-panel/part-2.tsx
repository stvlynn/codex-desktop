// Restored from ref/webview/assets/docx-preview-panel-D6d6eiCV.js
// Wave FY — full polished body from `docx-preview-panel-D6d6eiCV/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 20 (verified 56/76).
// Wave FZ-support — PascalCase invalid JSX tags: at→At, DocxPreviewPanelHelper24→DocxPreviewPanelHelper24, DocxPreviewPanelHelper25→DocxPreviewPanelHelper25, DocxPreviewPanelHelper26→DocxPreviewPanelHelper26, DocxPreviewPanelHelper27→DocxPreviewPanelHelper27, DocxPreviewPanelHelper41→DocxPreviewPanelHelper41, isLocalOrNullValue→IsLocalOrNullValue, isWhitespaceOrEofCharCode→IsWhitespaceOrEofCharCode, queueAutomationRun→QueueAutomationRun, resolveWorktreeHandoffDirection→ResolveWorktreeHandoffDirection.
// Careful split 2/5
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
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_MT_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Z8_Init } from "../../composer/composer-esm-inits";
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
const alpha: any = undefined;
const amber: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const harbor: any = undefined;
const slate: any = undefined;

var basalt,
  cedar,
  daisy = esmInit(() => {
    basalt = reactCompilerRuntime();
    ensureIntlFormattersInit();
    alpha();
    amber();
    useThreadHandoffDisabledReason();
    ToWorktree();
  });
function ember({
  pageElement,
  pageSize
}) {
  let bushing = pageElement.ownerDocument.getSelection();
  if (bushing == null || bushing.isCollapsed || bushing.rangeCount === 0 || !nova(bushing, pageElement)) return null;
  let collar = quill(bushing.toString());
  if (collar.length === 0) return null;
  let dowel = bushing.getRangeAt(0);
  if (!pageElement.contains(dowel.commonAncestorContainer)) return null;
  let flange = Array.from(dowel.getClientRects()),
    gib = echo({
      clientRects: flange,
      pageElement,
      pageSize
    });
  if (gib == null) return null;
  let hub = falcon({
    clientRects: flange,
    pageElement,
    pageSize
  });
  return {
    askForEditAnchor: harbor({
      clientRects: flange,
      pageElement,
      pageSize,
      selection: bushing
    }) ?? undefined,
    contentPreview: {
      type: "text",
      text: collar
    },
    kind: "region",
    rect: gib,
    ...(hub.length <= 1 ? {} : {
      selectionRects: hub
    }),
    selectedText: collar,
    selectionKind: "text"
  };
}
function flint({
  clientX,
  clientY,
  includePreviewMetadata,
  layerElement,
  pageElement,
  pageSize,
  selectionKindFilter
}) {
  let idler = (pageElement.ownerDocument.elementsFromPoint?.(clientX, clientY) ?? []).find(item => item !== layerElement && !layerElement.contains(item) && pageElement.contains(item));
  return idler == null ? null : garnet({
    includePreviewMetadata,
    pageElement,
    pageSize,
    selectionKindFilter,
    target: idler
  });
}
function garnet({
  includePreviewMetadata,
  pageElement,
  pageSize,
  selectionKindFilter,
  target
}) {
  let jig = hazel(target, pageElement);
  if (jig == null || selectionKindFilter != null && !selectionKindFilter(jig.selectionKind)) return null;
  let keeper = echo({
    clientRects: [jig.element.getBoundingClientRect()],
    pageElement,
    pageSize
  });
  if (keeper == null) return null;
  let lug = includePreviewMetadata ? olive(jig.element) : "",
    mandrel = includePreviewMetadata ? ivory({
      element: jig.element,
      nearbyText: lug,
      selectionKind: jig.selectionKind
    }) : null;
  return {
    askForEditAnchor: jig.selectionKind === "image" || jig.selectionKind === "drawing" ? {
      alignment: "end",
      placement: "below",
      point: {
        x: keeper.x + keeper.width,
        y: keeper.y + keeper.height
      }
    } : undefined,
    contentPreview: mandrel ?? undefined,
    kind: "region",
    rect: keeper,
    selectionKind: jig.selectionKind,
    ...(lug.length === 0 ? {} : {
      nearbyText: lug
    })
  };
}
function hazel(nipple, orifice) {
  let pin = lotus(nipple, orifice, boss => boss.matches("img"));
  if (pin != null) return {
    element: pin,
    selectionKind: "image"
  };
  let race = lotus(nipple, orifice, mint);
  if (race != null) return {
    element: race,
    selectionKind: "drawing"
  };
  let sleeve = lotus(nipple, orifice, cam => cam.matches("table"));
  if (sleeve != null) return {
    element: sleeve,
    selectionKind: "table"
  };
  let trunnion = lotus(nipple, orifice, detent => detent.matches("p"));
  return trunnion == null ? null : {
    element: trunnion,
    selectionKind: "paragraph"
  };
}
function ivory({
  element,
  nearbyText,
  selectionKind
}) {
  if (selectionKind === "image" || selectionKind === "drawing") {
    let eccentric = jasper(element);
    if (eccentric != null) return eccentric;
  }
  return nearbyText.length === 0 ? null : {
    type: "text",
    text: nearbyText
  };
}
function jasper(follower) {
  let guide = kelp(follower);
  if (guide != null) {
    let impeller = guide.currentSrc.trim() || guide.getAttribute("src")?.trim() || guide.src.trim();
    if (impeller) {
      let journal = guide.alt.trim();
      return {
        type: "image",
        src: impeller,
        ...(journal.length === 0 ? {} : {
          alt: journal
        })
      };
    }
  }
  let helix = _t(follower);
  return helix == null ? null : {
    type: "image",
    src: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(helix))}`
  };
}
function kelp(kingpin) {
  return kingpin instanceof HTMLImageElement ? kingpin : kingpin.querySelector("img");
}
function _t(land) {
  return land instanceof SVGSVGElement ? land : land.querySelector("svg");
}
function lotus(mesh, neck, pad) {
  let quillshaft = mesh;
  for (; quillshaft != null && quillshaft !== neck;) {
    if (pad(quillshaft)) return quillshaft;
    quillshaft = quillshaft.parentElement;
  }
  return null;
}
function mint(roller) {
  return roller.matches("svg") || roller instanceof HTMLElement && roller.tagName === "DIV" && roller.style.display === "inline-block" && roller.style.position === "relative" && roller.querySelector("img, svg") != null;
}
function nova(spindle, thrust) {
  return spindle.anchorNode != null && spindle.focusNode != null && thrust.contains(spindle.anchorNode) && thrust.contains(spindle.focusNode);
}
function olive(yoke) {
  let baffle = [];
  return prism(yoke, baffle), quill(baffle.join(" "));
}
function prism(capstan, diaphragm) {
  if (capstan.nodeType === Node.TEXT_NODE) {
    let elbow = quill(capstan.textContent ?? "");
    elbow.length > 0 && diaphragm.push(elbow);
    return;
  }
  for (let ferrule of capstan.childNodes) prism(ferrule, diaphragm);
}
function quill(grommet) {
  return grommet.replace(/\s+/g, " ").trim().slice(0, 500);
}
var reef = esmInit(() => {
  alpha();
  slate();
});
