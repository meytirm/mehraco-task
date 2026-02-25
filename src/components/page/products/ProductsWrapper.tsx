import type { Product } from '../../../services/products/products.type.ts';
import { ProductCard } from './ProductCard.tsx';
import { ProductDialog } from './product-dialog/ProductDialog.tsx';
import { useState } from 'react';
import { useProduct } from '../../../hooks/useProduct.ts';
import Skeleton from 'react-loading-skeleton';

export function ProductsWrapper({ products, isLoading = false }: Readonly<Props>) {
  const [dialog, setDialog] = useState(false);
  const { mutate: getProduct, data, isPending } = useProduct();

  function handleClickOnProduct(productId: number) {
    getProduct(productId);
    setDialog(true);
  }

  if (!products || isLoading) {
    return (
      <div className="product-wrapper">
        {Array.from({ length: 16 }, (_, i) => (
          <div key={i}>
            <Skeleton width={'100%'} height={375} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="product-wrapper">
      {products.map((product) => (
        <div onClick={() => handleClickOnProduct(product.id)} key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
      <ProductDialog value={dialog} onChange={setDialog} product={data} isLoading={isPending} />
    </div>
  );
}

interface Props {
  products?: Product[];
  isLoading?: boolean;
}
