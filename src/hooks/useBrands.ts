import { useProducts } from './useProducts.ts';

export function useBrands() {
  const { data } = useProducts();

  if (!data) return [];

  const brands = data.data.products.map((product) => product.brand);

  return [...new Set(brands)]; // remove duplicates
}
