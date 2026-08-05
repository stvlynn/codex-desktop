// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ids` / export `hS` — conversation-page composer host surface.

import type { ReactNode, Ref } from "react";
import { cx } from "../ui/cx";

export type ConversationComposerSurfacePlacement =
  | { kind: "thread" }
  | { kind: string; [key: string]: unknown };

export type ConversationComposerHostProps = {
  ref?: Ref<unknown>;
  className?: string;
  autoPrepare?: boolean;
  composerLayoutMode?: string;
  composerController?: unknown;
  defaultTppLocalExecutionSelected?: boolean;
  conversationId?: string | null;
  conversationOrigin?: string | null;
  disableSubmit?: boolean;
  errorClassName?: string;
  getExtraDeveloperInstructions?: () => string | null | undefined;
  hiddenAttachments?: unknown[];
  homeLeadingControl?: ReactNode;
  homeProjectSelector?: ReactNode;
  isPrimaryComposer?: boolean;
  isTemporaryChat?: boolean;
  onFileDropTargetChange?: (target: unknown) => void;
  onProjectChange?: (projectId: string | null) => void;
  onProjectChangeFromSlashCommand?: (projectId: string | null) => void;
  onPromptChange?: (prompt: string) => void;
  onUserInput?: (input: unknown) => void;
  onSubmitAccepted?: () => void;
  onSubmitError?: (error: unknown) => void;
  placeholder?: string;
  projectId?: string | null;
  projectName?: string | null;
  radiusVariant?: string;
  showError?: boolean;
  showFilePicker?: boolean;
  surfacePlacement?: ConversationComposerSurfacePlacement;
  surfaceVariant?: string;
  showLockdownSlashCommand?: boolean;
};

export type ConversationComposerHostDeps = {
  /**
   * Bundle residual body that renders the prepared composer surface once
   * AppScope / query peers are bound.
   */
  renderSurface: (
    props: ConversationComposerHostProps & {
      className?: string;
      resolvedConversationId: string;
      resolvedOrigin: string | null;
      resolvedProjectId: string | null;
      resolvedProjectName: string | null;
      resolvedHiddenAttachments: unknown[];
      resolvedSurfacePlacement: ConversationComposerSurfacePlacement;
      autoPrepare: boolean;
      disableSubmit: boolean;
      isTemporaryChat: boolean;
      showError: boolean;
      showFilePicker: boolean;
      showLockdownSlashCommand: boolean;
    },
  ) => ReactNode;
  /** Bundle `p_a` — allocate a local conversation id when unset. */
  allocateConversationId: () => string;
  /** Bundle `Fo(sH, id)` — conversation origin atom read. */
  useConversationOrigin: (conversationId: string) => string | null;
};

let deps: ConversationComposerHostDeps | null = null;

export function setConversationComposerHostDeps(
  next: ConversationComposerHostDeps,
): void {
  deps = next;
}

function requireDeps(): ConversationComposerHostDeps {
  if (deps == null) {
    throw new Error("ConversationComposerHost deps have not been configured");
  }
  return deps;
}

/**
 * Bundle `ids` / export `hS`.
 * Typed host shell: normalizes props, then delegates the heavy surface to deps.
 */
export function ConversationComposerHost(
  props: ConversationComposerHostProps,
): ReactNode {
  const { allocateConversationId, useConversationOrigin, renderSurface } =
    requireDeps();

  const autoPrepare = props.autoPrepare ?? true;
  const disableSubmit = props.disableSubmit ?? false;
  const hiddenAttachments = props.hiddenAttachments ?? [];
  const isTemporaryChat = props.isTemporaryChat ?? false;
  const projectId = props.projectId ?? null;
  const projectName = props.projectName ?? null;
  const showError = props.showError ?? false;
  const showFilePicker = props.showFilePicker ?? true;
  const surfacePlacement = props.surfacePlacement ?? { kind: "thread" };
  const showLockdownSlashCommand = props.showLockdownSlashCommand ?? false;
  const resolvedConversationId =
    props.conversationId ?? allocateConversationId();
  const originFromScope = useConversationOrigin(resolvedConversationId);
  const resolvedOrigin = props.conversationOrigin ?? originFromScope;

  const surface = renderSurface({
    ...props,
    autoPrepare,
    disableSubmit,
    isTemporaryChat,
    showError,
    showFilePicker,
    showLockdownSlashCommand,
    resolvedConversationId,
    resolvedOrigin,
    resolvedProjectId: projectId,
    resolvedProjectName: projectName,
    resolvedHiddenAttachments: hiddenAttachments,
    resolvedSurfacePlacement: surfacePlacement,
  });

  if (!showError && props.className == null) {
    return surface;
  }

  return (
    <div className={cx("flex flex-col gap-2", props.className)}>{surface}</div>
  );
}
