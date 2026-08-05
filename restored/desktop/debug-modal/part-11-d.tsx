// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 11/17
/* split-lane-import-depth:1 */
// AST split 4/5

import {
  AppInitialYC,
  IntlProvider,
  bravo3,
  echo3,
  falcon3,
  gamma3,
  harbor3,
  indigo3,
  jade3,
} from "./part-11-a";
import { Amber1, Basalt1, Cedar1 } from "./part-11-b";
import { Alpha3 } from "./part-11-e";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom } from "../../runtime/app-scope-runtime";
import { AppIconSft } from "../../icons/app-icon-sft";
import { DropdownMenu } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { isSvgHyphenatedTag } from "../../utils/is-svg-hyphenated-tag";

function Apex2() {
  let apex20 = CodexPluginActionType(appScopeAtom),
    brook20 = isSvgHyphenatedTag(apex20.node.store),
    [cliff20, dusk20] = bravo3.useState(""),
    [elm20, fern20] = bravo3.useState(""),
    [grove20, hill20] = bravo3.useState("all"),
    [isle20, juniper20] = bravo3.useState(0),
    [lagoon20, meadow20] = bravo3.useState(falcon3),
    nest20,
    oak20,
    petal20,
    quiet20,
    rain20;
  {
    let trail20 = cliff20.trim().toLowerCase(),
      urn20 = elm20.trim().toLowerCase();
    rain20 = brook20.filter(
      (item) =>
        Rain2(item).includes(trail20) &&
        Seed2(item).includes(urn20) &&
        Petal2(item, grove20),
    );
    nest20 = rain20.slice(0, lagoon20);
    let vine20 = Meadow2(nest20);
    oak20 = "flex flex-col gap-3 py-3";
    let wind20 = (event) => {
      dusk20(event.currentTarget.value);
      meadow20(falcon3);
    };
    let yarrow20 = (
      <input
        type="search"
        value={cliff20}
        placeholder="Filter"
        className="h-8 min-w-0 rounded border border-token-border bg-token-input-background px-2 text-xs text-token-foreground outline-none focus:border-token-focus-border"
        onChange={wind20}
      />
    );
    let azure20 = (event) => {
      fern20(event.currentTarget.value);
      meadow20(falcon3);
    };
    let birch20 = (
      <input
        type="search"
        value={elm20}
        placeholder="Filter family keys"
        className="h-8 min-w-0 rounded border border-token-border bg-token-input-background px-2 text-xs text-token-foreground outline-none focus:border-token-focus-border"
        onChange={azure20}
      />
    );
    let canyon20 = Quiet2(grove20);
    let dew20 = (
      <AppIconSft
        {...{
          className: "icon-2xs opacity-70",
        }}
      />
    );
    let alpha21 = (
      <button
        type="button"
        className="inline-flex h-8 cursor-interaction items-center gap-1.5 rounded border border-token-border px-2 text-xs text-token-foreground hover:bg-token-foreground/5 active:scale-[0.98]"
      >
        {canyon20}
        {dew20}
      </button>
    );
    let bravo21 = (
      <div className="flex min-w-[140px] flex-col gap-0.5">
        {echo3.map((item) => (
          <DropdownMenu.Item
            key={item}
            {...{
              onSelect: () => {
                hill20(item);
                meadow20(falcon3);
              },
              children: Quiet2(item),
            }}
          />
        ))}
      </div>
    );
    let copper21 = (
      <DropdownMenuPopover
        {...{
          align: "end",
          triggerButton: alpha21,
          children: bravo21,
        }}
      />
    );
    let delta21;
    delta21 = (
      <button
        type="button"
        className="h-8 cursor-interaction rounded border border-token-border px-2 text-xs text-token-foreground hover:bg-token-foreground/5 active:scale-[0.98]"
        onClick={() => {
          juniper20(Elm2);
        }}
      >
        {"Refresh"}
      </button>
    );
    petal20 = (
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto_auto] gap-2">
        {yarrow20}
        {birch20}
        {copper21}
        {delta21}
      </div>
    );
    quiet20 =
      vine20.length === 0 ? (
        <div className="rounded border border-token-border bg-token-foreground/[0.025] px-3 py-4 text-xs text-token-description-foreground">
          {"No matching Maitai values"}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {vine20.map((item) =>
            item.isFamily ? (
              <Amber1
                key={item.id}
                {...{
                  group: item,
                  refreshVersion: isle20,
                  store: apex20.node.store,
                  onValueChanged: () => {
                    juniper20(Dusk2);
                  },
                }}
              />
            ) : (
              <Basalt1
                key={item.id}
                {...{
                  entry: item.entries[0],
                  refreshVersion: isle20,
                  store: apex20.node.store,
                  onValueChanged: () => {
                    juniper20(Cliff2);
                  },
                }}
              />
            ),
          )}
        </div>
      );
  }
  let seed20 =
    nest20.length < rain20.length ? (
      <button
        type="button"
        className="h-8 cursor-interaction rounded border border-token-border px-2 text-xs text-token-foreground hover:bg-token-foreground/5 active:scale-[0.98]"
        onClick={() => {
          meadow20(Brook2);
        }}
      >
        {"Show 50 more"}
      </button>
    ) : null;
  return (
    <div className={oak20}>
      {petal20}
      {quiet20}
      {seed20}
    </div>
  );
}

