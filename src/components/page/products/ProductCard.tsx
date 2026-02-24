import type { Product } from '../../../services/products/products.type.ts';
import { ProductDiscount } from './ProductDiscount.tsx';

export function ProductCard({ product }: Readonly<Props>) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-title">{product.title}</div>
      <ProductDiscount price={product.price} discountPercentage={product.discountPercentage} />
      <div className="product-price">$ {product.price}</div>
    </div>
  );
}

interface Props {
  product: Product;
}
