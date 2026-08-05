// Restored from ref/webview/assets/plugin-detail-page-CS2mOWnD.js
// Wave GA — full polished body from `plugin-detail-page-CS2mOWnD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 122 (verified 228/347).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 7/39
/* split-lane-import-depth:1 */

import { NativeDesktopAppByBundleId } from "../../account/native-desktop-app-by-bundle-id";
import {
  ensureUsageSettingsAccessInit,
  useUsageSettingsAccess,
} from "../../account/use-usage-settings-access";
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
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import { useExternalBrowserUseGate } from "../../boundaries/browser-use-gate-facades";
import {
  ensureComposerEsm_AG_Init,
  ensureComposerEsm_FH_Init,
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_J0_Init,
  ensureComposerEsm_K1_Init,
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
  ensureConversationPageEsm_Act_Init,
  ensureConversationPageEsm_B0_Init,
  ensureConversationPageEsm_FR_Init,
  ensureConversationPageEsm_Jj_Init,
} from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import {
  Navigate,
  useLocation,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import {
  ensureShareInviteAutocompleteInit,
  ShareInviteAutocomplete,
} from "../../boundaries/share-invite-autocomplete/index";
import { toastAtom } from "../../boundaries/toast-atom";
import {
  ensurePluginMentionPromptInit,
  firstNonEmptyTrimmedString,
} from "../../browser/browser-use-helpers";
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
import {
  DEVELOPERS_OPENAI_COM_CODEX_SKILLS_URL,
  GITHUB_COM_OPENAI_PLUGINS_URL,
} from "../../docs/codex-doc-urls";
import { lazyWithSuspense } from "../../environments/lazy-with-suspense";
import { remoteControlHostKey } from "../../environments/remote-host-keys";
import { areVisualizationFeatureGatesEnabled } from "../../feature-gates/are-visualization-feature-gates-enabled";
import { repoWorktreeWorkspaceRoots } from "../../git/repo-worktree-workspace-roots";
import { ensureGitRepoWatchAtomsInit } from "../../hooks/git-method-query-atoms";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { useGitRepoLiveQuery } from "../../hooks/use-git-repo-live-query";
import {
  ensureUseHomeDirectoryInit,
  useHomeDirectory,
} from "../../hooks/use-home-directory";
import { useHostWorkspaceRoot } from "../../hooks/use-host-workspace-root";
import { useInfiniteListQuery } from "../../hooks/use-infinite-list-query";
import {
  ensureUsePluginScheduledTasksInit,
  usePluginScheduledTasksN,
} from "../../hooks/use-plugin-scheduled-tasks";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { useQueryClient } from "../../hooks/use-query-client";
import {
  ensureUseRecommendedSkillsInit,
  useRecommendedSkills,
} from "../../hooks/use-recommended-skills";
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
import {
  findSidebarSectionElement,
  readScrollTop,
  scrollAppActionTargetTo,
  writeScrollTop,
} from "../../navigation/app-action-dom";
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
import {
  ensureRecommendedSkillStatsigOverridesInit,
  getRecommendedSkillStatsigOverride,
  useRecommendedSkillStatsigOverrides,
} from "../../skills/recommended-skill-statsig-overrides";
import {
  ensureSkillsPageHelpersInit,
  usePluginsFeatureEnabled,
} from "../../skills/skills-page-helpers";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { usePluginDetailQuery } from "../../skills/use-plugin-detail-query";
import { AriaIconBadge } from "../../ui/aria-icon-badge";
import { Badge, ensureBadgeInit } from "../../ui/badge";
import { CircularProgressRing } from "../../ui/circular-progress-ring";
import { CompoundButtonMenu } from "../../ui/compound-button-menu";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiU } from "../../ui/deferred-ui-u";
import {
  DETAIL_PAGE_STACK_CLASS,
  DetailPage,
  DetailPageSection,
  DetailPageSectionHeader,
  ensureDetailPageInit,
  ensureDetailPageSectionHeaderInit,
  ensureDetailPageSectionInit,
} from "../../ui/detail-page";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { ght } from "../../ui/ght";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import { StackedCardHeader } from "../../ui/stacked-card-header";
import {
  initToolbarBreadcrumb,
  ToolbarBreadcrumb,
} from "../../ui/toolbar-breadcrumb";
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
import {
  parsePluginMarketplaceQuery,
  resolvePluginMarketplaceDirectRoute,
} from "../plugin-marketplace-route";
import { pluginProductBrowseNav } from "../plugin-product-browse-nav";
import { resolveRequestedPluginSummary } from "../resolve-requested-plugin-summary";
import { ensureInstalledPluginsQueryInit } from "../use-installed-plugins-query";
import { useMarketplaceConnectFlow } from "../use-marketplace-connect-flow";
import { usePluginConnectorAvailability } from "../use-plugin-connector-availability";
import { usePluginNavigationTelemetry } from "../use-plugin-navigation-telemetry";

