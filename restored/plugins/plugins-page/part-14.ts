// Restored from ref/webview/assets/plugins-page-BCVTHZkx.js
// Wave GA — full polished body from `plugins-page-BCVTHZkx/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 141 (verified 247/388).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 14a
/* split-lane-import-depth:1 */

import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser } from "../../account/open-in-browser";
import {
  appActionSidebarProjectRefSchema,
  appActionSidebarSectionRefSchema,
  ensureAppActionPayloadSchemasInit,
} from "../../actions/app-action-payload-schemas";
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
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_AG_Init,
  ensureComposerEsm_FH_Init,
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_J0_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_M0_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_RV_Init,
  ensureComposerEsm_Sst_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Utt_Init,
  ensureComposerEsm_Wlt_Init,
} from "../../composer/composer-esm-inits";
import {
  ensureConversationPageEsm_B0_Init,
  ensureConversationPageEsm_Jj_Init,
} from "../../conversation/conversation-page-esm-inits";
import {
  createPersistedAtom,
  ensurePersistedAtomInit,
} from "../../boundaries/persisted-atom";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import {
  useLocation,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import {
  ensurePluginMentionPromptInit,
  firstNonEmptyTrimmedString,
} from "../../browser/browser-use-helpers";
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
import {
  setCodexMicroHudOpen,
  setCodexMicroJoystickOnStore,
} from "../../desktop/codex-micro-input-state";
import { ensureCodexMicroJoystickGeometryInit } from "../../desktop/codex-micro-joystick-geometry";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DEVELOPERS_OPENAI_COM_CODEX_MCP_URL } from "../../docs/codex-doc-urls";
import { fileExtensionFromPath } from "../../files/file-extension-from-path";
import {
  ensureTanstackReactFormApiInit,
  useTanstackForm,
} from "../../forms/tanstack-react-form";
import { CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY } from "../../home/onboarding-storage-keys";
import { homeDirectoryQueryAtom } from "../../hooks/home-directory-query";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { useContentRectSize } from "../../hooks/use-content-rect-size";
import { useDvtBindable } from "../../hooks/use-dvt-bindable";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useGateEnabledWithAccountData } from "../../hooks/use-gate-enabled-with-account-data";
import { useGitRepoLiveQuery } from "../../hooks/use-git-repo-live-query";
import {
  ensureUseHomeDirectoryInit,
  useHomeDirectory,
  useHomeDirectoryQuery,
} from "../../hooks/use-home-directory";
import { useHostWorkspaceRoot } from "../../hooks/use-host-workspace-root";
import {
  ensureUseMediaQueryInit,
  useMediaQuery,
} from "../../hooks/use-media-query";
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
import {
  findSidebarSectionElement,
  scrollAppActionTargetTo,
  writeScrollTop,
} from "../../navigation/app-action-dom";
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
import {
  ensureSkillsPageHelpersInit,
  usePluginsFeatureEnabled,
} from "../../skills/skills-page-helpers";
import { usePluginDetailQuery } from "../../skills/use-plugin-detail-query";
import { AriaIconBadge } from "../../ui/aria-icon-badge";
import { ChartsPurpleBadge } from "../../ui/charts-purple-badge";
import { CircularProgressRing } from "../../ui/circular-progress-ring";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { CompoundButtonMenu } from "../../ui/compound-button-menu";
import {
  ConnectorLogoStack,
  ensureConnectorLogoStackInit,
} from "../../ui/connector-logo-stack";
import { ControlGroup, ensureControlGroupInit } from "../../ui/control-group";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiZG } from "../../ui/deferred-ui-zg";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { ght } from "../../ui/ght";
import { MenuBorderSeparator } from "../../ui/menu-border-separator";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import { StackedCardHeader } from "../../ui/stacked-card-header";
import {
  initToolbarBreadcrumb,
  ToolbarBreadcrumb,
} from "../../ui/toolbar-breadcrumb";
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
import {
  ensureAppMainI9Init,
  ensurePersonalizationCInit,
  ensureSettingsGlyphNltInit,
} from "../../utils/wave-as-gap-ensure-inits";
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
import {
  ensurePluginDetailPageInit,
  ManagePluginDetailPage,
  pluginDetailF,
  pluginDetailG,
  pluginDetailH,
  pluginDetailI,
  pluginDetailL,
  pluginDetailM,
  pluginDetailP,
} from "../plugin-detail-page";
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

function Alpha(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function As(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Collar(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function DeferredConversationSh(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Dismiss(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Dome(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Engine(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Gasket(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Gear(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Grain(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Hinge(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Isle(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Jacket(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Jadeite(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Jetty(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Kite(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Lever(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function OpenInBrowser(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Platen(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function PluginsPageC(
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
function Root(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Urn(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Vine(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Wind(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Zenith(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

function Alpha(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function As(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Collar(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function DeferredConversationSh(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Dismiss(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Dome(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
