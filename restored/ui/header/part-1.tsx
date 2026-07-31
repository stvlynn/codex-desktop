// Restored from ref/webview/assets/header-DIFeySl0.js
// Wave FY — full polished body from `header-DIFeySl0/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 46 (verified 88/133).
// Wave FZ-support — soft-deferred ui/header full polished body; alias primary Header.
// Wave5d — FZ repair from fz-support L=2441 sus=22; JSX PascalCase + careful split.
// Wave5d careful split 1/4
/* split-lane-import-depth:1 */

import { appActionSidebarProjectRefSchema, appActionSidebarSectionRefSchema } from "../../actions/app-action-payload-schemas";
import { ensureReviewFileAppActionAttrsInit } from "../../actions/ensure-review-file-app-action-attrs-init";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_Ist_Init } from "../../conversation/conversation-page-esm-inits";
import { createPersistedAtom, ensurePersistedAtomInit, useAtomPair } from "../../boundaries/persisted-atom";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useLocation, useMatch, useNavigate } from "../../boundaries/react-router-navigation";
import { chatgpt2 as Chatgpt2 } from "../../browser/chatgpt2";
import { getChromeGlobal } from "../../browser/get-chrome-global";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { composerNavigation } from "../../composer/composer-navigation";
import { INLINE_MENTION_GROUP_CLASS } from "../../composer/inline-mention-class-names";
import { UPDATED_AT_KEY } from "../../config/updated-at-key";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { ConversationNavListItem } from "../../conversation/conversation-nav-list-item";
import { deferredConversationN } from "../../conversation/deferred-conversation-n";
import { deferredConversationSQ } from "../../conversation/deferred-conversation-sq-2";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { ensureSidebarThreadKeyPrefixesInit, toLocalSidebarThreadKey } from "../../conversation/sidebar-thread-keys";
import { ensureChromeRuntimeMessagingInit } from "../../desktop/ensure-chrome-runtime-messaging-init";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { useEventCallback } from "../../hooks/use-event-callback";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconKA } from "../../icons/app-icon-ka";
import { AppIconPZ } from "../../icons/app-icon-pz";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconTk, ensureAppIconTkInit } from "../../icons/app-icon-tk";
import { AppIconYm } from "../../icons/app-icon-ym";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { DockIcon, ensureDockIconInit as EnsureDockIconInit } from "../../icons/dock-icon";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import { PdfPermissionFlag } from "../../pdf/pdf-permission-flag";
import { ensurePetNotificationMenuInit } from "../../pets/ensure-pet-notification-menu-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexProjectKey } from "../../utils/codex-project-key";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { identity } from "../../utils/identity";
import { nonEmptyTrimmedStringOrNull } from "../../utils/non-empty-trimmed-string-or-null";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { thinCallWithUndefined } from "../../utils/thin-call-with-undefined";
import { toggleSortedIdList as ToggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import { ensureImportSettingsCLInit } from "../../utils/wave-as-gap-ensure-inits";
import { ensureHotkeyThreadN8Init } from "../../utils/wave-av-gap-ensure-inits";
import { StableWorktreeStatusDialog } from "../../worktrees/stable-worktree-status-dialog-view";
import { deferredT } from "../deferred-t";
import { DropdownMenu, ensureDropdownMenuInit } from "../dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../dropdown-menu-popover";
import { ElectronOnly } from "../electron-only";
import { inProgress2 } from "../in-progress2";
import { InsetBorderPanel } from "../inset-border-panel";
import { OptionalTooltip } from "../optional-tooltip";
const AppInitialBo: any = undefined;
// Wave5d soft JSX companions.
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const at: any = undefined;
const deferredUiYo: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const jade: any = undefined;
const kite: any = undefined;
const lemon: any = undefined;
const marble: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const quartz: any = undefined;
const river: any = undefined;
const slate: any = undefined;
const timber: any = undefined;
const umbra: any = undefined;
const violet: any = undefined;
const willow: any = undefined;
const xenon: any = undefined;
const yellow: any = undefined;
const zinc: any = undefined;
const amber: any = undefined;
const basalt: any = undefined;
const cedar: any = undefined;
const daisy: any = undefined;
const ember: any = undefined;
const flint: any = undefined;
const garnet: any = undefined;
const hazel: any = undefined;
const ivory: any = undefined;
const jasper: any = undefined;
const kelp: any = undefined;
const lotus: any = undefined;
const mint: any = undefined;
const nova: any = undefined;

/** Wave FY unresolved companion (missing-export:ui/deferred-ui-e1.ts) */
const deferredUiE1: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureSelectWorkspaceEMInit@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialEM: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/thread.tsx) */
const Thread: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureComposerEsm_FZ_Init@boundaries/composer-esm-inits.ts) */
const AppInitialFZ: any = undefined;
/** Wave FY unresolved companion (jsx-collision:renameThreadDialogMessages@sidebar/rename-thread-dialog-messages.ts) */
const AppInitialGo: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-h222.tsx) */
const DeferredUiH222: any = undefined;
/** Wave FY unresolved companion (jsx-collision:formatAutomationNextRunLabel@automation/format-automation-next-run-label.ts) */
const AppInitialHo: any = undefined;
/** Wave FY unresolved companion (jsx-collision:lastSkillNameFromMarkdown@skills/last-skill-name-from-markdown.ts) */
const AppInitialIY: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceKstInit: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureDiffCommentComposerInit@editors/ensure-diff-comment-composer-init.ts) */
const AppInitialLj: any = undefined;
/** Wave FY unresolved companion (jsx-collision:remoteHostedPipHiddenThreadIds@conversation/remote-hosted-pip-hidden-thread-ids.ts) */
const AppInitialM: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/remote6.tsx) */
const Remote6: any = undefined;
/** Wave FY unresolved companion (jsx-collision:localConversationIdFromSurfaceValue@conversation/local-conversation-id-from-surface-value.ts) */
const AppInitialMY: any = undefined;
/** Wave FY unresolved companion (jsx-collision:localTaskRowSnoozeMessages@chat/local-task-row-snooze-messages.ts) */
const AppInitialNo: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceNstInit: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureSelectWorkspaceNstInit@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialNst: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureGpuTearingDebugSettingsInit@settings/gpu-tearing-debug-settings.ts) */
const AppInitialO: any = undefined;
/** Wave FY unresolved companion (missing-export:navigation/initial-route2-2.tsx) */
const InitialRoute2: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/composer-scope.ts) */
const composerScope: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensurePreviewQaInit: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredConversationR@conversation/deferred-conversation-r.ts) */
const AppInitialR: any = undefined;
/** Wave FY unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureShapeColorTokenClusterInit@ui/ensure-shape-color-token-cluster-init.ts) */
const AppInitialTM: any = undefined;
/** Wave FY unresolved companion (jsx-collision:environment3@environments/environment3.ts) */
const AppInitialTY: any = undefined;
/** Wave FY unresolved companion (jsx-collision:formatSkillScopeLabelForSkill@skills/format-skill-scope-label-for-skill.ts) */
const AppInitialUj: any = undefined;
/** Wave FY unresolved companion (missing-export:models/seen-model-upgrade-list.tsx) */
const SeenModelUpgradeList: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;
/** Wave FY unresolved companion (jsx-collision:isEnterpriseCbpPlan@account/is-enterprise-cbp-plan.ts) */
const AppInitialVi: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-vv.ts) */
const deferredUiVV: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (jsx-collision:stringIncludesInsensitive@utils/string-includes-insensitive.ts) */
const AppInitialWN: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/deferred-hosts-wq3.tsx) */
const deferredHostsWQ3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureBooleanSchemaClusterInit@settings/ensure-boolean-schema-cluster-init.ts) */
const AppInitialWst: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-wx.ts) */
const deferredUiWX: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useHostChatgptAuthMethod@hosts/use-host-chatgpt-auth-method.ts) */
const AppInitialWY: any = undefined;
/** Wave FY unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const ensureDockChevronIconInit: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/browser2.tsx) */
const Browser2: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-xt.ts) */
const deferredUiXT: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useAccountSettingsProfileVisibility@account/use-account-settings-profile-visibility.ts) */
const AppInitialYi: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiYo@ui/deferred-ui-yo.tsx) */
const AppInitialYo: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshot: any = undefined;
/** Wave FY unresolved companion (jsx-collision:getRecentConversationsQueryKey@worktrees/get-recent-conversations-query-key.ts) */
const AppInitialYX: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/windows-show-home.ts) */
const windowsShowHome: any = undefined;
function olive(unity) {
  let {
      conversationId
    } = unity,
    vale = useIntl(),
    wave = getChromeGlobal()?.runtime?.getManifest?.().version ?? null;
  let apex = wave,
    brook = quill,
    cliff = prism,
    dusk = <MemoizedFormattedMessage {...{
      ...wheat.moreActionsTrigger
    }} />;
  let elm = vale.formatMessage(wheat.moreActionsTrigger);
  let fern = <AppIconQI {...{
    className: "icon-xs"
  }} />;
  let grove = <OptionalTooltip {...{
    tooltipContent: dusk,
    children: <ReadLoginRouteQuerySnapshot {...{
      color: "ghost",
      size: "icon",
      "aria-label": elm,
      children: fern
    }} />
  }} />;
  let hill = conversationId == null ? null : <DropdownMenu.Item {...{
    RightIcon: AppIconTk,
    onSelect: () => {
      reef(`codex://threads/${conversationId}`);
    },
    children: <MemoizedFormattedMessage {...{
      id: "header.openInApp",
      defaultMessage: "Open in app",
      description: "Menu item label for opening the active Chrome extension thread in the ChatGPT desktop app"
    }} />
  }} />;
  let isle = <DropdownMenu.Item {...{
    RightIcon: AppIconTk,
    onSelect: brook,
    children: <MemoizedFormattedMessage {...{
      ...wheat.appSettings
    }} />
  }} />;
  let juniper = <DropdownMenu.Item {...{
    RightIcon: AppIconTk,
    onSelect: cliff,
    children: <MemoizedFormattedMessage {...{
      ...wheat.chromeComputerUseSettings
    }} />
  }} />;
  let lagoon = <DropdownMenu.Title {...{
    className: "gap-4",
    children: [<span className="min-w-0 flex-1 truncate">
            {<MemoizedFormattedMessage {...{
        ...wheat.codexForChrome
      }} />}
          </span>, apex == null ? null : <span className="shrink-0">
              {<MemoizedFormattedMessage {...{
        ...wheat.extensionVersion,
        values: {
          version: apex
        }
      }} />}
            </span>]
  }} />;
  return <DropdownMenuPopover {...{
    align: "end",
    contentWidth: "menuBounded",
    triggerButton: grove,
    children: [hill, isle, juniper, lagoon]
  }} />;
}
function prism() {
  reef(vapor);
}
function quill() {
  reef(ultra);
}
function reef(meadow) {
  PdfPermissionFlag({
    href: meadow,
    initiator: "open_in_browser_bridge"
  });
}
var sage,
  topaz,
  ultra,
  vapor,
  wheat,
  yarn = esmInit(() => {
    sage = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureChromeRuntimeMessagingInit();
    ensureSettingsQueryAtomsInit();
    ensureDropdownMenuInit();
    ensureComposerEsm_Qtt_Init();
    ensureComposerEsm_Hlt_Init();
    ensureAppIconTkInit();
    isRemoteControlConnectionFailedError();
    ultra = "codex://settings";
    vapor = "codex://settings/computer-use/google-chrome";
    wheat = identity({
      moreActionsTrigger: {
        id: "header.moreActionsTrigger",
        defaultMessage: "More actions",
        description: "Button label for opening more actions from the Chrome extension side panel header"
      },
      appSettings: {
        id: "header.appSettings",
        defaultMessage: "App settings",
        description: "Menu item label for opening app settings in the ChatGPT desktop app from the Chrome extension"
      },
      chromeComputerUseSettings: {
        id: "header.chromeComputerUseSettings",
        defaultMessage: "Chrome computer use settings",
        description: "Menu item label for opening Chrome computer use settings in the ChatGPT desktop app from the Chrome extension"
      },
      codexForChrome: {
        id: "header.codexForChrome",
        defaultMessage: "ChatGPT for Chrome",
        description: "Footer label for the Chrome extension in the more actions menu"
      },
      extensionVersion: {
        id: "header.extensionVersion",
        defaultMessage: "v{version}",
        description: "Footer label for the Chrome extension version in the settings menu"
      }
    });
  });
