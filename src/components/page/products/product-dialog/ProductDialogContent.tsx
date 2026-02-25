import type { Product } from '../../../../services/products/products.type.ts';
import { ProductDialogSwiper } from './ProductDialogSwiper.tsx';
import { ProductDialogInfo } from './ProductDialogInfo.tsx';

interface Props {
  loading: boolean;
  product?: Product;
}

export function ProductDialogContent({ loading, product }: Readonly<Props>) {
  if (loading) {
    return <div>loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="product-dialog-content">
      <div className="w-[50%]">
        <ProductDialogSwiper product={product} />
      </div>
      <div className="w-[50%]">
        <ProductDialogInfo product={product} />
      </div>
    </div>
  );
}
