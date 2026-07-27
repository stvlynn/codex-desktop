// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// ChatGPT subscription plan slug literals (`Kx` / export `Y7`).

/** Plan slug enum mirrored from the aggregator `Kx` object. */
export const ChatGptPlanId = {
  FREE: "free",
  GO: "go",
  PLUS: "plus",
  PRO: "pro",
  PROLITE: "prolite",
  SELF_SERVE_BUSINESS: "team",
  ENTERPRISE_CBP: "business",
  SELF_SERVE_BUSINESS_USAGE_BASED: "self_serve_business_usage_based",
  ENTERPRISE_CBP_USAGE_BASED: "enterprise_cbp_usage_based",
  ENTERPRISE_CBP_AUTOMATION: "enterprise_cbp_automation",
  FINSERV: "finserv",
  EDUCATION_CBP: "education",
  EDU_PLUS: "edu_plus",
  EDU_PRO: "edu_pro",
  QUORUM: "quorum",
  DEPRECATED_ENTERPRISE: "enterprise",
  HC: "hc",
  DEPRECATED_ENTERPRISE_2: "deprecated_enterprise",
  DEPRECATED_EDU: "edu",
  DEPRECATED_EDU_2: "deprecated_edu",
} as const;

export type ChatGptPlanId = (typeof ChatGptPlanId)[keyof typeof ChatGptPlanId];

/** Bundle export `X7` — Rolldown ESM init retained as no-op. */
export function ensureChatGptPlanIdInit(): void {}
