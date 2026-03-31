import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.biberajgroup.com'),
  title: {
    default: 'Biberaj Group | Recently Sold Homes in Northern Virginia',
    template: '%s | Biberaj Group',
  },
  description:
    'Browse recently sold homes in Fairfax, Arlington, Alexandria, Reston, and Herndon, VA. See what homes are selling for in your neighborhood with Biberaj Group.',
  keywords: [
    'homes sold Northern Virginia',
    'recently sold homes Fairfax VA',
    'what is my home worth Virginia',
    'Northern Virginia real estate agent',
    'sell home Northern VA',
    'Arlington VA homes sold',
    'Alexandria VA real estate',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Biberaj Group Real Estate',
    title: 'Biberaj Group | Recently Sold Homes in Northern Virginia',
    description:
      'See what homes are selling for in your Northern Virginia neighborhood. 500+ homes sold.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biberaj Group | Recently Sold Homes in Northern Virginia',
    description: 'See what homes are selling for in your Northern Virginia neighborhood.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-bg text-navy">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
