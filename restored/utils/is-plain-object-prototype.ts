// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `gxa` — plain-object check including constructor.prototype.

import { isPlainObject } from "./is-plain-object";

export function isPlainObjectPrototype(value: unknown): boolean {
  if (!isPlainObject(value)) return false;
  const ctor = (value as { constructor?: unknown }).constructor;
  if (ctor === undefined || typeof ctor !== "function") return true;
  const proto = (ctor as { prototype?: unknown }).prototype;
  return (
    isPlainObject(proto) &&
    Object.prototype.hasOwnProperty.call(proto, "isPrototypeOf")
  );
}
