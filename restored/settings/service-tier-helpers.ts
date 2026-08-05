// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Service-tier lookup helpers co-located with `serviceTier.*` messages.

import { SERVICE_TIER_DEFAULT_ID } from "./service-tier-ids";

export type ServiceTierOption = {
  id: string;
  name: string;
};

export type ServiceTierModelConfig = {
  model: string;
  serviceTiers?: ServiceTierOption[] | null;
  defaultServiceTier?: string | null;
};

export type ServiceTierSelection =
  | { type: "standard" }
  | { type: "fromConfig" }
  | { type: "custom"; serviceTier: string };

/** Normalize a tier id/name pair to `fast` / `ultrafast` / null (`atr`). */
function normalizeServiceTierKind(
  id: string | null | undefined,
  name?: string | null,
): "fast" | "ultrafast" | null {
  const normalizedName = name?.trim().toLowerCase();
  if (id === "priority" || id === "fast" || normalizedName === "fast") {
    return "fast";
  }
  if (id === "ultrafast" || normalizedName === "ultrafast") {
    return "ultrafast";
  }
  return null;
}

/** Look up a tier on a model config (`ltr`). */
function findServiceTierById(
  config: ServiceTierModelConfig | null | undefined,
  tierId: string | null | undefined,
): ServiceTierOption | null {
  if (tierId == null) return null;
  if (tierId === "fast") return findFastServiceTier(config);
  return config?.serviceTiers?.find((tier) => tier.id === tierId) ?? null;
}

/** Bundle `ftr` / export `s4`. */
export function findFastServiceTier(
  config: ServiceTierModelConfig | null | undefined,
): ServiceTierOption | null {
  return (
    config?.serviceTiers?.find(
      (tier) =>
        normalizeServiceTierKind(tier.id, tier.name) === "fast" ||
        tier.name.trim().toLowerCase() === "priority",
    ) ?? null
  );
}

/** Bundle `dtr` / export `c4`. */
export function findServiceTierConfigForModel(
  configs: ServiceTierModelConfig[] | null | undefined,
  model: string,
  tierId: string | null | undefined,
): ServiceTierModelConfig | null {
  return (
    configs?.find(
      (entry) =>
        entry.model === model && findServiceTierById(entry, tierId) != null,
    ) ?? null
  );
}

/** Resolve a stored selection to a concrete tier id (`ytr`). */
export function resolveServiceTierId(
  selection: ServiceTierSelection,
  fromConfigTierId: string | null,
): string | null {
  switch (selection.type) {
    case "fromConfig":
      return fromConfigTierId;
    case "standard":
      return SERVICE_TIER_DEFAULT_ID;
    case "custom":
      return selection.serviceTier;
  }
}

/** Collapse `null` into the default tier id (`_tr`). */
export function coerceServiceTierId(tierId: string | null | undefined): string {
  return tierId ?? SERVICE_TIER_DEFAULT_ID;
}

/** Build a selection object from an optional custom tier id (`vtr`). */
export function serviceTierSelectionFromId(
  tierId: string | null | undefined,
): ServiceTierSelection {
  return tierId == null
    ? { type: "standard" }
    : { type: "custom", serviceTier: tierId };
}

/**
 * Resolve the tier id to send on a request (`gtr`).
 * When `allowCustom` is false, always returns null.
 */
export function resolveServiceTierForRequest(
  config: ServiceTierModelConfig | null | undefined,
  selectedTierId: string | null | undefined,
  allowCustom: boolean = true,
): string | null {
  if (!allowCustom) return null;
  if (selectedTierId == null) {
    const defaultTier = config?.defaultServiceTier ?? null;
    return defaultTier == null
      ? null
      : (findServiceTierById(config, defaultTier)?.id ?? null);
  }
  return selectedTierId === SERVICE_TIER_DEFAULT_ID ? null : selectedTierId;
}
