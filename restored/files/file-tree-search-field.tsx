// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `npo`) / export `Oj`.

export type FileTreeSearchFieldPeers = {
  Ju: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  RR: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  qh: (...args: unknown[]) => unknown;
  rpo: (...args: unknown[]) => unknown;
  zG: (...args: unknown[]) => unknown;
};
let peers: FileTreeSearchFieldPeers | null = null;

/** Wire FileTreeSearchField peers once companions land. */
export function setFileTreeSearchFieldPeers(
  next: FileTreeSearchFieldPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Oj` / internal `npo`.
 */
export function FileTreeSearchField(props: unknown) {
  const Z = peers.Z;
  const RR = peers.RR;
  const Np = peers.Np;
  const Qh = peers.qh;
  if (peers == null) {
    throw new Error("FileTreeSearchField peers are not configured");
  }
  let {
      autoFocus,
      inputId = "file-tree-search",
      inputRef,
      onQueryChange,
      searchQuery,
    } = props,
    c = peers.Ju(),
    l = (
      <Z
        id="codex.fileTreeSearch.label"
        defaultMessage="Filter files"
        description="Label for a file tree filter input"
      />
    );
  let u = (
    <label className="sr-only" htmlFor={inputId}>
      {l}
    </label>
  );
  let d = (
    <RR className="icon-xs ms-2 shrink-0 text-token-input-placeholder-foreground" />
  );
  let f = (event) => {
    return onQueryChange(event.target.value);
  };
  let p = c.formatMessage({
    id: "codex.fileTreeSearch.placeholder",
    defaultMessage: "Filter files…",
    description: "Placeholder text for a file tree filter input",
  });
  let m = (
    <input
      autoFocus={autoFocus}
      id={inputId}
      ref={inputRef}
      className="w-full appearance-none border-none bg-transparent py-0 ps-0 pe-1.5 text-token-foreground ring-0 outline-none select-text placeholder:text-token-input-placeholder-foreground focus:border-none focus:ring-0 focus:outline-none [&::placeholder]:select-none"
      type="text"
      value={searchQuery}
      onChange={f}
      placeholder={p}
    />
  );
  let h =
    searchQuery.length > 0 ? (
      <Np
        aria-label={c.formatMessage({
          id: "codex.fileTreeSearch.clear",
          defaultMessage: "Clear file filter",
          description: "Button label to clear a file tree filter input",
        })}
        className="text-token-input-placeholder-foreground hover:text-token-foreground"
        color="ghost"
        size="icon"
        onClick={() => {
          return onQueryChange("");
        }}
      >
        <Qh className="icon-2xs" />
      </Np>
    ) : null;
  return (
    <div className="relative flex h-token-button-composer w-full items-center gap-1.5 rounded-lg border border-token-border bg-token-bg-fog text-base leading-[18px]">
      {u}
      {d}
      {m}
      {h}
    </div>
  );
}
