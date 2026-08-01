// Restored from ref/webview/assets/plugin-detail-page-CS2mOWnD.js
// Wave GA — full polished body from `plugin-detail-page-CS2mOWnD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 122 (verified 228/347).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 21/39
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
import { ensureComposerEsm_AG_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Wlt_Init } from "../../composer/composer-esm-inits";
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
function EnsureDetailPageSectionInit(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Pearl(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Quartz(props: {
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
const AppInitialDO: any = undefined;
const AppInitialLt: any = undefined;
const AppInitialVO: any = undefined;
const Drift: any = undefined;
const IntlProvider: any = undefined;
const PersonGlyph: any = undefined;
const bloom: any = undefined;
const deferredUiIk: any = undefined;
const deferredUiJ1: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;

export var pluginDetailPageA = esmInit(() => {
  olive = reactCompilerRuntime();
  useBrowserExtensionPluginSetupQuery();
  ensureIntlFormattersInit();
  ensureSettingsQueryAtomsInit();
  ensureDropdownMenuInit();
  ensurePinnedConversationsQueryInit();
  deferredUiIk();
  ensureComposerEsm_Hlt_Init();
  ensureClientCoordinationServiceInit();
  PersonGlyph();
  ensureSkillsPageHelpersInit();
  AppInitialLt();
  ensureHooksFocusIconInit();
  AppInitialDO();
  AppInitialVO();
  deferredUiJ1();
  StackedCardHeader();
});
var olive, prism;
function Quill(yellow4) {
  let {
      container,
      sectionIds
    } = yellow4,
    zinc4 = {};
  let amber4 = topaz.useRef(zinc4),
    basalt4 = {
      container,
      sectionElementsRef: amber4,
      sectionIds
    };
  let cedar4 = fs(basalt4),
    daisy4 = (hazel4, ivory4) => {
      if (ivory4 == null) {
        delete amber4.current[hazel4];
        return;
      }
      amber4.current[hazel4] = ivory4;
    };
  let ember4 = daisy4,
    flint4 = jasper4 => {
      amber4.current[jasper4]?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };
  let garnet4 = flint4;
  return {
    activeSectionId: cedar4,
    scrollToSection: garnet4,
    setSectionElement: ember4
  };
}
function fs(kelp4) {
  let {
      container,
      sectionElementsRef,
      sectionIds
    } = kelp4,
    lotus4 = prism4 => {
      if (container == null) return Reef;
      let quill4 = () => {
        prism4();
      };
      container.addEventListener("scroll", quill4, {
        passive: true
      });
      let reef4 = typeof ResizeObserver > "u" ? null : new ResizeObserver(quill4);
      if (reef4 != null) {
        reef4.observe(container);
        for (let sage4 of sectionIds) {
          let topaz4 = sectionElementsRef.current[sage4];
          topaz4 != null && reef4.observe(topaz4);
        }
      }
      return () => {
        container.removeEventListener("scroll", quill4);
        reef4?.disconnect();
      };
    };
  let mint4 = lotus4,
    nova4 = () => {
      if (sectionIds.length === 0) return null;
      if (container == null) return sectionIds[0];
      let ultra4 = container.getBoundingClientRect().top + ultra,
        vapor4 = sectionIds[0];
      for (let wheat4 of sectionIds) {
        let yarn4 = sectionElementsRef.current[wheat4];
        if (yarn4 != null) if (yarn4.getBoundingClientRect().top <= ultra4) vapor4 = wheat4;else break;
      }
      return vapor4;
    };
  let olive4 = nova4;
  return topaz.useSyncExternalStore(mint4, olive4, olive4);
}
function Reef() {}
var sage,
  topaz,
  ultra,
  _s = esmInit(() => {
    sage = reactCompilerRuntime();
    topaz = commonJsInit(react(), 1);
    ultra = 96;
  });
function Vapor(zephyr4) {
  let {
    children
  } = zephyr4;
  return <div className="mx-auto flex w-full max-w-[var(--thread-content-max-width)] flex-col gap-1 px-panel pt-panel">{children}</div>;
}
function Wheat(acorn4) {
  let {
      ariaLabel,
      sections,
      children,
      className,
      contentInnerClassName,
      disableScrollFade = false,
      header,
      navOrientation = "vertical",
      navAccessory,
      navFooter,
      navSections,
      onSelectNavSection,
      showNav = true
    } = acorn4,
    bloom4 = bloom.useRef(null),
    [coral4, drift4] = bloom.useState(null),
    eagle4 = apex4 => {
      bloom4.current !== apex4 && (bloom4.current = apex4, drift4(apex4));
    };
  let frost4 = eagle4,
    glide4 = sections.map(Yarn);
  let honey4 = {
    container: coral4,
    sectionIds: glide4
  };
  let {
      activeSectionId,
      scrollToSection,
      setSectionElement
    } = Quill(honey4),
    iris4 = navSections ?? sections,
    jewel4 = showNav && iris4.length > 0,
    knoll4 = IntlProvider("flex min-h-0 w-full flex-1 flex-col gap-8 [--sectioned-page-leading-inset:0.5rem]", className);
  let lunar4 = header == null ? null : <Pearl {...{
    children: header
  }} />;
  let moss4 = jewel4 ? navOrientation === "vertical" ? "flex min-h-0 w-full flex-1 flex-col gap-8 lg:grid lg:grid-cols-[theme(spacing.32)_minmax(0,1fr)] lg:items-start lg:gap-10" : "flex min-h-0 w-full flex-1 flex-col gap-8" : "flex min-h-0 w-full flex-1 flex-col",
    north4 = IntlProvider(moss4);
  let orbit4 = jewel4 ? <Quartz {...{
    activeSectionId,
    accessory: navAccessory,
    ariaLabel,
    footer: navFooter,
    orientation: navOrientation,
    onSelectSection: onSelectNavSection ?? scrollToSection,
    sections: iris4
  }} /> : null;
  let pine4 = {
    setSectionElement
  };
  let quest4 = !disableScrollFade && "vertical-scroll-fade-mask [--edge-fade-distance:1rem]",
    ridge4 = IntlProvider("relative min-h-0 w-full flex-1 overflow-y-auto [scrollbar-gutter:stable] lg:h-full", quest4);
  let storm4 = IntlProvider("mx-auto w-full max-w-[var(--thread-content-max-width)]", contentInnerClassName);
  let tide4 = <div className={storm4}>{children}</div>;
  let unity4 = <div className={ridge4} ref={frost4}>{tide4}</div>;
  let vale4 = <Drift.Provider {...{
    value: pine4,
    children: unity4
  }} />;
  let wave4 = <div className={north4}>{orbit4}{vale4}</div>;
  return <div className={knoll4}>{lunar4}{wave4}</div>;
}
function Yarn(brook4) {
  return brook4.id;
}
export function pluginDetailPageD(cliff4: unknown) {
  let {
      id,
      title,
      action,
      count,
      stickyHeader = false,
      showDivider = true,
      children
    } = cliff4,
    dusk4 = bloom.useContext(Drift),
    elm4 = grove4 => {
      dusk4?.setSectionElement(id, grove4);
    };
  let fern4 = <EnsureDetailPageSectionInit {...{
    action,
    count,
    showDivider: showDivider,
    sticky: stickyHeader,
    title
  }} />;
  return <section className="flex flex-col gap-4" id={id} ref={elm4}>{fern4}{children}</section>;
}
function Zephyr(hill4) {
  let {
      activeSectionId,
      accessory,
      ariaLabel,
      footer,
      orientation,
      onSelectSection,
      sections
    } = hill4,
    isle4 = orientation === "vertical" ? "hidden lg:block lg:self-start" : "w-full",
    juniper4 = orientation === "vertical" ? <div className="flex flex-col gap-1">{sections.map(item => <a key={item.id} href={`#${item.id}`} className={IntlProvider("text-left text-lg leading-6 transition-colors", activeSectionId === item.id ? "text-token-foreground" : "text-token-text-secondary hover:text-token-foreground")} onClick={event => {
        event.preventDefault();
        onSelectSection(item.id);
      }}>{item.title}</a>)}</div> : <div className="flex w-full flex-col gap-8"><div className="mx-auto flex w-full flex-col gap-8 px-panel lg:max-w-none">{footer}<div className="flex w-full min-w-0 flex-wrap items-center justify-center gap-3">{sections.map(item => <ReadLoginRouteQuerySnapshot key={item.id} {...{
            color: activeSectionId === item.id ? "secondary" : "ghost",
            size: "toolbar",
            onClick: () => {
              onSelectSection(item.id);
            },
            "aria-pressed": activeSectionId === item.id,
            children: item.title
          }} />)}{accessory == null ? null : <div className="flex items-center gap-3"><div className="h-6 w-px bg-token-border-light" />{accessory}</div>}</div></div></div>;
  return <nav aria-label={ariaLabel} className={isle4}>{juniper4}</nav>;
}
