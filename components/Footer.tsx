import Link from "next/link";
import { Lang } from "@/lib/data";

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer style={{
      borderTop: "1px solid rgba(34,197,94,0.12)",
      background: "rgba(6,26,13,0.6)",
      backdropFilter: "blur(12px)",
      marginTop: "4rem",
      padding: "3rem 1.5rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Flower decorations */}
      <div style={{ position: "absolute", bottom: -20, right: -20, opacity: 0.07, pointerEvents: "none" }}>
        <svg width="140" height="140" viewBox="0 0 100 100">
          {[0,60,120,180,240,300].map(d => (
            <ellipse key={d} cx="50" cy="20" rx="11" ry="20" fill="#22c55e" transform={`rotate(${d} 50 50)`} />
          ))}
          <circle cx="50" cy="50" r="13" fill="#22c55e" />
        </svg>
      </div>
      <div style={{ position: "absolute", top: -10, left: 30, opacity: 0.05, pointerEvents: "none" }}>
        <svg width="90" height="90" viewBox="0 0 100 100">
          {[0,72,144,216,288].map(d => (
            <ellipse key={d} cx="50" cy="20" rx="10" ry="20" fill="#86efac" transform={`rotate(${d} 50 50)`} />
          ))}
          <circle cx="50" cy="50" r="11" fill="#86efac" />
        </svg>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "space-between", alignItems: "center", position: "relative" }}>

        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <svg width="22" height="22" viewBox="0 0 28 28">
              {[0,60,120,180,240,300].map((d, i) => (
                <ellipse key={d} cx="14" cy="7" rx="4" ry="7" fill={i < 3 ? "#22c55e" : "#86efac"} opacity={i < 3 ? 0.9 : 0.7} transform={`rotate(${d} 14 14)`} />
              ))}
              <circle cx="14" cy="14" r="5" fill="#22c55e" />
            </svg>
            <span style={{ fontWeight: 800, color: "#ecfdf5", fontSize: "0.95rem" }}>Ons Gaaya</span>
          </div>
          <p style={{ color: "#6ee7a0", fontSize: "0.8rem" }}>
            {lang === "en" ? "Full-Stack & AI Developer 🌿" : "Développeuse Full-Stack & IA 🌿"}
          </p>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {[
            { href: "/", label: lang === "en" ? "Home" : "Accueil" },
            { href: "/projects", label: lang === "en" ? "Projects" : "Projets" },
            { href: "/about", label: lang === "en" ? "About" : "À propos" },
            { href: "/contact", label: "Contact" },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ color: "#6ee7a0", textDecoration: "none", fontSize: "0.85rem", fontWeight: 500 }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Socials */}
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <a href="https://github.com/onsgaaya1" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 8, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", color: "#6ee7a0", textDecoration: "none" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.18)"; (e.currentTarget as HTMLElement).style.color = "#22c55e"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.08)"; (e.currentTarget as HTMLElement).style.color = "#6ee7a0"; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/ons-gaaya" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 8, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", color: "#6ee7a0", textDecoration: "none" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.18)"; (e.currentTarget as HTMLElement).style.color = "#22c55e"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.08)"; (e.currentTarget as HTMLElement).style.color = "#6ee7a0"; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "1.5rem auto 0", paddingTop: "1.5rem", borderTop: "1px solid rgba(34,197,94,0.08)", display: "flex", justifyContent: "center" }}>
        <p style={{ color: "#4ade8060", fontSize: "0.75rem" }}>
          © 2026 Ons Gaaya · Built with 💚 & Next.js
        </p>
      </div>
    </footer>
  );
}
