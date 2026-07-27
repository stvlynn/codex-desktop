// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `aia` / export `IL` — default `"allow"` navigation policy context.

import { createContext } from "react";

export type NavigationAllowPolicy = "allow" | "deny" | string;

export const NavigationAllowContext =
  createContext<NavigationAllowPolicy>("allow");
