import { ProductsWrapper } from './ProductsWrapper.tsx';
import { useSortedProducts } from '../../../hooks/useSortedProducts.ts';
import { ProductsHeader } from './ProductsHeader.tsx';
import { ProductsFilter } from './ProductsFilter.tsx';
import { Pagination } from '../../common/Pagination.tsx';
import { useProductFilterStore } from '../../../store/product-filter.ts';
import { Button } from '../../ui/Button.tsx';
import Skeleton from 'react-loading-skeleton';

export function ProductPage() {
  const { data, isLoading, isFetching, isError, refetch } = useSortedProducts();
  const { setSkip, skip, setMaxPrice, setMinPrice } = useProductFilterStore();
  const products = data?.data;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <ProductsHeader total={products ? products.total : 0} loading={isLoading || isFetching} />
        <div className="product-filter-container">
          <ProductsFilter loading={isLoading || isFetching} products={products?.products} />
        </div>
      </div>
      {isError ? (
        <div className="flex flex-col items-center justify-center border border-muted rounded-xl p-4 gap-2 bg-white">
          <div className="text-red-600">Something went wrong while fetching products.</div>
          <Button onClick={() => refetch()} className={'bg-muted'}>
            <span>Retry!</span>
          </Button>
        </div>
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
                setMinPrice(null);
                setMaxPrice(null);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
