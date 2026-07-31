// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex classNames helper (bundle chartWidgetStoresV).

type ClassDictionary = Record<string, unknown>;
type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassDictionary
  | ClassValue[];

function flattenClassValue(value: ClassValue): string {
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }
  if (!value || typeof value !== "object") {
    return "";
  }
  if (Array.isArray(value)) {
    let out = "";
    for (const item of value) {
      const next = flattenClassValue(item);
      if (!next) continue;
      out = out ? `${out} ${next}` : next;
    }
    return out;
  }
  let out = "";
  for (const key of Object.keys(value)) {
    if (!value[key]) continue;
    out = out ? `${out} ${key}` : key;
  }
  return out;
}

/**
 * Join class name fragments (string / number / falsy / object map / nested arrays).
 * Bundle export `chartWidgetStoresV`.
 */
export function classNames(...values: ClassValue[]): string {
  let out = "";
  for (const value of values) {
    const next = flattenClassValue(value);
    if (!next) continue;
    out = out ? `${out} ${next}` : next;
  }
  return out;
}

/** Compat alias matching boundaries/chart-widget-stores export name. */
export { classNames as chartWidgetStoresV };
