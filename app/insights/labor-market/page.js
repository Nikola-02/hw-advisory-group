"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./labor-market.module.css";

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
      tag: "Tržište rada",
      title: "Paradoks savremenog tržišta rada",
      subtitle: "Perspektiva HuntWell Advisory Group",
      meta: "MART 28, 2026 · 3 MIN ČITANJA",
    },
    article: {
      leadTitle:
        "Nikad više kandidata. Nikad manje zapošljavanja. Paradoks koji sve snažnije definiše tržište rada u Srbiji.",
      leadQuote:
        "Tržište rada u Srbiji ima sve aktere, ali ne i pravu komunikaciju između njih.",
      sectionOneTitle: "Fenomen koji ne nestaje",
      sectionOneBody:
        "Postoji fenomen koji sve vidljivije oblikuje srpsko tržište rada, ali se o njemu retko govori direktno. Sa jedne strane broj ljudi koji aktivno traže posao raste iz godine u godinu. Sa druge, kompanije zapošljavaju sve selektivnije i sve opreznije. Između ta dva sveta postoji jaz koji se ne smanjuje, već se produbljuje.",
      sectionOneClosing:
        "Ovo nije prolazna fluktuacija. Ovo je strukturni paradoks tržišta rada.",
      sectionTwoTitle: "Kada ponuda i potražnja ne govore isti jezik",
      sectionTwoBodyOne:
        "Na prvi pogled, tržište rada u Srbiji deluje funkcionalno. Dublja analiza otkriva znatno složeniju sliku. Kandidati su danas obrazovaniji, mobilniji i spremniji da preuzmu nove profesionalne uloge nego u bilo kom ranijem periodu. Ipak, mnogi provode mesece u bezuspešnoj potrazi: ne zato što nisu dovoljno dobri, već zato što ono što nude i ono što tržište u ovom trenutku traži sve češće ne odgovara jedno drugom.",
      sectionTwoBodyTwo:
        "Kompanije se, s druge strane, suočavaju sa ekonomskom neizvesnošću, rastućim troškovima poslovanja i pritiskom da svaku novu poziciju višestruko opravdaju pre nego što je objave. Zapošljavanje je postalo strateška odluka, a ne operativna potreba. Rezultat: manji broj otvorenih pozicija, duži procesi selekcije i sve viši standardi koji se postavljaju pred potencijalnim zaposlenima.",
      sectionTwoClosing: "Na kraju, i jedni i drugi ostaju u poziciji čekanja.",
      sectionThreeTitle: "Šta zapravo stoji iza ovog paradoksa",
      sectionThreeBody:
        "Iz naše perspektive, ovaj paradoks nije slučajnost. On je rezultat nekoliko strukturnih promena koje su se odvijale postepeno, a čiji se efekti sada osećaju istovremeno.",
      insightCards: [
        {
          lead: "Raskorak između obrazovnih profila i tržišnih potreba",
          body:
            " nije nova tema, ali postaje sve akutnija. Generacije ulaze na tržište rada sa kompetencijama stečenim u jednom kontekstu, dok ih realne poslovne potrebe dočekuju s potpuno drugačijim zahtevima.",
        },
        {
          lead: "Demografska kretanja i odliv profesionalaca",
          body:
            " ostavljaju rupe koje nije lako popuniti. Tržište gubi deo svojih najkompetentnijih kadrova, a taj gubitak direktno oblikuje šta je dostupno i kome.",
        },
        {
          lead: "Oprez kompanija pri zapošljavanju",
          body:
            " nije iracionalan. U uslovima nestabilnog poslovnog okruženja, svaka nova pozicija nosi trošak i rizik. Kompanije to znaju, pa se zapošljavanje sve češće odvija reaktivno, a ne proaktivno.",
        },
      ],
      missingPerspectiveTitle: "Perspektiva koja nedostaje",
      closingParagraphs: [
        "Tržištu rada danas ne nedostaje broj kandidata niti broj oglasa. Nedostaje preciznost.",
        "Preciznost u razumevanju toga ko su pravi talenti i gde se nalaze.",
        "Preciznost u pozicioniranju poslodavca kao izbora, ne kao opcije.",
        "Preciznost u pristupu tržištu rada kao strateškom resursu, a ne administrativnoj obavezi.",
        "Paradoks tržišta rada nije nerešiv. Ali ga nije moguće rešiti metodama iz prošlih ciklusa.",
        "Za HuntWell Advisory Group ovaj paradoks nije apstraktna tema, on je u samoj srži našeg rada.",
      ],
      postClosingLead:
        "Identifikujemo talente tamo gde ih standardni procesi ne dosežu i pomažemo kompanijama da se pozicioniraju kao poslodavci koje vrhunski talenti biraju.",
      postClosingBody:
        "U takvom okruženju, sposobnost precizne identifikacije i strateškog pozicioniranja talenata postaje ključna konkurentska prednost.",
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
      tag: "Labor Market",
      title: "The Labor Market Paradox",
      subtitle: "The Huntwell Perspective",
      meta: "MARCH 28, 2026 · 3 MIN READING",
    },
    article: {
      leadTitle:
        "There have never been more candidates. Hiring has never been lower. A paradox increasingly defining the Serbian labor market.",
      leadQuote:
        "Serbia's labor market has all the necessary actors, yet the communication between them remains fundamentally misaligned.",
      sectionOneTitle: "A persistent phenomenon",
      sectionOneBody:
        "There is a phenomenon that is becoming increasingly visible in the Serbian labor market, yet is rarely addressed directly. On one side, the number of people actively seeking employment continues to grow year after year. On the other, companies are hiring with increasing selectivity and caution. Between these two realities lies a gap that is not narrowing, but deepening.",
      sectionOneClosing:
        "This is not a temporary fluctuation. It is a structural paradox of the labor market.",
      sectionTwoTitle: "When supply and demand do not speak the same language",
      sectionTwoBodyOne:
        "At first glance, the Serbian labor market appears functional. A deeper analysis reveals a far more complex reality. Candidates today are more educated, more mobile, and more willing to take on new professional roles than ever before. Yet many spend months searching for opportunities without success, not because they lack quality, but because what they offer and what the market currently demands are increasingly misaligned.",
      sectionTwoBodyTwo:
        "On the other side, companies are facing economic uncertainty, rising operating costs, and growing pressure to justify each new role before opening it. Hiring has become a strategic decision rather than an operational need. The result is fewer open positions, longer hiring processes, and increasingly high expectations placed on potential employees.",
      sectionTwoClosing: "In the end, both sides remain in a holding pattern.",
      sectionThreeTitle: "What is driving this paradox",
      sectionThreeBody:
        "From our perspective, this paradox is not a coincidence. It is the result of several structural shifts that have unfolded gradually, and whose effects are now being felt simultaneously.",
      insightCards: [
        {
          lead: "The gap between educational profiles and market needs",
          body:
            " is not new, but it is becoming increasingly acute. New generations are entering the labor market with competencies developed in one context, while real business needs confront them with entirely different expectations.",
        },
        {
          lead: "Demographic trends and the outflow of professionals",
          body:
            " are creating gaps that are not easy to fill. The market is losing some of its most capable talent, and that loss directly shapes what is available and to whom.",
        },
        {
          lead: "Caution in hiring",
          body:
            " is not irrational. In an environment marked by business uncertainty, every new role carries both cost and risk. Companies are well aware of this, which is why hiring is increasingly reactive rather than proactive.",
        },
      ],
      missingPerspectiveTitle: "The missing perspective",
      closingParagraphs: [
        "The labor market today does not lack candidates, nor does it lack job postings. What it lacks is precision.",
        "Precision in understanding who the right talent is and where to find it.",
        "Precision in positioning the employer as a choice, not just an option.",
        "Precision in approaching the labor market as a strategic resource rather than an administrative function.",
        "The labor market paradox is not unsolvable. But it cannot be addressed with methods from past cycles.",
        "For HuntWell Advisory Group, this paradox is not an abstract concept. It lies at the very core of our work.",
      ],
      postClosingLead:
        "We identify talent beyond the reach of standard processes and help companies position themselves as the employer of choice for top-tier talent.",
      postClosingBody:
        "In such an environment, the ability to identify and strategically position talent with precision becomes a critical competitive advantage.",
      articleDisclaimer:
        "The views expressed in this text reflect the perspective of HuntWell Advisory Group, based on the observation and analysis of market trends. The content is provided for informational and educational purposes only and does not constitute professional, legal, or business advice.",
    },
    footer: {
      rights: "© 2026 HUNTWELL ADVISORY GROUP. ALL RIGHTS RESERVED.",
    },
  },
};

