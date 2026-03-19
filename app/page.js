"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const translations = {
  sr: {
    langLabel: "Jezik",
    optionSr: "Srpski",
    optionEn: "Engleski",
    nav: {
      left: "O NAMA",
      first: "USLUGE",
      second: "TERENI",
      start: "START",
    },
    hero: {
      strong: "PRISTUP",
      thinOne: "KOJI DRUGI",
      boldItalic: "NE MOGU",
      thinTwo: "DA",
      gold: "PONUDE",
      ctaPrimary: "ZAKAZI TERMIN",
      ctaSecondary: "SAZNAJ VISE",
    },
    consent: {
      title: "Napomena o zakazivanju",
      text: "Nastavkom i unosom podataka za zakazivanje pristajete na uslove koriscenja Calendly platforme. Podaci za rezervaciju unose se direktno u Calendly.",
      button: "Razumem",
    },
    sections: [
      {
        title: "NASA EKSPERTIZA",
        lead: "Fokus je usmeren ka tome sta pravi realnu razliku.",
        items: [
          {
            title: "IDENTIFIKACIJA TALENTA",
            text: "Analizom sposobnosti i potencijala precizno izdvajamo profile sa najvecim prostorom za rast.",
          },
          {
            title: "IDENTIFIKACIJA PROFESIONALNIH PROFILA",
            text: "Jasno mapiramo potrebne kompetencije i uskladjujemo ih sa ciljevima tima i projekta.",
          },
          {
            title: "RAZVOJ IDENTITETA POSLODAVCA",
            text: "Gradimo doslednu komunikaciju vrednosti koja privlaci i zadrzava relevantne kandidate.",
          },
          {
            title: "ARHITEKTURA OGLASA",
            text: "Pisemo oglase koji su jasni, prepoznatljivi i usmereni na pravu publiku.",
          },
        ],
      },
      {
        title: "MODEL RADA",
        lead: "Cilj je kvalitetan proces sa predvidljivim tokom i jasnim rezultatima.",
        items: [
          {
            title: "UVID I PROCENE",
            text: "Mapiramo izazove, prioritete i stanje procesa kako bismo postavili realan okvir za naredne korake.",
          },
          {
            title: "KONTROLA I IMPLEMENTACIJA",
            text: "Kroz pracenje i optimizaciju svake faze, obezbedjujemo stabilnu isporuku i merljive rezultate.",
          },
        ],
      },
    ],
  },
  en: {
    langLabel: "Language",
    optionSr: "Serbian",
    optionEn: "English",
    nav: {
      left: "ABOUT",
      first: "SERVICES",
      second: "COURSES",
      start: "START",
    },
    hero: {
      strong: "APPROACH",
      thinOne: "THAT OTHERS",
      boldItalic: "CANNOT",
      thinTwo: "TRULY",
      gold: "OFFER",
      ctaPrimary: "BOOK A SESSION",
      ctaSecondary: "LEARN MORE",
    },
    consent: {
      title: "Booking notice",
      text: "By continuing and entering booking details, you agree to Calendly's terms of use. Reservation data is submitted directly through Calendly.",
      button: "I understand",
    },
    sections: [
      {
        title: "OUR EXPERTISE",
        lead: "Our focus is on what truly creates measurable value.",
        items: [
          {
            title: "TALENT IDENTIFICATION",
            text: "Through capability and potential analysis, we identify profiles with the strongest growth capacity.",
          },
          {
            title: "PROFESSIONAL PROFILE MAPPING",
            text: "We map required competencies and align them with team and project goals.",
          },
          {
            title: "EMPLOYER IDENTITY DEVELOPMENT",
            text: "We build consistent value communication that attracts and retains relevant candidates.",
          },
          {
            title: "JOB AD ARCHITECTURE",
            text: "We craft job ads that are clear, distinctive, and aimed at the right audience.",
          },
        ],
      },
      {
        title: "WORK MODEL",
        lead: "The goal is a high-quality process with clear flow and predictable outcomes.",
        items: [
          {
            title: "INSIGHT AND EVALUATION",
            text: "We map key challenges, priorities, and process status to set a realistic framework for next steps.",
          },
          {
            title: "CONTROL AND IMPLEMENTATION",
            text: "With tracking and optimization in each phase, we ensure stable delivery and measurable results.",
          },
        ],
      },
    ],
  },
};

export default function Home() {
  const [language, setLanguage] = useState("sr");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [showConsentPopup, setShowConsentPopup] = useState(false);
  const languageRef = useRef(null);
  const t = translations[language];
  const consentStorageKey = "lw_calendly_notice_ack";

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
    <main>
      <section className={styles.hero}>
        <header className={styles.header}>
          <a href="#" className={styles.leftLink}>
            {t.nav.left}
          </a>

          <a href="#" className={styles.logoWrap} aria-label="LW">
            <img src="/lw-logo.png" alt="LW logo" className={styles.logo} />
          </a>

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
            <a href="#">{t.nav.first}</a>
            <a href="#">{t.nav.second}</a>
            <Link href="/start" className={styles.pillLink}>
              <svg
                className={styles.pillIcon}
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M10 8.5L14.5 12L10 15.5V8.5Z"
                  fill="currentColor"
                />
                <path
                  d="M12 2.5C6.76 2.5 2.5 6.76 2.5 12C2.5 17.24 6.76 21.5 12 21.5C17.24 21.5 21.5 17.24 21.5 12C21.5 6.76 17.24 2.5 12 2.5ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                  fill="currentColor"
                />
              </svg>
              {t.nav.start}
            </Link>
          </nav>
        </header>

        <section className={styles.content}>
          <h1>
            <strong>{t.hero.strong}</strong>{" "}
            <span className={styles.thinText}>{t.hero.thinOne}</span>{" "}
            <em>
              <strong>{t.hero.boldItalic}</strong>
            </em>{" "}
            <span className={styles.thinText}>{t.hero.thinTwo}</span>{" "}
            <span className={styles.goldText}>{t.hero.gold}</span>
          </h1>

          <div className={styles.actions}>
            <Link href="/start" className={styles.actionPrimary}>
              {t.hero.ctaPrimary}
            </Link>
            <a href="#" className={styles.actionSecondary}>
              {t.hero.ctaSecondary}
            </a>
          </div>
        </section>
      </section>

      <section className={styles.detailsArea}>
        <div className={styles.detailsInner}>
          <div className={styles.divider} />

          <section className={styles.infoSection}>
            <h2>{t.sections[0].title}</h2>
            <p className={styles.goldLead}>{t.sections[0].lead}</p>

            <div className={styles.infoList}>
              {t.sections[0].items.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <div className={styles.divider} />

          <section className={styles.infoSection}>
            <h2>{t.sections[1].title}</h2>
            <p className={styles.goldLead}>{t.sections[1].lead}</p>

            <div className={styles.infoList}>
              {t.sections[1].items.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

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
