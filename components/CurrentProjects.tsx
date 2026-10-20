import type { CSSProperties } from "react";
import Link from "next/link";
import { Lang, projects } from "@/lib/data";
import StatusBadge from "@/components/StatusBadge";

/**
 * « En ce moment » : les projets marqués in-progress dans lib/data.ts,
 * puis (showLearning) ce que j'apprends en 5ème année, en cartes.
 */
type Bi = { en: string; fr: string };
const same = (s: string): Bi => ({ en: s, fr: s });

const LEARNING: { emoji: string; title: Bi; desc: Bi; chips: Bi[] }[] = [
  {
    emoji: "✨",
    title: { en: "Generative AI", fr: "IA générative" },
    desc: {
      en: "Three-day seminar in November 2026 — building on my work with DistilBERT, Groq LLaMA and semantic search.",
      fr: "Séminaire de trois jours en novembre 2026 — dans la continuité de mon travail avec DistilBERT, Groq LLaMA et la recherche sémantique.",
    },
    chips: [{ en: "Seminar", fr: "Séminaire" }, { en: "Nov 2026", fr: "Nov. 2026" }],
  },
  {
    emoji: "🧪",
    title: { en: "Automated testing", fr: "Tests automatisés" },
    desc: {
      en: "Unit and end-to-end tests to ship reliable code.",
      fr: "Tests unitaires et de bout en bout pour livrer du code fiable.",
    },
    chips: [same("JUnit"), same("PyTest"), same("Playwright")],
  },
  {
    emoji: "🐘",
    title: same("Big Data"),
    desc: {
      en: "Processing and analysing data at scale.",
      fr: "Traitement et analyse de données à grande échelle.",
    },
    chips: [same("Spark"), same("Hadoop")],
  },
  {
    emoji: "🚢",
    title: same("DevOps"),
    desc: {
      en: "Containers, automated pipelines and orchestration.",
      fr: "Conteneurs, pipelines automatisés et orchestration.",
    },
    chips: [same("Docker"), same("CI/CD"), same("Kubernetes")],
  },
  {
    emoji: "🛡️",
    title: same("CyberOps Associate"),
    desc: {
      en: "Cisco Networking Academy certification, in progress (2026).",
      fr: "Certification Cisco Networking Academy, en cours (2026).",
    },
    chips: [same("Cisco"), { en: "Security operations", fr: "Opérations de sécurité" }],
  },
];

const LABEL: CSSProperties = {
  fontSize: "0.66rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d4a853", marginBottom: "0.9rem",
};

const LEARNING_BADGE: CSSProperties = {
  display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.62rem", fontWeight: 800, padding: "2px 9px",
  borderRadius: 999, letterSpacing: "0.06em", whiteSpace: "nowrap",
  background: "rgba(110,231,183,0.12)", color: "#6ee7b7", border: "1px solid rgba(110,231,183,0.4)",
};

export default function CurrentProjects({ lang, showLearning = false }: { lang: Lang; showLearning?: boolean }) {
  const current = projects.filter(p => p.status === "in-progress");
  if (current.length === 0) return null;
  return (
    <div>
      <p style={LABEL}>
        ✦ {lang === "en" ? "Currently building" : "En ce moment"} ✦
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
        {current.map(p => (
          <Link key={p.id} href={`/projects/${p.id}`} className="glass-card"
            style={{ padding: "1.1rem 1.25rem", textDecoration: "none", display: "flex", flexDirection: "column", gap: "0.45rem", borderColor: "rgba(212,168,83,0.35)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>{p.emoji}</span>
              <StatusBadge status={p.status} lang={lang} compact />
            </div>
            <h3 style={{ fontWeight: 800, fontSize: "1rem", color: "#ecfdf5" }}>{p.title}</h3>
            <p style={{ color: "#6ee7a0", fontSize: "0.8rem", lineHeight: 1.5 }}>{p.shortDesc[lang]}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {p.techs.slice(0, 3).map(tech => <span key={tech} className="tech-badge">{tech}</span>)}
            </div>
          </Link>
        ))}
      </div>

      {showLearning && (
        <div style={{ marginTop: "2.25rem" }}>
          <p style={LABEL}>
            ✦ {lang === "en" ? "Now learning · 5th year" : "En apprentissage · 5ème année"} ✦
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "1rem" }}>
            {LEARNING.map(item => (
              <div key={item.title.en} className="glass-card"
                style={{ padding: "1.1rem 1.25rem", display: "flex", flexDirection: "column", gap: "0.45rem", borderColor: "rgba(110,231,183,0.3)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>{item.emoji}</span>
                  <span style={LEARNING_BADGE}>🌱 {lang === "en" ? "Learning" : "En apprentissage"}</span>
                </div>
                <h3 style={{ fontWeight: 800, fontSize: "1rem", color: "#ecfdf5" }}>{item.title[lang]}</h3>
                <p style={{ color: "#6ee7a0", fontSize: "0.8rem", lineHeight: 1.5 }}>{item.desc[lang]}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {item.chips.map(c => <span key={c.en} className="tech-badge">{c[lang]}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
