"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./employer-branding.module.css";

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
    pageIntro: {
      tag: "Employer Branding",
      titlePrefix: "Bez employer brandinga kompanija postaje ",
      titleEmphasis: "nevidljiv",
      titleSuffix: " poslodavac",
      subtitle: "Perspektiva HuntWell Advisory Group",
      meta: "MART 28, 2026 · 3 MIN ČITANJA",
    },
    article: {
      leadTitle:
        "Reputacija poslodavca nije stvar sreće ni slučajnosti. Ona se gradi ili prepušta drugima.",
      sectionOneTitle: "Pozicija na tržištu rada nije podrazumevana.",
      sectionOneBody:
        "Kompanije ulažu znatne resurse u izgradnju poslovnog brenda, tržišnu poziciju i odnose sa klijentima. Reputacija poslodavca ostaje, međutim, zanemarena oblast.",
      sectionOneClosing:
        "Posledica je predvidiva. Takve kompanije formalno postoje na tržištu rada, ali na njemu nisu zaista prisutne. Oglašavaju pozicije, ali ne privlače prave profile. Zapošljavaju, ali biraju iz onoga što tržište ponudi, a ne iz onoga što bi zaista želele da imaju.",
      sectionOneEmphasis:
        "Svaka kompanija ima reputaciju poslodavca. Razlika je samo u tome ko je oblikuje i da li je to urađeno namerno.",
      sectionTwoTitle: "Šta employer branding zapravo znači",
      sectionTwoBodyOne:
        "Employer branding nije HR komunikacija ni korporativni marketing. To je strateško definisanje i upravljanje onim što kompanija predstavlja kao poslodavac: šta nudi, kakva je kao radno okruženje i po čemu se razlikuje od konkurencije na tržištu rada.",
      sectionTwoBodyTwo:
        "Kompanija sa jasno izgrađenom pozicijom poslodavca skraćuje vreme pronalaska kandidata, privlači profile koji odgovaraju njenoj kulturi i smanjuje odliv zaposlenih. Kompanija bez nje oslanja se na slučaj i radi sa onim što tržište donese.",
      sectionTwoClosingPrefix: "To nije pitanje veličine kompanije. ",
      sectionTwoClosingEmphasis: "To je pitanje pristupa.",
      sectionThreeTitle: "Šta zapravo stoji iza ovog paradoksa",
      sectionThreeBody:
        "Iz naše perspektive, ovaj paradoks nije slučajnost. On je rezultat nekoliko strukturnih promena koje su se odvijale postepeno, a čiji se efekti sada osećaju istovremeno.",
      insightCards: [
        {
          number: "01.",
          title: "Percepcija pre prvog kontakta",
          body:
            "Kandidat donosi sud o kompaniji kao poslodavcu pre nego što stupi u ikakav kontakt. Ta percepcija se formira kroz javno prisustvo, konzistentnost poruke i ono što drugi govore o kompaniji.",
        },
        {
          number: "02.",
          title: "Kandidatsko iskustvo",
          body:
            "Svaka tačka kontakta s kandidatom, od oglasa do završnog razgovora, komunicira vrednost kompanije kao poslodavca. Proces selekcije je employer branding, hteli to ili ne.",
        },
        {
          number: "03.",
          title: "Interna reputacija",
          body:
            "Ono što zaposleni govore o kompaniji van njenih zidova predstavlja najsnažniji oblik employer brandinga. Njega ne oblikuje marketing, oblikuje ga svakodnevno iskustvo rada u kompaniji.",
        },
      ],
      missingPerspectiveTitle: "Cena nevidljivosti",
      closingParagraphs: [
        "Kompanije koje ne upravljaju aktivno svojom pozicijom na tržištu rada ne ostaju na nultoj tački. One gube poziciju u korist onih koji to rade. Na tržištu gde talenti imaju izbor, prednost imaju prepoznatljivi, ne nužno bolji poslodavci.",
        "Rezultat je konkretan: duži procesi popunjavanja pozicija, veći troškovi po zapošljavanju i slabiji profili kandidata. Kompanija s izgrađenim employer brendom ne prolazi kroz isti proces, jer ulazi u bolju startnu poziciju pre nego što proces i počne.",
      ],
      postClosingLead:
        "Employer branding nije inicijativa koja se pokreće kada kompanija ima problem s pronalaskom kadrova. To je strateška pozicija koja se gradi pre nego što problem nastane i koja, kada se jednom uspostavi, postaje trajna prednost.",
      postClosingBodyPrefix:
        "U HuntWell Advisory Group, pozicioniranje kompanije na tržištu rada tretiramo kao poslovnu odluku, a ne kao komunikacijsku aktivnost. ",
      postClosingBodySuffix:
        "Kompanije koje imaju kontrolu nad svojom pričom kao poslodavac ne čekaju reakciju tržišta, već same određuju svoju poziciju na njemu.",
      articleDisclaimer:
        "Stavovi izneti u ovom tekstu predstavljaju perspektivu HuntWell Advisory Group zasnovanu na opservaciji i analizi tržišnih kretanja. Sadržaj je informativnog i edukativnog karaktera i ne predstavlja profesionalni, pravni niti poslovni savet.",
    },
    footer: {
      rights: "© 2026 HUNTWELL ADVISORY GROUP. SVA PRAVA ZADRŽANA.",
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
      laborMarket: "Labor Market",
      employerBranding: "Employer branding",
    },
    pageIntro: {
      tag: "Employer Branding",
      titlePrefix: "Without employer branding companies become ",
      titleEmphasis: "invisible",
      titleSuffix: " employers",
      subtitle: "The Huntwell Perspective",
      meta: "MARCH 28, 2026 · 3 MIN READING",
    },
    article: {
      leadTitle:
        "An employer’s reputation is not a matter of chance. It is either built intentionally or shaped by others.",
      sectionOneTitle: "Your position in the labor market is not a given.",
      sectionOneBody:
        "Companies invest significant resources in building their business brand, market position, and client relationships. Yet employer reputation often remains an overlooked area.",
      sectionOneClosing:
        "The outcome is predictable. Such companies formally exist in the labor market, but are not truly present in it. They advertise roles, but fail to attract the right profiles. They hire, but select from what the market offers, rather than from what they would truly want to have.",
      sectionOneEmphasis:
        "Every company has an employer reputation. The only difference is who shapes it and whether it is shaped intentionally.",
      sectionTwoTitle: "What employer branding really means",
      sectionTwoBodyOne:
        "Employer branding is not HR communication or corporate marketing. It is the strategic definition and management of what a company represents as an employer, what it offers, what kind of work environment it provides, and how it differentiates itself in the labor market.",
      sectionTwoBodyTwo:
        "A company with a clearly defined employer position shortens time to hire, attracts talent aligned with its culture, and reduces employee turnover. Without it, companies rely on chance and work with what the market provides.",
      sectionTwoClosingPrefix: "It is not about company size. ",
      sectionTwoClosingEmphasis: "It is about approach.",
      sectionThreeTitle: "What is driving this paradox",
      sectionThreeBody:
        "From our perspective, this paradox is not a coincidence. It is the result of several structural shifts that have unfolded gradually, and whose effects are now being felt simultaneously.",
      insightCards: [
        {
          number: "01.",
          title: "Perception before first contact",
          body:
            "Candidates form an opinion about a company as an employer before any direct interaction takes place. That perception is shaped by public presence, consistency of messaging, and what others say about the company.",
        },
        {
          number: "02.",
          title: "Candidate experience",
          body:
            "Every point of contact with a candidate, from the job posting to the final interview, communicates the company’s value as an employer. The selection process is employer branding, whether intended or not.",
        },
        {
          number: "03.",
          title: "Internal reputation",
          body:
            "What employees say about a company outside its walls represents the most powerful form of employer branding. It is not shaped by marketing, but by the everyday experience of working within the company.",
        },
      ],
      missingPerspectiveTitle: "The cost of invisibility",
      closingParagraphs: [
        "Companies that do not actively manage their position in the labor market do not remain at a standstill. They lose ground to those that do. In a market where talent has a choice, the advantage lies with employers who are visible, not necessarily better.",
        "The outcome is tangible: longer time to fill, higher cost per hire, and weaker candidate profiles. Companies with a well-established employer brand do not go through the same process, as they start from a stronger position before it even begins.",
      ],
      postClosingLead:
        "Employer branding is not an initiative introduced when a company struggles to find talent. It is a strategic position built before the problem arises and, once established, becomes a lasting advantage.",
      postClosingBodyPrefix:
        "At HuntWell Advisory Group, we treat a company’s positioning in the labor market as a business decision rather than a communication activity. ",
      postClosingBodySuffix:
        "Companies that control their employer narrative do not wait for the market to respond. They define their position within it.",
      articleDisclaimer:
        "The views expressed in this text reflect the perspective of HuntWell Advisory Group, based on the observation and analysis of market trends. The content is provided for informational and educational purposes only and does not constitute professional, legal, or business advice.",
    },
    footer: {
      rights: "© 2026 HUNTWELL ADVISORY GROUP. ALL RIGHTS RESERVED.",
    },
  },
};

