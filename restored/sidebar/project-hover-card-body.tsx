// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `rJl` / export `Ca` — sidebar project hover-card body.

import type { ReactNode } from "react";
import { useIntl } from "react-intl";

export type ProjectHoverCardGroup = {
  projectId: string;
  projectKind: "local" | "remote" | string;
  label: string;
  threadKeys: string[];
  hostId?: string | null;
  hostDisplayName?: string | null;
  [key: string]: unknown;
};

export type ProjectHoverCardBodyProps = {
  group: ProjectHoverCardGroup;
  separateStatusRows?: boolean;
};

export type ProjectHoverCardBodyDeps = {
  /** Bundle `vH` — whether a local project shows a custom icon. */
  hasCustomProjectIcon: (projectId: string) => boolean;
  /** Bundle `bw` — navigate helper. */
  useNavigate: () => (to: string) => void;
  /** Bundle `oOt` — remote connection catalog snapshot. */
  useRemoteConnections: () => unknown;
  /** Bundle `Fo(ePr, …)` — attention counts for thread keys. */
  useAttentionCounts: (threadKeys: string[]) => unknown;
  /** Bundle `nz` — local project source rows. */
  listLocalSources: (group: ProjectHoverCardGroup) => unknown[];
  /** Bundle `H5` — whether sources section should render. */
  shouldShowSources: (group: ProjectHoverCardGroup) => boolean;
  /** Bundle `Jql` — display path for a local source. */
  formatSourcePath: (path: string) => string;
  /** Bundle `bJl` — icon for a source descriptor. */
  sourceIcon: (source: unknown) => ReactNode;
  /** Bundle `OM` — open path in file manager. */
  openInFileManager: (options: {
    path: string;
    cwd: string;
    target: string;
  }) => void;
  /** Bundle `eu` — cwd for a path. */
  dirnameOf: (path: string) => string;
  /** Bundle `qql` — merge group + sources into display rows. */
  buildSourceRows: (
    group: ProjectHoverCardGroup,
    sources: unknown[],
  ) => unknown[];
  /** Host-bound body renderer once peers are wired. */
  renderBody: (options: {
    group: ProjectHoverCardGroup;
    separateStatusRows: boolean;
    intl: ReturnType<typeof useIntl>;
    deps: ProjectHoverCardBodyDeps;
  }) => ReactNode;
};

let deps: ProjectHoverCardBodyDeps | null = null;

export function setProjectHoverCardBodyDeps(
  next: ProjectHoverCardBodyDeps,
): void {
  deps = next;
}

function requireDeps(): ProjectHoverCardBodyDeps {
  if (deps == null) {
    throw new Error("ProjectHoverCardBody deps have not been configured");
  }
  return deps;
}

/**
 * Bundle `rJl` / export `Ca`.
 * Real typed shell; peer UI (status rows / source lists) binds via `renderBody`.
 */
export function ProjectHoverCardBody({
  group,
  separateStatusRows = false,
}: ProjectHoverCardBodyProps): ReactNode {
  const resolved = requireDeps();
  const intl = useIntl();
  return resolved.renderBody({
    group,
    separateStatusRows,
    intl,
    deps: resolved,
  });
}
