// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Apply/revert mutation shell for remote diffs (staging apply-diff hook).
// Peer git RPC (`M3` / apply-patch) stays soft — never call throwing extractFn peers.

import { useState } from "react";

import {
  notifyApplyPatchResult,
  type ApplyPatchMessageFormatter,
  type ApplyPatchToastApi,
  type ApplyPatchToastResult,
} from "./apply-patch-toast";

export type ApplyOrRevertTaskEnvironment = {
  id?: string;
  label?: string | null;
  repo_map?: Record<string, { clone_url?: string | null } | undefined>;
};

export type UseApplyOrRevertDiffArgs = {
  turnId?: string | null;
  diff?: string | null;
  taskEnvironment?: ApplyOrRevertTaskEnvironment | null;
  /** When true, banner shows revert/reapply. Soft default: false. */
  hasAppliedCodeLocally?: boolean;
  /** Optional toast + intl for outcome notifications. */
  intl?: ApplyPatchMessageFormatter | null;
  toast?: ApplyPatchToastApi | null;
  /** Soft git-root override when workspace peers are not wired. */
  gitRootPath?: string | null;
  /** Soft non-workspace flag when environment list peers are not wired. */
  isNonWorkspaceEnvironment?: boolean;
};

export type ApplyOrRevertResultsState = {
  open: boolean;
  result:
    | (ApplyPatchToastResult & {
        appliedPaths?: string[];
        skippedPaths?: string[];
        conflictedPaths?: string[];
      })
    | null;
};

export type UseApplyOrRevertDiffResult = {
  hasAppliedCodeLocally: boolean;
  canApply: boolean;
  isApplying: boolean;
  apply: () => void;
  revert: () => void;
  results: ApplyOrRevertResultsState;
  setResultsOpen: (open: boolean) => void;
  isNonWorkspaceEnvironment: boolean;
  taskEnvironmentLabel: string | null;
  gitRootPath: string | null;
  branchName: string | null;
};

type SoftMutation = {
  isPending: boolean;
  mutate: (vars: {
    diff: string;
    cwd: string;
    operationSource: string;
    revert: boolean;
  }) => void;
};

/**
 * Staging apply-diff hook shape without peer-gated apply-patch / highlight atoms.
 * Mutate is a soft no-op that surfaces an informational results dialog.
 */
export function useApplyOrRevertDiff(
  args: UseApplyOrRevertDiffArgs,
): UseApplyOrRevertDiffResult {
  const {
    turnId,
    diff,
    taskEnvironment,
    hasAppliedCodeLocally = false,
    intl = null,
    toast = null,
    gitRootPath = null,
    isNonWorkspaceEnvironment = false,
  } = args;

  const [results, setResults] = useState<ApplyOrRevertResultsState>({
    open: false,
    result: null,
  });
  const [isPending, setIsPending] = useState(false);

  const resolvedGitRoot = gitRootPath;
  const canApply = !!resolvedGitRoot && !!diff;
  const taskEnvironmentLabel = taskEnvironment?.label ?? null;

  const mutation: SoftMutation = {
    isPending,
    mutate: (vars) => {
      if (!diff || !resolvedGitRoot || isPending) return;
      void turnId;
      setIsPending(true);
      // Soft shell: peers (`M3` apply-patch) are not wired — report deferred result.
      queueMicrotask(() => {
        const result: ApplyPatchToastResult = {
          status: "error",
          errorCode: "peers-not-wired",
        };
        if (intl && toast) {
          notifyApplyPatchResult(vars.revert, result, intl, toast);
        }
        setResults({ open: true, result });
        setIsPending(false);
      });
    },
  };

  const run = (revert: boolean) => {
    if (mutation.isPending || !diff || !resolvedGitRoot) return;
    mutation.mutate({
      diff,
      cwd: resolvedGitRoot,
      operationSource: "remote_conversation_apply_diff",
      revert,
    });
  };

  return {
    hasAppliedCodeLocally,
    canApply,
    isApplying: mutation.isPending,
    apply: () => run(false),
    revert: () => run(true),
    results,
    setResultsOpen: (open) => {
      setResults((prev) => ({ ...prev, open }));
    },
    isNonWorkspaceEnvironment,
    taskEnvironmentLabel,
    gitRootPath: resolvedGitRoot,
    branchName: null,
  };
}
