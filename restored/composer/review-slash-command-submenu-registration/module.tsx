// Restored from ref/webview/assets/review-slash-command-submenu-registration-hOlSu-xD.js
// Wave FY — full polished body from `review-slash-command-submenu-registration-hOlSu-xD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 21 (verified 52/73).
// Wave FZ-support — PascalCase invalid JSX tags: readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, writeCodexThreadDeeplink→WriteCodexThreadDeeplink.
// AST split 1/1
/* split-lane-import-depth:1 */


import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CODEX_REVIEW_TARGET_SELECTED_TYPE } from "../../analytics/codex-review-target-selected-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_Ilt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_ML_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_A0_Init } from "../../boundaries/conversation-page-esm-inits";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { writeCodexThreadDeeplink as WriteCodexThreadDeeplink } from "../../clipboard/write-codex-thread-deeplink";
import { DEFAULT_TIER_ID } from "../../config/default-tier-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { conversationHasParentThread } from "../../conversation/conversation-has-parent-thread";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { ensureGitMetadataQueryInit } from "../../git/ensure-git-metadata-query-init";
import { getHostConfigId } from "../../hooks/host-rpc-client";
import { ensureUseGitRecentBranchesInit, useGitRecentBranches } from "../../hooks/use-git-recent-branches";
import { useGitRepoLiveQuery } from "../../hooks/use-git-repo-live-query";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { ensureReviewDiffFilterInit } from "../../review/set-review-diff-filter";
import { esmInit } from "../../runtime/rolldown-runtime";
import { generalDesktopSettingsDefinitions } from "../../settings/general-desktop-settings-definitions";
import { SettingsDependenciesGuard } from "../../settings/settings-dependencies-guard";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { nonEmptyTrimmedStringOrNull } from "../../utils/non-empty-trimmed-string-or-null";
import { noop } from "../../utils/noop";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { titleCaseLastPathSegment } from "../../utils/title-case-last-path-segment";
import { ensurePersonalizationK0Init, ensureSettingsGlyphI0Init } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";

const ensureUseGitRepoLiveQueryInit: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureComposerEsm_AG_Init@boundaries/composer-esm-inits.ts) */
const AppInitialAG: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/local-thread2.ts) */
const localThread2: any = undefined;
/** Wave FY unresolved companion (jsx-collision:usePetsSettingsController@settings/use-pets-settings-controller.ts) */
const AppInitialEz: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/window-title.tsx) */
const AppInitialFst: any = undefined;
/** Wave FY unresolved companion (missing-export:worktrees/resolve-stable-worktree-status.ts) */
const resolveStableWorktreeStatus: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/child-list.ts) */
const childList: any = undefined;
/** Wave FY unresolved companion (jsx-collision:joinRemoteLocalPath@environments/join-remote-local-path.ts) */
const AppInitialJU: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/use-local-environment-editor-state.ts) */
const useLocalEnvironmentEditorState: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-mk.tsx) */
const deferredUiMk: any = undefined;
/** Wave FY unresolved companion (jsx-collision:setReviewDiffFilter@review/set-review-diff-filter.ts) */
const AppInitialOW: any = undefined;
/** Wave FY unresolved companion (jsx-collision:getEnabledRemoteConnectionState@hosts/remote-connections-feature.ts) */
const AppInitialQX: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredConversationR@conversation/deferred-conversation-r.ts) */
const AppInitialR: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-u232.tsx) */
const DeferredUiU232: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;
/** Wave FY unresolved companion (jsx-collision:isXcodeLicenseError@utils/is-xcode-license-error.ts) */
const AppInitialV3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:menu@ui/menu.ts) */
const AppInitialVE: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-wx.ts) */
const deferredUiWX: any = undefined;
/** Wave FY unresolved companion (jsx-collision:setKeyedStoreAtomValueXU@utils/set-keyed-store-atom-value.ts) */
const AppInitialXU: any = undefined;
/** Wave FY unresolved companion (missing-export:models/review-model.tsx) */
const ReviewModel: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
var be,
  alpha = esmInit(() => {
    be = "# Review Guidelines\n\nYou are acting as a reviewer for a proposed code change made by another engineer.\n\nReview the change and respond in normal Markdown. Do not return JSON, XML, a findings object, or any structured review schema.\n\nWhen feedback should be attached directly to a changed line, emit one `::code-comment{...}` directive for that issue. The directive creates an inline code comment in the review UI; keep the visible response as normal Markdown. Emit no directives when there are no actionable inline comments.\n\nRequired `code-comment` attributes: `title`, `body`, and `file`. Optional attributes: `start`, `end`, and `priority`. Use the shortest useful line range. `file` should be an absolute path or include the workspace folder segment.\n\nFocus on discrete, actionable issues the original author would likely fix if they knew about them. Prefer no issues over speculative or low-signal feedback.\n\nGeneral guidelines for whether to call out an issue:\n\n1. It meaningfully impacts correctness, performance, security, or maintainability.\n2. It is discrete and actionable.\n3. It was introduced by the change under review.\n4. The author would likely fix it once aware.\n5. It does not rely on unstated assumptions about intent.\n6. It identifies the affected behavior clearly rather than speculating broadly.\n\nWhen you call out an issue, include the relevant file and line or function in prose, explain the scenario where it matters, and keep the explanation concise. Use priority labels such as `[P1]` or `[P2]` only when helpful to communicate severity.\n\nIf there are no actionable issues, say that directly and briefly.\n";
  });
