// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rUl`) / export `Ya`.

export type ProjectPinnedActionsMenuPeers = {
  G7s: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  KR: (...args: unknown[]) => unknown;
  RRl: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  aUl: (...args: unknown[]) => unknown;
  g5: (...args: unknown[]) => unknown;
  h5: (...args: unknown[]) => unknown;
  hk: (...args: unknown[]) => unknown;
  iUl: (...args: unknown[]) => unknown;
  m3: (...args: unknown[]) => unknown;
  qL: (...args: unknown[]) => unknown;
  qh: (...args: unknown[]) => unknown;
  tUl: (...args: unknown[]) => unknown;
};
let peers: ProjectPinnedActionsMenuPeers | null = null;

/** Wire ProjectPinnedActionsMenu peers once companions land. */
export function setProjectPinnedActionsMenuPeers(
  next: ProjectPinnedActionsMenuPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ya` / internal `rUl`.
 */
export function ProjectPinnedActionsMenu(props: unknown) {
  const RRl = peers.RRl;
  if (peers == null) {
    throw new Error("ProjectPinnedActionsMenu peers are not configured");
  }
  let {
      align,
      canDeleteProject,
      deleteDisabledMessage,
      isPinned,
      onDelete,
      onNewLocalTask,
      onOpenChange,
      onPinnedChange,
      onSettings,
      open,
      projectTitle,
      triggerButton,
    } = props,
    m = peers.Ju(),
    h = peers.aUl.useRef(false),
    g = (event) => {
      h.current && ((h.current = false), event.preventDefault(), onSettings());
    };
  let _ = m.formatMessage(peers.h5.actions, {
    projectName: projectTitle,
  });
  let v = (e) => {
    return (
      <>
        {
          <peers.hk electron={true}>
            {onNewLocalTask == null ? null : (
              <peers.KR.Item
                LeftIcon={peers.G7s}
                onSelect={() => {
                  e(false);
                  onNewLocalTask();
                }}
              >
                <peers.Z {...peers.h5.newLocalTask} />
              </peers.KR.Item>
            )}
          </peers.hk>
        }
        {
          <peers.KR.Item
            LeftIcon={isPinned ? peers.tUl : peers.m3}
            onSelect={() => {
              onPinnedChange(!isPinned);
              e(false);
            }}
          >
            {isPinned ? (
              <peers.Z {...peers.h5.unpin} />
            ) : (
              <peers.Z {...peers.h5.pin} />
            )}
          </peers.KR.Item>
        }
        {
          <peers.KR.Item
            LeftIcon={peers.qL}
            onSelect={() => {
              h.current = true;
            }}
          >
            <peers.Z {...peers.h5.settings} />
          </peers.KR.Item>
        }
        {
          <peers.KR.Item
            LeftIcon={peers.qh}
            disabled={!canDeleteProject}
            onSelect={() => {
              e(false);
              onDelete();
            }}
            tooltipText={
              deleteDisabledMessage == null ? undefined : (
                <peers.Z {...deleteDisabledMessage} />
              )
            }
          >
            <peers.Z {...peers.h5.delete} />
          </peers.KR.Item>
        }
      </>
    );
  };
  return (
    <RRl
      align={align}
      open={open}
      onOpenChange={onOpenChange}
      onCloseAutoFocus={g}
      triggerAriaLabel={_}
      triggerButton={triggerButton}
    >
      {v}
    </RRl>
  );
}
