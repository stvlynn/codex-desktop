// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 14/17
/* split-lane-import-depth:1 */
// AST split 4/5

import {
  AppInitialCX,
  AppInitialWX,
  AppInitialXX,
  AppInitialYC,
  avatarOverlayDebugStateNState,
  avatarOverlayDebugStateRState,
  avatarOverlayDebugStateTState,
  bravo4,
} from "./part-14-a";
import { Copper, Falcon } from "./part-14-b";
import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useUpdateAuthNonce } from "../../auth/use-update-auth-nonce";
import { appScopeAtom } from "../../runtime/app-scope-runtime";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { ElectronOnly } from "../../ui/electron-only";

function of(vapor24) {
  let { nativePetUiEnabled } = vapor24,
    wheat24 = CodexPluginActionType(appScopeAtom),
    yarn24 = CodexPluginActionResult(avatarOverlayDebugStateTState),
    zephyr24 = CodexPluginActionResult(avatarOverlayDebugStateNState),
    acorn24 = CodexPluginActionResult(avatarOverlayDebugStateRState),
    bloom24 = nativePetUiEnabled ? null : (
      <Falcon
        {...{
          label: "Resize button",
          value: acorn24 ? "Hidden" : "Visible",
        }}
      />
    );
  let coral24 = yarn24 ? "Visible" : "Hidden",
    drift24 = (
      <Falcon
        {...{
          label: "Window border",
          value: coral24,
        }}
      />
    );
  let eagle24 = nativePetUiEnabled ? (
    <Falcon
      {...{
        label: "Backing material",
        value: zephyr24 ? "CSS (forced)" : "Automatic",
      }}
    />
  ) : null;
  let frost24 = (
    <div className="flex flex-col py-1.5">
      {bloom24}
      {drift24}
      {eagle24}
    </div>
  );
  let glide24 = nativePetUiEnabled ? null : (
    <div className="flex items-center justify-between gap-3 py-1.5">
      <div className="text-xs text-token-description-foreground">
        {"Hide the pet resize button."}
      </div>
      <AppInitialYC
        ariaLabel="Hide pet resize button"
        checked={acorn24}
        onChange={(lunar24) => {
          wheat24.set(avatarOverlayDebugStateRState, lunar24);
        }}
      />
    </div>
  );
  let honey24 = (
    <div className="text-xs text-token-description-foreground">
      {"Draw a red border around the pet window"}
    </div>
  );
  let iris24 = (moss24) => {
    wheat24.set(avatarOverlayDebugStateTState, moss24);
  };
  let jewel24 = (
    <div className="flex items-center justify-between gap-3 py-1.5">
      {honey24}
      <AppInitialYC
        ariaLabel="Show pet window border"
        checked={yarn24}
        onChange={iris24}
      />
    </div>
  );
  let knoll24 = nativePetUiEnabled ? (
    <div className="flex items-center justify-between gap-3 py-1.5">
      <div className="text-xs text-token-description-foreground">
        {"Force the pet backing material to use CSS"}
      </div>
      <AppInitialYC
        ariaLabel="Force CSS pet material"
        checked={zephyr24}
        onChange={(north24) => {
          wheat24.set(avatarOverlayDebugStateNState, north24);
        }}
      />
    </div>
  ) : null;
  return (
    <Copper
      {...{
        title: "Pet",
        storageKey: "debug-pet",
        variant: "global",
        children: [frost24, glide24, jewel24, knoll24],
      }}
    />
  );
}

function Canyon3() {
  let orbit24 = CodexPluginActionResult(useUpdateAuthNonce),
    pine24 = CodexPluginActionResult(AppInitialXX),
    quest24 = CodexPluginActionResult(AppInitialCX),
    ridge24 = CodexPluginActionResult(AppInitialWX),
    [storm24, tide24] = bravo4.useState(false),
    unity24 = () => {
      let juniper24 = window.electronBridge?.sendMessageFromView;
      juniper24 == null ||
        storm24 ||
        (tide24(true),
        juniper24({
          type: "reload-bundled-plugins",
        })
          .catch(Dew3)
          .finally(() => {
            tide24(false);
          }));
    };
  let vale24 = unity24,
    wave24 = orbit24.length.toString();
  let apex24 = (
    <Falcon
      {...{
        label: "Catalog entries",
        value: wave24,
      }}
    />
  );
  let brook24 = ridge24.length.toString();
  let cliff24 = (
    <Falcon
      {...{
        label: "Views",
        value: brook24,
      }}
    />
  );
  let dusk24 = pine24.length.toString();
  let elm24 = (
    <Falcon
      {...{
        label: "File viewers",
        value: dusk24,
      }}
    />
  );
  let fern24 = quest24.length.toString();
  let grove24 = (
    <Falcon
      {...{
        label: "Mention servers",
        value: fern24,
      }}
    />
  );
  let hill24 = storm24 ? (
    <VSCODE_EDITOR_ID
      {...{
        className: "icon-2xs",
      }}
    />
  ) : null;
  let isle24 = (
    <ElectronOnly
      {...{
        electron: true,
        children: (
          <div className="flex border-t-[0.5px] border-token-border py-1.5">
            <button
              type="button"
              className="inline-flex cursor-interaction items-center gap-1.5 rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={storm24}
              onClick={vale24}
            >
              {hill24}
              {"Reload bundled plugins"}
            </button>
          </div>
        ),
      }}
    />
  );
  return (
    <Copper
      {...{
        storageKey: "debug-plugins-section",
        title: "Plugins",
        variant: "global",
        children: (
          <div className="flex flex-col py-1.5">
            {apex24}
            {cliff24}
            {elm24}
            {grove24}
            {isle24}
          </div>
        ),
      }}
    />
  );
}

function Dew3(lagoon24) {
  appActionSidebarProjectRefSchema.error(
    "Failed to reload bundled plugins from debug page",
    {
      safe: {},
      sensitive: {
        error: lagoon24,
      },
    },
  );
}
