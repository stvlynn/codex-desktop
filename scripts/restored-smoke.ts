/**
 * Smoke-load restored modules under Bun (no Electron / DOM).
 *
 * Used by `make dev` as the closest runnable path from restored/ sources.
 * Full Electron boot from restored/ is not wired yet — this only validates
 * that representative modules import and execute without a browser host.
 */

import { APP_VERSION } from "../restored/app/app-version.ts";
import {
  ensureViteModulepreloadRuntime,
  vitePreload,
} from "../restored/runtime/vite-preload.ts";
import { areStringArraysEqual } from "../restored/utils/are-string-arrays-equal.ts";
import { runAppMain, ensureAppMainInit } from "../restored/desktop/app-main.ts";

ensureViteModulepreloadRuntime();
ensureAppMainInit();

const preloadOk = await vitePreload(async () => "preload-ok");
if (preloadOk !== "preload-ok") {
  throw new Error(`vitePreload returned unexpected value: ${preloadOk}`);
}

await runAppMain(); // unbound boot is a documented no-op

if (typeof APP_VERSION !== "string" || APP_VERSION.length === 0) {
  throw new Error(`APP_VERSION missing or empty: ${String(APP_VERSION)}`);
}

if (!areStringArraysEqual(["a", "b"], ["a", "b"])) {
  throw new Error("areStringArraysEqual failed for equal arrays");
}
if (areStringArraysEqual(["a"], ["b"])) {
  throw new Error("areStringArraysEqual failed for unequal arrays");
}

console.log(`restored smoke ok (APP_VERSION=${APP_VERSION})`);
