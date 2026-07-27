// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Pure title / status helpers extracted from worktree task row (`YVl` / `ho`).

import type { ReactNode } from "react";
import { FormattedMessage, type IntlShape } from "react-intl";

import { worktreeTaskRowMessages } from "./worktree-task-row-messages";

export type WorktreeTaskPhase = "failed" | (string & {});

export type WorktreeTaskRowModelInput = {
  phase: WorktreeTaskPhase;
  label: string;
  hasAttention?: boolean;
  /** True when `RKi(phase)` reports an in-flight / loading phase. */
  phaseIsLoading: boolean;
};

export type WorktreeTaskStatusState =
  | { type: "loading"; unread: boolean }
  | { type: "error"; unread: boolean }
  | { type: "idle"; unread: boolean };

/**
 * Status-indicator state machine from the worktree task row body.
 */
export function getWorktreeTaskStatusState(input: WorktreeTaskRowModelInput): WorktreeTaskStatusState {
  const unread = input.hasAttention ?? false;
  if (input.phaseIsLoading) return { type: "loading", unread };
  if (input.phase === "failed") return { type: "error", unread };
  return { type: "idle", unread };
}

/**
 * Visible title node: FormattedMessage when init failed, else formatted label.
 */
export function getWorktreeTaskRowTitle(phase: WorktreeTaskPhase, label: string, formatLabel: (label: string) => ReactNode,
): ReactNode {
  if (phase === "failed") {
    return (
      <FormattedMessage {...worktreeTaskRowMessages.worktreeInitFailedTitle} />
    );
  }
  return formatLabel(label);
}

/**
 * Accessible aria label string for the row (intl-aware failed title).
 */
export function getWorktreeTaskRowAriaLabel(phase: WorktreeTaskPhase, label: string, intl: Pick<IntlShape, "formatMessage">, formatLabel: (label: string) => string,
): string {
  if (phase === "failed") {
    return intl.formatMessage(worktreeTaskRowMessages.worktreeInitFailedTitle);
  }
  return formatLabel(label);
}
