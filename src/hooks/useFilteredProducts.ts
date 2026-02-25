import { useMemo } from 'react';
import { useProducts } from './useProducts';
import { useProductFilterStore } from '../store/product-filter';

export const useFilteredProducts = () => {
  const { data, ...rest } = useProducts();
  const { minPrice, maxPrice, brands: selectedBrands, inStockOnly } = useProductFilterStore();

  const filteredData = useMemo(() => {
    if (!data?.data.products) return data;
    const items = data.data.products.filter((product) => {
      if (minPrice && product.price < minPrice) return false;
      if (maxPrice && product.price > maxPrice) return false;
      if (selectedBrands.length > 0 && !selectedBrands.some((sb) => product.brand === sb.value))
        return false;
      if (!inStockOnly && product.stock <= 0) return false;
      return true;
    });

    return { ...data, data: { ...data.data, products: items } };
  }, [data, minPrice, maxPrice, selectedBrands, inStockOnly]);

  return { data: filteredData, ...rest };
};
