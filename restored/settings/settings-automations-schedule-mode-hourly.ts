// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `H$c`) / export `cu`.

export type BindSettingsAutomationsScheduleModeHourlyPeers = {
  $u: (...args: unknown[]) => unknown;
  B$c: (...args: unknown[]) => unknown;
  L$c: (...args: unknown[]) => unknown;
  R$c: (...args: unknown[]) => unknown;
  V$c: (...args: unknown[]) => unknown;
  Zu: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  g3: (...args: unknown[]) => unknown;
  nQc: (...args: unknown[]) => unknown;
  u3: (...args: unknown[]) => unknown;
  z$c: (...args: unknown[]) => unknown;
};

let peers: BindSettingsAutomationsScheduleModeHourlyPeers | null = null;

/** Wire bindSettingsAutomationsScheduleModeHourly peers once companions land. */
export function setBindSettingsAutomationsScheduleModeHourlyPeers(
  next: BindSettingsAutomationsScheduleModeHourlyPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cu` / internal `H$c`.
 */
export function bindSettingsAutomationsScheduleModeHourly() {
  if (peers == null) {
    throw new Error(
      "bindSettingsAutomationsScheduleModeHourly peers are not configured",
    );
  }

  return peers.e(() => {
    (peers.$u(),
      peers.u3(),
      (L$c = 1440),
      (R$c = 15),
      (z$c = Array.from(
        {
          length: peers.L$c / peers.R$c,
        },
        (e, t) => {
          let n = t * peers.R$c;
          return peers.nQc(Math.floor(n / 60), n % 60);
        },
      )),
      (B$c = [
        {
          id: `hourly`,
          labelMessage: peers.Zu({
            id: `settings.automations.scheduleMode.hourly`,
            defaultMessage: `Hourly`,
            description: `Dropdown label for an hourly automation schedule`,
          }),
        },
        {
          id: `daily`,
          labelMessage: peers.Zu({
            id: `settings.automations.scheduleMode.daily`,
            defaultMessage: `Daily`,
            description: `Dropdown label for a daily automation schedule`,
          }),
        },
        {
          id: `weekdays`,
          labelMessage: peers.Zu({
            id: `settings.automations.scheduleMode.weekdays`,
            defaultMessage: `Weekdays`,
            description: `Dropdown label for a weekdays-only automation schedule`,
          }),
        },
        {
          id: `weekly`,
          labelMessage: peers.Zu({
            id: `settings.automations.scheduleMode.weekly`,
            defaultMessage: `Weekly`,
            description: `Dropdown label for a weekly automation schedule`,
          }),
        },
        {
          id: `custom`,
          labelMessage: peers.Zu({
            id: `settings.automations.scheduleMode.custom`,
            defaultMessage: `Custom`,
            description: `Dropdown label for a custom automation schedule`,
          }),
        },
      ]),
      (V$c = [
        {
          id: `hourly`,
          labelMessage: peers.Zu({
            id: `settings.automations.scheduleMode.interval`,
            defaultMessage: `Interval`,
            description: `Dropdown label for a heartbeat automation interval schedule`,
          }),
        },
        ...peers.B$c.filter((e) => peers.e.id !== `hourly`),
      ]),
      (g3 = [
        {
          id: `MO`,
          labelMessage: peers.Zu({
            id: `settings.automations.rrule.weekday.mon`,
            defaultMessage: `Mo`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: peers.Zu({
            id: `settings.automations.rrule.weekday.monday`,
            defaultMessage: `Monday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `TU`,
          labelMessage: peers.Zu({
            id: `settings.automations.rrule.weekday.tue`,
            defaultMessage: `Tu`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: peers.Zu({
            id: `settings.automations.rrule.weekday.tuesday`,
            defaultMessage: `Tuesday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `WE`,
          labelMessage: peers.Zu({
            id: `settings.automations.rrule.weekday.wed`,
            defaultMessage: `We`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: peers.Zu({
            id: `settings.automations.rrule.weekday.wednesday`,
            defaultMessage: `Wednesday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `TH`,
          labelMessage: peers.Zu({
            id: `settings.automations.rrule.weekday.thu`,
            defaultMessage: `Th`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: peers.Zu({
            id: `settings.automations.rrule.weekday.thursday`,
            defaultMessage: `Thursday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `FR`,
          labelMessage: peers.Zu({
            id: `settings.automations.rrule.weekday.fri`,
            defaultMessage: `Fr`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: peers.Zu({
            id: `settings.automations.rrule.weekday.friday`,
            defaultMessage: `Friday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `SA`,
          labelMessage: peers.Zu({
            id: `settings.automations.rrule.weekday.sat`,
            defaultMessage: `Sa`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: peers.Zu({
            id: `settings.automations.rrule.weekday.saturday`,
            defaultMessage: `Saturday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `SU`,
          labelMessage: peers.Zu({
            id: `settings.automations.rrule.weekday.sun`,
            defaultMessage: `Su`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: peers.Zu({
            id: `settings.automations.rrule.weekday.sunday`,
            defaultMessage: `Sunday`,
            description: `RRULE weekday long label`,
          }),
        },
      ]));
  });
}
