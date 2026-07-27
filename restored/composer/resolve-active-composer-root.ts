// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `zVr` / export `gZ` (registry `Hj`).

export type ComposerRootState = {
  composerId: string | null;
  appendPromptText?: (text: string) => void;
};

const composerRegistry = new Map<Element, ComposerRootState>();

/** Register composer state for a root element (bundle `Hj`). */
export function registerComposerRoot(element: Element, state: ComposerRootState): void {
  composerRegistry.set(element, state);
}

function composerIdFromRoot(root: Element): string | null {
  for (const [element, state] of composerRegistry) {
    if (element.isConnected && root.contains(element)) return state.composerId;
  }
  return root.getAttribute("data-codex-composer-id");
}

export type ActiveComposerRoot = {
  composerId: string | null;
  root: Element;
};

/** Locate the focused `[data-codex-composer-root]` and its composer id. */
export function resolveActiveComposerRoot(): ActiveComposerRoot | null {
  if (typeof document === "undefined") return null;
  const active = document.activeElement?.closest(
    "[data-codex-composer-root]",
  ) as Element | null;
  if (active != null) {
    return { composerId: composerIdFromRoot(active), root: active };
  }
  const focused = document.activeElement;
  const root =
    (focused?.closest?.("[data-codex-composer-root]") as Element | null) ??
    null;
  if (root == null) return null;
  const state = focused == null ? null : composerRegistry.get(focused);
  return {
    composerId:
      state?.composerId ??
      (focused == null
        ? composerIdFromRoot(root)
        : (composerRegistry.get(root)?.composerId ?? composerIdFromRoot(root))),
    root,
  };
}
