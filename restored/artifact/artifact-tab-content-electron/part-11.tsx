// Restored from ref/webview/assets/artifact-tab-content.electron-z_W871m1.js
// Stage 3 deep fill from per-chunk checkpoint / `artifact-tab-content.electron-z_W871m1/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 100/134).
// JSX calls converted: 72; mechanical renames: 833.
// Source used: .deobfuscate-javascript/_full/checkpoints/artifact-tab-content.electron-z_W871m1.tsx.
// Careful split export-budget 11/13
// Wave FZ-support — PascalCase invalid JSX tags: isLocalOrNullValue→IsLocalOrNullValue, chatgpt2→Chatgpt2, coerceLocalFilesystemPath→CoerceLocalFilesystemPath, useInfiniteListQuery→UseInfiniteListQuery.
/* split-lane-import-depth:1 */

// Cross-part soft stubs.
const AppInitialIH: any = undefined;
const AppInitialYH: any = undefined;
const ArtifactTabContentHelper67: any = undefined;
const ArtifactTabContentHelper86: any = undefined;
const ArtifactTabContentHelper87: any = undefined;
const ArtifactTabContentHelper88: any = undefined;
const ArtifactTabContentHelper89: any = undefined;
const ArtifactTabContentHelper90: any = undefined;
const artifactCell117: any = undefined;

import type { ReactNode } from "react";
import * as React from "react";
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
} from "../../boundaries/composer-esm-inits";
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

