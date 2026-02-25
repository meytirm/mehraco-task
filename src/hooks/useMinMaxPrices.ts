import { useProducts } from './useProducts.ts';
import { useProductFilterStore } from '../store/product-filter.ts';
import { useEffect } from 'react';

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
    setMinPrice(calculatedMinPrice);
    setMaxPrice(calculatedMaxPrice);
  }, [data]);

  return { calculatedMinPrice, calculatedMaxPrice };
}
