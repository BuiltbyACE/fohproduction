"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Plausible analytics. Cookieless, so no consent banner is needed.
 *
 * Set NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL to the script URL from the Plausible
 * dashboard. While it is unset, nothing loads and nothing is tracked.
 *
 * Each event name below must also be added as a goal in Plausible.
 */
const SCRIPT_URL = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL?.trim();

const PAGE_EVENTS: Record<string, string> = {
  "/support-us": "Support Us Visit",
  "/contact": "Contact Visit",
};

type Plausible = ((event: string) => void) & { q?: unknown[] };

declare global {
  interface Window {
    plausible?: Plausible;
  }
}

function track(event: string) {
  // Queue the call if the script has not finished loading yet.
  const queued: Plausible = (...args) => {
    (queued.q = queued.q ?? []).push(args);
  };
  window.plausible = window.plausible ?? queued;
  window.plausible(event);
}

function linkEvent(href: string) {
  if (href.startsWith("tel:")) return "Phone Click";
  if (href.startsWith("mailto:")) return "Email Click";
  if (/^https?:\/\/(wa\.me|(api\.|web\.)?whatsapp\.com)/.test(href)) {
    return "WhatsApp Click";
  }
  return null;
}

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!SCRIPT_URL) return;
    const event = PAGE_EVENTS[pathname];
    if (event) track(event);
  }, [pathname]);

  useEffect(() => {
    if (!SCRIPT_URL) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      const event = link && linkEvent(link.getAttribute("href") ?? "");
      if (event) track(event);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!SCRIPT_URL) return null;

  return (
    <Script
      src={SCRIPT_URL}
      data-domain="fountainofhope.or.ke"
      strategy="afterInteractive"
    />
  );
}
