"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const BOOKING_URL =
  (typeof process.env.NEXT_PUBLIC_CALENDLY_URL === "string" && process.env.NEXT_PUBLIC_CALENDLY_URL.trim()) ||
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
      start: "START",
    },
    insightsDropdown: {
      title: "Naši Uvidi",
      laborMarket: "Tržište rada",
      employerBranding: "Employer branding",
    },
    hero: {
      strong: "Pristup",
      thinOne: "koji drugi",
      boldItalic: "ne mogu",
      thinTwo: "da",
      gold: "ponude",
      ctaPrimary: "Zatražite konsultaciju",
      ctaSecondary: "Saznaj Više",
      bookingNotice: {
        text:
          "Zakazivanje se obavlja putem eksternog servisa. HuntWell Advisory Group ne prikuplja ili obrađuje vaše podatke i ne odgovara za sadržaj ili obradu podataka tog servisa.",
        closeAria: "Zatvori i otvori stranicu za zakazivanje",
      },
    },
    footer: {
      rights: "© 2026 HUNTWELL ADVISORY GROUP. SVA PRAVA ZADRŽANA.",
    },
    sections: [
      {
        title: "NAŠA EKSPERTIZA",
        lead: "Delujemo u oblastima tržišta rada i pozicioniranja poslodavaca.",
        items: [
          {
            title: "Identifikacija talenata",
            textParts: [
              { text: "Analiziramo i " },
              { text: "prepoznajemo", emphasis: true },
              {
                text: " ključne profesionalne kapacitete na tržištu, sagledavajući gde njihov potencijal ostvaruje najveću stratešku vrednost u odnosu na ciljeve organizacije.",
              },
            ],
          },
          {
            title: "IDENTIFIKACIJA DEFICITARNIH PROFILA",
            textParts: [
              {
                text: "U svakoj industriji postoje profili čija je vrednost visoka, a dostupnost ograničena. Upravo takve profile ",
              },
              { text: "pronalazimo", emphasis: true },
              { text: "." },
            ],
          },
          {
            title: "RAZVOJ IDENTITETA POSLODAVCA",
            textParts: [
              {
                text: "Identitet poslodavca određuje kako organizacija zauzima svoje mesto na tržištu rada. Mi ga oblikujemo kao jasan i prepoznatljiv ",
              },
              { text: "brend", emphasis: true },
              { text: " poslodavca." },
            ],
          },
          {
            title: "ARHITEKTURA OGLASA",
            textParts: [
              {
                text: "Oblikujemo strukturu, ton i logiku kroz koju organizacije predstavljaju ",
              },
              { text: "profesionalne prilike", emphasis: true },
              { text: " tržištu rada." },
            ],
          },
        ],
      },
      {
        title: "MODEL RADA",
        lead: "Naš rad zasniva se na profesionalnom uvidu i savetodavnom pristupu.",
        items: [
          {
            title: "UVIDI I PREPORUKE",
            textParts: [
              { text: "Nudimo jasne i precizne " },
              { text: "smernice", emphasis: true },
              {
                text: " koje omogućavaju promišljeno donošenje odluka sa dugoročnim efektom.",
              },
            ],
          },
          {
            title: "Kontrola i implementacija",
            textParts: [
              {
                text: "Zaključujemo angažman sa detaljnim uvidima i preporukama, ",
              },
              {
                text: "ostavljajući klijentima punu kontrolu nad sprovođenjem i rezultatima",
                emphasis: true,
              },
              { text: "." },
            ],
          },
        ],
      },
    ],
    introStatementParts: [
      { text: "HuntWell Advisory Group", tone: "regular" },
      { text: " pruža " },
      { text: "strateška", tone: "italic" },
      {
        text: " rešenja koja omogućavaju organizacijama da precizno prepoznaju ključne profesionalce i talente, pozicioniraju se sa autoritetom na tržištu i ostave trajni utisak kroz inteligentno, ciljano i ekskluzivno poslovno delovanje.",
      },
    ],
    preFooter: {
      eyebrow: "Uvidi i perspektive HuntWell Advisory Group",
      headline: "Naša najnovija razmišljanja o temama koje oblikuju budućnost poslovanja i društva",
    },
    closingQuote:
      "Radimo sa organizacijama koje razumeju da ozbiljni poslovni rezultati nisu stvar slučaja, već promišljenog pristupa.",
  },
  en: {
    langLabel: "Language",
    optionSr: "SRB",
    optionEn: "ENG",
    nav: {
      left: "About",
      first: "Services",
      second: "Our Insights",
      start: "START",
    },
    insightsDropdown: {
      title: "Our Insights",
      laborMarket: "Labor market",
      employerBranding: "Employer branding",
    },
    hero: {
      strong: "An Approach",
      thinOne: "Few",
      boldItalic: "Can",
      thinTwo: "",
      gold: "Offer",
      ctaPrimary: "Request a Consultation",
      ctaSecondary: "Learn More",
      bookingNotice: {
        text:
          "Scheduling is conducted via an external service. HuntWell Advisory Group does not collect or process your data and assumes no responsibility for the content or data processing of that service.",
        closeAria: "Close and open scheduling page",
      },
    },
    footer: {
      rights: "© 2026 HUNTWELL ADVISORY GROUP. ALL RIGHTS RESERVED.",
    },
    sections: [
      {
        title: "Our Expertise",
        lead: "Our work focuses on the labor market and employer positioning.",
        items: [
          {
            title: "Talent Identification",
            textParts: [
              {
                text: "We analyze and ",
              },
              { text: "identify", emphasis: true },
              {
                text: " key professional capabilities in the labor market, assessing where their potential creates the greatest strategic value in relation to an organization’s objectives.",
              },
            ],
          },
          {
            title: "Identification of Critical Talent",
            textParts: [
              {
                text: "In every industry there are professional profiles whose value is high and whose availability is limited. These are precisely the profiles we ",
              },
              { text: "identify", emphasis: true },
              { text: "." },
            ],
          },
          {
            title: "Employer Positioning",
            textParts: [
              {
                text: "An employer’s identity defines how an organization positions itself in the labor market. We shape it into a clear and distinctive ",
              },
              { text: "employer brand", emphasis: true },
              { text: "." },
            ],
          },
          {
            title: "Opportunity Positioning",
            textParts: [
              {
                text: "We design the structure, tone, and logic through which organizations present ",
              },
              { text: "professional opportunities", emphasis: true },
              { text: " to the labor market." },
            ],
          },
        ],
      },
      {
        title: "MODEL OF WORK",
        lead: "Our work is grounded in professional insight and guided by an advisory approach.",
        items: [
          {
            title: "Insights and Recommendations",
            textParts: [
              {
                text: "We provide clear and practical ",
              },
              { text: "guidance", emphasis: true },
              { text: " that supports informed decision-making with long-term impact." },
            ],
          },
          {
            title: "Client Ownership",
            textParts: [
              {
                text: "Our engagement concludes with detailed insights and recommendations, ",
              },
              {
                text: "while clients retain full ownership of implementation and outcomes.",
                emphasis: true,
              },
            ],
          },
        ],
      },
    ],
    introStatementParts: [
      { text: "Huntwell Advisory Group", tone: "regular" },
      { text: " provides " },
      { text: "strategic", tone: "italic" },
      {
        text: " insight that enables organizations to identify exceptional professionals and critical talent, strengthen their position in the labor market, and create lasting impact through precise and focused market positioning.",
      },
    ],
    preFooter: {
      eyebrow: "HuntWell Advisory Group Insights & Perspectives",
      headline: "Our latest thinking on the topics shaping the future of business and society",
    },
    closingQuote:
      "We work with organizations that understand that strong business performance is never accidental, but the result of a deliberate approach.",
  },
};

