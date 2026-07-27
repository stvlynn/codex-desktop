// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `wes` / export `gw` — pure helper.

import { openaiBuiltByAttribution } from "./openai-built-by-attribution";
import { marketplacePathOrRemote } from "./marketplace-path-or-remote";
import { toPosixPath } from "../utils/workspace-paths";

const MARKETPLACE_JSON_SUFFIX = "/.agents/plugins/marketplace.json";
const MARKETPLACE_JSON_BASENAME = "/marketplace.json";

function trimLower(value: string): string {
  return value.trim().toLowerCase();
}

function normalizeMarketplaceLabel(value: string): string {
  return trimLower(value).replace(/[_-]+/g, " ");
}

function marketplaceLabelRank(label: string): number {
  switch (normalizeMarketplaceLabel(label)) {
    case "built by openai":
      return 0;
    case "chatgpt official":
      return 1;
    default:
      return 2;
  }
}

function stripMarketplaceJsonSuffix(pathValue: string): string {
  const normalized = toPosixPath(pathValue).replace(/\/+$/, "");
  if (normalized.endsWith(MARKETPLACE_JSON_SUFFIX)) {
    return normalized.slice(0, -MARKETPLACE_JSON_SUFFIX.length);
  }
  if (normalized.endsWith(MARKETPLACE_JSON_BASENAME)) {
    return normalized.slice(0, -MARKETPLACE_JSON_BASENAME.length);
  }
  return normalized;
}

function joinPathTail(parts: string[], count: number): string {
  const joined = parts.slice(-count).join("/");
  if (joined.length === 0) return "";
  if (count === 1) return joined;
  return parts.length > count ? `.../${joined}` : joined;
}

/** Disambiguate path labels by growing trailing segments until unique. */
function disambiguatePathLabels(
  sources: Array<string | null | undefined>,
): string[] {
  const split = sources.map((source) =>
    toPosixPath(source ?? "")
      .replace(/\/+$/, "")
      .split("/")
      .filter(Boolean),
  );
  const maxLen = Math.max(1, ...split.map((parts) => parts.length));
  for (let count = 1; count <= maxLen; count++) {
    const labels = split.map((parts) => joinPathTail(parts, count));
    if (new Set(labels).size === labels.length) return labels;
  }
  return sources.map((source) => toPosixPath(source ?? ""));
}

export type MarketplaceFilterOption = {
  label: string;
  subLabel: string | null;
  value: string;
};

type MarketplaceRow = {
  marketplacePath?: string | null;
  remoteMarketplaceName?: string | null;
  marketplaceDisplayName?: string | null;
  marketplaceName?: string;
};

/** Build sorted marketplace filter options from catalog rows. */
export function buildMarketplaceFilterOptions(
  rows: MarketplaceRow[],
): MarketplaceFilterOption[] {
  const seen = new Set<string>();
  const options: Array<{
    label: string;
    subLabelSource: string | null | undefined;
    value: string;
  }> = [];
  for (const row of rows) {
    const value = marketplacePathOrRemote(row);
    const rawLabel =
      row.marketplaceDisplayName?.trim() || row.marketplaceName || "";
    if (rawLabel.trim().length === 0) continue;
    if (seen.has(value)) continue;
    seen.add(value);
    options.push({
      label: openaiBuiltByAttribution(rawLabel),
      subLabelSource:
        row.marketplacePath == null
          ? row.remoteMarketplaceName
          : stripMarketplaceJsonSuffix(row.marketplacePath),
      value,
    });
  }

  const subLabelByValue = new Map<string, string>();
  const byLabel = new Map<string, typeof options>();
  for (const option of options) {
    const group = byLabel.get(option.label);
    if (group == null) {
      byLabel.set(option.label, [option]);
      continue;
    }
    group.push(option);
  }
  for (const group of byLabel.values()) {
    if (group.length <= 1) continue;
    const labels = disambiguatePathLabels(
      group.map((item) => item.subLabelSource),
    );
    for (const [index, item] of group.entries()) {
      subLabelByValue.set(item.value, labels[index] ?? "");
    }
  }

  return options
    .sort((a, b) => {
      const rank =
        marketplaceLabelRank(a.label) - marketplaceLabelRank(b.label);
      if (rank !== 0) return rank;
      return (
        a.label.localeCompare(b.label) ||
        (subLabelByValue.get(a.value) ?? "").localeCompare(
          subLabelByValue.get(b.value) ?? "",
        )
      );
    })
    .map((option) => ({
      label: option.label,
      subLabel: subLabelByValue.get(option.value) ?? null,
      value: option.value,
    }));
}
