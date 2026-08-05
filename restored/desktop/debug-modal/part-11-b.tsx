// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 11/17
/* split-lane-import-depth:1 */
// AST split 2/5

import {
  AppInitialYC,
  north2,
  readLoginRouteQuerySnapshotStub,
} from "./part-11-a";
import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom } from "../../runtime/app-scope-runtime";
import { ensurePersonalizationK0Init } from "../../utils/wave-as-gap-ensure-inits";
import { DesktopPersistenceKeys } from "../persistence-keys";

// Wave5d soft JSX companions.
export function Amber1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Basalt1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Cedar1(
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

export function Falcon(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Zinc1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

function Lunar2() {
  let lotus20 = CodexPluginActionType(appScopeAtom),
    [mint20, nova20] = north2.useState(null),
    { data, isLoading } = ensurePersonalizationK0Init(
      DesktopPersistenceKeys.GLOBAL_DICTATION_FORCE_LOCK_DEBUG_ENABLED,
    ),
    olive20 = data === true,
    prism20 = olive20 ? "Force claiming" : "Off",
    quill20 = (
      <div className="flex flex-col py-1.5">
        {
          <Falcon
            {...{
              label: "Lock override",
              value: prism20,
            }}
          />
        }
      </div>
    );
  let reef20 = (
    <div className="text-xs text-token-description-foreground">
      {"Force this dev app to own the global dictation window lock."}
    </div>
  );
  let sage20 = (vapor20) => {
    nova20(null);
    readLoginRouteQuerySnapshotStub(
      lotus20,
      DesktopPersistenceKeys.GLOBAL_DICTATION_FORCE_LOCK_DEBUG_ENABLED,
      vapor20,
    )
      .then(() => {
        ensureAppActionPayloadSchemasInit.dispatchMessage(
          "global-dictation-force-lock-changed",
          {
            enabled: vapor20,
          },
        );
      })
      .catch((error) => {
        nova20(
          error instanceof Error
            ? error.message
            : "Failed to update global dictation lock override.",
        );
      });
  };
  let topaz20 = (
    <div className="flex items-center justify-between gap-3 py-1.5">
      {reef20}
      <AppInitialYC
        ariaLabel="Force this app to own global dictation"
        checked={olive20}
        disabled={isLoading}
        onChange={sage20}
      />
    </div>
  );
  let ultra20 = mint20 ? (
    <div className="py-1.5 text-xs text-token-error-foreground">{mint20}</div>
  ) : null;
  return (
    <Copper
      {...{
        title: "Global dictation",
        storageKey: "debug-global-dictation-lock-override",
        variant: "global",
        children: [quill20, topaz20, ultra20],
      }}
    />
  );
}
