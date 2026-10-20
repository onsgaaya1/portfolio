/**
 * StarryGarden — fond animé « Jardin bleu étoilé » (version D)
 *
 * Fleurs vertes qui tournent, diamants bleus qui pivotent et brillent,
 * étoiles qui scintillent, halos diffus qui respirent.
 *
 * Pas de hook, pas d'événement : c'est un Server Component.
 * Ne pas ajouter 'use client', ce serait du JavaScript envoyé au navigateur pour rien.
 *
 * Utilisation (dans app/layout.tsx, une seule fois pour tout le site) :
 *
 *   import StarryGarden from "@/components/StarryGarden";
 *   ...
 *   <body>
 *     <StarryGarden />
 *     <main className="relative z-10">{children}</main>
 *   </body>
 *
 * Les keyframes sont dans app/globals.css (voir starry-garden.css).
 */

type Float = "sg-bob" | "sg-bobx" | "sg-bobz";

type Motif = {
  /** position : donner soit left soit right, soit top soit bottom */
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  /** taille en px sur grand écran */
  size: number;
  /** animation de flottement */
  float: Float;
  floatDur: number;
  floatDelay: number;
  /** true = masqué sur téléphone, pour alléger */
  phoneHidden?: boolean;
};

type Flower = Motif & { opacity: number; spinDur: number; reverse?: boolean };
type Diamond = Motif & { glow: number; facetDur: number; shineDur: number; shineDelay: number };
type Star = Motif & { tone: string; twinkleDur: number; twinkleDelay: number; glow: number };
type Orb = { left?: string; right?: string; top?: string; bottom?: string; size: number; color: string; dur: number; delay: number };

/* ---------------------------------------------------------------- données */

const ORBS: Orb[] = [
  { right: "-12%", top: "-18%", size: 460, color: "91,168,255", dur: 10, delay: 0 },
  { left: "-14%", top: "4%", size: 330, color: "143,201,255", dur: 13, delay: -3 },
  { left: "22%", bottom: "-22%", size: 440, color: "61,220,127", dur: 15, delay: -6 },
  { right: "18%", bottom: "6%", size: 300, color: "91,168,255", dur: 12, delay: -8 },
];

const FLOWERS: Flower[] = [
  { left: "2%", top: "6%", size: 72, opacity: 0.2, float: "sg-bob", floatDur: 10, floatDelay: -0.5, spinDur: 24 },
  { left: "8%", top: "68%", size: 54, opacity: 0.18, float: "sg-bobx", floatDur: 12, floatDelay: -3, spinDur: 29, reverse: true },
  { left: "34%", bottom: "-2%", size: 46, opacity: 0.16, float: "sg-bobz", floatDur: 13, floatDelay: -6, spinDur: 27 },
  { right: "8%", bottom: "4%", size: 58, opacity: 0.15, float: "sg-bob", floatDur: 11, floatDelay: -2, spinDur: 32, reverse: true },
  { left: "46%", top: "2%", size: 32, opacity: 0.13, float: "sg-bobz", floatDur: 9, floatDelay: -7, spinDur: 21, phoneHidden: true },
  { right: "30%", top: "44%", size: 40, opacity: 0.12, float: "sg-bobx", floatDur: 14, floatDelay: -4, spinDur: 26, phoneHidden: true },
  { left: "66%", top: "22%", size: 36, opacity: 0.11, float: "sg-bob", floatDur: 10.5, floatDelay: -9, spinDur: 30, reverse: true, phoneHidden: true },
  { left: "20%", top: "38%", size: 28, opacity: 0.1, float: "sg-bobz", floatDur: 8.5, floatDelay: -5, spinDur: 23, phoneHidden: true },
];

