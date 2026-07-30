// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Local bridges for IMPORT_MAP targets whose public files are init-only,
// peer-gated throwers, or wrong-shaped for this page's call sites.

import {
  createContext,
  useRef,
  type ReactElement,
  type ReactNode,
  type RefObject,
} from "react";

import { ensureThreadAppShellChromeInit } from "../../thread/thread-app-shell-chrome";

export type RemoteThreadComposerProps = {
  browserConversationId?: string | null;
  selectedProject?: unknown;
  composerLayoutMode?: string;
  isResponseInProgress?: boolean;
  showUtilityBarBranchWhen?: "always" | "never" | string;
  aboveComposerContentLayout?: string;
  aboveComposerContent?: ReactNode;
  localWorkspaceMaterialization?: unknown;
  className?: string;
  children?: ReactNode;
};

/**
 * Bundle export `zh` — remote/local thread composer surface.
 * exportSources maps zh → ensureNewThreadZhInit (esmInit no-op); call sites pass composer props.
 */
export function RemoteThreadComposer(
  props: RemoteThreadComposerProps,
): ReactElement {
  const {
    browserConversationId,
    composerLayoutMode,
    isResponseInProgress,
    showUtilityBarBranchWhen,
    aboveComposerContentLayout,
    aboveComposerContent,
    className,
    children,
  } = props;
  return (
    <div
      className={className}
      data-remote-thread-composer=""
      data-conversation-id={browserConversationId ?? undefined}
      data-layout-mode={composerLayoutMode}
      data-response-in-progress={isResponseInProgress ? "true" : undefined}
      data-utility-bar-branch={showUtilityBarBranchWhen}
      data-above-composer-layout={aboveComposerContentLayout}
    >
      {aboveComposerContent}
      {children}
    </div>
  );
}

export type RemoteRecordingOverlayProps = {
  onPaint?: () => void;
  children?: ReactNode;
};

/**
 * Bundle export `oO` — recording / paint overlay while a task is pending.
 * exportSources maps oO → ensureNewThreadOOInit.
 */
export function RemoteRecordingOverlay({
  onPaint,
  children,
}: RemoteRecordingOverlayProps): ReactElement {
  if (typeof onPaint === "function") {
    queueMicrotask(onPaint);
  }
  return (
    <div data-remote-recording-overlay="" className="contents">
      {children}
    </div>
  );
}

/** Bundle export `vh` — recording controller with `.isRecording()`. */
export const remoteRecordingController = {
  isRecording(): boolean {
    return false;
  },
};

const ThreadFindFocusContext = createContext<unknown>(null);

/**
 * Bundle export `hv` — Provider-shaped focus context for thread-find.
 * exportSources maps hv → cloud3() which only returns createContext(null).
 */
export function ThreadFindFocusProvider({
  value,
  children,
}: {
  value: unknown;
  children?: ReactNode;
}): ReactElement {
  return (
    <ThreadFindFocusContext.Provider value={value}>
      {children}
    </ThreadFindFocusContext.Provider>
  );
}

/**
 * Bundle export `f2` — host-id atom. Public `bindBindDeferredUiF2` throws
 * without peers; expose a stable bindable atom shell for page reads.
 */
export const remoteHostIdAtom = {
  get(): unknown {
    return null;
  },
};

/**
 * Bundle export `VJ` — live assistant-turn atom. Public bind factory throws
 * without peers; expose a stable bindable atom shell.
 */
export const remoteLiveAssistantTurnAtom = {
  get(): unknown {
    return null;
  },
};

/** Bundle export `Lh.Surface` — conversation find overlay surface. */
export function ConversationSearchSurface(): ReactElement | null {
  return null;
}

/** Local null-ref helper (public useNullRef is peer-gated). */
export function useLocalNullRef<T>(
  initial: T | null = null,
): RefObject<T | null> {
  return useRef<T | null>(initial);
}

export type ThreadAppShellChromeBridgeProps = {
  showReviewTab?: boolean;
  threadType?: string;
};

/**
 * Bundle chrome for remote threads.
 * IMPORT_MAP proves owner `thread/thread-app-shell-chrome.tsx` (`threadAppShellChromeT`);
 * full body still carries mechanical peer fan-out — keep a typed non-throwing shell
 * and only run the proven ensure-init side effect.
 */
export function RemoteThreadAppShellChrome(
  props: ThreadAppShellChromeBridgeProps,
): ReactElement | null {
  ensureThreadAppShellChromeInit();
  const { showReviewTab = false, threadType = "remote" } = props;
  return (
    <div
      className="contents"
      data-remote-thread-chrome=""
      data-thread-type={threadType}
      data-show-review-tab={showReviewTab ? "true" : undefined}
      data-thread-app-shell-chrome-owner="thread/thread-app-shell-chrome.tsx"
    />
  );
}

/**
 * Soft create-PR mutation shell.
 * IMPORT_MAP maps `nY` → useCreateTaskMutation (throws without peers).
 */
export const softCreatePullRequestMutation = {
  isPending: false,
  async mutateAsync(_vars: {
    taskId: string;
    turnId: string;
    mode?: "draft";
  }): Promise<unknown> {
    void _vars;
    return null;
  },
};

export function ensureRemoteConversationPageBridgesInit(): void {
  ensureThreadAppShellChromeInit();
}
