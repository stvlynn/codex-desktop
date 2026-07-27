// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `uL` / export `yU` — system or fixed color-scheme subscription.

import { useSyncExternalStore } from "react";

type Scheme = "light" | "dark" | string;

let subscribeSystem: (onStoreChange: () => void) => () => void = () => () => {};
let getSystemSnapshot: () => Scheme = () => "light";
let getServerSnapshot: () => Scheme = () => "light";

export function setPreferredColorSchemeDeps(args: {
  subscribeSystem: (onStoreChange: () => void) => () => void;
  getSystemSnapshot: () => Scheme;
  getServerSnapshot?: () => Scheme;
}): void {
  subscribeSystem = args.subscribeSystem;
  getSystemSnapshot = args.getSystemSnapshot;
  if (args.getServerSnapshot) getServerSnapshot = args.getServerSnapshot;
}

export function usePreferredColorScheme(preference: Scheme): Scheme {
  const getSnapshot =
    preference === "system" ? getSystemSnapshot : () => preference;
  const subscribe = preference === "system" ? subscribeSystem : () => () => {};
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
