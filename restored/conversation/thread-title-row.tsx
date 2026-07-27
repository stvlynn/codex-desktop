// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `uzl` / export `Io` — thread title + project/repository rows.

import type { ReactNode } from "react";

export type ThreadTitleSection = {
  id?: string;
  icon?: ReactNode;
  label?: ReactNode;
  [key: string]: unknown;
};

export type ThreadTitleRowProps = {
  projectIcon?: ReactNode;
  projectLabel?: string | null;
  repositoryLabel?: string | null;
  sections?: ThreadTitleSection[];
  showUnreadDot?: boolean;
  timestampDateString?: string | null;
  threadTitle?: string | null;
  threadTitleStatusLabel?: string | null;
  threadTitleValue?: string | null;
  onRenameThreadTitle?: (nextTitle: string) => void;
};

export type ThreadTitleRowDeps = {
  /** Bundle `pzl` — editable thread title control. */
  ThreadTitleField: (props: {
    onRenameThreadTitle?: (nextTitle: string) => void;
    title: string;
    titleValue?: string | null;
  }) => ReactNode;
  /** Bundle `JB` — relative / absolute date chip. */
  Timestamp: (props: { dateString: string }) => ReactNode;
  /** Bundle `HLl` — truncated status label. */
  StatusLabel: (props: { label: string; maxWidth?: string }) => ReactNode;
  /** Bundle `hzl` — metadata row (icon + label). */
  MetaRow: (props: {
    row: { id: string; icon: ReactNode; label: ReactNode };
  }) => ReactNode;
  /** Bundle `lA` — default project glyph. */
  DefaultProjectIcon: () => ReactNode;
  /** Bundle `czl` — repository glyph. */
  RepositoryIcon: () => ReactNode;
  /** Bundle `dzl` — map a section descriptor to a row. */
  renderSection: (section: ThreadTitleSection) => ReactNode;
};

let deps: ThreadTitleRowDeps | null = null;

export function setThreadTitleRowDeps(next: ThreadTitleRowDeps): void {
  deps = next;
}

function requireDeps(): ThreadTitleRowDeps {
  if (deps == null) {
    throw new Error("ThreadTitleRow deps have not been configured");
  }
  return deps;
}

/** Bundle `uzl` / export `Io`. */
export function ThreadTitleRow({
  projectIcon,
  projectLabel,
  repositoryLabel,
  sections = [],
  showUnreadDot = false,
  timestampDateString,
  threadTitle,
  threadTitleStatusLabel,
  threadTitleValue,
  onRenameThreadTitle,
}: ThreadTitleRowProps): ReactNode {
  const {
    ThreadTitleField,
    Timestamp,
    StatusLabel,
    MetaRow,
    DefaultProjectIcon,
    RepositoryIcon,
    renderSection,
  } = requireDeps();

  const titleBlock =
    threadTitle != null && threadTitle !== "" ? (
      <div className="flex min-w-0 flex-col gap-1 pb-0.5">
        <div className="flex w-full min-w-0 items-center gap-3">
          <ThreadTitleField
            onRenameThreadTitle={onRenameThreadTitle}
            title={threadTitle}
            titleValue={threadTitleValue}
          />
          {timestampDateString != null && timestampDateString !== "" ? (
            <div className="flex shrink-0 items-center gap-1 text-xs leading-5 text-token-description-foreground">
              <Timestamp dateString={timestampDateString} />
              {showUnreadDot ? (
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-token-charts-blue"
                />
              ) : null}
            </div>
          ) : null}
        </div>
        {threadTitleStatusLabel == null ? null : (
          <div className="flex min-w-0 pl-1">
            <StatusLabel label={threadTitleStatusLabel} maxWidth="container" />
          </div>
        )}
      </div>
    ) : null;

  const projectRow =
    projectLabel != null && projectLabel !== "" ? (
      <MetaRow
        row={{
          id: "project",
          icon: projectIcon ?? <DefaultProjectIcon />,
          label: projectLabel,
        }}
      />
    ) : null;

  const repositoryRow =
    repositoryLabel != null && repositoryLabel !== "" ? (
      <MetaRow
        row={{
          id: "repository",
          icon: <RepositoryIcon />,
          label: repositoryLabel,
        }}
      />
    ) : null;

  const sectionRows = sections.map(renderSection);

  return (
    <div className="flex w-fit max-w-[min(20rem,calc(100vw-16px))] min-w-56 flex-col gap-1 px-row-x py-1.5 text-token-foreground">
      {titleBlock}
      {projectRow}
      {repositoryRow}
      {sectionRows}
    </div>
  );
}
