// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — real body via extractFn(internal `ijs`) / export `vv`.

export type ComposerUserInputStateApi = {
  getState: (state: unknown) => { active?: boolean } | null | undefined;
};

let composerUserInputApi: ComposerUserInputStateApi | null = null;

/** Wire composer user-input state reader (bundle `aU`). */
export function bindComposerUserInputStateApi(
  next: ComposerUserInputStateApi,
): void {
  composerUserInputApi = next;
}

/**
 * Bundle export `vv` / internal `ijs`.
 * True when the composer user-input slice reports active.
 */
export function isUserInputActiveInState(state: unknown): boolean {
  return composerUserInputApi?.getState(state)?.active === true;
}
