import type { Metadata } from "next";
import { Sansita } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';
import { cn } from "@/lib/utils";


const sansita = Sansita({ subsets: ["latin"], weight: ['400', '700', '800', '900'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Tosse Moro",
  description: "Rechargez votre credit et transferer votre agent en quelque clicks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn('min-h-screen bg-muted font-sans antialiased', sansita.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
