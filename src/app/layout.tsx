import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";

export const metadata: Metadata = {
  title: "TRENDY STUDIO | Premium Workspace Essentials",
  description: "Curated workspace gear for creators, developers, designers, and remote workers. Premium mechanical keyboards, desk accessories, and productivity tools.",
  keywords: "mechanical keyboards, workspace accessories, desk setup, productivity, creators",
  openGraph: {
    title: "TRENDY STUDIO | Premium Workspace Essentials",
    description: "Curated workspace gear for creators, developers, designers, and remote workers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#FAFAFA] text-[#0F0F0F]">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
