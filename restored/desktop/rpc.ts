// Restored from ref/webview/assets/rpc-wEQ5kv6D.js
// Thin host bootstrap re-exports. Bundle aliases: Hut/Uut/Vut/Wut.
// Stage 3: Vut/Wut bindable; Hut→appServices; Uut→ensureDynamicScriptLoadInit.

import { ensureDynamicScriptLoadInit } from "../runtime/ensure-dynamic-script-load-init";
import {
  appServices,
  setDesktopServices,
  type DesktopServices,
} from "./desktop-services";

ensureDynamicScriptLoadInit();

/** Bundle `kQe` / export `Vut` — host handle resolved by initializeAppHostServices. */
export type AppHost = {
  services: Promise<DesktopServices> | DesktopServices;
};

/** Live binding matching bundle `kQe`. */
export let appHost: AppHost | undefined;

let initializeImpl: (() => void | Promise<void>) | null = null;

/** Wire a real app-host handle (Electron bootstrap). */
export function bindAppHost(next: AppHost | undefined): void {
  appHost = next;
}

/** Wire the real initializeAppHostServices body. */
export function bindInitializeAppHostServices(
  fn: (() => void | Promise<void>) | null,
): void {
  initializeImpl = fn;
}

/**
 * Bundle `OQe` / export `Wut`.
 * Default path awaits `appHost.services` and publishes via setDesktopServices.
 */
export async function initializeAppHostServices(): Promise<void> {
  if (initializeImpl != null) {
    await initializeImpl();
    return;
  }
  if (appHost == null) return;
  const resolved = await Promise.resolve(appHost.services);
  setDesktopServices(resolved);
}

/** Bundle `gp` / export `Hut` — desktop services proxy. */
export { appServices };
