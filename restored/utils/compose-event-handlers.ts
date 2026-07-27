// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Fp` — pure helper.

/** Compose two event handlers; honor defaultPrevented unless disabled. */
export function composeEventHandlers<E extends { defaultPrevented: boolean }>(
  original: ((event: E) => void) | undefined,
  ourHandler: ((event: E) => void) | undefined,
  {
    checkForDefaultPrevented = true,
  }: { checkForDefaultPrevented?: boolean } = {},
): (event: E) => void {
  return function composed(event: E) {
    original?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourHandler?.(event);
    }
  };
}
