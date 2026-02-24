import type { Product } from '../../../services/products/products.type.ts';
import { ProductCard } from './ProductCard.tsx';
import { ProductDialog } from './ProductDialog.tsx';
import { useState } from 'react';
import { useProduct } from '../../../hooks/useProduct.ts';

export function ProductsWrapper({ products }: Readonly<Props>) {
  const [dialog, setDialog] = useState(false);
  const { mutate: getProduct, data, isPending } = useProduct();

  function handleClickOnProduct(productId: number) {
    getProduct(productId);
    setDialog(true);
  }
  return (
    <div className="product-wrapper">
      {products.map((product) => (
        <div onClick={() => handleClickOnProduct(product.id)} key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
      <ProductDialog value={dialog} onChange={setDialog} product={data} isLoading={isPending} />
      {data?.price}
    </div>
  );
}

interface Props {
  products: Product[];
}
