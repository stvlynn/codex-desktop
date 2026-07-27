// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `_2c` / export `Hl` — tone-section state + render-prop editor shell.

import type { ReactNode } from "react";

type ToneSection = { id: string; [key: string]: unknown };

type ToneState = {
  activeToneSectionId?: string | null;
  content?: unknown;
  toneSections?: ToneSection[];
  [key: string]: unknown;
};

let buildState: (args: {
  activeToneSectionId?: string | null;
  content?: unknown;
  onToneSectionSelect?: (id: string) => void;
  toneSections?: ToneSection[];
}) => ToneState = (args) => args;

let EditorView: ((props: Record<string, unknown>) => ReactNode) | null = null;

export function setToneSectionEditorDeps(args: {
  buildState: typeof buildState;
  EditorView: (props: Record<string, unknown>) => ReactNode;
}): void {
  buildState = args.buildState;
  EditorView = args.EditorView;
}

export type ToneSectionEditorProps = {
  activeToneSectionId?: string | null;
  content?: unknown;
  onToneSectionSelect?: (id: string) => void;
  render?: (args: {
    renderView: (props?: Record<string, unknown>) => ReactNode;
    state: ToneState;
  }) => ReactNode;
  toneSections?: ToneSection[];
  [key: string]: unknown;
};

export function ToneSectionEditor({
  activeToneSectionId,
  content,
  onToneSectionSelect,
  render,
  toneSections,
  ...rest
}: ToneSectionEditorProps): ReactNode {
  const state = buildState({
    activeToneSectionId,
    content,
    onToneSectionSelect,
    toneSections,
  });
  const renderView = (props: Record<string, unknown> = {}) => {
    if (EditorView == null) {
      throw new Error("ToneSectionEditor EditorView has not been configured");
    }
    return <EditorView {...rest} {...props} state={state} />;
  };
  return render?.({ renderView, state }) ?? renderView();
}
