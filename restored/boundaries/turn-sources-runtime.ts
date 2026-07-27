// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `W0i`) / export `cB`.
//
// TYPED BOUNDARY FACADE — MCP tool invocation + turn-source helpers used by
// `conversation/turn-sources-model` and assorted persisted debug-state
// modules. Open runtime boundary: deep-restore when scoped.

/* eslint-disable @typescript-eslint/no-explicit-any */

import { createScopedSignal, type AppScopeBrand } from "./app-scope-runtime";
import type { BindableAtom } from "./composer-appscope-atoms";

export type McpToolResult = {
  _meta?: Record<string, unknown>;
  structuredContent?: unknown;
  [key: string]: unknown;
};

export type BindCallMcpToolPeers = {
  Bf: (...args: unknown[]) => unknown;
  G0i: (...args: unknown[]) => unknown;
  qwt: (...args: unknown[]) => unknown;
};
let peers: BindCallMcpToolPeers | null = null;

/** Wire bindCallMcpTool peers once companions land. */
export function setBindCallMcpToolPeers(next: BindCallMcpToolPeers): void {
  peers = next;
}

/**
 * Bundle export `cB` / internal `W0i`.
 */
export async function callMcpTool(
  e: unknown,
  t: unknown,
  n: unknown,
  r: unknown,
  i: unknown,
  { hostToolCallMetadata, threadId }: Record<string, unknown> = {},
): Promise<McpToolResult> {
  if (peers == null) {
    throw new Error("callMcpTool peers are not configured");
  }
  return peers.qwt.parse(
    await peers.Bf("call-mcp-tool", {
      arguments: i,
      hostId: t,
      ...(hostToolCallMetadata == null
        ? {}
        : {
            _meta: hostToolCallMetadata,
          }),
      server: n,
      threadId: threadId ?? (await peers.G0i(e, t)),
      tool: r,
    }),
  ) as McpToolResult;
}

/** Rolldown ESM init shim — module side effects now run on import. */
export function ensurePersistedScopeSignalInit(): void {}

function readPersisted<T>(key: string, fallback: T): T {
  if (typeof localStorage === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw == null ? fallback : (JSON.parse(raw) as T);
  } catch {
    return fallback;
  }
}

function writePersisted<T>(key: string, value: T): void {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore quota / serialization errors */
  }
}

/**
 * Bundle-neighborhood `nut`/`rut` — a `createScopedSignal` cell whose value
 * is mirrored to `localStorage` under `key`.
 */
export function createPersistedScopeSignal<T>(
  key: string,
  defaultValue: T,
  scope?: AppScopeBrand,
): BindableAtom<T> {
  const cell = createScopedSignal<T>(
    scope as AppScopeBrand,
    readPersisted(key, defaultValue),
  );
  const originalSet = cell.set;
  cell.set = (value: T) => {
    writePersisted(key, value);
    originalSet(value);
  };
  return cell;
}

/** Open boundary stub — resolves a connector "app" descriptor from a URL. */
export function matchConnectorAppFromUrl(
  url: string,
): { appId: string } | null {
  try {
    const { hostname } = new URL(url);
    if (
      hostname.endsWith("drive.google.com") ||
      hostname.endsWith("docs.google.com") ||
      hostname.endsWith("sheets.google.com")
    ) {
      return { appId: "google-drive" };
    }
  } catch {
    /* invalid URL */
  }
  return null;
}

export type ResourceActivitiesMeta =
  | { status: "valid"; resources: { url: string; title?: string | null }[] }
  | { status: "invalid" | "missing" };

/** Open boundary stub — parses MCP `_meta` resource-activity annotations. */
export function parseResourceActivitiesMeta(
  meta: Record<string, unknown> | undefined,
): ResourceActivitiesMeta {
  const resources = (meta as any)?.["resource_activities"];
  if (!Array.isArray(resources)) return { status: "missing" };
  return {
    status: "valid",
    resources: resources
      .filter((entry): entry is { url: string; title?: string | null } => {
        return entry != null && typeof entry.url === "string";
      })
      .map((entry) => ({ url: entry.url, title: entry.title ?? null })),
  };
}

/** Open boundary stub — extracts a display title from structured content. */
export function extractStructuredContentTitle(
  structuredContent: unknown,
): { title: string } | null {
  const title =
    (structuredContent as any)?.name ?? (structuredContent as any)?.title;
  return typeof title === "string" && title.trim() !== "" ? { title } : null;
}

/** Open boundary stub — normalizes a Codex-apps MCP tool call result. */
export function normalizeCodexAppsToolResult({
  isCodexAppsServer,
  toolResult,
}: {
  isCodexAppsServer: boolean;
  toolResult: McpToolResult;
}): McpToolResult {
  void isCodexAppsServer;
  return toolResult;
}

/** Open boundary stub — reduced-motion preference for turn-source visuals. */
export function useTurnSourcesReducedMotion(): boolean {
  if (
    typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
  ) {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