export default function EmployerBrandingPage() {
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
      // Keep Serbian as fallback.
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
              aria-controls="employer-branding-nav-dropdown"
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
              aria-controls="employer-branding-mobile-menu"
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
        id="employer-branding-nav-dropdown"
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
        id="employer-branding-mobile-menu"
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
          <div className={styles.pageHeroReveal}>
            <span className={styles.topicTag}>{t.pageIntro.tag}</span>
            <h1>
              {t.pageIntro.titlePrefix}
              <span className={styles.titleEmphasis}>{t.pageIntro.titleEmphasis}</span>
              {t.pageIntro.titleSuffix}
            </h1>
            <p className={styles.subtitle}>{t.pageIntro.subtitle}</p>
            <p className={styles.meta}>{t.pageIntro.meta}</p>
            <div className={styles.sectionDivider} />
          </div>
          <div className={styles.articleContent}>
            <h2 className={styles.articleLeadTitle}>{t.article.leadTitle}</h2>
            {t.article.leadQuote && <p className={styles.articleLeadQuote}>“{t.article.leadQuote}”</p>}
            <h3 className={styles.articleSectionTitle}>{t.article.sectionOneTitle}</h3>
            <p className={styles.articleBody}>{t.article.sectionOneBody}</p>
            <p className={styles.articleBody}>{t.article.sectionOneClosing}</p>
            <p className={styles.articleEmphasis}>{t.article.sectionOneEmphasis}</p>
            <h3 className={styles.articleSectionTitle}>{t.article.sectionTwoTitle}</h3>
            <p className={styles.articleBody}>{t.article.sectionTwoBodyOne}</p>
            <p className={styles.articleBody}>{t.article.sectionTwoBodyTwo}</p>
            <p className={styles.articleBody}>
              {t.article.sectionTwoClosingPrefix}
              <span className={styles.sectionTwoClosingEmphasis}>
                {t.article.sectionTwoClosingEmphasis}
              </span>
            </p>
            <div className={styles.insightCards}>
              {t.article.insightCards.map((card, index) => (
                <div key={index} className={styles.insightCard}>
                  <p className={styles.insightCardNumber}>{card.number}</p>
                  <h4 className={styles.insightCardTitle}>{card.title}</h4>
                  <p className={styles.insightCardBody}>{card.body}</p>
                </div>
              ))}
            </div>
            <h3 className={styles.closingSectionTitle}>{t.article.missingPerspectiveTitle}</h3>
            <div className={styles.closingParagraphs}>
              {t.article.closingParagraphs.map((paragraph, index) => (
                <p key={index} className={styles.closingBody}>
                  {paragraph}
                </p>
              ))}
            </div>
            <p className={styles.postClosingLead}>{t.article.postClosingLead}</p>
            <p className={styles.postClosingBody}>
              <span className={styles.postClosingBodyEmphasis}>{t.article.postClosingBodyPrefix}</span>
              {t.article.postClosingBodySuffix}
            </p>
            <div className={styles.articleEndRule} aria-hidden />
            <p className={styles.articleDisclaimer}>{t.article.articleDisclaimer}</p>
            <div className={styles.articleBottomRule} aria-hidden />
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
    </main>
  );
}
