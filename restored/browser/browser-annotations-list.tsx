// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Uxs`) / export `ab`.

export type BrowserAnnotationsListPeers = {
  Exs: (...args: unknown[]) => unknown;
  Kxs: (...args: unknown[]) => unknown;
  QZ: (...args: unknown[]) => unknown;
  Wxs: (...args: unknown[]) => unknown;
  count: (...args: unknown[]) => unknown;
  icon: (...args: unknown[]) => unknown;
  selectionCount: (...args: unknown[]) => unknown;
};
let peers: BrowserAnnotationsListPeers | null = null;

/** Wire BrowserAnnotationsList peers once companions land. */
export function setBrowserAnnotationsListPeers(
  next: BrowserAnnotationsListPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ab` / internal `Uxs`.
 */
export function BrowserAnnotationsList(props: unknown) {
  const Wxs = peers.Wxs;
  const Exs = peers.Exs;
  if (peers == null) {
    throw new Error("BrowserAnnotationsList peers are not configured");
  }
  let {
      annotations,
      browserAnnotations,
      onEditAnnotation,
      onRemove,
      onRemoveAnnotation,
    } = props,
    s = annotations.length + (browserAnnotations?.count ?? 0);
  if (s === 0) return null;
  let c = browserAnnotations?.icon,
    l = browserAnnotations?.selectionCount,
    u = (
      <Wxs
        annotations={annotations}
        browserAnnotations={browserAnnotations}
        onEditAnnotation={onEditAnnotation}
        onRemoveAnnotation={onRemoveAnnotation}
      />
    );
  return (
    <Exs
      attachmentKind="annotation"
      count={s}
      icon={c}
      onRemove={onRemove}
      selectionCount={l}
      tooltipContent={u}
    />
  );
}
