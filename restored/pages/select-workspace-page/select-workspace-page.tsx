// Restored from ref/webview/assets/select-workspace-page-BZ7MILnm.js
// Wave FY — full polished body from `select-workspace-page-BZ7MILnm/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 65/89).
// Wave FZ-support — PascalCase invalid JSX tags: at→At, deferredT→DeferredT, deferredUiYn→DeferredUiYn, ensureSettingsGlyphBnInit→EnsureSettingsGlyphBnInit, isUpdatePhaseInProgress→IsUpdatePhaseInProgress, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, SelectWorkspacePageHelper1→SelectWorkspacePageHelper1, SelectWorkspacePageHelper10→SelectWorkspacePageHelper10, SelectWorkspacePageHelper11→SelectWorkspacePageHelper11, SelectWorkspacePageHelper12→SelectWorkspacePageHelper12, SelectWorkspacePageHelper13→SelectWorkspacePageHelper13, SelectWorkspacePageHelper14→SelectWorkspacePageHelper14.
// Split 1/2 — exported page component + workspace-root data plumbing.
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CODEX_ONBOARDING_WORKSPACE_ADD_CLICKED_TYPE } from "../../analytics/codex-onboarding-workspace-add-clicked-type";
import { CODEX_ONBOARDING_WORKSPACE_CONTINUE_CLICKED_TYPE } from "../../analytics/codex-onboarding-workspace-continue-clicked-type";
import { CODEX_ONBOARDING_WORKSPACE_SELECTION_CHANGED_TYPE } from "../../analytics/codex-onboarding-workspace-selection-changed-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { logProductEvent } from "../../analytics/log-product-event";
import { GuardianApprovals } from "../../apps/guardian-approvals";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_QN_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Utt_Init,
  ensureComposerEsm_Wdt_Init,
} from "../../composer/composer-esm-inits";
import { useAtomPair } from "../../boundaries/persisted-atom";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { deferredConversationSh } from "../../conversation/deferred-conversation-sh";
import {
  ensureSidebarThreadKeyPrefixesInit,
  toLocalSidebarThreadKey,
} from "../../conversation/sidebar-thread-keys";
import { pathContainsWorktreesDir } from "../../files/path-contains-worktrees-dir";
import { usePlatformAwareFeatureGate } from "../../hooks/use-platform-aware-feature-gate";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import {
  findSidebarSectionElement,
  scrollAppActionTargetTo,
  writeScrollTop,
} from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { ensureEmptyXvtInit } from "../../runtime/ensure-empty-xvt-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { deferredSn } from "../../ui/deferred-sn";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { identityValue } from "../../utils/identity-value";
import { posixPathBasename } from "../../utils/posix-path-basename";
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceCqInit: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureSelectWorkspaceDhInit@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialDh: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-e.ts) */
const deferredUiE: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureSelectWorkspaceEBInit@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialEB: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureSelectWorkspaceEMInit@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialEM: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceIXInit: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceKNInit: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceKstInit: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceNstInit: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureEnvironmentLabelsO3Init: any = undefined;
/** Wave FY unresolved companion (jsx-collision:resolveGuardianApprovalWorkspaceWriteMode@approvals/resolve-guardian-approval-workspace-write-mode.ts) */
const AppInitialPq: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspacePXInit: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-qdt.ts) */
const deferredUiQdt: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureShapeColorTokenClusterInit@ui/ensure-shape-color-token-cluster-init.ts) */
const AppInitialTM: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiWh@ui/deferred-ui-wh.tsx) */
const AppInitialWh: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureBooleanSchemaClusterInit@settings/ensure-boolean-schema-cluster-init.ts) */
const AppInitialWst: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-wx.ts) */
const deferredUiWX: any = undefined;
/** Wave FY unresolved companion (jsx-collision:dataLocalConversationItemTargetIds@conversation/data-local-conversation-item-target-ids.ts) */
const AppInitialXh: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/is-update-phase-in-progress.ts) */
const IsUpdatePhaseInProgress: any = undefined;
/** Wave FY unresolved companion (jsx-collision:getRecentConversationsQueryKey@worktrees/get-recent-conversations-query-key.ts) */
const AppInitialYX: any = undefined;
/** split companion stub */
const SelectWorkspacePageHelper11: any = undefined;
/** split companion stub */
const SelectWorkspacePageHelper13: any = undefined;
/** split companion stub */
const delta: any = undefined;
export function SelectWorkspacePage() {
  let zinc = CodexPluginActionType(appScopeAtom),
    amber = useNavigate(),
    basalt = useIntl(),
    [cedar, daisy] = useAtomPair(AppInitialPq),
    ember = identityValue(GuardianApprovals),
    { data = [], isFetching } = AppInitialYX(),
    flint = AppInitialEM(),
    garnet = (juniper) => !ensureSelectWorkspaceKstInit(juniper, flint);
  let hazel = data.filter(garnet).map(lemon),
    { data: _data, isFetching: _isFetching } = CodexPluginActionResult(
      ensureEnvironmentLabelsO3Init,
    ),
    { data: __data, isFetching: __isFetching } = CodexBrowserSurfaceActionType(
      collectUniqueMappedPresenceEntries,
      {
        params: {
          dirs: river.default(nickel(hazel), $e).sort(kite),
        },
        source: "onboarding_workspace_select",
      },
    ),
    { data: ___data, isFetching: ___isFetching } =
      ensureSelectWorkspaceIXInit(),
    {
      autoLaunchAction,
      isRemoteHost,
      setWorkspaceOnboardingAutoLaunchApplied,
      workspaceOnboardingExperimentArm,
    } = AppInitialWh(),
    ivory = [];
  let [jasper, kelp] = slate.useState(ivory),
    lotus = {};
  let [mint, nova] = slate.useState(lotus),
    [olive, prism] = slate.useState(false),
    [quill, reef] = slate.useState(null),
    sage = slate.useRef(false),
    topaz = basalt.formatMessage({
      id: "electron.onboarding.workspace.skip.error.unknown",
      defaultMessage: "Unknown error",
      description:
        "Fallback error message when onboarding skip fails without details",
    });
  let ultra = topaz,
    vapor = slate.useRef(0),
    wheat = _data?.roots,
    yarn = wheat != null && wheat.length > 0,
    zephyr = onyx({
      tasks: hazel,
      gitOrigins: __data?.origins,
      codexHome: ___data?.codexHome,
    }),
    acorn = river
      .default([...(wheat ?? []), ...zephyr, ...jasper], jade)
      .sort(indigo),
    bloom = (lagoon) => {
      let meadow = _data?.labels?.[lagoon]?.trim();
      return meadow
        ? {
            root: lagoon,
            label: meadow,
          }
        : {
            root: lagoon,
            label: pearl(lagoon),
          };
    };
  let coral = acorn.map(bloom),
    drift = coral.map(harbor),
    _e = (nest) => !!mint[nest];
  let eagle = drift.filter(_e),
    frost =
      drift.length > 0 && eagle.length === drift.length
        ? true
        : eagle.length > 0 && eagle.length < drift.length
          ? "indeterminate"
          : false,
    glide;
  glide = (oak) => {
    kelp((trail) => river.default([...trail, oak.root], gamma));
    let petal = {
      ...mint,
      [oak.root]: true,
    };
    nova(petal);
    let quiet = drift.includes(oak.root),
      rain = marble(petal, drift) + +!quiet,
      seed = quiet ? drift.length : drift.length + 1;
    logProductEvent(zinc, CODEX_ONBOARDING_WORKSPACE_SELECTION_CHANGED_TYPE, {
      action: "toggle_root",
      selectedWorkspacesCount: rain,
      totalWorkspacesCount: seed,
      experimentArm: workspaceOnboardingExperimentArm,
      checked: true,
    });
  };
  writeScrollTop("workspace-root-option-picked", glide);
  let honey;
  honey = (urn) => {
    if ((prism(false), urn.success)) {
      logProductEvent(zinc, CODEX_ONBOARDING_WORKSPACE_CONTINUE_CLICKED_TYPE, {
        selectedWorkspacesCount: 1,
        totalWorkspacesCount: drift.length,
        autoNavigated: false,
        experimentArm: workspaceOnboardingExperimentArm,
      });
      reef(null);
      ember(Math.floor(Date.now() / 1e3));
      daisy("auto");
      return;
    }
    let vine = urn.error ?? ultra;
    reef(vine);
  };
  writeScrollTop("electron-onboarding-skip-workspace-result", honey);
  let iris = () => {
    reef(null);
    logProductEvent(zinc, CODEX_ONBOARDING_WORKSPACE_ADD_CLICKED_TYPE, {
      hasExistingWorkspaces: yarn,
      source: "onboarding_modal",
      experimentArm: workspaceOnboardingExperimentArm,
    });
    ensureAppActionPayloadSchemasInit.dispatchMessage(
      "electron-pick-workspace-root-option",
      {
        allowMultiple: false,
      },
    );
  };
  let jewel = iris,
    knoll = () => {
      if (olive) return;
      reef(null);
      prism(true);
      let wind = AppInitialXh(workspaceOnboardingExperimentArm);
      ensureAppActionPayloadSchemasInit.dispatchMessage(
        "electron-onboarding-skip-workspace",
        wind == null
          ? {}
          : {
              projectName: wind,
            },
      );
    };
  let lunar = knoll,
    moss = () => {
      lunar();
    };
  let north = slate.useEffectEvent(moss),
    orbit = (yarrow, azure) => {
      reef(null);
      kelp((canyon) => river.default([...canyon, yarrow], falcon));
      let birch = {
        ...mint,
        [yarrow]: azure,
      };
      nova(birch);
      logProductEvent(zinc, CODEX_ONBOARDING_WORKSPACE_SELECTION_CHANGED_TYPE, {
        action: "toggle_root",
        checked: azure,
        selectedWorkspacesCount: marble(birch, drift),
        totalWorkspacesCount: drift.length,
        experimentArm: workspaceOnboardingExperimentArm,
      });
    };
  let pine = orbit,
    quest = (dew) => {
      reef(null);
      let ever = {
        ...mint,
      };
      for (let grain of drift) ever[grain] = dew;
      nova(ever);
      let field = marble(ever, drift);
      logProductEvent(zinc, CODEX_ONBOARDING_WORKSPACE_SELECTION_CHANGED_TYPE, {
        action: "select_all",
        checked: dew,
        selectedWorkspacesCount: field,
        totalWorkspacesCount: drift.length,
        experimentArm: workspaceOnboardingExperimentArm,
      });
    };
  let ridge = quest,
    storm = {
      queryKey: [VSCODE_EDITOR_ID, "paths-exist"],
    };
  let tide = ensureEmptyXvtInit(storm),
    unity =
      isFetching || _isFetching || __isFetching || ___isFetching || tide > 0,
    vale = coral.length > 0,
    wave = eagle.length > 0,
    apex = yarn || zephyr.length > 0,
    brook = !apex && !unity && !vale,
    _SelectWorkspacePage = slate.useRef(false),
    cliff = () => {
      sage.current ||
        unity ||
        autoLaunchAction !== "select_workspace_skip_to_playground" ||
        ((sage.current = true),
        setWorkspaceOnboardingAutoLaunchApplied(true),
        north());
    };
  let dusk;
  dusk = [unity, autoLaunchAction, setWorkspaceOnboardingAutoLaunchApplied];
  slate.useEffect(cliff, dusk);
  let at = (haven, ink) => {
    logProductEvent(zinc, CODEX_ONBOARDING_WORKSPACE_CONTINUE_CLICKED_TYPE, {
      selectedWorkspacesCount: haven.length,
      totalWorkspacesCount: drift.length,
      autoNavigated: ink,
      experimentArm: workspaceOnboardingExperimentArm,
    });
    let jadeite = haven;
    ember(Math.floor(Date.now() / 1e3));
    cedar === "workspace" &&
      wheat != null &&
      (jadeite = river.default([...wheat, ...haven], echo));
    ensureAppActionPayloadSchemasInit.dispatchMessage(
      "electron-update-workspace-root-options",
      {
        roots: jadeite,
      },
    );
    daisy("auto");
    vapor.current += 1;
    ensureComposerEsm_QN_Init(zinc, "work");
    amber("/", {
      replace: true,
      state: {
        focusComposerNonce: vapor.current,
      },
    });
  };
  let elm = at,
    fern,
    grove;
  fern = () => {
    apex ||
      _SelectWorkspacePage.current ||
      unity ||
      (eagle.length !== 0 &&
        ((_SelectWorkspacePage.current = true), elm(eagle, true)));
  };
  grove = [elm, apex, unity, eagle];
  slate.useEffect(fern, grove);
  let hill = () => {
    reef(null);
    elm(eagle, false);
  };
  let isle = hill;
  return (
    <IsUpdatePhaseInProgress
      {...{
        children: brook ? (
          <SelectWorkspacePageHelper11
            {...{
              workspaceOnboardingExperimentArm,
              isRemoteHost,
              handleOpenFolder: jewel,
              handleSkip: lunar,
              isSkipPending: olive,
              skipErrorMessage: quill,
            }}
          />
        ) : (
          <SelectWorkspacePageHelper13
            {...{
              isLoadingRoots: unity,
              hasAvailableRoots: vale,
              availableOptions: coral,
              selectedRoots: eagle,
              selectAllState: frost === "indeterminate" ? false : frost,
              handleToggleSelectAll: ridge,
              handleToggleWorkspace: pine,
              intl: basalt,
              handleOpenFolder: jewel,
              hasSelectedRoots: wave,
              isRemoteHost,
              handleSkip: lunar,
              isSkipPending: olive,
              skipErrorMessage: quill,
              handleContinue: isle,
              workspaceOnboardingExperimentArm,
            }}
          />
        ),
      }}
    />
  );
}
function echo(kernel) {
  return deferredUiQdt(kernel);
}
function falcon(leaf) {
  return deferredUiQdt(leaf);
}
function gamma(maple) {
  return deferredUiQdt(maple);
}
function harbor(nimbus) {
  return nimbus.root;
}
function indigo(opal, plume) {
  return opal.localeCompare(plume);
}
function jade(quillow) {
  return deferredUiQdt(quillow);
}
function kite(silk, thorn) {
  return silk.localeCompare(thorn);
}
function $e(upland) {
  return deferredUiQdt(upland);
}
function lemon(vista) {
  return {
    kind: "local",
    key: toLocalSidebarThreadKey(vista.id),
    at: vista.createdAt,
    conversation: vista,
  };
}
function marble(clamp, drill) {
  let engine = 0;
  for (let frame of drill) clamp[frame] && (engine += 1);
  return engine;
}
function nickel(gasket) {
  let handle = [];
  return (
    (gasket ?? []).forEach((item) => {
      switch (item.kind) {
        case "local": {
          let insert =
            item.conversation?.cwd ??
            item.pendingWorktree?.startConversationParamsInput?.cwd ??
            item.pendingWorktree?.sourceWorkspaceRoot;
          insert && handle.push(insert);
          return;
        }
        case "remote":
          return;
      }
    }),
    handle
  );
}
function onyx({ tasks, gitOrigins = [], codexHome }) {
  let jacket = nickel(tasks);
  if (jacket.length === 0) return [];
  return river.default(
    jacket
      .map((item) => {
        let knurl = AppInitialEB(item, gitOrigins);
        return !knurl?.root || !pathContainsWorktreesDir(knurl.root, codexHome)
          ? item
          : (gitOrigins.reduce(
              (accumulator, current) =>
                !knurl.originUrl ||
                current.originUrl !== knurl.originUrl ||
                pathContainsWorktreesDir(current.root, codexHome)
                  ? accumulator
                  : accumulator
                    ? current.root.length > accumulator.length
                      ? current.root
                      : accumulator
                    : current.root,
              null,
            ) ?? knurl.root);
      })
      .filter((item) => !!item),
    (lever) => deferredUiQdt(lever).replace(/\/+$/, ""),
  );
}
function pearl(mount) {
  return posixPathBasename(mount);
}
var quartz, river, slate, $;
esmInit(() => {
  quartz = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  serializeCharacterReferenceNode();
  ensureComposerEsm_Tft_Init();
  countLeadingZeroBits32();
  river = commonJsInit(ensureSelectWorkspaceNstInit(), 1);
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  slate = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  deferredUiWX();
  AppInitialWst();
  ensureSettingsQueryAtomsInit();
  ensureComposerEsm_Sut_Init();
  ensureSelectWorkspaceKNInit();
  usePlatformAwareFeatureGate();
  ensureSelectWorkspacePXInit();
  AppInitialTM();
  deferredUiE();
  findSidebarSectionElement();
  ensureSelectWorkspaceCqInit();
  ensureComposerEsm_K9_Init();
  delta();
  ensureAppScopeInit();
  extractColonPrefixedNamedTokens();
  ensureAppShellAtomsInit();
  DropdownMenuPopover();
  ensureSidebarThreadKeyPrefixesInit();
  ensureComposerEsm_Wdt_Init();
  scrollAppActionTargetTo();
  deferredSn();
  deferredConversationSh();
  AppInitialDh();
})();
