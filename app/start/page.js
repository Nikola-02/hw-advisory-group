"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./start.module.css";

const calendlyUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/your-calendly-link/30min";

const translations = {
  sr: {
    langLabel: "Jezik",
    optionSr: "Srpski",
    optionEn: "Engleski",
    nav: {
      left: "O  nama",
      first: "Usluge",
      second: "Naši Uvidi",
    },
    title: "Zakazivanje konsultacija",
    description:
      "Izaberite termin koji vam odgovara i automatski zakazite poziv preko Calendly platforme.",
    consent: {
      title: "Napomena o zakazivanju",
      text: "Nastavkom i unosom podataka za zakazivanje pristajete na uslove koriscenja Calendly platforme. Podaci za rezervaciju unose se direktno u Calendly.",
      button: "Razumem",
    },
    footer: {
      rights: "© 2026 HUNTWELL ADVISORY GROUP. SVA PRAVA ZADRŽANA.",
    },
    notice: "Dodajte svoj link u promenljivu",
    noticeSuffix: "da bi se prikazao vas kalendar.",
  },
  en: {
    langLabel: "Language",
    optionSr: "Serbian",
    optionEn: "English",
    nav: {
      left: "About",
      first: "Services",
      second: "Our Insights",
    },
    title: "Schedule a consultation",
    description:
      "Choose a time slot that works for you and schedule a call automatically through Calendly.",
    consent: {
      title: "Booking notice",
      text: "By continuing and entering booking details, you agree to Calendly's terms of use. Reservation data is submitted directly through Calendly.",
      button: "I understand",
    },
    footer: {
      rights: "© 2026 HUNTWELL ADVISORY GROUP. ALL RIGHTS RESERVED.",
    },
    notice: "Add your link to",
    noticeSuffix: "so your calendar can be displayed.",
  },
};

export default function StartPage() {
  const [language, setLanguage] = useState("sr");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [showConsentPopup, setShowConsentPopup] = useState(false);
  const languageRef = useRef(null);
  const t = translations[language];
  const consentStorageKey = "lw_calendly_notice_ack";
  const languageStorageKey = "hw_site_language";

  const embedUrl = `${calendlyUrl}${
    calendlyUrl.includes("?") ? "&" : "?"
  }hide_gdpr_banner=1`;

  const isPlaceholder = calendlyUrl.includes("your-calendly-link");

  useEffect(() => {
    try {
      const storedLanguage = window.localStorage.getItem(languageStorageKey);
      if (storedLanguage === "sr" || storedLanguage === "en") {
        setLanguage(storedLanguage);
      }
    } catch {
      // Ignore storage issues and keep default Serbian.
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(languageStorageKey, language);
    } catch {
      // Ignore storage issues.
    }
  }, [language]);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    try {
      const hasAccepted = window.localStorage.getItem(consentStorageKey);
      if (!hasAccepted) {
        setShowConsentPopup(true);
      }
    } catch {
      setShowConsentPopup(true);
    }
  }, []);

  function handleConsentAccept() {
    try {
      window.localStorage.setItem(consentStorageKey, "1");
    } catch {
      // Ignore storage issues and just close popup.
    }
    setShowConsentPopup(false);
  }

  return (
    <main className={styles.page}>
      <section className={styles.topBar}>
        <header className={styles.header}>
          <Link href="/" className={styles.leftLink}>
            {t.nav.left}
          </Link>
          <Link href="/" className={styles.logoWrap} aria-label="LW pocetna">
            <img src="/lw-logo.png" alt="LW logo" className={styles.logo} />
          </Link>

          <nav className={styles.rightNav}>
            <div className={styles.languageControl} ref={languageRef}>
              <button
                type="button"
                className={styles.languageTrigger}
                onClick={() => setIsLanguageOpen((prevOpen) => !prevOpen)}
                aria-label={t.langLabel}
                aria-expanded={isLanguageOpen}
              >
                <span className={styles.languageCaret} aria-hidden="true" />
                <span>{language === "sr" ? t.optionSr : t.optionEn}</span>
              </button>

              {isLanguageOpen && (
                <div className={styles.languageMenu}>
                  <button
                    type="button"
                    className={styles.languageOption}
                    onClick={() => {
                      setLanguage("sr");
                      setIsLanguageOpen(false);
                    }}
                  >
                    <span>{t.optionSr}</span>
                  </button>
                  <button
                    type="button"
                    className={styles.languageOption}
                    onClick={() => {
                      setLanguage("en");
                      setIsLanguageOpen(false);
                    }}
                  >
                    <span>{t.optionEn}</span>
                  </button>
                </div>
              )}
            </div>
            <Link href="/">{t.nav.first}</Link>
            <Link href="/">{t.nav.second}</Link>
          </nav>
        </header>
      </section>

      <section className={styles.container}>
        <h1>{t.title}</h1>
        <p>{t.description}</p>

        {isPlaceholder && (
          <p className={styles.notice}>
            {t.notice} <code>NEXT_PUBLIC_CALENDLY_URL</code> {t.noticeSuffix}
          </p>
        )}

        <div className={styles.embedWrap}>
          <iframe
            title="Calendly booking"
            src={embedUrl}
            className={styles.embed}
          />
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Link href="/" className={styles.footerLogoWrap} aria-label="HuntWell Advisory Group">
            <img
              src="/hw_advisory_group_blue_logo.png"
              alt="HuntWell Advisory Group logo"
              className={styles.footerLogo}
            />
          </Link>

          <nav className={styles.footerNav}>
            <Link href="/">{t.nav.left}</Link>
            <Link href="/">{t.nav.first}</Link>
            <Link href="/">{t.nav.second}</Link>
          </nav>

          <div className={styles.footerSocial}>
            <a href="#" target="_blank" rel="noreferrer">
              INSTAGRAM ↗
            </a>
            <a
              href="https://www.linkedin.com/company/huntwell-advisory-group/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
            </a>
          </div>

          <a href="mailto:contact@huntwell.rs" className={styles.footerMail}>
            contact@huntwell.rs
          </a>

          <p className={styles.footerRights}>{t.footer.rights}</p>
        </div>
      </footer>

      {showConsentPopup && (
        <aside className={styles.consentPopup} role="dialog" aria-live="polite">
          <h3>{t.consent.title}</h3>
          <p>{t.consent.text}</p>
          <button
            type="button"
            className={styles.consentButton}
            onClick={handleConsentAccept}
          >
            {t.consent.button}
          </button>
        </aside>
      )}
    </main>
  );
}
