// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `T0n`) / export `r6`.

export type BuildAppgenEndCardItemsPeers = {
  A0n: (...args: unknown[]) => unknown;
  B0n: (...args: unknown[]) => unknown;
  I0n: (...args: unknown[]) => unknown;
  L0n: (...args: unknown[]) => unknown;
  LUn: (...args: unknown[]) => unknown;
  M0n: (...args: unknown[]) => unknown;
  R0n: (...args: unknown[]) => unknown;
  e2n: (...args: unknown[]) => unknown;
  t2n: (...args: unknown[]) => unknown;
};
let peers: BuildAppgenEndCardItemsPeers | null = null;

/** Wire buildAppgenEndCardItems peers once companions land. */
export function setBuildAppgenEndCardItemsPeers(
  next: BuildAppgenEndCardItemsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `r6` / internal `T0n`.
 */
export function buildAppgenEndCardItems({
  assistantContent,
  projectlessOutputDirectory = null,
  isAppgenEndCardEnabled = false,
  turn,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("buildAppgenEndCardItems peers are not configured");
  }
  if (turn.status !== "complete") return [];
  let i = peers.R0n(assistantContent),
    a = isAppgenEndCardEnabled
      ? peers.LUn(
          turn.items.filter((item) => {
            return item.type === "mcp-tool-call";
          }),
        )
      : [],
    o = peers.t2n(turn),
    s = peers.e2n(turn),
    c = peers.L0n({
      cwd: turn.cwd,
      projectlessOutputDirectory,
      resources: peers.M0n({
        cwd: turn.cwd,
        resources: [
          ...peers.A0n(turn).map((item) => {
            return {
              type: "file",
              path: item,
            };
          }),
          ...peers.B0n(assistantContent, s, o),
        ],
      }),
    });
  if (
    c.some((item) => {
      return item.type === "file";
    }) ||
    a.length > 0
  )
    return [...c, ...a];
  if (i != null)
    return [
      ...c,
      {
        type: "website",
        target: i,
      },
    ];
  let l = peers.I0n(turn, projectlessOutputDirectory);
  return l == null
    ? c
    : [
        ...c,
        {
          type: "website",
          target: l,
        },
      ];
}