function bravo({
  reviewInstructions,
  requestMessage
}) {
  return [AppInitialFst, be.trim(), reviewInstructions.trim(), DEFAULT_TIER_ID, requestMessage].join("\n");
}
async function copper({
  context,
  hostId,
  intl
}) {
  if (context.mode === "uncommitted") {
    let timber = intl.formatMessage({
      id: "quickAction.request.codeReview.uncommitted",
      defaultMessage: "Please review my uncommitted changes",
      description: "User message used when reviewing uncommitted changes"
    });
    return {
      diffFilter: "unstaged",
      prompt: bravo({
        reviewInstructions: gamma,
        requestMessage: timber
      }),
      baseBranch: null
    };
  }
  let river = await invokeDesktopRpc("git-merge-base", {
    source: "review_model",
    params: {
      gitRoot: context.gitRoot,
      baseBranch: context.baseBranch,
      hostId
    }
  });
  if (!river.mergeBaseSha) throw Error(`Failed to resolve a merge base between HEAD and ${context.baseBranch}.`);
  let slate = intl.formatMessage({
    id: "quickAction.request.codeReview.branches",
    defaultMessage: "Please review changes on {from} against {to}",
    description: "User message used when reviewing against a selected base branch"
  }, {
    from: context.sourceBranch,
    to: context.baseBranch
  });
  return {
    diffFilter: "branch",
    prompt: bravo({
      reviewInstructions: falcon.replaceAll("{baseBranch}", context.baseBranch).replaceAll("{mergeBaseSha}", river.mergeBaseSha.trim()),
      requestMessage: slate
    }),
    baseBranch: context.baseBranch
  };
}
function delta(umbra) {
  let {
      hostId,
      onError,
      onSuccess
    } = umbra,
    violet = CodexPluginActionType(appScopeAtom),
    willow = useIntl(),
    xenon = AppInitialQX(hostId),
    yellow = async cedar => {
      let {
          context,
          conversationId,
          delivery
        } = cedar,
        {
          gitRoot,
          cwd
        } = context,
        daisy = await copper({
          context,
          hostId,
          intl: willow
        }),
        ember = conversationId == null ? null : violet.get(DeferredUiU232, conversationId);
      if (delivery === "inline" && conversationId != null && ember === hostId) {
        if (xenon == null) throw Error("Code review host is unavailable");
        return await canonicalizeWorkspacePathKey("start-turn-for-host", {
          hostId: xenon.getHostId(),
          conversationId,
          params: {
            cwd,
            input: [{
              type: "text",
              text: daisy.prompt,
              text_elements: []
            }],
            approvalsReviewer: "user",
            collaborationMode: null,
            inheritThreadSettings: false,
            serviceTier: await resolveStableWorktreeStatus(violet, hostId, null)
          }
        }), {
          delivery: "inline",
          diffFilter: daisy.diffFilter,
          baseBranch: daisy.baseBranch
        };
      }
      let flint = await canonicalizeWorkspacePathKey("start-conversation", {
        hostId,
        input: [{
          type: "text",
          text: daisy.prompt,
          text_elements: []
        }],
        cwd,
        workspaceRoots: [gitRoot],
        collaborationMode: null,
        serviceTier: await resolveStableWorktreeStatus(violet, hostId, null),
        approvalsReviewer: "user"
      });
      return {
        baseBranch: daisy.baseBranch,
        conversationId: flint,
        delivery: "detached",
        diffFilter: daisy.diffFilter
      };
    };
  let zinc = garnet => {
    onSuccess(garnet);
  };
  let amber = hazel => {
    appActionSidebarProjectRefSchema.error("Failed to start quick review conversation", {
      safe: {},
      sensitive: {
        error: hazel
      }
    });
    onError(hazel);
  };
  let basalt;
  return basalt = {
    mutationFn: yellow,
    onSuccess: zinc,
    onError: amber
  }, noop(basalt);
}
var echo,
  falcon,
  gamma,
  harbor = esmInit(() => {
    echo = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    deferredUiWX();
    DeferredUiV2();
    AppActionSelector();
    nonEmptyTrimmedStringOrNull();
    alpha();
    conversationHasParentThread();
    ensureAppScopeInit();
    posixPathBasename();
    scrollAppActionTargetTo();
    falcon = "Review the code changes against the base branch '{baseBranch}'. The merge base commit for this comparison is {mergeBaseSha}. Run `git diff {mergeBaseSha}` to inspect the changes relative to {baseBranch}. Provide concise, actionable feedback in a normal Markdown response.";
    gamma = "Review the current code changes (staged, unstaged, and untracked files) and provide concise, actionable feedback in a normal Markdown response.";
  });
