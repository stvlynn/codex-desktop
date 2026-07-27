// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `c7l`) / export `yr`.

import type { ReactElement, ReactNode } from "react";

export type EmbeddedCheckoutPersonalButtonPeers = {
  useAccountIdentity: () => {
    authMethod: unknown;
    isLoading: boolean;
    userId: unknown;
  };
  useBillingPlanQuery: () => { data?: unknown };
  useLocation: () => { pathname: string; search: string };
  useStatsigClient: () => unknown;
  useIntl: () => { formatMessage: (...args: unknown[]) => unknown };
  readCheckoutGate: (client: unknown) => boolean;
  parseCheckoutReturn: (params: URLSearchParams) => {
    success: boolean;
    data?: { url: string };
  } | null;
  personalCheckoutPath: string;
  appOrigin: string;
  buildButton: (args: Record<string, unknown>) => ReactNode;
};

let peers: EmbeddedCheckoutPersonalButtonPeers | null = null;

/** Wire EmbeddedCheckoutPersonalButton peers once companions land. */
export function setEmbeddedCheckoutPersonalButtonPeers(next: EmbeddedCheckoutPersonalButtonPeers): void {
  peers = next;
}

/**
 * Bundle export `yr` / internal `c7l`.
 * Personal embedded-checkout button with return-url handling.
 */
export type EmbeddedCheckoutPersonalButtonProps = Record<string, unknown>;

export function EmbeddedCheckoutPersonalButton(
  _props: EmbeddedCheckoutPersonalButtonProps = {},
): ReactElement {
  if (peers == null) {
    throw new Error("EmbeddedCheckoutPersonalButton peers are not configured");
  }
  void _props;
  const { authMethod, isLoading, userId } = peers.useAccountIdentity();
  const { data } = peers.useBillingPlanQuery();
  const location = peers.useLocation();
  const statsigClient = peers.useStatsigClient();
  const intl = peers.useIntl();
  const gateEnabled = peers.readCheckoutGate(statsigClient);
  const parsed =
    location.pathname === "/checkout/web"
      ? peers.parseCheckoutReturn(new URLSearchParams(location.search))
      : null;
  const returnedOk =
    parsed?.success === true &&
    new URL(parsed.data!.url).pathname === peers.personalCheckoutPath;
  const returnUrl = returnedOk ? parsed!.data!.url : null;
  const fallback = new URL(peers.personalCheckoutPath, peers.appOrigin);
  fallback.searchParams.set("source", "codex-embedded-checkout");
  return peers.buildButton({
    authMethod,
    isLoading,
    userId,
    plan: data,
    gateEnabled,
    returnUrl,
    fallbackUrl: fallback.toString(),
    intl,
  }) as ReactElement;
}
