// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dlu`) / export `Qt`.

export type WorkspaceImportSettingsSectionPeers = {
  $su: (...args: unknown[]) => unknown;
  Bh: (...args: unknown[]) => unknown;
  Dcu: (...args: unknown[]) => unknown;
  FX: (...args: unknown[]) => unknown;
  Gcu: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  JB: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  NX: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qsu: (...args: unknown[]) => unknown;
  Ub: (...args: unknown[]) => unknown;
  Xk: (...args: unknown[]) => unknown;
  Ysu: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  csu: (...args: unknown[]) => unknown;
  ecu: (...args: unknown[]) => unknown;
  f9: (...args: unknown[]) => unknown;
  h9: (...args: unknown[]) => unknown;
  hlu: (...args: unknown[]) => unknown;
  jp: (...args: unknown[]) => unknown;
  p9: (...args: unknown[]) => unknown;
  plu: (...args: unknown[]) => unknown;
  toc: (...args: unknown[]) => unknown;
  u1t: (...args: unknown[]) => unknown;
  zh: (...args: unknown[]) => unknown;
};
let peers: WorkspaceImportSettingsSectionPeers | null = null;

/** Wire WorkspaceImportSettingsSection peers once companions land. */
export function setWorkspaceImportSettingsSectionPeers(
  next: WorkspaceImportSettingsSectionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Qt` / internal `dlu`.
 */
export function WorkspaceImportSettingsSection(props: unknown) {
  const Csu = peers.csu;
  const Dcu = peers.Dcu;
  const Z = peers.Z;
  const Xk = peers.Xk;
  const Hlu = peers.hlu;
  const JB = peers.JB;
  const Np = peers.Np;
  const NX = peers.NX;
  const Header = peers.f9.Header;
  const F9 = peers.f9;
  const Content = peers.f9.Content;
  const FX = peers.FX;
  const Jp = peers.jp;
  if (peers == null) {
    throw new Error("WorkspaceImportSettingsSection peers are not configured");
  }
  let {
      codexHome,
      hostId,
      isActiveWorkspaceLoading,
      onImportSuccess,
      variant = "section",
      workspaceRoots,
    } = props,
    l = peers.Io(peers.Q),
    u = peers.Ju(),
    d = {
      hostId,
      onImportSuccess,
      workspaceRoots,
    };
  let f = peers.plu(d),
    p = f.isDetecting || isActiveWorkspaceLoading,
    m = f.importChoices.length === 0 ? null : peers.Qsu(u, f.importChoices);
  let h = m,
    g = (e) => {
      peers.Ub(l, peers.u1t, e);
    };
  let _ = g,
    v = (e) => {
      h != null &&
        _({
          source: "settings",
          action: e,
          ...peers.$su(h, peers.ecu(h), f.providerIds),
        });
    };
  let y = v,
    b = () => {
      y("shown");
      f.openImportDialog();
    };
  let x = b,
    S = () => {
      y("skipped");
      f.setImportDialogOpen(false);
    };
  let C = S,
    w =
      f.selectedImportProviderIds.length === 0
        ? h
        : peers.Ysu({
            detectedItems: f.detectedItems,
            intl: u,
            providerIds: f.selectedImportProviderIds,
          });
  let T = w,
    E =
      f.importDialogStep === "providers" ? (
        <Csu
          key={f.providerIds.join(",")}
          appBrand={peers.zh}
          variant="dialog"
          providerIds={f.providerIds}
          onContinue={f.selectImportProviders}
          onSkip={C}
        />
      ) : T == null ? null : (
        <Dcu
          key={f.selectedImportProviderIds.join(",")}
          appBrand={peers.zh}
          variant="dialog"
          eventSource="settings"
          logShownOnMount={false}
          detectedProviderIds={f.providerIds}
          providerIds={f.selectedImportProviderIds}
          summary={T}
          isPending={f.isImporting}
          hasError={f.importDialogStatus === "error"}
          continueLabel={
            variant === "general-row" ? (
              <Z
                id="settings.general.importExternalAgent.import"
                defaultMessage="Import"
                description="Button label to import another local agent setup"
              />
            ) : (
              <Z
                id="settings.agent.importSettings.applySelected.appName"
                defaultMessage={"Import to {appName}"}
                description="Button label to apply selected home-scoped external config migration items to the current app"
                values={{
                  appName: peers.Bh,
                }}
              />
            )
          }
          onSkip={() => {
            return f.setImportDialogOpen(false);
          }}
          onContinue={(e) => {
            f.importSelection(e);
          }}
          onEvent={_}
        />
      );
  let D = (
    <Xk
      open={f.isImportDialogOpen}
      onOpenChange={f.setImportDialogOpen}
      size="default"
    >
      {E}
    </Xk>
  );
  let O = D;
  if (variant === "general-row") {
    let e = h != null,
      r = f.latestImportedAtMs != null,
      i = f.lastCompletedImportProgress != null,
      a = f.isCompletedImportDialogOpen ? f.lastCompletedImportProgress : null,
      o = (
        <Hlu
          appName={peers.Bh}
          progress={a}
          codexHome={codexHome}
          onClose={f.closeCompletedImportDialog}
        />
      );
    let s = o,
      c = r ? (
        <Z {...peers.Gcu.importedAgentSetup} />
      ) : (
        <Z {...peers.Gcu.externalAgentImport} />
      );
    let l = r ? (
      <Z
        id="settings.general.importExternalAgent.lastImported"
        defaultMessage={"Last imported {relativeTime} ago"}
        description="Description showing when another local agent setup was last imported"
        values={{
          relativeTime: (
            <JB
              dateString={new Date(f.latestImportedAtMs ?? 0).toISOString()}
            />
          ),
        }}
      />
    ) : (
      <Z
        id="settings.general.importExternalAgent.rowDescription"
        defaultMessage="Bring over your setup, projects, and recent chats"
        description="Description for importing setup, projects, and recent chats from other AI apps in general settings"
      />
    );
    let u = p || f.isImporting || (!f.isDetectionError && !e && (!r || !i)),
      d = () => {
        if (f.isDetectionError) {
          f.refetchDetectedItems();
          return;
        }
        if (!e && i) {
          f.openCompletedImportDialog();
          return;
        }
        x();
      };
    let m = f.isImporting ? (
      <Z
        id="settings.general.importExternalAgent.importing"
        defaultMessage="Importing"
        description="Button label shown while importing another local agent setup"
      />
    ) : p ? (
      <Z
        id="settings.general.importExternalAgent.checking"
        defaultMessage="Checking"
        description="Button label shown while checking for another local agent setup"
      />
    ) : f.isDetectionError ? (
      <Z
        id="settings.general.importExternalAgent.tryAgain"
        defaultMessage="Try again"
        description="Button label to retry checking for another local agent setup"
      />
    ) : e ? (
      r ? (
        <Z
          id="settings.general.importExternalAgent.importAgain"
          defaultMessage="Import again"
          description="Button label to import additional setup from another local agent"
        />
      ) : (
        <Z
          id="settings.general.importExternalAgent.import"
          defaultMessage="Import"
          description="Button label to import another local agent setup"
        />
      )
    ) : r || i ? (
      <Z
        id="settings.general.importExternalAgent.viewImportedFiles"
        defaultMessage="View imported files"
        description="Button label to view imported external agent setup files"
      />
    ) : (
      <Z
        id="settings.general.importExternalAgent.noData"
        defaultMessage="No data detected"
        description="Disabled button label shown when no supported external agent setup is detected"
      />
    );
    let g = (
      <Np
        color="secondary"
        size="toolbar"
        disabled={u}
        loading={f.isImporting}
        onClick={d}
      >
        {m}
      </Np>
    );
    let _ = <NX id={peers.toc} label={c} description={l} control={g} />;
    let v = h == null ? null : O,
      y;
    return (
      <>
        {_}
        {v}
        {s}
      </>
    );
  }
  let k = (
    <Z
      id="settings.agent.importSettings.sectionTitle"
      defaultMessage="Import external agent config"
      description="Heading for the inline external agent config import section"
    />
  );
  let A = (
    <Header
      title={k}
      subtitle={
        <Z
          id="settings.agent.importSettings.sectionSubtitle.appName"
          defaultMessage={
            "Detected settings from another agent that can be added to {appName}"
          }
          description="Subtitle for the inline external agent config import section in the current app"
          values={{
            appName: peers.Bh,
          }}
        />
      }
    />
  );
  return (
    <>
      {
        <F9 id={peers.toc} className="gap-2">
          {A}
          <Content>
            {p ? (
              <FX>
                <NX
                  label={
                    <Z
                      id="settings.agent.importSettings.loadingLabel"
                      defaultMessage="Checking for imports"
                      description="Label shown while home-scoped external config migration items are loading"
                    />
                  }
                  description={
                    <Z
                      id="settings.agent.importSettings.detectingDescription"
                      defaultMessage="Checking for compatible external settings, AGENTS.md, and skills"
                      description="Description shown while home-scoped external config migration items are loading"
                    />
                  }
                  control={<Jp className="h-4 w-4" />}
                />
              </FX>
            ) : (
              <FX>
                {h == null ? (
                  <NX
                    label={
                      <Z
                        id="settings.import.empty.label"
                        defaultMessage="Import from other AI apps"
                        description="Settings row label shown when no external agent setup can currently be imported"
                      />
                    }
                    description={
                      <Z
                        id="settings.import.empty.description"
                        defaultMessage="No importable setup found"
                        description="Settings row description shown when no external agent setup can currently be imported"
                      />
                    }
                    control={
                      <Np color="secondary" size="toolbar" disabled={true}>
                        <Z
                          id="settings.import.empty.button"
                          defaultMessage="Import"
                          description="Disabled import button shown when no external agent setup can currently be imported"
                        />
                      </Np>
                    }
                  />
                ) : (
                  <>
                    {
                      <NX
                        label={
                          <Z
                            id="settings.agent.importSettings.sharedImportLabel"
                            defaultMessage="Import another agent setup"
                            description="Settings row label for external agent setup import"
                          />
                        }
                        description={
                          <Z
                            id="settings.agent.importSettings.sharedImportDescription"
                            defaultMessage="Choose settings, chats, and projects from another local agent app"
                            description="Settings row description for external agent setup import"
                          />
                        }
                        control={
                          <Np
                            color="secondary"
                            size="toolbar"
                            disabled={f.isImporting}
                            onClick={x}
                          >
                            <Z
                              id="settings.agent.importSettings.applySelected.appName"
                              defaultMessage={"Import to {appName}"}
                              description="Button label to apply selected home-scoped external config migration items to the current app"
                              values={{
                                appName: peers.Bh,
                              }}
                            />
                          </Np>
                        }
                      />
                    }
                    {O}
                  </>
                )}
              </FX>
            )}
          </Content>
        </F9>
      }
    </>
  );
}
