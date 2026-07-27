// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Bis`) / export `sC`.

export type EntryPointHeadingPeers = {
  IX: (...args: unknown[]) => unknown;
  LX: (...args: unknown[]) => unknown;
  Vis: (...args: unknown[]) => unknown;
  YR: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  yP: (...args: unknown[]) => unknown;
};
let peers: EntryPointHeadingPeers | null = null;

/** Wire EntryPointHeading peers once companions land. */
export function setEntryPointHeadingPeers(next: EntryPointHeadingPeers): void {
  peers = next;
}

/**
 * Bundle export `sC` / internal `Bis`.
 */
export function EntryPointHeading(props: unknown) {
  const Z = peers.Z;
  const YR = peers.YR;
  const IX = peers.IX;
  const YP = peers.yP;
  if (peers == null) {
    throw new Error("EntryPointHeading peers are not configured");
  }
  let { entryPoint } = props,
    r = (
      <h1 className="heading-2xl font-normal tracking-tight text-token-text-primary">
        {
          <Z
            id="realtimeVoice.nux.title"
            defaultMessage="Meet ChatGPT Voice"
            description="Title of the first-use introduction inside a live voice chat"
          />
        }
      </h1>
    );
  let i = (
    <div className="flex items-center gap-2 text-base font-medium text-token-text-primary">
      {<YR aria-hidden={true} className="icon-sm text-token-charts-purple" />}
      {
        <Z
          id="realtimeVoice.nux.projects.title"
          defaultMessage="Work across projects"
          description="Title of the projects tip in the first-use live voice introduction"
        />
      }
    </div>
  );
  let a = (
    <div className="flex flex-col items-center gap-2 px-4">
      {i}
      <p className="max-w-md text-base leading-6 text-token-text-secondary">
        {entryPoint === "chatgpt" ? (
          <Z
            id="realtimeVoice.nux.projects.description.chatgpt"
            defaultMessage="Turn ideas into action, keep work moving, and pick up where you left off—without micromanaging"
            description="Description of the projects tip in the first-use live voice introduction shown from ChatGPT"
          />
        ) : (
          <Z
            id="realtimeVoice.nux.projects.description"
            defaultMessage="Start new tasks, coordinate work in progress, and pick up where you left off—without micromanaging"
            description="Description of the projects tip in the first-use live voice introduction"
          />
        )}
      </p>
    </div>
  );
  let o = (
    <div className="flex items-center gap-2 text-base font-medium text-token-text-primary">
      {<IX aria-hidden={true} className="icon-sm text-token-charts-purple" />}
      {
        <Z
          id="realtimeVoice.nux.desktop.title"
          defaultMessage="Work across your desktop"
          description="Title of the desktop tip in the first-use live voice introduction"
        />
      }
    </div>
  );
  let s = (
    <div className="flex flex-col items-center gap-2 px-4">
      {o}
      <p className="max-w-md text-base leading-6 text-token-text-secondary">
        {entryPoint === "chatgpt" ? (
          <Z
            id="realtimeVoice.nux.desktop.description.chatgpt"
            defaultMessage="Bring together your files, apps, and connected tools—from Slack and Notion to the documents you use every day"
            description="Description of the desktop tip in the first-use live voice introduction shown from ChatGPT"
          />
        ) : (
          <Z
            id="realtimeVoice.nux.desktop.description"
            defaultMessage="Use your files, apps, and connected tools—from Slack and GitHub to Notion and beyond"
            description="Description of the desktop tip in the first-use live voice introduction"
          />
        )}
      </p>
    </div>
  );
  let c = (
    <div className="flex items-center gap-2 text-base font-medium text-token-text-primary">
      {<YP aria-hidden={true} className="icon-sm text-token-charts-purple" />}
      {
        <Z
          id="realtimeVoice.nux.learn.title"
          defaultMessage="Explore, plan, and learn"
          description="Title of the collaborative thinking tip in the first-use live voice introduction"
        />
      }
    </div>
  );
  let l = (
    <div className="flex flex-col items-center gap-2 px-4">
      {c}
      <p className="max-w-md text-base leading-6 text-token-text-secondary">
        {entryPoint === "chatgpt" ? (
          <Z
            id="realtimeVoice.nux.learn.description.chatgpt"
            defaultMessage="Brainstorm ideas, prepare for a big meeting, or learn something new through natural back-and-forth"
            description="Description of the collaborative thinking tip in the first-use live voice introduction shown from ChatGPT"
          />
        ) : (
          <Z
            id="realtimeVoice.nux.learn.description"
            defaultMessage="Talk through a PR, ask questions about a codebase, or learn a new topic through natural back-and-forth"
            description="Description of the collaborative thinking tip in the first-use live voice introduction"
          />
        )}
      </p>
    </div>
  );
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-8 pt-4 text-center">
      {r}
      <div className="flex w-full max-w-lg flex-col gap-8">
        {a}
        {s}
        {l}
      </div>
    </div>
  );
}
