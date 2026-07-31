// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex useResolveWidgetAction (bundle `$_` — used by Chart + visibility actions).

import { useCallback } from "react";

import { useWidgetEvaluate } from "./use-widget-evaluate";
import { setPathValue } from "./widget-expression-shared";

/**
 * Resolve a string action expression or inject `name`/`value` into an action payload.
 * Bundle export `$_`.
 */
export function useResolveWidgetAction() {
  const evaluate = useWidgetEvaluate();
  return useCallback(
    (
      action: unknown,
      options: {
        value?: unknown;
        name?: string;
        scope?: Record<string, unknown>;
      } = {},
    ) => {
      if (!action) return;
      if (typeof action === "string") {
        const scope = Object.prototype.hasOwnProperty.call(options, "value")
          ? { ...(options.scope ?? {}), value: options.value }
          : options.scope;
        return evaluate(action, scope, { recovery: "action-no-op" });
      }
      if (!options.name) return action;
      const payload =
        action &&
        typeof action === "object" &&
        "payload" in (action as object) &&
        (action as { payload?: unknown }).payload
          ? structuredClone((action as { payload: unknown }).payload)
          : {};
      setPathValue(
        options.name,
        options.value,
        payload as Record<string, unknown>,
      );
      return {
        ...(action as object),
        payload,
      };
    },
    [evaluate],
  );
}

/** Compat alias matching boundaries/chart-widget-stores / surface export name. */
export { useResolveWidgetAction as $_ };
