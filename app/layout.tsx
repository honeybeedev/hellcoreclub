import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HellCore Club — O clube dos streamers do Brasil",
  description:
    "HellCore Club é o clube que conecta streamers de todo o Brasil para crescerem de forma legal e lícita, sem bots ou métodos que prejudicam o canal. Estamos em desenvolvimento — garanta seu lugar.",
  openGraph: {
    title: "HellCore Club — O clube dos streamers do Brasil",
    description:
      "Conecte-se com streamers de todo o Brasil e cresça de forma legal e lícita. Entre na lista de interessados.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
