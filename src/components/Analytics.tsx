"use client";

import { useEffect } from "react";
import { getConsent, subscribeConsent } from "@/lib/consent";
import { initConsentDefaults, loadAnalytics, revokeAnalytics } from "@/lib/analytics";

/** Mounted once in the root layout; wires GA4 to the `eve-consent` store. */
export default function Analytics() {
  useEffect(() => {
    initConsentDefaults();
    if (getConsent()?.choice === "accepted") loadAnalytics();
    return subscribeConsent((consent) => {
      if (consent?.choice === "accepted") loadAnalytics();
      else revokeAnalytics();
    });
  }, []);

  return null;
}
