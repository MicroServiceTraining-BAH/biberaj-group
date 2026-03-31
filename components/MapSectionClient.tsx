'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { properties } from '@/lib/properties';
import { formatPrice } from '@/lib/utils';

const PropertyMap = dynamic(() => import('./PropertyMap'), {
  ssr: false,
  loading: () => (
    <div
      className="rounded-2xl border border-slate-200 shadow-card bg-slate-100 animate-pulse"
      style={{ height: 480 }}
      aria-hidden="true"
    />
  ),
});

const CITIES = ['Fairfax', 'Arlington', 'Alexandria', 'Reston', 'Herndon', 'Ashburn'];

export default function MapSectionClient() {
  const [activeCity, setActiveCity] = useState<string | null>(null);

  return (
    <div className="grid lg:grid-cols-3 gap-8 items-start">
      {/* Interactive map */}
      <div className="lg:col-span-2">
        <PropertyMap
          properties={properties}
          activeCity={activeCity}
          onActiveCityChange={setActiveCity}
        />
      </div>

      {/* City table */}
      <div className="bg-bg rounded-2xl border border-slate-200 p-5 shadow-card">
        <h3 className="font-display font-bold text-navy text-lg mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" aria-hidden="true" />
          Recent Sales by Area
        </h3>

        {/* onMouseLeave on the ul — not individual rows — prevents flicker when crossing rows */}
        <ul
          className="space-y-0"
          role="list"
          aria-label="Recent sold homes by city"
          onMouseLeave={() => setActiveCity(null)}
        >
          {CITIES.map((city) => {
            const cityProps = properties.filter((p) => p.city === city);
            if (cityProps.length === 0) return null;
            const latest = cityProps[0];
            const isActive = activeCity === city;

            return (
              <li key={city}>
                <button
                  className={`w-full text-left flex items-center justify-between px-3 py-3.5 rounded-xl border transition-all duration-200 ${
                    isActive
                      ? 'bg-accent/8 border-accent/30 shadow-sm'
                      : 'border-transparent hover:bg-slate-50 hover:border-slate-200'
                  }`}
                  onMouseEnter={() => setActiveCity(city)}
                  onFocus={() => setActiveCity(city)}
                  onBlur={() => setActiveCity(null)}
                  aria-label={`${city}: ${cityProps.length} homes sold, latest sold for ${formatPrice(latest.soldPrice)}`}
                >
                  <div className="flex items-center gap-2.5">
                    {/* City pin dot */}
                    <span
                      className={`w-2.5 h-2.5 rounded-full flex-shrink-0 transition-colors duration-200 ${
                        isActive ? 'bg-accent' : 'bg-success'
                      }`}
                      aria-hidden="true"
                    />
                    <div>
                      <p className={`font-semibold text-sm transition-colors duration-200 ${isActive ? 'text-accent' : 'text-navy'}`}>
                        {city}
                      </p>
                      <p className="text-navy-600 text-xs mt-0.5">
                        {cityProps.length} home{cityProps.length > 1 ? 's' : ''} sold recently
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className={`font-bold text-sm transition-colors duration-200 ${isActive ? 'text-accent' : 'text-navy'}`}>
                      {formatPrice(latest.soldPrice)}
                    </p>
                    <p className="text-success text-xs font-semibold">
                      Sold in {latest.daysOnMarket}d
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-4 pt-4 border-t border-slate-200">
          <p className="text-xs text-navy-600 text-center">
            Hover a city to highlight its pins on the map
          </p>
        </div>
      </div>
    </div>
  );
}
