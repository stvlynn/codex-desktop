// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Stage 3: Wave CA — small real body merging local conversations + cloud tasks
// into sidebar/home search rows. Deferred companion of home thread lists.

import { asThreadId } from "../conversation/as-thread-id";
import {
  resolveConversationTitle,
  resolveConversationTitleRaw,
} from "../conversation/resolve-conversation-title";
import {
  toLocalSidebarThreadKey,
  toRemoteSidebarThreadKey,
} from "../conversation/sidebar-thread-keys";

type ConversationMeta = {
  id: string;
  hostId?: string | null;
  cwd?: string | null;
  updatedAt?: number;
  recencyAt?: number;
  gitInfo?: { branch?: string | null } | null;
  [key: string]: unknown;
};

type CloudTask = {
  id: string;
  title?: string | null;
  updated_at?: number | null;
  created_at?: number | null;
  task_status_display?: { environment_label?: string | null } | null;
  [key: string]: unknown;
};

export type LocalThreadSearchItem = {
  kind: "local";
  threadKey: string;
  conversationId: string;
  threadId: string;
  title: string | null;
  searchTitle: string;
  cwd: string;
  branch: string;
  projectLabel: string | undefined;
  updatedAt: number | undefined;
  searchPreview: null;
};

export type RemoteThreadSearchItem = {
  kind: "remote";
  threadKey: string;
  taskId: string;
  title: string | null | undefined;
  searchTitle: string;
  environmentLabel: string;
  projectLabel: string | undefined;
  updatedAt: number;
  searchPreview: null;
};

export type ThreadSearchItem = LocalThreadSearchItem | RemoteThreadSearchItem;

/**
 * Merge local conversation metas and remote cloud tasks into searchable rows.
 * Bundle export `fM` / internal `Eqa`.
 */
export function buildLocalAndRemoteThreadSearchItems(args: {
  cloudTasks?: CloudTask[] | null;
  conversationsMeta: ConversationMeta[];
  hostIds: Set<string>;
  projectLabelByThreadKey?: Map<string, string> | null;
}): ThreadSearchItem[] {
  const {
    cloudTasks: cloud,
    conversationsMeta: metas,
    hostIds,
    projectLabelByThreadKey: labels,
  } = args;

  const local: LocalThreadSearchItem[] = metas
    .filter((row) => hostIds.has(row.hostId ?? "local"))
    .map((row) => {
      const cwd = row.cwd ?? "";
      const title = resolveConversationTitle(row);
      const searchTitle = (resolveConversationTitleRaw(row) ?? cwd) || row.id;
      const conversationId = asThreadId(row.id);
      const threadKey = toLocalSidebarThreadKey(conversationId);
      return {
        kind: "local",
        threadKey,
        conversationId,
        threadId: row.id,
        title,
        searchTitle,
        cwd,
        branch: row.gitInfo?.branch ?? "",
        projectLabel: labels?.get(threadKey),
        updatedAt: row.recencyAt ?? row.updatedAt,
        searchPreview: null,
      };
    });

  const remote: RemoteThreadSearchItem[] =
    cloud?.map((task) => {
      const threadKey = toRemoteSidebarThreadKey(task.id);
      return {
        kind: "remote",
        threadKey,
        taskId: task.id,
        title: task.title,
        searchTitle: task.title ?? task.id,
        environmentLabel: task.task_status_display?.environment_label ?? "",
        projectLabel: labels?.get(threadKey),
        updatedAt: (task.updated_at ?? task.created_at ?? 0) * 1000,
        searchPreview: null,
      };
    }) ?? [];

  return [...local, ...remote];
}
