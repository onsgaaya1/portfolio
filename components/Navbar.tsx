"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lang } from "@/lib/data";

interface NavbarProps {
  lang: Lang;
  onToggleLang: () => void;
}

export default function Navbar({ lang, onToggleLang }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();

  const links = [
    { href: "/", label: lang === "en" ? "Home" : "Accueil" },
    { href: "/projects", label: lang === "en" ? "Projects" : "Projets" },
    { href: "/about", label: lang === "en" ? "About" : "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
          {/* Flower logo */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <ellipse cx="14" cy="7" rx="4" ry="7" fill="#22c55e" opacity="0.8" />
            <ellipse cx="14" cy="7" rx="4" ry="7" fill="#22c55e" opacity="0.8" transform="rotate(60 14 14)" />
            <ellipse cx="14" cy="7" rx="4" ry="7" fill="#22c55e" opacity="0.8" transform="rotate(120 14 14)" />
            <ellipse cx="14" cy="7" rx="4" ry="7" fill="#86efac" opacity="0.6" transform="rotate(180 14 14)" />
            <ellipse cx="14" cy="7" rx="4" ry="7" fill="#86efac" opacity="0.6" transform="rotate(240 14 14)" />
            <ellipse cx="14" cy="7" rx="4" ry="7" fill="#86efac" opacity="0.6" transform="rotate(300 14 14)" />
            <circle cx="14" cy="14" r="5" fill="#22c55e" />
          </svg>
          <span style={{ fontWeight: 800, fontSize: "1.05rem", color: "#ecfdf5", letterSpacing: "-0.02em" }}>
            Ons <span style={{ color: "#22c55e" }}>Gaaya</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden md:flex">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              padding: "6px 16px", borderRadius: 8, fontSize: "0.9rem", fontWeight: 500,
              textDecoration: "none",
              color: path === l.href ? "#22c55e" : "#6ee7a0",
              background: path === l.href ? "rgba(34,197,94,0.1)" : "transparent",
              transition: "all 0.2s",
            }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <button onClick={onToggleLang} style={{
            background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)",
            color: "#86efac", borderRadius: 8, padding: "5px 14px", fontSize: "0.8rem",
            fontWeight: 700, cursor: "pointer", letterSpacing: "0.05em",
          }}>
            {lang === "en" ? "FR" : "EN"}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", color: "#86efac", cursor: "pointer", padding: 4 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen
                ? <path d="M18 6L6 18M6 6l12 12" />
                : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ borderTop: "1px solid rgba(34,197,94,0.15)", padding: "1rem 1.5rem", background: "rgba(6,26,13,0.97)" }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display: "block", padding: "10px 0", color: path === l.href ? "#22c55e" : "#6ee7a0",
              textDecoration: "none", fontWeight: 500, borderBottom: "1px solid rgba(34,197,94,0.08)",
            }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
