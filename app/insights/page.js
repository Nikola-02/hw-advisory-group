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
    insightsDropdown: {
      title: "Naši Uvidi",
      laborMarket: "Tržište rada",
      employerBranding: "Employer branding",
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
    insightsDropdown: {
      title: "Our Insights",
      laborMarket: "Labor market",
      employerBranding: "Employer branding",
    },
    hero: {
      title: "FEATURED INSIGHTS & PERSPECTIVES",
      subtitle: "HUNTWELL ADVISORY GROUP",
      description:
        "Explore a selection of recent insights on trends shaping the future of business and society.",
    },
    footer: {
      rights: "© 2026 HUNTWELL ADVISORY GROUP. ALL RIGHTS RESERVED.",
    },
    cards: {
      source: "The HuntWell Perspective",
      date: "March 28, 2026",
      title: "THE LABOR MARKET PARADOX:",
      excerpt: "More candidates than ever, yet fewer hiring outcomes",
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
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileInsightsOpen, setIsMobileInsightsOpen] = useState(false);
  const languageRef = useRef(null);
  const insightsTriggerRef = useRef(null);
  const insightsDropdownRef = useRef(null);
  const mobileMenuTriggerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const languageStorageKey = "hw_site_language";
  const t = translations[language];
  const laborMarketPath = "/insights/labor-market";
  const employerBrandingPath = "/insights/employer-branding";

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

      const clickedInsightsTrigger =
        insightsTriggerRef.current && insightsTriggerRef.current.contains(event.target);
      const clickedInsightsDropdown =
        insightsDropdownRef.current && insightsDropdownRef.current.contains(event.target);
      if (!clickedInsightsTrigger && !clickedInsightsDropdown) {
        setIsInsightsOpen(false);
      }

      const clickedMobileTrigger =
        mobileMenuTriggerRef.current && mobileMenuTriggerRef.current.contains(event.target);
      const clickedMobileMenu = mobileMenuRef.current && mobileMenuRef.current.contains(event.target);
      if (!clickedMobileTrigger && !clickedMobileMenu) {
        setIsMobileMenuOpen(false);
        setIsMobileInsightsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.shell}>
          <Link href="/#about" className={styles.leftLink}>
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
            <Link href="/#expertise" className={styles.desktopNavItem}>
              {t.nav.first}
            </Link>
            <button
              type="button"
              className={`${styles.navInsightsButton} ${styles.desktopNavItem}`}
              ref={insightsTriggerRef}
              onClick={() => setIsInsightsOpen((prevOpen) => !prevOpen)}
              aria-expanded={isInsightsOpen}
              aria-controls="insights-nav-dropdown"
            >
              {t.nav.second}
            </button>
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
            <button
              type="button"
              className={`${styles.mobileMenuTrigger} ${
                isMobileMenuOpen ? styles.mobileMenuTriggerOpen : ""
              }`}
              onClick={() => {
                setIsMobileMenuOpen((prevOpen) => !prevOpen);
                if (isMobileMenuOpen) {
                  setIsMobileInsightsOpen(false);
                }
              }}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="insights-mobile-menu"
              ref={mobileMenuTriggerRef}
            >
              <span />
              <span />
              <span />
            </button>
          </nav>
        </div>
      </header>

      <div
        id="insights-nav-dropdown"
        ref={insightsDropdownRef}
        className={`${styles.insightsDropdown} ${isInsightsOpen ? styles.insightsDropdownOpen : ""}`}
      >
        <div className={styles.shell}>
          <div className={styles.insightsDropdownInner}>
            <p className={styles.insightsDropdownTitle}>{t.insightsDropdown.title} &gt;</p>
            <div className={styles.insightsDropdownLine} />
            <div className={styles.insightsDropdownLinks}>
              <Link href={laborMarketPath} onClick={() => setIsInsightsOpen(false)}>
                {t.insightsDropdown.laborMarket} &gt;
              </Link>
              <Link href={employerBrandingPath} onClick={() => setIsInsightsOpen(false)}>
                {t.insightsDropdown.employerBranding} &gt;
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        id="insights-mobile-menu"
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}
        ref={mobileMenuRef}
      >
        <div className={styles.mobileMenuInner}>
          <Link
            href="/#about"
            className={styles.mobileMenuLink}
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsMobileInsightsOpen(false);
            }}
          >
            {t.nav.left}
          </Link>
          <Link
            href="/#expertise"
            className={styles.mobileMenuLink}
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsMobileInsightsOpen(false);
            }}
          >
            {t.nav.first}
          </Link>
          <button
            type="button"
            className={styles.mobileMenuLinkButton}
            onClick={() => setIsMobileInsightsOpen((prevOpen) => !prevOpen)}
            aria-expanded={isMobileInsightsOpen}
          >
            {t.nav.second}
          </button>

          <div
            className={`${styles.mobileInsightsBlock} ${
              isMobileInsightsOpen ? styles.mobileInsightsBlockOpen : ""
            }`}
          >
            <p className={styles.mobileInsightsLabel}>{t.insightsDropdown.title} &gt;</p>
            <div className={styles.mobileInsightsLine} />
            <Link
              href={laborMarketPath}
              className={styles.mobileInsightsLink}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsMobileInsightsOpen(false);
              }}
            >
              {t.insightsDropdown.laborMarket} &gt;
            </Link>
            <Link
              href={employerBrandingPath}
              className={styles.mobileInsightsLink}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsMobileInsightsOpen(false);
              }}
            >
              {t.insightsDropdown.employerBranding} &gt;
            </Link>
          </div>
        </div>
      </div>

      <section className={`${styles.topSection} ${isInsightsOpen ? styles.topSectionShifted : ""}`}>
        <div className={styles.shell}>
          <h1>{t.hero.title}</h1>
          <h2>{t.hero.subtitle}</h2>
          <p>{t.hero.description}</p>
          <div className={styles.sectionDivider} />

          <section className={styles.insightCards}>
            <article className={styles.insightCard}>
              <div className={styles.insightLeft}>
                <h3>{t.cards.title}</h3>
                <p className={styles.insightExcerpt}>
                  <span>{t.cards.excerpt}</span>
                  <Link
                    href={laborMarketPath}
                    className={styles.insightArrow}
                    aria-label={t.insightsDropdown.laborMarket}
                  >
                    &gt;
                  </Link>
                </p>
              </div>
              <div className={styles.insightRight}>
                <p className={styles.insightSource}>{t.cards.source}</p>
                <p className={styles.insightDate}>{t.cards.date}</p>
                <Link href={laborMarketPath} className={styles.insightQuote}>
                  “{t.cards.quote}”
                </Link>
              </div>
            </article>

            <article className={styles.insightCard}>
              <div className={styles.insightLeft}>
                <h3>{t.cards.secondTitle}</h3>
                <p className={styles.insightExcerpt}>
                  <span>{t.cards.secondExcerpt}</span>
                  <Link
                    href={employerBrandingPath}
                    className={styles.insightArrow}
                    aria-label={t.insightsDropdown.employerBranding}
                    onClick={() => setIsInsightsOpen(false)}
                  >
                    &gt;
                  </Link>
                </p>
              </div>
              <div className={styles.insightRight}>
                <p className={styles.insightSource}>{t.cards.source}</p>
                <p className={styles.insightDate}>{t.cards.date}</p>
                <Link
                  href={employerBrandingPath}
                  className={styles.insightQuote}
                  onClick={() => setIsInsightsOpen(false)}
                >“{t.cards.secondQuote}”</Link>
              </div>
            </article>
          </section>
          <div className={styles.bottomSectionDivider} />
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
            <Link href="/#about">{t.nav.left}</Link>
            <Link href="/#expertise">{t.nav.first}</Link>
            <Link href="/#top">{t.nav.second}</Link>
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
