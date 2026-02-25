import { create } from 'zustand';

export type ProductFilterState = {
  category: string | null;
  brands: { label: string; value: string }[];
  sortBy?: 'price' | 'id' | 'discountPercentage';
  order: 'asc' | 'desc';
  search: string;
  skip: number;
  limit: number;
  minPrice: number;
  maxPrice: number;
  inStockOnly: boolean;
  priceSort: 'asc' | 'desc' | null;

  setCategory: (v: string | null) => void;
  setSort: (v: ProductFilterState['sortBy']) => void;
  setOrder: (v: ProductFilterState['order']) => void;
  setSearch: (v: string) => void;
  setSkip: (v: number) => void;
  setMinPrice: (v: number) => void;
  setMaxPrice: (v: number) => void;
  setInStockOnly: (v: boolean) => void;
  setPriceSort: (v: 'asc' | 'desc' | null) => void;
  setBrands: (v: { label: string; value: string }[]) => void;
};

export const useProductFilterStore = create<ProductFilterState>((set) => ({
  category: null,
  brands: [],
  sortBy: 'id',
  order: 'asc',
  search: '',
  skip: 1,
  limit: 16,
  minPrice: 1,
  maxPrice: 2,
  inStockOnly: true,
  priceSort: null,

  setMinPrice: (minPrice) => set({ minPrice }),
  setMaxPrice: (maxPrice) => set({ maxPrice }),
  setCategory: (category) => set({ category, skip: 1 }),
  setSort: (sortBy) => set({ sortBy }),
  setOrder: (order) => set({ order }),
  setSearch: (search) => set({ search, skip: 1 }),
  setSkip: (skip) => set({ skip }),
  setInStockOnly: (inStockOnly) => set({ inStockOnly }),
  setPriceSort: (priceSort) => set({ priceSort }),
  setBrands: (brands) => set({ brands }),
}));
