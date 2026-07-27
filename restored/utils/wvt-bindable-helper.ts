// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `Mt`) / export `wvt`.

export type WvtBindableHelperPeers = {
  isArrayLikeChildren: (value: unknown) => boolean;
  formatError: (code: number) => string;
  toDefaultValue: (value: unknown) => unknown;
  syncInputValueTracking: (element: unknown) => void;
};

let peers: WvtBindableHelperPeers | null = null;

/** Wire wvt bindable helper peers once companions land. */
export function setWvtBindableHelperPeers(next: WvtBindableHelperPeers): void {
  peers = next;
}

/**
 * Bundle export `wvt` / internal `Mt`.
 * Initialize a text input defaultValue / value tracking from props children.
 */
export function wvtBindableHelper(
  element: { defaultValue: unknown; textContent: unknown; value?: unknown },
  value: unknown,
  children: unknown,
  defaultValueProp: unknown,
): void {
  if (peers == null) {
    throw new Error("WvtBindableHelper peers are not configured");
  }
  let nextValue = value;
  let nextChildren = children;
  if (nextValue == null) {
    if (defaultValueProp != null) {
      if (nextChildren != null) throw Error(peers.formatError(92));
      if (peers.isArrayLikeChildren(defaultValueProp)) {
        const arr = defaultValueProp as unknown[];
        if (arr.length > 1) throw Error(peers.formatError(93));
        defaultValueProp = arr[0];
      }
      nextChildren = defaultValueProp;
    }
    nextChildren ??= "";
    nextValue = nextChildren;
  }
  const defaultValue = peers.toDefaultValue(nextValue);
  element.defaultValue = defaultValue;
  const textContent = element.textContent;
  if (
    textContent === defaultValue &&
    textContent !== "" &&
    textContent !== null
  ) {
    element.value = textContent;
  }
  peers.syncInputValueTracking(element);
}
