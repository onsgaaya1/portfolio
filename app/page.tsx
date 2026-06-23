"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowerBg from "@/components/FlowerBg";
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
  { value: "13", label: { en: "Projects", fr: "Projets" } },
  { value: "5",  label: { en: "AI Models", fr: "Modèles IA" } },
  { value: "Bac+7", label: { en: "Degree path", fr: "Parcours" } },
  { value: "4",  label: { en: "Platforms", fr: "Plateformes" } },
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
        <FlowerBg density="lush" />

        {/* ─── HERO ─── */}
        <section className="section pt-24" style={{ position: "relative", zIndex: 1, paddingBottom: "1rem" }}>

          {/* Photo + name */}
          <div className="animate-fade-up" style={{
            display: "grid", gridTemplateColumns: "auto 1fr",
            gap: "2.5rem", alignItems: "center", maxWidth: 780,
          }}>
            <div className="glow-ring" style={{
              width: 120, height: 120, borderRadius: "50%",
              overflow: "hidden", border: "3px solid #22c55e", flexShrink: 0,
            }}>
              <Image src="/profile.jpg" alt="Ons Gaaya" width={120} height={120}
                style={{ objectFit: "cover", width: "100%", height: "100%" }} priority />
            </div>
            <div>
              <p style={{ fontSize: "0.66rem", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#22c55e", marginBottom: "0.5rem" }}>
                ✦ {lang === "en" ? "Portfolio" : "Portefeuille"}
              </p>
              <h1 style={{ fontWeight: 900, fontSize: "clamp(2.2rem, 6vw, 3.5rem)", color: "#ecfdf5", lineHeight: 1.1, marginBottom: "0.6rem" }}>
                Ons Gaaya
              </h1>
              <p style={{ color: "#22c55e", fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>
                {lang === "en" ? "Software Engineer · Full-Stack · AI · Mobile" : "Ingénieure Logiciel · Full-Stack · IA · Mobile"}
              </p>
              <p style={{ color: "#86efac", fontSize: "0.88rem", lineHeight: 1.6, maxWidth: 480 }}>
                {lang === "en"
                  ? "Final-year Engineering student at EPI Digital School, Sousse. Building AI-powered apps across web, mobile & data."
                  : "Étudiante en dernière année Cycle Ingénieur à l'EPI Digital School, Sousse. Je construis des apps IA sur web, mobile & data."}
              </p>
            </div>
          </div>

          {/* ─── VERSE 58:11 — between title and CTA ─── */}
          <div className="animate-fade-up-delay-1" style={{
            maxWidth: 680, marginTop: "2rem",
            background: "linear-gradient(135deg, rgba(212,168,83,0.07), rgba(34,197,94,0.05))",
            border: "1px solid rgba(212,168,83,0.25)",
            borderRadius: 16, padding: "1.5rem 2rem",
            textAlign: "center", position: "relative",
          }}>
            {/* Corner flowers */}
            <svg width="24" height="24" viewBox="0 0 100 100" style={{ position: "absolute", top: 8, left: 8, opacity: 0.5 }}>
              {[0,72,144,216,288].map(d => <ellipse key={d} cx="50" cy="22" rx="10" ry="20" fill="#d4a853" opacity="0.8" transform={`rotate(${d} 50 50)`} />)}
              <circle cx="50" cy="50" r="11" fill="#f5f0dc" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 100 100" style={{ position: "absolute", top: 8, right: 8, opacity: 0.5, transform: "scaleX(-1)" }}>
              {[0,72,144,216,288].map(d => <ellipse key={d} cx="50" cy="22" rx="10" ry="20" fill="#22c55e" opacity="0.8" transform={`rotate(${d} 50 50)`} />)}
              <circle cx="50" cy="50" r="11" fill="#f5f0dc" />
            </svg>

            <p style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#d4a853", marginBottom: "0.9rem" }}>
              ✦ {VERSE.ref} ✦
            </p>
            <p style={{ fontFamily: "serif", fontSize: "clamp(1.1rem, 3vw, 1.5rem)", color: "#f5f0dc", lineHeight: 1.9, direction: "rtl", marginBottom: "0.7rem", fontWeight: 600 }}>
              {VERSE.ar}
            </p>
            <p style={{ fontStyle: "italic", color: "#4ade80", fontSize: "0.8rem", marginBottom: "0.6rem", letterSpacing: "0.02em" }}>
              {VERSE.phonetic}
            </p>
            <p style={{ color: "#86efac", fontSize: "0.88rem", lineHeight: 1.6, fontWeight: 500 }}>
              {lang === "en" ? `"${VERSE.en}"` : `« ${VERSE.fr} »`}
            </p>
          </div>

          {/* CTA buttons */}
          <div className="animate-fade-up-delay-2" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
            <Link href="/projects" className="btn-primary">
              {lang === "en" ? "View Projects" : "Voir les projets"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a href="/CV_Ons_Gaaya.pdf" download className="btn-outline">⬇ CV</a>
            <Link href="/contact" className="btn-outline">
              {lang === "en" ? "Contact" : "Contact"}
            </Link>
          </div>

          {/* Status badge */}
          <div className="animate-fade-up-delay-2" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)",
            borderRadius: 999, padding: "8px 18px", marginTop: "1.5rem",
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", animation: "pulse 2s infinite" }} />
            <span style={{ color: "#86efac", fontSize: "0.82rem", fontWeight: 600 }}>
              {lang === "en" ? "Open to internship — Sousse & Remote 🌿" : "Disponible pour un stage — Sousse & Remote 🌿"}
            </span>
          </div>
        </section>

        {/* ─── STATS ─── */}
        <section className="section" style={{ position: "relative", zIndex: 1, paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
          <div className="animate-fade-up-delay-2" style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", maxWidth: 700,
          }}>
            {stats.map(s => (
              <div key={s.value} className="glass-card" style={{ padding: "1rem", textAlign: "center" }}>
                <p style={{ fontWeight: 900, fontSize: "1.8rem", color: "#22c55e", lineHeight: 1 }}>{s.value}</p>
                <p style={{ color: "#86efac", fontSize: "0.72rem", fontWeight: 700, marginTop: "0.3rem" }}>{s.label[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── FEATURED WORK ─── */}
        <section className="section" style={{ position: "relative", zIndex: 1, paddingTop: "2rem" }}>
          <div className="animate-fade-up-delay-3">
            <div style={{ marginBottom: "1.75rem" }}>
              <div className="accent-bar" />
              <h2 style={{ fontWeight: 900, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#ecfdf5" }}>
                {lang === "en" ? "A taste of my work" : "Un aperçu de mon travail"}
              </h2>
              <p style={{ color: "#6ee7a0", fontSize: "0.88rem", marginTop: "0.4rem" }}>
                {lang === "en" ? "AI · Full-Stack · Mobile — built with care" : "IA · Full-Stack · Mobile — conçu avec soin"}
              </p>
            </div>

            {/* ─── VIDEO 3/4 width centered, autoplay on scroll ─── */}
            <div ref={videoRef} style={{ maxWidth: "75%", margin: "0 auto 2rem" }}>
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
                {lang === "en" ? "View all 13 projects →" : "Voir mes 13 projets →"}
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
