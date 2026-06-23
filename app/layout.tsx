import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Ons Gaaya — Full-Stack & AI Developer",
  description:
    "Portfolio of Ons Gaaya, Software Engineering student at EPI Digital School. Full-Stack & AI developer specializing in Angular, ASP.NET Core, React Native, and DistilBERT.",
  keywords: ["Full-Stack", "AI", "Angular", "ASP.NET Core", "React Native", "DistilBERT", "Tunisia"],
  authors: [{ name: "Ons Gaaya" }],
  openGraph: {
    title: "Ons Gaaya — Full-Stack & AI Developer",
    description: "13 projects across AI/ML, full-stack web, and mobile development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-forest-bg text-forest-text antialiased">{children}</body>
    </html>
  );
}
