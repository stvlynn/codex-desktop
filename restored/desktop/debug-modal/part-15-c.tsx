// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 15/17
/* split-lane-import-depth:1 */
// AST split 3/6

import {
  Alpha,
  IntlProvider,
  garnet4,
  hazel4,
  ivory4,
  jasper4,
  quill4,
} from "./part-15-a";
import {
  Falcon,
  Mint2,
  ReadLoginRouteQuerySnapshot,
  Reef2,
  Topaz2,
} from "./part-15-b";
import { Amber4 } from "./part-15-d";
import { ensureComposerEsm_Ilt_Init } from "../../composer/composer-esm-inits";
import { mergeCodexCompanions } from "../../pets/merge-codex-companions";

function Umbra4(slate25, timber25 = "") {
  if (!timber25.trim()) return [];
  let umbra25 = Daisy4(slate25),
    violet25 = new Map(
      [...Zinc4(timber25), ...(umbra25 == null ? [] : Basalt4(umbra25))].map(
        (item) => [`${item.kind}:${item.name}`, item],
      ),
    ).values();
  return Willow4(
    Array.from(violet25, (willow25) => Yellow4(slate25, willow25)),
    timber25,
  );
}

function Violet4(xenon25) {
  let yellow25 = Daisy4(xenon25);
  return yellow25 == null
    ? garnet4
    : {
        assignedExperimentCount: Object.values(yellow25.dynamic_configs).filter(
          Flint4,
        ).length,
        enabledGateCount: Object.keys(yellow25.feature_gates).filter(
          (item) => xenon25.getFeatureGate(item, hazel4).value,
        ).length,
        gateCount: Object.keys(yellow25.feature_gates).length,
      };
}

function Willow4(zinc25, amber25) {
  let basalt25 = amber25.trim().toLowerCase();
  return basalt25
    ? zinc25.filter((item) =>
        [
          item.kind,
          Xenon4(item.name, amber25),
          item.name,
          item.reason,
          item.ruleId,
          item.kind === "experiment" ? (item.groupName ?? "") : "",
        ]
          .join(" ")
          .toLowerCase()
          .includes(basalt25),
      )
    : zinc25;
}

function Xenon4(cedar25, daisy25) {
  let ember25 = Amber4().get(cedar25);
  if (ember25 != null) return ember25;
  let flint25 = daisy25.trim();
  return flint25.length > 0 && cedar25 === Cedar4(flint25) ? flint25 : cedar25;
}

function Yellow4(garnet25, hazel25) {
  switch (hazel25.kind) {
    case "gate": {
      let ivory25 = garnet25.getFeatureGate(hazel25.name, hazel4);
      return {
        kind: "gate",
        name: hazel25.name,
        enabled: ivory25.value,
        reason: ivory25.details.reason,
        ruleId: ivory25.ruleID,
      };
    }
    case "experiment": {
      let jasper25 = garnet25.getExperiment(hazel25.name, hazel4);
      return {
        kind: "experiment",
        name: hazel25.name,
        groupName: jasper25.groupName,
        isUserInExperiment:
          jasper25.__evaluation?.is_user_in_experiment ?? null,
        reason: jasper25.details.reason,
        ruleId: jasper25.ruleID,
      };
    }
  }
}

function Zinc4(kelp25) {
  let lotus25 = kelp25.trim().toLowerCase();
  return Array.from(Amber4())
    .filter(([, mint25]) => mint25.toLowerCase().includes(lotus25))
    .map(([nova25]) => ({
      kind: "gate",
      name: nova25,
    }));
}

function Basalt4(olive25) {
  return [
    ...Object.keys(olive25.feature_gates).map((item) => ({
      kind: "gate",
      name: item,
    })),
    ...Object.entries(olive25.dynamic_configs)
      .filter(([, prism25]) => Ember4(prism25))
      .map(([quill25]) => ({
        kind: "experiment",
        name: quill25,
      })),
  ];
}

function Cedar4(reef25) {
  let sage25 = new Int32Array(1),
    topaz25 = new Uint32Array(sage25.buffer);
  for (let ultra25 = 0; ultra25 < reef25.length; ultra25 += 1)
    sage25[0] = sage25[0] * 31 + reef25.charCodeAt(ultra25);
  return String(topaz25[0]);
}

function Daisy4(vapor25) {
  let wheat25 = vapor25.client ?? vapor25,
    yarn25 = Reflect.get(wheat25, "_store");
  if (typeof yarn25 != "object" || !yarn25) return null;
  let zephyr25 = Reflect.get(yarn25, "getValues");
  if (typeof zephyr25 != "function") return null;
  let acorn25 = ivory4.safeParse(Reflect.apply(zephyr25, yarn25, []));
  return acorn25.success ? acorn25.data : null;
}

function Ember4(bloom25) {
  return jasper4.safeParse(bloom25).success;
}

function Flint4(coral25) {
  let drift25 = jasper4.safeParse(coral25);
  return drift25.success
    ? "is_user_in_experiment" in drift25.data
      ? drift25.data.is_user_in_experiment
      : drift25.data.ue
    : false;
}

