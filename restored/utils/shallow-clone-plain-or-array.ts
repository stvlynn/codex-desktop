// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `cs` — pure helper.

import { isPlainObjectPrototype } from "./is-plain-object-prototype";

/** Shallow-clone plain objects / arrays; otherwise return the value. */
export function shallowClonePlainOrArray<T>(value: T): T {
  if (isPlainObjectPrototype(value)) return { ...(value as object) } as T;
  if (Array.isArray(value)) return [...value] as T;
  return value;
}
