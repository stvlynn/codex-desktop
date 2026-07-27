// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `TIa`) / export `cN`.

export type RemotePluginSkillDialogPeers = {
  AH: (...args: unknown[]) => unknown;
  DIa: (...args: unknown[]) => unknown;
  EIa: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  jp: (...args: unknown[]) => unknown;
  kH: (...args: unknown[]) => unknown;
  kga: (...args: unknown[]) => unknown;
  mIa: (...args: unknown[]) => unknown;
  vS: (...args: unknown[]) => unknown;
  wIa: (...args: unknown[]) => unknown;
};
let peers: RemotePluginSkillDialogPeers | null = null;

/** Wire RemotePluginSkillDialog peers once companions land. */
export function setRemotePluginSkillDialogPeers(
  next: RemotePluginSkillDialogPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cN` / internal `TIa`.
 */
export function RemotePluginSkillDialog(props: unknown) {
  const WIa = peers.wIa;
  const Jp = peers.jp;
  const Z = peers.Z;
  const Kga = peers.kga;
  if (peers == null) {
    throw new Error("RemotePluginSkillDialog peers are not configured");
  }
  let { hostId, isOpen, remotePluginSkill, skillPath, titleText } = props,
    s = skillPath != null || remotePluginSkill != null,
    c = isOpen && s,
    l = {
      hostId,
      path: skillPath,
      remotePluginSkill,
      expectedTitle: titleText,
      enabled: c,
    };
  let { markdown, isFetching, error } = peers.mIa(l),
    p = error != null || (isOpen && !s);
  return (
    <WIa scrollClassName="p-4">
      {isFetching ? (
        <div className="flex items-center gap-2 text-sm text-token-text-secondary">
          {<Jp className="icon-xs" />}
          {
            <Z
              id="skills.card.loadingContents"
              defaultMessage="Loading skill contents..."
              description="Loading label when fetching a skill file preview"
            />
          }
        </div>
      ) : p ? (
        <div className="text-sm text-token-text-secondary">
          {
            <Z
              id="skills.card.contentsError"
              defaultMessage="Unable to load skill contents."
              description="Error message when a skill file preview fails"
            />
          }
        </div>
      ) : (
        <Kga
          className="text-sm"
          components={{
            h1: peers.EIa,
            h2: peers.DIa,
          }}
          cwd={null}
          textClassName="text-sm"
          tokens={peers.vS(markdown, undefined)}
        />
      )}
    </WIa>
  );
}
