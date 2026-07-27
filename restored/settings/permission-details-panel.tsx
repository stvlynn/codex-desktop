// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `x1c`) / export `tu`.

export type PermissionDetailsPanelPeers = {
  C1c: (...args: unknown[]) => unknown;
  FX: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  HXi: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  MQc: (...args: unknown[]) => unknown;
  NE: (...args: unknown[]) => unknown;
  NQc: (...args: unknown[]) => unknown;
  NX: (...args: unknown[]) => unknown;
  S1c: (...args: unknown[]) => unknown;
  SD: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  a$c: (...args: unknown[]) => unknown;
  b$c: (...args: unknown[]) => unknown;
  config: (...args: unknown[]) => unknown;
  e1c: (...args: unknown[]) => unknown;
  eu: (...args: unknown[]) => unknown;
  f1c: (...args: unknown[]) => unknown;
  g1c: (...args: unknown[]) => unknown;
  i$c: (...args: unknown[]) => unknown;
  i1c: (...args: unknown[]) => unknown;
  jQc: (...args: unknown[]) => unknown;
  kh: (...args: unknown[]) => unknown;
  nz: (...args: unknown[]) => unknown;
  sandbox_mode: (...args: unknown[]) => unknown;
  u$c: (...args: unknown[]) => unknown;
  x3: (...args: unknown[]) => unknown;
  y$c: (...args: unknown[]) => unknown;
};
let peers: PermissionDetailsPanelPeers | null = null;

