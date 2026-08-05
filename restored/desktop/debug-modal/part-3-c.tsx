// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 3/17
/* split-lane-import-depth:1 */
// AST split 3/6

import { tide } from "./part-3-a";
import { Copper, Garnet, Storm, Tide, Xenon } from "./part-3-b";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_E4_Init } from "../../composer/composer-esm-inits";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import { noop } from "../../utils/noop";

function Topaz(urn6) {
  let { hostId, notifications } = urn6,
    vine6 = CodexPluginActionType(appScopeAtom),
    [wind6, yarrow6] = tide.useState(false),
    [azure6, birch6] = tide.useState(null),
    canyon6,
    dew6,
    alpha7,
    bravo7,
    copper7,
    delta7,
    echo7,
    falcon7,
    gamma7,
    harbor7;
  {
    let lemon7 = Glide(notifications);
    dew6 = azure6 != null && lemon7.includes(azure6) ? azure6 : null;
    let marble7 =
      dew6 == null
        ? notifications
        : notifications.filter((item) => item.threadId === dew6);
    let nickel7 = marble7,
      onyx7;
    onyx7 = nickel7.filter(Wheat);
    alpha7 = onyx7;
    let pearl7;
    pearl7 = wind6 ? nickel7 : nickel7.filter(Vapor);
    bravo7 = pearl7;
    canyon6 = Zephyr;
    echo7 = notifications.length === 0;
    falcon7 = () => {
      noop(vine6, hostId);
    };
    gamma7 = `debug-app-server-notifications-${hostId}`;
    harbor7 = "Notifications";
    copper7 = "mb-2 flex flex-wrap items-center justify-between gap-2";
    delta7 =
      lemon7.length > 0 ? (
        <select
          className="bg-token-background max-w-80 cursor-interaction rounded-md border border-token-border px-2 py-1 text-xs text-token-foreground"
          value={dew6 ?? ""}
          onChange={(event) => {
            birch6(event.currentTarget.value || null);
          }}
        >
          <option value="">{"All threads"}</option>
          {lemon7.map(_a)}
        </select>
      ) : null;
  }
  let indigo7 =
    alpha7.length > 0 ? (
      <label className="ml-auto flex cursor-interaction items-center gap-2 text-xs text-token-description-foreground">
        <input
          checked={wind6}
          className="cursor-interaction"
          onChange={(event) => {
            yarrow6(event.currentTarget.checked);
          }}
          type="checkbox"
        />
        {"Show delta notifications"}
        <span className="tabular-nums">
          {"("}
          {alpha7.length}
          {")"}
        </span>
      </label>
    ) : null;
  let jade7 = (
    <div className={copper7}>
      {delta7}
      {indigo7}
    </div>
  );
  let kite7 =
    bravo7.length > 0 ? (
      <div className="flex max-h-[300px] flex-col gap-2 overflow-y-auto pr-1">
        {bravo7.map(Ultra)}
      </div>
    ) : (
      <Xenon
        {...{
          message:
            alpha7.length > 0
              ? "Only hidden delta notifications recorded"
              : Knoll(dew6),
        }}
      />
    );
  return (
    <Garnet
      {...{
        clearDisabled: echo7,
        onClear: falcon7,
        storageKey: gamma7,
        title: harbor7,
        children: [jade7, kite7],
      }}
    />
  );
}

function Ultra(quartz7) {
  return (
    <Storm
      key={quartz7.id}
      {...{
        notification: quartz7,
      }}
    />
  );
}

function _a(river7) {
  return (
    <Tide
      key={river7}
      {...{
        threadId: river7,
      }}
    />
  );
}

function Vapor(slate7) {
  return !slate7.isNoisy;
}

function Wheat(timber7) {
  return timber7.isNoisy;
}

function Zephyr(yellow7) {
  let { children, clearDisabled, onClear, storageKey, title } = yellow7,
    zinc7 = (
      <button
        type="button"
        className="cursor-interaction rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10 disabled:cursor-default disabled:opacity-50"
        disabled={clearDisabled}
        onClick={onClear}
      >
        {"Clear"}
      </button>
    );
  let amber7 = <div className="py-3">{children}</div>;
  return (
    <div className="overflow-hidden rounded-lg border border-token-border bg-token-foreground/[0.025]">
      {
        <Copper
          {...{
            actions: zinc7,
            storageKey,
            title,
            variant: "global",
            children: amber7,
          }}
        />
      }
    </div>
  );
}

function Glide(pine7) {
  let quest7 = [],
    ridge7 = new Set();
  for (let storm7 of pine7)
    storm7.threadId != null &&
      !ridge7.has(storm7.threadId) &&
      (ridge7.add(storm7.threadId), quest7.push(storm7.threadId));
  return quest7;
}

function Knoll(wave7) {
  return wave7 == null
    ? "No notifications recorded for this manager yet"
    : "No notifications recorded for this thread";
}

function Yarn(umbra7) {
  let { threadId } = umbra7,
    violet7 = resolveScienceModelLabel(threadId);
  let willow7 = CodexBrowserSurfaceActionType(
      ensureComposerEsm_E4_Init,
      violet7,
    ),
    xenon7 = willow7?.trim() || "Untitled thread";
  return <option value={threadId}>{xenon7}</option>;
}

function Acorn(basalt7) {
  let { message } = basalt7;
  return (
    <div className="rounded border border-dashed border-token-border px-3 py-6 text-center text-xs text-token-description-foreground">
      {message}
    </div>
  );
}
