// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `Bis`) / export `sC`.

import type { ComponentType, ReactElement } from "react";

export type EntryPointHeadingProps = {
  entryPoint?: string;
};

export type EntryPointHeadingPeers = {
  FormattedMessage: ComponentType<Record<string, unknown>>;
  ProjectsIcon: ComponentType<Record<string, unknown>>;
};

let peers: EntryPointHeadingPeers | null = null;

/** Wire EntryPointHeading peers once companions land. */
export function setEntryPointHeadingPeers(next: EntryPointHeadingPeers): void {
  peers = next;
}

/**
 * Bundle export `sC` / internal `Bis`.
 * First-use realtime-voice NUX heading for a given entry point.
 */
export function EntryPointHeading(props: EntryPointHeadingProps): ReactElement {
  if (peers == null) {
    throw new Error("EntryPointHeading peers are not configured");
  }
  const { entryPoint } = props;
  const { FormattedMessage, ProjectsIcon } = peers;
  const description =
    entryPoint === "chatgpt" ? (
      <FormattedMessage
        id="realtimeVoice.nux.projects.description.chatgpt"
        defaultMessage="Turn ideas into action, keep work moving, and pick up where you left off—without micromanaging"
        description="Description of the projects tip in the first-use live voice introduction shown from ChatGPT"
      />
    ) : (
      <FormattedMessage
        id="realtimeVoice.nux.projects.description"
        defaultMessage="Start new tasks, coordinate work in progress, and pick up where you left off—without micromanaging"
        description="Description of the projects tip in the first-use live voice introduction"
      />
    );
  return (
    <div className="flex flex-col items-center gap-2 px-4">
      <h1 className="heading-2xl font-normal tracking-tight text-token-text-primary">
        <FormattedMessage
          id="realtimeVoice.nux.title"
          defaultMessage="Meet ChatGPT Voice"
          description="Title of the first-use introduction inside a live voice chat"
        />
      </h1>
      <div className="flex items-center gap-2 text-base font-medium text-token-text-primary">
        <ProjectsIcon
          aria-hidden={true}
          className="icon-sm text-token-charts-purple"
        />
        <FormattedMessage
          id="realtimeVoice.nux.projects.title"
          defaultMessage="Work across projects"
          description="Title of the projects tip in the first-use live voice introduction"
        />
      </div>
      <p className="max-w-md text-base leading-6 text-token-text-secondary">
        {description}
      </p>
    </div>
  );
}