function Brook2(echo21) {
  return echo21 + falcon3;
}

function Cliff2(falcon21) {
  return falcon21 + 1;
}

function Dusk2(gamma21) {
  return gamma21 + 1;
}

function Elm2(harbor21) {
  return harbor21 + 1;
}

function Hill2(timber21) {
  let {
      entry,
      isGrouped = false,
      refreshVersion,
      store,
      onValueChanged,
    } = timber21,
    umbra21 = Trail2(store, entry, refreshVersion),
    [violet21, willow21] = bravo3.useState(false),
    [xenon21, yellow21] = bravo3.useState(false),
    zinc21 = entry.writeValue != null && typeof umbra21 == "boolean",
    amber21 = entry.writeValue != null && !zinc21 && Canyon2(umbra21),
    basalt21 =
      !isGrouped &&
      "rounded border border-token-border bg-token-foreground/[0.025]",
    cedar21 = IntlProvider("flex flex-col", basalt21);
  let daisy21 = () => {
    let mint21 = !violet21;
    willow21(mint21);
    mint21 || yellow21(false);
  };
  let ember21 = `rotate(${violet21 ? 0 : -90}deg)`,
    flint21 = (
      <AppIconSft
        {...{
          className: "icon-2xs shrink-0 transition-transform duration-basic",
          style: {
            transform: ember21,
          },
        }}
      />
    );
  let garnet21 = isGrouped ? Urn2(entry.familyKey) : entry.label;
  let hazel21 = (
    <span className="truncate font-mono text-xs text-token-foreground">
      {garnet21}
    </span>
  );
  let ivory21 = Oak2(entry);
  let jasper21 = (
    <span className="ml-auto rounded bg-token-foreground/10 px-1.5 py-0.5 text-[11px] text-token-description-foreground uppercase">
      {ivory21}
    </span>
  );
  let kelp21 = (
    <button
      type="button"
      aria-expanded={violet21}
      className="flex min-w-0 cursor-interaction items-center gap-2 px-3 py-2 text-left hover:bg-token-foreground/5"
      onClick={daisy21}
    >
      {flint21}
      {hazel21}
      {jasper21}
    </button>
  );
  let lotus21 = violet21 ? (
    <div className="flex flex-col gap-2 border-t border-token-border px-3 py-2">
      <div className="flex items-center justify-between gap-3">
        <div className="truncate text-xs text-token-description-foreground">
          {entry.scopeName}
          {" /"} {Urn2(entry.scopeKey)}
        </div>
        {zinc21 ? (
          <AppInitialYC
            ariaLabel={`Set ${entry.label}`}
            checked={umbra21}
            size="sm"
            onChange={(nova21) => {
              entry.writeValue?.(nova21);
              onValueChanged();
            }}
          />
        ) : amber21 ? (
          <button
            type="button"
            className="h-7 shrink-0 cursor-interaction rounded border border-token-border px-2 text-xs text-token-foreground hover:bg-token-foreground/5 active:scale-[0.98]"
            onClick={() => {
              yellow21(Isle2);
            }}
          >
            {xenon21 ? "Cancel" : "Edit"}
          </button>
        ) : null}
      </div>
      {
        <Cedar1
          {...{
            value: umbra21,
          }}
        />
      }
      {xenon21 && amber21 ? (
        <$l
          {...{
            entry,
            value: umbra21,
            onCancel: () => {
              yellow21(false);
            },
            onSave: () => {
              yellow21(false);
              onValueChanged();
            },
          }}
        />
      ) : null}
    </div>
  ) : null;
  return (
    <div className={cedar21}>
      {kelp21}
      {lotus21}
    </div>
  );
}

function Isle2(olive21) {
  return !olive21;
}

