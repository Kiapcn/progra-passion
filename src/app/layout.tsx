import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://prograpassion.com'),
  title: {
    default: 'PrograPassion - Apprenez la Programmation',
    template: '%s | PrograPassion',
  },
  description: 'Découvrez le monde de la programmation avec PrograPassion. Formations, ressources et sélections de qualité pour développer vos compétences en programmation.',
  keywords: ['programmation', 'formation', 'développement web', 'coding', 'apprentissage'],
  authors: [{ name: 'PrograPassion' }],
  creator: 'PrograPassion',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://prograpassion.com',
    title: 'PrograPassion - Apprenez la Programmation',
    description: 'Découvrez le monde de la programmation avec PrograPassion',
    siteName: 'PrograPassion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrograPassion - Apprenez la Programmation',
    description: 'Découvrez le monde de la programmation avec PrograPassion',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-theme="prograPassion">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 