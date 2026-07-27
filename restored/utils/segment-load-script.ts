// Restored from ref/webview/assets/load-script-Cltl04TI.js
// Segment analytics script loader: CDN discovery, inject/remove, and window globals.

import { esmInit } from "../runtime/rolldown-runtime";
const DEFAULT_SEGMENT_CDN = "https://cdn.segment.com";
const SEGMENT_ANALYTICS_SRC_RE =
  /(https:\/\/.*)\/analytics\.js\/v1\/(?:.*?)\/(?:platform|analytics.*)?/;
type AnalyticsGlobal = {
  _cdn?: string;
  [key: string]: unknown;
};
let analyticsGlobalKey = "analytics";
let overrideCdn: string | undefined;
function isBrowser(): boolean {
  return typeof window !== "undefined";
}
function isServer(): boolean {
  return !isBrowser();
}
function getAnalyticsGlobal(): AnalyticsGlobal | undefined {
  return (window as unknown as Record<string, AnalyticsGlobal | undefined>)[
    analyticsGlobalKey
  ];
}
function setAnalyticsGlobalKey(key: string): void {
  analyticsGlobalKey = key;
}
function setAnalyticsGlobal(value: AnalyticsGlobal): void {
  (window as unknown as Record<string, AnalyticsGlobal>)[analyticsGlobalKey] =
    value;
}
const initAnalyticsGlobalKey = esmInit(() => {
  analyticsGlobalKey = "analytics";
});
const initLoadScriptEmpty = esmInit(() => {});
function discoverCdnFromScriptTags(): string | undefined {
  let discovered: string | undefined;
  Array.prototype.slice
    .call(document.querySelectorAll("script"))
    .forEach((script: HTMLScriptElement) => {
      const src = script.getAttribute("src") ?? "";
      const match = SEGMENT_ANALYTICS_SRC_RE.exec(src);
      if (match?.[1]) discovered = match[1];
    });
  return discovered;
}
function getConfiguredCdn(): string | undefined {
  return overrideCdn ?? getAnalyticsGlobal()?._cdn;
}
function setSegmentCdn(cdn: string): void {
  const analytics = getAnalyticsGlobal();
  if (analytics) analytics._cdn = cdn;
  overrideCdn = cdn;
}
function getSegmentCdn(): string {
  return (
    getConfiguredCdn() || discoverCdnFromScriptTags() || DEFAULT_SEGMENT_CDN
  );
}
function getNextIntegrationsBaseUrl(): string {
  return `${getSegmentCdn()}/next-integrations`;
}
const initSegmentCdnHelpers = esmInit(() => {
  initAnalyticsGlobalKey();
});
function findScriptBySrc(src: string): HTMLScriptElement | undefined {
  return Array.prototype.slice
    .call(window.document.querySelectorAll("script"))
    .find((script: HTMLScriptElement) => script.src === src);
}
function loadScript(
  src: string,
  attributes?: Record<string, string>,
): Promise<HTMLScriptElement> {
  const existing = findScriptBySrc(src);
  if (existing !== undefined) {
    const status = existing.getAttribute("status");
    if (status === "loaded") return Promise.resolve(existing);
    if (status === "loading") {
      return new Promise((resolve, reject) => {
        existing.addEventListener("load", () => resolve(existing));
        existing.addEventListener("error", (event) => reject(event));
      });
    }
  }
  return new Promise((resolve, reject) => {
    const script = window.document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    script.async = true;
    script.setAttribute("status", "loading");
    for (const [name, value] of Object.entries(attributes ?? {})) {
      script.setAttribute(name, value);
    }
    script.onload = () => {
      script.onerror = script.onload = null;
      script.setAttribute("status", "loaded");
      resolve(script);
    };
    script.onerror = () => {
      script.onerror = script.onload = null;
      script.setAttribute("status", "error");
      reject(Error(`Failed to load ${src}`));
    };
    const firstScript = window.document.querySelector("script");
    if (firstScript) {
      firstScript.parentElement?.insertBefore(script, firstScript);
    } else {
      window.document.head.appendChild(script);
    }
  });
}
function unloadScript(src: string): Promise<void> {
  const existing = findScriptBySrc(src);
  if (existing !== undefined) existing.remove();
  return Promise.resolve();
}
const initLoadScriptTail = esmInit(() => {});

// Export order matches chunk letters: a c d f i l m n o p r s t u
export {
  getNextIntegrationsBaseUrl,
  getAnalyticsGlobal,
  setAnalyticsGlobalKey,
  initLoadScriptEmpty,
  getSegmentCdn,
  initAnalyticsGlobalKey,
  isServer,
  loadScript,
  initSegmentCdnHelpers,
  isBrowser,
  unloadScript,
  setSegmentCdn,
  initLoadScriptTail,
  setAnalyticsGlobal,
};
