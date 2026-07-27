// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Credits modal surface / variant helpers (`RTs` / `zTs`, co-located with `BTs`).

export type CreditsModalIntent = "purchase" | "auto-reload";

export type CreditsModalSurface =
  | "combined-modal"
  | "legacy-purchase"
  | "legacy-auto-reload";

export type CreditsModalVariant =
  | "one-time-purchase"
  | "add-credits"
  | "manage-auto-reload"
  | "setup-auto-reload";

/**
 * Bundle `RTs` (co-located; not a chunk export).
 * Combined modal gate vs legacy purchase / auto-reload dialogs.
 */
export function resolveCreditsModalSurface({
  intent,
  isCombinedModalEnabled,
}: {
  intent: CreditsModalIntent;
  isCombinedModalEnabled: boolean;
}): CreditsModalSurface {
  if (isCombinedModalEnabled) return "combined-modal";
  return intent === "purchase" ? "legacy-purchase" : "legacy-auto-reload";
}

/**
 * Bundle `zTs` (co-located; not a chunk export).
 * Which combined-modal variant to open for the given intent / flags.
 */
export function resolveCreditsModalVariant({
  intent,
  forceOneTimePurchase = false,
  isAutoReloadEnabled,
}: {
  intent: CreditsModalIntent;
  forceOneTimePurchase?: boolean;
  isAutoReloadEnabled: boolean;
}): CreditsModalVariant {
  if (intent === "purchase") {
    return forceOneTimePurchase || isAutoReloadEnabled
      ? "one-time-purchase"
      : "add-credits";
  }
  return isAutoReloadEnabled ? "manage-auto-reload" : "setup-auto-reload";
}
