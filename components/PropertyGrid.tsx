'use client';

import { useState, useMemo } from 'react';
import { properties } from '@/lib/properties';
import { FilterState } from '@/lib/types';
import PropertyCard from './PropertyCard';
import FiltersBar from './FiltersBar';
import Link from 'next/link';

const DEFAULT_FILTERS: FilterState = {
  city: 'All Cities',
  minPrice: 0,
  maxPrice: Infinity,
  beds: 'Any',
  baths: 'Any',
  propertyType: 'All Types',
  search: '',
};

const parseMinBeds = (opt: string) => (opt === 'Any' ? 0 : parseInt(opt));

export default function PropertyGrid() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (filters.city !== 'All Cities' && p.city !== filters.city) return false;
      if (p.soldPrice < filters.minPrice || p.soldPrice > filters.maxPrice) return false;
      if (parseMinBeds(filters.beds) > 0 && p.beds < parseMinBeds(filters.beds)) return false;
      if (parseMinBeds(filters.baths) > 0 && p.baths < parseMinBeds(filters.baths)) return false;
      if (filters.propertyType !== 'All Types' && p.propertyType !== filters.propertyType)
        return false;
      if (filters.search) {
        const q = filters.search.toLowerCase();
        if (
          !p.address.toLowerCase().includes(q) &&
          !p.city.toLowerCase().includes(q) &&
          !p.zip.includes(q)
        )
          return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <div>
      <FiltersBar
        filters={filters}
        setFilters={setFilters}
        total={properties.length}
        filtered={filtered.length}
      />

      <div className="mt-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-navy text-xl mb-2">No homes found</h3>
            <p className="text-navy-600 mb-6 text-sm">
              Try adjusting your filters to see more results.
            </p>
            <button
              onClick={() => setFilters(DEFAULT_FILTERS)}
              className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      {filtered.length > 0 && (
        <div className="mt-12 text-center bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 border border-accent/20">
          <p className="font-display font-bold text-navy text-xl mb-2">
            Don&apos;t see your neighborhood?
          </p>
          <p className="text-navy-600 text-sm mb-6">
            We sell homes across all of Northern Virginia. Find out what yours is worth today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-cta hover:-translate-y-0.5"
          >
            Get a Free Home Valuation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
