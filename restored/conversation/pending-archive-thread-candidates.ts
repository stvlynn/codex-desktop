// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `nPr` / export `sQ`.

import {
  toLocalSidebarThreadKey,
  toRemoteSidebarThreadKey,
} from "./sidebar-thread-keys";

export type PendingArchiveLocalCandidate = {
  kind: "local";
  conversationId: string;
  hostId: string;
  threadKey: string;
};

export type PendingArchiveRemoteCandidate = {
  kind: "remote";
  taskId: string;
  threadKey: string;
};

export type PendingArchiveThreadCandidate =
  | PendingArchiveLocalCandidate
  | PendingArchiveRemoteCandidate;

type Localish = {
  kind: "local";
  conversationId?: string | null;
  hostId?: string | null;
};

type Remoteish = {
  kind: "remote";
  task: {
    id: string;
    created_at?: string | null;
    updated_at?: string | null;
    task_status_display?: {
      latest_turn_status_display?: { turn_status?: string | null } | null;
    } | null;
  };
};

/** Threads eligible for bulk archive (idle remotes + locals). */
export function pendingArchiveThreadCandidates(
  rows: Array<Localish | Remoteish | { kind: string }>,
): PendingArchiveThreadCandidate[] {
  return rows.flatMap((row) => {
    if (
      row.kind === "local" &&
      "conversationId" in row &&
      row.conversationId != null
    ) {
      return [
        {
          kind: "local" as const,
          conversationId: row.conversationId,
          hostId: row.hostId ?? "local",
          threadKey: toLocalSidebarThreadKey(row.conversationId),
        },
      ];
    }
    if (row.kind === "remote" && "task" in row) {
      const status =
        row.task.task_status_display?.latest_turn_status_display?.turn_status;
      const busy = status === "in_progress" || status === "pending";
      const stamped =
        (row.task.updated_at ?? row.task.created_at ?? null) != null;
      return busy || !stamped
        ? []
        : [
            {
              kind: "remote" as const,
              taskId: row.task.id,
              threadKey: toRemoteSidebarThreadKey(row.task.id),
            },
          ];
    }
    return [];
  });
}
