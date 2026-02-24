import type { Product } from '../../../services/products/products.type.ts';

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
      <div className="bg-red-200">1</div>
      <div className="bg-red-200">1</div>
    </div>
  );
}
