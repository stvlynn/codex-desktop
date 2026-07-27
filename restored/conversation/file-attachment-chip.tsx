// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `jnl` / export `il` — open attachment path in editor/side panel.

import type { ReactNode } from "react";

type OpenArgs = {
  path: string;
  line?: number | null;
  column?: number | null;
  cwd?: string;
  hostId?: string;
  openInSidePanel?: boolean;
  scope?: unknown;
};

let openPath: ((args: OpenArgs) => void) | null = null;
let useScope: (() => unknown) | null = null;
let isPptxPath: ((path: string) => boolean) | null = null;

export function setFileAttachmentChipDeps(args: {
  openPath: (args: OpenArgs) => void;
  useScope?: () => unknown;
  isPptxPath?: (path: string) => boolean;
}): void {
  openPath = args.openPath;
  useScope = args.useScope ?? null;
  isPptxPath = args.isPptxPath ?? null;
}

export type FileAttachmentChipProps = {
  attachment: {
    fsPath?: string | null;
    path?: string | null;
    startLine?: number | null;
    name?: string | null;
  };
  cwd?: string;
  hostId?: string;
};

export function FileAttachmentChip({
  attachment,
  cwd,
  hostId,
}: FileAttachmentChipProps): ReactNode {
  const path = attachment.fsPath || attachment.path || "";
  const openInSidePanel = path ? (isPptxPath?.(path) ?? false) : false;
  const scope = useScope?.();
  return (
    <button
      type="button"
      className="inline-flex max-w-full"
      onClick={() => {
        if (!path || openPath == null) return;
        const line = attachment.startLine;
        openPath({
          scope,
          path,
          line,
          column: line == null ? null : 1,
          cwd,
          hostId,
          openInSidePanel,
        });
      }}
    >
      <span className="inline-flex max-w-full truncate">
        {attachment.name ?? path}
      </span>
    </button>
  );
}
