// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Wpn` / `GHn` companions for exports `b7` / `N5`.

export type WindowLocationRoute = {
  pathname: string;
  initialRoute: string | null;
};

/** Read pathname + `initialRoute` query from `window.location`. */
export function readWindowLocationRoute(): WindowLocationRoute {
  if (typeof window === "undefined") {
    return { pathname: "", initialRoute: null };
  }
  const url = new URL(window.location.href);
  return {
    pathname: url.pathname,
    initialRoute: url.searchParams.get("initialRoute"),
  };
}
