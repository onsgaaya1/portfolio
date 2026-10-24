"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CurrentProjects from "@/components/CurrentProjects";
import ProfileOrbit from "@/components/ProfileOrbit";
import VerseFrame from "@/components/VerseFrame";
import { Lang, projects } from "@/lib/data";

const FEATURED_IDS = ["moodi", "sentiment-yelp", "stock-dashboard"];
// autoplay=1&mute=1 : starts playing muted when visible
const MOODI_VIDEO_LAZY = "https://www.youtube.com/embed/AFN2Tr1aT84?autoplay=1&mute=1&rel=0&modestbranding=1";
const MOODI_VIDEO_IDLE = "https://www.youtube.com/embed/AFN2Tr1aT84?rel=0&modestbranding=1";

const CAT_COLORS: Record<string, string> = {
  "AI/ML/DL": "#22c55e", "Web": "#86efac", "Mobile": "#4ade80",
  "Game": "#d4a853", "Data": "#f472b6",
};

const stats = [
  { value: "15", label: { en: "Projects", fr: "Projets" } },
  { value: "6",  label: { en: "AI Models", fr: "Modèles IA" } },
  { value: "8",  label: { en: "Years of study", fr: "Années d'études" } },
  { value: "4",  label: { en: "Web · Mobile · Data · Game", fr: "Web · Mobile · Data · Game" } },
];

