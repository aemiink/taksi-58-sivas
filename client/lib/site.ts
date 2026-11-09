/**
 * Site genelindeki alan adı ve iletişim bilgileri için tek kaynak.
 * Alan adı NEXT_PUBLIC_SITE_URL ile değiştirilebilir; boşsa canlı alan adı kullanılır.
 */
const DEFAULT_SITE_URL = "https://www.sivastaksi58.com.tr";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, "");

/** "/blog" -> "https://www.sivastaksi58.com.tr/blog" */
export function absoluteUrl(path = "/"): string {
  if (path === "/" || path === "") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const OG_IMAGE_URL = absoluteUrl("/gallery/taksi_08.png");

/** Sitede görünen numara biçimiyle birebir aynı olmalı (Google Ads numara eşleştirmesi bu metne göre yapılır). */
export const BUSINESS_PHONE = process.env.NEXT_PUBLIC_BUSINESS_PHONE || "0553 407 49 89";

export function toTelHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export const BUSINESS_TEL_HREF = toTelHref(BUSINESS_PHONE);
