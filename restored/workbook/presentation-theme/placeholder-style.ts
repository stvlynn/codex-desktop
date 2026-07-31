// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-10: slide placeholder type/style helpers (legacy Vae/Uae/Wae + expand/normalize).

import { slidePlaceholderRoles } from "./slide-placeholder-roles";
import { slidePlaceholderRoleAliases } from "./slide-placeholder-role-aliases";

export type PlaceholderStyleKey = "titleStyle" | "bodyStyle" | "otherStyle";

/** Furniture placeholder roles (header/footer/date/slide number). */
export type FurniturePlaceholderType =
  | "header"
  | "footer"
  | "dateTime"
  | "slideNumber";

export type FurnitureVisibility = {
  footer?: boolean;
  slideNumber?: boolean;
  dateTime?: boolean;
  header?: boolean;
};

export type PlaceholderTypeCandidates = {
  placeholderTypeCandidates: string[];
  placeholderIndex?: number;
};

/** Legacy `Vae` — placeholder type → master style key. */
export function placeholderTypeToStyleKey(
  placeholderType: string | undefined,
): PlaceholderStyleKey {
  switch (placeholderType) {
    case "title":
    case "ctrTitle":
      return "titleStyle";
    case "body":
    case undefined:
    case "obj":
    case "content":
    case "subTitle":
    case "":
      return "bodyStyle";
    default:
      return "otherStyle";
  }
}

/** Legacy `Uae` — furniture placeholder types (not content body). */
export function isFurniturePlaceholderType(
  placeholderType: string,
): placeholderType is FurniturePlaceholderType {
  return (
    placeholderType === "header" ||
    placeholderType === "footer" ||
    placeholderType === "dateTime" ||
    placeholderType === "slideNumber"
  );
}

/** Legacy `Wae` — map long role name → OOXML short role. */
export function placeholderRoleToShortName(role: string): string {
  return (
    slidePlaceholderRoles[role as keyof typeof slidePlaceholderRoles] ?? role
  );
}

/** Legacy normalize-placeholder-type — map raw type via alias map. */
export function normalizePlaceholderType(
  raw: string | null | undefined,
): string | undefined {
  if (!raw) return;
  const aliased = slidePlaceholderRoleAliases.get(raw);
  if (aliased) return aliased;
  const trimmed = raw.trim();
  if (!trimmed) return;
  return slidePlaceholderRoleAliases.get(trimmed.toLowerCase()) ?? undefined;
}

export type ExpandPlaceholderTypesOptions = {
  additionalSourceTypes?: Iterable<string | null | undefined>;
};

/** Legacy expand-placeholder-types — expand candidates (aliases + families). */
export function expandPlaceholderTypeCandidates(
  primary: string | null | undefined,
  options?: ExpandPlaceholderTypesOptions,
): string[] {
  const seen = new Set<string>();
  const ordered: string[] = [];
  const add = (value: string | null | undefined) => {
    if (!value) return;
    if (!seen.has(value)) {
      seen.add(value);
      ordered.push(value);
    }
    const normalized = normalizePlaceholderType(value);
    if (normalized !== undefined && !seen.has(normalized)) {
      seen.add(normalized);
      ordered.push(normalized);
    }
  };
  add(primary);
  for (const extra of options?.additionalSourceTypes ?? []) add(extra);
  for (let i = 0; i < ordered.length; i += 1) {
    switch (ordered[i]) {
      case "body":
      case "content":
      case "obj":
        add("body");
        add("content");
        add("obj");
        break;
      case "subTitle":
      case "subtitle":
        add("subTitle");
        add("subtitle");
        add("body");
        break;
      case "ctrTitle":
      case "centeredTitle":
        add("title");
        break;
    }
  }
  return [...seen];
}

/** Legacy `Gae` — whether a furniture placeholder is visible on the layout. */
export function isPlaceholderVisibleForLayout(
  placeholder: PlaceholderTypeCandidates,
  visibility?: FurnitureVisibility | null,
): boolean {
  const candidates = placeholder.placeholderTypeCandidates;
  return candidates.includes("footer")
    ? visibility?.footer !== false
    : candidates.includes("slideNumber")
      ? visibility?.slideNumber !== false
      : candidates.includes("dateTime")
        ? visibility?.dateTime !== false
        : candidates.includes("header")
          ? visibility?.header !== false
          : true;
}

/** Legacy `Kae` — whether two placeholders refer to the same slot. */
export function placeholdersMatch(
  left: PlaceholderTypeCandidates,
  right: PlaceholderTypeCandidates,
): boolean {
  const rightSet = new Set(right.placeholderTypeCandidates);
  const overlap = left.placeholderTypeCandidates.filter((item) =>
    rightSet.has(item),
  );
  return overlap.length === 0
    ? false
    : overlap.some(isFurniturePlaceholderType)
      ? true
      : left.placeholderIndex === undefined ||
          right.placeholderIndex === undefined ||
          left.placeholderIndex === right.placeholderIndex;
}

/** Legacy normalize-placeholder-label — canonicalize a label for matching. */
export function normalizePlaceholderLabel(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

export type PlaceholderNameHint = {
  rawType?: string | null;
  name?: string | null;
};

/** Legacy `qae` — resolve a normalized placeholder label from type or name. */
export function resolvePlaceholderLabel(
  hint: PlaceholderNameHint,
): string | undefined {
  const fromType = normalizePlaceholderType(hint.rawType ?? undefined);
  if (fromType) return normalizePlaceholderLabel(fromType);
  if (!hint.name) return;
  const trimmed = hint.name.trim();
  if (trimmed.length === 0) return;
  return normalizePlaceholderLabel(trimmed);
}