function indigo(ivory, jasper, kelp, lotus) {
  let mint = olive => {
    let {
      root
    } = olive;
    return {
      operationSource: kelp,
      root
    };
  };
  let nova;
  return nova = {
    liveQuery: jade,
    staleTime: 1 / 0,
    ...lotus
  }, useGitRepoLiveQuery(ivory, jasper, "base-branch", mint, kelp, nova);
}
function jade(prism) {
  return {
    method: "base-branch",
    params: prism
  };
}
var kite,
  lemon = esmInit(() => {
    kite = reactCompilerRuntime();
    ensureUseGitRepoLiveQueryInit();
  });
function marble({
  currentBranch,
  defaultTargetBranch,
  recentBranches
}) {
  let quill = [],
    reef = [defaultTargetBranch ?? nickel],
    sage = new Set();
  return currentBranch && sage.add(currentBranch), recentBranches != null && reef.push(...recentBranches), reef.forEach(item => {
    !item || sage.has(item) || (quill.push(item), sage.add(item));
  }), quill;
}
var nickel,
  onyx = esmInit(() => {
    nickel = "main";
  });
export function ReviewSlashCommandSubmenuRegistration(ultra: unknown) {
  let {
      conversationId,
      cwd,
      gitRoot,
      hostConfig,
      reviewSubmissionLock
    } = ultra,
    vapor = CodexPluginActionType(ensureComposerEsm_S8_Init),
    wheat = useIntl(),
    yarn = useColdNavigate(),
    zephyr = CodexPluginActionResult(getHostConfigId),
    acorn = {
      retainRepoWatch: zephyr
    };
  let {
      data: bloom,
      error,
      isFetching,
      isLoading,
      refetch
    } = AppInitialEz(gitRoot, hostConfig, "review_mode_content", acorn),
    coral = {
      retainRepoWatch: zephyr
    };
  let {
      data,
      isLoading: _isLoading,
      isError,
      refetch: _refetch
    } = indigo(gitRoot, hostConfig, "review_mode_content", coral),
    drift = {
      retainRepoWatch: zephyr
    };
  let {
      data: _data,
      isLoading: __isLoading,
      isError: _isError,
      refetch: __refetch
    } = useGitRecentBranches(gitRoot, hostConfig, "review_mode_content", drift),
    eagle = useSettingValue(generalDesktopSettingsDefinitions.reviewDelivery),
    frost = tide => {
      reviewSubmissionLock.release();
      appActionSidebarProjectRefSchema.error("Failed to start code review", {
        safe: {},
        sensitive: {
          error: tide
        }
      });
      vapor.get(toastAtom).danger(wheat.formatMessage({
        id: "composer.reviewMode.quickReviewError",
        defaultMessage: "Failed to start code review",
        description: "Toast shown when quick review action fails"
      }));
    };
  let glide = unity => {
    if (reviewSubmissionLock.release(), AppInitialOW(vapor, unity.diffFilter), unity.delivery === "detached") {
      AppInitialXU(vapor, unity.conversationId, unity.baseBranch);
      yarn(unity.conversationId);
      return;
    }
    AppInitialXU(vapor, conversationId, unity.baseBranch);
    let vale = vapor.get(ensureConversationPageEsm_A0_Init.activeTab$)?.tabId;
    AppInitialVE(vapor, !vale?.startsWith("sidechat:"));
    vapor.set(ensurePersonalizationK0Init, false);
  };
  let honey = {
    hostId: hostConfig.id,
    onError: frost,
    onSuccess: glide
  };
  let {
      mutate,
      isPending,
      variables
    } = delta(honey),
    iris = isPending && variables?.context.mode === "uncommitted",
    jewel = isPending && variables?.context.mode === "base-branch" ? variables.context.baseBranch : null,
    knoll,
    lunar,
    moss,
    north,
    orbit,
    pine,
    quest;
  {
    let wave = marble({
        currentBranch: bloom,
        defaultTargetBranch: AppInitialJU(data ?? null),
        recentBranches: _data
      }),
      apex = isLoading || _isLoading || __isLoading,
      brook = isError || _isError,
      cliff = () => {
        Promise.all([_refetch(), __refetch()]);
      };
    let dusk = cliff,
      elm = seed => {
        reviewSubmissionLock.acquire() && (logProductEvent(vapor, CODEX_REVIEW_TARGET_SELECTED_TYPE, {
          target: "unstaged"
        }), mutate({
          conversationId,
          context: {
            mode: "uncommitted",
            sourceBranch: bloom ?? "HEAD",
            gitRoot,
            cwd
          },
          delivery: eagle ?? "inline"
        }, {
          onSuccess: seed
        }));
      };
    let fern = elm,
      grove = (trail, urn) => {
        reviewSubmissionLock.acquire() && (logProductEvent(vapor, CODEX_REVIEW_TARGET_SELECTED_TYPE, {
          target: "base_branch"
        }), mutate({
          conversationId,
          context: {
            mode: "base-branch",
            sourceBranch: bloom ?? "HEAD",
            baseBranch: trail,
            gitRoot,
            cwd
          },
          delivery: eagle ?? "inline"
        }, {
          onSuccess: urn
        }));
      };
    let hill = grove,
      isle;
    if (apex) {
      let vine;
      vine = wheat.formatMessage({
        id: "composer.reviewMode.branches.loading",
        defaultMessage: "Loading branches…",
        description: "Loading message while review mode branches load"
      });
      isle = vine;
    } else if (brook) {
      let wind = <span className="text-center text-xs text-token-foreground/70">
          {<MemoizedFormattedMessage {...{
          id: "composer.reviewMode.branches.error",
          defaultMessage: "Unable to load branches",
          description: "Error message when branch list could not be loaded"
        }} />}
        </span>;
      let yarrow = <MemoizedFormattedMessage {...{
        id: "composer.reviewMode.branches.retry",
        defaultMessage: "Retry",
        description: "Retry button for branch list error"
      }} />;
      let azure;
      azure = <div className="flex flex-col gap-2">
          {wind}
          <button type="button" className="text-xs font-medium text-token-text-link-foreground" onClick={dusk}>
            {yarrow}
          </button>
        </div>;
      isle = azure;
    }
    let juniper = AppInitialV3(error),
      lagoon = <WriteCodexThreadDeeplink {...{
        className: "icon-xs shrink-0 text-token-charts-red"
      }} />;
    let meadow = <span className="font-medium text-token-foreground">
        {<MemoizedFormattedMessage {...{
        id: "composer.reviewMode.xcodeLicenseRequired.title",
        defaultMessage: "Review the Xcode license to use Git",
        description: "Title shown when Git cannot run until the user accepts the Xcode license"
      }} />}
      </span>;
    let nest = <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        {meadow}
        <span className="text-token-description-foreground">
          {<MemoizedFormattedMessage {...{
          id: "composer.reviewMode.xcodeLicenseRequired.detail",
          defaultMessage: "In your terminal, run <command>sudo xcodebuild -license</command>, follow the prompts, and try again",
          description: "Instructions shown when Git cannot run until the user accepts the Xcode license",
          values: {
            command: pearl
          }
        }} />}
        </span>
      </div>;
    let oak = () => {
      refetch();
    };
    let petal = <MemoizedFormattedMessage {...{
      id: "composer.reviewMode.xcodeLicenseRequired.retry",
      defaultMessage: "Try again",
      description: "Button label for retrying Git after accepting the Xcode license"
    }} />;
    let quiet = <div className="flex items-center gap-2 text-sm" role="alert">
        {lagoon}
        {nest}
        {<ReadLoginRouteQuerySnapshot {...{
        className: "shrink-0",
        loading: isFetching,
        onClick: oak,
        size: "composerSm",
        children: petal
      }} />}
      </div>;
    let rain = quiet;
    moss = SettingsDependenciesGuard;
    orbit = "review-mode";
    pine = wheat.formatMessage({
      id: "composer.reviewMode.title",
      defaultMessage: "Code review",
      description: "Title for the review mode slash command"
    });
    quest = wheat.formatMessage({
      id: "composer.reviewMode.description",
      defaultMessage: "Review uncommitted changes or compare against a branch",
      description: "Description for the review mode slash command"
    });
    knoll = true;
    lunar = childList;
    north = {
      sections: juniper ? [{
        id: "review-mode-xcode-license",
        isLoading: isFetching,
        emptyState: rain,
        items: []
      }] : [{
        id: "review-mode-uncommitted",
        isLoading: isPending,
        items: [{
          id: "review-mode-uncommitted",
          title: wheat.formatMessage({
            id: "composer.reviewMode.option.unstaged.simple",
            defaultMessage: "Review uncommitted changes",
            description: "Button label for reviewing unstaged changes"
          }),
          disabled: isPending || isLoading,
          RightIcon: isLoading || iris ? VSCODE_EDITOR_ID : undefined,
          keepOpenOnSelect: true,
          onSelect: birch => {
            let {
              close
            } = birch;
            return fern(close);
          }
        }]
      }, {
        id: "review-mode-base-branches",
        title: <MemoizedFormattedMessage {...{
          id: "composer.reviewMode.option.baseBranch.simple",
          defaultMessage: "Review against a base branch",
          description: "Section label for reviewing against a base branch"
        }} />,
        showTitle: true,
        isLoading: apex || isPending,
        emptyState: isle,
        items: apex || brook ? [] : wave.map(item => ({
          id: `review-mode-base-branch:${item}`,
          title: item,
          disabled: isPending,
          RightIcon: jewel === item ? VSCODE_EDITOR_ID : undefined,
          keepOpenOnSelect: true,
          onSelect: canyon => {
            let {
              close
            } = canyon;
            return hill(item, close);
          }
        }))
      }]
    };
  }
  let ridge = [data, conversationId, bloom, error, cwd, gitRoot, hostConfig.id, isError, _isLoading, isFetching, isLoading, _isError, __isLoading, isPending, _data, eagle, variables];
  let storm;
  return storm = {
    id: orbit,
    title: pine,
    description: quest,
    requiresEmptyComposer: knoll,
    Icon: lunar,
    submenu: north,
    dependencies: ridge
  }, moss(storm), null;
}
function pearl(topaz) {
  return <code key="command" className="font-mono">
      {topaz}
    </code>;
}
var quartz, $;
esmInit(() => {
  quartz = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  ensureIntlFormattersInit();
  harbor();
  ensureAppShellAtomsInit();
  ensureSettingsGlyphI0Init();
  ensureSettingsQueryAtomsInit();
  ensureComposerEsm_Sut_Init();
  ensureComposerEsm_Ilt_Init();
  ensureGitMetadataQueryInit();
  lemon();
  AppInitialR();
  ensureUseGitRecentBranchesInit();
  AppInitialAG();
  deferredUiMk();
  ensureComposerEsm_K9_Init();
  ensureReviewDiffFilterInit();
  useLocalEnvironmentEditorState();
  ReviewModel();
  filterConversationTimelineItems();
  ensureSettingsQueryAtomsInit();
  localThread2();
  posixPathBasename();
  ensureComposerEsm_ML_Init();
  titleCaseLastPathSegment();
  onyx();
})();
