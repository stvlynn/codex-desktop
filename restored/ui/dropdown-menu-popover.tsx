// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `VR`) / export `KB`.

export type DropdownMenuPopoverPeers = {
  $: (...args: unknown[]) => unknown;
  AYi: (...args: unknown[]) => unknown;
  GYi: (...args: unknown[]) => unknown;
  HR: (...args: unknown[]) => unknown;
  KR: (...args: unknown[]) => unknown;
  Lm: (...args: unknown[]) => unknown;
  MYi: (...args: unknown[]) => unknown;
  UYi: (...args: unknown[]) => unknown;
  WR: (...args: unknown[]) => unknown;
  WYi: (...args: unknown[]) => unknown;
  _Xi: (...args: unknown[]) => unknown;
};
let peers: DropdownMenuPopoverPeers | null = null;

/** Wire DropdownMenuPopover peers once companions land. */
export function setDropdownMenuPopoverPeers(
  next: DropdownMenuPopoverPeers,
): void {
  peers = next;
}

/**
 * Bundle export `KB` / internal `VR`.
 */
export function DropdownMenuPopover(props: unknown) {
  const Trigger = peers.KR.Trigger;
  const MYi = peers.MYi;
  const Content = peers.KR.Content;
  const AYi = peers.AYi;
  if (peers == null) {
    throw new Error("DropdownMenuPopover peers are not configured");
  }
  let {
      triggerButton,
      disabled,
      children,
      open,
      onOpenChange,
      dir,
      side,
      align,
      sideOffset,
      alignOffset,
      contentRef,
      onContentFocus,
      onCloseAutoFocus,
      onEscapeKeyDown,
      contentClassName,
      contentStyle: _,
      surface = "menu",
      contentWidth,
      contentMaxHeight,
      portalContainer,
    } = props,
    C = peers.Lm(),
    { handleOpenChange, open: _open } = peers.GYi(open, onOpenChange),
    E = (
      <Trigger asChild={true} disabled={disabled}>
        {triggerButton}
      </Trigger>
    );
  let D = !disabled && (
    <MYi container={portalContainer ?? undefined}>
      <Content
        ref={contentRef}
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        onFocus={onContentFocus}
        onCloseAutoFocus={onCloseAutoFocus}
        onEscapeKeyDown={onEscapeKeyDown}
        surface={surface}
        className={peers.$(peers.UYi(contentWidth), contentClassName)}
        style={{
          ..._,
          maxHeight:
            peers.WYi(
              contentMaxHeight,
              "var(--radix-dropdown-menu-content-available-height)",
            ) ?? peers._Xi.maxHeight,
          zoom: portalContainer == null && C !== 1 ? C : undefined,
        }}
      >
        {children}
      </Content>
    </MYi>
  );
  return (
    <AYi dir={dir} modal={false} open={_open} onOpenChange={handleOpenChange}>
      {E}
      {D}
    </AYi>
  );
}
