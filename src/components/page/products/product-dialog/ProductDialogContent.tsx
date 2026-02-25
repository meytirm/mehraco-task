import type { Product } from '../../../../services/products/products.type.ts';
import { ProductDialogSwiper } from './ProductDialogSwiper.tsx';
import { ProductDialogInfo } from './ProductDialogInfo.tsx';
import Skeleton from 'react-loading-skeleton';

interface Props {
  isLoading?: boolean;
  product?: Product;
  isError?: boolean;
}

export function ProductDialogContent({ isLoading = false, product }: Readonly<Props>) {
  if (isLoading) {
    return (
      <div className="product-dialog-content">
        <div className="w-[50%] flex flex-col gap-4">
          <Skeleton width={'100%'} height={400} />
          <Skeleton width={'100%'} height={150} />
        </div>
        <div className="w-[50%] flex flex-col gap-4">
          <Skeleton width={'100%'} height={100} />
          <Skeleton width={'100%'} count={4} />
          <Skeleton width={'100%'} count={2} />
          <Skeleton width={'100%'} height={100} />
          <Skeleton width={'100%'} height={150} />
        </div>
      </div>
    );
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
