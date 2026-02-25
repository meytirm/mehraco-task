import { useQuery } from '@tanstack/react-query';
import { productsService } from '../services/products/products.ts';

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => productsService.findAllCategories(),
    staleTime: Infinity,
  });
}
