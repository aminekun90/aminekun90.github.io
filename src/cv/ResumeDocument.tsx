// The downloadable résumé, rendered in the visitor's browser from the same
// content as the site. Loaded lazily: react-pdf and the fonts only ship when
// someone opens the CV preview.
import { Document, Font, Page, StyleSheet, Text, View, pdf } from "@react-pdf/renderer";
import type { ReactElement } from "react";
import monoMedium from "../assets/fonts/IBMPlexMono-Medium.ttf";
import sansBold from "../assets/fonts/IBMPlexSans-Bold.ttf";
import sansRegular from "../assets/fonts/IBMPlexSans-Regular.ttf";
import sansSemiBold from "../assets/fonts/IBMPlexSans-SemiBold.ttf";
import { CAREER_START, CLIENTS, CONTENT, type Locale } from "../content";

const INK = "#14213d";
const MUTED = "#4b5466";
const ACCENT = "#c2571a";

Font.register({
  family: "Plex",
  fonts: [
    { src: sansRegular, fontWeight: 400 },
    { src: sansSemiBold, fontWeight: 600 },
    { src: sansBold, fontWeight: 700 },
  ],
});
Font.register({ family: "PlexMono", src: monoMedium });
// Keep words whole: the default splits them at arbitrary points.
Font.registerHyphenationCallback((word) => [word]);

export async function renderResume(locale: Locale): Promise<Blob> {
  return pdf(<Resume locale={locale} />).toBlob();
}

function Resume({ locale }: { locale: Locale }): ReactElement {
  const content = CONTENT[locale];
  const years = Math.round((Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 3600 * 1000));

  return (
    <Document title="Mohamed Amine Bouzahar — CV" author="Mohamed Amine Bouzahar" language={locale}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>Mohamed Amine Bouzahar</Text>
          <Text style={styles.title}>
            {content.hero.title} · {years} {content.meta.years}
          </Text>
          <Text style={styles.contact}>
            {content.hero.location} · mohamed.amine.bouzahar@gmail.com · linkedin.com/in/amine-bouzahar ·
            github.com/aminekun90 · aminekun90.github.io
          </Text>
        </View>

        <Section title={content.cv.profile}>
          <Text style={styles.paragraph}>{content.hero.summary}</Text>
          <Text style={styles.muted}>
            <Text style={styles.strong}>{content.clientsTitle}: </Text>
            {CLIENTS.join(" · ")}
          </Text>
        </Section>

        <Section title={content.experienceTitle}>
          {content.roles.map((role) => (
            <View key={`${role.company}-${role.start}`} style={styles.role} wrap={false}>
              <View style={styles.roleHead}>
                <Text style={styles.roleTitle}>
                  {role.title} — {role.company}
                  {role.context && <Text style={styles.context}> ({role.context})</Text>}
                </Text>
                <Text style={styles.period}>
                  {formatMonth(role.start)} – {role.end ? formatMonth(role.end) : content.meta.present}
                </Text>
              </View>
              {role.highlights.map((highlight) => (
                <View key={highlight} style={styles.bullet}>
                  <Text style={styles.dot}>•</Text>
                  <Text style={styles.bulletText}>{highlight}</Text>
                </View>
              ))}
              <Text style={styles.stack}>{role.stack.join(" · ")}</Text>
            </View>
          ))}
        </Section>

        <Section title={content.skillsTitle}>
          {content.skills.map((skill) => (
            <View key={skill.label} style={styles.skill}>
              <Text style={styles.skillLabel}>{skill.label}</Text>
              <Text style={styles.skillItems}>{skill.items}</Text>
            </View>
          ))}
        </Section>

        <Section title={content.workTitle}>
          {content.projects.map((project) => (
            <View key={project.name} style={styles.bullet} wrap={false}>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.strong}>{project.name}</Text> — {project.summary}
              </Text>
            </View>
          ))}
        </Section>

        <View style={styles.columns} wrap={false}>
          <View style={styles.wide}>
            <Section title={content.educationTitle}>
              {content.education.map((entry) => (
                <Text key={entry.school} style={styles.paragraph}>
                  <Text style={styles.strong}>{entry.degree}</Text> — {entry.school} ({entry.years})
                </Text>
              ))}
            </Section>
          </View>
          <View style={styles.narrow}>
            <Section title={content.languagesTitle}>
              {content.languages.map((language) => (
                <Text key={language.name}>
                  {language.name} <Text style={styles.muted}>— {language.level}</Text>
                </Text>
              ))}
            </Section>
          </View>
        </View>
      </Page>
    </Document>
  );
}

function Section({ title, children }: { title: string; children: ReactElement | ReactElement[] }): ReactElement {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function formatMonth(yearMonth: string): string {
  const [year, month] = yearMonth.split("-");
  return `${month}/${year}`;
}

const styles = StyleSheet.create({
  page: { paddingVertical: 38, paddingHorizontal: 42, fontFamily: "Plex", fontSize: 9.2, lineHeight: 1.4, color: INK },
  header: { paddingBottom: 8, borderBottomWidth: 1.5, borderBottomColor: INK },
  name: { fontSize: 22, fontWeight: 700, letterSpacing: -0.5, lineHeight: 1.15 },
  title: { fontSize: 11.5, fontWeight: 600, color: ACCENT, marginTop: 3 },
  contact: { fontSize: 8.2, color: MUTED, marginTop: 3 },
  section: { marginTop: 11 },
  sectionTitle: { fontSize: 9.5, fontWeight: 700, color: ACCENT, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 4 },
  paragraph: { marginBottom: 3 },
  muted: { color: MUTED },
  strong: { fontWeight: 600, color: INK },
  role: { marginBottom: 8 },
  roleHead: { flexDirection: "row", justifyContent: "space-between", marginBottom: 2 },
  roleTitle: { fontWeight: 700, fontSize: 10, flex: 1, paddingRight: 10 },
  context: { fontWeight: 400, color: MUTED },
  period: { fontFamily: "PlexMono", fontSize: 8.2, color: MUTED },
  bullet: { flexDirection: "row", marginBottom: 1.5 },
  dot: { width: 9 },
  bulletText: { flex: 1 },
  stack: { fontFamily: "PlexMono", fontSize: 7.6, color: MUTED, marginTop: 2 },
  skill: { flexDirection: "row", marginBottom: 2 },
  skillLabel: { width: 72, fontWeight: 600 },
  skillItems: { flex: 1, color: MUTED },
  columns: { flexDirection: "row", gap: 20 },
  wide: { flex: 3 },
  narrow: { flex: 2 },
});
