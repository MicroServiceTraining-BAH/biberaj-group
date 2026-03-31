import MapSectionClient from './MapSectionClient';

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
            From Ashburn to Alexandria — hover any pin or city row to explore sold homes.
          </p>
        </div>

        <MapSectionClient />

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
