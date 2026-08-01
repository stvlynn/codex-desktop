// Restored from ref/webview/assets/header-DIFeySl0.js
// Wave5 stub-pass soft companions.
const NativeContextMenuSurface: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const Remote6: any = undefined;
const deferredHostsWQ3: any = undefined;
const ensureSelectWorkspaceKstInit: any = undefined;

// Wave FY — full polished body from `header-DIFeySl0/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 46 (verified 88/133).
// Wave FZ-support — soft-deferred ui/header full polished body; alias primary Header.
// Wave5d — FZ repair from fz-support L=2441 sus=22; JSX PascalCase + careful split.
// Wave5d careful split 2/4
/* split-lane-import-depth:1 */

import { appActionSidebarProjectRefSchema, appActionSidebarSectionRefSchema } from "../../actions/app-action-payload-schemas";
import { ensureReviewFileAppActionAttrsInit } from "../../actions/ensure-review-file-app-action-attrs-init";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
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
const AppInitialEM: any = undefined;
const AppInitialIY: any = undefined;
const AppInitialLj: any = undefined;
const AppInitialM: any = undefined;
const AppInitialMY: any = undefined;
const AppInitialTY: any = undefined;
const AppInitialUj: any = undefined;
const AppInitialWY: any = undefined;
const AppInitialWst: any = undefined;
const HeaderHelper11: any = undefined;
const IntlProvider: any = undefined;
const at: any = undefined;
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
const ultra: any = undefined;
const vapor: any = undefined;
const wheat: any = undefined;
const yarn: any = undefined;
const zephyr: any = undefined;
const acorn: any = undefined;
const bloom: any = undefined;
const coral: any = undefined;
const drift: any = undefined;
const eagle: any = undefined;
const frost: any = undefined;
const glide: any = undefined;
const honey: any = undefined;
const iris: any = undefined;
const jewel: any = undefined;
const knoll: any = undefined;
const lunar: any = undefined;
const moss: any = undefined;
const north: any = undefined;
const orbit: any = undefined;
const pine: any = undefined;
const quest: any = undefined;
const ridge: any = undefined;
const storm: any = undefined;
const tide: any = undefined;
const unity: any = undefined;
const vale: any = undefined;
const wave: any = undefined;
const apex: any = undefined;
const brook: any = undefined;
const cliff: any = undefined;
const dusk: any = undefined;
const elm: any = undefined;
const fern: any = undefined;
const grove: any = undefined;
const hill: any = undefined;
const isle: any = undefined;
const juniper: any = undefined;
const lagoon: any = undefined;
const meadow: any = undefined;
const nest: any = undefined;
const oak: any = undefined;
function petal(maple) {
  let {
      className
    } = maple,
    nimbus = useIntl(),
    [opal, plume] = seed.useState(false),
    [quillow, root] = seed.useState(""),
    [silk, thorn] = useAtomPair(bravo),
    upland = AppInitialTY(),
    {
      data,
      isLoading,
      isError,
      refetch
    } = AppInitialMY(),
    vista = quillow.trim();
  let wisp = vista.length > 0,
    yonder = {
      enabled: wisp
    };
  let {
      data: _data,
      isLoading: _isLoading,
      isError: _isError,
      refetch: _refetch
    } = AppInitialIY(quillow, yonder),
    zenith;
  bb0: {
    let weir = quillow.trim(),
      yard = weir.length > 0 ? _data ?? [] : data ?? [];
    if (weir.length === 0 && upland) {
      let anchor = disc => disc.id === upland.id;
      let bolt = yard.find(anchor);
      if (!bolt) {
        zenith = yard;
        break bb0;
      }
      let cog;
      cog = edge => edge.id !== upland.id;
      zenith = [bolt, ...yard.filter(cog)];
      break bb0;
    }
    zenith = yard;
  }
  let anvil = zenith,
    beacon = data?.find(forge => forge.id === silk) ?? null;
  let crag = beacon,
    dome = <MemoizedFormattedMessage {...{
      id: "codex.recentTasksMenu.filterTooltip",
      defaultMessage: "Filter chats by environment",
      description: "Tooltip explaining the environment filter button"
    }} />;
  let eddy = silk ? "default" : "icon",
    fjord = IntlProvider("mr-1", className);
  let glen = <EnsureDockIconInit {...{
    className: "icon-2xs"
  }} />;
  let hearth = !!silk && crag?.label && <span className="text-sm">{crag.label}</span>;
  let inlet = <span className="flex items-center gap-1.5">
      {glen}
      {hearth}
    </span>;
  let jetty = <AppInitialM asChild={true}>
      {<OptionalTooltip {...{
      tooltipContent: dome,
      children: <ReadLoginRouteQuerySnapshot {...{
        color: "ghost",
        size: eddy,
        className: fjord,
        children: inlet
      }} />
    }} />}
    </AppInitialM>;
  let knob = <div className="pb-1 text-xs tracking-wide text-token-input-placeholder-foreground uppercase">
      {<MemoizedFormattedMessage {...{
      id: "codex.recentTasksMenu.filterCloudTasks",
      defaultMessage: "Filter cloud chats",
      description: "Title for environment filter menu in recent tasks"
    }} />}
    </div>;
  let ledge = !silk,
    mire = () => {
      thorn(null);
      plume(false);
    };
  let nook = <MemoizedFormattedMessage {...{
    id: "codex.recentTasksMenu.filterAll",
    defaultMessage: "All",
    description: "All environments filter option"
  }} />;
  let oxbow = <HeaderHelper11 {...{
    isSelected: ledge,
    onClick: mire,
    children: nook
  }} />;
  let pond = <DropdownMenu.Separator {...{}} />;
  let quarry = nimbus.formatMessage({
    id: "composer.searchEnvironments",
    defaultMessage: "Search environments",
    description: "Search environments placeholder"
  });
  let rapids = event => root(event.currentTarget.value);
  let spur = <DropdownMenu.Section {...{
    className: "my-1",
    children: <DropdownMenu.SearchInput {...{
      placeholder: quarry,
      value: quillow,
      onChange: rapids
    }} />
  }} />;
  let tor = quillow.trim().length > 0 && _isError ? <DropdownMenu.Message {...{
    className: "flex w-full items-center justify-center gap-2",
    children: [<span>
              {<MemoizedFormattedMessage {...{
        id: "codex.environments.searchError",
        defaultMessage: "Failed to search environments.",
        description: "Error shown when environment search fails"
      }} />}
            </span>, <ReadLoginRouteQuerySnapshot {...{
      size: "default",
      color: "outline",
      onClick: () => {
        _refetch();
      },
      children: <MemoizedFormattedMessage {...{
        id: "codex.common.retry",
        defaultMessage: "Retry",
        description: "Retry button"
      }} />
    }} />]
  }} /> : quillow.trim().length === 0 && isError ? <DropdownMenu.Message {...{
    className: "flex w-full items-center justify-center gap-2",
    children: [<span>
              {<MemoizedFormattedMessage {...{
        id: "codex.environments.listError",
        defaultMessage: "Failed to load environments.",
        description: "Error shown when listing environments fails"
      }} />}
            </span>, <ReadLoginRouteQuerySnapshot {...{
      size: "default",
      color: "outline",
      onClick: () => {
        refetch();
      },
      children: <MemoizedFormattedMessage {...{
        id: "codex.common.retry",
        defaultMessage: "Retry",
        description: "Retry button"
      }} />
    }} />]
  }} /> : anvil?.length > 0 ? anvil.map(item => <HeaderHelper11 key={item.id} {...{
    isSelected: item.id === silk,
    onClick: () => {
      thorn(item.id);
      plume(false);
    },
    children: item.label
  }} />) : _isLoading || isLoading ? <VSCODE_EDITOR_ID {...{
    className: "icon-xxs my-2 self-center text-token-description-foreground"
  }} /> : <DropdownMenu.Message {...{
    centered: true,
    children: <MemoizedFormattedMessage {...{
      id: "codex.environments.noEnvironmentsFound",
      defaultMessage: "No environments found",
      description: "Message shown when no Codex environments were found"
    }} />
  }} />;
  let updraft = <DropdownMenu.Section {...{
    className: "flex max-h-[140px] flex-col overflow-y-auto pb-1",
    children: tor
  }} />;
  let verge = <ToggleSortedIdList {...{
    className: "w-[240px]",
    side: "top",
    children: <div className="flex max-w-full flex-col py-1">
            {knob}
            {oxbow}
            {pond}
            {spur}
            {updraft}
          </div>
  }} />;
  return <UsePointerSurfaceInteractionGate {...{
    open: opal,
    onOpenChange: plume,
    children: [jetty, verge]
  }} />;
}
function quiet(gear) {
  let {
      children,
      isSelected,
      onClick
    } = gear,
    hinge = isSelected && "font-medium",
    iron = IntlProvider(lemon, hinge);
  let joint = <span className="min-w-0 flex-1 truncate">{children}</span>;
  let keystone = isSelected ? <AppIconZlt {...{
    className: "icon-2xs shrink-0 opacity-75"
  }} /> : null;
  return <ReadLoginRouteQuerySnapshot {...{
    color: "ghostActive",
    size: "medium",
    className: iron,
    onClick,
    children: [joint, keystone]
  }} />;
}
var rain,
  seed,
  trail,
  urn = esmInit(() => {
    rain = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    countLeadingZeroBits32();
    seed = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    RealtimeVoiceHostId();
    ensureSettingsQueryAtomsInit();
    ensureDropdownMenuInit();
    deferredConversationN();
    ensureComposerEsm_Sut_Init();
    ensureComposerEsm_Hlt_Init();
    ensureDropdownMenuPopoverInit();
    DockIcon();
    AppInitialWY();
    copper();
    willow();
  });
