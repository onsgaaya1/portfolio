"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowerBg from "@/components/FlowerBg";
import { Lang, t, projects } from "@/lib/data";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [lang, setLang] = useState<Lang>("en");
  const [preview, setPreview] = useState<"report" | "ppt" | null>(null); // inline PDF preview

  const project = projects.find(p => p.id === id);
  const tr = t.projects;

  if (!project) {
    return (
      <>
        <Navbar lang={lang} onToggleLang={() => setLang(lang === "en" ? "fr" : "en")} />
        <main className="pt-32 section" style={{ textAlign: "center", paddingBottom: "5rem" }}>
          <p style={{ fontSize: "3rem" }}>🌿</p>
          <h1 style={{ color: "#ecfdf5", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem" }}>
            {lang === "en" ? "Project not found" : "Projet introuvable"}
          </h1>
          <Link href="/projects" className="btn-primary" style={{ display: "inline-flex" }}>
            ← {tr.back[lang]}
          </Link>
        </main>
        <Footer lang={lang} />
      </>
    );
  }

  const hasDocs = project.report || project.ppt;

  return (
    <>
      <Navbar lang={lang} onToggleLang={() => setLang(lang === "en" ? "fr" : "en")} />

      <main className="pt-24" style={{ position: "relative", overflow: "hidden", paddingBottom: "5rem" }}>
        <FlowerBg density="normal" />

        <div className="section" style={{ position: "relative", zIndex: 1, maxWidth: 820 }}>

          {/* Back link */}
          <Link href="/projects"
            className="animate-fade-up"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              color: "#6ee7a0", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600,
              marginBottom: "1.5rem",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {tr.back[lang]}
          </Link>

          {/* Header */}
          <div className="glass-card animate-fade-up-delay-1" style={{ padding: "2rem", marginBottom: "1.5rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -10, right: -10, opacity: 0.1, pointerEvents: "none" }}>
              <FlowerIcon size={90} />
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <span style={{ fontSize: "3rem", lineHeight: 1 }}>{project.emoji}</span>
              <div style={{ flex: 1, minWidth: 200 }}>
                <span style={{
                  fontSize: "0.7rem", fontWeight: 800, padding: "3px 12px", borderRadius: 999,
                  background: "rgba(34,197,94,0.12)", color: "#22c55e",
                  border: "1px solid rgba(34,197,94,0.3)", letterSpacing: "0.06em",
                  display: "inline-block", marginBottom: "0.6rem",
                }}>
                  ✓ {tr.status_done[lang]}
                </span>
                <h1 style={{ fontWeight: 900, fontSize: "1.9rem", color: "#ecfdf5", lineHeight: 1.2 }}>
                  {project.title}
                </h1>
                {project.highlight && (
                  <p style={{ color: "#22c55e", fontSize: "0.9rem", fontWeight: 700, marginTop: "0.4rem" }}>
                    ✦ {project.highlight}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="glass-card animate-fade-up-delay-2" style={{ padding: "1.75rem", marginBottom: "1.5rem" }}>
            <p style={{ color: "#86efac", lineHeight: 1.8, fontSize: "0.97rem" }}>
              {project.longDesc[lang]}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="glass-card animate-fade-up-delay-2" style={{ padding: "1.75rem", marginBottom: "1.5rem" }}>
            <p style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4ade8088", marginBottom: "0.75rem" }}>
              {tr.techs[lang]}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {project.techs.map(tech => <span key={tech} className="tech-badge">{tech}</span>)}
            </div>
          </div>

          {/* Video — only if present */}
          {project.video && (
            <div className="glass-card animate-fade-up-delay-3" style={{ padding: "1.75rem", marginBottom: "1.5rem" }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4ade8088", marginBottom: "0.9rem" }}>
                🎬 {lang === "en" ? "Demo Video" : "Vidéo Démo"}
              </p>
              <div style={{ borderRadius: 14, overflow: "hidden", aspectRatio: "16/9", border: "1px solid rgba(34,197,94,0.2)" }}>
                <iframe
                  src={project.video}
                  style={{ width: "100%", height: "100%", border: "none" }}
                  allowFullScreen
                  title={`${project.title} demo`}
                />
              </div>
            </div>
          )}

          {/* Documents — report + presentation, now with inline PDF preview */}
          {hasDocs && (
            <div className="glass-card animate-fade-up-delay-3" style={{ padding: "1.75rem", marginBottom: "1.5rem" }}>
              <p style={{ fontSize: "0.78rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#22c55e", marginBottom: "0.4rem" }}>
                📁 {lang === "en" ? "Report & Presentation" : "Rapport & Présentation"}
              </p>
              <p style={{ color: "#6ee7a0", fontSize: "0.82rem", marginBottom: "1.1rem" }}>
                {lang === "en"
                  ? "Preview the documents right here — no download needed."
                  : "Aperçu des documents directement ici — aucun téléchargement requis."}
              </p>

              <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
                {project.report && (
                  <div className="doc-card">
                    <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.8rem" }}>
                      <span style={{ fontSize: "1.7rem" }}>📄</span>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: "0.92rem", color: "#ecfdf5" }}>{tr.report[lang]}</div>
                        <div style={{ color: "#6ee7a0", fontSize: "0.72rem" }}>PDF</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button
                        onClick={() => setPreview(preview === "report" ? null : "report")}
                        className={preview === "report" ? "btn-primary" : "btn-outline"}
                        style={{ padding: "8px 14px", fontSize: "0.8rem", flex: 1, justifyContent: "center" }}
                      >
                        👁️ {preview === "report"
                          ? (lang === "en" ? "Hide" : "Cacher")
                          : (lang === "en" ? "Preview" : "Aperçu")}
                      </button>
                      <a href={project.report} target="_blank" rel="noopener noreferrer" className="btn-outline"
                        title={lang === "en" ? "Open in new tab" : "Ouvrir dans un onglet"}
                        style={{ padding: "8px 13px", fontSize: "0.85rem" }}>↗</a>
                    </div>
                  </div>
                )}

                {project.ppt && (
                  <div className="doc-card">
                    <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.8rem" }}>
                      <span style={{ fontSize: "1.7rem" }}>📊</span>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: "0.92rem", color: "#ecfdf5" }}>{tr.ppt[lang]}</div>
                        <div style={{ color: "#6ee7a0", fontSize: "0.72rem" }}>PDF</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button
                        onClick={() => setPreview(preview === "ppt" ? null : "ppt")}
                        className={preview === "ppt" ? "btn-primary" : "btn-outline"}
                        style={{ padding: "8px 14px", fontSize: "0.8rem", flex: 1, justifyContent: "center" }}
                      >
                        👁️ {preview === "ppt"
                          ? (lang === "en" ? "Hide" : "Cacher")
                          : (lang === "en" ? "Preview" : "Aperçu")}
                      </button>
                      <a href={project.ppt} target="_blank" rel="noopener noreferrer" className="btn-outline"
                        title={lang === "en" ? "Open in new tab" : "Ouvrir dans un onglet"}
                        style={{ padding: "8px 13px", fontSize: "0.85rem" }}>↗</a>
                    </div>
                  </div>
                )}
              </div>

              {/* Inline PDF preview — loads only when toggled (keeps the page light) */}
              {preview && (
                <div style={{
                  marginTop: "1.25rem", borderRadius: 14, overflow: "hidden",
                  border: "1px solid rgba(34,197,94,0.3)", height: 560, background: "#0b2e17",
                }}>
                  <iframe
                    src={`${preview === "report" ? project.report : project.ppt}#view=FitH`}
                    style={{ width: "100%", height: "100%", border: "none" }}
                    title={`${project.title} ${preview} preview`}
                  />
                </div>
              )}
            </div>
          )}

          {/* Actions: GitHub + Live demo */}
          <div className="animate-fade-up-delay-4" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                {tr.github[lang]}
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                🔗 {tr.demo[lang]}
              </a>
            )}
          </div>
        </div>
      </main>

      <Footer lang={lang} />

      <style>{`
        .doc-card {
          display: flex; flex-direction: column;
          padding: 1.1rem 1.2rem; border-radius: 14px;
          background: rgba(34,197,94,0.06); border: 1px solid rgba(34,197,94,0.22);
          flex: 1; min-width: 220px;
          transition: border-color 0.2s, transform 0.2s;
        }
        .doc-card:hover { border-color: rgba(34,197,94,0.5); transform: translateY(-3px); }
      `}</style>
    </>
  );
}

function FlowerIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {[0,60,120,180,240,300].map(d => (
        <ellipse key={d} cx="50" cy="20" rx="11" ry="20" fill="#22c55e" opacity={d < 180 ? 0.9 : 0.6} transform={`rotate(${d} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="13" fill="#22c55e" />
      <circle cx="50" cy="50" r="6" fill="#ecfdf5" opacity="0.3" />
    </svg>
  );
}
