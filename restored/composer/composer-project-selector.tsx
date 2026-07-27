// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `t6s`) / export `Zm`.

export type ComposerProjectSelectorPeers = {
  TE: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  Zus: (...args: unknown[]) => unknown;
  i6s: (...args: unknown[]) => unknown;
  n6s: (...args: unknown[]) => unknown;
  r6s: (...args: unknown[]) => unknown;
  startsWith: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
};
let peers: ComposerProjectSelectorPeers | null = null;

/** Wire ComposerProjectSelector peers once companions land. */
export function setComposerProjectSelectorPeers(
  next: ComposerProjectSelectorPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Zm` / internal `t6s`.
 */
export function ComposerProjectSelector(props: unknown) {
  const Zus = peers.Zus;
  const N6s = peers.n6s;
  if (peers == null) {
    throw new Error("ComposerProjectSelector peers are not configured");
  }
  let {
      projectId,
      projectName = null,
      menuOpen,
      onMenuOpenChange,
      shortcut,
      subtleHover,
      triggerButton,
      variant,
      onProjectChange,
    } = props,
    f = peers.Y(peers.TE),
    p = projectId;
  if (
    (p === undefined && (p = f?.type === "local" ? f.projectId : null),
    onProjectChange != null)
  ) {
    let e = p?.startsWith("g-p-") ? p : null;
    let n;
    return (
      <Zus
        projectId={e}
        projectName={projectName}
        menuOpen={menuOpen}
        onMenuOpenChange={onMenuOpenChange}
        shortcut={shortcut}
        subtleHover={subtleHover}
        triggerButton={triggerButton}
        variant={variant}
        onProjectChange={onProjectChange}
      />
    );
  }
  return (
    <N6s
      projectId={p}
      projectName={projectName}
      menuOpen={menuOpen}
      onMenuOpenChange={onMenuOpenChange}
      shortcut={shortcut}
      subtleHover={subtleHover}
      triggerButton={triggerButton}
      variant={variant}
    />
  );
}
