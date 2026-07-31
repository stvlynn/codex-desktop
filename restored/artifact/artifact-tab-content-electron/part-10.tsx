// Restored from ref/webview/assets/artifact-tab-content.electron-z_W871m1.js
// Stage 3 deep fill from per-chunk checkpoint / `artifact-tab-content.electron-z_W871m1/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 100/134).
// JSX calls converted: 72; mechanical renames: 833.
// Source used: .deobfuscate-javascript/_full/checkpoints/artifact-tab-content.electron-z_W871m1.tsx.
// Careful split export-budget 10/13
// Wave FZ-support — PascalCase invalid JSX tags: isLocalOrNullValue→IsLocalOrNullValue, chatgpt2→Chatgpt2, coerceLocalFilesystemPath→CoerceLocalFilesystemPath, useInfiniteListQuery→UseInfiniteListQuery, react→react, artifactCell76→ArtifactCell76, artifactCell78→ArtifactCell78.
/* split-lane-import-depth:1 */

// Cross-part soft stubs.
const $i: any = undefined;
const AppInitialGH: any = undefined;
const AppInitialGX: any = undefined;
const AppInitialQV: any = undefined;
const AppInitialRH: any = undefined;
const AppInitialXV: any = undefined;
const AppInitialYH: any = undefined;
const ArtifactTabContentHelper1: any = undefined;
const ArtifactTabContentHelper2: any = undefined;
const ArtifactTabContentHelper71: any = undefined;
const ArtifactTabContentHelper76: any = undefined;
const ArtifactTabContentHelper77: any = undefined;
const ArtifactTabContentHelper78: any = undefined;
const ArtifactTabContentHelper79: any = undefined;
const ArtifactTabContentHelper82: any = undefined;
const ArtifactTabContentHelper83: any = undefined;
const ArtifactTabContentHelper84: any = undefined;
const ArtifactTabContentHelper85: any = undefined;
const ArtifactTabContentHelper89: any = undefined;
const ArtifactTabContentHelper90: any = undefined;
const PreviewInlineMeta: any = undefined;
const artifactCell59: any = undefined;
const ArtifactCell76: any = undefined;
const ArtifactCell78: any = undefined;
const deferredUiDH: any = undefined;
const writeClipboardContents: any = undefined;

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

