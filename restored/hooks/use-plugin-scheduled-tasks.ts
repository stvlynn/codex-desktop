// Restored from ref/webview/assets/use-plugin-scheduled-tasks-BJm-FIsE.js
// Wave FY — full polished body from `use-plugin-scheduled-tasks-BJm-FIsE/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 9 (verified 26/34).

import { isBusinessPlan } from "../account/plan-type-helpers";
import { CodexBrowserSurfaceActionType } from "../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../analytics/codex-plugin-action-result";
import { appScopeAtom, ensureAppScopeInit } from "../runtime/app-scope-runtime";
import { ensureBrowserUseGateInit } from "../boundaries/browser-use-gate-facades";
import { ensureComposerEsm_MT_Init } from "../composer/composer-esm-inits";
import { reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { appServices } from "../desktop/desktop-services";
import { LOCAL_HOST_ID } from "../hosts/local-host-id";
import { ensureRemoteConnectionsFeatureInit } from "../hosts/remote-connections-feature";
import { readScrollTop } from "../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../navigation/app-shell-atoms";
import { SCHEDULED_TASKS_PLUGIN_ID } from "../plugins/scheduled-tasks-plugin-id";
import { ensureInstalledPluginsQueryInit } from "../plugins/use-installed-plugins-query";
import { ensureDynamicScriptLoadInit } from "../runtime/ensure-dynamic-script-load-init";
import { esmInit } from "../runtime/rolldown-runtime";
import { readCodexHomeFromQuery } from "../settings/read-codex-home-from-query";
import { buildSkillDiscoveryRoots } from "../skills/build-skill-discovery-roots";
import {
  ensureSkillsPageHelpersInit,
  usePluginsFeatureEnabled,
} from "../skills/skills-page-helpers";
import { extractColonPrefixedNamedTokens } from "../utils/extract-colon-prefixed-named-tokens";
import { ensureDebugPanelTurnFilesInit } from "./debug-panel-turn-files";
import { ensureAuthProviderInit } from "./use-auth";
import { useQuery } from "./use-query";

/** Wave FY unresolved companion (jsx-collision:useBrowserUseGate@boundaries/browser-use-gate-facades.ts) */
const AppInitialBK: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureGoogleDriveConnectorIconsInit@plugins/ensure-google-drive-connector-icons-init.ts) */
const AppInitialFK: any = undefined;
/** Wave FY unresolved companion (missing-export:plugins/plugin-scheduled-tasks.tsx) */
const AppInitialFz: any = undefined;
/** Wave FY unresolved companion (jsx-collision:isCustomAuthMethod@auth/is-custom-auth-method.ts) */
const AppInitialIK: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureEnvironmentLabelsO3Init: any = undefined;
/** Wave FY unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspacePXInit: any = undefined;
/** Wave FY unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
function usePluginScheduledTasksHelper1({
  authMethod,
  buildFlavor,
  codexHome,
  isOpenAICuratedRemoteMarketplaceEnabled,
  workspaceRoots,
}) {
  return {
    buildFlavor,
    cwds: buildSkillDiscoveryRoots({
      codexHome,
      hostId: LOCAL_HOST_ID,
      workspaceRoots,
    }),
    hiddenMarketplaceNames: ensureBrowserUseGateInit({
      isOpenAICuratedRemoteMarketplaceEnabled,
      shouldHideOpenAICuratedMarketplaces: AppInitialIK(authMethod),
    }),
    marketplaceKinds: AppInitialBK({
      additionalMarketplaceKinds: [],
      includeRemoteCatalog: true,
      includeVerticalCatalog: !isOpenAICuratedRemoteMarketplaceEnabled,
    }),
  };
}
var alpha,
  bravo = esmInit(() => {
    ensureComposerEsm_MT_Init();
    AppInitialFK();
    ensureInstalledPluginsQueryInit();
    ensureDynamicScriptLoadInit();
    ensureAppScopeInit();
    ensureAppShellAtomsInit();
    dataAppActionReviewFileExpanded();
    AppInitialFz();
    alpha = useQuery(appScopeAtom, (delta) => ({
      queryKey: [...SCHEDULED_TASKS_PLUGIN_ID, delta],
      queryFn: () => {
        let echo = appServices.pluginScheduledTasks;
        if (echo == null) throw Error("Plugin scheduled tasks are unavailable");
        return echo.list(delta);
      },
      staleTime: readScrollTop.ONE_MINUTE,
    }));
  });
export function usePluginScheduledTasksN(falcon: unknown) {
  let { hostId } = falcon,
    gamma = NativeContextMenuSurface("3309093858"),
    harbor = NativeContextMenuSurface("4218407052"),
    indigo = {
      hostId,
    };
  let jade = usePluginsFeatureEnabled(indigo),
    kite = ensureRemoteConnectionsFeatureInit(LOCAL_HOST_ID),
    lemon = readCodexHomeFromQuery(LOCAL_HOST_ID),
    marble = CodexPluginActionResult(ensureEnvironmentLabelsO3Init),
    nickel =
      hostId === "local" &&
      gamma &&
      jade &&
      appServices.pluginScheduledTasks != null,
    onyx = kite?.authMethod ?? null,
    pearl = usePluginScheduledTasksHelper1({
      authMethod: onyx,
      buildFlavor: isBusinessPlan(),
      codexHome: lemon,
      isOpenAICuratedRemoteMarketplaceEnabled: harbor,
      workspaceRoots: marble.data?.roots,
    });
  let quartz = nickel && marble.isFetched,
    river = {
      enabled: quartz,
    };
  let slate = CodexBrowserSurfaceActionType(alpha, pearl, river);
  return nickel ? slate.data : undefined;
}
var copper;
export const usePluginScheduledTasksT = esmInit(() => {
  copper = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  ensureAuthProviderInit();
  ensureSelectWorkspacePXInit();
  ensureSkillsPageHelpersInit();
  ensureDynamicScriptLoadInit();
  extractColonPrefixedNamedTokens();
  ensureAppShellAtomsInit();
  ensureSkillsPageHelpersInit();
  ensureDebugPanelTurnFilesInit();
  bravo();
});

/** Wave FY: bind no longer required after full body promote */
export function bindUsePluginScheduledTasks(_next: unknown): void {}
export function ensureUsePluginScheduledTasksInit(): void {}

/** Bundle public export name (IMPORT_MAP `n` → `usePluginScheduledTasks`). */
export { usePluginScheduledTasksN as usePluginScheduledTasks };
