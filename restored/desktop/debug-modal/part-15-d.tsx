// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 15/17
/* split-lane-import-depth:1 */
// AST split 4/6

import { kelp4, lotus4, zephyr4 } from "./part-15-a";
import { Copper, Topaz2, Ultra2, Vapor2 } from "./part-15-b";
import { WorkspaceDirectoryTreeSearch } from "../../files/workspace-directory-tree-search";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { AppIconSft } from "../../icons/app-icon-sft";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { appServices } from "../desktop-services";

export function Amber4() {
  return kelp4 === null ? lotus4 : ((kelp4 = null), new Map());
}

function Topaz4() {
  let [wind25, yarrow25] = zephyr4.useState(false),
    [azure25, birch25] = zephyr4.useState(false),
    canyon25 = {
      hostId: LOCAL_HOST_ID,
    };
  let dew25 = {
    params: canyon25,
    queryConfig: {
      enabled: wind25,
    },
  };
  let { data } = SIDEBAR_HIT_TEST_SELECTOR("workspace-root-options", dew25),
    alpha26 = data?.roots ?? [];
  let bravo26 = alpha26,
    copper26 = data?.labels ?? {};
  let delta26 = copper26,
    echo26 = wind25 ? (
      <button
        type="button"
        className="rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10"
        onClick={() => birch25(Ultra4)}
      >
        {azure25 ? "Hide dotfiles" : "Show dotfiles"}
      </button>
    ) : null;
  let falcon26 = wind25 ? (
    bravo26.length === 0 ? (
      <div className="text-token-description-foreground">
        {"No project roots"}
      </div>
    ) : (
      bravo26.map((item) => (
        <Ultra2
          key={item}
          {...{
            includeHidden: azure25,
            label: delta26[item] ?? item,
            root: item,
          }}
        />
      ))
    )
  ) : null;
  return (
    <Copper
      {...{
        title: "Project roots",
        storageKey: "debug-workspace-roots",
        onToggle: yarrow25,
        variant: "global",
        actions: echo26,
        children: falcon26,
      }}
    />
  );
}

function Ultra4(gamma26) {
  return !gamma26;
}

function Vapor4(harbor26) {
  let { root, label, includeHidden } = harbor26,
    [indigo26, jade26] = zephyr4.useState(false),
    kite26 = `rotate(${indigo26 ? 0 : -90}deg)`,
    lemon26 = (
      <AppIconSft
        {...{
          className: "icon-2xs shrink-0 transition-transform duration-basic",
          style: {
            transform: kite26,
          },
        }}
      />
    );
  let marble26 = <span>{label}</span>;
  let nickel26 = (
    <span className="flex items-center gap-2">
      {lemon26}
      {marble26}
    </span>
  );
  let onyx26 = () => jade26(Wheat4);
  let pearl26 = (
    <Topaz2
      {...{
        title: nickel26,
        subtitle: root,
        onClick: onyx26,
      }}
    />
  );
  let quartz26 = indigo26 ? (
    <div className="pb-1">
      {
        <WorkspaceDirectoryTreeSearch
          {...{
            hostId: LOCAL_HOST_ID,
            includeHidden,
            root,
          }}
        />
      }
    </div>
  ) : null;
  return (
    <div className="border-t border-token-border/50 first:border-t-0">
      {pearl26}
      {quartz26}
    </div>
  );
}

function Wheat4(river26) {
  return !river26;
}

function Coral4() {
  let slate26 = appServices.primaryRuntime;
  if (slate26 == null) return null;
  return (
    <Vapor2
      {...{
        primaryRuntime: slate26,
      }}
    />
  );
}
