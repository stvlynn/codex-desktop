// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Hme`) / export `Lgt`.

export type BindDeferredWorktreeLgtPeers = {
  Bme: (...args: unknown[]) => unknown;
  Fme: (...args: unknown[]) => unknown;
  Ime: (...args: unknown[]) => unknown;
  Lme: (...args: unknown[]) => unknown;
  Mme: (...args: unknown[]) => unknown;
  Nme: (...args: unknown[]) => unknown;
  Pme: (...args: unknown[]) => unknown;
  Rme: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  Vme: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  dl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ml: (...args: unknown[]) => unknown;
  ol: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  zme: (...args: unknown[]) => unknown;
};

let peers: BindDeferredWorktreeLgtPeers | null = null;

/** Wire bindDeferredWorktreeLgt peers once companions land. */
export function setBindDeferredWorktreeLgtPeers(
  next: BindDeferredWorktreeLgtPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Lgt` / internal `Hme`.
 */
export function bindDeferredWorktreeLgt() {
  if (peers == null) {
    throw new Error("bindDeferredWorktreeLgt peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      (Mme = `Automation schedule has no future runs. Choose a schedule with an occurrence after the current time.`),
      (Nme = `Automation does not exist in the app and could not be updated. It may have been deleted manually by the user.`),
      (Pme = peers.pl([`ACTIVE`, `PAUSED`, `DELETED`])),
      (Fme = peers.pl([`cron`, `heartbeat`])),
      (Ime = peers.pl([`worktree`, `local`])),
      (Lme = peers.dl(`type`, [
        peers.sl({
          type: peers.ml(`project`),
          project_id: peers.X(),
        }),
        peers.sl({
          type: peers.ml(`projectless`),
        }),
      ])),
      (Rme = peers.pl([`failed_runs_only`])),
      (zme = peers.pl([
        `none`,
        `minimal`,
        `low`,
        `medium`,
        `high`,
        `xhigh`,
        `max`,
        `ultra`,
      ])),
      peers.sl({
        version: peers.rl().optional(),
        id: peers.X(),
        kind: peers.Fme.optional(),
        name: peers.X(),
        prompt: peers.X(),
        status: peers.Pme,
        rrule: peers.X().optional(),
        execution_environment: peers.Ime.optional(),
        local_environment_config_path: peers.X().optional(),
        model: peers.X().optional(),
        reasoning_effort: peers.zme.optional(),
        plugin_template_id: peers.X().optional(),
        target: peers.Lme.optional(),
        notification_policy: peers.Rme.optional(),
        cwds: peers.ol(peers.X()).optional(),
        target_thread_id: peers.X().optional(),
        created_at: peers.rl(),
        updated_at: peers.rl(),
      }),
      (Bme = `worktree`),
      (Vme = `gpt-5.3-codex`));
  });
}
