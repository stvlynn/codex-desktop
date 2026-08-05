// Restored from ref/webview/assets/environment-labels-BrZBoJDP.js
// Wave FY — full polished body from `environment-labels-BrZBoJDP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 31 (verified 56/87).
// Wave FZ-support — PascalCase invalid JSX tags: deferredUiB→DeferredUiB, deferredUiH→DeferredUiH, deferredUiU→DeferredUiU, ensurePullRequestMediaBDInit→EnsurePullRequestMediaBDInit, EnvironmentLabelsHelper10→EnvironmentLabelsHelper10, EnvironmentLabelsHelper11→EnvironmentLabelsHelper11, EnvironmentLabelsHelper9→EnvironmentLabelsHelper9, torqueFourth→NutFourth, valveFourth→PistonFourth, axleFourth→RivetFourth, bracketFourth→ScrewFourth, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot.
// Careful split 2/2
/* split-lane-import-depth:1 */

import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_E4_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Wdt_Init,
  ensureComposerEsm_Wlt_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { DiffLinesStatsBadge } from "../../diff/diff-lines-stats-badge";
import { openFileInPanelTab } from "../../files/open-file-in-panel-tab";
import { cloud5 } from "../../git/cloud5";
import { remoteUpstreamUrl } from "../../git/remote-upstream-url";
import {
  ensureHostConfigIdInit,
  getHostConfigId,
  getHostRpcClient,
} from "../../hooks/host-rpc-client";
import { useGitRepoLiveQuery } from "../../hooks/use-git-repo-live-query";
import { UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import {
  readScrollTop,
  scrollAppActionTargetTo,
} from "../../navigation/app-action-dom";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { gitSettingsDefinitions } from "../../settings/git-settings-definitions";
import { gpuTearingDebugSettingsAtom } from "../../settings/gpu-tearing-debug-settings";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { parseSkillsManagePath } from "../../skills/parse-skills-manage-path";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { DeferredUiB } from "../../ui/deferred-ui-b";
import { DeferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { semanticAccentColors } from "../../ui/semantic-accent-colors";
import { noop } from "../../utils/noop";
import { EnsurePullRequestMediaBDInit } from "../../utils/wave-as-gap-ensure-inits";
import { identityCwd, toPosixPath } from "../../utils/workspace-paths";
import { clearPendingWorktreeConversationStart } from "../../worktree/clear-pending-worktree-conversation-start";

// Cross-part stubs.
const AppInitialFD: any = undefined;
const AppInitialID: any = undefined;
const AppInitialIW: any = undefined;
const AppInitialQg: any = undefined;
const AppInitialUE: any = undefined;
const DeferredUiU: any = undefined;
const DeferredUiV2: any = undefined;
const HasSeenKnowledgeWorkAnnouncement: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const SetRemoteControlEnabledForHost: any = undefined;
const commitModal: any = undefined;
const ensureEnvironmentLabelsD3Init: any = undefined;
const ensureEnvironmentLabelsLDInit: any = undefined;
const ensureEnvironmentLabelsPDInit: any = undefined;
const ensureUseGitRepoLiveQueryInit: any = undefined;
const environmentLabelsA: any = undefined;
const environmentLabelsC: any = undefined;
const environmentLabelsL: any = undefined;
const environmentLabelsO: any = undefined;
const environmentLabelsS: any = undefined;
const environmentLabelsU: any = undefined;
const jade: any = undefined;
const lemon: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const whamToggleAllDiffs: any = undefined;

function EnvironmentLabelsHelper11(elbow) {
  let {
      open,
      onOpenChange,
      conflictFiles,
      gitRoot,
      hostConfig,
      targetBranch,
      onContinue,
    } = elbow,
    { data } = environmentLabelsC(gitRoot, hostConfig, $),
    ferrule = identityCwd(gitRoot);
  let grommet = {
    cwd: ferrule,
    includeUntrackedFiles: false,
    operationSource: $,
    source: "staged",
  };
  let header = {
    enabled: open,
    liveQuery: quartz,
    staleTime: 1 / 0,
  };
  let { data: _data } = useGitRepoLiveQuery(
      gitRoot,
      hostConfig,
      "review-summary",
      grommet,
      $,
      header,
    ),
    injector = identityCwd(gitRoot);
  let jumper = {
    cwd: injector,
    operationSource: $,
    source: "unstaged",
  };
  let kerf = {
    enabled: open,
    liveQuery: pearl,
    staleTime: 1 / 0,
  };
  let { data: __data } = useGitRepoLiveQuery(
      gitRoot,
      hostConfig,
      "review-summary",
      jumper,
      $,
      kerf,
    ),
    Louver,
    Manifold,
    Nip,
    outlet,
    packing,
    reducer,
    strainer,
    tee,
    union;
  {
    let falconPrime = [_data, __data],
      gammaPrime = AppInitialID(falconPrime),
      harborPrime = gammaPrime?.totalAdditions ?? 0,
      indigoPrime = gammaPrime?.totalDeletions ?? 0,
      jadePrime = harborPrime + indigoPrime > 0,
      kitePrime = conflictFiles.length > 0,
      lemonPrime = nickel(data);
    let marblePrime = lemonPrime;
    Nip = UsePointerSurfaceInteractionGate;
    outlet = "feature";
    packing = open;
    reducer = onOpenChange;
    Manifold = DeferredUiB;
    union = (
      <DeferredUiU
        {...{
          children: (
            <DeferredUiH
              {...{
                title: (
                  <MemoizedFormattedMessage
                    {...{
                      id: "composer.footer.branchSwitch.uncommittedDialog.title",
                      defaultMessage: "Commit changes to switch branch",
                      description:
                        "Title for dialog shown when branch switching is blocked by uncommitted changes",
                    }}
                  />
                ),
              }}
            />
          ),
        }}
      />
    );
    Louver = DeferredUiU;
    strainer = "text-token-description-foreground";
    tee = kitePrime ? (
      <div className="flex flex-col gap-2 text-sm">
        {
          <MemoizedFormattedMessage
            {...{
              id: "composer.footer.branchSwitch.uncommittedDialog.conflict.bodyPrefix",
              defaultMessage:
                "Your changes to the following files would be overwritten by checkout:",
              description:
                "Message shown in the uncommitted changes dialog before listing files that block checkout",
            }}
          />
        }
        <div className="flex flex-col gap-1">
          {conflictFiles.map((item, index) => {
            let nickelPrime = AppInitialFD(item, falconPrime);
            return (
              <div
                key={`${item}:${index}`}
                className="inline-flex items-center gap-1 text-token-foreground"
              >
                <span>{item}</span>
                {nickelPrime == null ? null : (
                  <DiffLinesStatsBadge
                    {...{
                      className: "inline-flex align-middle",
                      linesAdded: nickelPrime.linesAdded,
                      linesRemoved: nickelPrime.linesRemoved,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
        {
          <MemoizedFormattedMessage
            {...{
              id: "composer.footer.branchSwitch.uncommittedDialog.conflict.bodySuffix",
              defaultMessage: "Please commit your changes to continue",
              description:
                "Message shown in the uncommitted changes dialog after listing files that block checkout",
            }}
          />
        }
      </div>
    ) : jadePrime ? (
      <span className="inline-flex items-center gap-1 whitespace-nowrap">
        {targetBranch == null ? (
          <MemoizedFormattedMessage
            {...{
              id: "composer.footer.branchSwitch.uncommittedDialog.body.withDiff.unknownBranch",
              defaultMessage:
                "Commit <diffStats></diffStats> changes in {fileCount, plural, one {# file} other {# files}} to check out the selected branch.",
              description:
                "Body text in the uncommitted changes dialog when diff stats are available but the target branch name is unavailable",
              values: {
                fileCount: marblePrime,
                diffStats: () => (
                  <DiffLinesStatsBadge
                    {...{
                      className: "inline-flex align-middle",
                      linesAdded: harborPrime,
                      linesRemoved: indigoPrime,
                    }}
                  />
                ),
              },
            }}
          />
        ) : (
          <MemoizedFormattedMessage
            {...{
              id: "composer.footer.branchSwitch.uncommittedDialog.body.withDiff.namedBranch",
              defaultMessage:
                "Commit <diffStats></diffStats> changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}.",
              description:
                "Body text in the uncommitted changes dialog when diff stats and the target branch name are available",
              values: {
                fileCount: marblePrime,
                branchName: targetBranch,
                diffStats: () => (
                  <DiffLinesStatsBadge
                    {...{
                      className: "inline-flex align-middle",
                      linesAdded: harborPrime,
                      linesRemoved: indigoPrime,
                    }}
                  />
                ),
              },
            }}
          />
        )}
      </span>
    ) : targetBranch == null ? (
      <MemoizedFormattedMessage
        {...{
          id: "composer.footer.branchSwitch.uncommittedDialog.body.noDiff.unknownBranch",
          defaultMessage:
            "Commit changes in {fileCount, plural, one {# file} other {# files}} to check out the selected branch.",
          description:
            "Body text in the uncommitted changes dialog when diff stats and the target branch name are unavailable",
          values: {
            fileCount: marblePrime,
          },
        }}
      />
    ) : (
      <MemoizedFormattedMessage
        {...{
          id: "composer.footer.branchSwitch.uncommittedDialog.body.noDiff.namedBranch",
          defaultMessage:
            "Commit changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}.",
          description:
            "Body text in the uncommitted changes dialog when diff stats are unavailable but the target branch name is available",
          values: {
            fileCount: marblePrime,
            branchName: targetBranch,
          },
        }}
      />
    );
  }
  let vent = (
    <Louver
      {...{
        className: strainer,
        children: tee,
      }}
    />
  );
  let wye = () => {
    onOpenChange(false);
  };
  let zener = (
    <MemoizedFormattedMessage
      {...{
        id: "composer.footer.branchSwitch.uncommittedDialog.cancel",
        defaultMessage: "Cancel",
        description:
          "Secondary button label in branch switching blocked dialog shown in the composer footer",
      }}
    />
  );
  let alphaPrime = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "secondary",
        onClick: wye,
        children: zener,
      }}
    />
  );
  let bravoPrime = (
    <MemoizedFormattedMessage
      {...{
        id: "composer.footer.branchSwitch.uncommittedDialog.commit",
        defaultMessage: "Commit and switch branch…",
        description:
          "Primary button label in branch switching blocked dialog shown in the composer footer",
      }}
    />
  );
  let copperPrime = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "primary",
        onClick: onContinue,
        children: bravoPrime,
      }}
    />
  );
  let deltaPrime = (
    <DeferredUiU
      {...{
        children: (
          <SetRemoteControlEnabledForHost
            {...{
              children: [alphaPrime, copperPrime],
            }}
          />
        ),
      }}
    />
  );
  let echoPrime = (
    <Manifold
      {...{
        children: [union, vent, deltaPrime],
      }}
    />
  );
  return (
    <Nip
      {...{
        size: outlet,
        open: packing,
        onOpenChange: reducer,
        children: echoPrime,
      }}
    />
  );
}
function pearl(onyxPrime) {
  return {
    method: "review-summary",
    params: onyxPrime,
  };
}
function quartz(pearlPrime) {
  return {
    method: "review-summary",
    params: pearlPrime,
  };
}
function river({ branches, currentBranch, defaultBranch }) {
  let quartzPrime = new Set(),
    riverPrime = [];
  return (
    slate(defaultBranch, riverPrime, quartzPrime),
    slate(currentBranch, riverPrime, quartzPrime),
    branches.forEach((item) => {
      slate(item, riverPrime, quartzPrime);
    }),
    riverPrime
  );
}
function slate(slatePrime, timberPrime, umbraPrime) {
  !slatePrime ||
    umbraPrime.has(slatePrime) ||
    (umbraPrime.add(slatePrime), timberPrime.push(slatePrime));
}
var timber, umbra, violet, $;
export const environmentLabelsI = esmInit(() => {
  timber = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  umbra = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  DeferredUiV2();
  ensureEnvironmentLabelsD3Init();
  ensureSettingsQueryAtomsInit();
  findProcessManagerRow();
  useOpenLocatorInMainWindow();
  ensureDropdownMenuInit();
  cloud5();
  ensureComposerEsm_Ilt_Init();
  gpuTearingDebugSettingsAtom();
  ensureUseGitRepoLiveQueryInit();
  environmentLabelsU();
  AppInitialIW();
  openFileInPanelTab();
  environmentLabelsA();
  remoteUpstreamUrl();
  environmentLabelsS();
  jade();
  lemon();
  ensureSkillsPageHelpersInit();
  whamToggleAllDiffs();
  ensureEnvironmentLabelsPDInit();
  AppInitialUE();
  commitModal();
  ensureAppScopeInit();
  ensureSettingsQueryAtomsInit();
  HasSeenKnowledgeWorkAnnouncement();
  ensureEnvironmentLabelsLDInit();
  onyx();
  AppInitialQg();
  $ = "composer_branch_switcher";
});
function willow(violetPrime, willowPrime) {
  return willowPrime?.trim() || _t(violetPrime);
}
export function environmentLabelsT(xenonPrime: unknown) {
  return willow(
    xenonPrime.configPath,
    xenonPrime.type === "success" ? xenonPrime.environment.name : null,
  );
}
function _t(yellowPrime) {
  let zincPrime = toPosixPath(yellowPrime),
    amberPrime = zincPrime.split("/").filter(Boolean);
  return amberPrime[amberPrime.length - 1] ?? zincPrime;
}
