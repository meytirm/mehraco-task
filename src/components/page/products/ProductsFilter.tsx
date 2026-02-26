import { Select } from '../../ui/Select.tsx';
import { type ProductFilterState, useProductFilterStore } from '../../../store/product-filter.ts';
import { useBrands } from '../../../hooks/useBrands.ts';
import { useCategories } from '../../../hooks/useCategories.ts';
import PriceRangeSlider from '../../common/PriceRangeSlider.tsx';
import { useMinMaxPrices } from '../../../hooks/useMinMaxPrices.ts';
import Skeleton from 'react-loading-skeleton';
import { Button } from '../../ui/Button.tsx';
import { InStockSwitch } from './InStockSwitch.tsx';

const orderIdOptions = [
  { label: 'Newest', value: 'asc' },
  { label: 'Oldest', value: 'desc' },
];
export function ProductsFilter({ loading }: Readonly<Props>) {
  const brands = useBrands();
  const {
    data: categoryData,
    isLoading: categoryIsLoading,
    isRefetching,
    refetch,
    isError,
  } = useCategories();
  const {
    setOrder,
    setSort,
    setPriceSort,
    order,
    setCategory,
    category,
    setBrands,
    brands: selectedBrands,
    setInStockOnly,
    inStockOnly,
    setMaxPrice,
    setMinPrice,
    minPrice,
    maxPrice,
  } = useProductFilterStore();
  const { calculatedMinPrice, calculatedMaxPrice } = useMinMaxPrices();

  return (
    <div className="flex md:flex-col flex-col-reverse md:gap-16 gap-6">
      <div className="md:hidden block">
        <InStockSwitch loading={loading} value={inStockOnly} onChange={setInStockOnly} />
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 grow">
          <div className="col-span-1">
            <Select
              isLoading={loading}
              isDisabled={loading}
              isSearchable={false}
              options={orderIdOptions}
              onChange={(newValue) => {
                setSort('id');
                setOrder(newValue?.value as ProductFilterState['order']);
              }}
              value={orderIdOptions.find((options) => options.value === order)}
            />
          </div>

          <div className="col-span-1">
            <Select
              isLoading={loading}
              isDisabled={loading}
              isSearchable={false}
              placeholder={'price'}
              options={[
                { label: 'Lowest Price', value: 'asc' },
                { label: 'Highest Price', value: 'desc' },
              ]}
              onChange={(newValue) => {
                setPriceSort(newValue?.value as ProductFilterState['order']);
              }}
            />
          </div>

          <div className="col-span-1">
            {isError ? (
              <Button className="w-full" onClick={() => refetch()}>
                Refetch!
              </Button>
            ) : (
              <Select
                isLoading={loading || isRefetching || categoryIsLoading}
                isDisabled={loading || categoryIsLoading || isRefetching}
                placeholder={'Category'}
                isSearchable={false}
                isClearable
                options={categoryData ? categoryData.data : []}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.slug}
                onChange={(newValue) => setCategory(newValue ? newValue.slug : null)}
                value={categoryData ? categoryData.data.find((c) => c.slug === category) : null}
              />
            )}
          </div>

          <div className="col-span-1">
            <Select
              isLoading={loading}
              isDisabled={loading}
              placeholder={'Brand'}
              isSearchable={false}
              isClearable
              isMulti
              options={brands.map((brand) => ({ label: brand, value: brand }))}
              onChange={(newValue) => setBrands([...newValue])}
              value={selectedBrands}
              hideSelectedOptions={false}
              controlShouldRenderValue={false}
              closeMenuOnSelect={false}
            />
          </div>
        </div>
        <div className="md:block hidden">
          <InStockSwitch loading={loading} value={inStockOnly} onChange={setInStockOnly} />
        </div>
      </div>
      <div className="flex flex-row-reverse">
        {loading ? (
          <Skeleton height={50} width={250} />
        ) : (
          <div className="md:block flex justify-center md:w-auto w-full">
            <PriceRangeSlider
              min={calculatedMinPrice}
              max={calculatedMaxPrice}
              values={[minPrice ?? calculatedMinPrice, maxPrice ?? calculatedMaxPrice]}
              onChange={(values) => {
                setMinPrice(values[0]);
                setMaxPrice(values[1]);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

interface Props {
  loading: boolean;
}
