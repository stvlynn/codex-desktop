// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uni`) / export `VW`.

export type AnnouncementModalPeers = {
  $: (...args: unknown[]) => unknown;
  CP: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  Xk: (...args: unknown[]) => unknown;
  Zk: (...args: unknown[]) => unknown;
  dni: (...args: unknown[]) => unknown;
  qh: (...args: unknown[]) => unknown;
};
let peers: AnnouncementModalPeers | null = null;

/** Wire AnnouncementModal peers once companions land. */
export function setAnnouncementModalPeers(next: AnnouncementModalPeers): void {
  peers = next;
}

/**
 * Bundle export `VW` / internal `uni`.
 */
export function AnnouncementModal(props: unknown) {
  const Np = peers.Np;
  const Qh = peers.qh;
  const Zk = peers.Zk;
  const Xk = peers.Xk;
  if (peers == null) {
    throw new Error("AnnouncementModal peers are not configured");
  }
  let {
      actionLayout = "inline",
      body,
      closeButtonClassName,
      closeButtonTone = "light",
      contentClassName,
      contentStackClassName = "gap-10",
      disclaimerFooter,
      dismissLabel,
      footer,
      initialFocus,
      media,
      mediaClassName = "h-[214px]",
      onDismiss,
      onContentAnimationEnd,
      onPrimaryAction,
      onPrimaryActionIntent: _,
      onSecondaryAction,
      onSecondaryActionIntent,
      overlayClassName,
      primaryActionLabel,
      shouldIgnoreClickOutside = false,
      surfaceClassName = "!bg-token-dropdown-background",
      title,
      titleClassName,
    } = props,
    A = peers.Ju(),
    j =
      dismissLabel == null ? null : (
        <Np
          autoFocus={initialFocus === "secondary"}
          type="button"
          size="large"
          color={actionLayout === "inline" ? "secondary" : "ghostActive"}
          onClick={onSecondaryAction ?? onDismiss}
          onFocus={onSecondaryActionIntent}
          onPointerEnter={onSecondaryActionIntent}
          className={peers.$(
            "justify-center",
            actionLayout !== "inline" && "w-full",
          )}
        >
          {dismissLabel}
        </Np>
      );
  let M = j,
    N = initialFocus === "primary",
    P = actionLayout !== "inline" && "w-full",
    F = peers.$("justify-center", P);
  let I = (
    <Np
      autoFocus={N}
      size="large"
      color="primary"
      className={F}
      onClick={onPrimaryAction}
      onFocus={_}
      onPointerEnter={_}
    >
      {primaryActionLabel}
    </Np>
  );
  let L = I,
    R = (e) => {
      e || onDismiss();
    };
  let z = {
    "aria-describedby": undefined,
    onAnimationEnd: onContentAnimationEnd,
  };
  let B = peers.$(
    "w-[min(480px,92vw)] overflow-hidden !rounded-[16px] !ring-0 !backdrop-blur-none shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)]",
    surfaceClassName,
    contentClassName,
  );
  let H = peers.$(
    "pointer-events-auto relative flex max-h-[calc(100dvh-32px)] flex-col overflow-y-auto pb-10",
    contentStackClassName,
  );
  let W = peers.$("relative w-full", mediaClassName);
  let G = A.formatMessage({
    id: "codexUpgradeModal.close",
    defaultMessage: "Close",
    description: "Aria label for closing the Codex upgrade modal",
  });
  let K = closeButtonTone === "dark" ? "text-black" : "text-white",
    q = peers.$(
      "absolute top-[14px] right-[14px] cursor-interaction appearance-none rounded border-0 bg-transparent p-0.5 hover:opacity-80 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none",
      K,
      closeButtonClassName,
    );
  let ee = <Qh className="icon-xs" />;
  let te = (
    <button type="button" onClick={onDismiss} aria-label={G} className={q}>
      {ee}
    </button>
  );
  let ne = (
    <div className={W}>
      {media}
      {te}
    </div>
  );
  let re = peers.$("heading-dialog font-semibold", titleClassName);
  let ie = (
    <Zk asChild={true}>
      <h2 className={re}>{title}</h2>
    </Zk>
  );
  let ae = (
    <div className="flex flex-col items-center gap-2">
      {ie}
      {body}
    </div>
  );
  let oe = actionLayout === "stacked" && "flex w-full flex-col gap-2",
    se = actionLayout === "split" && "grid w-full grid-cols-2 gap-3",
    ce = actionLayout === "inline" && "flex flex-wrap gap-3",
    le = peers.$("items-center justify-center", oe, se, ce);
  let ue =
    actionLayout === "stacked" ? (
      <>
        {L}
        {M}
      </>
    ) : (
      <>
        {M}
        {L}
      </>
    );
  let de = <div className={le}>{ue}</div>;
  let fe =
    disclaimerFooter == null ? null : (
      <p className="-mt-3 text-xs leading-5 text-token-text-tertiary">
        {disclaimerFooter}
      </p>
    );
  let pe = (
    <div className="flex flex-col items-center gap-6 px-8 text-center">
      {ae}
      {de}
      {fe}
      {footer}
    </div>
  );
  let me = (
    <div className={H}>
      {ne}
      {pe}
    </div>
  );
  return (
    <Xk
      open={true}
      onOpenChange={R}
      contentProps={z}
      size="feature"
      shouldIgnoreClickOutside={shouldIgnoreClickOutside}
      overlayClassName={overlayClassName}
      contentClassName={B}
      showDialogClose={false}
    >
      {me}
    </Xk>
  );
}

/** Bundle path ESM init retained as no-op. */
export function ensureAnnouncementModalInit(): void {}