const DIAMONDS: Diamond[] = [
  { right: "5%", top: "8%", size: 68, glow: 16, float: "sg-bob", floatDur: 12, floatDelay: -1, facetDur: 8, shineDur: 4.4, shineDelay: 0 },
  { right: "24%", top: "62%", size: 46, glow: 13, float: "sg-bobz", floatDur: 10, floatDelay: -3, facetDur: 7, shineDur: 3.8, shineDelay: -1.5 },
  { right: "0%", top: "40%", size: 34, glow: 11, float: "sg-bobx", floatDur: 8.5, floatDelay: -5, facetDur: 10, shineDur: 3.2, shineDelay: -0.8 },
  { left: "16%", top: "20%", size: 30, glow: 10, float: "sg-bob", floatDur: 9, floatDelay: -4, facetDur: 9, shineDur: 4.6, shineDelay: -2.4 },
  { left: "60%", bottom: "2%", size: 38, glow: 12, float: "sg-bobz", floatDur: 11.5, floatDelay: -6.5, facetDur: 11, shineDur: 5, shineDelay: -3.2 },
  { left: "4%", top: "46%", size: 24, glow: 9, float: "sg-bobx", floatDur: 7.5, floatDelay: -2, facetDur: 6.5, shineDur: 3.4, shineDelay: -1.9 },
  { left: "40%", top: "70%", size: 28, glow: 10, float: "sg-bob", floatDur: 13, floatDelay: -7.5, facetDur: 9.5, shineDur: 4.1, shineDelay: -2.8, phoneHidden: true },
  { right: "40%", top: "14%", size: 22, glow: 8, float: "sg-bobz", floatDur: 9.5, floatDelay: -10, facetDur: 7.5, shineDur: 3.6, shineDelay: -0.4, phoneHidden: true },
];

const WHITE = "234,245,255";
const SKY = "168,212,255";
const PALE = "196,226,255";

const STARS: Star[] = [
  { left: "24%", top: "9%", size: 20, tone: WHITE, float: "sg-bob", floatDur: 14, floatDelay: 0, twinkleDur: 3, twinkleDelay: -0.3, glow: 8 },
  { right: "34%", top: "4%", size: 15, tone: SKY, float: "sg-bobx", floatDur: 16, floatDelay: -2, twinkleDur: 4.3, twinkleDelay: -2, glow: 7 },
  { left: "6%", top: "27%", size: 13, tone: WHITE, float: "sg-bobz", floatDur: 12, floatDelay: -1, twinkleDur: 3.7, twinkleDelay: -1.2, glow: 6 },
  { right: "15%", top: "29%", size: 17, tone: PALE, float: "sg-bob", floatDur: 15, floatDelay: -4, twinkleDur: 4.9, twinkleDelay: -3.4, glow: 7 },
  { left: "14%", top: "90%", size: 16, tone: WHITE, float: "sg-bobx", floatDur: 13, floatDelay: -6, twinkleDur: 2.6, twinkleDelay: -0.9, glow: 6 },
  { left: "76%", top: "86%", size: 14, tone: SKY, float: "sg-bobz", floatDur: 17, floatDelay: -3, twinkleDur: 4, twinkleDelay: -2.6, glow: 6 },
  { left: "54%", top: "12%", size: 11, tone: WHITE, float: "sg-bob", floatDur: 11, floatDelay: -8, twinkleDur: 3.3, twinkleDelay: -1.8, glow: 5 },
  { right: "3%", bottom: "23%", size: 12, tone: PALE, float: "sg-bobx", floatDur: 14.5, floatDelay: -5, twinkleDur: 4.5, twinkleDelay: -4.1, glow: 5 },
  { left: "31%", top: "38%", size: 9, tone: WHITE, float: "sg-bobz", floatDur: 10, floatDelay: -2.5, twinkleDur: 5.3, twinkleDelay: -0.6, glow: 4, phoneHidden: true },
  { right: "43%", bottom: "10%", size: 10, tone: SKY, float: "sg-bob", floatDur: 12.5, floatDelay: -7, twinkleDur: 3.1, twinkleDelay: -2.9, glow: 4, phoneHidden: true },
  { left: "88%", top: "52%", size: 13, tone: WHITE, float: "sg-bobx", floatDur: 16, floatDelay: -1.5, twinkleDur: 3.9, twinkleDelay: -1.4, glow: 5, phoneHidden: true },
  { left: "44%", top: "88%", size: 11, tone: PALE, float: "sg-bobz", floatDur: 13.5, floatDelay: -9, twinkleDur: 4.7, twinkleDelay: -3.7, glow: 4, phoneHidden: true },
  { left: "70%", top: "40%", size: 9, tone: SKY, float: "sg-bob", floatDur: 11.5, floatDelay: -4.5, twinkleDur: 5.6, twinkleDelay: -2.1, glow: 4, phoneHidden: true },
  { left: "2%", top: "72%", size: 12, tone: WHITE, float: "sg-bobx", floatDur: 15.5, floatDelay: -6.5, twinkleDur: 3.4, twinkleDelay: -0.2, glow: 5, phoneHidden: true },
  { right: "26%", top: "80%", size: 10, tone: PALE, float: "sg-bobz", floatDur: 12, floatDelay: -3.8, twinkleDur: 4.2, twinkleDelay: -3.1, glow: 4, phoneHidden: true },
  { left: "58%", top: "58%", size: 8, tone: WHITE, float: "sg-bob", floatDur: 10.5, floatDelay: -5.5, twinkleDur: 5.9, twinkleDelay: -1.6, glow: 4, phoneHidden: true },
];