// Wave5d soft stubs.
const AppInitialUT: any = undefined;
const deferredUiXT: any = undefined;

export function pluginDetailPageSt(nest2: unknown, oak2: unknown) {
  return oak2 === "skills"
    ? {
        headerCopy: {
          learnMoreUrl: DEVELOPERS_OPENAI_COM_CODEX_SKILLS_URL,
          subtitle: nest2.formatMessage({
            id: "skills.appsPage.subheading.skills",
            defaultMessage: "Add reusable workflows with Skills",
            description:
              "Subheading shown above the Skills tab on the Skills & Apps page",
          }),
          title: nest2.formatMessage({
            id: "skills.appsPage.heading.skills",
            defaultMessage: "Skills",
            description:
              "Header title for the Skills tab on the Skills & Apps page",
          }),
        },
        searchLabel: nest2.formatMessage({
          id: "skills.appsPage.search.skills.label",
          defaultMessage: "Search skills",
          description:
            "Accessible label for the skills search input on the Skills & Apps page",
        }),
        searchPlaceholder: nest2.formatMessage({
          id: "skills.appsPage.search.skills",
          defaultMessage: "Search skills",
          description:
            "Placeholder text for searching skills on the Skills & Apps page",
        }),
        sections: [
          {
            id: "skills-installed",
            title: nest2.formatMessage({
              id: "skills.appsPage.section.installedSkills",
              defaultMessage: "My Skills",
              description: "Heading for the installed skills section",
            }),
          },
          {
            id: "skills-recommended",
            title: nest2.formatMessage({
              id: "skills.appsPage.section.recommendedSkills",
              defaultMessage: "Recommended",
              description: "Heading for the recommended skills section",
            }),
          },
        ],
      }
    : oak2 === "apps"
      ? {
          headerCopy: {
            learnMoreUrl: GITHUB_COM_OPENAI_PLUGINS_URL,
            subtitle: nest2.formatMessage({
              id: "skills.appsPage.subheading.apps",
              defaultMessage: "Connect external tools and services with Apps",
              description:
                "Subheading shown above the Apps tab on the Skills & Apps page",
            }),
            title: nest2.formatMessage({
              id: "skills.appsPage.heading.apps",
              defaultMessage: "Apps",
              description:
                "Header title for the Apps tab on the Skills & Apps page",
            }),
          },
          searchLabel: nest2.formatMessage({
            id: "skills.appsPage.search.apps.label",
            defaultMessage: "Search apps",
            description:
              "Accessible label for the apps search input on the Skills & Apps page",
          }),
          searchPlaceholder: nest2.formatMessage({
            id: "skills.appsPage.search.apps",
            defaultMessage: "Search apps",
            description:
              "Placeholder text for searching apps on the Skills & Apps page",
          }),
          sections: [
            {
              id: "apps-installed",
              title: nest2.formatMessage({
                id: "skills.appsPage.section.installedApps",
                defaultMessage: "My Apps",
                description:
                  "Section heading for installed apps on the Skills & Apps page",
              }),
            },
            {
              id: "apps-recommended",
              title: nest2.formatMessage({
                id: "skills.appsPage.section.discover",
                defaultMessage: "Recommended",
                description:
                  "Section heading for discoverable apps on the Skills & Apps page",
              }),
            },
          ],
        }
      : oak2 === "mcps"
        ? {
            headerCopy: {
              learnMoreUrl: GITHUB_COM_OPENAI_PLUGINS_URL,
              subtitle: nest2.formatMessage({
                id: "skills.appsPage.subheading.mcps",
                defaultMessage:
                  "Manage MCP server connections and availability.",
                description:
                  "Subheading shown above the MCPs tab on the Skills & Apps page",
              }),
              title: nest2.formatMessage({
                id: "skills.appsPage.heading.mcps",
                defaultMessage: "MCPs",
                description:
                  "Header title for the MCPs tab on the Skills & Apps page",
              }),
            },
            searchLabel: nest2.formatMessage({
              id: "skills.appsPage.search.mcps.label",
              defaultMessage: "Search MCP servers",
              description:
                "Accessible label for the MCP search input on the Skills & Apps page",
            }),
            searchPlaceholder: nest2.formatMessage({
              id: "skills.appsPage.search.mcps",
              defaultMessage: "Search MCP servers",
              description:
                "Placeholder text for searching MCP servers on the Skills & Apps page",
            }),
            sections: [
              {
                id: "mcps-installed",
                title: nest2.formatMessage({
                  id: "skills.appsPage.section.installedMcps",
                  defaultMessage: "My MCPs",
                  description:
                    "Section heading for installed MCP servers on the Skills & Apps page",
                }),
              },
            ],
          }
        : oak2 === "marketplace"
          ? {
              headerCopy: {
                learnMoreUrl: GITHUB_COM_OPENAI_PLUGINS_URL,
                subtitle: nest2.formatMessage({
                  id: "skills.appsPage.subheading.marketplace",
                  defaultMessage: "Manage available plugin marketplaces",
                  description:
                    "Subheading shown above the Marketplace tab on the Skills & Apps page",
                }),
                title: nest2.formatMessage({
                  id: "skills.appsPage.heading.marketplace",
                  defaultMessage: "Marketplace",
                  description:
                    "Header title for the Marketplace tab on the Skills & Apps page",
                }),
              },
              searchLabel: nest2.formatMessage({
                id: "skills.appsPage.search.marketplace.label",
                defaultMessage: "Search marketplaces",
                description:
                  "Accessible label for the marketplace search input on the Skills & Apps page",
              }),
              searchPlaceholder: nest2.formatMessage({
                id: "skills.appsPage.search.marketplace",
                defaultMessage: "Search marketplaces",
                description:
                  "Placeholder text for searching marketplaces on the Skills & Apps page",
              }),
              sections: [
                {
                  id: "marketplace-installed",
                  title: nest2.formatMessage({
                    id: "skills.appsPage.section.marketplaces",
                    defaultMessage: "Marketplaces",
                    description:
                      "Section heading for marketplaces on the Skills & Apps page",
                  }),
                },
              ],
            }
          : {
              headerCopy: {
                learnMoreUrl: GITHUB_COM_OPENAI_PLUGINS_URL,
                subtitle: nest2.formatMessage({
                  id: "skills.appsPage.subheading.plugins",
                  defaultMessage: "Customize ChatGPT with plugins",
                  description:
                    "Subheading shown above the Plugins tab on the Skills & Apps page",
                }),
                title: nest2.formatMessage({
                  id: "skills.appsPage.heading.plugins",
                  defaultMessage: "Plugins",
                  description:
                    "Header title for the Plugins tab on the Skills & Apps page",
                }),
              },
              searchLabel: nest2.formatMessage({
                id: "skills.appsPage.search.plugins.label",
                defaultMessage: "Search plugins",
                description:
                  "Accessible label for the plugins search input on the Skills & Apps page",
              }),
              searchPlaceholder: nest2.formatMessage({
                id: "skills.appsPage.search.plugins",
                defaultMessage: "Search plugins",
                description:
                  "Placeholder text for searching plugins on the Skills & Apps page",
              }),
              sections: [],
            };
}
function Slate(petal2) {
  let quiet2 = petal2
    .replace(/[\\/]+$/, "")
    .split(/[\\/]/)
    .filter(Boolean);
  if (quiet2.length === 0) return null;
  let rain2 = quiet2[quiet2.length - 1];
  return rain2.toLowerCase() === "skill.md" && quiet2.length > 1
    ? quiet2[quiet2.length - 2]
    : rain2.toLowerCase().endsWith(".md")
      ? rain2.slice(0, -3)
      : rain2;
}
export var pluginDetailPageCt = esmInit(() => {
  coalesceTruthy();
  findProcessManagerRow();
  ensureSkillsPageHelpersInit();
  timber = {
    repo: 0,
    user: 1,
    system: 2,
    admin: 3,
  };
  umbra = {
    limit: 30,
    offset: 0,
  };
  violet = deferredUiXT({
    limit: AppInitialUT().int().positive().max(30).default(30),
    offset: AppInitialUT().int().nonnegative().default(0),
  });
});
var timber,
  umbra,
  violet,
  willow,
  xenon,
  _o,
  yellow = esmInit(() => {
    willow = ["Imagegen", "Sora", "PDF", "Doc", "Spreadsheet", "Playwright"];
    xenon = new Set(willow.map((item) => item.toLowerCase()));
    _o = new Map(willow.map((item, index) => [item.toLowerCase(), index]));
  });
