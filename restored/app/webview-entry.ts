// Restored from ref/webview/assets/index-kwAErobc.js
// Stage 3 thin entry shell: modulepreload → vite preload helpers → rpc + app-main.
// Does NOT claim app-initial-C-fROkKo body (Gmt/Wmt already extracted to vite-preload).

import { installModulepreloadPolyfill } from "../polyfills/modulepreload-polyfill";
import { esmInit } from "../runtime/rolldown-runtime";
import {
  ensureViteModulepreloadRuntime,
  vitePreload,
} from "../runtime/vite-preload";

const ensureEmptyInit = esmInit(() => {});

const bootApp = esmInit(async () => {
  ensureViteModulepreloadRuntime();
  await vitePreload(async () => {
    await import("../desktop/rpc");
  });
  await vitePreload(async () => {
    const { runAppMain } = await import("../desktop/app-main");
    await runAppMain();
  });
});

/**
 * Webview HTML entry side-effect bootstrap.
 * Mirrors the bundled `index-kwAErobc` top-level await chain.
 */
export async function bootWebviewEntry(): Promise<void> {
  installModulepreloadPolyfill();
  ensureEmptyInit();
  await bootApp();
}

await bootWebviewEntry();
