// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Setting definition shapes (`yu` global-state / `vu` configuration).

export type SettingAgentAccess = "read-write" | "read" | "hidden" | string;

export type SettingHostStorage =
  | { kind: "global-state"; key: string }
  | { kind: "configuration"; key: string }
  | { kind: "persisted-atom"; key: string };

export type SettingMirror = {
  domain: string;
  key: string;
  kind: string;
};

/**
 * Typed setting descriptor used by get/set helpers and atom families.
 * `schema` is left opaque — Zod (or equivalent) schemas live with the registry.
 */
export type SettingDefinition<T = unknown> = {
  agentAccess: SettingAgentAccess;
  default: T;
  description: string;
  key: string;
  hostStorage?: SettingHostStorage;
  mirrors?: SettingMirror[];
  schema?: unknown;
  vscode?: unknown;
};

export type CreateSettingDefinitionArgs<T> = {
  agentAccess: SettingAgentAccess;
  default: T;
  description: string;
  key: string;
  mirrors?: SettingMirror[];
  schema?: unknown;
  vscode?: unknown;
};

/** Create a global-state-backed setting (`yu`). */
export function createGlobalStateSetting<T>(
  args: CreateSettingDefinitionArgs<T>,
): SettingDefinition<T> {
  return {
    agentAccess: args.agentAccess,
    default: args.default,
    description: args.description,
    key: args.key,
    hostStorage: { kind: "global-state", key: args.key },
    mirrors: args.mirrors,
    schema: args.schema,
  };
}

/** Create a configuration-backed setting (`vu`). */
export function createConfigurationSetting<T>(
  args: CreateSettingDefinitionArgs<T>,
): SettingDefinition<T> {
  return {
    agentAccess: args.agentAccess,
    default: args.default,
    description: args.description,
    key: args.key,
    hostStorage: { kind: "configuration", key: args.key },
    mirrors: args.mirrors,
    schema: args.schema,
    vscode: args.vscode,
  };
}

/** Create a persisted-atom-backed setting (`bu`). */
export function createPersistedAtomSetting<T>(
  args: CreateSettingDefinitionArgs<T>,
): SettingDefinition<T> {
  return {
    agentAccess: args.agentAccess,
    default: args.default,
    description: args.description,
    key: args.key,
    hostStorage: { kind: "persisted-atom", key: args.key },
    mirrors: args.mirrors,
    schema: args.schema,
  };
}
