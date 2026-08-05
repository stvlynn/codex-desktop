// Restored from ref/webview/assets/environment-labels-BrZBoJDP.js
// Wave FY — full polished body from `environment-labels-BrZBoJDP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 31 (verified 56/87).
// Wave FZ-support — PascalCase invalid JSX tags: deferredUiB→DeferredUiB, deferredUiH→DeferredUiH, deferredUiU→DeferredUiU, ensurePullRequestMediaBDInit→EnsurePullRequestMediaBDInit, EnvironmentLabelsHelper10→EnvironmentLabelsHelper10, EnvironmentLabelsHelper11→EnvironmentLabelsHelper11, EnvironmentLabelsHelper9→EnvironmentLabelsHelper9, torqueFourth→NutFourth, valveFourth→PistonFourth, axleFourth→RivetFourth, bracketFourth→ScrewFourth, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot.
// Careful split 1/2 — branch query layer (split from part-1.tsx).
/* split-lane-import-depth:1 */

import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_MT_Init } from "../../composer/composer-esm-inits";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import {
  ensureHostConfigIdInit,
  getHostConfigId,
  getHostRpcClient,
} from "../../hooks/host-rpc-client";
import { useGitRepoLiveQuery } from "../../hooks/use-git-repo-live-query";
import { useQuery } from "../../hooks/use-query";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { readScrollTop } from "../../navigation/app-action-dom";
import { esmInit } from "../../runtime/rolldown-runtime";
import { parseSkillsManagePath } from "../../skills/parse-skills-manage-path";
import { identityCwd } from "../../utils/workspace-paths";

// Cross-part stubs.
const ensureUseGitRepoLiveQueryInit: any = undefined;
/** Wave FY unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureEnvironmentLabelsR3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialR3: any = undefined;

function alpha({ cwd, enabled, hostConfig, operationSource }) {
  return JSON.stringify({
    cwd: cwd ?? null,
    enabled,
    hostConfig,
    operationSource,
  });
}
function bravo({
  cwd,
  enabled,
  hostConfig,
  operationSource,
  preserveRemoteRefs = false,
  query,
}) {
  return JSON.stringify({
    cwd: cwd ?? null,
    enabled,
    hostConfig,
    operationSource,
    preserveRemoteRefs,
    query,
  });
}
var copper,
  environmentLabelsL,
  environmentLabelsU = esmInit(() => {
    ensureComposerEsm_MT_Init();
    ensureAppScopeInit();
    dataAppActionReviewFileExpanded();
    ensureUseGitRepoLiveQueryInit();
    parseSkillsManagePath();
    ensureHostConfigIdInit();
    copper = useQuery(
      appScopeAtom,
      ({ cwd, enabled, hostConfig, operationSource }) =>
        AppInitialR3(
          cwd,
          getHostConfigId(hostConfig),
          hostConfig,
          operationSource,
          {
            enabled,
          },
        ),
      {
        key: alpha,
      },
    );
    environmentLabelsL = useQuery(
      appScopeAtom,
      (
        {
          cwd,
          enabled,
          hostConfig,
          operationSource,
          preserveRemoteRefs = false,
          query,
        },
        { get },
      ) => {
        let xenon = get(copper, {
          cwd,
          enabled,
          hostConfig,
          operationSource,
        }).data;
        return getHostRpcClient(
          "search-branches",
          xenon,
          xenon == null
            ? null
            : {
                root: xenon.root,
                operationSource,
                preserveRemoteRefs,
                query,
                limit: 20,
              },
          getHostConfigId(hostConfig),
          hostConfig,
          {
            enabled,
            staleTime: readScrollTop.FIVE_SECONDS,
          },
        );
      },
      {
        key: bravo,
      },
    );
  });
export function environmentLabelsC(
  yellow: any,
  zinc: any,
  amber: any,
  basalt: any,
) {
  let cedar = basalt === undefined ? {} : basalt;
  let daisy = cedar,
    ember = yellow ?? "",
    flint = identityCwd(ember);
  let garnet = {
    cwd: flint,
    includeUntrackedFiles: false,
    operationSource: amber,
  };
  let hazel = garnet,
    ivory = {
      ...hazel,
      includeUntrackedFiles: true,
    };
  let jasper = ivory,
    kelp = {
      method: "status-summary",
      params: jasper,
    };
  let lotus;
  return (
    (lotus = {
      liveQuery: kelp,
      staleTime: 1 / 0,
      ...daisy,
    }),
    useGitRepoLiveQuery(yellow, zinc, "status-summary", hazel, amber, lotus)
  );
}
var delta,
  environmentLabelsS = esmInit(() => {
    delta = reactCompilerRuntime();
    strongMarkerFromOptions();
    ensureUseGitRepoLiveQueryInit();
  });
export function environmentLabelsO(
  mint: any,
  nova: any,
  olive: any,
  prism: any,
) {
  let quill = (sage) => {
    let { root } = sage;
    return {
      operationSource: olive,
      root,
      limit: 100,
    };
  };
  let reef;
  return (
    (reef = {
      liveQuery: falcon,
      select: echo,
      staleTime: 1 / 0,
      ...prism,
    }),
    useGitRepoLiveQuery(mint, nova, "recent-branches", quill, olive, reef)
  );
}
function echo(topaz) {
  return topaz.branches;
}
function falcon(ultra) {
  return {
    method: "recent-branches",
    params: ultra,
  };
}

export { environmentLabelsL };
