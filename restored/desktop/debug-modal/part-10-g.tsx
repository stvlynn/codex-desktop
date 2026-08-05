// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 10/17
/* split-lane-import-depth:1 */
// AST split 7/7

import {
  AppInitialH7,
  AppInitialK7,
  AppInitialU7,
  AppInitialW7,
  AppInitialYC,
  AppInitialZ7,
  DeferredUiHI2,
} from "./part-10-a";
import { Copper } from "./part-10-b";
import { ReadLoginRouteQuerySnapshot } from "./part-10-d";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom } from "../../runtime/app-scope-runtime";

function Honey2() {
  let umbra20 = CodexPluginActionType(appScopeAtom),
    violet20 = CodexPluginActionResult(AppInitialZ7),
    willow20 = CodexPluginActionResult(AppInitialH7),
    xenon20 = CodexPluginActionResult(DeferredUiHI2),
    yellow20 = (
      <div className="text-xs text-token-description-foreground">
        {"Codex local access"}
      </div>
    );
  let zinc20 = (ivory20) => {
    umbra20.set(AppInitialW7, ivory20);
  };
  let amber20 = (
    <div className="flex items-center justify-between gap-3 py-1.5">
      {yellow20}
      <AppInitialYC
        ariaLabel="Codex local access"
        checked={violet20}
        onChange={zinc20}
      />
    </div>
  );
  let basalt20 = (
    <div className="text-xs text-token-description-foreground">
      {"Work mode access"}
    </div>
  );
  let cedar20 = (jasper20) => {
    umbra20.set(AppInitialK7, jasper20);
  };
  let daisy20 = (
    <div className="flex items-center justify-between gap-3 py-1.5">
      {basalt20}
      <AppInitialYC
        ariaLabel="Work mode access"
        checked={willow20}
        onChange={cedar20}
      />
    </div>
  );
  let ember20 = (
    <div className="text-xs text-token-description-foreground">
      {"ChatGPT feature access"}
    </div>
  );
  let flint20 = (kelp20) => {
    umbra20.set(AppInitialU7, kelp20);
  };
  let garnet20 = (
    <div className="flex items-center justify-between gap-3 py-1.5">
      {ember20}
      <AppInitialYC
        ariaLabel="ChatGPT feature access"
        checked={xenon20}
        onChange={flint20}
      />
    </div>
  );
  let hazel20 = (
    <div className="flex border-t-[0.5px] border-token-border py-3">
      {
        <ReadLoginRouteQuerySnapshot
          {...{
            color: "secondary",
            onClick: () => {
              umbra20.set(AppInitialW7, null);
              umbra20.set(AppInitialK7, null);
              umbra20.set(AppInitialU7, null);
            },
            children: "Reset to actual access",
          }}
        />
      }
    </div>
  );
  return (
    <Copper
      {...{
        title: "Feature access",
        storageKey: "debug-feature-access",
        variant: "global",
        children: [amber20, daisy20, garnet20, hazel20],
      }}
    />
  );
}
