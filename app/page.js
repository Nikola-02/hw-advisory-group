"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

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
    hero: {
      strong: "Pristup",
      thinOne: "koji drugi",
      boldItalic: "ne mogu",
      thinTwo: "da",
      gold: "ponude",
      ctaPrimary: "Zakaži konsultacije",
      ctaSecondary: "Saznaj Više",
    },
    consent: {
      title: "Napomena o zakazivanju",
      text: "Nastavkom i unosom podataka za zakazivanje pristajete na uslove koriscenja Calendly platforme. Podaci za rezervaciju unose se direktno u Calendly.",
      button: "Razumem",
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
    hero: {
      strong: "An Approach",
      thinOne: "Few",
      boldItalic: "Can",
      thinTwo: "",
      gold: "Offer",
      ctaPrimary: "Book a Consultation",
      ctaSecondary: "Learn More",
    },
    consent: {
      title: "Booking notice",
      text: "By continuing and entering booking details, you agree to Calendly's terms of use. Reservation data is submitted directly through Calendly.",
      button: "I understand",
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
                text: "We analyze and identify key professional capabilities in the labor market, assessing where their potential creates the greatest strategic value in relation to an organization’s objectives.",
              },
            ],
          },
          {
            title: "Identification of Critical Talent",
            textParts: [
              {
                text: "In every industry there are professional profiles whose value is high and whose availability is limited. These are precisely the profiles we identify.",
              },
            ],
          },
          {
            title: "Employer Positioning",
            textParts: [
              {
                text: "An employer’s identity defines how an organization positions itself in the labor market. We shape it into a clear and distinctive employer brand.",
              },
            ],
          },
          {
            title: "Opportunity Positioning",
            textParts: [
              {
                text: "We design the structure, tone, and logic through which organizations present professional opportunities to the labor market.",
              },
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
                text: "We provide clear and practical guidance that supports informed decision-making with long-term impact.",
              },
            ],
          },
          {
            title: "Client Ownership",
            textParts: [
              {
                text: "Our engagement concludes with detailed insights and recommendations, while clients retain full ownership of implementation and outcomes.",
              },
            ],
          },
        ],
      },
    ],
    preFooter: {
      eyebrow: "HuntWell Advisory Group Insights & Perspectives",
      headline: "Our latest thinking on the topics shaping the future of business and society",
    },
    closingQuote:
      "We work with organizations that understand serious business results are not a matter of chance, but of a deliberate approach.",
  },
};

export default function Home() {
  const [language, setLanguage] = useState("sr");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageRef = useRef(null);
  const t = translations[language];
  const languageStorageKey = "hw_site_language";
  const insightsPath = "/insights";

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
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  function renderTextParts(parts) {
    return parts.map((part, index) => (
      <span key={`${part.text}-${index}`} className={part.emphasis ? styles.infoBodyEmphasis : ""}>
        {part.text}
      </span>
    ));
  }

  return (
    <main>
      <section className={styles.hero}>
        <img
          src="/hero_section_golf_hw.jpg"
          alt=""
          aria-hidden="true"
          className={styles.heroImage}
        />
        <header className={styles.header}>
          <a href="#" className={styles.leftLink}>
            {t.nav.left}
          </a>

          <a href="#" className={styles.logoWrap} aria-label="HuntWell Advisory Group">
            <img
              src="/hw_advisory_group_white_logo.png"
              alt="HuntWell Advisory Group logo"
              className={styles.logo}
            />
          </a>

          <nav className={styles.rightNav}>
            <a href="#">{t.nav.first}</a>
            <Link href={insightsPath}>{t.nav.second}</Link>
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
          </nav>
        </header>

        <section className={styles.content}>
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

      <section id="our-insights" className={styles.detailsArea}>
        <div className={styles.detailsInner}>
          <div className={styles.divider} />

          <section className={styles.infoSection}>
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
            <a href="#">{t.nav.left}</a>
            <a href="#">{t.nav.first}</a>
            <Link href={insightsPath}>{t.nav.second}</Link>
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
