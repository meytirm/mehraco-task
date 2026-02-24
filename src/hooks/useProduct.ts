import { useMutation } from '@tanstack/react-query';
import { productsService } from '../services/products/products.ts';
import type { Product } from '../services/products/products.type.ts';

export function useProduct() {
  return useMutation<Product, Error, number>({
    mutationFn: async (id: number) => {
      const response = await productsService.findById(id);
      return response.data;
    },
  });
}
