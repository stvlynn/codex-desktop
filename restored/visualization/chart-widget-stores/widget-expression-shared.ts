// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Shared helpers for Codex widget expression / $prop evaluation.

import { createContext } from "react";

import type { WidgetHostContext } from "./types";

export const STATE_DEFAULTS_KEY = "__stateDefaults";
export const STATE_ALIASES_KEY = "__stateAliases";

export const SKIP_UNEVALUATED_KEYS = new Set(["pathId"]);

export const BOOL_PROP_FALLBACKS = new Set([
  "when",
  "visible",
  "checked",
  "selected",
  "disabled",
  "expanded",
]);

export const ARRAY_PROP_FALLBACKS = new Set([
  "of",
  "items",
  "data",
  "series",
  "options",
]);

export const FORBIDDEN_PATH_SEGMENTS = new Set([
  "__proto__",
  "constructor",
  "prototype",
  "valueOf",
  "then",
]);

export type SoftFailureReport = {
  error: unknown;
  scope: string;
  recovery: string;
  node?: { propName: string };
};

export type EvaluateOptions = {
  recovery?: string;
  fallbackValue?: unknown;
  propName?: string;
};

/** Extra expression scope layered under WidgetContext (defaults empty). */
export const WidgetExpressionScopeContext = createContext<
  Record<string, unknown>
>({});

export function reportSoftFailure(
  onSoftFailure: WidgetHostContext["onSoftFailure"] | undefined,
  report: SoftFailureReport,
): void {
  onSoftFailure?.({
    ...report,
    error:
      report.error instanceof Error
        ? report.error
        : Error(String(report.error)),
  });
}

export function propFallbackDefault(
  propName: string,
): false | unknown[] | undefined {
  if (BOOL_PROP_FALLBACKS.has(propName)) return false;
  if (ARRAY_PROP_FALLBACKS.has(propName)) return [];
  return undefined;
}

export function asPlainObject(
  value: unknown,
): Record<string, unknown> | undefined {
  return typeof value === "object" && value != null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : undefined;
}

export function mergeAliasMaps(
  base: unknown,
  override: unknown,
): Record<string, unknown> | undefined {
  const overrideObj = asPlainObject(override);
  if (!overrideObj || Object.keys(overrideObj).length === 0) {
    return asPlainObject(base);
  }
  const baseObj = asPlainObject(base);
  return baseObj ? { ...baseObj, ...overrideObj } : overrideObj;
}

export function softFailureForHost(host: WidgetHostContext) {
  return host.errorMode === "soft"
    ? (error: unknown, propName: string) => {
        reportSoftFailure(host.onSoftFailure, {
          error,
          scope: "expression-evaluation",
          recovery: "prop-fallback",
          node: { propName },
        });
      }
    : undefined;
}

function applyStateAliases(
  state: Record<string, unknown>,
  aliases: Record<string, unknown> | undefined,
  scope: Record<string, unknown>,
  evaluate: WidgetHostContext["evaluate"],
  onAliasError?: (error: unknown, key: string) => void,
): Record<string, unknown> {
  if (
    !aliases ||
    typeof aliases !== "object" ||
    Array.isArray(aliases) ||
    Object.keys(aliases).length === 0
  ) {
    return state;
  }
  let next = state;
  for (const [key, expression] of Object.entries(aliases)) {
    if (typeof expression !== "string" || expression.length === 0) continue;
    let value: unknown;
    try {
      value = evaluate(expression, { state: next, ...scope });
    } catch (error) {
      if (!onAliasError) throw error;
      onAliasError(error, key);
      continue;
    }
    if (value !== undefined) {
      if (next === state) next = { ...state };
      next[key] = value;
    }
  }
  return next;
}

export function resolveEvaluationState(
  widgetState: Record<string, unknown>,
  scope: Record<string, unknown>,
  evaluate: WidgetHostContext["evaluate"],
  localAliases: unknown,
  onAliasError?: (error: unknown, key: string) => void,
): Record<string, unknown> {
  const defaults = asPlainObject(scope[STATE_DEFAULTS_KEY]);
  const baseState = defaults ? { ...defaults, ...widgetState } : widgetState;
  return applyStateAliases(
    baseState,
    mergeAliasMaps(scope[STATE_ALIASES_KEY], localAliases),
    scope,
    evaluate,
    onAliasError,
  );
}

export function isForbiddenPathSegment(segment: string | undefined): boolean {
  return segment != null && FORBIDDEN_PATH_SEGMENTS.has(segment);
}

export function setPathValue(
  path: string,
  value: unknown,
  root: Record<string, unknown>,
): void {
  let cursor: Record<string, unknown> = root;
  const parts = path.split(".");
  while (parts.length > 1) {
    const segment = parts.shift();
    if (isForbiddenPathSegment(segment)) return;
    const key = segment as string;
    const existing = cursor[key];
    if (
      typeof existing === "object" &&
      existing != null &&
      !Array.isArray(existing)
    ) {
      cursor = existing as Record<string, unknown>;
    } else if (existing == null) {
      const created: Record<string, unknown> = {};
      cursor[key] = created;
      cursor = created;
    } else {
      return;
    }
  }
  const leaf = parts[0];
  if (isForbiddenPathSegment(leaf)) return;
  const leafKey = leaf as string;
  if (cursor[leafKey] == null || typeof cursor[leafKey] === typeof value) {
    cursor[leafKey] = value;
  }
}
