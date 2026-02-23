import { SearchInput } from '../../common/SearchInput.tsx';
import { useFilteredProducts } from '../../../hooks/useFilteredProducts.ts';
import { Select } from '../../ui/Select.tsx';
import { Switch } from '../../ui/Switch.tsx';
import { ProductsWrapper } from './ProductsWrapper.tsx';
import PriceRangeSlider from '../../common/PriceRangeSlider.tsx';

export function ProductPage() {
  const { data, isFetching, isLoading, isError } = useFilteredProducts();

  const products = data?.data;
  let minPrice = 0;
  let maxPrice = 1;
  if (products) {
    const prices = products.products.map((product) => product.price);
    minPrice = Math.min(...prices);
    maxPrice = Math.max(...prices);
  }
  return (
    <div>
      <div className="products-header">
        <span>{products && products.total} Products</span>
        <div className="grow">
          <SearchInput />
        </div>
      </div>
      <Select
        placeholder={'price'}
        isSearchable={false}
        isClearable
        isMulti
        options={[
          { label: 'asc', value: 'asc' },
          { label: 'desc', value: 'desc' },
        ]}
      />
      {(isFetching || isLoading) && 'loading...'}
      {isError && 'error'}
      <Switch label={'in stock'} />
      {products && <ProductsWrapper products={products.products} />}
      <PriceRangeSlider min={minPrice} max={maxPrice} />
    </div>
  );
}