function zephyr() {
  let nest = composerNavigation(),
    oak = useIntl(),
    petal = CodexBrowserSurfaceActionType(deferredUiE1, "newTask"),
    quiet = wind => {
      wind.defaultPrevented || nest();
    };
  let rain = quiet,
    seed = <MemoizedFormattedMessage {...{
      ...coral.newChat
    }} />;
  let trail = oak.formatMessage(coral.newChat);
  let urn = <AppIconYm {...{
    className: "icon-xs"
  }} />;
  let vine = <ReadLoginRouteQuerySnapshot {...{
    color: "ghost",
    size: "icon",
    onClick: rain,
    "aria-label": trail,
    children: urn
  }} />;
  return <OptionalTooltip {...{
    tooltipContent: seed,
    shortcut: petal,
    children: vine
  }} />;
}
var acorn,
  bloom,
  coral,
  drift = esmInit(() => {
    acorn = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    codexProjectKey();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_Hlt_Init();
    conversationsSidebarMessages();
    ensureDockChevronIconInit();
    coral = identity({
      newChat: {
        id: "localConversationPage.newChat",
        defaultMessage: "New chat",
        description: "Label for starting a new task"
      }
    });
  });
function eagle(yarrow) {
  let {
      mergedTasks,
      tasksQuery
    } = yarrow,
    azure = useNavigate(),
    birch = composerNavigation(),
    canyon = useLocation(),
    {
      cancelPendingWorktree
    } = StableWorktreeStatusDialog();
  if (tasksQuery.isLoading && mergedTasks.length === 0) return null;
  let dew = tasksQuery.error instanceof ensureReviewFileAppActionAttrsInit && tasksQuery.error.status === 404;
  if (tasksQuery.isError && mergedTasks.length === 0 && !dew) {
    let haven = <MemoizedFormattedMessage {...{
      id: "codex.recentTasksMenu.errorCloud.inline",
      defaultMessage: "Failed to load cloud chats.",
      description: "Inline error indicator for cloud tasks in recent feed"
    }} />;
    let ink = () => {
      tasksQuery.refetch();
    };
    let jadeite = <MemoizedFormattedMessage {...{
      id: "codex.common.retry",
      defaultMessage: "Retry",
      description: "Retry button"
    }} />;
    let kernel;
    return <div className="mb-2 flex items-center gap-2 text-base text-token-input-placeholder-foreground">
        {haven}
        {<ReadLoginRouteQuerySnapshot {...{
        size: "default",
        color: "outline",
        onClick: ink,
        children: jadeite
      }} />}
      </div>;
  }
  if (mergedTasks.length === 0) return null;
  let ever;
  mergedTasks.filter(glide);
  ever = mergedTasks;
  let field = ever,
    grain;
  {
    let leaf;
    leaf = event => {
      switch (event.kind) {
        case "remote":
          return <AppInitialYo key={event.key} useStableTrailingRail={true} isActive={canyon.pathname === `/remote/${event.task.id}`} task={event.task} onClose={frost} />;
        case "local":
          return event.conversation == null ? <AppInitialHo key={event.key} useStableTrailingRail={true} task={event.pendingWorktree} hasAttention={event.pendingWorktree.needsAttention} statusIndicatorReplacesMeta={true} onArchive={() => {
            cancelPendingWorktree(event.pendingWorktree.id);
          }} /> : <ConversationNavListItem key={event.key} useStableTrailingRail={true} isActive={canyon.pathname === `/local/${event.conversation.id}`} conversationId={event.conversation.id} statusIndicatorReplacesMeta={true} metaContent={event.conversation.createdAt == null ? undefined : <INLINE_MENTION_GROUP_CLASS {...{
            dateString: new Date(event.conversation.createdAt).toISOString()
          }} />} onActiveArchiveStart={birch} onClick={() => {
            azure(`/local/${event.conversation.id}`);
          }} />;
      }
    };
    grain = field.map(leaf);
  }
  return <div className="group/inline -mx-[var(--padding-row-x)] flex flex-col gap-px rounded-xl pb-1 transition-colors [--task-row-trailing-inset:calc(var(--spacing)*1.5)]">
      {grain}
      {false}
    </div>;
}
function frost() {}
function glide(maple) {
  if (maple.kind === "remote") {
    let nimbus = maple.task.task_status_display?.latest_turn_status_display?.turn_status;
    return maple.task.has_unread_turn === true || nimbus === "in_progress" || nimbus === "pending";
  }
  return maple.kind === "local" ? maple.conversation == null || maple.conversation.hasUnreadTurn ? true : ensureComposerEsm_K9_Init(maple.conversation) : false;
}
var honey,
  iris,
  jewel = esmInit(() => {
    honey = reactCompilerRuntime();
    ensureSelectWorkspaceNstInit();
    ensureIntlFormattersInit();
    ensureComposerEsm_P5_Init();
    inProgress2();
    ensureSettingsQueryAtomsInit();
    ensureImportSettingsCLInit();
    conversationsSidebarMessages();
    appActionSidebarSectionRefSchema();
    deferredUiVV();
    AppInitialBo();
    AppInitialNo();
    AppInitialGo();
  }),
  knoll,
  lunar = esmInit(() => {
    ensurePersistedAtomInit();
    knoll = createPersistedAtom("cloudTasksEnvironmentFilterId", null);
  });
