// Restored from ref/webview/assets/use-visible-settings-sections-CNgqcAwL.js
// Visible settings sections visibility hook + desktop/remote slug policy.

import {
  ChatGptPlanId,
  ensureChatGptPlanIdInit,
} from "../../account/chatgpt-plan-ids";
import { deferredAccount3 } from "../../account/deferred-account3";
import { rateLimitStatus } from "../../account/rate-limit-status";
import { useAccountSettingsProfileVisibility } from "../../account/use-account-settings-profile-visibility";
import {
  ensureUsageSettingsAccessInit,
  useUsageSettingsAccess,
} from "../../account/use-usage-settings-access";
import { ensureAppScopeHostInit } from "../../runtime/app-scope-runtime";
import {
  ensureBrowserUseGateInit,
  useBrowserUseGate,
  useExternalBrowserUseGate,
} from "../../boundaries/browser-use-gate-facades";
import {
  chatgptConversationsGateAtom,
  useAppScopeValue,
} from "../../boundaries/composer-appscope-atoms";
import {
  ensureComposerEsm_B7_Init,
  ensureComposerEsm_tlt_Init,
} from "../../boundaries/composer-esm-inits";
import { bindBrowserUseExternal } from "../../desktop/browser-use-external";
import { useComputerUseWindowsGate } from "../../devices/use-computer-use-windows-gate";
import { APPS_CONNECTORS_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { useFeatureGateEnabled } from "../../feature-gates/use-feature-gate-enabled";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import {
  ensureRemoteConnectionsFeatureInit,
  useIsRemoteConnectionsFeatureEnabled,
} from "../../hosts/remote-connections-feature";
import {
  ensureUseIsRemoteHostInit,
  useIsRemoteHost,
} from "../../hosts/use-is-remote-host";
import { cadencedLegacyModeKey } from "../../mcp/cadenced-legacy-mode-key";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import {
  codexMicroHasEverBeenDetected,
  ensureCodexMicroDetectionSignalsInit,
} from "../../onboarding/codex-micro-detection-signals";
import { esmInit } from "../../runtime/rolldown-runtime";
import { appshotsHostAllowedAtom } from "../../settings/appshots-host-allowed-atom";
import { deferredSettingsZ7 } from "../../settings/deferred-settings-z7";
import { GENERAL_SETTINGS_SECTION_ID } from "../../settings/general-settings-section-id";
import { bindGeneralSettings2 } from "../../settings/general-settings2";
import { SETTINGS_SECTION_SLUG_ENTRIES } from "../../settings/settings-section-slugs";
import {
  ensureSkillsPageHelpersInit,
  usePluginsFeatureEnabled,
} from "../../skills/skills-page-helpers";
import { macOS3 } from "../../ui/mac-os3";
import { usePlatformAwareFeatureGate } from "../use-platform-aware-feature-gate";
import { useStatsigClientLoading } from "../use-statsig-client-loading";

export type UseVisibleSettingsSectionsResult = {
  activeSettingsSection: string | undefined;
  settingsNavigationSections: readonly { readonly slug: string }[];
  shouldRedirectToVisibleSettingsSection: boolean;
  shouldRenderRouteContent: boolean;
  visibleSettingsSections: readonly { readonly slug: string }[];
};

import {
  ChronicleSettingsNavIcon,
  ensureChronicleSettingsNavIconInit,
  ensureKeyboardShortcutsNavIconInit,
  ensureSecuritySettingsNavIconInit,
  KeyboardShortcutsSettingsNavIcon,
  SecuritySettingsNavIcon,
} from "../visible-settings-nav-icons";

export function useVisibleSettingsSections(
  requestedSectionSlug: string | null = null,
  isDesktopSettingsSurface: boolean = true,
  hostId: string = LOCAL_HOST_ID,
): UseVisibleSettingsSectionsResult {
  let pluginsFeatureEnabled = usePluginsFeatureEnabled({
      hostId: hostId,
    }),
    isRemoteHost = useIsRemoteHost(),
    remoteConnectionsFeatureEnabled = useIsRemoteConnectionsFeatureEnabled(),
    chatgptConversationsGateEnabled = useAppScopeValue(
      chatgptConversationsGateAtom,
    ),
    businessPlanGateEnabled = useAppScopeValue(deferredSettingsZ7),
    browserUseGate = useBrowserUseGate({
      hostId: hostId,
    }),
    externalBrowserUseGate = useExternalBrowserUseGate({
      hostId: hostId,
    }),
    codexMicroEverDetected = useAppScopeValue(codexMicroHasEverBeenDetected),
    codexMicroFeatureEnabled = useFeatureGateEnabled("3207467860"),
    appsConnectorsFeatureEnabled = useFeatureGateEnabled(
      APPS_CONNECTORS_FEATURE_GATE_ID,
    ),
    voiceFeatureEnabled = useFeatureGateEnabled("2380644311"),
    voiceAltFeatureEnabled = useFeatureGateEnabled("1244621283"),
    voiceCompanionFeatureEnabled = useFeatureGateEnabled("4100906017"),
    debugSettingsFeatureEnabled = useFeatureGateEnabled("2423536643"),
    appshotsAllowed = useAppScopeValue(appshotsHostAllowedAtom),
    statsigClientLoading = useStatsigClientLoading(),
    { isProfileVisible, isProfileVisibilityLoading } =
      useAccountSettingsProfileVisibility(),
    { isUsageSettingsVisible, isUsageSettingsAccessLoading, plan } =
      useUsageSettingsAccess(),
    { data, isLoading } = useAppScopeValue(deferredAccount3),
    isFreeOrGoPlan = plan === ChatGptPlanId.FREE || plan === ChatGptPlanId.GO,
    hasCreditsBalanceOnFreeOrGo =
      isFreeOrGoPlan && data?.credits?.balance != null,
    computerUseWindowsGate = useComputerUseWindowsGate({
      hostId: hostId,
    }),
    chroniclePlatformGate = usePlatformAwareFeatureGate(),
    computerUseAdminBlocked =
      isDesktopSettingsSurface &&
      !externalBrowserUseGate.isLoading &&
      !externalBrowserUseGate.allowed,
    browserUseConfigBlocked =
      isDesktopSettingsSurface &&
      !browserUseGate.isLoading &&
      (browserUseGate.reason === "statsig-disabled" ||
        browserUseGate.reason === "config-requirement-disabled" ||
        browserUseGate.reason === "wsl-disabled"),
    computerUseSectionVisible =
      isDesktopSettingsSurface &&
      (computerUseWindowsGate.available ||
        externalBrowserUseGate.available ||
        computerUseAdminBlocked),
    browserUseSectionVisible =
      isDesktopSettingsSurface &&
      (browserUseGate.available ||
        externalBrowserUseGate.available ||
        browserUseConfigBlocked),
    filteredSettingsSections = SETTINGS_SECTION_SLUG_ENTRIES.filter((item) => {
      if (
        (!chatgptConversationsGateEnabled &&
          remoteHiddenSectionSlugs.includes(item.slug)) ||
        (!businessPlanGateEnabled &&
          desktopHiddenSectionSlugs.includes(item.slug)) ||
        (!isDesktopSettingsSurface &&
          !alwaysVisibleSectionSlugs.includes(item.slug))
      )
        return false;
      switch (item.slug) {
        case "appshots":
          return appshotsAllowed;
        case "plugins-settings":
          return pluginsFeatureEnabled;
        case "skills-settings":
          return false;
        case "connections":
          return remoteConnectionsFeatureEnabled && !isRemoteHost;
        case "usage":
          return isUsageSettingsVisible || hasCreditsBalanceOnFreeOrGo;
        case "profile":
          return isProfileVisible;
        case "computer-use":
          return computerUseSectionVisible;
        case "browser-use":
          return browserUseSectionVisible;
        case "appearance":
          return true;
        case "chronicle":
          return (
            isDesktopSettingsSurface &&
            !chroniclePlatformGate.isLoading &&
            chroniclePlatformGate.available
          );
        case "voice":
          return (
            voiceFeatureEnabled ||
            (voiceAltFeatureEnabled && voiceCompanionFeatureEnabled)
          );
        case "debug":
          return debugSettingsFeatureEnabled;
        case "pets":
        case "git-settings":
        case "worktrees":
        case "local-environments":
        case "environments":
          return true;
        case "import":
          return !statsigClientLoading && appsConnectorsFeatureEnabled;
        case "data-controls":
          return true;
        case "code-review":
        case "cloud-settings":
        case "cloud-environments":
          return false;
        case "general-settings":
        case "agent":
        case "personalization":
          return true;
        case "hooks-settings":
          return true;
        case "mcp-settings":
          return true;
        case "keyboard-shortcuts":
          return true;
        case "codex-micro":
          return codexMicroFeatureEnabled && codexMicroEverDetected === true;
      }
    }),
    matchedRequestedSection = filteredSettingsSections.find(
      (item) => item.slug === requestedSectionSlug,
    ),
    requestedSectionEntry = findSettingsSectionBySlug(requestedSectionSlug),
    requestedSectionHidden =
      requestedSectionEntry != null && matchedRequestedSection == null,
    requestedSectionRemoteBlocked =
      requestedSectionEntry != null &&
      ((!chatgptConversationsGateEnabled &&
        remoteHiddenSectionSlugs.includes(requestedSectionEntry.slug)) ||
        (!businessPlanGateEnabled &&
          desktopHiddenSectionSlugs.includes(requestedSectionEntry.slug))),
    fallbackSettingsSectionSlug = isDesktopSettingsSurface
      ? GENERAL_SETTINGS_SECTION_ID
      : defaultDesktopSettingsSectionSlug,
    resolvedFallbackSectionSlug =
      filteredSettingsSections.find(
        (item) => item.slug === fallbackSettingsSectionSlug,
      )?.slug ??
      filteredSettingsSections[0]?.slug ??
      fallbackSettingsSectionSlug,
    requestedSectionStillLoading = false;
  if (
    requestedSectionHidden &&
    !requestedSectionRemoteBlocked &&
    !(
      !isDesktopSettingsSurface &&
      !alwaysVisibleSectionSlugs.includes(requestedSectionEntry.slug)
    )
  )
    switch (requestedSectionEntry.slug) {
      case "appshots":
        requestedSectionStillLoading = statsigClientLoading;
        break;
      case "usage":
        requestedSectionStillLoading =
          isUsageSettingsAccessLoading || (isFreeOrGoPlan && isLoading);
        break;
      case "profile":
        requestedSectionStillLoading = isProfileVisibilityLoading;
        break;
      case "appearance":
      case "pets":
      case "general-settings":
      case "agent":
      case "git-settings":
      case "data-controls":
      case "code-review":
      case "cloud-settings":
      case "cloud-environments":
      case "personalization":
        requestedSectionStillLoading = false;
        break;
      case "chronicle":
        requestedSectionStillLoading = chroniclePlatformGate.isLoading;
        break;
      case "voice":
      case "debug":
        requestedSectionStillLoading = statsigClientLoading;
        break;
      case "import":
        requestedSectionStillLoading = statsigClientLoading;
        break;
      case "keyboard-shortcuts":
        requestedSectionStillLoading = false;
        break;
      case "codex-micro":
        requestedSectionStillLoading =
          statsigClientLoading ||
          (codexMicroFeatureEnabled && codexMicroEverDetected === undefined);
        break;
      case "computer-use":
        requestedSectionStillLoading =
          computerUseWindowsGate.isLoading || externalBrowserUseGate.isLoading;
        break;
      case "browser-use":
        requestedSectionStillLoading =
          browserUseGate.isLoading ||
          externalBrowserUseGate.isLoading ||
          statsigClientLoading;
        break;
      case "local-environments":
      case "worktrees":
      case "environments":
      case "mcp-settings":
      case "connections":
      case "plugins-settings":
      case "skills-settings":
      case "hooks-settings":
        requestedSectionStillLoading = false;
        break;
    }
  return {
    activeSettingsSection:
      matchedRequestedSection?.slug ??
      (requestedSectionStillLoading
        ? requestedSectionEntry?.slug
        : undefined) ??
      resolvedFallbackSectionSlug,
    settingsNavigationSections: filteredSettingsSections.filter(
      (item) => !(item.slug === "mcp-settings" && pluginsFeatureEnabled),
    ),
    shouldRedirectToVisibleSettingsSection:
      requestedSectionHidden && !requestedSectionStillLoading,
    shouldRenderRouteContent: !requestedSectionStillLoading,
    visibleSettingsSections: filteredSettingsSections,
  };
}
function findSettingsSectionBySlug(sectionSlug: string | null) {
  return sectionSlug == null
    ? null
    : (SETTINGS_SECTION_SLUG_ENTRIES.find(
        (item) => item.slug === sectionSlug,
      ) ?? null);
}
var alwaysVisibleSectionSlugs,
  defaultDesktopSettingsSectionSlug,
  remoteHiddenSectionSlugs,
  desktopHiddenSectionSlugs;
export const ensureUseVisibleSettingsSectionsInit = esmInit(() => {
  ensureAppScopeHostInit();
  macOS3();
  ensureComposerEsm_B7_Init();
  ensureCodexMicroDetectionSignalsInit();
  bindGeneralSettings2();
  bindBrowserUseExternal();
  ensureBrowserUseGateInit();
  ensureSkillsPageHelpersInit();
  ensureUseIsRemoteHostInit();
  rateLimitStatus();
  ensureRemoteConnectionsFeatureInit();
  ensureAppShellAtomsInit();
  ensureComposerEsm_tlt_Init();
  ensureChatGptPlanIdInit();
  cadencedLegacyModeKey();
  ensureUsageSettingsAccessInit();
  alwaysVisibleSectionSlugs = [
    "profile",
    "agent",
    "personalization",
    "mcp-settings",
    "plugins-settings",
    "hooks-settings",
    "local-environments",
    "worktrees",
    "data-controls",
  ];
  defaultDesktopSettingsSectionSlug = "agent";
  remoteHiddenSectionSlugs = [
    "import",
    "profile",
    "voice",
    "pets",
    "agent",
    "keyboard-shortcuts",
    "chronicle",
    "appshots",
    "usage",
    "browser-use",
    "computer-use",
    "mcp-settings",
    "plugins-settings",
    "skills-settings",
    "data-controls",
    "codex-micro",
  ];
  desktopHiddenSectionSlugs = [
    "hooks-settings",
    "connections",
    "cloud-settings",
    "cloud-environments",
    "code-review",
    "git-settings",
    "local-environments",
    "worktrees",
  ];
});
