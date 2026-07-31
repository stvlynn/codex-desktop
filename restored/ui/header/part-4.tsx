// Restored from ref/webview/assets/header-DIFeySl0.js
// Wave5 stub-pass soft companions.
const DeferredUiH222: any = undefined;
const DeferredUiV2: any = undefined;
const InitialRoute2: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const SeenModelUpgradeList: any = undefined;
const composerScope: any = undefined;
const windowsShowHome: any = undefined;

// Wave FY — full polished body from `header-DIFeySl0/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 46 (verified 88/133).
// Wave FZ-support — soft-deferred ui/header full polished body; alias primary Header.
// Wave5d — FZ repair from fz-support L=2441 sus=22; JSX PascalCase + careful split.
// Wave5d careful split 4/4
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

// Wave5d soft JSX companions.
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialFZ: any = undefined;
const AppInitialR: any = undefined;
const AppInitialVi: any = undefined;
const AppInitialYX: any = undefined;
const AppInitialYi: any = undefined;
const HeaderHelper1: any = undefined;
const HeaderHelper24: any = undefined;
const HeaderHelper28: any = undefined;
const HeaderHelper29: any = undefined;
const HeaderHelper5: any = undefined;
const HeaderHelper6: any = undefined;
const IntlProvider: any = undefined;
const at: any = undefined;
const deferredUiWX: any = undefined;
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
const olive: any = undefined;
const prism: any = undefined;
const quill: any = undefined;
const reef: any = undefined;
const sage: any = undefined;
const topaz: any = undefined;
export function headerT(acorn: any) {
  let {
      className,
      centerContent,
      desktopDeepLinkConversationId,
      title,
      onBack,
      trailing
    } = acorn,
    bloom = useLocation(),
    coral = onBack ?? ultra,
    drift = bloom.pathname === "/",
    eagle = $n,
    {
      data = []
    } = AppInitialYX(),
    frost = drift,
    glide = {
      taskFilter: "current",
      limit: 20,
      enabled: frost
    };
  let honey = composerScope(glide);
  let iris = alpha(honey.data, data, null),
    jewel = IntlProvider("draggable extension:px-panel", className);
  let knoll = IntlProvider("flex items-center electron:h-toolbar extension:py-row-y", "justify-between");
  let lunar = <div className="mr-3 line-clamp-1 flex min-w-0 flex-1 items-center gap-1 truncate" style={{
    viewTransitionName: "header-title"
  }}>
      {title ? <div className="flex min-w-0 flex-1 items-center gap-1">
          {<HeaderHelper29 {...{
        onClick: coral
      }} />}
          {<ReadLoginRouteQuerySnapshot {...{
        color: "ghostActive",
        type: "button",
        onClick: eagle,
        className: "min-w-0 flex-1 truncate !px-0 !py-0 text-left text-sm text-token-foreground hover:!bg-transparent hover:opacity-80 electron:font-medium",
        children: <span className="truncate">{title}</span>
      }} />}
        </div> : <span className="text-token-description-foreground">
          {<HeaderHelper28 {...{
        mergedTasks: iris,
        onBack: coral,
        showBackButton: true
      }} />}
        </span>}
    </div>;
  let moss = <HeaderHelper24 {...{}} />;
  let north = <ElectronOnly {...{
    chromeExtension: true,
    children: <HeaderHelper1 {...{
      conversationId: desktopDeepLinkConversationId
    }} />
  }} />;
  let orbit = <ElectronOnly {...{
    extension: true,
    children: <AppInitialVi />
  }} />;
  let pine = <HeaderHelper5 {...{}} />;
  let quest = <ElectronOnly {...{
    chromeExtension: true,
    extension: true,
    children: <div className="flex flex-shrink-0 items-center">
            <div className="flex items-center gap-1">
              {moss}
              {north}
              {orbit}
              {pine}
            </div>
          </div>
  }} />;
  let ridge = <div className="flex flex-shrink-0 items-center gap-1">
      {trailing}
      {quest}
    </div>;
  let storm = <div className={knoll}>
      {null}
      {lunar}
      {ridge}
    </div>;
  let tide = centerContent == null ? null : <div className="no-drag flex items-center justify-center extension:pb-row-y">
        {centerContent}
      </div>;
  let unity = drift && <div>
      {<HeaderHelper6 {...{
      tasksQuery: honey,
      mergedTasks: iris
    }} />}
    </div>;
  let vale = <ElectronOnly {...{
    extension: true,
    children: unity
  }} />;
  return <div className={jewel}>
      {storm}
      {tide}
      {vale}
    </div>;
}
function $n() {
  window.dispatchEvent(new CustomEvent("open-recent-tasks-menu"));
}
function ultra() {
  thinCallWithUndefined("newTask", "header_new_thread");
}
function vapor(wave) {
  let {
      mergedTasks,
      onBack,
      showBackButton
    } = wave,
    apex = useLocation().pathname === "/",
    brook = useMatch("/local/:conversationId")?.params?.conversationId ?? null,
    cliff = brook == null ? null : resolveScienceModelLabel(brook);
  let dusk = cliff,
    elm = useMatch("/remote/:taskId")?.params?.taskId ?? null,
    {
      data
    } = SeenModelUpgradeList(elm),
    fern = CodexBrowserSurfaceActionType(DeferredUiH222, dusk),
    grove = CodexBrowserSurfaceActionType(AppInitialR, dusk);
  if (elm && data?.task?.title) {
    let hill = showBackButton ? <HeaderHelper29 {...{
      onClick: onBack
    }} /> : null;
    let isle = <span className="min-w-0 flex-1 text-base text-token-foreground">
        {data.task.title}
      </span>;
    let juniper;
    return <div className="flex min-w-0 items-center gap-1">
        {hill}
        {isle}
      </div>;
  }
  if (dusk && fern) {
    let lagoon = showBackButton ? <HeaderHelper29 {...{
      onClick: onBack
    }} /> : null;
    let meadow = grove || <MemoizedFormattedMessage {...{
      id: "codex.taskRow.title",
      defaultMessage: "New chat",
      description: "Default title for a Codex task that doesn't have a title"
    }} />;
    let nest = <span className="min-w-0 flex-1 text-base text-token-foreground">
        {meadow}
      </span>;
    let oak;
    return <div className="flex min-w-0 items-center gap-1">
        {lagoon}
        {nest}
      </div>;
  }
  if (apex) {
    if (mergedTasks.length === 0) return null;
    let petal;
    return <MemoizedFormattedMessage {...{
      id: "header.recentChats",
      defaultMessage: "Chats",
      description: "Header label for recent tasks"
    }} />;
  }
  return null;
}
function wheat(quiet) {
  let {
      onClick
    } = quiet,
    rain = useIntl(),
    seed = <MemoizedFormattedMessage {...{
      ...zephyr.backButton
    }} />;
  let trail = rain.formatMessage(zephyr.backButton);
  let urn = <AppIconPZ {...{
    className: "size-3"
  }} />;
  return <ElectronOnly {...{
    chromeExtension: true,
    extension: true,
    children: <OptionalTooltip {...{
      tooltipContent: seed,
      children: <ReadLoginRouteQuerySnapshot {...{
        color: "ghost",
        size: "icon",
        onClick,
        className: "opacity-70 hover:bg-transparent hover:opacity-100 focus:bg-transparent active:bg-transparent",
        "aria-label": trail,
        children: urn
      }} />
    }} />
  }} />;
}
var yarn, $, zephyr;
export const headerN = esmInit(() => {
  yarn = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  deferredUiWX();
  DeferredUiV2();
  RealtimeVoiceHostId();
  windowsShowHome();
  ensureSettingsQueryAtomsInit();
  ensureComposerEsm_Hlt_Init();
  ensureComposerEsm_K1_Init();
  AppInitialFZ();
  InitialRoute2();
  deferredT();
  AppInitialYi();
  topaz();
  bravo();
  copper();
  sage();
  reef();
  zephyr = identity({
    backButton: {
      id: "header.back",
      defaultMessage: "Back",
      description: "Back button label for returning to the previous screen"
    },
    newChatTitle: {
      id: "header.newChatTitle",
      defaultMessage: "New chat",
      description: "Fallback title shown in the Chrome extension side panel header before a task exists"
    }
  });
});
