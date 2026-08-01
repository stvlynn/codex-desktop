// Restored from ref/webview/assets/local-conversation-page-Bf1KJPOR.js
// Local-thread route body: resolve conversation, error states, main layout.

import { useEffect, useMemo, useState, type ReactElement } from "react";

import { Navigate } from "../../boundaries/react-router-navigation";
import { useAppScopeValue } from "../../composer/composer-appscope-atoms";
import { isClientNewThreadId } from "../../conversation/client-new-thread-id";
import { localThreadConversationId } from "../../conversation/local-thread-conversation-id";
import {
  alignHadConversationProjectState,
  mergeHadConversationProjectState,
  type HadConversationProjectState,
} from "./had-conversation-project-state";
import { LocalConversationMainLayout } from "./local-main-layout";
import { resolveLocalThreadIdOrNull } from "./resolve-local-thread-id";
import {
  ConversationSearchSurface,
  LocalStreamRoleEffects,
  localConversationIdAtom,
  registerContextMenuAction,
  useOpenThreadInNewWindowBridge,
} from "./runtime-bridges";
import {
  PendingProjectlessLocalConversationPage,
  RedirectMissingLocalConversation,
  RemoteConnectionUnavailablePage,
  type PendingProjectlessThread,
} from "./route-states";

export type LocalConversationRouteProps = {
  clientThreadId?: string | null;
  conversationId?: string | null;
  routeKind: string;
};

/**
 * Bundle route resolver — picks pending / unavailable / missing / main layouts.
 */
export function LocalConversationRoute({
  clientThreadId,
  conversationId: routeConversationId,
  routeKind,
}: LocalConversationRouteProps): ReactElement {
  const atomConversationId = useAppScopeValue(
    localConversationIdAtom as never,
  ) as string | null;

  // L8 atom preferred; fall back to route `v8` / localThreadConversationId.
  const conversationId =
    atomConversationId ??
    localThreadConversationId({
      routeKind,
      conversationId: routeConversationId,
    });

  const { canOpenThreadInNewWindow, openThreadInNewWindow } =
    useOpenThreadInNewWindowBridge({ conversationId });

  const [hadState, setHadState] = useState<HadConversationProjectState>({
    conversationId,
    hadConversation: false,
    project: undefined,
  });

  const pendingClientThreadId =
    conversationId == null && isClientNewThreadId(clientThreadId)
      ? clientThreadId
      : null;

  // Peer-gated availability atoms — Stage-3 shells treat missing peers as ready.
  const hostAvailabilityStatus = "ready";
  const hasConversation = conversationId != null;
  const isHydratingConversation = false;
  const pendingProjectlessThread: PendingProjectlessThread | null =
    pendingClientThreadId == null
      ? null
      : {
          title: undefined,
          status: "creating",
        };

  const threadId = resolveLocalThreadIdOrNull(clientThreadId, conversationId);

  const alignedHad = useMemo(
    () => alignHadConversationProjectState(hadState, conversationId),
    [conversationId, hadState],
  );

  const resolvedHad = useMemo(() => {
    return mergeHadConversationProjectState(alignedHad, {
      conversationId,
      hasConversation,
      project: undefined,
    });
  }, [alignedHad, conversationId, hasConversation]);

  useEffect(() => {
    if (
      resolvedHad.conversationId !== hadState.conversationId ||
      resolvedHad.hadConversation !== hadState.hadConversation ||
      resolvedHad.project !== hadState.project
    ) {
      setHadState(resolvedHad);
    }
  }, [hadState, resolvedHad]);

  useEffect(() => {
    registerContextMenuAction("openThreadInNewWindow", openThreadInNewWindow, {
      enabled: canOpenThreadInNewWindow,
    });
  }, [canOpenThreadInNewWindow, openThreadInNewWindow]);

  if (routeKind !== "client-local-thread" && routeKind !== "local-thread") {
    return <Navigate to="/" replace />;
  }

  // Match staging: any pending projectless row renders the pending surface.
  if (
    pendingProjectlessThread != null &&
    conversationId == null &&
    pendingClientThreadId != null
  ) {
    return (
      <PendingProjectlessLocalConversationPage
        pendingProjectlessThread={pendingProjectlessThread}
      />
    );
  }

  if (conversationId != null && hostAvailabilityStatus === "unavailable") {
    return <RemoteConnectionUnavailablePage />;
  }

  if (
    conversationId != null &&
    resolvedHad.hadConversation &&
    !hasConversation &&
    !isHydratingConversation
  ) {
    return <RedirectMissingLocalConversation project={resolvedHad.project} />;
  }

  const streamEffects =
    conversationId == null ? null : (
      <LocalStreamRoleEffects conversationId={conversationId} />
    );

  return (
    <>
      {streamEffects}
      <ConversationSearchSurface />
      <LocalConversationMainLayout
        clientThreadId={clientThreadId}
        conversationId={conversationId}
        showComposer
      >
        <div
          className="h-full min-h-0"
          data-local-thread-body=""
          data-thread-id={threadId ?? undefined}
        />
      </LocalConversationMainLayout>
    </>
  );
}
