import { properties } from '@/lib/properties';
import { formatPrice } from '@/lib/utils';
import dynamic from 'next/dynamic';

// Load Leaflet map client-side only (no SSR — it uses window)
const PropertyMap = dynamic(() => import('./PropertyMap'), {
  ssr: false,
  loading: () => (
    <div className="rounded-2xl border border-slate-200 shadow-card bg-slate-100 animate-pulse" style={{ height: 480 }} />
  ),
});

export default function MapSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="map-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Service Area
          </p>
          <h2
            id="map-heading"
            className="font-display font-bold text-navy text-3xl sm:text-4xl"
          >
            Sold Across Northern Virginia
          </h2>
          <p className="text-navy-600 mt-3 text-base max-w-xl mx-auto">
            From Ashburn to Alexandria — hover any pin to see what that home sold for.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Interactive map */}
          <div className="lg:col-span-2">
            <PropertyMap properties={properties} />
          </div>

          {/* Recent sales list */}
          <div className="bg-bg rounded-2xl border border-slate-200 p-5 shadow-card">
            <h3 className="font-display font-bold text-navy text-lg mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" aria-hidden="true" />
              Recent Sales by Area
            </h3>
            <ul className="space-y-1" role="list" aria-label="Recent sold homes by city">
              {['Fairfax', 'Arlington', 'Alexandria', 'Reston', 'Herndon', 'Ashburn'].map((city) => {
                const cityProps = properties.filter((p) => p.city === city);
                if (cityProps.length === 0) return null;
                const latest = cityProps[0];
                return (
                  <li
                    key={city}
                    className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0"
                  >
                    <div>
                      <p className="font-semibold text-navy text-sm">{city}</p>
                      <p className="text-navy-600 text-xs mt-0.5">
                        {cityProps.length} home{cityProps.length > 1 ? 's' : ''} sold recently
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-navy text-sm">
                        {formatPrice(latest.soldPrice)}
                      </p>
                      <p className="text-success text-xs font-semibold">
                        Sold in {latest.daysOnMarket}d
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-200">
              <p className="text-xs text-navy-600 text-center">
                Serving all of Northern Virginia including Loudoun County, Prince William County,
                and Fairfax County
              </p>
            </div>
          </div>
        </div>

        {/* SEO paragraph */}
        <div className="mt-10 text-center max-w-3xl mx-auto">
          <p className="text-navy-600 text-sm leading-relaxed">
            Biberaj Group specializes in selling homes across{' '}
            <strong className="text-navy">
              Fairfax, Arlington, Alexandria, Reston, Herndon, and Ashburn, Virginia
            </strong>
            . Our deep knowledge of Northern Virginia real estate market trends helps sellers price
            strategically and buyers understand true market value. See our{' '}
            <a href="/sold" className="text-accent hover:underline font-medium">
              recently sold homes
            </a>{' '}
            to understand what your home is worth in today&apos;s market.
          </p>
        </div>
      </div>
    </section>
  );
}
