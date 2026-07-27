// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// App-action runner factory + type→run index (bundle `pni` / `mni`;
// exports `zW` / `RW`). Consumers: register-app-actions.

import type { ZodTypeAny } from "zod";

export type AppActionHandlerContext = Record<string, unknown>;

export type AppActionHandlerDefinition<
  TSchema extends ZodTypeAny = ZodTypeAny,
> = {
  schema: TSchema;
  run: (
    parsed: ReturnType<TSchema["parse"]>,
    context: AppActionHandlerContext,
  ) => unknown | Promise<unknown>;
};

export type AppActionHandler<TSchema extends ZodTypeAny = ZodTypeAny> = {
  type: string;
  schema: TSchema;
  run: (
    payload: unknown,
    context: AppActionHandlerContext,
  ) => unknown | Promise<unknown>;
};

/**
 * Bundle `pni` / export `zW` — wrap a Zod schema + run handler into a
 * typed dynamic-tool action entry.
 */
export function createAppActionHandler<TSchema extends ZodTypeAny>(
  definition: AppActionHandlerDefinition<TSchema>,
): AppActionHandler<TSchema> {
  const typeField = (
    definition.schema as unknown as {
      shape?: { type?: { value?: string; values?: readonly string[] } };
    }
  ).shape?.type;
  const typeValue =
    typeof typeField?.value === "string"
      ? typeField.value
      : typeField?.values?.[0];
  if (typeof typeValue !== "string") {
    throw new Error("App action schema must include a string literal `type`");
  }
  return {
    type: typeValue,
    schema: definition.schema,
    run: (payload, context) =>
      definition.run(definition.schema.parse(payload), context),
  };
}

/**
 * Bundle `mni` / export `RW` — index action runners by `type` string.
 */
export function indexAppActionRunners(
  handlers: ReadonlyArray<{ type: string; run: AppActionHandler["run"] }>,
): Map<string, AppActionHandler["run"]> {
  const byType = new Map<string, AppActionHandler["run"]>();
  for (const handler of handlers) {
    byType.set(handler.type, handler.run);
  }
  return byType;
}
