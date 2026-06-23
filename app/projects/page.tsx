"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowerBg from "@/components/FlowerBg";
import { Lang, t, projects, Project, Category, ALL_TECHS } from "@/lib/data";

const ALL_CATEGORIES: Category[] = ["AI/ML/DL", "Web", "Mobile", "Game", "Data"];

const CAT_COLORS: Record<string, string> = {
  "AI/ML/DL": "#22c55e",
  "Web":       "#86efac",
  "Mobile":    "#4ade80",
  "Game":      "#d4a853",
  "Data":      "#f472b6",
};

function filterBtnStyle(active: boolean, color?: string): React.CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 16px",
    borderRadius: 999,
    fontSize: "0.78rem",
    fontWeight: 700,
    cursor: "pointer",
    border: `1px solid ${active ? (color || "#22c55e") : "rgba(34,197,94,0.3)"}`,
    background: active ? (color ? color + "22" : "rgba(34,197,94,0.18)") : "rgba(34,197,94,0.06)",
    color: active ? (color || "#22c55e") : "#6ee7a0",
    transition: "all 0.18s ease",
    outline: "none",
    whiteSpace: "nowrap" as const,
    fontFamily: "inherit",
  };
}

export default function ProjectsPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [activeCats, setActiveCats] = useState<Set<Category>>(new Set());
  const [activeTechs, setActiveTechs] = useState<Set<string>>(new Set());
  const [showStack, setShowStack] = useState(false);

  const tr = t.projects;

  const toggleCat = (cat: Category) => {
    setActiveCats(prev => {
      const n = new Set(prev);
      n.has(cat) ? n.delete(cat) : n.add(cat);
      return n;
    });
  };

  const toggleTech = (tech: string) => {
    setActiveTechs(prev => {
      const n = new Set(prev);
      n.has(tech) ? n.delete(tech) : n.add(tech);
      return n;
    });
  };

  const clearFilters = () => { setActiveCats(new Set()); setActiveTechs(new Set()); };
  const hasFilters = activeCats.size > 0 || activeTechs.size > 0;

  const filtered = projects.filter(p => {
    const catOk = activeCats.size === 0 || p.categories.some(c => activeCats.has(c));
    const techOk = activeTechs.size === 0 || p.techs.some(tt => activeTechs.has(tt));
    return catOk && techOk;
  });

  return (
    <>
      <Navbar lang={lang} onToggleLang={() => setLang(lang === "en" ? "fr" : "en")} />

      <main className="pt-24" style={{ position: "relative", overflow: "hidden" }}>
        <FlowerBg density="normal" />

        {/* Hero — pointerEvents none so it never blocks clicks below */}
        <div style={{ position: "relative", overflow: "hidden", paddingBottom: "3rem", pointerEvents: "none" }}>
          <FlowerBg density="lush" />
          <div className="section" style={{ paddingBottom: "2rem", position: "relative", zIndex: 1, pointerEvents: "auto" }}>
            <div className="animate-fade-up">
              <div className="accent-bar" />
              <h1 style={{
                fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4rem)",
                color: "#ecfdf5", lineHeight: 1.1, marginBottom: "0.75rem",
              }}>
                {tr.title[lang]}
              </h1>
              <p style={{ color: "#6ee7a0", fontSize: "1.1rem", marginBottom: "2rem" }}>
                {tr.subtitle[lang]}
              </p>
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                {[
                  { n: String(projects.length), label: lang === "en" ? "Projects" : "Projets" },
                  { n: "5", label: lang === "en" ? "AI/ML models" : "Modeles IA" },
                  { n: "4", label: lang === "en" ? "Platforms" : "Plateformes" },
                ].map(s => (
                  <div key={s.n} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#22c55e", lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontSize: "0.75rem", color: "#6ee7a0", marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Flower divider */}
        <div className="flower-divider" style={{ margin: "0 1.5rem 2rem", position: "relative", zIndex: 1 }}>
          <svg width="24" height="24" viewBox="0 0 100 100">
            {[0,60,120,180,240,300].map(d => (
              <ellipse key={d} cx="50" cy="20" rx="11" ry="20" fill="#22c55e" opacity="0.7"
                transform={`rotate(${d} 50 50)`} />
            ))}
            <circle cx="50" cy="50" r="12" fill="#22c55e" />
          </svg>
        </div>

        {/* Filters + Grid */}
        <div className="section" style={{ paddingTop: "1rem", position: "relative", zIndex: 2 }}>

          {/* FILTERS */}
          <div style={{ marginBottom: "2.5rem" }} className="animate-fade-up-delay-1">

            {/* Category row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", marginBottom: "0.75rem" }}>
              <span style={{
                fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "#4ade8088", marginRight: 4,
              }}>
                {lang === "en" ? "Category" : "Categorie"}
              </span>

              <button onClick={clearFilters} style={filterBtnStyle(!hasFilters)}>
                {tr.all[lang]}
              </button>

              {ALL_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => toggleCat(cat)}
                  style={filterBtnStyle(activeCats.has(cat), CAT_COLORS[cat])}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Stack toggle */}
            <div style={{ marginTop: "0.85rem" }}>
              <button
                onClick={() => setShowStack(s => !s)}
                style={filterBtnStyle(activeTechs.size > 0)}
              >
                {lang === "en" ? "Filter by tech" : "Filtrer par techno"}
                <span style={{ fontSize: "0.7rem" }}>{showStack ? "▲" : "▼"}</span>
                {activeTechs.size > 0 && (
                  <span style={{
                    fontSize: "0.65rem", fontWeight: 800,
                    background: "#22c55e", color: "#061a0d",
                    borderRadius: 999, padding: "1px 7px",
                  }}>
                    {activeTechs.size}
                  </span>
                )}
              </button>

              {showStack && (
                <div className="animate-fade-up" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "0.85rem" }}>
                  {ALL_TECHS.map(tech => (
                    <button
                      key={tech}
                      onClick={() => toggleTech(tech)}
                      style={filterBtnStyle(activeTechs.has(tech))}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {hasFilters && (
              <p style={{ color: "#6ee7a0", fontSize: "0.82rem", marginTop: "0.75rem" }}>
                {filtered.length} {lang === "en" ? "project(s) found" : "projet(s) trouve(s)"}
                <button
                  onClick={clearFilters}
                  style={{
                    marginLeft: 12, color: "#22c55e", background: "none",
                    border: "none", cursor: "pointer", fontSize: "0.8rem",
                    textDecoration: "underline", fontFamily: "inherit",
                  }}
                >
                  {lang === "en" ? "Clear all" : "Effacer tout"}
                </button>
              </p>
            )}
          </div>

          {/* Grid */}
          <div
            className="animate-fade-up-delay-2"
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.25rem" }}
          >
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} lang={lang} tr={tr} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "5rem 0", color: "#6ee7a0" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌿</div>
              <p style={{ marginBottom: "1.5rem" }}>
                {lang === "en" ? "No projects match these filters." : "Aucun projet ne correspond."}
              </p>
              <button
                onClick={clearFilters}
                style={{ ...filterBtnStyle(false), border: "1px solid rgba(34,197,94,0.5)", color: "#22c55e", padding: "10px 24px" }}
              >
                {lang === "en" ? "Reset filters" : "Reinitialiser"}
              </button>
            </div>
          )}

          <div className="flower-divider" style={{ marginTop: "4rem" }}>
            <svg width="20" height="20" viewBox="0 0 100 100">
              {[0,72,144,216,288].map(d => (
                <ellipse key={d} cx="50" cy="20" rx="10" ry="20" fill="#10843f" opacity="0.8"
                  transform={`rotate(${d} 50 50)`} />
              ))}
              <circle cx="50" cy="50" r="11" fill="#10843f" />
            </svg>
          </div>
        </div>
      </main>

      <Footer lang={lang} />
    </>
  );
}

function ProjectCard({ project, lang, tr }: {
  project: Project; lang: Lang; tr: typeof t.projects;
}) {
  const chip: React.CSSProperties = {
    fontSize: "0.68rem", fontWeight: 700, padding: "3px 10px", borderRadius: 999,
    background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)",
    color: "#86efac", display: "inline-flex", alignItems: "center", gap: 4, whiteSpace: "nowrap",
  };
  const demoChip: React.CSSProperties = {
    ...chip, background: "rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.5)", color: "#22c55e",
  };

  return (
    <Link
      href={`/projects/${project.id}`}
      className="glass-card"
      style={{ padding: "1.4rem", display: "flex", flexDirection: "column", cursor: "pointer", minHeight: 260, textDecoration: "none" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.9rem" }}>
        <span style={{ fontSize: "2.2rem", lineHeight: 1 }}>{project.emoji}</span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "flex-end" }}>
          {project.categories.map(cat => (
            <span key={cat} style={{
              fontSize: "0.68rem", fontWeight: 700, padding: "2px 9px", borderRadius: 999,
              background: (CAT_COLORS[cat] || "#22c55e") + "18",
              color: CAT_COLORS[cat] || "#22c55e",
              border: `1px solid ${(CAT_COLORS[cat] || "#22c55e")}44`,
            }}>{cat}</span>
          ))}
        </div>
      </div>

      <h3 style={{ fontWeight: 800, fontSize: "1.1rem", color: "#ecfdf5", marginBottom: "0.3rem", lineHeight: 1.3 }}>
        {project.title}
      </h3>
      {project.highlight && (
        <p style={{ color: "#22c55e", fontSize: "0.75rem", fontWeight: 700, marginBottom: "0.6rem" }}>
          ✦ {project.highlight}
        </p>
      )}
      <p style={{ color: "#6ee7a0", fontSize: "0.85rem", lineHeight: 1.6, flex: 1, marginBottom: "0.9rem" }}>
        {project.shortDesc[lang]}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: "0.9rem" }}>
        {project.techs.slice(0, 4).map(tech => <span key={tech} className="tech-badge">{tech}</span>)}
        {project.techs.length > 4 && <span className="tech-badge">+{project.techs.length - 4}</span>}
      </div>
      <div style={{ borderTop: "1px solid rgba(34,197,94,0.12)", paddingTop: "0.8rem" }}>
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 6 }}>
          {project.report && <span style={chip}>📄 {tr.report[lang]}</span>}
          {project.ppt && <span style={chip}>📊 {tr.ppt[lang]}</span>}
          {project.video && <span style={chip}>🎬 {tr.video[lang]}</span>}
          {project.demo && <span style={demoChip}>▶️ {tr.demo[lang]}</span>}
          <span style={{ marginLeft: "auto", fontSize: "0.78rem", color: "#22c55e", fontWeight: 700, whiteSpace: "nowrap" }}>
            {lang === "en" ? "View details →" : "Voir details →"}
          </span>
        </div>
      </div>
    </Link>
  );
}
