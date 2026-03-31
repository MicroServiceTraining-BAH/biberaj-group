'use client';

import { useEffect, useRef } from 'react';
import { Property } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

type PropertyMapProps = {
  properties: Property[];
};

export default function PropertyMap({ properties }: PropertyMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import('leaflet').Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Dynamically import leaflet (client-only)
    import('leaflet').then((L) => {
      // Fix default icon paths broken by webpack
      // @ts-expect-error — leaflet internal type
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const map = L.map(containerRef.current!, {
        scrollWheelZoom: false,
        zoomControl: true,
      }).setView([38.88, -77.2], 10);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      // Sold green badge icon
      const soldIcon = L.divIcon({
        className: '',
        html: `
          <div style="
            background:#22C55E;
            border:2px solid #fff;
            border-radius:50% 50% 50% 0;
            width:22px;height:22px;
            transform:rotate(-45deg);
            box-shadow:0 2px 8px rgba(0,0,0,0.3);
          "></div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 22],
        popupAnchor: [1, -26],
      });

      properties.forEach((p) => {
        const marker = L.marker([p.lat, p.lng], { icon: soldIcon });

        const popup = L.popup({ maxWidth: 240, className: 'property-popup' }).setContent(`
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

        marker.on('mouseover', () => marker.openPopup());
      });

      mapRef.current = map;
    });

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [properties]);

  return (
    <>
      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        crossOrigin=""
      />
      <div
        ref={containerRef}
        style={{ height: '480px', width: '100%' }}
        className="rounded-2xl overflow-hidden border border-slate-200 shadow-card z-0"
        aria-label="Map showing recently sold homes in Northern Virginia"
        role="img"
      />
    </>
  );
}
