// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `B4s` / export `yh`.

export type RouteSurface = "home" | "thread" | "remote_thread";

/** Classify a location pathname into a coarse UI surface. */
export function routeSurfaceFromPath(pathname: string): RouteSurface | null {
  return pathname === "/" ||
    pathname === "/index.html" ||
    pathname === "/extension/panel/new"
    ? "home"
    : pathname.startsWith("/local/")
      ? "thread"
      : pathname.startsWith("/remote/")
        ? "remote_thread"
        : null;
}
