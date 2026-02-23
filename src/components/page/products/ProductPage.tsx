import { SearchInput } from '../../common/SearchInput.tsx';
import { useFilteredProducts } from '../../../hooks/useFilteredProducts.ts';
import { Select } from '../../ui/Select.tsx';
import { Switch } from '../../ui/Switch.tsx';
import { ProductsWrapper } from './ProductsWrapper.tsx';
import PriceRangeSlider from '../../common/PriceRangeSlider.tsx';
import Dialog, { type DialogHandle } from '../../ui/Dialog.tsx';
import { useRef } from 'react';

export function ProductPage() {
  const { data, isFetching, isLoading, isError } = useFilteredProducts();
  const dialogRef = useRef<DialogHandle | null>(null);

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
      <button
        onClick={() => dialogRef.current?.open()}
        className="mt-4 px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
      >
        Close
      </button>
      <Dialog ref={dialogRef}>
        <h2 className="text-lg font-bold mb-4">Centered Dialog</h2>
        <p>Click outside or the button below to close.</p>
        <button
          onClick={() => dialogRef.current?.close()}
          className="mt-4 px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
        >
          Close
        </button>
      </Dialog>
    </div>
  );
}
