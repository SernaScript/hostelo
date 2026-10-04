import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SettingsProvider } from '@/context/SettingsContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ReservationModal from '@/components/booking/ReservationModal';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://hostelocartagena.com'),
  title: {
    default: 'Hostelo Cartagena | Resort 5 Estrellas Frente al Mar • 25 Pisos de Lujo',
    template: '%s | Hostelo Resort Cartagena',
  },
  description: 'Descubre Hostelo: exclusivo resort 5 estrellas en Cartagena de Indias. Torre de 25 pisos con 4 suites por nivel (100 habitaciones), penthouses panorámicos de 360°, rooftop pool en piso 25 y atención VIP por Martín Quintero.',
  keywords: [
    'hotel cartagena',
    'resort 5 estrellas cartagena',
    'luxury hotel cartagena colombia',
    'hostelo cartagena',
    'hotel bocagrande cartagena',
    'penthouses cartagena',
    'suites frente al mar cartagena',
    'rooftop pool cartagena',
    'tours islas del rosario yate',
    'martin quintero concierge'
  ],
  authors: [{ name: 'Hostelo Cartagena Resort & Spa' }],
  creator: 'Hostelo Cartagena',
  publisher: 'Hostelo Cartagena',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://hostelocartagena.com',
    languages: {
      'es-CO': 'https://hostelocartagena.com',
      'en-US': 'https://hostelocartagena.com/en',
    },
  },
  openGraph: {
    title: 'Hostelo Cartagena | Resort 5 Estrellas Frente al Mar',
    description: '100 suites exclusivas en una torre de 25 pisos frente al Mar Caribe. Penthouses en pisos superiores, alta gastronomía y concierge VIP.',
    url: 'https://hostelocartagena.com',
    siteName: 'Hostelo Cartagena Resort & Spa',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&h=630&q=85',
        width: 1200,
        height: 630,
        alt: 'Hostelo Cartagena 5★ Resort & Sky Penthouses',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hostelo Cartagena | Resort 5 Estrellas Frente al Mar',
    description: 'Exclusiva torre de 25 pisos en Cartagena de Indias. Habitaciones desde $300,000 COP y Sky Penthouses hasta $700,000 COP.',
    images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&h=630&q=85'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <StructuredData />
      </head>
      <body className="bg-stone-50 text-stone-900 min-h-screen flex flex-col font-sans">
        <SettingsProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <ReservationModal />
        </SettingsProvider>
      </body>
    </html>
  );
}
