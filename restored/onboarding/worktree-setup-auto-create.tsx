// Restored from ref/webview/assets/worktree-setup-auto-fix-CqsFmOeg.js
// Wave AH IMPORT_MAP key `worktree-setup-auto-create-CqsFmOeg` misnamed the same
// chunk; public path kept for map stability. Deferred Fq/Ic/Lc now resolve to
// GuardianApprovals / WorktreeSetupActivityFeed / deferredDefaultHelper.

import type { ReactElement, ReactNode } from "react";

import { GuardianApprovals } from "../apps/guardian-approvals";
import { deferredDefaultHelper } from "../ui/deferred-default-helper";
import { WorktreeSetupActivityFeed } from "../worktrees/worktree-setup-activity-feed";

export type WorktreeSetupActivityRow = {
  id: string;
  kind: "worktree" | "setup" | "conversation";
  status: "running" | "completed" | "failed" | "skipped";
  outputText?: string;
};

export type WorktreeSetupAutoCreateProps = {
  pendingWorktree?: {
    id?: string;
    attempt?: string | number;
    phase?: string;
    worktreeGitRoot?: string | null;
    worktreeWorkspaceRoot?: string | null;
    worktreeOutputText?: string;
    setupOutputText?: string;
    localEnvironmentConfigPath?: string | null;
    errorMessage?: string | null;
    [key: string]: unknown;
  };
  isConversationStarting?: boolean;
  isConversationStartFailed?: boolean;
  children?: ReactNode;
  className?: string;
  [key: string]: unknown;
};

type WorktreeSetupAutoCreateImpl = (
  props: WorktreeSetupAutoCreateProps,
) => ReactNode;

let impl: WorktreeSetupAutoCreateImpl | null = null;

/** Wire the full auto-create/auto-fix surface once host companions land. */
export function bindWorktreeSetupAutoCreate(
  next: WorktreeSetupAutoCreateImpl,
): void {
  impl = next;
}

function worktreePhaseStatus(
  phase: string | undefined,
  hasWorktreeRoots: boolean,
): WorktreeSetupActivityRow["status"] | undefined {
  switch (phase) {
    case "queued":
    case "creating":
      return "running";
    case "setting-up":
    case "worktree-ready":
      return "completed";
    case "failed":
      return hasWorktreeRoots ? "completed" : "failed";
    default:
      return undefined;
  }
}

function setupPhaseStatus(
  pending: NonNullable<WorktreeSetupAutoCreateProps["pendingWorktree"]>,
  hasWorktreeRoots: boolean,
): WorktreeSetupActivityRow["status"] | null {
  switch (pending.phase) {
    case "queued":
    case "creating":
      return null;
    case "setting-up":
      return "running";
    case "worktree-ready":
      return pending.localEnvironmentConfigPath == null
        ? null
        : pending.errorMessage == null
          ? "completed"
          : "skipped";
    case "failed":
      return hasWorktreeRoots ? "failed" : null;
    default:
      return null;
  }
}

/** Build activity rows for the setup feed (bundle helper path). */
export function buildWorktreeSetupAutoCreateActivities(args: {
  pendingWorktree: NonNullable<WorktreeSetupAutoCreateProps["pendingWorktree"]>;
  isConversationStarting?: boolean;
  isConversationStartFailed?: boolean;
}): WorktreeSetupActivityRow[] {
  const { pendingWorktree, isConversationStarting, isConversationStartFailed } =
    args;
  const hasWorktreeRoots =
    pendingWorktree.worktreeGitRoot != null &&
    pendingWorktree.worktreeWorkspaceRoot != null;
  const id = `${pendingWorktree.id ?? "pending"}:${pendingWorktree.attempt ?? 0}`;
  const rows: WorktreeSetupActivityRow[] = [
    {
      id: `${id}:worktree`,
      kind: "worktree",
      status:
        worktreePhaseStatus(pendingWorktree.phase, hasWorktreeRoots) ??
        "running",
      outputText: pendingWorktree.worktreeOutputText,
    },
  ];
  const setupStatus = setupPhaseStatus(pendingWorktree, hasWorktreeRoots);
  if (setupStatus != null) {
    rows.push({
      id: `${id}:setup`,
      kind: "setup",
      status: setupStatus,
      outputText: pendingWorktree.setupOutputText,
    });
  }
  if (isConversationStarting || isConversationStartFailed) {
    rows.push({
      id: `${id}:conversation`,
      kind: "conversation",
      status: isConversationStartFailed ? "failed" : "running",
      outputText: "",
    });
  }
  return rows;
}

/**
 * Bundle export `WorktreeSetupAutoCreate`.
 * Default surface wraps the restored activity feed (former app-initial `Ic`).
 */
export function WorktreeSetupAutoCreate(
  props: WorktreeSetupAutoCreateProps = {},
): ReactElement {
  if (impl != null) return impl(props) as ReactElement;

  const {
    pendingWorktree,
    isConversationStarting,
    isConversationStartFailed,
    children,
    className,
    ...rest
  } = props;

  const activities =
    pendingWorktree != null
      ? buildWorktreeSetupAutoCreateActivities({
          pendingWorktree,
          isConversationStarting,
          isConversationStartFailed,
        })
      : undefined;

  return (
    <WorktreeSetupActivityFeed
      className={className}
      activities={activities}
      {...rest}
    >
      {children}
    </WorktreeSetupActivityFeed>
  );
}

/**
 * Rolldown ESM init retained as no-op.
 * Touches deferred Wave AH peers Fq/Ic/Lc so the import graph stays live.
 */
export function ensureWorktreeSetupAutoCreateInit(): void {
  void GuardianApprovals;
  void WorktreeSetupActivityFeed;
  void deferredDefaultHelper;
}
