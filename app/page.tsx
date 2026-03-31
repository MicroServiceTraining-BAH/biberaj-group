import type { Metadata } from 'next';
import HeroCarousel from '@/components/HeroCarousel';
import StatsSection from '@/components/StatsSection';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import MapSection from '@/components/MapSection';
import PropertyCard from '@/components/PropertyCard';
import Link from 'next/link';
import { properties } from '@/lib/properties';

export const metadata: Metadata = {
  title: 'Biberaj Group | Northern Virginia Real Estate — Just Sold',
  description:
    'Biberaj Group specializes in selling homes across Northern Virginia. See recently sold homes in Fairfax, Arlington, Alexandria, Reston, and Herndon, VA.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Biberaj Group',
  url: 'https://www.biberajgroup.com',
  telephone: '+17035550100',
  email: 'hello@biberajgroup.com',
  areaServed: [
    'Fairfax, VA',
    'Arlington, VA',
    'Alexandria, VA',
    'Reston, VA',
    'Herndon, VA',
    'Ashburn, VA',
  ],
  description:
    'Northern Virginia real estate team specializing in buying and selling homes with 500+ transactions completed.',
};

export default function HomePage() {
  const featured = properties.slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroCarousel />

      {/* Featured sold homes */}
      <section className="py-20 bg-bg" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                Recent Closings
              </p>
              <h2
                id="featured-heading"
                className="font-display font-bold text-navy text-3xl sm:text-4xl"
              >
                Recently Sold Homes
              </h2>
              <p className="text-navy-600 mt-2 text-sm">
                Homes sold across Northern Virginia by Biberaj Group
              </p>
            </div>
            <Link
              href="/sold"
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
            >
              View all sold homes
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Value proposition */}
      <section className="py-20 bg-white" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                Why Biberaj Group
              </p>
              <h2
                id="why-heading"
                className="font-display font-bold text-navy text-3xl sm:text-4xl mb-5"
              >
                Sell Faster. Sell for More.
              </h2>
              <p className="text-navy-600 leading-relaxed mb-8 text-base">
                We combine hyper-local market intelligence with aggressive marketing to get you the
                best price — in the shortest time. Our results speak for themselves: homes listed with
                Biberaj Group sell 40% faster and at 2.3% higher than the Northern Virginia average.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: 'Strategic Pricing',
                    desc: 'Data-driven pricing that captures full market value without leaving money on the table.',
                    icon: '📊',
                  },
                  {
                    title: 'Professional Marketing',
                    desc: 'Cinematic photography, video tours, and targeted digital ads that bring buyers in.',
                    icon: '📸',
                  },
                  {
                    title: 'Expert Negotiation',
                    desc: "We've negotiated hundreds of contracts. We know how to get sellers more.",
                    icon: '🤝',
                  },
                ].map(({ title, desc, icon }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl" aria-hidden="true">
                      {icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy text-base mb-1">{title}</h3>
                      <p className="text-navy-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-cta hover:-translate-y-0.5"
                >
                  Get Your Home Value
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-slate-200 text-navy hover:bg-slate-50 px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors"
                >
                  Meet the Team
                </Link>
              </div>
            </div>

            {/* Right side: achievement cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Top 1%', sublabel: 'Northern VA Agents', color: 'bg-accent' },
                { label: '40%', sublabel: 'Faster than avg.', color: 'bg-success' },
                { label: '2.3%', sublabel: 'Higher sale price', color: 'bg-amber-500' },
                { label: '5★', sublabel: 'Google Reviews', color: 'bg-purple-600' },
              ].map(({ label, sublabel, color }) => (
                <div
                  key={label}
                  className="bg-bg border border-slate-200 rounded-2xl p-6 text-center hover:shadow-card transition-shadow"
                >
                  <div
                    className={`w-10 h-10 ${color} rounded-xl mx-auto mb-3`}
                    aria-hidden="true"
                  />
                  <p className="font-display font-bold text-navy text-3xl leading-none">{label}</p>
                  <p className="text-navy-600 text-xs mt-1.5">{sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <MapSection />
      <CTASection />
    </>
  );
}