export default function Home() {
  const [language, setLanguage] = useState("sr");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileInsightsOpen, setIsMobileInsightsOpen] = useState(false);
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const [showBookingNotice, setShowBookingNotice] = useState(false);
  const [bookingPopupTop, setBookingPopupTop] = useState(null);
  const languageRef = useRef(null);
  const bookingCloseRef = useRef(null);
  const bookingButtonRef = useRef(null);
  const insightsTriggerRef = useRef(null);
  const insightsDropdownRef = useRef(null);
  const mobileMenuTriggerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const introSectionRef = useRef(null);
  const t = translations[language];
  const languageStorageKey = "hw_site_language";
  const insightsPath = "/insights";
  const laborMarketPath = "/insights/labor-market";
  const employerBrandingPath = "/insights/employer-branding";

  useEffect(() => {
    try {
      const storedLanguage = window.localStorage.getItem(languageStorageKey);
      if (storedLanguage === "sr" || storedLanguage === "en") {
        setLanguage(storedLanguage);
      }
    } catch {
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(languageStorageKey, language);
    } catch {
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
    const section = introSectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntroVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!showBookingNotice) return undefined;
    const id = window.requestAnimationFrame(() => {
      bookingCloseRef.current?.focus();
    });
    return () => window.cancelAnimationFrame(id);
  }, [showBookingNotice]);

  useLayoutEffect(() => {
    if (!showBookingNotice) {
      setBookingPopupTop(null);
      return undefined;
    }

    function updateBookingPopupPosition() {
      if (typeof window === "undefined") return;
      if (window.innerWidth > 640) {
        setBookingPopupTop(null);
        return;
      }
      const el = bookingButtonRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setBookingPopupTop(Math.round(rect.bottom + 8));
    }

    updateBookingPopupPosition();
    window.addEventListener("resize", updateBookingPopupPosition);
    window.addEventListener("scroll", updateBookingPopupPosition, true);

    return () => {
      window.removeEventListener("resize", updateBookingPopupPosition);
      window.removeEventListener("scroll", updateBookingPopupPosition, true);
    };
  }, [showBookingNotice]);

  function openBookingNotice() {
    if (showBookingNotice) return;
    if (typeof window !== "undefined" && window.innerWidth <= 640 && bookingButtonRef.current) {
      const rect = bookingButtonRef.current.getBoundingClientRect();
      setBookingPopupTop(Math.round(rect.bottom + 8));
    } else {
      setBookingPopupTop(null);
    }
    setShowBookingNotice(true);
  }

  function dismissBookingNoticeAndOpen() {
    setShowBookingNotice(false);
    setBookingPopupTop(null);
    const a = document.createElement("a");
    a.href = BOOKING_URL;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.click();
  }

  function renderTextParts(parts) {
    return parts.map((part, index) => (
      <span key={`${part.text}-${index}`} className={part.emphasis ? styles.infoBodyEmphasis : ""}>
        {part.text}
      </span>
    ));
  }

  function renderIntroStatement(parts) {
    return parts.map((part, index) => {
      let className = "";
      if (part.tone === "regular") {
        className = styles.introRegular;
      } else if (part.tone === "italic") {
        className = styles.introItalic;
      }

      return (
        <span key={`${part.text}-${index}`} className={className}>
          {part.text}
        </span>
      );
    });
  }

  return (
    <main id="top">
      <section className={styles.hero}>
        <img
          src="/hero_section_golf_hw.jpg"
          alt=""
          aria-hidden="true"
          className={styles.heroImage}
        />
        <header className={styles.header}>
          <a href="#about" className={styles.leftLink}>
            {t.nav.left}
          </a>

          <a href="#" className={styles.logoWrap} aria-label="HuntWell Advisory Group">
            <img
              src="/hw_advisory_group_white_logo.png"
              alt="HuntWell Advisory Group logo"
              className={styles.logo}
            />
            <span className={styles.logoSubtext}>Advisory Group</span>
          </a>

          <nav className={styles.rightNav}>
            <a href="#expertise" className={styles.desktopNavItem}>
              {t.nav.first}
            </a>
            <button
              type="button"
              className={`${styles.navInsightsButton} ${styles.desktopNavItem}`}
              ref={insightsTriggerRef}
              onClick={() => setIsInsightsOpen((prevOpen) => !prevOpen)}
              aria-expanded={isInsightsOpen}
              aria-controls="home-insights-dropdown"
            >
              {t.nav.second}
            </button>
            <div className={styles.languageControl} ref={languageRef}>
              <button
                type="button"
                className={`${styles.languageTrigger} ${
                  isLanguageOpen ? styles.languageTriggerOpen : ""
                }`}
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
              aria-controls="home-mobile-menu"
              ref={mobileMenuTriggerRef}
            >
              <span />
              <span />
              <span />
            </button>
          </nav>
        </header>

        <div
          id="home-insights-dropdown"
          ref={insightsDropdownRef}
          className={`${styles.insightsDropdown} ${isInsightsOpen ? styles.insightsDropdownOpen : ""}`}
        >
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

        <div
          id="home-mobile-menu"
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}
          ref={mobileMenuRef}
        >
            <div className={styles.mobileMenuInner}>
              <a
                href="#about"
                className={styles.mobileMenuLink}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsMobileInsightsOpen(false);
                }}
              >
                {t.nav.left}
              </a>
              <a
                href="#expertise"
                className={styles.mobileMenuLink}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsMobileInsightsOpen(false);
                }}
              >
                {t.nav.first}
              </a>
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

        <section className={`${styles.content} ${isInsightsOpen ? styles.contentShifted : ""}`}>
          {!isMobileMenuOpen && (
            <h1>
              <strong className={styles.heroBlack}>{t.hero.strong}</strong>{" "}
              <span className={styles.thinText}>{t.hero.thinOne}</span>{" "}
              <em>
                <strong className={styles.heroBlackItalic}>{t.hero.boldItalic}</strong>
              </em>{" "}
              {t.hero.thinTwo ? (
                <>
                  <span className={styles.thinText}>{t.hero.thinTwo}</span>{" "}
                </>
              ) : null}
              <span className={styles.goldText}>{t.hero.gold}</span>
            </h1>
          )}

          {!isInsightsOpen && !isMobileMenuOpen && (
            <div className={styles.actions}>
              <div className={styles.actionPrimaryWrap}>
                <button
                  type="button"
                  ref={bookingButtonRef}
                  className={styles.actionPrimary}
                  onClick={openBookingNotice}
                  aria-expanded={showBookingNotice}
                  aria-haspopup="dialog"
                >
                  {t.hero.ctaPrimary}
                </button>
                {showBookingNotice ? (
                  <div
                    className={`${styles.bookingGlassPopup} ${
                      bookingPopupTop !== null ? styles.bookingGlassPopupMobileFixed : ""
                    }`}
                    style={bookingPopupTop !== null ? { top: bookingPopupTop } : undefined}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="booking-notice-text"
                  >
                    <button
                      type="button"
                      ref={bookingCloseRef}
                      className={styles.bookingGlassClose}
                      onClick={dismissBookingNoticeAndOpen}
                      aria-label={t.hero.bookingNotice.closeAria}
                    >
                      ×
                    </button>
                    <p id="booking-notice-text" className={styles.bookingGlassText}>
                      {t.hero.bookingNotice.text}
                    </p>
                  </div>
                ) : null}
              </div>
              <a href="#about" className={styles.actionSecondary}>
                {t.hero.ctaSecondary}
              </a>
            </div>
          )}
        </section>
      </section>

      <section id="about" className={styles.introSection} ref={introSectionRef}>
        <div className={styles.introInner}>
          <p className={`${styles.introText} ${isIntroVisible ? styles.introTextVisible : ""}`}>
            {renderIntroStatement(t.introStatementParts)}
          </p>
        </div>
      </section>

      <section id="our-insights" className={styles.detailsArea}>
        <div className={styles.detailsInner}>
          <div className={styles.divider} />

          <section id="expertise" className={styles.infoSection}>
            <h2>{t.sections[0].title}</h2>
            <p className={styles.goldLead}>{t.sections[0].lead}</p>

            <div className={styles.infoList}>
              {t.sections[0].items.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p className={styles.infoBodyText}>{renderTextParts(item.textParts)}</p>
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
                  <p className={styles.infoBodyText}>{renderTextParts(item.textParts)}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className={styles.closingQuoteSection}>
        <div className={styles.closingQuoteInner}>
          <p>{t.closingQuote}</p>
        </div>
      </section>

      <section className={styles.preFooterSection}>
        <div className={styles.preFooterContent}>
          <p className={styles.preFooterEyebrow}>{t.preFooter.eyebrow}</p>
          <Link href={insightsPath} className={styles.preFooterLink}>
            {t.preFooter.headline}
          </Link>
          <Link href={insightsPath} className={styles.preFooterArrow} aria-label={t.nav.second}>
            &gt;
          </Link>
        </div>
        <div className={styles.preFooterImageWrap} aria-hidden="true">
          <img
            src="/pre_footer_section_mountain_hw.jpg"
            alt=""
            className={styles.preFooterImage}
          />
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <a href="#" className={styles.footerLogoWrap} aria-label="HuntWell Advisory Group">
            <img
              src="/hw_advisory_group_blue_logo.png"
              alt="HuntWell Advisory Group logo"
              className={styles.footerLogo}
            />
          </a>

          <nav className={styles.footerNav}>
            <a href="#about">{t.nav.left}</a>
            <a href="#expertise">{t.nav.first}</a>
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
