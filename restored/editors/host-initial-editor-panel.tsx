// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `jbo`) / export `zA`.
// File browser / editor peers bind via setHostInitialEditorPanelParts.

import type { ReactElement, ReactNode } from "react";

export type HostInitialEditorPanelProps = {
  cwd?: unknown;
  headerActions?: ReactNode;
  hostId?: unknown;
  initialEndLine?: unknown;
  initialLine?: unknown;
  onSelectFile?: (...args: unknown[]) => void;
  path?: string | null;
  setTabState?: unknown;
  tabId?: unknown;
  tabState?: unknown;
  workspaceRoot?: unknown;
};

export type HostInitialEditorPanelParts = {
  EmptyBrowser: () => ReactNode;
  FileBrowser: (props: Record<string, unknown>) => ReactNode;
  FileEditor: (props: Record<string, unknown>) => ReactNode;
  defaultHostId?: unknown;
};

let parts: HostInitialEditorPanelParts | null = null;

/** Wire file browser / editor once companions land. */
export function setHostInitialEditorPanelParts(
  next: HostInitialEditorPanelParts,
): void {
  parts = next;
}

/**
 * Bundle export `zA` / internal `jbo`.
 * Host cwd/header editor panel — browser when path is null, else editor.
 */
export function HostInitialEditorPanel(
  props: HostInitialEditorPanelProps,
): ReactElement {
  const {
    cwd,
    headerActions,
    hostId,
    initialEndLine,
    initialLine,
    onSelectFile,
    path,
    setTabState,
    tabId,
    tabState,
    workspaceRoot,
  } = props;
  const resolvedHostId = hostId ?? parts?.defaultHostId;

  if (parts == null) {
    return (
      <div className="flex min-h-0 flex-1 flex-col">
        {headerActions != null ? (
          <div className="flex shrink-0 items-center justify-end gap-2 border-b border-token-border px-3 py-2">
            {headerActions}
          </div>
        ) : null}
        <div className="flex min-h-0 flex-1 items-center justify-center px-4 text-sm text-token-description-foreground">
          {path == null ? "Select a file" : String(path)}
        </div>
      </div>
    );
  }

  if (path == null) {
    return (
      <parts.FileBrowser
        cwd={cwd}
        hostId={resolvedHostId}
        onSelectFile={onSelectFile}
        path={null}
        showGitBlameControl={false}
        workspaceRoot={workspaceRoot}
      >
        <parts.EmptyBrowser />
      </parts.FileBrowser>
    ) as ReactElement;
  }

  return (
    <parts.FileEditor
      cwd={cwd}
      headerActions={headerActions}
      hostId={resolvedHostId}
      initialEndLine={initialEndLine}
      initialLine={initialLine}
      onSelectFile={onSelectFile}
      path={path}
      setTabState={setTabState}
      tabId={tabId}
      tabState={tabState}
      workspaceRoot={workspaceRoot}
    />
  ) as ReactElement;
}