function Nova4() {
  let eagle25 = ensureComposerEsm_Ilt_Init(),
    [frost25, glide25] = quill4.useState(false),
    [honey25, iris25] = quill4.useState(""),
    [jewel25, knoll25] = quill4.useState(),
    lunar25,
    moss25,
    north25,
    orbit25,
    pine25,
    quest25,
    ridge25,
    storm25,
    tide25,
    unity25,
    vale25;
  {
    let brook25 = Umbra4(eagle25, honey25),
      { assignedExperimentCount, enabledGateCount, gateCount } =
        Violet4(eagle25),
      cliff25 = honey25.trim().length > 0,
      dusk25;
    dusk25 = (juniper25) =>
      juniper25.kind === "gate" && juniper25.name === jewel25;
    brook25.find(dusk25);
    lunar25 = Alpha;
    storm25 = "debug-statsig";
    tide25 = "Statsig";
    unity25 = "global";
    vale25 = true;
    orbit25 = "flex flex-col gap-3 py-1.5";
    let elm25 = `${enabledGateCount} / ${gateCount}`,
      fern25 = (
        <Falcon
          {...{
            label: "Enabled gates",
            value: elm25,
          }}
        />
      );
    let E = assignedExperimentCount.toString(),
      grove25;
    grove25 = (
      <Falcon
        {...{
          label: "Assigned experiments",
          value: E,
        }}
      />
    );
    pine25 = (
      <div className="flex flex-col gap-1">
        {fern25}
        {grove25}
      </div>
    );
    let hill25;
    hill25 = () => {
      glide25(true);
      mergeCodexCompanions(eagle25.client, "debug_button").finally(() => {
        glide25(false);
      });
    };
    quest25 = (
      <div className="flex border-t-[0.5px] border-token-border pt-3">
        {
          <ReadLoginRouteQuerySnapshot
            {...{
              color: "secondary",
              loading: frost25,
              onClick: hill25,
              children: "Force refresh",
            }}
          />
        }
      </div>
    );
    let isle25;
    isle25 = (event) => {
      iris25(event.target.value);
    };
    ridge25 = (
      <label className="flex flex-col gap-1 text-xs text-token-description-foreground">
        {"Search gates or experiments"}
        <input
          type="search"
          value={honey25}
          onChange={isle25}
          placeholder="example-gate-name"
          className="h-8 rounded border border-token-border bg-token-input-background px-2 text-token-foreground outline-none focus:border-token-focus-border"
        />
      </label>
    );
    moss25 = "flex flex-col";
    north25 =
      cliff25 && brook25.length === 0 ? (
        <div className="py-2 text-xs text-token-description-foreground">
          {"No matching Statsig entries"}
        </div>
      ) : cliff25 ? (
        brook25.map((item) => (
          <Mint2
            key={`${item.kind}:${item.name}`}
            {...{
              entry: item,
              onSelectGate: undefined,
              query: honey25,
            }}
          />
        ))
      ) : null;
  }
  let wave25 = <div className={moss25}>{north25}</div>;
  let apex25 = (
    <div className={orbit25}>
      {pine25}
      {quest25}
      {ridge25}
      {wave25}
    </div>
  );
  return (
    <Reef2
      {...{
        storageKey: storm25,
        title: tide25,
        variant: unity25,
        unmountChildrenWhenClosed: vale25,
        children: [apex25, null],
      }}
    />
  );
}

function Olive4(lagoon25) {
  let { entry, onSelectGate, query } = lagoon25,
    meadow25 =
      entry.kind === "gate"
        ? entry.enabled
          ? "Enabled"
          : "Disabled"
        : entry.isUserInExperiment === true
          ? (entry.groupName ?? "Assigned")
          : entry.isUserInExperiment === false
            ? "Not assigned"
            : "Unknown",
    nest25 =
      entry.kind === "gate"
        ? entry.enabled
          ? "positive"
          : "negative"
        : entry.isUserInExperiment === true
          ? "positive"
          : entry.isUserInExperiment === false
            ? "negative"
            : "neutral",
    oak25 = Xenon4(entry.name, query);
  let petal25 = undefined;
  let quiet25 = (
    <$f
      {...{
        label: meadow25,
        tone: nest25,
      }}
    />
  );
  return (
    <Topaz2
      {...{
        title: oak25,
        subtitle: petal25,
        status: quiet25,
        onClick: onSelectGate,
      }}
    />
  );
}

function $f(rain25) {
  let { label, tone } = rain25,
    seed25 =
      tone === "positive" &&
      "border-token-success/35 bg-token-success/15 text-token-success",
    trail25 =
      tone === "negative" &&
      "border-token-danger/35 bg-token-danger/15 text-token-danger",
    urn25 =
      tone === "neutral" &&
      "border-token-border bg-token-foreground/5 text-token-description-foreground",
    vine25 = IntlProvider(
      "inline-flex min-h-5 items-center rounded border px-2 text-xs",
      seed25,
      trail25,
      urn25,
    );
  return <span className={vine25}>{label}</span>;
}
