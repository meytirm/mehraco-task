import { api } from '../api.ts';
import type { ProductsType } from './products.type.ts';

export type ProductFilters = {
  category?: string | null;
  sortBy?: 'price' | 'id' | 'discountPercentage';
  order?: 'asc' | 'desc';
  search?: string;
  skip?: number;
  limit?: number;
};

function findAll(productsFilters: ProductFilters) {
  const { category, search, ...rest } = productsFilters;
  const categoryParam = category ? `/category/${category}` : '';
  const searchParam = search ? `/search?q=${search}` : '';

  return api.get<ProductsType>(`/products${categoryParam}${searchParam}`, {
    params: rest,
  });
}

function findAllCategories() {
  return api.get<string[]>('/products/categories');
}

export const productsService = {
  findAll,
  findAllCategories,
};
