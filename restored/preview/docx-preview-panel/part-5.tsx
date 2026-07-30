// Restored from ref/webview/assets/docx-preview-panel-D6d6eiCV.js
// Wave FY — full polished body from `docx-preview-panel-D6d6eiCV/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 20 (verified 56/76).
// Wave FZ-support — PascalCase invalid JSX tags: at→At, DocxPreviewPanelHelper24→DocxPreviewPanelHelper24, DocxPreviewPanelHelper25→DocxPreviewPanelHelper25, DocxPreviewPanelHelper26→DocxPreviewPanelHelper26, DocxPreviewPanelHelper27→DocxPreviewPanelHelper27, DocxPreviewPanelHelper41→DocxPreviewPanelHelper41, isLocalOrNullValue→IsLocalOrNullValue, isWhitespaceOrEofCharCode→IsWhitespaceOrEofCharCode, queueAutomationRun→QueueAutomationRun, resolveWorktreeHandoffDirection→ResolveWorktreeHandoffDirection.
// Careful split 5/5
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
const __vite__mapDeps: any = undefined;
const deferredUiJ1: any = undefined;
const deferredUiWR: any = undefined;
const deferredUiXR: any = undefined;
const north: any = undefined;
const orbit: any = undefined;
const pine: any = undefined;
const ridge: any = undefined;
const storm: any = undefined;
const tide: any = undefined;
const unity: any = undefined;
const vale: any = undefined;
const vitePreload: any = undefined;
const wave: any = undefined;
const zephyr: any = undefined;

esmInit(() => {
  north = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  orbit = commonJsInit(react(), 1);
  pine = commonJsInit(safeZodValue(), 1);
  identityValue();
  AppIconYj();
  ensureComposerEsm_Z8_Init();
  deferredUiJ1();
  filterConversationTimelineItems();
  deferredComposerBV();
  deferredT1();
  buildArtifactAnnotationCommentForTarget();
  deferredUiWR();
  ensureArtifactPreviewStatusInit();
  deferredUiXR();
  zephyr();
  ensureViteModulepreloadRuntime();
  $ = "codex-docx-preview";
  ridge = "h-full min-h-0 overflow-auto bg-token-side-bar-background overscroll-contain";
  storm = `
  .${$}-wrapper {
    min-height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 0.875rem;
    padding: 1.5rem 1.5rem ${artifactTabLoading};
    background: var(--color-token-side-bar-background) !important;
  }

  .${$}-wrapper > section.${$} {
    margin: 0 !important;
    border: 1px solid var(--color-token-border-default);
    background: white !important;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
    transform-origin: top center;
    border-radius: 0;
    zoom: var(--codex-docx-preview-zoom, 1);
    position: relative;
    overflow: hidden;
  }

  :root:where(
    [data-codex-window-type="browser"],
    [data-codex-window-type="chrome-extension"],
    [data-codex-window-type="electron"]
  ) .${$}-wrapper > section.${$} {
    border-color: transparent;
    box-shadow: var(--elevation-prominent);
  }

  .${$} [data-paged-annotation-ask-for-edit="true"],
  .${$} [data-paged-annotation-ask-for-edit="true"] * {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif !important;
    font-size: 12px !important;
    letter-spacing: -0.3px !important;
    line-height: 18px !important;
    white-space: nowrap !important;
  }

  .${$} [data-paged-annotation-ask-for-edit-label="true"] {
    font-weight: 400 !important;
  }

  .${$} [data-paged-annotation-ask-for-edit-shortcut="true"] {
    font-weight: 500 !important;
  }
`;
  tide = 75;
  unity = 12;
  vale = `section.${$}`;
  wave = vitePreload(async () => {
    let {
      renderAsync
    } = await import("docx-preview");
    return {
      renderAsync
    };
  }, __vite__mapDeps([0, 1]), import.meta.url).then(({
    renderAsync
  }) => renderAsync, () => null);
})();
