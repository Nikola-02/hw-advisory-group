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
    preFooter: {
      eyebrow: "Uvidi i perspektive HuntWell Advisory Group",
      headline: "Naša najnovija razmišljanja o temama koje oblikuju budućnost poslovanja i društva",
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
    preFooter: {
      eyebrow: "HuntWell Advisory Group Insights & Perspectives",
      headline: "Our latest thinking on the topics shaping the future of business and society",
    },
  },
};

export default function Home() {
  const [language, setLanguage] = useState("sr");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageRef = useRef(null);
  const t = translations[language];
  const languageStorageKey = "hw_site_language";

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
            <a href="#">{t.nav.second}</a>
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

      <section className={styles.preFooterSection}>
        <div className={styles.preFooterContent}>
          <p className={styles.preFooterEyebrow}>{t.preFooter.eyebrow}</p>
          <Link href="#our-insights" className={styles.preFooterLink}>
            {t.preFooter.headline}
          </Link>
          <Link href="#our-insights" className={styles.preFooterArrow} aria-label={t.nav.second}>
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
            <a href="#">{t.nav.second}</a>
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
