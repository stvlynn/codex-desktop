// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Dcu`) / export `sn`.

export type FirstTimeOnboardingContinuePanelPeers = {
  $: (...args: unknown[]) => unknown;
  $su: (...args: unknown[]) => unknown;
  Acu: (...args: unknown[]) => unknown;
  Fcu: (...args: unknown[]) => unknown;
  Hcu: (...args: unknown[]) => unknown;
  Icu: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  Lcu: (...args: unknown[]) => unknown;
  Mcu: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  Ocu: (...args: unknown[]) => unknown;
  Pcu: (...args: unknown[]) => unknown;
  Qk: (...args: unknown[]) => unknown;
  Rcu: (...args: unknown[]) => unknown;
  Tsu: (...args: unknown[]) => unknown;
  Ucu: (...args: unknown[]) => unknown;
  Vcu: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  Zk: (...args: unknown[]) => unknown;
  ecu: (...args: unknown[]) => unknown;
  gsu: (...args: unknown[]) => unknown;
  iA: (...args: unknown[]) => unknown;
  isu: (...args: unknown[]) => unknown;
  jcu: (...args: unknown[]) => unknown;
  kcu: (...args: unknown[]) => unknown;
  nA: (...args: unknown[]) => unknown;
  qL: (...args: unknown[]) => unknown;
  rA: (...args: unknown[]) => unknown;
  tA: (...args: unknown[]) => unknown;
  u9: (...args: unknown[]) => unknown;
  vsu: (...args: unknown[]) => unknown;
  ysu: (...args: unknown[]) => unknown;
  zcu: (...args: unknown[]) => unknown;
  zz: (...args: unknown[]) => unknown;
};
let peers: FirstTimeOnboardingContinuePanelPeers | null = null;

