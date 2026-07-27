// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `_t` — pure helper.

/** Set a DOM attribute, or remove for null/undefined/function/symbol/boolean. */
export function setAttributeOrRemove(element: Element, name: string, value: unknown): void {
  if (value === null) element.removeAttribute(name);
  else {
    switch (typeof value) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        element.removeAttribute(name);
        return;
    }
    element.setAttribute(name, "" + value);
  }
}
