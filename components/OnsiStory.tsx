"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { Lang, projects } from "@/lib/data";

/**
 * « Pourquoi Onsi » — l'histoire derrière Al Quran Onsi.
 * Le prénom Ons (أُنس) veut dire « compagnie, le contraire de la solitude » :
 * c'est le fil entre son prénom, l'application et sa foi.
 *
 * Contenu : le nom → l'histoire → la vidéo du concept (clic pour lire, rien ne
 * démarre tout seul) → trois temps en arabe : son invocation personnelle, le verset
 * de ce qu'elle souhaite pour l'application, puis l'invocation pour tous ceux qui
 * lisent le Coran. Le mot « Ons » est mis en or dans les deux invocations (comme le
 * mot clé des versets dans VerseFrame).
 * Tous les textes sont dans les constantes ci-dessous.
 * L'URL de la vidéo vient de lib/data.ts (projet « al-quran-onsi », champ `video`),
 * l'affiche est /public/onsi-thumbnail.jpg. Ancre : /about#why-onsi
 */
type Bi = { en: string; fr: string };

const TITLE: Bi = { en: "Why Onsi", fr: "Pourquoi Onsi" };

const NAME = {
  ar: "أُنس",
  caption: {
    en: "Ons — my name. It means companionship, the opposite of loneliness.",
    fr: "Ons — mon prénom. Il signifie la compagnie, le contraire de la solitude.",
  },
  story: {
    en: "Allah was my companion, and that is why I'm building Al Quran Onsi — “the Quran, my companion.” It begins with how your heart feels today and leads you gently to the verses that answer it, so that no one has to open the Quran not knowing where to begin.",
    fr: "Allah était mon compagnon, et c'est pour cela que je construis Al Quran Onsi — le Coran, mon compagnon. L'application part de ce que ressent le cœur aujourd'hui et conduit doucement vers les versets qui y répondent, pour que personne n'ait à ouvrir le Coran sans savoir par où commencer.",
  },
};

const VIDEO = {
  length: "1:42",
  play: { en: "Watch the concept", fr: "Voir le concept" },
  soon: { en: "development starting soon", fr: "développement à venir" },
  title: { en: "Al Quran Onsi — concept video", fr: "Al Quran Onsi — vidéo du concept" },
};

// Her personal du'a.
const DUA = {
  label: { en: "My du'a", fr: "Mon invocation" },
  ar: "اللَّهُمَّ اجْعَلِ الْقُرْآنَ أُنْسِي",
  highlight: "أُنْسِي",
  tr: { en: "O Allah, make the Quran my companion.", fr: "Ô Allah, fais du Coran mon compagnon." },
};

// 13:17 — same text as the verse already shown at the top of the About page.
const WISH = {
  label: { en: "What I want this app to be", fr: "Ce que je souhaite pour cette application" },
  ar: "﴿وَأَمَّا مَا يَنفَعُ النَّاسَ فَيَمْكُثُ فِي الْأَرْضِ﴾",
  tr: { en: "But what benefits the people remains on the earth.", fr: "Mais ce qui est utile aux hommes demeure sur la terre." },
  ref: "Ar-Raʿd · 13:17",
};

// The closing du'a, for her and for everyone who reads the Quran. One clause per line
// (Arabic and translations line up clause by clause). The last clause is the du'a of
// Ibrahim and Ismail (2:127).
const ALL = {
  label: { en: "For everyone who reads the Quran", fr: "Pour tous ceux qui lisent le Coran" },
  ar: [
    "اللَّهُمَّ ارْفَعْنَا بِالْقُرْآنِ مِنَ الشَّقَاءِ إِلَى السَّعَادَةِ،",
    "وَاجْعَلْهُ رَبِيعَ قُلُوبِنَا وَنُورَ صُدُورِنَا وَجَلَاءَ أَحْزَانِنَا،",
    "وَاجْعَلْهُ أُنْسًا لِكُلِّ مَنْ قَرَأَهُ فِي مَشَارِقِ الْأَرْضِ وَمَغَارِبِهَا،",
    "وَتَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ",
  ],
  highlight: "أُنْسًا",
  tr: {
    en: [
      "O Allah, raise us by the Quran from misery to happiness;",
      "make it the spring of our hearts, the light of our chests and the lifting of our sorrows;",
      "make it a companion for everyone who reads it, in the east and the west of the earth;",
      "and accept this from us — You are the All-Hearing, the All-Knowing.",
    ],
    fr: [
      "Ô Allah, élève-nous par le Coran du malheur au bonheur ;",
      "fais-en le printemps de nos cœurs, la lumière de nos poitrines et la dissipation de nos peines ;",
      "fais-en un compagnon pour quiconque le lit, à l'orient comme à l'occident de la terre ;",
      "et accepte ceci de notre part : Tu es l'Audient, l'Omniscient.",
    ],
  },
};

const LABEL: CSSProperties = {
  fontSize: "0.66rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d4a853",
  textAlign: "center", marginBottom: "0.6rem", textWrap: "balance",
};

const RULE: CSSProperties = {
  height: 1, maxWidth: 180, margin: "1.6rem auto",
  background: "linear-gradient(90deg, transparent, rgba(212,168,83,.5), transparent)",
};

const TRANSLATION: CSSProperties = {
  color: "#86efac", fontStyle: "italic", fontSize: "0.92rem", lineHeight: 1.6, textAlign: "center", margin: "0.35rem auto 0", maxWidth: 560,
  textWrap: "balance",
};

// Arabic lines: centred, wrapped in even lines (no lonely last word)
const AR: CSSProperties = { textAlign: "center", margin: 0, textWrap: "balance" };

