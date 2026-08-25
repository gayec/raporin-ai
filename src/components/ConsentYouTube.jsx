"use client";

import { useEffect, useState } from "react";
import { CONSENT_EVENT, openCookieSettings, readConsent } from "../lib/cookieConsent";

/**
 * Gömülü YouTube oynatıcısı — yalnızca fonksiyonel çerezlere rıza verildiğinde yüklenir.
 * Rıza yoksa YouTube'a hiçbir istek atılmaz; kullanıcıya bilgilendirme kutusu gösterilir.
 */
export default function ConsentYouTube({ videoId, title, lang = "tr" }) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(Boolean(readConsent()?.functional));

    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  const texts =
    lang === "en"
      ? {
          notice:
            "This video is loaded from YouTube and sets third-party cookies. To watch it here, please allow functional cookies.",
          settings: "Open cookie settings",
          external: "Watch on YouTube",
        }
      : {
          notice:
            "Bu video YouTube üzerinden yüklenmekte ve üçüncü taraf çerezleri yerleştirmektedir. Videoyu burada izlemek için fonksiyonel çerezlere izin veriniz.",
          settings: "Çerez ayarlarını aç",
          external: "YouTube'da izle",
        };

  if (!allowed) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#0F918B] to-[#0b6b67] px-6 text-center">
        <p className="text-sm text-white/90 leading-relaxed max-w-md">{texts.notice}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={openCookieSettings}
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-[#0F918B] bg-white hover:shadow-lg transition-all"
          >
            {texts.settings}
          </button>
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white border border-white/50 hover:bg-white/10 transition-all"
          >
            {texts.external}
          </a>
        </div>
      </div>
    );
  }

  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
      title={title}
      className="absolute top-0 left-0 w-full h-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
