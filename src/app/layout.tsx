import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import GlobalBackground from "@/components/GlobalBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prakriti Rawat | AI & Cloud Infrastructure Engineer",
  description: "Portfolio of Prakriti Rawat, showcasing enterprise AI systems and scalable cloud infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground relative min-h-screen`}
      >
        <GlobalBackground />
        <NavBar />
        <main className="relative z-10 w-full flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
