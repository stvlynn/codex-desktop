// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `H2s` / export `Fh` — sync conversation/diff sources into shell scope.

import { useEffect, type ReactNode } from "react";

export type ConversationDiffSourceBridgeProps = {
  conversationSource?: unknown;
  diffSource?: unknown;
  orchestrationId?: unknown;
  isDefault?: boolean;
};

type BridgeDeps = {
  /** Bundle `Io(hT)` — shell AppScope node. */
  useShellScope: () => unknown;
  /** Bundle `sVi` — apply conversation/diff sources on the shell scope. */
  applySources: (
    scope: unknown,
    sources: { conversationSource: unknown; diffSource: unknown },
    options: { orchestrationId: unknown; isDefault: boolean | undefined },
  ) => void | (() => void);
};

let deps: BridgeDeps | null = null;

export function setConversationDiffSourceBridgeDeps(next: BridgeDeps): void {
  deps = next;
}

/** Bundle `H2s` / export `Fh`. */
export function ConversationDiffSourceBridge({
  conversationSource = null,
  diffSource = null,
  orchestrationId,
  isDefault,
}: ConversationDiffSourceBridgeProps): ReactNode {
  if (deps == null) {
    throw new Error(
      "ConversationDiffSourceBridge deps have not been configured",
    );
  }
  const scope = deps.useShellScope();
  useEffect(() => {
    return deps!.applySources(
      scope,
      { conversationSource, diffSource },
      { orchestrationId, isDefault },
    );
  }, [conversationSource, diffSource, isDefault, orchestrationId, scope]);
  return null;
}