function vine(latch) {
  let {
      filter,
      onSelect
    } = latch,
    motor = canyon[filter],
    [nut, piston] = azure.useState(false),
    rivet = <span>
        {<MemoizedFormattedMessage {...{
        ...motor
      }} />}
      </span>;
  let screw = <AppIconSft {...{
    className: "icon-2xs"
  }} />;
  let torque = <AppInitialM asChild={true}>
      <button type="button" className="flex items-center gap-1 px-2 pt-2 text-sm font-medium text-token-input-placeholder-foreground hover:text-token-foreground">
        {rivet}
        {screw}
      </button>
    </AppInitialM>;
  let valve = filter === "recent",
    axle = () => {
      onSelect("recent");
      piston(false);
    };
  let bracket = <MemoizedFormattedMessage {...{
    id: "codex.recentTasksMenu.recent",
    defaultMessage: "All chats",
    description: "Menu title for recent Codex tasks"
  }} />;
  let clamp = <_n {...{
    isSelected: valve,
    onClick: axle,
    children: bracket
  }} />;
  let drill = filter === "cloud",
    engine = () => {
      onSelect("cloud");
      piston(false);
    };
  let frame = <MemoizedFormattedMessage {...{
    id: "codex.recentTasksMenu.cloud",
    defaultMessage: "Cloud chats",
    description: "Menu title for cloud Codex tasks"
  }} />;
  let gasket = <_n {...{
    isSelected: drill,
    onClick: engine,
    children: frame
  }} />;
  let handle = filter === "local",
    insert = () => {
      onSelect("local");
      piston(false);
    };
  let jacket = <MemoizedFormattedMessage {...{
    id: "codex.recentTasksMenu.local",
    defaultMessage: "Local chats",
    description: "Menu title for local Codex tasks"
  }} />;
  let knurl = <_n {...{
    isSelected: handle,
    onClick: insert,
    children: jacket
  }} />;
  let lever = <ToggleSortedIdList {...{
    className: "w-[220px]",
    onOpenAutoFocus: wind,
    children: <div className="flex flex-col">
            {clamp}
            {gasket}
            {knurl}
          </div>
  }} />;
  return <UsePointerSurfaceInteractionGate {...{
    open: nut,
    onOpenChange: piston,
    children: [torque, lever]
  }} />;
}
function wind(event) {
  event.preventDefault();
}
function _n(mount) {
  let {
      children,
      isSelected,
      onClick
    } = mount,
    nozzle = isSelected && "font-medium",
    platen = IntlProvider(lemon, nozzle);
  let ratchet = <span className="min-w-0 flex-1 truncate">{children}</span>;
  let shim = isSelected ? <AppIconZlt {...{
    className: "icon-2xs shrink-0 opacity-75"
  }} /> : null;
  return <ReadLoginRouteQuerySnapshot {...{
    color: "ghostActive",
    size: "medium",
    className: platen,
    onClick,
    children: [ratchet, shim]
  }} />;
}
var yarrow,
  azure,
  birch,
  canyon,
  dew = esmInit(() => {
    yarrow = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    azure = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    deferredConversationN();
    ensureDropdownMenuPopoverInit();
    ensureAppIconSftInit();
    willow();
    canyon = identity({
      recent: {
        id: "codex.recentTasksMenu.recent",
        defaultMessage: "All chats",
        description: "Menu title for recent Codex tasks"
      },
      cloud: {
        id: "codex.recentTasksMenu.cloud",
        defaultMessage: "Cloud chats",
        description: "Menu title for cloud Codex tasks"
      },
      local: {
        id: "codex.recentTasksMenu.local",
        defaultMessage: "Local chats",
        description: "Menu title for local Codex tasks"
      }
    });
  });
