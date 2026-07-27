// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Sz`) / export `Ez`.

export type UsePetsSettingsControllerPeers = {
  $4i: (...args: unknown[]) => unknown;
  B_: (...args: unknown[]) => unknown;
  Bf: (...args: unknown[]) => unknown;
  Cz: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  SD: (...args: unknown[]) => unknown;
  X4i: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  Z4i: (...args: unknown[]) => unknown;
  bb0: (...args: unknown[]) => unknown;
  data: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  mj: (...args: unknown[]) => unknown;
  roots: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
  wE: (...args: unknown[]) => unknown;
};
let peers: UsePetsSettingsControllerPeers | null = null;

/** Wire usePetsSettingsController peers once companions land. */
export function setUsePetsSettingsControllerPeers(
  next: UsePetsSettingsControllerPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ez` / internal `Sz`.
 */
export function usePetsSettingsController(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("usePetsSettingsController peers are not configured");
  }
  let i = peers.Y(peers.SD),
    a = t ?? i,
    o = peers.rt(),
    [s] = peers.B_("skills_refresh_nonce"),
    c = peers.Y(peers.wE),
    l = e === undefined;
  c.data?.roots;
  let u;
  bb0: {
    if (Array.isArray(e)) {
      u = e;
      break bb0;
    }
    if (typeof e == "string") {
      let t;
      t = [e];
      u = t;
      break bb0;
    }
    let t;
    t = c.data?.roots ?? [];
    u = t;
  }
  let d = u,
    f = (n?.enabled ?? true) && (e !== undefined || c.isFetched),
    p = [...peers.Cz, a, d];
  let m = p,
    h = () => {
      return peers.Bf("list-skills-for-host", {
        hostId: a,
        cwds: d,
      });
    };
  let g = {
    queryKey: m,
    queryFn: h,
    enabled: f,
    staleTime: peers.Hf.FIVE_MINUTES,
    gcTime: 1 / 0,
  };
  let _ = peers.jt(g);
  _.data?.data;
  let v = _.data?.data,
    y = peers.X4i(v);
  let b = y,
    x,
    S;
  x = () => {
    s != null &&
      o.invalidateQueries({
        queryKey: peers.Cz,
      });
  };
  S = [s, o];
  peers.$4i.useEffect(x, S);
  let C = async function () {
    let e = await peers.Bf("list-skills-for-host", {
      hostId: a,
      cwds: d,
      forceReload: true,
    });
    return (o.setQueryData(m, e), peers.X4i(e.data));
  };
  let w = C,
    T;
  T = () => {
    w();
  };
  peers.mj("forceReloadSkills", T);
  let E = (e) => {
    let t = e.toLowerCase();
    return (
      b.find((item) => {
        return item.name.toLowerCase() === t;
      }) ?? null
    );
  };
  let D = E,
    O = (l && c.isLoading) || _.isLoading,
    k = (l && c.isFetching) || _.isFetching,
    A = () => {
      return _.refetch();
    };
  return {
    skills: b,
    isLoading: O,
    isFetching: k,
    refetch: A,
    forceReload: w,
    findSkillByName: D,
  };
}
