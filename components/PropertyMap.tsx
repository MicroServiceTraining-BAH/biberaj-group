'use client';

import { useEffect, useRef } from 'react';
import type { Map, Marker, DivIcon } from 'leaflet';
import { Property } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

type PropertyMapProps = {
  properties: Property[];
  activeCity: string | null;
  onActiveCityChange: (city: string | null) => void;
};

function makeIcon(L: typeof import('leaflet'), active: boolean): DivIcon {
  const bg = active ? '#2563EB' : '#22C55E';
  const size = active ? 26 : 22;
  return L.divIcon({
    className: '',
    html: `<div style="
      background:${bg};
      border:2.5px solid #fff;
      border-radius:50% 50% 50% 0;
      width:${size}px;height:${size}px;
      transform:rotate(-45deg);
      box-shadow:0 2px 10px rgba(0,0,0,${active ? '0.4' : '0.25'});
      transition:all 0.2s ease;
    "></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [1, -size - 4],
  });
}

export default function PropertyMap({ properties, activeCity, onActiveCityChange }: PropertyMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);
  const markersByCity = useRef<Record<string, Marker[]>>({});
  const leafletRef = useRef<typeof import('leaflet') | null>(null);

  // Init map once
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    import('leaflet').then((L) => {
      leafletRef.current = L;

      // @ts-expect-error — leaflet internal
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const map = L.map(containerRef.current!, { scrollWheelZoom: false }).setView([38.88, -77.2], 10);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      // Group markers by city
      const byCity: Record<string, Marker[]> = {};

      properties.forEach((p) => {
        const icon = makeIcon(L, false);
        const marker = L.marker([p.lat, p.lng], { icon });

        const popup = L.popup({ maxWidth: 240 }).setContent(`
          <div style="font-family:Inter,sans-serif;padding:4px 2px;">
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
              <span style="background:#22C55E;color:#fff;font-size:10px;font-weight:700;padding:2px 7px;border-radius:99px;">SOLD</span>
              <span style="font-size:10px;color:#64748B;">${p.soldDate}</span>
            </div>
            <p style="font-weight:700;font-size:15px;color:#0F172A;margin:0 0 2px;">${formatPrice(p.soldPrice)}</p>
            <p style="font-size:12px;color:#334155;margin:0 0 6px;line-height:1.4;">${p.address}<br/>${p.city}, ${p.state} ${p.zip}</p>
            <div style="display:flex;gap:10px;font-size:11px;color:#475569;border-top:1px solid #E2E8F0;padding-top:6px;margin-top:4px;">
              <span>${p.beds} bd</span>
              <span>${p.baths} ba</span>
              <span>${p.sqft.toLocaleString()} sqft</span>
              <span style="margin-left:auto;color:#2563EB;font-weight:600;">${p.daysOnMarket}d on market</span>
            </div>
          </div>
        `);

        marker.bindPopup(popup).addTo(map);
        marker.on('mouseover', () => {
          marker.openPopup();
          onActiveCityChange(p.city);
        });
        marker.on('mouseout', () => onActiveCityChange(null));

        if (!byCity[p.city]) byCity[p.city] = [];
        byCity[p.city].push(marker);
      });

      markersByCity.current = byCity;
      mapRef.current = map;
    });

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // React to activeCity changes — update pin colours
  useEffect(() => {
    const L = leafletRef.current;
    if (!L || !mapRef.current) return;

    Object.entries(markersByCity.current).forEach(([city, markers]) => {
      const isActive = activeCity === city;
      markers.forEach((m) => m.setIcon(makeIcon(L, isActive)));
    });

    // Pan map to city
    if (activeCity && markersByCity.current[activeCity]?.length) {
      const first = markersByCity.current[activeCity][0];
      mapRef.current.panTo(first.getLatLng(), { animate: true, duration: 0.5 });
    }
  }, [activeCity]);

  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossOrigin="" />
      <div
        ref={containerRef}
        style={{ height: 480, width: '100%' }}
        className="rounded-2xl overflow-hidden border border-slate-200 shadow-card"
        aria-label="Map showing recently sold homes in Northern Virginia"
        role="img"
      />
    </>
  );
}
