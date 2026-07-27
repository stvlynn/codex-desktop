// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `tms` / export `Px` — open/activate quick-chat surface for a conversation.

type ScopeLike = {
  get: (atom: unknown) => any;
  set: (atom: unknown, value: unknown) => void;
};

type ActivateDeps = {
  /** Bundle `gV` — surface host available? */
  isSurfaceHostAvailable: (scope: ScopeLike) => boolean;
  /** Bundle `CZ` — active quick-chat surface atom. */
  surfaceAtom: unknown;
  /** Bundle `bms` — surface collapsed flag. */
  surfaceCollapsedAtom: unknown;
  /** Bundle `cms` — ensure surface visible. */
  ensureSurfaceVisible: (scope: ScopeLike, visible: boolean) => void;
  /** Bundle `SZ` — dock position atom. */
  dockPositionAtom: unknown;
  /** Bundle `bZ` — lifecycle telemetry. */
  emitLifecycle: (scope: ScopeLike, payload: Record<string, unknown>) => void;
  openedAction: string;
};

let deps: ActivateDeps | null = null;

export function setActivateConversationSurfaceDeps(next: ActivateDeps): void {
  deps = next;
}

/** Bundle `tms` / export `Px`. */
export function activateConversationSurface(
  scope: ScopeLike,
  conversationId: string,
  title: string | null,
  extra: Record<string, unknown> = {},
): void {
  if (deps == null) {
    throw new Error(
      "activateConversationSurface deps have not been configured",
    );
  }
  if (!deps.isSurfaceHostAvailable(scope)) return;
  const hadExistingSession = scope.get(deps.surfaceAtom) != null;
  scope.set(deps.surfaceAtom, {
    contextSourceConversationId: null,
    conversationId,
    hasConversation: true,
    initialScrollMode: "follow",
    selectedTextSourceConversationId: null,
    projectId: null,
    projectName: null,
    title,
  });
  scope.set(deps.surfaceCollapsedAtom, false);
  deps.ensureSurfaceVisible(scope, true);
  deps.emitLifecycle(scope, {
    action: deps.openedAction,
    dockPosition: scope.get(deps.dockPositionAtom),
    hadExistingSession,
    hasConversation: true,
    ...extra,
  });
}
