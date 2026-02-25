import { useProducts } from './useProducts.ts';

export function useMinMaxPrices() {
  const { data } = useProducts();

  const prices =
    data && data.data.products.length > 0
      ? data.data.products.map((product) => product.price)
      : [1, 2];
  const calculatedMinPrice = Math.floor(Math.min(...prices));
  const calculatedMaxPrice = Math.ceil(Math.max(...prices));

  return { calculatedMinPrice, calculatedMaxPrice };
}
