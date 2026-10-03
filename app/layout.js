import { Anton, Bebas_Neue, DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

// Only the archived /v1 and /v2 pages use these, so they aren't preloaded.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  preload: false,
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  preload: false,
});

export const metadata = {
  title: "Hasanul Haque Topu — Portfolio",
  description:
    "Product & UI/UX designer — mobile apps, SaaS dashboards and design systems.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${bebas.variable} ${inter.variable} ${anton.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