function ArtifactTabContentHelper76(artifactCell79) {
  let {
      cacheKey,
      contentsBase64,
      hasBinaryResponse,
      importKind,
      shouldParseArtifactPreview,
    } = artifactCell79,
    artifactCell80 = React.useRef(null),
    artifactCell81;
  bb0: {
    if (!shouldParseArtifactPreview || !contentsBase64) {
      artifactCell81 = null;
      break bb0;
    }
    let artifactCell82, artifactCell83;
    {
      let artifactCell84 = ArtifactTabContentHelper89(contentsBase64);
      artifactCell82 = artifactCell84;
      artifactCell83 = ArtifactTabContentHelper90(artifactCell84);
    }
    let artifactCell85;
    artifactCell85 = {
      contentsBytes: artifactCell82,
      contentsChecksum: artifactCell83,
    };
    artifactCell81 = artifactCell85;
  }
  let artifactCell86 = artifactCell81,
    [artifactCell87, artifactCell88] = React.useState(false),
    [artifactCell89, artifactCell90] = React.useState(null),
    [artifactCell91, artifactCell92] = React.useState(null),
    [artifactCell93, artifactCell94] = React.useState(null),
    [artifactCell95, artifactCell96] = React.useState(0),
    artifactCell97 = artifactCell89 != null,
    artifactCell98,
    artifactCell99;
  artifactCell98 = () => {
    if (!shouldParseArtifactPreview) {
      artifactCell80.current = null;
      artifactCell90(null);
      artifactCell92(null);
      artifactCell94(null);
      artifactCell88(false);
      return;
    }
    if (artifactCell86 == null) {
      artifactCell80.current = null;
      artifactCell90(null);
      artifactCell92(null);
      artifactCell94(null);
      artifactCell88(hasBinaryResponse);
      return;
    }
    let { contentsBytes, contentsChecksum } = artifactCell86,
      artifactCell100 = ArtifactTabContentHelper86(cacheKey, contentsBytes);
    if (artifactCell100 != null) {
      ArtifactTabContentHelper88(
        contentsChecksum,
        artifactCell80,
        artifactCell96,
      );
      artifactCell90(null);
      artifactCell92(artifactCell100);
      artifactCell94(contentsChecksum);
      artifactCell88(false);
      return;
    }
    artifactCell88(false);
    artifactCell90({
      cacheKey,
      contentsChecksum,
      contentsBytes,
      importKind,
    });
  };
  artifactCell99 = [
    cacheKey,
    hasBinaryResponse,
    importKind,
    artifactCell86,
    shouldParseArtifactPreview,
  ];
  React.useEffect(artifactCell98, artifactCell99);
  let artifactCell101, artifactCell102;
  artifactCell101 = () => {
    if (artifactCell89 == null) return;
    let artifactCell103 = false;
    return (
      ArtifactTabContentHelper67(
        artifactCell89.contentsBytes,
        artifactCell89.importKind,
      )
        .then((value) => {
          artifactCell103 ||
            (ArtifactTabContentHelper87(
              artifactCell89.cacheKey,
              artifactCell89.contentsBytes,
              value,
            ),
            ArtifactTabContentHelper88(
              artifactCell89.contentsChecksum,
              artifactCell80,
              artifactCell96,
            ),
            artifactCell92(value),
            artifactCell94(artifactCell89.contentsChecksum),
            artifactCell88(false),
            artifactCell90(null));
        })
        .catch(() => {
          artifactCell103 ||
            (artifactCell92(null),
            artifactCell94(null),
            artifactCell88(true),
            artifactCell90(null));
        }),
      () => {
        artifactCell103 = true;
      }
    );
  };
  artifactCell102 = [artifactCell89];
  React.useEffect(artifactCell101, artifactCell102);
  let artifactCell104 =
    artifactCell91 != null &&
    artifactCell93 != null &&
    artifactCell93 === artifactCell86?.contentsChecksum;
  return {
    isCurrentArtifactParsed: artifactCell104,
    isParsing: artifactCell97,
    parseError: artifactCell87,
    parsedArtifact: artifactCell91,
    previewVersion: artifactCell95,
  };
}
function ArtifactTabContentHelper77(artifactCell105) {
  let { artifactType, hostId, importKind, path, queryCacheKey, tabId } =
      artifactCell105,
    artifactCell106 = CodexPluginActionType(ensureComposerEsm_S8_Init),
    artifactCell107 = useQueryClient(),
    artifactCell108 = useIntl(),
    artifactCell109 = ensureHooksFocusIconInit({
      hostId,
      path,
    });
  let artifactCell110 = CodexBrowserSurfaceActionType(
      LoadingPreviewIcon,
      artifactCell109,
    ),
    artifactCell111 = () =>
      AppIconOH({
        cacheKey: queryCacheKey,
        openFiles: [
          {
            hostId,
            path,
          },
        ],
        queryClient: artifactCell107,
        throwOnError: true,
      });
  let artifactCell112, artifactCell113;
  artifactCell112 = () => {
    AppInitialIH(artifactCell106, {
      hostId,
      path,
    });
  };
  artifactCell113 = () => {
    ImageFileIcon(artifactCell106, {
      hostId,
      path,
    });
  };
  let artifactCell114 = {
    mutationFn: artifactCell111,
    onError: artifactCell112,
    onSuccess: artifactCell113,
  };
  let artifactCell115 = noop(artifactCell114);
  if (!artifactCell110) return null;
  let artifactCell116 = artifactCell108.formatMessage(
    artifactCell117.refreshForLatest,
  );
  let artifactCell118 = artifactCell115.isPending,
    artifactCell119 = () => {
      logArtifactAnnotationStarted(artifactCell106, {
        artifactTabId: tabId,
        artifactType,
        importKind,
        threadId: ensureDebugPanelParsersInit(artifactCell106.value),
      });
      tabId != null &&
        AppInitialYH({
          artifactType,
          importKind,
          requestKey: tabId,
        });
      artifactCell115.mutate();
    };
  let artifactCell120 = artifactCell115.isPending ? "animate-spin" : null,
    artifactCell121 = cx("size-3.5", artifactCell120);
  let artifactCell122 = <AppIconJO className={artifactCell121} />;
  let artifactCell123 = (
    <span>
      {
        <MemoizedFormattedMessage
          {...{
            ...artifactCell117.refreshForLatest,
          }}
        />
      }
    </span>
  );
  let artifactCell124 = (
    <button
      type="button"
      aria-label={artifactCell116}
      className="flex h-full cursor-interaction items-center gap-1.5 px-2"
      disabled={artifactCell118}
      onClick={artifactCell119}
    >
      {artifactCell122}
      {artifactCell123}
    </button>
  );
  let artifactCell125 = <div className="h-full w-px bg-white/20" />;
  let artifactCell126 = artifactCell108.formatMessage({
    id: "artifactTab.dismissRefreshForLatest",
    defaultMessage: "Dismiss refresh prompt",
    description:
      "Accessible label for dismissing the artifact preview refresh prompt",
  });
  let artifactCell127 = () => {
    ImageFileIcon(artifactCell106, {
      hostId,
      path,
    });
  };
  let artifactCell128 = (
    <Chatgpt2
      {...{
        className: "size-3.5",
      }}
    />
  );
  let artifactCell129 = (
    <button
      type="button"
      aria-label={artifactCell126}
      className="flex h-full w-6 cursor-interaction items-center justify-center"
      disabled={artifactCell115.isPending}
      onClick={artifactCell127}
    >
      {artifactCell128}
    </button>
  );
  return (
    <div
      className="flex h-7 items-center overflow-hidden rounded-full bg-token-charts-blue text-xs font-medium text-white shadow-md"
      data-testid="artifact-refresh-for-latest"
    >
      {artifactCell124}
      {artifactCell125}
      {artifactCell129}
    </div>
  );
}
