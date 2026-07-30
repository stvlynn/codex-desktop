// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Pure PR / diff selection helpers for remote turns.

import {
  areTurnsRelated,
  isTurnAncestor,
} from "../../conversation/is-turn-ancestor";
import { hasInputItemsField } from "../../utils/has-input-items-field";

export type RemotePrItem = {
  type?: string;
  output_diff?: { diff?: string | null } | null;
  pr_title?: string;
  title?: string | null;
  [key: string]: unknown;
};

export type RemoteTurnLike = {
  id: string;
  created_at?: number;
  previous_turn_id?: string | null;
  input_items?: unknown[];
  output_items?: RemotePrItem[] | null;
  pull_request_status?: string | null;
  pull_request_data?: { url?: string | null } | null;
  direct_push_pushed_commit_sha?: string | null;
  [key: string]: unknown;
};

export type DiffActionSelection = {
  actionTurn: RemoteTurnLike;
  prItem: RemotePrItem;
};

/** Find the first PR-typed output item on a turn (staging helper). */
export function findTurnPrItem(
  turn: RemoteTurnLike | null | undefined,
): RemotePrItem | null {
  return turn?.output_items?.find((item) => item.type === "pr") ?? null;
}

/** Whether a PR create/update has reached a terminal URL/status (staging helper). */
export function isPullRequestTerminal(
  status: string | null | undefined,
  url: string | null | undefined,
): boolean {
  if (url) return true;
  return (
    status === "created" ||
    status === "failed" ||
    status === "updated" ||
    status === "externally_created"
  );
}

export type ExternalPullRequestEntry = {
  assistant_turn_id?: string | null;
  pull_request: {
    url?: string | null;
    number?: number | null;
    [key: string]: unknown;
  };
};

/** Match an external PR by turn id or URL (staging helper). */
export function findExternalPullRequest(
  pullRequests: ExternalPullRequestEntry[],
  turnId: string | null | undefined,
  url: string | null | undefined,
): ExternalPullRequestEntry["pull_request"] | null {
  if (turnId != null) {
    const byTurn = pullRequests.find(
      (entry) => entry.assistant_turn_id === turnId,
    );
    if (byTurn) return byTurn.pull_request;
  }
  if (url != null) {
    const byUrl = pullRequests.find((entry) => entry.pull_request.url === url);
    if (byUrl) return byUrl.pull_request;
  }
  return null;
}

/** Walk ancestor chain for the latest PR with a diff (staging helper). */
export function findLatestAncestralPrAction(
  turns: RemoteTurnLike[],
  turnById: Map<string, RemoteTurnLike>,
  selectedTurn: RemoteTurnLike,
): DiffActionSelection | null {
  let best: DiffActionSelection | null = null;
  for (const turn of turns) {
    if (!isTurnAncestor(turnById, selectedTurn.id, turn.id)) continue;
    const prItem = findTurnPrItem(turn);
    if (
      prItem?.output_diff?.diff &&
      (!best || (turn.created_at ?? 0) > (best.actionTurn.created_at ?? 0))
    ) {
      best = { actionTurn: turn, prItem };
    }
  }
  return best;
}

/**
 * Pick which turn/PR drives apply / create-PR actions (staging helper).
 * Filters out turns that look like user-input shells via `hasInputItemsField`.
 */
export function selectDiffActionTurn(args: {
  turns: RemoteTurnLike[];
  selectedTurn: RemoteTurnLike | null | undefined;
  diffTaskTurn: RemoteTurnLike | null | undefined;
}): DiffActionSelection | null {
  const { turns, selectedTurn, diffTaskTurn } = args;
  const turnById = new Map<string, RemoteTurnLike>();
  for (const turn of turns) turnById.set(turn.id, turn);
  if (selectedTurn) turnById.set(selectedTurn.id, selectedTurn);
  if (diffTaskTurn) turnById.set(diffTaskTurn.id, diffTaskTurn);

  const actionable = Array.from(turnById.values()).filter(
    (item) => !hasInputItemsField(item as object),
  );

  let selection = selectedTurn
    ? findLatestAncestralPrAction(actionable, turnById, selectedTurn)
    : null;

  const diffPr = findTurnPrItem(diffTaskTurn);
  const selectedRelatedToDiff =
    !!selectedTurn &&
    !!diffTaskTurn &&
    areTurnsRelated(turnById, selectedTurn.id, diffTaskTurn.id);
  const relatedDiffSelection =
    selectedRelatedToDiff && diffPr
      ? { actionTurn: diffTaskTurn!, prItem: diffPr }
      : null;

  if (
    diffTaskTurn &&
    relatedDiffSelection &&
    (!selection ||
      (diffTaskTurn.created_at ?? 0) > (selection.actionTurn.created_at ?? 0))
  ) {
    selection = relatedDiffSelection;
  }

  const selectedPr = findTurnPrItem(selectedTurn);
  if (!selection && selectedTurn && selectedPr) {
    selection = { actionTurn: selectedTurn, prItem: selectedPr };
  }
  if (!selection && !selectedTurn && diffTaskTurn && diffPr) {
    selection = { actionTurn: diffTaskTurn, prItem: diffPr };
  }
  return selection;
}

/**
 * Resolve the unified diff string shown for the live assistant turn (staging helper).
 */
export function resolveRemoteUnifiedDiff(
  taskDetails:
    | {
        current_diff_task_turn?: RemoteTurnLike | null;
        current_assistant_turn?: RemoteTurnLike | null;
      }
    | null
    | undefined,
  selectedTurn: RemoteTurnLike | null | undefined,
  turns: RemoteTurnLike[] | null | undefined,
): string | null {
  const diffTaskTurn = taskDetails?.current_diff_task_turn;
  const currentAssistant = taskDetails?.current_assistant_turn;
  const selectedPr = findTurnPrItem(selectedTurn);
  const diffPr = findTurnPrItem(diffTaskTurn);

  let preferDiffPr = selectedTurn == null;
  if (!preferDiffPr && selectedTurn != null && diffTaskTurn != null) {
    const map = new Map<string, RemoteTurnLike>();
    for (const turn of turns ?? []) map.set(turn.id, turn);
    map.set(selectedTurn.id, selectedTurn);
    map.set(diffTaskTurn.id, diffTaskTurn);
    preferDiffPr = areTurnsRelated(map, selectedTurn.id, diffTaskTurn.id);
  }

  const fallbackPr = preferDiffPr ? diffPr : undefined;
  if (selectedTurn && selectedTurn.id !== currentAssistant?.id) {
    return (selectedPr ?? fallbackPr)?.output_diff?.diff ?? null;
  }
  return (
    (selectedPr ?? fallbackPr ?? findTurnPrItem(currentAssistant))?.output_diff
      ?.diff ?? null
  );
}
