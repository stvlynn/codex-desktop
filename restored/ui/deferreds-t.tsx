// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xpe`) / export `s_t`.

export type BindDeferredsTPeers = {
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  _pe: (...args: unknown[]) => unknown;
  ape: (...args: unknown[]) => unknown;
  bpe: (...args: unknown[]) => unknown;
  cpe: (...args: unknown[]) => unknown;
  dl: (...args: unknown[]) => unknown;
  dpe: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fpe: (...args: unknown[]) => unknown;
  gpe: (...args: unknown[]) => unknown;
  hpe: (...args: unknown[]) => unknown;
  ipe: (...args: unknown[]) => unknown;
  lpe: (...args: unknown[]) => unknown;
  ml: (...args: unknown[]) => unknown;
  mpe: (...args: unknown[]) => unknown;
  ope: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  ppe: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  spe: (...args: unknown[]) => unknown;
  upe: (...args: unknown[]) => unknown;
  vpe: (...args: unknown[]) => unknown;
  ype: (...args: unknown[]) => unknown;
};

let peers: BindDeferredsTPeers | null = null;

/** Wire bindDeferredsT peers once companions land. */
export function setBindDeferredsTPeers(next: BindDeferredsTPeers): void {
  peers = next;
}

/**
 * Bundle export `s_t` / internal `xpe`.
 */
export function bindDeferredsT() {
  if (peers == null) {
    throw new Error("bindDeferredsT peers are not configured");
  }

  return peers.e(() => {
    peers.Sl(), ipe = peers.pl([`off`, `30-seconds`, `1-minute`, `3-minutes`, `10-minutes`, `30-minutes`, `1-hour`]), ape = peers.rl().int().min(0).max(100), ope = {
      off: null,
      "30-seconds": 3e4,
      "1-minute": 6e4,
      "3-minutes": 18e4,
      "10-minutes": 6e5,
      "30-minutes": 18e5,
      "1-hour": 36e5
    }, peers.pl([`ACT06`, `ACT07`, `ACT08`, `ACT09`, `ACT10_ACT11`, `ACT12`]), spe = peers.pl(`FAST.APPR.REJ.SPLIT.MIC.CODEX.BUG.OAI.TERM.DWN.DEL.NEW.NAV.MAGIC.DIFF.PLAY.GIT.BRCH.BRANCH.MRG.PR.PAINT.LAB.PARTY.TIME.MIND+.MIND-.EMPT1.EMPT2.EMPT3.EMPT4.SETUP.FOLD.UPL.APPS.YOLO.YEET.EMPT5`.split(`.`)), cpe = peers.dl(`type`, [peers.sl({
      type: peers.ml(`command`),
      commandId: peers.X().min(1)
    }), peers.sl({
      type: peers.ml(`skill`),
      skillName: peers.X().min(1),
      skillPath: peers.X().min(1)
    })]), lpe = peers.sl({
      keycapId: peers.spe,
      commandId: peers.X().optional(),
      action: peers.cpe.optional()
    }), upe = peers.sl({
      up: peers.cpe.nullable(),
      right: peers.cpe.nullable(),
      down: peers.cpe.nullable(),
      left: peers.cpe.nullable()
    }), dpe = peers.pl([`composer-navigation`, `reasoning`, `conversation-scroll`]), fpe = peers.pl([`push-to-talk`, `realtime`]), ppe = peers.pl([`pinned`, `recent`, `priority`, `custom`]), mpe = [`AG00`, `AG01`, `AG02`, `AG03`, `AG04`, `AG05`], hpe = {
      up: {
        type: `command`,
        commandId: `composer.togglePlanMode`
      },
      right: {
        type: `command`,
        commandId: `navigateForward`
      },
      down: {
        type: `command`,
        commandId: `toggleSidebar`
      },
      left: {
        type: `command`,
        commandId: `navigateBack`
      }
    }, gpe = `recent`, _pe = `composer-navigation`, vpe = `push-to-talk`, ype = peers.sl({
      version: peers.ml(1),
      slots: peers.sl({
        ACT06: peers.lpe,
        ACT07: peers.lpe,
        ACT08: peers.lpe,
        ACT09: peers.lpe,
        ACT10_ACT11: peers.lpe,
        ACT12: peers.lpe
      }),
      analogStick: peers.upe.default(peers.hpe),
      encoderMode: peers.dpe.default(`composer-navigation`),
      voiceButtonMode: peers.fpe.default(peers.vpe)
    }), bpe = {
      version: 1,
      slots: {
        ACT06: {
          keycapId: `FAST`
        },
        ACT07: {
          keycapId: `APPR`
        },
        ACT08: {
          keycapId: `REJ`
        },
        ACT09: {
          keycapId: `SPLIT`
        },
        ACT10_ACT11: {
          keycapId: `MIC`
        },
        ACT12: {
          keycapId: `CODEX`
        }
      },
      analogStick: peers.hpe,
      encoderMode: peers._pe,
      voiceButtonMode: peers.vpe
    };
  });
}
