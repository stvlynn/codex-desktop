// Restored from ref/webview/assets/appgen-library-page-CYrP5b8N.js
// Wave5d soft stubs.
const getJsxRuntime: any = undefined;

// Wave5d soft JSX companions.
function DeferredUiB(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function DeferredUiH(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function IsStartingProcessExpired(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function ReadLoginRouteQuerySnapshot(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function SetRemoteControlEnabledForHost(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function UsePointerSurfaceInteractionGate(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
// Wave FZ — full polished body from `appgen-library-page-CYrP5b8N/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 65 (verified 132/196).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 1/11
/* split-lane-import-depth:1 */

import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { CodexBrowserProfileImportCookieStatus } from "../../analytics/codex-browser-profile-import-cookie-status";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useAppgenScreenshotDataUrlQuery } from "../../apps/use-appgen-screenshot-data-url-query";
import {
  ArtifactFilePreviewIcon,
  ensureArtifactFilePreviewIconInit,
} from "../../artifact/artifact-file-preview-icon";
import { ArtifactPreviewDownloadButton } from "../../artifact/artifact-preview-download-button";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_KM_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_S8_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import {
  ensureConversationPageEsm_Act_Init,
  ensureConversationPageEsm_B0_Init,
  ensureConversationPageEsm_TP_Init,
} from "../../conversation/conversation-page-esm-inits";
import { cloneTypedArray } from "../../boundaries/lodash-clone-deep-guts";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { chatgpt2 } from "../../browser/chatgpt2";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { composerNavigation } from "../../composer/composer-navigation";
import { INLINE_MENTION_GROUP_CLASS } from "../../composer/inline-mention-class-names";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { filterOpenTargets } from "../../files/filter-open-targets";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useIsDarkAppearance } from "../../hooks/use-is-dark-appearance";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { HostCwdPathLabel } from "../../hosts/host-cwd-path-label";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconAZ } from "../../icons/app-icon-az";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconHG, ensureAppIconHGInit } from "../../icons/app-icon-hg";
import { AppIconIR } from "../../icons/app-icon-ir";
import { AppIconJG } from "../../icons/app-icon-jg";
import { ensureAppIconKhInit } from "../../icons/app-icon-kh";
import { AppIconQG } from "../../icons/app-icon-qg";
import { AppIconUD } from "../../icons/app-icon-review-commit-glyph";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconUh } from "../../icons/app-icon-uh";
import { AppIconXG } from "../../icons/app-icon-xg";
import { AppIconZa } from "../../icons/app-icon-za";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { readScrollTop } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { getRouteContextValue } from "../../navigation/get-route-context-value";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { AnnotationFocusMode } from "../../overlay/annotation-focus-mode";
import { usePluginCategoryPageTelemetry } from "../../plugins/use-plugin-category-page-telemetry";
import { usePluginNavigationTelemetry } from "../../plugins/use-plugin-navigation-telemetry";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { buildSkillDiscoveryRoots } from "../../skills/build-skill-discovery-roots";
import { openMcpAppSidePanelTab } from "../../thread/open-mcp-app-side-panel-tab";
import { AriaIconBadge } from "../../ui/aria-icon-badge";
import { closeSidePanelUnlessWindowResize } from "../../ui/close-side-panel-unless-window-resize";
import { CopyButton } from "../../ui/copy-button";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiYV } from "../../ui/deferred-ui-yv";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { EmptyMemoSlot } from "../../ui/empty-memo-slot";
import { ensureShapeColorTokenClusterInit } from "../../ui/ensure-shape-color-token-cluster-init";
import { macOS4 } from "../../ui/mac-os4";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import {
  ensureUseSearchablePageTitleVisibilityInit,
  useSearchablePageTitleVisibility,
} from "../../ui/use-searchable-page-title-visibility";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { formatUrlHostPath } from "../../utils/format-url-host-path";
import { hvtBindableHelper } from "../../utils/hvt-bindable-helper";
import { identity } from "../../utils/identity";
import { isIndeterminate } from "../../utils/is-indeterminate";
import { lerpIfFinite } from "../../utils/lerp-if-finite";
import { slugifyLoose } from "../../utils/slugify-loose";
import {
  ensureImportSettingsCLInit,
  ensurePersonalizationK0Init,
} from "../../utils/wave-as-gap-ensure-inits";
import { ensureNewThreadBhInit } from "../../utils/wave-av-gap-ensure-inits";
import { keysIn } from "../../vendor/lodash-cjs-predicates";
import {
  appgenShareDialogT,
  ensureAppgenShareDialogInit,
} from "../appgen-share-dialog";
import { ensureChatgptSiteSuffixesInit } from "../chatgpt-site-suffixes";
import {
  createAppgenConversation,
  dismissAppgenConversationPrompt,
  ensureStartAppgenConversationHelpersInit,
  ensureStartAppgenConversationInit,
  formatAppgenConversationPrefill,
  listAppgenConversationActions,
  prepareAppgenConversation,
  startAppgenConversation,
  startAppgenConversationFromLibrary,
  useStartAppgenConversation,
} from "../start-appgen-conversation";
const RealtimeVoiceHostId: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/browser-use-mutation-facades.ts) */
const useClearBrowserBrowsingDataMutation: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureImportSettingsAsInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialAs: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:createLibraryPreviewStartState@browser/create-library-preview-start-state.ts) */
const AppInitialAY: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-ba-2.tsx) */
const deferredUiBa: any = undefined;
/** Wave FZ unresolved companion (missing-export:projects/appgen3.ts) */
const appgen3: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-cm.ts) */
const deferredUiCm: any = undefined;
/** Wave FZ unresolved companion (missing-export:apps/use-app-host-update-status-infinite-query.ts) */
const useAppHostUpdateStatusInfiniteQuery: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:resolvePluginRequestId@browser/browser-use-helpers.ts) */
const AppInitialEK: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureSelectWorkspaceEMInit@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialEM: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useOpenLocatorInMainWindow@navigation/use-open-locator-in-main-window.ts) */
const AppInitialG: any = undefined;
/** Wave FZ unresolved companion (missing-export:settings/chatgpt2.tsx) */
const Chatgpt2: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-hx.ts) */
const deferredUiHX: any = undefined;
/** Wave FZ unresolved companion (missing-export:plugins/has-seen-knowledge-work-announcement.tsx) */
const HasSeenKnowledgeWorkAnnouncement: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useSyncExternalStoreWithSelector@boundaries/react-redux-cjs.ts) */
const AppInitialIf: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/dismiss.ts) */
const dismiss: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/list-permission-profiles.tsx) */
const ListPermissionProfiles: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiIs@ui/deferred-ui-is.ts) */
const AppInitialIs: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostIdStub: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-j1.tsx) */
const deferredUiJ1: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/conversation-search-kit.tsx) */
const ConversationSearchKit: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:codexProfileDropdownOpenConfigToml@hosts/codex-profile-dropdown-open-config-toml.ts) */
const AppInitialMX: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureGpuTearingDebugSettingsInit@settings/gpu-tearing-debug-settings.ts) */
const AppInitialO: any = undefined;
/** Wave FZ unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceOhInit: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureTrafficLightInsetsInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialOZ: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureSvgToDataUriInit@utils/svg-to-data-uri.ts) */
const AppInitialP0: any = undefined;
/** Wave FZ unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:updateToneSectionContent@composer/update-tone-section-content.ts) */
const AppInitialPl: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useBrowserUseOriginRulesHelperMutation@boundaries/browser-use-mutation-facades.ts) */
const AppInitialPO: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/composer-scope.ts) */
const composerScope: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:pullRequestsPageDetailCommentUnknownAuthor@git/pull-requests-page-detail-comment-unknown-author.ts) */
const AppInitialQM: any = undefined;
/** Wave FZ unresolved companion (missing-export:onboarding/deferred-rf.ts) */
const deferredRf: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useAppsByIdsForHost@apps/use-apps-by-ids-for-host.ts) */
const AppInitialRG: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureAppgenSiteQueriesInit@appgen/site-query-atoms.ts) */
const AppInitialT5: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiTN@ui/deferred-ui-tn.tsx) */
const AppInitialTN: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:siteAnalyticsEventsPath@appgen/site-analytics-paths.ts) */
const AppInitialTT: any = undefined;
/** Wave FZ unresolved companion (missing-export:worktree/queued.ts) */
const queued: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const setRemoteControlEnabledForHost: any = undefined;
/** Wave FZ unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const AppInitialVO: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-wd.tsx) */
const deferredUiWD: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:stringIncludesInsensitive@utils/string-includes-insensitive.ts) */
const AppInitialWN: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const quickChatConversationTitleAtom: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureDockChevronIconInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialXm: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const InfiniteScrollSentinel: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiYG@ui/deferred-ui-yg.tsx) */
const AppInitialYG: any = undefined;
/** Wave FZ unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshot: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiZG@ui/deferred-ui-zg.tsx) */
const AppInitialZG: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:setKeyedAtomValueWithCleanup@utils/set-keyed-atom-value-with-cleanup.ts) */
const AppInitialZh: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureCloseGlyphIconInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialZo: any = undefined;
/** Wave FZ unresolved companion (sib-missing:appgen/start-appgen-conversation.ts) */
const _startAppgenConversationT: any = undefined;
/** Wave FZ unresolved companion (sib-missing:appgen/start-appgen-conversation.ts) */
const startAppgenConversationB: any = undefined;
/** Wave FZ unresolved companion (sib-missing:appgen/start-appgen-conversation.ts) */
const startAppgenConversationG: any = undefined;
/** Wave FZ unresolved companion (sib-missing:appgen/start-appgen-conversation.ts) */
const startAppgenConversationI: any = undefined;
/** Wave FZ unresolved companion (sib-missing:appgen/start-appgen-conversation.ts) */
const startAppgenConversationO: any = undefined;
/** Wave FZ unresolved companion (sib-missing:appgen/start-appgen-conversation.ts) */
const startAppgenConversationT: any = undefined;
/** Wave FZ unresolved companion (sib-missing:appgen/start-appgen-conversation.ts) */
const startAppgenConversationUnderscore: any = undefined;
/** Wave FZ unresolved companion (sib-missing:appgen/start-appgen-conversation.ts) */
const startAppgenConversationV: any = undefined;
/** Wave FZ unresolved companion (sib-missing:appgen/start-appgen-conversation.ts) */
const startAppgenConversationW: any = undefined;
/** Wave FZ unresolved companion (sib-missing:appgen/start-appgen-conversation.ts) */
const startAppgenConversationX: any = undefined;
/** Wave FZ unresolved companion (sib-missing:appgen/start-appgen-conversation.ts) */
const startAppgenConversationY: any = undefined;
var alpha = esmInit(() => {
  react();
  getJsxRuntime();
});
function bravo(kite) {
  let { action, isMutating, onDelete, onOpenChange, onRename } = kite,
    lemon = useIntl(),
    [marble, nickel] = echo.useState(
      action.type === "rename" ? action.file.name : "",
    ),
    onyx = lemon.formatMessage({
      id: "appgenPage.cloudFile.dialog.close",
      defaultMessage: "Close",
      description: "Accessible label for closing a cloud Library file dialog",
    });
  let pearl = onyx;
  switch (action.type) {
    case "rename": {
      let quartz = marble.trim();
      let river = quartz,
        slate = isMutating || river.length === 0 || river === action.file.name,
        timber = {
          "aria-describedby": undefined,
        };
      let umbra = (event) => {
        event.preventDefault();
        slate || onRename(marble);
      };
      let violet = (
        <DeferredUiH
          {...{
            title: (
              <RealtimeVoiceHostId
                {...{
                  children: (
                    <MemoizedFormattedMessage
                      {...{
                        id: "appgenPage.cloudFile.renameDialog.title",
                        defaultMessage: "Rename file",
                        description: "Title for renaming a cloud Library file",
                      }}
                    />
                  ),
                }}
              />
            ),
          }}
        />
      );
      let willow = lemon.formatMessage({
        id: "appgenPage.cloudFile.renameDialog.inputLabel",
        defaultMessage: "File name",
        description: "Accessible label for the cloud Library rename input",
      });
      let xenon = (event) => nickel(event.target.value);
      let yellow = (
        <input
          autoFocus={true}
          aria-label={willow}
          className="rounded-xl border border-token-border bg-token-input-background px-3 py-2 text-base text-token-input-foreground shadow-sm outline-none focus:ring-1 focus:ring-token-focus-border"
          value={marble}
          onChange={xenon}
          onFocus={copper}
        />
      );
      let zinc = () => onOpenChange(false);
      let amber = (
        <MemoizedFormattedMessage
          {...{
            id: "appgenPage.cloudFile.dialog.cancel",
            defaultMessage: "Cancel",
            description: "Cancel button in a cloud Library file action dialog",
          }}
        />
      );
      let basalt = (
        <ReadLoginRouteQuerySnapshot
          {...{
            color: "outline",
            disabled: isMutating,
            type: "button",
            onClick: zinc,
            children: amber,
          }}
        />
      );
      let cedar = isMutating ? (
        <MemoizedFormattedMessage
          {...{
            id: "appgenPage.cloudFile.renameDialog.renaming",
            defaultMessage: "Renaming…",
            description: "Button label while renaming a cloud Library file",
          }}
        />
      ) : (
        <MemoizedFormattedMessage
          {...{
            id: "appgenPage.cloudFile.renameDialog.rename",
            defaultMessage: "Rename",
            description:
              "Button label for confirming a cloud Library file rename",
          }}
        />
      );
      let daisy = (
        <ReadLoginRouteQuerySnapshot
          {...{
            color: "primary",
            disabled: slate,
            type: "submit",
            children: cedar,
          }}
        />
      );
      let ember = (
        <SetRemoteControlEnabledForHost
          {...{
            children: [basalt, daisy],
          }}
        />
      );
      let flint = (
        <DeferredUiB
          {...{
            as: "form",
            className: "gap-5",
            onSubmit: umbra,
            children: [violet, yellow, ember],
          }}
        />
      );
      let garnet;
      return (
        <UsePointerSurfaceInteractionGate
          {...{
            open: true,
            contentProps: timber,
            dialogCloseLabel: pearl,
            onOpenChange,
            size: "wide",
            children: flint,
          }}
        />
      );
    }
    case "delete": {
      let hazel = action.files.length > 1,
        ivory = (event) => {
          event.preventDefault();
          isMutating || onDelete();
        };
      let jasper = hazel ? (
        <RealtimeVoiceHostId
          {...{
            children: (
              <MemoizedFormattedMessage
                {...{
                  id: "appgenPage.cloudFile.deleteDialog.bulkTitle",
                  defaultMessage: "Delete files?",
                  description:
                    "Title for deleting multiple cloud Library files",
                }}
              />
            ),
          }}
        />
      ) : (
        <RealtimeVoiceHostId
          {...{
            children: (
              <MemoizedFormattedMessage
                {...{
                  id: "appgenPage.cloudFile.deleteDialog.title",
                  defaultMessage: "Delete file?",
                  description: "Title for deleting one cloud Library file",
                }}
              />
            ),
          }}
        />
      );
      let kelp = hazel ? (
        <IsStartingProcessExpired
          {...{
            children: (
              <MemoizedFormattedMessage
                {...{
                  id: "appgenPage.cloudFile.deleteDialog.bulkSubtitle",
                  defaultMessage:
                    "This will delete {count, plural, one {# file} other {# files}} from your Library",
                  description:
                    "Description for deleting multiple cloud Library files",
                  values: {
                    count: action.files.length,
                  },
                }}
              />
            ),
          }}
        />
      ) : (
        <IsStartingProcessExpired
          {...{
            children: (
              <MemoizedFormattedMessage
                {...{
                  id: "appgenPage.cloudFile.deleteDialog.subtitle",
                  defaultMessage:
                    "This will delete {fileName} from your Library",
                  description:
                    "Description for deleting one cloud Library file",
                  values: {
                    fileName: action.files[0]?.name,
                  },
                }}
              />
            ),
          }}
        />
      );
      let lotus = (
        <DeferredUiH
          {...{
            title: jasper,
            subtitle: kelp,
          }}
        />
      );
      let mint = () => onOpenChange(false);
      let nova = (
        <MemoizedFormattedMessage
          {...{
            id: "appgenPage.cloudFile.dialog.cancel",
            defaultMessage: "Cancel",
            description: "Cancel button in a cloud Library file action dialog",
          }}
        />
      );
      let olive = (
        <ReadLoginRouteQuerySnapshot
          {...{
            color: "outline",
            disabled: isMutating,
            type: "button",
            onClick: mint,
            children: nova,
          }}
        />
      );
      let prism = isMutating ? (
        <MemoizedFormattedMessage
          {...{
            id: "appgenPage.cloudFile.deleteDialog.deleting",
            defaultMessage: "Deleting…",
            description: "Button label while deleting cloud Library files",
          }}
        />
      ) : (
        <MemoizedFormattedMessage
          {...{
            id: "appgenPage.cloudFile.deleteDialog.delete",
            defaultMessage: "Delete",
            description:
              "Button label for confirming cloud Library file deletion",
          }}
        />
      );
      let quill = (
        <ReadLoginRouteQuerySnapshot
          {...{
            color: "danger",
            disabled: isMutating,
            type: "submit",
            children: prism,
          }}
        />
      );
      let reef = (
        <SetRemoteControlEnabledForHost
          {...{
            children: [olive, quill],
          }}
        />
      );
      let sage = (
        <DeferredUiB
          {...{
            as: "form",
            className: "gap-5",
            onSubmit: ivory,
            children: [lotus, reef],
          }}
        />
      );
      let topaz;
      return (
        <UsePointerSurfaceInteractionGate
          {...{
            open: true,
            dialogCloseLabel: pearl,
            onOpenChange,
            size: "compact",
            children: sage,
          }}
        />
      );
    }
  }
}
function copper(event) {
  return event.currentTarget.select();
}
var delta,
  echo,
  falcon,
  gamma = esmInit(() => {
    delta = reactCompilerRuntime();
    echo = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
  });
function harbor(ultra) {
  return IntlProvider(
    "border border-token-border-light shadow-md",
    ultra === "list" ? "rounded-md" : "rounded-xl",
  );
}
var indigo = esmInit(() => {
  ensureComposerEsm_Tft_Init();
});
function $n(vapor) {
  if (vapor == null) return "—";
  if (vapor < 1024) return `${vapor} B`;
  let wheat = ["KB", "MB", "GB", "TB"],
    yarn = vapor,
    zephyr = -1;
  for (; yarn >= 1024 && zephyr < wheat.length - 1; ) {
    yarn /= 1024;
    zephyr += 1;
  }
  return `${yarn.toFixed(yarn >= 10 ? 0 : 1)} ${wheat[zephyr]}`;
}
var jade = esmInit(() => {});
