"use client";

import { openCookieSettings } from "../lib/cookieConsent";

/** Çerez yönetim panelini açan metin bağlantısı. */
export default function CookieSettingsLink({ label, className = "" }) {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className={`text-[#0F918B] hover:text-teal-700 underline transition-colors ${className}`}
    >
      {label}
    </button>
  );
}
