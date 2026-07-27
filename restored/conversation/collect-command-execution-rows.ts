// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Tvu` / export `at`.

import { commandExecutionDisplayCommand } from "./command-execution-display-command";
import { commandExecutionStopSource } from "./command-execution-stop-source";

export type ConversationForCommandRows = {
  id: string;
  title?: string | null;
  cwd?: string | null;
  hostId?: string | null;
  turns: Array<{
    turnId?: string | null;
    status?: string | null;
    commandExecutionStartedAtMsById?: Record<
      string,
      number | null | undefined
    > | null;
    interruptedCommandExecutionItemIds?: string[] | null;
    items?: Array<{
      type?: string | null;
      id: string;
      status?: string | null;
      cwd?: string | null;
      processId?: string | null;
      command?: string;
      commandActions?: Array<{ command?: string | null } | null> | null;
    } | null> | null;
  } | null>;
};

/** Flatten in-progress / restored command executions across conversations. */
export function collectCommandExecutionRows(
  conversations: ConversationForCommandRows[],
): Array<{
  chatTitle: string | null | undefined;
  command: string;
  commandExecutionStartedAtMs: number | null | undefined;
  conversationId: string;
  cwd: string | null | undefined;
  hostId: string | null | undefined;
  id: string;
  itemId: string;
  osPid: null;
  processId: string | null | undefined;
  source: string;
  startedAtMs: number | null | undefined;
  stopAction: string;
  turnId: string | null | undefined;
}> {
  const out: Array<{
    chatTitle: string | null | undefined;
    command: string;
    commandExecutionStartedAtMs: number | null | undefined;
    conversationId: string;
    cwd: string | null | undefined;
    hostId: string | null | undefined;
    id: string;
    itemId: string;
    osPid: null;
    processId: string | null | undefined;
    source: string;
    startedAtMs: number | null | undefined;
    stopAction: string;
    turnId: string | null | undefined;
  }> = [];
  for (const conversation of conversations) {
    const last = conversation.turns.length - 1;
    for (let turnIndex = last; turnIndex >= 0; --turnIndex) {
      const turn = conversation.turns[turnIndex];
      if (turn == null) continue;
      const latestInProgress =
        turnIndex === last && turn.status === "inProgress";
      for (const item of turn.items ?? []) {
        if (item?.type !== "commandExecution") continue;
        const stop = commandExecutionStopSource(item, turn, latestInProgress);
        if (stop == null) continue;
        const command = commandExecutionDisplayCommand(
          item as {
            command: string;
            commandActions?: Array<{ command?: string | null } | null> | null;
          },
        );
        if (command.length === 0) continue;
        const started = turn.commandExecutionStartedAtMsById?.[item.id] ?? null;
        out.push({
          chatTitle: conversation.title,
          command,
          commandExecutionStartedAtMs: started,
          conversationId: conversation.id,
          cwd: item.cwd ?? conversation.cwd,
          hostId: conversation.hostId,
          id: `${conversation.id}:${turn.turnId ?? turnIndex}:${item.id}`,
          itemId: item.id,
          osPid: null,
          processId: item.processId,
          source: stop.source,
          startedAtMs: started,
          stopAction: stop.stopAction,
          turnId: turn.turnId,
        });
      }
    }
  }
  return out;
}
