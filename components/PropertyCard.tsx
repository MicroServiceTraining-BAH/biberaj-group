import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

type PropertyCardProps = {
  property: Property;
};

const TYPE_COLORS: Record<string, string> = {
  'Single-Family': 'bg-blue-50 text-blue-700',
  Townhouse: 'bg-purple-50 text-purple-700',
  Condo: 'bg-amber-50 text-amber-700',
};

export default function PropertyCard({ property }: PropertyCardProps) {
  const overAsk = property.soldPrice > property.listPrice;
  const priceDiff = Math.abs(
    Math.round(((property.soldPrice - property.listPrice) / property.listPrice) * 100)
  );

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={property.imageUrl}
          alt={`${property.address}, ${property.city}, VA — sold for ${formatPrice(property.soldPrice)}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-success text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
            SOLD
          </span>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm ${
              TYPE_COLORS[property.propertyType] ?? 'bg-white/90 text-navy-800'
            }`}
          >
            {property.propertyType}
          </span>
        </div>

        {/* Days badge */}
        <div className="absolute top-3 right-3 bg-navy/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          Sold in {property.daysOnMarket}d
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-navy/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors shadow-lg"
            tabIndex={0}
          >
            What&apos;s My Home Worth?
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Price row */}
        <div className="flex items-baseline justify-between mb-2">
          <span className="font-display font-bold text-navy text-xl">
            {formatPrice(property.soldPrice)}
          </span>
          {overAsk ? (
            <span className="text-xs font-semibold text-success bg-success/10 px-2 py-0.5 rounded-full">
              +{priceDiff}% over ask
            </span>
          ) : (
            <span className="text-xs font-medium text-navy-600">
              List: {formatPrice(property.listPrice)}
            </span>
          )}
        </div>

        {/* Address */}
        <p className="font-semibold text-navy-800 text-sm leading-snug">
          {property.address}
        </p>
        <p className="text-navy-600 text-sm mb-4">
          {property.city}, {property.state} {property.zip}
        </p>

        {/* Details */}
        <div className="mt-auto pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="font-bold text-navy text-sm">{property.beds}</p>
            <p className="text-navy-600 text-xs">
              {property.beds === 1 ? 'Bed' : 'Beds'}
            </p>
          </div>
          <div>
            <p className="font-bold text-navy text-sm">{property.baths}</p>
            <p className="text-navy-600 text-xs">
              {property.baths === 1 ? 'Bath' : 'Baths'}
            </p>
          </div>
          <div>
            <p className="font-bold text-navy text-sm">
              {property.sqft.toLocaleString()}
            </p>
            <p className="text-navy-600 text-xs">Sq Ft</p>
          </div>
        </div>
      </div>
    </article>
  );
}
