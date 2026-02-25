import { SearchInput } from '../../common/SearchInput.tsx';
import { useProductFilterStore } from '../../../store/product-filter.ts';
import Skeleton from 'react-loading-skeleton';

export function ProductsHeader({ total, loading = false }: Readonly<Props>) {
  const { search, setSearch } = useProductFilterStore();

  return (
    <div className="products-header">
      <span className="col-span-2">
        {loading ? <Skeleton height={50} /> : <span>{total} Products</span>}
      </span>
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