function Juniper2(prism21) {
  let { value } = prism21,
    [quill21, reef21] = bravo3.useState(false),
    sage21 = Wind2(value);
  let topaz21 = sage21,
    ultra21 = quill21 ? Vine2(value) : topaz21.text;
  let vapor21 = ultra21,
    wheat21 =
      value instanceof Error
        ? "text-token-charts-red"
        : "text-token-foreground",
    yarn21 = IntlProvider(
      "w-full min-w-0 overflow-x-auto font-mono text-xs leading-relaxed whitespace-pre-wrap break-words",
      wheat21,
    );
  let zephyr21 = <pre className={yarn21}>{vapor21}</pre>;
  let acorn21 = topaz21.truncated ? (
    <button
      type="button"
      aria-expanded={quill21}
      className="cursor-interaction text-xs text-token-description-foreground hover:text-token-foreground"
      onClick={() => {
        reef21(Lagoon2);
      }}
    >
      {quill21 ? "Show less" : "Show more"}
    </button>
  ) : null;
  return (
    <div className="flex min-w-0 flex-col items-start gap-1">
      {zephyr21}
      {acorn21}
    </div>
  );
}

function Lagoon2(bloom21) {
  return !bloom21;
}

function $l(coral21) {
  let { entry, value, onCancel, onSave } = coral21,
    drift21 = Vine2(value);
  let [eagle21, frost21] = bravo3.useState(drift21),
    [glide21, honey21] = bravo3.useState(null),
    iris21 = (event) => {
      frost21(event.currentTarget.value);
      honey21(null);
    };
  let jewel21 = (
    <textarea
      className="min-h-24 resize-y rounded border border-token-border bg-token-input-background p-2 font-mono text-xs text-token-foreground outline-none focus:border-token-focus-border"
      spellCheck={false}
      value={eagle21}
      onChange={iris21}
    />
  );
  let knoll21 =
    glide21 == null ? null : (
      <div className="text-xs text-token-charts-red">{glide21}</div>
    );
  let lunar21 = (
    <button
      type="button"
      className="h-7 cursor-interaction rounded border border-token-border px-2 text-xs text-token-foreground hover:bg-token-foreground/5 active:scale-[0.98]"
      onClick={() => {
        try {
          entry.writeValue?.(Birch2(eagle21));
          onSave();
        } catch (orbit21) {
          let pine21 = orbit21;
          honey21(pine21 instanceof Error ? pine21.message : String(pine21));
        }
      }}
    >
      {"Save value"}
    </button>
  );
  let moss21 = (
    <button
      type="button"
      className="h-7 cursor-interaction rounded px-2 text-xs text-token-description-foreground hover:bg-token-foreground/5 hover:text-token-foreground active:scale-[0.98]"
      onClick={onCancel}
    >
      {"Cancel"}
    </button>
  );
  let north21 = (
    <div className="flex items-center gap-2">
      {lunar21}
      {moss21}
    </div>
  );
  return (
    <div className="flex flex-col gap-2 border-t border-token-border pt-2">
      {jewel21}
      {knoll21}
      {north21}
    </div>
  );
}

function Meadow2(quest21) {
  let ridge21 = new Map(),
    storm21 = [];
  for (let tide21 of quest21) {
    if (!Nest2(tide21)) {
      storm21.push({
        entries: [tide21],
        id: `entry:${tide21.id}`,
        isFamily: false,
        label: tide21.label,
      });
      continue;
    }
    let unity21 = ridge21.get(tide21.label);
    if (unity21 != null) {
      unity21.entries.push(tide21);
      continue;
    }
    let vale21 = {
      entries: [tide21],
      id: `family:${tide21.label}`,
      isFamily: true,
      label: tide21.label,
    };
    ridge21.set(tide21.label, vale21);
    storm21.push(vale21);
  }
  return storm21;
}

function Nest2(wave21) {
  return wave21.kind === "family-derived" || wave21.kind === "family-signal";
}

function Oak2(apex21) {
  switch (apex21.kind) {
    case "derived":
    case "family-derived":
      return "derived";
    case "mutation":
      return "mutation";
    case "query":
      return "query";
    case "signal":
    case "family-signal":
      return "signal";
  }
}

function Petal2(brook21, cliff21) {
  return cliff21 === "all"
    ? true
    : cliff21 === "family"
      ? Nest2(brook21)
      : !Nest2(brook21) && Oak2(brook21) === cliff21;
}

function Quiet2(dusk21) {
  switch (dusk21) {
    case "all":
      return "All types";
    case "derived":
      return "Derived";
    case "family":
      return "Family";
    case "mutation":
      return "Mutation";
    case "query":
      return "Query";
    case "signal":
      return "Signal";
  }
}

