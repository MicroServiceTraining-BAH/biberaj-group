import Link from 'next/link';

type CTASectionProps = {
  variant?: 'primary' | 'light';
  heading?: string;
  subtext?: string;
  ctaText?: string;
};

export default function CTASection({
  variant = 'primary',
  heading = "Thinking of Selling Your Home?",
  subtext = "See what your home could sell for in today's Northern Virginia market. Free, no-obligation consultation.",
  ctaText = 'Get Free Home Value',
}: CTASectionProps) {
  const isPrimary = variant === 'primary';

  return (
    <section
      className={`py-20 ${isPrimary ? 'bg-gradient-to-br from-navy to-navy-800' : 'bg-accent-light'}`}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
            isPrimary ? 'bg-white/10' : 'bg-accent/15'
          }`}
        >
          <svg
            className={`w-8 h-8 ${isPrimary ? 'text-accent' : 'text-accent'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </div>

        <h2
          id="cta-heading"
          className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-5 ${
            isPrimary ? 'text-white' : 'text-navy'
          }`}
        >
          {heading}
        </h2>

        <p
          className={`text-lg sm:text-xl mb-4 max-w-2xl mx-auto leading-relaxed ${
            isPrimary ? 'text-white/70' : 'text-navy-700'
          }`}
        >
          {subtext}
        </p>

        {/* Value props */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {['Free & No Obligation', 'Results in 24 Hours', 'Local Market Expertise'].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-success flex-shrink-0"
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
              <span className={`text-sm font-medium ${isPrimary ? 'text-white/80' : 'text-navy-700'}`}>
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-cta hover:shadow-[0_8px_30px_rgba(37,99,235,0.5)] hover:-translate-y-0.5"
          >
            {ctaText}
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <a
            href="tel:+17035550100"
            className={`inline-flex items-center justify-center gap-2 border px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 ${
              isPrimary
                ? 'border-white/30 text-white hover:bg-white/10'
                : 'border-accent/30 text-accent hover:bg-accent/5'
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (703) 555-0100
          </a>
        </div>
      </div>
    </section>
  );
}
