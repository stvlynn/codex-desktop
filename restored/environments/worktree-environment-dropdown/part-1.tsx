// Restored from ref/webview/assets/worktree-environment-dropdown-NXDrzJV-.js
// Wave FY — full polished body from `worktree-environment-dropdown-NXDrzJV-/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 19 (verified 55/73).
// AST split 1/2
/* split-lane-import-depth:1 */

import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Wdt_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { ComposerCategoryValueChip } from "../../composer/composer-category-value-chip";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { CHATGPT_COM_CODEX_PURCHASE_TEAM_URL } from "../../docs/codex-doc-urls";
import { ensureDiffCommentComposerInit } from "../../editors/ensure-diff-comment-composer-init";
import { remoteUpstreamUrl } from "../../git/remote-upstream-url";
import { ProjectPinnedActionsMenu } from "../../home/project-pinned-actions-menu";
import { getHostConfigId } from "../../hooks/host-rpc-client";
import { useEventCallback } from "../../hooks/use-event-callback";
import {
  ensureUseGitRecentBranchesInit,
  useGitRecentBranches,
} from "../../hooks/use-git-recent-branches";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconKtt } from "../../icons/app-icon-ktt";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import {
  ensureStarOutlineIconInit as EnsureStarOutlineIconInit,
  StarOutlineIcon,
} from "../../icons/star-outline-icon";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureLocalEnvironmentWorkflowMessagesInit,
  localEnvironmentWorkflowMessages,
} from "../../settings/local-environment-workflow-messages";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { usePluginsFeatureEnabled } from "../../skills/skills-page-helpers";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { semanticAccentColors } from "../../ui/semantic-accent-colors";
import { UtilityBarCategoryValue } from "../../ui/utility-bar-category-value";
import { coerceLocalFilesystemPath as CoerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { toPosixPath } from "../../utils/workspace-paths";
import {
  environmentLabelsC,
  environmentLabelsI,
  environmentLabelsL,
  environmentLabelsN,
  environmentLabelsR as EnvironmentLabelsR,
  environmentLabelsS,
  environmentLabelsT,
  environmentLabelsU,
} from "../environment-labels";
import { firstRepoMapEntry } from "../first-repo-map-entry";

/** split companion stub */
const alpha: any = undefined;
/** split companion stub */
const bravo: any = undefined;
/** split companion stub */
const copper: any = undefined;
/** split companion stub */
const gamma: any = undefined;

const WorktreeEnvironmentDropdownHelper4: any = undefined;

const AppInitialBa: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiBA@ui/deferred-ui-ba.ts) */
const AppInitialBA: any = undefined;
/** Wave FY unresolved companion (jsx-collision:usePetsSettingsController@settings/use-pets-settings-controller.ts) */
const AppInitialEz: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/chatgpt2.tsx) */
const Chatgpt2: any = undefined;
/** Wave FY unresolved companion (missing-export:plugins/has-seen-knowledge-work-announcement.tsx) */
const HasSeenKnowledgeWorkAnnouncement: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FY unresolved companion (jsx-collision:plugin@plugins/plugin.ts) */
const AppInitialLY: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/use-local-environment-editor-state.ts) */
const useLocalEnvironmentEditorState: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureComposerEsm_Qtt_Init@composer/composer-esm-inits.ts) */
const AppInitialQtt: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredConversationR@conversation/deferred-conversation-r.ts) */
const AppInitialR: any = undefined;
/** Wave FY unresolved companion (jsx-collision:composerNavigation2@composer/composer-navigation2.ts) */
const AppInitialRS: any = undefined;
/** Wave FY unresolved companion (jsx-collision:resolveRepoCloneUrlForHost@git/resolve-repo-clone-url-for-host.ts) */
const AppInitialSv: any = undefined;
/** Wave FY unresolved companion (jsx-collision:environment3@environments/environment3.ts) */
const AppInitialTY: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureThreadFindDiffProviderInit@thread/thread-find-atoms.ts) */
const AppInitialVA: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/deferred-conversation-wh3.tsx) */
const DeferredConversationWH3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useHostChatgptAuthMethod@hosts/use-host-chatgpt-auth-method.ts) */
const AppInitialWY: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
export function worktreeEnvironmentDropdownA(kelp: unknown) {
  let {
      startingState,
      setStartingState,
      hostConfig,
      className,
      side = "top",
      gitRootOverride,
      branchSource,
    } = kelp,
    lotus = useIntl(),
    [mint, nova] = gamma.useState(false),
    [olive, prism] = gamma.useState(false),
    [quill, reef] = gamma.useState(""),
    sage = AppInitialTY(),
    topaz = {
      enabled: olive,
    };
  let ultra = AppInitialSv(topaz),
    vapor = gitRootOverride ?? ultra,
    wheat = firstRepoMapEntry(sage),
    yarn = wheat?.default_branch ?? "main",
    zephyr = wheat?.id ?? null,
    acorn = branchSource === "worktree",
    bloom = acorn || !!gitRootOverride,
    coral = CodexPluginActionResult(getHostConfigId),
    drift = Chatgpt2(quill, 300),
    eagle = (birch) => {
      birch && prism(true);
      nova(birch);
      birch || reef("");
    };
  let frost = eagle,
    glide = !bloom && !!zephyr && mint && !!drift,
    honey = {
      enabled: glide,
    };
  let {
      data,
      isFetching,
      error,
      hasNextPage,
      isFetchingNextPage,
      fetchNextPage,
      refetch,
    } = AppInitialLY(zephyr, drift, honey),
    _e = bloom && olive,
    iris = {
      enabled: _e,
      retainRepoWatch: coral,
    };
  let {
      data: _data,
      isLoading,
      refetch: _refetch,
    } = AppInitialEz(
      vapor,
      hostConfig,
      "async_task_starting_state_dropdown",
      iris,
    ),
    jewel = bloom && olive && !!vapor,
    knoll = {
      enabled: jewel,
      retainRepoWatch: coral,
    };
  let { data: __data } = environmentLabelsC(
      vapor,
      hostConfig,
      "async_task_starting_state_dropdown",
      knoll,
    ),
    {
      branches,
      defaultBranch: _worktreeEnvironmentDropdownA,
      fetching,
      error: _error,
      refetch: _worktreeEnvironmentDropdownO,
    } = copper({
      gitRoot: vapor,
      hostConfig,
      currentBranch: _data ?? "main",
      remoteDefaultBranch: yarn,
      enabled: bloom && olive,
    }),
    _worktreeEnvironmentDropdownR = drift.trim().toLowerCase(),
    lunar = _worktreeEnvironmentDropdownR.length > 0,
    moss = bloom && mint && lunar,
    north = {
      cwd: vapor,
      hostConfig,
      operationSource: "async_task_starting_state_dropdown",
      preserveRemoteRefs: acorn,
      query: drift,
      enabled: moss,
    };
  let {
      data: ___data,
      isFetching: _worktreeEnvironmentDropdownI,
      error: _worktreeEnvironmentDropdownT,
      refetch: __refetch,
    } = CodexBrowserSurfaceActionType(environmentLabelsL, north),
    orbit = ___data?.branches,
    pine =
      startingState.type === "branch"
        ? (startingState.remoteRef ?? startingState.branchName)
        : undefined,
    quest = bloom ? _worktreeEnvironmentDropdownA : yarn,
    $ = bloom
      ? lunar
        ? orbit
        : branches
      : lunar
        ? data?.filter((canyon) =>
            canyon.toLowerCase().includes(_worktreeEnvironmentDropdownR),
          )
        : undefined,
    _worktreeEnvironmentDropdownN =
      !lunar || quest.toLowerCase().includes(_worktreeEnvironmentDropdownR),
    ridge = $?.filter((dew) => dew !== quest),
    storm = acorn && lunar ? (___data?.remoteBranchRefs ?? []) : [];
  let tide = storm,
    unity = acorn && tide.length > 0,
    vale = bloom
      ? lunar
        ? _worktreeEnvironmentDropdownI
        : fetching
      : isFetching,
    wave = bloom ? (lunar ? _worktreeEnvironmentDropdownT : _error) : error,
    apex = bloom
      ? lunar
        ? __refetch
        : _worktreeEnvironmentDropdownO
      : refetch,
    brook = !bloom && hasNextPage,
    cliff = _data ?? quest,
    dusk = startingState.type === "branch" ? startingState.branchName : cliff,
    $e =
      __data?.type === "success"
        ? __data.stagedCount +
            __data.unstagedCount +
            (__data.untrackedCount ?? 0) >
          0
        : false,
    elm = bloom && $e,
    fern = startingState.type === "working-tree" && $e,
    grove =
      startingState.type === "working-tree" ? (
        <MemoizedFormattedMessage
          {...{
            id: "composer.remote.currentBranch",
            defaultMessage: "{branch} (current)",
            description:
              "Label for the current branch starting point in the composer",
            values: {
              branch: _data ?? quest,
            },
          }}
        />
      ) : (
        <MemoizedFormattedMessage
          {...{
            id: "composer.remote.branch",
            defaultMessage: "{branch}",
            description:
              "Label for a specific branch starting point in the composer",
            values: {
              branch: startingState.branchName,
            },
          }}
        />
      ),
    hill = (
      <ElectronOnly
        {...{
          electron: true,
          children: grove,
        }}
      />
    );
  let isle = (
    <ElectronOnly
      {...{
        browser: true,
        children: dusk,
      }}
    />
  );
  let at = (
      <>
        {hill}
        {
          <ElectronOnly
            {...{
              extension: true,
              children: fern ? (
                <MemoizedFormattedMessage
                  {...{
                    id: "composer.remote.localWorkingTree",
                    defaultMessage: "Use local changes",
                    description:
                      "Label for local working tree selection in remote composer",
                  }}
                />
              ) : (
                dusk
              ),
            }}
          />
        }
        {isle}
      </>
    ),
    juniper,
    lagoon;
  juniper = () => {
    mint && (_refetch(), bloom && _worktreeEnvironmentDropdownO());
  };
  lagoon = [mint, _refetch, _worktreeEnvironmentDropdownO, bloom];
  gamma.useEffect(juniper, lagoon);
  let meadow = (
    <div className="flex flex-col gap-2">
      {
        <MemoizedFormattedMessage
          {...{
            id: "composer.remote.branchStartingPoint",
            defaultMessage: "What branch should this chat start from?",
            description: "Section label for branch starting point selector",
          }}
        />
      }
    </div>
  );
  let nest = IntlProvider("whitespace-nowrap", className);
  let oak = startingState.type === "working-tree" && $e,
    petal = (
      <CoerceLocalFilesystemPath
        {...{
          className: "icon-xs",
        }}
      />
    );
  let quiet = (
    <ProjectPinnedActionsMenu
      borderColor="border-token-side-bar-background"
      badgeEnabled={oak}
    >
      {petal}
    </ProjectPinnedActionsMenu>
  );
  let rain = lotus.formatMessage({
    id: "codex.composer.searchBranches",
    defaultMessage: "Search branches",
    description: "Placeholder for the branch search input",
  });
  let seed = (event) => {
    reef(event.currentTarget.value);
  };
  let trail = (event) => {
    event.key === "Enter" && frost(false);
  };
  let urn = (
    <DropdownMenu.SearchInput
      {...{
        autoFocus: false,
        placeholder: rain,
        value: quill,
        onChange: seed,
        onKeyDown: trail,
      }}
    />
  );
  let _t = elm ? (
      <div className="flex flex-col">
        {
          <WorktreeEnvironmentDropdownHelper4
            {...{
              children: (
                <MemoizedFormattedMessage
                  {...{
                    id: "composer.remote.localFileStateHeading",
                    defaultMessage: "Local file state",
                    description:
                      "Section heading for local working tree selection",
                  }}
                />
              ),
            }}
          />
        }
        {
          <DropdownMenu.Item
            {...{
              LeftIcon: alpha,
              RightIcon:
                startingState.type === "working-tree" ? AppIconZlt : undefined,
              SubText: $e ? (
                <span className="text-token-description-foreground">
                  {
                    <MemoizedFormattedMessage
                      {...{
                        id: "composer.remote.currentEditsSuffix.useLocal",
                        defaultMessage: "with local code changes",
                        description:
                          "Suffix text indicating the selection includes current edits",
                      }}
                    />
                  }
                </span>
              ) : undefined,
              onClick: () => {
                setStartingState({
                  type: "working-tree",
                });
                frost(false);
              },
              children: isLoading ? null : <>{_data ?? quest}</>,
            }}
          />
        }
      </div>
    ) : null,
    vine = (
      <WorktreeEnvironmentDropdownHelper4
        {...{
          children: acorn ? (
            <MemoizedFormattedMessage
              {...{
                id: "composer.remote.localBranchesSectionHeading",
                defaultMessage: "Local branches",
                description: "Section heading for local branch search results",
              }}
            />
          ) : (
            <MemoizedFormattedMessage
              {...{
                id: "composer.remote.branchesSectionHeading",
                defaultMessage: "Branches",
                description: "Section heading for remote branch search results",
              }}
            />
          ),
        }}
      />
    );
  let wind =
      drift && vale ? (
        <div className="flex h-full items-center justify-center">
          {
            <VSCODE_EDITOR_ID
              {...{
                className: "icon-xxs",
              }}
            />
          }
        </div>
      ) : drift && wave ? (
        <div className="flex h-full flex-col items-center justify-center gap-1 text-sm text-token-error-foreground">
          {
            <MemoizedFormattedMessage
              {...{
                id: "composer.remote.errorLoadingBranches",
                defaultMessage: "Error loading branches",
                description: "Error message for remote starting point selector",
              }}
            />
          }
          {
            <ReadLoginRouteQuerySnapshot
              {...{
                color: "ghost",
                size: "icon",
                className: "text-token-description-foreground",
                onClick: () => {
                  apex();
                },
                children: (
                  <AppIconAlt
                    {...{
                      className: "icon-xxs",
                    }}
                  />
                ),
              }}
            />
          }
        </div>
      ) : (
        <div className="flex flex-col">
          {_worktreeEnvironmentDropdownN && (
            <DropdownMenu.Item
              {...{
                LeftIcon: CoerceLocalFilesystemPath,
                RightIcon: pine === quest ? AppIconZlt : undefined,
                onClick: () => {
                  setStartingState({
                    type: "branch",
                    branchName: quest,
                  });
                  frost(false);
                },
                children: quest,
              }}
            />
          )}
          {ridge?.map((ever) => (
            <DropdownMenu.Item
              key={ever}
              {...{
                LeftIcon: CoerceLocalFilesystemPath,
                RightIcon: ever === pine ? AppIconZlt : undefined,
                onClick: () => {
                  setStartingState({
                    type: "branch",
                    branchName: ever,
                  });
                  frost(false);
                },
                children: ever,
              }}
            />
          ))}
          {unity ? (
            <>
              {
                <WorktreeEnvironmentDropdownHelper4
                  {...{
                    className: "mt-1",
                    children: (
                      <MemoizedFormattedMessage
                        {...{
                          id: "composer.remote.remoteBranchesSectionHeading",
                          defaultMessage: "Remote branches",
                          description:
                            "Section heading for fetched remote branch search results",
                        }}
                      />
                    ),
                  }}
                />
              }
              {tide.map((item) => (
                <DropdownMenu.Item
                  key={item}
                  {...{
                    LeftIcon: CoerceLocalFilesystemPath,
                    RightIcon: item === pine ? AppIconZlt : undefined,
                    onClick: () => {
                      setStartingState({
                        type: "branch",
                        branchName: bravo(item),
                        remoteRef: item,
                      });
                      frost(false);
                    },
                    children: bravo(item),
                  }}
                />
              ))}
            </>
          ) : null}
          {brook && (
            <DropdownMenu.Item
              {...{
                onClick: () => {
                  isFetchingNextPage || fetchNextPage();
                },
                className: "w-full text-sm text-token-text-secondary",
                children: isFetchingNextPage ? (
                  <MemoizedFormattedMessage
                    {...{
                      id: "composer.remote.loadingMoreBranches",
                      defaultMessage: "Loading…",
                      description: "Loading more branches",
                    }}
                  />
                ) : null,
              }}
            />
          )}
        </div>
      ),
    yarrow = (
      <div className="vertical-scroll-fade-mask flex h-[200px] flex-col gap-1.5 overflow-y-auto">
        {_t}
        {vine}
        {wind}
      </div>
    );
  let azure;
  return (
    (azure = (
      <div className="flex w-72 flex-col gap-1.5 overflow-hidden">
        {urn}
        {yarrow}
      </div>
    )),
    (
      <DropdownMenuPopover
        {...{
          side: side,
          open: mint,
          onOpenChange: frost,
          triggerButton: (
            <OptionalTooltip
              {...{
                tooltipContent: meadow,
                children: (
                  <ComposerCategoryValueChip
                    data-composer-navigation-target="starting-state"
                    categoryLabel={null}
                    className={nest}
                    collapse="secondary"
                    icon={quiet}
                    indicator="collapsible-chevron"
                    value={at}
                    valueClassName="max-w-40"
                  />
                ),
              }}
            />
          ),
          children: azure,
        }}
      />
    )
  );
}
export const worktreeEnvironmentDropdownO = esmInit(() => {
  falcon = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  ensureComposerEsm_MT_Init();
  gamma = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  RealtimeVoiceHostId();
  AppInitialBa();
  ensureSettingsQueryAtomsInit();
  ensureDropdownMenuInit();
  ensureComposerEsm_Sut_Init();
  ensureComposerEsm_Hlt_Init();
  ensureComposerEsm_K1_Init();
  environmentLabelsU();
  AppInitialR();
  remoteUpstreamUrl();
  ensureUseGitRecentBranchesInit();
  environmentLabelsS();
  usePluginsFeatureEnabled();
  ensureDropdownMenuPopoverInit();
  useEventCallback();
  useLocalEnvironmentEditorState();
  CHATGPT_COM_CODEX_PURCHASE_TEAM_URL();
  HasSeenKnowledgeWorkAnnouncement();
  AppInitialWY();
  AppInitialRS();
  ensureDiffCommentComposerInit();
});
