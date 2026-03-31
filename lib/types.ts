export type PropertyType = 'Single-Family' | 'Townhouse' | 'Condo';

export type Property = {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  soldPrice: number;
  beds: number;
  baths: number;
  sqft: number;
  daysOnMarket: number;
  propertyType: PropertyType;
  soldDate: string;
  lat: number;
  lng: number;
  imageUrl: string;
  listPrice: number;
};

export type FilterState = {
  city: string;
  minPrice: number;
  maxPrice: number;
  beds: string;
  baths: string;
  propertyType: string;
  search: string;
};
