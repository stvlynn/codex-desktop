// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `v3c` / export `Il` — email/writing-block editor via render prop.

import type { ReactNode } from "react";

type Context = {
  renderView: (args: Record<string, unknown>) => ReactNode;
  state: {
    displayedContent?: unknown;
    editorView?: unknown;
    generatePluginState?: unknown;
    activeToneSectionId?: string | null;
    selectToneSection?: (id: string) => void;
  };
};

let gate: (id: string) => boolean = () => false;
let buildEmailRows: (args: Record<string, unknown>) => {
  actions?: unknown;
  emailRowsCapabilities?: unknown;
  isLocked?: boolean;
} = () => ({});
let useEditorChrome: (
  args: Record<string, unknown>,
) => Record<string, unknown> = () => ({});

export function setEmailWritingBlockViewDeps(args: {
  gate?: (id: string) => boolean;
  buildEmailRows: typeof buildEmailRows;
  useEditorChrome: typeof useEditorChrome;
}): void {
  if (args.gate) gate = args.gate;
  buildEmailRows = args.buildEmailRows;
  useEditorChrome = args.useEditorChrome;
}

export type EmailWritingBlockViewProps = {
  context: Context;
  editorKey?: string | null;
  emailMetadata?: unknown;
  enableEmailSend?: boolean;
  serverConversationId?: string | null;
  enableAiTools?: boolean;
  isStreaming?: boolean;
  onEmailMetadataChange?: (next: unknown) => void;
  showMagicEditAction?: boolean;
  variant?: string;
  writingBlockId?: string;
};

export function EmailWritingBlockView({
  context,
  editorKey,
  emailMetadata,
  enableEmailSend,
  serverConversationId,
  enableAiTools,
  isStreaming = false,
  onEmailMetadataChange,
  showMagicEditAction = false,
  variant,
  writingBlockId,
}: EmailWritingBlockViewProps): ReactNode {
  const { renderView, state } = context;
  const isPersistedAndComplete = editorKey != null && !isStreaming;
  const email = buildEmailRows({
    bodyMarkdown: state.displayedContent,
    emailMetadata,
    enableEmailSend: enableEmailSend ?? gate("6102981"),
    isPersistedAndComplete,
    onEmailMetadataChange,
    variant,
    writingBlockId,
  });
  const isEditable = isPersistedAndComplete && !email.isLocked;
  const chrome = useEditorChrome({
    editorView: state.editorView,
    enableAiTools: enableAiTools ?? serverConversationId != null,
    generatePluginState: state.generatePluginState,
    isEditable,
    serverConversationId,
    showMagicEditAction,
  });
  return renderView({
    ...chrome,
    actionsAfterCopy: email.actions,
    emailRowsCapabilities: email.emailRowsCapabilities,
    isEditable,
    onToneSectionSelect: (id: string) => {
      if (id !== state.activeToneSectionId) {
        state.selectToneSection?.(id);
      }
    },
  });
}
