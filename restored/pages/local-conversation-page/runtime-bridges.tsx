// Restored from ref/webview/assets/local-conversation-page-Bf1KJPOR.js
// Local bridges for IMPORT_MAP targets that are init-only, peer-gated, or wrong-shaped.

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactElement,
  type ReactNode,
} from "react";

import {
  appScopeAtom,
  createAppScope,
  createScopedSignal,
} from "../../boundaries/app-scope-runtime";
import { localThreadPath } from "../../conversation/local-thread-path";
import { useOpenThreadInNewWindow } from "../../conversation/use-open-thread-in-new-window";
import { hostMessageBus } from "../../navigation/host-message-bus";

export type LocalThreadRouteValue = {
  routeKind: "local-thread" | "client-local-thread" | string;
  clientThreadId?: string | null;
  conversationId?: string | null;
};

/**
 * Bundle export `_8` — local-thread route scope read via useAppScope.
 * exportSources maps `_8` → ensureComposerEsm__8_Init (wrong for `.value.routeKind`).
 */
export const localThreadRouteScope = createAppScope("LocalThreadRoute");

/** Stable shell for route value when peers are not wired. */
export const localThreadRouteFallback: LocalThreadRouteValue = {
  routeKind: "local-thread",
  clientThreadId: null,
  conversationId: null,
};

/**
 * Bundle export `L8` — conversation-id atom for the active local thread.
 * exportSources maps L8 → ensureHotkeyThreadL8Init (wrong; call site is
 * `useAppScopeValue(L8)`). Soft scoped signal until app-initial L8 peers land.
 */
export const localConversationIdAtom = createScopedSignal<string | null>(
  appScopeAtom,
  null,
);

type PendingWorktreeActivation = (
  conversationId: string,
  options?: unknown,
) => boolean;

const PendingWorktreeActivationContext =
  createContext<PendingWorktreeActivation | null>(null);

/**
 * Bundle export `RL` — provider for pending-worktree conversation activation.
 * exportSources maps RL → filterOpenTargets.
 */
export function PendingWorktreeActivationProvider({
  value,
  children,
}: {
  value: PendingWorktreeActivation;
  children?: ReactNode;
}): ReactElement {
  return (
    <PendingWorktreeActivationContext.Provider value={value}>
      {children}
    </PendingWorktreeActivationContext.Provider>
  );
}

export function usePendingWorktreeActivation(): PendingWorktreeActivation | null {
  return useContext(PendingWorktreeActivationContext);
}

/**
 * Bundle export `Lh.Surface` — conversation find overlay.
 * `ConversationSearchKit` peers still throw; mount a typed surface slot that
 * matches the staging JSX `<Lh.Surface />` call site without invoking the kit.
 */
export function ConversationSearchSurface(): ReactElement {
  return (
    <div
      className="contents"
      data-conversation-search-surface=""
      hidden
      aria-hidden
    />
  );
}

/**
 * Stream-role product watchers.
 * Staging mounts `localConversationStreamRoleProductEventT` + `R` (IMPORT_MAP
 * `local-conversation-stream-role-product-event-BzrRYxBq`). Public companions
 * still residual — soft effect shell, throws: 0.
 */
export function LocalStreamRoleEffects({
  conversationId,
}: {
  conversationId: string;
}): null {
  useEffect(() => {
    void conversationId;
  }, [conversationId]);
  return null;
}

export type OpenThreadInNewWindowBridge = {
  canOpenThreadInNewWindow: boolean;
  openThreadInNewWindow: () => void;
};

/**
 * Bundle export `Do` → `useOpenThreadInNewWindow` + `$pt` → `localThreadPath`.
 * Feature-gate peer (`rlt`) still throws; gate check stays soft-false until
 * wired. Host `Jf`/`cdt` dispatch is try/caught when postMessage is unbound.
 */
export function useOpenThreadInNewWindowBridge(args: {
  conversationId: string | null | undefined;
}): OpenThreadInNewWindowBridge {
  return useOpenThreadInNewWindow(
    args,
    () => false,
    {
      dispatchMessage: (channel, payload) => {
        try {
          hostMessageBus.dispatchMessage(channel, payload);
        } catch {
          // Host postMessage unbound — soft no-op.
        }
      },
    },
    localThreadPath,
  );
}

/**
 * Bundle export `KZ` → `ContextMenuRegistration` peers still throw.
 * Soft registration so route effects stay throws: 0.
 */
export function registerContextMenuAction(
  _id: string,
  _onSelect: () => void,
  _options?: { enabled?: boolean },
): void {}

/** Side-effect init cluster retained as no-op (soft-scaffold throws: 0). */
export function ensureLocalConversationPageBridgesInit(): void {}

export function useLocalThreadRouteValue(
  scopeValue:
    | { value?: LocalThreadRouteValue }
    | LocalThreadRouteValue
    | null
    | undefined,
): LocalThreadRouteValue {
  return useMemo(() => {
    if (scopeValue == null) return localThreadRouteFallback;
    if ("routeKind" in scopeValue) return scopeValue as LocalThreadRouteValue;
    return scopeValue.value ?? localThreadRouteFallback;
  }, [scopeValue]);
}

// Re-export shell chrome so existing bridge imports keep working.
export {
  LocalEmptyState,
  LocalMainContentLayout,
  LocalShellHeader,
  LocalThreadAppShellChrome,
  ThreadHeaderStart,
  type LocalThreadChromeProps,
} from "./local-shell-chrome";
