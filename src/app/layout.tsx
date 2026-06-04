import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Teman Pilah",
  description: "Platform komunitas lingkungan hidup Indonesia untuk pengelolaan sampah, edukasi daur ulang, dan produk upcycled.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${playfair.variable} ${jakarta.variable} font-sans bg-[#F8F6F1] text-[#757773]`}>
        <Toaster position="top-center" richColors />
        {children}
      </body>
    </html>
  );
}
