// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `s8i`) / export `zR`.

export type ArtifactPreviewChromePeers = {
  Iz: (...args: unknown[]) => unknown;
  Lz: (...args: unknown[]) => unknown;
};
let peers: ArtifactPreviewChromePeers | null = null;

/** Wire ArtifactPreviewChrome peers once companions land. */
export function setArtifactPreviewChromePeers(
  next: ArtifactPreviewChromePeers,
): void {
  peers = next;
}

/**
 * Bundle export `zR` / internal `s8i`.
 */
export function ArtifactPreviewChrome(props: unknown) {
  if (peers == null) {
    throw new Error("ArtifactPreviewChrome peers are not configured");
  }
  let {
      artifactType,
      centerContent,
      hideMetadata = false,
      leftContent,
      rightContent,
      title,
    } = props,
    l =
      leftContent ??
      (hideMetadata ? (
        <div />
      ) : (
        <div className="flex min-w-0 flex-1 items-center gap-3 overflow-hidden">
          <h2 className="truncate text-sm leading-5 font-medium tracking-[-0.18px] text-token-text-primary [@container_(max-width:260px)]:hidden">
            {title}
          </h2>
          <span className="shrink-0 text-sm leading-5 text-token-text-tertiary [@container_(max-width:360px)]:hidden">
            {artifactType}
          </span>
        </div>
      ));
  let u = <div className="min-w-0 justify-self-center">{centerContent}</div>;
  let d = (
    <div className="flex min-w-0 justify-end overflow-hidden">
      {rightContent}
    </div>
  );
  return (
    <header className="@container grid h-toolbar-pane shrink-0 grid-cols-[minmax(0,1fr)_auto_minmax(max-content,1fr)] items-center gap-2 overflow-hidden border-b border-token-border-light bg-token-main-surface-primary pr-2 pl-4 [@container_(max-width:260px)]:grid-cols-[0_auto_auto] [@container_(max-width:260px)]:gap-1 [@container_(max-width:260px)]:pl-2">
      {l}
      {u}
      {d}
    </header>
  );
}
