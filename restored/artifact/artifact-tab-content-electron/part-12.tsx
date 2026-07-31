// Restored from ref/webview/assets/artifact-tab-content.electron-z_W871m1.js
// Stage 3 deep fill from per-chunk checkpoint / `artifact-tab-content.electron-z_W871m1/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 100/134).
// JSX calls converted: 72; mechanical renames: 833.
// Source used: .deobfuscate-javascript/_full/checkpoints/artifact-tab-content.electron-z_W871m1.tsx.
// Careful split export-budget 12/13
// Wave FZ-support — PascalCase invalid JSX tags: isLocalOrNullValue→IsLocalOrNullValue, chatgpt2→Chatgpt2, coerceLocalFilesystemPath→CoerceLocalFilesystemPath, useInfiniteListQuery→UseInfiniteListQuery, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, react→react, artifactCell203→ArtifactCell203, artifactCell213→ArtifactCell213, artifactCell221→ArtifactCell221.
/* split-lane-import-depth:1 */

// Cross-part soft stubs.
const AppInitialVj: any = undefined;
const NotebookPreviewOpenActions: any = undefined;
const ZoomPercentMenuControl: any = undefined;
const ArtifactCell203: any = undefined;
const ArtifactCell213: any = undefined;
const ArtifactCell221: any = undefined;
const artifactCell243: any = undefined;
const deferredUiGR: any = undefined;
const deferredUiVV: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;

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

