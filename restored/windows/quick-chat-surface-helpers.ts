// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Quick-chat surface helpers (`qps`/`Gx`, `Jps`, `bZ`/`qx`, `ams`/`Vx`,
// `oms`/`Ux`, `ims`/`Hx`, `rms`/`Nx`, `Zps`/`Wx`, `Xps`/`Kx`, `Qps`/`Ax`).
// Injectable deps mirror conversation/activate-conversation-surface.ts.
/* eslint-disable @typescript-eslint/no-explicit-any */

import { CodexQuickChatSource } from "../analytics/codex-quick-chat-source";
import { CodexQuickChatLifecycleAction } from "../analytics/codex-quick-chat-lifecycle-action";
import { CodexQuickChatSurface } from "../analytics/codex-quick-chat-surface";
import { CodexQuickChatDockPosition } from "../analytics/codex-quick-chat-dock-position";
import type { QuickChatDockPosition } from "./quick-chat-atoms";
import type { QuickChatWindowSize } from "./quick-chat-default-size";

type ScopeLike = {
  get: (atom: unknown, ...rest: any[]) => any;
  set: (atom: unknown, value: unknown, ...rest: any[]) => void;
};

export type QuickChatSurfaceHelperDeps = {
  surfaceAtom: unknown;
  surfaceCollapsedAtom: unknown;
  dockPositionAtom: unknown;
  sizeAtom: unknown;
  historyTabAtom: unknown;
  windowModeAtom: unknown;
  isSurfaceHostAvailable: (scope: ScopeLike) => boolean;
  ensureSurfaceVisible: (scope: ScopeLike, collapsed: boolean) => void;
  resolveContextSourceConversationId?: (scope: ScopeLike) => string | null;
  emitAnalytics?: (
    scope: ScopeLike,
    event: string,
    payload: Record<string, unknown>,
  ) => void;
  analyticsEventName?: string;
  openFromSubagent?: (
    scope: ScopeLike,
    options: Record<string, unknown>,
    conversationId: string,
  ) => { promise: Promise<unknown> };
  resolveSourceConversationId?: (
    scope: ScopeLike,
    sourceConversationId: unknown,
  ) => string;
  isBackgroundSubagentsEnabled?: (scope: ScopeLike, gateId: string) => boolean;
  openBackgroundSubagent?: (
    scope: ScopeLike,
    options: Record<string, unknown>,
  ) => unknown;
};

let deps: QuickChatSurfaceHelperDeps | null = null;

export function setQuickChatSurfaceHelperDeps(next: QuickChatSurfaceHelperDeps): void {
  deps = next;
}

function requireDeps(): QuickChatSurfaceHelperDeps {
  if (deps == null) {
    throw new Error("quick-chat surface helper deps have not been configured");
  }
  return deps;
}

/** Bundle `qps` / export `Gx` — map UI surface mode → analytics enum. */
export function mapQuickChatSurfaceMode(mode: "floating" | "window" | string): string | undefined {
  switch (mode) {
    case "floating":
      return CodexQuickChatSurface.CODEX_QUICK_CHAT_SURFACE_POPOVER;
    case "window":
      return CodexQuickChatSurface.CODEX_QUICK_CHAT_SURFACE_WINDOW;
    default:
      return undefined;
  }
}

/** Bundle `Jps` — map dock UI value → analytics enum. */
export function mapQuickChatDockPosition(position: QuickChatDockPosition | null | undefined): string | undefined {
  switch (position) {
    case "bottom-left":
      return CodexQuickChatDockPosition.CODEX_QUICK_CHAT_DOCK_POSITION_BOTTOM_LEFT;
    case "bottom-right":
      return CodexQuickChatDockPosition.CODEX_QUICK_CHAT_DOCK_POSITION_BOTTOM_RIGHT;
    case null:
      return CodexQuickChatDockPosition.CODEX_QUICK_CHAT_DOCK_POSITION_CENTER;
    default:
      return undefined;
  }
}

type LifecyclePayload = {
  action: string;
  dockPosition?: QuickChatDockPosition | null;
  fileCount?: number;
  hadExistingSession?: boolean;
  hasConversation?: boolean;
  selectedTextAttachmentCount?: number;
  source?: string;
  surface?: string;
};

/** Bundle `bZ` / export `qx` — emit quick-chat lifecycle analytics. */
export function emitQuickChatLifecycle(scope: ScopeLike, payload: LifecyclePayload): void {
  const d = requireDeps();
  const event = d.analyticsEventName ?? "codex_quick_chat_lifecycle";
  d.emitAnalytics?.(scope, event, {
    action: payload.action,
    dockPosition: mapQuickChatDockPosition(payload.dockPosition ?? null),
    fileCount: payload.fileCount,
    hadExistingSession: payload.hadExistingSession,
    hasConversation: payload.hasConversation,
    selectedTextAttachmentCount: payload.selectedTextAttachmentCount,
    source:
      payload.source ??
      CodexQuickChatSource.CODEX_QUICK_CHAT_SOURCE_UNSPECIFIED,
    surface: payload.surface,
  });
}

/** Bundle `ams` / export `Vx` — set dock position + emit DOCK_CHANGED. */
export function setQuickChatDockPosition(
  scope: ScopeLike,
  position: QuickChatDockPosition,
  extra: Record<string, unknown> = {},
): void {
  const d = requireDeps();
  const prev = scope.get(d.dockPositionAtom);
  scope.set(d.dockPositionAtom, position);
  if (prev !== position) {
    emitQuickChatLifecycle(scope, {
      action:
        CodexQuickChatLifecycleAction.CODEX_QUICK_CHAT_LIFECYCLE_ACTION_DOCK_CHANGED,
      dockPosition: position,
      hasConversation: scope.get(d.surfaceAtom)?.hasConversation,
      source:
        (extra.source as string | undefined) ??
        CodexQuickChatSource.CODEX_QUICK_CHAT_SOURCE_DRAG,
      ...extra,
    });
  }
}

