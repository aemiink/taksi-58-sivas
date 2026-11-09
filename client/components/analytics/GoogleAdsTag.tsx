"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  GADS_CALL_LABEL,
  GADS_ENABLED,
  GADS_ID,
  GADS_TEL_CLICK_LABEL,
  GADS_WA_CLICK_LABEL,
} from "@/lib/google-ads";
import { BUSINESS_PHONE } from "@/lib/site";
import { setForwardingNumber } from "./trackedPhoneStore";

const WCM_POLL_INTERVAL_MS = 250;
const WCM_POLL_TIMEOUT_MS = 15000;

function sendClickConversion(label: string, eventName: "phone_click" | "whatsapp_click", href: string) {
  const gtag = window.gtag;
  if (typeof gtag !== "function") return;

  if (label) {
    gtag("event", "conversion", {
      send_to: `${GADS_ID}/${label}`,
      transport_type: "beacon",
    });
  }
  gtag("event", eventName, {
    link_url: href,
    transport_type: "beacon",
  });
}

/** Tüm tel: ve WhatsApp bağlantıları için tek bir (event delegation) tıklama dinleyicisi. */
function useClickConversions() {
  useEffect(() => {
    if (!GADS_ENABLED) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      const element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
      const anchor = element?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      if (href.toLowerCase().startsWith("tel:")) {
        sendClickConversion(GADS_TEL_CLICK_LABEL, "phone_click", href);
      } else if (/wa\.me|whatsapp/i.test(href)) {
        sendClickConversion(GADS_WA_CLICK_LABEL, "whatsapp_click", href);
      }
      // Navigasyon engellenmez (preventDefault yok).
    };

    // Capture fazında dinlenir: alt bileşenler stopPropagation yapsa bile tıklama yakalanır.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
}

/** Google yönlendirme numarasını (website call conversion) alıp useTrackedPhone aboneliğine iletir. */
function useWebsiteCallNumber() {
  useEffect(() => {
    if (!GADS_ENABLED || !GADS_CALL_LABEL) return;

    let cancelled = false;
    const startedAt = Date.now();
    let timer: number | undefined;

    const tryGet = () => {
      if (cancelled) return;
      if (typeof window._googWcmGet === "function") {
        window._googWcmGet((formattedNumber, mobileNumber) => {
          if (!cancelled) setForwardingNumber(formattedNumber, mobileNumber);
        }, BUSINESS_PHONE);
        return;
      }
      // Etiket yüklenmediyse (ör. reklam engelleyici) orijinal numara kalır.
      if (Date.now() - startedAt < WCM_POLL_TIMEOUT_MS) {
        timer = window.setTimeout(tryGet, WCM_POLL_INTERVAL_MS);
      }
    };

    tryGet();
    return () => {
      cancelled = true;
      if (timer) window.clearTimeout(timer);
    };
  }, []);
}

function buildInlineScript(): string {
  const lines = [
    "window.dataLayer = window.dataLayer || [];",
    "function gtag(){dataLayer.push(arguments);}",
    "window.gtag = gtag;",
    "gtag('js', new Date());",
    `gtag('config', ${JSON.stringify(GADS_ID)});`,
  ];
  if (GADS_CALL_LABEL) {
    lines.push(
      `gtag('config', ${JSON.stringify(`${GADS_ID}/${GADS_CALL_LABEL}`)}, { phone_conversion_number: ${JSON.stringify(BUSINESS_PHONE)} });`,
    );
  }
  return lines.join("\n");
}

function GoogleAdsTagInner() {
  useClickConversions();
  useWebsiteCallNumber();

  return (
    <>
      <Script
        id="google-ads-gtag"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GADS_ID)}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag-init" strategy="afterInteractive">
        {buildInlineScript()}
      </Script>
    </>
  );
}

/** NEXT_PUBLIC_GADS_ID boşsa hiçbir şey render etmez ve hiçbir script yüklemez. */
export default function GoogleAdsTag() {
  if (!GADS_ENABLED) return null;
  return <GoogleAdsTagInner />;
}
