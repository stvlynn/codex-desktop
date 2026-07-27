// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — real body via extractFn(internal `roc`) / export `Tp`.
// Importing-status atom binds via setImportingStatusAtom.

export type ImportingStatusStore = {
  set: (atom: unknown, value: unknown) => void;
};

let importingStatusAtom: unknown = null;

/** Wire the importing-status jotai atom (bundle `aoc`) without inventing it. */
export function setImportingStatusAtom(atom: unknown): void {
  importingStatusAtom = atom;
}

/**
 * Bundle export `Tp` / internal `roc`.
 * Run an async task while projecting importing → success/error status.
 */
export async function runImportingStatusTask(
  store: ImportingStatusStore,
  task: () => Promise<unknown>,
): Promise<unknown> {
  if (importingStatusAtom == null) {
    throw new Error("Importing status atom is not configured");
  }
  store.set(importingStatusAtom, {
    status: "importing",
    startedAtMs: Date.now(),
  });
  try {
    const result = await task();
    store.set(importingStatusAtom, {
      status: "success",
      completedAtMs: Date.now(),
    });
    return result;
  } catch (error) {
    store.set(importingStatusAtom, {
      status: "error",
      completedAtMs: Date.now(),
    });
    throw error;
  }
}
