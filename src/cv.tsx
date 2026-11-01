// Print layout of the résumé. `npm run cv` renders it to public/cv/ as a PDF,
// so the downloadable résumé is built from the same content as the site.
import { StrictMode, type ReactElement } from "react";
import { createRoot } from "react-dom/client";
import { CAREER_START, CLIENTS, CONTENT } from "./content";
import "./cv.css";

const content = CONTENT.en;

const root = document.getElementById("root");
if (!root) throw new Error("Missing #root element in cv.html");

createRoot(root).render(
  <StrictMode>
    <Resume />
  </StrictMode>,
);

function Resume(): ReactElement {
  const years = Math.round((Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 3600 * 1000));

  return (
    <main className="cv">
      <header>
        <h1>Mohamed Amine Bouzahar</h1>
        <p className="title">
          {content.hero.title} · {years} years of experience
        </p>
        <p className="contact">
          Lille, France · open to relocate · mohamed.amine.bouzahar@gmail.com · linkedin.com/in/amine-bouzahar ·
          github.com/aminekun90 · aminekun90.github.io
        </p>
      </header>

      <section>
        <h2>Profile</h2>
        <p>{content.hero.summary}</p>
        <p className="clients">
          <strong>Delivered for:</strong> {CLIENTS.join(" · ")}
        </p>
      </section>

      <section>
        <h2>Experience</h2>
        {content.roles.map((role) => (
          <article key={`${role.company}-${role.start}`} className="role">
            <div className="role-head">
              <h3>
                {role.title} — {role.company}
                {role.context && <span className="context"> ({role.context})</span>}
              </h3>
              <span className="period">
                {formatMonth(role.start)} – {role.end ? formatMonth(role.end) : "Present"}
              </span>
            </div>
            <ul>
              {role.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <p className="stack">{role.stack.join(" · ")}</p>
          </article>
        ))}
      </section>

      <section>
        <h2>Skills</h2>
        <dl className="skills">
          {content.skills.map((skill) => (
            <div key={skill.label}>
              <dt>{skill.label}</dt>
              <dd>{skill.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2>Open source & personal projects</h2>
        <ul className="projects">
          {content.projects.map((project) => (
            <li key={project.name}>
              <strong>{project.name}</strong> — {project.summary}
            </li>
          ))}
        </ul>
      </section>

      <section className="columns">
        <div>
          <h2>Education</h2>
          <ul>
            {content.education.map((entry) => (
              <li key={entry.school}>
                <strong>{entry.degree}</strong> — {entry.school} ({entry.years})
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Languages</h2>
          <p>{content.languages.map((language) => `${language.name} (${language.level})`).join(" · ")}</p>
        </div>
      </section>
    </main>
  );
}

function formatMonth(yearMonth: string): string {
  const [year, month] = yearMonth.split("-");
  return `${month}/${year}`;
}
