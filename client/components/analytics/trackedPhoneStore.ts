import { useSyncExternalStore } from "react";
import { BUSINESS_PHONE, BUSINESS_TEL_HREF, toTelHref } from "@/lib/site";

export interface TrackedPhone {
  /** Sayfada görünen numara metni */
  display: string;
  /** tel: bağlantısı */
  telHref: string;
  /** Google yönlendirme numarası atandı mı */
  isForwarding: boolean;
}

const ORIGINAL: TrackedPhone = {
  display: BUSINESS_PHONE,
  telHref: BUSINESS_TEL_HREF,
  isForwarding: false,
};

let current: TrackedPhone = ORIGINAL;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** _googWcmGet callback'inden gelen yönlendirme numarasını tüm abonelere yayar. */
export function setForwardingNumber(formattedNumber: string, mobileNumber: string) {
  const display = formattedNumber?.trim();
  const mobile = mobileNumber?.trim();
  if (!display && !mobile) return;
  current = {
    display: display || ORIGINAL.display,
    telHref: mobile ? toTelHref(mobile) : display ? toTelHref(display) : ORIGINAL.telHref,
    isForwarding: true,
  };
  listeners.forEach((listener) => listener());
}

/**
 * Görünen numarayı ve tel: href'ini döner. Sunucu ve ilk hydration her zaman orijinal
 * numarayı kullanır (hydration uyumsuzluğu olmaz); Google numarası geldiğinde yeniden render edilir.
 */
export function useTrackedPhone(): TrackedPhone {
  return useSyncExternalStore(
    subscribe,
    () => current,
    () => ORIGINAL,
  );
}

export const ORIGINAL_PHONE = ORIGINAL;
