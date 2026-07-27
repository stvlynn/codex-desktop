// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle helper `$` — clsx-style class name joiner used by Spinner / Button / BulletSeparator.

type ClassDictionary = Record<string, unknown>;
type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassDictionary
  | ClassValue[];

function toClassName(value: ClassValue): string {
  if (!value) return "";
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }
  if (Array.isArray(value)) {
    let out = "";
    for (const item of value) {
      const next = toClassName(item);
      if (next) {
        out = out ? `${out} ${next}` : next;
      }
    }
    return out;
  }
  if (typeof value === "object") {
    let out = "";
    for (const key of Object.keys(value)) {
      if (value[key]) {
        out = out ? `${out} ${key}` : key;
      }
    }
    return out;
  }
  return "";
}

/** Join truthy class name fragments (bundle `$`). */
export function cx(...values: ClassValue[]): string {
  let out = "";
  for (const value of values) {
    const next = toClassName(value);
    if (next) {
      out = out ? `${out} ${next}` : next;
    }
  }
  return out;
}
