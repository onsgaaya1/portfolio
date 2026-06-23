"use client";

import { Lang, Verse } from "@/lib/data";

// ─────────────────────────────────────────────
// Reusable Quranic verse — two looks:
//   variant="hero"  → large, centered (Home)
//   variant="card"  → elegant glass card (About)
// Arabic renders right-to-left; translit + translation follow `lang`.
// ─────────────────────────────────────────────
export default function QuranVerse({
  verse,
  lang,
  variant = "card",
}: {
  verse: Verse;
  lang: Lang;
  variant?: "hero" | "card";
}) {
  const isHero = variant === "hero";

  return (
    <div
      className={isHero ? "" : "glass-card"}
      style={{
        position: "relative",
        textAlign: "center",
        padding: isHero ? "2.25rem 1.5rem" : "1.75rem 1.5rem",
        borderRadius: 20,
        overflow: "hidden",
        ...(isHero
          ? {
              background:
                "linear-gradient(135deg, rgba(16,132,63,0.10), rgba(34,197,94,0.04))",
              border: "1px solid rgba(34,197,94,0.18)",
            }
          : {}),
      }}
    >
      {/* soft decorative flower, top-right */}
      <div style={{ position: "absolute", top: -14, right: -14, opacity: 0.08, pointerEvents: "none" }}>
        <svg width={isHero ? 110 : 80} height={isHero ? 110 : 80} viewBox="0 0 100 100">
          {[0, 60, 120, 180, 240, 300].map(d => (
            <ellipse key={d} cx="50" cy="20" rx="11" ry="20" fill="#22c55e" transform={`rotate(${d} 50 50)`} />
          ))}
          <circle cx="50" cy="50" r="13" fill="#22c55e" />
        </svg>
      </div>

      {/* tiny label */}
      <p
        style={{
          fontSize: "0.62rem",
          fontWeight: 800,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#d4a853",
          marginBottom: isHero ? "1.1rem" : "0.9rem",
        }}
      >
        ✦ {lang === "en" ? "Words to grow by" : "Une lumière qui guide"} ✦
      </p>

      {/* Arabic */}
      <p
        lang="ar"
        dir="rtl"
        style={{
          fontSize: isHero ? "clamp(1.5rem, 4.5vw, 2.3rem)" : "clamp(1.3rem, 4vw, 1.7rem)",
          lineHeight: 2,
          fontWeight: 700,
          color: "#ecfdf5",
          marginBottom: "1rem",
        }}
      >
        {verse.arabic}
      </p>

      {/* Transliteration */}
      <p
        style={{
          fontStyle: "italic",
          color: "#6ee7a0",
          fontSize: isHero ? "0.95rem" : "0.85rem",
          marginBottom: "0.7rem",
          letterSpacing: "0.01em",
        }}
      >
        {verse.translit}
      </p>

      {/* Translation */}
      <p
        style={{
          color: "#86efac",
          fontSize: isHero ? "1.02rem" : "0.92rem",
          lineHeight: 1.7,
          maxWidth: 620,
          margin: "0 auto 0.9rem",
        }}
      >
        “{verse.translation[lang]}”
      </p>

      {/* Reference */}
      <p
        style={{
          fontSize: "0.78rem",
          fontWeight: 700,
          color: "#22c55e",
        }}
      >
        — {verse.ref[lang]}
      </p>
    </div>
  );
}
