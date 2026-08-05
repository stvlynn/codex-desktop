// Restored from ref/webview/assets/editor-diff-page-I-nI99WS.js
// Wave FY — full polished body from `editor-diff-page-I-nI99WS/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 9 (verified 37/46).
// Wave FZ-support — PascalCase invalid JSX tags: renamedId→EditorDiffPageHelper1, renamedId→EditorDiffPageHelper2, renamedId→EditorDiffPageHelper4, renamedId→EditorDiffPageHelper5, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, serviceTierMessages→ServiceTierMessages.
// AST split 1/1
/* split-lane-import-depth:1 */

import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { listAvailableCodeThemes } from "../../appearance/code-theme-catalog";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_S8_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { useLocation } from "../../boundaries/react-router-navigation";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { CancelGitActionButton } from "../../conversation/cancel-git-action-button";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { ensureDiffStatsAggregateInit } from "../../diff/ensure-diff-stats-aggregate-init";
import { shouldForceCuratedSuggestions } from "../../home/should-force-curated-suggestions";
import { subscribeCustomEventTarget } from "../../hooks/subscribe-custom-event-target";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconOH } from "../../icons/app-icon-oh";
import { ImageFileIcon } from "../../icons/image-file-icon";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { ensureAppActionRuntimeInit } from "../../navigation/app-action-runtime-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ServiceTierMessages } from "../../settings/service-tier-messages";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { setRightPanelConversation } from "../../shell/set-right-panel-conversation";
import { skillScopeMessages } from "../../skills/skill-scope-messages";
import { findTextOffsets } from "../../thread/thread-find-match-ids";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { summarizeDiffFileStats } from "../../utils/summarize-diff-file-stats";
import { identityCwd } from "../../utils/workspace-paths";
import { requestRealtimeVoicePresentationSurface } from "../../voice/request-realtime-voice-presentation-surface";
import { OptionalTooltip } from "../optional-tooltip";
import { semanticAccentColors } from "../semantic-accent-colors";

