// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `S3c` / export `Ml` — parse writing-block attrs then render editor.

import type { ReactNode } from "react";

type Parsed = {
  content?: unknown;
  title?: unknown;
  toneSections?: unknown;
  variant?: unknown;
  emailMetadata?: unknown;
  [key: string]: unknown;
};

let parseWritingBlock: (args: {
  attributes: unknown;
  isStreaming: boolean;
  rawText: string;
}) => Parsed = () => ({});
let ToneEditor: ((props: Record<string, unknown>) => ReactNode) | null = null;

export function setWritingBlockRendererDeps(args: {
  parseWritingBlock: typeof parseWritingBlock;
  ToneEditor: (props: Record<string, unknown>) => ReactNode;
}): void {
  parseWritingBlock = args.parseWritingBlock;
  ToneEditor = args.ToneEditor;
}

export type WritingBlockRendererProps = {
  attributes: unknown;
  isStreaming: boolean;
  rawText: string;
  renderExtension?: (parsed: Parsed) => ReactNode;
  renderPersisted?: (parsed: Parsed) => ReactNode | null | undefined;
  testId?: string;
};

export function WritingBlockRenderer({
  attributes,
  isStreaming,
  rawText,
  renderExtension,
  renderPersisted,
  testId,
}: WritingBlockRendererProps): ReactNode {
  const parsed = parseWritingBlock({ attributes, isStreaming, rawText });
  const persisted = renderPersisted?.(parsed);
  if (persisted != null) return <>{persisted}</>;
  if (ToneEditor == null) {
    throw new Error("WritingBlockRenderer ToneEditor has not been configured");
  }
  return (
    <ToneEditor
      content={parsed.content}
      toneSections={parsed.toneSections}
      variant={parsed.variant}
      emailMetadata={parsed.emailMetadata}
      testId={testId}
      extension={renderExtension?.(parsed)}
    />
  );
}
