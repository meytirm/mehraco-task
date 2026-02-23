import type { Product } from '../../../services/products/products.type.ts';
import { ProductCard } from './ProductCard.tsx';

export function ProductsWrapper({ products }: Readonly<Props>) {
  return (
    <div className="product-wrapper">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

interface Props {
  products: Product[];
}
