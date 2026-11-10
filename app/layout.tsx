import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { sharedOpenGraph, siteUrl } from '@/lib/seo';
import './globals.css';

const title = 'Frontend Engineering Summit 2026 — Алматы, 15–16 мая';
const description =
  'FES 2026 — два дня о производительности, архитектуре и доступности веб-интерфейсов. Алматы, IITU, 15–16 мая 2026, офлайн и онлайн-трансляция.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: { icon: '/images/favicon.svg' },
  openGraph: { ...sharedOpenGraph, title, description },
  twitter: { card: 'summary', title, description },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" data-scroll-behavior="smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
