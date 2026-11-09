/**
 * Google Ads yapılandırması. NEXT_PUBLIC_* değişkenleri build sırasında koda gömülür,
 * bu yüzden process.env.X ifadeleri birebir yazılmalıdır.
 */
export const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID?.trim() || "";
export const GADS_CALL_LABEL = process.env.NEXT_PUBLIC_GADS_CALL_LABEL?.trim() || "";
export const GADS_TEL_CLICK_LABEL = process.env.NEXT_PUBLIC_GADS_TEL_CLICK_LABEL?.trim() || "";
export const GADS_WA_CLICK_LABEL = process.env.NEXT_PUBLIC_GADS_WA_CLICK_LABEL?.trim() || "";

export const GADS_ENABLED = GADS_ID !== "";
