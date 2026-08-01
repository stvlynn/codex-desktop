// Restored from ref/webview/assets/connect-plugins-submenu-item-DerJfgcJ.js
// Wave FY — full polished body from `connect-plugins-submenu-item-DerJfgcJ/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 7 (verified 22/28).

import { ensureComposerEsm_AG_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_Wlt_Init } from "../composer/composer-esm-inits";
import { reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY } from "../home/onboarding-storage-keys";
import { usePointerSurfaceInteractionGate } from "../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../i18n/use-intl";
import { AppIconKG } from "../icons/app-icon-kg";
import { AppIconLV } from "../icons/app-icon-lv";
import { AppIconTk, ensureAppIconTkInit } from "../icons/app-icon-tk";
import { esmInit } from "../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit, usePluginsFeatureEnabled } from "../skills/skills-page-helpers";
import { DropdownMenu, ensureDropdownMenuInit } from "../ui/dropdown-menu";
import { isAvailabilityDisabledByAdmin } from "./is-availability-disabled-by-admin";
import { matchesOptionalHostPluginIds } from "./matches-optional-host-plugin-ids";
import { ensureInstalledPluginsQueryInit } from "./use-installed-plugins-query";

/** Wave FY unresolved companion (missing-export:ui/deferred-ui-pw-2.tsx) */
const AppInitialPw: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useAppInstallPreparingState@apps/use-app-install-preparing-state.ts) */
const AppInitialQK: any = undefined;
/** Wave FY unresolved companion (jsx-collision:setCodexMicroDeviceStatusOnStore@desktop/codex-micro-input-state.ts) */
const AppInitialUw: any = undefined;
/** Wave FY unresolved companion (jsx-collision:requestRealtimeVoicePresentationSurface@voice/request-realtime-voice-presentation-surface.ts) */
const AppInitialW: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useComputerUseGate@boundaries/browser-use-gate-facades.ts) */
const AppInitialXK: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/coerce-string-or-passthrough.ts) */
const coerceStringOrPassthrough: any = undefined;
export function connectPluginsSubmenuItemI(falcon: unknown) {
  let {
      cwd,
      hostId
    } = falcon,
    gamma = {
      hostId
    };
  let harbor = usePluginsFeatureEnabled(gamma),
    indigo = {
      enabled: harbor
    };
  let {
      availablePlugins,
      errorMessage,
      featuredPluginIds,
      forceReload,
      isLoading
    } = matchesOptionalHostPluginIds(hostId, cwd, indigo),
    {
      installPlugin,
      status
    } = AppInitialXK(),
    jade = (river, slate) => installPlugin(river, {
      ...slate,
      hostId,
      onSuccess: forceReload
    });
  let kite = jade,
    lemon = AppInitialPw(availablePlugins);
  let marble = lemon,
    nickel = AppInitialW({
      featuredPluginIds,
      plugins: availablePlugins
    }).find(bravo)?.plugins.filter(alpha).slice(0, 8) ?? [];
  let onyx = nickel,
    pearl = status?.hostId === hostId ? status : null,
    quartz = errorMessage != null && marble.length === 0;
  return {
    connectedPlugins: marble,
    featuredPlugins: onyx,
    hasLoadError: quartz,
    isLoading,
    openPluginInstall: kite,
    pluginsFeatureEnabled: harbor,
    pluginInstallationStatus: pearl
  };
}
function alpha(timber) {
  return !timber.plugin.installed && !isAvailabilityDisabledByAdmin(timber.plugin);
}
function bravo(umbra) {
  let {
    section
  } = umbra;
  return section.id === "plugins-featured";
}
var copper;
export const connectPluginsSubmenuItemR = esmInit(() => {
  copper = reactCompilerRuntime();
  ensureSkillsPageHelpersInit();
  coerceStringOrPassthrough();
  AppInitialQK();
  AppInitialUw();
  ensureInstalledPluginsQueryInit();
});
export function connectPluginsSubmenuItemT(violet: unknown) {
  let {
      featuredPlugins,
      label,
      onConnectPlugin,
      onOpenPluginDirectory
    } = violet,
    willow = featuredPlugins.length > 0 ? <>
          {<DropdownMenu.Section {...{
        className: "flex flex-col",
        children: featuredPlugins.map(item => <DropdownMenu.Item key={item.plugin.id} {...{
          RightIcon: ensureComposerEsm_Wlt_Init,
          onSelect: () => onConnectPlugin(item),
          children: [<DropdownMenu.ItemIcon {...{
            size: "xs",
            children: <AppIconKG {...{
              alt: "",
              className: "size-full object-contain",
              knownAppId: item.plugin.name,
              logoDarkUrl: item.logoDarkPath,
              logoUrl: item.logoPath,
              fallback: <AppIconLV {...{
                className: "size-full text-token-text-secondary"
              }} />
            }} />
          }} />, <span>{usePointerSurfaceInteractionGate(item)}</span>]
        }} />)
      }} />}
          {<DropdownMenu.Separator {...{}} />}
        </> : null;
  let xenon = <MemoizedFormattedMessage {...{
    id: "composer.workMode.plugins.browseAll",
    defaultMessage: "Browse all plugins",
    description: "Action that opens the full plugin directory from a plugin picker"
  }} />;
  let yellow = <DropdownMenu.Section {...{
    className: "flex flex-col",
    children: <DropdownMenu.Item {...{
      RightIcon: AppIconTk,
      onSelect: onOpenPluginDirectory,
      children: xenon
    }} />
  }} />;
  return <DropdownMenu.FlyoutSubmenuItem {...{
    LeftIcon: AppIconLV,
    contentSurface: "opaque",
    contentWidth: "menuWide",
    label,
    children: [willow, yellow]
  }} />;
}
var delta, echo;
export const connectPluginsSubmenuItemN = esmInit(() => {
  delta = reactCompilerRuntime();
  ensureIntlFormattersInit();
  ensureComposerEsm_AG_Init();
  ensureDropdownMenuInit();
  ensureComposerEsm_RV_Init();
  ensureAppIconTkInit();
  ensureSkillsPageHelpersInit();
  CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY();
});

/** Wave FY: bind no longer required after full body promote */
export function binduseConnectPluginsSubmenuModel(_next: unknown): void {}
export function ensureuseConnectPluginsSubmenuModelInit(): void {}

/** Semantic aliases matching IMPORT_MAP / composer consumers. */
export {
  connectPluginsSubmenuItemI as useConnectPluginsSubmenuModel,
  connectPluginsSubmenuItemN as ensureConnectPluginsSubmenuItemInit,
  connectPluginsSubmenuItemR as ensureConnectPluginsSubmenuModelInit,
  connectPluginsSubmenuItemT as ConnectPluginsSubmenuSection,
};
