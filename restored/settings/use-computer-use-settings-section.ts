// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `BFo`) / export `MO`.

export type UseComputerUseSettingsSectionPeers = {
  Cq: (...args: unknown[]) => unknown;
  Sq: (...args: unknown[]) => unknown;
  VFo: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  qt: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
};

let peers: UseComputerUseSettingsSectionPeers | null = null;

/** Wire UseComputerUseSettingsSection peers once companions land. */
export function setUseComputerUseSettingsSectionPeers(
  next: UseComputerUseSettingsSectionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `MO` / internal `BFo`.
 */
export function UseComputerUseSettingsSection() {
  if (peers == null) {
    throw new Error("UseComputerUseSettingsSection peers are not configured");
  }

  let e = (0, peers.Sq.c)(2),
    t = peers.rt(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = {
          mutationFn: peers.VFo,
          onSuccess: async () => {
            await t.invalidateQueries({
              queryKey: peers.Cq,
            });
          },
          onError: (e) => {
            (peers.Wf.error(
              `Failed to update browser-use file transfer approval mode`,
              {
                safe: {
                  error: String(e),
                },
                sensitive: {},
              },
            ),
              t.invalidateQueries({
                queryKey: peers.Cq,
              }));
          },
        }),
        (e[0] = t),
        (e[1] = n)),
    peers.qt(n)
  );
}
