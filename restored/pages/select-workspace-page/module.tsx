// Restored from ref/webview/assets/select-workspace-page-BZ7MILnm.js
// Wave FY — full polished body from `select-workspace-page-BZ7MILnm/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 65/89).
// Wave FZ-support — PascalCase invalid JSX tags: at→At, deferredT→DeferredT, deferredUiYn→DeferredUiYn, ensureSettingsGlyphBnInit→EnsureSettingsGlyphBnInit, isUpdatePhaseInProgress→IsUpdatePhaseInProgress, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, SelectWorkspacePageHelper1→SelectWorkspacePageHelper1, SelectWorkspacePageHelper10→SelectWorkspacePageHelper10, SelectWorkspacePageHelper11→SelectWorkspacePageHelper11, SelectWorkspacePageHelper12→SelectWorkspacePageHelper12, SelectWorkspacePageHelper13→SelectWorkspacePageHelper13, SelectWorkspacePageHelper14→SelectWorkspacePageHelper14.
// Careful split: module + bridges
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
  ensureComposerEsm_Wlt_Init,
} from "../../composer/composer-esm-inits";
import { useAtomPair } from "../../boundaries/persisted-atom";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { deferredConversationR } from "../../conversation/deferred-conversation-r";
import { deferredConversationSh } from "../../conversation/deferred-conversation-sh";
import {
  ensureSidebarThreadKeyPrefixesInit,
  toLocalSidebarThreadKey,
} from "../../conversation/sidebar-thread-keys";
import { pathContainsWorktreesDir } from "../../files/path-contains-worktrees-dir";
import { usePlatformAwareFeatureGate } from "../../hooks/use-platform-aware-feature-gate";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconVn } from "../../icons/app-icon-vn";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import {
  findSidebarSectionElement,
  scrollAppActionTargetTo,
  writeScrollTop,
} from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { ensureEmptyXvtInit } from "../../runtime/ensure-empty-xvt-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useChronicleSettingsSection } from "../../settings/use-chronicle-settings-section";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { deferredSn } from "../../ui/deferred-sn";
import { DeferredT } from "../../ui/deferred-t";
import { DeferredUiYn } from "../../ui/deferred-ui-yn";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { identityValue } from "../../utils/identity-value";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { EnsureSettingsGlyphBnInit } from "../../utils/wave-as-gap-ensure-inits";
import { stripWinLongPathPrefix } from "../../utils/workspace-paths";
const At = at;
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
/** Wave FY unresolved companion (jsx-collision:deferredConversationN@conversation/deferred-conversation-n.ts) */
const AppInitialN: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceNstInit: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureEnvironmentLabelsO3Init: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureSelectWorkspaceOhInit@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialOh: any = undefined;
/** Wave FY unresolved companion (jsx-collision:resolveGuardianApprovalWorkspaceWriteMode@approvals/resolve-guardian-approval-workspace-write-mode.ts) */
const AppInitialPq: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspacePXInit: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-qdt.ts) */
const deferredUiQdt: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureShapeColorTokenClusterInit@ui/ensure-shape-color-token-cluster-init.ts) */
const AppInitialTM: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
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
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FY unresolved companion (jsx-collision:getRecentConversationsQueryKey@worktrees/get-recent-conversations-query-key.ts) */
const AppInitialYX: any = undefined;
function SelectWorkspacePageHelper1(timber) {
  let {
      children,
      onOpenChange,
      onStartFromScratch,
      onUseExistingFolder,
      open,
      triggerButton,
    } = timber,
    umbra = bravo.useRef(false),
    violet = (event) => {
      umbra.current &&
        ((umbra.current = false), event.preventDefault(), onStartFromScratch());
    };
  let willow = (
    <DropdownMenu.Item
      {...{
        LeftIcon: ensureComposerEsm_Wlt_Init,
        onSelect: () => {
          umbra.current = true;
        },
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "projectSetup.addProjectMenu.startFromScratch",
              defaultMessage: "Start from scratch",
              description: "Menu item that creates a new local project folder",
            }}
          />
        ),
      }}
    />
  );
  let xenon = (
    <MemoizedFormattedMessage
      {...{
        id: "projectSetup.addProjectMenu.useExistingFolder",
        defaultMessage: "Use an existing folder",
        description: "Menu item that opens the existing folder picker",
      }}
    />
  );
  let yellow = (
    <DropdownMenu.Item
      {...{
        LeftIcon: useChronicleSettingsSection,
        onSelect: onUseExistingFolder,
        children: xenon,
      }}
    />
  );
  return (
    <DropdownMenuPopover
      {...{
        triggerButton,
        contentWidth: "menu",
        onOpenChange,
        onCloseAutoFocus: violet,
        open,
        children: [willow, yellow, children],
      }}
    />
  );
}
var alpha,
  bravo,
  copper,
  delta = esmInit(() => {
    alpha = reactCompilerRuntime();
    bravo = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureDropdownMenuInit();
    deferredConversationR();
    ensureSkillsPageHelpersInit();
  });
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
function SelectWorkspacePageHelper10(wisp) {
  let { children, showIcon } = wisp,
    yonder = showIcon ? (
      <DeferredT
        {...{
          className: "h-10 w-10",
          "aria-hidden": "true",
        }}
      />
    ) : null;
  let zenith, anvil;
  zenith = (
    <MemoizedFormattedMessage
      {...{
        id: "electron.onboarding.workspace.title",
        defaultMessage: "Select a project",
        description: "Title on the desktop onboarding workspace selection page",
      }}
    />
  );
  anvil = (
    <MemoizedFormattedMessage
      {...{
        id: "electron.onboarding.workspace.subtitle",
        defaultMessage:
          "ChatGPT will be able to edit files and run commands in selected folders",
        description:
          "Subtitle on the desktop onboarding workspace selection page",
      }}
    />
  );
  return (
    <EnsureSettingsGlyphBnInit
      {...{
        className: "max-w-[330px]",
        icon: yonder,
        textClassName: "gap-6",
        title: zenith,
        subtitle: anvil,
        children,
      }}
    />
  );
}
function SelectWorkspacePageHelper11(beacon) {
  let {
      workspaceOnboardingExperimentArm,
      isRemoteHost,
      handleOpenFolder,
      handleSkip,
      isSkipPending,
      skipErrorMessage,
    } = beacon,
    crag = AppInitialOh(workspaceOnboardingExperimentArm)
      ? "outline"
      : "primary",
    dome = (
      <SelectWorkspacePageHelper12
        {...{
          className: "w-full justify-center py-2.5",
          color: crag,
          isRemoteHost,
          onStartFromScratch: handleSkip,
          onUseExistingFolder: handleOpenFolder,
        }}
      />
    );
  let eddy = isRemoteHost ? null : (
    <At
      {...{
        handleSkip,
        isSkipPending,
        skipErrorMessage,
        workspaceOnboardingExperimentArm,
      }}
    />
  );
  return (
    <SelectWorkspacePageHelper10
      {...{
        showIcon: true,
        children: (
          <div className="flex w-full flex-col gap-3">
            {dome}
            {eddy}
          </div>
        ),
      }}
    />
  );
}
function SelectWorkspacePageHelper12(fjord) {
  let {
      className,
      color,
      isRemoteHost,
      onStartFromScratch,
      onUseExistingFolder,
      size,
    } = fjord,
    glen = isRemoteHost ? onUseExistingFolder : undefined,
    hearth = (
      <MemoizedFormattedMessage
        {...{
          id: "electron.onboarding.workspace.openFolder",
          defaultMessage: "Add project",
          description:
            "Button label to add a workspace during desktop onboarding",
        }}
      />
    );
  let inlet = (
    <ReadLoginRouteQuerySnapshot
      {...{
        className,
        color,
        size,
        onClick: glen,
        children: hearth,
      }}
    />
  );
  let jetty = inlet;
  if (isRemoteHost) return jetty;
  return (
    <SelectWorkspacePageHelper1
      {...{
        triggerButton: jetty,
        onStartFromScratch,
        onUseExistingFolder,
      }}
    />
  );
}
function SelectWorkspacePageHelper13(knob) {
  let {
      isLoadingRoots,
      hasAvailableRoots,
      availableOptions,
      selectedRoots,
      selectAllState,
      handleToggleSelectAll,
      handleToggleWorkspace,
      intl,
      handleOpenFolder,
      handleContinue,
      hasSelectedRoots,
      isRemoteHost,
      handleSkip,
      isSkipPending,
      skipErrorMessage: ledge,
      workspaceOnboardingExperimentArm,
    } = knob,
    mire = new Set(selectedRoots);
  let nook = mire,
    oxbow = isLoadingRoots ? (
      <div className="bg-token-surface-primary flex w-full items-center justify-center gap-2 rounded-2xl border border-token-border px-5 py-6">
        {
          <VSCODE_EDITOR_ID
            {...{
              className: "h-4 w-4 text-token-foreground",
            }}
          />
        }
        <span className="text-sm text-token-description-foreground">
          {
            <MemoizedFormattedMessage
              {...{
                id: "electron.onboarding.workspace.loading",
                defaultMessage: "Loading projects…",
                description:
                  "Loading state while onboarding workspace options are fetched",
              }}
            />
          }
        </span>
      </div>
    ) : null;
  let pond = hasAvailableRoots ? (
    <AppIconVn
      {...{
        className: IntlProvider(
          isLoadingRoots && "pointer-events-none opacity-50",
        ),
        ariaLabel: intl.formatMessage({
          id: "electron.onboarding.workspace.listLabel",
          defaultMessage: "Available projects",
          description:
            "Aria label for the available workspaces list during onboarding",
        }),
        children: [
          <DeferredUiYn
            {...{
              checkboxId: "workspace-root-select-all",
              checkboxClassName: AppInitialN,
              checked: selectAllState,
              disabled: isLoadingRoots,
              onCheckedChange: (anchor) => {
                handleToggleSelectAll(anchor);
              },
              label: (
                <MemoizedFormattedMessage
                  {...{
                    id: "electron.onboarding.workspace.selectAll",
                    defaultMessage: "Select all",
                    description:
                      "Checkbox label for selecting all workspaces during onboarding",
                  }}
                />
              ),
            }}
          />,
          availableOptions.map((item, index) => (
            <SelectWorkspacePageHelper14
              key={item.root}
              {...{
                index,
                isDisabled: isLoadingRoots,
                isSelected: nook.has(item.root),
                skipExistenceCheck: isRemoteHost,
                option: item,
                onToggle: handleToggleWorkspace,
              }}
            />
          )),
        ],
      }}
    />
  ) : (
    <div className="text-center text-sm text-token-description-foreground">
      {
        <MemoizedFormattedMessage
          {...{
            id: "electron.onboarding.workspace.empty",
            defaultMessage: "Add a project to continue.",
            description:
              "Empty state shown when no workspaces are selected during onboarding",
          }}
        />
      }
    </div>
  );
  let quarry = (
    <div className="flex w-full flex-col gap-2">
      {oxbow}
      {pond}
    </div>
  );
  let rapids = (
    <SelectWorkspacePageHelper12
      {...{
        className:
          "flex-1 justify-center border-token-button-border bg-transparent text-base leading-6 font-medium whitespace-nowrap enabled:hover:bg-token-foreground/5",
        color: "outline",
        size: "large",
        isRemoteHost,
        onStartFromScratch: handleSkip,
        onUseExistingFolder: handleOpenFolder,
      }}
    />
  );
  let spur = !hasSelectedRoots || isLoadingRoots,
    tor = (
      <MemoizedFormattedMessage
        {...{
          id: "electron.onboarding.workspace.continue",
          defaultMessage: "Continue",
          description:
            "Button label to continue after selecting workspaces during onboarding",
        }}
      />
    );
  let updraft = (
    <ReadLoginRouteQuerySnapshot
      {...{
        className: "flex-1 justify-center text-base leading-6 font-medium",
        color: "primary",
        size: "large",
        disabled: spur,
        onClick: handleContinue,
        children: tor,
      }}
    />
  );
  let verge = (
    <div className="flex w-full items-center gap-4">
      {rapids}
      {updraft}
    </div>
  );
  let weir = isRemoteHost ? null : (
    <At
      {...{
        handleSkip,
        isSkipPending,
        skipErrorMessage: ledge,
        workspaceOnboardingExperimentArm,
      }}
    />
  );
  let yard = (
    <div className="flex w-full flex-col gap-3">
      {verge}
      {weir}
    </div>
  );
  return (
    <SelectWorkspacePageHelper10
      {...{
        showIcon: false,
        children: (
          <div className="flex w-full flex-col gap-4">
            {quarry}
            {yard}
          </div>
        ),
      }}
    />
  );
}
function at(bolt) {
  let {
      handleSkip,
      isSkipPending,
      skipErrorMessage,
      workspaceOnboardingExperimentArm,
    } = bolt,
    cog = AppInitialOh(workspaceOnboardingExperimentArm);
  let disc = cog,
    edge =
      skipErrorMessage == null ? null : (
        <div className="text-center text-sm text-token-error-foreground">
          {
            <MemoizedFormattedMessage
              {...{
                id: "electron.onboarding.workspace.skip.error",
                defaultMessage: "Couldn't create a new project: {message}",
                description:
                  "Error shown when creating a new project fails during onboarding",
                values: {
                  message: skipErrorMessage,
                },
              }}
            />
          }
        </div>
      );
  let forge = isSkipPending ? (
    disc ? (
      <MemoizedFormattedMessage
        {...{
          id: "electron.onboarding.workspace.skipping.playground",
          defaultMessage: "Opening playground…",
          description:
            "Button label shown while opening Playground during onboarding workspace flow",
        }}
      />
    ) : (
      <MemoizedFormattedMessage
        {...{
          id: "electron.onboarding.workspace.skipping",
          defaultMessage: "Creating a new project…",
          description:
            "Button label shown while creating a new project during onboarding",
        }}
      />
    )
  ) : disc ? (
    <MemoizedFormattedMessage
      {...{
        id: "electron.onboarding.workspace.skip.playground",
        defaultMessage: "Continue to playground",
        description: "Button label to continue to Playground during onboarding",
      }}
    />
  ) : (
    <MemoizedFormattedMessage
      {...{
        id: "electron.onboarding.workspace.skip",
        defaultMessage: "Skip",
        description:
          "Button label to skip workspace selection during onboarding",
      }}
    />
  );
  let gear = (
    <ReadLoginRouteQuerySnapshot
      {...{
        className: "w-full justify-center text-base leading-6 font-medium",
        color: "ghost",
        size: "large",
        disabled: isSkipPending,
        onClick: handleSkip,
        children: forge,
      }}
    />
  );
  return (
    <div className="flex w-full flex-col items-center gap-2">
      {edge}
      {gear}
    </div>
  );
}
function SelectWorkspacePageHelper14(hinge) {
  let { index, isDisabled, isSelected, skipExistenceCheck, option, onToggle } =
      hinge,
    iron = option.root,
    joint = stripWinLongPathPrefix(iron);
  let keystone = joint,
    latch = deferredUiQdt(iron).replace(/\/+$/, ""),
    motor,
    nut;
  motor = {
    hostId: LOCAL_HOST_ID,
    paths: [iron],
  };
  nut = {
    existingPaths: [iron],
  };
  let piston = !skipExistenceCheck,
    rivet = {
      enabled: piston,
    };
  let screw = {
    params: motor,
    placeholderData: nut,
    queryConfig: rivet,
  };
  let { data: torque } = SIDEBAR_HIT_TEST_SELECTOR("paths-exist", screw);
  if (
    !(
      skipExistenceCheck ||
      (torque?.existingPaths ?? []).some(
        (item) => deferredUiQdt(item).replace(/\/+$/, "") === latch,
      )
    )
  )
    return null;
  let valve = `workspace-root-${index}`,
    axle = (bracket) => {
      onToggle(iron, bracket);
    };
  return (
    <DeferredUiYn
      {...{
        checkboxId: valve,
        checkboxClassName: AppInitialN,
        checked: isSelected,
        disabled: isDisabled,
        onCheckedChange: axle,
        label: option.label,
        description: keystone,
      }}
    />
  );
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
