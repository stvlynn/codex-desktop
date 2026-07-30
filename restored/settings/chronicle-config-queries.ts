// Restored from ref/webview/assets/chronicle-config-queries-D25yfzn5.js
// Wave FY — full polished body from `chronicle-config-queries-D25yfzn5/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 8 (verified 20/27).

import { ensureAccountPlanQueryInit } from "../account/ensure-account-plan-query-init";
import { appActionSidebarProjectRefSchema } from "../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../analytics/codex-plugin-action-result";
import { ensureComposerEsm_MT_Init } from "../boundaries/composer-esm-inits";
import { reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { USER_CONFIG_PATH } from "../config/user-config-path";
import { fileExtensionFromPath } from "../files/file-extension-from-path";
import { ensureGitRepoWatchAtomsInit } from "../hooks/git-method-query-atoms";
import { homeDirectoryQueryAtom } from "../hooks/home-directory-query";
import { useQueryClient } from "../hooks/use-query-client";
import { serializeCharacterReferenceNode } from "../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../markdown/strong-marker-from-options";
import { AppActionSelector } from "../navigation/app-action-selectors";
import { esmInit } from "../runtime/rolldown-runtime";
import { coalesceTruthy } from "../utils/coalesce-truthy";
import { noop } from "../utils/noop";
import { posixPathBasename } from "../utils/posix-path-basename";
import { canonicalizeWorkspacePathKey } from "../utils/workspace-path-keys";

/** Wave FY unresolved companion (jsx-collision:deferredUiB@ui/deferred-ui-b.ts) */
const AppInitialB: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-f22.tsx) */
const DeferredUiF22: any = undefined;
/** Wave FY unresolved companion (missing-export:boundaries/browser-use-plugin-facades.ts) */
const ensureConfigQueryAtomsInit: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/deferred-hosts-s3.ts) */
const deferredHostsS3: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureFeaturesPrefix@utils/ensure-leading-prefix.ts) */
const AppInitialXmt: any = undefined;
/** Wave FY unresolved companion (jsx-collision:findProcessManagerRow@desktop/find-process-manager-row.ts) */
const AppInitialY: any = undefined;
export function chronicleConfigQueriesR() {
  let kite = useQueryClient(),
    lemon = CodexPluginActionResult(DeferredUiF22),
    {
      data
    } = CodexBrowserSurfaceActionType(homeDirectoryQueryAtom, lemon),
    marble = ensureGitRepoWatchAtomsInit(),
    nickel = [...USER_CONFIG_PATH, lemon];
  let onyx = nickel,
    pearl = umbra => {
      let {
        enabled
      } = umbra;
      return canonicalizeWorkspacePathKey("batch-write-config-value", {
        hostId: lemon,
        edits: [{
          keyPath: copper,
          value: enabled,
          mergeStrategy: "upsert"
        }],
        filePath: data?.configWriteTarget?.filePath ?? null,
        expectedVersion: null,
        reloadUserConfig: true
      });
    };
  let quartz, river;
  quartz = async violet => {
    let {
      enabled
    } = violet;
    await kite.cancelQueries({
      queryKey: onyx
    });
    let willow = kite.getQueryData(onyx);
    return kite.setQueryData(onyx, xenon => xenon == null ? xenon : {
      ...xenon,
      config: chronicleConfigQueriesT(xenon.config, enabled)
    }), {
      previousUserConfig: willow
    };
  };
  river = (yellow, zinc, amber) => {
    appActionSidebarProjectRefSchema.error("Failed to update Chronicle config", {
      safe: {
        error: String(yellow)
      },
      sensitive: {}
    });
    kite.setQueryData(onyx, amber?.previousUserConfig);
  };
  let slate = async () => {
    await Promise.all([marble(USER_CONFIG_PATH), marble(["user-saved-config"])]);
  };
  let timber;
  return timber = {
    mutationFn: pearl,
    onMutate: quartz,
    onError: river,
    onSettled: slate
  }, noop(timber);
}
function chronicleConfigQueriesT(echo, falcon) {
  return Object.assign(structuredClone(echo), {
    features: {
      ...alpha(echo.features, AppInitialY, falcon)
    }
  });
}
function alpha(gamma, harbor, indigo) {
  let jade = delta.safeParse(gamma);
  return {
    ...(jade.success ? jade.data : {}),
    [harbor]: indigo
  };
}
var bravo, copper, delta;
export const chronicleConfigQueriesN = esmInit(() => {
  bravo = reactCompilerRuntime();
  serializeCharacterReferenceNode();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  coalesceTruthy();
  DeferredUiV2();
  AppActionSelector();
  ensureConfigQueryAtomsInit();
  deferredHostsS3();
  posixPathBasename();
  AppInitialB();
  copper = AppInitialXmt(AppInitialY);
  delta = ensureAccountPlanQueryInit(coalesceTruthy(), fileExtensionFromPath());
});
export { chronicleConfigQueriesT };

/** Wave FY: bind no longer required after full body promote */
export function bindUseChronicleConfigQuery(_next: unknown): void {}
export function ensureUseChronicleConfigQueryInit(): void {}

// --- split/export lane aliases ---
/** missing-relative-exports companion */
export const applyChronicleConfigFeature: any = undefined;
/** missing-relative-exports companion */
export const ensureChronicleConfigQueriesInit: any = undefined;
/** missing-relative-exports companion */
export const useChronicleConfigQuery: any = undefined;
