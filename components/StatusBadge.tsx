import { Lang, Project, t } from "@/lib/data";

/** Badge d'état d'un projet : « Terminé » (vert) ou « En développement » (or, point qui pulse). */
export default function StatusBadge({ status, lang, compact = false }: {
  status: Project["status"]; lang: Lang; compact?: boolean;
}) {
  const live = status === "in-progress";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      fontSize: compact ? "0.62rem" : "0.7rem", fontWeight: 800,
      padding: compact ? "2px 9px" : "3px 12px", borderRadius: 999, letterSpacing: "0.06em",
      background: live ? "rgba(212,168,83,0.14)" : "rgba(34,197,94,0.12)",
      color: live ? "#f1d58a" : "#22c55e",
      border: `1px solid ${live ? "rgba(212,168,83,0.5)" : "rgba(34,197,94,0.3)"}`,
      whiteSpace: "nowrap",
    }}>
      {live
        ? <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#f1d58a", animation: "pulse 2s infinite" }} />
        : "✓"}
      {live ? t.projects.status_progress[lang] : t.projects.status_done[lang]}
    </span>
  );
}
