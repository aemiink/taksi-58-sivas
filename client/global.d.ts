export {};

type GtagCommand = "config" | "event" | "js" | "set" | "consent" | "get";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (command: GtagCommand, target: string | Date, params?: Record<string, unknown>) => void;
    /**
     * Google Ads "website call conversion" yardımcı fonksiyonu. gtag.js, phone_conversion_number
     * içeren bir config ile yüklendiğinde tanımlanır. Callback yalnızca ziyaretçiye bir
     * Google yönlendirme numarası atandığında çağrılır.
     */
    _googWcmGet?: (
      callback: (formattedNumber: string, mobileNumber: string) => void,
      phoneNumber: string,
    ) => void;
  }
}
