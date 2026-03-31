import Link from 'next/link';

const FOOTER_LINKS = {
  'Quick Links': [
    { label: 'Home', href: '/' },
    { label: 'Just Sold', href: '/sold' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  'Service Areas': [
    { label: 'Fairfax, VA', href: '/sold' },
    { label: 'Arlington, VA', href: '/sold' },
    { label: 'Alexandria, VA', href: '/sold' },
    { label: 'Reston, VA', href: '/sold' },
    { label: 'Herndon, VA', href: '/sold' },
    { label: 'Ashburn, VA', href: '/sold' },
  ],
  Sellers: [
    { label: 'Get Home Value', href: '/contact' },
    { label: 'Selling Process', href: '/about' },
    { label: 'Market Reports', href: '/sold' },
    { label: 'Free Consultation', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5" aria-label="Biberaj Group home">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-white font-display font-bold text-lg">
                B
              </div>
              <div>
                <span className="block text-white font-display font-bold text-lg leading-tight">
                  Biberaj Group
                </span>
                <span className="block text-white/50 text-[10px] uppercase tracking-widest leading-none">
                  Real Estate
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Northern Virginia&apos;s trusted real estate team. 500+ homes sold. Proven results in
              Fairfax, Arlington, Alexandria, and beyond.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+17035550100"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (703) 555-0100
              </a>
              <a
                href="mailto:hello@biberajgroup.com"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@biberajgroup.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
                {group}
              </h3>
              <ul className="space-y-3" role="list">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Biberaj Group Real Estate. All rights reserved.
            Licensed in Virginia.
          </p>
          <p>
            Made by{' '}
            <a
              href="https://lvluplocal.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors underline"
            >
              Level Up Local
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
