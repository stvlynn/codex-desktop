// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Apply/revert banner control (staging apply/revert footer) — mutation stays soft-bridged.

import type { ReactElement } from "react";

import { ApplyOrRevertBanner } from "./apply-or-revert-banner";
import {
  useApplyOrRevertDiff,
  type ApplyOrRevertTaskEnvironment,
} from "./use-apply-or-revert-diff";

export type ApplyOrRevertControlProps = {
  turnId?: string | null;
  diff?: string | null;
  taskEnvironment?: ApplyOrRevertTaskEnvironment | null;
  hasAppliedCodeLocally?: boolean;
  gitRootPath?: string | null;
  isNonWorkspaceEnvironment?: boolean;
};

/** Footer apply/revert callout for the live remote assistant turn. */
export function ApplyOrRevertControl(
  props: ApplyOrRevertControlProps,
): ReactElement | null {
  const {
    turnId,
    diff,
    taskEnvironment,
    hasAppliedCodeLocally,
    gitRootPath,
    isNonWorkspaceEnvironment,
  } = props;

  const state = useApplyOrRevertDiff({
    turnId,
    diff,
    taskEnvironment,
    hasAppliedCodeLocally,
    gitRootPath,
    isNonWorkspaceEnvironment,
  });

  if (!diff || !turnId) return null;

  return (
    <ApplyOrRevertBanner
      hasAppliedCodeLocally={state.hasAppliedCodeLocally}
      canApply={state.canApply}
      isApplying={state.isApplying}
      isNonWorkspaceEnvironment={state.isNonWorkspaceEnvironment}
      taskEnvironmentLabel={state.taskEnvironmentLabel}
      onApply={state.apply}
      onRevert={state.revert}
      results={state.results}
      setResultsOpen={state.setResultsOpen}
    />
  );
}
