'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/sold', label: 'Just Sold' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy/98 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Biberaj Group home"
          >
            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-white font-display font-bold text-lg group-hover:bg-accent-hover transition-colors">
              B
            </div>
            <div>
              <span className="block text-white font-display font-bold text-lg leading-tight tracking-tight">
                Biberaj Group
              </span>
              <span className="block text-white/60 text-[10px] uppercase tracking-widest leading-none">
                Real Estate
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === href
                    ? 'text-white bg-white/10'
                    : 'text-white/75 hover:text-white hover:bg-white/8'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+17035550100"
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              (703) 555-0100
            </a>
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-[0_4px_12px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.5)] hover:-translate-y-0.5"
            >
              Get Home Value
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-white rounded transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-white rounded transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-white rounded transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-navy-800/98 backdrop-blur-md px-4 pb-4 pt-2 border-t border-white/10">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'text-white bg-white/10'
                    : 'text-white/75 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-3 bg-accent hover:bg-accent-hover text-white text-center px-5 py-3 rounded-lg text-sm font-semibold transition-colors"
            >
              Get Free Home Value
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-navy/95 backdrop-blur-sm border-t border-white/10">
        <Link
          href="/contact"
          className="block bg-accent hover:bg-accent-hover text-white text-center py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-cta"
        >
          Get Your Free Home Value
        </Link>
      </div>
    </>
  );
}
