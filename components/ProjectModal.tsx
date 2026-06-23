"use client";

import { useEffect } from "react";
import { Project, Lang, t } from "@/lib/data";

interface ProjectModalProps {
  project: Project;
  lang: Lang;
  onClose: () => void;
}

export default function ProjectModal({ project, lang, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
    >
      {/* Flower decorations inside modal backdrop */}
      <div style={{ position: "absolute", top: 20, right: 40, opacity: 0.08, pointerEvents: "none" }}>
        <FlowerIcon size={120} />
      </div>
      <div style={{ position: "absolute", bottom: 20, left: 30, opacity: 0.06, pointerEvents: "none" }}>
        <FlowerIcon size={90} rotate={30} />
      </div>

      <div style={{
        width: "100%", maxWidth: 700, maxHeight: "90vh", overflowY: "auto",
        background: "rgba(6, 26, 13, 0.92)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(34, 197, 94, 0.25)",
        borderRadius: 24,
        position: "relative",
        boxShadow: "0 40px 100px rgba(16, 132, 63, 0.25), 0 0 0 1px rgba(34,197,94,0.1)",
      }}>

        {/* Corner flower in modal */}
        <div style={{ position: "absolute", top: -12, right: -12, opacity: 0.15, pointerEvents: "none" }}>
          <FlowerIcon size={80} />
        </div>

        {/* Header */}
        <div style={{ padding: "2rem 2rem 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.6rem" }}>
                <span style={{ fontSize: "2.8rem", lineHeight: 1 }}>{project.emoji}</span>
                <span style={{
                  fontSize: "0.7rem", fontWeight: 800, padding: "3px 12px", borderRadius: 999,
                  background: "rgba(34,197,94,0.12)", color: "#22c55e",
                  border: "1px solid rgba(34,197,94,0.3)", letterSpacing: "0.06em",
                }}>
                  ✓ {t.projects.status_done[lang]}
                </span>
              </div>
              <h2 style={{ fontWeight: 900, fontSize: "1.7rem", color: "#ecfdf5", lineHeight: 1.2 }}>
                {project.title}
              </h2>
              {project.highlight && (
                <p style={{ color: "#22c55e", fontSize: "0.85rem", fontWeight: 700, marginTop: "0.3rem" }}>
                  ✦ {project.highlight}
                </p>
              )}
            </div>
            <button onClick={onClose} style={{
              color: "#6ee7a0", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)",
              borderRadius: 8, width: 36, height: 36, fontSize: "1.4rem", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              marginLeft: "1rem",
            }}>
              ×
            </button>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "1.5rem 2rem 2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

          {/* Flower divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.2))" }} />
            <FlowerIcon size={18} />
            <div style={{ flex: 1, height: 1, background: "linear-gradient(270deg, transparent, rgba(34,197,94,0.2))" }} />
          </div>

          {/* Description */}
          <p style={{ color: "#86efac", lineHeight: 1.75, fontSize: "0.95rem" }}>
            {project.longDesc[lang]}
          </p>

          {/* Tech Stack */}
          <div>
            <p style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4ade8088", marginBottom: "0.65rem" }}>
              {t.projects.techs[lang]}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {project.techs.map(tech => <span key={tech} className="tech-badge">{tech}</span>)}
            </div>
          </div>

          {/* Video */}
          {project.video ? (
            <div>
              <p style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4ade8088", marginBottom: "0.65rem" }}>
                🎬 {lang === "en" ? "Demo Video" : "Vidéo Démo"}
              </p>
              <div style={{ borderRadius: 14, overflow: "hidden", aspectRatio: "16/9", border: "1px solid rgba(34,197,94,0.2)" }}>
                <iframe src={project.video} style={{ width: "100%", height: "100%", border: "none" }} allowFullScreen title={`${project.title} demo`} />
              </div>
            </div>
          ) : (
            <div className="media-placeholder">
              <span style={{ fontSize: "1.8rem" }}>🎬</span>
              <span>{lang === "en" ? "Demo video — coming soon" : "Vidéo démo — à venir"}</span>
              <span style={{ fontSize: "0.7rem", opacity: 0.5 }}>
                {lang === "en" ? "Add YouTube/Drive link in lib/data.ts" : "Ajouter un lien dans lib/data.ts"}
              </span>
            </div>
          )}

          {/* Documents */}
          {(project.report || (project as any).ppt) && (
            <div>
              <p style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4ade8088", marginBottom: "0.75rem" }}>
                📁 {lang === "en" ? "Documents" : "Documents"}
              </p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {project.report && (
                  <a href={project.report} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.9rem 1.2rem",
                      borderRadius: 12, background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)",
                      color: "#ecfdf5", textDecoration: "none", flex: 1, minWidth: 140,
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(34,197,94,0.5)")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(34,197,94,0.2)")}
                  >
                    <span style={{ fontSize: "1.5rem" }}>📄</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.88rem" }}>Rapport</div>
                      <div style={{ color: "#6ee7a0", fontSize: "0.72rem" }}>PDF · Google Drive</div>
                    </div>
                  </a>
                )}
                {(project as any).ppt && (
                  <a href={(project as any).ppt} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.9rem 1.2rem",
                      borderRadius: 12, background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)",
                      color: "#ecfdf5", textDecoration: "none", flex: 1, minWidth: 140,
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(34,197,94,0.5)")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(34,197,94,0.2)")}
                  >
                    <span style={{ fontSize: "1.5rem" }}>📊</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.88rem" }}>Présentation</div>
                      <div style={{ color: "#6ee7a0", fontSize: "0.72rem" }}>PPT · Google Drive</div>
                    </div>
                  </a>
                )}
              </div>
            </div>
          )}

          {!project.report && !(project as any).ppt && (
            <div className="media-placeholder" style={{ flexDirection: "row", justifyContent: "flex-start", gap: "0.75rem" }}>
              <span style={{ fontSize: "1.5rem" }}>📁</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.88rem", color: "#6ee7a0" }}>
                  {lang === "en" ? "No documents yet" : "Pas encore de documents"}
                </div>
                <div style={{ fontSize: "0.7rem", opacity: 0.5, marginTop: 2 }}>
                  {lang === "en" ? "Add report/PPT links in lib/data.ts" : "Ajouter les liens dans lib/data.ts"}
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingTop: "0.75rem", borderTop: "1px solid rgba(34,197,94,0.12)" }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: "0.85rem", padding: "9px 20px" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                {t.projects.github[lang]}
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "0.85rem", padding: "9px 20px" }}>
                🔗 {t.projects.demo[lang]}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowerIcon({ size = 40, rotate = 0 }: { size?: number; rotate?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ transform: `rotate(${rotate}deg)`, display: "block" }}>
      {[0,60,120,180,240,300].map(d => (
        <ellipse key={d} cx="50" cy="20" rx="11" ry="20" fill="#22c55e" opacity={d < 180 ? 0.9 : 0.6} transform={`rotate(${d} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="13" fill="#22c55e" />
      <circle cx="50" cy="50" r="6" fill="#ecfdf5" opacity="0.3" />
    </svg>
  );
}