const VERSE = {
  ar: "﴿يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ﴾",
  ref: "AL QURAN 58:11",
  phonetic: "Yarfa'i-llāhu-lladhīna āmanū minkum wa-lladhīna ūtu-l-'ilma darajāt",
  en: "Allah will raise those who have believed among you and those who were given knowledge, by degrees.",
  fr: "Allah élèvera en degrés ceux d'entre vous qui auront cru et ceux qui auront reçu le savoir.",
};

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");
  const [videoSrc, setVideoSrc] = useState(MOODI_VIDEO_IDLE);
  const videoRef = useRef<HTMLDivElement>(null);

  // Autoplay muted when scrolled into view
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVideoSrc(entry.isIntersecting ? MOODI_VIDEO_LAZY : MOODI_VIDEO_IDLE);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const featured = FEATURED_IDS
    .map(id => projects.find(p => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <Navbar lang={lang} onToggleLang={() => setLang(lang === "en" ? "fr" : "en")} />

      <main style={{ position: "relative", overflow: "hidden" }}>
        {/* ─── HERO ─── */}
        <section className="section pt-20" style={{ position: "relative", zIndex: 1, paddingBottom: "0.5rem", paddingTop: "5rem" }}>
          <div className="home-hero animate-fade-up">
            <ProfileOrbit />
            <div>
              <p style={{ fontSize: "0.66rem", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#22c55e", marginBottom: "0.5rem" }}>
                ✦ {lang === "en" ? "Portfolio" : "Portefeuille"}
              </p>
              <h1 style={{ fontWeight: 900, fontSize: "clamp(2.2rem, 6vw, 3.5rem)", color: "#ecfdf5", lineHeight: 1.1, marginBottom: "0.6rem" }}>
                Ons Gaaya
              </h1>
              <p style={{ color: "#22c55e", fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>
                {lang === "en" ? "Software & AI Engineer — Tech & Business profile" : "Ingénieure logicielle & IA — Profil tech & business"}
              </p>
              <p style={{ color: "#86efac", fontSize: "0.88rem", lineHeight: 1.6, maxWidth: 480 }}>
                {lang === "en"
                  ? "5th-year Software Engineering student at EPI Digital School Sousse, with eight years of higher education in Business, ICT and Engineering. Full-stack, AI & mobile."
                  : "Étudiante en 5e année Génie Logiciel à l'EPI Digital School Sousse, huit ans d'études supérieures en Business, TIC et Ingénierie. Full-stack, IA & mobile."}
              </p>

              <div className="home-cta animate-fade-up-delay-2">
                <Link href="/projects" className="btn-primary">
                  {lang === "en" ? "View Projects" : "Voir les projets"}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <a href="/CV_Ons_Gaaya.pdf" download className="btn-outline">⬇ CV</a>
                <Link href="/contact" className="btn-outline">Contact</Link>
              </div>

              <div className="animate-fade-up-delay-2" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)",
                borderRadius: 999, padding: "6px 16px", marginTop: "1rem",
              }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", animation: "pulse 2s infinite" }} />
                <span style={{ color: "#86efac", fontSize: "0.82rem", fontWeight: 600 }}>
                  {lang === "en" ? "Open to internship — Sousse & Remote 🌿" : "Disponible pour un stage — Sousse & Remote 🌿"}
                </span>
              </div>
            </div>
          </div>

          {/* ─── VERSE 58:11 ─── */}
          <div className="animate-fade-up-delay-1" style={{ maxWidth: 720, margin: "0.9rem auto 0" }}>
            <VerseFrame
              arabic={VERSE.ar} en={VERSE.en} fr={VERSE.fr} lang={lang}
              surah={{ en: "Al-Mujādila", fr: "Al-Mujâdala" }} refNum="58:11" highlight="الْعِلْمَ"
            />
          </div>
        </section>

        {/* ─── STATS ─── */}
        <section className="section" style={{ position: "relative", zIndex: 1, paddingTop: "1rem", paddingBottom: "1rem" }}>
          <div className="home-stats animate-fade-up-delay-2" style={{
            display: "grid", gap: "1rem",
          }}>
            {stats.map(s => (
              <div key={s.value} className="glass-card" style={{ padding: "0.6rem", textAlign: "center" }}>
                <p style={{ fontWeight: 900, fontSize: "1.5rem", color: "#22c55e", lineHeight: 1 }}>{s.value}</p>
                <p style={{ color: "#86efac", fontSize: "0.72rem", fontWeight: 700, marginTop: "0.3rem" }}>{s.label[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── FEATURED WORK ─── */}
        <section className="section" style={{ position: "relative", zIndex: 1, paddingTop: "2rem" }}>
          <div className="animate-fade-up-delay-3">
            {/* ─── VIDEO 3/4 width centered, autoplay on scroll ─── */}
            <div ref={videoRef} className="video-wrapper" style={{ maxWidth: "75%", margin: "0 auto 3rem" }}>
              <div className="glass-card" style={{ padding: "1rem" }}>
                <p style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4ade8088", marginBottom: "0.75rem" }}>
                  🎬 {lang === "en" ? "Live demo — Moodi (AI Emotional Tracking)" : "Démo live — Moodi (Suivi émotionnel par IA)"}
                </p>
                <div style={{ borderRadius: 12, overflow: "hidden", aspectRatio: "16/9", border: "1px solid rgba(34,197,94,0.2)" }}>
                  <iframe
                    key={videoSrc}
                    src={videoSrc}
                    style={{ width: "100%", height: "100%", border: "none" }}
                    allowFullScreen
                    title="Moodi — AI Emotional Tracking demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
                {/* Moodi info below video */}
                <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
                  <div>
                    <p style={{ fontWeight: 800, color: "#ecfdf5", fontSize: "1rem" }}>💎 Moodi — {lang === "en" ? "AI Emotional Tracking" : "Suivi émotionnel par IA"}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 6 }}>
                      {["Angular 20", "ASP.NET Core 8", "DistilBERT", "FastAPI", "React Native"].map(tech => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="/projects/moodi" className="btn-outline" style={{ fontSize: "0.82rem", padding: "7px 16px", whiteSpace: "nowrap" }}>
                    {lang === "en" ? "View project →" : "Voir le projet →"}
                  </Link>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "3rem" }}>
              <CurrentProjects lang={lang} />
            </div>
            <div style={{ marginBottom: "1.75rem" }}>
              <div className="accent-bar" />
              <h2 style={{ fontWeight: 900, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#ecfdf5" }}>
                {lang === "en" ? "A taste of my work" : "Un aperçu de mon travail"}
              </h2>
              <p style={{ color: "#6ee7a0", fontSize: "0.88rem", marginTop: "0.4rem" }}>
                {lang === "en" ? "AI · Full-Stack · Mobile — built with care" : "IA · Full-Stack · Mobile — conçu avec soin"}
              </p>
            </div>

            {/* 3 featured mini-cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              {featured.map(project => (
                <Link key={project.id} href={`/projects/${project.id}`} className="glass-card"
                  style={{ padding: "1.25rem", display: "flex", flexDirection: "column", textDecoration: "none", minHeight: 160 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.6rem" }}>
                    <span style={{ fontSize: "1.7rem" }}>{project.emoji}</span>
                    {project.categories.slice(0, 1).map(cat => (
                      <span key={cat} style={{
                        fontSize: "0.6rem", fontWeight: 700, padding: "2px 7px", borderRadius: 999,
                        background: (CAT_COLORS[cat] || "#22c55e") + "18",
                        color: CAT_COLORS[cat] || "#22c55e",
                        border: `1px solid ${(CAT_COLORS[cat] || "#22c55e")}44`,
                      }}>{cat}</span>
                    ))}
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: "0.95rem", color: "#ecfdf5", marginBottom: "0.3rem" }}>{project.title}</h3>
                  {project.highlight && (
                    <p style={{ color: "#22c55e", fontSize: "0.7rem", fontWeight: 700, marginBottom: "0.4rem" }}>✦ {project.highlight}</p>
                  )}
                  <p style={{ color: "#6ee7a0", fontSize: "0.78rem", lineHeight: 1.5, flex: 1 }}>{project.shortDesc[lang]}</p>
                  <span style={{ marginTop: "0.75rem", fontSize: "0.74rem", color: "#22c55e", fontWeight: 700 }}>
                    {lang === "en" ? "View details →" : "Voir détails →"}
                  </span>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link href="/projects" className="btn-outline" style={{ display: "inline-flex" }}>
                {lang === "en" ? "View all 15 projects →" : "Voir mes 15 projets →"}
              </Link>
            </div>

          </div>
        </section>

        {/* Flower divider */}
        <div className="section" style={{ position: "relative", zIndex: 1, paddingTop: "1rem" }}>
          <div className="flower-divider">
            <svg width="22" height="22" viewBox="0 0 100 100">
              {[0,60,120,180,240,300].map(d => (
                <ellipse key={d} cx="50" cy="20" rx="11" ry="20" fill="#22c55e" opacity="0.7" transform={`rotate(${d} 50 50)`} />
              ))}
              <circle cx="50" cy="50" r="13" fill="#22c55e" />
            </svg>
          </div>
        </div>

      </main>

      <Footer lang={lang} />

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @media (max-width: 640px) {
          .video-wrapper { max-width: 100% !important; }
        }
      `}</style>
    </>
  );
}
