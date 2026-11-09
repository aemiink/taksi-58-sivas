"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { useEffect, useRef } from "react";
import { ORIGINAL_PHONE, useTrackedPhone } from "./trackedPhoneStore";

/** Görünen işletme numarası (Google yönlendirme numarası varsa onu gösterir). */
export function TrackedPhoneNumber() {
  return <>{useTrackedPhone().display}</>;
}

/** Düz metin içindeki işletme numarasını yönlendirme numarasıyla değiştirir (ör. SSS cevapları). */
export function TrackedPhoneText({ text }: { text: string }) {
  const { display } = useTrackedPhone();
  return <>{display === ORIGINAL_PHONE.display ? text : text.split(ORIGINAL_PHONE.display).join(display)}</>;
}

type TrackedPhoneLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children?: ReactNode;
};

/** tel: bağlantısı; href ve (children verilmezse) metin yönlendirme numarasına göre güncellenir. */
export function TrackedPhoneLink({ children, ...props }: TrackedPhoneLinkProps) {
  const { display, telHref } = useTrackedPhone();
  return (
    <a {...props} href={telHref}>
      {children ?? display}
    </a>
  );
}

type TrackedPhoneHtmlProps = {
  html: string;
  className?: string;
};

/**
 * dangerouslySetInnerHTML ile basılan statik içerik (blog / hizmet metinleri) React state'i ile
 * render edilemediği için numara, yalnızca bu bileşenin kendi DOM alt ağacında güncellenir.
 * React, __html değişmediği sürece bu alt ağaca dokunmaz.
 */
export function TrackedPhoneHtml({ html, className }: TrackedPhoneHtmlProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { display, telHref, isForwarding } = useTrackedPhone();

  useEffect(() => {
    const root = ref.current;
    if (!root || !isForwarding) return;

    const original = ORIGINAL_PHONE.display;
    if (display !== original) {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        if (node.nodeValue?.includes(original)) {
          node.nodeValue = node.nodeValue.split(original).join(display);
        }
      }
    }
    root.querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]').forEach((anchor) => {
      anchor.setAttribute("href", telHref);
    });
  }, [display, telHref, isForwarding]);

  return <div ref={ref} className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
