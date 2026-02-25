import { useFilteredProducts } from './useFilteredProducts.ts';
import { useProductFilterStore } from '../store/product-filter.ts';
import { useMemo } from 'react';
import type { Product } from '../services/products/products.type.ts';

export function useSortedProducts() {
  const { data, ...rest } = useFilteredProducts();
  const { priceSort } = useProductFilterStore();

  const sortedData = useMemo(() => {
    if (!data?.data.products) return data;

    let items: Product[] = [];
    if (priceSort) {
      if (priceSort === 'asc') {
        items = data.data.products.sort((a, b) => a.price - b.price);
      }
      if (priceSort === 'desc') {
        items = data.data.products.sort((a, b) => b.price - a.price);
      }
    }

    return { ...data, items };
  }, [data, priceSort]);

  return { data: sortedData, ...rest };
}
