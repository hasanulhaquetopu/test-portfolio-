import { Anton, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hasanul Haque Topu — Portfolio",
  description:
    "Product & UI/UX designer — mobile apps, SaaS dashboards and design systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable}`}>
      <body>{children}</body>
    </html>
  );
}
