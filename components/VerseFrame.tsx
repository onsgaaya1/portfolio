import { Lang } from "@/lib/data";

/**
 * Verset en « cadre enluminé » : double bordure dorée, fleurs aux coins qui
 * tournent lentement, mot clé mis en valeur. Réutilisable (Accueil, À propos).
 */
function Flower() {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true">
      <g fill="currentColor">
        {[0, 72, 144, 216, 288].map(d => (
          <ellipse key={d} cx="50" cy="22" rx="10" ry="20" transform={`rotate(${d} 50 50)`} />
        ))}
      </g>
      <circle cx="50" cy="50" r="11" fill="#f5f0dc" />
    </svg>
  );
}

export default function VerseFrame({
  arabic, en, fr, surah, refNum, lang, highlight, translit,
}: {
  arabic: string;
  en: string;
  fr: string;
  surah: { en: string; fr: string };
  refNum: string;
  lang: Lang;
  /** mot arabe à mettre en or (doit apparaître tel quel dans `arabic`) */
  highlight?: string;
  /** transcription phonétique (optionnelle) */
  translit?: string;
}) {
  const parts = highlight && arabic.includes(highlight) ? arabic.split(highlight) : null;
  return (
    <div className="vf">
      <span className="vf-fl a"><Flower /></span>
      <span className="vf-fl b"><Flower /></span>
      <span className="vf-fl c"><Flower /></span>
      <span className="vf-fl d"><Flower /></span>
      <p className="vf-ref">✦ {surah[lang]} · {refNum} ✦</p>
      <p className="vf-ar" lang="ar" dir="rtl">
        {parts ? <>{parts[0]}<b>{highlight}</b>{parts.slice(1).join(highlight)}</> : arabic}
      </p>
      {translit && <p className="vf-tl">{translit}</p>}
      <p className="vf-tr">{lang === "en" ? `“${en}”` : `« ${fr} »`}</p>
    </div>
  );
}
