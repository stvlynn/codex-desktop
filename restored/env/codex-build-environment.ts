// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Packaged build-environment channel helpers (`e_e` / `Pl` / export `Jht`).

/** Bundle `e_e` (co-located with export `Jht` / `Pl`). */
export const CodexBuildEnvironmentId = {
  Dev: "dev",
  Agent: "agent",
  Nightly: "nightly",
  InternalAlpha: "internal-alpha",
  PublicBeta: "public-beta",
  Prod: "prod",
} as const;

export type CodexBuildEnvironmentId =
  (typeof CodexBuildEnvironmentId)[keyof typeof CodexBuildEnvironmentId];

const VALUES = Object.values(CodexBuildEnvironmentId);

const INTERNAL_ENVIRONMENTS: readonly CodexBuildEnvironmentId[] = [
  CodexBuildEnvironmentId.Dev,
  CodexBuildEnvironmentId.Agent,
  CodexBuildEnvironmentId.Nightly,
  CodexBuildEnvironmentId.InternalAlpha,
];

/**
 * Bundle `Pl` / export `Jht`.
 * Channel id enum plus parse / internal / debug-menu helpers.
 */
export const CodexBuildEnvironment = {
  ...CodexBuildEnvironmentId,
  values: VALUES,
  help: VALUES.join(", "),
  isValid(value: string | null | undefined): value is CodexBuildEnvironmentId {
    return value != null && (VALUES as string[]).includes(value);
  },
  parse(value: string | null | undefined): CodexBuildEnvironmentId | null {
    const trimmed = value?.trim();
    return trimmed && CodexBuildEnvironment.isValid(trimmed) ? trimmed : null;
  },
  isInternal(value: string | null | undefined): boolean {
    return (
      value != null &&
      (INTERNAL_ENVIRONMENTS as readonly string[]).includes(value)
    );
  },
  allowDebugMenu(value: string | null | undefined): boolean {
    return CodexBuildEnvironment.isInternal(value);
  },
  supportsReactScan(value: string | null | undefined): boolean {
    return (
      value === CodexBuildEnvironmentId.Dev ||
      value === CodexBuildEnvironmentId.Agent ||
      value === CodexBuildEnvironmentId.Nightly
    );
  },
} as const;
