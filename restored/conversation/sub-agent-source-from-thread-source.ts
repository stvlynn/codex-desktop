// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `fg` / export `qst`; companions `Fot` / `Iot` / `Lot`.

import { asThreadId } from "./as-thread-id";

export type SubAgentSourceFields = {
  parentThreadId: string | null;
  depth: unknown;
  agentPath: unknown;
  agentNickname: unknown;
  agentRole: unknown;
};

const EMPTY_SUB_AGENT: SubAgentSourceFields = {
  parentThreadId: null,
  depth: null,
  agentPath: null,
  agentNickname: null,
  agentRole: null,
};

/** Empty sub-agent field bag (bundle `Lot`). */
export function emptySubAgentSourceFields(): SubAgentSourceFields {
  return { ...EMPTY_SUB_AGENT };
}

/** Read `subAgent` from a thread source object. */
export function subAgentFromThreadSource(source: unknown): unknown | null {
  if (source == null || typeof source === "string") return null;
  if (typeof source !== "object") return null;
  return "subAgent" in source
    ? (source as { subAgent?: unknown }).subAgent
    : null;
}

/** Normalize a raw subAgent payload into parent/depth/path fields. */
export function normalizeSubAgentSource(raw: unknown): SubAgentSourceFields {
  if (typeof raw === "string") return EMPTY_SUB_AGENT;
  if (raw != null && typeof raw === "object" && "thread_spawn" in raw) {
    const spawn = (raw as { thread_spawn: Record<string, unknown> })
      .thread_spawn;
    return {
      parentThreadId:
        spawn.parent_thread_id == null
          ? null
          : asThreadId(String(spawn.parent_thread_id)),
      depth: spawn.depth,
      agentPath: spawn.agent_path,
      agentNickname: spawn.agent_nickname,
      agentRole: spawn.agent_role,
    };
  }
  return EMPTY_SUB_AGENT;
}

/** Sub-agent fields from a conversation thread source. Bundle `fg` / `qst`. */
export function subAgentSourceFromThreadSource(source: unknown): SubAgentSourceFields | null {
  const raw = subAgentFromThreadSource(source);
  if (raw == null) return null;
  return normalizeSubAgentSource(raw);
}
