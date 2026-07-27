// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `sUl`) / export `qa`.

export type DeleteProjectConfirmDialogPeers = {
  Np: (...args: unknown[]) => unknown;
  Qk: (...args: unknown[]) => unknown;
  Xk: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  Zk: (...args: unknown[]) => unknown;
  _5: (...args: unknown[]) => unknown;
  cUl: (...args: unknown[]) => unknown;
  iA: (...args: unknown[]) => unknown;
  lUl: (...args: unknown[]) => unknown;
  nA: (...args: unknown[]) => unknown;
  rA: (...args: unknown[]) => unknown;
  tA: (...args: unknown[]) => unknown;
};
let peers: DeleteProjectConfirmDialogPeers | null = null;

/** Wire DeleteProjectConfirmDialog peers once companions land. */
export function setDeleteProjectConfirmDialogPeers(
  next: DeleteProjectConfirmDialogPeers,
): void {
  peers = next;
}

/**
 * Bundle export `qa` / internal `sUl`.
 */
export function DeleteProjectConfirmDialog(props: unknown) {
  const Zk = peers.Zk;
  const Z = peers.Z;
  const Qk = peers.Qk;
  const IA = peers.iA;
  const TA = peers.tA;
  const Np = peers.Np;
  const RA = peers.rA;
  const NA = peers.nA;
  const Xk = peers.Xk;
  if (peers == null) {
    throw new Error("DeleteProjectConfirmDialog peers are not configured");
  }
  let { isDeleting, onConfirm, onOpenChange, open, projectTitle } = props;
  if (!open) return null;
  let s = (
    <Zk className="sr-only">
      <Z
        {...peers.lUl.title}
        values={{
          projectName: projectTitle,
        }}
      />
    </Zk>
  );
  let c = (
    <Qk className="sr-only">
      <Z
        {...peers.lUl.description}
        values={{
          projectName: projectTitle,
        }}
      />
    </Qk>
  );
  let l = (event) => {
    event.preventDefault();
    isDeleting || onConfirm();
  };
  let u = (
    <Z
      {...peers.lUl.title}
      values={{
        projectName: projectTitle,
      }}
    />
  );
  let d = (
    <Z
      {...peers.lUl.description}
      values={{
        projectName: projectTitle,
      }}
    />
  );
  let f = (
    <IA>
      <TA title={u} subtitle={d} />
    </IA>
  );
  let p = () => {
    onOpenChange(false);
  };
  let m = (
    <Z
      id="chatgptConversations.sidebar.project.deleteCancel"
      defaultMessage="Cancel"
      description="Cancel button label for ChatGPT project deletion"
    />
  );
  let h = (
    <Np color="outline" disabled={isDeleting} type="button" onClick={p}>
      {m}
    </Np>
  );
  let g = isDeleting ? (
    <Z
      id="chatgptConversations.sidebar.project.deleting"
      defaultMessage="Deleting"
      description="Primary button label while a ChatGPT project is being deleted"
    />
  ) : (
    <Z
      id="chatgptConversations.sidebar.project.deleteConfirm"
      defaultMessage="Delete project"
      description="Primary button label for confirming ChatGPT project deletion"
    />
  );
  let _ = (
    <Np color="danger" loading={isDeleting} type="submit">
      {g}
    </Np>
  );
  let v = (
    <IA>
      <RA>
        {h}
        {_}
      </RA>
    </IA>
  );
  let y = (
    <NA as="form" onSubmit={l}>
      {f}
      {v}
    </NA>
  );
  return (
    <Xk open={true} onOpenChange={onOpenChange} size="compact">
      {s}
      {c}
      {y}
    </Xk>
  );
}
