import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Get Your Free Home Value — Biberaj Group',
  description:
    'Contact Biberaj Group for a free home valuation in Northern Virginia. Call (703) 555-0100 or fill out the form. Fairfax, Arlington, Alexandria, Reston, and Herndon.',
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-br from-navy to-navy-800 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Get Started
          </p>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl mb-4">
            Find Out What Your Home is Worth
          </h1>
          <p className="text-white/70 text-base max-w-xl mx-auto leading-relaxed">
            Get a free, no-obligation home valuation from Northern Virginia&apos;s most trusted real
            estate team. We&apos;ll respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Contact section */}
      <section className="py-16 bg-bg" aria-label="Contact and home value form">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Direct contact */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card">
                <h2 className="font-display font-bold text-navy text-lg mb-5">
                  Talk to an Agent Today
                </h2>
                <div className="space-y-4">
                  <a
                    href="tel:+17035550100"
                    className="flex items-center gap-4 p-4 bg-accent/5 hover:bg-accent/10 border border-accent/20 rounded-xl transition-colors group"
                  >
                    <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Call or Text</p>
                      <p className="font-bold text-accent text-lg leading-tight">(703) 555-0100</p>
                    </div>
                  </a>

                  <a
                    href="mailto:hello@biberajgroup.com"
                    className="flex items-center gap-4 p-4 bg-navy/3 hover:bg-navy/5 border border-slate-200 rounded-xl transition-colors"
                  >
                    <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Email Us</p>
                      <p className="text-navy-700 text-sm font-medium">hello@biberajgroup.com</p>
                    </div>
                  </a>
                </div>

                <div className="mt-5 pt-5 border-t border-slate-100 text-xs text-navy-600 flex items-center gap-2">
                  <svg className="w-4 h-4 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Typically respond within 1 business hour
                </div>
              </div>

              {/* Why reach out */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card">
                <h3 className="font-semibold text-navy text-base mb-4">What You&apos;ll Get</h3>
                <ul className="space-y-3">
                  {[
                    'Accurate, data-driven home valuation',
                    'Comparable sales in your neighborhood',
                    "Expert opinion on today's market",
                    'Zero pressure, zero commitment',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-navy-700">
                      <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-8 shadow-card">
              <h2 className="font-display font-bold text-navy text-xl mb-2">
                Request Your Free Home Valuation
              </h2>
              <p className="text-navy-600 text-sm mb-6">
                Fill out the form below and we&apos;ll prepare a customized market analysis for your home.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
