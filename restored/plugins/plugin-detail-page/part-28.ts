// Restored from ref/webview/assets/plugin-detail-page-CS2mOWnD.js
// Wave GA — full polished body from `plugin-detail-page-CS2mOWnD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 122 (verified 228/347).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 28/39
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
function CoerceLocalFilesystemPath(props: {
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
function Timber(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Umbra(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Zinc(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialBC: any = undefined;
const AppInitialCN: any = undefined;
const AppInitialDN: any = undefined;
const AppInitialNR: any = undefined;
const AppInitialNt: any = undefined;
const AppInitialP: any = undefined;
const AppInitialTR: any = undefined;
const AppInitialXu: any = undefined;
const AppInitialYC: any = undefined;
const DeferredDX: any = undefined;
const PersonGlyph: any = undefined;
const _pluginDetailPageB: any = undefined;
const _pluginDetailPageG: any = undefined;
const _pluginDetailPageV: any = undefined;
const _pluginDetailPageX: any = undefined;
const _pluginDetailPageY: any = undefined;
const applyU0000U001FU007F2: any = undefined;
const pluginDetailPageUnderscore: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
export function _pluginDetailPageM(indigo5: unknown) {
  let {
      actionLabel,
      cardIcon,
      cardIconContainer = true,
      cardIconContainerVariant,
      cardDescriptionPlacement,
      cardTitle,
      hostId,
      hideCardActions = false,
      isHighlighted = false,
      presentation,
      skill,
      displayName,
      installedStateAction = "check",
      modalIconShape,
      showModalUninstall = true,
      toggleOnly: jade5 = false,
      scopeBadges,
      onSkillsUpdated
    } = indigo5,
    kite5 = CodexPluginActionType(appScopeAtom),
    lemon5 = useIntl(),
    marble5 = composerNavigation(),
    [nickel5, onyx5] = $s.useState(null),
    pearl5 = ensureSteeringUserMessageClusterInit(hostId).kind !== "local",
    quartz5 = displayName ?? skill.name,
    river5 = quest5 => {
      onSkillsUpdated?.(quest5?.success === true);
      kite5.queryClient.invalidateQueries({
        queryKey: buildVscodeQueryKey("recommended-skills")
      });
    };
  let slate5 = ridge5 => {
    let {
      success
    } = ridge5;
    if (!success) {
      kite5.get(toastAtom).danger(lemon5.formatMessage({
        id: "skills.card.removeFailed",
        defaultMessage: "Failed to uninstall skill",
        description: "Toast message shown when uninstalling a skill fails"
      }));
      return;
    }
    kite5.get(toastAtom).success(<MemoizedFormattedMessage {...{
      id: "skills.card.removeSuccess",
      defaultMessage: "{skillName} skill uninstalled",
      description: "Toast shown after successfully uninstalling a skill",
      values: {
        skillName: <span className="font-medium">{quartz5}</span>
      }
    }} />);
  };
  let timber5 = () => {
    kite5.get(toastAtom).danger(lemon5.formatMessage({
      id: "skills.card.removeFailed",
      defaultMessage: "Failed to uninstall skill",
      description: "Toast message shown when uninstalling a skill fails"
    }));
  };
  let umbra5 = {
    onSettled: river5,
    onSuccess: slate5,
    onError: timber5
  };
  let violet5 = applyU0000U001FU007F2("remove-skill", umbra5),
    willow5 = storm5 => canonicalizeWorkspacePathKey("write-skill-config", skill.name.includes(":") ? {
      hostId,
      name: skill.name,
      enabled: storm5
    } : {
      hostId,
      path: skill.path,
      enabled: storm5
    });
  let xenon5 = (tide5, unity5) => {
    onSkillsUpdated?.(true);
    let vale5 = unity5 ? <MemoizedFormattedMessage {...{
      id: "skills.card.enableSuccess",
      defaultMessage: "{skillName} skill enabled",
      description: "Toast shown after successfully enabling a skill",
      values: {
        skillName: <span className="font-medium">{quartz5}</span>
      }
    }} /> : <MemoizedFormattedMessage {...{
      id: "skills.card.disableSuccess",
      defaultMessage: "{skillName} skill disabled",
      description: "Toast shown after successfully disabling a skill",
      values: {
        skillName: <span className="font-medium">{quartz5}</span>
      }
    }} />;
    kite5.get(toastAtom).success(vale5);
  };
  let yellow5 = wave5 => {
    onyx5(null);
    appActionSidebarProjectRefSchema.error("Failed to update skill enabled state", {
      safe: {},
      sensitive: {
        error: wave5
      }
    });
    kite5.get(toastAtom).danger(lemon5.formatMessage({
      id: "skills.card.toggleEnabledError",
      defaultMessage: "Failed to update skill",
      description: "Toast message shown when enabling or disabling a skill fails"
    }));
  };
  let zinc5 = {
    mutationFn: willow5,
    onSuccess: xenon5,
    onError: yellow5
  };
  let amber5 = noop(zinc5),
    basalt5 = nickel5 != null && (amber5.isPending || skill.enabled !== nickel5) ? nickel5 : skill.enabled,
    cedar5 = getPluginShortDescription(skill);
  let daisy5 = cedar5,
    ember5 = basalt5 ? null : <Badge {...{
      className: "border border-token-border-default bg-transparent px-1.5 py-0.5 text-xs font-medium text-token-text-secondary",
      children: <MemoizedFormattedMessage {...{
        id: "skills.card.disabledBadge",
        defaultMessage: "Disabled",
        description: "Label shown next to the skill name when a skill is disabled"
      }} />
    }} />;
  let flint5 = <AppInitialDN kind="Skill" title={quartz5} badge={ember5} />;
  let garnet5 = flint5,
    hazel5 = cardIcon === undefined ? <Timber {...{
      skill,
      size: skill.interface?.iconLarge ? "large" : "small"
    }} /> : cardIcon;
  let ivory5 = hazel5,
    jasper5 = !pearl5 && skill.scope !== "admin",
    kelp5 = violet5.isPending && violet5.variables?.skillPath === skill.path,
    lotus5 = amber5.isPending,
    mint5 = !basalt5,
    _e = () => {
      readCodexHomeFromQuery({
        path: skill.path,
        cwd: null
      });
    };
  let nova5 = _e,
    olive5 = () => {
      logProductEvent(kite5, CODEX_SKILL_TRY_CLICKED_TYPE, {});
      marble5({
        activeProject: AppInitialP(kite5.get(useGitRepoLiveQuery)),
        prefillPrompt: walkAssistantBranchPath(skill),
        startInSidebar: true
      });
    };
  let prism5 = olive5,
    be = basalt5 ? storm.disableSkill : storm.enableSkill,
    quill5 = <MemoizedFormattedMessage {...{
      id: "skills.card.open",
      defaultMessage: "Open",
      description: "Button label to open a skill's files"
    }} />;
  let reef5 = <DropdownMenu.Item {...{
    disabled: pearl5,
    onSelect: nova5,
    children: quill5
  }} />;
  let sage5 = reef5,
    topaz5 = <MemoizedFormattedMessage {...{
      ...be
    }} />;
  let ultra5 = lemon5.formatMessage(be);
  let vapor5 = apex5 => {
    onyx5(apex5);
    amber5.mutate(apex5);
  };
  let wheat5 = <div className="flex items-center"><AppInitialYC className="h-token-button-composer" checked={basalt5} disabled={lotus5} ariaLabel={ultra5} onChange={vapor5} /></div>;
  let yarn5 = <OptionalTooltip {...{
    delayDuration: 0,
    tooltipContent: topaz5,
    children: wheat5
  }} />;
  let zephyr5 = lemon5.formatMessage({
    id: "skills.card.moreActions",
    defaultMessage: "More actions",
    description: "Aria label for the more actions menu in the skill preview modal"
  });
  let acorn5 = <CoerceLocalFilesystemPath {...{
    label: zephyr5,
    size: "toolbar"
  }} />;
  let bloom5 = <DropdownMenuPopover {...{
    align: "end",
    contentWidth: "icon",
    triggerButton: acorn5,
    children: sage5
  }} />;
  let coral5 = <div className="flex items-center gap-2">{yarn5}{bloom5}</div>;
  let drift5 = coral5,
    eagle5 = basalt5 ? storm.disableSkill : storm.enableSkill,
    frost5 = basalt5 ? () => {
      onyx5(false);
      amber5.mutate(false);
    } : undefined;
  let glide5 = frost5,
    honey5 = mint5 ? () => {
      onyx5(true);
      amber5.mutate(true);
    } : undefined;
  let iris5 = honey5,
    jewel5 = jasper5 ? () => {
      violet5.mutate({
        hostId,
        skillPath: skill.path
      });
    } : undefined;
  let knoll5 = jewel5,
    lunar5 = hideCardActions ? undefined : installedStateAction === "toggle" ? brook5 => {
      let {
        ignoreNextPreview,
        openPreview
      } = brook5;
      return <div className="flex items-center gap-2">{actionLabel ? <div className="text-sm text-token-text-secondary">{actionLabel}</div> : null}{jade5 ? null : <div className="invisible opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">{<DropdownMenuPopover {...{
            align: "end",
            contentWidth: "icon",
            triggerButton: <CoerceLocalFilesystemPath {...{
              label: lemon5.formatMessage({
                id: "skills.card.moreActions",
                defaultMessage: "More actions",
                description: "Aria label for the more actions menu in the skill preview modal"
              }),
              size: "toolbar"
            }} />,
            children: [<DropdownMenu.Item {...{
              disabled: pearl5,
              onSelect: () => {
                ignoreNextPreview();
                nova5();
              },
              children: <MemoizedFormattedMessage {...{
                id: "skills.card.open",
                defaultMessage: "Open",
                description: "Button label to open a skill's files"
              }} />
            }} />, <DropdownMenu.Item {...{
              onSelect: openPreview,
              children: <MemoizedFormattedMessage {...{
                id: "skills.card.details",
                defaultMessage: "Details",
                description: "Dropdown item label to open the skill details modal"
              }} />
            }} />]
          }} />}</div>}{<OptionalTooltip {...{
          tooltipContent: <MemoizedFormattedMessage {...{
            ...eagle5
          }} />,
          children: <AppInitialYC checked={basalt5} disabled={lotus5} size={jade5 ? "sm" : "default"} ariaLabel={lemon5.formatMessage(eagle5)} onClick={North} onChange={cliff5 => {
            onyx5(cliff5);
            amber5.mutate(cliff5);
          }} />
        }} />}</div>;
    } : installedStateAction === "menu" ? <_pluginDetailPageB {...{
      disableMenuLabel: <MemoizedFormattedMessage {...{
        id: "skills.card.disableMenuItem",
        defaultMessage: "Disable",
        description: "Menu item label for disabling a skill from a skill card"
      }} />,
      enableButtonLabel: <MemoizedFormattedMessage {...{
        ...storm.enableButton
      }} />,
      enabledStatusAriaLabel: lemon5.formatMessage(storm.enabledStatus),
      isEnabled: basalt5,
      isUninstalling: kelp5,
      isUpdating: lotus5,
      menuLabel: lemon5.formatMessage({
        id: "skills.card.actionsMenu",
        defaultMessage: "Skill actions",
        description: "Aria label for the skill card actions menu trigger"
      }),
      onDisable: glide5,
      onEnable: iris5,
      onUninstall: knoll5,
      uninstallMenuLabel: <MemoizedFormattedMessage {...{
        id: "skills.card.uninstallMenuItem",
        defaultMessage: "Uninstall",
        description: "Menu item label for uninstalling a skill from a skill card"
      }} />
    }} /> : <_pluginDetailPageB {...{
      enabledStatusAriaLabel: lemon5.formatMessage(storm.enabledStatus),
      isEnabled: basalt5,
      isUninstalling: kelp5,
      isUpdating: lotus5
    }} />;
  let moss5 = lunar5,
    north5 = cardTitle ?? quartz5,
    orbit5 = dusk5 => {
      let {
        isOpen
      } = dusk5;
      return <AppInitialCN hostId={hostId} isOpen={isOpen} skillPath={skill.path} titleText={quartz5} />;
    };
  let pine5 = elm5 => {
    let {
      closePreview
    } = elm5;
    return <Umbra {...{
      canRemoveSkill: jasper5 && showModalUninstall,
      isRemoving: kelp5,
      isUpdatingEnabled: lotus5,
      effectiveSkillEnabled: basalt5,
      onUninstall: () => {
        violet5.mutate({
          hostId,
          skillPath: skill.path
        });
        closePreview();
      },
      onTryInThread: prism5
    }} />;
  };
  return <_pluginDetailPageV {...{
    cardIcon: ivory5,
    cardIconContainer: cardIconContainer,
    cardIconContainerVariant,
    cardTitle: north5,
    cardDescription: daisy5,
    cardDescriptionPlacement,
    cardBadges: scopeBadges,
    cardActions: moss5,
    isHighlighted: isHighlighted,
    isContentDimmed: mint5,
    presentation,
    modalIconShape,
    modalTitle: garnet5,
    modalTitleText: quartz5,
    modalHeaderActions: drift5,
    modalDescription: daisy5,
    modalBody: orbit5,
    modalFooter: pine5
  }} />;
}
function North(event) {
  event.stopPropagation();
}
function Orbit(fern5) {
  let {
      canRemoveSkill,
      isRemoving,
      isUpdatingEnabled,
      effectiveSkillEnabled,
      onUninstall,
      onTryInThread
    } = fern5,
    grove5 = canRemoveSkill ? <ReadLoginRouteQuerySnapshot {...{
      color: "danger",
      size: "toolbar",
      className: "border-transparent bg-token-charts-red text-token-charts-red enabled:hover:bg-token-charts-red enabled:hover:text-white data-[state=open]:bg-token-charts-red",
      disabled: isRemoving,
      onClick: onUninstall,
      children: <MemoizedFormattedMessage {...{
        id: "skills.card.uninstall",
        defaultMessage: "Uninstall",
        description: "Button label to remove a skill"
      }} />
    }} /> : null;
  let hill5 = <div className="flex items-center gap-2">{grove5}</div>;
  let isle5 = !effectiveSkillEnabled || isUpdatingEnabled,
    juniper5,
    lagoon5;
  juniper5 = <AppIconDG {...{
    className: "icon-xs"
  }} />;
  lagoon5 = <MemoizedFormattedMessage {...{
    id: "skills.card.try",
    defaultMessage: "Try now",
    description: "Button label to start a new task with a skill"
  }} />;
  let meadow5 = <div className="flex items-center gap-2">{<ReadLoginRouteQuerySnapshot {...{
      color: "primary",
      size: "toolbar",
      disabled: isle5,
      onClick: onTryInThread,
      children: [juniper5, lagoon5]
    }} />}</div>;
  return <div className="flex w-full items-center justify-between gap-2">{hill5}{meadow5}</div>;
}
function Pine(nest5) {
  let {
      skill,
      size = "small"
    } = nest5,
    oak5 = !!skill.interface?.iconLarge,
    petal5 = AppInitialTR(skill, {
      size: size
    });
  let quiet5 = petal5,
    rain5 = _pluginDetailPageG({
      size: size,
      hasLargeIcon: oak5,
      largeFallbackClassName: "h-5 w-5"
    });
  let seed5 = `${rain5} text-token-text-secondary`;
  return <Zinc {...{
    className: seed5
  }} />;
}
export var _pluginDetailPageH = esmInit(() => {
  quest = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  serializeCharacterReferenceNode();
  ensureComposerEsm_MT_Init();
  $s = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  AppActionSelector();
  ensureBadgeInit();
  ensureSettingsQueryAtomsInit();
  ensureDropdownMenuInit();
  _pluginDetailPageX();
  ensurePinnedConversationsQueryInit();
  ensureComposerEsm_Ilt_Init();
  AppInitialBC();
  ensureComposerEsm_Hlt_Init();
  DeferredDX();
  conversationsSidebarMessages();
  PersonGlyph();
  ensureComposerEsm_K9_Init();
  deferredUiH();
  ensureAppScopeInit();
  extractColonPrefixedNamedTokens();
  ensureAppShellAtomsInit();
  ensureSkillsPageHelpersInit();
  AppInitialNR();
  _pluginDetailPageY();
  findCachedConversationItem();
  ensureSkillsPageHelpersInit();
  posixPathBasename();
  pluginDetailPageUnderscore();
  scrollAppActionTargetTo();
  storm = identity({
    disableSkill: {
      id: "skills.card.disableSkill",
      defaultMessage: "Disable skill",
      description: "Label for the disable skill toggle on skill cards"
    },
    enableSkill: {
      id: "skills.card.enableSkill",
      defaultMessage: "Enable skill",
      description: "Label for the enable skill toggle on skill cards"
    },
    enabledStatus: {
      id: "skills.card.enabledStatus",
      defaultMessage: "Skill enabled",
      description: "Status label for an installed skill that is enabled"
    },
    disabledStatus: {
      id: "skills.card.disabledStatus",
      defaultMessage: "Skill disabled",
      description: "Status label for an installed skill that is disabled"
    },
    enableButton: {
      id: "skills.card.enableButton",
      defaultMessage: "Enable",
      description: "Button label for enabling a disabled skill from a skill card"
    },
    uninstallSkill: {
      id: "skills.card.uninstallSkill",
      defaultMessage: "Uninstall skill",
      description: "Tooltip label for uninstalling a skill from a skill card"
    }
  });
});
var quest, $s, ridge, storm;
function Tide(trail5) {
  let {
      hostId,
      scheduleLabel,
      template,
      onSetUpTemplate
    } = trail5,
    urn5 = <ConversationMarkdownText cwd={null} hostId={hostId} pluginMentionPresentation="text" text={template.prompt} variant="compact" />;
  let vine5 = <span className="flex size-8 shrink-0 items-center justify-center">{<AppIconCct {...{
      className: "icon-md text-token-text-secondary"
    }} />}</span>;
  let wind5 = <span className="min-w-0 truncate">{template.name}</span>;
  let yarrow5 = <span className="shrink-0 text-token-text-secondary">{scheduleLabel}</span>;
  let azure5 = <span className="flex min-w-0 items-baseline gap-2">{wind5}{yarrow5}</span>;
  let birch5 = () => {
    onSetUpTemplate(template);
  };
  return <StackedCardHeader className="group" description={urn5} descriptionClassName="line-clamp-1" icon={vine5} iconContainer={false} presentation="row" title={azure5} onClick={birch5} />;
}
var unity,
  vale,
  wave = esmInit(() => {
    unity = reactCompilerRuntime();
    AppInitialNt();
    AppInitialXu();
    CHATGPT_PRODUCT_ID();
  });
