// Restored from ref/webview/assets/local-conversation-page-Bf1KJPOR.js
// Local conversation page: route guard + pending-worktree activation wrapper.

import { Suspense, type ReactElement } from "react";

import { useAppScope } from "../../boundaries/app-scope-runtime";
import {
  Navigate,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import { PageLoadingState } from "../../ui/page-loading-state";
import { tryActivateConversationFromPendingWorktree } from "../../worktree/try-activate-conversation-from-pending-worktree";
import { LocalConversationRoute } from "./local-conversation-route";
import {
  decidePendingWorktreeActivation,
  executePendingWorktreeActivation,
} from "./pending-worktree-activation";
import {
  PendingWorktreeActivationProvider,
  ensureLocalConversationPageBridgesInit,
  localThreadRouteFallback,
  localThreadRouteScope,
  useLocalThreadRouteValue,
} from "./runtime-bridges";

ensureLocalConversationPageBridgesInit();

export type LocalConversationPageProps = {
  className?: string;
};

/**
 * Bundle export `dd` / public `LocalConversationPage`.
 */
export function LocalConversationPage(
  _props: LocalConversationPageProps = {},
): ReactElement {
  const routeScope = useAppScope(localThreadRouteScope);
  const navigate = useNavigate();
  const route = useLocalThreadRouteValue(
    (routeScope as { value?: typeof localThreadRouteFallback }) ??
      localThreadRouteFallback,
  );

  // Soft: `WI` / `P7` peers still throw — policy + pending flags stay soft.
  // Executor body is real: `x8` navigate-to-work + soft-caught `Fx` activate.
  const activateFromPendingWorktree = (
    conversationId: string,
    options?: unknown,
  ): boolean => {
    const decision = decidePendingWorktreeActivation({
      policyStatus: "allowed",
      isPendingWorktreeConversation: false,
    });
    return executePendingWorktreeActivation({
      decision,
      conversationId,
      navigate: (path) => {
        navigate(path);
      },
      tryActivate: (id, opts) => {
        try {
          return Boolean(
            tryActivateConversationFromPendingWorktree(routeScope, id, opts, {
              enabled: true,
            }),
          );
        } catch {
          return false;
        }
      },
      options,
    });
  };

  const isLocalThreadRoute =
    route.routeKind === "local-thread" ||
    route.routeKind === "client-local-thread";

  const body = isLocalThreadRoute ? (
    <Suspense fallback={<PageLoadingState debugName="LocalConversationPage" />}>
      <LocalConversationRoute
        clientThreadId={route.clientThreadId}
        conversationId={route.conversationId}
        routeKind={route.routeKind}
      />
    </Suspense>
  ) : (
    <Navigate to="/" />
  );

  return (
    <PendingWorktreeActivationProvider value={activateFromPendingWorktree}>
      {body}
    </PendingWorktreeActivationProvider>
  );
}