/** Bundle `oms` / export `Ux` — set window size + emit RESIZED. */
export function setQuickChatSize(
  scope: ScopeLike,
  size: QuickChatWindowSize,
  extra: Record<string, unknown> = {},
): void {
  const d = requireDeps();
  const prev = scope.get(d.sizeAtom) as QuickChatWindowSize | null;
  scope.set(d.sizeAtom, size);
  if (
    prev == null ||
    prev.height !== size.height ||
    prev.width !== size.width
  ) {
    emitQuickChatLifecycle(scope, {
      action:
        CodexQuickChatLifecycleAction.CODEX_QUICK_CHAT_LIFECYCLE_ACTION_RESIZED,
      dockPosition: scope.get(d.dockPositionAtom),
      hasConversation: scope.get(d.surfaceAtom)?.hasConversation,
      source:
        (extra.source as string | undefined) ??
        CodexQuickChatSource.CODEX_QUICK_CHAT_SOURCE_RESIZE_HANDLE,
      ...extra,
    });
  }
}

/** Bundle `ims` / export `Hx` — attach project metadata to empty surface. */
export function attachQuickChatProject(scope: ScopeLike, projectId: string | null, projectName: string | null): void {
  const d = requireDeps();
  const session = scope.get(d.surfaceAtom);
  if (session == null || session.hasConversation) return;
  scope.set(d.surfaceAtom, { ...session, projectId, projectName });
  scope.set(d.surfaceCollapsedAtom, false);
}

/** Bundle `rms` / export `Nx` — mark surface conversation as started. */
export function markQuickChatConversationStarted(
  scope: ScopeLike,
  conversationId: string,
  extra: Record<string, unknown> = {},
): void {
  const d = requireDeps();
  if (!d.isSurfaceHostAvailable(scope)) return;
  const session = scope.get(d.surfaceAtom);
  if (session?.conversationId !== conversationId || session.hasConversation) {
    return;
  }
  scope.set(d.surfaceAtom, { ...session, hasConversation: true });
  scope.set(d.surfaceCollapsedAtom, false);
  scope.set(d.historyTabAtom, "recent");
  emitQuickChatLifecycle(scope, {
    action:
      CodexQuickChatLifecycleAction.CODEX_QUICK_CHAT_LIFECYCLE_ACTION_CONVERSATION_STARTED,
    dockPosition: scope.get(d.dockPositionAtom),
    hasConversation: true,
    source:
      (extra.source as string | undefined) ??
      CodexQuickChatSource.CODEX_QUICK_CHAT_SOURCE_COMPOSER,
    ...extra,
  });
}

/** Bundle `Zps` / export `Wx` — open floating/window surface session. */
export function openQuickChatSurface(
  scope: ScopeLike,
  options: {
    projectId?: string | null;
    projectName?: string | null;
    [key: string]: unknown;
  } = {},
): void {
  const d = requireDeps();
  if (!d.isSurfaceHostAvailable(scope)) return;
  const { projectId = null, projectName = null, ...rest } = options;
  const hadExistingSession = scope.get(d.surfaceAtom) != null;
  const contextSourceConversationId =
    d.resolveContextSourceConversationId?.(scope) ?? null;
  scope.set(d.surfaceAtom, {
    contextSourceConversationId,
    conversationId: null,
    hasConversation: false,
    projectId,
    projectName,
    title: null,
    ...rest,
  });
  scope.set(d.surfaceCollapsedAtom, false);
  d.ensureSurfaceVisible(scope, false);
  emitQuickChatLifecycle(scope, {
    action:
      CodexQuickChatLifecycleAction.CODEX_QUICK_CHAT_LIFECYCLE_ACTION_OPENED,
    dockPosition: scope.get(d.dockPositionAtom),
    hadExistingSession,
    hasConversation: false,
    source:
      (rest.source as string | undefined) ??
      CodexQuickChatSource.CODEX_QUICK_CHAT_SOURCE_COMMAND,
  });
}

/**
 * Bundle `Xps` / export `Kx` (via Yps init) — open surface, or focus window
 * when already in dedicated-window mode (`yms`).
 */
export function openOrFocusQuickChat(
  scope: ScopeLike,
  options: Record<string, unknown> = {},
): void {
  const d = requireDeps();
  if (scope.get(d.windowModeAtom)) {
    // Window-mode focus path (`sms`) — host binds focus behavior via deps.
    d.ensureSurfaceVisible(scope, false);
    return;
  }
  openQuickChatSurface(scope, options);
}

export function ensureOpenOrFocusQuickChatInit(): void {}

/**
 * Bundle `Qps` / export `Ax` — open quick-chat from a background/subagent
 * conversation reference.
 */
export function openQuickChatFromSourceConversation(scope: ScopeLike, sourceConversationId: unknown): unknown {
  const d = requireDeps();
  return d.openBackgroundSubagent?.(scope, {
    isBackgroundSubagentsEnabled:
      d.isBackgroundSubagentsEnabled?.(scope, "1221508807") ?? false,
    sourceConversationId,
  });
}

export function ensureQuickChatSurfaceHelpersInit(): void {}
