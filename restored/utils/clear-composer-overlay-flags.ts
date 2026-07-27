// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `RPc` / export `vf` — extractFn(RPc); clears M2/zPc/N2/P2.

type StoreSet = { set: (atom: unknown, value: unknown) => void };

let flags: {
  m2: unknown;
  zPc: unknown;
  n2: unknown;
  p2: unknown;
} | null = null;

/** Wire overlay flag atoms closed over by bundle `RPc`. */
export function bindComposerOverlayFlagAtoms(next: {
  m2: unknown;
  zPc: unknown;
  n2: unknown;
  p2: unknown;
}): void {
  flags = next;
}

/** Bundle `RPc` / export `vf` — clear composer overlay flags. */
export function clearComposerOverlayFlags(store: StoreSet): void {
  if (flags == null) throw new Error("composer overlay flag atoms unbound");
  store.set(flags.m2, false);
  store.set(flags.zPc, null);
  store.set(flags.n2, false);
  store.set(flags.p2, false);
}
