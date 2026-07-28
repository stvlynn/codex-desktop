// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `o7l` / export `xr` — checkout webview route gate + panel host.
// Thin chunk `checkout-webview-page-CKKZ0M0t` re-exports this binding.

import type { ReactElement, ReactNode } from "react";

export type CheckoutSearchParams = {
  toString(): string;
  get?(key: string): string | null;
};

export type CheckoutUrlParseResult =
  | { success: true; data: { url: string } }
  | { success: false; data?: undefined };

export type CheckoutWebviewPanelProps = {
  search: string;
};

export type CheckoutWebviewPageDeps = {
  /** Router search-params hook (bundle `IVn`). */
  useSearchParams: () => readonly [CheckoutSearchParams];
  /** Parse checkout `url` from search params (bundle `f7l`). */
  parseCheckoutSearchParams: (
    search: CheckoutSearchParams,
  ) => CheckoutUrlParseResult;
  /** True when the URL may be presented in the host webview (bundle `x7l`). */
  isAllowedCheckoutUrl: (url: URL) => boolean;
  /** Pathname that skips the panel (bundle `N7l`). */
  skipPanelPathname: string;
  /** Panel rendered when a checkout URL should load (bundle `d7l`). */
  CheckoutPanel: (props: CheckoutWebviewPanelProps) => ReactNode;
};

let deps: CheckoutWebviewPageDeps | null = null;

/** Wire checkout route helpers once router / panel companions land. */
export function setCheckoutWebviewPageDeps(
  next: CheckoutWebviewPageDeps,
): void {
  deps = next;
}

/**
 * Bundle export `xr` / internal `o7l`.
 * Returns `null` when the checkout URL is host-handled; otherwise renders the panel.
 */
export function CheckoutWebviewPage(): ReactElement | null {
  if (deps == null) {
    throw new Error("CheckoutWebviewPage deps are not configured");
  }

  const [searchParams] = deps.useSearchParams();
  const parsed = deps.parseCheckoutSearchParams(searchParams);
  if (parsed.success) {
    const url = new URL(parsed.data.url);
    if (
      deps.isAllowedCheckoutUrl(url) ||
      url.pathname === deps.skipPanelPathname
    ) {
      return null;
    }
  }

  return deps.CheckoutPanel({
    search: searchParams.toString(),
  }) as ReactElement;
}

/** Side-effect init retained for thin re-export chunk parity (bundle `Sr` / `X7l`). */
export function ensureCheckoutWebviewPageInit(): void {}
