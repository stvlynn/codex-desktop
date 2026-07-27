// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jbo`) / export `zA`.

export type HostInitialEditorPanelPeers = {
  H_: (...args: unknown[]) => unknown;
  Mbo: (...args: unknown[]) => unknown;
  Nbo: (...args: unknown[]) => unknown;
  Pbo: (...args: unknown[]) => unknown;
  fK: (...args: unknown[]) => unknown;
  mK: (...args: unknown[]) => unknown;
};
let peers: HostInitialEditorPanelPeers | null = null;

/** Wire HostInitialEditorPanel peers once companions land. */
export function setHostInitialEditorPanelPeers(
  next: HostInitialEditorPanelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `zA` / internal `jbo`.
 */
export function HostInitialEditorPanel(props: unknown) {
  const Pbo = peers.Pbo;
  const Nbo = peers.Nbo;
  const Mbo = peers.Mbo;
  if (peers == null) {
    throw new Error("HostInitialEditorPanel peers are not configured");
  }
  let {
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
    } = props,
    p = hostId === undefined ? peers.H_ : hostId;
  if (path == null) {
    let e = <Pbo />;
    let r;
    return (
      <Nbo
        cwd={cwd}
        hostId={p}
        onSelectFile={onSelectFile}
        path={null}
        showGitBlameControl={false}
        workspaceRoot={workspaceRoot}
      >
        {e}
      </Nbo>
    );
  }
  return (
    <Mbo
      cwd={cwd}
      headerActions={headerActions}
      hostId={p}
      initialEndLine={initialEndLine}
      initialLine={initialLine}
      onSelectFile={onSelectFile}
      path={path}
      setTabState={setTabState}
      tabId={tabId}
      tabState={tabState}
      workspaceRoot={workspaceRoot}
    />
  );
}
