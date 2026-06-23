"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowerBg from "@/components/FlowerBg";
import { Lang, t } from "@/lib/data";

export default function AboutPage() {
  const [lang, setLang] = useState<Lang>("en");

  const skillGroups = [
    { category: "Frontend", icon: "🖥️", skills: ["Angular 20", "React.js", "Next.js", "TypeScript", "TailwindCSS", "HTML/CSS/JS"] },
    { category: "Backend", icon: "⚙️", skills: ["ASP.NET Core 8 (C#)", "Node.js / Express", "FastAPI (Python)", "Spring Boot", "PHP"] },
    { category: "Mobile", icon: "📱", skills: ["React Native / Expo", "Kotlin / Android"] },
    { category: "AI / ML / DL", icon: "🤖", skills: ["DistilBERT (HuggingFace)", "PyTorch", "Scikit-Learn", "BiLSTM", "NLP", "Groq LLaMA API"] },
    { category: "Databases", icon: "🗄️", skills: ["PostgreSQL", "MongoDB", "SQL Server", "MySQL"] },
    { category: "Tools & DevOps", icon: "🛠️", skills: ["Git / GitHub", "Docker", "Figma", "Jupyter Notebook", "Vercel", "Unity / C#"] },
  ];

  const certs = [
    { name: "NVIDIA — Fundamentals of Deep Learning", year: "March 2026", icon: "🟢" },
    { name: "AWS Academy Cloud Foundations", year: "May 2025", icon: "☁️" },
    { name: "Certiport / Pearson VUE — Entrepreneurship & Small Business", year: "2022", icon: "💼" },
  ];

  // ✅ CORRECTED education — Bac+7 total:
  // Business Admin 2019–2022 (3 ans) → Bac+3
  // ICT Préparatoire 2022–2024 (2 ans) → Bac+5
  // Cycle Ingénieur 2024–2027 (3 ans) → Bac+7 · 2nd year validated, entering 3rd & FINAL year
  const education = [
    {
      num: 3,
      degree: lang === "en"
        ? "Software Engineering — Engineering Cycle (Bac+7)"
        : "Génie Logiciel — Cycle Ingénieur (Bac+7)",
      school: "EPI Digital School, Sousse",
      years: "2024 – 2027",
      note: lang === "en"
        ? "2nd year validated · Entering final (3rd) year · Expected graduation 2027"
        : "2ème année validée · Entrée en 3ème et dernière année · Diplôme prévu 2027",
      badge: lang === "en" ? "🎓 Final year" : "🎓 Dernière année",
    },
    {
      num: 2,
      degree: lang === "en"
        ? "ICT Preparatory Cycle (Bac+5)"
        : "Cycle Préparatoire ICT (Bac+5)",
      school: "EPI Digital School, Sousse",
      years: "2022 – 2024",
      note: lang === "en" ? "✓ ICT Preparatory Graduate" : "✓ Diplômée Préparatoire ICT",
      badge: "✅",
    },
    {
      num: 1,
      degree: lang === "en"
        ? "Business Administration & Marketing (Bac+3)"
        : "Business Administration & Marketing (Bac+3)",
      school: "EPI Digital School, Sousse",
      years: "2019 – 2022",
      note: lang === "en" ? "🏆 Class of 2022 honors graduate" : "🏆 Majeure de promotion 2022",
      badge: "✅",
    },
  ];

  const clubs = [
    {
      icon: "🌸",
      name: lang === "en" ? '"Put a smile, get a smile"' : '"Put a smile, get a smile"',
      role: lang === "en" ? "Active member" : "Membre active",
      period: "2024 – 2025 · EPI Digital School",
      desc: lang === "en"
        ? "Organized donation drives (clothes, toys, sweets) for orphans at Dar Al-Yatim, Sousse, for Eid Al-Fitr. Led an 8-member team with local shop & sponsor partnerships."
        : "Collecte de dons pour les orphelins de Dar Al-Yatim à Sousse pour l'Aïd Al-Fitr. Partenariats locaux. Équipe de 8 membres.",
    },
    {
      icon: "🇺🇸",
      name: "AmCham Tunisia",
      role: lang === "en" ? "Active member" : "Membre active",
      period: "Sept. 2021 – Sept. 2022",
      desc: lang === "en"
        ? "American Chamber of Commerce in Tunisia — networking, business events & professional development."
        : "Chambre de commerce américaine en Tunisie — networking et développement professionnel.",
    },
    {
      icon: "🌍",
      name: "Enactus EPI",
      role: lang === "en" ? "Active member" : "Membre active",
      period: "Sept. 2021 – Jul. 2022",
      desc: lang === "en"
        ? "Entrepreneurial action organization using business skills to improve lives and livelihoods."
        : "Organisation entrepreneuriale agissant pour améliorer les conditions de vie via l'action collective.",
    },
  ];

  const quickFacts = [
    { label: lang === "en" ? "Location" : "Localisation", value: "Sousse, Tunisia 🇹🇳" },
    { label: lang === "en" ? "School" : "École", value: "EPI Digital School" },
    { label: lang === "en" ? "Degree path" : "Parcours", value: "Bac+7 (Business → ICT → Engineering)" },
    { label: lang === "en" ? "Current year" : "Année actuelle", value: lang === "en" ? "Final year — Engineering cycle (5th at EPI)" : "Dernière année — Cycle ingénieur" },
    { label: lang === "en" ? "Graduation" : "Diplôme prévu", value: "2027" },
    { label: "Email", value: "onsgaaya1@gmail.com" },
    { label: lang === "en" ? "Phone" : "Téléphone", value: "+216 96 997 130" },
    { label: lang === "en" ? "Languages" : "Langues", value: "Arabic · French · English · Chinese" },
  ];

  const verses = [
    {
      ar: "﴿وَمَا أُوتِيتُمْ مِنَ الْعِلْمِ إِلَّا قَلِيلًا﴾",
      ref: "AL QURAN 17:85",
      phonetic: "Wa mā ūtītum mina-l-'ilmi illā qalīlā",
      en: "And of knowledge, you have been given only a little.",
      fr: "Et de la science, il ne vous a été donné que peu.",
    },
    {
      ar: "﴿إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ﴾",
      ref: "AL QURAN 35:28",
      phonetic: "Innamā yakhsha-llāha min 'ibādihi-l-'ulamā'",
      en: "Indeed, it is only those who have knowledge among His servants who fear Allah.",
      fr: "Parmi Ses serviteurs, seuls les savants craignent Allah.",
    },
    {
      ar: "﴿رَّبِّ زِدْنِي عِلْمًا﴾",
      ref: "AL QURAN 20:114",
      phonetic: "Rabbi zidnī 'ilmā",
      en: "My Lord, increase me in knowledge.",
      fr: "Mon Seigneur, accroît mes connaissances.",
    },
    {
      ar: "﴿يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ﴾",
      ref: "AL QURAN 58:11",
      phonetic: "Yarfa'i-llāhu-lladhīna āmanū minkum wa-lladhīna ūtu-l-'ilma darajāt",
      en: "Allah will raise those who have believed among you and those who were given knowledge, by degrees.",
      fr: "Allah élèvera en degrés ceux d'entre vous qui auront cru et ceux qui auront reçu le savoir.",
    },
  ];

  return (
    <>
      <Navbar lang={lang} onToggleLang={() => setLang(lang === "en" ? "fr" : "en")} />

      <main className="pt-24" style={{ position: "relative", overflow: "hidden" }}>
        <FlowerBg density="normal" />
        <div className="section" style={{ display: "flex", flexDirection: "column", gap: "5rem", position: "relative", zIndex: 1 }}>

          {/* ─── HERO / INTRO ─── */}
          <div style={{ position: "relative" }} className="animate-fade-up">
            <FlowerBg density="lush" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start", position: "relative", zIndex: 1 }}
              className="grid-cols-1 md:grid-cols-2">

              {/* Left: photo + intro */}
              <div>
                {/* Profile photo */}
                <div style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "1.25rem" }}>
                  <div className="glow-ring" style={{ width: 88, height: 88, borderRadius: "50%", overflow: "hidden", border: "3px solid #22c55e", flexShrink: 0 }}>
                    <Image
                      src="/profile.jpg"
                      alt="Ons Gaaya"
                      width={88} height={88}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                  </div>
                  <div>
                    <h1 style={{ fontWeight: 900, fontSize: "2rem", color: "#ecfdf5", lineHeight: 1.1 }} className="accent-bar">
                      Ons Gaaya
                    </h1>
                    <p style={{ color: "#22c55e", fontWeight: 700, fontSize: "0.9rem" }}>
                      {lang === "en"
                        ? "Full-Stack · AI · Mobile Developer"
                        : "Développeuse Full-Stack · IA · Mobile"}
                    </p>
                  </div>
                </div>

                <p style={{ color: "#86efac", lineHeight: 1.75, fontSize: "0.97rem", marginBottom: "1rem" }}>
                  {lang === "en"
                    ? "Final-year Software Engineering student at EPI Digital School, Sousse, with a unique Bac+7 path — Business Administration → ICT Preparatory → Software Engineering — which gave me both technical depth and a rare business perspective."
                    : "Étudiante en dernière année Génie Logiciel à l'EPI Digital School Sousse, avec un parcours unique Bac+7 — Business Administration → ICT Préparatoire → Génie Logiciel — qui m'a donné une profondeur technique et une perspective business rare."}
                </p>

                {/* Quran verses — sacred styling with gold flower corners */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.25rem" }}>
                  {verses.map((verse) => (
                    <div key={verse.ref} style={{
                      position: "relative",
                      background: "linear-gradient(135deg, rgba(212,175,55,0.06), rgba(34,197,94,0.06))",
                      border: "1px solid rgba(212,175,55,0.3)",
                      borderRadius: 16, padding: "1.5rem 1.5rem 1.25rem",
                      overflow: "hidden",
                    }}>
                      {/* Corner flowers */}
                      <svg width="34" height="34" viewBox="0 0 100 100" style={{ position: "absolute", top: 6, left: 6, opacity: 0.55 }}>
                        {[0, 72, 144, 216, 288].map(d => (
                          <ellipse key={d} cx="50" cy="22" rx="10" ry="20" fill="#d4af37" opacity="0.8" transform={`rotate(${d} 50 50)`} />
                        ))}
                        <circle cx="50" cy="50" r="11" fill="#f5f0dc" />
                      </svg>
                      <svg width="34" height="34" viewBox="0 0 100 100" style={{ position: "absolute", top: 6, right: 6, opacity: 0.55, transform: "scaleX(-1)" }}>
                        {[0, 72, 144, 216, 288].map(d => (
                          <ellipse key={d} cx="50" cy="22" rx="10" ry="20" fill="#22c55e" opacity="0.8" transform={`rotate(${d} 50 50)`} />
                        ))}
                        <circle cx="50" cy="50" r="11" fill="#f5f0dc" />
                      </svg>
                      <svg width="26" height="26" viewBox="0 0 100 100" style={{ position: "absolute", bottom: 6, left: 6, opacity: 0.4 }}>
                        {[0, 72, 144, 216, 288].map(d => (
                          <ellipse key={d} cx="50" cy="24" rx="10" ry="18" fill="#22c55e" opacity="0.7" transform={`rotate(${d} 50 50)`} />
                        ))}
                        <circle cx="50" cy="50" r="10" fill="#d4af37" />
                      </svg>
                      <svg width="26" height="26" viewBox="0 0 100 100" style={{ position: "absolute", bottom: 6, right: 6, opacity: 0.4, transform: "scaleX(-1)" }}>
                        {[0, 72, 144, 216, 288].map(d => (
                          <ellipse key={d} cx="50" cy="24" rx="10" ry="18" fill="#d4af37" opacity="0.7" transform={`rotate(${d} 50 50)`} />
                        ))}
                        <circle cx="50" cy="50" r="10" fill="#22c55e" />
                      </svg>

                      <p style={{ position: "relative", zIndex: 1, fontSize: "1.08rem", color: "#d4af37", fontWeight: 700, textAlign: "center", marginBottom: "0.5rem", lineHeight: 1.8, direction: "rtl" }}>
                        {verse.ar}
                      </p>
                      <p style={{ position: "relative", zIndex: 1, fontSize: "0.78rem", color: "#4ade80", textAlign: "center", fontStyle: "italic", marginBottom: "0.5rem", letterSpacing: "0.02em" }}>
                        {verse.phonetic}
                      </p>
                      <p style={{ position: "relative", zIndex: 1, fontSize: "0.83rem", color: "#f5f0dc", textAlign: "center", marginBottom: "0.25rem", lineHeight: 1.5 }}>
                        {lang === "en" ? `"${verse.en}"` : `« ${verse.fr} »`}
                      </p>
                      <p style={{ position: "relative", zIndex: 1, fontSize: "0.68rem", color: "#d4af3799", textAlign: "center", marginTop: "0.5rem", letterSpacing: "0.08em" }}>{verse.ref}</p>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <a href="https://github.com/onsgaaya1" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: "0.85rem", padding: "8px 18px" }}>GitHub ↗</a>
                  <a href="https://linkedin.com/in/ons-gaaya" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: "0.85rem", padding: "8px 18px" }}>LinkedIn ↗</a>
                  <a href="/CV_Ons_Gaaya.pdf" download className="btn-primary" style={{ fontSize: "0.85rem", padding: "8px 18px" }}>⬇ CV</a>
                </div>
              </div>

              {/* Right: quick facts */}
              <div className="glass-card" style={{ padding: "1.5rem" }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4ade8088", marginBottom: "1rem" }}>
                  {lang === "en" ? "Quick facts" : "En bref"}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {quickFacts.map(({ label, value }) => (
                    <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", fontSize: "0.875rem", borderBottom: "1px solid rgba(34,197,94,0.08)", paddingBottom: "0.6rem" }}>
                      <span style={{ color: "#6ee7a0", fontWeight: 600, flexShrink: 0 }}>{label}</span>
                      <span style={{ color: "#ecfdf5", textAlign: "right" }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ─── SKILLS ─── */}
          <div className="animate-fade-up-delay-1">
            <div className="accent-bar" />
            <h2 style={{ fontWeight: 900, fontSize: "1.8rem", color: "#ecfdf5", marginBottom: "2rem" }}>
              {lang === "en" ? "Skills" : "Compétences"}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
              {skillGroups.map(group => (
                <div key={group.category} className="glass-card" style={{ padding: "1.25rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    <span>{group.icon}</span>
                    <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#22c55e" }}>
                      {group.category}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {group.skills.map(s => <span key={s} className="tech-badge">{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── EDUCATION ─── */}
          <div className="animate-fade-up-delay-2">
            <div className="accent-bar" />
            <h2 style={{ fontWeight: 900, fontSize: "1.8rem", color: "#ecfdf5", marginBottom: "2rem" }}>
              {lang === "en" ? "Education" : "Formation"}
            </h2>

            {/* Bac+7 banner */}
            <div style={{
              background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.25)",
              borderRadius: 14, padding: "1rem 1.5rem", marginBottom: "1.5rem",
              display: "flex", alignItems: "center", gap: "1rem",
            }}>
              <span style={{ fontSize: "2rem" }}>🎓</span>
              <div>
                <p style={{ fontWeight: 800, color: "#22c55e", fontSize: "1rem" }}>
                  {lang === "en" ? "Bac+7 path — 3 degrees at EPI Digital School" : "Parcours Bac+7 — 3 diplômes à l'EPI Digital School"}
                </p>
                <p style={{ color: "#86efac", fontSize: "0.82rem" }}>
                  {lang === "en"
                    ? "Business Administration (3 yrs) → ICT Preparatory (2 yrs) → Engineering Cycle (3 yrs, final year in progress)"
                    : "Business Administration (3 ans) → Prépa ICT (2 ans) → Cycle Ingénieur (3 ans, dernière année en cours)"}
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {education.map((edu) => (
                <div key={edu.num} className="glass-card" style={{ padding: "1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center",
                    justifyContent: "center", fontWeight: 900, fontSize: "1rem", flexShrink: 0,
                    background: "rgba(34,197,94,0.12)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.3)",
                  }}>
                    {edu.num}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem" }}>
                      <p style={{ fontWeight: 800, color: "#ecfdf5", fontSize: "0.97rem" }}>{edu.degree}</p>
                      <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#22c55e", padding: "2px 10px", borderRadius: 999, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)" }}>
                        {edu.badge}
                      </span>
                    </div>
                    <p style={{ color: "#22c55e", fontSize: "0.85rem", marginTop: "0.2rem" }}>{edu.school}</p>
                    <p style={{ color: "#6ee7a0", fontSize: "0.78rem", marginTop: "0.3rem" }}>{edu.years} · {edu.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── CERTIFICATIONS ─── */}
          <div className="animate-fade-up-delay-3">
            <div className="accent-bar" />
            <h2 style={{ fontWeight: 900, fontSize: "1.8rem", color: "#ecfdf5", marginBottom: "2rem" }}>
              {lang === "en" ? "Certifications" : "Certifications"}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
              {certs.map(cert => (
                <div key={cert.name} className="glass-card" style={{ padding: "1.25rem" }}>
                  <span style={{ fontSize: "1.8rem", display: "block", marginBottom: "0.75rem" }}>{cert.icon}</span>
                  <p style={{ color: "#ecfdf5", fontWeight: 700, fontSize: "0.9rem", lineHeight: 1.4 }}>{cert.name}</p>
                  <p style={{ color: "#22c55e", fontSize: "0.78rem", fontWeight: 700, marginTop: "0.5rem" }}>{cert.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── CLUBS & VOLUNTEERING ─── */}
          <div className="animate-fade-up-delay-4">
            <div className="accent-bar" />
            <h2 style={{ fontWeight: 900, fontSize: "1.8rem", color: "#ecfdf5", marginBottom: "2rem" }}>
              {lang === "en" ? "Clubs & Volunteering" : "Clubs & Bénévolat"}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {clubs.map(club => (
                <div key={club.name} className="glass-card" style={{ padding: "1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.8rem", flexShrink: 0 }}>{club.icon}</span>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.2rem" }}>
                      <p style={{ fontWeight: 800, color: "#ecfdf5", fontSize: "0.97rem" }}>{club.name}</p>
                      <span style={{ fontSize: "0.72rem", color: "#22c55e", fontWeight: 700, padding: "1px 9px", borderRadius: 999, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)" }}>
                        {club.role}
                      </span>
                    </div>
                    <p style={{ color: "#6ee7a0", fontSize: "0.75rem", marginBottom: "0.4rem" }}>{club.period}</p>
                    <p style={{ color: "#86efac", fontSize: "0.85rem", lineHeight: 1.6 }}>{club.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* bottom flower divider */}
          <div className="flower-divider">
            <svg width="20" height="20" viewBox="0 0 100 100">
              {[0,60,120,180,240,300].map(d => (
                <ellipse key={d} cx="50" cy="20" rx="11" ry="20" fill="#22c55e" opacity="0.7" transform={`rotate(${d} 50 50)`} />
              ))}
              <circle cx="50" cy="50" r="13" fill="#22c55e" />
            </svg>
          </div>

        </div>
      </main>

      <Footer lang={lang} />
    </>
  );
}
