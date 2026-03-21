"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./consultation.module.css";

const calendlyUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/your-calendly-link/30min";

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
    title: "ZAKAŽITE KONSULTACIJE",
    subtitle: "HUNTWELL ADVISORY GROUP",
    description:
      "Izaberite termin koji vam odgovara i automatski zakažite poziv preko Calendly platforme.",
    consent: {
      title: "Napomena o zakazivanju",
      text: "Nastavkom i unosom podataka za zakazivanje pristajete na uslove korišćenja Calendly platforme. Podaci za rezervaciju unose se direktno u Calendly.",
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
    title: "BOOK A CONSULTATION",
    subtitle: "HUNTWELL ADVISORY GROUP",
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

export default function ConsultationPage() {
  const [language, setLanguage] = useState("sr");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileInsightsOpen, setIsMobileInsightsOpen] = useState(false);
  const [showConsentPopup, setShowConsentPopup] = useState(false);
  const languageRef = useRef(null);
  const insightsTriggerRef = useRef(null);
  const insightsDropdownRef = useRef(null);
  const mobileMenuTriggerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const t = translations[language];
  const consentStorageKey = "hw_calendly_notice_ack";
  const languageStorageKey = "hw_site_language";
  const insightsPath = "/insights";
  const laborMarketPath = "/insights/labor-market";
  const employerBrandingPath = "/insights/employer-branding";

  const embedUrl = `${calendlyUrl}${calendlyUrl.includes("?") ? "&" : "?"}hide_gdpr_banner=1`;
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
              aria-controls="consultation-insights-dropdown"
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
              aria-controls="consultation-mobile-menu"
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
        id="consultation-insights-dropdown"
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
        id="consultation-mobile-menu"
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
          <h1>{t.title}</h1>
          <h2>{t.subtitle}</h2>
          <p>{t.description}</p>
          <div className={styles.sectionDivider} />

          {isPlaceholder && (
            <p className={styles.notice}>
              {t.notice} <code>NEXT_PUBLIC_CALENDLY_URL</code> {t.noticeSuffix}
            </p>
          )}

          <div className={styles.embedWrap}>
            <iframe title="Calendly booking" src={embedUrl} className={styles.embed} />
          </div>
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

      {showConsentPopup && (
        <aside className={styles.consentPopup} role="dialog" aria-live="polite">
          <h3>{t.consent.title}</h3>
          <p>{t.consent.text}</p>
          <button type="button" className={styles.consentButton} onClick={handleConsentAccept}>
            {t.consent.button}
          </button>
        </aside>
      )}
    </main>
  );
}
