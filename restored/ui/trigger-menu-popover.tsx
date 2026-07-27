// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `YYo`) / export `LE`.

export type TriggerMenuPopoverPeers = {
  $: (...args: unknown[]) => unknown;
  GYi: (...args: unknown[]) => unknown;
  HYi: (...args: unknown[]) => unknown;
  Lm: (...args: unknown[]) => unknown;
  QJ: (...args: unknown[]) => unknown;
  UYi: (...args: unknown[]) => unknown;
  VDr: (...args: unknown[]) => unknown;
  WYi: (...args: unknown[]) => unknown;
  ZJ: (...args: unknown[]) => unknown;
  gA: (...args: unknown[]) => unknown;
  zDr: (...args: unknown[]) => unknown;
};
let peers: TriggerMenuPopoverPeers | null = null;

/** Wire TriggerMenuPopover peers once companions land. */
export function setTriggerMenuPopoverPeers(
  next: TriggerMenuPopoverPeers,
): void {
  peers = next;
}

/**
 * Bundle export `LE` / internal `YYo`.
 */
export function TriggerMenuPopover(props: unknown) {
  const VDr = peers.VDr;
  const GA = peers.gA;
  const ZDr = peers.zDr;
  if (peers == null) {
    throw new Error("TriggerMenuPopover peers are not configured");
  }
  let {
      triggerButton,
      disabled,
      children,
      open,
      onOpenChange,
      side,
      align,
      sideOffset,
      alignOffset,
      contentRef,
      onCloseAutoFocus,
      onEscapeKeyDown,
      contentClassName,
      contentStyle,
      surface = "menu",
      contentWidth: _,
      contentMaxHeight,
      portalContainer,
    } = props,
    x = peers.Lm(),
    { handleOpenChange, open: _open } = peers.GYi(open, onOpenChange),
    w = (
      <VDr asChild={true} disabled={disabled}>
        {triggerButton}
      </VDr>
    );
  let T = disabled ? null : (
    <GA
      ref={contentRef}
      align={align}
      alignOffset={alignOffset}
      className={peers.$(
        "no-drag z-50 m-px flex select-none flex-col overflow-y-auto px-1 py-1",
        peers.HYi(surface),
        peers.UYi(_),
        contentClassName,
      )}
      onCloseAutoFocus={onCloseAutoFocus}
      onEscapeKeyDown={onEscapeKeyDown}
      portalContainer={portalContainer}
      side={side}
      sideOffset={sideOffset ?? 1}
      style={{
        ...contentStyle,
        maxHeight:
          peers.WYi(
            contentMaxHeight,
            "var(--radix-popover-content-available-height)",
          ) ??
          "min(var(--radix-popover-content-available-height), calc(100vh - 16px))",
        zoom: portalContainer == null && x !== 1 ? x : undefined,
      }}
      unstyled={true}
    >
      {children}
    </GA>
  );
  return (
    <ZDr modal={false} open={_open} onOpenChange={handleOpenChange}>
      {w}
      {T}
    </ZDr>
  );
}
