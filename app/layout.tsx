import type { Metadata } from "next";
import { Inter, Space_Grotesk, Amiri } from "next/font/google";
import "./globals.css";
import StarryGarden from "@/components/StarryGarden";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "Ons Gaaya — Software & AI Engineer",
  description:
    "Portfolio of Ons Gaaya, Software Engineering student at EPI Digital School. Software & AI engineer specializing in Angular, ASP.NET Core, React Native, and DistilBERT.",
  keywords: ["Software Engineer", "AI", "Full-Stack", "Angular", "ASP.NET Core", "React Native", "DistilBERT", "Tunisia"],
  authors: [{ name: "Ons Gaaya" }],
  openGraph: {
    title: "Ons Gaaya — Software & AI Engineer",
    description: "15 projects across AI/ML, full-stack web, and mobile development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${amiri.variable}`}>
      <body className="sg-sky text-forest-text antialiased">
        <StarryGarden />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