const AppInitialAE: any = undefined;
/** Wave FY unresolved companion (jsx-collision:reviewDiffFilterAtom@navigation/app-shell-atoms.ts) */
const AppInitialDW: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/editor-diff-page-view.tsx) */
const AppInitialJD: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureChromeThemeDefaultsInit@appearance/chrome-theme-defaults.ts) */
const AppInitialLW: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiME@ui/deferred-ui-me.tsx) */
const AppInitialME: any = undefined;
/** Wave FY unresolved companion (jsx-collision:updateToneSectionContent@composer/update-tone-section-content.ts) */
const AppInitialPl: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/deferred-hosts-z4.ts) */
const deferredHostsZ4: any = undefined;
export function EditorDiffPage() {
  let glide = alpha();
  if ("error" in glide) {
    let honey;
    return <div className="p-4 text-token-error-foreground">{glide.error}</div>;
  }
  return (
    <EditorDiffPageHelper1
      {...{
        diffContent: glide.diffContent,
        conversationId: glide.conversationId,
      }}
    />
  );
}
function EditorDiffPageHelper1(gamma) {
  let { diffContent, conversationId } = gamma,
    harbor = CodexPluginActionType(ensureComposerEsm_S8_Init),
    indigo = {
      conversationId,
      enablePullRequestComments: false,
    };
  let { commentProps } = RealtimeVoiceHostId(indigo),
    jade = ensureAppActionRuntimeInit(diffContent);
  let kite = jade,
    lemon = summarizeDiffFileStats(kite);
  let marble = lemon,
    nickel = CodexPluginActionResult(AppInitialLW),
    onyx = CodexPluginActionResult(AppInitialDW),
    pearl = CodexPluginActionResult(requestRealtimeVoicePresentationSurface),
    quartz = useIntl(),
    { data } = CodexPluginActionResult(deferredHostsZ4),
    river = useLocation().state?.cwd || data?.roots?.[0],
    { fileCount, linesAdded, linesDeleted } = marble,
    slate = fileCount <= echo && linesAdded + linesDeleted <= falcon,
    timber = (
      <span className="text-token-input-foreground">
        {
          <MemoizedFormattedMessage
            {...{
              id: "codex.diffView.filesChanged",
              defaultMessage:
                "{fileCount, plural, one {# file changed} other {# files changed}}",
              description: "Label for the number of files changed in DiffView",
              values: {
                fileCount,
              },
            }}
          />
        }
      </span>
    );
  let umbra = (linesAdded > 0 || linesDeleted > 0) && (
    <div className="flex items-center gap-1">
      <span className="text-token-charts-green">
        {
          <MemoizedFormattedMessage
            {...{
              id: "codex.diffView.linesAdded",
              defaultMessage: "+{linesAdded}",
              description: "Label for lines added in DiffView",
              values: {
                linesAdded,
              },
            }}
          />
        }
      </span>
      <span className="text-token-charts-red">
        {
          <MemoizedFormattedMessage
            {...{
              id: "codex.diffView.linesDeleted",
              defaultMessage: "-{linesDeleted}",
              description: "Label for lines deleted in DiffView",
              values: {
                linesDeleted,
              },
            }}
          />
        }
      </span>
    </div>
  );
  let violet = (
    <div className="flex items-center gap-2 text-sm">
      {timber}
      {umbra}
    </div>
  );
  let willow = {
    id: "left",
    label: (
      <EditorDiffPageHelper4
        {...{
          className: "icon-xs",
        }}
      />
    ),
  };
  let xenon = [
    willow,
    {
      id: "right",
      label: (
        <EditorDiffPageHelper5
          {...{
            className: "icon-xs",
          }}
        />
      ),
    },
  ];
  let yellow = nickel === "unified" ? "left" : "right",
    _EditorDiffPage = (kelp) =>
      harbor.set(AppInitialLW, kelp === "left" ? "unified" : "split");
  let zinc = (
    <AppInitialPl
      options={xenon}
      selectedId={yellow}
      onSelect={_EditorDiffPage}
      size="toolbar"
    />
  );
  let amber = (
    <MemoizedFormattedMessage
      {...{
        id: "codex.diffView.richPreviewToggle",
        defaultMessage: "Toggle rich preview",
        description: "Tooltip to toggle rich previews in the diff view",
      }}
    />
  );
  let basalt = quartz.formatMessage({
    id: "codex.diffView.richPreviewToggle",
    defaultMessage: "Toggle rich preview",
    description: "Tooltip to toggle rich previews in the diff view",
  });
  let cedar = onyx ? "ghostActive" : "ghost",
    daisy = () => harbor.set(AppInitialDW, !onyx);
  let ember = onyx ? (
    <ImageFileIcon
      {...{
        className: "icon-xs text-token-description-foreground",
      }}
    />
  ) : (
    <AppIconOH
      {...{
        className: "icon-xs text-token-description-foreground",
      }}
    />
  );
  let flint = (
    <OptionalTooltip
      {...{
        tooltipContent: amber,
        children: (
          <ReadLoginRouteQuerySnapshot
            {...{
              "aria-label": basalt,
              "aria-pressed": onyx,
              color: cedar,
              size: "icon",
              onClick: daisy,
              children: ember,
            }}
          />
        ),
      }}
    />
  );
  let garnet = (
    <div className="flex items-center gap-1">
      {zinc}
      {flint}
    </div>
  );
  let hazel = (
    <div className="flex items-center justify-between py-2 pr-2 pl-6">
      {violet}
      {garnet}
    </div>
  );
  let ivory;
  {
    let lotus;
    lotus = (mint, nova) => (
      <EditorDiffPageHelper2
        key={nova}
        {...{
          diff: mint,
          hunkSeparators: "line-info",
          viewType: nickel,
          richPreviewEnabled: onyx,
          stickyHeader: true,
          diffViewWrap: false,
          initialOpen: slate && mint.metadata.type !== "deleted",
          cwd: river == null ? null : identityCwd(river),
          hostConfig: pearl,
          conversationId,
          fullContentNextFallbackToDisk: true,
          ...commentProps,
        }}
      />
    );
    ivory = kite.map(lotus);
  }
  let jasper = (
    <div className="flex flex-col gap-1 overflow-y-auto p-[var(--padding-panel)] pt-0">
      {ivory}
    </div>
  );
  return (
    <div className="flex h-full flex-col">
      {hazel}
      {jasper}
    </div>
  );
}
function EditorDiffPageHelper2(olive) {
  let { initialOpen, ...rest } = olive;
  let [prism, quill] = copper.useState(initialOpen);
  return <AppInitialJD {...rest} open={prism} onOpenChange={quill} />;
}
function alpha() {
  let reef = useIntl(),
    sage = useLocation(),
    topaz;
  bb0: {
    let ultra = sage.state;
    if (ultra?.unifiedDiff && ultra.conversationId)
      try {
        let yarn = ultra.conversationId ?? null,
          zephyr;
        zephyr = {
          diffContent: ultra.unifiedDiff,
          conversationId: yarn,
        };
        topaz = zephyr;
        break bb0;
      } catch {
        let acorn = reef.formatMessage({
          id: "codex.diffView.failedToDecodeBase64Diff",
          defaultMessage: "Couldn’t load this diff",
          description:
            "Error message displayed when the diff cannot be decoded",
        });
        let bloom;
        bloom = {
          error: acorn,
        };
        topaz = bloom;
        break bb0;
      }
    let vapor = reef.formatMessage({
      id: "codex.diffView.noDiffData",
      defaultMessage: "No diff available",
      description: "Error message displayed when there is no diff data",
    });
    let wheat;
    wheat = {
      error: vapor,
    };
    topaz = wheat;
  }
  return topaz;
}
function EditorDiffPageHelper4(coral) {
  let { className } = coral,
    drift = (
      <MemoizedFormattedMessage
        {...{
          id: "codex.diffView.switchToUnified",
          defaultMessage: "Switch to unified diff",
          description: "Tooltip to switch to unified diff view",
        }}
      />
    );
  return (
    <OptionalTooltip
      {...{
        tooltipContent: drift,
        children: (
          <ServiceTierMessages
            {...{
              className,
            }}
          />
        ),
      }}
    />
  );
}
function EditorDiffPageHelper5(eagle) {
  let { className } = eagle,
    frost = (
      <MemoizedFormattedMessage
        {...{
          id: "codex.diffView.switchToUnified",
          defaultMessage: "Switch to unified diff",
          description: "Tooltip to switch to unified diff view",
        }}
      />
    );
  return (
    <OptionalTooltip
      {...{
        tooltipContent: frost,
        children: <CancelGitActionButton className={className} />,
      }}
    />
  );
}
var bravo, copper, delta, echo, falcon;
esmInit(() => {
  bravo = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  copper = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  ensureSettingsQueryAtomsInit();
  WritingBlockRenderer();
  ensureComposerEsm_Hlt_Init();
  AppInitialME();
  AppInitialAE();
  findTextOffsets();
  setRightPanelConversation();
  filterConversationTimelineItems();
  listAvailableCodeThemes();
  extractColonPrefixedNamedTokens();
  semanticAccentColors();
  ensureDiffStatsAggregateInit();
  subscribeCustomEventTarget();
  shouldForceCuratedSuggestions();
  skillScopeMessages();
  echo = 25;
  falcon = 2e3;
})();
