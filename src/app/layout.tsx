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
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen w-full flex flex-col bg-[#FAFAFA] text-[#0F0F0F]">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

