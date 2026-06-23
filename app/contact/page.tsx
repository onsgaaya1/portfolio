"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowerBg from "@/components/FlowerBg";
import { Lang, t } from "@/lib/data";

export default function ContactPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const tr = t.contact;

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(form.message);
    window.open(`mailto:onsgaaya1@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
  };

  const contacts = [
    { icon: "✉️", label: "Email", value: "onsgaaya1@gmail.com", href: "mailto:onsgaaya1@gmail.com" },
    { icon: "📱", label: lang === "en" ? "Phone" : "Téléphone", value: "+216 96 997 130", href: "tel:+21696997130" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/ons-gaaya", href: "https://linkedin.com/in/ons-gaaya" },
    { icon: "🐙", label: "GitHub", value: "github.com/onsgaaya1", href: "https://github.com/onsgaaya1" },
    { icon: "📍", label: lang === "en" ? "Location" : "Localisation", value: "Sousse, Tunisia 🇹🇳", href: null },
  ];

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(34,197,94,0.05)",
    border: "1px solid rgba(34,197,94,0.2)",
    borderRadius: 10,
    padding: "10px 14px",
    color: "#ecfdf5",
    fontSize: "0.9rem",
    outline: "none",
  };

  return (
    <>
      <Navbar lang={lang} onToggleLang={() => setLang(lang === "en" ? "fr" : "en")} />

      <main className="pt-24" style={{ position: "relative", overflow: "hidden" }}>
        <FlowerBg density="lush" />

        <div className="section" style={{ position: "relative", zIndex: 1 }}>
          {/* Header */}
          <div className="animate-fade-up" style={{ marginBottom: "3rem" }}>
            <div className="accent-bar" />
            <h1 style={{ fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 3.5rem)", color: "#ecfdf5", marginBottom: "0.75rem" }}>
              {tr.title[lang]}
            </h1>
            <p style={{ color: "#6ee7a0", fontSize: "1.05rem" }}>{tr.subtitle[lang]}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }} className="grid-cols-1 md:grid-cols-2">
            {/* Left — Contact info */}
            <div className="animate-fade-up-delay-1" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {contacts.map(({ icon, label, value, href }) => (
                <div key={label} className="glass-card" style={{ padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ fontSize: "1.7rem" }}>{icon}</span>
                  <div>
                    <p style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4ade8088" }}>{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        style={{ color: "#ecfdf5", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#22c55e")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#ecfdf5")}
                      >
                        {value}
                      </a>
                    ) : (
                      <p style={{ color: "#ecfdf5", fontSize: "0.9rem", fontWeight: 600 }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Status */}
              <div style={{
                borderRadius: 14, padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: 12,
                background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)",
              }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", flexShrink: 0, animation: "pulse 2s infinite" }} />
                <p style={{ color: "#86efac", fontSize: "0.88rem", fontWeight: 600 }}>
                  {lang === "en"
                    ? "Open to internship opportunities — Sousse & Remote 🌿"
                    : "Disponible pour un stage — Sousse & Remote 🌿"}
                </p>
              </div>
            </div>

            {/* Right — Form */}
            <div className="glass-card animate-fade-up-delay-2" style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "3rem 0", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
                  <span style={{ fontSize: "3rem" }}>🌸</span>
                  <p style={{ fontWeight: 800, fontSize: "1.2rem", color: "#ecfdf5" }}>
                    {lang === "en" ? "Message sent!" : "Message envoyé !"}
                  </p>
                  <p style={{ color: "#6ee7a0", fontSize: "0.88rem" }}>
                    {lang === "en"
                      ? "Your email client should open. I'll get back to you soon."
                      : "Votre client mail devrait s'ouvrir. Je vous répondrai bientôt."}
                  </p>
                  <button onClick={() => setSent(false)} className="btn-outline" style={{ fontSize: "0.85rem", padding: "8px 20px" }}>
                    {lang === "en" ? "Send another" : "Envoyer un autre"}
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <label style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4ade8088", display: "block", marginBottom: 8 }}>
                      {tr.name[lang]}
                    </label>
                    <input type="text" style={inputStyle} placeholder={tr.name[lang]}
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4ade8088", display: "block", marginBottom: 8 }}>
                      {tr.email[lang]}
                    </label>
                    <input type="email" style={inputStyle} placeholder={tr.email[lang]}
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4ade8088", display: "block", marginBottom: 8 }}>
                      {tr.message[lang]}
                    </label>
                    <textarea style={{ ...inputStyle, resize: "vertical" }} rows={5} placeholder={tr.message[lang]}
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <button
                    className="btn-primary"
                    style={{
                      width: "100%", justifyContent: "center",
                      opacity: (!form.name || !form.email || !form.message) ? 0.5 : 1,
                      cursor: (!form.name || !form.email || !form.message) ? "not-allowed" : "pointer",
                    }}
                    onClick={handleSubmit}
                    disabled={!form.name || !form.email || !form.message}
                  >
                    {tr.send[lang]}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Bottom flower divider */}
          <div className="flower-divider" style={{ marginTop: "4rem" }}>
            <svg width="22" height="22" viewBox="0 0 100 100">
              {[0, 60, 120, 180, 240, 300].map(d => (
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
      `}</style>
    </>
  );
}
