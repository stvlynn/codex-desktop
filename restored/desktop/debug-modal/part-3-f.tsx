// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 3/17
/* split-lane-import-depth:1 */
// AST split 6/6

import { Urn, Yarrow, azure, canyon, dew } from "./part-3-a";
import { Apex, Vale } from "./part-3-b";
import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { useQuery } from "../../hooks/use-query";
import { readScrollTop } from "../../navigation/app-action-dom";
import { appServices } from "../desktop-services";

function Dusk(meadow7) {
  let { isActive } = meadow7,
    nest7 = appServices.debug,
    [oak7, petal7] = azure.useState(null),
    quiet7 = isActive && nest7 != null,
    rain7 = async () => {
      if (nest7 == null) throw Error("Browser debug service is unavailable");
      return nest7.getBrowserSnapshot();
    };
  let seed7 = {
    enabled: quiet7,
    queryFn: rain7,
    queryKey: canyon,
    refetchInterval: dew,
    staleTime: readScrollTop.FIVE_SECONDS,
  };
  let { data, isFetching, isLoading, refetch } = useQuery(seed7),
    trail7 = async (echo8) => {
      if (nest7 != null)
        try {
          let falcon8 = await nest7.openBrowserTabOwner({
            browserTabId: echo8.browserTabId,
            conversationId: echo8.conversationId,
            windowId: echo8.windowId,
          });
          petal7(Urn(falcon8));
          await refetch();
        } catch (gamma8) {
          let harbor8 = gamma8;
          petal7("Failed to open Browser owner");
          appActionSidebarProjectRefSchema.error(
            "Failed to open Browser debug owner",
            {
              safe: {
                browserTabId: echo8.browserTabId,
                conversationId: echo8.conversationId,
                windowId: echo8.windowId,
              },
              sensitive: {
                error: harbor8,
              },
            },
          );
        }
    };
  let urn7 = trail7,
    vine7 = data == null,
    wind7 = () => {
      data != null &&
        navigator.clipboard
          ?.writeText(JSON.stringify(Yarrow(data), null, 2))
          .catch(Fern);
    };
  let yarrow7 = (
    <button
      type="button"
      className="cursor-interaction rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10 disabled:cursor-not-allowed disabled:opacity-50"
      disabled={vine7}
      onClick={wind7}
    >
      {"Copy restore"}
    </button>
  );
  let azure7 = data == null,
    birch7 = () => {
      data != null &&
        navigator.clipboard
          ?.writeText(JSON.stringify(data, null, 2))
          .catch(Elm);
    };
  let canyon7 = (
    <button
      type="button"
      className="cursor-interaction rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10 disabled:cursor-not-allowed disabled:opacity-50"
      disabled={azure7}
      onClick={birch7}
    >
      {"Copy JSON"}
    </button>
  );
  let dew7 = () => {
    refetch();
  };
  let alpha8 = isFetching ? (
    <VSCODE_EDITOR_ID
      {...{
        className: "icon-2xs",
      }}
    />
  ) : null;
  let bravo8 = (
    <button
      type="button"
      className="inline-flex cursor-interaction items-center gap-1 rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10 disabled:cursor-not-allowed disabled:opacity-50"
      disabled={nest7 == null}
      onClick={dew7}
    >
      {alpha8}
      {"Refresh"}
    </button>
  );
  let copper8 = (
    <div className="flex flex-wrap items-center justify-end gap-1">
      {yarrow7}
      {canyon7}
      {bravo8}
    </div>
  );
  let delta8 =
    nest7 == null ? (
      <Vale
        {...{
          message: "Browser debug service unavailable.",
        }}
      />
    ) : isLoading && data == null ? (
      <Vale
        {...{
          message: "Loading Browser debug snapshot...",
        }}
      />
    ) : data == null ? (
      <Vale
        {...{
          message: "Browser debug snapshot unavailable.",
        }}
      />
    ) : (
      <Apex
        {...{
          onOpenOwner: urn7,
          openOwnerStatus: oak7,
          snapshot: data,
        }}
      />
    );
  return (
    <div className="flex flex-col gap-3">
      {copper8}
      {delta8}
    </div>
  );
}

function Elm() {}

function Fern() {}
