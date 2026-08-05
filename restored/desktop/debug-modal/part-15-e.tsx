// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 15/17
/* split-lane-import-depth:1 */
// AST split 5/6

import {
  AppInitialAr,
  AppInitialYC,
  Honey4,
  knoll4,
  moss4,
  north4,
  orbit4,
} from "./part-15-a";
import { Copper, Falcon } from "./part-15-b";
import { Eagle4 } from "./part-15-f";
import {
  appActionSidebarProjectRefSchema,
  ensureAppActionPayloadSchemasInit,
} from "../../actions/app-action-payload-schemas";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom } from "../../runtime/app-scope-runtime";
import { APP_HOST_UPDATE_STATUS_PATH } from "../../config/app-host-update-status-path";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { useQuery } from "../../hooks/use-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconSft } from "../../icons/app-icon-sft";
import { readScrollTop } from "../../navigation/app-action-dom";
import { DropdownMenu } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { setPrimaryRuntimeInstallRelease2 } from "../../ui/set-primary-runtime-install-release2";
import { noop } from "../../utils/noop";

function Drift4(timber26) {
  let { primaryRuntime } = timber26,
    umbra26 = CodexPluginActionType(appScopeAtom),
    violet26 = useQueryClient(),
    willow26 = AppIconAlt(),
    [xenon26, yellow26] = knoll4.useState(Eagle4),
    [zinc26, amber26] = knoll4.useState("Not run yet"),
    basalt26 = CodexPluginActionResult(setPrimaryRuntimeInstallRelease2),
    cedar26 = () => primaryRuntime.getUpdateStatus();
  let daisy26 = {
    enabled: xenon26,
    queryFn: cedar26,
    queryKey: APP_HOST_UPDATE_STATUS_PATH,
    refetchInterval: north4,
    staleTime: readScrollTop.FIVE_SECONDS,
  };
  let { data, isLoading, refetch } = useQuery(daisy26),
    ember26 = async (olive26) => {
      let { release } = olive26;
      return (
        await AppInitialAr(willow26),
        primaryRuntime.runUpdateNow({
          release,
        })
      );
    };
  let flint26 = (prism26) => {
    amber26(Glide4(prism26));
    violet26.invalidateQueries({
      queryKey: APP_HOST_UPDATE_STATUS_PATH,
    });
  };
  let garnet26 = {
    mutationFn: ember26,
    onSuccess: flint26,
  };
  let hazel26 = noop(garnet26),
    ivory26 = data?.isRunning === true || hazel26.isPending,
    jasper26 = basalt26 === "latest-alpha",
    kelp26 = (quill26) => {
      let reef26 = quill26 ? "latest-alpha" : "latest";
      umbra26.set(setPrimaryRuntimeInstallRelease2, reef26);
      ensureAppActionPayloadSchemasInit.dispatchMessage(
        "set-primary-runtime-install-release",
        {
          release: reef26,
        },
      );
    };
  let lotus26 = kelp26,
    mint26 = xenon26 ? (
      <DropdownMenuPopover
        {...{
          align: "end",
          triggerButton: (
            <button
              type="button"
              className="inline-flex cursor-interaction items-center gap-1.5 rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={ivory26}
            >
              {ivory26 ? (
                <VSCODE_EDITOR_ID
                  {...{
                    className: "icon-2xs",
                  }}
                />
              ) : null}
              {"Cron"}
              {
                <AppIconSft
                  {...{
                    className: "icon-2xs opacity-70",
                  }}
                />
              }
            </button>
          ),
          children: (
            <div className="flex min-w-[220px] flex-col gap-0.5">
              {
                <DropdownMenu.Title
                  {...{
                    children: "Workspace runtime cron",
                  }}
                />
              }
              {
                <DropdownMenu.Item
                  {...{
                    disabled: ivory26 || data?.enabled === false,
                    onSelect: () => {
                      hazel26
                        .mutateAsync({
                          release: basalt26,
                        })
                        .catch((error) => {
                          amber26("Failed to trigger cron job");
                          appActionSidebarProjectRefSchema.error(
                            "Failed to trigger workspace runtime cron from debug page",
                            {
                              safe: {
                                release: basalt26,
                              },
                              sensitive: {
                                error,
                              },
                            },
                          );
                        });
                    },
                    children: "Run now",
                  }}
                />
              }
              {
                <DropdownMenu.Item
                  {...{
                    onSelect: () => {
                      refetch();
                    },
                    children: "Refresh status",
                  }}
                />
              }
              {<DropdownMenu.Separator {...{}} />}
              {
                <DropdownMenu.Title
                  {...{
                    children: "Install flow",
                  }}
                />
              }
              <div className="flex items-center justify-between gap-3 px-[var(--padding-row-x)] py-[var(--padding-row-y)]">
                <div className="min-w-0">
                  <div className="truncate text-sm electron:text-base">
                    {"Alpha version"}
                  </div>
                  <div className="truncate text-xs text-token-description-foreground">
                    {basalt26}
                  </div>
                </div>
                <AppInitialYC
                  ariaLabel="Use alpha Codex Workspace install flow"
                  checked={jasper26}
                  size="sm"
                  onChange={lotus26}
                />
              </div>
            </div>
          ),
        }}
      />
    ) : null;
  let nova26 = xenon26 ? (
    isLoading && data == null ? (
      <div className="text-token-description-foreground">
        {"Loading workspace runtime status…"}
      </div>
    ) : (
      <div className="flex flex-col py-1.5">
        {
          <Falcon
            {...{
              label: "State",
              value: data?.enabled === true ? "Enabled" : "Disabled",
            }}
          />
        }
        {data?.disabledReason == null ? null : (
          <Falcon
            {...{
              label: "Disabled",
              value: Honey4(data.disabledReason),
            }}
          />
        )}
        {
          <Falcon
            {...{
              label: "Next cron",
              value: Frost4(data?.nextRunAt ?? null),
            }}
          />
        }
        {
          <Falcon
            {...{
              label: "Startup check",
              value: data?.startupChecked === true ? "Complete" : "Pending",
            }}
          />
        }
        {
          <Falcon
            {...{
              label: "Running",
              value: ivory26 ? "Yes" : "No",
            }}
          />
        }
        {
          <Falcon
            {...{
              label: "Last trigger",
              value: zinc26,
            }}
          />
        }
      </div>
    )
  ) : null;
  return (
    <Copper
      {...{
        title: "Workspace runtime",
        storageKey: moss4,
        onToggle: yellow26,
        variant: "global",
        actions: mint26,
        children: nova26,
      }}
    />
  );
}

