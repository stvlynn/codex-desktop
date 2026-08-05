// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 16/17
/* split-lane-import-depth:1 */
// AST split 5/5

import {
  Amber,
  applyU0000U001FU007F2,
  isle4,
  juniper4,
  lagoon4,
  meadow4,
} from "./part-16-a";
import { Copper, Topaz2 } from "./part-16-d";
import { isBusinessPlan } from "../../account/plan-type-helpers";
import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { useQueryClient } from "../../hooks/use-query-client";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { buildVscodeQueryKey } from "../../settings/vscode-query-key";
import { identityCwd } from "../../utils/workspace-paths";

export function Apex4() {
  return {
    height: window.innerHeight,
    topInset: 36,
    width: window.innerWidth,
  };
}

function Brook4() {
  let onyx27 = isBusinessPlan();
  let pearl27 = onyx27,
    quartz27 = useQueryClient(),
    [river27, slate27] = isle4.useState(Dusk4),
    timber27 = river27 && (pearl27 === "dev" || pearl27 === "nightly"),
    umbra27 = {
      queryConfig: {
        enabled: timber27,
        intervalMs: juniper4,
      },
    };
  let { data, isLoading } = SIDEBAR_HIT_TEST_SELECTOR(
      "ambient-suggestions-generation-statuses",
      umbra27,
    ),
    violet27 = {
      hostId: LOCAL_HOST_ID,
    };
  let willow27 = {
    params: violet27,
    queryConfig: {
      enabled: river27,
    },
  };
  let { data: _data } = SIDEBAR_HIT_TEST_SELECTOR(
      "workspace-root-options",
      willow27,
    ),
    xenon27 = {
      queryConfig: {
        enabled: river27,
      },
    };
  let { data: __data } = SIDEBAR_HIT_TEST_SELECTOR(
      "projectless-thread-cwd",
      xenon27,
    ),
    yellow27 = {
      onSuccess: () => {
        quartz27.invalidateQueries({
          queryKey: buildVscodeQueryKey(
            "ambient-suggestions-generation-statuses",
          ),
        });
        quartz27.invalidateQueries({
          queryKey: buildVscodeQueryKey("ambient-suggestions"),
        });
      },
    };
  let zinc27 = applyU0000U001FU007F2("ambient-suggestions-refresh", yellow27),
    amber27 = data?.statuses,
    basalt27,
    cedar27,
    daisy27;
  daisy27 = Symbol.for("react.early_return_sentinel");
  bb0: {
    let flint27 = new Map(amber27?.map(Cliff4));
    if (
      ((cedar27 = Amber({
        labels: _data?.labels,
        projectlessThreadCwd: __data?.cwd,
        statuses: amber27,
        workspaceRoots: _data?.roots,
      })),
      pearl27 !== "dev" && pearl27 !== "nightly")
    ) {
      daisy27 = null;
      break bb0;
    }
    if (((basalt27 = null), river27))
      if (isLoading && data == null && _data == null) {
        let garnet27;
        garnet27 = (
          <div className="text-token-description-foreground">
            {"Loading ambient suggestion status…"}
          </div>
        );
        basalt27 = garnet27;
      } else if (cedar27.length === 0) {
        let hazel27;
        hazel27 = (
          <div className="text-token-description-foreground">
            {"No project roots"}
          </div>
        );
        basalt27 = hazel27;
      } else
        basalt27 = cedar27.map((item) => {
          let { projectRoot, title } = item,
            ivory27 = flint27.get(projectRoot),
            jasper27 = (ivory27?.safetyRunningCount ?? 0) > 0,
            kelp27 = (ivory27?.runningCount ?? 0) > 0 || jasper27,
            lotus27 = "Idle";
          return (
            jasper27
              ? (lotus27 = "Checking safety")
              : kelp27 && (lotus27 = "Running"),
            (
              <Topaz2
                key={projectRoot}
                {...{
                  title,
                  subtitle: Elm4(ivory27, projectRoot),
                  status: lotus27,
                  rightActions: (
                    <button
                      type="button"
                      className="shrink-0 cursor-interaction rounded border border-token-border px-2 py-0.5 text-xs text-token-foreground hover:bg-token-foreground/5 disabled:cursor-not-allowed disabled:opacity-50"
                      disabled={kelp27 || zinc27.isPending}
                      onClick={() => {
                        zinc27
                          .mutateAsync({
                            domain: null,
                            hostId: LOCAL_HOST_ID,
                            projectRoot: identityCwd(projectRoot),
                          })
                          .catch((error) => {
                            appActionSidebarProjectRefSchema.error(
                              "Failed to refresh ambient suggestions from debug page",
                              {
                                safe: {},
                                sensitive: {
                                  error,
                                  projectRoot,
                                },
                              },
                            );
                          });
                      }}
                    >
                      {"Refresh now"}
                    </button>
                  ),
                }}
              />
            )
          );
        });
  }
  if (daisy27 !== Symbol.for("react.early_return_sentinel")) return daisy27;
  let ember27 = river27
    ? `Ambient suggestion tasks (${cedar27.length})`
    : "Ambient suggestion tasks";
  return (
    <Copper
      {...{
        title: ember27,
        storageKey: lagoon4,
        onToggle: slate27,
        variant: "global",
        children: basalt27,
      }}
    />
  );
}

function Cliff4(mint27) {
  return [mint27.projectRoot, mint27];
}

function Elm4(nova27, olive27) {
  let prism27 = ` • ${olive27}`,
    quill27 = nova27?.safetyRunningCount ?? 0,
    reef27 = nova27?.runningCount ?? 0;
  if (quill27 > 0) {
    let sage27 = nova27?.safetyStartedAtMs ?? null;
    return sage27 == null
      ? `${quill27} safety check active${prism27}`
      : `${quill27} safety check active • started ${Fern4(sage27)}${prism27}`;
  }
  if (reef27 > 0) {
    let topaz27 = nova27?.runningStartedAtMs ?? null;
    return topaz27 == null
      ? `${reef27} active${prism27}`
      : `${reef27} active • started ${Fern4(topaz27)}${prism27}`;
  }
  return nova27?.lastFinishedAtMs == null
    ? `No completed run yet${prism27}`
    : `Finished ${Fern4(nova27.lastFinishedAtMs)}${prism27}`;
}

function Fern4(ultra27) {
  let vapor27 = Math.max(0, Math.floor((Date.now() - ultra27) / 1e3));
  if (vapor27 < 60) return meadow4.format(-vapor27, "second");
  let wheat27 = Math.floor(vapor27 / 60);
  if (wheat27 < 60) return meadow4.format(-wheat27, "minute");
  let yarn27 = Math.floor(wheat27 / 60);
  return meadow4.format(-yarn27, "hour");
}

function Dusk4() {
  return Grove4(lagoon4);
}

function Grove4(zephyr27) {
  try {
    return window.localStorage.getItem(zephyr27) === "open";
  } catch {
    return false;
  }
}