function Rain2(elm21) {
  return [elm21.kind, elm21.scopeName, String(elm21.scopeKey), elm21.label]
    .join(" ")
    .toLowerCase();
}

function Seed2(fern21) {
  return Nest2(fern21) ? Vine2(fern21.familyKey).toLowerCase() : "";
}

function Trail2(grove21, hill21, isle21) {
  try {
    return grove21.get(hill21.atom);
  } catch (juniper21) {
    return juniper21;
  }
}

function Urn2(lagoon21) {
  return typeof lagoon21 == "string"
    ? lagoon21
    : Vine2(lagoon21).replaceAll(/\s+/g, " ");
}

function Vine2(meadow21) {
  if (meadow21 instanceof Error) return `${meadow21.name}: ${meadow21.message}`;
  if (meadow21 === undefined) return "undefined";
  try {
    return (
      JSON.stringify(meadow21, Alpha3(), 2) ??
      Object.prototype.toString.call(meadow21)
    );
  } catch {
    return Object.prototype.toString.call(meadow21);
  }
}

function Wind2(nest21) {
  let oak21 = {
      truncated: false,
    },
    petal21 = Yarrow2(nest21, oak21, 0),
    quiet21 =
      typeof petal21 == "string" && nest21 instanceof Error
        ? petal21
        : (JSON.stringify(petal21, null, 2) ?? String(petal21)),
    rain21 = quiet21.split("\n");
  return (
    rain21.length > indigo3 && (oak21.truncated = true),
    {
      text:
        rain21.length > indigo3
          ? `${rain21.slice(0, indigo3).join("\n")}\n…`
          : quiet21,
      truncated: oak21.truncated,
    }
  );
}

function Yarrow2(seed21, trail21, urn21) {
  if (seed21 instanceof Error) return `${seed21.name}: ${seed21.message}`;
  if (typeof seed21 == "function")
    return `[Function ${seed21.name || "anonymous"}]`;
  if (typeof seed21 == "bigint") return `${seed21}n`;
  if (typeof seed21 == "string")
    return seed21.length <= jade3
      ? seed21
      : ((trail21.truncated = true), `${seed21.slice(0, jade3)}…`);
  if (typeof seed21 != "object" || !seed21) return seed21;
  if (urn21 >= gamma3)
    return (
      (trail21.truncated = true),
      Array.isArray(seed21)
        ? `[Array(${seed21.length})]`
        : `[${seed21.constructor?.name ?? "Object"}]`
    );
  if (seed21 instanceof Map)
    return Azure2([...seed21.entries()], trail21, ([yarrow21, azure21]) => [
      Yarrow2(yarrow21, trail21, urn21 + 1),
      Yarrow2(azure21, trail21, urn21 + 1),
    ]);
  if (seed21 instanceof Set)
    return Azure2([...seed21], trail21, (birch21) =>
      Yarrow2(birch21, trail21, urn21 + 1),
    );
  if (Array.isArray(seed21))
    return Azure2(seed21, trail21, (canyon21) =>
      Yarrow2(canyon21, trail21, urn21 + 1),
    );
  let vine21 = Object.entries(seed21),
    wind21 = vine21
      .slice(0, harbor3)
      .map(([dew21, alpha22]) => [dew21, Yarrow2(alpha22, trail21, urn21 + 1)]);
  return (
    vine21.length > harbor3 &&
      ((trail21.truncated = true),
      wind21.push(["…", `${vine21.length - harbor3} more`])),
    Object.fromEntries(wind21)
  );
}

function Azure2(bravo22, copper22, delta22) {
  let echo22 = bravo22.slice(0, harbor3).map((item) => delta22(item));
  return (
    bravo22.length > harbor3 &&
      ((copper22.truncated = true),
      echo22.push(`${bravo22.length - harbor3} more`)),
    echo22
  );
}

function Birch2(falcon22) {
  if (falcon22.trim() !== "undefined") return JSON.parse(falcon22);
}

function Canyon2(gamma22) {
  return gamma22 == null ||
    typeof gamma22 == "boolean" ||
    typeof gamma22 == "string"
    ? true
    : typeof gamma22 == "number"
      ? Number.isFinite(gamma22)
      : Array.isArray(gamma22)
        ? gamma22.every(Canyon2)
        : Dew2(gamma22)
          ? Object.values(gamma22).every(Canyon2)
          : false;
}

function Dew2(harbor22) {
  let indigo22 = Object.getPrototypeOf(harbor22);
  return indigo22 === Object.prototype || indigo22 == null;
}
