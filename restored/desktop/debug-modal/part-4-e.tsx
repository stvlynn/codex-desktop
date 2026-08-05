// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 4/17
/* split-lane-import-depth:1 */
// AST split 5/6

import { Vine, Wind } from "./part-4-a";
import { Falcon } from "./part-4-b";
import { AppIconTk } from "../../icons/app-icon-tk";

function Meadow(ridge8) {
  let { onOpenOwner, tab } = ridge8,
    storm8 = tab.title.trim() || "Untitled Browser tab";
  let tide8 = (
    <div className="truncate text-sm font-medium text-token-foreground">
      {storm8}
    </div>
  );
  let unity8 = (
    <div className="mt-1 truncate font-mono text-[11px] text-token-description-foreground">
      {tab.conversationId}
      {" · "}
      {tab.browserTabId}
    </div>
  );
  let vale8 = (
    <div className="min-w-0">
      {tide8}
      {unity8}
    </div>
  );
  let wave8 = tab.isBrowserUseActive ? (
    <span className="rounded border border-token-border px-1.5 py-0.5 text-token-foreground">
      {"browser-use active"}
    </span>
  ) : null;
  let apex8 = <span>{tab.sessionState}</span>;
  let brook8 = (
    <span>
      {"w"}
      {tab.windowId}
    </span>
  );
  let cliff8 = (
    <span>
      {"o"}
      {tab.ownerWebContentsId}
    </span>
  );
  let dusk8 = tab.guestWebContentsId ?? "none",
    elm8 = (
      <span>
        {"g"}
        {dusk8}
      </span>
    );
  let fern8 = !tab.canOpenOwner,
    grove8 = (event) => {
      event.preventDefault();
      event.stopPropagation();
      onOpenOwner(tab);
    };
  let hill8 = (
    <span className="inline-flex items-center gap-1">
      {"Open owner"}
      {
        <AppIconTk
          {...{
            className: "icon-2xs",
          }}
        />
      }
    </span>
  );
  let isle8 = (
    <button
      type="button"
      className="cursor-interaction rounded border border-token-border px-2 py-1 text-xs text-token-foreground hover:bg-token-foreground/10 disabled:cursor-default disabled:opacity-50"
      disabled={fern8}
      onClick={grove8}
    >
      {hill8}
    </button>
  );
  let juniper8 = (
    <div className="flex shrink-0 items-center gap-2 text-[11px] text-token-description-foreground tabular-nums">
      {wave8}
      {apex8}
      {brook8}
      {cliff8}
      {elm8}
      {isle8}
    </div>
  );
  let lagoon8 = (
    <summary className="flex cursor-interaction list-none items-center justify-between gap-3 px-3 py-2 marker:content-none">
      {vale8}
      {juniper8}
    </summary>
  );
  let meadow8 = (
    <Falcon
      {...{
        label: "Conversation",
        value: tab.conversationId,
      }}
    />
  );
  let nest8 = (
    <Falcon
      {...{
        label: "Browser tab",
        value: tab.browserTabId,
      }}
    />
  );
  let oak8 = (
    <Falcon
      {...{
        label: "Page storage ID",
        value: tab.browserStorageId,
      }}
    />
  );
  let petal8 = String(tab.windowId),
    quiet8 = (
      <Falcon
        {...{
          label: "Window",
          value: petal8,
        }}
      />
    );
  let rain8 = String(tab.ownerWebContentsId),
    seed8 = (
      <Falcon
        {...{
          label: "Owner webContents",
          value: rain8,
        }}
      />
    );
  let trail8 = tab.ownerRoutePath ?? "missing",
    urn8 = (
      <Falcon
        {...{
          label: "Owner route",
          value: trail8,
        }}
      />
    );
  let vine8 =
      tab.guestWebContentsId == null ? "none" : String(tab.guestWebContentsId),
    wind8 = (
      <Falcon
        {...{
          label: "Guest webContents",
          value: vine8,
        }}
      />
    );
  let yarrow8 = tab.pageKey ?? "none",
    azure8 = (
      <Falcon
        {...{
          label: "Page key",
          value: yarrow8,
        }}
      />
    );
  let birch8 = tab.url || "about:blank",
    canyon8 = (
      <Falcon
        {...{
          label: "URL",
          value: birch8,
        }}
      />
    );
  let dew8 = tab.pendingUrl || "none",
    alpha9 = (
      <Falcon
        {...{
          label: "Pending URL",
          value: dew8,
        }}
      />
    );
  let bravo9 = `snapshot=${tab.hasPersistedPageState}`,
    copper9 = `history=${tab.persistedHistoryEntryCount ?? "none"}`,
    delta9 = `host=${tab.webviewHostRegistered}`,
    echo9 = [bravo9, copper9, delta9];
  let falcon9 = echo9.join(" "),
    gamma9 = (
      <Falcon
        {...{
          label: "Persistence",
          value: falcon9,
        }}
      />
    );
  let harbor9 = Wind(tab.persistedPageStateUpdatedAtMs);
  let indigo9 = (
    <Falcon
      {...{
        label: "Snapshot age",
        value: harbor9,
      }}
    />
  );
  let jade9 = (
    <Falcon
      {...{
        label: "Restore phase",
        value: tab.restorePhase,
      }}
    />
  );
  let kite9 =
    tab.restoreInvariant == null ? null : (
      <Falcon
        {...{
          label: "Restore invariant",
          value: tab.restoreInvariant,
        }}
      />
    );
  let lemon9 = Vine(tab.bounds);
  let marble9 = (
    <Falcon
      {...{
        label: "Bounds",
        value: lemon9,
      }}
    />
  );
  let nickel9 = `active=${tab.active}`,
    onyx9 = `presented=${tab.presented}`,
    _e = `visible=${tab.visible}`,
    pearl9 = `hasPage=${tab.hasPage}`,
    quartz9 = `loading=${tab.isLoading}`,
    be = `restoring=${tab.isRestoring}`,
    river9 = `suspended=${tab.isSuspended}`,
    slate9 = [nickel9, onyx9, _e, pearl9, quartz9, be, river9];
  let timber9 = slate9.join(" "),
    umbra9 = (
      <Falcon
        {...{
          label: "Flags",
          value: timber9,
        }}
      />
    );
  let violet9 = `page=${tab.isBrowserUsePage}`,
    willow9 = `active=${tab.isBrowserUseActive}`,
    xenon9 = `agent=${tab.isAgentControllingBrowser}`,
    yellow9 = `visibilityRequest=${tab.hasPendingBrowserUseVisibilityRequest}`,
    zinc9 = `panelOpen=${tab.pendingBrowserUsePanelOpen}`,
    amber9 = [violet9, willow9, xenon9, yellow9, zinc9];
  let basalt9 = amber9.join(" "),
    cedar9 = (
      <Falcon
        {...{
          label: "Browser Use",
          value: basalt9,
        }}
      />
    );
  let daisy9 = `mount=${tab.mountGeneration}`,
    ember9 = `last=${tab.lastLifecycleSequence}`,
    flint9 = `presented=${tab.lastPresentedSequence}`,
    garnet9 = `pendingAttach=${tab.pendingAttachCount}`,
    hazel9 = [daisy9, ember9, flint9, garnet9];
  let ivory9 = hazel9.join(" "),
    jasper9 = (
      <Falcon
        {...{
          label: "Lifecycle",
          value: ivory9,
        }}
      />
    );
  let kelp9 =
      tab.pendingTeardown == null
        ? "none"
        : `${tab.pendingTeardown.reason} mount=${tab.pendingTeardown.mountGeneration} id=${tab.pendingTeardown.teardownId}`,
    lotus9 = (
      <Falcon
        {...{
          label: "Pending teardown",
          value: kelp9,
        }}
      />
    );
  let mint9 = (
    <div className="border-t border-token-border px-3">
      {meadow8}
      {nest8}
      {oak8}
      {quiet8}
      {seed8}
      {urn8}
      {wind8}
      {azure8}
      {canyon8}
      {alpha9}
      {gamma9}
      {indigo9}
      {jade9}
      {kite9}
      {marble9}
      {umbra9}
      {cedar9}
      {jasper9}
      {lotus9}
    </div>
  );
  return (
    <details className="group bg-token-background rounded-lg border border-token-border">
      {lagoon8}
      {mint9}
    </details>
  );
}
