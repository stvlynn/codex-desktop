// Restored from ref/webview/assets/environment-labels-BrZBoJDP.js
// Wave FY — full polished body from `environment-labels-BrZBoJDP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 31 (verified 56/87).
// Wave FZ-support — PascalCase invalid JSX tags: deferredUiB→DeferredUiB, deferredUiH→DeferredUiH, deferredUiU→DeferredUiU, ensurePullRequestMediaBDInit→EnsurePullRequestMediaBDInit, EnvironmentLabelsHelper10→EnvironmentLabelsHelper10, EnvironmentLabelsHelper11→EnvironmentLabelsHelper11, EnvironmentLabelsHelper9→EnvironmentLabelsHelper9, torqueFourth→NutFourth, valveFourth→PistonFourth, axleFourth→RivetFourth, bracketFourth→ScrewFourth, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot.
// Careful split 1/2 — branch mutations and status helpers (split from part-1.tsx).
/* split-lane-import-depth:1 */

import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { ensureComposerEsm_MT_Init } from "../../composer/composer-esm-inits";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import {
  ensureHostConfigIdInit,
  getHostConfigId,
} from "../../hooks/host-rpc-client";
import { useQueryClient } from "../../hooks/use-query-client";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { esmInit } from "../../runtime/rolldown-runtime";
import { noop } from "../../utils/noop";

// Cross-part stubs.
const ensureUseGitRepoLiveQueryInit: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureEnvironmentLabelsF3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialF3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:filterArtifactTemplatePlugins@plugins/filter-artifact-template-plugins.ts) */
const AppInitialJ3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureEnvironmentLabelsP3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialP3: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/use-local-environment-editor-state.ts) */
const useLocalEnvironmentEditorState: any = undefined;

var gamma,
  environmentLabelsA = esmInit(() => {
    gamma = reactCompilerRuntime();
    ensureUseGitRepoLiveQueryInit();
  });
export function harbor(vapor: any, wheat: any) {
  let yarn = useQueryClient(),
    zephyr = CodexPluginActionResult(getHostConfigId),
    acorn = {
      retainRepoWatch: zephyr,
    };
  let { data } = AppInitialF3(vapor, wheat, acorn),
    bloom = vapor?.cwd ?? null,
    coral = vapor?.hostId ?? null,
    drift = ["vscode", "git-checkout-branch", bloom, coral];
  let eagle = async (honey) => {
    if (vapor == null) throw Error("Expected a repository target");
    return invokeDesktopRpc("git-checkout-branch", {
      params: {
        ...honey,
        cwd: vapor.cwd,
        hostId: vapor.hostId,
      },
      source: wheat,
    });
  };
  let frost = (iris) => {
    vapor != null &&
      data != null &&
      iris?.status === "success" &&
      AppInitialJ3(
        yarn,
        {
          commonDir: data.commonDir,
          root: data.root,
        },
        {
          changeType: "head",
          hostKey: getHostConfigId(vapor.hostConfig),
        },
      );
  };
  let glide;
  return (
    (glide = {
      mutationKey: drift,
      mutationFn: eagle,
      networkMode: "always",
      onSettled: frost,
    }),
    noop(glide)
  );
}
var indigo,
  jade = esmInit(() => {
    indigo = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    ensureUseGitRepoLiveQueryInit();
    ensureHostConfigIdInit();
    AppInitialP3();
    useLocalEnvironmentEditorState();
    scrollAppActionTargetTo();
  });
export function kite(jewel: any, knoll: any) {
  let lunar = useQueryClient(),
    moss = CodexPluginActionResult(getHostConfigId),
    north = {
      retainRepoWatch: moss,
    };
  let { data } = AppInitialF3(jewel, knoll, north),
    orbit = jewel?.cwd ?? null,
    pine = jewel?.hostId ?? null,
    quest = ["vscode", "git-create-branch", orbit, pine];
  let ridge = async (unity) => {
    if (jewel == null) throw Error("Expected a repository target");
    return invokeDesktopRpc("git-create-branch", {
      params: {
        ...unity,
        cwd: jewel.cwd,
        hostId: jewel.hostId,
      },
      source: knoll,
    });
  };
  let storm = (vale, wave, apex) => {
    if (jewel != null && data != null) {
      let brook = apex.mode === "synced" ? "synced-branch" : "head";
      AppInitialJ3(lunar, data, {
        changeType: brook,
        hostKey: getHostConfigId(jewel.hostConfig),
      });
    }
  };
  let tide;
  return (
    (tide = {
      mutationKey: quest,
      mutationFn: ridge,
      networkMode: "always",
      onSettled: storm,
    }),
    noop(tide)
  );
}
var $e,
  lemon = esmInit(() => {
    $e = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    ensureUseGitRepoLiveQueryInit();
    ensureHostConfigIdInit();
    AppInitialP3();
    useLocalEnvironmentEditorState();
    scrollAppActionTargetTo();
  });
export function marble({ disabled, hasNoCommits, statusSummary }: any) {
  return {
    branchSelectionDisabled: disabled,
    createAndCheckoutDisabled: hasNoCommits || disabled,
    uncommittedFileCount: nickel(statusSummary),
  };
}
function nickel(cliff) {
  return cliff?.type === "success"
    ? Math.max(cliff.stagedCount, cliff.unstagedCount) +
        (cliff.untrackedCount ?? 0)
    : 0;
}
var onyx = esmInit(() => {});
