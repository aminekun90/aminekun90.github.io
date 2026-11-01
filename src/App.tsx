import { useEffect, useState, type ReactElement } from "react";
import portrait from "./assets/portrait.jpg";
import { CAREER_START, CLIENTS, CONTENT, LOCALES, type Content, type Locale, type Role } from "./content";

const EMAIL = "mohamed.amine.bouzahar@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/amine-bouzahar/";
const GITHUB = "https://github.com/aminekun90";
const LOCALE_KEY = "locale";
const DATE_LOCALES: Record<Locale, string> = { en: "en-GB", nl: "nl-NL", fr: "fr-FR" };

export function App(): ReactElement {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const content = CONTENT[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      localStorage.setItem(LOCALE_KEY, locale);
    } catch {
      // Storage can be unavailable (private mode); the choice simply won't persist.
    }
  }, [locale]);

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#top">
          AB
        </a>
        <nav className="topnav">
          <a href="#experience">{content.nav.experience}</a>
          <a href="#work">{content.nav.work}</a>
          <a href="#skills">{content.nav.skills}</a>
          <a href="#background">{content.nav.about}</a>
        </nav>
        <div className="locales" role="group" aria-label="Language">
          {LOCALES.map((option) => (
            <button
              key={option}
              type="button"
              lang={option}
              title={CONTENT[option].meta.label}
              aria-pressed={option === locale}
              onClick={() => setLocale(option)}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <main id="top">
        <Hero content={content} />
        <Clients title={content.clientsTitle} />

        <section id="experience" className="section">
          <h2>{content.experienceTitle}</h2>
          <ol className="timeline">
            {content.roles.map((role) => (
              <RoleItem key={`${role.company}-${role.start}`} role={role} locale={locale} present={content.meta.present} />
            ))}
          </ol>
        </section>

        <section id="work" className="section">
          <h2>{content.workTitle}</h2>
          <p className="lead">{content.workIntro}</p>
          <div className="cards">
            {content.projects.map((project) => (
              <article key={project.name} className="card">
                <h3>{project.url ? <a href={project.url}>{project.name}</a> : project.name}</h3>
                <p>{project.summary}</p>
                <Tags items={project.stack} />
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h2>{content.skillsTitle}</h2>
          <dl className="skills">
            {content.skills.map((skill) => (
              <div key={skill.label} className="skill">
                <dt>{skill.label}</dt>
                <dd>{skill.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="background" className="section background">
          <div>
            <h2>{content.educationTitle}</h2>
            <ul className="schools">
              {content.education.map((entry) => (
                <li key={entry.school}>
                  <span className="logo">
                    <img src={entry.logo} alt="" />
                  </span>
                  <div>
                    <strong>{entry.degree}</strong>
                    <span className="muted">
                      {entry.school} · {entry.years}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{content.languagesTitle}</h2>
            <ul className="languages">
              {content.languages.map((language) => (
                <li key={language.name}>
                  <span>{language.name}</span>
                  <span className="muted">{language.level}</span>
                </li>
              ))}
            </ul>
            <h2>{content.teachingTitle}</h2>
            <p>
              {content.teaching} <a href={`${GITHUB}/java_cours`}>java_cours</a>
            </p>
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>{content.contactTitle}</h2>
          <p className="lead">{content.contactText}</p>
          <ContactLinks />
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Mohamed Amine Bouzahar</footer>
    </>
  );
}

function Hero({ content }: { content: Content }): ReactElement {
  // Rounded: the CV and profiles quote whole years.
  const years = Math.round((Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 3600 * 1000));

  return (
    <section className="hero">
      <img className="portrait" src={portrait} alt="Mohamed Amine Bouzahar" width={320} height={320} />
      <div>
        <p className="eyebrow">{content.hero.location}</p>
        <h1>Mohamed Amine Bouzahar</h1>
        <p className="role">
          {content.hero.title} · {years} {content.meta.years}
        </p>
        <p className="summary">{content.hero.summary}</p>
        <ContactLinks cta={content.hero.cta} />
      </div>
    </section>
  );
}

function Clients({ title }: { title: string }): ReactElement {
  return (
    <section className="clients" aria-label={title}>
      <span className="eyebrow">{title}</span>
      <ul>
        {CLIENTS.map((client) => (
          <li key={client}>{client}</li>
        ))}
      </ul>
    </section>
  );
}

function RoleItem({ role, locale, present }: { role: Role; locale: Locale; present: string }): ReactElement {
  return (
    <li className="role-item">
      <span className={role.darkLogo ? "logo dark" : "logo"}>{role.logo ? <img src={role.logo} alt="" /> : <span className="wordmark">{role.company}</span>}</span>
      <div>
        <p className="period">
          {formatMonth(role.start, locale)} — {role.end ? formatMonth(role.end, locale) : present}
        </p>
        <h3>{role.title}</h3>
        <p className="company">
          {role.company}
          {role.context && <span className="muted"> · {role.context}</span>}
        </p>
        <ul className="highlights">
          {role.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <Tags items={role.stack} />
      </div>
    </li>
  );
}

function ContactLinks({ cta }: { cta?: string }): ReactElement {
  return (
    <div className="links">
      <a className="button primary" href={`mailto:${EMAIL}`}>
        {cta ?? EMAIL}
      </a>
      <a className="button" href={LINKEDIN}>
        LinkedIn
      </a>
      <a className="button" href={GITHUB}>
        GitHub
      </a>
    </div>
  );
}

function Tags({ items }: { items: string[] }): ReactElement {
  return (
    <ul className="tags">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function initialLocale(): Locale {
  // ?lang=nl lets a shared link open in the recipient's language.
  const requested = new URLSearchParams(window.location.search).get("lang");
  const fromUrl = LOCALES.find((option) => option === requested);
  if (fromUrl) return fromUrl;
  try {
    const saved = localStorage.getItem(LOCALE_KEY);
    const known = LOCALES.find((option) => option === saved);
    if (known) return known;
  } catch {
    // Fall through to the browser language.
  }
  return LOCALES.find((option) => navigator.language.startsWith(option)) ?? "en";
}

function formatMonth(yearMonth: string, locale: Locale): string {
  return new Intl.DateTimeFormat(DATE_LOCALES[locale], { month: "short", year: "numeric" }).format(
    new Date(`${yearMonth}-01T12:00:00`),
  );
}
