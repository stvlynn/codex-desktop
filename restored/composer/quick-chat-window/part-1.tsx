// Restored from ref/webview/assets/quick-chat-window-_GO18s8K.js
// Wave FZ — full polished body from `quick-chat-window-_GO18s8K/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 36 (verified 102/137).
// AST split 1/3
/* split-lane-import-depth:1 */


import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { CodexBrowserProfileImportCookieStatus } from "../../analytics/codex-browser-profile-import-cookie-status";
import { CodexBrowserProfileImportPasswordStatus } from "../../analytics/codex-browser-profile-import-password-status";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexRemoteControlRefreshSource } from "../../analytics/codex-remote-control-refresh-source";
import { CodexRemoteSshConnectionAction } from "../../analytics/codex-remote-ssh-connection-action";
import { AppQueryClientProvider } from "../../app/app-query-client-provider";
import { ensureCodexSpriteAssetsInit } from "../../assets/ensure-codex-sprite-assets-init";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { chatgptConversationFlagsAtom, chatgptConversationServerIdAtom, chatgptConversationTitleAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_BI_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_RV_Init as EnsureComposerEsm_RV_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_XP_Init, ensureComposerEsm_ZI_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_A0_Init, ensureConversationPageEsm_GS_Init, ensureConversationPageEsm_Mx_Init } from "../../boundaries/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { _useChatgptComposerControllerI, _useChatgptComposerControllerR, _useChatgptComposerControllerT, useChatgptComposerControllerA as UseChatgptComposerControllerA, useChatgptComposerControllerB as UseChatgptComposerControllerB, useChatgptComposerControllerF, useChatgptComposerControllerI, useChatgptComposerControllerN, useChatgptComposerControllerO, useChatgptComposerControllerP as UseChatgptComposerControllerP, useChatgptComposerControllerR, useChatgptComposerControllerT, useChatgptComposerControllerV as UseChatgptComposerControllerV, useChatgptComposerControllerW, useChatgptComposerControllerX, useChatgptComposerControllerY } from "../../boundaries/use-chatgpt-composer-controller/index";
import { activateConversationSurface } from "../../conversation/activate-conversation-surface";
import { ArtifactReferenceLink } from "../../conversation/artifact-reference-link";
import { isCustomAgentId } from "../../conversation/is-custom-agent-id";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { filterOpenTargets } from "../../files/filter-open-targets";
import { ContextMenuRegistration } from "../../hooks/use-context-menu-registration";
import { FormattedDate } from "../../i18n/formatted-date";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { renderStringOrIntlMessage } from "../../i18n/render-string-or-intl-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconYm } from "../../icons/app-icon-ym";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { buildSiteSettingsPath as BuildSiteSettingsPath } from "../../navigation/site-settings-path";
import { useColdNavigate as UseColdNavigate } from "../../navigation/use-cold-navigate";
import { ProjectMarkerIcon } from "../../projects/project-marker-icon";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { openRightPanel } from "../../shell/open-right-panel";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { FloatingSurfaceCssClass } from "../../ui/floating-surface-css-classes";
import { ensureIconPixelSizeInit, getIconPixelSize } from "../../ui/icon-pixel-size";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { initToolbarBreadcrumb, ToolbarBreadcrumb } from "../../ui/toolbar-breadcrumb";
import { createInMemoryStorageAdapter } from "../../utils/create-in-memory-storage-adapter";
import { identity as Identity } from "../../utils/identity";
import { identityValue } from "../../utils/identity-value";
import { safeZodValue } from "../../utils/safe-zod-value";
import { quickChatDockPositionAtom, quickChatSurfaceCollapsedAtom } from "../../windows/quick-chat-atoms";
import { attachQuickChatProject, mapQuickChatSurfaceMode, markQuickChatConversationStarted, openOrFocusQuickChat, setQuickChatDockPosition, setQuickChatSize } from "../../windows/quick-chat-surface-helpers";

