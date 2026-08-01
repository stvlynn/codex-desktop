// Restored from ref/webview/assets/artifact-tab-content.electron-z_W871m1.js
// Stage 3 deep fill from per-chunk checkpoint / `artifact-tab-content.electron-z_W871m1/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 100/134).
// JSX calls converted: 72; mechanical renames: 833.
// Source used: .deobfuscate-javascript/_full/checkpoints/artifact-tab-content.electron-z_W871m1.tsx.
// Careful split export-budget 13/13
// Wave FZ-support — PascalCase invalid JSX tags: isLocalOrNullValue→IsLocalOrNullValue, chatgpt2→Chatgpt2, coerceLocalFilesystemPath→CoerceLocalFilesystemPath, useInfiniteListQuery→UseInfiniteListQuery.
/* split-lane-import-depth:1 */

// Cross-part soft stubs.
const AppInitialNH: any = undefined;
const ArtifactTabContentElectron: any = undefined;
const DeferredUiYO2: any = undefined;
const __vite__mapDeps: any = undefined;
const artifactCell41: any = undefined;
const chatProcessRegister: any = undefined;
const cord: any = undefined;
const dataAppActionReviewFileExpanded: any = undefined;
const deferredUiBA: any = undefined;
const deferredUiHX: any = undefined;
const deferredUiWR: any = undefined;
const deferredUiXR: any = undefined;
const grove: any = undefined;
const haven: any = undefined;
const vitePreload: any = undefined;

