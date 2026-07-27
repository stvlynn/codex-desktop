// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ana`) / export `tR`.

export type SizedAppIconImagePeers = {
  bna: (...args: unknown[]) => unknown;
  description: (...args: unknown[]) => unknown;
  iconLarge: (...args: unknown[]) => unknown;
  iconSmall: (...args: unknown[]) => unknown;
  interface: (...args: unknown[]) => unknown;
  kna: (...args: unknown[]) => unknown;
  name: (...args: unknown[]) => unknown;
  path: (...args: unknown[]) => unknown;
  wna: (...args: unknown[]) => unknown;
  xna: (...args: unknown[]) => unknown;
};
let peers: SizedAppIconImagePeers | null = null;

/** Wire SizedAppIconImage peers once companions land. */
export function setSizedAppIconImagePeers(next: SizedAppIconImagePeers): void {
  peers = next;
}

/**
 * Bundle export `tR` / internal `Ana`.
 */
export function SizedAppIconImage(
  e: unknown,
  {
    size = "small",
    iconSmall,
    iconLarge,
    basePath,
    smallOnly,
    alt = "",
    fallbackName,
    fallbackDescription,
    fallbackIcon,
  }: Record<string, unknown> = {},
) {
  if (peers == null) {
    throw new Error("SizedAppIconImage peers are not configured");
  }
  let u = peers.wna({
    size,
    iconSmall: iconSmall ?? e?.interface?.iconSmall ?? null,
    iconLarge: iconLarge ?? e?.interface?.iconLarge ?? null,
    basePath: basePath ?? e?.path ?? null,
    smallOnly,
  });
  return u.url
    ? u.useCurrentColorMask
      ? peers.xna(u.url, alt, e, fallbackName, fallbackDescription, size)
      : peers.bna(u.url, alt, e, fallbackName, fallbackDescription, size)
    : (fallbackIcon ??
        peers.kna(
          fallbackName ?? e?.name ?? "",
          fallbackDescription ?? e?.description,
        ));
}
