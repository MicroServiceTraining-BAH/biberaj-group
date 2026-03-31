export const formatPrice = (price: number): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);

export const formatNumber = (n: number): string =>
  new Intl.NumberFormat('en-US').format(n);
