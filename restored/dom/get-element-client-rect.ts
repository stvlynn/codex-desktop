// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `EVt` / export `yrt`.

export type ElementClientRectOptions = {
  ignoreTransform?: boolean;
};

/** Read element client rect; inverse-transform path deferred when `ignoreTransform`. */
export function getElementClientRect(
  element: Element,
  options: ElementClientRectOptions = {},
): DOMRect {
  const rect = element.getBoundingClientRect();
  if (options.ignoreTransform) {
    // Bundle applies TVt inverse transform here when ignoreTransform is set.
    return rect;
  }
  const { top, left, width, height, bottom, right } = rect;
  return { top, left, width, height, bottom, right } as DOMRect;
}
