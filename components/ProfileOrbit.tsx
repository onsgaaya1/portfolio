import Image from "next/image";

/**
 * Photo de profil (version G2) : grand cercle, photo entière,
 * deux orbites lentes portant des diamants taillés et des étoiles.
 * Aucun hook : composant serveur, animations en CSS pur (voir globals.css, bloc "po-").
 */

function Diamond({ angle, size, delay = 0, tilt = 0 }: { angle: number; size: number; delay?: number; tilt?: number }) {
  const a = (angle * Math.PI) / 180;
  return (
    <span
      className="po-dia"
      style={{
        left: `${50 + 50 * Math.cos(a)}%`,
        top: `${50 + 50 * Math.sin(a)}%`,
        width: size,
        height: size * 0.9,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        animationDelay: `${delay}s`,
        ["--r" as string]: `${tilt}deg`,
      }}
    >
      <svg viewBox="0 0 100 90" width="100%" height="100%" aria-hidden="true" style={{ overflow: "visible" }}>
        <polygon points="20,10 50,10 35,35" fill="#cfe6ff" />
        <polygon points="50,10 80,10 65,35" fill="#9ccaff" />
        <polygon points="20,10 35,35 0,35" fill="#7fb6f5" />
        <polygon points="80,10 100,35 65,35" fill="#5ba8ff" />
        <polygon points="50,10 65,35 35,35" fill="#eaf5ff" />
        <polygon points="0,35 35,35 50,90" fill="#4f93e6" />
        <polygon points="35,35 65,35 50,90" fill="#8fc4ff" />
        <polygon points="65,35 100,35 50,90" fill="#3b7fd0" />
        <path d="M20 10H80L100 35L50 90L0 35Z" fill="none" stroke="#eaf5ff" strokeOpacity=".7" strokeWidth="1.2" />
      </svg>
    </span>
  );
}

function Spark({ angle, size, delay = 0 }: { angle: number; size: number; delay?: number }) {
  const a = (angle * Math.PI) / 180;
  return (
    <span
      className="po-spark"
      style={{
        left: `${50 + 50 * Math.cos(a)}%`,
        top: `${50 + 50 * Math.sin(a)}%`,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        animationDelay: `${delay}s`,
      }}
    >
      <svg viewBox="0 0 40 40" width="100%" height="100%" aria-hidden="true">
        <path d="M20 0 C21.5 14 26 18.5 40 20 C26 21.5 21.5 26 20 40 C18.5 26 14 21.5 0 20 C14 18.5 18.5 14 20 0 Z" fill="currentColor" />
      </svg>
    </span>
  );
}

export default function ProfileOrbit() {
  return (
    <div className="po">
      <span className="po-ring a" aria-hidden="true">
        <Diamond angle={-45} size={38} tilt={8} />
        <Diamond angle={150} size={26} tilt={-8} delay={-2} />
        <Spark angle={25} size={13} />
        <Spark angle={95} size={11} delay={-1.5} />
        <Spark angle={210} size={12} delay={-3} />
      </span>
      <span className="po-ring b" aria-hidden="true">
        <Spark angle={-110} size={12} delay={-0.5} />
        <Spark angle={40} size={11} delay={-2} />
        <Spark angle={180} size={13} delay={-1} />
        <Spark angle={280} size={10} delay={-3} />
      </span>
      <div className="po-disc">
        <Image src="/profile-ons.jpg" alt="Ons Gaaya" fill sizes="470px" priority style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
}