/* ------------------------------------------------------------------ pièces */

function FlowerShape() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g fill="currentColor">
        <ellipse cx="20" cy="9" rx="5" ry="9" />
        <ellipse cx="20" cy="9" rx="5" ry="9" transform="rotate(72 20 20)" />
        <ellipse cx="20" cy="9" rx="5" ry="9" transform="rotate(144 20 20)" />
        <ellipse cx="20" cy="9" rx="5" ry="9" transform="rotate(216 20 20)" />
        <ellipse cx="20" cy="9" rx="5" ry="9" transform="rotate(288 20 20)" />
      </g>
    </svg>
  );
}

function DiamondShape() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path d="M20 1 L35 20 L20 39 L5 20 Z" fill="#5BA8FF" opacity=".55" />
      <path d="M20 1 L20 39 L5 20 Z" fill="#A8D4FF" opacity=".95" />
      <path d="M20 1 L35 20 L20 20 Z" fill="#EAF5FF" opacity=".7" />
    </svg>
  );
}

function StarShape() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path
        d="M20 0 C21.5 14 26 18.5 40 20 C26 21.5 21.5 26 20 40 C18.5 26 14 21.5 0 20 C14 18.5 18.5 14 20 0 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** position + taille communes à tous les motifs */
function box(m: Motif) {
  return {
    left: m.left,
    right: m.right,
    top: m.top,
    bottom: m.bottom,
    width: m.size,
    height: m.size,
  };
}

/* -------------------------------------------------------------- composant */

export default function StarryGarden() {
  return (
    <div className="sg-layer" aria-hidden="true">
      {ORBS.map((o, i) => (
        <span
          key={`o${i}`}
          className="sg-orb"
          style={{
            left: o.left,
            right: o.right,
            top: o.top,
            bottom: o.bottom,
            width: o.size,
            height: o.size,
            background: `radial-gradient(circle, rgba(${o.color},.34) 0%, rgba(${o.color},0) 66%)`,
            animation: `sg-haze ${o.dur}s ease-in-out ${o.delay}s infinite`,
          }}
        />
      ))}

      {FLOWERS.map((f, i) => (
        <span
          key={`f${i}`}
          className={`sg-m${f.phoneHidden ? " sg-sm" : ""}`}
          style={{
            ...box(f),
            color: `rgba(61,220,127,${f.opacity})`,
            animation: `${f.float} ${f.floatDur}s ease-in-out ${f.floatDelay}s infinite`,
          }}
        >
          <span
            className="sg-inner"
            style={{
              animation: `${f.reverse ? "sg-spinr" : "sg-spin"} ${f.spinDur}s linear infinite`,
            }}
          >
            <FlowerShape />
          </span>
        </span>
      ))}

      {DIAMONDS.map((d, i) => (
        <span
          key={`d${i}`}
          className={`sg-m${d.phoneHidden ? " sg-sm" : ""}`}
          style={{
            ...box(d),
            animation: `${d.float} ${d.floatDur}s ease-in-out ${d.floatDelay}s infinite, sg-shine ${d.shineDur}s ease-in-out ${d.shineDelay}s infinite`,
          }}
        >
          <span
            className="sg-inner"
            style={{
              animation: `sg-facet ${d.facetDur}s ease-in-out infinite`,
              filter: `drop-shadow(0 0 ${d.glow}px rgba(91,168,255,.9))`,
            }}
          >
            <DiamondShape />
          </span>
        </span>
      ))}

      {STARS.map((s, i) => (
        <span
          key={`s${i}`}
          className={`sg-m${s.phoneHidden ? " sg-sm" : ""}`}
          style={{
            ...box(s),
            animation: `${s.float} ${s.floatDur}s ease-in-out ${s.floatDelay}s infinite`,
          }}
        >
          <span
            className="sg-inner"
            style={{
              color: `rgb(${s.tone})`,
              filter: `drop-shadow(0 0 ${s.glow}px rgba(${s.tone},.95))`,
              animation: `sg-twinkle ${s.twinkleDur}s ease-in-out ${s.twinkleDelay}s infinite`,
            }}
          >
            <StarShape />
          </span>
        </span>
      ))}
    </div>
  );
}
