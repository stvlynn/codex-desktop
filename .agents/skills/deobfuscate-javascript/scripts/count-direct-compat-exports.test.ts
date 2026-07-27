import { afterEach, describe, expect, test } from "bun:test";
import { spawnSync } from "node:child_process";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import {
  countDirectCompatExports,
  countDirectCompatExportsInSource,
} from "./count-direct-compat-exports.ts";

const tmpRoots: string[] = [];

function makeTmpRoot(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "compat-count-"));
  tmpRoots.push(dir);
  return dir;
}

afterEach(() => {
  while (tmpRoots.length > 0) {
    fs.rmSync(tmpRoots.pop()!, { recursive: true, force: true });
  }
});

describe("count-direct-compat-exports", () => {
  test("counts only matching named re-exports from the direct compat bundle", () => {
    const source = `
      export { semanticThing as legacyAppMainBuwLowerAExport } from "../../../semantic/module";
      export {
        aa as legacyAppMainBuwLowerALowerAExport,
        bb as legacyAppMainBuwLowerBLowerBExport,
        cc as unrelatedAlias,
      } from "../../app-main-legacy-buw-compat-bundle";
      export { dd as legacyAppMainBuwLowerDLowerDExport } from "../../other-bundle";
    `;

    expect(countDirectCompatExportsInSource(source)).toBe(2);
  });

  test("does not cross export block braces while scanning", () => {
    const source = `
      export {
        alpha as legacyAppMainBuwLowerAlphaExport,
      } from "../../../semantic/module";
      export {
        beta as legacyAppMainBuwLowerBetaExport,
      } from "../../app-main-legacy-buw-compat-bundle";
    `;

    expect(countDirectCompatExportsInSource(source)).toBe(1);
  });

  test("counts directory files and omits barrels", () => {
    const root = makeTmpRoot();
    fs.writeFileSync(
      path.join(root, "lower-a.ts"),
      `
        export {
          aa as legacyAppMainBuwLowerAExport,
          ab as legacyAppMainBuwLowerBExport,
        } from "../../app-main-legacy-buw-compat-bundle";
      `,
    );
    fs.writeFileSync(
      path.join(root, "index.ts"),
      `
        export { aa as legacyAppMainBuwLowerAExport } from "../../app-main-legacy-buw-compat-bundle";
      `,
    );

    const result = countDirectCompatExports([path.join(root, "lower-a.ts")]);
    expect(result).toEqual([{ file: path.join(root, "lower-a.ts"), count: 2 }]);

    const cli = spawnSync(
      process.execPath,
      [path.join(import.meta.dir, "count-direct-compat-exports.ts"), root],
      { encoding: "utf-8" },
    );
    expect(cli.status).toBe(0);
    expect(cli.stdout).toContain("lower-a.ts: 2");
    expect(cli.stdout).toContain("total: 2");
  });
});
