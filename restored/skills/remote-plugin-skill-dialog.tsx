// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `TIa`) / export `cN`.
// Markdown fetch peers bind via setRemotePluginSkillDialogParts.

import type { ReactElement, ReactNode } from "react";
import { FormattedMessage } from "react-intl";

export type RemotePluginSkillDialogProps = {
  hostId?: unknown;
  isOpen?: boolean;
  remotePluginSkill?: unknown;
  skillPath?: string | null;
  titleText?: ReactNode;
  children?: ReactNode;
};

export type RemotePluginSkillDialogParts = {
  useSkillMarkdown: (args: {
    hostId?: unknown;
    path?: string | null;
    remotePluginSkill?: unknown;
    expectedTitle?: ReactNode;
    enabled: boolean;
  }) => { markdown?: string | null; isFetching?: boolean; error?: unknown };
  ScrollSurface: (props: {
    scrollClassName?: string;
    children?: ReactNode;
  }) => ReactNode;
  Markdown: (props: Record<string, unknown>) => ReactNode;
  Spinner?: (props: { className?: string }) => ReactNode;
};

let parts: RemotePluginSkillDialogParts | null = null;

/** Wire skill markdown fetch / renderer once companions land. */
export function setRemotePluginSkillDialogParts(
  next: RemotePluginSkillDialogParts,
): void {
  parts = next;
}

/**
 * Bundle export `cN` / internal `TIa`.
 * Remote plugin skill preview dialog body.
 */
export function RemotePluginSkillDialog(
  props: RemotePluginSkillDialogProps,
): ReactElement {
  const {
    hostId,
    isOpen = false,
    remotePluginSkill,
    skillPath = null,
    titleText,
    children,
  } = props;
  const hasSource = skillPath != null || remotePluginSkill != null;
  const enabled = isOpen && hasSource;

  if (parts == null) {
    return (
      <div className="p-4 text-sm text-token-text-secondary">
        {titleText}
        {children ?? (
          <FormattedMessage
            id="skills.card.loadingContents"
            defaultMessage="Loading skill contents..."
            description="Loading label when fetching a skill file preview"
          />
        )}
      </div>
    );
  }

  const { markdown, isFetching, error } = parts.useSkillMarkdown({
    hostId,
    path: skillPath,
    remotePluginSkill,
    expectedTitle: titleText,
    enabled,
  });
  const showError = error != null || (isOpen && !hasSource);

  return (
    <parts.ScrollSurface scrollClassName="p-4">
      {isFetching ? (
        <div className="flex items-center gap-2 text-sm text-token-text-secondary">
          {parts.Spinner != null ? <parts.Spinner className="icon-xs" /> : null}
          <FormattedMessage
            id="skills.card.loadingContents"
            defaultMessage="Loading skill contents..."
            description="Loading label when fetching a skill file preview"
          />
        </div>
      ) : showError ? (
        <div className="text-sm text-token-text-secondary">
          <FormattedMessage
            id="skills.card.contentsError"
            defaultMessage="Unable to load skill contents."
            description="Error message when a skill file preview fails"
          />
        </div>
      ) : (
        <parts.Markdown
          className="text-sm"
          cwd={null}
          textClassName="text-sm"
          text={markdown}
        />
      )}
    </parts.ScrollSurface>
  ) as ReactElement;
}
