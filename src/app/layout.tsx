import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll"; 
import Preloader from "@/components/Preloader";       
import Cursor from "@/components/Cursor"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Audi Brasil",
  description: "Landing Audi Brasil - A evolução da espécie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Preloader />
        <Cursor />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}