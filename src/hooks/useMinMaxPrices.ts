import { useProducts } from './useProducts.ts';
import { useEffect } from 'react';
import { useProductFilterStore } from '../store/product-filter.ts';

export function useMinMaxPrices() {
  const { data } = useProducts();
  const { setMaxPrice, setMinPrice } = useProductFilterStore();

  const prices =
    data && data.data.products.length > 0
      ? data.data.products.map((product) => product.price)
      : [1, 2];
  const calculatedMinPrice = Math.floor(Math.min(...prices));
  const calculatedMaxPrice = Math.ceil(Math.max(...prices));

  useEffect(() => {
    setMinPrice(null);
    setMaxPrice(null);
  }, [data]);

  return { calculatedMinPrice, calculatedMaxPrice };
}
