import { afterEach, describe, expect, test } from "bun:test";
import { spawnSync } from "node:child_process";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import {
  resolveDirectCompatExports,
  resolveDirectCompatExportsInSource,
} from "./resolve-direct-compat-exports.ts";

const tmpRoots: string[] = [];

function makeTmpRoot(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "compat-resolve-"));
  tmpRoots.push(dir);
  return dir;
}

afterEach(() => {
  while (tmpRoots.length > 0) {
    fs.rmSync(tmpRoots.pop()!, { recursive: true, force: true });
  }
});

describe("resolve-direct-compat-exports", () => {
  test("maps stable re-export aliases back to bundle internals", () => {
    const source = `
      export {
        au as legacyAppMainBuwLowerALowerUExport,
        fu as legacyAppMainBuwLowerFLowerUExport,
      } from "../../app-main-legacy-buw-compat-bundle";
    `;
    const bundle = `
      function Yz(props) { return props.phase; }
      var S1e = e(() => {});
      export { Yz as au, S1e as fu };
    `;

    expect(
      resolveDirectCompatExportsInSource("stable.ts", source, bundle, {
        fromSpecifier: "../../app-main-legacy-buw-compat-bundle",
        legacyPrefix: "legacyAppMainBuw",
      }),
    ).toEqual([
      {
        file: "stable.ts",
        sourceAlias: "au",
        exportedName: "legacyAppMainBuwLowerALowerUExport",
        bundleInternalName: "Yz",
        bundleDefinitionLine: 2,
      },
      {
        file: "stable.ts",
        sourceAlias: "fu",
        exportedName: "legacyAppMainBuwLowerFLowerUExport",
        bundleInternalName: "S1e",
        bundleDefinitionLine: 3,
      },
    ]);
  });

  test("infers the bundle path from the re-export specifier", () => {
    const root = makeTmpRoot();
    const stableDir = path.join(root, "runtime", "stable-exports");
    fs.mkdirSync(stableDir, { recursive: true });
    fs.writeFileSync(
      path.join(root, "runtime", "app-main-legacy-buw-compat-bundle.ts"),
      `
        function ButtonPhaseLabel() {}
        export { ButtonPhaseLabel as au };
      `,
    );
    const stableFile = path.join(stableDir, "lower-a-f.ts");
    fs.writeFileSync(
      stableFile,
      `
        export {
          au as legacyAppMainBuwLowerALowerUExport,
        } from "../app-main-legacy-buw-compat-bundle";
      `,
    );

    expect(
      resolveDirectCompatExports([stableFile], {
        fromSpecifier: "../app-main-legacy-buw-compat-bundle",
      }),
    ).toMatchObject([
      {
        file: stableFile,
        sourceAlias: "au",
        exportedName: "legacyAppMainBuwLowerALowerUExport",
        bundleInternalName: "ButtonPhaseLabel",
      },
    ]);
  });

  test("prints readable CLI output", () => {
    const root = makeTmpRoot();
    const stableFile = path.join(root, "stable.ts");
    const bundleFile = path.join(root, "bundle.ts");
    fs.writeFileSync(
      stableFile,
      `
        export {
          aa as legacyAppMainBuwLowerALowerAExport,
        } from "./bundle";
      `,
    );
    fs.writeFileSync(
      bundleFile,
      `
        var initThing = e(() => {});
        export { initThing as aa };
      `,
    );

    const cli = spawnSync(
      "bun",
      [
        path.join(import.meta.dir, "resolve-direct-compat-exports.ts"),
        stableFile,
        "--from",
        "./bundle",
        "--bundle",
        bundleFile,
      ],
      { encoding: "utf-8" },
    );

    expect(cli.status).toBe(0);
    expect(cli.stdout).toContain(
      "stable.ts: aa -> initThing:2 -> legacyAppMainBuwLowerALowerAExport",
    );
    expect(cli.stdout).toContain("total: 1");
  });
});
