// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Zzl`) / export `Oo`.

export type ArchiveChatHeartbeatConfirmDialogPeers = {
  $zl: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  Qzl: (...args: unknown[]) => unknown;
  Xk: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  Zk: (...args: unknown[]) => unknown;
  iA: (...args: unknown[]) => unknown;
  nA: (...args: unknown[]) => unknown;
  r5: (...args: unknown[]) => unknown;
  rA: (...args: unknown[]) => unknown;
  tA: (...args: unknown[]) => unknown;
};
let peers: ArchiveChatHeartbeatConfirmDialogPeers | null = null;

/** Wire ArchiveChatHeartbeatConfirmDialog peers once companions land. */
export function setArchiveChatHeartbeatConfirmDialogPeers(
  next: ArchiveChatHeartbeatConfirmDialogPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Oo` / internal `Zzl`.
 */
export function ArchiveChatHeartbeatConfirmDialog(props: unknown) {
  const Z = peers.Z;
  const Zk = peers.Zk;
  const IA = peers.iA;
  const TA = peers.tA;
  const Np = peers.Np;
  const RA = peers.rA;
  const NA = peers.nA;
  const Xk = peers.Xk;
  if (peers == null) {
    throw new Error(
      "ArchiveChatHeartbeatConfirmDialog peers are not configured",
    );
  }
  let { heartbeatAutomationName = null, open, onOpenChange, onConfirm } = props,
    s = heartbeatAutomationName != null,
    c =
      heartbeatAutomationName != null &&
      heartbeatAutomationName.trim().length > 0;
  let l = c,
    u = s ? (
      <Z
        id="threadHeader.archiveConfirmHeartbeatTitle"
        defaultMessage="Archive chat and remove scheduled task?"
        description="Title for archive chat confirmation dialog when the chat has an active scheduled task"
      />
    ) : (
      <Z
        id="threadHeader.archiveConfirmTitle"
        defaultMessage="Archive chat?"
        description="Title for archive chat confirmation dialog"
      />
    );
  let d = u,
    f = s ? (
      l ? (
        <Z
          id="threadHeader.archiveConfirmHeartbeatSubtitleNamed"
          defaultMessage={
            "This chat has an active scheduled task, {name}. Archiving the chat will also remove it and stop future runs."
          }
          description="Subtitle for archive chat confirmation dialog when the chat has a named active scheduled task"
          values={{
            name: (
              <strong
                key="automation-name"
                className="font-semibold text-token-text-primary"
              >
                {heartbeatAutomationName}
              </strong>
            ),
          }}
        />
      ) : (
        <Z
          id="threadHeader.archiveConfirmHeartbeatSubtitleUnnamed"
          defaultMessage="This chat has an active scheduled task. Archiving the chat will also remove it and stop future runs."
          description="Subtitle for archive chat confirmation dialog when the chat has an unnamed active scheduled task"
        />
      )
    ) : (
      <Z
        id="threadHeader.archiveConfirmSubtitle"
        defaultMessage="You can find it later in your archived chats."
        description="Subtitle for archive chat confirmation dialog"
      />
    );
  let p = f,
    m = {
      "aria-describedby": undefined,
      onOpenAutoFocus: peers.Qzl,
      onEscapeKeyDown: () => {
        onOpenChange(false);
      },
    };
  let h = (event) => {
    event.preventDefault();
    onConfirm();
  };
  let g = <Zk className="sr-only">{d}</Zk>;
  let _ = (
    <IA>
      <TA title={d} subtitle={p} />
    </IA>
  );
  let v = () => {
    return onOpenChange(false);
  };
  let y = (
    <Z
      id="threadHeader.archiveConfirmCancel"
      defaultMessage="Cancel"
      description="Cancel button label for archive chat confirmation dialog"
    />
  );
  let b = (
    <Np color="ghost" type="button" onClick={v}>
      {y}
    </Np>
  );
  let x = (
    <Np data-archive-confirm-button={true} color="danger" type="submit">
      {s ? (
        <Z
          id="threadHeader.archiveConfirmHeartbeatConfirm"
          defaultMessage="Archive and remove"
          description="Confirm button label for archive chat confirmation dialog when the chat has an active heartbeat automation"
        />
      ) : (
        <Z
          id="threadHeader.archiveConfirmConfirm"
          defaultMessage="Archive"
          description="Confirm button label for archive chat confirmation dialog"
        />
      )}
    </Np>
  );
  let S = (
    <IA>
      <RA>
        {b}
        {x}
      </RA>
    </IA>
  );
  let C = (
    <NA as="form" onSubmit={h}>
      {g}
      {_}
      {S}
    </NA>
  );
  return (
    <Xk open={open} onOpenChange={onOpenChange} size="compact" contentProps={m}>
      {C}
    </Xk>
  );
}
