// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Zqa`) / export `sM`.

export type PrimaryAtMentionListContentPeers = {
  $qa: (...args: unknown[]) => unknown;
  Qqa: (...args: unknown[]) => unknown;
  fVa: (...args: unknown[]) => unknown;
  rU: (...args: unknown[]) => unknown;
  sJa: (...args: unknown[]) => unknown;
};
let peers: PrimaryAtMentionListContentPeers | null = null;

/** Wire PrimaryAtMentionListContent peers once companions land. */
export function setPrimaryAtMentionListContentPeers(
  next: PrimaryAtMentionListContentPeers,
): void {
  peers = next;
}

/**
 * Bundle export `sM` / internal `Zqa`.
 */
export function PrimaryAtMentionListContent(props: unknown) {
  const Qa = peers.$qa;
  const Qqa = peers.Qqa;
  if (peers == null) {
    throw new Error("PrimaryAtMentionListContent peers are not configured");
  }
  let {
    backgroundAgents = [],
    className,
    chromeVariant = "default",
    excludedAgentConversationIds = [],
    excludedThreadIds = [],
    hostId,
    isHomeMenu = false,
    keyboardEventTarget,
    leadingItems = [],
    onAddContext,
    onRequestClose,
    onUpdateSelectedMention,
    placement = "top",
    query,
    fileSearchRootPaths,
    skillRoots: _,
    source,
    threadSearchRoots,
  } = props;
  let x = backgroundAgents;
  let w = excludedAgentConversationIds;
  let E = excludedThreadIds;
  let k = leadingItems;
  if (peers.fVa(source)) {
    let e;
    return (
      <Qa
        className={className}
        chromeVariant={chromeVariant}
        hostId={hostId}
        isHomeMenu={isHomeMenu}
        keyboardEventTarget={keyboardEventTarget}
        onAddContext={onAddContext}
        onRequestClose={onRequestClose}
        onUpdateSelectedMention={onUpdateSelectedMention}
        placement={placement}
        query={query}
        source={source}
      />
    );
  }
  return (
    <Qqa
      backgroundAgents={x}
      className={className}
      chromeVariant={chromeVariant}
      excludedAgentConversationIds={w}
      excludedThreadIds={E}
      hostId={hostId}
      isHomeMenu={isHomeMenu}
      keyboardEventTarget={keyboardEventTarget}
      leadingItems={k}
      onAddContext={onAddContext}
      onRequestClose={onRequestClose}
      onUpdateSelectedMention={onUpdateSelectedMention}
      placement={placement}
      query={query}
      fileSearchRootPaths={fileSearchRootPaths}
      skillRoots={_}
      threadSearchRoots={threadSearchRoots}
    />
  );
}
