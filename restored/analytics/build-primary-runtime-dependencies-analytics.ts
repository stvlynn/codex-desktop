// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Wru`/`Gru`/`Kru` / exports `er`/`tr`/`nr`.
// Primary-runtime diagnose/reset analytics payload builders.

import { CodexPrimaryRuntimeDependenciesDiagnoseStatus } from "./codex-primary-runtime-dependencies-diagnose-status";
import { CodexPrimaryRuntimeDependenciesResetStatus } from "./codex-primary-runtime-dependencies-reset-status";

function withBundleVersion(bundleVersion: string | null | undefined): {
  bundleVersion?: string;
} {
  return bundleVersion == null || bundleVersion.length === 0
    ? {}
    : { bundleVersion };
}

function mapResetStatus(
  status: string,
):
  | (typeof CodexPrimaryRuntimeDependenciesResetStatus)[keyof typeof CodexPrimaryRuntimeDependenciesResetStatus]
  | undefined {
  switch (status) {
    case "already-current":
      return CodexPrimaryRuntimeDependenciesResetStatus.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_ALREADY_CURRENT;
    case "canceled":
      return CodexPrimaryRuntimeDependenciesResetStatus.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_CANCELED;
    case "failed":
      return CodexPrimaryRuntimeDependenciesResetStatus.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_FAILED;
    case "installed":
      return CodexPrimaryRuntimeDependenciesResetStatus.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_INSTALLED;
    default:
      return undefined;
  }
}

export type PrimaryRuntimeDiagnostics = {
  installed: boolean;
  problems: unknown[];
  bundleVersion?: string | null;
};

/** Bundle `Wru` / export `er`. */
export function buildPrimaryRuntimeDependenciesDiagnosePayload(args: {
  diagnostics: PrimaryRuntimeDiagnostics;
  durationMs: number;
}): Record<string, unknown> {
  const { diagnostics, durationMs } = args;
  return {
    durationMs,
    problemCount: diagnostics.problems.length,
    status: diagnostics.installed
      ? CodexPrimaryRuntimeDependenciesDiagnoseStatus.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_OK
      : CodexPrimaryRuntimeDependenciesDiagnoseStatus.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_PROBLEM,
    ...withBundleVersion(diagnostics.bundleVersion),
  };
}

/** Bundle `Gru` / export `tr`. */
export function buildPrimaryRuntimeDependenciesDiagnoseFailedPayload(args: {
  durationMs: number;
}): Record<string, unknown> {
  return {
    durationMs: args.durationMs,
    status:
      CodexPrimaryRuntimeDependenciesDiagnoseStatus.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_FAILED,
  };
}

/** Bundle `Kru` / export `nr`. */
export function buildPrimaryRuntimeDependenciesResetPayload(args: {
  bundleVersion?: string | null;
  durationMs: number;
  status: string;
}): Record<string, unknown> {
  return {
    durationMs: args.durationMs,
    status: mapResetStatus(args.status),
    ...withBundleVersion(args.bundleVersion),
  };
}
