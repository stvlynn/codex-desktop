// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 5/17
/* split-lane-import-depth:1 */
// AST split 3/6

import { quartz1, slate1 } from "./part-5-a";
import { Bravo1, Pearl1 } from "./part-5-b";
import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { useQuery } from "../../hooks/use-query";
import { AppIconNk } from "../../icons/app-icon-nk";
import { readScrollTop } from "../../navigation/app-action-dom";
import { appServices } from "../desktop-services";

function Copper1(falcon10) {
  let { isActive } = falcon10,
    gamma10 = appServices.downloads,
    [harbor10, indigo10] = quartz1.useState(null),
    jade10 = isActive && gamma10 != null,
    kite10 = async () => {
      if (gamma10 == null) throw Error("Downloads service is unavailable");
      return gamma10.getSnapshot();
    };
  let lemon10 = {
    enabled: jade10,
    queryFn: kite10,
    queryKey: slate1,
    staleTime: readScrollTop.FIVE_SECONDS,
  };
  let { data, isFetching, isLoading, refetch } = useQuery(lemon10),
    marble10 = async (zinc10, amber10) => {
      if (gamma10 != null) {
        indigo10(null);
        try {
          let basalt10 = await amber10();
          basalt10.ok || indigo10(Onyx1(zinc10, basalt10));
          await refetch();
        } catch (cedar10) {
          let daisy10 = cedar10;
          indigo10(`${zinc10} failed`);
          appActionSidebarProjectRefSchema.error(
            "Failed to run downloads debug action",
            {
              safe: {
                label: zinc10,
              },
              sensitive: {
                error: daisy10,
              },
            },
          );
        }
      }
    };
  let nickel10 = marble10,
    onyx10 = () => {
      gamma10 != null &&
        nickel10("Open downloads folder", () => gamma10.showDownloadsFolder());
    };
  let pearl10 = (
    <AppIconNk
      {...{
        className: "icon-2xs",
      }}
    />
  );
  let quartz10 = (
    <button
      type="button"
      className="inline-flex cursor-interaction items-center gap-1 rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10 disabled:cursor-not-allowed disabled:opacity-50"
      disabled={gamma10 == null}
      onClick={onyx10}
    >
      {pearl10}
      {"Open in Finder"}
    </button>
  );
  let river10 = data == null,
    slate10 = () => {
      data != null &&
        navigator.clipboard
          ?.writeText(JSON.stringify(data, null, 2))
          .catch(Delta1);
    };
  let timber10 = (
    <button
      type="button"
      className="cursor-interaction rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10 disabled:cursor-not-allowed disabled:opacity-50"
      disabled={river10}
      onClick={slate10}
    >
      {"Copy JSON"}
    </button>
  );
  let umbra10 = () => {
    refetch();
  };
  let violet10 = isFetching ? (
    <VSCODE_EDITOR_ID
      {...{
        className: "icon-2xs",
      }}
    />
  ) : null;
  let willow10 = (
    <button
      type="button"
      className="inline-flex cursor-interaction items-center gap-1 rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10 disabled:cursor-not-allowed disabled:opacity-50"
      disabled={gamma10 == null}
      onClick={umbra10}
    >
      {violet10}
      {"Refresh"}
    </button>
  );
  let xenon10 = (
    <div className="flex flex-wrap items-center justify-end gap-1">
      {quartz10}
      {timber10}
      {willow10}
    </div>
  );
  let yellow10 =
    gamma10 == null ? (
      <Bravo1
        {...{
          message: "Downloads service unavailable.",
        }}
      />
    ) : isLoading && data == null ? (
      <Bravo1
        {...{
          message: "Loading downloads...",
        }}
      />
    ) : data == null ? (
      <Bravo1
        {...{
          message: "Downloads snapshot unavailable.",
        }}
      />
    ) : (
      <Pearl1
        {...{
          actionStatus: harbor10,
          snapshot: data,
          onCancel: (ember10) =>
            nickel10("Cancel download", () =>
              gamma10.cancel({
                id: ember10.id,
              }),
            ),
          onOpen: (flint10) =>
            nickel10("Open download", () =>
              gamma10.open({
                id: flint10.id,
              }),
            ),
          onPause: (garnet10) =>
            nickel10("Pause download", () =>
              gamma10.pause({
                id: garnet10.id,
              }),
            ),
          onRemove: (hazel10) =>
            nickel10("Remove download", () =>
              gamma10.removeFromHistory({
                id: hazel10.id,
              }),
            ),
          onResume: (ivory10) =>
            nickel10("Resume download", () =>
              gamma10.resume({
                id: ivory10.id,
              }),
            ),
          onShowInFolder: (jasper10) =>
            nickel10("Show download in Finder", () =>
              gamma10.showInFolder({
                id: jasper10.id,
              }),
            ),
        }}
      />
    );
  return (
    <div className="flex flex-col gap-3">
      {xenon10}
      {yellow10}
    </div>
  );
}

function Onyx1(birch10, canyon10) {
  if (canyon10.message != null && canyon10.message !== "")
    return `${birch10} failed: ${canyon10.message}`;
  switch (canyon10.reason) {
    case "download-not-pausable":
      return `${birch10} failed: download cannot be paused`;
    case "download-not-removable":
      return `${birch10} failed: active download cannot be removed`;
    case "download-not-resumable":
      return `${birch10} failed: download cannot be resumed`;
    case "missing-download":
      return `${birch10} failed: download is no longer in the debug list`;
    case "open-failed":
      return `${birch10} failed: file could not be opened`;
    case "show-in-folder-failed":
      return `${birch10} failed: file could not be shown in Finder`;
  }
}

function Delta1() {}