export default function LaborMarketPage() {
  const [language, setLanguage] = useState("sr");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const languageRef = useRef(null);
  const insightsTriggerRef = useRef(null);
  const insightsDropdownRef = useRef(null);
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
            <Link href="/#expertise">{t.nav.first}</Link>
            <button
              type="button"
              className={styles.navInsightsButton}
              ref={insightsTriggerRef}
              onClick={() => setIsInsightsOpen((prevOpen) => !prevOpen)}
              aria-expanded={isInsightsOpen}
              aria-controls="labor-market-nav-dropdown"
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
          </nav>
        </div>
      </header>

      <div
        id="labor-market-nav-dropdown"
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

      <section className={`${styles.topSection} ${isInsightsOpen ? styles.topSectionShifted : ""}`}>
        <div className={styles.shell}>
          <div className={styles.pageHeroReveal}>
            <span className={styles.topicTag}>{t.pageIntro.tag}</span>
            <h1>{t.pageIntro.title}</h1>
            <p className={styles.subtitle}>{t.pageIntro.subtitle}</p>
            <p className={styles.meta}>{t.pageIntro.meta}</p>
            <div className={styles.sectionDivider} />
          </div>
          <div className={styles.articleContent}>
            <h2 className={styles.articleLeadTitle}>{t.article.leadTitle}</h2>
            <p className={styles.articleLeadQuote}>“{t.article.leadQuote}”</p>
            <h3 className={styles.articleSectionTitle}>{t.article.sectionOneTitle}</h3>
            <p className={styles.articleBody}>{t.article.sectionOneBody}</p>
            <p className={styles.articleBody}>{t.article.sectionOneClosing}</p>
            <h3 className={styles.articleSectionTitle}>{t.article.sectionTwoTitle}</h3>
            <p className={styles.articleBody}>{t.article.sectionTwoBodyOne}</p>
            <p className={styles.articleBody}>{t.article.sectionTwoBodyTwo}</p>
            <p className={styles.articleBody}>{t.article.sectionTwoClosing}</p>
            <h3 className={styles.articleSectionTitle}>{t.article.sectionThreeTitle}</h3>
            <p className={styles.articleBody}>{t.article.sectionThreeBody}</p>
            <div className={styles.insightCards}>
              {t.article.insightCards.map((card, index) => (
                <div key={index} className={styles.insightCard}>
                  <div className={styles.insightCardRule} aria-hidden />
                  <p className={styles.insightCardText}>
                    <span className={styles.insightCardLead}>{card.lead}</span>
                    {card.body}
                  </p>
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
            <p className={styles.postClosingBody}>{t.article.postClosingBody}</p>
            <div className={styles.articleEndRule} aria-hidden />
            <p className={styles.articleDisclaimer}>{t.article.articleDisclaimer}</p>
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
