import { describe, expect, test } from "bun:test";
import { resolvePrettierCommand } from "./format.ts";

describe("format command resolution", () => {
  const prettierArgs = ["--check", "restored/large-bundle.ts"];

  test("uses node with a larger stack when prettier is directly available", () => {
    const [runner, args] = resolvePrettierCommand(prettierArgs, (cmd) =>
      cmd === "prettier" ? "/usr/local/bin/prettier" : null,
    );

    expect(runner).toBe("node");
    expect(args).toEqual([
      "--stack-size=65500",
      "/usr/local/bin/prettier",
      ...prettierArgs,
    ]);
  });

  test("falls back to bunx when direct prettier is unavailable", () => {
    const [runner, args] = resolvePrettierCommand(prettierArgs, (cmd) =>
      cmd === "bunx" ? "/usr/local/bin/bunx" : null,
    );

    expect(runner).toBe("bunx");
    expect(args).toEqual(["prettier", ...prettierArgs]);
  });

  test("falls back to npx when prettier and bunx are unavailable", () => {
    const [runner, args] = resolvePrettierCommand(prettierArgs, () => null);

    expect(runner).toBe("npx");
    expect(args).toEqual(["prettier", ...prettierArgs]);
  });
});
