import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import StatsSection from '@/components/StatsSection';

export const metadata: Metadata = {
  title: 'About | Biberaj Group — Northern Virginia Real Estate Experts',
  description:
    "Meet the Biberaj Group — Northern Virginia's results-driven real estate team. 500+ homes sold, $340M+ in transactions. Deep local expertise in Fairfax, Arlington, and Alexandria.",
};

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Free Home Valuation',
    desc: "We analyze comparable sales, market trends, and your home's unique features to determine its precise market value.",
  },
  {
    step: '02',
    title: 'Strategic Listing Plan',
    desc: 'A customized marketing strategy including professional photography, video tour, MLS exposure, and targeted digital campaigns.',
  },
  {
    step: '03',
    title: 'Show & Negotiate',
    desc: 'We handle all showings, gather feedback, and negotiate on your behalf to secure the highest possible price.',
  },
  {
    step: '04',
    title: 'Smooth Closing',
    desc: 'We coordinate inspections, appraisals, and closing logistics so you get to the finish line without stress.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-navy to-navy-800 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                About Biberaj Group
              </p>
              <h1 className="font-display font-bold text-white text-4xl sm:text-5xl leading-tight mb-5">
                Northern Virginia&apos;s
                <br />
                <span className="text-accent">Most Trusted</span> Real Estate Team
              </h1>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                With over 500 homes sold across Fairfax, Arlington, Alexandria, and Loudoun County,
                Biberaj Group has built a reputation for results, transparency, and unmatched local
                expertise. We don&apos;t just sell homes — we build long-term relationships with the
                families and individuals we serve.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-cta hover:-translate-y-0.5"
                >
                  Work With Us
                </Link>
                <Link
                  href="/sold"
                  className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors"
                >
                  See Our Sales
                </Link>
              </div>
            </div>

            {/* Agent card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-accent/20 border-2 border-accent/40 flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-accent text-3xl">A</span>
                </div>
                <div>
                  <h2 className="font-display font-bold text-white text-xl">Arben Biberaj</h2>
                  <p className="text-accent text-sm font-semibold">Principal Agent & Founder</p>
                  <p className="text-white/50 text-sm mt-1">Northern Virginia Real Estate</p>
                </div>
              </div>

              <blockquote className="text-white/70 text-sm leading-relaxed italic border-l-2 border-accent pl-4 mb-6">
                &ldquo;I grew up in Northern Virginia. I know these neighborhoods, these schools, these
                commutes. That local knowledge is what helps my clients win — whether they&apos;re
                buying or selling.&rdquo;
              </blockquote>

              <div className="grid grid-cols-2 gap-4 text-center">
                {[
                  { value: '15+', label: 'Years Experience' },
                  { value: '500+', label: 'Homes Sold' },
                  { value: '$340M+', label: 'Sales Volume' },
                  { value: '98.6%', label: 'List-to-Sale' },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-white/5 rounded-xl p-3">
                    <p className="font-display font-bold text-white text-xl">{value}</p>
                    <p className="text-white/50 text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <StatsSection />

      {/* Process */}
      <section className="py-20 bg-white" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              How We Work
            </p>
            <h2
              id="process-heading"
              className="font-display font-bold text-navy text-3xl sm:text-4xl"
            >
              Our Proven Selling Process
            </h2>
            <p className="text-navy-600 mt-3 text-sm max-w-xl mx-auto">
              A clear, transparent process from first call to final closing. No surprises. No stress.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="bg-bg border border-slate-200 rounded-2xl p-6 h-full hover:shadow-card transition-shadow">
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center mb-4">
                    <span className="font-display font-bold text-white text-sm">{step}</span>
                  </div>
                  <h3 className="font-semibold text-navy text-base mb-2">{title}</h3>
                  <p className="text-navy-600 text-sm leading-relaxed">{desc}</p>
                </div>
                {parseInt(step) < 4 && (
                  <div
                    className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-accent/40 z-10"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-20 bg-bg" aria-labelledby="areas-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Where We Sell
            </p>
            <h2
              id="areas-heading"
              className="font-display font-bold text-navy text-3xl sm:text-4xl"
            >
              Deep Roots in Every Neighborhood
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Fairfax',
              'Arlington',
              'Alexandria',
              'Reston',
              'Herndon',
              'Ashburn',
              'McLean',
              'Vienna',
              'Falls Church',
              'Annandale',
              'Burke',
              'Centreville',
            ].map((area) => (
              <div
                key={area}
                className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:border-accent hover:shadow-card transition-all cursor-default"
              >
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2" aria-hidden="true">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-navy text-sm">{area}</p>
                <p className="text-navy-600 text-xs">VA</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Sell Your Northern Virginia Home?"
        subtext="Get a free, data-driven home valuation from our team. Find out exactly what your home is worth in today's market."
        ctaText="Get Free Home Value"
      />
    </>
  );
}