function ArtifactTabContentHelper78(artifactCell130) {
  let {
      chromeMode = "default",
      disableAnnotations = false,
      disableFileActions = false,
      headerRightContent,
      headerTitleContent,
      headerZoomLeadingContent,
      hostId,
      importKind,
      navigationRequest,
      onBeforeOpen,
      path,
      parsedArtifact,
      refreshButton,
      tabId,
      threadId: artifactCell131,
      title,
    } = artifactCell130,
    artifactCell132 = CodexPluginActionType(ensureComposerEsm_S8_Init),
    artifactCell133 = ensureDebugPanelParsersInit(artifactCell132.value);
  let artifactCell134 = artifactCell133,
    artifactCell135 = (
      <ArtifactTabContentHelper83
        {...{
          isError: false,
          isLoading: true,
        }}
      />
    );
  let artifactCell136 = artifactCell135,
    artifactCell137 =
      headerZoomLeadingContent == null
        ? ArtifactTabContentHelper81
        : (artifactCell138) => (
            <div className="flex items-center gap-1">
              {headerZoomLeadingContent}
              {
                <ArtifactTabContentHelper81
                  {...{
                    ...artifactCell138,
                  }}
                />
              }
            </div>
          );
  let artifactCell139 = artifactCell137,
    artifactCell140 =
      chromeMode === "default" && !disableFileActions ? (
        <>
          {
            <ArtifactPreviewDownloadButton
              {...{
                hostId,
                path,
              }}
            />
          }
          {
            <NotebookPreviewOpenActions
              {...{
                analyticsContext: {
                  threadId: artifactCell134 ?? null,
                  turnId: null,
                  inputMessageId: null,
                  messageId: null,
                },
                hostId,
                onBeforeOpen,
                path,
                showLabel: true,
              }}
            />
          }
        </>
      ) : null;
  let artifactCell141 = (
    <>
      {artifactCell140}
      {headerRightContent}
    </>
  );
  let artifactCell142 = artifactCell141,
    artifactCell143 =
      chromeMode === "default" && !disableFileActions ? (
        <>
          {
            <ArtifactPreviewDownloadButton
              {...{
                hostId,
                path,
              }}
            />
          }
          {
            <NotebookPreviewOpenActions
              {...{
                analyticsContext: {
                  threadId: artifactCell134 ?? null,
                  turnId: null,
                  inputMessageId: null,
                  messageId: null,
                },
                hostId,
                onBeforeOpen,
                path,
              }}
            />
          }
        </>
      ) : null;
  let artifactCell144 = (
    <>
      {artifactCell143}
      {headerRightContent}
    </>
  );
  let artifactCell145 = artifactCell144,
    artifactCell146 = CodexPluginActionResult(ensurePersonalizationK0Init),
    artifactCell147 = CodexPluginActionResult(deferredUiVV),
    artifactCell148 =
      artifactCell134 ??
      newConversationEntrypointId({
        entrypoint: "home",
      });
  let artifactCell149 = artifactCell148,
    artifactCell150 = CodexBrowserSurfaceActionType(
      AppInitialVj,
      artifactCell149,
    ),
    artifactCell151 = (artifactCell152) => {
      MemoizedValueBridge(artifactCell132, artifactCell149, artifactCell152);
    };
  let artifactCell153 = useEventCallback(artifactCell151),
    artifactCell154 = React.useRef(null),
    artifactCell155 = React.useRef(null),
    artifactCell156 = collectRemovedArtifactAnnotationIds(
      artifactCell150,
      path,
    );
  let artifactCell157 = artifactCell156,
    artifactCell158 = ArtifactTabContentHelper80(parsedArtifact);
  let artifactCell159 = artifactCell158,
    artifactCell160 = {
      artifactTabId: tabId,
      artifactType: artifactCell159,
      importKind,
      threadId: artifactCell131,
    };
  let artifactCell161 = artifactCell160,
    artifactCell162 = nextArtifactAnnotationCommentLine(artifactCell157);
  let be = artifactCell162,
    artifactCell163,
    artifactCell164;
  artifactCell163 = () => {
    let artifactCell165 = artifactCell155.current;
    if (((artifactCell155.current = artifactCell150), artifactCell165 != null))
      for (let artifactCell166 of filterArtifactAnnotationCommentsForPath({
        previousComments: artifactCell165,
        currentComments: artifactCell150,
        path,
      }))
        artifactCell154.current?.dismissAnnotation(artifactCell166);
  };
  artifactCell164 = [artifactCell150, path];
  React.useEffect(artifactCell163, artifactCell164);
  let artifactCell167, artifactCell168;
  artifactCell167 = () => () => {
    artifactCell153((artifactCell169) =>
      removeArtifactAnnotationCommentsForPath(artifactCell169, path),
    );
  };
  artifactCell168 = [path, artifactCell153];
  React.useEffect(artifactCell167, artifactCell168);
  let artifactCell170, artifactCell171, artifactCell172;
  artifactCell170 = (artifactCell173, artifactCell174) => {
    let { annotationMode } = artifactCell174;
    logArtifactAnnotationSubmitted(artifactCell132, artifactCell161, {
      annotationModeEnabled: annotationMode,
      startSource: artifactCell173,
    });
  };
  artifactCell171 = () => {
    logArtifactAnnotationModeEnabled(artifactCell132, artifactCell161);
  };
  artifactCell172 = (
    event,
    artifactCell175,
    artifactCell176,
    artifactCell177,
  ) => {
    let { annotationMode } = artifactCell177;
    logArtifactRefreshClicked(artifactCell132, artifactCell161, {
      annotationModeEnabled: annotationMode,
      annotationTargetKind: event.target.type,
      submitMode: artifactCell175,
      submitSource: artifactCell176,
    });
  };
  let artifactCell178 = (artifactCell179) => {
    let artifactCell180 = ensureArtifactAnnotationCommentInit({
      line: be,
      path,
      payload: artifactCell179,
      title,
    });
    artifactCell180 != null &&
      (artifactCell153((artifactCell181) => [
        ...artifactCell181,
        artifactCell180,
      ]),
      AppIconMZ());
  };
  let artifactCell182 = (artifactCell183) => {
    let artifactCell184 = ensureArtifactAnnotationCommentInit({
      line: be,
      path,
      payload: artifactCell183,
      title,
    });
    artifactCell184 != null &&
      ensureAppActionPayloadSchemasInit.dispatchHostMessage({
        type: "artifact-direct-comment",
        body: artifactCell183.body,
        comment: artifactCell184,
        conversationId: artifactCell149,
        sessionId: artifactCell183.annotationId,
      });
  };
  let artifactCell185 = (artifactCell186) => {
    artifactCell153((artifactCell187) => {
      let artifactCell188 = false,
        artifactCell189 = artifactCell187.map((item) => {
          if (
            item.localArtifactAnnotationContext?.path !== path ||
            item.localArtifactAnnotationContext.annotationId !==
              artifactCell186.annotationId
          )
            return item;
          let artifactCell190 = ensureArtifactAnnotationCommentInit({
            line: item.position.line,
            path,
            payload: artifactCell186,
            title,
          });
          return artifactCell190 == null
            ? item
            : ((artifactCell188 = true), artifactCell190);
        });
      return artifactCell188 ? artifactCell189 : artifactCell187;
    });
  };
  let artifactCell191 = (artifactCell192) => {
    artifactCell153((artifactCell193) => {
      let artifactCell194 = artifactCell193.filter(
        (item) =>
          item.localArtifactAnnotationContext?.path !== path ||
          item.localArtifactAnnotationContext.annotationId !== artifactCell192,
      );
      return artifactCell194.length === artifactCell193.length
        ? artifactCell193
        : artifactCell194;
    });
  };
  let artifactCell195 = {
    annotation: {
      enabled: true,
      handleRef: artifactCell154,
      onStart: artifactCell170,
      onModeEnabled: artifactCell171,
      onSubmitted: artifactCell172,
      onSubmit: artifactCell178,
      onDirectSubmit: artifactCell182,
      onUpdate: artifactCell185,
      onDismiss: artifactCell191,
    },
  };
  let artifactCell196 = artifactCell195,
    artifactCell197;
  bb0: switch (parsedArtifact.kind) {
    case "document": {
      let artifactCell198 =
          navigationRequest?.target.artifactKind === "document"
            ? navigationRequest.target
            : null,
        artifactCell199 =
          artifactCell198 == null ? undefined : navigationRequest?.requestId,
        artifactCell200 =
          artifactCell198 == null ? undefined : artifactCell198.pageNumber - 1,
        artifactCell201 = chromeMode === "standalone" ? "" : title,
        artifactCell202;
      artifactCell202 = (
        <React.Suspense
          {...{
            fallback: artifactCell136,
            children: (
              <ArtifactCell203
                key={artifactCell199}
                {...{
                  bottomScrollReservePx: artifactCell147,
                  className: "h-full min-h-0",
                  enablePageNavigation: false,
                  headerRightContent: artifactCell142,
                  headerTitleContent,
                  initialDocumentProto: parsedArtifact.proto,
                  initialPageIndex: artifactCell200,
                  renderHeaderZoomControl: artifactCell139,
                  title: artifactCell201,
                }}
              />
            ),
          }}
        />
      );
      artifactCell197 = artifactCell202;
      break bb0;
    }
    case "presentation": {
      let artifactCell204 =
          navigationRequest?.target.artifactKind === "presentation" &&
          navigationRequest.target.slideNumber != null
            ? navigationRequest.target.slideNumber - 1
            : undefined,
        artifactCell205 =
          artifactCell204 == null ? undefined : navigationRequest?.requestId,
        artifactCell206 =
          headerTitleContent == null &&
          "[&_[data-testid='popcorn-file-title']]:hidden",
        artifactCell207 =
          artifactCell146 &&
          "[&_.popcorn-presentation-main-panel]:h-[calc(100%_-_var(--right-panel-composer-overlay-reserve,0px))] [&_.popcorn-presentation-main-panel]:self-start",
        artifactCell208 = cx(
          "h-full min-h-0",
          artifactCell206,
          "[&_.popcorn-presentation-editor-shell]:min-w-[689px]",
          artifactCell207,
        );
      let artifactCell209 = !disableAnnotations,
        artifactCell210 = disableAnnotations ? undefined : artifactCell196,
        artifactCell211 = <ArtifactPreviewZoomToFitLabel {...{}} />;
      let artifactCell212;
      artifactCell212 = (
        <React.Suspense
          {...{
            fallback: artifactCell136,
            children: (
              <ArtifactCell213
                key={artifactCell205}
                {...{
                  className: artifactCell208,
                  enablePageNavigation: false,
                  headerRightContent: artifactCell142,
                  headerTitleContent,
                  hideSpeakerNotes: artifactCell146,
                  initialPresentationProto: parsedArtifact.proto,
                  initialSelectedSlideIdx: artifactCell204,
                  annotationsEnabled: artifactCell209,
                  renderHeaderZoomControl: artifactCell139,
                  reviewTools: artifactCell210,
                  title,
                  zoomToFitLabel: artifactCell211,
                }}
              />
            ),
          }}
        />
      );
      artifactCell197 = artifactCell212;
      break bb0;
    }
    case "spreadsheet": {
      let artifactCell214 =
          navigationRequest?.target.artifactKind === "workbook" &&
          "range" in navigationRequest.target
            ? navigationRequest.target
            : null,
        artifactCell215 =
          artifactCell214 == null ? undefined : navigationRequest?.requestId,
        artifactCell216 = artifactCell214?.range.split(":")[0];
      let artifactCell217 = !disableAnnotations,
        artifactCell218 = disableAnnotations ? undefined : artifactCell196,
        artifactCell219 = chromeMode === "standalone" ? "" : title,
        artifactCell220;
      artifactCell220 = (
        <React.Suspense
          {...{
            fallback: artifactCell136,
            children: (
              <ArtifactCell221
                key={artifactCell215}
                {...{
                  bottomScrollReservePx: artifactCell147,
                  className: "h-full min-h-0",
                  headerRightContent: artifactCell145,
                  headerTitleContent,
                  initialSelectedAddress: artifactCell216,
                  initialWorkbookProto: parsedArtifact.proto,
                  annotationsEnabled: artifactCell217,
                  renderHeaderZoomControl: artifactCell139,
                  reviewTools: artifactCell218,
                  title: artifactCell219,
                }}
              />
            ),
          }}
        />
      );
      artifactCell197 = artifactCell220;
    }
  }
  let artifactCell222 =
    parsedArtifact.kind === "spreadsheet" ? "top-[88px]" : "top-12";
  return (
    <ArtifactTabContentHelper79
      {...{
        refreshButton,
        topClassName: artifactCell222,
        children: artifactCell197,
      }}
    />
  );
}
function ArtifactTabContentHelper79(artifactCell223) {
  let { children, refreshButton, topClassName = "top-12" } = artifactCell223,
    artifactCell224 =
      refreshButton == null ? null : (
        <div
          className={cx(
            "pointer-events-none absolute left-1/2 z-50 -translate-x-1/2",
            topClassName,
          )}
        >
          <div className="pointer-events-auto">{refreshButton}</div>
        </div>
      );
  return (
    <div className="relative h-full min-h-0">
      {children}
      {artifactCell224}
    </div>
  );
}
function ArtifactTabContentHelper80(artifactCell225) {
  switch (artifactCell225.kind) {
    case "document":
      return "document";
    case "presentation":
      return "slides";
    case "spreadsheet":
      return "spreadsheet";
  }
}
function ArtifactTabContentHelper81(artifactCell226) {
  let { fitOption, onZoomPercentChange, triggerTestId, zoomPercent } =
    artifactCell226;
  return (
    <ZoomPercentMenuControl
      {...{
        fitOption,
        onZoomPercentChange,
        triggerTestId,
        zoomOptions: deferredUiGR,
        zoomPercent,
      }}
    />
  );
}
function ArtifactTabContentHelper82(artifactCell227) {
  let { hostId, path, tabId, title } = artifactCell227,
    artifactCell228 = CodexPluginActionType(ensureComposerEsm_S8_Init),
    artifactCell229 = useIntl(),
    [artifactCell230, artifactCell231] = React.useState(false),
    artifactCell232 = artifactCell229.formatMessage({
      id: "artifactTab.sourceOptions",
      defaultMessage: "Artifact viewer options",
      description: "Aria label for the artifact preview options menu",
    });
  let artifactCell233 = artifactCell232,
    artifactCell234 = function (event) {
      event.preventDefault();
      openFileInPanelTab(artifactCell228, path, {
        hostId,
        tabId,
        title,
      });
      artifactCell231(false);
    };
  let artifactCell235 = artifactCell234,
    artifactCell236 = (
      <AppIconQI
        {...{
          className: "icon-xs",
        }}
      />
    );
  let artifactCell237 = (
    <ReadLoginRouteQuerySnapshot
      {...{
        "aria-label": artifactCell233,
        color: "ghost",
        size: "toolbar",
        uniform: true,
        children: artifactCell236,
      }}
    />
  );
  let artifactCell238 = (
    <MemoizedFormattedMessage
      {...{
        id: "artifactTab.sourceOptions.viewSource",
        defaultMessage: "View source",
        description:
          "Menu item that opens the current artifact file in source view",
      }}
    />
  );
  let artifactCell239 = (
    <DropdownMenu.Item
      {...{
        onSelect: artifactCell235,
        LeftIcon: AppIconOH,
        children: artifactCell238,
      }}
    />
  );
  return (
    <DropdownMenuPopover
      {...{
        open: artifactCell230,
        onOpenChange: artifactCell231,
        align: "end",
        contentWidth: "menu",
        triggerButton: artifactCell237,
        children: artifactCell239,
      }}
    />
  );
}
function ArtifactTabContentHelper83(artifactCell240) {
  let { isError, isLoading } = artifactCell240,
    artifactCell241 = isLoading ? "loading" : isError ? "error" : "ready",
    artifactCell242 = ArtifactPreviewStatus(artifactCell241);
  return <div className={artifactCell243}>{artifactCell242}</div>;
}
function ArtifactTabContentHelper84(artifactCell244) {
  let { chromeMode, hostId, path, sizeBytes } = artifactCell244,
    artifactCell245,
    artifactCell246;
  artifactCell245 = cx(artifactCell243, "flex-col gap-3");
  artifactCell246 = (
    <MemoizedFormattedMessage
      {...{
        id: "artifactTab.previewTooLarge",
        defaultMessage: "This file is too large to preview in the side panel",
        description:
          "State shown when an artifact exceeds the size limit for side panel previews",
      }}
    />
  );
  let artifactCell247 = chromeMode === "default" && (
    <ArtifactPreviewDownloadButton
      {...{
        hostId,
        path,
        sizeBytes,
      }}
    />
  );
  return (
    <div className={artifactCell245}>
      {artifactCell246}
      {artifactCell247}
    </div>
  );
}
