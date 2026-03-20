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
      left: "O nama",
      first: "Usluge",
      second: "Naši Uvidi",
    },
    title: "Zakazivanje konsultacija",
    description:
      "Izaberite termin koji vam odgovara i automatski zakazite poziv preko Calendly platforme.",
    notice: "Dodajte svoj link u promenljivu",
    noticeSuffix: "da bi se prikazao vas kalendar.",
  },
  en: {
    langLabel: "Language",
    optionSr: "Serbian",
    optionEn: "English",
    nav: {
      left: "ABOUT",
      first: "SERVICES",
      second: "COURSES",
    },
    title: "Schedule a consultation",
    description:
      "Choose a time slot that works for you and schedule a call automatically through Calendly.",
    notice: "Add your link to",
    noticeSuffix: "so your calendar can be displayed.",
  },
};

export default function StartPage() {
  const [language, setLanguage] = useState("sr");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageRef = useRef(null);
  const t = translations[language];

  const embedUrl = `${calendlyUrl}${
    calendlyUrl.includes("?") ? "&" : "?"
  }hide_gdpr_banner=1`;

  const isPlaceholder = calendlyUrl.includes("your-calendly-link");

  useEffect(() => {
    function handleOutsideClick(event) {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

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
                <span
                  className={`fi ${language === "sr" ? "fi-rs" : "fi-gb"} ${
                    styles.languageFlag
                  }`}
                  aria-hidden="true"
                />
                <span>{language === "sr" ? t.optionSr : t.optionEn}</span>
                <span className={styles.languageCaret} aria-hidden="true" />
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
                    <span className={`fi fi-rs ${styles.languageFlag}`} aria-hidden="true" />
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
                    <span className={`fi fi-gb ${styles.languageFlag}`} aria-hidden="true" />
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
    </main>
  );
}