function $t(opal) {
  let {
      searchQuery,
      onQueryChange,
      autoFocus = false
    } = opal,
    plume = useIntl(),
    quillow = <label className="sr-only" htmlFor="recent-tasks-search">
        {<MemoizedFormattedMessage {...{
        id: "codex.recentTasksMenu.search",
        defaultMessage: "Search recent chats",
        description: "Label for the recent tasks menu search input"
      }} />}
      </label>;
  let root = event => onQueryChange(event.target.value);
  let silk = plume.formatMessage({
    id: "codex.recentTasksMenu.search",
    defaultMessage: "Search recent chats",
    description: "Label for the recent tasks menu search input"
  });
  let thorn = searchQuery.length > 0 ? <button type="button" className="flex items-center justify-center text-token-input-placeholder-foreground transition-colors hover:text-token-foreground" onClick={() => onQueryChange("")} aria-label={plume.formatMessage({
    id: "codex.recentTasksMenu.clearSearch",
    defaultMessage: "Clear search",
    description: "Button label to clear the recent tasks menu search input"
  })}>
        {<Chatgpt2 {...{
      className: "icon-2xs"
    }} />}
      </button> : null;
  return <div>
      {quillow}
      {<InsetBorderPanel {...{
      id: "recent-tasks-search",
      autoFocus: autoFocus,
      value: searchQuery,
      onChange: root,
      placeholder: silk,
      trailingContent: thorn
    }} />}
    </div>;
}
var moss,
  north,
  orbit = esmInit(() => {
    moss = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureDropdownMenuInit();
    ensureConversationPageEsm_Act_Init();
  });
function pine() {
  return <AppInitialLj className="h-48 text-token-input-placeholder-foreground">
      {<MemoizedFormattedMessage {...{
      id: "codex.recentTasksMenu.empty",
      defaultMessage: "No chats yet",
      description: "Empty state for recent tasks menu"
    }} />}
    </AppInitialLj>;
}
var quest,
  on,
  ridge = esmInit(() => {
    quest = reactCompilerRuntime();
    ensureIntlFormattersInit();
    AppInitialUj();
  }),
  storm,
  tide = esmInit(() => {
    storm = "w-full justify-between !px-[var(--padding-row-x)] !py-[var(--padding-row-y)] text-left";
  });
