import type { Metadata } from 'next';
import PropertyGrid from '@/components/PropertyGrid';
import CTASection from '@/components/CTASection';
import { properties } from '@/lib/properties';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Just Sold Homes | Recently Sold Properties in Northern Virginia',
  description:
    'Browse recently sold homes in Fairfax, Arlington, Alexandria, Reston, and Herndon, VA. Filter by city, price, beds, and property type. Find out what homes sell for in your neighborhood.',
  keywords: [
    'homes sold Northern Virginia',
    'recently sold homes Fairfax VA',
    'Arlington sold homes',
    'Alexandria sold homes',
    'Reston sold homes',
    'what is my home worth Virginia',
  ],
  openGraph: {
    title: 'Just Sold | Biberaj Group — Northern Virginia Real Estate',
    description: 'See what homes are selling for in your neighborhood. Updated listings of recently sold homes.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Recently Sold Homes — Biberaj Group Northern Virginia',
  description: 'Recently sold homes in Fairfax, Arlington, Alexandria, Reston, and Herndon, VA',
  numberOfItems: properties.length,
  itemListElement: properties.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'RealEstateListing',
      name: `${p.address}, ${p.city}, ${p.state}`,
      description: `${p.beds} bed, ${p.baths} bath ${p.propertyType} sold for ${formatPrice(p.soldPrice)}`,
      price: p.soldPrice,
      priceCurrency: 'USD',
    },
  })),
};

export default function SoldPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page header */}
      <div className="bg-gradient-to-br from-navy to-navy-800 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-success/20 border border-success/40 text-success px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" aria-hidden="true" />
                Active Sales Record
              </div>
              <h1 className="font-display font-bold text-white text-4xl sm:text-5xl">
                Just Sold
              </h1>
              <p className="text-white/70 mt-3 text-base max-w-xl">
                Recently sold homes across Northern Virginia. Use filters to explore your specific
                neighborhood and see what homes are selling for.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              {[
                { value: `${properties.length}`, label: 'Homes Listed' },
                {
                  value: formatPrice(
                    Math.round(
                      properties.reduce((s, p) => s + p.soldPrice, 0) / properties.length
                    )
                  ),
                  label: 'Avg Sold Price',
                },
                {
                  value: `${Math.round(
                    properties.reduce((s, p) => s + p.daysOnMarket, 0) / properties.length
                  )}d`,
                  label: 'Avg Days on Market',
                },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center min-w-[100px]"
                >
                  <p className="font-display font-bold text-white text-xl leading-none">{value}</p>
                  <p className="text-white/60 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Property grid with filters */}
      <section className="py-12 bg-bg" aria-label="Sold properties listing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PropertyGrid />
        </div>
      </section>

      <CTASection variant="primary" />
    </>
  );
}