function Frost4(sage26) {
  if (sage26 == null) return "Unavailable";
  let topaz26 = new Date(sage26),
    ultra26 = Math.ceil((sage26 - Date.now()) / 1e3);
  if (ultra26 <= 0) return `Due now (${topaz26.toLocaleString()})`;
  if (ultra26 < 60)
    return `${topaz26.toLocaleString()} (${orbit4.format(ultra26, "second")})`;
  let vapor26 = Math.ceil(ultra26 / 60);
  return vapor26 < 60
    ? `${topaz26.toLocaleString()} (${orbit4.format(vapor26, "minute")})`
    : `${topaz26.toLocaleString()} (${orbit4.format(Math.ceil(vapor26 / 60), "hour")})`;
}

function Glide4(wheat26) {
  switch (wheat26.status) {
    case "already-current":
      return wheat26.bundleVersion == null
        ? "Already current"
        : `Already current (${wheat26.bundleVersion})`;
    case "installed":
      return wheat26.bundleVersion == null
        ? "Install started"
        : `Installed ${wheat26.bundleVersion}`;
    case "skipped":
      return wheat26.reason == null
        ? "Skipped"
        : `Skipped: ${_p(wheat26.reason)}`;
  }
}

function _p(yarn26) {
  switch (yarn26) {
    case "already-running":
      return "already running";
    case "current":
      return "already current";
    case "feature-gate-disabled":
      return "feature gate disabled";
    case "not-local-host":
      return "not local host";
    case "runtime-config-missing":
      return "runtime config missing";
    case "unsupported-windows-version":
      return "unsupported Windows version";
  }
}
