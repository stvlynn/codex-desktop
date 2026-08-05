// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 16/17
/* split-lane-import-depth:1 */
// AST split 4/5

import {
  AppInitialYC,
  readLoginRouteQuerySnapshotStub,
  storm4,
} from "./part-16-a";
import { Falcon } from "./part-16-b";
import { Apex4 } from "./part-16-e";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom } from "../../runtime/app-scope-runtime";
import { getCenteredFloatingWindowRect } from "../../hooks/use-floating-window-pointer-drag";
import { REMOTE_CONTROL_ENROLLMENT_ACCOUNT_MISMATCH_ERROR_CODE } from "../../remote-control/enrollment-account-mismatch-error-code";
import { useSettingValue } from "../../settings/use-setting-value";
import { ensurePersonalizationK0Init } from "../../utils/wave-as-gap-ensure-inits";
import { DesktopPersistenceKeys } from "../persistence-keys";

export function Orbit2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Pine2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Storm2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Tide2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Topaz2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Unity2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Vale2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Zephyr2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

// Wave5d soft JSX companions.
export function Acorn2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Bloom2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Chatgpt2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Copper(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Coral2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

function Honey4(zephyr26) {
  switch (zephyr26) {
    case "feature-gate-disabled":
      return "Feature gate disabled";
    case "not-local-host":
      return "Not local host";
    case "runtime-config-missing":
      return "Runtime config missing";
    case "unsupported-windows-version":
      return "Unsupported Windows version";
  }
}

function Iris4(acorn26) {
  try {
    return window.localStorage.getItem(acorn26) === "open";
  } catch {
    return false;
  }
}

function Quest4() {
  let bloom26 = CodexPluginActionType(appScopeAtom),
    [coral26, drift26] = storm4.useState(null),
    eagle26 = useSettingValue(
      REMOTE_CONTROL_ENROLLMENT_ACCOUNT_MISMATCH_ERROR_CODE.autoCleanupEnabled,
    ),
    { data, isLoading } = ensurePersonalizationK0Init(
      DesktopPersistenceKeys.WORKTREE_AUTO_CLEANUP_UNPACKAGED_OVERRIDE_ENABLED,
    ),
    frost26 = data === true,
    glide26 = eagle26 && frost26,
    honey26 = isLoading,
    iris26 = eagle26 ? "Enabled" : "Disabled",
    jewel26 = (
      <Falcon
        {...{
          label: "Worktrees setting",
          value: iris26,
        }}
      />
    );
  let knoll26 = frost26 ? "Enabled" : "Disabled",
    lunar26 = (
      <Falcon
        {...{
          label: "Source-build override",
          value: knoll26,
        }}
      />
    );
  let moss26 = glide26 ? "Enabled" : "Disabled",
    north26 = (
      <Falcon
        {...{
          label: "Effective cleanup",
          value: moss26,
        }}
      />
    );
  let orbit26 = (
    <div className="flex flex-col py-1.5">
      {jewel26}
      {lunar26}
      {north26}
    </div>
  );
  let pine26 = (
    <div className="text-xs text-token-description-foreground">
      {"Allow automatic worktree cleanup in this unpackaged build."}
    </div>
  );
  let quest26 = (tide26) => {
    drift26(null);
    readLoginRouteQuerySnapshotStub(
      bloom26,
      DesktopPersistenceKeys.WORKTREE_AUTO_CLEANUP_UNPACKAGED_OVERRIDE_ENABLED,
      tide26,
    ).catch((error) => {
      drift26(
        error instanceof Error
          ? error.message
          : "Failed to update worktree cleanup override.",
      );
    });
  };
  let ridge26 = (
    <div className="flex items-center justify-between gap-3 py-1.5">
      {pine26}
      <AppInitialYC
        ariaLabel="Enable worktree cleanup in this unpackaged build"
        checked={frost26}
        disabled={honey26}
        onChange={quest26}
      />
    </div>
  );
  let storm26 = coral26 ? (
    <div className="py-1.5 text-xs text-token-error-foreground">{coral26}</div>
  ) : null;
  return (
    <Copper
      {...{
        title: "Worktree cleanup",
        storageKey: "debug-worktree-cleanup-override",
        variant: "global",
        children: [orbit26, ridge26, storm26],
      }}
    />
  );
}

export function Vale4() {
  return getCenteredFloatingWindowRect(Apex4());
}

export function Wave4() {
  return Apex4();
}
