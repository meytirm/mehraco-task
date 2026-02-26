import { useMemo } from 'react';
import { useProducts } from './useProducts';
import { useProductFilterStore } from '../store/product-filter';
import { useDebounce } from './useDebounce.ts';

export const useFilteredProducts = () => {
  const { data, ...rest } = useProducts();
  const { minPrice, maxPrice, brands: selectedBrands, inStockOnly } = useProductFilterStore();

  const debouncedMinPrice = useDebounce(minPrice, 500);
  const debouncedMaxPrice = useDebounce(maxPrice, 500);

  const filteredData = useMemo(() => {
    if (!data?.data.products) return data;
    const items = data.data.products.filter((product) => {
      if (debouncedMinPrice && product.price < debouncedMinPrice) return false;
      if (debouncedMaxPrice && product.price > debouncedMaxPrice) return false;
      if (selectedBrands.length > 0 && !selectedBrands.some((sb) => product.brand === sb.value))
        return false;
      if (!inStockOnly && product.stock <= 0) return false;
      return true;
    });

    return { ...data, data: { ...data.data, products: items } };
  }, [data, debouncedMinPrice, debouncedMaxPrice, selectedBrands, inStockOnly]);

  return { data: filteredData, ...rest };
};
