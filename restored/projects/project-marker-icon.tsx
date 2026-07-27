// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `HX`) / export `HS`.

import type { ReactElement, ReactNode } from "react";

export type ProjectMarkerIconProps = {
  className?: string;
  fallbackIcon?: ReactNode;
  isRemoteProject?: boolean;
  markerClassName?: string;
  projectId: unknown;
};

export type ProjectMarkerIconPeers = {
  isLocalGizmoProject: (projectId: unknown) => boolean;
  LocalGizmoProjectIcon: (props: Record<string, unknown>) => ReactNode;
  ProjectMarkerFallbackIcon: (props: Record<string, unknown>) => ReactNode;
};

let peers: ProjectMarkerIconPeers | null = null;

/** Wire project marker icon peers once companions land. */
export function setProjectMarkerIconPeers(next: ProjectMarkerIconPeers): void {
  peers = next;
}

/**
 * Bundle export `HS` / internal `HX`.
 * Render local-gizmo or fallback project marker icon.
 */
export function ProjectMarkerIcon(props: ProjectMarkerIconProps): ReactElement {
  if (peers == null) {
    throw new Error("ProjectMarkerIcon peers are not configured");
  }
  const {
    className,
    fallbackIcon,
    isRemoteProject,
    markerClassName,
    projectId,
  } = props;
  if (!isRemoteProject && peers.isLocalGizmoProject(projectId)) {
    return peers.LocalGizmoProjectIcon({
      className,
      fallbackIcon,
      projectId,
    }) as ReactElement;
  }
  return peers.ProjectMarkerFallbackIcon({
    fallbackIcon,
    markerClassName,
    projectId,
  }) as ReactElement;
}