const AppInitialAx: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:quickChatSizeAtom@windows/quick-chat-atoms.ts) */
const AppInitialBx: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:resolveCodexCompanionById@pets/resolve-codex-companion-by-id.ts) */
const AppInitialDr: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:chatgptConversationStatusAtom@boundaries/composer-appscope-atoms.ts) */
const AppInitialGP: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const useQuickChatConversationFilter: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiHT@ui/deferred-ui-ht-2.ts) */
const AppInitialHT: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const EdgeResizeHandle: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:openOrFocusQuickChat@windows/quick-chat-surface-helpers.ts) */
const AppInitialKx: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useChronicleSettingsSection@settings/use-chronicle-settings-section.ts) */
const AppInitialL: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:quickChatHistoryTabAtom@windows/quick-chat-atoms.ts) */
const AppInitialLx: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureSidebarPanelIconInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialLZ: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:remoteHostedPipHiddenThreadIds@conversation/remote-hosted-pip-hidden-thread-ids.ts) */
const AppInitialM: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-mp2.tsx) */
const AppInitialMP: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const AppInitialNn: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const ensureTrafficLightInsetsInit: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredConversationP@conversation/deferred-conversation-p.ts) */
const AppInitialP: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureEmptyStateHeroIconInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialPn: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:branchConversationAtMessage@conversation/branch-conversation-at-message.ts) */
const AppInitialPP: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-qx.tsx) */
const DeferredUiQx: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:usePlatformAwareFeatureGate@hooks/use-platform-aware-feature-gate.ts) */
const AppInitialS: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useNowByMinute@boundaries/quick-chat-window-facades.tsx) */
const AppInitialTL: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureFloatingSurfaceStylesInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialTr: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:siteAnalyticsEventsPath@appgen/site-analytics-paths.ts) */
const AppInitialTT: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-ut.ts) */
const deferredUiUT: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const ensureHistoryMaterializationInit: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useToneSectionSelection@hooks/use-tone-section-selection.ts) */
const AppInitialVl: any = undefined;
/** Wave FZ unresolved companion (missing-export:hooks/invalidate-snapshot-and-refetch-if-required.ts) */
const invalidateSnapshotAndRefetchIfRequired: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:quickChatConversationTitleAtom@boundaries/quick-chat-window-facades.tsx) */
const AppInitialWP: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:openQuickChatSurface@windows/quick-chat-surface-helpers.ts) */
const AppInitialWx: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const ensureDockChevronIconInit: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const InfiniteScrollSentinel: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:markConversationError@conversation/mark-conversation-error.ts) */
const AppInitialYP: any = undefined;
/** Wave FZ unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureCloseGlyphIconInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialZo: any = undefined;
function QuickChatWindowHelper1(cliff) {
  let {
      conversations,
      nowMs,
      onConversationSelect,
      onNewChat
    } = cliff,
    dusk = AppInitialTL(),
    elm = onNewChat == null ? null : <li className="w-full">
          <button className={echo} type="button" onClick={onNewChat}>
            {<AppIconYm {...{
          className: "icon-xs shrink-0 text-token-text-tertiary"
        }} />}
            <span className="min-w-0 flex-1 truncate text-token-text-secondary group-hover:text-token-text-primary">
              {<MemoizedFormattedMessage {...{
            id: "quickChat.newChat",
            defaultMessage: "New chat",
            description: "Action for starting a new Quick Chat conversation"
          }} />}
            </span>
          </button>
        </li>;
  let fern;
  {
    let grove;
    grove = hill => {
      let {
        conversationId,
        recencyAt,
        title
      } = hill;
      return <li key={conversationId} className="w-full">
          <button aria-label={title} className={echo} type="button" onClick={() => {
          onConversationSelect(conversationId, title);
        }}>
            <span className="min-w-0 flex-1 truncate text-token-text-secondary group-hover:text-token-text-primary">
              {title}
            </span>
            <span aria-hidden="true" className="shrink-0 leading-6 text-token-text-tertiary">
              {alpha(recencyAt, nowMs ?? dusk.getTime())}
            </span>
          </button>
        </li>;
    };
    fern = conversations.map(grove);
  }
  return <ul className="flex w-full flex-col gap-1">
      {elm}
      {fern}
    </ul>;
}
function alpha(isle, juniper) {
  let lagoon = bravo(new Date(juniper), new Date(isle));
  return lagoon === 0 ? <MemoizedFormattedMessage {...{
    id: "quickChat.history.today",
    defaultMessage: "Today",
    description: "Date label for a Quick Chat conversation updated today"
  }} /> : lagoon === 1 ? <MemoizedFormattedMessage {...{
    id: "quickChat.history.yesterday",
    defaultMessage: "Yesterday",
    description: "Date label for a Quick Chat conversation updated yesterday"
  }} /> : lagoon > 1 && lagoon < 7 ? <MemoizedFormattedMessage {...{
    id: "quickChat.history.daysAgo",
    defaultMessage: "{days}d",
    description: "Compact number of days ago for a Quick Chat conversation",
    values: {
      days: lagoon
    }
  }} /> : <FormattedDate {...{
    value: isle,
    day: "numeric",
    month: "short"
  }} />;
}
function bravo(meadow, nest) {
  let oak = new Date(meadow.getFullYear(), meadow.getMonth(), meadow.getDate()),
    petal = new Date(nest.getFullYear(), nest.getMonth(), nest.getDate());
  return Math.round((oak.getTime() - petal.getTime()) / 864e5);
}
var copper,
  delta,
  echo,
  falcon = esmInit(() => {
    copper = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ArtifactReferenceLink();
    ensureDockChevronIconInit();
    echo = "group -mx-[var(--padding-row-x)] flex w-[calc(100%+2*var(--padding-row-x))] cursor-interaction items-center gap-3 rounded-xl px-[var(--padding-row-x)] py-[var(--padding-row-y)] text-left transition-transform duration-basic ease-out hover:bg-token-list-hover-background focus-visible:outline-2 focus-visible:outline-token-focus-border active:scale-[0.99] motion-reduce:transition-none motion-reduce:active:scale-100";
  }),
  gamma,
  harbor = esmInit(() => {
    ensureIntlFormattersInit();
    gamma = Identity({
      nuxTitle: {
        id: "quickChat.nux.title",
        defaultMessage: "Ask quick questions with Chat",
        description: "Title introducing the classic Chat experience in the sidebar coachmark and Quick Chat popover empty state. Chat refers to the classic ChatGPT conversation experience."
      },
      recentChats: {
        id: "quickChat.emptyState.recentChats",
        defaultMessage: "Recent chats",
        description: "Label for recent Quick Chat history shown in an empty state heading and first-open header action"
      }
    });
  });
function QuickChatWindowHelper4(quiet) {
  let {
      onViewHistory
    } = quiet,
    rain = <AppInitialP aria-hidden={true} className="mb-5 size-6 text-token-text-secondary" />;
  let seed = <h3 id="quick-chat-welcome-heading" className="text-base font-semibold tracking-tight text-token-text-secondary">
      {<MemoizedFormattedMessage {...{
      ...gamma.nuxTitle
    }} />}
    </h3>;
  let trail = <p className="mt-2 max-w-md text-sm text-balance text-token-text-tertiary">
      {<MemoizedFormattedMessage {...{
      id: "quickChat.emptyState.welcome.description.startOrResume",
      defaultMessage: "Use the classic Chat experience to get answers and explore ideas. Start a new chat or pick up a past ChatGPT conversation here.",
      description: "Body copy in the first-open Quick Chat popover empty state. Explains that the user can start a new classic Chat conversation or resume a past ChatGPT conversation."
    }} />}
    </p>;
  let urn = <MemoizedFormattedMessage {...{
    id: "quickChat.emptyState.welcome.viewHistory.button.label",
    defaultMessage: "View chat history",
    description: "Outlined button in the first-open Quick Chat popover empty state. Opens the user's full classic ChatGPT conversation history."
  }} />;
  return <section aria-labelledby="quick-chat-welcome-heading" className="flex min-h-full flex-1 flex-col items-center justify-center px-6 text-center">
      {rain}
      {seed}
      {trail}
      {<ReadLoginRouteQuerySnapshot {...{
      className: "mt-5",
      color: "outline",
      onClick: onViewHistory,
      children: urn
    }} />}
    </section>;
}
var indigo,
  jade,
  kite = esmInit(() => {
    indigo = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    AppInitialM();
    harbor();
  });
function lemon({
  optimisticConversationIdBySourceId,
  optimisticTitleByConversationId,
  recentFallbackTitle,
  sourceTargets
}) {
  return sourceTargets.flatMap(item => {
    if (item.kind !== "optimistic" && item.conversation.conversation_origin === "tpp") return [];
    let vine = ensureComposerEsm_ZI_Init(item.conversationId),
      wind = item.kind === "optimistic" ? optimisticConversationIdBySourceId.get(item.conversationId) ?? vine : vine;
    return [{
      conversationId: wind,
      recencyAt: item.recencyAt,
      title: (item.kind === "optimistic" ? optimisticTitleByConversationId.get(wind) : item.conversation.title)?.trim() || recentFallbackTitle
    }];
  });
}
function marble(yarrow, azure = 3) {
  return nickel(yarrow).slice(0, azure);
}
function nickel(birch) {
  return [...birch].sort((canyon, dew) => dew.recencyAt - canyon.recencyAt);
}
var $t = esmInit(() => {
  ensureComposerEsm_BI_Init();
});
function QuickChatWindowHelper8(ever) {
  let {
      conversationId,
      conversations,
      nowMs,
      variant,
      onConversationSelect,
      onViewAll
    } = ever,
    field = CodexBrowserSurfaceActionType(AppInitialGP, conversationId),
    grain = usePrefersReducedMotion(),
    haven = marble(conversations);
  let ink = haven,
    jadeite = field.length > 0 || variant === "recent" && ink.length === 0,
    kernel = jadeite ? null : <ensureIntlFormattersInit.div {...{
      className: "flex min-h-full flex-1 flex-col text-base",
      initial: grain ? false : {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      exit: grain ? undefined : {
        opacity: 0
      },
      transition: grain ? undefined : {
        type: "spring",
        duration: 0.3
      },
      children: variant === "welcome" ? <QuickChatWindowHelper4 {...{
        onViewHistory: onViewAll
      }} /> : <section aria-labelledby="quick-chat-recent-heading" className="mt-auto pb-8">
                <h3 id="quick-chat-recent-heading" className="mb-1 leading-9 font-normal text-token-text-tertiary">
                  {<MemoizedFormattedMessage {...{
            ...gamma.recentChats
          }} />}
                </h3>
                {<QuickChatWindowHelper1 {...{
          conversations: ink,
          nowMs,
          onConversationSelect
        }} />}
                <button className="mt-1 flex cursor-interaction items-center leading-9 text-token-text-tertiary hover:text-token-text-primary focus-visible:outline-token-focus-border" type="button" onClick={onViewAll}>
                  {<MemoizedFormattedMessage {...{
            id: "quickChat.emptyState.viewAll",
            defaultMessage: "See all",
            description: "Button for opening the full Quick Chat conversation history"
          }} />}
                </button>
              </section>
    }} />;
  return <Identity {...{
    initial: false,
    children: kernel
  }} />;
}
var onyx,
  pearl,
  quartz = esmInit(() => {
    onyx = reactCompilerRuntime();
    useBrowserExtensionPluginSetupQuery();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    ensureClientCoordinationServiceInit();
    AppInitialYP();
    falcon();
    kite();
    $t();
    harbor();
  });
function QuickChatWindowHelper9(leaf) {
  let {
      ancestors,
      children,
      isActive,
      minimizeLabel,
      onMinimize,
      title,
      variant
    } = leaf,
    maple = useIntl(),
    nimbus = ContextMenuRegistration(),
    opal;
  {
    let dome = ancestors.slice(1);
    opal = dome.length === 0 ? ancestors : [ancestors[0], {
      id: "quick-chat-collapsed-breadcrumbs",
      content: <DropdownMenuPopover {...{
        align: "start",
        contentWidth: "xs",
        sideOffset: 4,
        triggerButton: <ReadLoginRouteQuerySnapshot {...{
          "aria-label": maple.formatMessage({
            id: "quickChat.entityBreadcrumbs.showParents",
            defaultMessage: "Show parent pages",
            description: "Accessible label for showing hidden parent entity pages in Quick Chat"
          }),
          color: "ghost",
          size: "toolbar",
          children: <AppIconQI {...{
            className: "icon-xs"
          }} />
        }} />,
        children: dome.map(on)
      }} />
    }];
  }
  let plume = opal,
    quillow = !isActive,
    root = variant === "floating" ? "bg-token-dropdown-background" : "bg-token-editor-background",
    silk = IntlProvider("absolute inset-0 z-10 flex flex-col overflow-hidden text-token-foreground focus:outline-none", root);
  let thorn = isActive ? undefined : true,
    upland = variant === "floating" ? true : undefined,
    vista = variant === "floating" && "cursor-grab touch-none select-none active:cursor-grabbing",
    wisp = variant === "window" && "draggable",
    yonder = IntlProvider("flex h-toolbar shrink-0 items-center gap-2 px-3", vista, wisp);
  let zenith = variant === "window" ? {
    paddingInlineEnd: Math.max(nimbus.right, 12),
    paddingInlineStart: Math.max(nimbus.left, 12)
  } : undefined;
  let anvil = <div className="-ml-1 min-w-0 flex-1">
      {<ToolbarBreadcrumb {...{
      textSm: true,
      ancestors: plume,
      current: title
    }} />}
    </div>;
  let beacon = onMinimize != null && minimizeLabel != null ? <ReadLoginRouteQuerySnapshot {...{
    "aria-label": minimizeLabel,
    color: "ghostActive",
    onClick: onMinimize,
    size: "icon",
    children: <EnsureComposerEsm_RV_Init {...{
      className: "icon-xs"
    }} />
  }} /> : null;
  let crag = <header data-quick-chat-drag-handle={upland} className={yonder} style={zenith}>
      {anvil}
      {beacon}
    </header>;
  return <section aria-hidden={quillow} aria-label={title} aria-modal={true} autoFocus={true} className={silk} inert={thorn} role="dialog" tabIndex={-1}>
      {crag}
      {children}
    </section>;
}
function on(eddy) {
  return <DropdownMenu.Item key={eddy.id} {...{
    onSelect: eddy.onClick,
    children: eddy.label
  }} />;
}
var river,
  slate,
  timber = esmInit(() => {
    river = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureIntlFormattersInit();
    ensureTrafficLightInsetsInit();
    ensureSettingsQueryAtomsInit();
    ensureDropdownMenuInit();
    initToolbarBreadcrumb();
    openRightPanel();
    isRemoteControlConnectionFailedError();
  });
function umbra(fjord, glen, hearth, inlet) {
  return fjord == null ? {
    x: Math.round((inlet - glen.width) / 2),
    y: Math.round((hearth - glen.height) / 2)
  } : {
    x: fjord === "bottom-left" ? 16 : inlet - glen.width - 16,
    y: hearth - glen.height - 16
  };
}
function violet(jetty, knob, ledge) {
  return yellow.reduce((accumulator, current) => {
    let mire = umbra(accumulator, jetty, knob, ledge);
    return xenon(jetty, umbra(current, jetty, knob, ledge)) < xenon(jetty, mire) ? current : accumulator;
  });
}
function willow(nook, oxbow, pond, quarry, rapids, spur, tor) {
  let updraft = umbra(nook, pond, spur, tor).x + quarry,
    verge = oxbow === "left" ? updraft + pond.width - rapids : updraft;
  return Math.min(tor - rapids - 16, Math.max(16, verge)) - umbra(nook, {
    ...pond,
    width: rapids
  }, spur, tor).x;
}
function xenon(weir, yard) {
  return (weir.left - yard.x) ** 2 + (weir.top - yard.y) ** 2;
}
var yellow,
  zinc = esmInit(() => {
    yellow = [null, "bottom-left", "bottom-right"];
  });
function QuickChatWindowHelper14({
  edge = "left",
  getCurrentSize,
  maximumSize,
  minimumSize,
  onResizeEnd,
  onResizingChange,
  setSize
}) {
  let anchor = getIconPixelSize(),
    bolt = basalt.useRef(null),
    cog = event => {
      let forge = bolt.current;
      if (forge == null || forge.pointerId !== event.pointerId) return;
      event.preventDefault();
      let gear = {
        height: amber(forge.startSize.height - (ensureIconPixelSizeInit(event.clientY, anchor) - forge.startPointer.y), minimumSize.height, maximumSize.height),
        width: amber(forge.startSize.width + (edge === "left" ? -1 : 1) * (ensureIconPixelSizeInit(event.clientX, anchor) - forge.startPointer.x), minimumSize.width, maximumSize.width)
      };
      forge.didMove ||= gear.height !== forge.startSize.height || gear.width !== forge.startSize.width;
      forge.lastSize = gear;
      setSize(gear);
    },
    disc = (event, hinge) => {
      let iron = bolt.current;
      iron?.pointerId === event.pointerId && (bolt.current = null, onResizingChange?.(false), hinge && iron.didMove && onResizeEnd?.(iron.lastSize));
    };
  return <div aria-hidden={true} className={IntlProvider("group absolute top-0 z-50 flex size-4 touch-none select-none", edge === "left" ? "left-0 cursor-nwse-resize" : "right-0 cursor-nesw-resize")} onLostPointerCapture={joint => {
    disc(joint, false);
  }} onPointerCancel={keystone => {
    cog(keystone);
    disc(keystone, true);
  }} onPointerDown={event => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture?.(event.pointerId);
    let latch = getCurrentSize();
    bolt.current = {
      didMove: false,
      lastSize: latch,
      pointerId: event.pointerId,
      startPointer: {
        x: ensureIconPixelSizeInit(event.clientX, anchor),
        y: ensureIconPixelSizeInit(event.clientY, anchor)
      },
      startSize: latch
    };
    onResizingChange?.(true);
  }} onPointerMove={cog} onPointerUp={motor => {
    cog(motor);
    disc(motor, true);
  }}>
      <div className="pointer-events-none m-auto h-px w-2 rotate-45 bg-token-foreground/25 opacity-0 group-hover:opacity-100 group-active:opacity-100" />
    </div>;
}
function amber(nut, piston, rivet) {
  return Math.min(Math.max(nut, piston), rivet);
}
var basalt,
  cedar,
  daisy = esmInit(() => {
    ensureComposerEsm_Tft_Init();
    basalt = commonJsInit(react(), 1);
    identityValue();
  });
function QuickChatWindowHelper16(screw) {
  let {
      currentSize,
      defaultSize,
      heightLabel,
      maximumSize,
      minimumSize,
      onResize,
      onResizeEnd,
      onResizingChange,
      widthLabel
    } = screw,
    torque = flint.map(item => <EdgeResizeHandle key={item} {...{
      ariaLabel: widthLabel,
      defaultSize: defaultSize.width,
      edge: item,
      getCurrentSize: () => currentSize.width,
      maximumSize: maximumSize.width,
      minimumSize: minimumSize.width,
      onResizeEnd: engine => {
        onResizeEnd({
          ...currentSize,
          width: engine
        });
      },
      onResizingChange,
      setSize: frame => {
        onResize(item, {
          ...currentSize,
          width: frame
        });
      }
    }} />);
  let valve = () => currentSize.height;
  let axle = gasket => {
    onResizeEnd({
      ...currentSize,
      height: gasket
    });
  };
  let bracket = handle => {
    onResize("right", {
      ...currentSize,
      height: handle
    });
  };
  let clamp = <EdgeResizeHandle {...{
    ariaLabel: heightLabel,
    defaultSize: defaultSize.height,
    edge: "top",
    getCurrentSize: valve,
    maximumSize: maximumSize.height,
    minimumSize: minimumSize.height,
    onResizeEnd: axle,
    onResizingChange,
    setSize: bracket
  }} />;
  let drill = flint.map(item => <QuickChatWindowHelper14 key={item} {...{
    edge: item,
    getCurrentSize: () => currentSize,
    maximumSize,
    minimumSize,
    onResizeEnd,
    onResizingChange,
    setSize: insert => {
      onResize(item, insert);
    }
  }} />);
  return <>
      {torque}
      {clamp}
      {drill}
    </>;
}
var _n,
  ember,
  flint,
  garnet = esmInit(() => {
    _n = reactCompilerRuntime();
    AppInitialLZ();
    daisy();
    flint = ["left", "right"];
  });
function QuickChatWindowHelper17(jacket) {
  let {
      onClose,
      portalContainer,
      request,
      variant
    } = jacket,
    knurl = useIntl(),
    [lever, mount] = jasper.useState(request.selectedIndex),
    nozzle = request.images[lever],
    platen = nozzle?.src ?? "",
    ratchet = request.imageAssetContext?.conversationId ?? lotus,
    shim = request.imageAssetContext?.imageAssetResolver,
    tappet = {
      src: platen,
      conversationId: ratchet,
      imageAssetResolver: shim,
      shouldLoadFileDataUrl: false
    };
  let {
    previewSrc
  } = AppInitialVl(tappet);
  if (nozzle == null) return null;
  let arbor = lever + 1,
    bushing = nozzle.title ?? knurl.formatMessage({
      id: "quickChat.imageLightbox.imageAlt",
      defaultMessage: "Image {imageNumber}",
      description: "Fallback alt text for an image opened in the Quick Chat image lightbox"
    }, {
      imageNumber: arbor
    });
  let collar = bushing,
    dowel = nozzle.destinationUrl == null ? undefined : {
      href: nozzle.destinationUrl,
      initiator: "markdown_link_click",
      children: nozzle.attribution == null ? <MemoizedFormattedMessage {...{
        id: "quickChat.imageLightbox.openSource",
        defaultMessage: "Open image source",
        description: "Link in the Quick Chat image lightbox that opens the source website for the image"
      }} /> : <MemoizedFormattedMessage {...{
        id: "quickChat.imageLightbox.openAttributedSource",
        defaultMessage: "View on {source}",
        description: "Link in the Quick Chat image lightbox that opens the named source website for the image",
        values: {
          source: nozzle.attribution
        }
      }} />
    };
  let flange = nozzle.title ?? undefined,
    gib = variant === "window" ? "all" : "top-and-sides",
    hub = lever >= request.images.length - 1 ? undefined : () => {
      mount(lever + 1);
    };
  let idler = lug => {
    lug || onClose();
  };
  let jig = lever === 0 ? undefined : () => {
    mount(lever - 1);
  };
  let keeper = previewSrc ?? mint;
  return <UseColdNavigate {...{
    alt: collar,
    bottomExternalLink: dowel,
    caption: flange,
    containedInPortal: true,
    containerResizeEdges: gib,
    imageReferrerPolicy: "no-referrer",
    onCloseAutoFocus: hazel,
    onNextImage: hub,
    onOpenChange: idler,
    onPreviousImage: jig,
    open: true,
    portalContainer,
    showDownload: false,
    src: keeper
  }} />;
}
function hazel(event) {
  event.preventDefault();
}
var ivory,
  jasper,
  kelp,
  lotus,
  mint,
  nova = esmInit(() => {
    ivory = reactCompilerRuntime();
    strongMarkerFromOptions();
    jasper = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    filterOpenTargets();
    AppInitialL();
    lotus = resolveScienceModelLabel("quick-chat:image-lightbox");
    mint = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
  });
function olive(mandrel, nipple) {
  return {
    height: ensureIconPixelSizeInit(mandrel.height, nipple),
    width: ensureIconPixelSizeInit(mandrel.width, nipple),
    x: ensureIconPixelSizeInit(mandrel.x, nipple),
    y: ensureIconPixelSizeInit(mandrel.y, nipple)
  };
}
var prism = esmInit(() => {
  identityValue();
});
function quill(orifice, pin, race) {
  let sleeve = usePrefersReducedMotion(),
    trunnion = getIconPixelSize(),
    boss = () => race ? trunnion : 1;
  let cam = vapor.useEffectEvent(boss),
    detent = vapor.useRef(null),
    eccentric = vapor.useRef(null),
    follower = vapor.useRef(null),
    guide = vapor.useRef(null),
    helix = vapor.useRef(null),
    impeller = vapor.useRef(topaz),
    [journal, kingpin] = vapor.useState(false),
    land = () => {
      if (orifice === "top") {
        let zener = detent.current;
        zener != null && (zener.scrollTop = 0);
        return;
      }
      let pad = detent.current,
        quillshaft = eccentric.current,
        roller = follower.current,
        spindle = guide.current;
      if (pad == null || quillshaft == null || spindle == null) return;
      let thrust = "following",
        yoke = pin === "anchor-latest",
        baffle = null,
        capstan = null,
        diaphragm = new WeakSet(),
        elbow = () => Number.parseFloat(spindle.style.height || "0"),
        ferrule = () => Math.max(0, pad.scrollHeight - pad.clientHeight),
        grommet = () => {
          if (roller == null) {
            pad.style.removeProperty("--quick-chat-footer-height");
            return;
          }
          let alphaPrime = `${Math.ceil(ensureIconPixelSizeInit(roller.getBoundingClientRect().height, cam()))}px`;
          pad.style.getPropertyValue("--quick-chat-footer-height") !== alphaPrime && pad.style.setProperty("--quick-chat-footer-height", alphaPrime);
        },
        header = () => {
          kingpin(pad.scrollTop < ferrule() - yarn);
        },
        injector = bravoPrime => {
          let copperPrime = Math.max(0, Math.ceil(bravoPrime));
          elbow() !== copperPrime && (spindle.style.height = `${copperPrime}px`);
        },
        jumper = () => {
          if (capstan == null) return;
          let deltaPrime = quillshaft.scrollHeight;
          injector(elbow() - (deltaPrime - capstan));
          capstan = deltaPrime;
        },
        kerf = (echoPrime, falconPrime) => {
          let gammaPrime = falconPrime === undefined ? false : falconPrime;
          thrust = echoPrime === "smooth" ? "settling" : "following";
          baffle = null;
          gammaPrime && (capstan = null, injector(0));
          let harborPrime = ferrule(),
            indigoPrime = echoPrime === "auto" ? yarn : zephyr;
          Math.abs(pad.scrollTop - harborPrime) > indigoPrime && pad.scrollTo({
            behavior: echoPrime,
            top: harborPrime
          });
          header();
        };
      impeller.current = kerf;
      let louver = (jadePrime, kitePrime) => {
          let lemonPrime = pad.scrollTop + ensureIconPixelSizeInit(jadePrime.getBoundingClientRect().top - pad.getBoundingClientRect().top, cam()),
            marblePrime = Math.max(0, lemonPrime - acorn),
            nickelPrime = marblePrime - Math.max(0, pad.scrollHeight - pad.clientHeight);
          nickelPrime > 0 && injector(elbow() + nickelPrime);
          thrust = kitePrime === "smooth" ? "anchoring" : "anchored";
          baffle = jadePrime;
          capstan = quillshaft.scrollHeight;
          Math.abs(pad.scrollTop - marblePrime) > zephyr && pad.scrollTo({
            behavior: kitePrime,
            top: marblePrime
          });
          header();
        },
        manifold = onyxPrime => {
          let pearlPrime = new Set();
          for (let {
            addedNodes
          } of onyxPrime) for (let slatePrime of addedNodes) if (slatePrime instanceof HTMLElement) {
            slatePrime.matches(wheat) && pearlPrime.add(slatePrime);
            for (let timberPrime of slatePrime.querySelectorAll(wheat)) pearlPrime.add(timberPrime);
          }
          let quartzPrime = Array.from(pearlPrime).filter(item => !diaphragm.has(item));
          for (let umbraPrime of quartzPrime) diaphragm.add(umbraPrime);
          if (quartzPrime.length === 0) return;
          let riverPrime = yoke ? quartzPrime.at(-1) : quartzPrime.find(sage);
          if (riverPrime != null) {
            yoke = false;
            louver(riverPrime, sleeve ? "auto" : "smooth");
            return;
          }
          thrust === "following" && kerf("auto");
        },
        nip = () => {
          grommet();
          jumper();
          thrust === "following" ? kerf("auto") : thrust === "anchored" && baffle?.isConnected ? louver(baffle, "auto") : header();
        },
        outlet = () => {
          thrust = "free";
          baffle = null;
        },
        packing = event => {
          coral.has(event.key) && outlet();
        },
        reducer = () => {
          if (thrust === "anchoring" || thrust === "settling") {
            header();
            return;
          }
          if (thrust === "free" && pad.scrollTop >= ferrule() - yarn) {
            kerf("auto");
            return;
          }
          header();
        },
        strainer = () => {
          thrust === "anchoring" ? thrust = "anchored" : thrust === "settling" && kerf("auto");
        },
        tee = Array.from(quillshaft.querySelectorAll(wheat));
      for (let violetPrime of tee) diaphragm.add(violetPrime);
      grommet();
      let union = helix.current;
      if (helix.current = null, yoke) {
        let willowPrime = tee.at(-1) ?? null;
        willowPrime == null ? kerf("auto", true) : (yoke = false, louver(willowPrime, sleeve ? "auto" : "smooth"));
      } else union?.mode === "free" ? (thrust = "free", pad.scrollTop = Math.min(union.scrollTop, ferrule()), header()) : (union?.mode === "anchored" || union?.mode === "anchoring") && union.anchoredTurn?.isConnected ? louver(union.anchoredTurn, "auto") : kerf("auto", true);
      let vent = typeof MutationObserver > "u" ? null : new MutationObserver(manifold);
      vent?.observe(quillshaft, {
        childList: true,
        subtree: true
      });
      let wye = typeof ResizeObserver > "u" ? null : new ResizeObserver(nip);
      return wye?.observe(quillshaft), roller != null && wye?.observe(roller), wye?.observe(pad), pad.addEventListener("keydown", packing), pad.addEventListener("pointerdown", outlet, {
        passive: true
      }), pad.addEventListener("scroll", reducer, {
        passive: true
      }), pad.addEventListener("scrollend", strainer), pad.addEventListener("touchmove", outlet, {
        passive: true
      }), pad.addEventListener("wheel", outlet, {
        passive: true
      }), () => {
        helix.current = {
          anchoredTurn: baffle,
          mode: thrust,
          scrollTop: pad.scrollTop
        };
        impeller.current = reef;
        vent?.disconnect();
        wye?.disconnect();
        pad.style.removeProperty("--quick-chat-footer-height");
        injector(0);
        pad.removeEventListener("keydown", packing);
        pad.removeEventListener("pointerdown", outlet);
        pad.removeEventListener("scroll", reducer);
        pad.removeEventListener("scrollend", strainer);
        pad.removeEventListener("touchmove", outlet);
        pad.removeEventListener("wheel", outlet);
      };
    };
  let mesh;
  mesh = [pin, orifice, sleeve];
  vapor.useLayoutEffect(land, mesh);
  let neck = () => {
    impeller.current(sleeve ? "auto" : "smooth");
  };
  return {
    contentRef: eccentric,
    footerRef: follower,
    scrollToLatest: neck,
    showScrollToLatest: journal,
    spacerRef: guide,
    viewportRef: detent
  };
}
function reef() {}
function sage(xenonPrime) {
  return xenonPrime.dataset.chatgptConversationTurnId === bloom;
}
function topaz() {}
var ultra,
  vapor,
  wheat,
  yarn,
  zephyr,
  acorn,
  bloom,
  coral,
  drift = esmInit(() => {
    ultra = reactCompilerRuntime();
    vapor = commonJsInit(react(), 1);
    identityValue();
    ensureClientCoordinationServiceInit();
    wheat = '[data-chatgpt-conversation-turn="true"]';
    yarn = 8;
    zephyr = 0.5;
    acorn = 64;
    bloom = "pending-chatgpt-submit";
    coral = new Set(["ArrowDown", "ArrowUp", "End", "Home", "PageDown", "PageUp", " "]);
  }),
  eagle,
  frost,
  glide,
  honey,
  iris = esmInit(() => {
    eagle = "_headerScrollFade_1syow_1";
    frost = "_windowScrollMask_1syow_16";
    glide = "_scrollContent_1syow_45";
    honey = {
      headerScrollFade: eagle,
      windowScrollMask: frost,
      scrollContent: glide
    };
  });