export function ArtifactTabContentElectron({
  artifactTemplateSkill,
  artifactType,
  chromeMode = "default",
  hostId,
  importKind,
  path,
  tabId,
  title,
}: ArtifactTabContentProps): ReactNode {
  let artifactCell42 = CodexPluginActionType(ensureComposerEsm_S8_Init),
    artifactCell43 = ensureDebugPanelParsersInit(artifactCell42.value),
    artifactCell44 = React.useRef(null),
    artifactCell46 = ArtifactTabContentHelper1(),
    artifactCell47 = ArtifactTabContentHelper2(),
    artifactCell48 = AppInitialRH(artifactType),
    artifactCell49 = artifactCell48
      ? () => {
          if (artifactCell42.value.routeKind === "local-thread")
            return canonicalizeWorkspacePathKey(
              "ignore-open-file-change-events",
              {
                conversationId: artifactCell42.value.conversationId,
                hostId,
                path,
              },
            );
        }
      : undefined,
    artifactCell50 = importKind === "docx" && !artifactCell47,
    artifactCell51 = React.useRef(null),
    [artifactCell52, artifactCell53] = React.useState(null),
    artifactCell54 = useEventCallback((artifactCell55) => {
      artifactCell51.current = artifactCell55;
      artifactCell55 != null && tabId != null && AppInitialXV(tabId);
    }),
    artifactCell56 = ArtifactTabContentHelper85({
      hostId,
      importKind,
      path,
    }),
    artifactCell57 = React.useMemo(
      () => ["manual-artifact-preview", artifactCell56],
      [artifactCell56],
    ),
    { data, dataUpdatedAt, isError, isFetching, isLoading } =
      SIDEBAR_HIT_TEST_SELECTOR("read-file-metadata", {
        params: {
          hostId,
          path,
        },
        queryConfig: {
          enabled: artifactCell46,
          ...(artifactCell48
            ? {
                cacheKey: artifactCell57,
                refetchOnMount: "always",
                refetchOnWindowFocus: false,
                staleTime: readScrollTop.INFINITE,
              }
            : {}),
        },
      }),
    artifactCell58 =
      artifactCell46 &&
      data?.isFile === true &&
      (artifactType === "pdf" ||
        data.sizeBytes == null ||
        data.sizeBytes <= artifactCell59),
    artifactCell60 = importKind === "tex",
    artifactCell61 =
      artifactCell58 &&
      artifactType !== "pdf" &&
      artifactType !== "notebook" &&
      !artifactCell50,
    {
      data: _data,
      dataUpdatedAt: _dataUpdatedAt,
      isError: _isError,
      isFetching: _isFetching,
      isLoading: _isLoading,
    } = SIDEBAR_HIT_TEST_SELECTOR(
      artifactCell60 ? "compile-latex-artifact" : "read-file-binary",
      {
        params: {
          hostId,
          path,
        },
        queryConfig: {
          enabled: artifactCell58,
          ...(artifactCell48
            ? {
                cacheKey: artifactCell57,
                gcTime: readScrollTop.THIRTY_SECONDS,
                refetchOnMount: "always",
                refetchOnWindowFocus: false,
                staleTime: readScrollTop.INFINITE,
              }
            : {}),
        },
      },
    ),
    {
      isCurrentArtifactParsed,
      isParsing,
      parseError,
      parsedArtifact,
      previewVersion,
    } = ArtifactTabContentHelper76({
      cacheKey: artifactCell56,
      contentsBase64: _data?.contentsBase64,
      hasBinaryResponse: _data != null,
      importKind,
      shouldParseArtifactPreview: artifactCell61,
    }),
    artifactCell62 =
      artifactType === "pdf" && _data?.contentsBase64 != null
        ? `data:application/pdf;base64,${_data.contentsBase64}`
        : null,
    artifactCell63 = React.useMemo(
      () =>
        !artifactCell50 || _data?.contentsBase64 == null
          ? null
          : ArtifactTabContentHelper89(_data.contentsBase64),
      [_data?.contentsBase64, artifactCell50],
    ),
    artifactCell64 = React.useMemo(
      () =>
        artifactCell63 == null
          ? null
          : ArtifactTabContentHelper90(artifactCell63),
      [artifactCell63],
    );
  React.useEffect(() => {
    if (tabId == null) return;
    let artifactCell65 = `${tabId}\0${hostId}\0${path}\0${artifactType}\0${importKind}`;
    return (
      artifactCell44.current !== artifactCell65 &&
        ((artifactCell44.current = artifactCell65),
        AppInitialYH({
          artifactType,
          importKind,
          requestKey: tabId,
        })),
      setReviewScrollTarget(tabId)
    );
  }, [artifactType, hostId, importKind, path, tabId]);
  React.useEffect(() => {
    if (!(tabId == null || !artifactCell46) && !(isFetching || _isFetching)) {
      if (isError) {
        writeClipboardContents(tabId, "metadata_load_failed");
        return;
      }
      if (data == null) {
        isLoading || writeClipboardContents(tabId, "metadata_load_failed");
        return;
      }
      if (!data.isFile) {
        writeClipboardContents(tabId, "metadata_load_failed");
        return;
      }
      if (
        (AppInitialGH(tabId),
        artifactType !== "pdf" &&
          data.sizeBytes != null &&
          data.sizeBytes > artifactCell59)
      ) {
        writeClipboardContents(tabId, "size_limit_exceeded");
        return;
      }
      if (_isError) {
        writeClipboardContents(tabId, "binary_read_failed");
        return;
      }
      if (_data?.contentsBase64 != null) conversationFindResultAtom(tabId);
      else if (!_isLoading && _data != null) {
        writeClipboardContents(tabId, "binary_read_failed");
        return;
      }
      if (artifactType !== "pdf") {
        if (artifactType === "notebook") {
          _data?.contentsBase64 != null &&
            conversationFindActiveMatchAtom(tabId);
          return;
        }
        if (parseError) {
          writeClipboardContents(tabId, "parse_failed");
          return;
        }
        ((artifactCell50 && artifactCell63 != null) ||
          (parsedArtifact != null && isCurrentArtifactParsed)) &&
          (deferredUiH(tabId), conversationFindActiveMatchAtom(tabId));
      }
    }
  }, [
    artifactType,
    _data,
    _dataUpdatedAt,
    data,
    dataUpdatedAt,
    artifactCell46,
    _isError,
    _isFetching,
    _isLoading,
    isCurrentArtifactParsed,
    isError,
    isFetching,
    isLoading,
    artifactCell63,
    parseError,
    parsedArtifact,
    artifactCell50,
    tabId,
  ]);
  let artifactCell66 = useEventCallback((artifactCell67) => {
    if (artifactCell67.artifactKind === "document") {
      let artifactCell68 = artifactCell51.current;
      return artifactCell50
        ? (artifactCell68?.navigateToPage(artifactCell67.pageNumber),
          artifactCell68 != null)
        : parsedArtifact?.kind === "document"
          ? (artifactCell53({
              requestId: globalThis.crypto.randomUUID(),
              target: artifactCell67,
            }),
            true)
          : false;
    }
    return artifactCell67.artifactKind === "presentation"
      ? parsedArtifact?.kind !== "presentation" ||
        artifactCell67.slideNumber == null
        ? false
        : (artifactCell53({
            requestId: globalThis.crypto.randomUUID(),
            target: artifactCell67,
          }),
          true)
      : parsedArtifact?.kind !== "spreadsheet" || !("range" in artifactCell67)
        ? false
        : (artifactCell53({
            requestId: globalThis.crypto.randomUUID(),
            target: artifactCell67,
          }),
          true);
  });
  React.useEffect(() => {
    if (tabId != null) return AppInitialQV(tabId, artifactCell66);
  }, [artifactCell66, tabId]);
  let artifactCell69 = artifactCell50
    ? artifactCell63 != null
    : parsedArtifact != null;
  React.useEffect(() => {
    tabId == null || !artifactCell69 || AppInitialXV(tabId);
  }, [artifactCell69, tabId]);
  let artifactCell70 = AppInitialGX(importKind) ? (
      <ArtifactTabContentHelper82
        {...{
          hostId,
          path,
          tabId,
          title,
        }}
      />
    ) : null,
    artifactCell71 =
      artifactTemplateSkill == null ? null : (
        <ArtifactTabContentHelper71
          {...{
            hostId,
            part: "title",
            skill: artifactTemplateSkill,
            title,
          }}
        />
      ),
    artifactCell72 =
      artifactTemplateSkill == null ? null : (
        <ArtifactTabContentHelper71
          {...{
            hostId,
            part: "menu",
            skill: artifactTemplateSkill,
            title,
          }}
        />
      ),
    artifactCell73 =
      artifactTemplateSkill == null ? null : (
        <ArtifactTabContentHelper71
          {...{
            hostId,
            part: "edit",
            projectContext:
              artifactCell42.value.routeKind === "home" ||
              artifactCell42.value.routeKind === "local-thread"
                ? artifactCell42.value.projectContext
                : null,
            skill: artifactTemplateSkill,
            title,
          }}
        />
      ),
    artifactCell74 = (
      <ArtifactTabContentHelper77
        {...{
          artifactType,
          hostId,
          importKind,
          path,
          queryCacheKey: artifactCell57,
          tabId,
        }}
      />
    );
  return artifactCell46 ? (
    data == null ? (
      <ArtifactTabContentHelper83
        {...{
          isError,
          isLoading,
        }}
      />
    ) : data.isFile ? (
      artifactType !== "pdf" &&
      data.sizeBytes != null &&
      data.sizeBytes > artifactCell59 ? (
        <ArtifactTabContentHelper84
          {...{
            chromeMode,
            hostId,
            path,
            sizeBytes: data.sizeBytes,
          }}
        />
      ) : artifactType === "pdf" ? (
        _isLoading ? (
          <ArtifactTabContentHelper83
            {...{
              isError: false,
              isLoading: true,
            }}
          />
        ) : _isError || artifactCell62 == null ? (
          importKind === "tex" ? (
            <PreviewInlineMeta
              {...{
                hostId,
                onSelectFile: (artifactCell75) => {
                  openFileInPanelTab(artifactCell42, artifactCell75, {
                    hostId,
                  });
                },
                path,
              }}
            />
          ) : (
            <section className="flex h-full min-h-0 flex-col bg-token-side-bar-background">
              {
                <IsLocalOrNullValue
                  {...{
                    artifactType: "PDF",
                    centerContent: null,
                    hideMetadata: chromeMode === "standalone",
                    rightContent:
                      chromeMode === "default" ? (
                        <ArtifactPreviewDownloadButton
                          {...{
                            hostId,
                            path,
                            sizeBytes: data.sizeBytes,
                          }}
                        />
                      ) : null,
                    title,
                  }}
                />
              }
              {ArtifactPreviewStatus("error")}
            </section>
          )
        ) : (
          <ArtifactTabContentHelper79
            {...{
              refreshButton: artifactCell74,
              children: (
                <React.Suspense
                  {...{
                    fallback: (
                      <ArtifactTabContentHelper83
                        {...{
                          isError: false,
                          isLoading: true,
                        }}
                      />
                    ),
                    children: (
                      <ArtifactCell76
                        {...{
                          chromeMode,
                          fileDataUrl: artifactCell62,
                          headerRightContent: artifactCell70,
                          hostId,
                          onBeforeOpen: artifactCell49,
                          onDocumentReady:
                            tabId == null
                              ? undefined
                              : () => {
                                  deferredUiH(tabId);
                                },
                          onError:
                            tabId == null
                              ? undefined
                              : () => {
                                  writeClipboardContents(
                                    tabId,
                                    "renderer_failed",
                                  );
                                },
                          onReady:
                            tabId == null
                              ? undefined
                              : (artifactCell77) => {
                                  deferredUiDH(tabId, artifactCell77);
                                },
                          path,
                          previewRequestKey: _dataUpdatedAt,
                          sizeBytes: data.sizeBytes,
                          tabId,
                          title,
                        }}
                      />
                    ),
                  }}
                />
              ),
            }}
          />
        )
      ) : artifactType === "notebook" ? (
        _isLoading ? (
          <ArtifactTabContentHelper83
            {...{
              isError: false,
              isLoading: true,
            }}
          />
        ) : _isError || _data?.contentsBase64 == null ? (
          <ArtifactTabContentHelper83
            {...{
              isError: true,
              isLoading: false,
            }}
          />
        ) : (
          <React.Suspense
            {...{
              fallback: (
                <ArtifactTabContentHelper83
                  {...{
                    isError: false,
                    isLoading: true,
                  }}
                />
              ),
              children: (
                <$i
                  key={`${path}:${_data.contentsBase64.length}`}
                  {...{
                    contentsBase64: _data.contentsBase64,
                    headerRightContent: artifactCell70,
                    hostId,
                    path,
                    title,
                  }}
                />
              ),
            }}
          />
        )
      ) : parseError || _isError ? (
        <ArtifactTabContentHelper83
          {...{
            isError: true,
            isLoading: false,
          }}
        />
      ) : artifactCell50 ? (
        _isLoading ? (
          <ArtifactTabContentHelper83
            {...{
              isError: false,
              isLoading: true,
            }}
          />
        ) : _data?.contentsBase64 == null ? (
          <ArtifactTabContentHelper83
            {...{
              isError: true,
              isLoading: false,
            }}
          />
        ) : artifactCell63 == null ? (
          <ArtifactTabContentHelper83
            {...{
              isError: false,
              isLoading: true,
            }}
          />
        ) : (
          <ArtifactTabContentHelper79
            {...{
              refreshButton: artifactCell74,
              children: (
                <React.Suspense
                  {...{
                    fallback: (
                      <ArtifactTabContentHelper83
                        {...{
                          isError: false,
                          isLoading: true,
                        }}
                      />
                    ),
                    children: (
                      <ArtifactCell78
                        key={`${path}:${artifactCell64 ?? 0}`}
                        {...{
                          ref: artifactCell54,
                          bytes: artifactCell63,
                          chromeMode,
                          disableAnnotations: artifactTemplateSkill != null,
                          disableFileActions: artifactTemplateSkill != null,
                          headerRightContent: artifactCell73,
                          headerTitleContent: artifactCell71,
                          headerZoomLeadingContent: artifactCell72,
                          hostId,
                          onBeforeOpen: artifactCell49,
                          path,
                          tabId,
                          title,
                        }}
                      />
                    ),
                  }}
                />
              ),
            }}
          />
        )
      ) : isParsing || _isLoading || parsedArtifact == null ? (
        <ArtifactTabContentHelper83
          {...{
            isError: false,
            isLoading: true,
          }}
        />
      ) : (
        <ArtifactTabContentHelper78
          key={`${path}:${previewVersion}`}
          {...{
            chromeMode,
            disableAnnotations: artifactTemplateSkill != null,
            disableFileActions: artifactTemplateSkill != null,
            headerTitleContent: artifactCell71,
            headerZoomLeadingContent: artifactCell72,
            headerRightContent:
              artifactCell73 == null ? (
                artifactCell70
              ) : (
                <>
                  {artifactCell73}
                  {artifactCell70}
                </>
              ),
            hostId,
            importKind,
            navigationRequest: artifactCell52,
            onBeforeOpen: artifactCell49,
            path,
            parsedArtifact,
            refreshButton: artifactCell74,
            tabId,
            threadId: artifactCell43,
            title,
          }}
        />
      )
    ) : (
      <ArtifactTabContentHelper83
        {...{
          isError: true,
          isLoading: false,
        }}
      />
    )
  ) : (
    <ArtifactTabContentHelper83
      {...{
        isError: false,
        isLoading: true,
      }}
    />
  );
}
