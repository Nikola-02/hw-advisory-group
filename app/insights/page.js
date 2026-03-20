"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./insights.module.css";

const translations = {
  sr: {
    langLabel: "Jezik",
    optionSr: "SRP",
    optionEn: "ENG",
    nav: {
      left: "O  nama",
      first: "Usluge",
      second: "Naši Uvidi",
    },
    hero: {
      title: "ISTAKNUTI UVIDI I PERSPEKTIVE",
      subtitle: "HUNTWELL ADVISORY GROUP",
      description:
        "Istražite izbor aktuelnog sadržaja o trendovima koji oblikuju budućnost poslovanja i društva.",
    },
    footer: {
      rights: "© 2026 HUNTWELL ADVISORY GROUP. SVA PRAVA ZADRŽANA.",
    },
    cards: {
      source: "Perspektiva HuntWell Advisory Group",
      date: "Mart 28, 2026",
      title: "PARADOKS SAVREMENOG TRŽIŠTA RADA:",
      excerpt: "Nikad više kandidata, nikad manje zapošljavanja",
      quote: "Tržište rada u Srbiji ima sve aktere, ali ne i pravu komunikaciju između njih.",
      secondTitle: "EMPLOYER BRANDING I VIDLJIVOST POSLODAVCA:",
      secondExcerpt: "Reputacija poslodavca nije stvar sreće ni slučajnosti",
      secondQuote:
        "Svaka kompanija ima reputaciju poslodavca. Razlika je samo u tome ko je oblikuje i da li je to urađeno namerno.",
    },
  },
  en: {
    langLabel: "Language",
    optionSr: "SRB",
    optionEn: "ENG",
    nav: {
      left: "About",
      first: "Services",
      second: "Our Insights",
    },
    hero: {
      title: "Featured Insights & Perspectives",
      subtitle: "HUNTWELL ADVISORY GROUP",
      description:
        "Explore a selection of recent insights on trends shaping the future of business and society.",
    },
    footer: {
      rights: "© 2026 HUNTWELL ADVISORY GROUP. ALL RIGHTS RESERVED.",
    },
    cards: {
      source: "The Huntwell Perspective",
      date: "March 28, 2026",
      title: "THE LABOR MARKET PARADOX:",
      excerpt: "More candidates than ever, yet fewer hiring outcomes.",
      quote:
        "Serbia’s labor market has all the necessary actors, yet the communication between them remains fundamentally misaligned.",
      secondTitle: "EMPLOYER REPUTATION AND MARKET VISIBILITY",
      secondExcerpt: "Employer reputation is never a matter of luck or coincidence",
      secondQuote:
        "Every company has an employer reputation. The only difference is who shapes it and whether it is shaped intentionally.",
    },
  },
};

export default function InsightsPage() {
  const [language, setLanguage] = useState("sr");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageRef = useRef(null);
  const languageStorageKey = "hw_site_language";
  const t = translations[language];

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

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.shell}>
          <Link href="/" className={styles.leftLink}>
            {t.nav.left}
          </Link>

          <Link href="/" className={styles.logoWrap} aria-label="HuntWell Advisory Group">
            <img
              src="/hw_advisory_group_blue_logo.png"
              alt="HuntWell Advisory Group logo"
              className={styles.logo}
            />
          </Link>

          <nav className={styles.rightNav}>
            <Link href="/">{t.nav.first}</Link>
            <Link href="/insights">{t.nav.second}</Link>
            <div className={styles.languageControl} ref={languageRef}>
              <button
                type="button"
                className={styles.languageTrigger}
                onClick={() => setIsLanguageOpen((prevOpen) => !prevOpen)}
                aria-label={t.langLabel}
                aria-expanded={isLanguageOpen}
              >
                {isLanguageOpen ? (
                  <svg
                    className={styles.languageChevron}
                    viewBox="0 0 10 6"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M1 5L5 1L9 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    className={styles.languageChevron}
                    viewBox="0 0 10 6"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
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
          </nav>
        </div>
      </header>

      <section className={styles.topSection}>
        <div className={styles.shell}>
          <h1>{t.hero.title}</h1>
          <h2>{t.hero.subtitle}</h2>
          <p>{t.hero.description}</p>
          <div className={styles.sectionDivider} />

          <section className={styles.insightCards}>
            <article className={styles.insightCard}>
              <div className={styles.insightLeft}>
                <h3>{t.cards.title}</h3>
                <p className={styles.insightExcerpt}>{t.cards.excerpt}</p>
                <span className={styles.insightArrow} aria-hidden="true">
                  &gt;
                </span>
              </div>
              <div className={styles.insightRight}>
                <p className={styles.insightSource}>{t.cards.source}</p>
                <p className={styles.insightDate}>{t.cards.date}</p>
                <p className={styles.insightQuote}>“{t.cards.quote}”</p>
              </div>
            </article>

            <article className={styles.insightCard}>
              <div className={styles.insightLeft}>
                <h3>{t.cards.secondTitle}</h3>
                <p className={styles.insightExcerpt}>{t.cards.secondExcerpt}</p>
                <span className={styles.insightArrow} aria-hidden="true">
                  &gt;
                </span>
              </div>
              <div className={styles.insightRight}>
                <p className={styles.insightSource}>{t.cards.source}</p>
                <p className={styles.insightDate}>{t.cards.date}</p>
                <p className={styles.insightQuote}>“{t.cards.secondQuote}”</p>
              </div>
            </article>
          </section>
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
            <Link href="/insights">{t.nav.second}</Link>
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
    </main>
  );
}
