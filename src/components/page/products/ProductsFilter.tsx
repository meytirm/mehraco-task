import { Select } from '../../ui/Select.tsx';
import { type ProductFilterState, useProductFilterStore } from '../../../store/product-filter.ts';
import { useBrands } from '../../../hooks/useBrands.ts';
import { useCategories } from '../../../hooks/useCategories.ts';
import { Switch } from '../../ui/Switch.tsx';
import PriceRangeSlider from '../../common/PriceRangeSlider.tsx';
import { LoaderIcon } from 'lucide-react';
import type { Product } from '../../../services/products/products.type.ts';
import { useMinMaxPrices } from '../../../hooks/useMinMaxPrices.ts';

const orderIdOptions = [
  { label: 'Newest', value: 'asc' },
  { label: 'Oldest', value: 'desc' },
];
export function ProductsFilter({ loading, products }: Readonly<Props>) {
  const brands = useBrands();
  const { data: categoryData } = useCategories();
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

  if (loading) {
    return <LoaderIcon className="animate-spin" />;
  }

  if (!products) {
    return <div>there is no products</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div className="grid grid-cols-5 gap-2 grow">
          <div className="col-span-1">
            <Select
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
            <Select
              placeholder={'Category'}
              isSearchable={false}
              isClearable
              options={categoryData ? categoryData.data : []}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.slug}
              onChange={(newValue) => setCategory(newValue ? newValue.slug : null)}
              value={categoryData ? categoryData.data.find((c) => c.slug === category) : null}
            />
          </div>

          <div className="col-span-1">
            <Select
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
        <Switch
          label={'in stock'}
          value={inStockOnly}
          onChange={(value) => setInStockOnly(value)}
        />
      </div>
      <div className="">
        <PriceRangeSlider
          min={calculatedMinPrice}
          max={calculatedMaxPrice}
          values={[minPrice, maxPrice]}
          onChange={(values) => {
            setMinPrice(values[0]);
            setMaxPrice(values[1]);
          }}
        />
      </div>
    </div>
  );
}

interface Props {
  loading: boolean;
  products?: Product[];
}
