// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `qBi` / export `KH` — set right-panel conversation domain (+ optional title).

type ScopeLike = {
  get: (atom: unknown) => unknown;
  set: (atom: unknown, value: unknown) => void;
};

type PanelConversationDeps = {
  /** Bundle `yVi` — current right-panel conversation domain atom. */
  panelDomainAtom: unknown;
  /** Bundle `SL` — optional panel title atom. */
  panelTitleAtom: unknown;
  /** Bundle `fVi` — read current panel title. */
  getPanelTitle: (scope: ScopeLike) => unknown;
  /** Bundle `uVi` — clear transient panel search/match state. */
  clearPanelTransientState: (scope: ScopeLike) => void;
  /** Bundle `cVi` — refresh panel after title change. */
  refreshPanelAfterTitleChange: (scope: ScopeLike) => void;
};

let deps: PanelConversationDeps | null = null;

export function setRightPanelConversationDeps(
  next: PanelConversationDeps,
): void {
  deps = next;
}

/** Bundle `qBi` / export `KH`. */
export function setRightPanelConversation(
  scope: ScopeLike,
  domain: unknown,
  title?: unknown,
): void {
  if (deps == null) {
    throw new Error("setRightPanelConversation deps have not been configured");
  }
  scope.set(deps.panelDomainAtom, domain);
  if (title != null && title !== deps.getPanelTitle(scope)) {
    deps.clearPanelTransientState(scope);
    scope.set(deps.panelTitleAtom, title);
    deps.refreshPanelAfterTitleChange(scope);
  }
}
