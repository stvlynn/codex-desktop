// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex resolveWidgetProps (bundle chartWidgetStoresC).

import {
  Children,
  cloneElement,
  isValidElement,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type ReactElement,
  type ReactNode,
} from "react";
import isEqual from "lodash/isEqual";
import omitBy from "lodash/omitBy";

import { useWidgetContext } from "./widget-context";
import {
  type SoftFailureReport,
  SKIP_UNEVALUATED_KEYS,
  WidgetExpressionScopeContext,
  propFallbackDefault,
  reportSoftFailure,
  resolveEvaluationState,
  softFailureForHost,
} from "./widget-expression-shared";

function readChildKeyExpression(node: unknown): string | null {
  if (isValidElement(node)) {
    const props = node.props;
    if (
      typeof props === "object" &&
      props &&
      "$key" in props &&
      typeof (props as { $key?: unknown }).$key === "string"
    ) {
      return (props as { $key: string }).$key;
    }
    return null;
  }
  return Array.isArray(node) ? readChildKeyExpression(node[0]) : null;
}

function useStableSelectorResult<T>(
  selector: (state: unknown) => T,
): (state: unknown) => T {
  const cacheRef = useRef<T | undefined>(undefined);
  return (state: unknown) => {
    const next = selector(state);
    if (isEqual(cacheRef.current, next)) {
      return cacheRef.current as T;
    }
    cacheRef.current = next;
    return next;
  };
}

function useResolvedChildren(children: ReactNode): ReactNode {
  const host = useWidgetContext();
  const { useWidgetStateStore, evaluate, errorMode, onSoftFailure } = host;
  const scope = useContext(WidgetExpressionScopeContext);
  const onAliasError = softFailureForHost(host);

  const evaluatedKeys = useWidgetStateStore(
    useStableSelectorResult((widgetState) =>
      children
        ? Children.map(children, (child) => {
            const keyExpr = readChildKeyExpression(child);
            if (!keyExpr) return null;
            try {
              return evaluate(keyExpr, {
                state: resolveEvaluationState(
                  widgetState as Record<string, unknown>,
                  scope,
                  evaluate,
                  undefined,
                  onAliasError,
                ),
                ...scope,
              });
            } catch (error) {
              if (errorMode === "throw") throw error;
              reportSoftFailure(onSoftFailure, {
                error,
                scope: "expression-evaluation",
                recovery: "prop-fallback",
                node: { propName: "$key" },
              });
              return null;
            }
          })
        : [],
    ),
  ) as unknown[];

  return useMemo(() => {
    if (!evaluatedKeys || evaluatedKeys.length === 0) return children;
    const next: ReactNode[] = [];
    Children.forEach(children, (child, index) => {
      if (evaluatedKeys[index] && isValidElement(child)) {
        next.push(
          cloneElement(child as ReactElement, {
            key: evaluatedKeys[index] as string | number,
          }),
        );
      } else {
        next.push(child);
      }
    });
    if (next.length === 0) return children;
    return next.length === 1 ? next[0] : next;
  }, [evaluatedKeys, children]);
}

/**
 * Evaluate `$…` prop expressions on a widget props bag; leave non-`$` props.
 * Bundle export `chartWidgetStoresC`.
 */
export function resolveWidgetProps<T extends Record<string, unknown>>(
  props: T,
): Record<string, unknown> {
  const host = useWidgetContext();
  const { useWidgetStateStore, evaluate, errorMode, onSoftFailure } = host;
  const scope = useContext(WidgetExpressionScopeContext);
  const onAliasError = softFailureForHost(host);
  const pendingFailures = useRef<SoftFailureReport[]>([]);

  const plainProps = omitBy(
    props,
    (_value, key) =>
      String(key).startsWith("$") || SKIP_UNEVALUATED_KEYS.has(String(key)),
  );

  const resolvedChildren = useResolvedChildren(
    props.children as ReactNode | undefined,
  );

  const evaluated = useWidgetStateStore(
    useStableSelectorResult((widgetState) => {
      const next: Record<string, unknown> = {};
      const failures: SoftFailureReport[] = [];
      for (const [key, value] of Object.entries(props)) {
        if (
          key === "$key" ||
          !key.startsWith("$") ||
          typeof value !== "string"
        ) {
          continue;
        }
        const propName = key.slice(1);
        if (key.endsWith("Action")) {
          next[propName] = value;
          continue;
        }
        try {
          next[propName] = evaluate(value, {
            state: resolveEvaluationState(
              widgetState as Record<string, unknown>,
              scope,
              evaluate,
              undefined,
              onAliasError,
            ),
            ...scope,
          });
        } catch (error) {
          if (errorMode === "throw") throw error;
          next[propName] = propFallbackDefault(propName);
          failures.push({
            error,
            scope: "expression-evaluation",
            recovery: "prop-fallback",
            node: { propName },
          });
        }
      }
      pendingFailures.current = failures;
      return next;
    }),
  ) as Record<string, unknown>;

  useEffect(() => {
    const failures = pendingFailures.current;
    pendingFailures.current = [];
    for (const failure of failures) {
      reportSoftFailure(onSoftFailure, failure);
    }
  });

  return {
    ...plainProps,
    ...evaluated,
    children: resolvedChildren,
  };
}

/** Compat alias matching boundaries/chart-widget-stores export name. */
export { resolveWidgetProps as chartWidgetStoresC };
