// Restored from ref/webview/assets/plugin-detail-page-CS2mOWnD.js
// Wave GA — full polished body from `plugin-detail-page-CS2mOWnD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 122 (verified 228/347).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 31/39
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
function EnsureIntlFormattersInit(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Frost(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Glide(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialBC: any = undefined;
const AppInitialCm: any = undefined;
const AppInitialDK: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialFZ: any = undefined;
const AppInitialH: any = undefined;
const AppInitialJt: any = undefined;
const AppInitialKL: any = undefined;
const AppInitialLt: any = undefined;
const AppInitialNR: any = undefined;
const AppInitialNt: any = undefined;
const AppInitialQj: any = undefined;
const AppInitialTR: any = undefined;
const AppInitialVC: any = undefined;
const CodexMicroDeviceLifecycleStepType: any = undefined;
const DeferredBu: any = undefined;
const IntlProvider: any = undefined;
const _pluginDetailPageH: any = undefined;
const _pluginDetailPageW: any = undefined;
const _pluginDetailPageY: any = undefined;
const deferredUiEnt: any = undefined;
const deferredUiJ1: any = undefined;
const launchSubagentFromSourceThread: any = undefined;
const pluginDetailPageE: any = undefined;
const pluginDetailPageO: any = undefined;
const useClearBrowserBrowsingDataMutation: any = undefined;
const wave: any = undefined;
function Dew({
  className,
  iconSkill,
  semanticSkill
}) {
  return indigo1.createElement(AppInitialTR(null, {
    iconSmall: iconSkill.interface?.iconSmall,
    iconLarge: iconSkill.interface?.iconLarge,
    basePath: iconSkill.path,
    alt: Delta1(semanticSkill),
    fallbackName: iconSkill.name,
    fallbackDescription: getPluginShortDescription(iconSkill),
    smallOnly: true
  }), {
    className: IntlProvider(className, "rounded-2xs")
  });
}
function Alpha1(moss7) {
  let {
      ariaLabel,
      href
    } = moss7,
    north7,
    orbit7;
  north7 = pine7 => {
    deferredUiEnt({
      event: pine7,
      href,
      initiator: "open_in_browser_bridge"
    });
  };
  orbit7 = <HostFeatureConfigToggles {...{
    href,
    className: "icon-xs"
  }} />;
  return <a aria-label={ariaLabel} className="relative isolate inline-flex size-5 cursor-interaction items-center justify-center rounded-md text-token-foreground outline-none before:absolute before:-inset-1 before:-z-10 before:rounded-md before:content-[''] hover:before:bg-token-list-hover-background focus-visible:before:ring-1 focus-visible:before:ring-token-focus-border" href={href} onClick={north7}>{orbit7}</a>;
}
function Bravo1(quest7) {
  return quest7.summary.interface?.displayName ?? quest7.summary.name;
}
function Copper1(ridge7, storm7) {
  return ridge7.summary.source.type === "remote" ? {
    remoteMarketplaceName: ridge7.marketplaceName,
    remotePluginId: AppInitialDK(ridge7.summary),
    skillName: storm7
  } : null;
}
function Delta1(tide7) {
  return tide7.interface?.displayName?.trim() || titleCaseColonSegments(tide7.name.split(":").pop() || tide7.name);
}
function Echo1(unity7) {
  return unity7.length === 0 ? unity7 : `${unity7[0].toUpperCase()}${unity7.slice(1)}`;
}
function Falcon1(vale7) {
  return vale7.summary.interface?.longDescription ?? vale7.description ?? vale7.summary.interface?.shortDescription ?? null;
}
function Gamma1(wave7) {
  return wave7.summary.interface?.shortDescription ?? wave7.description ?? wave7.summary.interface?.longDescription ?? null;
}
var harbor1,
  indigo1,
  jade1,
  kite1,
  lemon1,
  marble1,
  nickel1 = esmInit(() => {
    harbor1 = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    indigo1 = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    AppInitialCm();
    DeferredBu();
    ensureSettingsQueryAtomsInit();
    AppInitialNt();
    ensureComposerEsm_AG_Init();
    DETAIL_PAGE_STACK_CLASS();
    AppInitialH();
    DetailPageSectionHeader();
    ensureComposerEsm_Qtt_Init();
    ensureConversationPageEsm_B0_Init();
    useClearBrowserBrowsingDataMutation();
    AppInitialKL();
    useUsageSettingsAccess();
    pluginDetailPageO();
    AppInitialBC();
    ensureComposerEsm_Hlt_Init();
    ensureComposerEsm_RV_Init();
    AppInitialFZ();
    CHATGPT_PRODUCT_ID();
    pluginProductBrowseNav();
    pluginDetailPageE();
    launchSubagentFromSourceThread();
    ensureConversationPageEsm_FR_Init();
    AppInitialLt();
    ensureHooksFocusIconInit();
    buildCodexDesktopRequestHeaders();
    ensureComposerEsm_M0_Init();
    AppInitialVC();
    AppInitialFC();
    AppInitialJt();
    CodexMicroDeviceLifecycleStepType();
    ensureSkillsPageHelpersInit();
    AppInitialNR();
    _pluginDetailPageW();
    _pluginDetailPageH();
    _pluginDetailPageY();
    findCachedConversationItem();
    getRouteContextValue();
    installModalBrowserExtensionMessages();
    wave();
    ensureInstalledPluginsQueryInit();
    kite1 = identity({
      capabilities: {
        id: "plugins.detail.information.capabilities",
        defaultMessage: "Capabilities",
        description: "Label for plugin capabilities on the detail page"
      },
      category: {
        id: "plugins.detail.information.category",
        defaultMessage: "Category",
        description: "Label for plugin category on the detail page"
      },
      developer: {
        id: "plugins.detail.information.developer",
        defaultMessage: "Developer",
        description: "Label for plugin developer on the detail page"
      },
      information: {
        id: "plugins.detail.information",
        defaultMessage: "Information",
        description: "Section title for plugin information on the detail page"
      },
      unavailable: {
        id: "plugins.detail.information.unavailable",
        defaultMessage: "Unavailable",
        description: "Value shown when plugin information is unavailable"
      },
      version: {
        id: "plugins.detail.information.version",
        defaultMessage: "Version",
        description: "Label for plugin version on the detail page"
      },
      setupSection: {
        id: "plugins.detail.setup",
        defaultMessage: "Setup",
        description: "Section title for browser extensions that need to be set up on the plugin detail page"
      },
      disabledByAdminBadge: {
        id: "plugins.detail.includes.disabledByAdminBadge",
        defaultMessage: "Disabled by admin",
        description: "Tooltip label shown on an included app or app template row when it is disabled by admin on the plugin detail page"
      },
      mcpServerDisable: {
        id: "plugins.detail.mcp.disable",
        defaultMessage: "Disable MCP server",
        description: "Tooltip label for disabling an MCP server from the plugin detail page"
      },
      mcpServerEnable: {
        id: "plugins.detail.mcp.enable",
        defaultMessage: "Enable MCP server",
        description: "Tooltip label for enabling an MCP server from the plugin detail page"
      },
      mcpServerSettings: {
        id: "plugins.detail.mcp.settings",
        defaultMessage: "Open MCP settings",
        description: "Tooltip label for the settings button on an MCP server card in plugin detail"
      },
      mcpServerSetup: {
        id: "plugins.detail.mcp.setup",
        defaultMessage: "Set up in MCP settings",
        description: "Tooltip label for the settings button when an MCP server still needs to be configured"
      },
      mcpServerToggleAria: {
        id: "plugins.detail.mcp.toggleAria",
        defaultMessage: "Toggle MCP server enabled state",
        description: "Accessible label for the MCP server enablement toggle on the plugin detail page"
      },
      hooksSettings: {
        id: "plugins.detail.hooks.settings",
        defaultMessage: "Manage in settings",
        description: "Tooltip label for opening Hooks settings from the plugin detail page"
      },
      hooksTitle: {
        id: "plugins.detail.includes.hooks.title",
        defaultMessage: "Hooks",
        description: "Title for included hooks on the plugin detail page"
      },
      otherAppCategory: {
        id: "plugins.detail.includes.apps.otherCategory",
        defaultMessage: "Other",
        description: "Fallback category title for included apps on the plugin detail page"
      },
      missing: {
        id: "plugins.detail.missing",
        defaultMessage: "Plugin not found",
        description: "Not found title on the plugin detail page"
      },
      missingDescription: {
        id: "plugins.detail.missingDescription",
        defaultMessage: "This plugin could not be loaded from its marketplace entry.",
        description: "Not found description on the plugin detail page"
      },
      privacyPolicy: {
        id: "plugins.detail.information.privacyPolicy",
        defaultMessage: "Privacy Policy",
        description: "Label for plugin privacy policy on the detail page"
      },
      website: {
        id: "plugins.detail.information.website",
        defaultMessage: "Website",
        description: "Label for plugin website on the detail page"
      },
      errorTitle: {
        id: "plugins.detail.errorTitle",
        defaultMessage: "Failed to load plugin",
        description: "Error title shown on the plugin detail page"
      },
      termsOfService: {
        id: "plugins.detail.information.termsOfService",
        defaultMessage: "Terms of Service",
        description: "Label for plugin terms of service on the detail page"
      }
    });
    lemon1 = 5;
    marble1 = new Map();
  });
export function _pluginDetailPageP(apex7: unknown) {
  return apex7.source.type === "remote" && apex7.installed && apex7.installPolicy === "INSTALLED_BY_DEFAULT";
}
export var _pluginDetailPageF = esmInit(() => {});
function Onyx1(brook7) {
  let {
      state
    } = brook7,
    cliff7 = replaceInMemoryStorageEntries(),
    dusk7 = {
      state,
      value: "auto",
      shouldAnimate: false
    };
  let [elm7, fern7] = el.useState(dusk7),
    grove7 = seed7 => {
      let trail7 = Math.ceil(seed7.contentRect.width);
      trail7 <= 0 || fern7(urn7 => urn7.state === state && urn7.value === trail7 ? urn7 : {
        state,
        value: trail7,
        shouldAnimate: urn7.value !== "auto" && urn7.state !== state
      });
    };
  let hill7 = useResizeObserver(grove7),
    isle7 = IntlProvider(ember1, "justify-center");
  let juniper7 = <span className={isle7}>{<Frost {...{
      state
    }} />}</span>;
  let lagoon7 = <div ref={hill7} aria-hidden={true} className="pointer-events-none invisible fixed top-0 left-0 min-w-max">{juniper7}</div>;
  let meadow7 = {
    width: elm7.value
  };
  let nest7 = state === "progress" ? "justify-start" : "justify-center",
    oak7 = IntlProvider(ember1, nest7);
  let petal7 = cliff7 || elm7.value === "auto" || !elm7.shouldAnimate ? {
    duration: 0
  } : daisy1;
  let quiet7 = <Frost {...{
    state
  }} />;
  let rain7 = <EnsureIntlFormattersInit.button {...{
    animate: meadow7,
    className: oak7,
    initial: false,
    transition: petal7,
    type: "submit",
    children: quiet7
  }} />;
  return <>{lagoon7}{rain7}</>;
}
function Pearl1(vine7) {
  let {
      state
    } = vine7,
    wind7 = state === "creating" || state === "progress" ? <VSCODE_EDITOR_ID {...{
      className: "icon-xs"
    }} /> : state === "copied" ? <AppIconZlt {...{
      "aria-hidden": true,
      className: "icon-xs"
    }} /> : <AppInitialQj aria-hidden={true} className="icon-xs" />;
  let yarrow7 = <span className="inline-block">{state === "copied" ? <MemoizedFormattedMessage {...{
      id: "plugins.detail.shareDialog.copied",
      defaultMessage: "Copied",
      description: "Button label after copying a plugin share link"
    }} /> : state === "progress" ? <Glide {...{}} /> : <MemoizedFormattedMessage {...{
      id: "plugins.detail.shareDialog.copyLink",
      defaultMessage: "Copy link",
      description: "Button label for copying a plugin share link"
    }} />}</span>;
  return <>{wind7}{yarrow7}</>;
}
function Quartz1() {
  if (replaceInMemoryStorageEntries()) {
    let dew7;
    return <MemoizedFormattedMessage {...{
      ...garnet1[0]
    }} />;
  }
  let azure7 = <span className="sr-only">{<MemoizedFormattedMessage {...{
      ...garnet1[0]
    }} />}</span>;
  let birch7 = garnet1.map(Slate1);
  let canyon7 = {
    y: cedar1
  };
  return <>{azure7}<span aria-hidden={true} className="inline-grid h-[18px] overflow-hidden leading-[18px]">{birch7}{<EnsureIntlFormattersInit.span {...{
        animate: canyon7,
        className: "col-start-1 row-start-1 flex flex-col",
        initial: {
          y: xenon1
        },
        transition: {
          duration: amber1,
          ease: "easeInOut",
          times: basalt1
        },
        children: garnet1.map(River1)
      }} />}</span></>;
}
function River1(alpha8) {
  return <span key={alpha8.id} className="h-[18px] whitespace-nowrap">{<MemoizedFormattedMessage {...{
      ...alpha8
    }} />}</span>;
}
function Slate1(bravo8) {
  return <span key={`${bravo8.id}-measure`} className="invisible col-start-1 row-start-1 whitespace-nowrap">{<MemoizedFormattedMessage {...{
      ...bravo8
    }} />}</span>;
}
var $c,
  el,
  timber1,
  umbra1,
  violet1,
  willow1,
  xenon1,
  yellow1,
  zinc1,
  amber1,
  basalt1,
  cedar1,
  daisy1,
  ember1,
  flint1,
  garnet1,
  hazel1 = esmInit(() => {
    $c = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    useBrowserExtensionPluginSetupQuery();
    el = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureComposerEsm_Sut_Init();
    ensureDropdownMenuPopoverInit();
    ensureConversationPageEsm_Jj_Init();
    deferredUiJ1();
    umbra1 = 2.4;
    violet1 = 0.35;
    willow1 = 0.32;
    xenon1 = 18;
    yellow1 = 0.51;
    zinc1 = [[0, 1], ...Array.from({
      length: 4
    }, (copper8, delta8) => {
      let echo8 = yellow1 + umbra1 * delta8;
      return [[echo8, 1 - delta8], [echo8 + willow1, -delta8]];
    }).flat()];
    amber1 = zinc1.at(-1)?.[0] ?? 0;
    basalt1 = zinc1.map(([falcon8]) => falcon8 / amber1);
    cedar1 = zinc1.map(([, gamma8]) => gamma8 * xenon1);
    daisy1 = {
      type: "spring",
      duration: violet1,
      bounce: 0.02
    };
    ember1 = "border-token-border no-drag cursor-interaction flex max-w-full items-center gap-1 overflow-hidden rounded-lg border bg-token-foreground px-4 py-1.5 text-base leading-[18px] text-token-dropdown-background whitespace-nowrap select-none focus:outline-none enabled:hover:bg-token-foreground/80 data-[state=open]:bg-token-foreground/80 disabled:cursor-not-allowed disabled:opacity-40";
    flint1 = identity({
      preparingPlugin: {
        id: "plugins.detail.shareDialog.preparingPlugin",
        defaultMessage: "Preparing your plugin",
        description: "First animated status label while a plugin share link is being created"
      },
      uploadingPlugin: {
        id: "plugins.detail.shareDialog.uploadingPlugin",
        defaultMessage: "Uploading",
        description: "Second animated status label while a plugin share link is being created"
      },
      generatingPluginLink: {
        id: "plugins.detail.shareDialog.generatingPluginLink",
        defaultMessage: "Generating a link",
        description: "Third animated status label while a plugin share link is being created"
      },
      finalizingPluginDetails: {
        id: "plugins.detail.shareDialog.finalizingPluginDetails",
        defaultMessage: "Finalizing details",
        description: "Fourth animated status label while a plugin share link is being created"
      }
    });
    garnet1 = [flint1.preparingPlugin, flint1.uploadingPlugin, flint1.generatingPluginLink, flint1.finalizingPluginDetails];
  });
