// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 11/17
/* split-lane-import-depth:1 */
// AST split 3/5

import { delta3, tide2 } from "./part-11-a";
import { Copper, Falcon, Zinc1 } from "./part-11-b";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { useQueryClient } from "../../hooks/use-query-client";
import { ensureGpuTearingDebugSettingsInit } from "../../settings/gpu-tearing-debug-settings";
import { moveArrayItem } from "../../utils/move-array-item";
import { noop } from "../../utils/noop";
import { toggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import { appServices } from "../desktop-services";

function Quest2() {
  let wheat20 = useQueryClient(),
    [yarn20, zephyr20] = tide2.useState(null),
    { data } = CodexPluginActionResult(ensureGpuTearingDebugSettingsInit),
    acorn20 = {
      mutationFn: Ridge2,
      onSuccess: (unity20) => (
        wheat20.setQueryData(toggleSortedIdList, unity20.state),
        unity20
      ),
    };
  let bloom20 = noop(acorn20);
  if (data == null || data.supported === false || data.isDevMode === false)
    return null;
  let coral20 =
    data.configuredHotkey == null
      ? "Off"
      : moveArrayItem(data.configuredHotkey);
  let drift20 = coral20,
    eagle20 = data.isGateEnabled ? "Enabled" : "Disabled",
    frost20 = data.isActive ? "Active" : "Inactive",
    glide20 = data.isDevOverrideEnabled ? "Enabled" : "Disabled",
    honey20 = data.configuredHotkey != null && !bloom20.isPending,
    iris20 = (
      <Falcon
        {...{
          label: "Configured hotkey",
          value: drift20,
        }}
      />
    );
  let jewel20 = (
    <Falcon
      {...{
        label: "Gate",
        value: eagle20,
      }}
    />
  );
  let knoll20 = (
    <Falcon
      {...{
        label: "Runtime",
        value: frost20,
      }}
    />
  );
  let lunar20 = (
    <Falcon
      {...{
        label: "Dev override",
        value: glide20,
      }}
    />
  );
  let moss20 = (
    <div className="flex flex-col py-1.5">
      {iris20}
      {jewel20}
      {knoll20}
      {lunar20}
    </div>
  );
  let north20 = !honey20,
    orbit20 = () => {
      zephyr20(null);
      bloom20
        .mutateAsync({
          enabled: !data.isDevOverrideEnabled,
        })
        .then((value) => {
          value.success || zephyr20(value.error);
        })
        .catch((error) => {
          zephyr20(
            error instanceof Error
              ? error.message
              : "Failed to update dev override.",
          );
        });
    };
  let pine20 = data.isDevOverrideEnabled
      ? "Disable dev override"
      : "Enable hotkey in dev",
    quest20 = (
      <button
        type="button"
        className="inline-flex w-fit items-center rounded border border-token-border px-3 py-1 text-xs text-token-foreground hover:bg-token-foreground/5 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={north20}
        onClick={orbit20}
      >
        {pine20}
      </button>
    );
  let ridge20 =
    data.configuredHotkey == null ? (
      <div className="text-xs text-token-description-foreground">
        {"Set a Popout Window hotkey in Settings to use dev override."}
      </div>
    ) : null;
  let storm20 = yarn20 ? (
    <div className="text-xs text-token-error-foreground">{yarn20}</div>
  ) : null;
  let tide20 = (
    <div className="flex flex-col gap-2 py-1.5">
      {quest20}
      {ridge20}
      {storm20}
    </div>
  );
  return (
    <Copper
      {...{
        title: "Popout Window hotkey",
        storageKey: "debug-hotkey-window-hotkey",
        variant: "global",
        children: [moss20, tide20],
      }}
    />
  );
}

async function Ridge2(vale20) {
  let { enabled } = vale20,
    wave20 = appServices.hotkeyWindowHotkeys;
  if (wave20 == null) throw Error("Popout Window hotkeys are unavailable");
  return wave20.setDevOverrideEnabled(enabled);
}

function Wave2() {
  return (
    <Copper
      {...{
        storageKey: delta3,
        title: "Maitai",
        variant: "global",
        unmountChildrenWhenClosed: true,
        children: <Zinc1 {...{}} />,
      }}
    />
  );
}
