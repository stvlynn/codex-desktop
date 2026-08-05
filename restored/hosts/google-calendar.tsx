// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `oRn`) / export `$5`.

export type BindGoogleCalendarPeers = {
  aRn: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindGoogleCalendarPeers | null = null;

/** Wire bindGoogleCalendar peers once companions land. */
export function setBindGoogleCalendarPeers(
  next: BindGoogleCalendarPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$5` / internal `oRn`.
 */
export function bindGoogleCalendar() {
  if (peers == null) {
    throw new Error("bindGoogleCalendar peers are not configured");
  }

  return peers.e(() => {
    aRn = [
      {
        appId: `google-calendar`,
        hostnames: [`calendar.google.com`],
      },
      {
        appId: `google-drive`,
        hostnames: [`docs.google.com`],
      },
      {
        appId: `google-drive`,
        hostnames: [`drive.google.com`],
      },
      {
        appId: `figma`,
        hostnames: [`figma.com`],
      },
      {
        appId: `github`,
        hostnames: [`github.com`],
      },
      {
        appId: `linear`,
        hostnames: [`linear.app`],
      },
      {
        appId: `gmail`,
        hostnames: [`mail.google.com`],
      },
      {
        appId: `notion`,
        hostnames: [`app.notion.com`, `notion.so`],
      },
      {
        appId: `google-drive`,
        hostnames: [`sheets.google.com`],
      },
      {
        appId: `slack`,
        hostnames: [`slack.com`],
      },
      {
        appId: `google-drive`,
        hostnames: [`slides.google.com`],
      },
    ];
  });
}
