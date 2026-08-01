// Restored from ref/webview/assets/plugins-page-BCVTHZkx.js
// Wave GA — full polished body from `plugins-page-BCVTHZkx/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 141 (verified 247/388).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 15/15
/* split-lane-import-depth:1 */

import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser } from "../../account/open-in-browser";
import { appActionSidebarProjectRefSchema, appActionSidebarSectionRefSchema, ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { ensureReviewFileAppActionAttrsInit } from "../../actions/ensure-review-file-app-action-attrs-init";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginClickTarget } from "../../analytics/codex-plugin-click-target";
import { CodexPluginMarketplaceSurface } from "../../analytics/codex-plugin-marketplace-surface";
import { CodexPluginPageName } from "../../analytics/codex-plugin-page-name";
import { logProductEvent } from "../../analytics/log-product-event";
import { useChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { AppCardAdminDisabledBadge } from "../../apps/app-card-admin-disabled-badge";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_AG_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Wlt_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_Jj_Init } from "../../conversation/conversation-page-esm-inits";
import { createPersistedAtom, ensurePersistedAtomInit } from "../../boundaries/persisted-atom";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useLocation, useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { ensurePluginMentionPromptInit, firstNonEmptyTrimmedString } from "../../browser/browser-use-helpers";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { buildAppUri } from "../../composer/app-plugin-uri";
import { composerNavigation } from "../../composer/composer-navigation";
import { getPluginDisplayName } from "../../composer/get-plugin-display-name";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { MCP_SERVERS_STATUS_PATH } from "../../config/mcp-servers-status-path";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { deferredConversationP } from "../../conversation/deferred-conversation-p";
import { deferredConversationSh } from "../../conversation/deferred-conversation-sh";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { findCachedConversationItem } from "../../conversation/find-cached-conversation-item";
import { setCodexMicroHudOpen, setCodexMicroJoystickOnStore } from "../../desktop/codex-micro-input-state";
import { ensureCodexMicroJoystickGeometryInit } from "../../desktop/codex-micro-joystick-geometry";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DEVELOPERS_OPENAI_COM_CODEX_MCP_URL } from "../../docs/codex-doc-urls";
import { fileExtensionFromPath } from "../../files/file-extension-from-path";
import { ensureTanstackReactFormApiInit, useTanstackForm } from "../../forms/tanstack-react-form";
import { CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY } from "../../home/onboarding-storage-keys";
import { homeDirectoryQueryAtom } from "../../hooks/home-directory-query";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { useContentRectSize } from "../../hooks/use-content-rect-size";
import { useDvtBindable } from "../../hooks/use-dvt-bindable";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useGateEnabledWithAccountData } from "../../hooks/use-gate-enabled-with-account-data";
import { useGitRepoLiveQuery } from "../../hooks/use-git-repo-live-query";
import { ensureUseHomeDirectoryInit, useHomeDirectory, useHomeDirectoryQuery } from "../../hooks/use-home-directory";
import { useHostWorkspaceRoot } from "../../hooks/use-host-workspace-root";
import { ensureUseMediaQueryInit, useMediaQuery } from "../../hooks/use-media-query";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQueryClient } from "../../hooks/use-query-client";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconAZ } from "../../icons/app-icon-az";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconDG } from "../../icons/app-icon-dg";
import { AppIconIt } from "../../icons/app-icon-it";
import { AppIconKG } from "../../icons/app-icon-kg";
import { AppIconKS } from "../../icons/app-icon-ks";
import { AppIconLV } from "../../icons/app-icon-lv";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconPZ } from "../../icons/app-icon-pz";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconUh } from "../../icons/app-icon-uh";
import { AppIconYj } from "../../icons/app-icon-yj";
import { AppIconZa } from "../../icons/app-icon-za";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { LoadingPreviewIcon } from "../../icons/loading-preview-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { useBatchWriteMcpServerConfig } from "../../mcp/use-batch-write-mcp-server-config";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { findSidebarSectionElement, scrollAppActionTargetTo, writeScrollTop } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { resolveBrowserTabPanelSide } from "../../navigation/resolve-browser-tab-panel-side";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { useTeenOnboardingAgeGate } from "../../onboarding/use-teen-onboarding-age-gate";
import { AVATAR_OVERLAY_SURFACE_STACK_IDS } from "../../overlay/avatar-overlay-surface-stack-ids";
import { PdfPermissionFlag } from "../../pdf/pdf-permission-flag";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureCloudApiClientInit } from "../../settings/cloud-api-client";
import { readCodexHomeFromQuery } from "../../settings/read-codex-home-from-query";
import { SettingsCommandMenuSectionItem } from "../../settings/settings-command-menu-section-item";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useToggleMcpServerEnabledMutation } from "../../settings/use-toggle-mcp-server-enabled-mutation";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { ensureSkillsPageHelpersInit, usePluginsFeatureEnabled } from "../../skills/skills-page-helpers";
import { usePluginDetailQuery } from "../../skills/use-plugin-detail-query";
import { AriaIconBadge } from "../../ui/aria-icon-badge";
import { ChartsPurpleBadge } from "../../ui/charts-purple-badge";
import { CircularProgressRing } from "../../ui/circular-progress-ring";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { CompoundButtonMenu } from "../../ui/compound-button-menu";
import { ConnectorLogoStack, ensureConnectorLogoStackInit } from "../../ui/connector-logo-stack";
import { ControlGroup, ensureControlGroupInit } from "../../ui/control-group";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiZG } from "../../ui/deferred-ui-zg";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ght } from "../../ui/ght";
import { MenuBorderSeparator } from "../../ui/menu-border-separator";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import { StackedCardHeader } from "../../ui/stacked-card-header";
import { initToolbarBreadcrumb, ToolbarBreadcrumb } from "../../ui/toolbar-breadcrumb";
import { coalesceTruthy } from "../../utils/coalesce-truthy";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { decodeBase64ToBytes } from "../../utils/decode-base64-to-bytes";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { hasInputItemsField } from "../../utils/has-input-items-field";
import { identity } from "../../utils/identity";
import { identityValue } from "../../utils/identity-value";
import { isBareAllowedPermission } from "../../utils/is-bare-allowed-permission";
import { lerpIfFinite } from "../../utils/lerp-if-finite";
import { parseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { reuseArrayIfShallowEqual } from "../../utils/reuse-array-if-shallow-equal";
import { sortedArrayFrom } from "../../utils/sorted-array-from";
import { titleCaseColonSegments } from "../../utils/title-case-colon-segments";
import { ensureAppMainI9Init, ensurePersonalizationCInit, ensureSettingsGlyphNltInit } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { produce } from "../../vendor/immer";
import { ensureZodRuntime } from "../../vendor/zod";
import { requestRealtimeVoicePresentationSurface } from "../../voice/request-realtime-voice-presentation-surface";
import { CodexPluginDirectoryEntrypoint } from "../codex-plugin-directory-entrypoint";
import { ensureGoogleDriveConnectorIconsInit } from "../ensure-google-drive-connector-icons-init";
import { isAvailabilityDisabledByAdmin } from "../is-availability-disabled-by-admin";
import { isOpenaiCuratedMarketplaceToken } from "../is-openai-curated-marketplace-token";
import { isUnavailableKnownConnector } from "../is-unavailable-known-connector";
import { matchesOptionalHostPluginIds } from "../matches-optional-host-plugin-ids";
import { normalizeConnectorCatalogId } from "../normalize-connector-catalog-id";
import { parsePluginProductEventContext } from "../parse-plugin-product-event-context";
import { ensurePluginDetailPageInit, ManagePluginDetailPage, pluginDetailF, pluginDetailG, pluginDetailH, pluginDetailI, pluginDetailL, pluginDetailM, pluginDetailP } from "../plugin-detail-page";
import { PluginInstallDetailsPanel } from "../plugin-install-details-panel";
import { pluginInstallIdentityKey } from "../plugin-install-identity-key";
import { pluginManagePathForCatalogEntry } from "../plugin-manage-path-for-catalog-entry";
import { pluginMarketplaceRequestFields } from "../plugin-marketplace-request-fields";
import { parsePluginMarketplaceQuery } from "../plugin-marketplace-route";
import { pluginShareStandaloneAction } from "../plugin-share-standalone-action";
import { resolveRequestedPluginSummary } from "../resolve-requested-plugin-summary";
import { SCHEDULED_TASKS_PLUGIN_ID } from "../scheduled-tasks-plugin-id";
import { shouldReturnToBrowseHistoryFromLocationState } from "../should-return-to-browse-history-from-location-state";
import { ensureInstalledPluginsQueryInit } from "../use-installed-plugins-query";
import { useMarketplaceConnectFlow } from "../use-marketplace-connect-flow";
import { usePluginCategoryPageTelemetry } from "../use-plugin-category-page-telemetry";
import { usePluginConnectorAvailability } from "../use-plugin-connector-availability";


// Wave5d soft JSX companions.
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialE: any = undefined;
const AppInitialFK: any = undefined;
const AppInitialHp: any = undefined;
const AppInitialKz: any = undefined;
const AppInitialLz: any = undefined;
const AppInitialOZ: any = undefined;
const AppInitialPl: any = undefined;
const AppInitialQK: any = undefined;
const AppInitialQS: any = undefined;
const AppInitialTm: any = undefined;
const AppInitialUj: any = undefined;
const AppInitialUw: any = undefined;
const AppInitialWj: any = undefined;
const AppInitialXz: any = undefined;
const AppInitialZo: any = undefined;
const Browser3: any = undefined;
const RealtimeVoiceHostIdStub: any = undefined;
const _c: any = undefined;
const _pluginDetailPageA: any = undefined;
const _pluginDetailPageC: any = undefined;
const _pluginDetailPageD: any = undefined;
const _pluginDetailPageR: any = undefined;
const _s: any = undefined;
const amber: any = undefined;
const crag: any = undefined;
const deferredHostsVh: any = undefined;
const deferredUiBa: any = undefined;
const deferredUiCm: any = undefined;
const drill: any = undefined;
const eagle: any = undefined;
const ensureConfigQueryAtomsInit: any = undefined;
const ensureSelectWorkspacePXInit: any = undefined;
const gamma: any = undefined;
const inlet: any = undefined;
const north: any = undefined;
const opal: any = undefined;
const pluginDetailPageO: any = undefined;
const pluginsPageS: any = undefined;
const pluginsPageU: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const trail: any = undefined;
const umbra: any = undefined;
const useClearBrowserBrowsingDataMutation: any = undefined;
const vista: any = undefined;
const wheat: any = undefined;
const xenon: any = undefined;
const yard: any = undefined;

function platen(waveFifth) {
  let {
      sections,
      selectedSectionId,
      onSelectSection
    } = waveFifth,
    apexFifth = useIntl(),
    brookFifth = sections.find(item => item.id === selectedSectionId),
    cliffFifth = apexFifth.formatMessage({
      id: "skills.appsPage.browseDropdown.ariaLabel",
      defaultMessage: "Filter sections",
      description: "Accessible label for the section filter dropdown on the Skills & Apps page"
    });
  let duskFifth = <AppIconZa className="icon-sm text-token-text-secondary" />;
  let elmFifth = <ReadLoginRouteQuerySnapshot {...{
    className: "shrink-0",
    color: "ghost",
    size: "toolbar",
    uniform: true,
    "aria-label": cliffFifth,
    children: duskFifth
  }} />;
  let fernFifth = brookFifth == null ? AppIconZlt : undefined,
    groveFifth = () => {
      onSelectSection(null);
    };
  let hillFifth = <MemoizedFormattedMessage id="skills.appsPage.sectionFilter.all" defaultMessage="All" description="Label for showing all plugin sections on the Skills & Apps page" />;
  let isleFifth = <DropdownMenu.Item RightIcon={fernFifth} onSelect={groveFifth}>{hillFifth}</DropdownMenu.Item>;
  let juniperFifth;
  {
    let lagoonFifth;
    lagoonFifth = meadowFifth => <DropdownMenu.Item key={meadowFifth.id} RightIcon={meadowFifth.id === selectedSectionId ? AppIconZlt : undefined} onSelect={() => {
      onSelectSection(meadowFifth.id);
    }}>{meadowFifth.title}</DropdownMenu.Item>;
    juniperFifth = sections.map(lagoonFifth);
  }
  return <DropdownMenuPopover align="end" contentMaxHeight="list" contentWidth="menuBounded" triggerButton={elmFifth}>{isleFifth}{juniperFifth}</DropdownMenuPopover>;
}
function ratchet(nestFifth) {
  return {
    kind: "browse",
    tab: nestFifth
  };
}
function shim(oakFifth) {
  return {
    kind: "manage",
    tab: oakFifth
  };
}
function $l(petalFifth) {
  return petalFifth === "skills" ? "skills" : "plugins";
}
function tappet({
  intl,
  roots,
  skillEntries
}) {
  let quietFifth = new Map();
  for (let rainFifth of skillEntries) {
    let seedFifth = AppInitialUj({
        skill: rainFifth.skill,
        roots,
        intl
      }),
      trailFifth = quietFifth.get(seedFifth);
    if (trailFifth == null) {
      quietFifth.set(seedFifth, {
        id: `skills-installed-${arbor(seedFifth)}`,
        title: seedFifth,
        skillEntries: [rainFifth]
      });
      continue;
    }
    trailFifth.skillEntries.push(rainFifth);
  }
  return Array.from(quietFifth.values());
}
function arbor(urnFifth) {
  return urnFifth.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
function bushing(vineFifth) {
  if (!(vineFifth instanceof HTMLElement)) return false;
  if (vineFifth.isContentEditable) return true;
  let windFifth = vineFifth.tagName.toLowerCase();
  return windFifth === "input" || windFifth === "textarea" || windFifth === "select" ? true : vineFifth.closest("[contenteditable='true']") != null;
}
function collar(yarrowFifth) {
  let {
      currentTab,
      onSelectTab,
      showNonMcpTabs,
      tabCounts
    } = yarrowFifth,
    azureFifth = useIntl(),
    birchFifth = tabCounts.plugins,
    canyonFifth = azureFifth.formatMessage({
      id: "skills.appsPage.manageTab.plugins",
      defaultMessage: "Plugins",
      description: "Manage-mode tab label for installed plugins"
    });
  let dewFifth = {
    count: birchFifth,
    id: "plugins",
    label: canyonFifth
  };
  let everFifth = tabCounts.apps,
    fieldFifth = azureFifth.formatMessage({
      id: "skills.appsPage.manageTab.apps",
      defaultMessage: "Apps",
      description: "Manage-mode tab label for installed apps"
    });
  let grainFifth = {
    count: everFifth,
    id: "apps",
    label: fieldFifth
  };
  let havenFifth = tabCounts.mcps,
    inkFifth = azureFifth.formatMessage({
      id: "skills.appsPage.manageTab.mcps",
      defaultMessage: "MCPs",
      description: "Manage-mode tab label for installed MCP servers"
    });
  let jadeiteFifth = {
    count: havenFifth,
    id: "mcps",
    label: inkFifth
  };
  let kernelFifth = tabCounts.skills,
    leafFifth = azureFifth.formatMessage({
      id: "skills.appsPage.manageTab.skills",
      defaultMessage: "Skills",
      description: "Manage-mode tab label for installed skills"
    });
  let mapleFifth = {
    count: kernelFifth,
    id: "skills",
    label: leafFifth
  };
  let nimbusFifth = tabCounts.marketplace,
    opalFifth = azureFifth.formatMessage({
      id: "skills.appsPage.manageTab.marketplace",
      defaultMessage: "Marketplace",
      description: "Manage-mode tab label for plugin marketplaces"
    });
  let plumeFifth = {
    count: nimbusFifth,
    id: "marketplace",
    label: opalFifth
  };
  let quillowFifth = [dewFifth, grainFifth, jadeiteFifth, mapleFifth, plumeFifth];
  let rootFifth = quillowFifth,
    silkFifth = azureFifth.formatMessage({
      id: "skills.appsPage.manageTabs.ariaLabel",
      defaultMessage: "Manage extensions",
      description: "Accessible label for switching between managed extension types"
    });
  let thornFifth = rootFifth.filter(item => item.id === "mcps" || showNonMcpTabs && item.count > 0).map(dowel);
  return <AppInitialPl ariaLabel={silkFifth} options={thornFifth} selectedId={currentTab} size="toolbar" onSelect={onSelectTab} />;
}
function dowel(uplandFifth) {
  return {
    id: uplandFifth.id,
    label: <>{uplandFifth.label}<span className="ml-0.5 text-token-input-placeholder-foreground">{uplandFifth.count}</span></>
  };
}
var flange, gib, $, hub, idler, jig, keeper, lug;
export const pluginsPageN = esmInit(() => {
  flange = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  serializeCharacterReferenceNode();
  ensureComposerEsm_Tft_Init();
  countLeadingZeroBits32();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  gib = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  MenuBorderSeparator();
  AppInitialE();
  requestRealtimeVoicePresentationSurface();
  AppInitialXz();
  ensureAuthProviderInit();
  RealtimeVoiceHostIdStub();
  AppInitialOZ();
  ensureSettingsQueryAtomsInit();
  ensureDropdownMenuInit();
  AppInitialZo();
  useClearBrowserBrowsingDataMutation();
  collectUniqueMappedPresenceEntries();
  AppInitialTm();
  useTeenOnboardingAgeGate();
  deferredUiCm();
  pluginDetailPageO();
  WritingBlockRenderer();
  ensureComposerEsm_Ilt_Init();
  hasInputItemsField();
  ensureComposerEsm_Sst_Init();
  ensureSelectWorkspacePXInit();
  ensureUseHomeDirectoryInit();
  ensureSkillsPageHelpersInit();
  ensureUseMediaQueryInit();
  ensureClientCoordinationServiceInit();
  conversationsSidebarMessages();
  ensureDropdownMenuPopoverInit();
  ensureAppIconSftInit();
  deferredUiBa();
  AppInitialQS();
  gamma();
  umbra();
  pluginDetailM();
  xenon();
  CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY();
  AppInitialFK();
  _pluginDetailPageR();
  codexMicroHasEverBeenDetected();
  AppInitialKz();
  resolveRequestedPluginSummary();
  amber();
  ensurePluginMentionPromptInit();
  _pluginDetailPageD();
  _pluginDetailPageC();
  _pluginDetailPageA();
  _s();
  wheat();
  eagle();
  ensureInstalledPluginsQueryInit();
  deferredHostsVh();
  north();
  ensureComposerEsm_K9_Init();
  deferredUiH();
  isOpenaiCuratedMarketplaceToken();
  ensureConfigQueryAtomsInit();
  ManagePluginDetailPage();
  Browser3();
  ensureAppScopeInit();
  extractColonPrefixedNamedTokens();
  AppIconOi();
  usePluginDetailQuery();
  trail();
  AppIconBO();
  ensureAppShellAtomsInit();
  AppInitialWj();
  ensureSkillsPageHelpersInit();
  ensureComposerEsm_FH_Init();
  scrollAppActionTargetTo();
  AppInitialQK();
  AppInitialLz();
  AppInitialUw();
  ManagePluginDetailPage();
  _c();
  pluginsPageS();
  AppInitialHp();
  opal();
  vista();
  crag();
  inlet();
  pluginDetailH();
  ManagePluginDetailPage();
  yard();
  pluginsPageU();
  drill();
  ensurePluginDetailPageInit();
  hub = 2e3;
  idler = 15e3;
  jig = "(max-width: 1023px)";
  keeper = "workspace-shared-with-me-private";
  lug = useQueryClient(appScopeAtom, vistaFifth => null);
});
