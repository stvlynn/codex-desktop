// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `oMe`) / export `Nft`.

import type { ReactElement, ReactNode } from "react";

export type AppQueryClientProviderProps = {
  children?: ReactNode;
};

export type AppQueryClientProviderPeers = {
  useAppQueryClient: () => unknown;
  QueryClientProvider: (props: {
    queryClient: unknown;
    children?: ReactNode;
  }) => ReactNode;
};

let peers: AppQueryClientProviderPeers | null = null;

/** Wire query-client provider peers once companions land. */
export function setAppQueryClientProviderPeers(
  next: AppQueryClientProviderPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Nft` / internal `oMe`.
 * Provide the app QueryClient to children.
 */
export function AppQueryClientProvider(
  props: AppQueryClientProviderProps,
): ReactElement {
  if (peers == null) {
    throw new Error("AppQueryClientProvider peers are not configured");
  }
  const queryClient = peers.useAppQueryClient();
  return peers.QueryClientProvider({
    queryClient,
    children: props.children,
  }) as ReactElement;
}
