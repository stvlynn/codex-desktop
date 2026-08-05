// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `r6o`) / export `yT`.

export type BindGeneralSettings2Peers = {
  KY: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  e6o: (...args: unknown[]) => unknown;
  n6o: (...args: unknown[]) => unknown;
  t6o: (...args: unknown[]) => unknown;
};

let peers: BindGeneralSettings2Peers | null = null;

/** Wire bindGeneralSettings2 peers once companions land. */
export function setBindGeneralSettings2Peers(
  next: BindGeneralSettings2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `yT` / internal `r6o`.
 */
export function bindGeneralSettings2() {
  if (peers == null) {
    throw new Error("bindGeneralSettings2 peers are not configured");
  }

  return peers.e(() => {
    (peers.e6o(),
      (KY = `general-settings`),
      (t6o = (function (e) {
        return (
          (peers.e.String = `string`),
          (peers.e.Array = `array`),
          (peers.e.Record = `record`),
          peers.e
        );
      })({})),
      (n6o = [
        {
          slug: `general-settings`,
        },
        {
          slug: `import`,
        },
        {
          slug: `profile`,
        },
        {
          slug: `appearance`,
        },
        {
          slug: `voice`,
        },
        {
          slug: `pets`,
        },
        {
          slug: `chronicle`,
        },
        {
          slug: `appshots`,
        },
        {
          slug: `git-settings`,
        },
        {
          slug: `connections`,
        },
        {
          slug: `cloud-settings`,
        },
        {
          slug: `cloud-environments`,
        },
        {
          slug: `code-review`,
        },
        {
          slug: `local-environments`,
        },
        {
          slug: `worktrees`,
        },
        {
          slug: `agent`,
        },
        {
          slug: `personalization`,
        },
        {
          slug: `keyboard-shortcuts`,
        },
        {
          slug: `codex-micro`,
        },
        {
          slug: `usage`,
        },
        {
          slug: `debug`,
        },
        {
          slug: `browser-use`,
        },
        {
          slug: `computer-use`,
        },
        {
          slug: `mcp-settings`,
        },
        {
          slug: `hooks-settings`,
        },
        {
          slug: `plugins-settings`,
        },
        {
          slug: `skills-settings`,
        },
        {
          slug: `data-controls`,
        },
      ]));
  });
}

/** IMPORT_MAP alias for export `yT`. */
export function generalSettings2() {
  return bindGeneralSettings2();
}
