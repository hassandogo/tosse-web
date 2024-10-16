import type { Metadata } from "next";
import { Sansita } from "next/font/google";
import "../globals.css";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { i18n, Locale } from "@/i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const sansita = Sansita({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "TOSSE",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {lang: Locale};
}) {
  return (
    <html lang={params.lang}>
      <body
        className={cn("min-h-screen font-sans antialiased scroll-smooth", sansita.variable)}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
