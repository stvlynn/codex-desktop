// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `y$r` / export `IJ` — extractFn(y$r/v$r); companion S$r atom.

type StoreSet = {
  set: (atom: unknown, turnId: unknown, highlighted: boolean) => void;
};

let taskTurnHighlightAtom: unknown = null;

/** Wire the task-turn highlight atom closed over by bundle `y$r` / `v$r`. */
export function bindTaskTurnHighlightAtom(atom: unknown): void {
  taskTurnHighlightAtom = atom;
}

/** Bundle `y$r` / export `IJ` — clear highlight for a turn. */
export function clearTaskTurnHighlight(store: StoreSet, turnId: unknown): void {
  store.set(taskTurnHighlightAtom, turnId, false);
}

/** Bundle `v$r` / export `zJ` — set highlight for a turn. */
export function setTaskTurnHighlight(store: StoreSet, turnId: unknown): void {
  store.set(taskTurnHighlightAtom, turnId, true);
}
