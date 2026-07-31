// Restored from ref/webview/assets/plugin-detail-page-CS2mOWnD.js
// Wave GA — full polished body from `plugin-detail-page-CS2mOWnD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 122 (verified 228/347).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 4/39
/* split-lane-import-depth:1 */

import { NativeDesktopAppByBundleId } from "../../account/native-desktop-app-by-bundle-id";
import { ensureUsageSettingsAccessInit, useUsageSettingsAccess } from "../../account/use-usage-settings-access";
import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { ChatgptTrustedContactEntryPoint } from "../../analytics/chatgpt-trusted-contact-entry-point";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginClickTarget } from "../../analytics/codex-plugin-click-target";
import { CodexPluginMarketplaceSurface } from "../../analytics/codex-plugin-marketplace-surface";
import { CODEX_SKILL_TRY_CLICKED_TYPE } from "../../analytics/codex-skill-try-clicked-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { AppCardAdminDisabledBadge } from "../../apps/app-card-admin-disabled-badge";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { useExternalBrowserUseGate } from "../../boundaries/browser-use-gate-facades";
import { ensureComposerEsm_AG_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Wlt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_FR_Init, ensureConversationPageEsm_Jj_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Navigate, useLocation, useNavigate } from "../../boundaries/react-router-navigation";
import { ensureShareInviteAutocompleteInit, ShareInviteAutocomplete } from "../../boundaries/share-invite-autocomplete/index";
import { toastAtom } from "../../boundaries/toast-atom";
import { ensurePluginMentionPromptInit, firstNonEmptyTrimmedString } from "../../browser/browser-use-helpers";
import { chatgpt2 } from "../../browser/chatgpt2";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { buildAppUri } from "../../composer/app-plugin-uri";
import { composerNavigation } from "../../composer/composer-navigation";
import { getPluginDisplayName } from "../../composer/get-plugin-display-name";
import { getPluginShortDescription } from "../../composer/get-plugin-short-description";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { isOpenaiBundledId } from "../../config/is-openai-bundled-id";
import { SUPPORTED_NODE_PLATFORMS } from "../../config/supported-node-platforms";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { applyActive } from "../../conversation/apply-active";
import { chatgptProjectQueryKey } from "../../conversation/chatgpt-conversation-query-keys";
import { ConversationMarkdownText } from "../../conversation/conversation-markdown-text";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { ensureWebviewResumeConversationInit } from "../../conversation/ensure-webview-resume-conversation-init";
import { findCachedConversationItem } from "../../conversation/find-cached-conversation-item";
import { groupActivityItemsWithSourceIndex } from "../../conversation/group-activity-items-with-source-index";
import { toggleConversationPinned } from "../../conversation/toggle-conversation-pinned";
import { walkAssistantBranchPath } from "../../conversation/walk-assistant-branch-path";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DEVELOPERS_OPENAI_COM_CODEX_SKILLS_URL, GITHUB_COM_OPENAI_PLUGINS_URL } from "../../docs/codex-doc-urls";
import { lazyWithSuspense } from "../../environments/lazy-with-suspense";
import { remoteControlHostKey } from "../../environments/remote-host-keys";
import { areVisualizationFeatureGatesEnabled } from "../../feature-gates/are-visualization-feature-gates-enabled";
import { repoWorktreeWorkspaceRoots } from "../../git/repo-worktree-workspace-roots";
import { ensureGitRepoWatchAtomsInit } from "../../hooks/git-method-query-atoms";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { useGitRepoLiveQuery } from "../../hooks/use-git-repo-live-query";
import { ensureUseHomeDirectoryInit, useHomeDirectory } from "../../hooks/use-home-directory";
import { useHostWorkspaceRoot } from "../../hooks/use-host-workspace-root";
import { useInfiniteListQuery } from "../../hooks/use-infinite-list-query";
import { ensureUsePluginScheduledTasksInit, usePluginScheduledTasksN } from "../../hooks/use-plugin-scheduled-tasks";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { ensureUseRecommendedSkillsInit, useRecommendedSkills } from "../../hooks/use-recommended-skills";
import { useResizeObserver } from "../../hooks/use-resize-observer";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAZ } from "../../icons/app-icon-az";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconCct } from "../../icons/app-icon-cct";
import { AppIconDG } from "../../icons/app-icon-dg";
import { AppIconId } from "../../icons/app-icon-id";
import { AppIconIt } from "../../icons/app-icon-it";
import { AppIconKG } from "../../icons/app-icon-kg";
import { AppIconL0 } from "../../icons/app-icon-l0";
import { AppIconLV } from "../../icons/app-icon-lv";
import { AppIconPZ } from "../../icons/app-icon-pz";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { ensureTeamIconInit, TeamIcon } from "../../icons/team-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { findSidebarSectionElement, readScrollTop, scrollAppActionTargetTo, writeScrollTop } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { getRouteContextValue } from "../../navigation/get-route-context-value";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { declineAppshotTaskAndContinue } from "../../onboarding/decline-appshot-task-and-continue";
import { AVATAR_OVERLAY_SURFACE_STACK_IDS } from "../../overlay/avatar-overlay-surface-stack-ids";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { listHooksForHostQueryAtom } from "../../settings/hooks-query-atoms";
import { readCodexHomeFromQuery } from "../../settings/read-codex-home-from-query";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { usePetsSettingsController } from "../../settings/use-pets-settings-controller";
import { useToggleMcpServerEnabledMutation } from "../../settings/use-toggle-mcp-server-enabled-mutation";
import { buildVscodeQueryKey } from "../../settings/vscode-query-key";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { parseSkillsManagePath } from "../../skills/parse-skills-manage-path";
import { partitionPluginSkills } from "../../skills/partition-plugin-skills";
import { ensureRecommendedSkillStatsigOverridesInit, getRecommendedSkillStatsigOverride, useRecommendedSkillStatsigOverrides } from "../../skills/recommended-skill-statsig-overrides";
import { ensureSkillsPageHelpersInit, usePluginsFeatureEnabled } from "../../skills/skills-page-helpers";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { usePluginDetailQuery } from "../../skills/use-plugin-detail-query";
import { AriaIconBadge } from "../../ui/aria-icon-badge";
import { Badge, ensureBadgeInit } from "../../ui/badge";
import { CircularProgressRing } from "../../ui/circular-progress-ring";
import { CompoundButtonMenu } from "../../ui/compound-button-menu";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiU } from "../../ui/deferred-ui-u";
import { DETAIL_PAGE_STACK_CLASS, DetailPage, DetailPageSection, DetailPageSectionHeader, ensureDetailPageInit, ensureDetailPageSectionHeaderInit, ensureDetailPageSectionInit } from "../../ui/detail-page";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { ght } from "../../ui/ght";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import { StackedCardHeader } from "../../ui/stacked-card-header";
import { initToolbarBreadcrumb, ToolbarBreadcrumb } from "../../ui/toolbar-breadcrumb";
import { coalesceTruthy } from "../../utils/coalesce-truthy";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { compareSemver } from "../../utils/compare-semver";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { hasInputItemsField } from "../../utils/has-input-items-field";
import { identity } from "../../utils/identity";
import { isBareAllowedPermission } from "../../utils/is-bare-allowed-permission";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { replaceInMemoryStorageEntries } from "../../utils/replace-in-memory-storage-entries";
import { reuseArrayIfShallowEqual } from "../../utils/reuse-array-if-shallow-equal";
import { resetStoreAtomValueSf } from "../../utils/set-store-atom-value";
import { titleCaseColonSegments } from "../../utils/title-case-colon-segments";
import { ensurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { ensureZodRuntime } from "../../vendor/zod";
import { installModalBrowserExtensionMessages } from "../install-modal-browser-extension-messages";
import { isAvailabilityDisabledByAdmin } from "../is-availability-disabled-by-admin";
import { isOpenaiCuratedMarketplaceToken } from "../is-openai-curated-marketplace-token";
import { isPluginInstallModalOpenInLocationState } from "../is-plugin-install-modal-open-in-location-state";
import { matchConnectorIconKeyFromPlugin } from "../match-connector-icon-key-from-plugin";
import { matchesOptionalHostPluginIds } from "../matches-optional-host-plugin-ids";
import { mergeDirectoryPluginApps } from "../merge-directory-plugin-apps";
import { pluginManagePathForCatalogEntry } from "../plugin-manage-path-for-catalog-entry";
import { pluginMarketplaceRequestFields } from "../plugin-marketplace-request-fields";
import { parsePluginMarketplaceQuery, resolvePluginMarketplaceDirectRoute } from "../plugin-marketplace-route";
import { pluginProductBrowseNav } from "../plugin-product-browse-nav";
import { resolveRequestedPluginSummary } from "../resolve-requested-plugin-summary";
import { ensureInstalledPluginsQueryInit } from "../use-installed-plugins-query";
import { useMarketplaceConnectFlow } from "../use-marketplace-connect-flow";
import { usePluginConnectorAvailability } from "../use-plugin-connector-availability";
import { usePluginNavigationTelemetry } from "../use-plugin-navigation-telemetry";


// Wave5d soft JSX companions.
function AreVisualizationFeatureGatesEnabled(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function CoerceLocalFilesystemPath(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Falcon(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Indigo(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Jade(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function PluginManagePathForCatalogEntry(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function ToggleConversationPinned(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialBC: any = undefined;
const AppInitialDN: any = undefined;
const AppInitialLt: any = undefined;
const AppInitialPK: any = undefined;
const AppInitialYC: any = undefined;
const IntlProvider: any = undefined;
const PersonGlyph: any = undefined;
const fileCsv: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const timber: any = undefined;
const useMarketplacePluginsEnabledAtom: any = undefined;
export function pluginDetailPageLt(quartz2: unknown) {
  let {
      app,
      errorMessage,
      isLoading,
      onOpenChange,
      onOpenAppUrl,
      onSetAppEnabled,
      showEnableToggle = true,
      onTryInChat,
      tools,
      updatingAppId
    } = quartz2,
    river2 = useIntl(),
    slate2,
    timber2,
    umbra2,
    violet2,
    willow2,
    xenon2,
    yellow2,
    zinc2,
    amber2,
    basalt2,
    cedar2,
    daisy2;
  {
    daisy2 = Onyx(tools);
    let garnet2 = app == null ? null : AppInitialPK(app);
    let hazel2 = garnet2,
      ivory2,
      jasper2,
      kelp2,
      lotus2;
    {
      let mint2 = app == null ? null : matchConnectorIconKeyFromPlugin(app),
        nova2 = app != null && updatingAppId === app.id;
      ivory2 = app?.isAccessible === true && app.isEnabled === true;
      let olive2 = app?.isEnabled ? to.disableApp : to.enableApp,
        prism2;
      prism2 = app?.description ?? river2.formatMessage(to.subtitle);
      kelp2 = prism2;
      let quill2 = app?.name ?? "",
        reef2 = app != null && app.isAccessible && !app.isEnabled ? <Badge {...{
          className: "border border-token-border-default bg-transparent px-1.5 py-0.5 text-xs font-medium text-token-text-secondary",
          children: <MemoizedFormattedMessage {...{
            ...to.disabledBadge
          }} />
        }} /> : null;
      let sage2;
      sage2 = <AppInitialDN kind="App" title={quill2} badge={reef2} />;
      lotus2 = sage2;
      let topaz2;
      topaz2 = app == null ? null : <div className="flex items-center gap-2">{showEnableToggle && app.isAccessible ? <OptionalTooltip {...{
          delayDuration: 0,
          tooltipContent: <MemoizedFormattedMessage {...{
            ...olive2
          }} />,
          children: <div className="flex items-center"><AppInitialYC className="h-token-button-composer" checked={app.isEnabled} disabled={nova2} ariaLabel={river2.formatMessage(olive2)} onChange={ultra2 => {
              onSetAppEnabled({
                appId: app.id,
                enabled: ultra2
              });
            }} /></div>
        }} /> : null}{<DropdownMenuPopover {...{
          align: "end",
          contentWidth: "icon",
          triggerButton: <CoerceLocalFilesystemPath {...{
            label: river2.formatMessage(to.moreActions),
            size: "toolbar"
          }} />,
          children: <DropdownMenu.Item {...{
            disabled: hazel2 == null,
            onSelect: () => {
              onOpenAppUrl(hazel2);
            },
            children: <MemoizedFormattedMessage {...{
              ...to.open
            }} />
          }} />
        }} />}</div>;
      jasper2 = topaz2;
      slate2 = useInfiniteListQuery;
      xenon2 = app == null ? null : <AppIconKG {...{
        alt: app.name,
        className: "icon-md",
        logoUrl: app.logoUrl,
        logoDarkUrl: app.logoUrlDark,
        fallback: mint2 == null ? <PluginManagePathForCatalogEntry {...{
          className: "icon-sm text-token-text-secondary"
        }} /> : pearl.createElement(mint2)
      }} />;
    }
    yellow2 = lotus2;
    zinc2 = app?.name;
    amber2 = jasper2;
    basalt2 = kelp2;
    cedar2 = app != null;
    timber2 = onOpenChange;
    umbra2 = app == null ? null : <div className="flex w-full items-center justify-end gap-2">{<OptionalTooltip {...{
        tooltipContent: ivory2 ? null : <MemoizedFormattedMessage {...{
          id: "skills.appsPage.toolsDialog.tryInChatDisabled",
          defaultMessage: "Enable and connect this app to try it now",
          description: "Tooltip shown when the selected app cannot be used in task yet"
        }} />,
        children: <div>{<ReadLoginRouteQuerySnapshot {...{
            color: "primary",
            size: "toolbar",
            disabled: !ivory2,
            onClick: () => {
              ivory2 && onTryInChat(app);
            },
            children: [<AppIconDG {...{
              className: "icon-xs"
            }} />, <MemoizedFormattedMessage {...{
              id: "skills.appsPage.toolsDialog.tryInChat",
              defaultMessage: "Try now",
              description: "Footer action label to start a task with the selected app"
            }} />]
          }} />}</div>
      }} />}</div>;
    violet2 = "flex h-full min-h-0 flex-col";
    willow2 = app == null ? null : <div className="shrink-0 text-base text-token-text-secondary">{<MemoizedFormattedMessage {...{
        id: "skills.appsPage.toolsDialog.summary",
        defaultMessage: "The {appName} app contains {totalActions} actions ({actionTypes})",
        description: "Summary shown above the app action sections in the app tools dialog",
        values: {
          appName: app.name,
          totalActions: tools.length,
          actionTypes: daisy2.map(Kite).join(", ")
        }
      }} />}</div>;
  }
  let ember2 = <ToggleConversationPinned {...{
    className: "flex-1",
    surfaceClassName: "bg-transparent",
    children: isLoading ? <div className="flex h-full min-h-32 items-center justify-center text-base text-token-text-secondary">{<MemoizedFormattedMessage {...{
        id: "skills.appsPage.toolsDialog.loading",
        defaultMessage: "Loading tools…",
        description: "Loading label in the app tools dialog"
      }} />}</div> : errorMessage == null ? tools.length === 0 ? <div className="flex h-full min-h-32 items-center justify-center text-base text-token-text-secondary">{<MemoizedFormattedMessage {...{
        id: "skills.appsPage.toolsDialog.empty",
        defaultMessage: "No tools available for this app.",
        description: "Empty state when no tools are available for the selected app"
      }} />}</div> : <Falcon {...{
      toolSections: daisy2
    }} /> : <div className="flex h-full min-h-32 items-center justify-center text-base text-token-text-secondary"><div><div>{<MemoizedFormattedMessage {...{
            id: "skills.appsPage.toolsDialog.error",
            defaultMessage: "Unable to load tools for this app.",
            description: "Error state shown when connector actions could not be loaded for the selected app"
          }} />}</div><div>{errorMessage}</div></div></div>
  }} />;
  let flint2 = <div className={violet2}>{willow2}{ember2}</div>;
  return <Indigo {...{
    icon: xenon2,
    title: yellow2,
    titleText: zinc2,
    headerActions: amber2,
    description: basalt2,
    isOpen: cedar2,
    onOpenChange: timber2,
    footer: umbra2,
    children: flint2
  }} />;
}
function Kite(vapor2) {
  return `${vapor2.tools.length} ${vapor2.title.toLowerCase()}`;
}
function Lemon(wheat2) {
  let {
      toolSections
    } = wheat2,
    yarn2 = {};
  let [zephyr2, acorn2] = pearl.useState(yarn2),
    bloom2;
  {
    let coral2;
    coral2 = drift2 => {
      let eagle2 = zephyr2[drift2.title] === true;
      return <div key={drift2.title} className="border-b border-token-border-default/70 last:border-b-0"><button type="button" className="sticky top-0 z-10 flex w-full items-center justify-between bg-token-bg-secondary p-2.5 text-left text-base text-token-foreground" aria-expanded={!eagle2} onClick={() => {
          acorn2(frost2 => ({
            ...frost2,
            [drift2.title]: !eagle2
          }));
        }}><span>{drift2.title}<span className="ml-2 text-token-input-placeholder-foreground">{drift2.tools.length}</span></span>{<AppIconSft {...{
            className: eagle2 ? "icon-xs shrink-0 -rotate-90 text-token-input-placeholder-foreground transition-transform" : "icon-xs shrink-0 text-token-input-placeholder-foreground transition-transform"
          }} />}</button>{eagle2 ? null : <div className="divide-y divide-token-border-default/70">{drift2.tools.map(Marble)}</div>}</div>;
    };
    bloom2 = toolSections.map(coral2);
  }
  return <div className="flex flex-col">{bloom2}</div>;
}
function Marble(glide2) {
  return <div key={glide2.name} className={IntlProvider("grid grid-cols-[minmax(0,220px)_minmax(0,1fr)] gap-x-3 p-2.5", glide2.disabledReason === "disabled_by_admin" && "opacity-60")}><div className="min-w-0 text-token-foreground">{<Jade {...{
        name: glide2.name
      }} />}{glide2.disabledReason === "disabled_by_admin" ? <div className="mt-1 flex items-center gap-1 text-xs text-token-text-secondary">{<AppIconIt {...{
          className: "icon-xs shrink-0"
        }} />}{<MemoizedFormattedMessage {...{
          ...to.disabledByAdminTool
        }} />}</div> : null}</div><div className="text-base text-token-text-secondary">{<AreVisualizationFeatureGatesEnabled {...{
        className: "text-base",
        cwd: null,
        children: glide2.description
      }} />}</div></div>;
}
function Nickel(honey2) {
  let {
      name
    } = honey2,
    iris2 = <div className="truncate text-base">{name}</div>;
  return <OptionalTooltip {...{
    tooltipContent: name,
    openWhen: "trigger-overflows",
    children: iris2
  }} />;
}
function Onyx(jewel2) {
  let knoll2 = jewel2.filter(item => item.accessBadges.includes("READ"));
  return [{
    title: "Write",
    tools: jewel2.filter(item => !item.accessBadges.includes("READ"))
  }, {
    title: "Read",
    tools: knoll2
  }].flatMap(item => item.tools.length === 0 ? [] : [item]);
}
export var pluginDetailPageUt = esmInit(() => {
  $a = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  pearl = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  useMarketplacePluginsEnabledAtom();
  fileCsv();
  ensureBadgeInit();
  ensureSettingsQueryAtomsInit();
  ensureComposerEsm_AG_Init();
  ensureDropdownMenuInit();
  chatgptProjectQueryKey();
  ensurePinnedConversationsQueryInit();
  AppInitialBC();
  ensureComposerEsm_Hlt_Init();
  PersonGlyph();
  ensureAppIconSftInit();
  pluginProductBrowseNav();
  AppInitialLt();
  findCachedConversationItem();
  to = identity({
    disableApp: {
      id: "skills.appsPage.toolsDialog.disableApp",
      defaultMessage: "Disable app",
      description: "Tooltip label for disabling an app from the app tools modal"
    },
    enableApp: {
      id: "skills.appsPage.toolsDialog.enableApp",
      defaultMessage: "Enable app",
      description: "Tooltip label for enabling an app from the app tools modal"
    },
    moreActions: {
      id: "skills.appsPage.toolsDialog.moreActions",
      defaultMessage: "More actions",
      description: "Aria label for the more actions menu in the app tools modal"
    },
    open: {
      id: "skills.appsPage.toolsDialog.open",
      defaultMessage: "Manage on ChatGPT",
      description: "Menu item label to open app management from the app tools modal"
    },
    disabledBadge: {
      id: "skills.appsPage.toolsDialog.disabledBadge",
      defaultMessage: "Disabled",
      description: "Badge shown when the selected app is disabled in the app tools modal"
    },
    disabledByAdminTool: {
      id: "skills.appsPage.toolsDialog.disabledByAdminTool",
      defaultMessage: "Disabled by admin",
      description: "Muted label shown on an app tool row when the tool is disabled by a workspace admin"
    },
    subtitle: {
      id: "skills.appsPage.toolsDialog.subtitle",
      defaultMessage: "Tools for this app",
      description: "Fallback subtitle in the app tools dialog when the app has no description"
    }
  });
});
var $a, pearl, quartz, to;
function River(lunar2) {
  let moss2 = lunar2.reduce((accumulator, current) => {
    let north2 = accumulator.get(current.name);
    if (north2 == null) return accumulator.set(current.name, {
      skill: current
    }), accumulator;
    let orbit2 = timber[current.scope],
      pine2 = timber[north2.skill.scope];
    return (orbit2 < pine2 || orbit2 === pine2 && current.path.localeCompare(north2.skill.path) < 0) && (north2.skill = current), accumulator;
  }, new Map());
  return Array.from(moss2.values()).map(({
    skill
  }) => ({
    skill
  })).sort((quest2, ridge2) => getPluginDisplayName(quest2.skill).localeCompare(getPluginDisplayName(ridge2.skill)) || quest2.skill.name.localeCompare(ridge2.skill.name));
}