/** Wire FirstTimeOnboardingContinuePanel peers once companions land. */
export function setFirstTimeOnboardingContinuePanelPeers(
  next: FirstTimeOnboardingContinuePanelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `sn` / internal `Dcu`.
 */
export function FirstTimeOnboardingContinuePanel({
  appBrand,
  continueLabel,
  hasError = false,
  eventSource = "first_time_onboarding",
  isComplete = false,
  isPending = false,
  logShownOnMount = true,
  subtitle,
  title,
  variant = "onboarding",
  providerIds = [],
  detectedProviderIds = providerIds,
  summary,
  onCustomize,
  onContinue,
  onEvent,
  onSkip,
}: Record<string, unknown>) {
  const Z = peers.Z;
  const Ocu = peers.Ocu;
  const Kcu = peers.kcu;
  const IA = peers.iA;
  const TA = peers.tA;
  const Zk = peers.Zk;
  const Qk = peers.Qk;
  const Isu = peers.isu;
  const Vsu = peers.vsu;
  const Ysu = peers.ysu;
  const Acu = peers.Acu;
  const QL = peers.qL;
  const Mcu = peers.Mcu;
  const Zz = peers.zz;
  const Gsu = peers.gsu;
  const Tsu = peers.Tsu;
  const RA = peers.rA;
  const Np = peers.Np;
  const NA = peers.nA;
  if (peers == null) {
    throw new Error(
      "FirstTimeOnboardingContinuePanel peers are not configured",
    );
  }
  let _ = peers.Ju(),
    [v, y] = peers.Vcu.useState(() => {
      return peers.ecu(summary);
    }),
    [b, x] = peers.Vcu.useState(false),
    [S, C] = peers.Vcu.useState(() => {
      return new Set(
        summary.customizeItems.map((item) => {
          return item.id;
        }),
      );
    }),
    w = variant === "dialog",
    T = isPending || isComplete,
    E = isPending || isComplete,
    D = peers.Icu({
      summary,
      selection: v,
    }),
    O = peers.Fcu({
      items: summary.customizeItems,
      selection: v,
      group: "toolsAndSetup",
    }),
    k = peers.Fcu({
      items: summary.customizeItems,
      selection: v,
      group: "projects",
    }),
    A = summary.chatChoiceKey != null && (v[summary.chatChoiceKey] ?? false),
    j = peers.jcu({
      isComplete,
      isSelected: O !== false,
    }),
    M = peers.jcu({
      isComplete,
      isSelected: k !== false,
    }),
    N = peers.jcu({
      isComplete,
      isSelected: A,
    }),
    P = (e) => {
      onEvent?.({
        source: eventSource,
        ...e,
      });
    };
  peers.Vcu.useEffect(() => {
    logShownOnMount &&
      P({
        action: "shown",
        ...peers.$su(summary, v, detectedProviderIds),
      });
  }, []);
  let F = () => {
      onCustomize?.();
      x(true);
    },
    I = () => {
      isPending ||
        !D ||
        (isComplete ||
          P({
            action: "continue",
            ...peers.$su(summary, v, detectedProviderIds),
          }),
        onContinue(v));
    },
    L = () => {
      T ||
        (P({
          action: "skipped",
          ...peers.$su(summary, v, detectedProviderIds),
        }),
        onSkip());
    },
    R = isPending ? (
      <Z
        id="electron.onboarding.welcomeV2.externalAgentImport.importingButton"
        defaultMessage="Importing"
        description="Button label shown while external agent onboarding import is running"
      />
    ) : (
      (continueLabel ?? (
        <Z
          id="electron.onboarding.welcomeV2.continue"
          defaultMessage="Continue"
          description="Welcome v2 continue button label"
        />
      ))
    ),
    z = title ?? <Ocu />,
    B = subtitle === undefined ? <Kcu /> : subtitle,
    V = (event) => {
      event.preventDefault();
      !(isPending || !D) && I();
    },
    H = (
      <>
        {w ? (
          <IA>
            <TA
              title={<Zk className="contents">{z}</Zk>}
              subtitle={B == null ? null : <Qk>{B}</Qk>}
            />
          </IA>
        ) : (
          <Isu
            appBrand={appBrand}
            sourceIconVariant="orange"
            title={z}
            subtitle={B}
          />
        )}
        <div
          className={peers.$(
            "flex w-full flex-col",
            w ? "mt-4" : "mt-8 max-w-sm",
          )}
        >
          {peers.Pcu(summary) ? (
            <Vsu
              ariaLabel={_.formatMessage({
                id: "electron.onboarding.welcomeV2.externalAgentImport.items.list",
                defaultMessage: "Import options",
                description:
                  "Accessible label for external agent import options",
              })}
              className="h-auto gap-0 border-token-border-default !px-3 !py-0"
            >
              {summary.toolsAndSetupCount > 0 ? (
                <Ysu
                  checkboxId="external-agent-import-tools-and-setup"
                  checked={O}
                  control={E ? <Acu status={j} /> : undefined}
                  disabled={T}
                  leadingContent={<QL className="icon-base" />}
                  label={
                    <Z
                      id="electron.onboarding.welcomeV2.externalAgentImport.toolsAndSetup.title"
                      defaultMessage="Tools & setup"
                      description="Tools and setup import row title"
                    />
                  }
                  description={
                    <Z
                      id="electron.onboarding.welcomeV2.externalAgentImport.toolsAndSetup.description"
                      defaultMessage="Settings, instructions, plugins, skills"
                      description="Tools and setup import row description"
                    />
                  }
                  trailingControl={
                    summary.toolsAndSetupTooltip == null ? null : (
                      <Mcu
                        ariaLabel={_.formatMessage({
                          id: "electron.onboarding.welcomeV2.externalAgentImport.toolsAndSetup.info",
                          defaultMessage:
                            "What will be imported for Tools & setup",
                          description:
                            "Accessible label for the tools and setup import info tooltip",
                        })}
                        tooltip={summary.toolsAndSetupTooltip.text}
                      />
                    )
                  }
                  className={peers.Ucu}
                  checkboxClassName={peers.Hcu}
                  controlPlacement="right"
                  onCheckedChange={(e) => {
                    y((t) => {
                      return peers.zcu({
                        current: t,
                        items: summary.customizeItems,
                        group: "toolsAndSetup",
                        checked: e,
                      });
                    });
                    C((t) => {
                      return peers.Rcu({
                        current: t,
                        items: summary.customizeItems,
                        group: "toolsAndSetup",
                        checked: e,
                      });
                    });
                  }}
                />
              ) : null}
              {summary.projectCount > 0 ? (
                <Ysu
                  checkboxId="external-agent-import-projects"
                  checked={k}
                  control={E ? <Acu status={M} /> : undefined}
                  disabled={T}
                  leadingContent={<Zz className="icon-base" />}
                  label={
                    <Z
                      id="electron.onboarding.welcomeV2.externalAgentImport.projects.title"
                      defaultMessage={"Projects ({count})"}
                      description="Projects import row title"
                      values={{
                        count: summary.projectCount,
                      }}
                    />
                  }
                  description={
                    <Z
                      id="electron.onboarding.welcomeV2.externalAgentImport.projects.description"
                      defaultMessage="Use your existing project folders"
                      description="Projects import row description"
                    />
                  }
                  trailingControl={
                    summary.projectTooltip == null ? null : (
                      <Mcu
                        ariaLabel={_.formatMessage({
                          id: "electron.onboarding.welcomeV2.externalAgentImport.projects.info",
                          defaultMessage: "What will be imported for Projects",
                          description:
                            "Accessible label for the projects import info tooltip",
                        })}
                        tooltip={summary.projectTooltip.text}
                      />
                    )
                  }
                  className={peers.Ucu}
                  checkboxClassName={peers.Hcu}
                  controlPlacement="right"
                  onCheckedChange={(e) => {
                    y((t) => {
                      return peers.zcu({
                        current: t,
                        items: summary.customizeItems,
                        group: "projects",
                        checked: e,
                      });
                    });
                    C((t) => {
                      return peers.Rcu({
                        current: t,
                        items: summary.customizeItems,
                        group: "projects",
                        checked: e,
                      });
                    });
                  }}
                />
              ) : null}
              {summary.recentChatCount > 0 ? (
                <Ysu
                  checkboxId="external-agent-import-recent-chats"
                  checked={A}
                  control={E ? <Acu status={N} /> : undefined}
                  disabled={T || summary.chatChoiceKey == null}
                  leadingContent={<Gsu className="icon-base" />}
                  label={
                    <Z
                      id="electron.onboarding.welcomeV2.externalAgentImport.recentChats.title"
                      defaultMessage={"Chat sessions ({count})"}
                      description="Recent chats toggle title"
                      values={{
                        count: summary.recentChatCount,
                      }}
                    />
                  }
                  description={
                    <Z
                      id="electron.onboarding.welcomeV2.externalAgentImport.recentChats.description"
                      defaultMessage="Recent chats"
                      description="Recent chats row description"
                    />
                  }
                  trailingControl={
                    summary.recentChatTooltip == null ? null : (
                      <Mcu
                        ariaLabel={_.formatMessage({
                          id: "electron.onboarding.welcomeV2.externalAgentImport.recentChats.info",
                          defaultMessage:
                            "What will be imported for Chat sessions",
                          description:
                            "Accessible label for the recent chats import info tooltip",
                        })}
                        tooltip={summary.recentChatTooltip.text}
                      />
                    )
                  }
                  className={peers.Ucu}
                  checkboxClassName={peers.Hcu}
                  controlPlacement="right"
                  onCheckedChange={(e) => {
                    let t = summary.chatChoiceKey;
                    t != null &&
                      (y((n) => {
                        return {
                          ...n,
                          [t]: e,
                        };
                      }),
                      C((n) => {
                        let r = new Set(n);
                        return (e ? r.add(t) : r.delete(t), r);
                      }));
                  }}
                />
              ) : null}
            </Vsu>
          ) : null}
          {providerIds.length > 0 ? (
            <div className="mt-2 text-center text-xs leading-4 text-token-text-secondary">
              {
                <Z
                  id="electron.onboarding.welcomeV2.externalAgentImport.items.sourceAppsPreservedNote"
                  defaultMessage="Your existing app setup will not be affected"
                  description="Note below external agent import items explaining that source apps are unchanged"
                />
              }
            </div>
          ) : null}
        </div>
        {
          <Tsu
            open={b}
            items={summary.customizeItems}
            selectedItemIds={S}
            onOpenChange={x}
            onConfirm={(e) => {
              let t = summary.customizeItems.filter((item) => {
                return S.has(item.id) !== e.has(item.id);
              }).length;
              C(e);
              let n = peers.Lcu({
                current: v,
                items: summary.customizeItems,
                selectedItemIds: e,
              });
              y(n);
              P({
                action: "customized",
                changedItemsCount: t,
                ...peers.$su(summary, n, detectedProviderIds),
              });
            }}
          />
        }
        <div
          className={peers.$(
            w
              ? "mt-4 flex w-full flex-col gap-3"
              : "mt-8 flex w-full max-w-sm flex-col items-center gap-4",
          )}
        >
          {hasError ? (
            <div
              role="alert"
              className="text-center text-[13px] leading-5 text-token-error-foreground"
            >
              {
                <Z
                  id="electron.onboarding.welcomeV2.externalAgentImport.error"
                  defaultMessage="Couldn't finish the import. Try again, or skip for now."
                  description="Error message shown when external agent onboarding import fails"
                />
              }
            </div>
          ) : null}
          {w ? (
            <RA>
              <Np color="ghost" disabled={T} onClick={L}>
                <Z
                  id="common.cancel"
                  defaultMessage="Cancel"
                  description="Cancel button label"
                />
              </Np>
              {summary.customizeItems.length === 0 ? null : (
                <Np type="button" color="secondary" disabled={T} onClick={F}>
                  <Z
                    id="electron.onboarding.welcomeV2.externalAgentImport.customize"
                    defaultMessage="Customize"
                    description="Customize button label on the external agent import step"
                  />
                </Np>
              )}
              <Np type="submit" color="primary" disabled={isPending || !D}>
                {R}
              </Np>
            </RA>
          ) : (
            <>
              {summary.customizeItems.length === 0 ? null : (
                <Np
                  className="w-full justify-center"
                  color="ghost"
                  size="large"
                  type="button"
                  disabled={T}
                  onClick={F}
                >
                  <Z
                    id="electron.onboarding.welcomeV2.externalAgentImport.customize"
                    defaultMessage="Customize"
                    description="Customize button label on the external agent import step"
                  />
                </Np>
              )}
              {
                <Np
                  className="w-full justify-center"
                  size="large"
                  type="button"
                  disabled={isPending || !D}
                  onClick={I}
                >
                  {R}
                </Np>
              }
              {
                <Np
                  className="w-full justify-center"
                  color="ghost"
                  size="large"
                  type="button"
                  disabled={T}
                  onClick={L}
                >
                  <Z
                    id="electron.onboarding.welcomeV2.skip"
                    defaultMessage="Skip"
                    description="Welcome v2 skip button label"
                  />
                </Np>
              }
            </>
          )}
        </div>
      </>
    );
  return w ? (
    <NA as="form" className="gap-0" onSubmit={V}>
      {H}
    </NA>
  ) : (
    <div className="flex w-full max-w-lg flex-col items-center overflow-hidden rounded-2xl p-10">
      {H}
    </div>
  );
}
