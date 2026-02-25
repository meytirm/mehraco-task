import { ProductsWrapper } from './ProductsWrapper.tsx';
import { useSortedProducts } from '../../../hooks/useSortedProducts.ts';
import { ProductsHeader } from './ProductsHeader.tsx';
import { ProductsFilter } from './ProductsFilter.tsx';

export function ProductPage() {
  const { data, isLoading, isFetching } = useSortedProducts();

  const products = data?.data;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <ProductsHeader total={products ? products.total : 0} loading={isLoading || isFetching} />
        <div className="product-filter-container">
          <ProductsFilter loading={isLoading || isFetching} products={products?.products} />
        </div>
      </div>
      {products ? <ProductsWrapper products={products.products} /> : null}
    </div>
  );
}
