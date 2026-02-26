import { ProductsWrapper } from './ProductsWrapper.tsx';
import { useSortedProducts } from '../../../hooks/useSortedProducts.ts';
import { ProductsHeader } from './ProductsHeader.tsx';
import { ProductsFilter } from './ProductsFilter.tsx';
import { Pagination } from '../../common/Pagination.tsx';
import { useProductFilterStore } from '../../../store/product-filter.ts';
import Skeleton from 'react-loading-skeleton';
import { FetchErrorMessage } from '../../common/FetchErrorMessage.tsx';
import FilterDrawer from './FilterDrawer.tsx';

export function ProductPage() {
  const { data, isLoading, isFetching, isError, refetch } = useSortedProducts();
  const { setSkip, skip } = useProductFilterStore();
  const products = data?.data;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <ProductsHeader total={products ? products.total : 0} loading={isLoading || isFetching} />
        <div className="product-filter-container">
          <ProductsFilter loading={isLoading || isFetching} />
        </div>
        <FilterDrawer loading={isLoading || isFetching} />
      </div>
      {isError ? (
        <FetchErrorMessage
          refetch={() => refetch()}
          errorMessage={'Something went wrong while fetching products.'}
        />
      ) : (
        <ProductsWrapper products={products?.products} isLoading={isLoading} />
      )}
      {isLoading || isFetching ? (
        <Skeleton width={'100%'} height={50} />
      ) : (
        <div className="flex justify-center my-4">
          {products && (
            <Pagination
              maxVisible={6}
              currentPage={skip}
              totalPages={products.total}
              onPageChange={(value) => {
                setSkip(value);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
