// Restored from ref/webview/assets/plugins-page-BCVTHZkx.js
// Wave GA — full polished body from `plugins-page-BCVTHZkx/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 141 (verified 247/388).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 8/15
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
import { ensureComposerEsm_AG_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Wlt_Init as EnsureComposerEsm_Wlt_Init } from "../../composer/composer-esm-inits";
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


// Wave5d unbound soft stubs.
const ensureComposerEsm_Wlt_Init: any = undefined;

// Wave5d soft JSX companions.
function As(props: {
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
function DeferredConversationWH3(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Eddy(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Knob(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Ledge(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function PluginDetailPageC(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function PluginDetailPageD(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Quarry(props: {
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

// Wave5d soft stubs.
const AppInitialCH: any = undefined;
const AppInitialPl: any = undefined;
const AppInitialSK: any = undefined;
const AppInitialYz: any = undefined;
const as: any = undefined;
const deferredConversationWH3: any = undefined;
const deferredUiJ1Stub: any = undefined;
const deferredUiWh: any = undefined;
const mire: any = undefined;
const pluginDetailPageC: any = undefined;
const pluginDetailPageD: any = undefined;
const pond: any = undefined;
const quarry: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;

function dome(falconThird) {
  let gammaThird = useIntl();
  if (falconThird.mode === "manage") {
    let xenonThird = falconThird.marketplaceUpgradeAction,
      yellowThird = gammaThird.formatMessage({
        id: "skills.appsPage.createPlugin",
        defaultMessage: "Create plugin",
        description: "Label for creating a new plugin on the Skills & Apps page"
      });
    let zincThird = !falconThird.canCreatePlugin,
      amberThird = <MemoizedFormattedMessage id="skills.appsPage.createPlugin" defaultMessage="Create plugin" description="Label for creating a new plugin on the Skills & Apps page" />;
    let basaltThird = {
      ariaLabel: yellowThird,
      disabled: zincThird,
      Icon: AppIconLV,
      label: amberThird,
      onSelect: falconThird.onCreatePlugin
    };
    let cedarThird = gammaThird.formatMessage({
      id: "skills.appsPage.createSkill",
      defaultMessage: "Create skill",
      description: "Label for creating a new skill on the Skills & Apps page"
    });
    let daisyThird = !falconThird.canCreateSkill,
      emberThird = <MemoizedFormattedMessage id="skills.appsPage.createSkill" defaultMessage="Create skill" description="Label for creating a new skill on the Skills & Apps page" />;
    let flintThird = {
      ariaLabel: cedarThird,
      disabled: daisyThird,
      Icon: LoadingPreviewIcon,
      label: emberThird,
      onSelect: falconThird.onCreateSkill
    };
    let garnetThird;
    if (garnetThird = [basaltThird, flintThird], falconThird.recordSkillAction) {
      let yarnThird = gammaThird.formatMessage({
        id: "skills.appsPage.recordSkill",
        defaultMessage: "Record a skill",
        description: "Label for recording a workflow and turning it into a skill on the Skills & Apps page"
      });
      let zephyrThird = <MemoizedFormattedMessage id="skills.appsPage.recordSkill" defaultMessage="Record a skill" description="Label for recording a workflow and turning it into a skill on the Skills & Apps page" />;
      let acornThird;
      acornThird = {
        ariaLabel: yarnThird,
        disabled: falconThird.recordSkillAction.disabled,
        Icon: AppIconUh,
        label: zephyrThird,
        onSelect: falconThird.recordSkillAction.onSelect
      };
      garnetThird.push(acornThird);
    }
    let hazelThird = falconThird.onExitManageMode == null ? [] : [{
      id: "plugins",
      label: <MemoizedFormattedMessage id="skills.appsPage.breadcrumb.root" defaultMessage="Plugins" description="Breadcrumb root label for the manage mode header on the Skills & Apps page" />,
      onClick: falconThird.onExitManageMode
    }];
    let ivoryThird = <MemoizedFormattedMessage id="skills.appsPage.breadcrumb.manage" defaultMessage="Manage" description="Breadcrumb label for manage mode on the Skills & Apps page" />;
    let jasperThird = <ToolbarBreadcrumb ancestors={hazelThird} current={ivoryThird} />;
    let kelpThird = falconThird.hostSelector,
      lotusThird = falconThird.searchInput,
      mintThird = <Eddy {...{
        actions: garnetThird
      }} />;
    let novaThird = gammaThird.formatMessage({
      id: "skills.appsPage.actionsMenu",
      defaultMessage: "Page actions",
      description: "Aria label for the actions dropdown trigger in the Skills & Apps page header"
    });
    let oliveThird = <CoerceLocalFilesystemPath {...{
      label: novaThird,
      className: "hidden md:inline-flex",
      iconClassName: "icon-sm"
    }} />;
    let prismThird = falconThird.isRefreshingPage ? VSCODE_EDITOR_ID : AppIconAlt,
      quillThird = event => {
        event.preventDefault();
        falconThird.onRefreshPage();
      };
    let reefThird = <MemoizedFormattedMessage id="skills.page.refreshSkills" defaultMessage="Refresh" description="Button label for reloading skills list" />;
    let sageThird = <DropdownMenu.Item LeftIcon={prismThird} leftIconClassName="icon-sm" disabled={falconThird.isRefreshDisabled} onSelect={quillThird}>{reefThird}</DropdownMenu.Item>;
    let topazThird = xenonThird ? <DropdownMenu.Item LeftIcon={xenonThird.isUpgrading ? VSCODE_EDITOR_ID : lerpIfFinite} leftIconClassName="icon-sm" disabled={xenonThird.disabled} onSelect={xenonThird.onUpgrade} tooltipText={gammaThird.formatMessage({
      id: "skills.appsPage.marketplace.upgradeAll.tooltip",
      defaultMessage: "Upgrade all marketplaces",
      description: "Tooltip for the Marketplace page action that upgrades all configured marketplaces"
    })}><MemoizedFormattedMessage id="skills.appsPage.marketplace.upgradeAll" defaultMessage="Upgrade" description="Dropdown item label for upgrading all configured marketplaces" /></DropdownMenu.Item> : null;
    let ultraThird = <DropdownMenuPopover align="end" contentWidth="icon" triggerButton={oliveThird}>{sageThird}{topazThird}</DropdownMenuPopover>;
    let vaporThird = <div className="flex min-w-0 items-center gap-2">{kelpThird}{lotusThird}{mintThird}{ultraThird}</div>;
    let wheatThird;
    return <div className="draggable flex w-full min-w-0 items-center justify-between gap-2 select-none electron:h-toolbar extension:py-row-y">{jasperThird}{vaporThird}</div>;
  }
  let harborThird;
  if (harborThird = falconThird.currentBrowseTab === "skills" ? [{
    ariaLabel: gammaThird.formatMessage({
      id: "skills.appsPage.createSkill",
      defaultMessage: "Create skill",
      description: "Label for creating a new skill on the Skills & Apps page"
    }),
    disabled: !falconThird.canCreateSkill,
    Icon: LoadingPreviewIcon,
    label: <MemoizedFormattedMessage id="skills.appsPage.createSkill" defaultMessage="Create skill" description="Label for creating a new skill on the Skills & Apps page" />,
    onSelect: falconThird.onCreateSkill
  }] : [{
    ariaLabel: gammaThird.formatMessage({
      id: "skills.appsPage.createPlugin",
      defaultMessage: "Create plugin",
      description: "Label for creating a new plugin on the Skills & Apps page"
    }),
    disabled: !falconThird.canCreatePlugin,
    Icon: AppIconLV,
    label: <MemoizedFormattedMessage id="skills.appsPage.createPlugin" defaultMessage="Create plugin" description="Label for creating a new plugin on the Skills & Apps page" />,
    onSelect: falconThird.onCreatePlugin
  }], falconThird.currentBrowseTab === "plugins") {
    let bloomThird = gammaThird.formatMessage({
      id: "skills.appsPage.addMarketplace",
      defaultMessage: "Add marketplace",
      description: "Label for adding a plugin marketplace on the Skills & Apps page"
    });
    let coralThird = <MemoizedFormattedMessage id="skills.appsPage.addMarketplace" defaultMessage="Add marketplace" description="Label for adding a plugin marketplace on the Skills & Apps page" />;
    let driftThird;
    driftThird = {
      ariaLabel: bloomThird,
      disabled: false,
      Icon: ensureComposerEsm_Wlt_Init,
      label: coralThird,
      onSelect: falconThird.onAddMarketplace
    };
    harborThird.push(driftThird);
  }
  if (falconThird.recordSkillAction) {
    let eagleThird = gammaThird.formatMessage({
      id: "skills.appsPage.recordSkill",
      defaultMessage: "Record a skill",
      description: "Label for recording a workflow and turning it into a skill on the Skills & Apps page"
    });
    let frostThird = <MemoizedFormattedMessage id="skills.appsPage.recordSkill" defaultMessage="Record a skill" description="Label for recording a workflow and turning it into a skill on the Skills & Apps page" />;
    let glideThird;
    glideThird = {
      ariaLabel: eagleThird,
      disabled: falconThird.recordSkillAction.disabled,
      Icon: AppIconUh,
      label: frostThird,
      onSelect: falconThird.recordSkillAction.onSelect
    };
    harborThird.push(glideThird);
  }
  let indigoThird = gammaThird.formatMessage({
    id: "skills.appsPage.managePlugins",
    defaultMessage: "Manage",
    description: "Label for managing plugins from the Skills & Apps page header"
  });
  let jadeThird = indigoThird,
    kiteThird = gammaThird.formatMessage({
      id: "skills.appsPage.browseToggle",
      defaultMessage: "Browse plugins or skills",
      description: "Accessible label for switching between Plugins and Skills on the Skills & Apps page"
    });
  let lemonThird = {
    id: "plugins",
    label: <MemoizedFormattedMessage id="skills.appsPage.browseTabs.plugins" defaultMessage="Plugins" description="Label for the Plugins option in the browse filter dropdown on the Skills & Apps page" />
  };
  let marbleThird = [lemonThird, {
    id: "skills",
    label: <MemoizedFormattedMessage id="skills.appsPage.skillsFilter.all" defaultMessage="Skills" description="Label for the Skills option in the browse filter dropdown on the Skills & Apps page" />
  }];
  let nickelThird = <AppInitialPl ariaLabel={kiteThird} selectedId={falconThird.currentBrowseTab} onSelect={falconThird.onBrowseTabSelect} size="toolbar" options={marbleThird} />;
  let onyxThird = falconThird.needsSkillsRefresh ? <ReadLoginRouteQuerySnapshot {...{
    color: "ghost",
    size: "toolbar",
    className: "hidden shrink-0 md:inline-flex",
    disabled: falconThird.isRefreshDisabled,
    onClick: falconThird.onRefreshPage,
    children: [falconThird.isRefreshingPage ? <VSCODE_EDITOR_ID className="icon-xs text-token-text-link-foreground" /> : <span className="icon-xs relative scale-50"><span className="absolute inset-0 rounded-full" style={{
        backgroundColor: "var(--vscode-textLink-foreground)"
      }} /></span>, <MemoizedFormattedMessage id="skills.page.refreshSkillsToUseNew" defaultMessage="Refresh to use new skill(s)" description="Button label shown when newly installed skills require a refresh before they can be used in the composer" />]
  }} /> : null;
  let pearlThird = falconThird.hostSelector,
    quartzThird = <MemoizedFormattedMessage id="skills.page.refreshSkills" defaultMessage="Refresh" description="Button label for reloading skills list" />;
  let riverThird = gammaThird.formatMessage({
    id: "skills.page.refreshSkills",
    defaultMessage: "Refresh",
    description: "Button label for reloading skills list"
  });
  let slateThird = falconThird.isRefreshingPage ? <VSCODE_EDITOR_ID className="icon-sm" /> : <AppIconAlt className="icon-sm" />;
  let timberThird = <OptionalTooltip tooltipContent={quartzThird}>{<ReadLoginRouteQuerySnapshot {...{
      "aria-label": riverThird,
      color: "ghost",
      size: "toolbar",
      className: "hidden md:inline-flex",
      disabled: falconThird.isRefreshDisabled,
      uniform: true,
      onClick: falconThird.onRefreshPage,
      children: slateThird
    }} />}</OptionalTooltip>;
  let umbraThird = falconThird.onManage == null ? null : <OptionalTooltip tooltipContent={jadeThird}>{<ReadLoginRouteQuerySnapshot {...{
      "aria-label": jadeThird,
      color: "ghost",
      size: "toolbar",
      uniform: true,
      onClick: falconThird.onManage,
      children: <DeferredConversationWH3 {...{
        className: "icon-sm"
      }} />
    }} />}</OptionalTooltip>;
  let violetThird = <Eddy {...{
    actions: harborThird
  }} />;
  let willowThird = <div className="flex min-w-0 items-center justify-end gap-2">{onyxThird}{pearlThird}{timberThird}{umbraThird}{violetThird}</div>;
  return <div className="draggable flex w-full min-w-0 items-center justify-between gap-2 select-none electron:h-toolbar extension:py-row-y">{nickelThird}{willowThird}</div>;
}
function eddy(honeyThird) {
  let {
      actions
    } = honeyThird,
    irisThird = useIntl(),
    jewelThird = actions[0];
  if (jewelThird == null) {
    let questThird;
    return <></>;
  }
  if (actions.length === 1) {
    let ridgeThird = <EnsureComposerEsm_Wlt_Init {...{
      className: "icon-xs"
    }} />;
    let stormThird = <ReadLoginRouteQuerySnapshot {...{
      "aria-label": jewelThird.ariaLabel,
      color: "ghost",
      size: "toolbar",
      className: "hidden md:inline-flex",
      disabled: jewelThird.disabled,
      uniform: true,
      onClick: jewelThird.onSelect,
      children: ridgeThird
    }} />;
    let tideThird;
    return <OptionalTooltip tooltipContent={jewelThird.label}>{stormThird}</OptionalTooltip>;
  }
  let knollThird = jewelThird.ariaLabel,
    lunarThird = jewelThird.disabled,
    mossThird = irisThird.formatMessage({
      id: "skills.appsPage.createOptions",
      defaultMessage: "Create options",
      description: "Aria label for the create actions dropdown trigger on the Skills & Apps page"
    });
  let northThird = jewelThird.label,
    orbitThird = actions.map(fjord);
  let pineThird = <MemoizedFormattedMessage id="skills.appsPage.create" defaultMessage="Create" description="Label for the primary create button on the Skills & Apps page" />;
  return <CompoundButtonMenu color="primary" size="toolbar" className="hidden md:inline-flex" dropdownAlign="end" dropdownContentClassName="pt-2" dropdownContentWidth="icon" primaryAriaLabel={knollThird} primaryDisabled={lunarThird} secondaryAriaLabel={mossThird} tooltipContent={northThird} dropdownContent={orbitThird} onClick={jewelThird.onSelect}>{pineThird}</CompoundButtonMenu>;
}
function fjord(unityThird) {
  return <DropdownMenu.Item key={unityThird.ariaLabel} LeftIcon={unityThird.Icon} disabled={unityThird.disabled} onSelect={unityThird.onSelect}>{unityThird.label}</DropdownMenu.Item>;
}
var glen,
  hearth,
  inlet = esmInit(() => {
    glen = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    AppInitialYz();
    ensureDropdownMenuInit();
    ensurePinnedConversationsQueryInit();
    WritingBlockRenderer();
    ensureComposerEsm_Sut_Init();
    initToolbarBreadcrumb();
    ensureComposerEsm_Hlt_Init();
    ensureComposerEsm_RV_Init();
    deferredUiJ1Stub();
    ensureSkillsPageHelpersInit();
    deferredUiWh();
    useEventCallback();
    ensureHooksFocusIconInit();
    AppInitialCH();
  });
function jetty(valeThird) {
  let {
      cardPlacementContext,
      catalogStatusMessage,
      contentAfterConnected,
      errorMessage,
      homeDirectory,
      hostId,
      pluginInstallationStatus,
      isLoading,
      isSingleColumn = false,
      reducedMotion,
      showSectionCounts = false,
      pendingPluginId,
      uninstalling,
      highlightedPluginKey,
      onToggleInstalledPluginEnabled,
      onInstallPlugin: waveThird,
      onManage,
      onOpenPluginDetails,
      onShareInstalledPlugin,
      onTryInChat,
      onUninstallInstalledPlugin,
      sections
    } = valeThird,
    apexThird,
    brookThird,
    cliffThird,
    duskThird,
    elmThird,
    fernThird;
  fernThird = Symbol.for("react.early_return_sentinel");
  bb0: {
    let groveThird = sections.filter(el),
      hillThird = <MemoizedFormattedMessage id="skills.appsPage.empty.plugins" defaultMessage="No plugins found" description="Empty state title when there are no plugins on the Plugins tab" />;
    let isleThird = hillThird,
      juniperThird;
    if (juniperThird = catalogStatusMessage == null ? null : <div className="py-2 text-center text-sm text-token-text-tertiary">{catalogStatusMessage}</div>, apexThird = juniperThird, isLoading || errorMessage || groveThird.length === 0) {
      let oakThird = [];
      let petalThird = <div className="flex min-h-0 flex-1">{<As {...{
          errorMessage,
          gridGap: "catalog",
          hostId,
          pluginInstallationStatus,
          isLoading,
          isSingleColumn: isSingleColumn,
          installedStateAction: "status",
          highlightedPluginKey,
          plugins: oakThird,
          onInstallPlugin: waveThird,
          onOpenPluginDetails,
          onTryInChat,
          onToggleInstalledPluginEnabled,
          onUninstallInstalledPlugin,
          pendingPluginId,
          uninstalling,
          reducedMotion,
          emptyStateAction: catalogStatusMessage,
          emptyStateTitle: isleThird
        }} />}</div>;
      let quietThird;
      quietThird = <div className="flex h-full min-h-full flex-1 flex-col gap-8">{contentAfterConnected}{petalThird}</div>;
      fernThird = quietThird;
      break bb0;
    }
    let lagoonThird = groveThird.findIndex($c),
      meadowThird = rainThird => {
        let {
          section,
          plugins,
          visibleItemLimit
        } = rainThird;
        return section.id === "plugins-connected" ? <Knob key={section.id} {...{
          id: section.id,
          plugins,
          onManage,
          onOpenPluginDetails
        }} /> : <PluginDetailPageD key={section.id} {...{
          count: showSectionCounts ? plugins.length : undefined,
          id: section.id,
          title: section.title,
          children: <Ledge {...{
            cardPlacementContext,
            errorMessage,
            homeDirectory,
            hostId,
            pluginInstallationStatus,
            isLoading,
            isSingleColumn: isSingleColumn,
            highlightedPluginKey,
            plugins,
            onInstallPlugin: waveThird,
            onOpenPluginDetails,
            onShareInstalledPlugin: section.id === "plugins-created-by-you" ? onShareInstalledPlugin : undefined,
            onTryInChat,
            onToggleInstalledPluginEnabled,
            onUninstallInstalledPlugin,
            pendingPluginId,
            uninstalling,
            reducedMotion,
            sectionId: section.id,
            visibleItemLimit,
            emptyStateAction: catalogStatusMessage,
            emptyStateTitle: isleThird
          }} />
        }} />;
      };
    let nestThird = groveThird.map(meadowThird);
    brookThird = "flex flex-1 flex-col gap-8";
    cliffThird = lagoonThird === -1 ? null : nestThird.slice(0, lagoonThird + 1);
    duskThird = contentAfterConnected;
    elmThird = lagoonThird === -1 ? nestThird : nestThird.slice(lagoonThird + 1);
  }
  if (fernThird !== Symbol.for("react.early_return_sentinel")) return fernThird;
  return <div className={brookThird}>{cliffThird}{duskThird}{elmThird}{apexThird}</div>;
}
function $c(seedThird) {
  let {
    section
  } = seedThird;
  return section.id === "plugins-connected";
}
function el(trailThird) {
  let {
    plugins
  } = trailThird;
  return plugins.length > 0;
}
function knob(urnThird) {
  let {
      id,
      plugins,
      onManage,
      onOpenPluginDetails
    } = urnThird,
    vineThird = useIntl(),
    windThird = vineThird.formatMessage({
      id: "skills.appsPage.managePlugins",
      defaultMessage: "Manage",
      description: "Label for managing plugins from the Skills & Apps page header"
    });
  let yarrowThird = windThird,
    azureThird = <h2 className="text-lg leading-6 font-medium text-token-foreground">{<MemoizedFormattedMessage id="skills.appsPage.section.connected" defaultMessage="Installed" description="Title for the section containing installed plugins" />}</h2>;
  let birchThird = <DeferredConversationWH3 {...{
    className: "icon-sm"
  }} />;
  let canyonThird = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": yarrowThird,
    color: "ghost",
    size: "toolbar",
    uniform: true,
    onClick: onManage,
    children: birchThird
  }} />;
  let dewThird = <div className="flex items-center justify-between gap-3 border-b border-token-border/40 px-2 pb-2">{azureThird}{<OptionalTooltip tooltipContent={yarrowThird}>{canyonThird}</OptionalTooltip>}</div>;
  let everThird = <Quarry {...{
    plugins,
    onManage,
    onOpenPluginDetails
  }} />;
  return <section className="flex flex-col gap-1" id={id}>{dewThird}{everThird}</section>;
}
function ledge(fieldThird) {
  let {
      cardPlacementContext,
      emptyStateAction,
      emptyStateTitle,
      errorMessage,
      homeDirectory,
      hostId,
      pluginInstallationStatus,
      isLoading,
      isSingleColumn,
      highlightedPluginKey,
      plugins,
      onInstallPlugin,
      onOpenPluginDetails,
      onShareInstalledPlugin,
      onTryInChat,
      onToggleInstalledPluginEnabled: grainThird,
      onUninstallInstalledPlugin,
      pendingPluginId,
      uninstalling,
      reducedMotion,
      sectionId,
      visibleItemLimit = 6
    } = fieldThird,
    havenThird = pluginInstallationStatus?.hostId === hostId ? plugins.find(item => item.plugin.id === pluginInstallationStatus.pluginId) : undefined;
  let inkThird = havenThird,
    jadeiteThird = new Map(plugins.map(pond));
  let kernelThird = jadeiteThird,
    leafThird = opalThird => {
      if (cardPlacementContext == null) return;
      let plumeThird = kernelThird.get(AppInitialSK(opalThird));
      if (plumeThird != null) return cardPlacementContext.kind === "home" ? {
        kind: cardPlacementContext.kind,
        position: plumeThird,
        sectionId
      } : {
        categoryId: cardPlacementContext.categoryId,
        kind: cardPlacementContext.kind,
        position: plumeThird
      };
    };
  let mapleThird = leafThird,
    nimbusThird = quillowThird => quillowThird.length === 0 ? null : <As {...{
      errorMessage,
      gridGap: "catalog",
      homeDirectory,
      hostId,
      highlightedPluginKey,
      pluginInstallationStatus,
      isLoading,
      isSingleColumn,
      installedStateAction: "status",
      plugins: quillowThird,
      onInstallPlugin,
      onOpenPluginDetails: onOpenPluginDetails == null ? undefined : rootThird => {
        onOpenPluginDetails(rootThird, mapleThird(rootThird));
      },
      onShareInstalledPlugin,
      onTryInChat,
      onToggleInstalledPluginEnabled: grainThird,
      onUninstallInstalledPlugin,
      pendingPluginId,
      uninstalling,
      reducedMotion,
      emptyStateAction,
      emptyStateTitle
    }} />;
  return <div className="flex min-h-0 flex-1 flex-col">{<PluginDetailPageC {...{
      batchSize: 12,
      items: plugins,
      pinnedItem: inkThird,
      visibleItemLimit: visibleItemLimit,
      renderExpandRow: mire,
      children: nimbusThird
    }} />}</div>;
}