// One Arabic line, with the key word lit in gold (`.vf-ar b`, same trick as VerseFrame).
function Lit({ text, word }: { text: string; word?: string }) {
  const parts = word && text.includes(word) ? text.split(word) : null;
  return (
    <span style={{ display: "block" }}>
      {parts ? <>{parts[0]}<b>{word}</b>{parts.slice(1).join(word)}</> : text}
    </span>
  );
}

export default function OnsiStory({ lang }: { lang: Lang }) {
  const [playing, setPlaying] = useState(false);

  const url = projects.find(p => p.id === "al-quran-onsi")?.video;
  const src = url ? `${url}${url.includes("?") ? "&" : "?"}autoplay=1&rel=0&playsinline=1` : null;

  return (
    <div
      id="why-onsi"
      style={{ maxWidth: 760, margin: "0 auto", width: "100%", scrollMarginTop: "6rem", display: "flex", flexDirection: "column", gap: "1.75rem" }}
    >
      <div>
        <div className="accent-bar" />
        <h2 style={{ fontWeight: 900, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#ecfdf5" }}>{TITLE[lang]}</h2>
      </div>

      <div className="glass-card" style={{ padding: "clamp(1.25rem, 4vw, 1.9rem)", borderColor: "rgba(212,168,83,0.35)" }}>
        {/* The name */}
        <p lang="ar" dir="rtl" className="vf-ar"
          style={{ textAlign: "center", fontSize: "clamp(2.4rem, 8vw, 3.4rem)", lineHeight: 1.35, margin: 0, color: "#f1d58a", textShadow: "0 0 26px rgba(212,168,83,.35)" }}>
          {NAME.ar}
        </p>
        <p style={{ ...TRANSLATION, marginTop: "0.2rem" }}>{NAME.caption[lang]}</p>

        <div style={RULE} />

        {/* The story */}
        <p style={{ color: "#bbf7d0", lineHeight: 1.8, fontSize: "0.97rem", margin: 0 }}>{NAME.story[lang]}</p>

        {/* The concept video — click to play, nothing starts by itself */}
        {src && (
          <div style={{ marginTop: "1.5rem" }}>
            <div style={{
              position: "relative", aspectRatio: "16 / 9", borderRadius: 14, overflow: "hidden",
              border: "1px solid rgba(34,197,94,0.25)", background: "#06150d",
            }}>
              {playing ? (
                <iframe
                  src={src}
                  title={VIDEO.title[lang]}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label={`${VIDEO.play[lang]} (${VIDEO.length})`}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", padding: 0, border: "none", background: "none", cursor: "pointer" }}
                >
                  <Image src="/onsi-thumbnail.jpg" alt="" fill sizes="(max-width: 760px) 100vw, 760px" style={{ objectFit: "cover" }} />
                  <span aria-hidden="true" style={{
                    position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
                    width: "clamp(46px, 13vw, 68px)", aspectRatio: "1 / 1", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(8,28,18,.78)", border: "1.5px solid #d4a853", boxShadow: "0 0 0 8px rgba(212,168,83,.14)",
                  }}>
                    <svg width="40%" height="40%" viewBox="0 0 24 24" style={{ marginLeft: "5%" }}>
                      <path d="M7 4.5v15l12.5-7.5z" fill="#f1d58a" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
            <p style={{ color: "#6ee7a0", fontSize: "0.8rem", marginTop: "0.65rem", textAlign: "center", textWrap: "balance" }}>
              ▶ {VIDEO.play[lang]} · {VIDEO.length} — <span style={{ fontStyle: "italic" }}>{VIDEO.soon[lang]}</span>
            </p>
          </div>
        )}

        <div style={RULE} />

        {/* My du'a */}
        <p style={LABEL}>✦ {DUA.label[lang]} ✦</p>
        <p lang="ar" dir="rtl" className="vf-ar" style={{ ...AR, fontSize: "clamp(1.5rem, 4.6vw, 2rem)" }}>
          <Lit text={DUA.ar} word={DUA.highlight} />
        </p>
        <p style={TRANSLATION}>{DUA.tr[lang]}</p>

        <div style={RULE} />

        {/* What I want this app to be */}
        <p style={LABEL}>✦ {WISH.label[lang]} ✦</p>
        <p lang="ar" dir="rtl" className="vf-ar" style={{ ...AR, fontSize: "clamp(1.3rem, 3.9vw, 1.7rem)" }}>
          {WISH.ar}
        </p>
        <p style={TRANSLATION}>{lang === "en" ? `“${WISH.tr.en}”` : `« ${WISH.tr.fr} »`}</p>
        <p className="vf-ref" style={{ textAlign: "center", marginTop: "0.5rem" }}>✦ {WISH.ref} ✦</p>

        <div style={RULE} />

        {/* For everyone who reads the Quran — the closing du'a, one clause per line */}
        <p style={LABEL}>✦ {ALL.label[lang]} ✦</p>
        <div lang="ar" dir="rtl" className="vf-ar" style={{ ...AR, fontSize: "clamp(1.22rem, 3.7vw, 1.6rem)", lineHeight: 2 }}>
          {ALL.ar.map(line => <Lit key={line} text={line} word={ALL.highlight} />)}
        </div>
        <div style={{ ...TRANSLATION, marginTop: "0.7rem", maxWidth: "none" }}>
          {ALL.tr[lang].map(line => <span key={line} style={{ display: "block", marginTop: "0.2rem" }}>{line}</span>)}
        </div>
      </div>
    </div>
  );
}