function ever() {
  return <AppInitialLj className="h-48 text-token-input-placeholder-foreground">
      {<MemoizedFormattedMessage {...{
      id: "codex.recentTasksMenu.searchEmpty",
      defaultMessage: "No threads found",
      description: "Empty state for recent tasks menu search results"
    }} />}
    </AppInitialLj>;
}
var field,
  grain,
  haven = esmInit(() => {
    field = reactCompilerRuntime();
    ensureIntlFormattersInit();
    AppInitialUj();
  });
function ink({
  conversation,
  isBackgroundSubagentsEnabled
}) {
  return !ensureSelectWorkspaceKstInit(conversation, isBackgroundSubagentsEnabled);
}
var jadeite = esmInit(() => {
  AppInitialWst();
});
function kernel(tappet, arbor, bushing) {
  let collar = nonEmptyTrimmedStringOrNull(),
    dowel = NativeContextMenuSurface("12346831"),
    flange = CodexPluginActionResult(deferredConversationSQ),
    gib = CodexBrowserSurfaceActionType(Remote6, coral.useMemo(() => arbor.map(item => item.id), [arbor])),
    hub = dowel ? UPDATED_AT_KEY : flange,
    idler = AppInitialEM(),
    jig = coral.useRef(new Map());
  return coral.useMemo(() => {
    let keeper = alpha(leaf({
      tasks: tappet,
      localConversations: arbor,
      pendingWorktrees: collar,
      envForFilter: bushing,
      threadSortKey: hub,
      isBackgroundSubagentsEnabled: idler,
      clientThreadIdsByConversationId: gib
    }), jig.current);
    return jig.current = new Map(keeper.map(item => [item.key, item])), keeper;
  }, [tappet, bushing, gib, idler, arbor, collar, hub]);
}
function leaf({
  tasks = [],
  localConversations,
  pendingWorktrees,
  envForFilter,
  threadSortKey,
  isBackgroundSubagentsEnabled,
  clientThreadIdsByConversationId
}) {
  let lug = localConversations.filter(item => ink({
      conversation: item,
      isBackgroundSubagentsEnabled
    })),
    mandrel = bloom.default(envForFilter ? tasks.filter(item => item.task_status_display?.environment_label === envForFilter.label) : tasks, "id").map(item => {
      let pin = threadSortKey === "updated_at" ? item.updated_at ?? item.created_at ?? 0 : item.created_at ?? item.updated_at ?? 0;
      return {
        kind: "remote",
        key: deferredHostsWQ3(item.id),
        at: pin * 1e3,
        task: item
      };
    }),
    nipple = lug.map(item => {
      let race = threadSortKey === "updated_at" ? item.recencyAt ?? item.updatedAt : item.createdAt;
      Number.isFinite(race) || appActionSidebarProjectRefSchema.error("local conversation has invalid createdAt or updatedAt");
      let sleeve = Number.isFinite(race) ? race : Number.isFinite(item.createdAt) ? item.createdAt : 0;
      return {
        kind: "local",
        key: toLocalSidebarThreadKey(clientThreadIdsByConversationId.get(item.id) ?? item.id),
        at: sleeve,
        conversation: item
      };
    }),
    orifice = pendingWorktrees.flatMap(item => item.clientThreadId == null ? [] : [{
      kind: "local",
      key: toLocalSidebarThreadKey(item.clientThreadId),
      at: item.createdAt,
      conversation: null,
      pendingWorktree: item
    }]);
  return bloom.default([...mandrel, ...nipple, ...orifice], "key").sort((trunnion, boss) => boss.at - trunnion.at);
}
