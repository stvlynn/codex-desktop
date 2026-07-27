// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `jvu` companion for export `at`.

export type CommandExecutionStopSource =
  | { source: "active-turn"; stopAction: "interrupt-conversation" }
  | { source: "background-terminal"; stopAction: "kill-child-process" }
  | { source: "restored-process"; stopAction: "kill-child-process" };

export type CommandExecutionLike = {
  id: string;
  status?: string | null;
};

export type TurnLikeForStopSource = {
  interruptedCommandExecutionItemIds?: string[] | null;
};

/** Classify how a command-execution row should be stopped / restored. */
export function commandExecutionStopSource(
  item: CommandExecutionLike,
  turn: TurnLikeForStopSource,
  isLatestInProgressTurn: boolean,
): CommandExecutionStopSource | null {
  if (turn.interruptedCommandExecutionItemIds?.includes(item.id)) return null;
  if (item.status === "inProgress") {
    return isLatestInProgressTurn
      ? { source: "active-turn", stopAction: "interrupt-conversation" }
      : { source: "background-terminal", stopAction: "kill-child-process" };
  }
  if (item.status === "completed") {
    return { source: "restored-process", stopAction: "kill-child-process" };
  }
  return null;
}