/** Wire PermissionDetailsPanel peers once companions land. */
export function setPermissionDetailsPanelPeers(
  next: PermissionDetailsPanelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `tu` / internal `x1c`.
 */
export function PermissionDetailsPanel(props: unknown) {
  const FX = peers.FX;
  const Ac = peers.a$c;
  const E1c = peers.e1c;
  const Ic = peers.i$c;
  const Z = peers.Z;
  const NX = peers.NX;
  const Yc = peers.y$c;
  const Bc = peers.b$c;
  const HXi = peers.HXi;
  const Uc = peers.u$c;
  const F1c = peers.f1c;
  const I1c = peers.i1c;
  if (peers == null) {
    throw new Error("PermissionDetailsPanel peers are not configured");
  }
  let {
      afterFrequency,
      detailsTrailing,
      disablePromptAutoFocus = false,
      draft,
      formId,
      setDraft,
      workspaceGroups,
      onSubmit,
    } = props,
    d = peers.Ju(),
    f = peers.kh("1488233300"),
    { data } = peers.Fo(peers.NE, peers.Y(peers.SD)),
    m = data?.config.sandbox_mode === "read-only",
    h = data?.config.sandbox_mode === "danger-full-access",
    g,
    _;
  {
    g = workspaceGroups.filter(peers.S1c);
    let e = (e) => {
      return e.projectId === draft.projectId;
    };
    let n = g.find(e);
    _ =
      draft.projectId == null
        ? [peers.eu("~")]
        : n == null
          ? []
          : peers.nz(n).map(peers.eu);
  }
  let v = _,
    y = d.formatMessage({
      id: "settings.automations.projectDropdown.placeholder",
      defaultMessage: "Select project",
      description: "Placeholder text for automation project dropdown",
    });
  let b = y,
    x = d.formatMessage({
      id: "settings.automations.projectDropdown.localOnlyTooltip",
      defaultMessage: "Scheduled tasks can only be created for local projects",
      description:
        "Tooltip explaining why scheduled task project options only include local projects when remote connections are connected",
    });
  let S = x,
    C = draft.kind === "heartbeat",
    w = peers.g1c(draft.targetThreadId, draft.id),
    T = (e) => {
      setDraft((t) => {
        return peers.MQc(t, e);
      });
    };
  let E = T,
    D = (e) => {
      setDraft((t) => {
        return peers.NQc({
          draft: t,
          threadId: e.threadId,
          title: e.title,
        });
      });
    };
  let O = D,
    k = (e) => {
      let t = e === "~" ? null : e,
        n = g.find((item) => {
          return item.projectId === t;
        }),
        r =
          t == null
            ? [peers.eu("~")]
            : n == null
              ? []
              : peers.nz(n).map(peers.eu);
      setDraft((e) => {
        return peers.jQc(e, t, r);
      });
    };
  let A = k,
    j = (e) => {
      setDraft((t) => {
        return {
          ...t,
          rawRrule: null,
          scheduleConfig: e,
          scheduleDirty: true,
        };
      });
    };
  let M = j,
    N = (e, t) => {
      setDraft((n) => {
        return {
          ...n,
          model: e,
          reasoningEffort: t,
        };
      });
    };
  let P = N,
    F = (
      <FX>
        <div className="min-h-0 min-w-0 flex-1">
          {
            <Ac
              disablePromptAutoFocus={disablePromptAutoFocus}
              draft={draft}
              formId={formId}
              promptSize="compact"
              roots={v}
              setDraft={setDraft}
              onSubmit={onSubmit}
            />
          }
        </div>
      </FX>
    );
  let I =
    !C || f ? (
      <E1c
        actions={C ? null : <Ic isDangerFullAccess={h} isReadOnlySandbox={m} />}
        title={
          <Z
            id="inbox.automations.details"
            defaultMessage="Details"
            description="Section label above the automation details rail"
          />
        }
      >
        <FX>
          {f ? (
            <NX
              control={
                <Yc
                  align="end"
                  className="!text-base"
                  selectedDestination={C ? "thread" : "new-task"}
                  onSelect={E}
                />
              }
              label={d.formatMessage({
                id: "inbox.automations.destination.label",
                defaultMessage: "Runs in",
                description:
                  "Label for choosing whether a scheduled task runs in a new or existing task",
              })}
              variant="nested"
            />
          ) : null}
          {C ? (
            <NX
              control={
                <Bc
                  align="end"
                  className="!text-base"
                  options={w}
                  selectedThreadId={draft.targetThreadId}
                  onSelect={O}
                />
              }
              label={d.formatMessage({
                id: "inbox.automations.targetThread.label",
                defaultMessage: "Chat",
                description:
                  "Label for the heartbeat automation target chat row in the details rail",
              })}
              variant="nested"
            />
          ) : (
            <>
              {
                <NX
                  control={
                    <HXi
                      align="end"
                      className="!text-base"
                      localOnlyTooltip={S}
                      placeholder={b}
                      projectGroups={g}
                      projectlessActionLabel={d.formatMessage({
                        id: "composer.localCwdDropdown.clearProject",
                        defaultMessage: "Don't work in a project",
                        description:
                          "Menu item that clears the selected project and starts projectless tasks",
                      })}
                      projectlessLabel={d.formatMessage({
                        id: "settings.automations.projectDropdown.none",
                        defaultMessage: "None",
                        description:
                          "Label for selecting no project in the automation project dropdown",
                      })}
                      selectedProjectId={draft.projectId ?? "~"}
                      showIcon={false}
                      onChange={A}
                    />
                  }
                  label={d.formatMessage({
                    id: "inbox.automations.folder.label",
                    defaultMessage: "Project",
                    description:
                      "Label for the automation folder row in the details rail",
                  })}
                  variant="nested"
                />
              }
              {
                <NX
                  control={
                    <Uc
                      align="end"
                      className="!text-base"
                      field="model"
                      reasoningEffort={draft.reasoningEffort}
                      selectedModel={draft.model}
                      onSelect={P}
                    />
                  }
                  label={d.formatMessage({
                    id: "inbox.automations.model.label",
                    defaultMessage: "Model",
                    description:
                      "Label for the automation model row in the details rail",
                  })}
                  variant="nested"
                />
              }
              {
                <NX
                  control={
                    <Uc
                      align="end"
                      className="!text-base"
                      field="reasoning"
                      reasoningEffort={draft.reasoningEffort}
                      selectedModel={draft.model}
                      onSelect={P}
                    />
                  }
                  label={d.formatMessage({
                    id: "inbox.automations.reasoning.label",
                    defaultMessage: "Reasoning",
                    description:
                      "Label for the automation reasoning level row in the details rail",
                  })}
                  variant="nested"
                />
              }
            </>
          )}
          {detailsTrailing}
        </FX>
      </E1c>
    ) : null;
  let L = (e) => {
    setDraft((t) => {
      return {
        ...t,
        notificationPolicy: e,
      };
    });
  };
  let R = (
    <F1c
      align="end"
      kind={draft.kind}
      value={draft.notificationPolicy}
      onChange={L}
    />
  );
  let z = d.formatMessage({
    id: "inbox.automations.notifications.label",
    defaultMessage: "Notifications",
    description: "Label for the automation notification policy control",
  });
  let B = <NX control={R} label={z} variant="nested" />;
  let V = C ? "heartbeat" : "default",
    H = (
      <I1c
        afterScheduleRows={B}
        intervalStyle={V}
        scheduleConfig={draft.scheduleConfig}
        onUpdateScheduleDraft={M}
      />
    );
  return (
    <div className="flex min-h-0 flex-col gap-6">
      {F}
      {I}
      {H}
      {afterFrequency}
    </div>
  );
}
