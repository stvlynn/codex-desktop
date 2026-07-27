// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `HX`) / export `HS`.

export type ProjectMarkerIconPeers = {
  $as: (...args: unknown[]) => unknown;
  Qas: (...args: unknown[]) => unknown;
  eos: (...args: unknown[]) => unknown;
  tos: (...args: unknown[]) => unknown;
  vH: (...args: unknown[]) => unknown;
};
let peers: ProjectMarkerIconPeers | null = null;

/** Wire ProjectMarkerIcon peers once companions land. */
export function setProjectMarkerIconPeers(next: ProjectMarkerIconPeers): void {
  peers = next;
}

/**
 * Bundle export `HS` / internal `HX`.
 */
export function ProjectMarkerIcon(props: unknown) {
  const Qas = peers.Qas;
  const As = peers.$as;
  if (peers == null) {
    throw new Error("ProjectMarkerIcon peers are not configured");
  }
  let { className, fallbackIcon, isRemoteProject, markerClassName, projectId } =
    props;
  if (!isRemoteProject && peers.vH(projectId)) {
    let e;
    return (
      <Qas
        className={className}
        fallbackIcon={fallbackIcon}
        projectId={projectId}
      />
    );
  }
  return (
    <As
      fallbackIcon={fallbackIcon}
      markerClassName={markerClassName}
      projectId={projectId}
    />
  );
}
