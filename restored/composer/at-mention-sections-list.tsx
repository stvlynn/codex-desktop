// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `tJa`) / export `cM`.

export type AtMentionSectionsListPeers = {
  Z: (...args: unknown[]) => unknown;
  eUa: (...args: unknown[]) => unknown;
  iJa: (...args: unknown[]) => unknown;
  nJa: (...args: unknown[]) => unknown;
  rU: (...args: unknown[]) => unknown;
  sJa: (...args: unknown[]) => unknown;
};
let peers: AtMentionSectionsListPeers | null = null;

/** Wire AtMentionSectionsList peers once companions land. */
export function setAtMentionSectionsListPeers(
  next: AtMentionSectionsListPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cM` / internal `tJa`.
 */
export function AtMentionSectionsList(props: unknown) {
  const Z = peers.Z;
  const EUa = peers.eUa;
  if (peers == null) {
    throw new Error("AtMentionSectionsList peers are not configured");
  }
  let {
      className,
      sections,
      onUpdateSelectedMention,
      onAddContext,
      onRequestClose,
      placement = "top",
      query = "",
      chromeVariant = "default",
      isHomeMenu = false,
      keyboardEventTarget,
    } = props,
    g = new Map(sections.flatMap(peers.iJa));
  let _ = g,
    v = (
      <Z
        id="composer.atMentionList.noResults"
        defaultMessage="No results"
        description="Shown when there are no mention results matching the search query"
      />
    );
  let y = (event) => {
    onUpdateSelectedMention(event == null ? null : (_.get(event.key) ?? null));
  };
  let b = (event) => {
    let t = _.get(event.key);
    t != null && (onUpdateSelectedMention(t), onAddContext(t));
  };
  let x = sections.map(peers.nJa);
  return (
    <EUa
      className={className}
      chromeVariant={chromeVariant}
      isActive={true}
      isHomeMenu={isHomeMenu}
      keyboardEventTarget={keyboardEventTarget}
      noResults={v}
      onHighlight={y}
      onRequestClose={onRequestClose}
      placement={placement}
      onSelect={b}
      query={query}
      sections={x}
    />
  );
}
