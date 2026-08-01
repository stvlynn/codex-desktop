// Restored from ref/webview/assets/plugins-page-BCVTHZkx.js
// Wave GA — full polished body from `plugins-page-BCVTHZkx/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 141 (verified 247/388).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 7/15
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
function DeferredUiB(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function DeferredUiH(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function DeferredUiU(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Dismiss(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function EnsureControlGroupInit(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Ever(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function IsStartingProcessExpired(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Kernel(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function PluginsPageL(props: {
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
function SetRemoteControlEnabledForHost(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function UsePointerSurfaceInteractionGate(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialNi: any = undefined;
const AppInitialNt: any = undefined;
const AppInitialVO: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const deferredUiU: any = undefined;
const dismiss: any = undefined;
const pluginDetailPageU: any = undefined;
const pluginDetailPageV: any = undefined;
const pluginDetailPageW: any = undefined;
const pluginsPageA: any = undefined;
const pluginsPageL: any = undefined;
const pluginsPageU: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const setRemoteControlEnabledForHost: any = undefined;
const useClearBrowserBrowsingDataMutation: any = undefined;

export var pluginsPageS = esmInit(() => {
  ensureComposerEsm_Sst_Init();
  ensurePersistedAtomInit();
  birch = {
    plugin: {
      firstUsePrompt: "help me create a plugin",
      skillName: "plugin-creator"
    },
    skill: {
      firstUsePrompt: "help me create a skill",
      skillName: "skill-creator"
    }
  };
  canyon = createPersistedAtom("has-opened-plugin-creator-prefill-v1", false);
  pluginsPageA = createPersistedAtom("has-opened-skill-creator-prefill-v1", false);
});
var birch,
  canyon,
  dew,
  ever,
  field = esmInit(() => {
    react();
    ever = handleSecond => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...handleSecond}><path fillRule="evenodd" clipRule="evenodd" d="M10.8828 9.61914L11.043 9.66309L17.5928 11.9746C18.5062 12.297 18.5682 13.565 17.6904 13.9746L15.1562 15.1562L13.9746 17.6904C13.5907 18.5132 12.4525 18.5107 12.0459 17.7549L11.9746 17.5928L9.66309 11.043C9.37948 10.2394 10.087 9.46369 10.8828 9.61914ZM13.0264 16.5771L13.9902 14.5127L14.0342 14.4287C14.1447 14.2377 14.3114 14.0842 14.5127 13.9902L16.5771 13.0264L11.0889 11.0889L13.0264 16.5771Z" fill="currentColor" /><path d="M3.33301 12.668C3.70017 12.668 3.99787 12.9659 3.99805 13.333V14.166C3.99805 15.1794 4.81968 16.0008 5.83301 16.001H6.66602L6.80078 16.0146C7.10342 16.0768 7.33074 16.3451 7.33105 16.666C7.33105 16.9872 7.10357 17.2552 6.80078 17.3174L6.66602 17.3311H5.83301C4.08514 17.3309 2.66797 15.9139 2.66797 14.166V13.333C2.66815 12.966 2.96596 12.6681 3.33301 12.668Z" fill="currentColor" /><path d="M6.80078 2.68164C7.10349 2.74379 7.3309 3.01195 7.33105 3.33301C7.33105 3.65422 7.1036 3.9222 6.80078 3.98438L6.66602 3.99805H5.83301C4.81979 3.99818 3.99823 4.8198 3.99805 5.83301V6.66602C3.99805 7.03329 3.70028 7.33105 3.33301 7.33105C2.96585 7.33092 2.66797 7.0332 2.66797 6.66602V5.83301C2.66815 4.08526 4.08525 2.6681 5.83301 2.66797H6.66602L6.80078 2.68164Z" fill="currentColor" /><path d="M14.166 2.66797C15.9139 2.66797 17.3309 4.08518 17.3311 5.83301V6.66602C17.3311 7.03329 17.0333 7.33105 16.666 7.33105C16.299 7.33075 16.001 7.03309 16.001 6.66602V5.83301C16.0008 4.81972 15.1793 3.99805 14.166 3.99805H13.333C12.9659 3.99791 12.668 3.7002 12.668 3.33301C12.6681 2.96597 12.966 2.6681 13.333 2.66797H14.166Z" fill="currentColor" /></svg>;
  });
function grain(insertSecond) {
  let {
      errorMessage,
      isLoading,
      isRetrying,
      isUpgradingMarketplaces,
      marketplaceLoadErrors,
      marketplaces,
      configuredMarketplaceNames,
      configuredGitMarketplaceNames,
      onUpgradeMarketplace,
      onRemoveMarketplace,
      onRetry,
      pendingUpgradeMarketplaceName,
      pendingRemoveMarketplaceName
    } = insertSecond,
    jacketSecond = useIntl();
  if (isLoading) {
    let mountSecond;
    return <div className="flex min-h-0 flex-1 items-center justify-center py-8"><AppInitialNi>{<MemoizedFormattedMessage id="skills.appsPage.marketplace.loading" defaultMessage="Loading marketplaces…" description="Loading label on the manage Marketplace tab" />}</AppInitialNi></div>;
  }
  if (errorMessage) {
    let nozzleSecond = <MemoizedFormattedMessage id="skills.appsPage.marketplace.loadError.title" defaultMessage="Unable to load marketplaces" description="Title shown when plugin marketplaces cannot be loaded" />;
    let platenSecond = () => {
      onRetry();
    };
    let ratchetSecond = <MemoizedFormattedMessage id="skills.appsPage.marketplace.loadError.retry" defaultMessage="Retry" description="Retry button label for the marketplace list error state" />;
    let shimSecond = <ReadLoginRouteQuerySnapshot {...{
      color: "outline",
      disabled: isRetrying,
      onClick: platenSecond,
      children: ratchetSecond
    }} />;
    let tappetSecond;
    return <div className="flex min-h-0 flex-1 items-center justify-center py-8">{<Dismiss {...{
        title: nozzleSecond,
        description: errorMessage,
        actions: shimSecond
      }} />}</div>;
  }
  let knurlSecond = <Kernel {...{
    errors: marketplaceLoadErrors,
    isRetrying,
    onRetry
  }} />;
  let leverSecond = marketplaces.length === 0 ? <div className="flex min-h-0 flex-1 items-center justify-center py-8"><div className="text-sm text-token-text-secondary">{<MemoizedFormattedMessage id="skills.appsPage.empty.marketplace" defaultMessage="No marketplaces found" description="Empty state title when there are no marketplaces on the manage Marketplace tab" />}</div></div> : <PluginsPageL {...{
    gap: "compact",
    isSingleColumn: true,
    children: marketplaces.map(item => {
      let arborSecond = pluginDetailPageU(item, configuredMarketplaceNames),
        bushingSecond = pendingRemoveMarketplaceName === item.name && arborSecond,
        collarSecond = pluginDetailPageW(item, configuredGitMarketplaceNames),
        dowelSecond = pendingUpgradeMarketplaceName === item.name && collarSecond,
        flangeSecond = isUpgradingMarketplaces || pendingUpgradeMarketplaceName != null,
        gibSecond = !collarSecond || flangeSecond || pendingRemoveMarketplaceName != null,
        hubSecond = !arborSecond || bushingSecond || flangeSecond;
      return <StackedCardHeader key={`${item.name}:${item.path ?? "remote"}`} className="group justify-center border-none" actionsPlacement="center" description={<><span>{<MemoizedFormattedMessage id="skills.appsPage.marketplace.pluginCount" defaultMessage={"{count, plural, one {# plugin} other {# plugins}}"} description="Plugin count shown for a marketplace on the manage Marketplace tab" values={{
            count: item.pluginCount
          }} />}</span>{item.path == null ? null : <span className="truncate">{item.path}</span>}</>} descriptionClassName="flex min-w-0 flex-col gap-0.5 leading-snug" icon={<Ever {...{
        className: "icon-sm text-token-text-secondary"
      }} />} title={pluginDetailPageV(item)} actions={<EnsureControlGroupInit {...{
        children: [<OptionalTooltip tooltipContent={haven(item, collarSecond)}>{<ReadLoginRouteQuerySnapshot {...{
            className: "shrink-0",
            color: "outline",
            size: "default",
            disabled: gibSecond,
            loading: dowelSecond,
            "aria-label": jacketSecond.formatMessage({
              id: "skills.appsPage.marketplace.upgrade.ariaLabel",
              defaultMessage: "Upgrade marketplace",
              description: "Accessible label for upgrading a marketplace on the manage Marketplace tab"
            }),
            onClick: event => {
              event.stopPropagation();
              collarSecond && onUpgradeMarketplace(item);
            },
            children: <MemoizedFormattedMessage id="skills.appsPage.marketplace.upgrade.button" defaultMessage="Upgrade" description="Button label for upgrading a marketplace on the manage Marketplace tab" />
          }} />}</OptionalTooltip>, <OptionalTooltip tooltipContent={ink(item, arborSecond)}>{<ReadLoginRouteQuerySnapshot {...{
            color: "ghost",
            size: "icon",
            disabled: hubSecond,
            loading: bushingSecond,
            "aria-label": jacketSecond.formatMessage({
              id: "skills.appsPage.marketplace.remove.ariaLabel",
              defaultMessage: "Remove marketplace",
              description: "Accessible label for removing a marketplace on the manage Marketplace tab"
            }),
            onClick: event => {
              event.stopPropagation();
              arborSecond && onRemoveMarketplace(item);
            },
            children: bushingSecond ? null : <AppIconBO className="icon-sm" />
          }} />}</OptionalTooltip>]
      }} />} />;
    })
  }} />;
  return <div className="flex min-h-0 flex-1 flex-col gap-3">{knurlSecond}{leverSecond}</div>;
}
function haven(idlerSecond, jigSecond) {
  return jigSecond ? <MemoizedFormattedMessage id="skills.appsPage.marketplace.upgrade" defaultMessage="Upgrade marketplace" description="Tooltip label for upgrading a marketplace on the manage Marketplace tab" /> : idlerSecond.isBuiltIn ? <MemoizedFormattedMessage id="skills.appsPage.marketplace.upgrade.builtInDisabled" defaultMessage="Built-in marketplaces update automatically" description="Tooltip label for disabled built-in marketplace upgrade" /> : <MemoizedFormattedMessage id="skills.appsPage.marketplace.upgrade.localDisabled" defaultMessage="Only Git marketplaces can be upgraded" description="Tooltip label for disabled non-Git marketplace upgrade" />;
}
function ink(keeperSecond, lugSecond) {
  return lugSecond ? <MemoizedFormattedMessage id="skills.appsPage.marketplace.remove" defaultMessage="Remove marketplace" description="Tooltip label for removing a marketplace on the manage Marketplace tab" /> : keeperSecond.isBuiltIn ? <MemoizedFormattedMessage id="skills.appsPage.marketplace.remove.builtInDisabled" defaultMessage="Built-in marketplaces cannot be removed" description="Tooltip label for disabled built-in marketplace removal" /> : <MemoizedFormattedMessage id="skills.appsPage.marketplace.remove.configuredDisabled" defaultMessage="Only configured marketplaces can be removed" description="Tooltip label for disabled unconfigured marketplace removal" />;
}
function jadeite(mandrelSecond) {
  let {
      isRemoving,
      marketplace,
      onOpenChange,
      onRemove
    } = mandrelSecond,
    nippleSecond = marketplace == null ? "" : pluginDetailPageV(marketplace);
  let orificeSecond = nippleSecond,
    pinSecond = marketplace != null,
    raceSecond = event => {
      event.preventDefault();
      marketplace != null && onRemove(marketplace);
    };
  let sleeveSecond = <MemoizedFormattedMessage id="skills.appsPage.marketplace.removeDialog.title" defaultMessage={"Remove \"{marketplaceName}\"?"} description="Title for the dialog confirming marketplace removal" values={{
    marketplaceName: orificeSecond
  }} />;
  let trunnionSecond = <MemoizedFormattedMessage id="skills.appsPage.marketplace.removeDialog.description" defaultMessage="This removes the marketplace from your configuration. Its plugins won't appear unless you add it again." description="Description for the dialog confirming marketplace removal" />;
  let bossSecond = <DeferredUiU {...{
    children: <DeferredUiH {...{
      title: sleeveSecond,
      subtitle: trunnionSecond,
      subtitleSize: "sm"
    }} />
  }} />;
  let camSecond = () => {
    onOpenChange(false);
  };
  let detentSecond = <MemoizedFormattedMessage id="skills.appsPage.marketplace.removeDialog.cancel" defaultMessage="Cancel" description="Cancel button label in the remove marketplace dialog" />;
  let eccentricSecond = <ReadLoginRouteQuerySnapshot {...{
    color: "secondary",
    disabled: isRemoving,
    onClick: camSecond,
    children: detentSecond
  }} />;
  let followerSecond = <MemoizedFormattedMessage id="skills.appsPage.marketplace.removeDialog.confirm" defaultMessage="Remove" description="Confirm button label in the remove marketplace dialog" />;
  let guideSecond = <ReadLoginRouteQuerySnapshot {...{
    color: "danger",
    loading: isRemoving,
    type: "submit",
    children: followerSecond
  }} />;
  let helixSecond = <DeferredUiU {...{
    children: <SetRemoteControlEnabledForHost {...{
      children: [eccentricSecond, guideSecond]
    }} />
  }} />;
  let impellerSecond = <DeferredUiB {...{
    as: "form",
    onSubmit: raceSecond,
    children: [bossSecond, helixSecond]
  }} />;
  return <UsePointerSurfaceInteractionGate {...{
    open: pinSecond,
    onOpenChange,
    size: "compact",
    children: impellerSecond
  }} />;
}
function kernel(journalSecond) {
  let {
    errors,
    isRetrying,
    onRetry
  } = journalSecond;
  if (errors.length === 0) return null;
  let kingpinSecond, landSecond, meshSecond, neckSecond, padSecond, quillshaftSecond, rollerSecond;
  {
    let ferruleSecond = errors.slice(0, 3);
    kingpinSecond = errors.length - ferruleSecond.length;
    rollerSecond = "border-token-border-medium bg-token-main-surface-secondary rounded-md border p-3";
    quillshaftSecond = "flex flex-wrap items-start justify-between gap-3";
    neckSecond = "min-w-0 flex-1";
    padSecond = <div className="text-sm font-medium">{<MemoizedFormattedMessage id="skills.appsPage.marketplace.partialLoadError.title" defaultMessage="Some marketplaces could not be loaded" description="Banner title shown when some plugin marketplaces fail to load" />}</div>;
    landSecond = "mt-2 flex flex-col gap-2 text-xs text-token-text-secondary";
    meshSecond = ferruleSecond.map(leaf);
  }
  let spindleSecond = kingpinSecond > 0 ? <div>{<MemoizedFormattedMessage id="skills.appsPage.marketplace.partialLoadError.more" defaultMessage={"{count, plural, one {# more marketplace could not be loaded} other {# more marketplaces could not be loaded}}"} description="Summary shown when not all marketplace load errors fit in the banner" values={{
      count: kingpinSecond
    }} />}</div> : null;
  let thrustSecond = <div className={landSecond}>{meshSecond}{spindleSecond}</div>;
  let yokeSecond = <div className={neckSecond}>{padSecond}{thrustSecond}</div>;
  let baffleSecond = () => {
    onRetry();
  };
  let capstanSecond = <MemoizedFormattedMessage id="skills.appsPage.marketplace.partialLoadError.retry" defaultMessage="Retry" description="Retry button label for partial marketplace load errors" />;
  let diaphragmSecond = <ReadLoginRouteQuerySnapshot {...{
    color: "outline",
    disabled: isRetrying,
    onClick: baffleSecond,
    children: capstanSecond
  }} />;
  let elbowSecond = <div className={quillshaftSecond}>{yokeSecond}{diaphragmSecond}</div>;
  return <div className={rollerSecond}>{elbowSecond}</div>;
}
function leaf(grommetSecond, headerSecond) {
  return <div key={`${grommetSecond.marketplacePath}:${headerSecond}`} className="min-w-0"><div className="truncate font-mono">{grommetSecond.marketplacePath}</div><div className="break-words">{grommetSecond.message}</div></div>;
}
var maple,
  nimbus,
  opal = esmInit(() => {
    maple = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    AppInitialNt();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    useClearBrowserBrowsingDataMutation();
    ensureComposerEsm_Hlt_Init();
    AppInitialVO();
    field();
    ControlGroup();
    useGateEnabledWithAccountData();
    pluginsPageU();
    pluginDetailH();
  });
function plume(injectorSecond) {
  return decodeBase64ToBytes.safePost("/plugins/user-suggestions", {
    requestBody: {
      suggestion: injectorSecond.trim()
    }
  });
}
var quillow = esmInit(() => {
  ensureCloudApiClientInit();
});
function root({
  initialSuggestion,
  onClose
}) {
  let jumperSecond = CodexPluginActionType(appScopeAtom),
    kerfSecond = useIntl(),
    [louverSecond, manifoldSecond] = silk.useState(false),
    [nipSecond, outletSecond] = silk.useState(false),
    [packingSecond, reducerSecond] = silk.useState(() => initialSuggestion.trim().slice(0, upland)),
    [strainerSecond, teeSecond] = silk.useState(null),
    unionSecond = packingSecond.trim(),
    ventSecond = async event => {
      if (event.preventDefault(), !(unionSecond.length === 0 || nipSecond)) {
        outletSecond(true);
        teeSecond(null);
        try {
          await plume(packingSecond);
          onClose();
          jumperSecond.get(toastAtom).success(kerfSecond.formatMessage({
            id: "skills.appsPage.pluginRequest.success",
            defaultMessage: "Plugin request submitted",
            description: "Toast shown after a plugin suggestion is submitted successfully"
          }));
        } catch (wyeSecond) {
          teeSecond(wyeSecond instanceof ensureReviewFileAppActionAttrsInit && wyeSecond.status === 429 ? "rate-limited" : "failed");
        } finally {
          outletSecond(false);
        }
      }
    };
  return <UsePointerSurfaceInteractionGate {...{
    open: true,
    onOpenChange: zenerSecond => {
      !zenerSecond && !nipSecond && onClose();
    },
    shouldIgnoreClickOutside: nipSecond,
    showDialogClose: !nipSecond,
    size: "compact",
    children: <DeferredUiB {...{
      as: "form",
      onSubmit: alphaThird => void ventSecond(alphaThird),
      children: [<DeferredUiU {...{
        children: <DeferredUiH {...{
          title: <RealtimeVoiceHostId className="contents"><MemoizedFormattedMessage id="skills.appsPage.pluginRequest.title" defaultMessage="Request a plugin" description="Title for the plugin request dialog" /></RealtimeVoiceHostId>,
          subtitle: <IsStartingProcessExpired {...{
            className: "contents",
            children: <MemoizedFormattedMessage id="skills.appsPage.pluginRequest.description" defaultMessage="Tell us which plugin you’d like and what you’d use it for" description="Description for the plugin request dialog" />
          }} />
        }} />
      }} />, <DeferredUiU {...{
        className: "gap-2",
        children: [<textarea id="plugin-request-suggestion" aria-describedby={strainerSecond == null ? undefined : "plugin-request-error"} aria-invalid={strainerSecond != null} aria-label={kerfSecond.formatMessage({
          id: "skills.appsPage.pluginRequest.fieldAriaLabel",
          defaultMessage: "Plugin suggestion",
          description: "Accessible label for the plugin suggestion field"
        })} autoFocus={true} className="min-h-28 w-full resize-y rounded-2xl border border-token-border px-3 py-2 text-token-input-foreground shadow-sm outline-none focus:ring-1 focus:ring-token-focus-border" disabled={nipSecond} maxLength={upland} onChange={event => {
          reducerSecond(event.target.value);
          teeSecond(null);
        }} onFocus={event => {
          if (!louverSecond) {
            let bravoThird = event.currentTarget.value.length;
            event.currentTarget.setSelectionRange(bravoThird, bravoThird);
            manifoldSecond(true);
          }
        }} onKeyDown={event => {
          event.key === "Enter" && (event.metaKey || event.ctrlKey) && !event.nativeEvent.isComposing && (event.preventDefault(), event.currentTarget.form?.requestSubmit());
        }} placeholder={kerfSecond.formatMessage({
          id: "skills.appsPage.pluginRequest.placeholder",
          defaultMessage: "Describe your plugin",
          description: "Placeholder guidance for the plugin suggestion field"
        })} value={packingSecond} />, strainerSecond == null ? null : <div id="plugin-request-error" className="text-sm text-token-error-foreground" role="alert">{strainerSecond === "rate-limited" ? <MemoizedFormattedMessage id="skills.appsPage.pluginRequest.rateLimited" defaultMessage="You’ve submitted several requests. Try again in a minute" description="Error shown when a user submits too many plugin requests" /> : <MemoizedFormattedMessage id="skills.appsPage.pluginRequest.failed" defaultMessage="Couldn’t submit your request. Try again" description="Error shown when a plugin request fails" />}</div>]
      }} />, <DeferredUiU {...{
        children: <SetRemoteControlEnabledForHost {...{
          children: [<ReadLoginRouteQuerySnapshot {...{
            color: "outline",
            disabled: nipSecond,
            onClick: onClose,
            children: <MemoizedFormattedMessage id="skills.appsPage.pluginRequest.cancel" defaultMessage="Cancel" description="Cancel button in the plugin request dialog" />
          }} />, <ReadLoginRouteQuerySnapshot {...{
            disabled: unionSecond.length === 0,
            loading: nipSecond,
            type: "submit",
            children: <MemoizedFormattedMessage id="skills.appsPage.pluginRequest.submit" defaultMessage="Submit request" description="Submit button in the plugin request dialog" />
          }} />]
        }} />
      }} />]
    }} />
  }} />;
}
var silk,
  thorn,
  upland,
  vista = esmInit(() => {
    ensureComposerEsm_MT_Init();
    silk = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    ensureComposerEsm_Ilt_Init();
    quillow();
    ensureAppScopeInit();
    appActionSidebarSectionRefSchema();
    upland = 2e3;
  }),
  wisp,
  yonder = esmInit(() => {
    ensureIntlFormattersInit();
    wisp = identity({
      open: {
        id: "skills.appsPage.pluginRequest.open",
        defaultMessage: "Request a plugin",
        description: "Button label that opens the plugin request dialog"
      }
    });
  });
function zenith(copperThird) {
  let {
      onRequestPlugin
    } = copperThird,
    deltaThird = <div className="text-base text-token-text-secondary">{<MemoizedFormattedMessage id="skills.appsPage.empty.plugins" defaultMessage="No plugins found" description="Empty state title when there are no plugins on the Plugins tab" />}</div>;
  let echoThird = <MemoizedFormattedMessage {...wisp.open} />;
  return <div className="flex flex-col items-start gap-3">{deltaThird}{<ReadLoginRouteQuerySnapshot {...{
      color: "outline",
      size: "medium",
      onClick: onRequestPlugin,
      children: echoThird
    }} />}</div>;
}
var anvil,
  beacon,
  crag = esmInit(() => {
    anvil = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    yonder();
  });
