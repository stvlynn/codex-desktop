// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xIa`) / export `lN`.

export type SettingsSectionCardPeers = {
  AH: (...args: unknown[]) => unknown;
  SIa: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  kH: (...args: unknown[]) => unknown;
  lIa: (...args: unknown[]) => unknown;
};
let peers: SettingsSectionCardPeers | null = null;

/** Wire SettingsSectionCard peers once companions land. */
export function setSettingsSectionCardPeers(
  next: SettingsSectionCardPeers,
): void {
  peers = next;
}

/**
 * Bundle export `lN` / internal `xIa`.
 */
export function SettingsSectionCard(props: unknown) {
  const SIa = peers.SIa;
  const Z = peers.Z;
  const LIa = peers.lIa;
  if (peers == null) {
    throw new Error("SettingsSectionCard peers are not configured");
  }
  let {
      className,
      icon,
      iconShape = "circle",
      title,
      titleText,
      titleClassName,
      headerActions,
      description,
      isOpen,
      onOpenChange,
      footer,
      children,
    } = props,
    h = icon == null ? null : <SIa icon={icon} shape={iconShape} />;
  let g = h,
    _ = typeof description == "string" ? description : undefined,
    v = (
      <Z
        id="common.close"
        defaultMessage="Close"
        description="Close button label"
      />
    );
  return (
    <LIa
      className={className}
      icon={g}
      iconClassName="h-auto w-auto rounded-none border-0 !p-0"
      iconBackgroundClassName="bg-transparent"
      title={title}
      titleText={titleText}
      titleClassName={titleClassName}
      headerActions={headerActions}
      description={description}
      descriptionText={_}
      descriptionClassName="text-lg"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      closeLabel={v}
      scrollFade={false}
      footer={footer}
    >
      {children}
    </LIa>
  );
}
