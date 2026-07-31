// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// npm-shim: mapbox-gl CSP runtime (replaces the drained bundled mapbox body).
// Flat boundary facade — third-party mapbox-gl re-export for ChatGPT map widgets.

import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp.js";
import { rolldownRuntimeN } from "../runtime/rolldown-runtime";

/** Stock mapbox-gl CSP build (was bundled chatgptMapboxGlRuntime). */
export const chatgptMapboxGlRuntime = mapboxgl;
export default mapboxgl;

/** Worker URL for the CSP build. */
export let chatgptMapboxGlWorkerUrl: string = "";

export const ensureChatgptMapboxGlWorkerUrlInit = rolldownRuntimeN(() => {
  chatgptMapboxGlWorkerUrl = new URL(
    "mapbox-gl/dist/mapbox-gl-csp-worker.js",
    import.meta.url,
  ).href;
});

/** Residual empty peer init previously emitted next to the bundled runtime. */
export const _v = rolldownRuntimeN(() => {});
export const ensureChatgptMapboxGlStubInit = rolldownRuntimeN(() => {});
