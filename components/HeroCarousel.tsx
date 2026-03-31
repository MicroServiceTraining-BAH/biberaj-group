'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SLIDES = [
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=85',
    alt: 'Luxury single-family home in Northern Virginia',
    location: 'Fairfax, VA',
    price: '$875,000',
    tag: 'Just Sold',
  },
  {
    url: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1600&q=85',
    alt: 'Beautiful colonial home sold in Alexandria, Virginia',
    location: 'Alexandria, VA',
    price: '$1,125,000',
    tag: 'Just Sold',
  },
  {
    url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=85',
    alt: 'Modern family home sold in Fairfax, Virginia',
    location: 'Fairfax, VA',
    price: '$995,000',
    tag: 'Just Sold',
  },
  {
    url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=85',
    alt: 'Elegant townhome sold in Reston, Virginia',
    location: 'Reston, VA',
    price: '$740,000',
    tag: 'Just Sold',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(idx);
        setTransitioning(false);
      }, 400);
    },
    [transitioning]
  );

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Featured recently sold homes"
    >
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.url}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-success/20 border border-success/40 text-success px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" aria-hidden="true" />
            {SLIDES[current].tag} · {SLIDES[current].location}
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
            Recently Sold Homes
            <br />
            <span className="text-accent">Northern Virginia</span>
          </h1>

          <p className="text-white/80 text-lg sm:text-xl mb-8 leading-relaxed max-w-xl">
            See what homes are selling for in your neighborhood.{' '}
            <strong className="text-white font-semibold">500+ homes sold</strong> — local expertise
            that delivers results.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-cta hover:shadow-[0_8px_30px_rgba(37,99,235,0.55)] hover:-translate-y-0.5"
            >
              Get Your Home Value
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/sold"
              className="inline-flex items-center justify-center bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200"
            >
              View Sold Homes
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-12 flex flex-wrap gap-6">
            {[
              { value: '500+', label: 'Homes Sold' },
              { value: '$340M+', label: 'In Sales' },
              { value: '7 Days', label: 'Avg. Days on Market' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="text-white font-display font-bold text-2xl leading-none">
                  {value}
                </span>
                <span className="text-white/60 text-sm mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2" role="tablist" aria-label="Slide navigation">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-8 h-2 bg-accent' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden lg:flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
