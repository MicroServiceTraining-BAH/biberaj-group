'use client';

import { FilterState } from '@/lib/types';
import { CITIES, PRICE_RANGES } from '@/lib/properties';
import { Dispatch, SetStateAction } from 'react';

type FiltersBarProps = {
  filters: FilterState;
  setFilters: Dispatch<SetStateAction<FilterState>>;
  total: number;
  filtered: number;
};

const BEDS_OPTIONS = ['Any', '1+', '2+', '3+', '4+', '5+'];
const BATHS_OPTIONS = ['Any', '1+', '2+', '3+'];
const TYPE_OPTIONS = ['All Types', 'Single-Family', 'Townhouse', 'Condo'];

export default function FiltersBar({ filters, setFilters, total, filtered }: FiltersBarProps) {
  const set = <K extends keyof FilterState>(key: K, val: FilterState[K]) =>
    setFilters((prev) => ({ ...prev, [key]: val }));

  const reset = () =>
    setFilters({
      city: 'All Cities',
      minPrice: 0,
      maxPrice: Infinity,
      beds: 'Any',
      baths: 'Any',
      propertyType: 'All Types',
      search: '',
    });

  const hasActiveFilters =
    filters.city !== 'All Cities' ||
    filters.minPrice !== 0 ||
    filters.maxPrice !== Infinity ||
    filters.beds !== 'Any' ||
    filters.baths !== 'Any' ||
    filters.propertyType !== 'All Types' ||
    filters.search !== '';

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-card p-5 lg:p-6">
      {/* Search */}
      <div className="mb-5">
        <label htmlFor="search" className="block text-xs font-semibold text-navy-700 uppercase tracking-wide mb-1.5">
          Search by Address or City
        </label>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            id="search"
            type="text"
            placeholder="e.g. Fairfax, Maple Ridge..."
            value={filters.search}
            onChange={(e) => set('search', e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm text-navy focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* City */}
        <div>
          <label htmlFor="city-filter" className="block text-xs font-semibold text-navy-700 uppercase tracking-wide mb-1.5">
            City
          </label>
          <select
            id="city-filter"
            value={filters.city}
            onChange={(e) => set('city', e.target.value)}
            className="w-full border border-slate-200 rounded-xl py-2.5 px-3 text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors appearance-none cursor-pointer"
          >
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price-filter" className="block text-xs font-semibold text-navy-700 uppercase tracking-wide mb-1.5">
            Price Range
          </label>
          <select
            id="price-filter"
            value={`${filters.minPrice}-${filters.maxPrice}`}
            onChange={(e) => {
              const range = PRICE_RANGES.find(
                (r) => `${r.min}-${r.max}` === e.target.value
              );
              if (range) {
                set('minPrice', range.min);
                set('maxPrice', range.max);
              }
            }}
            className="w-full border border-slate-200 rounded-xl py-2.5 px-3 text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors appearance-none cursor-pointer"
          >
            {PRICE_RANGES.map((r) => (
              <option key={r.label} value={`${r.min}-${r.max}`}>
                {r.label}
              </option>
            ))}
          </select>
        </div>

        {/* Beds */}
        <div>
          <fieldset>
            <legend className="block text-xs font-semibold text-navy-700 uppercase tracking-wide mb-1.5">
              Beds
            </legend>
            <div className="flex gap-1 flex-wrap">
              {BEDS_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  onClick={() => set('beds', opt)}
                  className={`flex-1 min-w-[2rem] py-2 rounded-lg text-xs font-semibold transition-colors border ${
                    filters.beds === opt
                      ? 'bg-accent text-white border-accent'
                      : 'bg-white text-navy-700 border-slate-200 hover:border-accent hover:text-accent'
                  }`}
                  aria-pressed={filters.beds === opt}
                >
                  {opt}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Baths */}
        <div>
          <fieldset>
            <legend className="block text-xs font-semibold text-navy-700 uppercase tracking-wide mb-1.5">
              Baths
            </legend>
            <div className="flex gap-1 flex-wrap">
              {BATHS_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  onClick={() => set('baths', opt)}
                  className={`flex-1 min-w-[2rem] py-2 rounded-lg text-xs font-semibold transition-colors border ${
                    filters.baths === opt
                      ? 'bg-accent text-white border-accent'
                      : 'bg-white text-navy-700 border-slate-200 hover:border-accent hover:text-accent'
                  }`}
                  aria-pressed={filters.baths === opt}
                >
                  {opt}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Type */}
        <div>
          <label htmlFor="type-filter" className="block text-xs font-semibold text-navy-700 uppercase tracking-wide mb-1.5">
            Property Type
          </label>
          <select
            id="type-filter"
            value={filters.propertyType}
            onChange={(e) => set('propertyType', e.target.value)}
            className="w-full border border-slate-200 rounded-xl py-2.5 px-3 text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors appearance-none cursor-pointer"
          >
            {TYPE_OPTIONS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Footer row */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
        <p className="text-sm text-navy-600">
          Showing{' '}
          <span className="font-semibold text-navy">{filtered}</span>{' '}
          of{' '}
          <span className="font-semibold text-navy">{total}</span> sold homes
        </p>
        {hasActiveFilters && (
          <button
            onClick={reset}
            className="text-sm font-medium text-accent hover:text-accent-hover transition-colors flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}