import type { ReactNode } from "react";
import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
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
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { Chatgpt2 } from "../../browser/chatgpt2";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { buildSkillMentionMarkdown } from "../../composer/build-skill-mention-markdown";
import { composerNavigation } from "../../composer/composer-navigation";
import { deferredComposerBV } from "../../composer/deferred-composer-bv";
import { getPluginDisplayName } from "../../composer/get-plugin-display-name";
import { getPluginShortDescription } from "../../composer/get-plugin-short-description";
import { conversationArchiveInFlightAtom } from "../../conversation/conversation-page-family-atoms";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { findCachedConversationItem } from "../../conversation/find-cached-conversation-item";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { openFileInPanelTab } from "../../files/open-file-in-panel-tab";
import { ensureDebugPanelParsersInit } from "../../hooks/debug-panel-turn-files";
import { useEventCallback } from "../../hooks/use-event-callback";
import { UseInfiniteListQuery } from "../../hooks/use-infinite-list-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { IsLocalOrNullValue } from "../../hosts/is-local-or-null-value";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconJO } from "../../icons/app-icon-jo";
import { AppIconMH } from "../../icons/app-icon-mh";
import { AppIconMZ } from "../../icons/app-icon-mz";
import { AppIconOH } from "../../icons/app-icon-oh";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconYj } from "../../icons/app-icon-yj";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { ImageFileIcon } from "../../icons/image-file-icon";
import { LoadingPreviewIcon } from "../../icons/loading-preview-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import {
  findSidebarSectionElement,
  readScrollTop,
  scrollAppActionTargetTo,
} from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { newConversationEntrypointId } from "../../navigation/new-conversation-entrypoint-id";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { fileSourceBrowserMessages } from "../../review/file-source-browser-messages";
import { setReviewScrollTarget } from "../../review/set-review-scroll-target";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureViteModulepreloadRuntime } from "../../runtime/vite-preload";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { usePetsSettingsController } from "../../settings/use-pets-settings-controller";
import { setRightPanelConversation } from "../../shell/set-right-panel-conversation";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import {
  conversationFindActiveMatchAtom,
  conversationFindResultAtom,
} from "../../thread/thread-find-atoms";
import {
  ArtifactPreviewStatus,
  ensureArtifactPreviewStatusInit,
} from "../../ui/artifact-preview-status";
import { Badge, ensureBadgeInit } from "../../ui/badge";
import { cx } from "../../ui/cx";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { macOS4 } from "../../ui/mac-os4";
import { MemoizedValueBridge } from "../../ui/memoized-value-bridge";
import { CoerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { identity } from "../../utils/identity";
import { noop } from "../../utils/noop";
import { ensurePersonalizationK0Init } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import {
  ensureArtifactAnalyticsInit,
  logArtifactAnnotationModeEnabled,
  logArtifactAnnotationStarted,
  logArtifactAnnotationSubmitted,
  logArtifactRefreshClicked,
} from "../artifact-analytics";
import {
  buildArtifactAnnotationCommentForTarget,
  collectRemovedArtifactAnnotationIds,
  ensureArtifactAnnotationCommentInit,
  filterArtifactAnnotationCommentsForPath,
  nextArtifactAnnotationCommentLine,
  removeArtifactAnnotationCommentsForPath,
} from "../artifact-annotation-comment";
import { ArtifactPreviewDownloadButton } from "../artifact-preview-download-button";
import { ArtifactPreviewPageNav } from "../artifact-preview-page-nav";
import { ArtifactPreviewZoomToFitLabel } from "../artifact-preview-zoom-to-fit-label";
import { artifactTabLoading } from "../artifact-tab-loading";
import { hypotDistance } from "../hypot-distance";

function ArtifactTabContentHelper85({ hostId, importKind, path }) {
  return `${hostId}:${importKind}:${path}`;
}
function ArtifactTabContentHelper86(artifactCell248, artifactCell249) {
  let artifactCell250 = artifactCell251.get(artifactCell248);
  if (
    artifactCell250 == null ||
    artifactCell250.contentsBytes.length !== artifactCell249.length
  )
    return null;
  for (
    let artifactCell252 = 0;
    artifactCell252 < artifactCell249.length;
    artifactCell252 += 1
  )
    if (
      artifactCell250.contentsBytes[artifactCell252] !==
      artifactCell249[artifactCell252]
    )
      return null;
  return (
    artifactCell251.delete(artifactCell248),
    artifactCell251.set(artifactCell248, artifactCell250),
    artifactCell250.parsedArtifact
  );
}
function ArtifactTabContentHelper87(
  artifactCell253,
  artifactCell254,
  artifactCell255,
) {
  for (
    artifactCell251.delete(artifactCell253),
      artifactCell251.set(artifactCell253, {
        contentsBytes: artifactCell254,
        parsedArtifact: artifactCell255,
      });
    artifactCell251.size > artifactCell256;
  ) {
    let artifactCell257 = artifactCell251.keys().next().value;
    if (artifactCell257 == null) return;
    artifactCell251.delete(artifactCell257);
  }
}
function ArtifactTabContentHelper88(
  artifactCell258,
  artifactCell259,
  artifactCell260,
) {
  artifactCell259.current !== artifactCell258 &&
    ((artifactCell259.current = artifactCell258),
    artifactCell260((artifactCell261) => artifactCell261 + 1));
}
function ArtifactTabContentHelper89(artifactCell262) {
  let artifactCell263 = atob(artifactCell262),
    artifactCell264 = new Uint8Array(artifactCell263.length);
  for (
    let artifactCell265 = 0;
    artifactCell265 < artifactCell263.length;
    artifactCell265 += 1
  )
    artifactCell264[artifactCell265] =
      artifactCell263.charCodeAt(artifactCell265);
  return artifactCell264;
}
function ArtifactTabContentHelper90(artifactCell266) {
  let artifactCell267 = 0;
  for (
    let artifactCell268 = 0;
    artifactCell268 < artifactCell266.length;
    artifactCell268 += 1
  )
    artifactCell267 =
      (artifactCell267 * 31 + artifactCell266[artifactCell268]) % 4294967296;
  return `${artifactCell266.length}:${artifactCell267.toString(16)}`;
}
var artifactCell269,
  reactNamespace,
  $,
  artifactCell59,
  artifactCell256,
  artifactCell243,
  artifactCell117,
  artifactCell251,
  artifactCell203,
  artifactCell213,
  artifactCell221,
  artifactCell78,
  $i,
  artifactCell76;
esmInit(() => {
  artifactCell269 = reactCompilerRuntime();
  serializeCharacterReferenceNode();
  ensureComposerEsm_Tft_Init();
  ensureComposerEsm_MT_Init();
  reactNamespace = commonJsInit(react as any, 1);
  ensureIntlFormattersInit();
  AppActionSelector();
  ensureArtifactAnalyticsInit();
  buildArtifactAnnotationCommentForTarget();
  deferredUiHX();
  grove();
  AppIconYj();
  ensureAppShellAtomsInit();
  ensureSettingsQueryAtomsInit();
  ensureDropdownMenuInit();
  chatProcessRegister();
  ensureComposerEsm_Z8_Init();
  haven();
  DeferredUiYO2();
  setRightPanelConversation();
  isRemoteControlConnectionFailedError();
  ensureConversationPageEsm_Act_Init();
  findSidebarSectionElement();
  AppIconMH();
  deferredUiBA();
  fileSourceBrowserMessages();
  AppInitialNH();
  filterConversationTimelineItems();
  deferredComposerBV();
  dataAppActionReviewFileExpanded();
  ensureDropdownMenuPopoverInit();
  scrollAppActionTargetTo();
  artifactTabLoading();
  deferredUiWR();
  cord();
  ensureArtifactPreviewStatusInit();
  deferredUiXR();
  artifactCell41();
  ensureViteModulepreloadRuntime();
  artifactCell59 = 41943040;
  artifactCell256 = 5;
  artifactCell243 =
    "flex h-full items-center justify-center px-6 text-center text-sm text-token-text-tertiary";
  artifactCell117 = identity({
    refreshForLatest: {
      id: "artifactTab.refreshForLatest",
      defaultMessage: "Refresh for latest",
      description:
        "Button label shown when an artifact preview is stale and can be refreshed",
    },
  });
  artifactCell251 = new Map();
  artifactCell203 = reactNamespace.lazy(async () => {
    let { PopcornElectronDocumentPanel } = await vitePreload(
      async () => {
        let { PopcornElectronDocumentPanel: _PopcornElectronDocumentPanel } =
          await import("../../editors/popcorn-electron-document-panel");
        return {
          PopcornElectronDocumentPanel: _PopcornElectronDocumentPanel,
        };
      },
      __vite__mapDeps([
        20, 1, 4, 5, 10, 3, 6, 7, 8, 9, 11, 12, 13, 14, 15, 17, 21, 22, 23, 24,
      ]),
      import.meta.url,
    );
    return {
      default: PopcornElectronDocumentPanel,
    };
  });
  artifactCell213 = reactNamespace.lazy(async () => {
    let { PopcornElectronPresentationPanel } = await vitePreload(
      async () => {
        let {
          PopcornElectronPresentationPanel: _PopcornElectronPresentationPanel,
        } = await import("../../editors/popcorn-electron-presentation-panel");
        return {
          PopcornElectronPresentationPanel: _PopcornElectronPresentationPanel,
        };
      },
      __vite__mapDeps([
        25, 1, 4, 5, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 21, 22, 24, 26, 27,
        28,
      ]),
      import.meta.url,
    );
    return {
      default: PopcornElectronPresentationPanel,
    };
  });
  artifactCell221 = reactNamespace.lazy(async () => {
    let { PopcornElectronWorkbookPanel } = await vitePreload(
      async () => {
        let { PopcornElectronWorkbookPanel: _PopcornElectronWorkbookPanel } =
          await import("../../editors/popcorn-electron-workbook-panel");
        return {
          PopcornElectronWorkbookPanel: _PopcornElectronWorkbookPanel,
        };
      },
      __vite__mapDeps([
        29, 1, 4, 5, 9, 3, 6, 7, 8, 10, 11, 12, 13, 14, 15, 21, 22, 23, 26, 27,
      ]),
      import.meta.url,
    );
    return {
      default: PopcornElectronWorkbookPanel,
    };
  });
  artifactCell78 = reactNamespace.lazy(async () => {
    let { DocxPreviewPanel } = await vitePreload(
      async () => {
        let { DocxPreviewPanel: _DocxPreviewPanel } =
          await import("../../preview/docx-preview-panel");
        return {
          DocxPreviewPanel: _DocxPreviewPanel,
        };
      },
      __vite__mapDeps([30, 1, 4, 5, 31, 32, 33]),
      import.meta.url,
    );
    return {
      default: DocxPreviewPanel,
    };
  });
  $i = reactNamespace.lazy(async () => {
    let { NotebookPreviewPanel } = await vitePreload(
      async () => {
        let { NotebookPreviewPanel: _NotebookPreviewPanel } =
          await import("../notebook-preview-panel");
        return {
          NotebookPreviewPanel: _NotebookPreviewPanel,
        };
      },
      __vite__mapDeps([34, 1, 4, 5, 33]),
      import.meta.url,
    );
    return {
      default: NotebookPreviewPanel,
    };
  });
  artifactCell76 = reactNamespace.lazy(async () => {
    let { PdfPreviewPanel } = await vitePreload(
      async () => {
        let { PdfPreviewPanel: _PdfPreviewPanel } =
          await import("../../preview/pdf-preview-panel");
        return {
          PdfPreviewPanel: _PdfPreviewPanel,
        };
      },
      __vite__mapDeps([35, 1, 4, 5, 31, 33, 36]),
      import.meta.url,
    );
    return {
      default: PdfPreviewPanel,
    };
  });
})();

export { ArtifactTabContentElectron as ArtifactTabContent };
export type { ArtifactTabContentProps as ArtifactTabContentElectronProps };
