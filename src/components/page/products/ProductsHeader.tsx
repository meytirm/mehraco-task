import { SearchInput } from '../../common/SearchInput.tsx';
import { useProductFilterStore } from '../../../store/product-filter.ts';

export function ProductsHeader({ total, loading = false }: Readonly<Props>) {
  const { search, setSearch } = useProductFilterStore();

  if (loading) {
    return <div>loading header...</div>;
  }
  return (
    <div className="products-header">
      <span className="col-span-2">{total} Products</span>
      <div className="col-span-10">
        <SearchInput onSearch={(query) => setSearch(query)} value={search} />
      </div>
    </div>
  );
}

interface Props {
  total: number;
  loading?: boolean;
}
