// Restored from ref/webview/assets/modulepreload-polyfill-DbHmo-SP.js
// Vite modulepreload polyfill: prefetch modulepreload links when unsupported.

type ModulepreloadFetchOptions = RequestInit & {
  integrity?: string;
};

type ModulepreloadLink = HTMLLinkElement & {
  /** Marks a link as already prefetched by this polyfill. */
  ep?: boolean;
};

function fetchOptionsForModulepreloadLink(
  link: HTMLLinkElement,
): ModulepreloadFetchOptions {
  const options: ModulepreloadFetchOptions = {};
  if (link.integrity) options.integrity = link.integrity;
  if (link.referrerPolicy) options.referrerPolicy = link.referrerPolicy;
  if (link.crossOrigin === "use-credentials") {
    options.credentials = "include";
  } else if (link.crossOrigin === "anonymous") {
    options.credentials = "omit";
  } else {
    options.credentials = "same-origin";
  }
  return options;
}

function prefetchModulepreloadLink(link: ModulepreloadLink): void {
  if (link.ep) return;
  link.ep = true;
  void fetch(link.href, fetchOptionsForModulepreloadLink(link));
}

/**
 * Install the modulepreload polyfill once. No-ops when `relList.supports`
 * already reports modulepreload support.
 */
export function installModulepreloadPolyfill(): void {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }

  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    prefetchModulepreloadLink(link as ModulepreloadLink);
  }

  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) {
        if (node instanceof HTMLLinkElement && node.rel === "modulepreload") {
          prefetchModulepreloadLink(node as ModulepreloadLink);
        }
      }
    }
  }).observe(document, { childList: true, subtree: true });
}
