const TESTIMONIALS = [
  {
    name: 'Sarah & Michael T.',
    location: 'Sold in Fairfax, VA',
    quote:
      "We listed on a Thursday, had 14 offers by Sunday, and closed $47k over asking. The Biberaj Group's pricing strategy and negotiation skills are unlike anything we've seen. We've bought and sold four homes — this was the smoothest by far.",
    rating: 5,
    soldFor: '$875,000',
    daysOnMarket: 4,
  },
  {
    name: 'James R.',
    location: 'Sold in Alexandria, VA',
    quote:
      "I was skeptical of the list price — it felt aggressive. But the team had the comps to back it up and the marketing to justify it. Final sale came in at 3% over ask. The professional photography and video tour made all the difference.",
    rating: 5,
    soldFor: '$1,125,000',
    daysOnMarket: 6,
  },
  {
    name: 'Linda & Tom K.',
    location: 'Sold in Reston, VA',
    quote:
      "Moving across the country while selling remotely felt overwhelming. But the team handled everything — staging, showings, communications — without us ever being there. We closed in 21 days. Truly hands-off, stress-free experience.",
    rating: 5,
    soldFor: '$740,000',
    daysOnMarket: 7,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400 fill-amber-400"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-bg" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Client Stories
          </p>
          <h2
            id="testimonials-heading"
            className="font-display font-bold text-navy text-3xl sm:text-4xl"
          >
            What Our Sellers Are Saying
          </h2>
          <p className="text-navy-600 mt-3 text-base max-w-xl mx-auto">
            Real experiences from Northern Virginia homeowners who trusted us with their biggest asset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ name, location, quote, rating, soldFor, daysOnMarket }) => (
            <blockquote
              key={name}
              className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col"
            >
              {/* Stars */}
              <StarRating count={rating} />

              {/* Quote */}
              <p className="text-navy-700 text-sm leading-relaxed mt-4 mb-6 flex-1">
                &ldquo;{quote}&rdquo;
              </p>

              {/* Result chips */}
              <div className="flex gap-2 mb-5">
                <span className="bg-success/10 text-success text-xs font-bold px-2.5 py-1 rounded-full">
                  Sold for {soldFor}
                </span>
                <span className="bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                  {daysOnMarket} days on market
                </span>
              </div>

              {/* Author */}
              <footer className="border-t border-slate-100 pt-4">
                <cite className="not-italic">
                  <p className="font-semibold text-navy text-sm">{name}</p>
                  <p className="text-navy-600 text-xs mt-0.5">{location}</p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-navy-600 text-sm">
          {['Zillow Premier Agent', 'Realtor.com Top Producer', '5-Star Google Rating', 'NVAR Member'].map(
            (badge) => (
              <div key={badge} className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-success"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {badge}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
