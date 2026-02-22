import { create } from 'zustand';

type ProductFilterState = {
  category: string | null;
  brands: string[];
  sortBy?: 'price' | 'id' | 'discountPercentage';
  order: 'asc' | 'desc';
  search: string;
  skip: number;
  limit: number;
  minPrice: number | null;
  maxPrice: number | null;

  setCategory: (v: string | null) => void;
  setSort: (v: ProductFilterState['sortBy']) => void;
  setOrder: (v: ProductFilterState['order']) => void;
  setSearch: (v: string) => void;
  setPage: (v: number) => void;
  setMinPrice: (v: number | null) => void;
  setMaxPrice: (v: number | null) => void;
};

export const useProductFilterStore = create<ProductFilterState>((set) => ({
  category: null,
  brands: [],
  sortBy: 'id',
  order: 'asc',
  search: '',
  skip: 1,
  limit: 10,
  minPrice: null,
  maxPrice: null,

  setMinPrice: (minPrice) => set({ minPrice }),
  setMaxPrice: (maxPrice) => set({ maxPrice }),
  setCategory: (category) => set({ category, skip: 1 }),
  setSort: (sortBy) => set({ sortBy }),
  setOrder: (order) => set({ order }),
  setSearch: (search) => set({ search, skip: 1 }),
  setPage: (skip) => set({ skip }),
}));
