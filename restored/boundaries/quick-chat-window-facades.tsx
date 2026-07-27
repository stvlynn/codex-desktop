// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Aou`) / export `Nn`.

export type WorkingDotsActionButtonPeers = {
  $: (...args: unknown[]) => unknown;
  Mou: (...args: unknown[]) => unknown;
  Oou: (...args: unknown[]) => unknown;
  ah: (...args: unknown[]) => unknown;
  jou: (...args: unknown[]) => unknown;
};
let peers: WorkingDotsActionButtonPeers | null = null;

/** Wire workingDotsActionButton peers once companions land. */
export function setWorkingDotsActionButtonPeers(
  next: WorkingDotsActionButtonPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Nn` / internal `Aou`.
 */
export function workingDotsActionButton(props: unknown) {
  const Ah = peers.ah;
  if (peers == null) {
    throw new Error("workingDotsActionButton peers are not configured");
  }
  let { className, label, onClick, show, showWorkingDots = false } = props,
    c = show ? "opacity-100" : "pointer-events-none opacity-0",
    l = peers.$(
      "cursor-interaction absolute z-30 flex h-8 w-8 translate-x-1/2 items-center justify-center rounded-full border border-token-border-default bg-token-main-surface-primary bg-clip-padding text-token-text-secondary transition-opacity duration-basic ease-in-out end-1/2 print:hidden",
      c,
      className,
    );
  let u = !show,
    d = show ? undefined : -1,
    f = show ? onClick : undefined,
    p = showWorkingDots ? (
      <span
        aria-hidden={true}
        className="flex items-center justify-center gap-1"
      >
        <span
          className={peers.$(
            "h-1 w-1 rounded-full bg-token-text-primary/70",
            peers.Oou.waveDot,
          )}
        />
        <span
          className={peers.$(
            "h-1 w-1 rounded-full bg-token-text-primary/70",
            peers.Oou.waveDot,
          )}
        />
        <span
          className={peers.$(
            "h-1 w-1 rounded-full bg-token-text-primary/70",
            peers.Oou.waveDot,
          )}
        />
      </span>
    ) : (
      <Ah className="icon rotate-180 text-token-text-primary" />
    );
  return (
    <button
      className={l}
      aria-hidden={u}
      aria-label={label}
      tabIndex={d}
      type="button"
      onClick={f}
    >
      {p}
    </button>
  );
}
