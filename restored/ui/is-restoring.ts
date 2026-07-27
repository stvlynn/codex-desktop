// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `Dt`) / export `Evt`.

export type IsRestoringPeers = {
  toAttributeValue: (value: unknown) => string;
  setDefaultValueAttribute: (
    element: HTMLInputElement,
    type: unknown,
    value: string,
  ) => void;
};

let peers: IsRestoringPeers | null = null;

/** Wire isRestoring peers once companions land. */
export function setIsRestoringPeers(next: IsRestoringPeers): void {
  peers = next;
}

/**
 * Bundle export `Evt` / internal `Dt`.
 * Sync DOM input name/type/value/checked attributes from props.
 */
export function isRestoring(
  element: HTMLInputElement & {
    name: string;
    type: unknown;
    value: string;
    defaultChecked: boolean;
    checked: boolean;
  },
  value: unknown,
  defaultValue: unknown,
  defaultValueAttr: unknown,
  checked: unknown,
  defaultChecked: unknown,
  type: unknown,
  name: unknown,
): void {
  if (peers == null) {
    throw new Error("IsRestoring peers are not configured");
  }
  element.name = "";
  if (
    type != null &&
    typeof type !== "function" &&
    typeof type !== "symbol" &&
    typeof type !== "boolean"
  ) {
    element.type = type;
  } else {
    element.removeAttribute("type");
  }
  if (value == null) {
    if (type === "submit" || type === "reset") element.removeAttribute("value");
  } else if (type === "number") {
    if ((value === 0 && element.value === "") || element.value != value) {
      element.value = "" + peers.toAttributeValue(value);
    }
  } else if (element.value !== "" + peers.toAttributeValue(value)) {
    element.value = "" + peers.toAttributeValue(value);
  }
  if (value == null) {
    if (defaultValue == null) {
      if (defaultValueAttr != null) element.removeAttribute("value");
    } else {
      peers.setDefaultValueAttribute(
        element,
        type,
        peers.toAttributeValue(defaultValue),
      );
    }
  } else {
    peers.setDefaultValueAttribute(
      element,
      type,
      peers.toAttributeValue(value),
    );
  }
  if (checked == null && defaultChecked != null) {
    element.defaultChecked = !!defaultChecked;
  }
  if (checked != null) {
    element.checked =
      !!checked && typeof checked !== "function" && typeof checked !== "symbol";
  }
  if (
    name != null &&
    typeof name !== "function" &&
    typeof name !== "symbol" &&
    typeof name !== "boolean"
  ) {
    element.name = "" + peers.toAttributeValue(name);
  } else {
    element.removeAttribute("name");
  }
}
