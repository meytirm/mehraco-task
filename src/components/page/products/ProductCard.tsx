import type { Product } from '../../../services/products/products.type.ts';

export function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-title">{product.title}</div>
      <div className="product-discount">
        <div className="product-discount-percentage">{Math.ceil(product.discountPercentage)} %</div>
        <div className="product-discount-price">{product.price}</div>
      </div>
      <div className="product-price">{product.price}</div>
    </div>
  );
}

interface Props {
  product: Product;
}
