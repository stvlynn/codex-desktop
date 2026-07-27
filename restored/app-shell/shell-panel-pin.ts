// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `$ar`/`xar` — derived pin state for shell / conversation panel layout.

/** Bundle `bar` shape. */
export type ShellPanelPinState = {
  isPinned: boolean;
  resetKey: string | null;
};

/** Pin key accepted by the derived atom family (bundle `$ar`). */
export type ShellPanelPinKey = boolean | { resetKey: string };

/**
 * Bundle `xar` / export `y0` — whether pin state should stick across a key change.
 */
export function shouldKeepPanelPinned(pinState: ShellPanelPinState, pinKey: ShellPanelPinKey): boolean {
  return (
    pinState.isPinned ||
    (typeof pinKey !== "boolean" && pinState.resetKey !== pinKey.resetKey)
  );
}

/**
 * Bundle `bar` / export `_0` — build pin state for a key + pinned flag.
 */
export function createShellPanelPinState(pinKey: ShellPanelPinKey, isPinned: boolean): ShellPanelPinState {
  return {
    isPinned,
    resetKey: typeof pinKey === "boolean" ? null : pinKey.resetKey,
  };
}

/**
 * Bundle `$ar` / export `C0` — bindable derived atom family token.
 * Host binds the real AppScope family before runtime use.
 */
export let shellPanelPinnedDerivedAtom: unknown = Symbol.for(
  "codex.app-shell.unbound.shellPanelPinnedDerived",
);

export function bindShellPanelPinnedDerivedAtom(atom: unknown): void {
  shellPanelPinnedDerivedAtom = atom;
}
