import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.vercel.app"),
  title: {
    default: "Revista de Ideias | Blog com Next.js App Router",
    template: "%s | Revista de Ideias",
  },
  description:
    "Blog construído com Next.js App Router, rotas dinâmicas, geração estática e SEO por artigo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}