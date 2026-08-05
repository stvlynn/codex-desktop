// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `vt` — pure helper.

/** Set a namespaced DOM attribute, or remove for nullish/boolean/function/symbol. */
export function setAttributeNsOrRemove(
  element: Element,
  namespace: string | null,
  name: string,
  value: unknown,
): void {
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
    element.setAttributeNS(namespace, name, "" + value);
  }
}
