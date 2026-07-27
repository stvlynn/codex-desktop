// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `csu`) / export `Tn`.

export type OnboardingProviderContinuePanelPeers = {
  Ju: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  Qk: (...args: unknown[]) => unknown;
  XNl: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  Zk: (...args: unknown[]) => unknown;
  dsu: (...args: unknown[]) => unknown;
  fsu: (...args: unknown[]) => unknown;
  iA: (...args: unknown[]) => unknown;
  isu: (...args: unknown[]) => unknown;
  lsu: (...args: unknown[]) => unknown;
  nA: (...args: unknown[]) => unknown;
  rA: (...args: unknown[]) => unknown;
  s9: (...args: unknown[]) => unknown;
  tA: (...args: unknown[]) => unknown;
  usu: (...args: unknown[]) => unknown;
};
let peers: OnboardingProviderContinuePanelPeers | null = null;

/** Wire OnboardingProviderContinuePanel peers once companions land. */
export function setOnboardingProviderContinuePanelPeers(
  next: OnboardingProviderContinuePanelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Tn` / internal `csu`.
 */
export function OnboardingProviderContinuePanel(props: unknown) {
  const Z = peers.Z;
  const IA = peers.iA;
  const TA = peers.tA;
  const Zk = peers.Zk;
  const Qk = peers.Qk;
  const Isu = peers.isu;
  const RA = peers.rA;
  const Np = peers.Np;
  const NA = peers.nA;
  if (peers == null) {
    throw new Error("OnboardingProviderContinuePanel peers are not configured");
  }
  let {
      appBrand,
      providerIds,
      variant = "onboarding",
      onContinue,
      onSkip,
    } = props,
    c = peers.Ju(),
    [l, u] = peers.fsu.useState(providerIds),
    d = variant === "dialog",
    f = providerIds.some(peers.lsu);
  let p = f,
    m = d ? (
      <Z
        id="electron.onboarding.welcomeV2.externalAgentImport.providers.dialogTitle"
        defaultMessage="Import from other AI apps"
        description="Title for the external agent provider selection dialog"
      />
    ) : (
      <Z
        id="electron.onboarding.welcomeV2.externalAgentImport.providers.title"
        defaultMessage="Import work from other AI apps"
        description="Title for the external agent provider selection step"
      />
    );
  let h = m,
    g = (
      <Z
        id="electron.onboarding.welcomeV2.externalAgentImport.providers.subtitle"
        defaultMessage="Bring over your setup, projects, and recent chats"
        description="Subtitle for the external agent provider selection step"
      />
    );
  let _ = g,
    v = () => {
      if (l.length === 0) {
        onSkip();
        return;
      }
      onContinue(l);
    };
  let y = v,
    b = (e) => {
      u((t) => {
        return t.includes(e)
          ? t.filter((item) => {
              return item !== e;
            })
          : [...t, e];
      });
    };
  let x = b,
    S = (event) => {
      event.preventDefault();
      y();
    };
  let C = S,
    w = d ? (
      <IA>
        <TA
          title={<Zk className="contents">{h}</Zk>}
          subtitle={<Qk className="sr-only">{_}</Qk>}
        />
      </IA>
    ) : (
      <Isu
        appBrand={appBrand}
        sourceIconVariant="neutral"
        title={h}
        subtitle={_}
      />
    );
  let T = d
      ? "mt-4 flex w-full flex-col"
      : "mt-8 flex w-full max-w-xs flex-col",
    E = (
      <div className="mb-2 text-xs leading-4 font-medium text-token-description-foreground">
        {
          <Z
            id="electron.onboarding.welcomeV2.externalAgentImport.providers.appsFound"
            defaultMessage="Apps found"
            description="Label above the external agent apps found list"
          />
        }
      </div>
    );
  let D = c.formatMessage({
    id: "electron.onboarding.welcomeV2.externalAgentImport.providers.list",
    defaultMessage: "Apps found",
    description: "Accessible label for the external agent provider list",
  });
  let O;
  {
    let e = (e) => {
      return providerIds.includes(e);
    };
    let n;
    n = (e) => {
      return (
        <peers.usu
          key={e}
          providerId={e}
          selected={l.includes(e)}
          onToggle={() => {
            return x(e);
          }}
        />
      );
    };
    O = peers.XNl.filter(e).map(n);
  }
  let k = (
    <div
      role="list"
      aria-label={D}
      className="overflow-hidden rounded-2xl border border-token-border bg-token-main-surface-primary"
    >
      {O}
    </div>
  );
  let A = (
    <div className="mt-2 text-center text-xs leading-4 text-token-text-secondary">
      {p ? (
        <Z
          id="electron.onboarding.welcomeV2.externalAgentImport.providers.standardChatsUnsupported"
          defaultMessage="Your existing Claude setup won’t be affected. Standard Claude Chat data cannot be imported."
          description="Note below the external agent provider selection list"
        />
      ) : (
        <Z
          id="electron.onboarding.welcomeV2.externalAgentImport.providers.setupPreserved"
          defaultMessage="Your existing app setup won’t be affected"
          description="Note below the external agent provider selection list explaining that source apps are unchanged"
        />
      )}
    </div>
  );
  let j = (
    <div className={T}>
      {E}
      {k}
      {A}
    </div>
  );
  let M = d ? (
    <div className="mt-4">
      {
        <RA>
          <Np color="ghost" onClick={onSkip}>
            <Z
              id="common.cancel"
              defaultMessage="Cancel"
              description="Cancel button label"
            />
          </Np>
          <Np type="submit" color="primary">
            <Z
              id="electron.onboarding.welcomeV2.continue"
              defaultMessage="Continue"
              description="Welcome v2 continue button label"
            />
          </Np>
        </RA>
      }
    </div>
  ) : (
    <div className="mt-8 flex w-full max-w-xs flex-col items-center gap-2">
      {
        <Np className="w-full justify-center" size="large" onClick={y}>
          <Z
            id="electron.onboarding.welcomeV2.continue"
            defaultMessage="Continue"
            description="Welcome v2 continue button label"
          />
        </Np>
      }
      {
        <Np
          className="w-full justify-center"
          color="ghost"
          size="large"
          onClick={onSkip}
        >
          <Z
            id="electron.onboarding.welcomeV2.skip"
            defaultMessage="Skip"
            description="Welcome v2 skip button label"
          />
        </Np>
      }
    </div>
  );
  let N = (
    <>
      {w}
      {j}
      {M}
    </>
  );
  let P = N;
  return d ? (
    <NA as="form" className="gap-0" onSubmit={C}>
      {P}
    </NA>
  ) : (
    <div className="flex w-full max-w-lg flex-col items-center overflow-hidden rounded-2xl p-10">
      {P}
    </div>
  );
}
