import type { CSSProperties } from "react";
import { Lang } from "@/lib/data";
import VerseFrame from "@/components/VerseFrame";

/**
 * « Avec mes mots » — le texte « À propos » du profil LinkedIn d'Ons :
 * une pensée en arabe, puis « العلم أمانة » (Le savoir est un dépôt de confiance),
 * « Comment je construis », puis le verset 17:34 (l'engagement).
 * Composant sans état : le texte est ici, dans les constantes ci-dessous.
 */
const REFLECTIONS = [
  {
    ar: "كل ما أبدعته يداي يبقى صغيرًا أمام عظمة من علّمها الإبداع",
    en: "All my hands have ever made stays small before the One who taught them to create.",
    fr: "Tout ce que mes mains ont créé reste petit devant Celui qui leur a appris à créer.",
  },
];

const TRUST = {
  tr: { en: "Knowledge is a trust.", fr: "Le savoir est un dépôt de confiance." },
  ar: "العلم أمانة",
  body: {
    en: "Knowledge is a seed. Kept, it stays one seed. Planted, it becomes a garden. So I plant — tools that ease a day for someone. What I learned was a gift; building with it is how I am grateful.",
    fr: "Le savoir est une graine. Gardée, elle reste une graine. Plantée, elle devient un jardin. Alors je plante — des outils qui allègent la journée de quelqu'un. Ce que j'ai appris était un don ; construire avec est ma façon de dire merci.",
  },
};

const BUILD = {
  title: { en: "How I build", fr: "Comment je construis" },
  lines: {
    en: [
      { k: "With passion", v: "the kind that makes hours disappear." },
      { k: "With love", v: "for the people who will use what I build." },
      { k: "With commitment", v: "a promise kept outweighs a promise made." },
      { k: "With care", v: "the detail no one notices still deserves to be right." },
      { k: "With faith", v: "which keeps all the rest in its place." },
    ],
    fr: [
      { k: "Avec passion", v: "celle qui fait disparaître les heures." },
      { k: "Avec amour", v: "pour celles et ceux qui utiliseront ce que je construis." },
      { k: "Avec engagement", v: "une promesse tenue vaut plus qu'une promesse faite." },
      { k: "Avec soin", v: "le détail que personne ne remarque mérite aussi d'être juste." },
      { k: "Avec foi", v: "qui garde tout le reste à sa place." },
    ],
  },
};

const CLOSING = {
  ar: "﴿وَأَوْفُوا بِالْعَهْدِ ۖ إِنَّ الْعَهْدَ كَانَ مَسْئُولًا﴾",
  translit: "Wa awfū bi-l-ʿahd, inna-l-ʿahda kāna masʾūlā",
  en: "And fulfil the covenant. Indeed, the covenant will be asked about.",
  fr: "Et soyez fidèles à l'engagement, car on sera interrogé sur l'engagement.",
};

const LABEL: CSSProperties = {
  fontSize: "0.66rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d4a853",
};

export default function GratitudeNote({ lang }: { lang: Lang }) {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
      <div>
        <div className="accent-bar" />
        <h2 style={{ fontWeight: 900, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#ecfdf5" }}>
          {lang === "en" ? "In my own words" : "Avec mes mots"}
        </h2>
      </div>

      {REFLECTIONS.map(r => (
        <div key={r.ar} style={{ textAlign: "center" }}>
          <p lang="ar" dir="rtl" className="vf-ar" style={{ fontSize: "clamp(1.3rem, 3.1vw, 1.75rem)", margin: 0 }}>
            {r.ar}
          </p>
          <p style={{ color: "#86efac", fontStyle: "italic", fontSize: "0.92rem", marginTop: "0.4rem" }}>
            {r[lang]}
          </p>
        </div>
      ))}

      {/* Knowledge is a trust */}
      <div className="glass-card" style={{ padding: "1.5rem 1.75rem" }}>
        <div style={{ textAlign: "center" }}>
          <p lang="ar" dir="rtl" className="vf-ar" style={{ fontSize: "clamp(1.5rem, 3.4vw, 2rem)", margin: 0 }}>
            {TRUST.ar}
          </p>
          <p style={{ color: "#86efac", fontStyle: "italic", fontSize: "0.92rem", marginTop: "0.3rem" }}>
            {TRUST.tr[lang]}
          </p>
        </div>
        <div style={{ height: 1, maxWidth: 180, margin: "1rem auto", background: "linear-gradient(90deg, transparent, rgba(212,168,83,.5), transparent)" }} />
        <p style={{ color: "#bbf7d0", lineHeight: 1.75, fontSize: "0.95rem" }}>{TRUST.body[lang]}</p>
      </div>

      {/* How I build */}
      <div className="glass-card" style={{ padding: "1.5rem 1.75rem" }}>
        <p style={{ ...LABEL, marginBottom: "1rem" }}>✦ {BUILD.title[lang]} ✦</p>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
          {BUILD.lines[lang].map(({ k, v }) => (
            <li key={k} style={{ color: "#bbf7d0", lineHeight: 1.7, fontSize: "0.95rem", paddingLeft: "1.4rem", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "#22c55e" }} aria-hidden="true">✦</span>
              <strong style={{ color: "#f1d58a", fontWeight: 700 }}>{k}</strong> — {v}
            </li>
          ))}
        </ul>
      </div>

      <VerseFrame
        arabic={CLOSING.ar} en={CLOSING.en} fr={CLOSING.fr} translit={CLOSING.translit}
        surah={{ en: "Al-Isrāʾ", fr: "Al-Isrâ" }} refNum="17:34" lang={lang} highlight="بِالْعَهْدِ"
      />
    </div>
  );
}
