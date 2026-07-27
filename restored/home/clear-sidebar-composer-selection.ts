// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Nti` / export `cG` — extractFn(Nti/Mti); companions fti/mti/hN.

type StoreSet = { set: (atom: unknown, value: unknown) => void };
type StoreGetSet = {
  get: (atom: unknown) => unknown;
  set: (atom: unknown, value: unknown) => void;
};

let atoms: {
  hti: unknown;
  gti: unknown;
  bP: unknown;
  qM: unknown;
} | null = null;

let setComposerPrompt: ((store: StoreGetSet, value: string) => void) | null =
  null;

/** Wire selection-clear companions (hti/gti/bP/qM) + prompt writer `hN`. */
export function bindSidebarComposerSelectionClear(args: {
  hti: unknown;
  gti: unknown;
  bP: unknown;
  qM: unknown;
  setComposerPrompt: (store: StoreGetSet, value: string) => void;
}): void {
  atoms = {
    hti: args.hti,
    gti: args.gti,
    bP: args.bP,
    qM: args.qM,
  };
  setComposerPrompt = args.setComposerPrompt;
}

/** Bundle `fti` — clear sidebar selection pair. */
function clearSidebarSelectionPair(store: StoreSet): void {
  if (atoms == null) throw new Error("sidebar selection atoms unbound");
  store.set(atoms.hti, null);
  store.set(atoms.gti, null);
}

/** Bundle `Nti` / export `cG` — clear selection + composer draft flags. */
export function clearSidebarComposerSelection(store: StoreSet): void {
  if (atoms == null) throw new Error("sidebar selection atoms unbound");
  clearSidebarSelectionPair(store);
  store.set(atoms.bP, null);
  store.set(atoms.qM, false);
}

/** Bundle `Mti` / export `uG` — clear selection/flags and empty composer prompt. */
export function clearSidebarComposerSelectionAndPrompt(store: StoreGetSet): void {
  if (atoms == null || setComposerPrompt == null) {
    throw new Error("sidebar selection clear unbound");
  }
  clearSidebarComposerSelection(store);
  setComposerPrompt(store, "");
}
