// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `lti` / export `SG` — extractFn(lti/cti); companions hti/gti atoms.

type StoreSet = {
  set: (atom: unknown, value: unknown) => void;
};

let sidebarSelectionAtom: unknown = null;
let sidebarSelectionMirrorAtom: unknown = null;

/** Wire selection atoms closed over by bundle `lti` / `cti`. */
export function bindSidebarSelectionAtoms(args: {
  selectionAtom: unknown;
  mirrorAtom: unknown;
}): void {
  sidebarSelectionAtom = args.selectionAtom;
  sidebarSelectionMirrorAtom = args.mirrorAtom;
}

/** Bundle `lti` / export `SG` — set sidebar selection. */
export function setSidebarSelection(store: StoreSet, value: unknown): void {
  store.set(sidebarSelectionAtom, value);
}

/** Bundle `cti` / export `bG` — set selection + mirror. */
export function setSidebarSelectionWithMirror(store: StoreSet, value: unknown): void {
  setSidebarSelection(store, value);
  store.set(sidebarSelectionMirrorAtom, value);
}
