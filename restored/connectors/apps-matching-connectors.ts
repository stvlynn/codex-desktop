// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Doc` / export `gp` (+ companions `joc` / `Aoc` / `koc`).

type AppLike = {
  id: string;
  name: string;
  logoUrl?: string | null;
  logoUrlDark?: string | null;
};

type ConnectorLike = {
  name: string;
  codexAppId?: string | null;
};

function normalizedAppName(name: string): string {
  return name.trim().toLowerCase();
}

function logoScore(app: AppLike): number {
  return +(app.logoUrl != null || app.logoUrlDark != null);
}

/** Apps matched by connector codexAppId or normalized name (logo-preferred). */
export function appsMatchingConnectors(args: {
  apps: readonly AppLike[];
  connectors: readonly ConnectorLike[];
}): AppLike[] {
  const { apps, connectors } = args;
  const byId = new Map(apps.map((app) => [app.id, app]));
  const byName = new Map<string, AppLike[]>();
  for (const app of apps) {
    const key = normalizedAppName(app.name);
    byName.set(key, [...(byName.get(key) ?? []), app]);
  }
  const matched: AppLike[] = [];
  const seen = new Set<string>();
  for (const connector of connectors) {
    const app =
      (connector.codexAppId == null
        ? undefined
        : byId.get(connector.codexAppId)) ??
      [...(byName.get(normalizedAppName(connector.name)) ?? [])].sort(
        (left, right) => logoScore(right) - logoScore(left),
      )[0];
    if (app == null || seen.has(app.id)) continue;
    seen.add(app.id);
    matched.push(app);
  }
  return matched;
}
