// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex useWidgetEvaluate (bundle chartWidgetStoresS).

import { useCallback, useContext } from "react";

import { useWidgetContext } from "./widget-context";
import {
  type EvaluateOptions,
  WidgetExpressionScopeContext,
  reportSoftFailure,
  resolveEvaluationState,
  softFailureForHost,
} from "./widget-expression-shared";

/**
 * Stable evaluate() bound to WidgetContext + expression scope.
 * Bundle export `chartWidgetStoresS`.
 */
export function useWidgetEvaluate() {
  const host = useWidgetContext();
  const { useWidgetStateStore, evaluate, errorMode, onSoftFailure } = host;
  const scope = useContext(WidgetExpressionScopeContext);
  const onAliasError = softFailureForHost(host);

  return useCallback(
    (
      expression: unknown,
      extraScope: Record<string, unknown> = {},
      options: EvaluateOptions = {},
    ) => {
      if (typeof expression !== "string") return expression;
      const widgetState = useWidgetStateStore.getState() as Record<
        string,
        unknown
      >;
      try {
        return evaluate(expression, {
          state: resolveEvaluationState(
            widgetState,
            scope,
            evaluate,
            undefined,
            onAliasError,
          ),
          ...scope,
          ...extraScope,
        });
      } catch (error) {
        if (errorMode === "throw") throw error;
        reportSoftFailure(onSoftFailure, {
          error,
          scope:
            options.recovery === "action-no-op"
              ? "action-resolution"
              : "expression-evaluation",
          recovery: options.recovery ?? "prop-fallback",
          node: options.propName ? { propName: options.propName } : undefined,
        });
        return options.fallbackValue;
      }
    },
    [
      useWidgetStateStore,
      scope,
      evaluate,
      errorMode,
      onSoftFailure,
      onAliasError,
    ],
  );
}

/** Compat alias matching boundaries/chart-widget-stores export name. */
export { useWidgetEvaluate as chartWidgetStoresS };
