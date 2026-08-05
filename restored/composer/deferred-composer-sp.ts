// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `msc`) / export `sp`.

export type BindDeferredComposerSpPeers = {
  Zu: (...args: unknown[]) => unknown;
};

let peers: BindDeferredComposerSpPeers | null = null;

/** Wire bindDeferredComposerSp peers once companions land. */
export function setBindDeferredComposerSpPeers(
  next: BindDeferredComposerSpPeers,
): void {
  peers = next;
}

/**
 * Bundle export `sp` / internal `msc`.
 */
export function bindDeferredComposerSp() {
  if (peers == null) {
    throw new Error("bindDeferredComposerSp peers are not configured");
  }

  return {
    create_automation: {
      origin: `checked_in`,
      pluginSlots: {
        chatApp: `slack`,
        mailApp: `gmail`,
      },
      messages: {
        label: peers.Zu({
          id: `sidebarOnboardingChecklist.createAutomation`,
          defaultMessage: `Set up a daily update`,
          description: `Onboarding checklist item in the sidebar`,
        }),
        prompt: peers.Zu({
          id: `sidebarOnboardingChecklist.createAutomation.providerPrompt`,
          defaultMessage: `Create a Scheduled Task called "Weekday Morning Brief" that runs every weekday at 7:30 AM in my local time zone.

First, make a lightweight read from {chatApp} and {mailApp}. If either needs access, open its connection flow instead of asking me to connect in chat. Once connected, retry and continue.

Once both sources are connected, generate today's real brief immediately using live connected sources. If live source data is unavailable, say which source is unavailable instead of generating a dummy brief.

For the first-run output only, start with a short, celebratory confirmation that I've created my first Scheduled Task. Briefly explain what a Scheduled Task is and summarize this task's name, schedule, timezone, and connected sources in a clear, polished format. Then transition into today's brief. Keep this introduction concise, and do not repeat it on future runs.

For each run:
- Search since the last successful run, or the past 3 days if this is the first run.
- Do not rescan older items unless needed to understand a thread, document, or citation.
- For {mailApp}, search the primary inbox only. Exclude junk, deleted items, and promotional or social categories.
- For {chatApp}, prioritize DMs, mentions, threads I'm in, and high-signal channels only.
- Stop once you have enough candidates to identify the top 3–5 important items.
- Do not perform exhaustive searches.
- Do not show connector checks, tool details, search notes, or process commentary.
- Return exactly one final response when done.

Brief format:

# Morning Brief

## Key items
- Include only the top 3–5 items likely to need attention today.
- Combine {chatApp} and {mailApp} into one list.
- For each item, include: what it is, why it matters, suggested action, urgency, and a direct link or citation.

## Later / FYI
- Optional, max 3 bullets, only if useful.

If there are no important items in the lookback window, say: "No urgent items found."

Keep it fast, concise, and skimmable. No calendar section. No process notes.`,
          description: `Composer prefill prompt for the daily update automation onboarding checklist item`,
        }),
      },
    },
    summarize_inbox: {
      origin: `checked_in`,
      pluginSlots: {
        mailApp: `gmail`,
      },
      prependPluginMentions: !0,
      messages: {
        label: peers.Zu({
          id: `sidebarOnboardingChecklist.summarizeInbox`,
          defaultMessage: `Summarize my inbox`,
          description: `Onboarding checklist item in the sidebar`,
        }),
        prompt: peers.Zu({
          id: `sidebarOnboardingChecklist.summarizeInbox.prompt`,
          defaultMessage: `Summarize my unread emails and draft responses`,
          description: `Composer prefill prompt for the mail inbox summary onboarding checklist item`,
        }),
      },
    },
    triage_github_prs: {
      origin: `checked_in`,
      pluginSlots: {
        codeHost: `github`,
      },
      prependPluginMentions: !0,
      messages: {
        label: peers.Zu({
          id: `sidebarOnboardingChecklist.triageGithubPrs`,
          defaultMessage: `Triage GitHub PRs`,
          description: `Onboarding checklist item in the sidebar`,
        }),
        prompt: peers.Zu({
          id: `sidebarOnboardingChecklist.triageGithubPrs.prompt`,
          defaultMessage: `Inspect PRs, triage issues, debug failing checks, and prepare code changes for review`,
          description: `Composer prefill prompt for the GitHub PR triage onboarding checklist item`,
        }),
      },
    },
    catch_up_updates_and_blockers: {
      origin: `checked_in`,
      pluginSlots: {
        chatApp: `slack`,
      },
      prependPluginMentions: !0,
      messages: {
        label: peers.Zu({
          id: `sidebarOnboardingChecklist.catchUpUpdatesAndBlockers`,
          defaultMessage: `Catch me up on updates and blockers`,
          description: `Onboarding checklist item in the sidebar`,
        }),
        prompt: peers.Zu({
          id: `sidebarOnboardingChecklist.catchUpUpdatesAndBlockers.prompt`,
          defaultMessage: `catch me up on recent decisions and open questions.`,
          description: `Composer prefill prompt for the messaging updates and blockers onboarding checklist item`,
        }),
      },
    },
    catch_up_linear: {
      origin: `checked_in`,
      pluginSlots: {
        projectTracker: `linear`,
      },
      prependPluginMentions: !0,
      messages: {
        label: peers.Zu({
          id: `sidebarOnboardingChecklist.catchUpLinear`,
          defaultMessage: `Catch me up on Linear`,
          description: `Onboarding checklist item in the sidebar`,
        }),
        prompt: peers.Zu({
          id: `sidebarOnboardingChecklist.catchUpLinear.prompt`,
          defaultMessage: `Summarize recent activity on my assigned Linear issues. Highlight decisions, blockers, changed priorities, and anything waiting on me. Suggest next steps.`,
          description: `Composer prefill prompt for the Linear issue activity onboarding checklist item`,
        }),
      },
    },
    summarize_current_priorities: {
      origin: `checked_in`,
      pluginSlots: {
        workspaceApp: `notion`,
      },
      prependPluginMentions: !0,
      messages: {
        label: peers.Zu({
          id: `sidebarOnboardingChecklist.summarizeCurrentPriorities`,
          defaultMessage: `Summarize current priorities`,
          description: `Onboarding checklist item in the sidebar`,
        }),
        prompt: peers.Zu({
          id: `sidebarOnboardingChecklist.summarizeCurrentPriorities.prompt`,
          defaultMessage: `Create a Notion doc summarizing my current priorities and next steps`,
          description: `Composer prefill prompt for the Notion current priorities onboarding checklist item`,
        }),
      },
    },
    review_business_and_project_plans: {
      origin: `checked_in`,
      pluginSlots: {
        fileStorageApp: `google-drive`,
      },
      prependPluginMentions: !0,
      messages: {
        label: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans`,
          defaultMessage: `Review the latest plans`,
          description: `Onboarding checklist item in the sidebar`,
        }),
        prompt: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans.prompt`,
          defaultMessage: `review the latest business or project results and plans, and flag opportunities`,
          description: `Composer prefill prompt for the file storage plans review onboarding checklist item`,
        }),
      },
    },
    review_roadmaps_and_projects: {
      origin: `checked_in`,
      pluginSlots: {
        fileStorageApp: `google-drive`,
      },
      prependPluginMentions: !0,
      messages: {
        label: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans.productManagement`,
          defaultMessage: `Review roadmaps and projects`,
          description: `File storage review onboarding checklist item for product roles`,
        }),
        prompt: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans.productManagement.prompt`,
          defaultMessage: `review recent roadmap docs, specs, research summaries, metrics, and planning docs. Summarize changes, risks, open questions, and recommended product decisions.`,
          description: `Composer prefill prompt for the file storage review onboarding checklist item for product roles`,
        }),
      },
    },
    review_design_briefs: {
      origin: `checked_in`,
      pluginSlots: {
        fileStorageApp: `google-drive`,
      },
      prependPluginMentions: !0,
      messages: {
        label: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans.design`,
          defaultMessage: `Review design briefs`,
          description: `File storage review onboarding checklist item for design roles`,
        }),
        prompt: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans.design.prompt`,
          defaultMessage: `review recent briefs, research summaries, brand guidelines, and launch docs. Summarize goals, constraints, feedback, risks, and next design moves.`,
          description: `Composer prefill prompt for the file storage review onboarding checklist item for design roles`,
        }),
      },
    },
    review_campaigns: {
      origin: `checked_in`,
      pluginSlots: {
        fileStorageApp: `google-drive`,
      },
      prependPluginMentions: !0,
      messages: {
        label: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans.marketing`,
          defaultMessage: `Review campaigns`,
          description: `File storage review onboarding checklist item for marketing roles`,
        }),
        prompt: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans.marketing.prompt`,
          defaultMessage: `review recent campaign briefs, messaging docs, creative assets, content calendars, and performance readouts. Summarize changes, opportunities, risks, and next actions.`,
          description: `Composer prefill prompt for the file storage review onboarding checklist item for marketing roles`,
        }),
      },
    },
    review_account_plans: {
      origin: `checked_in`,
      pluginSlots: {
        fileStorageApp: `google-drive`,
      },
      prependPluginMentions: !0,
      messages: {
        label: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans.sales`,
          defaultMessage: `Review account plans`,
          description: `File storage review onboarding checklist item for sales roles`,
        }),
        prompt: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans.sales.prompt`,
          defaultMessage: `review recent account plans, call notes, proposals, QBR decks, and pipeline reviews. Summarize deal changes, risks, and next sales actions.`,
          description: `Composer prefill prompt for the file storage review onboarding checklist item for sales roles`,
        }),
      },
    },
    review_forecasts: {
      origin: `checked_in`,
      pluginSlots: {
        fileStorageApp: `google-drive`,
      },
      prependPluginMentions: !0,
      messages: {
        label: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans.finance`,
          defaultMessage: `Review forecasts`,
          description: `File storage review onboarding checklist item for finance roles`,
        }),
        prompt: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans.finance.prompt`,
          defaultMessage: `review recent forecasts, budgets, models, business reviews, and performance readouts. Summarize changes, assumptions, risks, and recommended finance actions.`,
          description: `Composer prefill prompt for the file storage review onboarding checklist item for finance roles`,
        }),
      },
    },
    review_operating_plans: {
      origin: `checked_in`,
      pluginSlots: {
        fileStorageApp: `google-drive`,
      },
      prependPluginMentions: !0,
      messages: {
        label: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans.operations`,
          defaultMessage: `Review operating plans`,
          description: `File storage review onboarding checklist item for operations roles`,
        }),
        prompt: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans.operations.prompt`,
          defaultMessage: `review recent trackers, project plans, SOPs, status reports, and operating reviews. Summarize changes, blockers, risks, owners, and next actions.`,
          description: `Composer prefill prompt for the file storage review onboarding checklist item for operations roles`,
        }),
      },
    },
    review_people_plans_and_policies: {
      origin: `checked_in`,
      pluginSlots: {
        fileStorageApp: `google-drive`,
      },
      prependPluginMentions: !0,
      messages: {
        label: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans.peopleHr`,
          defaultMessage: `Review plans and policies`,
          description: `File storage review onboarding checklist item for people and HR roles`,
        }),
        prompt: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans.peopleHr.prompt`,
          defaultMessage: `review recent hiring plans, onboarding docs, policy drafts, survey summaries, and manager guides. Summarize changes, gaps, risks, and next People actions.`,
          description: `Composer prefill prompt for the file storage review onboarding checklist item for people and HR roles`,
        }),
      },
    },
    review_contracts_and_policies: {
      origin: `checked_in`,
      pluginSlots: {
        fileStorageApp: `google-drive`,
      },
      prependPluginMentions: !0,
      messages: {
        label: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans.legal`,
          defaultMessage: `Review contracts and policies`,
          description: `File storage review onboarding checklist item for legal roles`,
        }),
        prompt: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans.legal.prompt`,
          defaultMessage: `review recent contracts, redlines, policy drafts, negotiation notes, and approval docs. Summarize key changes, obligations, risks, and next legal actions.`,
          description: `Composer prefill prompt for the file storage review onboarding checklist item for legal roles`,
        }),
      },
    },
    review_class_materials: {
      origin: `checked_in`,
      pluginSlots: {
        fileStorageApp: `google-drive`,
      },
      prependPluginMentions: !0,
      messages: {
        label: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans.student`,
          defaultMessage: `Review class materials`,
          description: `File storage review onboarding checklist item for student roles`,
        }),
        prompt: peers.Zu({
          id: `sidebarOnboardingChecklist.reviewLatestPlans.student.prompt`,
          defaultMessage: `review recent lecture notes, readings, assignments, project docs, and shared class materials. Summarize key points, deadlines, gaps, and next study steps.`,
          description: `Composer prefill prompt for the file storage review onboarding checklist item for student roles`,
        }),
      },
    },
  };
}
