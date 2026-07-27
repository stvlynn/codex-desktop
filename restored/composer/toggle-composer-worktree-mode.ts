// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Wjs` / export `mv` — pure helper via extractFn(Wjs).

export type ComposerSurfaceMode = "local" | "worktree" | (string & {});

/** Toggle composer mode between `worktree` and `local`. */
export function toggleComposerWorktreeMode(args: {
  composerMode: ComposerSurfaceMode;
  setComposerMode: (mode: ComposerSurfaceMode) => void;
}): void {
  const { composerMode, setComposerMode } = args;
  setComposerMode(composerMode === "worktree" ? "local" : "worktree");
}
