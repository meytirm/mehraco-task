import { useQuery } from '@tanstack/react-query';
import { useProductFilterStore } from '../store/product-filter';
import { productsService } from '../services/products/products';
import { useDebounce } from './useDebounce';

export const useProducts = () => {
  const { category, sortBy, order, search, skip, limit } = useProductFilterStore();

  const debouncedSearch = useDebounce(search, 500);

  return useQuery({
    queryKey: ['products', category, sortBy, order, debouncedSearch, skip, limit],
    queryFn: () =>
      productsService.findAll({
        category,
        sortBy,
        order,
        search: debouncedSearch,
        skip,
        limit,
      }),
    staleTime: 1000 * 30,
  });
};
