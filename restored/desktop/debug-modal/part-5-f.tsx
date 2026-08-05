// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 5/17
/* split-lane-import-depth:1 */
// AST split 6/6

import {
  AppInitialPl,
  NativeContextMenuSurface,
  amber1,
  cedar1,
} from "./part-5-a";
import { Copper, Slate1, Timber1 } from "./part-5-b";

function Willow1() {
  let dew10 = NativeContextMenuSurface("1834314516"),
    [alpha11, bravo11] = amber1.useState(Xenon1),
    [copper11, delta11] = amber1.useState("tabs"),
    echo11 = copper11 === "downloads" && !dew10 ? "tabs" : copper11,
    falcon11 = {
      id: "tabs",
      label: "Tabs",
    };
  let gamma11;
  if (((gamma11 = [falcon11]), dew10)) {
    let nickel11;
    nickel11 = {
      id: "downloads",
      label: "Downloads",
    };
    gamma11.push(nickel11);
  }
  let harbor11 =
    gamma11.length > 1 ? (
      <AppInitialPl
        ariaLabel="Browser debug view"
        fullWidth={true}
        onSelect={delta11}
        options={gamma11}
        selectedId={echo11}
      />
    ) : null;
  let indigo11 = echo11 !== "tabs",
    jade11 = alpha11 && echo11 === "tabs",
    kite11 = (
      <Slate1
        {...{
          isActive: jade11,
        }}
      />
    );
  let lemon11 = <div hidden={indigo11}>{kite11}</div>;
  let marble11 = dew10 ? (
    <div hidden={echo11 !== "downloads"}>
      {
        <Timber1
          {...{
            isActive: alpha11 && echo11 === "downloads",
          }}
        />
      }
    </div>
  ) : null;
  return (
    <Copper
      {...{
        title: "Browser",
        storageKey: cedar1,
        onToggle: bravo11,
        variant: "global",
        children: (
          <div className="flex flex-col gap-3 py-3">
            {harbor11}
            {lemon11}
            {marble11}
            {null}
          </div>
        ),
      }}
    />
  );
}

function Xenon1() {
  return Yellow1();
}

function Yellow1() {
  try {
    return window.localStorage.getItem(cedar1) === "open";
  } catch {
    return false;
  }
}

function Ember1(onyx11, pearl11) {
  return typeof onyx11 == "function" ? onyx11(pearl11) : onyx11;
}

function Flint1(quartz11, river11) {
  return (slate11) => {
    river11.setState((timber11) => ({
      ...timber11,
      [quartz11]: Ember1(slate11, timber11[quartz11]),
    }));
  };
}

function Garnet1(umbra11) {
  return umbra11 instanceof Function;
}

function $o(violet11) {
  return (
    Array.isArray(violet11) && violet11.every((item) => typeof item == "number")
  );
}

function Hazel1(willow11, xenon11) {
  let yellow11 = [],
    zinc11 = (amber11) => {
      amber11.forEach((item) => {
        yellow11.push(item);
        let basalt11 = xenon11(item);
        basalt11 != null && basalt11.length && zinc11(basalt11);
      });
    };
  return (zinc11(willow11), yellow11);
}
